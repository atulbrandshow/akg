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

function EditSchool() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const _id = searchParams.get("_id")
  const editor = useRef()
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    yearEstablished: "",
    accreditation: "",
  })
  const [errors, setErrors] = useState({})
  const [originalData, setOriginalData] = useState({})

  useEffect(() => {
    if (!_id) {
      toast.error("School ID is required")
      router.push("/admin/school-list-details")
      return
    }

    const fetchSchool = async () => {
      try {
        const response = await fetch(`${API_NODE_URL}school/get-by-id?id=${_id}`, {
          credentials: "include",
        })
        const result = await response.json()

        if (result.status) {
          const school = result.data
          const schoolData = {
            name: school.name || "",
            location: school.location || "",
            description: school.description || "",
            yearEstablished: school.yearEstablished || "",
            accreditation: school.accreditation || "",
          }
          setFormData(schoolData)
          setOriginalData(schoolData)
        } else {
          toast.error(result.message || "Failed to fetch school.")
          router.push("/admin/school-list-details")
        }
      } catch (err) {
        console.error("Error: ", err)
        toast.error("An error occurred while fetching school data.")
        router.push("/admin/school-list-details")
      } finally {
        setIsLoading(false)
      }
    }

    fetchSchool()
  }, [_id, router])
  const handleShortDescChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      description: value || "",
    }))
  }
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "School name is required"
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required"
    }

    if (!formData.yearEstablished) {
      newErrors.yearEstablished = "Year established is required"
    } else if (formData.yearEstablished < 1800 || formData.yearEstablished > new Date().getFullYear()) {
      newErrors.yearEstablished = "Please enter a valid year"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
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

  const hasChanges = () => {
    return JSON.stringify(formData) !== JSON.stringify(originalData)
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
      const response = await fetch(`${API_NODE_URL}school/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...formData, _id }),
      })

      const result = await response.json()

      if (result.status) {
        toast.success("School updated successfully!")
        setTimeout(() => {
          router.push("/admin/school-list-details")
        }, 2000)
      } else {
        toast.error(result.message || "Failed to update school.")
      }
    } catch (err) {
      console.error("Error: ", err)
      toast.error("An error occurred while processing your request.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const formFields = [
    {
      label: "School Name",
      name: "name",
      type: "text",
      required: true,
      placeholder: "Enter the full name of the school",
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
    {
      label: "Location",
      name: "location",
      type: "text",
      required: true,
      placeholder: "City, State/Province, Country",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: "Year Established",
      name: "yearEstablished",
      type: "number",
      required: true,
      placeholder: "e.g., 1995",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z"
          />
        </svg>
      ),
    },
    {
      label: "Accreditation",
      name: "accreditation",
      type: "text",
      required: false,
      placeholder: "e.g., NAAC A+, AICTE Approved",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
          <span className="text-gray-600 font-medium">Loading school data...</span>
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
              <h1 className="text-3xl font-bold text-white mb-2">Edit School</h1>
              <p className="text-blue-100">Update educational institution information</p>
            </div>
          </div>
          <button
            onClick={() => router.push("/admin/school-list-details")}
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to List</span>
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">School Information</h2>
                <p className="text-gray-600">Update the school details below</p>
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
                      min={field.type === "number" ? "1800" : undefined}
                      max={field.type === "number" ? new Date().getFullYear() : undefined}
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

              {/* Description Field - Full Width */}
              {/* Description Field - Full Width */}
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
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.push("/admin/school-list-details")}
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
                    <span>Updating School...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Update School</span>
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

export default EditSchool
