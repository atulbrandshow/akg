"use client"
import React, { useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { uploadImages } from "@/utills/ImageUpload"

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
  <div className="pb-10">
    <div className="">
      <div className="animate-pulse space-y-8">
        {/* Header Skeleton */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>

        {/* Form Sections Skeleton */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
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

// Image Preview Component - Updated to handle URLs and loading states
const ImagePreview = ({ file, imageUrl, existingImage, onDelete, label, dimensions, isUploading }) => {
  const [previewUrl, setPreviewUrl] = useState(null)

  React.useEffect(() => {
    if (imageUrl) {
      // If we have a URL from upload, use it
      setPreviewUrl(imageUrl)
    } else if (existingImage && typeof existingImage === "string") {
      // If we have an existing image URL, use it
      setPreviewUrl(existingImage)
    } else if (file && file instanceof File) {
      // If we have a File object, create object URL
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
      return () => URL.revokeObjectURL(url)
    }
  }, [file, imageUrl, existingImage])

  if (!file && !imageUrl && !existingImage) return null

  return (
    <div className="mt-3 p-3 bg-gray-50 rounded-lg border">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={IMAGE_PATH + previewUrl || "/placeholder.svg"}
                alt="Preview"
                className="w-16 h-16 object-cover rounded-lg border"
              />
              {isUploading && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                </div>
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 truncate">
                {imageUrl ? "Uploaded Image" : existingImage ? "Existing Image" : file?.name || "Image"}
              </p>
              <p className="text-xs text-gray-500">{dimensions}</p>
              {file?.size && <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>}
              {isUploading && <p className="text-xs text-blue-500">Uploading...</p>}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onDelete}
          disabled={isUploading}
          className="ml-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

// Gallery Preview Component - Updated to handle URLs
const GalleryPreview = ({
  files,
  imageUrls,
  existingImages,
  onDeleteFile,
  onDeleteExisting,
  label,
  uploadingIndexes,
}) => {
  const hasContent =
    (files && files.length > 0) || (imageUrls && imageUrls.length > 0) || (existingImages && existingImages.length > 0)

  if (!hasContent) return null

  const totalItems = (files?.length || 0) + (imageUrls?.length || 0) + (existingImages?.length || 0)

  return (
    <div className="mt-3 p-3 bg-gray-50 rounded-lg border">
      <p className="text-sm font-medium text-gray-700 mb-3">
        {label} ({totalItems} files)
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">

        {/* New Uploaded Images (URLs) */}
        {imageUrls?.map((imageUrl, index) => (
          <div key={`uploaded-${index}`} className="relative group">
            <div className="relative">
              <img
                src={IMAGE_PATH + imageUrl || "/placeholder.svg"}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-20 object-cover rounded-lg border"
              />
              {uploadingIndexes?.includes(index) && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => onDeleteFile(index)}
              disabled={uploadingIndexes?.includes(index)}
              className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Delete image"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg">
              Uploaded
            </div>
          </div>
        ))}

        {/* New Files (being processed) */}
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

// Enhanced File Upload Component - Updated for immediate upload
const EnhancedFileUpload = ({
  id,
  label,
  file,
  imageUrl,
  existingImage,
  onChange,
  onDelete,
  dimensions,
  required = false,
  isUploading = false,
  type = 'image', // type can be 'pdf' or 'image'
}) => {
  const accept = type === 'pdf' ? 'application/pdf' : 'image/webp,image/png,image/jpeg';

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
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
            <p className="font-semibold">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500 mt-1">
              {type === 'pdf' ? 'PDF format only' : 'WebP format recommended'}
            </p>
            {dimensions && <p className="text-xs text-gray-500">Dimensions: {dimensions}</p>}
          </div>
        </div>

        <input
          type="file"
          id={id}
          accept={accept}
          onChange={onChange}
          className="hidden"
          disabled={isUploading}
        />

        <label
          htmlFor={id}
          className={`mt-4 inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-lg cursor-pointer transition-colors ${isUploading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {isUploading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
              Uploading...
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              {file || imageUrl || existingImage ? "Change File" : "Choose File"}
            </>
          )}
        </label>
      </div>

      <ImagePreview
        file={file}
        imageUrl={imageUrl}
        existingImage={existingImage}
        onDelete={onDelete}
        label={label}
        dimensions={dimensions}
        isUploading={isUploading}
      />
    </div>
  );
};

function EditDynamicPages({ type, componentType }) {
  const searchParams = useSearchParams()
  const page_id = searchParams.get("page_id")
  const router = useRouter()
  const editor = useRef()
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [displayedPages, setDisplayedPages] = useState([])
  const [selectedPage, setSelectedPage] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [allPages, setAllPages] = useState([])
  const [pageIndex, setPageIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("") // State for search input
  const [compType, setCompType] = useState("");

  const [componentSearchValue, setComponentSearchValue] = useState("")
  const [showComponentDropdown, setShowComponentDropdown] = useState(false)
  const [selectedComponentType, setSelectedComponentType] = useState()
  const [displayedComponents, setDisplayedComponents] = useState([])
  const [hasMoreComponents, setHasMoreComponents] = useState(true)
  const [streamId, setStreamId] = useState("")

  // Upload states
  const [uploadingStates, setUploadingStates] = useState({})
  const [galleryUploadingIndexes, setGalleryUploadingIndexes] = useState([])

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
    param1: "",
    paramvalue1: "",
    param_img1: "",
    param_url1: "",
    param2: "",
    paramvalue2: "",
    param_img2: "",
    param_url2: "",
    param3: "",
    paramvalue3: "",
    param_img3: "",
    param_url3: "",
    param4: "",
    paramvalue4: "",
    param_img4: "",
    param_url4: "",
    param5: "",
    paramvalue5: "",
    param_img5: "",
    param_url5: "",
    param6: "",
    paramvalue6: "",
    param_img6: "",
    param_url6: "",
    param7: "",
    paramvalue7: "",
    param_img7: "",
    param_url7: "",
    param8: "",
    paramvalue8: "",
    param_img8: "",
    param_url8: "",
    param9: "",
    paramvalue9: "",
    param_img9: "",
    param_url9: "",
    param10: "",
    paramvalue10: "",
    param_img10: "",
    param_url10: "",
    banner_img: "",
    tag1: "",
    tag2: "",
    tag3: "",
    schemaid: "",
    nic_name: "",
    featured_img: "",
    col_width: "",
    video_url: "",
    old_url: "",
    featured_status: "",
    highlightBanner: "",
    galleryimg: [],
    type: "",
    mainReportImage: "",
    metatitle: "",
    metadesc: "",
    keywords_tag: "",
    // Store existing images separately
    existing_banner_img: "",
    existing_featured_img: "",
    existing_mainReportImage: "",
    existing_highlightBanner: "",
    existing_galleryimg: [],
    existing_param_img1: "",
    existing_param_img2: "",
    existing_param_img3: "",
    existing_param_img4: "",
    existing_param_img5: "",
    existing_param_img6: "",
    existing_param_img7: "",
    existing_param_img8: "",
    existing_param_img9: "",
    existing_param_img10: "",
    existing_downloadCenterPdf: "",
    downloadCenterPdf: "",
  })

  const fetchParent = async (parent_id) => {
    if (parent_id) {
      try {
        const response = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${parent_id}`, {
          credentials: "include",
        })
        const result = await response.json()
        return result?.data?.name || ""
      } catch (err) {
        console.error("Error fetching parent:", err)
        return ""
      }
    }
    return ""
  }

  useEffect(() => {
    if (formData.parentPage) {
      setSearchValue(formData.parentPage)
    }
  }, [formData.parentPage])

  const fetchPages = async (searchTerm = "") => {
    try {
      const response = await fetch(`${API_NODE_URL}slug/getParents`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ query: searchTerm, page: 1, limit: 10, type: ["School"] }),
      })
      const data = await response.json()

      const fetchedPages = data?.data?.pages || []

      if (fetchedPages.length === 0) {
        setAllPages([])
        setDisplayedPages([{ name: "This is parent page", reportId: null }])
        setHasMore(false)
      } else {
        setAllPages(fetchedPages)
        setDisplayedPages(fetchedPages.slice(0, 10))
        setHasMore(fetchedPages.length > 10)
      }
    } catch (error) {
      console.error("Error fetching parent pages:", error)
    }
  }

  useEffect(() => {
    fetchPages()
  }, [])

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchValue(value)

    if (value.length > 0) {
      fetchPages(value)
      setShowDropdown(true)
    } else {
      setDisplayedPages(allPages.slice(0, 10))
      setShowDropdown(false)
    }
  }

  const handleSuggestionClick = (page) => {
    setSearchValue(page.name) // Show the name in the input
    setSelectedPage(page) // Set the selected page
    setShowDropdown(false) // Hide the dropdown after selection
    setStreamId(page?.page_id)
  }

  // Handle 'Show More' button click
  const handleShowMore = () => {
    const newIndex = pageIndex + 10
    setDisplayedPages(allPages.slice(0, newIndex)) // Show next 10 pages
    setPageIndex(newIndex) // Update index
    if (newIndex >= allPages.length) {
      setHasMore(false) // Hide 'Show More' if no more pages
    }
  }

  useEffect(() => {
    if (!page_id) return
    const fetchPageData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${page_id}`, {
          credentials: "include",
        })
        const data = await response.json();

        if (data.status) {
          const parent_id = data?.data?.stream
          const parentPageName = parent_id !== 0 ? await fetchParent(parent_id) : ""
          setSearchValue(parentPageName)
          setCompType(data?.data?.ComponentType);
          setComponentSearchValue(data?.data?.ComponentType)
          setFormData({
            page_id: data?.data?.page_id || "",
            parent_id: data?.data?.parent_id != 0 ? data?.data?.parent_id : 0,
            languageId: data?.data?.languageId || 1,
            price: data?.data?.price || "",
            name: data?.data?.name || "",
            parentPage: parentPageName,
            date: data.data.date ? new Date(data.data.date).toISOString().split("T")[0] : "",
            shortdesc: data?.data?.shortdesc || "",
            description: data?.data?.description || "",
            param1: data?.data?.param1 || "",
            paramvalue1: data?.data?.paramvalue1 || "",
            param_img1: data?.data?.param_img1 || "",
            param_url1: data?.data?.param_url1 || "",
            param2: data?.data?.param2 || "",
            paramvalue2: data?.data?.paramvalue2 || "",
            param_img2: data?.data?.param_img2 || "",
            param_url2: data?.data?.param_url2 || "",
            param3: data?.data?.param3 || "",
            paramvalue3: data?.data?.paramvalue3 || "",
            param_img3: data?.data?.param_img3 || "",
            param_url3: data?.data?.param_url3 || "",
            param4: data?.data?.param4 || "",
            paramvalue4: data?.data?.paramvalue4 || "",
            param_img4: data?.data?.param_img4 || "",
            param_url4: data?.data?.param_url4 || "",
            param5: data?.data?.param5 || "",
            paramvalue5: data?.data?.paramvalue5 || "",
            param_img5: data?.data?.param_img5 || "",
            param_url5: data?.data?.param_url5 || "",
            param6: data?.data?.param6 || "",
            paramvalue6: data?.data?.paramvalue6 || "",
            param_img6: data?.data?.param_img6 || "",
            param_url6: data?.data?.param_url6 || "",
            param7: data?.data?.param7 || "",
            paramvalue7: data?.data?.paramvalue7 || "",
            param_img7: data?.data?.param_img7 || "",
            param_url7: data?.data?.param_url7 || "",
            param8: data?.data?.param8 || "",
            paramvalue8: data?.data?.paramvalue8 || "",
            param_img8: data?.data?.param_img8 || "",
            param_url8: data?.data?.param_url8 || "",
            param9: data?.data?.param9 || "",
            paramvalue9: data?.data?.paramvalue9 || "",
            param_img9: data?.data?.param_img9 || "",
            param_url9: data?.data?.param_url9 || "",
            param10: data?.data?.param10 || "",
            paramvalue10: data?.data?.paramvalue10 || "",
            param_img10: data?.data?.param_img10 || "",
            param_url10: data?.data?.param_url10 || "",
            banner_img: data?.data?.banner_img || "",
            tag1: data?.data?.tag1 || "",
            tag2: data?.data?.tag2 || "",
            tag3: data?.data?.tag3 || "",
            schemaid: data?.data?.schemaid || "",
            nic_name: data?.data?.nic_name || "",
            featured_img: data?.data?.featured_img || "",
            col_width: data?.data?.col_width || "",
            video_url: data?.data?.video_url || "",
            old_url: data?.data?.old_url || "",
            featured_status: data?.data?.featured_status || "",
            highlightBanner: data?.data?.highlightBanner || "",
            galleryimg: data.data.galleryimg || [],
            type: data.data.type || "",
            mainReportImage: data?.data?.mainReportImage || "",
            downloadCenterPdf: data?.data?.downloadCenterPdf || "",
            metatitle: data?.data?.metatitle || "",
            metadesc: data?.data?.metadesc || "",
            keywords_tag: data?.data?.keywords_tag || "",
            // Store existing images
            existing_banner_img: data?.data?.banner_img || "",
            existing_featured_img: data?.data?.featured_img || "",
            existing_mainReportImage: data?.data?.mainReportImage || "",
            existing_highlightBanner: data?.data?.highlightBanner || "",
            existing_galleryimg: data.data.galleryimg || [],
            existing_param_img1: data?.data?.param_img1 || "",
            existing_param_img2: data?.data?.param_img2 || "",
            existing_param_img3: data?.data?.param_img3 || "",
            existing_param_img4: data?.data?.param_img4 || "",
            existing_param_img5: data?.data?.param_img5 || "",
            existing_param_img6: data?.data?.param_img6 || "",
            existing_param_img7: data?.data?.param_img7 || "",
            existing_param_img8: data?.data?.param_img8 || "",
            existing_param_img9: data?.data?.param_img9 || "",
            existing_param_img10: data?.data?.param_img10 || "",
            existing_downloadCenterPdf: data?.data?.downloadCenterPdf || "",
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Updated file change handler to upload immediately
  const handleFileChange = async (e, field) => {
    const file = e.target.files[0]
    if (!file) return

    // Set uploading state
    setUploadingStates((prev) => ({ ...prev, [field]: true }))

    try {

      // Upload the image
      const imageUrls = await uploadImages([file])

      // Update form data with the URL and clear existing image
      setFormData((prevData) => ({
        ...prevData,
        [field]: imageUrls[0], // Store the URL string
        [`existing_${field}`]: "", // Clear existing image when new one is uploaded
      }))

      toast.success("Image uploaded successfully!")
    } catch (error) {
      console.error("Upload error:", error)
      toast.error("Failed to upload image. Please try again.")
    } finally {
      // Clear uploading state
      setUploadingStates((prev) => ({ ...prev, [field]: false }))
    }
  }

  const handleDeleteFile = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: "",
      [`existing_${field}`]: "",
    }))
  }

  // Updated gallery image handler
  const handleGalleryImg = async (e, field) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return

    const currentGallery = formData[field] || []
    const startIndex = currentGallery.length

    // Set uploading states for new files
    const newUploadingIndexes = files.map((_, index) => startIndex + index)
    setGalleryUploadingIndexes((prev) => [...prev, ...newUploadingIndexes])

    try {
      // Upload all files
      const imageUrls = await uploadImages(files)

      // Update form data with the URLs
      setFormData((prevData) => ({
        ...prevData,
        [field]: [...currentGallery, ...imageUrls],
      }))

      toast.success(`${files.length} image(s) uploaded successfully!`)
    } catch (error) {
      console.error("Upload error:", error)
      toast.error("Failed to upload images. Please try again.")
    } finally {
      // Clear uploading states
      setGalleryUploadingIndexes((prev) => prev.filter((index) => !newUploadingIndexes.includes(index)))
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

  const handleDescChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      description: value || "",
    }))
  }

  const handleShortDescChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      shortdesc: value || "",
    }))
  }

  const insertPage = async () => {
    if (!formData) {
      toast.error("Form data is not ready!")
      return
    }

    // if (!streamId) {
    //   toast.warning("Please select stream");
    //   return;
    // }

    const payload = {
      ...formData,
      stream: streamId,
      ComponentType: selectedComponentType || compType || componentType,
    }



    setSubmitting(true)
    try {
      const response = await fetch(`${API_NODE_URL}slug/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (data.status) {
        toast.success(`${type} updated successfully`)
        router.push(`/admin/${type.toLowerCase().replace(/\s+/g, "-")}-list`)
      } else {
        toast.error(`Something went wrong: ${data?.message}`)
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
                <h1 className="text-3xl font-novaBold text-gray-900">Edit {type} Details</h1>
                <p className="text-gray-600 mt-2 font-novaReg">
                  Update and modify your {type.toLowerCase()} content with all necessary details
                </p>
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

            <div className={`grid grid-cols-1 ${type === "Department" ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`}>
              <div className="relative">
                <label htmlFor="parent-page" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Choose Stream
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    id="parent-page"
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    placeholder="Search and select stream..."
                    className="w-full border-2 border-gray-200 rounded-xl font-novaReg py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 hover:bg-white"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                </div>

                {showDropdown && (
                  <div className="absolute z-20 w-full bg-white border-2 border-gray-200 rounded-xl mt-2 max-h-64 overflow-auto shadow-2xl">
                    {displayedPages.map((page, index) => (
                      page.page_id != 0 &&
                      <div
                        key={index}
                        onClick={() => handleSuggestionClick(page)}
                        className="cursor-pointer px-5 py-2 hover:bg-blue-100/60 border-b border-gray-200 last:border-b-0 transition-all duration-150 rounded-md hover:shadow-sm group"
                      >
                        <div className="font-semibold text-gray-800 text-base group-hover:text-blue-700">
                          {page.name}
                        </div>

                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                          {page?.type && (
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs
                                                        ${page.type === "School" ? "bg-blue-100 text-blue-700" :
                                  page.type === "Department" ? "bg-green-100 text-green-700" :
                                    "bg-gray-100 text-gray-700"}`}
                            >
                              {page.type}
                            </span>

                          )}
                          {page?.page_id && (
                            <span className="text-xs">ID: <span className="font-medium text-gray-600">{page.page_id}</span></span>
                          )}
                        </div>
                      </div>
                    ))}
                    {hasMore && displayedPages.length > 0 && (
                      <button
                        type="button"
                        onClick={handleShowMore}
                        className="w-full px-4 py-3 text-blue-600 font-novaReg hover:bg-blue-50 transition-colors duration-150"
                      >
                        Load More Pages
                      </button>
                    )}
                  </div>
                )}
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
              <h2 className="text-xl font-novaSemi text-gray-900">{type} Details</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-novaSemi text-gray-700 mb-2">
                    {type} Title <span className="text-red-500">*</span>
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
                    {type} Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                  {type} Short Description <span className="text-red-500">*</span>
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <JoditEditor
                    value={formData.shortdesc}
                    onChange={handleShortDescChange}
                    rows="3"
                    className="w-full h-max px-3 py-2 border font-novaReg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-novaSemi text-gray-700 mb-2">
                  {type} Description <span className="text-red-500">*</span>
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <JoditEditor
                    value={formData.description}
                    onChange={handleDescChange}
                    rows="3"
                    className="w-full h-max px-3 py-2 border font-novaReg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="video_url" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  URL
                </label>
                <input
                  type="url"
                  id="video_url"
                  name="video_url"
                  value={formData.video_url}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-novaReg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="https://example.com"
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
            {
              type === "Download Center" || type === "Circular" || type === "Notice" &&
              <div className="mb-10">
                <EnhancedFileUpload
                  id="downloadCenterPdf"
                  label="Upload PDF"
                  imageUrl={formData.downloadCenterPdf}
                  existingImage={formData.existing_downloadCenterPdf}
                  onChange={(e) => handleFileChange(e, "downloadCenterPdf")}
                  onDelete={() => handleDeleteFile("downloadCenterPdf")}
                  required
                  isUploading={uploadingStates.downloadCenterPdf}
                  type="pdf"
                />
              </div>
            }

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-novaSemi">
              <EnhancedFileUpload
                id="banner_img"
                label="Banner Image"
                imageUrl={formData.banner_img}
                existingImage={formData.existing_banner_img}
                onChange={(e) => handleFileChange(e, "banner_img")}
                onDelete={() => handleDeleteFile("banner_img")}
                dimensions="936 W × 337 H"
                required
                isUploading={uploadingStates.banner_img}
              />

              <EnhancedFileUpload
                id="featured_img"
                label="Featured Image"
                imageUrl={formData.featured_img}
                existingImage={formData.existing_featured_img}
                onChange={(e) => handleFileChange(e, "featured_img")}
                onDelete={() => handleDeleteFile("featured_img")}
                dimensions="100 W × 75 H"
                required
                isUploading={uploadingStates.featured_img}
              />

              <EnhancedFileUpload
                id="mainReportImage"
                label="Extra Image"
                imageUrl={formData.mainReportImage}
                existingImage={formData.existing_mainReportImage}
                onChange={(e) => handleFileChange(e, "mainReportImage")}
                onDelete={() => handleDeleteFile("mainReportImage")}
                dimensions="936 W × 337 H"
                required
                isUploading={uploadingStates.mainReportImage}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 font-novaSemi">
              <EnhancedFileUpload
                id="highlightBanner"
                label="Highlight Banner"
                imageUrl={formData.highlightBanner}
                existingImage={formData.existing_highlightBanner}
                onChange={(e) => handleFileChange(e, "highlightBanner")}
                onDelete={() => handleDeleteFile("highlightBanner")}
                dimensions="936 W × 337 H"
                isUploading={uploadingStates.highlightBanner}
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
                      <p className="font-medium">Upload additional gallery images</p>
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
                    disabled={galleryUploadingIndexes.length > 0}
                  />
                  <label
                    htmlFor="galleryimg"
                    className={`mt-4 inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-lg cursor-pointer transition-colors ${galleryUploadingIndexes.length > 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                      }`}
                  >
                    {galleryUploadingIndexes.length > 0 ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        Add Gallery Images
                      </>
                    )}
                  </label>
                </div>
                <GalleryPreview
                  imageUrls={formData.galleryimg}
                  existingImages={formData.existing_galleryimg}
                  onDeleteFile={handleDeleteGalleryImage}
                  onDeleteExisting={handleDeleteExistingGalleryImage}
                  label="Gallery Images"
                  uploadingIndexes={galleryUploadingIndexes}
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

          {/* Submit Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-novaSemi text-gray-900">Ready to Update?</h3>
                <p className="text-gray-600 mt-1 font-novaReg">Review all changes before updating the {type.toLowerCase()}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-6 py-3 border  border-gray-300 text-gray-700 font-novaSemi rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={
                    submitting || Object.values(uploadingStates).some(Boolean) || galleryUploadingIndexes.length > 0
                  }
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
                      Update {type}
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

export default EditDynamicPages
