"use client"

import { useState } from "react"
import { Upload, X, File, ImageIcon, FileText } from "lucide-react"
import { uploadImages } from "@/utills/ImageUpload"

export default function FileUpload({
    onFilesUploaded,
    maxFiles = 5,
    acceptedTypes = "image/*,.pdf,.doc,.docx,.txt,.xlsx,.xls,.ppt,.pptx",
}) {
    const [files, setFiles] = useState([])
    const [uploading, setUploading] = useState(false)
    const [dragActive, setDragActive] = useState(false)

    const getFileIcon = (fileType) => {
        if (fileType?.startsWith("image/")) return <ImageIcon className="w-4 h-4" />
        if (fileType.includes("pdf")) return <FileText className="w-4 h-4" />
        return <File className="w-4 h-4" />
    }

    const formatFileSize = (bytes) => {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const sizes = ["Bytes", "KB", "MB", "GB"]
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    }

    const handleFiles = (fileList) => {
        const newFiles = Array.from(fileList).slice(0, maxFiles - files.length)
        const validFiles = newFiles.filter((file) => {
            const isValidSize = file.size <= 10 * 1024 * 1024 // 10MB
            const isValidType = acceptedTypes.split(",").some((type) => {
                if (type.trim() === "image/*") return file.type.startsWith("image/")
                if (type.trim()?.startsWith(".")) return file.name.toLowerCase().endsWith(type.trim())
                return file.type === type.trim()
            })
            return isValidSize && isValidType
        })

        setFiles((prev) => [...prev, ...validFiles])
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
            handleFiles(e.dataTransfer.files)
        }
    }

    const removeFile = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index))
    }

    const uploadFiles = async () => {
        if (files.length === 0) return

        setUploading(true)
        try {
            const uploadedUrls = await uploadImages(files)
            const fileData = files.map((file, index) => ({
                filename: file.name,
                url: Array.isArray(uploadedUrls) ? uploadedUrls[index] : uploadedUrls,
                type: file.type,
                size: file.size,
            }))

            onFilesUploaded(fileData)
            setFiles([])
        } catch (error) {
            console.error("Upload failed:", error)
            alert("Upload failed. Please try again.")
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="w-full">
            {/* Upload Area */}
            <div
                className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
                    }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    multiple
                    accept={acceptedTypes}
                    onChange={(e) => handleFiles(e.target.files)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={uploading || files.length >= maxFiles}
                />

                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-900 mb-2">Drop files here or click to browse</p>
                <p className="text-sm text-gray-500">Support for images, PDFs, and documents up to 10MB each</p>
                <p className="text-xs text-gray-400 mt-1">
                    Maximum {maxFiles} files ({files.length}/{maxFiles} selected)
                </p>
            </div>

            {/* File List */}
            {files.length > 0 && (
                <div className="mt-4 space-y-2">
                    <h4 className="font-medium text-gray-900">Selected Files:</h4>
                    {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                                {getFileIcon(file.type)}
                                <div>
                                    <p className="text-sm font-medium text-gray-900 truncate max-w-xs">{file.name}</p>
                                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFile(index)}
                                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                disabled={uploading}
                            >
                                <X className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>
                    ))}

                    <button
                        onClick={uploadFiles}
                        disabled={uploading || files.length === 0}
                        className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        {uploading ? "Uploading..." : `Upload ${files.length} file${files.length !== 1 ? "s" : ""}`}
                    </button>
                </div>
            )}
        </div>
    )
}
