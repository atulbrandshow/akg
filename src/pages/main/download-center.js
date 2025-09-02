"use client"

import Header from "@/Components/Header"
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"
import { Download } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"

const DownloadCenter = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [downloads, setDownloads] = useState([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({})

  const downloadCategories = [
    { id: "all", name: "All Downloads", count: 0 },
    { id: "academic", name: "Academic Resources", count: 0 },
    { id: "forms", name: "Forms & Documents", count: 0 },
    { id: "software", name: "Software & Tools", count: 0 },
    { id: "research", name: "Research Papers", count: 0 },
    { id: "student", name: "Student Resources", count: 0 },
  ]

  useEffect(() => {
    fetchDownloads()
    fetchStats()
  }, [searchTerm, selectedCategory, sortBy])

  const fetchDownloads = async () => {
    try {
      const params = new URLSearchParams()
      if (selectedCategory !== "all") params.append("category", selectedCategory)
      if (searchTerm) params.append("search", searchTerm)
      if (sortBy) params.append("sortBy", sortBy)

      const response = await fetch(`${API_NODE_URL}downloads?${params}`)
      const data = await response.json()

      if (data.success) {
        setDownloads(data.data)
      }
    } catch (error) {
      console.error("Error fetching downloads:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_NODE_URL}downloads/stats`)
      const data = await response.json()

      if (data.success) {
        setStats(data.data)
      }
    } catch (error) {
      console.error("Error fetching stats:", error)
    }
  }

  const handleDownload = async (downloadId, fileName) => {
    console.log(downloadId, fileName);

    try {
      const response = await fetch(`${API_NODE_URL}downloads/${downloadId}/download`)
      const data = await response.json()

      if (data.success) {
        fetchDownloads()
      } else {
        toast.error("Error downloading file: " + data.message)
      }
    } catch (error) {
      console.error("Error downloading file:", error)
      toast.error("Error downloading file")
    }
  }

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case "PDF":
        return (
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )
      case "EXE":
        return (
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )
      default:
        return (
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )
    }
  }

  // Update category counts based on fetched data
  const updatedCategories = downloadCategories.map((category) => {
    if (category.id === "all") {
      return { ...category, count: downloads.length }
    }
    return {
      ...category,
      count: downloads.filter((download) => download.category === category.id).length,
    }
  })

  const featuredDownloads = downloads.filter((download) => download.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Download Center"
        gradient="bg-gradient-to-r from-gray-800 to-transparent"
        bgUrl={data?.banner_img}
        custom={true}
        subHeading={
          "Access academic resources, forms, software, and research materials. Everything you need for your academic journey in one place."
        }
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 sticky top-36">
              <h3 className="text-lg font-novaSemi text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {updatedCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedCategory === category.id
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-novaSemi">{category.name}</span>
                      <span
                        className={`text-sm px-2 py-1 font-novaReg rounded-full ${selectedCategory === category.id
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-gray-100 text-gray-600"
                          }`}
                      >
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search downloads..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                <div className="md:w-48">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Popular</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Featured Downloads */}
            {featuredDownloads.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-novaBold text-gray-900 mb-6">Featured Downloads</h2>
                <div className="grid xl:grid-cols-2 gap-6">
                  {featuredDownloads.map((item) => (
                    <div
                      key={item._id}
                      className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 sm:p-6 border border-emerald-200"
                    >
                      <div className="flex items-start gap-4 max-sm:flex-col max-sm:items-start">
                        {getFileIcon(item.fileType)}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-novaSemi text-gray-900">{item.title}</h3>
                            <span className="max-sm:hidden bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-novaSemi">
                              Featured
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4 font-novaReg">{item.description}</p>
                          <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:space-y-2">
                            <div className="flex items-center gap-4 font-novaSemi text-sm text-gray-500">
                              <span>
                                {item.fileType} • {item.fileSize}
                              </span>
                              <span>{item.downloads.toLocaleString()} downloads</span>
                            </div>
                            <Link
                              href={IMAGE_PATH + item.fileUrl}
                              target="_blank"
                              onClick={() => handleDownload(item._id, item.fileName)}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-novaSemi transition-colors flex items-center gap-1"
                            >
                              <Download size={18} />
                              Download
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Downloads */}
            <div>
              <h2 className="text-2xl font-novaBold text-gray-900 mb-6">All Downloads</h2>
              <div className="space-y-4">
                {downloads.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start">
                      {getFileIcon(item.fileType)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-novaSemi text-gray-900">{item.title}</h3>
                          {item.featured && (
                            <span className="max-sm:hidden bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-novaSemi">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3 font-novaReg">{item.description}</p>
                        <div className="flex items-center gap-x-6 gap-y-1 font-novaSemi flex-wrap text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {item.fileType} • {item.fileSize}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                            {item.downloads.toLocaleString()} downloads
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {new Date(item.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <Link
                        href={IMAGE_PATH + item.fileUrl}
                        onClick={() => handleDownload(item._id, item.fileName)}
                        target="_blank"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-novaSemi transition-colors flex items-center gap-1"
                      >
                        <Download size={18} />
                        Download
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* No Results */}
            {downloads.length === 0 && (
              <div className="text-center py-12">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="text-lg font-novaSemi text-gray-900 mb-2">No downloads found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadCenter
