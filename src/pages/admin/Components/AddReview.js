import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_NODE_URL } from '@/configs/config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddReview() {
    const searchParams = useSearchParams();
    const page_id = searchParams.get("page_id");
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        course: "",
        company_name: "",
        description: "",
        image: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [reviews, setReviews] = useState([]);
    const [isLoadingReviews, setIsLoadingReviews] = useState(true);
    const [editingReview, setEditingReview] = useState(null);
    const [showForm, setShowForm] = useState(false);

    // Fetch existing reviews on component mount
    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        setIsLoadingReviews(true);
        try {
            const response = await fetch(`${API_NODE_URL}review/get-all`);
            if (!response.ok) {
                throw new Error('Failed to fetch reviews');
            }
            const data = await response.json();
            setReviews(data.data || []);
        } catch (err) {
            console.error("Failed to fetch reviews:", err);
            toast.error("Failed to load reviews. Please try again later.", {
                position: "top-right",
                autoClose: 5000,
            });
        } finally {
            setIsLoadingReviews(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            setError("Name is required");
            return false;
        }
        if (!formData.course.trim()) {
            setError("Course name is required");
            return false;
        }
        if (!formData.company_name.trim()) {
            setError("Company name is required");
            return false;
        }
        if (!formData.description.trim()) {
            setError("Description is required");
            return false;
        }
        if (formData.image && !/^https?:\/\/.+\..+/.test(formData.image)) {
            setError("Please enter a valid image URL");
            return false;
        }
        setError("");
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const url = editingReview
                ? `${API_NODE_URL}review/${editingReview._id}`
                : `${API_NODE_URL}review/create`;

            const method = editingReview ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`
                },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to submit review");
            }

            toast.success(`Review ${editingReview ? 'updated' : 'added'} successfully!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });

            fetchReviews(); // Refresh the list
            resetForm();
            setShowForm(false);

        } catch (err) {
            console.error("Submission error:", err);
            toast.error(err.message || "Failed to submit review. Please try again.", {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            course: "",
            company_name: "",
            description: "",
            image: ""
        });
        setEditingReview(null);
    };

    const handleEdit = (review) => {
        setEditingReview(review);
        setFormData({
            name: review.name,
            course: review.course,
            company_name: review.company_name,
            description: review.description,
            image: review.image || ""
        });
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (reviewId) => {
        if (!window.confirm("Are you sure you want to delete this review?")) {
            return;
        }

        try {
            const response = await fetch(`${API_NODE_URL}review/${reviewId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`
                },
                credentials: "include",
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to delete review");
            }

            toast.success("Review deleted successfully!", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
            });

            fetchReviews(); // Refresh the list
            if (editingReview?._id === reviewId) {
                resetForm();
                setShowForm(false);
            }

        } catch (err) {
            console.error("Delete error:", err);
            toast.error(err.message || "Failed to delete review", {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <ToastContainer position="top-center" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header with gradient */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-4">
                        Student Review Management
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {editingReview ? 'Edit existing review' : 'Manage and add student reviews'}
                    </p>
                    
                    {!showForm && (
                        <button
                            onClick={() => {
                                setShowForm(true);
                                resetForm();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-xl shadow-md transition-all duration-300"
                        >
                            Add New Review
                        </button>
                    )}
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 gap-12">
                    {/* Form Section - Only shown when showForm is true */}
                    {showForm && (
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="p-10">
                                <div className="flex justify-between items-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        {editingReview ? 'Edit Review' : 'Add New Review'}
                                    </h2>
                                    <button
                                        onClick={() => {
                                            setShowForm(false);
                                            resetForm();
                                        }}
                                        className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {error && (
                                    <div className="mb-8 p-4 bg-red-50/80 backdrop-blur-sm text-red-700 rounded-xl border border-red-200 flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Your Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-5 py-4 text-base rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-gray-300"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                                                Course Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="course"
                                                name="course"
                                                value={formData.course}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-5 py-4 text-base rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-gray-300"
                                                placeholder="Web Development"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
                                            Company/Institution <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="company_name"
                                            name="company_name"
                                            value={formData.company_name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 text-base rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-gray-300"
                                            placeholder="ABC University"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Your Experience <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={6}
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 text-base rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-gray-300"
                                            placeholder="Share your learning journey..."
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                            Upload Image 
                                        </label>
                                        <input
                                            type="url"
                                            id="image"
                                            name="image"
                                            value={formData.image}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 text-base rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-gray-300"
                                            placeholder="https://example.com/your-photo.jpg"
                                        />
                                        <p className="mt-2 text-xs text-gray-500">We recommend using a square image (1:1 ratio)</p>
                                    </div>

                                    <div className="pt-2 flex gap-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`flex-1 py-4 px-6 text-lg font-medium rounded-xl shadow-md transition-all duration-300 ${editingReview
                                                    ? 'bg-amber-500 hover:bg-amber-600 text-white'
                                                    : 'bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white'
                                                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    {editingReview ? 'Updating...' : 'Submitting...'}
                                                </span>
                                            ) : editingReview ? 'Update Review' : 'Submit Review'}
                                        </button>

                                        {editingReview && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    resetForm();
                                                    setShowForm(false);
                                                }}
                                                className="py-4 px-6 text-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl shadow-md transition-all duration-300"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Reviews Section - Always shown */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="p-6 bg-gradient-to-r from-indigo-600 to-blue-500">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-white">All Reviews</h2>
                                <button
                                    onClick={() => {
                                        setShowForm(true);
                                        resetForm();
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="px-4 py-2 bg-white text-indigo-600 font-medium rounded-lg shadow hover:bg-gray-100 transition"
                                >
                                    Add Review
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            {isLoadingReviews ? (
                                <div className="flex justify-center items-center py-12">
                                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
                                </div>
                            ) : reviews.length === 0 ? (
                                <div className="text-center py-8">
                                    <svg className="mx-auto h-14 w-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                    </svg>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">No reviews yet</h3>
                                    <p className="mt-2 text-gray-500">Your review could be the first!</p>
                                    <button
                                        onClick={() => setShowForm(true)}
                                        className="mt-4 px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
                                    >
                                        Add First Review
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {reviews.map((review) => (
                                        <div key={review._id} className="group relative bg-gray-50/50 hover:bg-gray-100/50 rounded-xl p-5 transition-all duration-200 border border-gray-200">
                                            <div className="flex items-start">
                                                {review.image ? (
                                                    <img
                                                        src={review.image}
                                                        alt={review.name}
                                                        className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white shadow-sm"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3 border-2 border-white shadow-sm">
                                                        <svg className="h-5 w-5 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 14.75c2.67 0 8 1.34 8 4v1.25H4v-1.25c0-2.66 5.33-4 8-4zm0-9.5c-2.22 0-4 1.78-4 4s1.78 4 4 4 4-1.78 4-4-1.78-4-4-4zm0 6c-1.11 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2z" />
                                                        </svg>
                                                    </div>
                                                )}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-start">
                                                        <h3 className="text-sm font-semibold text-gray-900 truncate">{review.name}</h3>
                                                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                                                            {new Date(review.createdAt || new Date()).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-indigo-600 font-medium mt-0.5 truncate">
                                                        {review.course} • {review.company_name}
                                                    </p>
                                                    <p className="mt-2 text-sm text-gray-700">{review.description}</p>
                                                </div>
                                            </div>

                                            {/* Edit/Delete Buttons - Shown on hover */}
                                            <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => handleEdit(review)}
                                                    className="p-1.5 bg-white text-indigo-600 rounded-lg shadow-sm hover:bg-indigo-50 transition"
                                                    title="Edit"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(review._id)}
                                                    className="p-1.5 bg-white text-red-600 rounded-lg shadow-sm hover:bg-red-50 transition"
                                                    title="Delete"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}