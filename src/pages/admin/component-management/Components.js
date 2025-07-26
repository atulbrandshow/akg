"use client"
import { useState, useEffect } from "react"
import { Plus, X, Search, Filter, Download, RefreshCw, Save, Loader2, Edit, Trash2 } from "lucide-react"
import { API_NODE_URL } from "@/configs/config"

// Function to convert kebab-case to PascalCase
const kebabToPascalCase = (str) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("")
}

// Add Component Modal
function AddComponentModal({ isOpen, onClose, onSave, categories, statusOptions }) {
  const [formData, setFormData] = useState({
    componentType: "",
    componentName: "",
    category: "",
    status: "Active",
    addedby: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      }

      // Auto-generate componentType from componentName
      if (name === "componentName") {
        updated.componentType = kebabToPascalCase(value)
      }

      return updated
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(`${API_NODE_URL}components`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.status) {
        onSave(result.message)
        setFormData({
          componentType: "",
          componentName: "",
          category: "",
          status: "Active",
          addedby: "",
        })
        onClose()
      } else {
        alert(result.message)
      }
    } catch (error) {
      alert("Error creating component. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const generateSampleData = (type) => {
    const samples = {
      holder: {
        componentName: `holder-${Math.floor(Math.random() * 100) + 1}`,
        category: "Loose",
      },
      page: {
        componentName: "sample-page",
        category: "Page",
      },
    }
    const sample = samples[type]
    setFormData((prev) => ({
      ...prev,
      componentName: sample.componentName,
      componentType: kebabToPascalCase(sample.componentName),
      category: sample.category,
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg transform transition-all duration-300">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h3 className="text-2xl font-novaBold text-gray-800">Add New Component</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sample Data Buttons */}
        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={() => generateSampleData("holder")}
            className="px-4 py-1.5 text-xs bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors duration-200 font-novaSemi"
          >
            Holder Sample
          </button>
          <button
            type="button"
            onClick={() => generateSampleData("page")}
            className="px-4 py-1.5 text-xs bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors duration-200 font-novaSemi"
          >
            Page Sample
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="block text-sm font-novaSemi text-gray-700">Component Name *</label>
            <input
              type="text"
              name="componentName"
              value={formData.componentName}
              onChange={handleInputChange}
              required
              placeholder="e.g., admission-criteria, our-identity"
              className="w-full px-4 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            {formData.componentName && (
              <p className="text-xs text-gray-500">Component Type: {formData.componentType}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-novaSemi text-gray-700">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
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
            <label className="block text-sm font-novaSemi text-gray-700">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-novaSemi text-gray-700">Added By</label>
            <input
              type="text"
              name="addedby"
              value={formData.addedby}
              onChange={handleInputChange}
              placeholder="User ID or Name"
              className="w-full px-4 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 font-novaSemi rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-novaSemi hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Creating...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" /> Add Component
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Edit Component Modal
function EditComponentModal({ isOpen, onClose, componentData, onSave, categories, statusOptions }) {
  const [editFormData, setEditFormData] = useState(componentData || {})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setEditFormData(componentData || {})
  }, [componentData])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditFormData((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      }

      // Auto-generate componentType from componentName
      if (name === "componentName") {
        updated.componentType = kebabToPascalCase(value)
      }

      return updated
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(`${API_NODE_URL}components/${componentData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...editFormData, editedby: "user" }),
      })

      const result = await response.json()

      if (result.status) {
        onSave(result.message)
        onClose()
      } else {
        alert(result.message)
      }
    } catch (error) {
      alert("Error updating component. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg transform transition-all duration-300">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h3 className="text-2xl font-bold text-gray-800">Edit Component</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="block text-sm font-novaSemi text-gray-700">Component Name *</label>
            <input
              type="text"
              name="componentName"
              value={editFormData?.componentName || ""}
              onChange={handleInputChange}
              required
              placeholder="e.g., admission-criteria, our-identity"
              className="w-full px-4 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            {editFormData?.componentName && (
              <p className="text-xs text-gray-500">Component Type: {editFormData.componentType}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-novaSemi text-gray-700">Category *</label>
            <select
              name="category"
              value={editFormData?.category || ""}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
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
            <label className="block text-sm font-novaSemi text-gray-700">Status</label>
            <select
              name="status"
              value={editFormData?.status || ""}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-novaSemi text-gray-700">Added By</label>
            <input
              type="text"
              name="addedby"
              value={editFormData?.addedby || ""}
              onChange={handleInputChange}
              placeholder="User ID or Name"
              className="w-full px-4 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Updating...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" /> Update Component
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function ComponentManager() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [components, setComponents] = useState([])
  const [filteredComponents, setFilteredComponents] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [message, setMessage] = useState({ type: "", text: "" })
  const [editingComponent, setEditingComponent] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  const categories = ["Loose", "Page", "Widget", "Layout", "Component"]
  const statusOptions = ["Active", "Inactive", "Draft"]
  const filterCategories = ["All", ...categories]
  const filterStatusOptions = ["All", ...statusOptions]

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10) // You can make this configurable
  const [totalPages, setTotalPages] = useState(1)

  // Fetch components data
  const fetchComponents = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_NODE_URL}components?limit=1000`, {
        credentials: "include",
      })
      const result = await response.json()
      if (result.status) {
        setComponents(result.data)
        setFilteredComponents(result.data)
      }
    } catch (error) {
      console.error("Error fetching components:", error)
      setMessage({ type: "error", text: "Failed to load components." })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchComponents();
  }, [])

  // Filter components based on search and filters with pagination
  const applyFilters = () => {
    let filtered = components

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (component) =>
          component.componentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          component.componentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          component.category.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Category filter
    if (filterCategory && filterCategory !== "All") {
      filtered = filtered.filter((component) => component.category === filterCategory)
    }

    // Status filter
    if (filterStatus && filterStatus !== "All") {
      filtered = filtered.filter((component) => component.status === filterStatus)
    }

    // Calculate pagination
    const total = Math.ceil(filtered.length / itemsPerPage)
    setTotalPages(total)

    // Apply pagination
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedData = filtered.slice(startIndex, endIndex)

    setFilteredComponents(paginatedData)
  }

  // Handle successful component addition
  const handleComponentAdded = (successMessage) => {
    setMessage({ type: "success", text: successMessage })
    fetchComponents()
    setTimeout(() => setMessage({ type: "", text: "" }), 5000)
  }

  // Handle edit component
  const handleEdit = (component) => {
    setEditingComponent(component)
    setShowEditModal(true)
  }

  // Handle save edit
  const handleSaveEdit = (successMessage) => {
    setMessage({ type: "success", text: successMessage })
    setShowEditModal(false)
    setEditingComponent(null)
    fetchComponents()
    setTimeout(() => setMessage({ type: "", text: "" }), 5000)
  }

  // Handle cancel edit
  const handleCancelEdit = () => {
    setShowEditModal(false)
    setEditingComponent(null)
  }

  // Handle delete component
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_NODE_URL}components/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ editedby: "user" }),
      })

      const result = await response.json()

      if (result.status) {
        setMessage({ type: "success", text: result.message })
        setDeleteConfirm(null)
        fetchComponents()
        setTimeout(() => setMessage({ type: "", text: "" }), 5000)
      } else {
        setMessage({ type: "error", text: result.message })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Error deleting component" })
    }
  }

  // Pagination handlers
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Reset to first page when filters change
  const resetToFirstPage = () => {
    setCurrentPage(1)
  }

  // Apply filters when dependencies change and reset to first page
  useEffect(() => {
    resetToFirstPage()
  }, [searchTerm, filterCategory, filterStatus])

  // Apply filters when page or components change
  useEffect(() => {
    applyFilters()
  }, [currentPage, components, searchTerm, filterCategory, filterStatus, itemsPerPage])

  return (
    <>
      <div>
        <div>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl px-8 py-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-novaBold text-white">Component Manager</h1>
                <p className="text-blue-100 font-novaReg">Manage all your application components</p>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-novaBold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <Plus className="w-5 h-5" />
                Add Component
              </button>
            </div>
          </div>

          {/* Success/Error Message */}
          {message.text && (
            <div
              className={`mb-6 p-4 rounded-lg text-sm font-novaReg ${message.type === "success"
                ? "bg-green-100 border border-green-300 text-green-800"
                : "bg-red-100 border border-red-300 text-red-800"
                } transition-all duration-300`}
            >
              {message.text}
            </div>
          )}

          {/* Filters and Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-3 flex-1">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search components..."
                    className="pl-10 pr-4 py-2 border font-novaReg border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-full sm:w-64"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>

                {/* Category Filter */}
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                >
                  {filterCategories.map((cat) => (
                    <option key={cat} value={cat === "All" ? "" : cat}>
                      {cat} Category
                    </option>
                  ))}
                </select>

                {/* Status Filter */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                >
                  {filterStatusOptions.map((status) => (
                    <option key={status} value={status === "All" ? "" : status}>
                      {status} Status
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={fetchComponents}
                  className="px-4 py-2 bg-gray-600 font-novaSemi text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
              </div>
            </div>

            {/* Component Count */}
            <div className="mt-4 text-sm font-novaReg text-gray-600">
              Showing {Math.min(itemsPerPage, filteredComponents.length)} of{" "}
              {
                components.filter((component) => {
                  let filtered = true
                  if (searchTerm) {
                    filtered =
                      filtered &&
                      (component.componentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        component.componentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        component.category.toLowerCase().includes(searchTerm.toLowerCase()))
                  }
                  if (filterCategory && filterCategory !== "All") {
                    filtered = filtered && component.category === filterCategory
                  }
                  if (filterStatus && filterStatus !== "All") {
                    filtered = filtered && component.status === filterStatus
                  }
                  return filtered
                }).length
              }{" "}
              components • Page {currentPage} of {totalPages}
            </div>
          </div>

          {/* Components Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <RefreshCw className="w-8 h-8 text-blue-600 animate-spin" />
                <span className="ml-3 text-lg text-gray-600">Loading components...</span>
              </div>
            ) : filteredComponents.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-novaSemi text-gray-700 uppercase">
                        #
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-novaSemi text-gray-700 uppercase">
                        Component Type
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-novaSemi text-gray-700 uppercase">
                        Component Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-novaSemi text-gray-700 uppercase">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-novaSemi text-gray-700 uppercase">
                        Status
                      </th>
                      {/* <th className="px-6 py-4 text-left text-sm font-novaSemi text-gray-700 uppercase">
                        Added By
                      </th> */}
                      <th className="px-6 py-4 text-left text-sm font-novaSemi text-gray-700 uppercase">
                        Created Date
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredComponents.map((component, index) => (
                      <tr key={component._id} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-novaSemi text-gray-500">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-novaBold text-gray-900">{component.componentType}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700 font-novaReg w-fit bg-gray-100 px-2 py-1 rounded">
                            {component.componentName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-3 py-1 text-xs font-novaSemi rounded-full ${component.category === "Page"
                              ? "bg-blue-100 text-blue-800"
                              : component.category === "Loose"
                                ? "bg-green-100 text-green-800"
                                : component.category === "Widget"
                                  ? "bg-purple-100 text-purple-800"
                                  : component.category === "Layout"
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                          >
                            {component.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-3 py-1 text-xs font-novaSemi rounded-full ${component.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : component.status === "Inactive"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                              }`}
                          >
                            {component.status}
                          </span>
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {component.addedby || "N/A"}
                        </td> */}
                        <td className="px-6 py-4 whitespace-nowrap font-novaSemi text-sm text-gray-500">
                          {component.addedon
                            ? new Date(component.addedon).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                            : "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleEdit(component)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
                              title="Edit Component"
                              aria-label={`Edit ${component.componentType}`}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(component._id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
                              title="Delete Component"
                              aria-label={`Delete ${component.componentType}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-novaSemi text-gray-600 mb-2">No Components Found</h3>
                <p className="text-gray-500 mb-4">
                  {searchTerm || filterCategory || filterStatus
                    ? "Try adjusting your search or filter criteria"
                    : "No components available at the moment"}
                </p>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
                >
                  <Plus className="w-4 h-4" />
                  Add First Component
                </button>
              </div>
            )}
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-700">
                  <span>
                    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                    {Math.min(
                      currentPage * itemsPerPage,
                      components.filter((component) => {
                        let filtered = true
                        if (searchTerm) {
                          filtered =
                            filtered &&
                            (component.componentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              component.componentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              component.category.toLowerCase().includes(searchTerm.toLowerCase()))
                        }
                        if (filterCategory && filterCategory !== "All") {
                          filtered = filtered && component.category === filterCategory
                        }
                        if (filterStatus && filterStatus !== "All") {
                          filtered = filtered && component.status === filterStatus
                        }
                        return filtered
                      }).length,
                    )}{" "}
                    of{" "}
                    {
                      components.filter((component) => {
                        let filtered = true
                        if (searchTerm) {
                          filtered =
                            filtered &&
                            (component.componentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              component.componentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              component.category.toLowerCase().includes(searchTerm.toLowerCase()))
                        }
                        if (filterCategory && filterCategory !== "All") {
                          filtered = filtered && component.category === filterCategory
                        }
                        if (filterStatus && filterStatus !== "All") {
                          filtered = filtered && component.status === filterStatus
                        }
                        return filtered
                      }).length
                    }{" "}
                    results
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum
                      if (totalPages <= 5) {
                        pageNum = i + 1
                      } else if (currentPage <= 3) {
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i
                      } else {
                        pageNum = currentPage - 2 + i
                      }

                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${currentPage === pageNum
                            ? "bg-blue-600 text-white border border-blue-600"
                            : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                            }`}
                        >
                          {pageNum}
                        </button>
                      )
                    })}

                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <>
                        <span className="px-2 text-gray-500">...</span>
                        <button
                          onClick={() => handlePageChange(totalPages)}
                          className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
                        >
                          {totalPages}
                        </button>
                      </>
                    )}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Component Modal */}
      <AddComponentModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleComponentAdded}
        categories={categories}
        statusOptions={statusOptions}
      />

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-auto shadow-2xl transform transition-all duration-300">
            <h3 className="text-xl font-novaBold text-gray-900 mb-4">Confirm Deletion</h3>
            <p className="text-gray-700 mb-6 font-novaReg">
              Are you sure you want to delete this component? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-6 py-2 border border-gray-300 font-novaSemi rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-6 py-2 bg-red-600 text-white font-novaSemi rounded-lg hover:bg-red-700 transition-all duration-200"
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
