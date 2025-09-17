"use client"
import { useState, useEffect } from "react"
import AnnouncementModal from "../Components/AnnouncementModal"
import DeleteConfirmModal from "../Components/DeleteConfirmModal"
import { Plus, Edit2, Trash2, ExternalLink, Calendar, Clock } from "lucide-react"
import SideBar from "../Components/SideBar"
import { API_NODE_URL } from "@/configs/config"
import Layout from "../Components/Layout"

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [editingAnnouncement, setEditingAnnouncement] = useState(null)
  const [deletingAnnouncement, setDeletingAnnouncement] = useState(null)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // Fetch all announcements
  const fetchAnnouncements = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_NODE_URL}announcement/all`, {
        method: "GET",
        credentials: "include",
      })
      const data = await response.json()
      if (data.status) {
        setAnnouncements(data.data)
      } else {
        setError("Failed to fetch announcements")
      }
    } catch (err) {
      setError("Error connecting to server")
      console.error("Fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  // Toggle announcement status
  const toggleStatus = async (id, currentStatus) => {
    try {
      const response = await fetch(`${API_NODE_URL}announcement/toggle-status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          status: !currentStatus,
        }),
        credentials: "include",
      })
      const data = await response.json()
      if (data.status) {
        setSuccess(`Announcement ${!currentStatus ? "activated" : "deactivated"} successfully`)
        fetchAnnouncements()
        setTimeout(() => setSuccess(""), 3000)
      } else {
        setError(data.message || "Failed to update status")
      }
    } catch (err) {
      setError("Error updating status")
      console.error("Toggle error:", err)
    }
  }

  // Delete announcement
  const deleteAnnouncement = async (id) => {
    try {
      const response = await fetch(`${API_NODE_URL}announcement/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id }),
        credentials: "include",
      })
      const data = await response.json()
      if (data.status) {
        setSuccess("Announcement deleted successfully")
        fetchAnnouncements()
        setIsDeleteModalOpen(false)
        setDeletingAnnouncement(null)
        setTimeout(() => setSuccess(""), 3000)
      } else {
        setError(data.message || "Failed to delete announcement")
      }
    } catch (err) {
      setError("Error deleting announcement")
      console.error("Delete error:", err)
    }
  }

  // Handle edit click
  const handleEdit = (announcement) => {
    setEditingAnnouncement(announcement)
    setIsModalOpen(true)
  }

  // Handle delete click
  const handleDelete = (announcement) => {
    setDeletingAnnouncement(announcement)
    setIsDeleteModalOpen(true)
  }

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false)
    setEditingAnnouncement(null)
  }

  // Handle successful save
  const handleSaveSuccess = () => {
    fetchAnnouncements()
    handleModalClose()
    setSuccess(editingAnnouncement ? "Announcement updated successfully" : "Announcement created successfully")
    setTimeout(() => setSuccess(""), 3000)
  }

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(""), 5000)
    }
  }, [error])

  return (
    <Layout>

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Announcements</h1>
              <p className="mt-1 text-sm text-gray-500">Manage your announcements and their visibility</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Plus className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Add New Announcement</span>
              <span className="sm:hidden">Add New</span>
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      {success && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">{success}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className=" mx-auto px-2 py-8">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : announcements.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4.5"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No announcements yet</h3>
            <p className="mt-2 text-gray-500">Get started by creating your first announcement.</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add New Announcement
            </button>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Link
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Updated
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 overflow-x-scroll">
                  {announcements.map((announcement) => (
                    <tr key={announcement._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${announcement.status ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                              }`}
                          >
                            {announcement.status ? "Active" : "Inactive"}
                          </span>
                          <button
                            onClick={() => toggleStatus(announcement._id, announcement.status)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${announcement.status ? "bg-blue-600" : "bg-gray-200"
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${announcement.status ? "translate-x-6" : "translate-x-1"
                                }`}
                            />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                          {announcement.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a
                          href={announcement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(announcement.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {announcement.updatedAt !== announcement.createdAt
                          ? formatDate(announcement.updatedAt)
                          : "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => handleEdit(announcement)}
                            className="inline-flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-md transition-colors duration-200"
                          >
                            <Edit2 className="w-4 h-4 mr-1" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(announcement)}
                            className="inline-flex items-center px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-sm font-medium rounded-md transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile List View */}
            <div className="md:hidden space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement._id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${announcement.status ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      {announcement.status ? "Active" : "Inactive"}
                    </span>
                    <button
                      onClick={() => toggleStatus(announcement._id, announcement.status)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${announcement.status ? "bg-blue-600" : "bg-gray-200"
                        }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${announcement.status ? "translate-x-6" : "translate-x-1"
                          }`}
                      />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">{announcement.title}</h3>

                  {/* Link */}
                  <div className="mb-3">
                    <a
                      href={announcement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Link
                    </a>
                  </div>

                  {/* Timestamps */}
                  <div className="space-y-1 mb-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-2" />
                      <span className="font-medium">Created:</span>
                      <span className="ml-1">{formatDate(announcement.createdAt)}</span>
                    </div>
                    {announcement.updatedAt !== announcement.createdAt && (
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-2" />
                        <span className="font-medium">Updated:</span>
                        <span className="ml-1">{formatDate(announcement.updatedAt)}</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(announcement)}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      <Edit2 className="w-4 h-4 mr-2" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(announcement)}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Modals */}
      <AnnouncementModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSuccess={handleSaveSuccess}
        announcement={editingAnnouncement}
        onError={setError}
      />
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false)
          setDeletingAnnouncement(null)
        }}
        onConfirm={() => deleteAnnouncement(deletingAnnouncement._id)}
        announcement={deletingAnnouncement}
      />
    </Layout>
  )
}
