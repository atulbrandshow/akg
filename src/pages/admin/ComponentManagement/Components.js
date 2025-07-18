"use client"

import { API_NODE_URL } from "@/configs/config"
import { useState, useEffect } from "react"

export default function ComponentForm() {
  const [formData, setFormData] = useState({
    componentType: "",
    componentName: "",
    category: "",
    status: "Active",
    addedby: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })
  const [components, setComponents] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editFormData, setEditFormData] = useState({})
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  const categories = ["Loose", "Page", "Widget", "Layout", "Component"]
  const statusOptions = ["Active", "Inactive", "Draft"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Auto-generate componentName from componentType
    if (name === "componentType") {
      const generatedName = value.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "")
      setFormData((prev) => ({
        ...prev,
        componentName: generatedName,
      }))
    }
  }

  const handleEditInputChange = (e) => {
    const { name, value } = e.target
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Auto-generate componentName from componentType for edit form too
    if (name === "componentType") {
      const generatedName = value.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "")
      setEditFormData((prev) => ({
        ...prev,
        componentName: generatedName,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ type: "", text: "" })

    try {
      const response = await fetch(`${API_NODE_URL}components`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.status) {
        setMessage({ type: "success", text: result.message })
        setFormData({
          componentType: "",
          componentName: "",
          category: "",
          status: "Active",
          addedby: "",
        })
        fetchComponents()
      } else {
        setMessage({ type: "error", text: result.message })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Error creating component. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fetchComponents = async (page = currentPage, search = searchTerm) => {
    setLoading(true)
    try {
      const response = await fetch(`${API_NODE_URL}components?page=${page}&limit=10&search=${search}`)
      const result = await response.json()
      if (result.status) {
        setComponents(result.data)
        setTotal(result.total)
        setCurrentPage(result.currentPage)
        setTotalPages(result.totalPages)
      }
    } catch (error) {
      console.error("Error fetching components:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (component) => {
    setEditingId(component._id)
    setEditFormData({
      componentType: component.componentType,
      componentName: component.componentName,
      category: component.category,
      status: component.status,
      editedby: "user", // You can make this dynamic
    })
  }

  const handleSaveEdit = async (id) => {
    try {
      const response = await fetch(`${API_NODE_URL}components/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editFormData),
      })

      const result = await response.json()

      if (result.status) {
        setMessage({ type: "success", text: result.message })
        setEditingId(null)
        setEditFormData({})
        fetchComponents()
      } else {
        setMessage({ type: "error", text: result.message })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Error updating component" })
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditFormData({})
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_NODE_URL}components/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ editedby: "user" }),
      })

      const result = await response.json()

      if (result.status) {
        setMessage({ type: "success", text: result.message })
        setDeleteConfirm(null)
        fetchComponents()
      } else {
        setMessage({ type: "error", text: result.message })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Error deleting component" })
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setCurrentPage(1)
    fetchComponents(1, searchTerm)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    fetchComponents(page, searchTerm)
  }

  const generateSampleData = (type) => {
    const samples = {
      holder: {
        componentType: `Holder ${Math.floor(Math.random() * 100) + 1}`,
        category: "Loose",
      },
      page: {
        componentType: "Sample Page",
        category: "Page",
      },
      calculator: {
        componentType: "Sample Calculator",
        category: "Page",
      },
    }

    const sample = samples[type]
    setFormData((prev) => ({
      ...prev,
      componentType: sample.componentType,
      componentName: sample.componentType.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, ""),
      category: sample.category,
    }))
  }

  useEffect(() => {
    fetchComponents()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-full mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">Component Management</h1>
            <p className="text-blue-100 mt-2">Add, edit, and manage your application components</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 p-8">
            {/* Form Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-800">Add New Component</h2>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => generateSampleData("holder")}
                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    Holder Sample
                  </button>
                  <button
                    type="button"
                    onClick={() => generateSampleData("page")}
                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    Page Sample
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Component Type *</label>
                  <input
                    type="text"
                    name="componentType"
                    value={formData.componentType}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Holder 1, Report Page"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Component Name *</label>
                  <input
                    type="text"
                    name="componentName"
                    value={formData.componentName}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Holder1, Report"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Added By</label>
                  <input
                    type="text"
                    name="addedby"
                    value={formData.addedby}
                    onChange={handleInputChange}
                    placeholder="User ID or Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Creating...
                    </div>
                  ) : (
                    "Create Component"
                  )}
                </button>
              </form>

              {/* Message Display */}
              {message.text && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    message.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  {message.text}
                </div>
              )}
            </div>

            {/* Components List Section */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-800">Components ({total})</h2>

                {/* Search */}
                <form onSubmit={handleSearch} className="flex gap-2">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search components..."
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Search
                  </button>
                </form>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 max-h-96 overflow-y-auto">
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : components.length > 0 ? (
                  <div className="space-y-3">
                    {components.map((component) => (
                      <div key={component._id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        {editingId === component._id ? (
                          // Edit Mode
                          <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <input
                                type="text"
                                name="componentType"
                                value={editFormData.componentType}
                                onChange={handleEditInputChange}
                                className="px-2 py-1 border border-gray-300 rounded text-sm"
                                placeholder="Component Type"
                              />
                              <input
                                type="text"
                                name="componentName"
                                value={editFormData.componentName}
                                onChange={handleEditInputChange}
                                className="px-2 py-1 border border-gray-300 rounded text-sm"
                                placeholder="Component Name"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <select
                                name="category"
                                value={editFormData.category}
                                onChange={handleEditInputChange}
                                className="px-2 py-1 border border-gray-300 rounded text-sm"
                              >
                                {categories.map((cat) => (
                                  <option key={cat} value={cat}>
                                    {cat}
                                  </option>
                                ))}
                              </select>
                              <select
                                name="status"
                                value={editFormData.status}
                                onChange={handleEditInputChange}
                                className="px-2 py-1 border border-gray-300 rounded text-sm"
                              >
                                {statusOptions.map((status) => (
                                  <option key={status} value={status}>
                                    {status}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleSaveEdit(component._id)}
                                className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancelEdit}
                                className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          // View Mode
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">{component.componentType}</h3>
                              <p className="text-sm text-gray-600 mt-1">Name: {component.componentName}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <span
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    component.category === "Page"
                                      ? "bg-blue-100 text-blue-800"
                                      : component.category === "Loose"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-gray-100 text-gray-800"
                                  }`}
                                >
                                  {component.category}
                                </span>
                                <span
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    component.status === "Active"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {component.status}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <button
                                onClick={() => handleEdit(component)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Edit"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  />
                                </svg>
                              </button>
                              <button
                                onClick={() => setDeleteConfirm(component._id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>No components found</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 border rounded-lg transition-colors ${
                        currentPage === page
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this component? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
