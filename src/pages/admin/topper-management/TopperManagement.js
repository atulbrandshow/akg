"use client"

import { useState, useEffect } from "react"
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"
import { uploadImages } from "@/utills/ImageUpload"

const TopperManagement = () => {
  const [toppers, setToppers] = useState([])
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [editingTopper, setEditingTopper] = useState(null)
  const [stats, setStats] = useState({
    totalToppers: 0,
    avgPercentage: 0,
    topRank: 0,
    totalSchools: 0,
  })
  const [formData, setFormData] = useState({
    name: "",
    rank: "",
    percentage: "",
    school: "",
    year: "",
    subject: "",
    profileImage: null,
  })
  const [imagePreview, setImagePreview] = useState("")
  const [uploading, setUploading] = useState(false)

  // Fetch all toppers
  const fetchToppers = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_NODE_URL}toppers?sortBy=rank&sortOrder=asc`, {
        credentials: "include",
      })
      const data = await response.json()

      if (data.success) {
        setToppers(data.data.toppers)
      } else {
        console.error("Error fetching toppers:", data.message)
        alert("Error fetching toppers: " + data.message)
      }
    } catch (error) {
      console.error("Error fetching toppers:", error)
      alert("Error fetching toppers")
    } finally {
      setLoading(false)
    }
  }

  // Fetch statistics
  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_NODE_URL}toppers/stats`, {
        credentials: "include",
      })
      const data = await response.json()

      if (data.success) {
        setStats(data.data)
      }
    } catch (error) {
      console.error("Error fetching stats:", error)
    }
  }

  useEffect(() => {
    fetchToppers()
    fetchStats()
  }, [])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
      }))

      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setUploading(true)

    try {
      let imageUrl = editingTopper?.profileImage || ""

      // Upload image if new image is selected
      if (formData.profileImage) {
        try {
          imageUrl = await uploadImages(formData.profileImage)
        } catch (uploadError) {
          console.error("Image upload failed:", uploadError)
          alert("Image upload failed: " + uploadError.message)
          setUploading(false)
          return
        }
      }

      const topperData = {
        name: formData.name,
        rank: Number.parseInt(formData.rank),
        percentage: Number.parseFloat(formData.percentage),
        school: formData.school,
        year: formData.year,
        subject: formData.subject,
        profileImage: imageUrl,
      }

      const url = editingTopper ? `${API_NODE_URL}toppers/${editingTopper._id}` : API_NODE_URL + "toppers"
      const method = editingTopper ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(topperData),
      })

      const data = await response.json()

      if (data.success) {
        alert(editingTopper ? "Topper updated successfully!" : "Topper added successfully!")
        setShowModal(false)
        resetForm()
        fetchToppers()
        fetchStats()
      } else {
        alert("Error: " + data.message)
      }
    } catch (error) {
      console.error("Error saving topper:", error)
      alert("Error saving topper")
    } finally {
      setUploading(false)
    }
  }

  // Delete topper
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this topper?")) return

    try {
      const response = await fetch(`${API_NODE_URL}toppers/${id}`, {
        method: "DELETE",
        credentials: "include",
      })

      const data = await response.json()

      if (data.success) {
        alert("Topper deleted successfully!")
        fetchToppers()
        fetchStats()
      } else {
        alert("Error: " + data.message)
      }
    } catch (error) {
      console.error("Error deleting topper:", error)
      alert("Error deleting topper")
    }
  }

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      rank: "",
      percentage: "",
      school: "",
      year: "",
      subject: "",
      profileImage: null,
    })
    setImagePreview("")
    setEditingTopper(null)
  }

  // Open modal for adding new topper
  const openAddModal = () => {
    resetForm()
    setShowModal(true)
  }

  // Open modal for editing topper
  const openEditModal = (topper) => {
    setEditingTopper(topper)
    setFormData({
      name: topper.name,
      rank: topper.rank.toString(),
      percentage: topper.percentage.toString(),
      school: topper.school,
      year: topper.year,
      subject: topper.subject,
      profileImage: null,
    })
    setImagePreview(topper.profileImage || "")
    setShowModal(true)
  }

  return (
    <div className="">
      <div className="">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-novaBold text-gray-900">Topper Management</h1>
              <p className="text-gray-600 mt-1 font-novaReg">Manage your academic toppers list</p>
            </div>
            <button
              onClick={openAddModal}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-novaSemi transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Topper
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-novaSemi text-gray-600">Total Toppers</p>
                <p className="text-2xl font-novaBold text-gray-900">{stats.totalToppers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-novaSemi text-gray-600">Avg Percentage</p>
                <p className="text-2xl font-novaBold text-gray-900">{stats.avgPercentage.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-novaSemi text-gray-600">Top Rank</p>
                <p className="text-2xl font-novaBold text-gray-900">#{stats.topRank || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-novaSemi text-gray-600">Schools</p>
                <p className="text-2xl font-novaBold text-gray-900">{stats.totalSchools}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Toppers List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-novaSemi text-gray-900">All Toppers ({toppers.length})</h2>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-2 text-gray-600 font-novaReg">Loading toppers...</p>
            </div>
          ) : toppers.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <p className="text-lg font-novaSemi">No toppers found</p>
              <p className="mt-1">Add your first topper to get started</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                      Profile
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                      Percentage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                      School
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                      Year
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {toppers.map((topper) => (
                    <tr key={topper._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                          {topper.profileImage ? (
                            <img
                              src={IMAGE_PATH + topper.profileImage}
                              alt={topper.name}
                              className="w-full h-full object-cover object-top"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-novaSemi text-gray-900">{topper.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-novaSemi ${topper.rank === 1
                            ? "bg-yellow-100 text-yellow-800"
                            : topper.rank === 2
                              ? "bg-gray-100 text-gray-800"
                              : topper.rank === 3
                                ? "bg-orange-100 text-orange-800"
                                : "bg-green-100 text-green-800"
                            }`}
                        >
                          #{topper.rank}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          <span className="font-novaSemi">{topper.percentage}%</span>
                          {topper.percentage >= 95 && (
                            <svg className="w-4 h-4 ml-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-novaReg text-sm text-gray-900">{topper.school}</td>
                      <td className="px-6 py-4 whitespace-nowrap font-novaReg text-sm text-gray-900">{topper.year}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-novaSemi bg-blue-100 text-blue-800">
                          {topper.subject}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-novaSemi">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => openEditModal(topper)}
                            className="text-blue-600 hover:text-blue-900 transition-colors duration-200 p-1 rounded hover:bg-blue-50"
                            title="Edit topper"
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
                            onClick={() => handleDelete(topper._id)}
                            className="text-red-600 hover:text-red-900 transition-colors duration-200 p-1 rounded hover:bg-red-50"
                            title="Delete topper"
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-novaSemi text-gray-900">
                  {editingTopper ? "Edit Topper" : "Add New Topper"}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Profile Image */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-novaSemi text-gray-700 mb-2">Profile Image</label>
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-20 rounded-full overflow-hidden bg-gray-200">
                      {imagePreview ? (
                        <img
                          src={
                            imagePreview?.startsWith("data:") // base64 uploaded image
                              ? imagePreview
                              : IMAGE_PATH + imagePreview // existing stored image
                          }
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-novaSemi file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-novaSemi text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter student name"
                  />
                </div>

                {/* Rank */}
                <div>
                  <label className="block text-sm font-novaSemi text-gray-700 mb-2">Rank *</label>
                  <input
                    type="number"
                    name="rank"
                    value={formData.rank}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter rank"
                  />
                </div>

                {/* Percentage */}
                <div>
                  <label className="block text-sm font-novaSemi text-gray-700 mb-2">Percentage *</label>
                  <input
                    type="number"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleInputChange}
                    required
                    min="0"
                    max="100"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter percentage"
                  />
                </div>

                {/* School */}
                <div>
                  <label className="block text-sm font-novaSemi text-gray-700 mb-2">School *</label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter school name"
                  />
                </div>

                {/* Year */}
                <div>
                  <label className="block text-sm font-novaSemi text-gray-700 mb-2">Year *</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 2024"
                  />
                </div>

                {/* Subject */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-novaSemi text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter subject/exam name"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-novaSemi text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-4 py-2 text-sm font-novaSemi text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {uploading && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>}
                  {uploading ? "Saving..." : editingTopper ? "Update Topper" : "Add Topper"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default TopperManagement
