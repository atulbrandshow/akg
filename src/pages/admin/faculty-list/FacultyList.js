"use client"
import { useEffect, useState } from "react"
import { API_NODE_URL } from "@/configs/config"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

const FacultyList = () => {
  const router = useRouter()
  const [facultyList, setFacultyList] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [deleteLoading, setDeleteLoading] = useState(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_NODE_URL}faculty/list`, {
        credentials: "include",
      })
      const data = await response.json()
      setFacultyList(data.data || [])
    } catch (error) {
      console.error("Error fetching faculty:", error)
      toast.error("Failed to fetch faculty list")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (faculty) => {
    if (!window.confirm(`Are you sure you want to delete ${faculty.firstName} ${faculty.lastName}?`)) {
      return
    }

    try {
      setDeleteLoading(faculty._id)
      const response = await fetch(`${API_NODE_URL}faculty/delete?_id=${faculty._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
      const data = await response.json()

      if (data.status) {
        toast.success("Faculty deleted successfully!")
        fetchData()
      } else {
        toast.error("Failed to delete faculty.")
      }
    } catch (error) {
      console.error("Error deleting faculty:", error)
      toast.error("Failed to delete faculty.")
    } finally {
      setDeleteLoading(null)
    }
  }

  // Filter faculty based on search term
  const filteredFaculty = facultyList.filter(
    (faculty) =>
      `${faculty.firstName} ${faculty.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.designation?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredFaculty.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredFaculty.length / itemsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center space-x-4">
          <svg
            className="animate-spin h-8 w-8 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="text-gray-700 font-novaSemi">Loading faculty list...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="">
      <div className="">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-novaBold text-gray-900">Faculty Management</h1>
                <p className="text-gray-600 text-sm font-novaReg">Manage all faculty members in the system</p>
              </div>
            </div>
            <button
              onClick={() => router.push("/admin/create-faculty")}
              className="bg-gradient-to-r from-blue-600 font-novaSemi to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-novaSemi flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add New Faculty</span>
            </button>
          </div>
        </div>

        {/* Search and Stats */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search faculty by name, email, or designation..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                className="block w-full pl-10 pr-3 py-3 border font-novaReg border-gray-300 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
              />
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2 font-novaSemi">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Total Faculty: {facultyList.length}</span>
              </div>
              <div className="flex items-center space-x-2 font-novaSemi">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Showing: {filteredFaculty.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                    Faculty Member
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                    Academic Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.length > 0 ? (
                  currentItems.map((faculty) => (
                    <tr key={faculty._id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-lg">
                              {faculty.firstName?.charAt(0)}
                              {faculty.lastName?.charAt(0)}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-novaSemi text-gray-900">
                              {faculty.firstName} {faculty.lastName}
                            </div>
                            <div className="text-sm font-novaSemi text-gray-500">{faculty.designation}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600 font-novaSemi">{faculty.email}</div>
                        <div className="text-sm text-gray-700 font-novaSemi">{faculty.phoneNumber || "N/A"}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {faculty.subjectsTaught ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-novaSemi bg-blue-100 text-blue-800">
                              {faculty.subjectsTaught.length > 30
                                ? `${faculty.subjectsTaught.substring(0, 30)}...`
                                : faculty.subjectsTaught}
                            </span>
                          ) : (
                            <span className="text-gray-400">No subjects listed</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {faculty.dateOfBirth ? new Date(faculty.dateOfBirth).toLocaleDateString() : "N/A"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-novaSemi ${
                            faculty.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                              faculty.status ? "bg-green-400" : "bg-red-400"
                            }`}
                          ></div>
                          {faculty.status ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-novaSemi">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => router.push(`/admin/edit-faculty?_id=${faculty._id}`)}
                            className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-2 rounded-lg transition-colors duration-150 flex items-center space-x-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(faculty)}
                            disabled={deleteLoading === faculty._id}
                            className="bg-red-100 text-red-700 hover:bg-red-200 px-3 py-2 rounded-lg transition-colors duration-150 flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {deleteLoading === faculty._id ? (
                              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
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
                            ) : (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            )}
                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center">
                        <svg
                          className="w-12 h-12 text-gray-400 mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <h3 className="text-lg font-novaSemi text-gray-900 mb-2">No faculty members found</h3>
                        <p className="text-gray-500 mb-4">
                          {searchTerm
                            ? "Try adjusting your search criteria"
                            : "Get started by adding your first faculty member"}
                        </p>
                        {!searchTerm && (
                          <button
                            onClick={() => router.push("/admin/create-faculty")}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-novaSemi flex items-center space-x-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                            <span>Add First Faculty</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredFaculty.length)} of{" "}
                  {filteredFaculty.length} results
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-sm font-novaSemi text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
                  >
                    Previous
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => paginate(pageNumber)}
                          className={`px-3 py-2 text-sm font-novaSemi rounded-lg transition-colors duration-150 ${
                            currentPage === pageNumber
                              ? "bg-blue-600 text-white"
                              : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {pageNumber}
                        </button>
                      )
                    } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                      return (
                        <span key={pageNumber} className="px-2 text-gray-400">
                          ...
                        </span>
                      )
                    }
                    return null
                  })}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-sm font-novaSemi text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FacultyList
