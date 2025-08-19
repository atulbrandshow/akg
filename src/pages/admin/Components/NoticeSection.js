"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, Search, Calendar, User, Building, AlertCircle, Eye, FileText, Save, X } from "lucide-react"
import FileUpload from "./FileUpload"
import AttachmentViewer from "./AttachmentViewer"
import { API_NODE_URL } from "@/configs/config"

export default function NoticeSection() {
  const [notices, setNotices] = useState([])
  const [filteredNotices, setFilteredNotices] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingNotice, setEditingNotice] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("")
  const [filterPriority, setFilterPriority] = useState("")
  const [stats, setStats] = useState({})

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "General",
    priority: "Medium",
    department: "",
    author: {
      name: "",
      email: "",
      designation: "",
    },
    deadline: "",
    tags: "",
    attachments: [],
  })

  const categories = ["Academic", "Administrative", "Events", "Examinations", "General", "Sports", "Cultural"]
  const priorities = ["Low", "Medium", "High", "Urgent"]

  useEffect(() => {
    fetchNotices()
    fetchStats()
  }, [])

  useEffect(() => {
    filterNotices()
  }, [notices, searchTerm, filterCategory, filterPriority])

  const fetchNotices = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_NODE_URL}notices`)
      const data = await response.json()
      if (data.success) {
        setNotices(data.data.notices)
      }
    } catch (error) {
      console.error("Error fetching notices:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_NODE_URL}notices/stats`)
      const data = await response.json()
      if (data.success) {
        setStats(data.data)
      }
    } catch (error) {
      console.error("Error fetching stats:", error)
    }
  }

  const filterNotices = () => {
    let filtered = notices

    if (searchTerm) {
      filtered = filtered.filter(
        (notice) =>
          notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          notice.department.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (filterCategory) {
      filtered = filtered.filter((notice) => notice.category === filterCategory)
    }

    if (filterPriority) {
      filtered = filtered.filter((notice) => notice.priority === filterPriority)
    }

    setFilteredNotices(filtered)
  }

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      category: "General",
      priority: "Medium",
      department: "",
      author: {
        name: "",
        email: "",
        designation: "",
      },
      deadline: "",
      tags: "",
      attachments: [],
    })
    setEditingNotice(null)
    setShowCreateForm(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const submitData = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      deadline: formData.deadline || null,
    }

    try {
      const url = editingNotice
        ? `${API_NODE_URL}notices/${editingNotice._id}`
        : `${API_NODE_URL}notices`

      const method = editingNotice ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      })

      const data = await response.json()

      if (data.success) {
        await fetchNotices()
        await fetchStats()
        resetForm()
        alert(editingNotice ? "Notice updated successfully!" : "Notice created successfully!")
      } else {
        alert(data.message || "Error saving notice")
      }
    } catch (error) {
      console.error("Error saving notice:", error)
      alert("Error saving notice")
    }
  }

  const handleEdit = (notice) => {
    setFormData({
      ...notice,
      deadline: notice.deadline ? new Date(notice.deadline).toISOString().split("T")[0] : "",
      tags: notice.tags.join(", "),
    })
    setEditingNotice(notice)
    setShowCreateForm(true)
  }

  const handleDelete = async (noticeId) => {
    if (!confirm("Are you sure you want to delete this notice?")) return

    try {
      const response = await fetch(`${API_NODE_URL}notices/${noticeId}`, {
        method: "DELETE",
      })

      const data = await response.json()

      if (data.success) {
        await fetchNotices()
        await fetchStats()
        alert("Notice deleted successfully!")
      } else {
        alert(data.message || "Error deleting notice")
      }
    } catch (error) {
      console.error("Error deleting notice:", error)
      alert("Error deleting notice")
    }
  }

  const handleFilesUploaded = (uploadedFiles) => {
    setFormData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...uploadedFiles],
    }))
  }

  const removeAttachment = (index) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }))
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Urgent":
        return "bg-red-100 text-red-800 border-red-200"
      case "High":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notice Management</h1>
          <p className="text-gray-600 mt-1">Create, edit, and manage university notices</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Create Notice
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Priorities</option>
            {priorities.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Create/Edit Form Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingNotice ? "Edit Notice" : "Create New Notice"}
                </h2>
                <button onClick={resetForm} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter notice title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                    <input
                      type="text"
                      required
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter department name"
                    />
                  </div>
                </div>

                {/* Category and Priority */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {priorities.map((priority) => (
                        <option key={priority} value={priority}>
                          {priority}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter notice content"
                  />
                </div>

                {/* Author Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Author Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        value={formData.author.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            author: { ...formData.author, name: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Author name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.author.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            author: { ...formData.author, email: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Author email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Designation *</label>
                      <input
                        type="text"
                        value={formData.author.designation}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            author: { ...formData.author, designation: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Author designation"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deadline (Optional)</label>
                    <input
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags (Optional)</label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter tags separated by commas"
                    />
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Attachments</label>
                  <FileUpload onFilesUploaded={handleFilesUploaded} />
                  {formData.attachments.length > 0 && (
                    <div className="mt-4">
                      <AttachmentViewer
                        attachments={formData.attachments}
                        onRemove={removeAttachment}
                        editable={true}
                      />
                    </div>
                  )}
                </div>

                {/* Form Actions */}
                <div className="flex justify-end gap-4 pt-4 border-t">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    {editingNotice ? "Update Notice" : "Create Notice"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Notices List */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Notices</h2>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-500 mt-2">Loading notices...</p>
            </div>
          ) : filteredNotices.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No notices found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredNotices.map((notice) => (
                <div
                  key={notice._id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{notice.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {notice.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {notice.author.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(notice.createdAt).toLocaleDateString()}
                        </span>
                        {/* <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {notice.views} views
                        </span> */}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(notice.priority)}`}
                      >
                        {notice.priority}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full border border-blue-200">
                        {notice.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-3 line-clamp-2">{notice.content}</p>

                  {notice.attachments && notice.attachments.length > 0 && (
                    <div className="mb-3">
                      <span className="text-sm text-gray-600 flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {notice.attachments.length} attachment{notice.attachments.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleEdit(notice)}
                      className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(notice._id)}
                      className="flex items-center gap-1 px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
