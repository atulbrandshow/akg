"use client"

import { API_NODE_URL } from "@/configs/config"
import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import CreatableSelect from "react-select/creatable"
import { useSearchParams } from "next/navigation"

// Dynamically import JoditEditor to avoid SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false })

const PageDataManager = () => {
  const searchParams = useSearchParams()
  const pageid = searchParams.get("page_id")
  const [pageDetails, setPageDetails] = useState({})
  const [params, setParams] = useState([])
  const [type, setType] = useState("")
  const [availableKeys, setAvailableKeys] = useState([])
  const [loading, setLoading] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: "", type: "" })
  const [uploadingFiles, setUploadingFiles] = useState(false)
  const [selectedKey, setSelectedKey] = useState(null)
  const [isNewKey, setIsNewKey] = useState(false)

  const editorRef = useRef(null)

  const [formData, setFormData] = useState({
    key: "",
    value: "",
    pageType: type || "",
    dataType: "text",
    status: true,
  })

  const dataTypes = ["text", "image", "multiple image", "pdf", "multiple pdfs", "description"]
  useEffect(() => {
    const fetchData = async () => {
      if (pageid) {
        try {
          const response = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${pageid}`, {
            credentials: "include",
          });
          const data = await response.json();
          if (data.status) {
            setType(data?.data?.type || "Page")
            setPageDetails(data?.data || {})
          } else {
            setType("Page")
            setPageDetails({})
          }
        } catch (error) {
          console.error("Error fetching slug data:", error);
        }
      }

      if (type) {
        fetchAvailableKeys();
      }
    };

    fetchData();
  }, [pageid])
  useEffect(() => {
    fetchParams();
  }, [pageid, type]);


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
      console.log(result)

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

  const fetchAvailableKeys = async () => {
    try {
      const response = await fetch(`${API_NODE_URL}page-params/get-keys/?pageType=${type}`)
      const result = await response.json()
      console.log("Available keys:", result)

      if (result.status) {
        setAvailableKeys(result.data || [])
      }
    } catch (error) {
      console.log("Error fetching keys:", error)
    }
  }

  // Prepare options for React Select
  const keyOptions = availableKeys.map((key) => ({
    value: key.key,
    label: key.key,
    dataType: key.dataType,
    isExisting: true,
  }))

  // Handle file upload
  const handleFileUpload = async (files, isMultiple = false) => {
    setUploadingFiles(true)
    try {
      const uploadedFiles = []

      for (const file of files) {
        const formData = new FormData()
        formData.append("file", file)

        // Replace with your actual file upload endpoint
        const response = await fetch(`${API_NODE_URL}upload`, {
          method: "POST",
          body: formData,
        })

        const result = await response.json()
        if (result.success) {
          uploadedFiles.push(result.fileUrl)
        }
      }

      return isMultiple ? uploadedFiles : uploadedFiles[0]
    } catch (error) {
      showNotification("Failed to upload files", "error")
      return isMultiple ? [] : ""
    } finally {
      setUploadingFiles(false)
    }
  }

  // Handle key selection from React Select
  const handleKeyChange = (selectedOption) => {
    console.log("Selected option:", selectedOption)

    if (selectedOption) {
      setSelectedKey(selectedOption)

      if (selectedOption.isExisting) {
        // Existing key selected
        setFormData({
          ...formData,
          key: selectedOption.value,
          dataType: selectedOption.dataType,
          value: "",
        })
        setIsNewKey(false)
      } else {
        // New key created
        setFormData({
          ...formData,
          key: selectedOption.value,
          dataType: "text", // Default to text for new keys
          value: "",
        })
        setIsNewKey(true)
      }
    } else {
      // Clear selection
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

  // Handle creating new option
  const handleCreate = (inputValue) => {
    console.log("Creating new key:", inputValue)

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
          const uploadedUrl = await handleFileUpload([files[0]], false)
          setFormData({ ...formData, value: uploadedUrl })
        }
        break

      case "multiple image":
        if (files && files.length > 0) {
          const uploadedUrls = await handleFileUpload(Array.from(files), true)
          setFormData({ ...formData, value: JSON.stringify(uploadedUrls) })
        }
        break

      case "pdf":
        if (files && files[0]) {
          const uploadedUrl = await handleFileUpload([files[0]], false)
          setFormData({ ...formData, value: uploadedUrl })
        }
        break

      case "multiple pdfs":
        if (files && files.length > 0) {
          const uploadedUrls = await handleFileUpload(Array.from(files), true)
          setFormData({ ...formData, value: JSON.stringify(uploadedUrls) })
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
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDataTypeColor(option.dataType)}`}>
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter the text content for this section..."
            rows="4"
            required
          />
        )

      case "image":
        return (
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleInputChange(e, "image")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required={!formData.value}
            />
            <p className="text-sm text-gray-500">Upload a single image (JPG, PNG, GIF)</p>
            {formData.value && (
              <div className="mt-2">
                <img
                  src={formData.value || "/placeholder.svg"}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg border"
                />
              </div>
            )}
            {uploadingFiles && <p className="text-sm text-blue-600">Uploading image...</p>}
          </div>
        )

      case "multiple image":
        return (
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleInputChange(e, "multiple image")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required={!formData.value}
            />
            <p className="text-sm text-gray-500">Upload multiple images (JPG, PNG, GIF)</p>
            {formData.value && (
              <div className="mt-2 grid grid-cols-4 gap-2">
                {JSON.parse(formData.value || "[]").map((url, index) => (
                  <img
                    key={index}
                    src={url || "/placeholder.svg"}
                    alt={`Preview ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                ))}
              </div>
            )}
            {uploadingFiles && <p className="text-sm text-blue-600">Uploading images...</p>}
          </div>
        )

      case "pdf":
        return (
          <div className="space-y-2">
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleInputChange(e, "pdf")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required={!formData.value}
            />
            <p className="text-sm text-gray-500">Upload a PDF document</p>
            {formData.value && (
              <div className="mt-2 p-3 bg-gray-100 rounded-lg">
                <a
                  href={formData.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
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
              </div>
            )}
            {uploadingFiles && <p className="text-sm text-blue-600">Uploading PDF...</p>}
          </div>
        )

      case "multiple pdfs":
        return (
          <div className="space-y-2">
            <input
              type="file"
              accept=".pdf"
              multiple
              onChange={(e) => handleInputChange(e, "multiple pdfs")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required={!formData.value}
            />
            <p className="text-sm text-gray-500">Upload multiple PDF documents</p>
            {formData.value && (
              <div className="mt-2 space-y-2">
                {JSON.parse(formData.value || "[]").map((url, index) => (
                  <div key={index} className="p-3 bg-gray-100 rounded-lg">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
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
                  </div>
                ))}
              </div>
            )}
            {uploadingFiles && <p className="text-sm text-blue-600">Uploading PDFs...</p>}
          </div>
        )

      case "description":
        return (
          <div className="space-y-2">
            <JoditEditor
              ref={editorRef}
              value={formData.value}
              onChange={handleDescChange}
              config={{
                readonly: false,
                height: 300,
                toolbar: true,
                spellcheck: true,
                language: "en",
                toolbarButtonSize: "medium",
                toolbarAdaptive: false,
                showCharsCounter: true,
                showWordsCounter: true,
                showXPathInStatusbar: false,
                askBeforePasteHTML: true,
                askBeforePasteFromWord: true,
                buttons: [
                  "source",
                  "|",
                  "bold",
                  "strikethrough",
                  "underline",
                  "italic",
                  "|",
                  "ul",
                  "ol",
                  "|",
                  "outdent",
                  "indent",
                  "|",
                  "font",
                  "fontsize",
                  "brush",
                  "paragraph",
                  "|",
                  "image",
                  "link",
                  "table",
                  "|",
                  "align",
                  "undo",
                  "redo",
                  "|",
                  "hr",
                  "eraser",
                  "copyformat",
                  "|",
                  "symbol",
                  "fullsize",
                ],
                uploader: {
                  insertImageAsBase64URI: true,
                },
                width: "100%",
                minHeight: 200,
              }}
              className="w-full"
            />
            <p className="text-sm text-gray-500">Use the rich text editor to format your content</p>
          </div>
        )

      default:
        return (
          <textarea
            name="value"
            value={formData.value}
            onChange={(e) => handleInputChange(e, "text")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
          <div className="mt-1">
            <img
              src={value || "/placeholder.svg"}
              alt="Parameter image"
              className="w-32 h-32 object-cover rounded-lg border"
            />
          </div>
        )

      case "multiple image":
        const imageUrls = JSON.parse(value || "[]")
        return (
          <div className="mt-1 grid grid-cols-4 gap-2">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url || "/placeholder.svg"}
                alt={`Image ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg border"
              />
            ))}
          </div>
        )

      case "pdf":
        return (
          <div className="mt-1">
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800"
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
            </a>
          </div>
        )

      case "multiple pdfs":
        const pdfUrls = JSON.parse(value || "[]")
        return (
          <div className="mt-1 space-y-2">
            {pdfUrls.map((url, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800"
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
            className="mt-1 p-3 bg-gray-100 rounded-lg prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        )

      default:
        return (
          <div className="mt-1 p-3 bg-gray-100 rounded-lg">
            <code className="text-sm text-gray-800 break-all">{formatValue(value, dataType)}</code>
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
        // Refresh available keys if it was a new key
        if (isNewKey) {
          fetchAvailableKeys()
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
    setFormData({
      key: param.key,
      value: typeof param.value === "object" ? JSON.stringify(param.value) : param.value,
      pageType: param.pageType,
      dataType: param.dataType,
      status: param.status,
    })

    // Set selected key for React Select
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
      return JSON.stringify(value)
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

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Notification */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ${notification.type === "error" ? "bg-red-500 text-white" : "bg-green-500 text-white"
            }`}
        >
          <div className="flex items-center">
            <span>{notification.message}</span>
            <button
              onClick={() => setNotification({ show: false, message: "", type: "" })}
              className="ml-3 text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Page Content Manager</h1>
            <p className="text-gray-600 mt-1">
              Manage content sections for <span className="font-semibold text-blue-600">{pageDetails?.name || pageid}</span>
              {type && <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{type}</span>}
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2`}
          >
            {!showAddForm ?
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg> :
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            }
            <span>{showAddForm ? "Cancel" : "Add Content Section"}</span>
          </button>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {editingId ? "Edit Content Section" : "Add New Content Section"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Section Name <span className="text-red-500">*</span>
                  {isNewKey && <span className="ml-2 text-green-600 text-xs">(Creating New Section)</span>}
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
                  className="react-select-container"
                  classNamePrefix="react-select"
                  formatCreateLabel={(inputValue) => `Create "${inputValue}"`}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Choose from existing sections or type a new name to create one
                </p>
              </div>

              {/* Show data type selection only for new keys */}
              {isNewKey && selectedKey && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.dataType}
                    onChange={(e) => setFormData({ ...formData, dataType: e.target.value, value: "" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                                    ? "Rich Text Content"
                                    : type}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Select what type of content this section will contain</p>
                </div>
              )}

              {/* Show existing data type for existing keys */}
              {!isNewKey && selectedKey && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                  <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getDataTypeColor(formData.dataType)}`}
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
                                  ? "Rich Text Content"
                                  : formData.dataType}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Content type is fixed for existing sections</p>
                </div>
              )}
            </div>

            {selectedKey && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content <span className="text-red-500">*</span>
                </label>
                {renderValueInput()}
              </div>
            )}

            {!type && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
            {/* 
            <div className="flex items-center">
              <input
                type="checkbox"
                id="status"
                checked={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="status" className="ml-2 text-sm font-medium text-gray-700">
                Publish this content section (visible to users)
              </label>
            </div> */}

            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                disabled={loading || uploadingFiles || !selectedKey}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                {loading
                  ? "Saving..."
                  : uploadingFiles
                    ? "Uploading..."
                    : editingId
                      ? "Update Content Section"
                      : "Add Content Section"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Parameters List */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Content Sections ({params.length})</h2>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading content sections...</span>
          </div>
        ) : params.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No content sections found</h3>
            <p className="mt-1 text-sm text-gray-500">Start by creating your first content section for this page.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {params.map((param) => (
              <div key={param._id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{param.key}</h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getDataTypeColor(param.dataType)}`}
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
                                    ? "Rich Text"
                                    : param.dataType}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${param.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                      >
                        {param.status ? "Published" : "Draft"}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-sm text-gray-500">Content:</span>
                      {renderValueDisplay(param.value, param.dataType)}
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>
                        Category: <span className="font-medium">{param.pageType}</span>
                      </span>
                      <span>Created: {new Date(param.createdAt).toLocaleDateString()}</span>
                      {param.updatedAt !== param.createdAt && (
                        <span>Updated: {new Date(param.updatedAt).toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(param)}
                      className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                      title="Edit content section"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200"
                      title="Delete content section"
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PageDataManager
