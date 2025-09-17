"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import {
  Home,
  Users,
  LogOut,
} from "lucide-react"
import { API_NODE_URL } from "@/configs/config"
import Image from "next/image"
import usePermission from "@/hooks/usePermission"
import { menuItems, submodules } from '../../../configs/sidebarMenu'

export default function SideBar({ onLogout }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const { hasPermission, isSuperAdmin, permissions, loading, adminData } = usePermission()
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (adminData) {
      setUser(adminData)
    }
  }, [adminData])

  const isActive = (href) => pathname === `/${href}`

  const handleLogout = async () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token").replaceAll(`"`, "") : "";
    try {
      const res = await fetch(`${API_NODE_URL}admin/logOut`, {
        method: "GET",
        credentials: "include",
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json();

      if (data.status) {
        localStorage.removeItem("admin_token")
        localStorage.removeItem("admin_role")
        localStorage.removeItem("Admin")
        localStorage.removeItem("userData")
        router.push("/")
      } else {
        alert(data.message || "Logout failed")
      }
    } catch (err) {
      console.log(err);
      alert("Logout failed")
    }
  }

  // Filter menu items based on permissions
  const filteredMenuItems =menuItems.filter(item => {
    if (isSuperAdmin) return true
    if (!item.permission) return true
    return hasPermission(item.permission, "view")
  })

  return (
    <div className={`flex flex-col h-screen bg-gray-800 text-white transition-all duration-300 ${isOpen ? "w-80" : "w-20"}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className={`flex items-center space-x-3 ${isOpen ? "block" : "hidden"}`}>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
            <Image src="/image/akgec-logo.webp" className="rounded-full" height={60} width={60} alt="AKG Logo" />
          </div>
          <div>
            <h1 className="text-xl font-novaBold whitespace-nowrap">Admin Panel</h1>
            <p className="text-xs text-gray-400 font-novaReg">Management System</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors"
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" : "M13 5l7 7-7 7M5 5l7 7-7 7"}
            />
          </svg>
        </button>
      </div>

      {/* User Info */}
      {isOpen && (
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-novaSemi text-sm">
                {user?.name?.charAt(0) || user?.email?.charAt(0) || "A"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-novaSemi text-white truncate">{user?.name || "Admin User"}</p>
              <p className="text-xs text-gray-400 truncate">{user?.email || "admin@akg.edu"}</p>
              <p className="text-xs text-gray-400 truncate">{user?.role || "Administrator"}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="p-4 space-y-1">
          {loading ? (
            <p className="text-gray-400 text-sm">Loading menu...</p>
          ) : permissions.length === 0 && !isSuperAdmin ? (
            <p className="text-red-400 text-sm">You have no access.</p>
          ) : (
            filteredMenuItems.map((item, index) => (
              <Link
                key={index}
                href={`/${item.href}`}
                title={item?.name}
                className={`p-3 flex items-center rounded-lg transition-colors duration-200 ${isActive(item.href) ? "bg-blue-600 text-white shadow-lg" : "hover:bg-gray-700 text-gray-300"}`}
              >
                {item.icon}
                <span className={`${isOpen ? "block ml-3" : "hidden"} font-novaSemi text-sm`}>{item.name}</span>
              </Link>
            ))
          )}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex items-center p-3 font-novaSemi rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-300 hover:text-white"
            >
              <Home className={`w-5 h-5 ${isOpen ? "mr-3" : ""}`} />
              <span className={isOpen ? "block" : "hidden"}>Home</span>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-3 font-novaSemi rounded-lg hover:bg-red-600 transition-colors duration-200 text-gray-300 hover:text-white"
            >
              <LogOut className={`w-5 h-5 ${isOpen ? "mr-3" : ""}`} />
              <span className={isOpen ? "block" : "hidden"}>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
