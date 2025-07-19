"use client"
import { useEffect, useState } from "react"
import { API_NODE_URL } from "@/configs/config"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { Boxes } from "lucide-react"

const PageList = () => {
  const router = useRouter()
  const [newsAndEvents, setNewsAndEvents] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("All")
  const [filterStatus, setFilterStatus] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_NODE_URL}slug/getbytype?type=Admission,Page,Article`)
      const data = await response.json()
      console.log(data)

      setNewsAndEvents(data.data || [])
      setFilteredData(data.data || [])
    } catch (error) {
      console.error("Error fetching news and events:", error)
      toast.error("Failed to fetch data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Filter and search functionality
  useEffect(() => {
    let filtered = newsAndEvents

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.addedby.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Type filter
    if (filterType !== "All") {
      filtered = filtered.filter((item) => item.type === filterType)
    }

    // Status filter
    if (filterStatus !== "All") {
      const isActive = filterStatus === "Active"
      filtered = filtered.filter((item) => item.status === isActive)
    }

    setFilteredData(filtered)
    setCurrentPage(1)
  }, [searchTerm, filterType, filterStatus, newsAndEvents])

  const handleDelete = async (event) => {
    if (!window.confirm("Are you sure you want to delete this page?")) {
      return
    }

    try {
      setProgress(0)
      requestAnimationFrame(() => {
        setProgress(100)
      })

      const response = await fetch(`${API_NODE_URL}slug/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page_id: event.page_id,
          name: event.name,
          status: false,
          deleteflag: true,
        }),
      })

      const data = await response.json()
      if (data.status) {
        toast.success("Page deleted successfully!")
        fetchData()
      } else {
        toast.error(data.message || "Failed to delete page.")
      }
    } catch (error) {
      console.error("Error deleting event:", error)
      toast.error("Failed to delete page.")
    } finally {
      setProgress(0)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return "N/A"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-pink-600 z-50"
        style={{
          width: `${progress}%`,
          transition: progress > 0 ? "width 0.5s ease" : "none",
        }}
      ></div>

      <div className="">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-6 mb-8 shadow-2xl">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <circle cx="4" cy="6" r="1" />
                <circle cx="4" cy="12" r="1" />
                <circle cx="4" cy="18" r="1" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-novaBold text-white tracking-wide">Page Management</h1>
              <p className="text-blue-100 text-sm font-novaReg mt-1">Manage all your website pages in one place</p>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-novaBold text-gray-700 mb-2">Search Pages</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, path, or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border-2 font-novaReg border-gray-200 rounded-xl py-3 px-4 pl-10 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-novaBold text-gray-700 mb-2">Filter by Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full border-2 font-novaReg border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              >
                <option value="All">All Types</option>
                <option value="Page">Page</option>
                <option value="Admission">Admission</option>
                <option value="Article">Article</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-novaBold text-gray-700 mb-2">Filter by Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full border-2 font-novaReg border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 flex items-center justify-between text-sm font-novaSemi text-gray-600">
            <span>
              Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length}{" "}
              pages
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              Total: {newsAndEvents.length} pages
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="text-gray-600 font-medium">Loading pages...</span>
              </div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r font-novaSemi from-gray-50 to-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        Page Details
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        Component
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        Path & ID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        Author & Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        Status
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-novaSemi">
                    {currentItems.length > 0 ? (
                      currentItems.map((event, index) => (
                        <tr
                          key={event._id}
                          className={`hover:bg-gray-50 transition-colors duration-150 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                          }`}
                        >
                          {/* Page Details */}
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <div className="text-sm font-novaBold text-gray-900 mb-1">{event.name}</div>
                              {event.shortdesc && (
                                <div
                                  className="text-xs text-gray-600 line-clamp-2 max-w-xs"
                                  dangerouslySetInnerHTML={{ __html: event.shortdesc }}
                                ></div>
                              )}
                            </div>
                          </td>

                          {/* Type & Component */}
                          <td className="px-6 py-4">
                            <div className="flex flex-col space-y-1">
                              {/* <span
                                className={`inline-flex w-fit px-2 py-1 text-xs font-novaBold rounded-full ${
                                  event.type === "Page"
                                    ? "bg-blue-100 text-blue-800"
                                    : event.type === "Article"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-purple-100 text-purple-800"
                                }`}
                              >
                                {event.type}
                              </span> */}
                              {event.ComponentType && (
                                <span className="text-sm font-novaSemi flex gap-1 items-center w-fit text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                  <Boxes className="w-4 h-4" />
                                  {event.ComponentType}
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Path & ID */}
                          <td className="px-6 py-4">
                            <div className="flex flex-col space-y-1">
                              <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-800 font-mono">
                                {event.path || event.slug}
                              </code>
                              <span className="text-xs text-gray-500">ID: {event.page_id}</span>
                            </div>
                          </td>

                          {/* Author & Date */}
                          <td className="px-6 py-4">
                            <div className="flex flex-col space-y-1">
                              <span className="text-sm font-medium text-gray-900">{event.addedby || "Unknown"}</span>
                              <span className="text-xs text-gray-500">{formatDate(event.addedon)}</span>
                              {event.editedby && (
                                <span className="text-xs text-orange-600">
                                  Edited by {event.editedby} on {formatDate(event.editedon)}
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Status */}
                          <td className="px-6 py-4">
                            <div className="flex flex-col space-y-2">
                              <span
                                className={`inline-flex px-2 w-fit py-0.5 text-sm font-novaSemi rounded-full ${
                                  event.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                }`}
                              >
                                {event.status ? "Active" : "Inactive"}
                              </span>
                              {event.featured_status && (
                                <span className="inline-flex px-2 py-1 text-xs font-novaBold rounded-full bg-yellow-100 text-yellow-800">
                                  Featured
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Actions */}
                          <td className="px-6 py-4">
                            <div className="flex justify-center space-x-2">
                              <button
                                onClick={() => router.push(`/admin/edit-page?page_id=${event?.page_id}`)}
                                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg flex items-center gap-1 hover:from-green-600 hover:to-green-700 hover:scale-105 transform transition-all duration-200 shadow-md text-xs font-medium"
                                title="Edit Page"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                  <path d="m15 5 4 4" />
                                </svg>
                                Edit
                              </button>

                              <button
                                onClick={() => router.push(`/admin/edit-path?page_id=${event?.page_id}`)}
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-lg flex items-center gap-1 hover:from-blue-600 hover:to-blue-700 hover:scale-105 transform transition-all duration-200 shadow-md text-xs font-medium"
                                title="Edit Path"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="6" cy="19" r="3" />
                                  <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                                  <circle cx="18" cy="5" r="3" />
                                </svg>
                                Path
                              </button>

                              <button
                                onClick={() => handleDelete(event)}
                                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-lg flex items-center gap-1 hover:from-red-600 hover:to-red-700 hover:scale-105 transform transition-all duration-200 shadow-md text-xs font-medium"
                                title="Delete Page"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  width="14"
                                  height="14"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="px-6 py-12 text-center">
                          <div className="flex flex-col items-center space-y-3">
                            <svg
                              className="w-12 h-12 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              ></path>
                            </svg>
                            <p className="text-gray-500 font-medium">No pages found</p>
                            <p className="text-gray-400 text-sm">Try adjusting your search or filter criteria</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                      Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of{" "}
                      {filteredData.length} results
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => paginate(index + 1)}
                          className={`px-3 py-2 text-sm font-medium rounded-lg ${
                            currentPage === index + 1
                              ? "bg-blue-600 text-white"
                              : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default PageList
