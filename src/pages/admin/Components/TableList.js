"use client"
import { useEffect, useState } from "react"
import { API_NODE_URL } from "@/configs/config"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Boxes, Plus, View } from "lucide-react"
import Link from "next/link"

const TableList = ({ type, title, subTitle }) => {
    const router = useRouter()
    const [newsAndEvents, setNewsAndEvents] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)
    const [searchTerm, setSearchTerm] = useState("")
    const [filterType, setFilterType] = useState("All")
    const [sortBy, setSortBy] = useState("date")
    const [sortOrder, setSortOrder] = useState("desc")

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${API_NODE_URL}slug/getbytype?type=${type}`, {
                credentials: "include",
            })
            const data = await response.json()
            const fetchedData = data.data || [];

            // Separate HomePage items first
            const homePageItems = fetchedData.filter(item => item.ComponentType === "HomePage");

            // Then, separate the rest (non-HomePage)
            const otherItems = fetchedData.filter(item => item.ComponentType !== "HomePage");

            const parentItems = otherItems.filter(item => item.parent_id === 0);
            const childItems = otherItems
                .filter(item => item.parent_id !== 0)
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // or 'updatedAt'

            // Merge HomePage items first, then parent items, then children
            const sortedData = [...homePageItems, ...parentItems, ...childItems];

            setNewsAndEvents(sortedData);
            setFilteredData(sortedData);
        } catch (error) {
            console.error("Error fetching news and events:", error)
            toast.error("Failed to fetch data")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // Filter and search functionality
    useEffect(() => {
        let filtered = newsAndEvents

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(
                (item) =>
                    item.name?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
                    item.shortdesc?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
                    item.type?.toLowerCase().includes(searchTerm?.toLowerCase()),
            )
        }

        // Filter by type
        if (filterType !== "All") {
            filtered = filtered.filter((item) => item.type === filterType)
        }

        // Sort data
        filtered.sort((a, b) => {
            let aValue = a[sortBy]
            let bValue = b[sortBy]

            if (sortBy === "date") {
                aValue = new Date(aValue)
                bValue = new Date(bValue)
            } else if (typeof aValue === "string") {
                aValue = aValue?.toLowerCase()
                bValue = bValue?.toLowerCase()
            }

            if (sortOrder === "asc") {
                return aValue > bValue ? 1 : -1
            } else {
                return aValue < bValue ? 1 : -1
            }
        })

        setFilteredData(filtered)
    }, [searchTerm, filterType, sortBy, sortOrder])

    const handleDelete = async (event) => {
        if (!window.confirm("Are you sure you want to delete this page?")) {
            return
        }

        try {
            setProgress(0)
            requestAnimationFrame(() => {
                setProgress(100)
            })

            const response = await fetch(`${API_NODE_URL}slug/update`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    page_id: event.page_id,
                    name: event.name,
                    status: false,
                    deleteflag: true,
                }),
            })

            const data = await response.json()
            if (data.status) {
                toast.success("Page deleted successfully!")
                fetchData()
            } else {
                toast.error(data.message || "Failed to delete page.")
            }
        } catch (error) {
            console.error("Error deleting event:", error)
            toast.error("Failed to delete page.")
        } finally {
            setProgress(0)
        }
    }


    const getStatusColor = (status) => {
        return status ? "bg-green-100 text-green-800 border-green-200" : "bg-red-100 text-red-800 border-red-200"
    }

    const uniqueTypes = ["All", ...new Set(newsAndEvents.map((item) => item.type))]
    const formatDate = (dateString) => {
        if (!dateString) return "N/A"
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }
    return (
        <div className="">
            {/* Progress bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 transition-all duration-500 ease-out"
                style={{
                    width: `${progress}%`,
                    opacity: progress > 0 ? 1 : 0,
                }}
            />

            <div>
                {/* Header */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-2xl font-novaBold text-gray-900">{title}</h1>
                                <p className="text-gray-600 text-sm font-novaReg">{subTitle}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500 font-novaReg">Total {type}s</p>
                            <p className="text-2xl font-novaBold text-gray-900">{newsAndEvents.length}</p>
                        </div>
                    </div>

                    {/* Search and Filter Controls */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="relative">
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
                            <input
                                type="text"
                                placeholder={`Search ${type?.toLowerCase()}.....`}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-10 pr-3 py-2 border font-novaReg border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        {/* Type Filter */}
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                            {uniqueTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>

                        {/* Sort By */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                            <option value="date">Sort by Date</option>
                            <option value="name">Sort by Name</option>
                            <option value="type">Sort by Type</option>
                        </select>

                        {/* Sort Order */}
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                            <option value="desc">Descending</option>
                            <option value="asc">Ascending</option>
                        </select>
                    </div>
                </div>

                {/* Results Info */}
                <div className="mb-4 flex justify-between items-center px-2">
                    <p className="text-sm text-gray-600 font-novaSemi">
                        Showing {filteredData.length} of {newsAndEvents.length} {type}s
                        {searchTerm && (
                            <span className="ml-2">
                                for "<span className="font-medium text-gray-900">{searchTerm}</span>"
                            </span>
                        )}
                    </p>
                    <Link href={`create-${type?.toLowerCase()}`} className="flex gap-1 items-center bg-gradient-to-r from-purple-500 font-novaSemi to-pink-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                        <Plus size={18} />
                        Add {type}</Link>
                </div>

                {/* Table Container */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                            <p className="text-gray-600">Loading pages...</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-700 uppercase tracking-wider">
                                            {type} Details
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-700 uppercase tracking-wider">
                                            Component
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-700 uppercase tracking-wider">
                                            Path & Id
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-700 uppercase tracking-wider">
                                            Author & Date
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-novaSemi text-gray-700 uppercase tracking-wider">
                                            Status
                                        </th>
                                        {
                                            type !== "Faculty" &&
                                            <th className="px-6 py-4 text-center text-xs font-novaSemi text-gray-700 uppercase tracking-wider">
                                                Extra Component Data
                                            </th>
                                        }
                                        <th className="px-6 py-4 text-center text-xs font-novaSemi text-gray-700 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredData.length > 0 ? (
                                        filteredData.map((event, index) => (
                                            <tr
                                                key={event._id}
                                                className={`transition-colors duration-150`}
                                            >
                                                <td className="px-2 py-4">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-novaSemi text-gray-900 line-clamp-2">{event.name}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col space-y-1">
                                                        {event.ComponentType && (
                                                            <span className="text-sm font-novaBold flex gap-1 items-center w-fit text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                                                <Boxes size={15} />
                                                                {event.ComponentType}
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col space-y-1">
                                                        <Link target="_blank" href={event.path} className="text-xs text-nowrap flex gap-1 items-center w-fit bg-blue-100 px-2 py-1 rounded text-gray-800 font-novaSemi hover:bg-gray-200 ">
                                                            <View size={14} />
                                                            View Page
                                                        </Link>
                                                        <span className="text-xs font-novaSemi text-gray-500">ID: {event.page_id}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col space-y-1">
                                                        <span className="text-sm font-novaSemi text-gray-900">{event.addedby || "Unknown"}</span>
                                                        <span className="text-xs text-gray-500 font-novaSemi">{formatDate(event.addedon)}</span>
                                                        {event.editedby && (
                                                            <span className="text-xs text-orange-600 font-novaSemi">
                                                                Edited by {event.editedby} on {formatDate(event.editedon)}
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-novaSemi border ${getStatusColor(
                                                            event.status,
                                                        )}`}
                                                    >
                                                        {event.status ? "Active" : "Inactive"}
                                                    </span>
                                                </td>
                                                {
                                                    type !== "Faculty" &&
                                                    <td className="px-6 py-4 whitespace-nowrap h-full">
                                                        <div className="flex justify-center items-center">
                                                            <button
                                                                onClick={() =>
                                                                    router.push({
                                                                        pathname: '/admin/extra-components',
                                                                        query: { page_id: event.page_id }, // or whatever your page_id variable is
                                                                    })
                                                                }
                                                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-novaSemi rounded-md text-white bg-violet-500 hover:bg-violet-600 focus:outline-none transition-all duration-200 transform hover:scale-105"
                                                                title="Manage Page"
                                                            >
                                                                Manage
                                                            </button>
                                                        </div>
                                                    </td>
                                                }
                                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                                    <div className="flex items-center justify-center space-x-2">
                                                        {
                                                            (type === "Program" || type === "School" || type === "Department" || event.ComponentType === "HomePage") &&
                                                            <button
                                                                onClick={() => router.push(
                                                                    `/admin/page-content-manager` +
                                                                    `?page_id=${event?.page_id}`
                                                                )}
                                                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-novaSemi rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-105"
                                                                title={`Add ${type} Data`}
                                                            >
                                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M12 4v16m8-8H4"
                                                                    />
                                                                </svg>

                                                                Add {type} Data
                                                            </button>
                                                        }
                                                        <button
                                                            onClick={() => router.push(
                                                                `/admin/add-faq` +
                                                                `?page_id=${event?.page_id}`
                                                            )}
                                                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-novaSemi rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-200 transform hover:scale-105"
                                                            title="FAQ"
                                                        >
                                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                />
                                                            </svg>
                                                            FAQ
                                                        </button>

                                                        <button
                                                            onClick={() => router.push(
                                                                `/admin/edit-${type?.toLowerCase().replace(/\s+/g, '-')}` +
                                                                `?page_id=${event?.page_id}`
                                                            )}
                                                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-novaSemi rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105"
                                                            title="Edit Page"
                                                        >
                                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                />
                                                            </svg>
                                                            Edit
                                                        </button>

                                                        {/* Edit Path Button */}
                                                        <button
                                                            onClick={() => router.push(`/admin/edit-path/${event?.page_id}`)}
                                                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-novaSemi rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-105"
                                                            title="Edit Path"
                                                        >
                                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                                                />
                                                            </svg>
                                                            Edit Path
                                                        </button>

                                                        {/* Delete Button */}
                                                        {/* <button
                              onClick={() => handleDelete(event)}
                              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 transform hover:scale-105"
                              title="Delete Page"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                              Delete
                            </button> */}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="px-6 py-12 text-center">
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
                                                            strokeWidth={2}
                                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                        />
                                                    </svg>
                                                    <h3 className="text-lg font-medium text-gray-900 mb-2">No {type} found</h3>
                                                    <p className="text-gray-500">
                                                        {searchTerm
                                                            ? "Try adjusting your search criteria"
                                                            : "Get started by creating your first page"}
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TableList
