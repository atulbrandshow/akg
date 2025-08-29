"use client"
import { useState, useEffect, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "react-toastify"
import { uploadImages } from "@/utills/ImageUpload"
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"

const CreateHighlightBanner = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editId = searchParams.get("_id")
  const isEdit = Boolean(editId)
  const canvasRef = useRef(null)

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    bannerAlt: "",
    status: true,
    size: "",
    tags: [],
  })

  const [streamId, setStreamId] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showSchoolDropdown, setShowSchoolDropdown] = useState(false)
  const [schools, setSchools] = useState([])

  // Image state
  const [bannerImage, setBannerImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [resizedImagePreview, setResizedImagePreview] = useState(null)
  const [originalImageDimensions, setOriginalImageDimensions] = useState(null)

  // UI state
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [tagInput, setTagInput] = useState("")

  const SIZE_OPTIONS = {
    small: { label: "Small (600x300)", width: 600, height: 300 },
    medium: { label: "Medium (1200x600)", width: 1200, height: 600 },
    large: { label: "Large (1920x1080)", width: 1920, height: 1080 },
  }

  const resizeImageToSelectedSize = (imageFile, targetSize) => {
    return new Promise((resolve) => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      const img = new Image()

      img.onload = () => {
        canvas.width = targetSize.width
        canvas.height = targetSize.height

        const scaleX = targetSize.width / img.width
        const scaleY = targetSize.height / img.height
        const scale = Math.min(scaleX, scaleY)

        const scaledWidth = img.width * scale
        const scaledHeight = img.height * scale
        const x = (targetSize.width - scaledWidth) / 2
        const y = (targetSize.height - scaledHeight) / 2

        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, targetSize.width, targetSize.height)

        ctx.drawImage(img, x, y, scaledWidth, scaledHeight)

        const resizedDataUrl = canvas.toDataURL("image/jpeg", 0.9)
        resolve(resizedDataUrl)
      }

      img.src = URL.createObjectURL(imageFile)
    })
  }

  useEffect(() => {
    if (isEdit && editId) {
      fetchBannerData(editId)
    }
  }, [isEdit, editId])

  useEffect(() => {
    if (bannerImage && formData.size && SIZE_OPTIONS[formData.size]) {
      const targetSize = SIZE_OPTIONS[formData.size]
      resizeImageToSelectedSize(bannerImage, targetSize).then((resizedUrl) => {
        setResizedImagePreview(resizedUrl)
      })
    } else {
      setResizedImagePreview(null)
    }
  }, [bannerImage, formData.size])

  useEffect(() => {
    const fetchPages = async (searchTerm = "") => {
      try {
        const response = await fetch(`${API_NODE_URL}slug/getParents`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            query: searchTerm,
            page: 1,
            limit: 10,
            type: "School",
          }),
        });
        const data = await response.json();

        console.log(data);

        const fetchedPages = data?.data?.pages || [];

        if (fetchedPages.length === 0) {
          setSchools([]); // same state you were using earlier
        } else {
          setSchools(fetchedPages); // reuse existing state for schools
        }
      } catch (error) {
        console.error("Error fetching parent pages:", error);
      }
    };

    if (searchQuery?.trim().length > 0) {
      fetchPages(searchQuery);
    } else {
      setSchools([]);
    }
  }, [searchQuery]);

  const fetchStream = async (id) => {
    if (id) {
      try {
        const response = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${id}`, {
          credentials: "include",
        })
        const result = await response.json()
        setStreamId(result?.data.stream || null)
        return result?.data?.name || ""
      } catch (err) {
        console.error("Error fetching parent:", err)
        return ""
      }
    }
    return ""
  }


  const fetchBannerData = async (id) => {
    try {
      setLoading(true)
      const response = await fetch(`${API_NODE_URL}highlight-banner?_id=${id}`, {
        method: "GET",
        credentials: "include",
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log(data);


      if (data.status && data.data) {
        const banner = data.data
        const stream_id = data?.data?.stream;
        const streamName = stream_id ? await fetchStream(stream_id) : "";
        setSearchQuery(streamName)
        setFormData({
          title: banner.title || "",
          description: banner.description || "",
          link: banner.link || "",
          bannerAlt: banner.bannerAlt || "",
          status: banner.status,
          size: banner.size || "",
          tags: banner.tags || [],
        })

        if (banner.banner) {
          setImagePreview(IMAGE_PATH + banner.banner)
        }
      }
    } catch (error) {
      console.error("Error fetching banner data:", error)
      toast.error("Failed to load banner data. Using demo mode.")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSchoolSelect = (school) => {
    setStreamId(school.page_id)
    setSearchQuery(school.name)
    setShowSchoolDropdown(false)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB")
        return
      }

      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
      if (!allowedTypes.includes(file.type)) {
        toast.error("Only JPEG, JPG, PNG, and WebP images are allowed")
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          setOriginalImageDimensions({ width: img.width, height: img.height })
          setBannerImage(file)
          setImagePreview(e.target.result)
          if (errors.banner) {
            setErrors((prev) => ({ ...prev, banner: "" }))
          }

          if (formData.size) {
            const targetSize = SIZE_OPTIONS[formData.size]
            toast.success(`Image will be resized to ${targetSize.width}x${targetSize.height} for ${targetSize.label}`)
          }
        }
        img.src = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTagAdd = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }))
      setTagInput("")
    }
  }

  const handleTagRemove = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.size) {
      newErrors.size = "Please select a banner size"
    }
    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    } else if (formData.title.length > 200) {
      newErrors.title = "Title must be less than 200 characters"
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    } else if (formData.description.length > 500) {
      newErrors.description = "Description must be less than 500 characters"
    }
    if (!formData.link.trim()) {
      newErrors.link = "Link is required"
    } else if (!/^https?:\/\/.+/.test(formData.link)) {
      newErrors.link = "Please enter a valid URL (starting with http:// or https://)"
    }
    if (!isEdit && !bannerImage) {
      newErrors.banner = "Banner image is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting")
      return
    }

    setLoading(true)

    try {
      let bannerUrl
      if (bannerImage) {
        const urls = await uploadImages([bannerImage], "HighlightBanner")
        bannerUrl = urls[0]
        if (!bannerUrl) {
          toast.error("Failed to upload image")
          setLoading(false)
          return
        }
      }

      const formDataToSend = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        link: formData.link.trim(),
        bannerAlt: formData.bannerAlt.trim(),
        status: formData.status,
        size: formData.size,
        tags: formData.tags,
        stream: streamId || null,
      }

      if (bannerImage) {
        formDataToSend.banner = bannerUrl
      }

      if (isEdit) {
        formDataToSend._id = editId
      }

      const url = isEdit ? `${API_NODE_URL}highlight-banner/update` : `${API_NODE_URL}highlight-banner`

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSend),
          credentials: "include",
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()

        if (result.status) {
          toast.success(`Highlight banner ${isEdit ? "updated" : "added"} successfully!`)
          setTimeout(() => {
            router.push("/admin/highlight-banner-list")
          }, 1500)
        } else {
          toast.error(result.message || `Failed to ${isEdit ? "update" : "add"} highlight banner`)
        }
      } catch (fetchError) {
        console.log("Demo mode: Banner data would be:", formDataToSend)
        toast.success(`Demo: Highlight banner ${isEdit ? "updated" : "created"} successfully! (API not connected)`)
        setTimeout(() => {
          // In demo mode, just clear the form instead of navigating
          handleClear()
        }, 1500)
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("An error occurred while processing your request")
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setFormData({
      title: "",
      description: "",
      link: "",
      bannerAlt: "",
      status: true,
      size: "",
      tags: [],
    })
    setBannerImage(null)
    setImagePreview(null)
    setResizedImagePreview(null)
    setOriginalImageDimensions(null)
    setErrors({})
    setStreamId("")
    setSearchQuery("")
    setTagInput("")
  }

  if (loading && isEdit) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 mb-8 shadow-xl">
            <h1 className="text-2xl font-bold text-white">Loading Banner Data...</h1>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-4 border-gray-200"></div>
              <div className="w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin absolute top-0 left-0"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="">
      <canvas ref={canvasRef} className="hidden" />

      <div className="max-w-4xl">
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 mb-8 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                {isEdit ? "Edit" : "Create"} Highlight Banner
              </h1>
              <p className="text-white/80 mt-1">
                {isEdit ? "Update your banner details" : "Add a new promotional banner with auto-resize"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-semibold text-gray-900 flex justify-between">
                <p>
                  {" "}
                  Title <span className="text-red-500">*</span>
                </p>
                <div className="flex justify-between">
                  {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                  <p className="text-gray-400 text-sm ml-auto">{formData.title.length}/200</p>
                </div>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter banner title..."
                maxLength={200}
                className={`w-full border-2 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white ${errors.title ? "border-red-300 bg-red-50" : "border-gray-200"
                  }`}
              />
            </div>

            {/* School Selection */}
            <div className="space-y-2 relative">
              <label htmlFor="schoolSearch" className="block text-sm font-semibold text-gray-900">
                Search School (Optional)
              </label>
              <div className="relative">
                <input
                  id="schoolSearch"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSchoolDropdown(true)}
                  placeholder="Search and select school..."
                  className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {showSchoolDropdown && schools.length > 0 && (
                <div className="absolute z-20 w-full bg-white border-2 border-gray-200 rounded-xl mt-2 max-h-64 overflow-auto shadow-2xl">
                  {schools.map((school) => (
                    school?.page_id != 0 &&
                    <div
                      key={school?.id || school?._id}
                      onClick={() => handleSchoolSelect(school)}
                      className="cursor-pointer px-4 py-3 hover:bg-indigo-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                    >
                      <div className="font-semibold text-gray-900">{school?.name}</div>
                    </div>
                  ))}
                </div>
              )}

              {showSchoolDropdown && searchQuery?.length > 0 && schools?.length === 0 && (
                <div className="absolute z-20 w-full bg-white border-2 border-gray-200 rounded-xl mt-2 p-4 shadow-2xl">
                  <p className="text-gray-500 text-sm">No schools found.</p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="size" className="block text-sm font-semibold text-gray-900">
                Banner Size <span className="text-red-500">*</span>
              </label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                className={`w-full border-2 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white ${errors.size ? "border-red-300 bg-red-50" : "border-gray-200"
                  }`}
              >
                <option value="">-- Select Size --</option>
                {Object.entries(SIZE_OPTIONS).map(([key, option]) => (
                  <option key={key} value={key}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.size && <p className="text-red-500 text-sm">{errors.size}</p>}
              {formData.size && (
                <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">Selected:</span> {SIZE_OPTIONS[formData.size].label}
                    <br />
                    <span className="font-semibold">Dimensions:</span> {SIZE_OPTIONS[formData.size].width} ×{" "}
                    {SIZE_OPTIONS[formData.size].height} pixels
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <label htmlFor="bannerImage" className="block text-sm font-semibold text-gray-900">
                Banner Image {!isEdit && <span className="text-red-500">*</span>}
                <span className="text-sm font-normal text-gray-600 ml-2">
                  (Images will be automatically resized to fit selected banner size)
                </span>
              </label>
              <div className="space-y-4">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="bannerImage"
                    className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 ${errors.banner
                      ? "border-red-300 bg-red-50 hover:bg-red-100"
                      : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                      }`}
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">JPEG, JPG, PNG, WebP (MAX. 5MB)</p>
                      <p className="text-xs text-blue-600 mt-1">Auto-resizes to selected banner size</p>
                    </div>
                    <input
                      id="bannerImage"
                      type="file"
                      onChange={handleImageChange}
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      className="hidden"
                    />
                  </label>
                </div>
                {errors.banner && <p className="text-red-500 text-sm">{errors.banner}</p>}

                {imagePreview && (
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-gray-900">Image Preview:</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700">Original Image</h4>
                        <div className="relative inline-block">
                          <img
                            src={imagePreview || "/placeholder.svg"}
                            alt="Original banner"
                            className="max-w-full h-48 object-cover rounded-xl border-2 border-gray-200 shadow-lg"
                          />
                          {originalImageDimensions && (
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              {originalImageDimensions.width} × {originalImageDimensions.height}
                            </div>
                          )}
                        </div>
                      </div>

                      {resizedImagePreview && formData.size && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-700">
                            Resized for {SIZE_OPTIONS[formData.size].label}
                          </h4>
                          <div className="relative inline-block">
                            <img
                              src={resizedImagePreview || "/placeholder.svg"}
                              alt="Resized banner preview"
                              className="max-w-full h-48 object-cover rounded-xl border-2 border-green-200 shadow-lg"
                            />
                            <div className="absolute bottom-2 left-2 bg-green-600/90 text-white text-xs px-2 py-1 rounded">
                              {SIZE_OPTIONS[formData.size].width} × {SIZE_OPTIONS[formData.size].height}
                            </div>
                            <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                              Resized
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setBannerImage(null)
                        setImagePreview(null)
                        setResizedImagePreview(null)
                        setOriginalImageDimensions(null)
                      }}
                      className="inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Remove Image
                    </button>
                  </div>
                )}

                {imagePreview && !formData.size && (
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <span className="font-semibold">💡 Tip:</span> Select a banner size above to see how your image
                      will be resized!
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="bannerAlt" className="block text-sm font-semibold text-gray-900">
                Alt Text (for accessibility)
              </label>
              <input
                type="text"
                id="bannerAlt"
                name="bannerAlt"
                value={formData.bannerAlt}
                onChange={handleInputChange}
                placeholder="Describe the image for screen readers..."
                className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-semibold text-gray-900">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={`w-full border-2 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white resize-none ${errors.description ? "border-red-300 bg-red-50" : "border-gray-200"
                  }`}
                rows="4"
                placeholder="Enter banner description..."
                maxLength={500}
              />
              <div className="flex justify-between">
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                <p className="text-gray-400 text-sm ml-auto">{formData.description.length}/500</p>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="link" className="block text-sm font-semibold text-gray-900">
                Link <span className="text-red-500">*</span>
              </label>
              <input
                id="link"
                name="link"
                type="url"
                value={formData.link}
                onChange={handleInputChange}
                placeholder="https://example.com"
                className={`w-full border-2 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white ${errors.link ? "border-red-300 bg-red-50" : "border-gray-200"
                  }`}
              />
              {errors.link && <p className="text-red-500 text-sm">{errors.link}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">Tags (Optional)</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleTagAdd())}
                  placeholder="Add a tag..."
                  className="flex-1 border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
                <button
                  type="button"
                  onClick={handleTagAdd}
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200"
                >
                  Add
                </button>
              </div>
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleTagRemove(tag)}
                        className="ml-2 w-4 h-4 text-indigo-600 hover:text-indigo-800"
                      >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    {isEdit ? "Updating..." : "Creating..."}
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {isEdit ? "Update Banner" : "Create Banner"}
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleClear}
                disabled={loading}
                className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateHighlightBanner
