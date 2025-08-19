"use client"

import { useState, useEffect } from "react"
import {
  BookOpen,
  Calendar,
  Briefcase,
  Megaphone,
  ClipboardList,
  AlertTriangle,
  GraduationCap,
  Users,
  Download,
  ExternalLink,
  Share2,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Bell,
  Filter,
  Search,
  Eye,
  Paperclip,
  Building,
  User,
  Loader2,
} from "lucide-react"
import noticeService from "../../services/noticeService"
import AttachmentViewer from "../admin/Components/AttachmentViewer"

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [notices, setNotices] = useState([])
  const [stats, setStats] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagination, setPagination] = useState({})
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchNotices()
    fetchStats()
  }, [activeTab, searchTerm, currentPage])

  const fetchNotices = async () => {
    try {
      setLoading(true)
      setError(null)

      const params = {
        page: currentPage,
        limit: 10,
        sortBy: "createdAt",
        sortOrder: "desc",
      }

      if (activeTab !== "all") {
        params.category = activeTab.charAt(0).toUpperCase() + activeTab.slice(1)
      }

      if (searchTerm) {
        params.search = searchTerm
      }

      const response = await noticeService.getAllNotices(params)
      setNotices(response.data.notices)
      setPagination(response.data.pagination)
    } catch (error) {
      console.error("Error fetching notices:", error)
      setError("Failed to load notices. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const response = await noticeService.getNoticeStats()
      setStats(response.data)
    } catch (error) {
      console.error("Error fetching stats:", error)
    }
  }

  const handleNoticeView = async (noticeId) => {
    try {
      await noticeService.getNoticeById(noticeId)
      // Refresh notices to update view count
      fetchNotices()
    } catch (error) {
      console.error("Error viewing notice:", error)
    }
  }

  const getCategoryConfig = (category) => {
    const categoryLower = category?.toLowerCase()
    switch (categoryLower) {
      case "academic":
        return { icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100" }
      case "events":
        return { icon: Calendar, color: "text-purple-600", bg: "bg-purple-100" }
      case "administrative":
        return { icon: Briefcase, color: "text-green-600", bg: "bg-green-100" }
      case "examinations":
        return { icon: ClipboardList, color: "text-red-600", bg: "bg-red-100" }
      case "general":
        return { icon: Megaphone, color: "text-orange-600", bg: "bg-orange-100" }
      case "sports":
        return { icon: Users, color: "text-teal-600", bg: "bg-teal-100" }
      case "cultural":
        return { icon: GraduationCap, color: "text-pink-600", bg: "bg-pink-100" }
      default:
        return { icon: ClipboardList, color: "text-gray-600", bg: "bg-gray-100" }
    }
  }

  const getPriorityConfig = (priority) => {
    const priorityLower = priority?.toLowerCase()
    switch (priorityLower) {
      case "urgent":
        return {
          bg: "bg-red-50",
          text: "text-red-700",
          border: "border-red-200",
          icon: "bg-red-100",
        }
      case "high":
        return {
          bg: "bg-orange-50",
          text: "text-orange-700",
          border: "border-orange-200",
          icon: "bg-orange-100",
        }
      case "medium":
        return {
          bg: "bg-amber-50",
          text: "text-amber-700",
          border: "border-amber-200",
          icon: "bg-amber-100",
        }
      case "low":
        return {
          bg: "bg-emerald-50",
          text: "text-emerald-700",
          border: "border-emerald-200",
          icon: "bg-emerald-100",
        }
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-700",
          border: "border-gray-200",
          icon: "bg-gray-100",
        }
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const isDeadlineNear = (deadline) => {
    if (!deadline) return false
    const today = new Date()
    const deadlineDate = new Date(deadline)
    const diffTime = deadlineDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 3 && diffDays >= 0
  }

  const categories = [
    { key: "all", label: "All Notices", icon: ClipboardList },
    { key: "academic", label: "Academic", icon: BookOpen },
    { key: "events", label: "Events", icon: Calendar },
    { key: "administrative", label: "Administrative", icon: Briefcase },
    { key: "examinations", label: "Examinations", icon: ClipboardList },
    { key: "general", label: "General", icon: Megaphone },
    { key: "sports", label: "Sports", icon: Users },
    { key: "cultural", label: "Cultural", icon: GraduationCap },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>

        <div className="pt-32 md:pt-64 relative max-w-[1400px] mx-auto px-2 md:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="h-16 w-16 md:w-20 md:h-20 bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white border-opacity-20">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-novaBold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent pb-1">
                  Digital Notice Board
                </h1>
                <div className="flex items-center space-x-4 mt-2 text-sm font-novaSemi text-blue-200">
                  <div className="flex items-center space-x-1">
                    <Bell className="w-4 h-4" />
                    <span>Live Updates</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>All Departments</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-center">
                <div className="text-sm text-blue-100 mb-1 font-novaReg">Last Updated</div>
                <div className="font-novaBold text-xl text-white">{formatDate(new Date().toISOString())}</div>
                <div className="flex items-center justify-center font-novaReg space-x-1 mt-2 text-xs text-blue-200">
                  <Clock className="w-3 h-3" />
                  <span>Real-time sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 py-5 sm:py-12">
        <div className="bg-white rounded-2xl shadow-lg mb-8 border border-gray-100">
          <div className="p-2 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search notices, departments, or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border font-novaReg border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex items-center font-novaReg space-x-2 text-sm text-gray-600">
                <Filter className="w-4 h-4" />
                <span>Filter by category:</span>
              </div>
            </div>

            <nav className="flex gap-2 overflow-x-auto py-2 px-3">
              {categories.map((tab) => {
                const IconComponent = tab.icon
                const count =
                  tab.key === "all"
                    ? stats.overview?.totalNotices || 0
                    : stats.categories?.find((c) => c._id.toLowerCase() === tab.key)?.count || 0

                return (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setActiveTab(tab.key)
                      setCurrentPage(1)
                    }}
                    className={`flex flex-1 whitespace-nowrap items-center space-x-2 px-4 py-2 rounded-xl font-novaSemi text-sm transition-all duration-300 ${activeTab === tab.key
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200"
                      }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.label}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-novaBold ${activeTab === tab.key ? "bg-white bg-opacity-20 text-white" : "bg-gray-100 text-gray-600"
                        }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {loading && (
          <div className="text-center py-20">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 font-novaReg text-lg">Loading notices...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <div>
                <h3 className="text-lg font-novaSemi text-red-900">Error Loading Notices</h3>
                <p className="text-red-700">{error}</p>
                <button
                  onClick={fetchNotices}
                  className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {notices.map((notice) => {
              const categoryConfig = getCategoryConfig(notice.category)
              const priorityConfig = getPriorityConfig(notice.priority)
              const CategoryIcon = categoryConfig.icon
              const nearDeadline = isDeadlineNear(notice.deadline)

              return (
                <div
                  key={notice._id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden group"
                >
                  <div className="p-2 sm:p-4">
                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start space-x-4 flex-1">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 ${categoryConfig.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <CategoryIcon className={`w-6 h-6 ${categoryConfig.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-novaBold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                            {notice.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Building className="w-3 h-3" />
                              <span className="font-novaSemi">{notice.department}</span>
                            </span>
                            <span className="flex items-center space-x-1 font-novaReg">
                              <Clock className="w-3 h-3" />
                              <span>{formatDate(notice.createdAt)}</span>
                            </span>
                            {/* <span className="flex items-center font-novaReg space-x-1">
                              <Eye className="w-3 h-3" />
                              <span>{notice.views} views</span>
                            </span> */}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-lg text-xs font-novaBold border ${priorityConfig.bg} ${priorityConfig.text} ${priorityConfig.border}`}
                      >
                        {notice.priority.toUpperCase()}
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed mb-6 font-novaReg text-base">{notice.content}</p>

                    {/* Author and Deadline Info */}
                    <div className={`rounded-xl p-4 mb-6 ${notice.author.name && "bg-gray-50"}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        {notice.author.name && (
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <span className="font-novaSemi">{notice.author.name}</span>
                              <p className="text-xs font-novaReg text-gray-500">{notice.author.designation}</p>
                            </div>
                          </div>
                        )}
                        {notice.deadline && (
                          <div
                            className={`flex items-center space-x-1 text-sm font-novaSemi ${nearDeadline ? "text-red-600" : "text-gray-600"}`}
                          >
                            <AlertTriangle className={`w-4 h-4 ${nearDeadline ? "text-red-500" : "text-gray-400"}`} />
                            <span>Deadline: {formatDate(notice.deadline)}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Attachments */}
                    {notice.attachments && notice.attachments.length > 0 && (
                      <div>
                        <AttachmentViewer attachments={notice.attachments} />
                      </div>
                    )}

                    {/* Action Buttons */}
                    {/* <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleNoticeView(notice._id)}
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-novaSemi text-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Details</span>
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group">
                          <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                        </button>
                        <button className="w-10 h-10 bg-gray-100 hover:bg-green-100 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group">
                          <Share2 className="w-4 h-4 text-gray-600 group-hover:text-green-600" />
                        </button>
                        {notice.attachments && notice.attachments.length > 0 && (
                          <button className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group">
                            <Paperclip className="w-4 h-4 text-gray-600 group-hover:text-purple-600" />
                          </button>
                        )}
                      </div>
                    </div> */}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {!loading && !error && pagination.totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={!pagination.hasPrev}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-novaSemi transition-colors ${currentPage === page ? "bg-blue-600 text-white" : "bg-white border border-gray-300 hover:bg-gray-50"
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={!pagination.hasNext}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && notices.length === 0 && (
          <div className="text-center py-10">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-novaBold text-gray-900 mb-4">No notices found</h3>
            <p className="text-gray-600 text-lg font-novaReg max-w-md mx-auto">
              {searchTerm ? `No notices match "${searchTerm}"` : "There are no notices in this category at the moment."}
            </p>
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="mt-4 text-blue-600 hover:text-blue-700 font-novaSemi">
                Clear search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
