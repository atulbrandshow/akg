"use client"
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const FacultyTable = () => {
    const router = useRouter();
    const [facultyData, setFacultyData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetchFacultyData()
    }, [])

    const fetchFacultyData = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${API_NODE_URL}slug/getbytype?type=Faculty`, {
                credentials: "include",
            })

            const data = await response.json();
            if (data.status) {
                setFacultyData(data?.data)
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const filteredFaculty = facultyData?.filter(
        (faculty) =>
            faculty.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faculty.tag1?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faculty.tag2?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faculty.param5?.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    if (loading) {
        return (
            <div className="w-full">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <span className="ml-3 text-gray-600">Loading faculty data...</span>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full">
                <div className="bg-white rounded-xl shadow-sm border border-red-200 p-8">
                    <div className="text-center">
                        <div className="text-red-600 mb-2">⚠️ Error</div>
                        <p className="text-gray-600">{error}</p>
                        <button
                            onClick={fetchFacultyData}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full space-y-6">
            {/* Header Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Faculty Directory</h1>
                        <p className="text-gray-600 mt-1">Manage and view faculty information</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search faculty..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-64"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium">
                            {filteredFaculty.length} Faculty
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Faculty
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Position
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    School
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Department
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredFaculty.map((faculty, index) => (
                                <tr
                                    key={faculty.page_id || index}
                                    className="hover:bg-gray-50 transition-colors duration-150 animate-fade-in"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                {faculty.banner_img ? (
                                                    <div className="h-12 w-12 rounded-full overflow-hidden">
                                                        <Image src={IMAGE_PATH + faculty?.banner_img} height={100} width={100} alt={faculty?.name} className="w-full h-full object-cover object-top" /> 
                                                    </div>
                                                ) : (
                                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg shadow-md">
                                                    {faculty.name ? faculty.name.charAt(0).toUpperCase() : "F"}
                                                </div>
                                                )}
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-gray-900">{faculty.name || "N/A"}</div>
                                                <div className="text-sm text-gray-500">ID: {faculty.page_id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">{faculty.param5 || "Not specified"}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">{faculty.tag1 || "N/A"}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">{faculty.tag2 || "N/A"}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${faculty.status
                                                ? "bg-green-100 text-green-800 hover:bg-green-200"
                                                : "bg-red-100 text-red-800 hover:bg-red-200"
                                                }`}
                                        >
                                            <div
                                                className={`w-1.5 h-1.5 rounded-full mr-1.5 ${faculty.status ? "bg-green-400" : "bg-red-400"}`}
                                            ></div>
                                            {faculty.status ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => router.push(
                                                    `/admin/edit-faculty` +
                                                    `?page_id=${faculty?.page_id}`
                                                )}
                                                className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 group">
                                                <svg
                                                    className="h-4 w-4 group-hover:scale-110 transition-transform duration-200"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                </svg>
                                            </button>
                                            {/* <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group">
                                                <svg
                                                    className="h-4 w-4 group-hover:scale-110 transition-transform duration-200"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button> */}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            {filteredFaculty.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                        <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No faculty found</h3>
                    <p className="text-gray-500">Try adjusting your search criteria</p>
                </div>
            )}
        </div>
        </div >
    )
}

export default FacultyTable
