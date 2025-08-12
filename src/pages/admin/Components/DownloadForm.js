"use client"

import { useState } from "react"
import { toast } from "react-toastify"

const { uploadImages } = require("@/utills/ImageUpload")

// Enhanced Download Form Component
const DownloadForm = ({ download, onClose, apiUrl }) => {
    const [formData, setFormData] = useState({
        title: download?.title || "",
        description: download?.description || "",
        category: download?.category || "academic",
        featured: download?.featured || false,
    })
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [dragActive, setDragActive] = useState(false)

    const getFileInfo = (file) => {
        const fileExtension = file.name.split(".").pop().toUpperCase()
        const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(1)
        return {
            fileType: fileExtension,
            fileName: file.name,
            fileSize: `${fileSizeInMB} MB`,
        }
    }

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0])
        }
    }

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            let fileUrl = download?.fileUrl
            let fileInfo = {
                fileType: download?.fileType,
                fileName: download?.fileName,
                fileSize: download?.fileSize,
            }

            // Upload file if a new file is selected
            if (file) {
                setUploading(true)
                try {
                    fileUrl = await uploadImages(file)
                    fileInfo = getFileInfo(file)
                } catch (uploadError) {
                    toast.error("Error uploading file: " + uploadError.message)
                    return
                } finally {
                    setUploading(false)
                }
            }

            if (!fileUrl && !download) {
                toast.warn("Please select a file to upload")
                return
            }

            const requestData = {
                title: formData.title,
                description: formData.description,
                category: formData.category,
                featured: formData.featured,
                fileUrl,
                ...fileInfo,
            }

            const url = download ? `${apiUrl}downloads/${download._id}` : `${apiUrl}downloads`
            const method = download ? "PUT" : "POST"

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            })

            const data = await response.json()

            if (data.success) {
                toast.success(download ? "Download updated successfully!" : "Download created successfully!")
                onClose()
            } else {
                toast.error("Error: " + data.message)
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            toast.error("Error submitting form")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
                {/* Header */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-novaBold">{download ? "Edit Download" : "Add New Download"}</h2>
                            <p className="text-emerald-100 font-novaReg">
                                {download ? "Update your download details" : "Share a new resource with the community"}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200"
                            aria-label="Close form"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Form Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-novaSemi text-gray-700">
                                    Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 font-novaReg rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 placeholder-gray-400"
                                    placeholder="Enter a descriptive title for your download"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-novaSemi text-gray-700">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        required
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 font-novaReg rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 appearance-none bg-white cursor-pointer"
                                    >
                                        <option value="academic">Academic Resources</option>
                                        <option value="forms">Forms & Documents</option>
                                        <option value="software">Software & Tools</option>
                                        <option value="research">Research Papers</option>
                                        <option value="student">Student Resources</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-novaSemi text-gray-700">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                required
                                rows={2}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 font-novaReg rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 placeholder-gray-400 resize-none"
                                placeholder="Provide a detailed description of what this download contains and how it can be useful..."
                            />
                        </div>
                        {/* File Upload Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-novaSemi text-gray-700">
                                File {!download && <span className="text-red-500">*</span>}
                            </label>

                            {/* Drag and Drop Area */}
                            <div
                                className={`relative border-2 border-dashed rounded-xl p-5 text-center transition-all duration-200 ${dragActive
                                    ? "border-emerald-500 bg-emerald-50"
                                    : file
                                        ? "border-emerald-300 bg-emerald-50"
                                        : "border-gray-300 hover:border-gray-400"
                                    }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    required={!download}
                                />

                                {file ? (
                                    <div className="space-y-2">
                                        <div className="w-12 h-12 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-novaSemi text-gray-900">{file.name}</p>
                                            <p className="text-sm text-gray-500">{(file.size / (1024 * 1024)).toFixed(1)} MB</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setFile(null)}
                                            className="text-sm text-red-600 hover:text-red-700 font-novaSemi"
                                        >
                                            Remove file
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-novaSemi text-gray-900">Drop your file here, or click to browse</p>
                                            <p className="text-sm font-novaReg text-gray-500">Supports all file types</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {download && !file && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <p className="text-sm text-blue-800 font-novaReg">
                                            Current file: <span className="font-novaSemi">{download.fileName}</span> ({download.fileSize})
                                        </p>
                                    </div>
                                </div>
                            )}

                            {uploading && (
                                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                                    <div className="flex items-center space-x-2">
                                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-emerald-600 border-t-transparent"></div>
                                        <p className="text-sm text-emerald-800 font-novaSemi">Uploading file...</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Featured Checkbox */}
                        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                            <div className="flex items-center h-5">
                                <input
                                    type="checkbox"
                                    id="featured"
                                    checked={formData.featured}
                                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded transition-colors duration-200"
                                />
                            </div>
                            <div className="text-sm">
                                <label htmlFor="featured" className="font-novaSemi text-gray-900 cursor-pointer">
                                    Mark as featured
                                </label>
                                <p className="text-gray-500 font-novaReg">
                                    Featured downloads will be highlighted and appear at the top of the list
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-novaSemi transition-all duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading || uploading}
                                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-novaSemi disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                {loading ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                        <span>{uploading ? "Uploading..." : "Saving..."}</span>
                                    </div>
                                ) : download ? (
                                    "Update Download"
                                ) : (
                                    "Create Download"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DownloadForm;