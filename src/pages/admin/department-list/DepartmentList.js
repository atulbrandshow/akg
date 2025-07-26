"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { API_NODE_URL } from "@/configs/config"

const DepartmentList = () => {
  const router = useRouter()
  const [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState("table") // 'table' or 'grid'
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterSchool, setFilterSchool] = useState("all")
  const [schools, setSchools] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_NODE_URL}department/list`, {
        credentials: "include",
      })
      const data = await response.json()
      setDepartments(data.data || [])

      // Extract unique schools for filter
      const uniqueSchools = [...new Set(data.data?.map((dept) => dept.school?.name).filter(Boolean))]
      setSchools(uniqueSchools)
    } catch (error) {
      console.error("Error fetching departments:", error)
      toast.error("Failed to fetch department list")
      setDepartments([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (department) => {
    if (!window.confirm(`Are you sure you want to delete ${department.name}?`)) {
      return
    }

    try {
      const response = await fetch(`${API_NODE_URL}department/delete?id=${department._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })

      const data = await response.json()

      if (data.status) {
        toast.success("Department deleted successfully!")
        setDepartments((prev) => prev.filter((item) => item._id !== department._id))
      } else {
        toast.error("Failed to delete department.")
      }
    } catch (error) {
      console.error("Error deleting department:", error)
      toast.error("Failed to delete department.")
    }
  }

  // Filter departments based on search and filters
  const filteredDepartments = departments.filter((department) => {
    const matchesSearch =
      department.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.departmentCode?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.school?.name?.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "active" && department.status) ||
      (filterStatus === "inactive" && !department.status)

    const matchesSchool = filterSchool === "all" || department.school?.name === filterSchool

    return matchesSearch && matchesStatus && matchesSchool
  })

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-64">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200"></div>
        <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
      <span className="ml-3 text-gray-600 font-novaSemi">Loading departments...</span>
    </div>
  )

  const DepartmentCard = ({ department }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="p-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-novaBold text-gray-800 mr-3">{department.name}</h3>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-novaSemi rounded-full">
                {department.departmentCode}
              </span>
            </div>
            <div className="flex items-center text-gray-600 mb-3">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="text-sm font-novaReg">{department.school?.name || "No school assigned"}</span>
            </div>
          </div>
          <div
            className={`px-3 py-1 rounded-full text-xs font-novaSemi ${department.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
          >
            {department.status ? "Active" : "Inactive"}
          </div>
        </div>
        <div
          className="text-sm text-gray-500 font-novaReg truncate mb-2 max-w-xs line-clamp-2"
          dangerouslySetInnerHTML={{ __html: department.description }}
        ></div>

        {department.programsOffered && department.programsOffered.length > 0 && (
          <div className="mb-4">
            <div className="text-sm font-novaSemi text-gray-700 mb-2">Programs Offered:</div>
            <div className="flex flex-wrap gap-1">
              {department.programsOffered.slice(0, 3).map((program, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-novaSemi bg-green-100 text-green-800"
                >
                  {program}
                </span>
              ))}
              {department.programsOffered.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-novaSemi bg-gray-100 text-gray-600">
                  +{department.programsOffered.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-2 pt-4 border-t border-gray-100">
          <button
            onClick={() => router.push(`/admin/edit-department?_id=${department._id}`)}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm font-novaSemi"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit
          </button>
          <button
            onClick={() => handleDelete(department)}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm font-novaSemi"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-novaBold text-white">Department Management</h1>
              <p className="text-blue-100 font-novaReg">Manage and monitor all academic departments</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right text-white">
              <div className="text-2xl font-novaBold">{filteredDepartments.length}</div>
              <div className="text-blue-100 text-sm font-novaSemi">Total Departments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border font-novaReg border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <select
              value={filterSchool}
              onChange={(e) => setFilterSchool(e.target.value)}
              className="px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="all">All Schools</option>
              {schools.map((school) => (
                <option key={school} value={school}>
                  {school}
                </option>
              ))}
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center px-4 py-2 rounded-md transition-all font-novaSemi duration-200 ${viewMode === "table" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 6h18m-9 8h9" />
              </svg>
              Table
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center px-4 py-2 rounded-md transition-all font-novaSemi duration-200 ${viewMode === "grid" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Grid
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {loading ? (
          <LoadingSpinner />
        ) : filteredDepartments.length === 0 ? (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <h3 className="text-lg font-novaSemi text-gray-900 mb-2">No departments found</h3>
            <p className="text-gray-500 mb-4 font-novaReg">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => router.push("/admin/create-department")}
              className="inline-flex items-center px-4 py-2 font-novaSemi bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add First Department
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDepartments.map((department) => (
                <DepartmentCard key={department._id} department={department} />
              ))}
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-600 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-600 uppercase tracking-wider">
                    School
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-600 uppercase tracking-wider">
                    Programs
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-novaSemi text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDepartments.map((department) => (
                  <tr key={department._id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <div className="text-sm font-novaSemi text-gray-900 mr-2">{department.name}</div>
                            {/* <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-novaSemi rounded-full">
                              {department.departmentCode}
                            </span> */}
                          </div>
                          <div
                            className="text-sm text-gray-500 font-novaReg truncate max-w-xs line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: department.description }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-novaReg text-gray-900">{department.school?.name || "Not assigned"}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {department.programsOffered?.slice(0, 2).map((program, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-novaSemi bg-green-100 text-green-800"
                          >
                            {program}
                          </span>
                        ))}
                        {department.programsOffered?.length > 2 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-novaSemi bg-gray-100 text-gray-600">
                            +{department.programsOffered.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-novaSemi ${department.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-1.5 ${department.status ? "bg-green-400" : "bg-red-400"
                            }`}
                        ></span>
                        {department.status ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => router.push(`/admin/edit-department?_id=${department._id}`)}
                          className="inline-flex items-center px-3 py-1.5 bg-blue-500 text-white text-xs font-novaSemi rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(department)}
                          className="inline-flex items-center px-3 py-1.5 bg-red-500 text-white text-xs font-novaSemi rounded-lg hover:bg-red-600 transition-colors duration-200"
                        >
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Delete
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
  )
}

export default DepartmentList
