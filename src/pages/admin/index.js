"use client"
import { useEffect, useState } from "react"
import SideBar from "./Components/SideBar"
import AdminDashboard from "./AdminDashboard"
import LoginForm from "./Components/login"
export default function AdminPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authTrigger, setAuthTrigger] = useState(0)

  // Check authentication status
  useEffect(() => {
    checkAuthStatus()
  }, [authTrigger])

  const checkAuthStatus = () => {
    setLoading(true)
    try {
      const userData = localStorage.getItem("user")
      if (userData) {
        const parsedUser = JSON.parse(userData)
        // Validate user data structure
        if (parsedUser && (parsedUser.id || parsedUser.email)) {
          setUser(parsedUser)
        } else {
          localStorage.removeItem("user")
          setUser(null)
        }
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error("Error parsing user data:", error)
      localStorage.removeItem("user")
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setAuthTrigger((prev) => prev + 1)
  }

  const handleAuthError = () => {
    localStorage.removeItem("user")
    setUser(null)
    setAuthTrigger((prev) => prev + 1)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {user ? (
        <div className="flex bg-gray-100">
          <SideBar user={user} onLogout={handleLogout} />
          <div className="pt-16 px-10 overflow-x-auto w-full h-screen">
            <AdminDashboard user={user} onAuthError={handleAuthError} />
          </div>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </>
  )
}
