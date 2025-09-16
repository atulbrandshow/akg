// pages/no-access.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
import Sidebar from "../Components/SideBar";
import usePermission from "@/hooks/usePermission";
import { useRouter } from "next/router";

const NoAccess = () => {
    const { hasPermission, permissions, isSuperAdmin, loading } = usePermission()
    const router = useRouter()
    useEffect(() => {
        if (isSuperAdmin) {
            router.push('/admin/dashboard')
            return
        }
        if (permissions.length > 0) {
            router.push('/admin/dashboard')
        }
    }, [hasPermission, permissions, loading])
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="pt-5 px-5 overflow-x-auto h-screen bg-BG1 bg-cover w-full ">
                <div className="flex flex-col items-center justify-center bg-gray-100 text-center px-4 h-full">
                    <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
                        <div className="flex items-center justify-center mb-4">
                            <Lock size={48} className="text-red-500" />
                        </div>
                        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Access Denied</h1>
                        <p className="text-gray-600 mb-6">You do not have permission to view this page.</p>
                        <Link href="/">
                            <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition">
                                Go Back Home
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoAccess;
