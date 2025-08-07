import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_NODE_URL, IMAGE_PATH } from '@/configs/config';
import { toast } from 'react-toastify';
import { uploadImages } from "@/utills/ImageUpload";

export default function TestimonialManagement() {
    const searchParams = useSearchParams();
    const page_id = searchParams.get("page_id");
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        rating: 5,
        position: "",
        description: "",
        company_name: "",
        company_city: "",
        company_country: "",
        image: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [testimonials, setTestimonials] = useState([]);
    const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
    const [editingTestimonial, setEditingTestimonial] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        setIsLoadingTestimonials(true);
        try {
            const response = await fetch(`${API_NODE_URL}testimonial/get-all`);
            if (!response.ok) {
                throw new Error('Failed to fetch testimonials');
            }
            const data = await response.json();
            setTestimonials(data.data || []);
        } catch (err) {
            console.error("Failed to fetch testimonials:", err);
            toast.error("Failed to load testimonials. Please try again later.");
        } finally {
            setIsLoadingTestimonials(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageUpload = async (file) => {
        if (!file) return;

        setIsUploadingImage(true);
        try {
            const uploadedUrl = await uploadImages(file);
            setFormData(prev => ({ ...prev, image: uploadedUrl }));
            setImagePreview(URL.createObjectURL(file));
        } catch (error) {
            toast.error("Failed to upload image. Please try again.");
            console.error("Image upload error:", error);
        } finally {
            setIsUploadingImage(false);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            handleImageUpload(file);
        }
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            setImageFile(file);
            handleImageUpload(file);
        }
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            setError("Name is required");
            return false;
        }
        if (formData.rating < 1 || formData.rating > 5) {
            setError("Rating must be between 1 and 5");
            return false;
        }
        if (!formData.position.trim()) {
            setError("Position is required");
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
        try {
            const url = editingTestimonial
                ? `${API_NODE_URL}testimonial/${editingTestimonial._id}`
                : `${API_NODE_URL}testimonial/create`;
            const method = editingTestimonial ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`
                },
                credentials: "include",
                body: JSON.stringify({
                    ...formData,
                    page_id: page_id || undefined
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Failed to submit testimonial");
            }

            toast.success(`Testimonial ${editingTestimonial ? 'updated' : 'added'} successfully!`);
            fetchTestimonials();
            resetForm();
            setShowForm(false);
        } catch (err) {
            console.error("Submission error:", err);
            toast.error(err.message || "Failed to submit testimonial. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            rating: 5,
            position: "",
            description: "",
            company_name: "",
            company_city: "",
            company_country: "",
            image: ""
        });
        setEditingTestimonial(null);
        setImageFile(null);
        setImagePreview("");
    };

    const handleEdit = (testimonial) => {
        setEditingTestimonial(testimonial);
        setFormData({
            name: testimonial.name,
            rating: testimonial.rating,
            position: testimonial.position,
            description: testimonial.description,
            company_name: testimonial.company_name,
            company_city: testimonial.company_city || "",
            company_country: testimonial.company_country || "",
            image: testimonial.image || ""
        });
        setImagePreview(IMAGE_PATH + testimonial.image || "");
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (testimonialId) => {
        if (!window.confirm("Are you sure you want to delete this testimonial?")) {
            return;
        }

        try {
            const response = await fetch(`${API_NODE_URL}testimonial/${testimonialId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`
                },
                credentials: "include",
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Failed to delete testimonial");
            }

            toast.success("Testimonial deleted successfully!");
            fetchTestimonials();
            if (editingTestimonial?._id === testimonialId) {
                resetForm();
                setShowForm(false);
            }
        } catch (err) {
            console.error("Delete error:", err);
            toast.error(err.message || "Failed to delete testimonial");
        }
    };

    const StarRating = ({ rating, size = "w-5 h-5" }) => (
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`${size} ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );

    return (
        <div className="pb-10">
            <div>
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-novaBold text-gray-900 mb-1">
                        Testimonial Management
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto font-novaReg">
                        Manage customer testimonials and showcase social proof
                    </p>
                </div>

                {/* Form Section */}
                {showForm && (
                    <div className="max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-200 mb-12">
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-novaBold text-gray-900">
                                    {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
                                </h2>
                                <button
                                    onClick={() => {
                                        setShowForm(false);
                                        resetForm();
                                    }}
                                    className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {error && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Image Upload Section */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-novaSemi text-gray-700">
                                        Profile Image
                                    </label>

                                    <div
                                        className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${dragActive
                                                ? 'border-blue-400 bg-blue-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                    >
                                        {imagePreview || formData.image ? (
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={imagePreview || formData.image}
                                                    alt="Preview"
                                                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                                                />
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-600">Image uploaded successfully</p>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setImagePreview("");
                                                            setFormData(prev => ({ ...prev, image: "" }));
                                                            setImageFile(null);
                                                        }}
                                                        className="text-sm text-red-600 hover:text-red-800"
                                                    >
                                                        Remove image
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-center">
                                                {isUploadingImage ? (
                                                    <div className="flex flex-col items-center">
                                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                                                        <p className="text-sm text-gray-600">Uploading image...</p>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <div className="mt-4">
                                                            <label htmlFor="file-upload" className="cursor-pointer">
                                                                <span className="mt-2 block text-sm font-novaSemi text-gray-900">
                                                                    Drop an image here, or{' '}
                                                                    <span className="text-blue-600 hover:text-blue-500">browse</span>
                                                                </span>
                                                                <input
                                                                    id="file-upload"
                                                                    name="file-upload"
                                                                    type="file"
                                                                    className="sr-only"
                                                                    accept="image/*"
                                                                    onChange={handleFileChange}
                                                                />
                                                            </label>
                                                            <p className="mt-1 text-xs font-novaReg text-gray-500">
                                                                PNG, JPG, GIF up to 10MB
                                                            </p>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="rating" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                            Rating <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="rating"
                                            name="rating"
                                            value={formData.rating}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        >
                                            {[1, 2, 3, 4, 5].map(num => (
                                                <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="position" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                            Position <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="position"
                                            name="position"
                                            value={formData.position}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="CEO"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company_name" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                            Company Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="company_name"
                                            name="company_name"
                                            value={formData.company_name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="Tech Corp"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company_city" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="company_city"
                                            name="company_city"
                                            value={formData.company_city}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="San Francisco"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company_country" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            id="company_country"
                                            name="company_country"
                                            value={formData.company_country}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="USA"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                        Testimonial Content <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={4}
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Share your experience with our product or service..."
                                    />
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || isUploadingImage}
                                        className={`flex-1 py-3 px-6 text-white font-novaSemi rounded-lg shadow-lg transition-all duration-200 ${editingTestimonial
                                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
                                                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                                            } ${(isSubmitting || isUploadingImage) ? 'opacity-70 cursor-not-allowed' : 'transform hover:scale-105'}`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                {editingTestimonial ? 'Updating...' : 'Submitting...'}
                                            </span>
                                        ) : editingTestimonial ? 'Update Testimonial' : 'Add Testimonial'}
                                    </button>

                                    {editingTestimonial && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                resetForm();
                                                setShowForm(false);
                                            }}
                                            className="py-3 px-6 text-gray-700 bg-gray-100 hover:bg-gray-200 font-novaSemi rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Testimonials Grid */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200">
                    <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-novaBold text-white">Customer Testimonials</h2>
                            <button
                                onClick={() => {
                                    setShowForm(true);
                                    resetForm();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="flex items-center px-4 py-2 bg-white text-blue-600 font-novaSemi rounded-lg shadow hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                Add New
                            </button>
                        </div>
                    </div>

                    <div className="p-6">
                        {isLoadingTestimonials ? (
                            <div className="flex justify-center items-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                            </div>
                        ) : testimonials.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-novaSemi text-gray-900 mb-2">No testimonials yet</h3>
                                <p className="text-gray-500 mb-4">Start building social proof by adding your first testimonial</p>
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-novaSemi rounded-lg shadow hover:bg-blue-700 transition-colors"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add First Testimonial
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial._id} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                        {/* Quote Icon */}
                                        <div className="absolute top-4 right-4 opacity-10">
                                            <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>

                                        {/* Rating */}
                                        <div className="mb-4">
                                            <StarRating rating={testimonial.rating} />
                                        </div>

                                        {/* Testimonial Content */}
                                        <blockquote className="text-gray-700 font-novaReg line-clamp-2 mb-6 leading-relaxed">
                                            "{testimonial.description}"
                                        </blockquote>

                                        {/* Author Info */}
                                        <div className="flex items-center">
                                            {testimonial.image ? (
                                                <img
                                                    src={IMAGE_PATH + testimonial.image || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 mr-4"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-4">
                                                    <span className="text-white font-novaSemi text-lg">
                                                        {testimonial.name.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-novaSemi text-gray-900 truncate">{testimonial.name}</h4>
                                                <p className="text-sm text-blue-600 font-novaSemi truncate">
                                                    {testimonial.position}
                                                </p>
                                                <p className="text-xs text-gray-500 font-novaSemi truncate">
                                                    {testimonial.company_name}
                                                    {testimonial.company_city && `, ${testimonial.company_city}`}
                                                    {testimonial.company_country && `, ${testimonial.company_country}`}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => handleEdit(testimonial)}
                                                className="p-2 bg-white text-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition-colors"
                                                title="Edit testimonial"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(testimonial._id)}
                                                className="p-2 bg-white text-red-600 rounded-lg shadow-md hover:bg-red-50 transition-colors"
                                                title="Delete testimonial"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
