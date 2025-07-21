"use client"
import React, { useState } from "react"
import dynamic from "next/dynamic"
import { API_NODE_URL } from "@/configs/config"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Dynamically import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="ml-2 text-gray-600">Loading editor...</span>
    </div>
  ),
})

const isValidDate = (date) => {
  return date && !isNaN(new Date(date).getTime())
}

// Image Preview Component
const ImagePreview = ({ file, onDelete, label, dimensions }) => {
  const [imageUrl, setImageUrl] = useState(null)

  React.useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file)
      setImageUrl(url)
      return () => URL.revokeObjectURL(url)
    }
  }, [file])

  if (!file) return null

  return (
    <div className="mt-3 p-3 bg-gray-50 rounded-lg border">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
          <div className="flex items-center space-x-3">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt="Preview"
              className="w-16 h-16 object-cover rounded-lg border"
            />
            <div className="flex-1">
              <p className="text-sm text-gray-600 truncate">{file.name}</p>
              <p className="text-xs text-gray-500">{dimensions}</p>
              <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onDelete}
          className="ml-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
          title="Delete image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// Gallery Preview Component
const GalleryPreview = ({ files, onDeleteFile, label }) => {
  if (!files || files.length === 0) return null

  return (
    <div className="mt-3 p-3 bg-gray-50 rounded-lg border">
      <p className="text-sm font-medium text-gray-700 mb-3">
        {label} ({files.length} files)
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {files.map((file, index) => {
          const imageUrl = URL.createObjectURL(file)
          return (
            <div key={index} className="relative group">
              <img
                src={imageUrl || "/placeholder.svg"}
                alt={`Gallery ${index + 1}`}
                className="w-full h-20 object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={() => onDeleteFile(index)}
                className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                title="Delete image"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg truncate">
                {file.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// File Upload Component
const FileUploadField = ({
  id,
  label,
  file,
  onChange,
  onDelete,
  accept = "image/webp",
  dimensions,
  required = false,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-novaSemi text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100">
        <div className="space-y-2">
          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-sm text-gray-600">
            <p className="font-medium">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500 mt-1">WebP format recommended</p>
            {dimensions && <p className="text-xs text-gray-500">Dimensions: {dimensions}</p>}
          </div>
        </div>
        <input type="file" id={id} accept={accept} onChange={onChange} className="hidden" />
        <label
          htmlFor={id}
          className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          Choose File
        </label>
      </div>
      <ImagePreview file={file} onDelete={onDelete} label={label} dimensions={dimensions} />
    </div>
  )
}

export default function PageDetailsForm({ allData, parentPage }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    page_id: allData?.page_id,
    parent_id: allData?.parent_id,
    languageId: 1,
    price: "",
    name: allData?.name,
    parentPage: parentPage?.name,
    pageTitle: allData?.name,
    date: isValidDate(allData?.date) ? new Date(allData.date).toISOString().split("T")[0] : "",
    shortdesc: "",
    description: "",
    param1: "",
    paramvalue1: "",
    param_img1: null,
    param_url1: "",
    param2: "",
    paramvalue2: "",
    param_img2: null,
    param_url2: "",
    param3: "",
    paramvalue3: "",
    param_img3: null,
    param_url3: "",
    param4: "",
    paramvalue4: "",
    param_img4: null,
    param_url4: "",
    param5: "",
    paramvalue5: "",
    param_img5: null,
    param_url5: "",
    param6: "",
    paramvalue6: "",
    param_img6: null,
    param_url6: "",
    param7: "",
    paramvalue7: "",
    param_img7: null,
    param_url7: "",
    param8: "",
    paramvalue8: "",
    param_img8: null,
    param_url8: "",
    param9: "",
    paramvalue9: "",
    param_img9: null,
    param_url9: "",
    param10: "",
    paramvalue10: "",
    param_img10: null,
    param_url10: "",
    banner_img: null,
    tag1: "",
    tag2: "",
    tag3: "",
    schemaid: "",
    nic_name: "",
    featured_img: null,
    col_width: "",
    video_url: "",
    old_url: "",
    featured_status: "",
    highlightBanner: null,
    galleryimg: [],
    type: allData?.type,
    mainReportImage: null,
    metatitle: "",
    metadesc: "",
    keywords_tag: "",
  })
  const [componentType, setComponentType] = useState("event-details");


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleShortDescChange = (newContent) => {
    setFormData((prev) => ({
      ...prev,
      shortdesc: newContent,
    }))
  }

  const handleDescChange = (newContent) => {
    setFormData((prev) => ({
      ...prev,
      description: newContent,
    }))
  }

  const handleFileChange = (e, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: e.target.files[0],
    }))
  }

  const handleDeleteFile = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: null,
    }))
  }

  const handleGalleryImg = (e, field) => {
    const files = Array.from(e.target.files)
    setFormData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], ...files],
    }))
  }

  const handleDeleteGalleryImage = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      galleryimg: prevData.galleryimg.filter((_, i) => i !== index),
    }))
  }

  const insertPage = async () => {
    const progressBar = document.getElementById("progress-bar")
    try {
      progressBar.style.width = "0%"
      progressBar.style.transition = "none"
      requestAnimationFrame(() => {
        progressBar.style.transition = "width 0.5s ease"
        progressBar.style.width = "100%"
      })

      const payload = {
        ...formData,
        ComponentType: componentType,
      }

      const response = await fetch(`${API_NODE_URL}slug/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()
      const fetchedPages = data.data.pages || []

      if (data.status) {
        toast.success("Event inserted Successfully")
        router.push("/admin/event-list")
      } else {
        toast.error(`Something went wrong: ${fetchedPages?.message}`)
      }
    } catch (error) {
      console.error("Error fetching parent pages:", error)
      toast.error("An error occurred while processing your request.")
    } finally {
      progressBar.style.width = "0%"
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    insertPage()
  }

  return (
    <div className="pb-10">
      <div className="">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Progress Bar */}
          <div
            id="progress-bar"
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 transition-all duration-500"
          ></div>

          {/* Header */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-novaBold text-gray-900">Add Event Details</h1>
                <p className="text-gray-600 font-novaReg mt-2">Create and configure your event content with all necessary details</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-novaSemi">Generate Meta with AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Details Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-novaSemi text-gray-900">Basic Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="parentPage" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Parent Page
                </label>
                <input
                  type="text"
                  id="parentPage"
                  name="parentPage"
                  value={formData.parentPage}
                  onChange={handleChange}
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg bg-gray-50 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="componentType" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Component Type
                </label>
                <input
                  type="text"
                  id="componentType"
                  name="componentType"
                  value={componentType}
                  disabled
                  className="w-full px-4 py-3 border font-novaReg cursor-not-allowed border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Page Details Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-novaSemi text-gray-900">Page Details</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-novaSemi text-gray-700 mb-2">
                    Page Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled
                    className="w-full px-4 cursor-not-allowed py-3 border text-gray-600 font-novaReg border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter page title"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-novaSemi text-gray-700 mb-2">
                    Page Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border font-novaReg border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-novaSemi text-gray-900">Content</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Short Description <span className="text-red-500">*</span>
                </label>
                <div className="border border-gray-300 rounded-lg font-novaReg overflow-hidden">
                  <JoditEditor
                    value={formData.shortdesc}
                    onBlur={handleShortDescChange}
                    config={{
                      readonly: false, // Enable editing
                      height: 400, // Customize editor height
                    }} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Page Description <span className="text-red-500">*</span>
                </label>
                <div className="border border-gray-300 rounded-lg font-novaReg overflow-hidden">
                  <JoditEditor
                    value={formData.description}
                    onBlur={handleDescChange}
                    config={{
                      readonly: false, // Enable editing
                      height: 400, // Customize editor height
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tags and Configuration */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-novaSemi text-gray-900">Tags & Configuration</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label htmlFor="tag1" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Tag 1
                </label>
                <input
                  type="text"
                  id="tag1"
                  name="tag1"
                  value={formData.tag1}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter tag"
                />
              </div>
              <div>
                <label htmlFor="tag2" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Tag 2
                </label>
                <input
                  type="text"
                  id="tag2"
                  name="tag2"
                  value={formData.tag2}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter tag"
                />
              </div>
              <div>
                <label htmlFor="tag3" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Tag 3
                </label>
                <input
                  type="text"
                  id="tag3"
                  name="tag3"
                  value={formData.tag3}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter tag"
                />
              </div>
              <div>
                <label htmlFor="schemaid" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Schema ID
                </label>
                <input
                  type="number"
                  id="schemaid"
                  name="schemaid"
                  value={formData.schemaid}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter schema ID"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div>
                <label htmlFor="nic_name" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Nickname
                </label>
                <input
                  type="text"
                  id="nic_name"
                  name="nic_name"
                  value={formData.nic_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter nickname"
                />
              </div>
              <div>
                <label htmlFor="col_width" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Column Width
                </label>
                <input
                  type="number"
                  id="col_width"
                  name="col_width"
                  value={formData.col_width}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter width"
                />
              </div>
              <div>
                <label htmlFor="featured_status" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Featured Status
                </label>
                <select
                  id="featured_status"
                  name="featured_status"
                  value={formData.featured_status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Status</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="video_url" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Video URL
                </label>
                <input
                  type="url"
                  id="video_url"
                  name="video_url"
                  value={formData.video_url}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="https://example.com/video"
                />
              </div>
              <div>
                <label htmlFor="old_url" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Old URL
                </label>
                <input
                  type="url"
                  id="old_url"
                  name="old_url"
                  value={formData.old_url}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="https://example.com/old-page"
                />
              </div>
            </div>
          </div>

          {/* Media Upload Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-novaSemi text-gray-900">Media Upload</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <FileUploadField
                id="banner_img"
                label="Banner Image"
                file={formData.banner_img}
                onChange={(e) => handleFileChange(e, "banner_img")}
                onDelete={() => handleDeleteFile("banner_img")}
                dimensions="936 W × 337 H"
                required
              />

              <FileUploadField
                id="featured_img"
                label="Featured Image"
                file={formData.featured_img}
                onChange={(e) => handleFileChange(e, "featured_img")}
                onDelete={() => handleDeleteFile("featured_img")}
                dimensions="100 W × 75 H"
                required
              />

              <FileUploadField
                id="mainReportImage"
                label="Main Report Image"
                file={formData.mainReportImage}
                onChange={(e) => handleFileChange(e, "mainReportImage")}
                onDelete={() => handleDeleteFile("mainReportImage")}
                dimensions="936 W × 337 H"
                required
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <FileUploadField
                id="highlightBanner"
                label="Highlight Banner"
                file={formData.highlightBanner}
                onChange={(e) => handleFileChange(e, "highlightBanner")}
                onDelete={() => handleDeleteFile("highlightBanner")}
                dimensions="936 W × 337 H"
              />

              <div className="space-y-2">
                <label htmlFor="galleryimg" className="block text-sm font-novaSemi text-gray-700">
                  Gallery Images
                </label>
                <div className="border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100">
                  <div className="space-y-2">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">Upload multiple images</p>
                      <p className="text-xs text-gray-500 mt-1">WebP format • 100 W × 75 H</p>
                    </div>
                  </div>
                  <input
                    type="file"
                    id="galleryimg"
                    accept="image/webp"
                    multiple
                    onChange={(e) => handleGalleryImg(e, "galleryimg")}
                    className="hidden"
                  />
                  <label
                    htmlFor="galleryimg"
                    className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    Choose Files
                  </label>
                </div>
                <GalleryPreview
                  files={formData.galleryimg}
                  onDeleteFile={handleDeleteGalleryImage}
                  label="Gallery Images"
                />
              </div>
            </div>
          </div>

          {/* SEO Meta Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-novaSemi text-gray-900">SEO Meta Information</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <label htmlFor="metatitle" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Meta Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="metatitle"
                  name="metatitle"
                  value={formData.metatitle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter meta title"
                />
                <p className="text-xs text-gray-500 mt-1">Recommended: 50-60 characters</p>
              </div>
              <div>
                <label htmlFor="metadesc" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Meta Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="metadesc"
                  name="metadesc"
                  rows={3}
                  value={formData.metadesc}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Enter meta description"
                />
                <p className="text-xs text-gray-500 mt-1">Recommended: 150-160 characters</p>
              </div>
              <div>
                <label htmlFor="keywords_tag" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Keywords <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="keywords_tag"
                  name="keywords_tag"
                  value={formData.keywords_tag}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="keyword1, keyword2, keyword3"
                />
                <p className="text-xs text-gray-500 mt-1">Separate keywords with commas</p>
              </div>
            </div>
          </div>

          {/* Parameters Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-novaSemi text-gray-900">Custom Parameters</h2>
            </div>

            <div className="space-y-8">
              {Array.from({ length: 10 }, (_, index) => {
                const paramIndex = index + 1
                return (
                  <div key={paramIndex} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Parameter {paramIndex}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <label htmlFor={`param${paramIndex}`} className="block text-sm font-medium text-gray-700 mb-2">
                          Parameter Name
                        </label>
                        <input
                          type="text"
                          id={`param${paramIndex}`}
                          name={`param${paramIndex}`}
                          value={formData[`param${paramIndex}`]}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder={`Parameter ${paramIndex}`}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`paramvalue${paramIndex}`}
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Value
                        </label>
                        <input
                          type="text"
                          id={`paramvalue${paramIndex}`}
                          name={`paramvalue${paramIndex}`}
                          value={formData[`paramvalue${paramIndex}`]}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter value"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`param_img${paramIndex}`}
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Image
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            accept="image/webp"
                            onChange={(e) => handleFileChange(e, `param_img${paramIndex}`)}
                            className="hidden"
                            id={`param_img${paramIndex}`}
                          />
                          <label
                            htmlFor={`param_img${paramIndex}`}
                            className="w-full inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg font-novaReg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            Choose Image
                          </label>
                        </div>
                        <ImagePreview
                          file={formData[`param_img${paramIndex}`]}
                          onDelete={() => handleDeleteFile(`param_img${paramIndex}`)}
                          label={`Parameter ${paramIndex} Image`}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`param_url${paramIndex}`}
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          URL
                        </label>
                        <input
                          type="url"
                          id={`param_url${paramIndex}`}
                          name={`param_url${paramIndex}`}
                          value={formData[`param_url${paramIndex}`]}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="https://example.com"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Submit Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-novaSemi text-gray-900">Ready to Submit?</h3>
                <p className="text-gray-600 font-novaReg mt-1">Review all information before submitting the page</p>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-novaSemi rounded-lg hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-200 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Submit Page
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
