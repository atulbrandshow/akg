"use client"

import { useState, useEffect } from "react"
import { X, Save, LinkIcon, Type } from "lucide-react"
import { API_NODE_URL } from "@/configs/config"


export default function AnnouncementModal({ isOpen, onClose, onSuccess, announcement, onError }) {
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    status: true,
    stream: "", // add stream field
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [searchQuery, setSearchQuery] = useState("");
  const [streamId, setStreamId] = useState(null);
  const [schools, setSchools] = useState([]);
  const [showSchoolDropdown, setShowSchoolDropdown] = useState(false);

  // Reset form when modal opens/closes or announcement changes
  useEffect(() => {
    if (isOpen) {
      if (announcement) {
        setFormData({
          title: announcement?.title || "",
          link: announcement?.link || "",
          status: announcement?.status !== undefined ? announcement?.status : true,
          stream: announcement?.stream?._id || "",
        })
        setSearchQuery(announcement?.stream?.name)
      } else {
        setFormData({
          title: "",
          link: "",
          status: true,
        })
      }
      setErrors({})
    }
  }, [isOpen, announcement])
  const handleSchoolSelect = (school) => {
    setStreamId(school?.page_id);
    setSearchQuery(school.name); // Show stream name
    setFormData((prev) => ({ ...prev, stream: school?.page_id })); // Save stream ID
    setShowSchoolDropdown(false);
  };
  useEffect(() => {
    const fetchSchools = async (searchTerm = "") => {
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
        const fetchedPages = data?.data?.pages || [];

        setSchools(Array.isArray(fetchedPages) ? fetchedPages : []);
      } catch (error) {
        console.error("Error fetching parent pages:", error);
        setSchools([]);
      }
    };

    if (searchQuery) {
      fetchSchools(searchQuery);
    }
  }, [searchQuery]);

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters"
    }

    if (!formData.link.trim()) {
      newErrors.link = "Link is required"
    } else {
      try {
        new URL(formData.link)
      } catch {
        newErrors.link = "Please enter a valid URL"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const url = announcement ? `${API_NODE_URL}announcement/update` : `${API_NODE_URL}announcement/`

      const payload = announcement ? { _id: announcement._id, ...formData } : formData

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include"
      })

      const data = await response.json()

      if (data.status) {
        onSuccess()
      } else {
        onError(data.message || "Failed to save announcement")
      }
    } catch (err) {
      onError("Error saving announcement")
      console.error("Save error:", err)
    } finally {
      setLoading(false)
    }
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />

        {/* Modal */}
        <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4 transform transition-all">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              {announcement ? "Edit Announcement" : "Add New Announcement"}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Title Field */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                <Type className="w-4 h-4 inline mr-2" />
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${errors.title ? "border-red-300" : "border-gray-300"
                  }`}
                placeholder="Enter announcement title"
              />
              {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>

            {/* Link Field */}
            <div>
              <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
                <LinkIcon className="w-4 h-4 inline mr-2" />
                Link
              </label>
              <input
                type="url"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${errors.link ? "border-red-300" : "border-gray-300"
                  }`}
                placeholder="https://example.com"
              />
              {errors.link && <p className="mt-1 text-sm text-red-600">{errors.link}</p>}
            </div>
            {/* Stream Search Field */}
            <div>
              <label htmlFor="streamSearch" className="block text-sm font-medium text-gray-700 mb-2">
                Stream : <span className="italic text-xs font-medium">(Optional if you want to show on every pages !)</span>
              </label>
              <div className="relative">
                <input
                  id="streamSearch"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSchoolDropdown(true)}
                  placeholder="Search and select stream..."
                  className="w-full border px-3 py-2 rounded-lg shadow-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {showSchoolDropdown && schools.length > 0 && (
                  <div className="absolute z-20 w-full bg-white border border-gray-200 rounded-lg mt-2 max-h-64 overflow-auto shadow-lg">
                    {schools.map((school) => (
                      school.page_id != 0 &&
                      <div
                        key={school._id}
                        onClick={() => handleSchoolSelect(school)}
                        className="cursor-pointer px-4 py-2 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors"
                      >
                        {school.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Status Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="status" className="text-sm font-medium text-gray-700">
                  Status
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  {formData.status ? "Announcement is active" : "Announcement is inactive"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, status: !prev.status }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${formData.status ? "bg-blue-600" : "bg-gray-200"
                  }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.status ? "translate-x-6" : "translate-x-1"
                    }`}
                />
              </button>
            </div>

            {/* Actions */}
            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors duration-200"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : (
                  <Save className="w-4 h-4 mr-2" />
                )}
                {loading ? "Saving..." : announcement ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
