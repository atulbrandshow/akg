"use client"

import { IMAGE_PATH } from "@/configs/config"
import { Download, Eye, File, ImageIcon, FileText, X } from "lucide-react"

export default function AttachmentViewer({ attachments, onRemove, editable = false }) {
    const getFileIcon = (type) => {
        if (type?.startsWith("image/")) return <ImageIcon className="w-5 h-5" />
        if (type.includes("pdf")) return <FileText className="w-5 h-5" />
        return <File className="w-5 h-5" />
    }

    const formatFileSize = (bytes) => {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const sizes = ["Bytes", "KB", "MB", "GB"]
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    }

    const handleDownload = (attachment) => {
        const link = document.createElement("a")
        link.href = attachment.url
        link.download = attachment.filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handlePreview = (attachment) => {
        if (attachment.type?.startsWith("image/")) {
            window.open(IMAGE_PATH + attachment.url, "_blank")
        } else if (attachment.type.includes("pdf")) {
            window.open(IMAGE_PATH + attachment.url, "_blank")
        } else {
            handleDownload(IMAGE_PATH + attachment)
        }
    }

    if (!attachments || attachments.length === 0) {
        return null
    }

    return (
        <div className="space-y-2">
            <h4 className="font-medium text-gray-900 flex items-center gap-2">
                <File className="w-4 h-4" />
                Attachments ({attachments.length})
            </h4>

            <div className="grid gap-2">
                {attachments.map((attachment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                            {getFileIcon(attachment.type)}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{attachment.filename}</p>
                                <p className="text-xs text-gray-500">{formatFileSize(attachment.size)}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handlePreview(attachment)}
                                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                                title="Preview/Open"
                            >
                                <Eye className="w-4 h-4" />
                            </button>

                            <button
                                onClick={() => handleDownload(attachment)}
                                className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
                                title="Download"
                            >
                                <Download className="w-4 h-4" />
                            </button>

                            {editable && onRemove && (
                                <button
                                    onClick={() => onRemove(index)}
                                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                    title="Remove"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
