"use client"

import { AlertTriangle, X } from "lucide-react"

export default function DeleteConfirmModal({ isOpen, onClose, onConfirm, announcement }) {
    if (!isOpen || !announcement) return null

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div className="flex min-h-screen items-center justify-center p-4">
                <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />

                {/* Modal */}
                <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4 transform transition-all">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="ml-3 text-xl font-semibold text-gray-900">Delete Announcement</h2>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <p className="text-gray-600 mb-4">
                            Are you sure you want to delete this announcement? This action cannot be undone.
                        </p>

                        {/* Announcement Preview */}
                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                            <h3 className="font-medium text-gray-900 mb-2">{announcement.title}</h3>
                            <p className="text-sm text-gray-600 break-all">{announcement.link}</p>
                            <span
                                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${announcement.status ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                                    }`}
                            >
                                {announcement.status ? "Active" : "Inactive"}
                            </span>
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-3">
                            <button
                                onClick={onClose}
                                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onConfirm}
                                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
