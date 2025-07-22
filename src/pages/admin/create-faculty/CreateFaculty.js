"use client"
import { useState } from "react"
import { API_NODE_URL } from "@/configs/config"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/navigation"

function AddFaculty() {
  const router = useRouter()
  const [selectedSchool, setSelectedSchool] = useState(null)
  const [searchQuery1, setSearchQuery1] = useState("")
  const [departmentSuggestions, setDepartmentSuggestions] = useState([])
  const [schoolSuggestions, setSchoolSuggestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    school: "",
    departments: [],
    subjectsTaught: "",
    profilePicture: null,
    socialLinks: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const { files } = e.target
    setFormData((prev) => ({ ...prev, profilePicture: files[0] }))
  }

  const validateForm = () => {
    const requiredFields = ["firstName", "lastName", "email", "designation", "school", "departments", "subjectsTaught"]
    for (const field of requiredFields) {
      if (!formData[field] || (field === "departments" && formData[field].length === 0)) {
        toast.error(`Please fill out the ${field.replace(/([A-Z])/g, " $1").toLowerCase()} field.`)
        return false
      }
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    try {
      setLoading(true)
      const payload = {
        ...formData,
        department: formData.departments,
        profilePicture: "",
      }

      const response = await fetch(`${API_NODE_URL}faculty/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()
      if (result.status) {
        toast.success("Faculty member added successfully!")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          designation: "",
          school: "",
          departments: [],
          subjectsTaught: "",
          profilePicture: null,
          socialLinks: "",
        })
        setDepartmentSuggestions([])
        setSearchQuery1("")
        setTimeout(() => {
          router.push("/admin/faculty-list")
        }, 2000)
      } else {
        toast.error(result.message || "Failed to add faculty member.")
      }
    } catch (err) {
      console.error("Error: ", err)
      toast.error("An error occurred while processing your request.")
    } finally {
      setLoading(false)
    }
  }

  const searchSchool = async (e) => {
    setSearchQuery1(e.target.value)
    if (e.target.value?.length < 3) return

    try {
      const response = await fetch(`${API_NODE_URL}school/search?search=${searchQuery1}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const result = await response.json()
      if (result.status) {
        if (searchQuery1 === "") {
          setSchoolSuggestions([])
          return
        }
        setSchoolSuggestions(result.data?.schools || [])
      } else {
        setSchoolSuggestions([])
      }
    } catch (error) {
      console.error("Error fetching schools:", error)
    }
  }

  const addSchool = (school) => {
    setSelectedSchool(school)
    setDepartmentSuggestions(school.departments || [])
    setFormData((prev) => ({
      ...prev,
      school: school._id,
    }))
    setSearchQuery1(school.name)
    setSchoolSuggestions([])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
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
        className="mt-16"
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Add New Faculty Member</h1>
              <p className="text-gray-600 mt-1">Fill in the details to add a new faculty member to the system</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-2 h-6 bg-blue-600 rounded-full mr-3"></div>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "First Name", name: "firstName", type: "text", icon: "👤" },
                  { label: "Last Name", name: "lastName", type: "text", icon: "👤" },
                  { label: "Email Address", name: "email", type: "email", icon: "✉️" },
                  { label: "Designation", name: "designation", type: "text", icon: "🎓" },
                ].map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Information Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-2 h-6 bg-purple-600 rounded-full mr-3"></div>
                Academic Information
              </h3>

              {/* School Selection */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    School <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery1}
                      onChange={searchSchool}
                      placeholder="Search and select school..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    {schoolSuggestions.length > 0 && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                        {schoolSuggestions.map((school, index) => (
                          <div
                            key={index}
                            onClick={() => addSchool(school)}
                            className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                          >
                            <div className="font-medium text-gray-900">{school.name}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {selectedSchool && (
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-800 font-medium">Selected: {selectedSchool.name}</span>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSchool(null)
                            setFormData((prev) => ({ ...prev, school: "" }))
                            setSearchQuery1("")
                            setDepartmentSuggestions([])
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Department Selection */}
                {departmentSuggestions.length > 0 && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Departments <span className="text-red-500">*</span>
                    </label>
                    <div className="border border-gray-300 rounded-xl bg-gray-50 p-4 max-h-48 overflow-y-auto">
                      <div className="space-y-2">
                        {departmentSuggestions.map((dept, index) => (
                          <label
                            key={index}
                            className="flex items-center space-x-3 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors duration-150"
                          >
                            <input
                              type="checkbox"
                              value={dept._id}
                              checked={formData.departments.includes(dept._id)}
                              onChange={(e) => {
                                const value = e.target.value
                                setFormData((prev) => ({
                                  ...prev,
                                  departments: e.target.checked
                                    ? [...prev.departments, value]
                                    : prev.departments.filter((id) => id !== value),
                                }))
                              }}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-gray-700">{dept.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Subjects Taught <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="subjectsTaught"
                    value={formData.subjectsTaught}
                    onChange={handleInputChange}
                    placeholder="Enter subjects taught (comma separated)"
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-2 h-6 bg-green-600 rounded-full mr-3"></div>
                Additional Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                  <div className="relative">
                    <input
                      type="file"
                      name="profilePicture"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Social Links</label>
                  <input
                    name="socialLinks"
                    value={formData.socialLinks}
                    onChange={handleInputChange}
                    placeholder="Enter social media links"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.push("/admin/faculty-list")}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {loading ? (
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
                    Adding Faculty...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Add Faculty Member
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddFaculty
