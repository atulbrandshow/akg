"use client"
import { useRef, useState } from "react"
import { createPortal } from "react-dom"
import { API_NODE_URL } from "@/configs/config"
import Button from "./Button"
import Link from "next/link"
import { X } from "lucide-react"

const programData = [
  {
    discipline: "B.Tech",
    programs: [
      "B.Tech Computer Science and Engineering",
      "B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
      "B.Tech Computer Science and Engineering (Data Science)",
      "B.Tech Computer Science",
      "B.Tech Computer Science and Engineering (Hindi)",
      "B.Tech Artificial Intelligence & Machine Learning",
      "B.Tech Information Technology",
      "B.Tech Computer Science and Information Technology",
      "B.Tech Electronics and Communication Engineering",
      "B.Tech Mechanical Engineering",
      "B.Tech Electrical and Electronics Engineering",
      "B.Tech Civil Engineering",
    ],
  },
  {
    discipline: "M.Tech",
    programs: [
      "M.Tech Computer Science and Engineering",
      "M.Tech Electrical and Electronics Engineering",
      "M.Tech Electronics and Communication Engineering",
      "M.Tech Mechanical Engineering",
    ],
  },
  {
    discipline: "Master of Computer Applications (MCA)",
    programs: ["MCA"],
  },
]

export default function Form({ setIsModalOpen }) {
  const modalRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    discipline: "",
    program: "",
    day: "",
    month: "",
    year: "",
  })

  const [programs, setPrograms] = useState([])
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleDisciplineChange = (e) => {
    const selected = e.target.value
    setFormData((prev) => ({
      ...prev,
      discipline: selected,
      program: "", // Reset program when discipline changes
    }))

    const selectedPrograms = programData.find((p) => p.discipline === selected)?.programs || []
    setPrograms(selectedPrograms)

    if (errors.discipline) {
      setErrors((prev) => ({
        ...prev,
        discipline: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long"
    }

    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number"
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = "City is required"
    }

    // Discipline validation
    if (!formData.discipline) {
      newErrors.discipline = "Please select a discipline"
    }

    // Program validation
    if (!formData.program) {
      newErrors.program = "Please select a program"
    }

    // Date validation
    if (!formData.day) {
      newErrors.day = "Day is required"
    }
    if (!formData.month) {
      newErrors.month = "Month is required"
    }
    if (!formData.year) {
      newErrors.year = "Year is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(`${API_NODE_URL}applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message,
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          mobile: "",
          city: "",
          discipline: "",
          program: "",
          day: "",
          month: "",
          year: "",
        })
        setPrograms([])
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        })

        // Handle validation errors from backend
        if (data.errors) {
          const backendErrors = {}
          data.errors.forEach((error) => {
            // Map backend error messages to form fields
            if (error.includes("Name")) backendErrors.name = error
            if (error.includes("Email")) backendErrors.email = error
            if (error.includes("Mobile")) backendErrors.mobile = error
            if (error.includes("City")) backendErrors.city = error
            if (error.includes("Discipline")) backendErrors.discipline = error
            if (error.includes("Program")) backendErrors.program = error
          })
          setErrors(backendErrors)
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false)
    }
  }

  return createPortal (
    <div  onClick={handleBackdropClick} className="fixed inset-0 flex items-center justify-center h-full pb-4 md:pt-20 backdrop-blur-md bg-black/60 z-[999999] px-2">
      <div ref={modalRef} className="relative bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden mt-10">
        <div className="bg-gray-100 flex flex-col justify-center items-center px-8 py-6 max-sm:py-6">
          <h2 className="text-sm bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent font-novaBold tracking-wider text-center">
            APPLY TODAY FOR
          </h2>
          <h1 className="mt-3 font-novaBold text-center text-xl max-sm:text-base">AKG UNIVERSITY PROGRAMS</h1>
          <p className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center font-novaBold mb-6 max-sm:mb-0 text-xs w-max py-2 px-4 max-sm:px-2 max-sm:py-1.5 rounded-lg mt-2">
            Registration End Date (Phase-II) - 30 Aug 2024
          </p>
        </div>
        <div className="absolute top-3 right-3 cursor-pointer text-gray-600 hover:text-gray-900" onClick={() => setIsModalOpen(false)}>
          <X />
        </div>

        {/* Status Messages */}
        {submitStatus && (
          <div
            className={`mx-6 mt-4 p-3 rounded-md text-sm ${submitStatus.type === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
              }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form className="p-6 max-sm:p-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 max-sm:px-2 py-3 max-sm:py-2 border font-novaReg placeholder:text-gray-600 placeholder:text-[13px] rounded-md text-xs ${errors.name ? "border-red-500" : "border-gray-500"
                  }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 max-sm:px-2 py-3 max-sm:py-2 border font-novaReg placeholder:text-gray-600 placeholder:text-[13px] rounded-md text-xs ${errors.email ? "border-red-500" : "border-gray-500"
                  }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter Mobile No"
                value={formData.mobile}
                onChange={handleInputChange}
                className={`w-full px-4 max-sm:px-2 py-3 max-sm:py-2 border font-novaReg placeholder:text-gray-600 placeholder:text-[13px] rounded-md text-xs ${errors.mobile ? "border-red-500" : "border-gray-500"
                  }`}
              />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>
            <div>
              <input
                type="text"
                name="city"
                placeholder="Type your City"
                value={formData.city}
                onChange={handleInputChange}
                className={`w-full px-4 max-sm:px-2 py-3 max-sm:py-2 border font-novaReg placeholder:text-gray-600 placeholder:text-[13px] rounded-md text-xs ${errors.city ? "border-red-500" : "border-gray-500"
                  }`}
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <select
                name="discipline"
                className={`w-full px-4 max-sm:px-1 py-3 max-sm:py-1.5 font-novaReg border rounded-md text-xs ${errors.discipline ? "border-red-500" : "border-gray-500"
                  }`}
                value={formData.discipline}
                onChange={handleDisciplineChange}
              >
                <option value="">Select Discipline</option>
                {programData?.map((item, index) => (
                  <option key={index} value={item.discipline}>
                    {item.discipline}
                  </option>
                ))}
              </select>
              {errors.discipline && <p className="text-red-500 text-xs mt-1">{errors.discipline}</p>}
            </div>
            <div>
              <select
                name="program"
                className={`w-full px-4 max-sm:px-1 py-3 max-sm:py-1.5 font-novaReg border rounded-md text-xs ${errors.program ? "border-red-500" : "border-gray-500"
                  }`}
                value={formData.program}
                onChange={handleInputChange}
              >
                <option value="">Select Program</option>
                {programs?.map((program, index) => (
                  <option key={index} value={program}>
                    {program}
                  </option>
                ))}
              </select>
              {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <select
                name="day"
                className={`w-full px-4 max-sm:px-1 py-3 max-sm:py-1.5 border rounded-md text-xs ${errors.day ? "border-red-500" : "border-gray-500"
                  }`}
                value={formData.day}
                onChange={handleInputChange}
              >
                <option value="">DD</option>
                {[...Array(31)]?.map((_, i) => (
                  <option key={i} value={String(i + 1).padStart(2, "0")}>
                    {String(i + 1).padStart(2, "0")}
                  </option>
                ))}
              </select>
              {errors.day && <p className="text-red-500 text-xs mt-1">{errors.day}</p>}
            </div>
            <div>
              <select
                name="month"
                className={`w-full px-4 max-sm:px-1 py-3 max-sm:py-1.5 border rounded-md text-xs ${errors.month ? "border-red-500" : "border-gray-500"
                  }`}
                value={formData.month}
                onChange={handleInputChange}
              >
                <option value="">MM</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ]?.map((month, i) => (
                  <option key={i} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              {errors.month && <p className="text-red-500 text-xs mt-1">{errors.month}</p>}
            </div>
            <div>
              <select
                name="year"
                className={`w-full px-4 max-sm:px-1 py-3 max-sm:py-1.5 border rounded-md text-xs ${errors.year ? "border-red-500" : "border-gray-500"
                  }`}
                value={formData.year}
                onChange={handleInputChange}
              >
                <option value="">YYYY</option>
                {Array.from({ length: 50 }, (_, i) => 2024 - i)?.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year}</p>}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Button
              text={isSubmitting ? "SUBMITTING..." : "REGISTER NOW"}
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-novaBold py-4 px-12 max-sm:px-6 max-sm:py-3 text-xs rounded-md"
            />
            <Link href="#" className="text-xs max-[350px]:text-[11px] text-right font-novaBold text-gray-600 underline">
              ALREADY REGISTERED
            </Link>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}
