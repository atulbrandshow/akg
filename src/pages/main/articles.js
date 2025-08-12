"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"
import { ArrowRight, CalendarDays, Clock, User } from "lucide-react"
import Image from "next/image"

export default function ArticleList({ data }) {
    const [articlesData, setArticlesData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const fetchArticles = async () => {
        try {
            setLoading(true)
            const response = await fetch(
                `${API_NODE_URL}list-detail-page/all?page=${page}&limit=9&search=${searchTerm}&type=Article`,
                {
                    credentials: "include",
                },
            )
            const data = await response.json()

            if (data.status && data.data) {
                setArticlesData(data.data)
                setTotalPages(data.pagination.totalPages)
            } else {
                setArticlesData([])
            }
        } catch (error) {
            console.error("Failed to fetch articles:", error)
            setArticlesData([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchArticles()
    }, [page, searchTerm])

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const stripHtml = (html) => {
        const tmp = document.createElement("DIV")
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ""
    }

    const getReadingTime = (content) => {
        const wordsPerMinute = 200
        const words = stripHtml(content).split(" ").length
        const minutes = Math.ceil(words / wordsPerMinute)
        return `${minutes} min read`
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="pt-32 relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
                    <div className="text-center">
                        <div className="inline-block mb-4">
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text text-sm font-novaSemi tracking-wider uppercase">
                                Knowledge Hub
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-novaBold text-white mb-6 leading-tight">
                            Discover {" "}
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                                Insights
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-novaReg leading-relaxed">
                            Dive deep into thought-provoking articles, expert insights, and cutting-edge research that shapes our
                            understanding of the world.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-80 max-sm:w-full px-6 py-3 rounded-full font-novaReg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                                    <div className="h-48 bg-gray-300"></div>
                                    <div className="p-6">
                                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                        <div className="h-6 bg-gray-300 rounded mb-4"></div>
                                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {articlesData.length > 0 && (
                                <div className="mb-12">
                                    <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-2">Latest Articles</h2>
                                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {articlesData?.map((article, index) => (
                                    <article
                                        key={article._id}
                                        className={`group cursor-pointer ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
                                    >
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-fit">
                                            {article.banner_img && (
                                                <div className={`relative overflow-hidden ${index === 0 ? "h-64 md:h-80" : "h-52"}`}>
                                                    <Image
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        height={500}
                                                        width={1000}
                                                        src={IMAGE_PATH + article.banner_img || "/placeholder.svg"}
                                                        alt={article.name}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                                    <div className="absolute top-4 left-4">
                                                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 uppercase tracking-wider text-white px-3 py-0.5 rounded-full text-xs font-novaBold">
                                                            Article
                                                        </span>
                                                    </div>
                                                    <div className="absolute bottom-0 left-4 flex items-center gap-4 mb-4 font-novaSemi bg-white px-2 py-0.5 rounded-md text-sm text-gray-600">
                                                        <div className="flex items-center gap-1">
                                                            <CalendarDays size={14} />
                                                            <span>{formatDate(article.date)}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock size={14} />
                                                            <span>{getReadingTime(article.description)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="px-4 py-2">
                                                <h3
                                                    className={`font-novaBold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200 ${index === 0 ? "text-xl md:text-2xl" : "text-lg"}`}
                                                >
                                                    {article.name}
                                                </h3>

                                                <p className={`text-gray-600 mb-3 line-clamp-3 font-novaReg ${index === 0 ? "text-base" : "text-sm"}`}>
                                                    {stripHtml(article.description)}
                                                </p>

                                                <Link
                                                    href={article?.path || "#"}
                                                    className="inline-flex items-center gap-2 text-purple-600 font-novaSemi hover:text-purple-700 transition-colors duration-200"
                                                >
                                                    Read More
                                                    <ArrowRight
                                                        size={16}
                                                        className="group-hover:translate-x-1 transition-transform duration-200"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {articlesData.length === 0 && !loading && (
                                <div className="text-center py-16">
                                    <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                        <User size={32} className="text-gray-400" />
                                    </div>
                                    <h3 className="text-xl font-novaSemi text-gray-900 mb-2">No Articles Found</h3>
                                    <p className="text-gray-600">Try adjusting your search terms or check back later for new content.</p>
                                </div>
                            )}

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center gap-2 mt-12">
                                    <button
                                        onClick={() => setPage(Math.max(1, page - 1))}
                                        disabled={page === 1}
                                        className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                                    >
                                        Previous
                                    </button>

                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => setPage(i + 1)}
                                            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${page === i + 1
                                                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                                                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setPage(Math.min(totalPages, page + 1))}
                                        disabled={page === totalPages}
                                        className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    )
}
