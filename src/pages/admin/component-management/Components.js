"use client"

import { useState, useEffect } from "react"
import { Edit, Trash2, Save, X, ChevronLeft, ChevronRight, Search, Loader2 } from "lucide-react"
import { API_NODE_URL } from "@/configs/config"

// EditComponentModal Component
function EditComponentModal({ isOpen, onClose, componentData, onSave, categories, statusOptions }) {
  const [editFormData, setEditFormData] = useState(componentData)

  useEffect(() => {
    setEditFormData(componentData)
  }, [componentData])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Auto-generate componentName from componentType
    if (name === "componentType") {
      const generatedName = value.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "")
      setEditFormData((prev) => ({
        ...prev,
        componentName: generatedName,
      }))
    }
  }

  const handleSave = () => {
    onSave(editFormData)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg transform transition-all duration-300 scale-95 animate-scaleIn">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h3 className="text-2xl font-novaBold text-gray-800">Edit Component</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <form className="space-y-5">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Component Type *</label>
            <input
              type="text"
              name="componentType"
              value={editFormData?.componentType || ""}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Component Name *</label>
            <input
              type="text"
              name="componentName"
              value={editFormData?.componentName || ""}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Category *</label>
              <select
                name="category"
                value={editFormData?.category || ""}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
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
              <label className="block text-sm font-semibold text-gray-700">Status</label>
              <select
                name="status"
                value={editFormData?.status || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
        <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

// Main ComponentForm Component
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
  const [editingComponent, setEditingComponent] = useState(null) // Stores component being edited
  const [showEditModal, setShowEditModal] = useState(false) // Controls modal visibility
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
    if (name === "componentType") {
      const generatedName = value.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "")
      setFormData((prev) => ({
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
      setMessage({ type: "error", text: "Failed to load components." })
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (component) => {
    setEditingComponent(component)
    setShowEditModal(true)
  }

  const handleSaveEdit = async (updatedData) => {
    try {
      const response = await fetch(`${API_NODE_URL}components/${editingComponent._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...updatedData, editedby: "user" }), // Add editedby field
      })
      const result = await response.json()
      if (result.status) {
        setMessage({ type: "success", text: result.message })
        setShowEditModal(false)
        setEditingComponent(null)
        fetchComponents()
      } else {
        setMessage({ type: "error", text: result.message })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Error updating component" })
    }
  }

  const handleCancelEdit = () => {
    setShowEditModal(false)
    setEditingComponent(null)
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
    <>
      <div className="">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-6">
            <h1 className="text-3xl font-novaBold text-white">Component Management</h1>
            <p className="text-blue-100 font-novaReg text-lg">Add, edit, and manage your application components with ease.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 p-8">
            {/* Form Section */}
            <div className="lg:col-span-2 space-y-6 bg-gray-50 p-6 rounded-xl shadow-inner">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h2 className="text-2xl font-novaBold text-gray-800">Add New Component</h2>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => generateSampleData("holder")}
                    className="px-4 py-1.5 text-xs bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors duration-200 font-medium"
                  >
                    Holder Sample
                  </button>
                  <button
                    type="button"
                    onClick={() => generateSampleData("page")}
                    className="px-4 py-1.5 text-xs bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors duration-200 font-medium"
                  >
                    Page Sample
                  </button>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Component Type *</label>
                  <input
                    type="text"
                    name="componentType"
                    value={formData.componentType}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Holder 1, Report Page"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Component Name *</label>
                  <input
                    type="text"
                    name="componentName"
                    value={formData.componentName}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Holder1, Report"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
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
                  <label className="block text-sm font-semibold text-gray-700">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Added By</label>
                  <input
                    type="text"
                    name="addedby"
                    value={formData.addedby}
                    onChange={handleInputChange}
                    placeholder="User ID or Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 px-4 rounded-lg font-novaBold hover:from-blue-700 hover:to-purple-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Creating...
                    </>
                  ) : (
                    "Create Component"
                  )}
                </button>
              </form>
              {/* Message Display */}
              {message.text && (
                <div
                  className={`p-4 rounded-lg text-sm font-medium ${message.type === "success"
                      ? "bg-green-100 border border-green-300 text-green-800"
                      : "bg-red-100 border border-red-300 text-red-800"
                    } transition-all duration-300 animate-fadeIn`}
                >
                  {message.text}
                </div>
              )}
            </div>

            {/* Components List Section */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h2 className="text-2xl font-novaBold text-gray-800">Components ({total})</h2>
                {/* Search */}
                <form onSubmit={handleSearch} className="flex gap-3 w-full sm:w-auto">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search components..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    Search
                  </button>
                </form>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 max-h-[600px] overflow-y-auto shadow-inner">
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                    <span className="ml-3 text-lg text-gray-600">Loading components...</span>
                  </div>
                ) : components.length > 0 ? (
                  <div className="space-y-4">
                    {components.map((component) => (
                      <div
                        key={component._id}
                        className="bg-white p-3 rounded-lg shadow-md border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-lg transition-shadow duration-200"
                      >
                        <div className="flex-1">
                          <h3 className="font-novaBold text-gray-900 text-lg">{component.componentType}</h3>
                          <p className="text-sm text-gray-600 mt-1">Name: {component.componentName}</p>
                          <div className="flex flex-wrap items-center gap-2 mt-3">
                            <span
                              className={`px-3 py-1 text-xs rounded-full font-semibold ${component.category === "Page"
                                  ? "bg-blue-100 text-blue-800"
                                  : component.category === "Loose"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                            >
                              {component.category}
                            </span>
                            <span
                              className={`px-3 py-1 text-xs rounded-full font-semibold ${component.status === "Active"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                                }`}
                            >
                              {component.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4 sm:mt-0">
                          <button
                            onClick={() => handleEdit(component)}
                            className="p-3 text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
                            title="Edit"
                            aria-label={`Edit ${component.componentType}`}
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(component._id)}
                            className="p-3 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
                            title="Delete"
                            aria-label={`Delete ${component.componentType}`}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500 text-lg">
                    <p>No components found. Try adding a new one!</p>
                  </div>
                )}
              </div>
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-6">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors duration-200 flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 border rounded-lg transition-colors duration-200 font-medium ${currentPage === page
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "border-gray-300 hover:bg-gray-100"
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors duration-200 flex items-center gap-1"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-auto shadow-2xl transform transition-all duration-300 scale-95 animate-scaleIn">
            <h3 className="text-xl font-novaBold text-gray-900 mb-4">Confirm Deletion</h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete this component? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Component Modal */}
      <EditComponentModal
        isOpen={showEditModal}
        onClose={handleCancelEdit}
        componentData={editingComponent}
        onSave={handleSaveEdit}
        categories={categories}
        statusOptions={statusOptions}
      />
    </>
  )
}
