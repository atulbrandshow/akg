// components/layout.js
"use client"
import React, { useEffect, useState } from "react"
import { menuItems, submodules } from "@/configs/sidebarMenu"
import { usePathname, useRouter } from "next/navigation"
import usePermission from "@/hooks/usePermission"
import SideBar from "./SideBar"
const Layout = ({ children }) => {
    const pathname = usePathname()
    const cleanPath = pathname?.startsWith("/") ? pathname.slice(1) : pathname
    const { hasPermission, permissions, isSuperAdmin, loading } = usePermission()
    const [hasMounted, setHasMounted] = useState(false)
    const [isAuthenticating, setIsAuthenticating] = useState(true)
    const router = useRouter()

    useEffect(() => {
        setHasMounted(true)
        if (loading) return

        const token = localStorage.getItem("admin_token")
        if (!token) {
            setIsAuthenticating(false)
            router.replace("/admin")
            return
        }

        // Super Admin: allow all routes
        if (isSuperAdmin) {
            setIsAuthenticating(false)
            return
        }

        // If no permissions at all, go to no-access
        if (!permissions || permissions.length === 0) {
            setIsAuthenticating(false)
            router.push("/admin/no-access")
            return
        }

        // Find current menu item by href
        const currentMenuItem = [...menuItems,...submodules].find((item) => item.href === cleanPath)
        console.log(currentMenuItem);

        // If user has access to current route, show it
        if (
            currentMenuItem &&
            currentMenuItem.name &&
            hasPermission(currentMenuItem.name, "view")
        ) {
            setIsAuthenticating(false)
            return
        }
        // If user has access to dashboard, go there
        if (
            hasPermission("Dashboard", "view")
        ) {
            setIsAuthenticating(false)
            router.push("/admin/dashboard")
            return
        }

        // Otherwise, go to first permitted route
        const firstPermitted = [...menuItems,...submodules].find(
            (item) =>
                item.name &&
                hasPermission(item.name, "view")
        )
        if (firstPermitted) {
            setIsAuthenticating(false)
            router.push(firstPermitted.href)
            return
        }

        // If nothing matches, go to no-access
        setIsAuthenticating(false)
        router.push("/admin/no-access")
    }, [loading, permissions, isSuperAdmin, cleanPath, hasPermission, router])

    if (!hasMounted || isAuthenticating) return null

    return (
        <div className="flex bg-gray-100">
            <SideBar />
            <div className="pt-16 px-10 overflow-x-auto w-full h-screen">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout