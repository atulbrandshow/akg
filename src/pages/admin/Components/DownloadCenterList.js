"use client"

import { API_NODE_URL } from "@/configs/config"
import { SquarePen, Trash2 } from "lucide-react"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import DownloadForm from "./DownloadForm"

const DownloadCenterList = () => {
    const [downloads, setDownloads] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [editingDownload, setEditingDownload] = useState(null)
    const [stats, setStats] = useState({})
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")

    const categories = [
        { id: "all", name: "All Categories" },
        { id: "academic", name: "Academic Resources" },
        { id: "forms", name: "Forms & Documents" },
        { id: "software", name: "Software & Tools" },
        { id: "research", name: "Research Papers" },
        { id: "student", name: "Student Resources" },
    ]

    useEffect(() => {
        fetchDownloads()
        fetchStats()
    }, [searchTerm, selectedCategory])

    const fetchDownloads = async () => {
        try {
            const params = new URLSearchParams()
            if (selectedCategory !== "all") params.append("category", selectedCategory)
            if (searchTerm) params.append("search", searchTerm)

            const response = await fetch(`${API_NODE_URL}downloads?${params}`)
            const data = await response.json()

            if (data.success) {
                setDownloads(data.data)
            }
        } catch (error) {
            console.error("Error fetching downloads:", error)
        } finally {
            setLoading(false)
        }
    }

    const fetchStats = async () => {
        try {
            const response = await fetch(`${API_NODE_URL}downloads/stats`)
            const data = await response.json()

            if (data.success) {
                setStats(data.data)
            }
        } catch (error) {
            console.error("Error fetching stats:", error)
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this download?")) {
            try {
                const response = await fetch(`${API_NODE_URL}downloads/${id}`, {
                    method: "DELETE",
                })

                const data = await response.json()

                if (data.success) {
                    fetchDownloads()
                    fetchStats()
                    toast.success("Download deleted successfully!")
                } else {
                    toast.error("Error deleting download: " + data.message)
                }
            } catch (error) {
                console.error("Error deleting download:", error)
                toast.error("Error deleting download")
            }
        }
    }

    const handleEdit = (download) => {
        setEditingDownload(download)
        setShowForm(true)
    }

    const handleFormClose = () => {
        setShowForm(false)
        setEditingDownload(null)
        fetchDownloads()
        fetchStats()
    }

    const getFileIcon = (fileType) => {
        switch (fileType) {
            case "PDF":
                return (
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                )
            case "EXE":
                return (
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                )
            default:
                return (
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                )
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-novaBold text-gray-900">Download Center Admin</h1>
                            <p className="text-gray-600 mt-1 font-novaReg">Manage university downloads and resources</p>
                        </div>
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-novaSemi transition-colors flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Download
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className=" px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-emerald-100 rounded-lg">
                                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-novaSemi text-gray-600">Total Downloads</p>
                                <p className="text-2xl font-novaBold text-gray-900">{stats.totalDownloads || 0}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                                    />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-novaSemi text-gray-600">Total Download Count</p>
                                <p className="text-2xl font-novaBold text-gray-900">{stats.totalDownloadCount || 0}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-novaSemi text-gray-600">Categories</p>
                                <p className="text-2xl font-novaBold text-gray-900">{stats.categoryStats?.length || 0}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <svg
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search downloads..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                />
                            </div>
                        </div>
                        <div className="md:w-64">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Downloads Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-novaSemi text-gray-900">Downloads ({downloads.length})</h2>
                    </div>

                    {downloads.length === 0 ? (
                        <div className="text-center py-12">
                            <svg
                                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            <h3 className="text-lg font-novaSemi text-gray-900 mb-2">No downloads found</h3>
                            <p className="text-gray-600">Get started by adding your first download.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                                            File
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                                            Size
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                                            Downloads
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-novaSemi text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {downloads.map((download) => (
                                        <tr key={download._id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    {getFileIcon(download.fileType)}
                                                    <div className="ml-4">
                                                        <div className="text-sm font-novaSemi text-gray-900">{download.title}</div>
                                                        <div className="text-sm text-gray-500">{download.description.substring(0, 60)}...</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex px-2 py-1 text-xs font-novaSemi rounded-full bg-emerald-100 text-emerald-800 capitalize">
                                                    {download.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-novaSemi text-gray-900">{download.fileSize}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-novaSemi text-gray-900">
                                                {download.downloads.toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    {download.featured && (
                                                        <span className="inline-flex px-2 py-1 text-xs font-novaSemi rounded-full bg-yellow-100 text-yellow-800">
                                                            Featured
                                                        </span>
                                                    )}
                                                    <span
                                                        className={`inline-flex px-2 py-1 text-xs font-novaSemi rounded-full ${download.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                                            }`}
                                                    >
                                                        {download.isActive ? "Active" : "Inactive"}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-novaSemi">
                                                <div className="flex items-center gap-5">
                                                    <button
                                                        onClick={() => handleEdit(download)}
                                                        className="text-emerald-600 hover:text-emerald-900"
                                                    >
                                                        <SquarePen size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(download._id)}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        <Trash2 size={18} />
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

            {/* Form Modal */}
            {showForm && <DownloadForm download={editingDownload} onClose={handleFormClose} apiUrl={API_NODE_URL} />}
        </div>
    )
}

export default DownloadCenterList
