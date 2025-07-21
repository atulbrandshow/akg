"use client"
import { useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/navigation"
import { API_NODE_URL } from "@/configs/config"
import { useSearchParams } from "next/navigation";

// Dynamically import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
        <p className="text-blue-600 font-medium">Loading editor...</p>
      </div>
    </div>
  ),
})

function EditPage() {
  const searchParams = useSearchParams();
  const page_id = searchParams.get("page_id");
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [componentSearchValue, setComponentSearchValue] = useState("")
  const [showComponentDropdown, setShowComponentDropdown] = useState(false)
  const [selectedComponentType, setSelectedComponentType] = useState("")
  const [displayedComponents, setDisplayedComponents] = useState([])
  const [hasMoreComponents, setHasMoreComponents] = useState(true)
  const [allComponents, setAllComponents] = useState([])
  const [imagePreviews, setImagePreviews] = useState({})
  const [schools, setSchools] = useState([]); // State to hold school options
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [showDropdown, setShowDropdown] = useState(false); // Toggle dropdown visibility
  const handleSchoolSelect = (school) => {
    setFormData({ ...formData, stream: school.name }); // Set selected school ID
    setSearchQuery(school.name); // Display school name in input
    setShowDropdown(false); // Hide dropdown
  };
  // Fetch schools for the dropdown
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch(
          `${API_NODE_URL}school/search?search=${searchQuery}`
        );
        const result = await response.json();
        
        if (result.status) {
          setSchools(
            Array.isArray(result?.data?.schools) ? result?.data?.schools : []
          );
        } else {
          toast.error(result.message || "Failed to fetch schools.");
          setSchools([]);
        }
      } catch (err) {
        console.error("Error fetching schools:", err);
        toast.error("An error occurred while fetching schools.");
        setSchools([]);
      }
    };
    fetchSchools();
  }, [searchQuery]);

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
    stream: ''
  })

  const shortDescEditor = useRef(null)
  const descEditor = useRef(null)

  const handleEditorChange = (content, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: content,
    }))
  }

  const fetchParent = async (parent_id) => {
    if (parent_id) {
      try {
        const response = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${parent_id}`)
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

          // Set component type properly
          const componentType = data?.ComponentType || data?.data?.ComponentType || ""
          setSelectedComponentType(componentType)
          setComponentSearchValue(componentType)

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
            metatitle: data?.data?.metatitle || "",
            metadesc: data?.data?.metadesc || "",
            keywords_tag: data?.data?.keywords_tag || "",
            stream: data?.data?.stream || "",
          })
          setSearchQuery(data?.data?.stream)
          // Set up image previews for existing images
          const previews = {}
          if (data?.data?.banner_img) previews.banner_img = data.data.banner_img
          if (data?.data?.featured_img) previews.featured_img = data.data.featured_img
          if (data?.data?.mainReportImage) previews.mainReportImage = data.data.mainReportImage
          if (data?.data?.highlightBanner) previews.highlightBanner = data.data.highlightBanner

          // Add param images
          for (let i = 1; i <= 10; i++) {
            if (data?.data?.[`param_img${i}`]) {
              previews[`param_img${i}`] = data.data[`param_img${i}`]
            }
          }

          setImagePreviews(previews)
        } else {
          toast.error("Failed to fetch page details.")
        }
      } catch (error) {
        console.error("Error fetching page details:", error)
        toast.error("An error occurred while fetching page details.")
      } finally {
        setLoading(false)
      }
    }
    fetchPageData()
  }, [page_id])

  const fetchComponents = async (searchTerm = "", page = 1) => {
    try {
      const url = new URL(`${API_NODE_URL}components/category/Page`)
      url.searchParams.append("page", page)
      url.searchParams.append("limit", 10)
      if (searchTerm) {
        url.searchParams.append("search", searchTerm)
      }
      const response = await fetch(url)
      const result = await response.json()
      if (result.status) {
        if (page === 1) {
          setAllComponents(result.data)
        } else {
          setAllComponents((prev) => [...prev, ...result.data])
        }
        setDisplayedComponents(result.data)
        setHasMoreComponents(result.currentPage < result.totalPages)
      }
    } catch (error) {
      console.error("Error fetching components:", error)
    }
  }

  const handleComponentInputChange = (e) => {
    const value = e.target.value
    setComponentSearchValue(value)
    if (value.length > 0) {
      fetchComponents(value)
      setShowComponentDropdown(true)
    } else {
      fetchComponents()
      setShowComponentDropdown(false)
    }
  }

  const handleComponentSuggestionClick = (component) => {
    setComponentSearchValue(component.componentName)
    setSelectedComponentType(component.componentName)
    setShowComponentDropdown(false)
  }

  const handleShowMoreComponents = () => {
    // This would need proper pagination implementation
    fetchComponents(componentSearchValue, 2)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const createImagePreview = (file, fieldName) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      setImagePreviews((prev) => ({
        ...prev,
        [fieldName]: e.target.result,
      }))
    }
    reader.readAsDataURL(file)
  }

  const handleFileChange = (e, field) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        [field]: file,
      }))
      createImagePreview(file, field)
    }
  }

  const handleGalleryImg = (e, field) => {
    const files = Array.from(e.target.files)
    setFormData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], ...files],
    }))

    // Create previews for gallery images
    files.forEach((file, index) => {
      createImagePreview(file, `${field}_${Date.now()}_${index}`)
    })
  }

  const insertPage = async () => {
    if (!formData) {
      toast.error("Form data is not ready!")
      return
    }

    const dataToSend = new FormData()
    for (const key in formData) {
      if (key === "galleryimg" && Array.isArray(formData[key])) {
        formData[key].forEach((file) => {
          dataToSend.append(key, file)
        })
      } else if (formData[key] instanceof File || formData[key] instanceof Blob) {
        dataToSend.append(key, formData[key])
      } else if (formData[key] !== undefined && formData[key] !== null) {
        dataToSend.append(key, formData[key])
      }
    }

    dataToSend.append("ComponentType", selectedComponentType);

    try {
      const response = await fetch(`${API_NODE_URL}slug/update`, {
        method: "POST",
        body: dataToSend,
      })
      const data = await response.json()
      if (data.status) {
        toast.success("Page edited Successfully")
        router.push("/admin/page-list")
      } else {
        toast.error(`Something went wrong: ${data?.message}`)
      }
    } catch (error) {
      console.error("Error updating page:", error)
      toast.error("An error occurred while processing your request.")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    insertPage()
  }

  const getFileName = (fileOrUrl) => {
    if (fileOrUrl instanceof File) {
      return fileOrUrl.name
    }
    if (typeof fileOrUrl === "string" && fileOrUrl) {
      try {
        const url = new URL(fileOrUrl)
        const parts = url.pathname.split("/")
        return parts[parts.length - 1]
      } catch (e) {
        return fileOrUrl
      }
    }
    return "No file chosen"
  }

  const ImageUploadCard = ({ id, label, description, dimensions, fieldName, required = false, multiple = false }) => (
    <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 hover:border-blue-400 transition-all duration-300 group">
      <div className="p-6">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
          </label>

          {description && <p className="text-xs text-gray-500 mb-1">{description}</p>}
          {dimensions && <p className="text-xs text-blue-600 font-medium mb-4">({dimensions})</p>}

          <input
            type="file"
            accept="image/webp,image/jpeg,image/png"
            onChange={(e) => (multiple ? handleGalleryImg(e, fieldName) : handleFileChange(e, fieldName))}
            className="hidden"
            id={id}
            multiple={multiple}
          />

          <label
            htmlFor={id}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg cursor-pointer hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Choose {multiple ? "files" : "file"}
          </label>

          <div className="mt-4">
            {imagePreviews[fieldName] && (
              <div className="relative inline-block">
                <img
                  src={imagePreviews[fieldName] || "/placeholder.svg"}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-lg border-2 border-gray-200 shadow-md"
                />
                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  ✓
                </div>
              </div>
            )}
            <p className="text-xs text-gray-600 mt-2 break-all">{getFileName(formData[fieldName])}</p>
          </div>
        </div>
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <div className="text-xl font-semibold text-gray-700 mb-2">Loading page details...</div>
          <div className="text-gray-500">Please wait while we fetch your data</div>
        </div>
      </div>
    )
  }

  return (
    <div className="">
      <div className="">
        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Edit Page Details
            </h1>
            <p className="text-blue-100 mt-2">Update your page content and settings</p>
          </div>

          <div className="p-8 space-y-8">
            {/* Basic Details Section */}
            <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Basic Information</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentPage" className="block text-sm font-semibold text-gray-700 mb-2">
                    Parent Page
                  </label>
                  <input
                    type="text"
                    id="parentPage"
                    name="parentPage"
                    value={formData.parentPage}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-100 cursor-not-allowed focus:outline-none"
                    disabled
                  />
                </div>

                <div className="relative">
                  <label htmlFor="component-type" className="block text-sm font-semibold text-gray-700 mb-2">
                    Component Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="component-type"
                      type="text"
                      value={componentSearchValue}
                      onChange={handleComponentInputChange}
                      placeholder="Search and select component type..."
                      className="w-full border-2 border-gray-200 rounded-xl py-4 px-4 pr-12 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  {showComponentDropdown && (
                    <div className="absolute z-20 w-full bg-white border-2 border-gray-200 rounded-xl mt-2 max-h-64 overflow-auto shadow-2xl">
                      {displayedComponents.map((component) => (
                        <div
                          key={component._id}
                          onClick={() => handleComponentSuggestionClick(component)}
                          className="cursor-pointer px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150 flex items-center"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg
                              className="w-4 h-4 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                              />
                            </svg>
                          </div>
                          <div className="font-medium text-gray-800">{component.componentName}</div>
                        </div>
                      ))}
                      {hasMoreComponents && displayedComponents.length > 0 && (
                        <button
                          type="button"
                          onClick={handleShowMoreComponents}
                          className="w-full px-4 py-3 text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-150"
                        >
                          Load More Components
                        </button>
                      )}
                    </div>
                  )}
                </div>
                {/* Custom Searchable Dropdown */}
                <div>
                  <label
                    htmlFor="schoolSearch"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    School
                  </label>
                  <input
                    id="schoolSearch"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowDropdown(true)}
                    placeholder="Search and select school..."
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {showDropdown && (
                    <ul className="border border-gray-300 mt-1 max-h-40 overflow-y-auto rounded-md bg-white shadow-md">
                      {(Array.isArray(schools) ? schools : [])
                        .filter((school) =>
                          school.name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                        )
                        .map((school) => (
                          <li
                            key={school.id}
                            onClick={() => handleSchoolSelect(school)}
                            className="px-3 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                          >
                            {school.name}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>

            {/* Page Details Section */}
            <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Page Details</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Page Title
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled
                    className="w-full p-4 border-2 border-gray-200 rounded-xl cursor-not-allowed focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200"
                    placeholder="Enter page title..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label htmlFor="pageDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Page Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="pageDate"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">
                      Page Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 bg-white"
                    >
                      <option value="">Select Page Type</option>
                      <option value="Page">Page</option>
                      <option value="Admission">Admission</option>
                      <option value="Article">Article</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200"
                      placeholder="0.00"
                    />
                  </div>

                  <div>
                    <label htmlFor="featured_status" className="block text-sm font-semibold text-gray-700 mb-2">
                      Featured Status
                    </label>
                    <select
                      id="featured_status"
                      name="featured_status"
                      value={formData.featured_status}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 bg-white"
                    >
                      <option value="">Select Status</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* Content Editors Section */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Content Details</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Short Description <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                    <JoditEditor
                      ref={shortDescEditor}
                      value={formData.shortdesc}
                      config={{
                        readonly: false,
                        height: 400,
                        toolbar: true,
                        spellcheck: true,
                        language: "en",
                        toolbarButtonSize: "medium",
                        theme: "default",
                      }}
                      onBlur={(newContent) => handleEditorChange(newContent, "shortdesc")}
                      onChange={() => { }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Page Description <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                    <JoditEditor
                      ref={descEditor}
                      value={formData.description}
                      config={{
                        readonly: false,
                        height: 400,
                        toolbar: true,
                        spellcheck: true,
                        language: "en",
                        toolbarButtonSize: "medium",
                        theme: "default",
                      }}
                      onBlur={(newContent) => handleEditorChange(newContent, "description")}
                      onChange={() => { }}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Image Uploads Section */}
            <section className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Image Uploads</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ImageUploadCard
                  id="banner_img"
                  label="Banner Image"
                  description="File should be an image with webp extension"
                  dimensions="936 W X 337 H"
                  fieldName="banner_img"
                  required={true}
                />

                <ImageUploadCard
                  id="featured_img"
                  label="Featured Image"
                  description="File should be an image with webp extension"
                  dimensions="100 W x 75 H"
                  fieldName="featured_img"
                  required={true}
                />

                <ImageUploadCard
                  id="mainReportImage"
                  label="Main Report Image"
                  description="File should be an image with webp extension"
                  dimensions="936 W X 337 H"
                  fieldName="mainReportImage"
                  required={true}
                />

                <ImageUploadCard
                  id="highlightBanner"
                  label="Highlight Banner"
                  description="File should be an image with webp extension"
                  dimensions="936 W X 337 H"
                  fieldName="highlightBanner"
                />

                <ImageUploadCard
                  id="galleryimg"
                  label="Gallery Images"
                  description="File should be an image with webp extension"
                  dimensions="100 W x 75 H"
                  fieldName="galleryimg"
                  multiple={true}
                />
              </div>
            </section>

            {/* Tags and Metadata Section */}
            <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Metadata & Attributes</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {["tag1", "tag2", "tag3"].map((tag, index) => (
                  <div key={tag}>
                    <label htmlFor={tag} className="block text-sm font-semibold text-gray-700 mb-2">
                      Tag {index + 1}
                    </label>
                    <input
                      type="text"
                      id={tag}
                      name={tag}
                      value={formData[tag]}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-200"
                      placeholder={`Enter tag ${index + 1}...`}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="schemaid" className="block text-sm font-semibold text-gray-700 mb-2">
                    Schema ID
                  </label>
                  <input
                    type="number"
                    id="schemaid"
                    name="schemaid"
                    value={formData.schemaid}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-200"
                    placeholder="Enter schema ID..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div>
                  <label htmlFor="nic_name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nickname
                  </label>
                  <input
                    type="text"
                    id="nic_name"
                    name="nic_name"
                    value={formData.nic_name}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-200"
                    placeholder="Enter nickname..."
                  />
                </div>

                <div>
                  <label htmlFor="col_width" className="block text-sm font-semibold text-gray-700 mb-2">
                    Column Width
                  </label>
                  <input
                    type="number"
                    id="col_width"
                    name="col_width"
                    value={formData.col_width}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-200"
                    placeholder="Enter width..."
                  />
                </div>

                <div>
                  <label htmlFor="video_url" className="block text-sm font-semibold text-gray-700 mb-2">
                    Video URL
                  </label>
                  <input
                    type="url"
                    id="video_url"
                    name="video_url"
                    value={formData.video_url}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-200"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label htmlFor="old_url" className="block text-sm font-semibold text-gray-700 mb-2">
                    Old URL
                  </label>
                  <input
                    type="url"
                    id="old_url"
                    name="old_url"
                    value={formData.old_url}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-200"
                    placeholder="https://..."
                  />
                </div>
              </div>
            </section>

            {/* SEO Meta Details Section */}
            <section className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">SEO Meta Details</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="metatitle" className="block text-sm font-semibold text-gray-700 mb-2">
                    Meta Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="metatitle"
                    name="metatitle"
                    value={formData.metatitle}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200"
                    placeholder="Enter meta title..."
                  />
                </div>

                <div>
                  <label htmlFor="metadesc" className="block text-sm font-semibold text-gray-700 mb-2">
                    Meta Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="metadesc"
                    name="metadesc"
                    rows={4}
                    value={formData.metadesc}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200"
                    placeholder="Enter meta description..."
                  />
                </div>

                <div>
                  <label htmlFor="keywords_tag" className="block text-sm font-semibold text-gray-700 mb-2">
                    Keywords <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="keywords_tag"
                    name="keywords_tag"
                    value={formData.keywords_tag}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200"
                    placeholder="keyword1, keyword2, keyword3..."
                  />
                </div>
              </div>
            </section>

            {/* Custom Parameters Section */}
            <section className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Custom Parameters</h2>
                <span className="ml-3 px-3 py-1 bg-rose-100 text-rose-800 text-sm font-medium rounded-full">
                  Max 10
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 10 }, (_, index) => {
                  const paramIndex = index + 1
                  return (
                    <div
                      key={paramIndex}
                      className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center mr-2">
                          <span className="text-rose-600 font-bold text-sm">{paramIndex}</span>
                        </div>
                        <h4 className="font-bold text-gray-800">Parameter {paramIndex}</h4>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor={`param${paramIndex}`}
                            className="block text-xs font-semibold text-gray-600 mb-1"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id={`param${paramIndex}`}
                            name={`param${paramIndex}`}
                            value={formData[`param${paramIndex}`]}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-200 text-sm"
                            placeholder="Parameter name..."
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={`paramvalue${paramIndex}`}
                            className="block text-xs font-semibold text-gray-600 mb-1"
                          >
                            Value
                          </label>
                          <input
                            type="text"
                            id={`paramvalue${paramIndex}`}
                            name={`paramvalue${paramIndex}`}
                            value={formData[`paramvalue${paramIndex}`]}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-200 text-sm"
                            placeholder="Parameter value..."
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={`param_url${paramIndex}`}
                            className="block text-xs font-semibold text-gray-600 mb-1"
                          >
                            URL
                          </label>
                          <input
                            type="url"
                            id={`param_url${paramIndex}`}
                            name={`param_url${paramIndex}`}
                            value={formData[`param_url${paramIndex}`]}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-200 text-sm"
                            placeholder="https://..."
                          />
                        </div>

                        <div className="text-center">
                          <label
                            htmlFor={`param_img${paramIndex}`}
                            className="block text-xs font-semibold text-gray-600 mb-2"
                          >
                            Image
                          </label>
                          <input
                            type="file"
                            accept="image/webp,image/jpeg,image/png"
                            onChange={(e) => handleFileChange(e, `param_img${paramIndex}`)}
                            className="hidden"
                            id={`param_img${paramIndex}`}
                          />
                          <label
                            htmlFor={`param_img${paramIndex}`}
                            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors duration-200 text-sm"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            Choose
                          </label>

                          {imagePreviews[`param_img${paramIndex}`] && (
                            <div className="mt-3">
                              <img
                                src={imagePreviews[`param_img${paramIndex || "/placeholder.svg"}`]}
                                alt={`Preview ${paramIndex}`}
                                className="w-16 h-16 object-cover rounded-lg border-2 border-gray-200 mx-auto"
                              />
                            </div>
                          )}

                          <p className="text-xs text-gray-500 mt-2 break-all">
                            {getFileName(formData[`param_img${paramIndex}`])}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>

          {/* Submit Button */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
              >
                <span className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 group-hover:animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Update Page Details
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="mt-16"
      />
    </div>
  )
}

export default EditPage;