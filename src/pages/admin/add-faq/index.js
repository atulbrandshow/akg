"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import SideBar from "../Components/SideBar";
import { API_NODE_URL } from "@/configs/config";

export default function Home() {
  const searchParams = useSearchParams();
  const page_id = searchParams.get("page_id");

  const [type, setType] = useState("");
  const [questions, setQuestions] = useState([{ question: "", answer: "" }]);
  const [loading, setLoading] = useState(false);
  const [createdFaqs, setCreatedFaqs] = useState([]);

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = { page_id, type, questions };

    try {
      const response = await fetch(`${API_NODE_URL}faq/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        alert("FAQ Created Successfully!");
        setCreatedFaqs([...createdFaqs, { type, questions }]);
        setType("");
        setQuestions([{ question: "", answer: "" }]);
      } else {
        alert(result.message || "Failed to create FAQ");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SideBar />
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
              FAQ Management
            </h1>
            <p className="text-gray-600 mt-2">
              Page ID: <span className="font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded-md">{page_id}</span>
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-gray-100">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                Create New FAQ
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Type Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    FAQ Type
                  </label>
                  <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-200 shadow-sm"
                    placeholder="e.g., Faculty, General, Departments etc."
                    required
                  />
                </div>

                {/* Questions & Answers */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Questions & Answers
                    </label>
                    <button
                      type="button"
                      onClick={addQuestion}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Add Question
                    </button>
                  </div>

                  <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {questions.map((q, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 transition-all duration-200 shadow-sm"
                      >
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Question {index + 1}
                          </label>
                          <input
                            type="text"
                            value={q.question}
                            onChange={(e) =>
                              handleQuestionChange(index, "question", e.target.value)
                            }
                            placeholder="What is...?"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-200"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Answer
                          </label>
                          <textarea
                            value={q.answer}
                            onChange={(e) =>
                              handleQuestionChange(index, "answer", e.target.value)
                            }
                            placeholder="The answer is..."
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-200"
                            required
                          />
                        </div>
                        {questions.length > 1 && (
                          <div className="mt-3 flex justify-end">
                            <button
                              type="button"
                              onClick={() => removeQuestion(index)}
                              className="inline-flex items-center text-sm text-red-500 hover:text-red-700 focus:outline-none transition-colors duration-200"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center items-center px-6 py-3 rounded-lg shadow-lg text-lg font-semibold text-white transition-all duration-300 ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-0.5"
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Create FAQ
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Created FAQs Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                Your FAQs
              </h2>
              
              {createdFaqs.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="mt-4 text-lg text-gray-600">No FAQs created yet</p>
                  <p className="text-sm text-gray-400">Your created FAQs will appear here</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {createdFaqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                          {faq.type}
                        </h3>
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-green-100 to-blue-100 text-green-800">
                          <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          Active
                        </span>
                      </div>
                      <div className="mt-4 space-y-3">
                        {faq.questions.map((item, qIndex) => (
                          <div key={qIndex} className="group">
                            <details className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-200 bg-gradient-to-br from-gray-50 to-white">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium text-gray-800">{item.question}</span>
                                <svg
                                  className="h-5 w-5 text-gray-400 transform group-hover:rotate-90 transition-transform duration-200"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </summary>
                              <div className="mt-3 p-3 bg-blue-50 rounded-lg text-gray-700 border border-blue-100">
                                {item.answer}
                              </div>
                            </details>
                          </div>
                        ))}
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