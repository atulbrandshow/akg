"use client"
import { useState, useEffect, useCallback } from "react"
import { API_NODE_URL } from "@/configs/config"

export default function CircularList({ data }) {
  const [eventsData, setEventsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_NODE_URL}list-detail-page/all?page=${page}&limit=9&type=Circular`, {
        credentials: "include",
      })
      const data = await response.json()
      console.log("API Response:", data)

      if (data.status && data.data) {
        setEventsData(data.data)
        setTotalPages(data.pagination?.totalPages || 1)
      } else {
        setEventsData([])
        setTotalPages(1)
      }
    } catch (error) {
      console.error("Failed to fetch circulars:", error)
      setEventsData([])
      setTotalPages(1)
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])

  const handlePageChange = (newPage) => {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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
    if (typeof window !== "undefined") {
      const tmp = document.createElement("DIV")
      tmp.innerHTML = html
      return tmp.textContent || tmp.innerText || ""
    }
    return html.replace(/<[^>]*>/g, "")
  }

  const truncateText = (text, maxLength = 150) => (text.length <= maxLength ? text : text.substr(0, maxLength) + "...")

  const handleCardClick = (path) => {
    if (typeof window !== "undefined") {
      window.location.href = path
    }
  }

  // Loading State
  if (loading) {
    return (
      <section className="bg-gradient-to-br from-amber-50 to-yellow-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-novaBold mb-4">
              <svg className="w-4 h-4 mr-2 animate-spin" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
              LOADING
            </div>
            <h2 className="text-4xl font-novaBold text-gray-900 mb-4">Loading Circulars...</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg border-l-4 border-amber-500 overflow-hidden animate-pulse"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-32 bg-gray-300 h-32 md:h-auto"></div>
                  <div className="flex-1 p-6">
                    <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
                    <div className="h-6 bg-gray-300 rounded mb-3 w-full"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Empty State
  if (eventsData.length === 0 && !loading) {
    return (
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-novaBold text-gray-700 mb-2">No Circulars Available</h3>
          <p className="text-gray-500">Official notices and circulars will appear here when published.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-br from-amber-50 to-yellow-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-novaBold mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            OFFICIAL NOTICES
          </div>
          <h2 className="text-4xl font-novaBold text-gray-900 mb-4">Circulars & Notices</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        {/* Results Info */}
        <div className="text-center mb-6">
          <p className="text-gray-600 font-novaReg">
            Showing {eventsData.length} circular{eventsData.length !== 1 ? "s" : ""}
            {totalPages > 1 && ` (Page ${page} of ${totalPages})`}
          </p>
        </div>

        {/* Circulars List */}
        <div className="space-y-6">
          {eventsData.map((circular, index) => (
            <div
              key={circular._id}
              onClick={() => handleCardClick(circular.path)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border-l-4 border-amber-500 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Document Icon & Number */}
                <div className="md:w-32 bg-gradient-to-br from-amber-500 to-orange-600 flex flex-col items-center justify-center p-6 text-white">
                  <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-novaBold">#{String((page - 1) * 9 + index + 1).padStart(3, "0")}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs tracking-wide font-novaBold mr-3">
                          IMPORTANT
                        </span>
                        <span className="text-gray-500 font-novaSemi text-sm">{formatDate(circular.date)}</span>
                      </div>
                      <h3 className="text-xl font-novaBold text-gray-900 mb-1 hover:text-amber-600 transition-colors">
                        {circular.name}
                      </h3>
                      <div
                        className="text-gray-600 leading-snug font-novaReg line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: circular.shortdesc || truncateText(stripHtml(circular.description)),
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-amber-600 font-novaSemi">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>View Document</span>
                    </div>
                    <div className="text-sm text-gray-500 font-novaReg">Official Notice</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className={`px-4 py-2 rounded-lg font-novaSemi transition-all duration-300 ${
                page === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-amber-600 hover:bg-amber-50 shadow-md hover:shadow-lg"
              }`}
            >
              <svg className="w-5 h-5 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (page <= 3) {
                  pageNum = i + 1
                } else if (page >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = page - 2 + i
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-lg font-novaBold transition-all duration-300 ${
                      page === pageNum
                        ? "bg-amber-600 text-white shadow-lg"
                        : "bg-white text-amber-600 hover:bg-amber-50 shadow-md hover:shadow-lg"
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className={`px-4 py-2 rounded-lg font-novaSemi transition-all duration-300 ${
                page === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-amber-600 hover:bg-amber-50 shadow-md hover:shadow-lg"
              }`}
            >
              Next
              <svg className="w-5 h-5 inline ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Page Info */}
        {totalPages > 1 && (
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              Page {page} of {totalPages} • Total {eventsData.length} circulars
            </p>
          </div>
        )}
      </div>
    </section>
  )
}