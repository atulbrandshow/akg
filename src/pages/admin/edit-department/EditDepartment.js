"use client"
import { useEffect, useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "react-toastify"
import { API_NODE_URL } from "@/configs/config"
import dynamic from "next/dynamic"
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg border">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="ml-2 text-gray-600">Loading editor...</span>
    </div>
  ),
})
function EditDepartment() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const _id = searchParams.get("_id")
  const editor = useRef()

  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    description: "",
    departmentCode: "",
    programsOffered: [],
  })
  const [programInput, setProgramInput] = useState("")
  const [schools, setSchools] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedSchool, setSelectedSchool] = useState(null)
  const [errors, setErrors] = useState({})
  const [originalData, setOriginalData] = useState({})

  useEffect(() => {
    if (!_id) {
      toast.error("Department ID is required")
      router.push("/admin/department-list")
      return
    }

    const fetchDepartment = async () => {
      try {
        const response = await fetch(`${API_NODE_URL}department/get-by-id?id=${_id}`)
        const result = await response.json()

        if (result.status) {
          const department = result.data
          const departmentData = {
            name: department.name || "",
            school: department.school?._id || "",
            description: department.description || "",
            departmentCode: department.departmentCode || "",
            programsOffered: Array.isArray(department.programsOffered)
              ? department.programsOffered
              : typeof department.programsOffered === "string"
                ? department.programsOffered.split(",").map((p) => p.trim())
                : [],
          }
          setFormData(departmentData)
          setOriginalData(departmentData)
          setSelectedSchool(department.school)
          setSearchQuery(department.school?.name || "")
        } else {
          toast.error(result.message || "Failed to fetch department.")
          router.push("/admin/department-list")
        }
      } catch (err) {
        console.error("Error: ", err)
        toast.error("An error occurred while fetching department data.")
        router.push("/admin/department-list")
      } finally {
        setIsLoading(false)
      }
    }

    fetchDepartment()
  }, [_id, router])

  // Fetch schools for the dropdown
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch(`${API_NODE_URL}school/search?search=${searchQuery}`)
        const result = await response.json()
        if (result.status) {
          setSchools(Array.isArray(result?.data?.schools) ? result?.data?.schools : [])
        } else {
          setSchools([])
        }
      } catch (err) {
        console.error("Error fetching schools:", err)
        setSchools([])
      }
    }
    if (searchQuery.trim()) {
      fetchSchools()
    }
  }, [searchQuery])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Department name is required"
    }

    if (!formData.school) {
      newErrors.school = "Please select a school"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    }

    if (formData.programsOffered.length === 0) {
      newErrors.programsOffered = "At least one program must be added"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const handleProgramAdd = (e) => {
    if (e.key === "Enter" && programInput.trim() !== "") {
      e.preventDefault()
      if (!formData.programsOffered.includes(programInput.trim())) {
        setFormData({
          ...formData,
          programsOffered: [...formData.programsOffered, programInput.trim()],
        })
        setProgramInput("")
        if (errors.programsOffered) {
          setErrors({ ...errors, programsOffered: "" })
        }
      } else {
        toast.warning("Program already exists")
      }
    }
  }

  const handleProgramRemove = (index) => {
    const updatedPrograms = formData.programsOffered.filter((_, i) => i !== index)
    setFormData({ ...formData, programsOffered: updatedPrograms })
  }

  const handleSchoolSelect = (school) => {
    setFormData({ ...formData, school: school._id })
    setSelectedSchool(school)
    setSearchQuery(school.name)
    setShowDropdown(false)
    if (errors.school) {
      setErrors({ ...errors, school: "" })
    }
  }

  const hasChanges = () => {
    return JSON.stringify(formData) !== JSON.stringify(originalData)
  }
  const handleShortDescChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      description: value || "",
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error("Please fix the errors in the form")
      return
    }

    if (!hasChanges()) {
      toast.info("No changes detected")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(`${API_NODE_URL}department/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, _id }),
      })

      const result = await response.json()

      if (result.status) {
        toast.success("Department updated successfully!")
        setTimeout(() => {
          router.push("/admin/department-list")
        }, 2000)
      } else {
        toast.error(result.message || "Failed to update department.")
      }
    } catch (err) {
      console.error("Error:", err)
      toast.error("An error occurred while processing your request.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const formFields = [
    {
      label: "Department Name",
      name: "name",
      type: "text",
      required: true,
      placeholder: "e.g., Computer Science, Mathematics",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center space-x-4">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600 font-medium">Loading department data...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 mb-8 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Edit Department</h1>
              <p className="text-blue-100">Update department information</p>
            </div>
          </div>
          <button
            onClick={() => router.push("/admin/department-list")}
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Licreate-facultyst</span>
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Department Information</h2>
                <p className="text-gray-600">Update the department details below</p>
              </div>
              {hasChanges() && (
                <div className="flex items-center text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Unsaved changes</span>
                </div>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Fields */}
              {formFields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <label htmlFor={field.name} className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <span className="text-gray-400 mr-2">{field.icon}</span>
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <div className="relative">
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors[field.name]
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 hover:border-gray-400 focus:border-blue-500"
                        }`}
                    />
                    {errors[field.name] && (
                      <div className="flex items-center mt-2 text-red-600 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {errors[field.name]}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* School Selection */}
              <div className="lg:col-span-2 space-y-2">
                <label htmlFor="school" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <span className="text-gray-400 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </span>
                  Select School
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    id="school"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowDropdown(true)}
                    placeholder="Search and select school..."
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.school
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 hover:border-gray-400 focus:border-blue-500"
                      }`}
                  />
                  {selectedSchool && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  {showDropdown && schools.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                      {schools
                        .filter((school) => school.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((school) => (
                          <div
                            key={school._id}
                            onClick={() => handleSchoolSelect(school)}
                            className="px-4 py-3 cursor-pointer hover:bg-blue-50 border-b border-gray-100 last:border-b-0 flex items-center justify-between"
                          >
                            <div>
                              <div className="font-medium text-gray-900">{school.name}</div>
                              <div className="text-sm text-gray-500">{school.location}</div>
                            </div>
                            <div className="text-xs text-gray-400">{school.yearEstablished}</div>
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Current School Display */}
                  {selectedSchool && (
                    <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-green-800">Selected School:</div>
                          <div className="text-sm text-green-600">{selectedSchool.name}</div>
                        </div>
                        <div className="text-xs text-green-500">{selectedSchool.location}</div>
                      </div>
                    </div>
                  )}

                  {errors.school && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {errors.school}
                    </div>
                  )}
                </div>
              </div>

              {/* Programs Offered */}
              <div className="lg:col-span-2 space-y-2">
                <label htmlFor="programs" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <span className="text-gray-400 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </span>
                  Programs Offered
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    id="programs"
                    type="text"
                    value={programInput}
                    onChange={(e) => setProgramInput(e.target.value)}
                    onKeyDown={handleProgramAdd}
                    placeholder="Enter program name and press Enter..."
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.programsOffered
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 hover:border-gray-400 focus:border-blue-500"
                      }`}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                      Enter
                    </kbd>
                  </div>
                </div>
                {formData.programsOffered.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <div className="text-sm font-medium text-gray-700">Added Programs:</div>
                    <div className="flex flex-wrap gap-2">
                      {formData.programsOffered.map((program, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium"
                        >
                          <span>{program}</span>
                          <button
                            type="button"
                            onClick={() => handleProgramRemove(index)}
                            className="ml-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {errors.programsOffered && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {errors.programsOffered}
                  </div>
                )}
              </div>
              <div className="lg:col-span-2 space-y-4">
                {/* Label */}
                <label htmlFor="description" className="flex items-center text-sm font-semibold text-gray-700">
                  <span className="text-gray-400 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </span>
                  Description
                  <span className="text-red-500 ml-1">*</span>
                </label>

                {/* JoditEditor */}
                <JoditEditor
                  ref={editor}
                  value={formData.description}
                  onBlur={handleShortDescChange}
                  onChange={handleShortDescChange}
                  className={`w-full border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 
      ${errors.description
                      ? "border-red-300 bg-red-50 focus:ring-red-400"
                      : "border-gray-300 hover:border-gray-400 focus:ring-blue-500"}`}
                />

                {/* Error message */}
                {errors.description && (
                  <div className="flex items-center text-sm text-red-600 mt-1">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.description}
                  </div>
                )}
              </div>
              {/* Description Field */}
              <div className="lg:col-span-2 space-y-2">
                <label htmlFor="description" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <span className="text-gray-400 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </span>
                  Description
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Provide a detailed description of the department, its mission, faculty, and facilities..."
                  rows="4"
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${errors.description
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300 hover:border-gray-400 focus:border-blue-500"
                    }`}
                />
                {errors.description && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {errors.description}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.push("/admin/department-list")}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !hasChanges()}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Updating Department...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Update Department</span>
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

export default EditDepartment
