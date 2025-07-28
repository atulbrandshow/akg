"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { API_NODE_URL } from "@/configs/config"

export default function CircularList({ data }) {
    const [eventsData, setEventsData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const fetchEvents = async () => {
        try {
            setLoading(true)
            const response = await fetch(
                `${API_NODE_URL}list-detail-page/all?page=${page}&limit=9&search=${searchTerm}&type=Circular`, {
                    credentials: "include",
                }
            )
            const data = await response.json()
            if (data.status && data.data) {
                setEventsData(data.data)
                setTotalPages(data.pagination.totalPages)
            } else {
                setEventsData([])
            }
        } catch (error) {
            console.error("Failed to fetch circulars:", error)
            setEventsData([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchEvents()
    }, [page, searchTerm])

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const getTimeAgo = (dateString) => {
        const now = new Date()
        const eventDate = new Date(dateString)
        const diffInHours = Math.floor((now - eventDate) / (1000 * 60 * 60))
        if (diffInHours < 1) return "Just now"
        if (diffInHours < 24) return `${diffInHours}h ago`
        if (diffInHours < 48) return "1 day ago"
        return formatDate(dateString)
    }

    const stripHtml = (html) => {
        const tmp = document.createElement("DIV")
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ""
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 ">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/80"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            Campus Circulars
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                            Discover amazing circulars, connect with peers, and make unforgettable memories
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="relative max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search circulars..."
                                    className="pl-12 pr-4 py-3 w-full border border-white/20 rounded-full text-gray-800 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all duration-200 bg-white/90 focus:bg-white"
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value)
                                        setPage(1)
                                    }}
                                />
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-circulars-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </div>

            {/* Circulars Grid */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                            <div className="h-48 bg-gray-200"></div>
                            <div className="p-6">
                                <div className="h-4 bg-gray-200 rounded mb-3"></div>
                                <div className="h-4 bg-gray-200 rounded mb-3"></div>
                                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : eventsData.length === 0 ? (
                <div className="text-center py-16 px-10">
                    <div className="text-gray-400 mb-4">
                        <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No circulars found</h3>
                    <p className="text-gray-500">Try adjusting your search terms or check back later for new circulars</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
                    {eventsData.map((event) => (
                        <div
                            key={event._id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
                        >
                            {/* Event Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={event.banner_img || "/placeholder.svg?height=300&width=400"}
                                    alt={event.name}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.src = "/placeholder.svg?height=300&width=400"
                                    }}
                                />
                                <div className="absolute top-4 left-4">
                                    <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                                        <div className="text-sm font-bold text-gray-800">{formatDate(event.date)}</div>
                                        <div className="text-xs text-gray-600">{getTimeAgo(event.date)}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Event Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                    {event.name}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                                    {stripHtml(event.description)}
                                </p>

                                <Link href={event?.path || "#"}>
                                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md">
                                        Know More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination Controls */}
            {!loading && eventsData.length > 0 && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                    </button>
                    <div className="flex items-center space-x-2">
                        {[...Array(Math.min(5, totalPages))].map((_, i) => {
                            const pageNum = i + 1
                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => setPage(pageNum)}
                                    className={`w-10 h-10 rounded-xl font-semibold transition-all duration-200 ${page === pageNum
                                            ? "bg-purple-600 text-white shadow-lg"
                                            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                                        }`}
                                >
                                    {pageNum}
                                </button>
                            )
                        })}
                        {totalPages > 5 && (
                            <>
                                <span className="text-gray-500">...</span>
                                <span className="px-3 py-2 text-gray-600 font-medium">
                                    Page {page} of {totalPages}
                                </span>
                            </>
                        )}
                    </div>
                    <button
                        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                        className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        Next
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}

            {/* Call to Action Section */}
            <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Miss Out on Amazing Circulars!</h2>
                <p className="text-xl mb-8 text-purple-100">
                    Subscribe to our newsletter and get notified about upcoming circulars
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
                    />
                    <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all duration-300">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Footer */}
            {/* <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Campus Circulars</h3>
              <p className="text-gray-400">Your gateway to amazing college experiences and networking opportunities.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    All Circulars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Academic
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cultural
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 College Circulars. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
        </div>
    )
}
