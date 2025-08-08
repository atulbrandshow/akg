import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_NODE_URL, IMAGE_PATH } from '@/configs/config';
import { toast } from 'react-toastify';

export default function AddReview() {
    const searchParams = useSearchParams();
    const page_id = searchParams.get("page_id");
    const router = useRouter();

    const [allReviews, setAllReviews] = useState([]);
    const [pageReviews, setPageReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [eventName, setEventName] = useState("");

    useEffect(() => {
        const name = sessionStorage.getItem("faqEventName");
        if (name) {
            setEventName(name);
        }
    }, []);

    useEffect(() => {
        fetchAllReviews();
        if (page_id) {
            fetchPageReviews();
        }
    }, [page_id]);

    const fetchAllReviews = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_NODE_URL}review/get-all`);
            if (!response.ok) {
                throw new Error('Failed to fetch all reviews');
            }
            const data = await response.json();
            setAllReviews(data.data || []);
        } catch (err) {
            console.error("Failed to fetch all reviews:", err);
            toast.error("Failed to load all reviews. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const fetchPageReviews = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_NODE_URL}review/${page_id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch page reviews');
            }
            const data = await response.json();
            setPageReviews(data.data || []);
        } catch (err) {
            console.error("Failed to fetch page reviews:", err);
            toast.error("Failed to load page reviews. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddToPage = async (reviewId) => {
        try {
            const response = await fetch(`${API_NODE_URL}review/${reviewId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`
                },
                credentials: "include",
                body: JSON.stringify({
                    page_id: page_id // For multiple page assignments
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to add review to page");
            }

            toast.success("Review added to page successfully!");
            fetchAllReviews();
            fetchPageReviews();

        } catch (err) {
            console.error("Error adding review to page:", err);
            toast.error(err.message || "Failed to add review to page");
        }
    };

    const filteredAllReviews = allReviews.filter(review => {
        const matchesSearch =
            review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            review.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
            review.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            review.description.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesSearch;
    });

    // Check if a review is assigned to the current page
    const isAssignedToCurrentPage = (review) => {
        if (!page_id) return false;
        return review.page_id === page_id || 
               (review.page_ids && review.page_ids.includes(page_id));
    };

    return (
        <div>
            <div className="py-12">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-novaBold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-1">
                        Student Review Management
                    </h1>
                    <p className="font-novaReg text-gray-600 max-w-3xl mx-auto mb-3">
                        Manage student reviews for this page
                    </p>
                    <div className="font-novaBold">Page: - <span className="text-blue-600 font-novaSemi">{eventName}</span></div>
                </div>

                <div className="mb-8">
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search reviews by name, course, company or description..."
                            className="block w-full font-novaReg pl-10 pr-3 py-4 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* All Reviews Column */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="p-6 bg-gradient-to-r from-indigo-600 to-blue-500">
                            <h2 className="text-2xl font-novaBold text-white">
                                All Reviews ({filteredAllReviews.length})
                            </h2>
                        </div>
                        <div className="p-6">
                            {isLoading ? (
                                <div className="flex justify-center items-center py-12">
                                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
                                </div>
                            ) : filteredAllReviews.length === 0 ? (
                                <div className="text-center py-8">
                                    <svg className="mx-auto h-14 w-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                    </svg>
                                    <h3 className="mt-4 text-lg font-novaSemi text-gray-900">
                                        {searchTerm ? 'No matching reviews found' : 'No reviews available'}
                                    </h3>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {filteredAllReviews.map((review) => {
                                        const isAssigned = isAssignedToCurrentPage(review);
                                        
                                        return (
                                            <div key={review._id} className="p-3 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                                <div className="flex items-start gap-3">
                                                    {review.image ? (
                                                        <img
                                                            src={`${IMAGE_PATH}${review.image}`}
                                                            alt={review.name}
                                                            className="w-10 h-10 rounded-full object-cover border-2 border-white"
                                                        />
                                                    ) : (
                                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center border-2 border-white">
                                                            <span className="text-indigo-600 text-lg font-bold">
                                                                {review.name.charAt(0)}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="flex-1">
                                                        <div className="flex justify-between items-start">
                                                            <h3 className="font-novaSemi text-sm text-gray-900">{review.name}</h3>
                                                            {page_id && !isAssigned && (
                                                                <button
                                                                    onClick={() => handleAddToPage(review._id)}
                                                                    className="p-1.5 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                                                                    title="Add to this page"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-5 w-5"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            )}
                                                        </div>
                                                        <p className="text-xs font-novaSemi text-indigo-600">
                                                            {review.course} • {review.company_name}
                                                        </p>
                                                        <p className="mt-1 text-sm line-clamp-2 font-novaReg text-gray-700">{review.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Page Reviews Column */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="p-6 bg-gradient-to-r from-green-600 to-emerald-500">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-novaBold text-white">
                                    Page Reviews ({pageReviews.length})
                                </h2>
                            </div>
                        </div>
                        <div className="p-6">
                            {isLoading ? (
                                <div className="flex justify-center items-center py-12">
                                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-500"></div>
                                </div>
                            ) : pageReviews.length === 0 ? (
                                <div className="text-center py-8">
                                    <svg className="mx-auto h-14 w-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                    </svg>
                                    <h3 className="mt-4 text-lg font-novaSemi text-gray-900">No reviews for this page yet</h3>
                                    <p className="mt-2 text-gray-500">Add reviews from the right column</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {pageReviews.map((review) => (
                                        <div key={review._id} className="group relative bg-green-50/30 hover:bg-green-100/30 rounded-xl p-3 transition-all duration-200 border border-green-200">
                                            <div className="flex items-start">
                                                {review.image ? (
                                                    <img
                                                        src={IMAGE_PATH + review.image}
                                                        alt={review.name}
                                                        className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white shadow-sm"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 border-2 border-white shadow-sm">
                                                        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 14.75c2.67 0 8 1.34 8 4v1.25H4v-1.25c0-2.66 5.33-4 8-4zm0-9.5c-2.22 0-4 1.78-4 4s1.78 4 4 4 4-1.78 4-4-1.78-4-4-4zm0 6c-1.11 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2z" />
                                                        </svg>
                                                    </div>
                                                )}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-start">
                                                        <h3 className="text-sm font-novaSemi text-gray-900 truncate">{review.name}</h3>
                                                    </div>
                                                    <p className="text-xs text-green-600 font-novaSemi mt-0.5 truncate">
                                                        {review.course} • {review.company_name}
                                                    </p>
                                                    <p className="mt-1 text-sm line-clamp-2 text-gray-700">{review.description}</p>
                                                </div>
                                            </div>
                                            <div className="absolute top-6 right-3">
                                                <div className="p-1.5 bg-green-100 text-green-600 rounded-full">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                </div>
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
    )
}