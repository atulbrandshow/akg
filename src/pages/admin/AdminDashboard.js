"use client"

import { API_NODE_URL } from "@/configs/config"
import { useEffect, useState } from "react"
import {
    Megaphone,
    RotateCcw,
    Building2,
    Download,
    GraduationCap,
    Newspaper,
    FileText,
    School,
    BarChart3,
    RefreshCw,
} from "lucide-react"
import { useRouter } from "next/navigation"
import ApplicationTable from "./Components/ApplicationTable"

export default function AdminDashboard({ onAuthError }) {
    const [dashboardData, setDashboardData] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter();

    const fetchDashboardStats = async () => {
        try {
            setLoading(true)
            const apiUrl = `${API_NODE_URL}dashboardData/all`
            const res = await fetch(apiUrl, {
                credentials: "include",
            })
            if (res.status === 401) {
                onAuthError()
                return
            }
            const result = await res.json()
            setDashboardData(result)
        } catch (error) {
            console.error("ERROR: ", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDashboardStats()
    }, [])

    const getIcon = (category) => {
        const iconMap = {
            article: Megaphone,
            circular: RotateCcw,
            departments: Building2,
            event: Download,
            program: GraduationCap,
            news: Newspaper,
            pages: FileText,
            schools: School,
        }
        return iconMap[category] || BarChart3
    }

    const getCategoryName = (category) => {
        const nameMap = {
            article: "Articles",
            circular: "Circulars",
            departments: "Departments",
            event: "Events",
            program: "Programs",
            news: "News",
            pages: "Total Pages",
            schools: "Schools",
        }
        return nameMap[category] || category
    }

    if (loading) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg font-novaReg">Loading dashboard...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="">
            <div className="">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-novaBold text-gray-900 mb-2">Dashboard Overview</h1>
                            <p className="text-gray-600 font-novaReg">System statistics and analytics</p>
                        </div>
                        <button
                            onClick={fetchDashboardStats}
                            className="flex items-center font-novaSemi space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            <RefreshCw className="h-4 w-4" />
                            <span>Refresh</span>
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                    {dashboardData &&
                        Object.entries(dashboardData).map(([category, stats], index) => {
                            const IconComponent = getIcon(category)
                            const activePercentage = stats.total > 0 ? (stats.active / stats.total) * 100 : 0

                            return (
                                <div
                                    key={category}
                                    className="bg-white border border-gray-200 shadow-md rounded-2xl"
                                >
                                    <div className="p-4">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2 bg-blue-50 rounded-lg">
                                                    <IconComponent className="h-6 w-6 text-blue-600" />
                                                </div>
                                                <h3 className="text-lg font-novaSemi text-gray-900">{getCategoryName(category)}</h3>
                                            </div>
                                            <span className="text-2xl font-novaBold text-gray-900">{stats.total}</span>

                                        </div>

                                        {/* Main Stats */}
                                        <div className="space-y-4">
                                            {/* Active/Inactive Row */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="flex justify-between items-center text-center p-2 bg-green-50 rounded-lg">
                                                    <div className="flex items-center justify-center space-x-1.5">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                        <span className="text-sm font-novaSemi text-green-700">Active</span>
                                                    </div>
                                                    <span className="text-xl font-novaBold text-green-600">{stats.active}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-center p-2 bg-red-50 rounded-lg">
                                                    <div className="flex items-center justify-center space-x-1.5">
                                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                                        <span className="text-sm font-novaSemi text-red-700">Inactive</span>
                                                    </div>
                                                    <span className="text-xl font-novaBold text-red-600">{stats.inactive}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
            <ApplicationTable showHeader={false} />
        </div>
    )
}
