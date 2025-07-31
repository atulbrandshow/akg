"use client"

import Breadcrumb from "@/Components/Breadcrumb"
import Header from "@/Components/Header"
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"
import Link from "next/link"
import { useEffect, useState } from "react"

function NewsListPage({ data }) {
  const [newsData, setNewsData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  // const categories = ["all", "Technology", "Environment", "Business", "Sports", "Science"]
  const categories = []

  const fetchNews = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_NODE_URL}list-detail-page/all?page=${page}&limit=9&search=${searchTerm}&type=News`, {
        credentials: "include",
      })
      const data = await response.json()
      if (data.status && data.data) {
        setNewsData(data.data)
        setTotalPages(data.pagination.totalPages)
      } else {
        setNewsData([])
      }
    } catch (error) {
      console.error("Failed to fetch news:", error)
      setNewsData([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [page, searchTerm])

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const getTimeAgo = (dateString) => {
    const now = new Date()
    const articleDate = new Date(dateString)
    const diffInHours = Math.floor((now - articleDate) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 48) return "1 day ago"
    return formatDate(dateString)
  }

  const isRecentNews = (dateString) => {
    const now = new Date()
    const articleDate = new Date(dateString)
    const diffInHours = (now - articleDate) / (1000 * 60 * 60)
    return diffInHours <= 48 // Consider news recent if within 48 hours
  }

  const stripHtml = (html) => {
    const tmp = document.createElement("DIV")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
  }

  const filteredNews = newsData.filter((article) => selectedCategory === "all" || article.category === selectedCategory)

  return (
    <div className="bg-gray-50">
      <Header title="News & Updates" gradient={"bg-gradient-to-r from-gray-800 to-transparent"} bgUrl={data?.banner_img} custom={true} subHeading="Stay updated with the latest campus news, achievements, events, and more from across our vibrant university community."
 />
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb data={data?.breadCrumb} />
          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-4xl font-novaBold text-gray-900 mb-1">NewsHub</h1>
              <p className="text-gray-600 font-novaReg">Breaking news, latest updates & trending stories</p>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search breaking news..."
                className="pl-12 pr-4 py-3 w-full md:w-96 border font-novaReg border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
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
      </header>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-novaSemi transition-all duration-200 ${selectedCategory === category
                  ? "bg-red-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                  }`}
              >
                {category === "all" ? "All News" : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Breaking News Banner */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <span className="bg-white text-red-600 px-3 py-1 rounded-full text-xs font-novaBold mr-4 animate-pulse">
              BREAKING
            </span>
            <p className="text-sm font-novaSemi">Stay updated with the latest breaking news and developments</p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredNews.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                />
              </svg>
            </div>
            <h3 className="text-xl font-novaSemi text-gray-900 mb-2">No news articles found</h3>
            <p className="text-gray-500 font-novaReg">Try adjusting your search terms or browse different categories</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((article) => {
              const isRecent = isRecentNews(article.date)
              return (
                <article
                  key={article._id}
                  className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border-l-4 ${isRecent ? "border-red-500 ring-1 ring-red-100" : "border-transparent"
                    }`}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={IMAGE_PATH + article.banner_img || "/placeholder.svg?height=200&width=400&text=News+Image"}
                      alt={article.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=200&width=400&text=News+Image"
                      }}
                    />

                    {/* Recent Badge */}
                    {isRecent && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-novaBold animate-pulse">
                          🔥 RECENT
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category & Time */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-novaSemi text-red-600 uppercase tracking-wide">
                        {article.category || "General"}
                      </span>
                      <span className="text-xs text-gray-500 font-novaBold">{getTimeAgo(article.date)}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-novaBold text-gray-900 mb-1 line-clamp-2 group-hover:text-red-600 transition-colors duration-200 leading-tight">
                      {article.name}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm font-novaReg mb-4 line-clamp-3 leading-relaxed">
                      {stripHtml(article.description)}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-500 font-novaSemi">NewsHub Reporter</span>
                      </div>

                      <Link href={article?.path} className="inline-flex items-center text-red-600 hover:text-red-700 font-novaSemi text-sm group-hover:translate-x-1 transition-transform duration-200">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && filteredNews.length > 0 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded-xl font-novaSemi text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
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
                    className={`w-10 h-10 rounded-xl font-novaSemi transition-all duration-200 ${page === pageNum
                      ? "bg-red-600 text-white shadow-lg"
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
              className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded-xl font-novaSemi text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Next
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

export default NewsListPage
