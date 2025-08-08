import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_NODE_URL, IMAGE_PATH } from '@/configs/config';
import { toast } from 'react-toastify';

export default function AddTestimonial() {
    const searchParams = useSearchParams();
    const page_id = searchParams.get("page_id");
    const router = useRouter();

    const [allTestimonials, setAllTestimonials] = useState([]);
    const [pageTestimonials, setPageTestimonials] = useState([]);
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
        fetchAllTestimonials();
        if (page_id) {
            fetchPageTestimonials();
        }
    }, [page_id]);

    const fetchAllTestimonials = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_NODE_URL}testimonial/get-all`);
            if (!response.ok) {
                throw new Error('Failed to fetch all testimonials');
            }
            const data = await response.json();
            setAllTestimonials(data.data || []);
        } catch (err) {
            console.error("Failed to fetch all testimonials:", err);
            toast.error("Failed to load all testimonials. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const fetchPageTestimonials = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_NODE_URL}testimonial/${page_id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch page testimonials');
            }
            const data = await response.json();
            setPageTestimonials(data.data || []);
        } catch (err) {
            console.error("Failed to fetch page testimonials:", err);
            toast.error("Failed to load page testimonials. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

   const handleAddToPage = async (testimonialId) => {
    try {
        const response = await fetch(`${API_NODE_URL}testimonial/add-to-page`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token') || ''}`
            },
            body: JSON.stringify({
                testimonial_id: testimonialId,
                page_id: page_id
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to add testimonial to page");
        }

        toast.success("Testimonial added to page successfully!");
        fetchAllTestimonials();
        fetchPageTestimonials();

    } catch (err) {
        console.error("Error adding testimonial to page:", err);
        toast.error(err.message || "Failed to add testimonial to page");
    }
};

    const filteredAllTestimonials = allTestimonials.filter(testimonial =>
        testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Check if testimonial is already added to current page
    const isTestimonialAdded = (testimonial) => {
        return testimonial.page_ids && testimonial.page_ids.includes(page_id);
    };

    return (
        <div>
            <div className="py-12">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-novaBold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-1">
                        Testimonial Management
                    </h1>
                    <p className="font-novaReg text-gray-600 max-w-3xl mx-auto mb-3">
                        Manage testimonials for this page
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
                            placeholder="Search testimonials by name, position, company or description..."
                            className="block w-full font-novaReg pl-10 pr-3 py-4 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* All Testimonials Column */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="p-6 bg-gradient-to-r from-indigo-600 to-blue-500">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-novaBold text-white">
                                    All Testimonials ({filteredAllTestimonials.length})
                                </h2>
                            </div>
                        </div>
                        <div className="p-6">
                            {isLoading ? (
                                <div className="flex justify-center items-center py-12">
                                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
                                </div>
                            ) : filteredAllTestimonials.length === 0 ? (
                                <div className="text-center py-8">
                                    <svg className="mx-auto h-14 w-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                    </svg>
                                    <h3 className="mt-4 text-lg font-novaSemi text-gray-900">
                                        {searchTerm ? 'No matching testimonials found' : 'No testimonials yet'}
                                    </h3>
                                    <p className="mt-2 text-gray-500">
                                        {searchTerm ? 'Try a different search term' : 'Create testimonials in the admin panel'}
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {filteredAllTestimonials.map((testimonial) => (
                                        <div key={testimonial._id} className="group relative bg-gray-50/50 hover:bg-gray-100/50 rounded-xl p-3 transition-all duration-200 border border-gray-200">
                                            <div className="flex items-start">
                                                {testimonial.image ? (
                                                    <img
                                                        src={IMAGE_PATH + testimonial.image}
                                                        alt={testimonial.name}
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
                                                        <h3 className="text-sm font-novaSemi text-gray-900 truncate">{testimonial.name}</h3>
                                                        <div className="flex items-center ml-2">
                                                            {[...Array(5)].map((_, i) => (
                                                                <svg
                                                                    key={i}
                                                                    className={`h-3 w-3 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-indigo-600 font-novaSemi mt-0.5 truncate">
                                                        {testimonial.position} • {testimonial.company_name}
                                                        {testimonial.company_city && `, ${testimonial.company_city}`}
                                                    </p>
                                                    <p className="mt-1 font-novaReg line-clamp-2 text-sm text-gray-700">{testimonial.description}</p>
                                                </div>
                                            </div>

                                            {page_id && (isTestimonialAdded(testimonial) ? (
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
                                            ) : (
                                                <div className="absolute top-6 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() => handleAddToPage(testimonial._id)}
                                                        className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full shadow-md transition-all duration-200"
                                                        title="Add to this page"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5 stroke-2"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="3"
                                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Page Testimonials Column */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="p-6 bg-gradient-to-r from-green-600 to-emerald-500">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-novaBold text-white">
                                    Page Testimonials ({pageTestimonials.length})
                                </h2>
                            </div>
                        </div>
                        <div className="p-6">
                            {isLoading ? (
                                <div className="flex justify-center items-center py-12">
                                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-500"></div>
                                </div>
                            ) : pageTestimonials.length === 0 ? (
                                <div className="text-center py-8">
                                    <svg className="mx-auto h-14 w-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                    </svg>
                                    <h3 className="mt-4 text-lg font-novaSemi text-gray-900">No testimonials for this page yet</h3>
                                    <p className="mt-2 text-gray-500">Add testimonials from the right column</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {pageTestimonials.map((testimonial) => (
                                        <div key={testimonial._id} className="group relative bg-green-50/30 hover:bg-green-100/30 rounded-xl p-3 transition-all duration-200 border border-green-200">
                                            <div className="flex items-start">
                                                {testimonial.image ? (
                                                    <img
                                                        src={IMAGE_PATH + testimonial.image}
                                                        alt={testimonial.name}
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
                                                        <h3 className="text-sm font-novaSemi text-gray-900 truncate">{testimonial.name}</h3>
                                                        <div className="flex items-center ml-2">
                                                            {[...Array(5)].map((_, i) => (
                                                                <svg
                                                                    key={i}
                                                                    className={`h-3 w-3 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-green-600 font-novaSemi mt-0.5 truncate">
                                                        {testimonial.position} • {testimonial.company_name}
                                                        {testimonial.company_city && `, ${testimonial.company_city}`}
                                                    </p>
                                                    <p className="mt-1 text-sm line-clamp-2 text-gray-700">{testimonial.description}</p>
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