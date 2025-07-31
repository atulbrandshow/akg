"use client"

import { useState, useEffect } from "react"
import { API_NODE_URL } from "@/configs/config"

const ApplicationTable = ({ showHeader = true }) => {
    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [sortField, setSortField] = useState("createdAt")
    const [sortDirection, setSortDirection] = useState("desc")

    const fetchApplications = async () => {
        try {
            setLoading(true)
            const res = await fetch(`${API_NODE_URL}applications`, {
                credentials: "include",
            })
            const data = await res.json()
            console.log(data)
            setApplications(data.data || [])
        } catch (error) {
            console.error("Error fetching applications:", error)
            setError("Failed to fetch applications")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchApplications()
    }, [])

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case "approved":
                return "bg-emerald-100 text-emerald-700 border-emerald-200"
            case "rejected":
                return "bg-red-100 text-red-700 border-red-200"
            case "pending":
                return "bg-amber-100 text-amber-700 border-amber-200"
            case "under review":
                return "bg-blue-100 text-blue-700 border-blue-200"
            default:
                return "bg-gray-100 text-gray-700 border-gray-200"
        }
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
    }

    const formatDateOfBirth = (dob) => {
        if (dob && dob.day && dob.month && dob.year) {
            return `${dob.day} ${dob.month}, ${dob.year}`
        }
        return "N/A"
    }

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
        } else {
            setSortField(field)
            setSortDirection("asc")
        }
    }

    const sortedApplications = [...applications].sort((a, b) => {
        let aValue = a[sortField]
        let bValue = b[sortField]

        if (sortField === "createdAt" || sortField === "updatedAt") {
            aValue = new Date(aValue)
            bValue = new Date(bValue)
        }

        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
        return 0
    })

    if (loading) {
        return (
            <div className="flex bg-gray-50 min-h-screen">
                <div className="flex-1 pt-10 px-10">
                    <div className="animate-fade-in">
                        <div className="mb-8">
                            <div className="h-8 bg-gray-200 rounded-lg w-64 animate-pulse mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-center h-64">
                                    <div className="flex items-center space-x-3">
                                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
                                        <span className="text-gray-600 font-novaReg">Loading applications...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex bg-gray-50 min-h-screen">
                <div className="flex-1 pt-10 px-10">
                    <div className="animate-fade-in">
                        <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-novaSemi text-gray-900 mb-2">Something went wrong</h3>
                            <p className="text-gray-600 mb-6">{error}</p>
                            <button
                                onClick={fetchApplications}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="animate-fade-in">
            {/* Header Section */}
            {showHeader && (
                <div className="bg-gradient-to-l from-purple-500 to-indigo-600 p-4 rounded-xl mb-8">
                    <div className="flex items-center justify-between">
                        <div className="animate-slide-in-left">
                            <h1 className="text-3xl font-novaBold text-white mb-1">Online Applications</h1>
                            <p className="text-gray-300 font-novaReg">Manage and review student applications</p>
                        </div>
                        <div className="flex items-center space-x-4 animate-slide-in-right">
                            <div className="bg-white flex items-center gap-2 px-5 py-2 rounded-xl shadow-sm border hover:shadow-md transition-all duration-200">
                                <span className="text-sm text-gray-500 block font-novaReg">Total Applications</span>
                                <div className="text-2xl font-novaBold text-blue-600">{applications.length}</div>
                            </div>
                            <button
                                onClick={fetchApplications}
                                className="px-4 py-2 bg-yellow-500 text-white font-novaSemi rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center space-x-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                </svg>
                                <span>Refresh</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Table Section */}
            {applications.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border p-12 text-center animate-fade-in">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-lg font-novaSemi text-gray-900 mb-2">No Applications Found</h3>
                    <p className="text-gray-500">There are no applications to display at the moment.</p>
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden animate-slide-up">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th
                                        className="px-6 py-4 text-left text-xs font-novaSemi text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                                        onClick={() => handleSort("name")}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <span>Applicant</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                                />
                                            </svg>
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-600 uppercase tracking-wider">
                                        Contact
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-600 uppercase tracking-wider">
                                        Program
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-600 uppercase tracking-wider">
                                        Date Of Birth
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-600 uppercase tracking-wider">
                                        Location
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th
                                        className="px-6 py-4 text-left text-xs font-novaSemi text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                                        onClick={() => handleSort("createdAt")}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <span>Applied Date</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                                />
                                            </svg>
                                        </div>
                                    </th>
                                    {/* <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-600 uppercase tracking-wider">
                        Actions
                      </th> */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {sortedApplications.map((application, index) => (
                                    <tr
                                        key={application._id}
                                        className="hover:bg-gray-50 transition-all duration-200 animate-fade-in-row"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-novaSemi text-sm">
                                                        {application.name?.charAt(0)?.toUpperCase()}
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-novaSemi uppercase text-gray-800">{application.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 font-novaReg">{application.email}</div>
                                            <div className="text-sm text-gray-500 flex items-center font-novaSemi">
                                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.3 10.5a11.05 11.05 0 005.2 5.2l1.113-3.924a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    />
                                                </svg>
                                                {application.mobile}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 font-novaReg">{application.program}</div>
                                            <div className="text-sm text-gray-500 font-novaSemi">{application.discipline}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500 font-novaSemi uppercase">{formatDateOfBirth(application.dateOfBirth)}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center text-sm font-novaReg text-gray-900">
                                                <svg
                                                    className="w-4 h-4 mr-1 text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                                {application.city}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-flex px-3 py-1 rounded-full text-xs font-novaSemi border transition-all duration-200 hover:scale-105 ${getStatusColor(
                                                    application.applicationStatus,
                                                )}`}
                                            >
                                                {application.applicationStatus?.charAt(0).toUpperCase() +
                                                    application.applicationStatus?.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-novaSemi text-gray-500">
                                            <div>{formatDate(application.createdAt)}</div>
                                        </td>
                                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-novaReg">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900 transition-colors duration-200 hover:scale-105 transform">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </button>
                            <button className="text-green-600 hover:text-green-900 transition-colors duration-200 hover:scale-105 transform">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            </button>
                            <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:scale-105 transform">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            <style jsx>{`
                @keyframes fade-in {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
                }

                @keyframes slide-in-left {
                from {
                    opacity: 0;
                    transform: translateX(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
                }

                @keyframes slide-in-right {
                from {
                    opacity: 0;
                    transform: translateX(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
                }

                @keyframes slide-up {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
                }

                @keyframes fade-in-row {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
                }

                .animate-fade-in {
                animation: fade-in 0.6s ease-out;
                }

                .animate-slide-in-left {
                animation: slide-in-left 0.6s ease-out;
                }

                .animate-slide-in-right {
                animation: slide-in-right 0.6s ease-out;
                }

                .animate-slide-up {
                animation: slide-up 0.6s ease-out;
                }

                .animate-fade-in-row {
                animation: fade-in-row 0.4s ease-out forwards;
                opacity: 0;
                }
      `}</style>
        </div>

    )
}

export default ApplicationTable
