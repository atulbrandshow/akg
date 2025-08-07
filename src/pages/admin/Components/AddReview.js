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

    // Fetch existing reviews on component mount
    useEffect(() => {
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
        fetchReviews();
    }, []);

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
            const response = await fetch(`${API_NODE_URL}review/create`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`
                },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to create review");
            }

            toast.success("Review added successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });

            // Add the new review to the beginning of the list
            setReviews(prev => [data.data, ...prev]);
            
            // Reset form
            setFormData({
                name: "",
                course: "",
                company_name: "",
                description: "",
                image: ""
            });

        } catch (err) {
            console.error("Submission error:", err);
            toast.error(err.message || "Failed to add review. Please try again.", {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <ToastContainer />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Share Your Experience</h1>
                    <p className="text-lg text-gray-600">Help others by sharing your learning journey</p>
                </div>

                {/* Form Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 border border-gray-200">
                    <div className="p-8">
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                                        Course Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                        placeholder="Web Development"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Company/Institution *
                                </label>
                                <input
                                    type="text"
                                    id="company_name"
                                    name="company_name"
                                    value={formData.company_name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    placeholder="ABC University"
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Experience *
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={5}
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    placeholder="Share your learning experience..."
                                />
                            </div>

                            <div>
                                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                                    Profile Image URL
                                </label>
                                <input
                                    type="url"
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    placeholder="https://example.com/your-photo.jpg"
                                />
                                <p className="mt-1 text-xs text-gray-500">Optional - Provide a URL to your profile picture</p>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 px-6 bg-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700 hover:shadow-lg'}`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : "Submit Review"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Reviews Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recent Reviews</h2>
                    
                    {isLoadingReviews ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                        </div>
                    ) : reviews.length === 0 ? (
                        <div className="text-center py-8 bg-white rounded-xl shadow-sm border border-gray-200">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <h3 className="mt-2 text-lg font-medium text-gray-900">No reviews yet</h3>
                            <p className="mt-1 text-gray-500">Be the first to share your experience!</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {reviews.map((review, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                                    <div className="flex items-start">
                                        {review.image ? (
                                            <img 
                                                src={review.image} 
                                                alt={review.name} 
                                                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-indigo-100"
                                            />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 border-2 border-indigo-50">
                                                <svg className="h-6 w-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 14.75c2.67 0 8 1.34 8 4v1.25H4v-1.25c0-2.66 5.33-4 8-4zm0-9.5c-2.22 0-4 1.78-4 4s1.78 4 4 4 4-1.78 4-4-1.78-4-4-4zm0 6c-1.11 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2z"/>
                                                </svg>
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-semibold text-gray-900">{review.name}</h3>
                                                <span className="text-xs text-gray-500">
                                                    {new Date(review.createdAt || new Date()).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <p className="text-sm text-indigo-600 font-medium mt-1">
                                                {review.course} • {review.company_name}
                                            </p>
                                            <p className="mt-2 text-gray-700">{review.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}