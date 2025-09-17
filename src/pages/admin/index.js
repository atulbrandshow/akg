"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { API_NODE_URL } from "@/configs/config"
import { adminLogin } from "@/utils/api"
import { menuItems, submodules } from '@/configs/sidebarMenu'
import { Eye, EyeOff, Lock, Mail, AlertCircle, CheckCircle } from "lucide-react"
import Image from "next/image"

// Utility functions for localStorage
const setLocalStorageItem = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value)
  }
}

const getLocalStorageItem = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key)
  }
  return null
}

export default function CSIPAdminLogin() {
  const router = useRouter()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [hasMounted, setHasMounted] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [message, setMessage] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      setIsDarkMode(mediaQuery.matches)
      const handleChange = (e) => setIsDarkMode(e.matches)
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    setHasMounted(true)
    const token = getLocalStorageItem("admin_token")
    if (!token) {
      setIsAuthenticating(false)
      return
    }

    const fetchPermissions = async () => {
      try {
        const res = await fetch(`${API_NODE_URL}admin/me`, {
          headers: { Authorization: `Bearer ${token}` },
          credentials: "include",
        })
        const data = await res.json()
        if (data.status) {
          const { role, permissions } = data?.data
          if (role === "SuperAdmin") {
            router.push("/admin/dashboard")
            return
          } else if (permissions?.length === 0 && role === "SubAdmin") {
            router.push("/admin/no-access")
          } else if ([...menuItems,...submodules].filter((e) => e.name === permissions[0]?.module).length > 0) {
            const item = [...menuItems,...submodules].filter((e) => e.name === permissions[0]?.module)
            router.push(item[0].href)
          } else {
            router.push("/admin/dashboard")
          }
        } else {
          setIsAuthenticating(false)
        }
      } catch (err) {
        console.error("Permission fetch error:", err)
        setIsAuthenticating(false)
      }
    }
    fetchPermissions()
  }, [router])

  const checkAuth = async () => {
    if (!userName || !password) {
      setMessage({
        type: "error",
        text: "Please enter both username and password."
      })
      return
    }

    setIsLoading(true)
    setMessage(null)

    try {
      const result = await adminLogin({ email: userName, password })
      if (result.status) {
        const { token, admin, permissions } = result.data
        setLocalStorageItem("admin_token", token)
        setLocalStorageItem("admin_role", admin.role)

        setMessage({
          type: "success",
          text: "Login successful! Redirecting..."
        })

        setTimeout(() => {
          if (admin.role === "SuperAdmin") {
            router.push("/admin/dashboard")
          } else if (permissions?.length === 0 && admin.role === "SubAdmin") {
            router.push("/admin/no-access")
          } else if ([...menuItems,...submodules].filter((e) => e.name === permissions[0]?.module).length > 0) {
            const item = [...menuItems,...submodules].filter((e) => e.name === permissions[0]?.module)
            router.push(item[0].href)
          } else {
            router.push("/admin/dashboard")
          }
        }, 1000)
      } else {
        setMessage({
          type: "error",
          text: result.message || "Invalid credentials"
        })
      }
    } catch (err) {
      console.error("Login error:", err)
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again."
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    checkAuth()
  }

  if (!hasMounted || isAuthenticating) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8 text-center">
            <div className="mb-4">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                <Image src="/image/AKGEC_LOGO.webp" height={50} width={50} alt="AKG Logo" />
              </div>
            </div>
            <h1 className="text-2xl font-novaBold text-white mb-2">Admin Portal</h1>
            <p className="text-blue-100 text-sm font-novaReg">Sign in to access your dashboard</p>
          </div>

          <div className="px-8 py-8">
            {message && (
              <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${message.type === "success" ? "bg-green-50 border border-green-200 text-green-800" : "bg-red-50 border border-red-200 text-red-800"}`}>
                {message.type === "success" ? (
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                )}
                <span className="text-sm font-medium">{message.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                    placeholder="admin@akg.edu"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-novaSemi text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your password"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-novaSemi hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Signing In...</span>
                  </>
                ) : (
                  <span>Sign In to Dashboard</span>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500 font-novaReg">Secure admin access for AKG Educational Institute</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center font-novaReg space-x-2">
            <Lock className="h-4 w-4" />
            <span>Your connection is secure and encrypted</span>
          </p>
        </div>
      </div>
    </div>
  )
}
