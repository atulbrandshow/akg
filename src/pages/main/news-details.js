"use client"

import Breadcrumb from "@/Components/Breadcrumb"
import Holder from "@/Components/Holder"
import { IMAGE_PATH } from "@/configs/config"
import Image from "next/image"

function NewsDetailPage({ data }) {

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-500 mb-4">
                        <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-xl font-novaSemi text-gray-900 mb-2">Article Not Found</h2>
                    <p className="text-gray-600">The news article you're looking for is not available.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="pt-40 bg-blue-700"></div>
            {/* Header Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Breadcrumb data={data?.breadCrumb} />
                </div>
            </div>

            {/* Main Content */}
            <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Article Header */}
                <header className="mb-8">
                    {/* Category Badge */}
                    {data.category && (
                        <div className="mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-novaSemi bg-red-100 text-red-800 uppercase tracking-wide">
                                {data.category}
                            </span>
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-novaBold text-gray-900 leading-tight mb-6">{data.name}</h1>

                    {/* Article Meta */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-t border-b border-gray-200">
                        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                            {/* Author Info */}
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-novaSemi text-gray-900">NewsHub Reporter</p>
                                    <p className="text-xs text-gray-500 font-novaReg">Verified Journalist</p>
                                </div>
                            </div>

                            {/* Date */}
                            <div className="text-sm text-gray-500 font-novaSemi">
                                <time dateTime={data.addedon}>{formatDate(data.addedon)}</time>
                            </div>
                        </div>

                        {/* Social Share */}
                        <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-500 mr-2 font-novaReg">Share:</span>
                            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </button>
                            <button className="p-2 text-gray-400 hover:text-blue-800 transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </button>
                            <button className="p-2 text-gray-400 hover:text-blue-700 transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>

                <div className="flex justify-between">
                    {data.banner_img && (
                        <div className="mb-8">
                            <div className="w-96 rounded-l-2xl overflow-hidden drop-shadow-lg h-full relative">
                                <Image
                                    src={IMAGE_PATH + data.banner_img || "/placeholder.svg"}
                                    height={1000}
                                    width={1000}
                                    alt={data.name}
                                    className="h-full w-96 object-cover"
                                />
                            </div>
                        </div>
                    )}
                    <div className="bg-white rounded-r-2xl drop-shadow-lg p-8 mb-8">
                        <div
                            className="prose prose-lg max-w-none text-gray-800 font-novaReg text-justify leading-relaxed"
                            style={{
                                fontSize: "18px",
                                lineHeight: "1.8",
                            }}
                            dangerouslySetInnerHTML={{ __html: data.shortdesc }}
                        />
                    </div>
                </div>

                {/* Article Content */}
                <div className="bg-white rounded-2xl drop-shadow-lg p-8 mb-8">
                    <div
                        className="prose prose-lg max-w-none text-gray-800 font-novaReg text-justify leading-relaxed"
                        style={{
                            fontSize: "18px",
                            lineHeight: "1.8",
                        }}
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                </div>

                {/* Extra Components */}
                {data?.extraComponentData && (
                    <div className="space-y-8">
                        {Array.from({ length: 40 }, (_, i) => i + 1).map(
                            (item, index) =>
                                data?.extraComponentData?.[`holder${index}`] && (
                                    <div key={`holder-${index}`} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                                        <Holder data={data?.extraComponentData[`holder${index}`]} />
                                    </div>
                                ),
                        )}
                    </div>
                )}
            </article>
        </div>
    )
}

export default NewsDetailPage

function formatDate(dateString) {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

