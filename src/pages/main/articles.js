"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"

export default function ArticleList({ data }) {
    const [eventsData, setEventsData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const fetchEvents = async () => {
        try {
            setLoading(true)
            const response = await fetch(
                `${API_NODE_URL}list-detail-page/all?page=${page}&limit=9&search=${searchTerm}&type=Article`, {
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
            console.error("Failed to fetch events:", error)
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
            <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/80"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            Campus Articles
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                            Discover amazing articles, connect with peers, and make unforgettable memories
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="relative max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="pl-12 pr-4 py-3 w-full border border-white/20 rounded-full text-gray-800 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all duration-200 bg-white/90 focus:bg-white"
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value)
                                        setPage(1)
                                    }}
                                />
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
                    <p className="text-gray-500">Try adjusting your search terms or check back later for new events</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
                    {eventsData.map((event) => (
                        <div
                            key={event._id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
                        >
                            <div className="relative overflow-hidden">
                                {event.banner_img && (
                                    <img
                                        src={IMAGE_PATH + event.banner_img}
                                        alt={event.name}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                )}
                                <div className="absolute top-4 left-4">
                                    <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                                        <div className="text-sm font-bold text-gray-800">{formatDate(event.date)}</div>
                                        <div className="text-xs text-gray-600">{getTimeAgo(event.date)}</div>
                                    </div>
                                </div>
                            </div>

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
        </div>
    )
}
