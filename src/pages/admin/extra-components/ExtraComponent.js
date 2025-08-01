"use client"

import { API_NODE_URL } from "@/configs/config"
import dynamic from "next/dynamic"
import React, { useState, useEffect, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import { uploadImages } from "@/utills/ImageUpload"
import {
  ChevronDown,
  ChevronRight,
  Plus,
  Trash2,
  FileText,
  ImageIcon,
  Layers,
  Settings,
  Move3D,
  ArrowRight,
  TreePine,
} from "lucide-react"

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => (
    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  ),
})

// Generate unique ID for each extraData item
const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
}

// Flatten nested structure for display
const flattenHierarchy = (data, parentPath = "", level = 0) => {
  const flattened = []

  data.forEach((item, index) => {
    const currentPath = parentPath ? `${parentPath}.${index + 1}` : `${index + 1}`

    flattened.push({
      ...item,
      level,
      path: currentPath,
      hasChildren: item.extraData && item.extraData.length > 0,
    })

    if (item.extraData && item.extraData.length > 0) {
      flattened.push(...flattenHierarchy(item.extraData, currentPath, level + 1))
    }
  })

  return flattened
}

// Get level colors for visual distinction
const getLevelColors = (level) => {
  const colors = [
    { bg: "bg-blue-50", border: "border-blue-200", accent: "bg-blue-500", text: "text-blue-700", dot: "bg-blue-400" },
    {
      bg: "bg-purple-50",
      border: "border-purple-200",
      accent: "bg-purple-500",
      text: "text-purple-700",
      dot: "bg-purple-400",
    },
    {
      bg: "bg-green-50",
      border: "border-green-200",
      accent: "bg-green-500",
      text: "text-green-700",
      dot: "bg-green-400",
    },
    {
      bg: "bg-orange-50",
      border: "border-orange-200",
      accent: "bg-orange-500",
      text: "text-orange-700",
      dot: "bg-orange-400",
    },
    { bg: "bg-pink-50", border: "border-pink-200", accent: "bg-pink-500", text: "text-pink-700", dot: "bg-pink-400" },
    {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      accent: "bg-indigo-500",
      text: "text-indigo-700",
      dot: "bg-indigo-400",
    },
  ]
  return colors[level % colors.length]
}

// Generate hierarchy path visual
const HierarchyPath = ({ path, level }) => {
  const pathParts = path.split(".")
  const levelColors = getLevelColors(level)

  return (
    <div className="flex items-center space-x-1 text-xs">
      <TreePine className="w-3 h-3 text-gray-400" />
      {pathParts.map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ArrowRight className="w-2 h-2 text-gray-300" />}
          <span className={`px-1.5 py-0.5 rounded ${levelColors.bg} ${levelColors.text} font-medium`}>{part}</span>
        </React.Fragment>
      ))}
      <span className="ml-2 text-gray-500">Level {level + 1}</span>
    </div>
  )
}

// Single Item Form Component (Flat Design)
const FlatExtraDataForm = ({
  data,
  onUpdate,
  onRemove,
  onAddChild,
  level = 0,
  path = "",
  isExpanded = false,
  onToggleExpand,
}) => {
  const [localWidgetSearch, setLocalWidgetSearch] = useState(data.widgetType || "")
  const [showLocalDropdown, setShowLocalDropdown] = useState(false)

  const levelColors = getLevelColors(level)

  // Predefined widget types
  const predefinedWidgetTypes = ["News", "Event", "Article", "Circular", "Download Center", "Announcement"]
  const filteredWidgetTypes = predefinedWidgetTypes.filter((type) =>
    type.toLowerCase().includes(localWidgetSearch.toLowerCase()),
  )

  const handleFieldChange = useCallback(
    (field, value) => {
      const updatedData = { ...data, [field]: value }
      onUpdate(updatedData)
    },
    [data, onUpdate],
  )

  const handleTypeChange = useCallback(
    (e) => {
      const newType = e.target.value
      const updatedData = { ...data, type: newType }
      if (newType !== "Widget") {
        updatedData.widgetType = ""
        setLocalWidgetSearch("")
      }
      onUpdate(updatedData)
    },
    [data, onUpdate],
  )

  const handleWidgetTypeSelect = useCallback(
    (widgetType) => {
      setLocalWidgetSearch(widgetType)
      handleFieldChange("widgetType", widgetType)
      setShowLocalDropdown(false)
    },
    [handleFieldChange],
  )

  const handleWidgetTypeInputChange = useCallback(
    (e) => {
      const value = e.target.value
      setLocalWidgetSearch(value)
      handleFieldChange("widgetType", value)
      setShowLocalDropdown(true)
    },
    [handleFieldChange],
  )

  useEffect(() => {
    setLocalWidgetSearch(data.widgetType || "")
  }, [data.widgetType])

  return (
    <div className="mb-4">
      {/* Flat Card Design */}
      <div
        className={`bg-white border-2 ${levelColors.border} rounded-xl shadow-sm hover:shadow-md transition-all duration-200`}
      >
        {/* Header with Hierarchy Indicator */}
        <div
          className={`flex items-center justify-between p-4 ${levelColors.bg} rounded-t-xl border-b border-gray-200`}
        >
          <div className="flex items-center space-x-4 flex-1">
            {/* Expand/Collapse Button */}
            <button
              type="button"
              onClick={onToggleExpand}
              className="p-2 hover:bg-white rounded-lg transition-colors shadow-sm"
            >
              {isExpanded ? (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Level Indicator Dots */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: level + 1 }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${getLevelColors(i).dot} ${i === level ? "ring-2 ring-white" : ""}`}
                />
              ))}
            </div>

            {/* Item Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <span className={`font-semibold ${levelColors.text} text-lg`}>
                  {data.param || `Extra Data ${path}`}
                </span>
                {data.type && (
                  <span className="px-3 py-1 text-xs font-medium bg-white text-gray-700 rounded-full border">
                    {data.type}
                  </span>
                )}
              </div>
              <HierarchyPath path={path} level={level} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {data.type === "Data Hierarchy" && (
              <button
                type="button"
                onClick={() => onAddChild(data._id)}
                className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1.5 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
              >
                <Plus className="w-3 h-3" />
                <span>Add Child</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => onRemove && onRemove()}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              title="Remove this item"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        {isExpanded && (
          <div className="p-6 space-y-6">
            {/* Basic Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Title */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Title</label>
                <input
                  type="text"
                  value={data.param || ""}
                  onChange={(e) => handleFieldChange("param", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                  placeholder="Enter title..."
                />
              </div>

              {/* Type */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Type</label>
                <select
                  value={data.type || ""}
                  onChange={handleTypeChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                >
                  <option value="">Select Type</option>
                  <option value="h2">h2</option>
                  <option value="h3">h3</option>
                  <option value="h4">h4</option>
                  <option value="h5">h5</option>
                  <option value="h6">h6</option>
                  <option value="Banner">Banner</option>
                  <option value="Widget">Widget</option>
                  <option value="Footer">Footer</option>
                  <option value="Data Hierarchy">Data Hierarchy</option>
                </select>
              </div>

              {/* Widget Type - Only show when Type is Widget */}
              {data.type === "Widget" && (
                <div className="lg:col-span-2 space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Widget Type</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={localWidgetSearch}
                      onChange={handleWidgetTypeInputChange}
                      onFocus={() => setShowLocalDropdown(true)}
                      onBlur={() => {
                        setTimeout(() => setShowLocalDropdown(false), 200)
                      }}
                      placeholder="Search or enter widget type..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                    />
                    {showLocalDropdown && (
                      <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {filteredWidgetTypes.length > 0 ? (
                          filteredWidgetTypes.map((widgetType) => (
                            <div
                              key={widgetType}
                              onClick={() => handleWidgetTypeSelect(widgetType)}
                              className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
                            >
                              {widgetType}
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-sm text-gray-500">
                            No matching options. Press Enter to use "{localWidgetSearch}"
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* URL */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">URL</label>
                <input
                  type="url"
                  value={data.paramUrl || ""}
                  onChange={(e) => handleFieldChange("paramUrl", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                  placeholder="https://example.com"
                />
              </div>

              {/* Order Sequence */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Order Sequence</label>
                <input
                  type="number"
                  value={data.orderSequence || 0}
                  onChange={(e) => handleFieldChange("orderSequence", Number.parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Description</label>
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <JoditEditor value={data.paramDesc || ""} onChange={(value) => handleFieldChange("paramDesc", value)} />
              </div>
            </div>

            {/* Media Upload Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Images */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700 flex items-center">
                  <ImageIcon className="w-4 h-4 mr-2 text-blue-500" />
                  Upload Images
                </label>

                {data.paramImg && data.paramImg.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {data.paramImg.map((img, idx) => (
                      <div key={idx} className="relative group">
                        <img
                          src={typeof img === "string" ? img : URL.createObjectURL(img)}
                          alt={`Preview ${idx}`}
                          className="w-full h-24 object-cover rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updatedImages = data.paramImg.filter((_, i) => i !== idx)
                            handleFieldChange("paramImg", updatedImages)
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full p-1.5 hover:bg-red-600 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files)
                    handleFieldChange("paramImg", [...(data.paramImg || []), ...files])
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:shadow-sm border border-gray-200 rounded-lg"
                />
              </div>

              {/* PDFs */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700 flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-red-500" />
                  Upload PDFs
                </label>

                {data.pdfs && data.pdfs.length > 0 && (
                  <div className="space-y-2 mb-3">
                    {data.pdfs.map((pdf, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-sm text-gray-700 flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-red-500" />
                          {typeof pdf === "string" ? pdf.split("/").pop() : pdf.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const updatedPDFs = data.pdfs.filter((_, i) => i !== idx)
                            handleFieldChange("pdfs", updatedPDFs)
                          }}
                          className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <input
                  type="file"
                  accept="application/pdf"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files)
                    handleFieldChange("pdfs", [...(data.pdfs || []), ...files])
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 file:shadow-sm border border-gray-200 rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const ExtraParamsManager = () => {
  const [params, setParams] = useState([])
  const searchParams = useSearchParams()
  const pageIdFromQuery = searchParams.get("page_id")
  const [selectedPageId, setSelectedPageId] = useState("")
  const [usedHolders, setUsedHolders] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingParam, setEditingParam] = useState(null)
  const [loading, setLoading] = useState(false)
  const [expandedItems, setExpandedItems] = useState(new Set())

  // Widget Type search state
  const [widgetTypeSearch, setWidgetTypeSearch] = useState("")
  const [showWidgetTypeDropdown, setShowWidgetTypeDropdown] = useState(false)

  useEffect(() => {
    if (pageIdFromQuery) {
      setSelectedPageId(pageIdFromQuery)
    }
  }, [pageIdFromQuery])

  useEffect(() => {
    if (selectedPageId) {
      fetchUsedHolders(selectedPageId)
    }
  }, [selectedPageId])

  // In form state
  const [formData, setFormData] = useState({
    pageid: "",
    param: "",
    paramDesc: "",
    paramImg: [],
    paramUrl: "",
    orderSequence: 0,
    type: "",
    holder: "",
    widgetType: "",
    status: true,
    addedby: "",
    pdfs: [],
    extraData: [],
  })

  // Predefined holders organized by sections
  const holderSections = {
    Banner: ["Holder 1", "Holder 2", "Holder 3", "Holder 4", "Holder 5"],
    Title: ["Holder 6", "Holder 7", "Holder 8", "Holder 9", "Holder 10"],
    Description: [
      "Holder 11",
      "Holder 12",
      "Holder 13",
      "Holder 14",
      "Holder 15",
      "Holder 16",
      "Holder 17",
      "Holder 18",
      "Holder 19",
      "Holder 20",
      "Holder 21",
      "Holder 22",
      "Holder 23",
      "Holder 24",
      "Holder 25",
      "Holder 26",
      "Holder 27",
      "Holder 28",
      "Holder 29",
      "Holder 30",
    ],
    Footer: ["Holder 31", "Holder 32", "Holder 33", "Holder 34", "Holder 35"],
  }

  // Predefined widget types
  const predefinedWidgetTypes = ["News", "Event", "Article", "Circular", "Download Center", "Announcement"]
  const filteredWidgetTypes = predefinedWidgetTypes.filter((type) =>
    type.toLowerCase().includes(widgetTypeSearch.toLowerCase()),
  )

  // Function to add unique IDs to existing extraData recursively
  const addUniqueIdsToExtraData = (extraDataArray) => {
    return extraDataArray.map((item) => ({
      ...item,
      _id: item._id || generateUniqueId(),
      extraData: item.extraData ? addUniqueIdsToExtraData(item.extraData) : [],
    }))
  }

  // Update nested data by path
  const updateNestedDataByPath = (data, targetId, newData) => {
    return data.map((item) => {
      if (item._id === targetId) {
        return newData
      }
      if (item.extraData && item.extraData.length > 0) {
        return {
          ...item,
          extraData: updateNestedDataByPath(item.extraData, targetId, newData),
        }
      }
      return item
    })
  }

  // Remove nested data by path
  const removeNestedDataByPath = (data, targetId) => {
    return data
      .filter((item) => item._id !== targetId)
      .map((item) => {
        if (item.extraData && item.extraData.length > 0) {
          return {
            ...item,
            extraData: removeNestedDataByPath(item.extraData, targetId),
          }
        }
        return item
      })
  }

  // Add child to specific parent
  const addChildToParent = (data, parentId) => {
    return data.map((item) => {
      if (item._id === parentId) {
        const newChild = {
          _id: generateUniqueId(),
          param: "",
          paramDesc: "",
          paramImg: [],
          paramUrl: "",
          orderSequence: 0,
          type: "",
          widgetType: "",
          status: true,
          addedby: "",
          pdfs: [],
          extraData: [],
        }
        return {
          ...item,
          extraData: [...(item.extraData || []), newChild],
        }
      }
      if (item.extraData && item.extraData.length > 0) {
        return {
          ...item,
          extraData: addChildToParent(item.extraData, parentId),
        }
      }
      return item
    })
  }

  // Toggle expand/collapse
  const toggleExpand = (itemId) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  // Fetch all params
  const fetchParams = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_NODE_URL}extra-component-data/all`, {
        credentials: "include",
      })
      const result = await response.json()
      if (result.status) {
        setParams(result.data || [])
      }
    } catch (error) {
      console.error("Error fetching params:", error)
    }
    setLoading(false)
  }

  // Fetch used holders for a specific page
  const fetchUsedHolders = async (pageid) => {
    if (!pageid) return
    try {
      const response = await fetch(`${API_NODE_URL}extra-component-data/used-holders/${pageid}`)
      const result = await response.json()
      if (result.status) {
        setUsedHolders(result.data || [])
      }
    } catch (error) {
      console.error("Error fetching used holders:", error)
    }
  }

  // Function to recursively process extraData for file uploads
  const processExtraDataFiles = async (extraDataArray) => {
    const processedArray = []
    for (const item of extraDataArray) {
      const processedItem = { ...item }
      // Process images
      if (item.paramImg && item.paramImg.length > 0) {
        const newFiles = item.paramImg.filter((img) => img instanceof File)
        if (newFiles.length > 0) {
          const uploadedUrls = await uploadImages(newFiles, "ExtraParamImages")
          processedItem.paramImg = [...item.paramImg.filter((img) => typeof img === "string"), ...uploadedUrls]
        }
      }
      // Process PDFs
      if (item.pdfs && item.pdfs.length > 0) {
        const newPDFs = item.pdfs.filter((pdf) => pdf instanceof File)
        if (newPDFs.length > 0) {
          const uploadedPDFs = await uploadImages(newPDFs, "ExtraParamPDFs")
          processedItem.pdfs = [...item.pdfs.filter((pdf) => typeof pdf === "string"), ...uploadedPDFs]
        }
      }
      // Recursively process nested extraData
      if (item.extraData && item.extraData.length > 0) {
        processedItem.extraData = await processExtraDataFiles(item.extraData)
      }
      processedArray.push(processedItem)
    }
    return processedArray
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      let imgUrls = []
      const newFiles = formData.paramImg.filter((item) => item instanceof File)
      if (newFiles.length > 0) {
        const uploadedUrls = await uploadImages(newFiles, "ExtraParamImages")
        imgUrls = [...formData.paramImg.filter((item) => typeof item === "string"), ...uploadedUrls]
      } else {
        imgUrls = formData.paramImg
      }

      let pdfUrls = []
      const newPDFs = formData.pdfs.filter((item) => item instanceof File)
      if (newPDFs.length > 0) {
        const uploadedPDFs = await uploadImages(newPDFs, "ExtraParamPDFs")
        pdfUrls = [...formData.pdfs.filter((item) => typeof item === "string"), ...uploadedPDFs]
      } else {
        pdfUrls = formData.pdfs
      }

      const processedExtraData = await processExtraDataFiles(formData.extraData)

      const payload = {
        ...formData,
        paramImg: imgUrls,
        pdfs: pdfUrls,
        extraData: processedExtraData,
      }

      const url = editingParam
        ? `${API_NODE_URL}extra-component-data/${editingParam._id}`
        : `${API_NODE_URL}extra-component-data/create`
      const method = editingParam ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      })

      const result = await response.json()
      if (result.status) {
        alert(result.message)
        setShowForm(false)
        setEditingParam(null)
        resetForm()
        fetchParams()
        if (selectedPageId) fetchUsedHolders(selectedPageId)
      } else {
        alert(result.message)
      }
    } catch (error) {
      alert("Error saving data")
      console.error("Error:", error)
    }
    setLoading(false)
  }

  // Handle delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this parameter?")) return
    setLoading(true)
    try {
      const response = await fetch(`${API_NODE_URL}extra-component-data/${id}`, {
        method: "DELETE",
        credentials: "include",
      })
      const result = await response.json()
      if (result.status) {
        alert(result.message)
        fetchParams()
        if (selectedPageId) {
          fetchUsedHolders(selectedPageId)
        }
      } else {
        alert(result.message)
      }
    } catch (error) {
      alert("Error deleting data")
      console.error("Error:", error)
    }
    setLoading(false)
  }

  // Reset form
  const resetForm = () => {
    setFormData({
      pageid: selectedPageId || "",
      param: "",
      paramDesc: "",
      paramImg: [],
      paramUrl: "",
      orderSequence: 0,
      type: "",
      holder: "",
      widgetType: "",
      status: true,
      addedby: "",
      pdfs: [],
      extraData: [],
    })
    setWidgetTypeSearch("")
    setShowWidgetTypeDropdown(false)
    setExpandedItems(new Set())
  }

  // Handle edit
  const handleEdit = (param) => {
    setEditingParam(param)
    const extraDataWithIds = param.extraData ? addUniqueIdsToExtraData(param.extraData) : []
    setFormData({
      pageid: param.pageid,
      param: param.param,
      paramDesc: param.paramDesc || "",
      paramImg: param.paramImg || [],
      paramUrl: param.paramUrl || "",
      orderSequence: param.orderSequence || 0,
      type: param.type,
      holder: param.holder,
      widgetType: param.widgetType || "",
      status: param.status,
      addedby: param.addedby || "",
      pdfs: param.pdfs || [],
      extraData: extraDataWithIds,
    })
    setWidgetTypeSearch(param.widgetType || "")
    setShowForm(true)
    // Expand first level items by default
    const firstLevelIds = new Set(extraDataWithIds.map((item) => item._id))
    setExpandedItems(firstLevelIds)
  }

  // Handle add new
  const handleAddNew = () => {
    setEditingParam(null)
    resetForm()
    setShowForm(true)
  }

  // Handle widget type selection
  const handleWidgetTypeSelect = (widgetType) => {
    setFormData({ ...formData, widgetType })
    setWidgetTypeSearch(widgetType)
    setShowWidgetTypeDropdown(false)
  }

  // Handle widget type input change
  const handleWidgetTypeInputChange = (e) => {
    const value = e.target.value
    setWidgetTypeSearch(value)
    setFormData({ ...formData, widgetType: value })
    setShowWidgetTypeDropdown(true)
  }

  // Add main extra data
  const addMainExtraData = useCallback(() => {
    const newExtraData = {
      _id: generateUniqueId(),
      param: "",
      paramDesc: "",
      paramImg: [],
      paramUrl: "",
      orderSequence: 0,
      type: "",
      widgetType: "",
      status: true,
      addedby: "",
      pdfs: [],
      extraData: [],
    }
    setFormData((prev) => ({
      ...prev,
      extraData: [...prev.extraData, newExtraData],
    }))
    // Auto-expand new item
    setExpandedItems((prev) => new Set([...prev, newExtraData._id]))
  }, [])

  // Update flat item
  const updateFlatItem = useCallback((itemId, newData) => {
    setFormData((prev) => ({
      ...prev,
      extraData: updateNestedDataByPath(prev.extraData, itemId, newData),
    }))
  }, [])

  // Remove flat item
  const removeFlatItem = useCallback((itemId) => {
    setFormData((prev) => ({
      ...prev,
      extraData: removeNestedDataByPath(prev.extraData, itemId),
    }))
    // Remove from expanded items
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      newSet.delete(itemId)
      return newSet
    })
  }, [])

  // Add child to parent
  const addChildToParentHandler = useCallback((parentId) => {
    setFormData((prev) => ({
      ...prev,
      extraData: addChildToParent(prev.extraData, parentId),
    }))
  }, [])

  // Filter params by selected page
  const filteredParams = selectedPageId ? params.filter((param) => param.pageid === selectedPageId) : params

  // Get unique page IDs
  const uniquePageIds = [...new Set(params.map((param) => param.pageid))]

  useEffect(() => {
    fetchParams()
  }, [])

  useEffect(() => {
    if (selectedPageId) {
      fetchUsedHolders(selectedPageId)
    }
  }, [selectedPageId])

  // Get flattened hierarchy for display
  const flattenedExtraData = formData.extraData ? flattenHierarchy(formData.extraData) : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Modern Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-6 lg:p-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Settings className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold">Extra Component Data Manager</h1>
                <p className="text-blue-100 mt-1">Manage hierarchical content data with flat interface</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="flex-1 p-6 lg:p-8">
              {/* Action Buttons */}
              <div className="mb-8 flex flex-wrap gap-4">
                <button
                  onClick={handleAddNew}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add New Parameter</span>
                </button>
                <button
                  onClick={fetchParams}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                >
                  <Move3D className="w-5 h-5" />
                  <span>Refresh Data</span>
                </button>
              </div>

              {/* Parameters List */}
              {!showForm && (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center">
                      <Layers className="w-6 h-6 mr-3 text-blue-500" />
                      Parameters List {selectedPageId && `(Page: ${selectedPageId})`}
                    </h2>
                  </div>

                  {loading ? (
                    <div className="p-12 text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto"></div>
                      <p className="mt-4 text-gray-600 font-medium">Loading parameters...</p>
                    </div>
                  ) : filteredParams.length === 0 ? (
                    <div className="p-12 text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Layers className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500 text-lg">No parameters found</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                              Page ID
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                              Holder
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                              Parameter
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                              Widget Type
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredParams.map((param) => (
                            <tr key={param._id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {param.pageid}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{param.holder}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{param.param}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{param.type}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {param.type === "Widget" ? param.widgetType || "-" : "-"}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                                    param.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {param.status ? "Active" : "Inactive"}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                                <button
                                  onClick={() => handleEdit(param)}
                                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(param._id)}
                                  className="text-red-600 hover:text-red-800 font-medium transition-colors"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Modern Form */}
              {showForm && (
                <div className="space-y-8">
                  {/* Form Header */}
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-4 border-b border-gray-200">
                      <h2 className="text-xl font-bold text-gray-800 flex items-center">
                        <Settings className="w-6 h-6 mr-3 text-purple-500" />
                        {editingParam ? "Edit Parameter" : "Add New Parameter"}
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 lg:p-8">
                      {/* Basic Information */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Page ID *</label>
                          <input
                            type="text"
                            value={formData.pageid}
                            disabled
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 cursor-not-allowed text-gray-600"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Holder *</label>
                          <select
                            value={formData.holder}
                            onChange={(e) => setFormData({ ...formData, holder: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                            required
                          >
                            <option value="">Select Holder</option>
                            {Object.entries(holderSections).map(([section, holders]) => (
                              <optgroup key={section} label={section}>
                                {holders.map((holder) => (
                                  <option key={holder} value={holder}>
                                    {holder}
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Title *</label>
                          <input
                            type="text"
                            value={formData.param}
                            onChange={(e) => setFormData({ ...formData, param: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Type *</label>
                          <select
                            value={formData.type}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                type: e.target.value,
                                widgetType: e.target.value !== "Widget" ? "" : formData.widgetType,
                              })
                              if (e.target.value !== "Widget") {
                                setWidgetTypeSearch("")
                                setShowWidgetTypeDropdown(false)
                              }
                            }}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                            required
                          >
                            <option value="">Select Type</option>
                            <option value="h2">h2</option>
                            <option value="h3">h3</option>
                            <option value="h4">h4</option>
                            <option value="h5">h5</option>
                            <option value="h6">h6</option>
                            <option value="Banner">Banner</option>
                            <option value="Widget">Widget</option>
                            <option value="Footer">Footer</option>
                            <option value="Data Hierarchy">Data Hierarchy</option>
                          </select>
                        </div>

                        {/* Widget Type Field */}
                        {formData.type === "Widget" && (
                          <div className="lg:col-span-2 space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">Widget Type *</label>
                            <div className="relative">
                              <input
                                type="text"
                                value={widgetTypeSearch}
                                onChange={handleWidgetTypeInputChange}
                                onFocus={() => setShowWidgetTypeDropdown(true)}
                                onBlur={() => {
                                  setTimeout(() => setShowWidgetTypeDropdown(false), 200)
                                }}
                                placeholder="Search or enter widget type..."
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                                required
                              />
                              {showWidgetTypeDropdown && (
                                <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                  {filteredWidgetTypes.length > 0 ? (
                                    filteredWidgetTypes.map((widgetType) => (
                                      <div
                                        key={widgetType}
                                        onClick={() => handleWidgetTypeSelect(widgetType)}
                                        className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
                                      >
                                        {widgetType}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="px-4 py-3 text-sm text-gray-500">
                                      No matching options. Press Enter to use "{widgetTypeSearch}"
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">URL</label>
                          <input
                            type="url"
                            value={formData.paramUrl}
                            onChange={(e) => setFormData({ ...formData, paramUrl: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Order Sequence</label>
                          <input
                            type="number"
                            value={formData.orderSequence}
                            onChange={(e) =>
                              setFormData({ ...formData, orderSequence: Number.parseInt(e.target.value) || 0 })
                            }
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-8 space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">Description</label>
                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                          <JoditEditor
                            value={formData.paramDesc}
                            onChange={(value) => setFormData({ ...formData, paramDesc: value })}
                          />
                        </div>
                      </div>

                      {/* Media Upload */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        {/* Images */}
                        <div className="space-y-3">
                          <label className="block text-sm font-semibold text-gray-700 flex items-center">
                            <ImageIcon className="w-4 h-4 mr-2 text-blue-500" />
                            Upload Images
                          </label>

                          {formData.paramImg && formData.paramImg.length > 0 && (
                            <div className="grid grid-cols-2 gap-3 mb-3">
                              {formData.paramImg.map((img, idx) => (
                                <div key={idx} className="relative group">
                                  <img
                                    src={typeof img === "string" ? img : URL.createObjectURL(img)}
                                    alt={`Preview ${idx}`}
                                    className="w-full h-24 object-cover rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updatedImages = formData.paramImg.filter((_, i) => i !== idx)
                                      setFormData({ ...formData, paramImg: updatedImages })
                                    }}
                                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full p-1.5 hover:bg-red-600 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}

                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => {
                              const files = Array.from(e.target.files)
                              setFormData({ ...formData, paramImg: [...formData.paramImg, ...files] })
                            }}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:shadow-sm border border-gray-200 rounded-lg"
                          />
                        </div>

                        {/* PDFs */}
                        <div className="space-y-3">
                          <label className="block text-sm font-semibold text-gray-700 flex items-center">
                            <FileText className="w-4 h-4 mr-2 text-red-500" />
                            Upload PDFs
                          </label>

                          {formData.pdfs && formData.pdfs.length > 0 && (
                            <div className="space-y-2 mb-3">
                              {formData.pdfs.map((pdf, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                                >
                                  <span className="text-sm text-gray-700 flex items-center">
                                    <FileText className="w-4 h-4 mr-2 text-red-500" />
                                    {typeof pdf === "string" ? pdf.split("/").pop() : pdf.name}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updatedPDFs = formData.pdfs.filter((_, i) => i !== idx)
                                      setFormData({ ...formData, pdfs: updatedPDFs })
                                    }}
                                    className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}

                          <input
                            type="file"
                            accept="application/pdf"
                            multiple
                            onChange={(e) => {
                              const files = Array.from(e.target.files)
                              setFormData({ ...formData, pdfs: [...formData.pdfs, ...files] })
                            }}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 file:shadow-sm border border-gray-200 rounded-lg"
                          />
                        </div>
                      </div>

                      {/* Flat Extra Data Hierarchy */}
                      {formData.type === "Data Hierarchy" && (
                        <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-800 flex items-center">
                              <TreePine className="w-6 h-6 mr-3 text-purple-500" />
                              Extra Data Hierarchy ({flattenedExtraData.length} items)
                            </h3>
                            <button
                              type="button"
                              onClick={addMainExtraData}
                              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-sm hover:shadow-md font-medium"
                            >
                              <Plus className="w-5 h-5" />
                              <span>Add Root Item</span>
                            </button>
                          </div>

                          {/* Flat List Display */}
                          {flattenedExtraData.length > 0 && (
                            <div className="space-y-4">
                              {flattenedExtraData.map((item) => (
                                <FlatExtraDataForm
                                  key={item._id}
                                  data={item}
                                  onUpdate={(newData) => updateFlatItem(item._id, newData)}
                                  onRemove={() => removeFlatItem(item._id)}
                                  onAddChild={addChildToParentHandler}
                                  level={item.level}
                                  path={item.path}
                                  isExpanded={expandedItems.has(item._id)}
                                  onToggleExpand={() => toggleExpand(item._id)}
                                />
                              ))}
                            </div>
                          )}

                          {flattenedExtraData.length === 0 && (
                            <div className="text-center py-8 text-gray-500">
                              <TreePine className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                              <p>No hierarchy items yet. Add your first root item to get started.</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Form Actions */}
                      <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                        <button
                          type="submit"
                          disabled={loading}
                          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 font-medium"
                        >
                          {loading ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                              <span>Saving...</span>
                            </>
                          ) : (
                            <>
                              <Settings className="w-4 h-4" />
                              <span>{editingParam ? "Update Parameter" : "Create Parameter"}</span>
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowForm(false)
                            setEditingParam(null)
                            resetForm()
                          }}
                          className="flex items-center space-x-2 bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                        >
                          <span>Cancel</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Holder Status */}
            {showForm && (
              <div className="lg:w-80 bg-gray-50 border-l border-gray-200 p-6">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm sticky top-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-xl">
                    <h3 className="text-lg font-bold flex items-center">
                      <Move3D className="w-5 h-5 mr-2" />
                      Holder Status
                    </h3>
                    {selectedPageId && <p className="text-sm opacity-90 mt-1">Page: {selectedPageId}</p>}
                  </div>
                  <div className="p-4 space-y-4 max-h-screen overflow-y-auto">
                    {Object.entries(holderSections).map(([section, holders]) => (
                      <div key={section}>
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-2 rounded-lg font-bold text-center mb-3 shadow-sm">
                          {section}
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {holders.map((holder) => {
                            const isUsed = usedHolders.includes(holder)
                            return (
                              <div
                                key={holder}
                                className={`p-3 rounded-lg text-sm font-medium flex items-center justify-between shadow-sm transition-colors ${
                                  isUsed
                                    ? "bg-green-100 text-green-800 border border-green-200"
                                    : "bg-red-100 text-red-800 border border-red-200"
                                }`}
                              >
                                <span className="flex items-center">
                                  <div
                                    className={`w-2 h-2 rounded-full mr-2 ${isUsed ? "bg-green-500" : "bg-red-500"}`}
                                  ></div>
                                  {holder}
                                </span>
                                <span className="text-xs font-bold">{isUsed ? "✓" : "✗"}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExtraParamsManager
