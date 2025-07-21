"use client"
import { useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/navigation"
import { API_NODE_URL } from "@/configs/config"

// Dynamically import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => <p className="text-gray-500">Loading editor...</p>,
})

export default function PageDetailsForm({ page_id }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
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
        console.log("Parent Page Name:", result?.data?.name)
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
        console.log(data)
        if (data.status) {
          const parent_id = data?.data?.parent_id
          const parentPageName = parent_id !== 0 ? await fetchParent(parent_id) : data?.data?.name
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
            galleryimg: data.data.galleryimg || [], // Ensure it's an array
            type: data.data.type || "",
            mainReportImage: data?.data?.mainReportImage || "",
            metatitle: data?.data?.metatitle || "",
            metadesc: data?.data?.metadesc || "",
            keywords_tag: data?.data?.keywords_tag || "",
          })
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

  useEffect(() => {
    console.log(formData)
  }, [formData])

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Handle file changes
  const handleFileChange = (e, field) => {
    const file = e.target.files[0]
    setFormData((prevData) => ({
      ...prevData,
      [field]: file,
    }))
  }

  // Handle gallery images
  const handleGalleryImg = (e, field) => {
    const files = Array.from(e.target.files)
    setFormData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], ...files],
    }))
  }

  // Insert page data
  const insertPage = async () => {
    if (!formData) {
      toast.error("Form data is not ready!")
      return
    }
    console.log(formData);

    const dataToSend = new FormData();
    for (const key in formData) {
      if (key === "galleryimg" && Array.isArray(formData[key])) {
        formData[key].forEach((file) => {
          dataToSend.append(key, file);
        });
      } else if (formData[key] instanceof File || formData[key] instanceof Blob) {
        dataToSend.append(key, formData[key]);
      } else if (formData[key] !== undefined && formData[key] !== null) {
        dataToSend.append(key, formData[key]);
      }
    }


    // Debug: print each key/value in FormData
    try {
      // Note: When sending FormData, do NOT set 'Content-Type': 'application/json'
      // The browser will automatically set the correct 'Content-Type' header with the boundary.
      const response = await fetch(`${API_NODE_URL}slug/update`, {
        method: "POST",
        body: dataToSend, // Send FormData directly
      })
      const data = await response.json()
      if (data.status) {
        toast.success("Page edited Successfully")
        setTimeout(() => {
          router.push("/admin/page-list")
        }, 2000)
      } else {
        toast.error(`Something went wrong: ${data?.message}`)
      }
    } catch (error) {
      console.error("Error fetching parent pages:", error)
      toast.error("An error occurred while processing your request.")
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    insertPage()
  }

  // Helper to get file name for display
  const getFileName = (fileOrUrl) => {
    if (fileOrUrl instanceof File) {
      return fileOrUrl.name
    }
    if (typeof fileOrUrl === "string" && fileOrUrl) {
      // Assuming it's a URL, extract filename
      try {
        const url = new URL(fileOrUrl)
        const parts = url.pathname.split("/")
        return parts[parts.length - 1]
      } catch (e) {
        return fileOrUrl // Not a valid URL, just return the string
      }
    }
    return "No file chosen"
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-lg font-novaSemi text-gray-700">Loading page details...</div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-white shadow-xl rounded-xl my-8">
      {/* <div className="mb-8 p-5 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg cursor-pointer hover:from-green-500 hover:to-green-700 transition-all duration-300 ease-in-out transform hover:scale-105 text-center font-semibold text-lg">
        Click Here to Generate Page Meta Using AI (Artificial Intelligence)
      </div> */}
      <h2 className="text-3xl font-novaBold text-gray-800 mb-8 border-b-2 pb-4 border-gray-200">Edit Page Details</h2>

      <div className="space-y-10">
        {/* Basic Details Section */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-novaBold text-gray-700 mb-5">Basic Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="parentPage" className="block text-sm font-novaSemi text-gray-700 mb-2">
                Choose Parent Page
              </label>
              <input
                type="text"
                id="parentPage"
                name="parentPage"
                value={formData.parentPage}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-100 cursor-not-allowed"
                disabled
              />
            </div>
          </div>
        </section>

        {/* Page Detail Section */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-novaBold text-gray-700 mb-5">Page Details</h3>
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-novaSemi text-gray-700 mb-2">
                Page Title*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label htmlFor="pageDate" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Page Date*
                </label>
                <input
                  type="date"
                  id="pageDate"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Select Page Type*
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
                >
                  <option value="">Select Page Type</option>
                  <option value="Page">Page</option>
                  <option value="Admission">Admission</option>
                  <option value="Article">Article</option>
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
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
                >
                  <option value="">Select Status</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Description Editors Section */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-novaBold text-gray-700 mb-5">Content Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-novaSemi text-gray-700 mb-2">Short Description*</label>
              <JoditEditor
                ref={shortDescEditor}
                value={formData.shortdesc}
                config={{
                  readonly: false, // Enable editing
                  height: 400, // Customize editor height
                }}
                onBlur={(newContent) => handleEditorChange(newContent, "shortdesc")}
                onChange={(newContent) => { }} // Keep onChange empty as per original code
              />
            </div>
            <div>
              <label className="block text-sm font-novaSemi text-gray-700 mb-2">Page Description*</label>
              <JoditEditor
                ref={descEditor}
                value={formData.description}
                config={{
                  readonly: false, // Enable editing
                  height: 400, // Customize editor height
                }}
                onBlur={(newContent) => handleEditorChange(newContent, "description")}
                onChange={(newContent) => { }} // Keep onChange empty as per original code
              />
            </div>
          </div>
        </section>

        {/* Tags and Schema Section */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-novaBold text-gray-700 mb-5">Metadata & Attributes</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label htmlFor="video_url" className="block text-sm font-novaSemi text-gray-700 mb-2">
                Video URL
              </label>
              <input
                type="text"
                id="video_url"
                name="video_url"
                value={formData.video_url}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="old_url" className="block text-sm font-novaSemi text-gray-700 mb-2">
                Old URL
              </label>
              <input
                type="text"
                id="old_url"
                name="old_url"
                value={formData.old_url}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </section>

        {/* Image Uploads Section */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-novaBold text-gray-700 mb-5">Image Uploads</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Banner Image */}
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 transition-all duration-200 ease-in-out group">
              <label htmlFor="banner_img" className="block text-sm font-novaSemi text-gray-700 mb-3 text-center">
                Upload Banner*
              </label>
              <p className="text-xs text-gray-500 mb-1">File should be an image with webp extension</p>
              <p className="text-xs text-gray-500 mb-4">(936 W X 337 H)</p>
              <input
                type="file"
                accept="image/webp"
                onChange={(e) => handleFileChange(e, "banner_img")}
                className="hidden"
                id="banner_img"
              />
              <label
                htmlFor="banner_img"
                className="bg-green-500 text-white px-5 py-2 rounded-md cursor-pointer hover:bg-green-600 transition-colors duration-200 ease-in-out transform group-hover:scale-105"
              >
                Choose file
              </label>
              <span className="text-sm text-gray-600 mt-3 text-center">{getFileName(formData.banner_img)}</span>
            </div>

            {/* Featured Image */}
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 transition-all duration-200 ease-in-out group">
              <label htmlFor="featured_img" className="block text-sm font-novaSemi text-gray-700 mb-3 text-center">
                Upload Featured Image*
              </label>
              <p className="text-xs text-gray-500 mb-1">File should be an image with webp extension</p>
              <p className="text-xs text-gray-500 mb-4">(100 W x 75 H)</p>
              <input
                type="file"
                accept="image/webp"
                onChange={(e) => handleFileChange(e, "featured_img")}
                className="hidden"
                id="featured_img"
              />
              <label
                htmlFor="featured_img"
                className="bg-green-500 text-white px-5 py-2 rounded-md cursor-pointer hover:bg-green-600 transition-colors duration-200 ease-in-out transform group-hover:scale-105"
              >
                Choose file
              </label>
              <span className="text-sm text-gray-600 mt-3 text-center">{getFileName(formData.featured_img)}</span>
            </div>

            {/* Main Report Image */}
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 transition-all duration-200 ease-in-out group">
              <label
                htmlFor="uploadMainReportImage"
                className="block text-sm font-novaSemi text-gray-700 mb-3 text-center"
              >
                Upload Main Report Image*
              </label>
              <p className="text-xs text-gray-500 mb-1">File should be an image with webp extension</p>
              <p className="text-xs text-gray-500 mb-4">(Banner Size: 936 W X 337 H)</p>
              <input
                type="file"
                accept="image/webp"
                onChange={(e) => handleFileChange(e, "mainReportImage")}
                className="hidden"
                id="uploadMainReportImage"
              />
              <label
                htmlFor="uploadMainReportImage"
                className="bg-green-500 text-white px-5 py-2 rounded-md cursor-pointer hover:bg-green-600 transition-colors duration-200 ease-in-out transform group-hover:scale-105"
              >
                Choose file
              </label>
              <span className="text-sm text-gray-600 mt-3 text-center">{getFileName(formData.mainReportImage)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Highlight Banner */}
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 transition-all duration-200 ease-in-out group">
              <label htmlFor="highlightBanner" className="block text-sm font-novaSemi text-gray-700 mb-3 text-center">
                Highlight Banner
              </label>
              <p className="text-xs text-gray-500 mb-1">File should be an image with webp extension</p>
              <p className="text-xs text-gray-500 mb-4">(936 W X 337 H)</p>
              <input
                type="file"
                accept="image/webp"
                onChange={(e) => handleFileChange(e, "highlightBanner")}
                className="hidden"
                id="highlightBanner"
              />
              <label
                htmlFor="highlightBanner"
                className="bg-green-500 text-white px-5 py-2 rounded-md cursor-pointer hover:bg-green-600 transition-colors duration-200 ease-in-out transform group-hover:scale-105"
              >
                Choose file
              </label>
              <span className="text-sm text-gray-600 mt-3 text-center">{getFileName(formData.highlightBanner)}</span>
            </div>

            {/* Gallery Images */}
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 transition-all duration-200 ease-in-out group">
              <label htmlFor="galleryimg" className="block text-sm font-novaSemi text-gray-700 mb-3 text-center">
                Gallery Images
              </label>
              <p className="text-xs text-gray-500 mb-1">File should be an image with webp extension</p>
              <p className="text-xs text-gray-500 mb-4">(100 W x 75 H)</p>
              <input
                type="file"
                accept="image/webp"
                multiple
                onChange={(e) => handleGalleryImg(e, "galleryimg")}
                className="hidden"
                id="galleryimg"
              />
              <label
                htmlFor="galleryimg"
                className="bg-green-500 text-white px-5 py-2 rounded-md cursor-pointer hover:bg-green-600 transition-colors duration-200 ease-in-out transform group-hover:scale-105"
              >
                Choose files
              </label>
              <div className="text-sm text-gray-600 mt-3 text-center">
                {formData.galleryimg.length > 0
                  ? formData.galleryimg.map((file, index) => (
                    <p key={index} className="truncate max-w-full">
                      {getFileName(file)}
                    </p>
                  ))
                  : "No files chosen"}
              </div>
            </div>
          </div>
        </section>

        {/* Page Meta Detail Section */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-novaBold text-gray-700 mb-5">SEO Meta Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="metatitle" className="block text-sm font-novaSemi text-gray-700 mb-2">
                Meta Title*
              </label>
              <input
                type="text"
                id="metatitle"
                name="metatitle"
                value={formData.metatitle}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="metadesc" className="block text-sm font-novaSemi text-gray-700 mb-2">
                Meta Description*
              </label>
              <textarea
                id="metadesc"
                name="metadesc"
                rows={3}
                value={formData.metadesc}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              ></textarea>
            </div>
            <div>
              <label htmlFor="keywords_tag" className="block text-sm font-novaSemi text-gray-700 mb-2">
                Keywords*
              </label>
              <input
                type="text"
                id="keywords_tag"
                name="keywords_tag"
                value={formData.keywords_tag}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </section>

        {/* Params Section */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-novaBold text-gray-700 mb-5">Custom Parameters (Max 10)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 10 }, (_, index) => {
              const paramIndex = index + 1 // 1-based index
              return (
                <div key={paramIndex} className="border border-gray-200 p-4 rounded-md bg-white shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3">Param {paramIndex}</h4>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor={`param${paramIndex}`} className="block text-sm font-novaSemi text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id={`param${paramIndex}`}
                        name={`param${paramIndex}`}
                        value={formData[`param${paramIndex}`]}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-400 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`paramvalue${paramIndex}`}
                        className="block text-sm font-novaSemi text-gray-700 mb-1"
                      >
                        Value
                      </label>
                      <input
                        type="text"
                        id={`paramvalue${paramIndex}`}
                        name={`paramvalue${paramIndex}`}
                        value={formData[`paramvalue${paramIndex}`]}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-400 transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <label
                        htmlFor={`param_img${paramIndex}`}
                        className="block text-sm font-novaSemi text-gray-700 mb-2"
                      >
                        Upload Image
                      </label>
                      <input
                        type="file"
                        accept="image/webp"
                        onChange={(e) => handleFileChange(e, `param_img${paramIndex}`)}
                        className="hidden"
                        id={`param_img${paramIndex}`}
                      />
                      <label
                        htmlFor={`param_img${paramIndex}`}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300 transition-colors duration-200 text-sm"
                      >
                        Choose file
                      </label>
                      <span className="text-xs text-gray-500 mt-2 text-center">
                        {getFileName(formData[`param_img${paramIndex}`])}
                      </span>
                    </div>
                    <div>
                      <label
                        htmlFor={`param_url${paramIndex}`}
                        className="block text-sm font-novaSemi text-gray-700 mb-1"
                      >
                        URL
                      </label>
                      <input
                        type="text"
                        id={`param_url${paramIndex}`}
                        name={`param_url${paramIndex}`}
                        value={formData[`param_url${paramIndex}`]}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-400 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>

      <div className="mt-10 text-center">
        <button
          type="submit"
          className="bg-green-600 text-white py-3 px-10 rounded-full uppercase font-novaBold text-lg tracking-wide shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75"
        >
          Submit
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  )
}
