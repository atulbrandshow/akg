import { API_NODE_URL } from '@/configs/config';
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const AddFAQ = () => {
    const searchParams = useSearchParams();
    const page_id = searchParams.get("page_id");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);
    const [createdFaqs, setCreatedFaqs] = useState([]);
    const [fetchingFaqs, setFetchingFaqs] = useState(true);
    const [editingFaq, setEditingFaq] = useState(null);
    const [editQuestion, setEditQuestion] = useState("");
    const [editAnswer, setEditAnswer] = useState("");
    const [deleteLoading, setDeleteLoading] = useState(null);

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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        FAQ Management System
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">
                        Create and manage frequently asked questions for your page
                    </p>
                    <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm border">
                        <span className="text-sm text-gray-500 mr-2">Page ID:</span>
                        <span className="font-mono text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                            {page_id || 'Not specified'}
                        </span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Form Section */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                            <h2 className="text-xl font-semibold text-white">Create New FAQ</h2>
                        </div>

                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Single Question & Answer */}
                                <div className="p-5 border-2 border-gray-100 rounded-xl bg-gradient-to-br from-gray-50 to-white">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Question
                                            </label>
                                            <input
                                                type="text"
                                                value={question}
                                                onChange={(e) => setQuestion(e.target.value)}
                                                placeholder="What would you like to know?"
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Answer
                                            </label>
                                            <textarea
                                                value={answer}
                                                onChange={(e) => setAnswer(e.target.value)}
                                                placeholder="Provide a detailed answer..."
                                                rows={3}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-400 resize-none"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full py-3 px-4 rounded-lg text-white font-semibold ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
                                >
                                    {loading ? "Creating..." : "Create FAQ"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Created FAQs Section */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
                            <h2 className="text-xl font-semibold text-white flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Your FAQs
                            </h2>
                        </div>

                        <div className="p-6">
                            {fetchingFaqs ? (
                                <div className="flex items-center justify-center py-12">
                                    <div className="flex items-center space-x-3">
                                        <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span className="text-gray-600">Loading FAQs...</span>
                                    </div>
                                </div>
                            ) : createdFaqs.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                                        <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs Yet</h3>
                                    <p className="text-gray-500 mb-4">Create your first FAQ to get started</p>
                                    <div className="inline-flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                        Use the form on the left
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4 max-h-[65vh] overflow-y-auto custom-scrollbar">
                                    {createdFaqs.map((faq, index) => (
                                        <div key={faq._id || index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                            {editingFaq === index ? (
                                                // Edit Mode
                                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h3 className="text-lg font-semibold text-gray-900">Edit FAQ</h3>
                                                        <div className="flex space-x-2">
                                                            <button
                                                                onClick={() => handleUpdateFaq(faq._id)}
                                                                disabled={loading}
                                                                className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 transition-all duration-200"
                                                            >
                                                                {loading ? (
                                                                    <>
                                                                        <svg className="animate-spin h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24">
                                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                        </svg>
                                                                        Saving...
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                        </svg>
                                                                        Save
                                                                    </>
                                                                )}
                                                            </button>
                                                            <button
                                                                onClick={handleCancelEdit}
                                                                className="inline-flex items-center px-3 py-1.5 bg-gray-500 text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition-all duration-200"
                                                            >
                                                                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Edit Question */}
                                                    <div className="mb-4">
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
                                                        <input
                                                            type="text"
                                                            value={editQuestion}
                                                            onChange={(e) => setEditQuestion(e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-200"
                                                            required
                                                        />
                                                    </div>
                                                    
                                                    {/* Edit Answer */}
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Answer</label>
                                                        <textarea
                                                            value={editAnswer}
                                                            onChange={(e) => setEditAnswer(e.target.value)}
                                                            rows={3}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-200 resize-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                // View Mode
                                                <>
                                                    <details className="group border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-200 bg-gradient-to-br from-gray-50 to-white">
                                                        <summary className="flex justify-between items-center cursor-pointer list-none p-4 hover:bg-blue-50 rounded-lg transition-all duration-200">
                                                            <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                                                            <svg className="h-5 w-5 text-gray-400 transform group-open:rotate-90 transition-transform duration-200 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        </summary>
                                                        <div className="px-4 pb-4">
                                                            <div className="p-4 bg-blue-50 rounded-lg text-gray-700 border-l-4 border-blue-400">
                                                                {faq.answer}
                                                            </div>
                                                        </div>
                                                    </details>

                                                      {/* Edit/Delete Buttons */}
                                                    <div className="flex justify-end space-x-2 mt-2">
                                                        <button
                                                            onClick={() => handleEditFaq(faq, index)}
                                                            className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-lg hover:bg-blue-200 transition-all"
                                                        >
                                                                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteFaq(faq._id, index)}
                                                            disabled={deleteLoading === index}
                                                            className="inline-flex items-center px-3 py-1 bg-red-100 text-red-600 text-sm rounded-lg hover:bg-red-200 transition-all disabled:opacity-50"
                                                        >
                                                            {deleteLoading === index ? (
                                                                <svg className="animate-spin h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                            ) : (
                                                                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                            )}
                                                            Delete
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
            `}</style>
        </div>
    );
};

export default AddFAQ;