"use client"
import React, { useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"
import { API_NODE_URL } from "@/configs/config"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"

// Import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg border">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="ml-2 text-gray-600">Loading editor...</span>
    </div>
  ),
})

// Loading Skeleton Component
const LoadingSkeleton = () => (
  <div className="">
    <div className="">
      <div className="animate-pulse space-y-8">
        {/* Header Skeleton */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>

        {/* Form Sections Skeleton */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-10 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Image Preview Component
const ImagePreview = ({ file, existingImage, onDelete, label, dimensions }) => {
  const [imageUrl, setImageUrl] = useState(null)

  React.useEffect(() => {
    if (file && file instanceof File) {
      const url = URL.createObjectURL(file)
      setImageUrl(url)
      return () => URL.revokeObjectURL(url)
    } else if (existingImage) {
      setImageUrl(existingImage)
    }
  }, [file, existingImage])

  if (!file && !existingImage) return null

  return (
    <div className="mt-3 p-3 bg-gray-50 rounded-lg border">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-novaSemi text-gray-700 mb-2">{label}</p>
          <div className="flex items-center space-x-3">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt="Preview"
              className="w-16 h-16 object-cover rounded-lg border"
            />
            <div className="flex-1">
              <p className="text-sm text-gray-600 truncate">{file?.name || "Existing image"}</p>
              <p className="text-xs text-gray-500">{dimensions}</p>
              {file && <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onDelete}
          className="ml-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
          title="Remove image"
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
const GalleryPreview = ({ files, existingImages, onDeleteFile, onDeleteExisting, label }) => {
  const hasContent = (files && files.length > 0) || (existingImages && existingImages.length > 0)

  if (!hasContent) return null

  return (
    <div className="mt-3 p-3 bg-gray-50 rounded-lg border">
      <p className="text-sm font-novaSemi text-gray-700 mb-3">
        {label} ({(files?.length || 0) + (existingImages?.length || 0)} files)
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {/* Existing Images */}
        {existingImages?.map((image, index) => (
          <div key={`existing-${index}`} className="relative group">
            <img
              src={image || "/placeholder.svg"}
              alt={`Existing ${index + 1}`}
              className="w-full h-20 object-cover rounded-lg border"
            />
            <button
              type="button"
              onClick={() => onDeleteExisting(index)}
              className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
              title="Delete image"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg">
              Existing
            </div>
          </div>
        ))}

        {/* New Files */}
        {files?.map((file, index) => {
          const imageUrl = URL.createObjectURL(file)
          return (
            <div key={`new-${index}`} className="relative group">
              <img
                src={imageUrl || "/placeholder.svg"}
                alt={`New ${index + 1}`}
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

// Enhanced File Upload Component
const EnhancedFileUpload = ({
  id,
  label,
  file,
  existingImage,
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
            <p className="font-novaSemi">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500 mt-1">WebP format recommended</p>
            {dimensions && <p className="text-xs text-gray-500">Dimensions: {dimensions}</p>}
          </div>
        </div>
        <input type="file" id={id} accept={accept} onChange={onChange} className="hidden" />
        <label
          htmlFor={id}
          className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-novaSemi rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          {file || existingImage ? "Change File" : "Choose File"}
        </label>
      </div>
      <ImagePreview
        file={file}
        existingImage={existingImage}
        onDelete={onDelete}
        label={label}
        dimensions={dimensions}
      />
    </div>
  )
}

const EditNews = () => {
  const searchParams = useSearchParams()
  const page_id = searchParams.get("page_id")
  const router = useRouter()
  const editor = useRef(null)
  const [componentType, setComponentType] = useState("");
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    page_id: "",
    parent_id: "",
    languageId: "",
    price: "",
    name: "",
    parentPage: "",
    date: "",
    shortdesc: "",
    description: "",
    banner_img: null,
    featured_img: null,
    mainReportImage: null,
    galleryimg: [],
    type: "",
    // Store existing images separately
    existing_banner_img: "",
    existing_featured_img: "",
    existing_mainReportImage: "",
    existing_galleryimg: [],
  })

  const fetchParent = async (parent_id) => {
    if (!parent_id) return ""
    try {
      const response = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${parent_id}`)
      const result = await response.json()
      return result?.data?.name || ""
    } catch (err) {
      console.error("Error fetching parent:", err)
      return ""
    }
  }

  useEffect(() => {
    if (!page_id) return
    const fetchPageData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${page_id}`)
        const data = await response.json()
        console.log(data);

        if (data.status) {
          const parent_id = data?.data?.parent_id
          const parentPageName = parent_id !== 0 ? await fetchParent(parent_id) : "This is Main Page"

          setComponentType(data?.data?.ComponentType);
          setFormData({
            ...data.data,
            parentPage: parentPageName,
            date: data.data.date ? new Date(data.data.date).toISOString().split("T")[0] : "",
            galleryimg: [],
            existing_banner_img: data.data.banner_img || "",
            existing_featured_img: data.data.featured_img || "",
            existing_mainReportImage: data.data.mainReportImage || "",
            existing_galleryimg: data.data.galleryimg || [],
          })
        } else {
          toast.error("Failed to fetch page details.")
        }
      } catch (error) {
        console.error("Error fetching page details:", error)
        toast.error("Error fetching page details")
      } finally {
        setLoading(false)
      }
    }
    fetchPageData()
  }, [page_id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e, field) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, [field]: e.target.files[0] }))
    }
  }

  const handleDeleteFile = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: null,
      [`existing_${field}`]: "",
    }))
  }

  const handleGalleryImg = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setFormData((prev) => ({
        ...prev,
        galleryimg: [...prev.galleryimg, ...files],
      }))
    }
  }

  const handleDeleteGalleryImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      galleryimg: prev.galleryimg.filter((_, i) => i !== index),
    }))
  }

  const handleDeleteExistingGalleryImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      existing_galleryimg: prev.existing_galleryimg.filter((_, i) => i !== index),
    }))
  }

  const handleEditorChange = (value, field) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const insertPage = async () => {
    setSubmitting(true)
    try {
      const response = await fetch(`${API_NODE_URL}slug/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (data.status) {
        toast.success("Page updated successfully")
        router.push("/admin/news-list")
      } else {
        toast.error(data.message || "Something went wrong")
      }
    } catch (error) {
      console.error("Error updating page:", error)
      toast.error("An error occurred while processing your request.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    insertPage()
  }

  if (loading) {
    return <LoadingSkeleton />
  }

  return (
    <div className="pb-10">
      <div className="">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-novaBold text-gray-900">Edit News Details</h1>
                <p className="text-gray-600 mt-2 font-novaReg">Update and modify your news content with all necessary details</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span className="font-novaSemi">Generate Meta with AI</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </button>
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
                  className="w-full px-4 py-3 border font-novaReg cursor-not-allowed border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Short Description <span className="text-red-500">*</span>
                </label>
                <div className="border font-novaReg border-gray-300 rounded-lg overflow-hidden">
                  <JoditEditor
                    ref={editor}
                    value={formData.shortdesc}
                    config={{
                      readonly: false,
                      height: 400,
                    }}
                    onBlur={(value) => handleEditorChange(value, "shortdesc")}
                    onChange={(value) => handleEditorChange(value, "shortdesc")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Page Description <span className="text-red-500">*</span>
                </label>
                <div className="border font-novaReg border-gray-300 rounded-lg overflow-hidden">
                  <JoditEditor
                    ref={editor}
                    value={formData.description}
                    config={{
                      readonly: false,
                      height: 400,
                    }}
                    onBlur={(value) => handleEditorChange(value, "description")}
                    onChange={(value) => handleEditorChange(value, "description")}
                  />
                </div>
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
              <EnhancedFileUpload
                id="banner_img"
                label="Banner Image"
                file={formData.banner_img}
                existingImage={formData.existing_banner_img}
                onChange={(e) => handleFileChange(e, "banner_img")}
                onDelete={() => handleDeleteFile("banner_img")}
                dimensions="936 W × 337 H"
                required
              />

              <EnhancedFileUpload
                id="featured_img"
                label="Featured Image"
                file={formData.featured_img}
                existingImage={formData.existing_featured_img}
                onChange={(e) => handleFileChange(e, "featured_img")}
                onDelete={() => handleDeleteFile("featured_img")}
                dimensions="100 W × 75 H"
                required
              />

              <EnhancedFileUpload
                id="mainReportImage"
                label="Main Report Image"
                file={formData.mainReportImage}
                existingImage={formData.existing_mainReportImage}
                onChange={(e) => handleFileChange(e, "mainReportImage")}
                onDelete={() => handleDeleteFile("mainReportImage")}
                dimensions="936 W × 337 H"
                required
              />
            </div>

            {/* Gallery Images */}
            <div className="mt-8">
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
                      <p className="font-novaSemi">Upload additional gallery images</p>
                      <p className="text-xs text-gray-500 mt-1">WebP format • 100 W × 75 H</p>
                    </div>
                  </div>
                  <input
                    type="file"
                    id="galleryimg"
                    accept="image/webp"
                    multiple
                    onChange={handleGalleryImg}
                    className="hidden"
                  />
                  <label
                    htmlFor="galleryimg"
                    className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-novaSemi rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    Add Gallery Images
                  </label>
                </div>
                <GalleryPreview
                  files={formData.galleryimg}
                  existingImages={formData.existing_galleryimg}
                  onDeleteFile={handleDeleteGalleryImage}
                  onDeleteExisting={handleDeleteExistingGalleryImage}
                  label="Gallery Images"
                />
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-novaSemi text-gray-900">Ready to Update?</h3>
                <p className="text-gray-600 mt-1 font-novaReg">Review all changes before updating the page</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-novaSemi rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-novaSemi rounded-lg hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Updating...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                      Update Page
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditNews
