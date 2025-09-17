import { useState, useEffect } from "react";
import { API_NODE_URL, IMAGE_PATH } from '@/configs/config';
import { toast } from 'react-toastify';
import { uploadImages } from "@/utills/ImageUpload";

export default function StudentReview() {
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
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");
    const [isUploadingImage, setIsUploadingImage] = useState(false);

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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            if (!file.type?.startsWith('image/')) {
                toast.error("Please select a valid image file", {
                    position: "top-right",
                    autoClose: 3000,
                });
                return;
            }
            
            // Validate file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                toast.error("Image size should be less than 5MB", {
                    position: "top-right",
                    autoClose: 3000,
                });
                return;
            }

            setSelectedFile(file);
            
            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setSelectedFile(null);
        setImagePreview("");
        setFormData(prev => ({ ...prev, image: "" }));
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
        setError("");
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        let imageUrl = formData.image;

        try {
            // Upload image if a new file is selected
            if (selectedFile) {
                setIsUploadingImage(true);
                try {
                    imageUrl = await uploadImages(selectedFile);
                } catch (uploadError) {
                    console.error("Image upload failed:", uploadError);
                    imageUrl = "";
                } finally {
                    setIsUploadingImage(false);
                }
            }

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
                body: JSON.stringify({
                    ...formData,
                    image: imageUrl
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Failed to submit review");
            }

            toast.success(`Review ${editingReview ? 'updated' : 'added'} successfully!`);
            
            fetchReviews(); // Refresh the list
            resetForm();
            setShowForm(false);
        } catch (err) {
            console.error("Submission error:", err);
            toast.error(err.message || "Failed to submit review. Please try again.");
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
        setSelectedFile(null);
        setImagePreview("");
        setError("");
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
        if (review.image) {
            setImagePreview(IMAGE_PATH + review.image);
        }
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

            toast.success("Review deleted successfully!");
            
            fetchReviews(); // Refresh the list
            if (editingReview?._id === reviewId) {
                resetForm();
                setShowForm(false);
            }
        } catch (err) {
            console.error("Delete error:", err);
            toast.error(err.message || "Failed to delete review");
        }
    };

    return (
        <div className="">
            <div className=" py-8">
                {/* Enhanced Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-2 shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                        </svg>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-novaBold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-2 leading-tight">
                        Student Reviews
                    </h1>
                    <p className="text-slate-600 max-w-3xl mx-auto font-novaReg leading-relaxed">
                        {editingReview ? 'Update your review and share your experience' : 'Share your learning journey and inspire others'}
                    </p>
                </div>

                {/* Enhanced Form Section */}
                {showForm && (
                    <div className="max-w-4xl mb-12">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl font-novaBold text-white">
                                            {editingReview ? 'Edit Review' : 'Create New Review'}
                                        </h2>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setShowForm(false);
                                            resetForm();
                                        }}
                                        className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-xl transition-all duration-200"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="p-8">
                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl flex items-center">
                                        <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span className="font-novaSemi">{error}</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Image Upload Section */}
                                    <div className="space-y-4">
                                        <label className="block text-sm font-novaSemi text-slate-700">
                                            Profile Photo
                                        </label>
                                        
                                        {!imagePreview ? (
                                            <div className="relative">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                    id="image-upload"
                                                />
                                                <label
                                                    htmlFor="image-upload"
                                                    className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-all duration-200 group"
                                                >
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg className="w-12 h-12 mb-4 text-slate-400 group-hover:text-slate-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                                        </svg>
                                                        <p className="mb-2 text-sm text-slate-500 group-hover:text-slate-600">
                                                            <span className="font-novaSemi">Click to upload</span> or drag and drop
                                                        </p>
                                                        <p className="text-xs text-slate-400">PNG, JPG, GIF up to 5MB</p>
                                                    </div>
                                                </label>
                                            </div>
                                        ) : (
                                            <div className="relative inline-block">
                                                <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                                                    <img
                                                        src={imagePreview || "/placeholder.svg"}
                                                        alt="Preview"
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                                        <button
                                                            type="button"
                                                            onClick={removeImage}
                                                            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <label
                                                    htmlFor="image-upload"
                                                    className="absolute -bottom-2 -right-2 p-2 bg-blue-600 text-white rounded-full cursor-pointer hover:bg-blue-700 transition-colors shadow-lg"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                                    </svg>
                                                </label>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                    id="image-upload"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Form Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-sm font-novaSemi text-slate-700">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 text-base rounded-xl font-novaReg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="course" className="block text-sm font-novaSemi text-slate-700">
                                                Course Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="course"
                                                name="course"
                                                value={formData.course}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 text-base rounded-xl font-novaReg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                                placeholder="e.g., Full Stack Development"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="company_name" className="block text-sm font-novaSemi text-slate-700">
                                            Company/Institution <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="company_name"
                                            name="company_name"
                                            value={formData.company_name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 text-base rounded-xl font-novaReg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                            placeholder="e.g., Tech University, Google, Microsoft"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="description" className="block text-sm font-novaSemi text-slate-700">
                                            Your Learning Experience <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={6}
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 text-base rounded-xl font-novaReg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                                            placeholder="Share your learning journey, key takeaways, and how this course helped you grow professionally..."
                                        />
                                        <div className="text-right">
                                            <span className="text-xs text-slate-500">
                                                {formData.description.length}/500 characters
                                            </span>
                                        </div>
                                    </div>

                                    {/* Submit Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || isUploadingImage}
                                            className={`flex-1 py-4 px-6 text-lg font-novaSemi rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 ${
                                                editingReview
                                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white'
                                                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
                                            } ${(isSubmitting || isUploadingImage) ? 'opacity-70 cursor-not-allowed transform-none' : ''}`}
                                        >
                                            {isSubmitting || isUploadingImage ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    {isUploadingImage ? 'Uploading Image...' : (editingReview ? 'Updating...' : 'Submitting...')}
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
                                                className="py-4 px-6 text-lg font-novaSemi text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl shadow-lg transition-all duration-300"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {/* Enhanced Reviews Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                    <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-novaBold text-white">Student Reviews</h2>
                                    <p className="text-slate-300 text-sm">
                                        {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'} shared
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setShowForm(true);
                                    resetForm();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="px-6 py-3 bg-white text-slate-800 font-novaSemi rounded-xl shadow hover:bg-slate-100 transition-all duration-200 flex items-center"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                                Add Review
                            </button>
                        </div>
                    </div>

                    <div className="p-8">
                        {isLoadingReviews ? (
                            <div className="flex flex-col items-center justify-center py-16">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                                <p className="text-slate-600">Loading reviews...</p>
                            </div>
                        ) : reviews.length === 0 ? (
                            <div className="text-center py-16">
                                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-novaBold text-slate-800 mb-2">No reviews yet</h3>
                                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                                    Be the first to share your learning experience and inspire others on their journey.
                                </p>
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-novaSemi rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Share Your Experience
                                </button>
                            </div>
                        ) : (
                            <div className="grid gap-6">
                                {reviews.map((review) => (
                                    <div key={review._id} className="group relative bg-gradient-to-br from-white to-slate-50 hover:from-slate-50 hover:to-white rounded-2xl p-6 transition-all duration-300 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg">
                                        <div className="flex items-start space-x-4">
                                            {review.image ? (
                                                <img
                                                    src={IMAGE_PATH + review.image || "/placeholder.svg"}
                                                    alt={review.name}
                                                    className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md flex-shrink-0"
                                                />
                                            ) : (
                                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center border-2 border-white shadow-md flex-shrink-0">
                                                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 14.75c2.67 0 8 1.34 8 4v1.25H4v-1.25c0-2.66 5.33-4 8-4zm0-9.5c-2.22 0-4 1.78-4 4s1.78 4 4 4 4-1.78 4-4-1.78-4-4-4zm0 6c-1.11 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2z" />
                                                    </svg>
                                                </div>
                                            )}
                                            
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg font-novaBold text-slate-800 truncate pr-4">{review.name}</h3>
                                                    <span className="text-sm text-slate-500 font-novaSemi whitespace-nowrap">
                                                        {new Date(review.createdAt || new Date()).toLocaleDateString('en-US', { 
                                                            month: 'short', 
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                                
                                                <div className="flex items-center space-x-2 mb-3">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-novaSemi bg-blue-100 text-blue-800">
                                                        {review.course}
                                                    </span>
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-novaSemi bg-slate-100 text-slate-700">
                                                        {review.company_name}
                                                    </span>
                                                </div>
                                                
                                                <p className="text-slate-700 font-novaReg leading-relaxed">{review.description}</p>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <button
                                                onClick={() => handleEdit(review)}
                                                className="p-2 bg-white text-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-200 border border-blue-200"
                                                title="Edit Review"
                                            >
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(review._id)}
                                                className="p-2 bg-white text-red-600 rounded-lg shadow-md hover:bg-red-50 transition-all duration-200 border border-red-200"
                                                title="Delete Review"
                                            >
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    );
}
