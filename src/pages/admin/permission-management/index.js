"use client"
import { useState, useEffect, useRef } from "react"
import { toast } from "react-toastify"
import Layout from "../Components/Layout"
import { menuItems, submodules } from "@/configs/sidebarMenu"
import { API_NODE_URL } from "@/configs/config"

// Module Selector Component
const ModuleSelector = ({ availableModules, selectedModules, onModulesChange, placeholder = "Search modules..." }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const searchInputRef = useRef(null)
  const dropdownRef = useRef(null)

  // Filter modules based on search term
  const filteredModules = availableModules
    .filter((module) => module?.name?.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((module) => !selectedModules.some((selected) => selected.label === module?.name))

  // Handle module selection
  const handleModuleSelect = (module) => {
    const newSelected = [...selectedModules, module]
    onModulesChange(newSelected)
    setSearchTerm("")
    setIsDropdownOpen(false)
    setFocusedIndex(-1)
  }

  // Handle module removal
  const handleModuleRemove = (moduleToRemove) => {
    const newSelected = selectedModules.filter((module) => module?.name !== moduleToRemove.label)
    onModulesChange(newSelected)
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    setIsDropdownOpen(true)
    setFocusedIndex(-1)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isDropdownOpen) return
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setFocusedIndex((prev) => (prev < filteredModules.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (focusedIndex >= 0 && filteredModules[focusedIndex]) {
          handleModuleSelect(filteredModules[focusedIndex])
        }
        break
      case "Escape":
        setIsDropdownOpen(false)
        setFocusedIndex(-1)
        break
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
        setFocusedIndex(-1)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="space-y-3">
      {/* Search Input */}
      <div className="relative" ref={dropdownRef}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsDropdownOpen(true)}
            placeholder={placeholder}
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
          />
        </div>
        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
            {filteredModules.length > 0 ? (
              filteredModules.map((module, index) => (
                <div
                  key={module?.name}
                  onClick={() => handleModuleSelect(module)}
                  className={`px-3 py-2 cursor-pointer transition-colors duration-150 text-sm ${index === focusedIndex ? "bg-blue-50 border-l-4 border-blue-500" : "hover:bg-gray-50"
                    }`}
                >
                  {module?.name}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-500 text-center text-sm">
                {searchTerm ? "No modules found" : "Start typing to search"}
              </div>
            )}
          </div>
        )}
      </div>
      {/* Selected Modules */}
      {selectedModules.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedModules.map((module) => (
            <div
              key={module?.name}
              className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-md px-2 py-1 group hover:bg-blue-100 transition-colors duration-150"
            >
              <span className="text-blue-900 text-sm font-medium">{module?.name}</span>
              <button
                onClick={() => handleModuleRemove(module)}
                className="text-blue-600 hover:text-red-600 transition-colors duration-150"
                aria-label={`Remove ${module?.name}`}
              >
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Sub-Module Selector Component
const SubModuleSelector = ({
  availableModules,
  selectedModules,
  onModulesChange,
  placeholder = "Search sub-modules...",
}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const searchInputRef = useRef(null)
  const dropdownRef = useRef(null)

  // Filter modules based on search term
  const filteredModules = availableModules
    .filter((module) => module.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((module) => !selectedModules.includes(module))

  // Handle module selection
  const handleModuleSelect = (module) => {
    const newSelected = [...selectedModules, module]
    onModulesChange(newSelected)
    setSearchTerm("")
    setIsDropdownOpen(false)
    setFocusedIndex(-1)
  }

  // Handle module removal
  const handleModuleRemove = (moduleToRemove) => {
    const newSelected = selectedModules.filter((module) => module !== moduleToRemove)
    onModulesChange(newSelected)
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    setIsDropdownOpen(true)
    setFocusedIndex(-1)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isDropdownOpen) return
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setFocusedIndex((prev) => (prev < filteredModules.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (focusedIndex >= 0 && filteredModules[focusedIndex]) {
          handleModuleSelect(filteredModules[focusedIndex])
        }
        break
      case "Escape":
        setIsDropdownOpen(false)
        setFocusedIndex(-1)
        break
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
        setFocusedIndex(-1)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="space-y-3">
      {/* Search Input */}
      <div className="relative" ref={dropdownRef}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsDropdownOpen(true)}
            placeholder={placeholder}
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
          />
        </div>
        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
            {filteredModules.length > 0 ? (
              filteredModules.map((module, index) => (
                <div
                  key={module}
                  onClick={() => handleModuleSelect(module)}
                  className={`px-3 py-2 cursor-pointer transition-colors duration-150 text-sm ${index === focusedIndex ? "bg-blue-50 border-l-4 border-blue-500" : "hover:bg-gray-50"
                    }`}
                >
                  {module}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-500 text-center text-sm">
                {searchTerm ? "No modules found" : "Start typing to search"}
              </div>
            )}
          </div>
        )}
      </div>
      {/* Selected Modules */}
      {selectedModules.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedModules.map((module) => (
            <div
              key={module}
              className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-md px-2 py-1 group hover:bg-blue-100 transition-colors duration-150"
            >
              <span className="text-blue-900 text-sm font-medium">{module}</span>
              <button
                onClick={() => handleModuleRemove(module)}
                className="text-blue-600 hover:text-red-600 transition-colors duration-150"
                aria-label={`Remove ${module}`}
              >
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function PermissionManagement({ currentAdmin }) {
  const [permissions, setPermissions] = useState([])
  const [admins, setAdmins] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingPermission, setEditingPermission] = useState(null)
  const [types, setTypes] = useState([])
  const [formData, setFormData] = useState({
    admin: "",
    modules: [], // Changed to array for multiple selection
    subModules: [], // This will be used only for Pages module
    actions: [],
  })

  // Add these new state variables for search and filtering
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    admin: "",
    module: "",
    actions: "",
  })
  const [showFilters, setShowFilters] = useState(false)

  const options = [...menuItems, ...submodules]
  const subModuleMap = {
    Pages: types || [],
  }

  const availableActions = ["create", "delete", "view", "edit"]
  const token = typeof window !== "undefined" ? localStorage.getItem("admin_token")?.replaceAll(`"`, "") : null

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const [adminsRes, permissionsRes] = await Promise.all([
        fetch(`${API_NODE_URL}admin/all`, {
          headers: { Authorization: `Bearer ${token}` },
          credentials: "include",
        }).then((res) => res.json()),
        fetch(`${API_NODE_URL}permission`, {
          headers: { Authorization: `Bearer ${token}` },
          credentials: "include",
        }).then((res) => res.json()),
      ])
      setAdmins(adminsRes.data)
      setPermissions(permissionsRes.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Create separate API calls for each selected module
      const promises = formData.modules.map(async (module) => {
        const payload = {
          admin: formData.admin,
          module: module?.name,
          subModule: module?.name === "Pages" ? formData.subModules : [], // Only add subModules for Pages
          actions: module?.name === "Dashboard" ? ["view"] : formData.actions,
        }

        const response = await fetch(`${API_NODE_URL}permission`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: JSON.stringify(payload),
        })

        return response.json()
      })

      // Wait for all API calls to complete
      const results = await Promise.all(promises)

      // Check if all requests were successful
      const allSuccessful = results.every((result) => result.status)
      const anySuccessful = results.some((result) => result.status)

      if (allSuccessful) {
        toast.success(`Successfully created permissions for all ${formData.modules.length} modules!`)
      } else if (anySuccessful) {
        const successCount = results.filter((result) => result.status).length
        toast.warn(`Created permissions for ${successCount} out of ${formData.modules.length} modules. Some failed.`)
      } else {
        toast.error("Failed to create permissions for all modules.")
      }

      await fetchData()
      resetForm()
    } catch (error) {
      console.error("Error saving permissions:", error)
      toast.error("An error occurred while creating permissions.")
    }
  }

  const resetForm = () => {
    setFormData({ admin: "", modules: [], subModules: [], actions: [] })
    setShowAddForm(false)
    setEditingPermission(null)
  }

  const handleEdit = (permission) => {
    setEditingPermission(permission)
    const moduleObj = options.find((opt) => opt.name === permission.module)
    setFormData({
      admin: permission.admin._id,
      modules: moduleObj ? [moduleObj] : [], // Convert back to array with module object
      subModules: permission.subModule ? permission.subModule : [],
      actions: permission.actions,
    })
    setShowAddForm(true)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const payload = {
        admin: formData.admin,
        module: formData.modules[0]?.name, // Take first module for update
        subModule: formData.modules[0]?.name === "Pages" ? formData.subModules : [],
        actions: formData.modules[0]?.name === "Dashboard" ? ["view"] : formData.actions,
      }

      const response = await fetch(`${API_NODE_URL}permission`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (result.status) {
        toast.success("Permission updated successfully!")
        await fetchData()
        resetForm()
      } else {
        toast.error(result.message || "Failed to update permission.")
      }
    } catch (error) {
      console.error("Error updating permission:", error)
      toast.error("An error occurred while updating permission.")
    }
  }

  const handleDelete = async (permissionId) => {
    if (!window.confirm("Are you sure you want to delete this permission?")) return
    try {
      await fetch(`${API_NODE_URL}permission/${permissionId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      })
      setPermissions((prev) => prev.filter((p) => p._id !== permissionId))
      toast.success("Permission deleted successfully!")
    } catch (error) {
      console.error("Error deleting permission:", error)
      toast.error("Failed to delete permission.")
    }
  }

  const handleActionToggle = (action) => {
    setFormData((prev) => {
      let updatedActions = [...prev.actions]
      if (updatedActions.includes(action)) {
        updatedActions = updatedActions.filter((a) => a !== action)
      } else {
        updatedActions.push(action)
      }
      const mustIncludeView = ["create", "edit", "delete"].some((a) => updatedActions.includes(a))
      if (mustIncludeView && !updatedActions.includes("view")) {
        updatedActions.push("view")
      }
      return {
        ...prev,
        actions: updatedActions,
      }
    })
  }

  const mustDisableView = formData.modules.some((module) => module?.name === "Dashboard")

  const getActionColor = (action) => {
    const colors = {
      create: "bg-green-100 text-green-800",
      edit: "bg-yellow-100 text-yellow-800",
      delete: "bg-red-100 text-red-800",
      view: "bg-blue-100 text-blue-800",
    }
    return colors[action] || "bg-gray-100 text-gray-800"
  }

  // Check if Pages module is selected
  const isPagesModuleSelected = formData.modules.some((module) => module?.name === "Pages")

  // Filter and search logic
  const filteredPermissions = permissions?.filter((permission) => {
    // Search filter
    const matchesSearch =
      searchTerm === "" ||
      permission.admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      permission.admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      permission.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (permission.subModule && permission.subModule.some((sub) => sub.toLowerCase().includes(searchTerm.toLowerCase())))

    // Admin filter
    const matchesAdmin = filters.admin === "" || permission.admin._id === filters.admin

    // Module filter
    const matchesModule = filters.module === "" || permission.module === filters.module

    // Actions filter
    const matchesActions = filters.actions === "" || permission.actions.includes(filters.actions)

    return matchesSearch && matchesAdmin && matchesModule && matchesActions
  })

  // Get unique values for filter dropdowns
  const uniqueAdmins = permissions?.reduce((acc, permission) => {
    const existingAdmin = acc.find((admin) => admin.id === permission.admin._id)
    if (!existingAdmin) {
      acc.push({
        id: permission.admin._id,
        name: permission.admin.name,
        email: permission.admin.email,
      })
    }
    return acc
  }, [])
  const uniqueModules = [...new Set(permissions.map((p) => p.module))]
  const uniqueActions = [...new Set(permissions.flatMap((p) => p.actions))]

  // Clear all filters function
  const clearAllFilters = () => {
    setSearchTerm("")
    setFilters({
      admin: "",
      module: "",
      actions: "",
    })
  }

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <p className="text-gray-600 font-medium">Loading permissions...</p>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="pt-5 px-5 overflow-x-auto bg-BG1 bg-cover min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header Section with Search and Filters */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-6 text-white">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Permission Management</h1>
                  <p className="text-blue-100">Manage admin permissions and access control with advanced features</p>
                  <div className="flex items-center space-x-4 mt-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">
                        {filteredPermissions.length} of {permissions.length} Permissions
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm">{admins.length} Admins</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Add Permission</span>
                </button>
              </div>

              {/* Search and Filter Controls */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-4">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  {/* Search Bar */}
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search by admin name, email, module, or sub-module..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                    />
                  </div>

                  {/* Filter Toggle and Clear */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${showFilters
                        ? "bg-white text-blue-600 shadow-lg"
                        : "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                        }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 2v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
                        />
                      </svg>
                      <span>Filters</span>
                    </button>

                    {(searchTerm || filters.admin || filters.module || filters.actions) && (
                      <button
                        onClick={clearAllFilters}
                        className="flex items-center space-x-2 px-4 py-3 bg-red-500/20 text-white hover:bg-red-500/30 border border-red-400/30 rounded-lg font-medium transition-all duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Clear</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Advanced Filters */}
                {showFilters && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/20">
                    {/* Admin Filter */}
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">Filter by Admin</label>
                      <select
                        value={filters.admin}
                        onChange={(e) => setFilters((prev) => ({ ...prev, admin: e.target.value }))}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                      >
                        <option value="" className="text-gray-900">
                          All Admins
                        </option>
                        {uniqueAdmins.map((admin) => (
                          <option key={admin.id} value={admin.id} className="text-gray-900">
                            {admin.name} ({admin.email})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Module Filter */}
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">Filter by Module</label>
                      <select
                        value={filters.module}
                        onChange={(e) => setFilters((prev) => ({ ...prev, module: e.target.value }))}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                      >
                        <option value="" className="text-gray-900">
                          All Modules
                        </option>
                        {uniqueModules.map((module) => (
                          <option key={module} value={module} className="text-gray-900">
                            {module}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Actions Filter */}
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">Filter by Action</label>
                      <select
                        value={filters.actions}
                        onChange={(e) => setFilters((prev) => ({ ...prev, actions: e.target.value }))}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                      >
                        <option value="" className="text-gray-900">
                          All Actions
                        </option>
                        {uniqueActions.map((action) => (
                          <option key={action} value={action} className="text-gray-900">
                            {action}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Add/Edit Form Modal */}
          {showAddForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {editingPermission ? "Edit Permission" : "Add New Permission"}
                  </h2>
                  <button onClick={resetForm} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <form onSubmit={editingPermission ? handleUpdate : handleSubmit} className="space-y-6">
                  {/* Admin Select */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Select Admin</label>
                    <select
                      value={formData.admin}
                      onChange={(e) => setFormData((prev) => ({ ...prev, admin: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                      required
                    >
                      <option value="">Choose an admin...</option>
                      {admins.map((admin) => (
                        <option key={admin._id} value={admin._id}>
                          {admin.name} ({admin.role}) - {admin.email}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Module Selector (Enhanced for Multiple Selection) */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {editingPermission ? "Select Module" : "Select Modules"}
                      <span className="text-xs text-gray-500 ml-2">({formData.modules.length} selected)</span>
                    </label>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <ModuleSelector
                        availableModules={options}
                        selectedModules={formData.modules}
                        onModulesChange={(modules) =>
                          setFormData((prev) => ({
                            ...prev,
                            modules: editingPermission ? [modules[modules.length - 1]].filter(Boolean) : modules,
                            // Reset subModules if Pages is not selected
                            subModules: (editingPermission
                              ? [modules[modules.length - 1]].filter(Boolean)
                              : modules
                            ).some((m) => m?.name === "Pages")
                              ? prev.subModules
                              : [],
                          }))
                        }
                        placeholder={
                          editingPermission ? "Search and select a module..." : "Search and select modules..."
                        }
                        maxSelection={editingPermission ? 1 : undefined}
                      />
                    </div>
                    {editingPermission && (
                      <p className="text-xs text-amber-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        When editing, you can only select one module at a time
                      </p>
                    )}
                  </div>

                  {/* Sub Module Selector (Only for Pages) */}
                  {isPagesModuleSelected && (
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Select Sub Modules (Pages Only)
                        <span className="text-xs text-gray-500 ml-2">({formData.subModules.length} selected)</span>
                      </label>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <SubModuleSelector
                          availableModules={subModuleMap.Pages}
                          selectedModules={formData.subModules}
                          onModulesChange={(modules) => setFormData((prev) => ({ ...prev, subModules: modules }))}
                          placeholder="Search and select sub-modules for Pages..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700">Permissions & Actions</label>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {availableActions.map((action) => (
                          <label
                            key={action}
                            className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${formData.actions.includes(action)
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                              }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.actions.includes(action)}
                              onChange={() => handleActionToggle(action)}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              disabled={action === "view" && mustDisableView}
                            />
                            <div className="flex-1">
                              <span className="text-sm font-medium text-gray-900 capitalize">{action}</span>
                              <div className="text-xs text-gray-500">
                                {action === "create" && "Allow creating new items"}
                                {action === "edit" && "Allow modifying existing items"}
                                {action === "delete" && "Allow removing items"}
                                {action === "view" && "Allow viewing items"}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {mustDisableView && (
                        <p className="text-xs text-blue-600 mt-2 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          View permission is automatically included with other actions
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Form Controls */}
                  <div className="flex space-x-4 pt-6 border-t border-gray-200">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      {editingPermission
                        ? "Update Permission"
                        : `Create ${formData.modules.length} Permission${formData.modules.length !== 1 ? "s" : ""}`}
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold transition-all duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Permission Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Current Permissions</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Showing {filteredPermissions.length} of {permissions.length} permissions
                  </p>
                </div>

                {/* Active Filters Display */}
                {(searchTerm || filters.admin || filters.module || filters.actions) && (
                  <div className="flex flex-wrap gap-2">
                    {searchTerm && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Search: "{searchTerm}"
                        <button onClick={() => setSearchTerm("")} className="ml-1 text-blue-600 hover:text-blue-800">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </span>
                    )}
                    {filters.admin && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Admin: {uniqueAdmins.find((a) => a.id === filters.admin)?.name}
                        <button
                          onClick={() => setFilters((prev) => ({ ...prev, admin: "" }))}
                          className="ml-1 text-green-600 hover:text-green-800"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </span>
                    )}
                    {filters.module && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Module: {filters.module}
                        <button
                          onClick={() => setFilters((prev) => ({ ...prev, module: "" }))}
                          className="ml-1 text-yellow-600 hover:text-yellow-800"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </span>
                    )}
                    {filters.actions && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Action: {filters.actions}
                        <button
                          onClick={() => setFilters((prev) => ({ ...prev, actions: "" }))}
                          className="ml-1 text-purple-600 hover:text-purple-800"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Admin Details
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Module
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Sub Module
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Controls
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPermissions.map((permission, index) => (
                    <tr
                      key={permission._id}
                      className={`hover:bg-gray-50 transition-colors duration-150 ${index % 2 === 0 ? "bg-white" : "bg-gray-25"
                        }`}
                    >
                      {/* Keep the existing table row content exactly the same */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                            {permission.admin.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900">{permission.admin.name}</div>
                            <div className="text-sm text-gray-500">{permission.admin.email}</div>
                            <div className="text-xs text-gray-400">Role: {permission.admin.role}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800">
                          {permission.module}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {permission.subModule && permission?.subModule.length > 0 ? (
                          <span className="inline-flex text-wrap px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800">
                            {permission.subModule.join(" , ")}
                          </span>
                        ) : (
                          <span className="text-gray-400 text-sm">No sub-module</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {permission.actions.map((action) => (
                            <span
                              key={action}
                              className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getActionColor(action)}`}
                            >
                              {action}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleEdit(permission)}
                            className="text-blue-600 hover:text-blue-900 transition-colors duration-150 flex items-center space-x-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(permission._id)}
                            className="text-red-600 hover:text-red-900 transition-colors duration-150 flex items-center space-x-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredPermissions.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="text-gray-500 text-xl font-semibold">
                  {permissions.length === 0 ? "No permissions found" : "No permissions match your search criteria"}
                </div>
                <p className="text-gray-400 mt-2 mb-6">
                  {permissions.length === 0
                    ? "Get started by adding your first permission"
                    : "Try adjusting your search terms or filters"}
                </p>
                {permissions.length === 0 ? (
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Add First Permission
                  </button>
                ) : (
                  <button
                    onClick={clearAllFilters}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
