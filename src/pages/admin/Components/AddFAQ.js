import { API_NODE_URL } from '@/configs/config';
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const AddFAQ = () => {
    const searchParams = useSearchParams();
    const page_id = searchParams.get("page_id");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [createdFaqs, setCreatedFaqs] = useState([]);
    const [fetchingFaqs, setFetchingFaqs] = useState(true);
    const [editingFaq, setEditingFaq] = useState(null);
    const [editQuestion, setEditQuestion] = useState("");
    const [editAnswer, setEditAnswer] = useState("");
    const [deleteLoading, setDeleteLoading] = useState(null);
    const [eventName, setEventName] = useState("");

    useEffect(() => {
        const name = sessionStorage.getItem("faqEventName");
        if (name) {
            setEventName(name);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const payload = {
            page_id,
            question,
            answer
        };

        try {
            const response = await fetch(`${API_NODE_URL}faq/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload),
            });
            const result = await response.json();
            if (result.success) {
                toast.success("FAQ Created Successfully!");
                setQuestion("");
                setAnswer("");
                fetchFAQ();
            } else {
                toast.error(result.message || "Failed to create FAQ");
            }
            setShowForm(false);
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const fetchFAQ = async () => {
        setFetchingFaqs(true);
        try {
            const res = await fetch(`${API_NODE_URL}faq/${page_id}`, {
                credentials: "include"
            });
            const result = await res.json();
            if (result.success && result.data) {
                setCreatedFaqs(result.data);
            } else {
                setCreatedFaqs([]);
            }
        } catch (error) {
            console.error("Error: ", error);
            setCreatedFaqs([]);
        } finally {
            setFetchingFaqs(false);
        }
    };

    const handleEditFaq = (faq, faqIndex) => {
        setEditingFaq(faqIndex);
        setEditQuestion(faq.question);
        setEditAnswer(faq.answer);
    };

    const handleCancelEdit = () => {
        setEditingFaq(null);
        setEditQuestion("");
        setEditAnswer("");
    };

    const handleUpdateFaq = async (faqId) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_NODE_URL}faq/${faqId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    question: editQuestion,
                    answer: editAnswer
                }),
            });
            const result = await response.json();
            if (result.success) {
                toast.success("FAQ Updated Successfully!");
                handleCancelEdit();
                fetchFAQ();
            } else {
                toast.error(result.message || "Failed to update FAQ");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong while updating");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteFaq = async (faqId, faqIndex) => {
        if (!confirm("Are you sure you want to delete this FAQ?")) return;
        setDeleteLoading(faqIndex);
        try {
            const response = await fetch(`${API_NODE_URL}faq/${faqId}`, {
                method: "DELETE",
                credentials: "include",
            });
            const result = await response.json();
            if (result.success) {
                toast.success("FAQ Deleted Successfully!");
                fetchFAQ();
            }
        } catch (error) {
            toast.error("Deletion failed");
        } finally {
            setDeleteLoading(null);
        }
    };

    useEffect(() => {
        if (page_id) fetchFAQ();
    }, [page_id]);

    return (
        <div>
            {/* Header Section */}
            <div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-800 rounded-2xl mb-6 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-novaBold text-gray-900 mb-3">
                            FAQ Management Center
                        </h1>
                        <p className="font-novaReg  text-gray-600 mb-3 max-w-2xl mx-auto">
                            Create, manage, and organize frequently asked questions with our intuitive management system
                        </p>
                        <div className="font-novaBold">Page: - <span className="text-blue-600 font-novaSemi">{eventName}</span></div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div>
                <div className="space-y-5">
                    {/* Form Section */}
                    {showForm && (
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden sticky top-8">
                                <div className="bg-gradient-to-r from-blue-700 to-purple-900 px-8 py-6 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl font-novaBold text-white">Create New FAQ</h2>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setShowForm(false);
                                            setQuestion("");
                                            setAnswer("");
                                        }}
                                        className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-xl transition-all duration-200"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>

                                <div className="p-8">
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="space-y-6">
                                            <div className="group">
                                                <label className="block text-sm font-novaSemi text-gray-800 mb-3">
                                                    Question
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={question}
                                                        onChange={(e) => setQuestion(e.target.value)}
                                                        placeholder="What would you like to know?"
                                                        className="w-full px-4 py-4 border-2 font-novaReg border-gray-200 rounded-xl focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition-all duration-300 text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white"
                                                        required
                                                    />
                                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                                        <svg className="w-5 h-5 text-gray-400 group-focus-within:text-slate-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group">
                                                <label className="block text-sm font-novaSemi text-gray-800 mb-3">
                                                    Answer
                                                </label>
                                                <div className="relative">
                                                    <textarea
                                                        value={answer}
                                                        onChange={(e) => setAnswer(e.target.value)}
                                                        placeholder="Provide a comprehensive and helpful answer..."
                                                        rows={5}
                                                        className="w-full px-4 py-4 border-2 font-novaReg border-gray-200 rounded-xl focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition-all duration-300 text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white resize-none"
                                                        required
                                                    />
                                                    <div className="absolute top-4 right-4">
                                                        <svg className="w-5 h-5 text-gray-400 group-focus-within:text-slate-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`w-full py-4 px-6 rounded-xl text-white font-novaSemi text-lg transition-all duration-300 transform ${loading
                                                ? "bg-gray-400 cursor-not-allowed"
                                                : "bg-gradient-to-r from-blue-600 to-purple-800 hover:from-slate-700 hover:to-slate-900 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                                                }`}
                                        >
                                            {loading ? (
                                                <div className="flex items-center justify-center">
                                                    <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Creating FAQ...
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center">
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                    Create FAQ
                                                </div>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* FAQs List Section */}
                    <div className="h-full">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-800 to-purple-900 px-8 py-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-novaBold text-white">Your FAQs</h2>
                                            <p className="text-slate-200 text-sm">Manage your frequently asked questions</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setShowForm(true);
                                            setQuestion("");
                                            setAnswer("");
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className="px-6 py-3 bg-white text-slate-800 font-novaSemi rounded-xl shadow hover:bg-slate-100 transition-all duration-200 flex items-center"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                        </svg>
                                        Add FAQ
                                    </button>
                                </div>
                            </div>

                            <div className="p-4">
                                {fetchingFaqs ? (
                                    <div className="flex flex-col items-center justify-center py-16">
                                        <div className="relative">
                                            <div className="w-16 h-16 border-4 border-slate-200 border-t-slate-600 rounded-full animate-spin"></div>
                                        </div>
                                        <p className="text-gray-600 mt-4 text-lg">Loading your FAQs...</p>
                                    </div>
                                ) : createdFaqs.length === 0 ? (
                                    <div className="text-center py-16">
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                                            <svg className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-novaBold text-gray-900 mb-3">No FAQs Created Yet</h3>
                                        <p className="text-gray-600 mb-6 max-w-md mx-auto">Start building your knowledge base by creating your first FAQ using the form on the left.</p>
                                        <div className="inline-flex items-center text-slate-600 bg-slate-100 px-6 py-3 rounded-full border border-slate-200">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                            Get started with the creation form
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4 overflow-y-auto pr-2" style={{
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: '#cbd5e1 #f1f5f9'
                                    }}>
                                        {createdFaqs.map((faq, index) => (
                                            <div key={faq._id || index} className="group">
                                                {editingFaq === index ? (
                                                    // Edit Mode
                                                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-2xl border-2 border-slate-200 shadow-lg">
                                                        <div className="flex items-center justify-between mb-6">
                                                            <h3 className="text-xl font-novaBold text-gray-900 flex items-center">
                                                                <svg className="w-6 h-6 mr-2 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                </svg>
                                                                Edit FAQ
                                                            </h3>
                                                            <div className="flex space-x-3">
                                                                <button
                                                                    onClick={() => handleUpdateFaq(faq._id)}
                                                                    disabled={loading}
                                                                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-novaSemi rounded-lg hover:bg-green-700 disabled:opacity-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                                                                >
                                                                    {loading ? (
                                                                        <>
                                                                            <svg className="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
                                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                            </svg>
                                                                            Saving...
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            Save Changes
                                                                        </>
                                                                    )}
                                                                </button>
                                                                <button
                                                                    onClick={handleCancelEdit}
                                                                    className="inline-flex items-center px-4 py-2 bg-gray-500 text-white text-sm font-novaSemi rounded-lg hover:bg-gray-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                                                                >
                                                                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                                    </svg>
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="space-y-6">
                                                            <div>
                                                                <label className="block text-sm font-novaSemi text-gray-700 mb-3">Question</label>
                                                                <input
                                                                    type="text"
                                                                    value={editQuestion}
                                                                    onChange={(e) => setEditQuestion(e.target.value)}
                                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition-all duration-200 bg-white"
                                                                    required
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-novaSemi text-gray-700 mb-3">Answer</label>
                                                                <textarea
                                                                    value={editAnswer}
                                                                    onChange={(e) => setEditAnswer(e.target.value)}
                                                                    rows={4}
                                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition-all duration-200 resize-none bg-white"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    // View Mode
                                                    <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:border-slate-200">
                                                        <details className="group/details">
                                                            <summary className="flex justify-between items-center cursor-pointer list-none p-3 hover:bg-slate-50 rounded-t-2xl transition-all duration-200">
                                                                <div className="flex items-start space-x-4 flex-1">
                                                                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg>
                                                                    </div>
                                                                    <span className="font-novaSemi text-gray-800 text-lg leading-relaxed pr-4">{faq.question}</span>
                                                                </div>
                                                                <div className="flex justify-end space-x-3 px-6">
                                                                    <button
                                                                        onClick={() => handleEditFaq(faq, index)}
                                                                        className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 text-sm font-novaSemi rounded-lg hover:bg-slate-200 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                                                                    >
                                                                        <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                        </svg>
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleDeleteFaq(faq._id, index)}
                                                                        disabled={deleteLoading === index}
                                                                        className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 text-sm font-novaSemi rounded-lg hover:bg-red-200 transition-all duration-200 disabled:opacity-50 shadow-sm hover:shadow-md transform hover:scale-105"
                                                                    >
                                                                        {deleteLoading === index ? (
                                                                            <>
                                                                                <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                                </svg>
                                                                                Deleting...
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                                </svg>
                                                                            </>
                                                                        )}
                                                                    </button>
                                                                </div>
                                                                <svg className="h-6 w-6 text-gray-400 transform group-open/details:rotate-180 transition-transform duration-300 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                                </svg>
                                                            </summary>
                                                            <div className="px-3 pb-6">
                                                                <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-400 shadow-sm">
                                                                    <p className="text-gray-700 leading-snug font-novaReg text-base">{faq.answer}</p>
                                                                </div>
                                                            </div>
                                                        </details>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
            `}</style>
        </div>
    );
};

export default AddFAQ;
