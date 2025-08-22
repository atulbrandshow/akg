"use client"

import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"
import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import CreatableSelect from "react-select/creatable"
import { useSearchParams } from "next/navigation"
import { uploadImages } from "@/utills/ImageUpload"
import Link from "next/link"

// Dynamically import JoditEditor to avoid SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="ml-2 text-gray-600">Loading editor...</span>
    </div>
  ),
})

const PageDataManager = () => {
  const searchParams = useSearchParams()
  const pageid = searchParams.get("page_id")
  const formRef = useRef(null)

  // State management
  const [pageDetails, setPageDetails] = useState({})
  const [params, setParams] = useState([])
  const [filteredParams, setFilteredParams] = useState([])
  const [type, setType] = useState("")
  const [availableKeys, setAvailableKeys] = useState([])
  const [loading, setLoading] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: "", type: "" })
  const [uploadingFiles, setUploadingFiles] = useState(false)
  const [selectedKey, setSelectedKey] = useState(null)
  const [isNewKey, setIsNewKey] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("all")
  const [groupByType, setGroupByType] = useState(true)

  // Collapsible sections state
  const [collapsedSections, setCollapsedSections] = useState({})
  const [allCollapsed, setAllCollapsed] = useState(false)

  const editorRef = useRef(null)
  const [formData, setFormData] = useState({
    key: "",
    value: "",
    pageType: type || "",
    dataType: "text",
    status: true,
  })

  const dataTypes = ["text", "image", "multiple image", "pdf", "multiple pdfs", "description"]

  // Initialize data
  useEffect(() => {
    const fetchData = async () => {
      if (pageid) {
        try {
          const response = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${pageid}`, {
            credentials: "include",
          })
          const data = await response.json();
          if (data.status) {
            setType(data?.data?.type || "Page")
            setPageDetails(data?.data || {})
            fetchAvailableKeys(data?.data?.type || "Page");
          } else {
            setType("Page")
            setPageDetails({})
          }
        } catch (error) {
          console.error("Error fetching slug data:", error)
        }
      }
      if (type) {
        fetchAvailableKeys()
      }
    }
    fetchData()
  }, [pageid])

  useEffect(() => {
    fetchParams()
  }, [pageid, type])

  // Filter and search functionality
  useEffect(() => {
    let filtered = params
    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (param) =>
          param.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
          param.pageType.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (typeof param.value === "string" && param.value.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }
    // Type filter
    if (selectedTypeFilter !== "all") {
      filtered = filtered.filter((param) => param.dataType === selectedTypeFilter)
    }
    setFilteredParams(filtered)
  }, [params, searchQuery, selectedTypeFilter])

  // Collapsible section functions
  const toggleSection = (sectionType) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionType]: !prev[sectionType],
    }))
  }

  const toggleAllSections = () => {
    const newCollapsedState = !allCollapsed
    setAllCollapsed(newCollapsedState)

    // Get all unique data types
    const uniqueTypes = [...new Set(filteredParams.map((param) => param.dataType))]
    const newCollapsedSections = {}

    uniqueTypes.forEach((type) => {
      newCollapsedSections[type] = newCollapsedState
    })

    setCollapsedSections(newCollapsedSections)
  }

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" })
    }, 3000)
  }

  const fetchParams = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_NODE_URL}page-params/get-by-pageid?pageId=${pageid}`)
      const result = await response.json()

      if (result.status) {
        setParams(result.data)
      } else {
        showNotification(result.message, "error")
      }
    } catch (error) {
      console.log(error)
      showNotification("Failed to fetch parameters", "error")
    } finally {
      setLoading(false)
    }
  }

  const fetchAvailableKeys = async (type) => {
    try {
      const response = await fetch(`${API_NODE_URL}page-params/get-keys/?pageType=${type}`)
      const result = await response.json();

      if (result.status) {
        setAvailableKeys(result.data || [])
      }
    } catch (error) {
      console.log("Error fetching keys:", error)
    }
  }

  const existingParamKeys = params.map((param) => param.key)
  const keyOptions = availableKeys
    .filter((key) => !existingParamKeys.includes(key.key))
    .map((key) => ({
      value: key.key,
      label: key.key,
      dataType: key.dataType,
      isExisting: true,
    }))

  // Handle file upload using the provided utility
  const handleFileUpload = async (files, isMultiple = false) => {
    setUploadingFiles(true)
    try {
      const uploadedPaths = await uploadImages(files)
      return isMultiple ? uploadedPaths : uploadedPaths[0]
    } catch (error) {
      showNotification("Failed to upload files", "error")
      return isMultiple ? [] : ""
    } finally {
      setUploadingFiles(false)
    }
  }

  // Handle key selection from React Select
  const handleKeyChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedKey(selectedOption)
      if (selectedOption.isExisting) {
        setFormData({
          ...formData,
          key: selectedOption.value,
          dataType: selectedOption.dataType,
          value: selectedOption.dataType === "multiple image" || selectedOption.dataType === "multiple pdfs" ? [] : "",
        })
        setIsNewKey(false)
      } else {
        setFormData({
          ...formData,
          key: selectedOption.value,
          dataType: "text",
          value: "",
        })
        setIsNewKey(true)
      }
    } else {
      setSelectedKey(null)
      setFormData({
        ...formData,
        key: "",
        value: "",
        dataType: "text",
      })
      setIsNewKey(false)
    }
  }

  const handleCreate = (inputValue) => {
    const newOption = {
      value: inputValue,
      label: inputValue,
      dataType: "text",
      isExisting: false,
    }
    setSelectedKey(newOption)
    setFormData({
      ...formData,
      key: inputValue,
      dataType: "text",
      value: "",
    })
    setIsNewKey(true)
  }

  // Handle different input types
  const handleInputChange = async (e, inputType) => {
    const { name, value, files } = e.target
    switch (inputType) {
      case "text":
        setFormData({ ...formData, [name]: value })
        break
      case "image":
        if (files && files[0]) {
          const uploadedPath = await handleFileUpload([files[0]], false)
          setFormData({ ...formData, value: uploadedPath })
        }
        break
      case "multiple image":
        if (files && files.length > 0) {
          const uploadedPaths = await handleFileUpload(Array.from(files), true)
          let currentImages = formData.value
          if (typeof currentImages === "string") {
            try {
              currentImages = JSON.parse(currentImages || "[]")
            } catch {
              currentImages = []
            }
          }
          if (!Array.isArray(currentImages)) {
            currentImages = []
          }
          const updatedImages = [...currentImages, ...uploadedPaths]
          setFormData({ ...formData, value: updatedImages })
        }
        break
      case "pdf":
        if (files && files[0]) {
          const uploadedPath = await handleFileUpload([files[0]], false)
          setFormData({ ...formData, value: uploadedPath })
        }
        break
      case "multiple pdfs":
        if (files && files.length > 0) {
          const uploadedPaths = await handleFileUpload(Array.from(files), true)
          let currentPdfs = formData.value
          if (typeof currentPdfs === "string") {
            try {
              currentPdfs = JSON.parse(currentPdfs || "[]")
            } catch {
              currentPdfs = []
            }
          }
          if (!Array.isArray(currentPdfs)) {
            currentPdfs = []
          }
          const updatedPdfs = [...currentPdfs, ...uploadedPaths]
          setFormData({ ...formData, value: updatedPdfs })
        }
        break
      default:
        setFormData({ ...formData, [name]: value })
    }
  }

  // Handle JoditEditor change
  const handleDescChange = (content) => {
    setFormData({ ...formData, value: content })
  }

  // Delete individual image from multiple images
  const handleDeleteImage = (indexToDelete) => {
    try {
      let currentImages = formData.value
      if (typeof currentImages === "string") {
        currentImages = JSON.parse(currentImages || "[]")
      }
      if (!Array.isArray(currentImages)) {
        currentImages = []
      }
      const updatedImages = currentImages.filter((_, index) => index !== indexToDelete)
      setFormData({ ...formData, value: updatedImages })
    } catch (error) {
      console.error("Error deleting image:", error)
    }
  }

  // Custom styles for React Select
  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "48px",
      border: state.isFocused ? "2px solid #3b82f6" : "1px solid #d1d5db",
      borderRadius: "8px",
      boxShadow: state.isFocused ? "0 0 0 0 transparent" : provided.boxShadow,
      "&:hover": {
        border: state.isFocused ? "2px solid #3b82f6" : "1px solid #9ca3af",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#3b82f6" : state.isFocused ? "#eff6ff" : provided.backgroundColor,
      color: state.isSelected ? "white" : "#374151",
      padding: "12px 16px",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
    }),
  }

  // Format option label to show data type for existing keys
  const formatOptionLabel = (option) => (
    <div className="flex items-center justify-between w-full">
      <span>{option.label}</span>
      {option.isExisting && (
        <span className={`px-2 py-1 rounded-full text-xs font-novaSemi ${getDataTypeColor(option.dataType)}`}>
          {option.dataType}
        </span>
      )}
    </div>
  )

  // Render input based on data type
  const renderValueInput = () => {
    const { dataType } = formData
    switch (dataType) {
      case "text":
        return (
          <textarea
            name="value"
            value={formData.value}
            onChange={(e) => handleInputChange(e, "text")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
            placeholder="Enter the text content for this section..."
            rows="4"
            required
          />
        )
      case "image":
        return (
          <div className="space-y-3">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleInputChange(e, "image")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-novaSemi file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              required={!formData.value}
            />
            <p className="text-sm text-gray-500">Upload a single image (JPG, PNG, GIF, WebP)</p>
            {formData.value && (
              <div className="mt-3 relative inline-block">
                <img
                  src={`${IMAGE_PATH}${formData.value}`}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-lg border shadow-sm"
                />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, value: "" })}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                >
                  ×
                </button>
              </div>
            )}
            {uploadingFiles && (
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span className="text-sm">Uploading image...</span>
              </div>
            )}
          </div>
        )
      case "multiple image":
        return (
          <div className="space-y-3">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleInputChange(e, "multiple image")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-novaSemi file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              required={!formData.value || (Array.isArray(formData.value) && formData.value.length === 0)}
            />
            <p className="text-sm text-gray-500">Upload multiple images (JPG, PNG, GIF, WebP)</p>
            {formData.value && Array.isArray(formData.value) && formData.value.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {formData.value.map((path, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={`${IMAGE_PATH}${path}`}
                      alt={`Preview ${index + 1}`}
                      className="w-auto h-16 object-cover rounded-lg border shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            {uploadingFiles && (
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span className="text-sm">Uploading images...</span>
              </div>
            )}
          </div>
        )
      case "pdf":
        return (
          <div className="space-y-3">
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleInputChange(e, "pdf")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-novaSemi file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
              required={!formData.value}
            />
            <p className="text-sm text-gray-500">Upload a PDF document</p>
            {formData.value && (
              <div className="mt-3 p-4 bg-gray-50 rounded-lg border">
                <div className="flex items-center justify-between">
                  <a
                    href={`${API_NODE_URL.replace("/api/", "")}${formData.value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>View PDF Document</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, value: "" })}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            {uploadingFiles && (
              <div className="flex items-center space-x-2 text-red-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                <span className="text-sm">Uploading PDF...</span>
              </div>
            )}
          </div>
        )
      case "multiple pdfs":
        return (
          <div className="space-y-3">
            <input
              type="file"
              accept=".pdf"
              multiple
              onChange={(e) => handleInputChange(e, "multiple pdfs")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-novaSemi file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
              required={!formData.value || (Array.isArray(formData.value) && formData.value.length === 0)}
            />
            <p className="text-sm text-gray-500">Upload multiple PDF documents</p>
            {formData.value && Array.isArray(formData.value) && formData.value.length > 0 && (
              <div className="mt-3 space-y-2">
                {formData.value.map((path, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center justify-between">
                      <a
                        href={`${API_NODE_URL.replace("/api/", "")}${path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span>PDF Document {index + 1}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
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
                ))}
              </div>
            )}
            {uploadingFiles && (
              <div className="flex items-center space-x-2 text-red-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                <span className="text-sm">Uploading PDFs...</span>
              </div>
            )}
          </div>
        )
      case "description":
        return (
          <div className="space-y-2">
            <JoditEditor ref={editorRef} value={formData.value} onBlur={handleDescChange} />
            <p className="text-sm text-gray-500">Use the Description text editor to format your content</p>
          </div>
        )
      default:
        return (
          <textarea
            name="value"
            value={formData.value}
            onChange={(e) => handleInputChange(e, "text")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
            placeholder="Enter the content for this section..."
            rows="4"
            required
          />
        )
    }
  }

  // Render value display based on data type
  const renderValueDisplay = (value, dataType) => {
    switch (dataType) {
      case "image":
        return (
          <div className="mt-2">
            <img
              src={`${IMAGE_PATH}${value}`}
              alt="Parameter image"
              className="w-60 h-32 object-cover rounded-lg border shadow-sm"
            />
          </div>
        )
      case "multiple image":
        let imageUrls = value
        if (typeof value === "string") {
          try {
            imageUrls = JSON.parse(value || "[]")
          } catch {
            imageUrls = []
          }
        }
        if (!Array.isArray(imageUrls)) {
          imageUrls = []
        }
        return (
          <div className="mt-2 flex flex-wrap gap-2">
            {imageUrls.map((path, index) => (
              <img
                key={index}
                src={`${IMAGE_PATH}${path}`}
                alt={`Image ${index + 1}`}
                className="w-auto h-16 object-cover rounded-lg border shadow-sm"
              />
            ))}
          </div>
        )
      case "pdf":
        return (
          <div className="mt-2">
            <Link
              href={IMAGE_PATH + value}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>View PDF</span>
            </Link>
          </div>
        )
      case "multiple pdfs":
        let pdfUrls = value
        if (typeof value === "string") {
          try {
            pdfUrls = JSON.parse(value || "[]")
          } catch {
            pdfUrls = []
          }
        }
        if (!Array.isArray(pdfUrls)) {
          pdfUrls = []
        }
        return (
          <div className="mt-2 space-y-2">
            {pdfUrls.map((path, index) => (
              <a
                key={index}
                href={`${API_NODE_URL.replace("/api/", "")}${path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>PDF {index + 1}</span>
              </a>
            ))}
          </div>
        )
      case "description":
        return (
          <div
            className="mt-2 p-3 bg-gray-50 rounded-lg prose font-novaReg prose-sm max-w-none border"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        )
      default:
        return (
          <div className="mt-2 p-3 bg-gray-50 rounded-lg border">
            <code className="text-sm text-gray-800 break-all font-novaReg whitespace-pre-wrap">{formatValue(value, dataType)}</code>
          </div>
        )
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = {
        ...formData,
        pageid: pageid,
        pageType: type || formData.pageType,
      }
      const url = editingId ? `${API_NODE_URL}page-params/update/${editingId}` : `${API_NODE_URL}page-params/add`
      const method = editingId ? "PUT" : "POST"
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (result.status) {
        showNotification(result.message)
        resetForm()
        fetchParams()
        if (isNewKey) {
          fetchAvailableKeys(type)
        }
      } else {
        showNotification(result.message, "error")
      }
    } catch (error) {
      showNotification("Failed to save parameter", "error")
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (param) => {
    setEditingId(param._id)
    let value = param.value
    if (param.dataType === "multiple image" || param.dataType === "multiple pdfs") {
      if (typeof param.value === "string") {
        try {
          value = JSON.parse(param.value)
        } catch {
          value = []
        }
      } else if (Array.isArray(param.value)) {
        value = param.value
      } else {
        value = []
      }
    }
    setFormData({
      key: param.key,
      value: value,
      pageType: param.pageType,
      dataType: param.dataType,
      status: param.status,
    })
    const existingKey = availableKeys.find((key) => key.key === param.key)
    if (existingKey) {
      setSelectedKey({
        value: param.key,
        label: param.key,
        dataType: param.dataType,
        isExisting: true,
      })
      setIsNewKey(false)
    } else {
      setSelectedKey({
        value: param.key,
        label: param.key,
        dataType: param.dataType,
        isExisting: false,
      })
      setIsNewKey(true)
    }
    setShowAddForm(true)
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this content section?")) return
    setLoading(true)
    try {
      const response = await fetch(`${API_NODE_URL}page-params/delete/${id}`, {
        method: "DELETE",
      })
      const result = await response.json()
      if (result.status) {
        showNotification(result.message)
        fetchParams()
      } else {
        showNotification(result.message, "error")
      }
    } catch (error) {
      showNotification("Failed to delete content section", "error")
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setEditingId(null)
    setShowAddForm(false)
    setSelectedKey(null)
    setIsNewKey(false)
    setFormData({
      key: "",
      value: "",
      pageType: type || "",
      dataType: "text",
      status: true,
    })
  }

  const formatValue = (value, dataType) => {
    if (typeof value === "object") {
      return JSON.stringify(value, null, 2)
    }
    if (dataType === "boolean") {
      return value ? "true" : "false"
    }
    return String(value)
  }

  const getDataTypeColor = (dataType) => {
    const colors = {
      text: "bg-blue-100 text-blue-800",
      image: "bg-pink-100 text-pink-800",
      "multiple image": "bg-purple-100 text-purple-800",
      pdf: "bg-red-100 text-red-800",
      "multiple pdfs": "bg-orange-100 text-orange-800",
      description: "bg-green-100 text-green-800",
    }
    return colors[dataType] || "bg-gray-100 text-gray-800"
  }

  // Group parameters by type
  const groupedParams = groupByType
    ? filteredParams.reduce((groups, param) => {
      const type = param.dataType
      if (!groups[type]) {
        groups[type] = []
      }
      groups[type].push(param)
      return groups
    }, {})
    : { all: filteredParams }

  // Get unique data types for filter
  const uniqueDataTypes = [...new Set(params.map((param) => param.dataType))]

  // Get section summary for collapsed view
  const getSectionSummary = (groupParams) => {
    const total = groupParams.length
    const published = groupParams.filter((param) => param.status).length
    const draft = total - published
    return { total, published, draft }
  }

  return (
    <div className="">
      <div className="">
        {/* Notification */}
        {notification.show && (
          <div
            className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 transform ${notification.type === "error" ? "bg-red-500 text-white" : "bg-green-500 text-white"
              }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-novaSemi">{notification.message}</span>
              <button
                onClick={() => setNotification({ show: false, message: "", type: "" })}
                className="ml-4 text-white hover:text-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6" ref={formRef}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-novaBold text-gray-900 mb-2">Page Content Manager</h1>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-gray-600 font-novaReg">
                  Managing content for{" "}
                  <span className="font-novaSemi text-blue-600">{pageDetails?.name || pageid}</span>
                </p>
                {type && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-novaSemi">{type}</span>
                )}
              </div>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-novaSemi transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow-md"
            >
              {!showAddForm ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <span>{showAddForm ? "Cancel" : "Add Content Section"}</span>
            </button>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-novaSemi text-gray-900">
                {editingId ? "Edit Content Section" : "Add New Content Section"}
              </h2>
              {editingId && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-novaSemi">
                  Editing Mode
                </span>
              )}
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-2">
                  <label className="block text-sm font-novaSemi text-gray-700 mb-2">
                    Content Section Name <span className="text-red-500">*</span>
                    {isNewKey && (
                      <span className="ml-2 text-green-600 text-xs font-novaSemi">(Creating New Section)</span>
                    )}
                  </label>
                  <CreatableSelect
                    value={selectedKey}
                    onChange={handleKeyChange}
                    onCreateOption={handleCreate}
                    options={keyOptions}
                    isClearable={true}
                    placeholder="Select existing section or type to create new one..."
                    noOptionsMessage={() => "Type to create a new content section"}
                    formatOptionLabel={formatOptionLabel}
                    styles={selectStyles}
                    className="react-select-container font-novaReg"
                    classNamePrefix="react-select"
                    formatCreateLabel={(inputValue) => `Create "${inputValue}"`}
                  />
                  <p className="text-xs text-gray-500 mt-1 font-novaReg">
                    Choose from existing sections or type a new name to create one
                  </p>
                </div>

                {/* Data Type Selection */}
                {isNewKey && selectedKey && (
                  <div>
                    <label className="block text-sm font-novaSemi text-gray-700 mb-2">
                      Content Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.dataType}
                      onChange={(e) => {
                        const newDataType = e.target.value
                        const newValue = newDataType === "multiple image" || newDataType === "multiple pdfs" ? [] : ""
                        setFormData({ ...formData, dataType: newDataType, value: newValue })
                      }}
                      className="w-full px-4 py-3 border font-novaReg border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      {dataTypes.map((type) => (
                        <option key={type} value={type}>
                          {type === "text"
                            ? "Text Content"
                            : type === "image"
                              ? "Single Image"
                              : type === "multiple image"
                                ? "Multiple Images"
                                : type === "pdf"
                                  ? "PDF Document"
                                  : type === "multiple pdfs"
                                    ? "Multiple PDFs"
                                    : type === "description"
                                      ? "Description"
                                      : type}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Select what type of content this section will contain</p>
                  </div>
                )}

                {/* Existing Data Type Display */}
                {!isNewKey && selectedKey && (
                  <div>
                    <label className="block text-sm font-novaSemi text-gray-700 mb-2">Content Type</label>
                    <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-novaSemi ${getDataTypeColor(formData.dataType)}`}
                      >
                        {formData.dataType === "text"
                          ? "Text Content"
                          : formData.dataType === "image"
                            ? "Single Image"
                            : formData.dataType === "multiple image"
                              ? "Multiple Images"
                              : formData.dataType === "pdf"
                                ? "PDF Document"
                                : formData.dataType === "multiple pdfs"
                                  ? "Multiple PDFs"
                                  : formData.dataType === "description"
                                    ? "Description"
                                    : formData.dataType}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Content type is fixed for existing sections</p>
                  </div>
                )}

                {/* Page Type */}
                {!type && (
                  <div>
                    <label className="block text-sm font-novaSemi text-gray-700 mb-2">
                      Page Category <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="pageType"
                      value={formData.pageType}
                      onChange={(e) => setFormData({ ...formData, pageType: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., homepage, about, services, blog"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Specify the category or type of page this content belongs to
                    </p>
                  </div>
                )}
              </div>

              {/* Content Input */}
              {selectedKey && (
                <div>
                  <label className="block text-sm font-novaSemi text-gray-700 mb-2">
                    Content <span className="text-red-500">*</span>
                  </label>
                  {renderValueInput()}
                </div>
              )}

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={loading || uploadingFiles || !selectedKey}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded-lg font-novaSemi transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Saving...</span>
                    </>
                  ) : uploadingFiles ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Uploading...</span>
                    </>
                  ) : (
                    <span>{editingId ? "Update Content Section" : "Add Content Section"}</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-novaSemi transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
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
                  placeholder="Search content sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div className="lg:w-64">
              <select
                value={selectedTypeFilter}
                onChange={(e) => setSelectedTypeFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="all">All Types</option>
                {uniqueDataTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "text"
                      ? "Text Content"
                      : type === "image"
                        ? "Single Image"
                        : type === "multiple image"
                          ? "Multiple Images"
                          : type === "pdf"
                            ? "PDF Document"
                            : type === "multiple pdfs"
                              ? "Multiple PDFs"
                              : type === "description"
                                ? "Description"
                                : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Group Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setGroupByType(!groupByType)}
                className={`px-4 py-3 rounded-lg font-novaSemi transition-all duration-200 flex items-center space-x-2 ${groupByType
                  ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5m14 14H5" />
                </svg>
                <span>Group by Type</span>
              </button>

              {/* Collapse All Toggle */}
              {groupByType && filteredParams.length > 0 && (
                <button
                  onClick={toggleAllSections}
                  className="px-4 py-3 rounded-lg font-novaSemi transition-all duration-200 flex items-center space-x-2 bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  {allCollapsed ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  )}
                  <span>{allCollapsed ? "Expand All" : "Collapse All"}</span>
                </button>
              )}
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <span>
              Showing {filteredParams.length} of {params.length} content sections
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Clear search
              </button>
            )}
          </div>
        </div>

        {/* Content Sections List */}
        <div className="space-y-6">
          {loading ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-600">Loading content sections...</span>
              </div>
            </div>
          ) : filteredParams.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="text-lg font-novaSemi text-gray-900 mb-2">
                  {searchQuery ? "No matching content sections found" : "No content sections found"}
                </h3>
                <p className="text-gray-500 mb-4">
                  {searchQuery
                    ? "Try adjusting your search terms or filters"
                    : "Start by creating your first content section for this page."}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Clear search to see all sections
                  </button>
                )}
              </div>
            </div>
          ) : (
            Object.entries(groupedParams).map(([groupType, groupParams]) => {
              const isCollapsed = collapsedSections[groupType]
              const summary = getSectionSummary(groupParams)

              return (
                <div key={groupType} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Group Header */}
                  {groupByType && groupType !== "all" && (
                    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => toggleSection(groupType)}
                          className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 -ml-2 transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-2">
                            {isCollapsed ? (
                              <svg
                                className="w-5 h-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            ) : (
                              <svg
                                className="w-5 h-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            )}
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-novaSemi ${getDataTypeColor(groupType)}`}
                            >
                              {groupType === "text"
                                ? "Text Content"
                                : groupType === "image"
                                  ? "Single Image"
                                  : groupType === "multiple image"
                                    ? "Multiple Images"
                                    : groupType === "pdf"
                                      ? "PDF Document"
                                      : groupType === "multiple pdfs"
                                        ? "Multiple PDFs"
                                        : groupType === "description"
                                          ? "Description"
                                          : groupType}
                            </span>
                          </div>
                        </button>

                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          {isCollapsed && (
                            <div className="flex items-center space-x-3">
                              <span className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>{summary.published} Published</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span>{summary.draft} Draft</span>
                              </span>
                            </div>
                          )}
                          <span className="font-novaSemi">
                            {groupParams.length} section{groupParams.length !== 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Group Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${isCollapsed ? "max-h-0 overflow-hidden" : "max-h-none"}`}
                  >
                    <div className="divide-y divide-gray-200">
                      {groupParams.map((param) => (
                        <div key={param._id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              {/* Header */}
                              <div className="flex items-center space-x-3 mb-3">
                                <h4 className="text-lg font-novaSemi text-gray-900 truncate">{param.key}</h4>
                                {!groupByType && (
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-novaSemi ${getDataTypeColor(param.dataType)}`}
                                  >
                                    {param.dataType === "text"
                                      ? "Text"
                                      : param.dataType === "image"
                                        ? "Image"
                                        : param.dataType === "multiple image"
                                          ? "Images"
                                          : param.dataType === "pdf"
                                            ? "PDF"
                                            : param.dataType === "multiple pdfs"
                                              ? "PDFs"
                                              : param.dataType === "description"
                                                ? "Description"
                                                : param.dataType}
                                  </span>
                                )}
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-novaSemi ${param.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                    }`}
                                >
                                  {param.status ? "Published" : "Draft"}
                                </span>
                              </div>

                              {/* Content Preview */}
                              <div className="mb-4">
                                <span className="text-sm font-novaSemi text-gray-700 mb-2 block">Content Preview:</span>
                                {renderValueDisplay(param.value, param.dataType)}
                              </div>

                              {/* Metadata */}
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center space-x-1">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                    />
                                  </svg>
                                  <span>
                                    Category: <span className="font-novaSemi text-gray-700">{param.pageType}</span>
                                  </span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <span className="font-novaSemi">
                                    Created: {new Date(param.createdAt).toLocaleDateString()}
                                  </span>
                                </span>
                                {param.updatedAt !== param.createdAt && (
                                  <span className="flex items-center space-x-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                      />
                                    </svg>
                                    <span className="font-novaSemi">
                                      Updated: {new Date(param.updatedAt).toLocaleDateString()}
                                    </span>
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
                              <button
                                onClick={() => handleEdit(param)}
                                className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200 group"
                                title="Edit content section"
                              >
                                <svg
                                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleDelete(param._id)}
                                className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200 group"
                                title="Delete content section"
                              >
                                <svg
                                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
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
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default PageDataManager
