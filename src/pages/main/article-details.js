"use client"
import Breadcrumb from "@/Components/Breadcrumb"
import Holder from "@/Components/Holder"
import { IMAGE_PATH } from "@/configs/config"
import Image from "next/image"

export default function ArticleDetailPage({ data }) {
    console.log(data)

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                <div className="text-center bg-white p-16 rounded-2xl shadow-2xl max-w-lg mx-4 border border-gray-100 backdrop-blur-sm">
                    <div className="text-red-500 mb-8 animate-pulse">
                        <svg className="mx-auto h-20 w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-novaBold text-gray-900 mb-4">Article Not Found</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        The article you're looking for doesn't exist or has been removed.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-novaReg">
                        Go Back Home
                    </button>
                </div>
            </div>
        )
    }

    function formatDate(dateString) {
        if (!dateString) return ""
        const date = new Date(dateString)
        return date.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    function getReadingTime(content) {
        if (!content) return "5 min read"
        const wordsPerMinute = 200
        const words = content.replace(/<[^>]*>/g, "").split(" ").length
        const minutes = Math.ceil(words / wordsPerMinute)
        return `${minutes} min read`
    }

    return (
        <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
            <div className="pt-40 bg-blue-700"></div>
            {/* Breadcrumb */}
            {data?.breadCrumb && (
                <div className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <Breadcrumb data={data.breadCrumb} />
                    </div>
                </div>
            )}

            {/* Article Header */}
            <header className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-800/90"></div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-48">
                    <div className="text-center max-w-7xl mx-auto">
                        {/* Category Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm uppercase font-novaSemi bg-white/20 backdrop-blur-sm text-white mb-6 border border-white/30">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Featured Article
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-novaBold mb-8 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            {data.title || data.name || "Article Details"}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center justify-center gap-8 text-white/90 mb-8">
                            {(data.event_date || data.addedon) && (
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="font-novaReg">{formatDate(data.event_date || data.addedon)}</span>
                                </div>
                            )}

                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className="font-novaReg">{getReadingTime(data.description)}</span>
                            </div>

                            {data.organizer && (
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                    <span className="font-novaReg">By {data.organizer}</span>
                                </div>
                            )}
                        </div>

                        {/* Short Description */}
                        {data.shortdesc && (
                            <div
                                className="text-lg text-white/90 leading-relaxed font-novaReg max-w-7xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                                dangerouslySetInnerHTML={{ __html: data.shortdesc }}
                            />
                        )}
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            {(data.banner_img || data.featured_img) && (
                <div className="relative -mt-36 z-10">
                    <div className="w-[600px] mx-auto px-4">
                        <div className="relative overflow-hidden rounded-2xl group">
                            <Image
                                src={`${IMAGE_PATH}${data.banner_img || data.featured_img}`}
                                alt="Article Featured Image"
                                height={600}
                                width={1200}
                                className="w-[600px] h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Article Content */}
                    <div className="lg:col-span-3">
                        <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="p-8">
                                {/* Article Body */}
                                {data.description && (
                                    <div
                                        className="prose prose-lg prose-gray max-w-none font-novaReg text-justify leading-relaxed"
                                        style={{
                                            fontSize: "18px",
                                            lineHeight: "1.8",
                                            color: "#374151",
                                        }}
                                        dangerouslySetInnerHTML={{ __html: data.description }}
                                    />
                                )}

                                {/* Gallery Section */}
                                {data.galleryimg && Array.isArray(data.galleryimg) && data.galleryimg.length > 0 && (
                                    <div className="mt-16 pt-12 border-t border-gray-200">
                                        <h3 className="text-3xl font-novaBold text-gray-900 mb-10 flex items-center">
                                            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                                            Image Gallery
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {data.galleryimg.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                                                >
                                                    <img
                                                        src={`${IMAGE_PATH}${image}`}
                                                        alt={`Gallery image ${index + 1}`}
                                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <p className="text-sm font-novaReg">Image {index + 1}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Article Footer */}
                                <div className="mt-16 pt-12 border-t border-gray-200">
                                    <div className="flex flex-wrap items-center justify-between gap-6">
                                        <div className="flex items-center gap-6">
                                            <span className="text-lg font-novaSemi text-gray-700">Share this article:</span>
                                            <div className="flex gap-3">
                                                {[
                                                    {
                                                        name: "Twitter",
                                                        color: "bg-blue-500 hover:bg-blue-600",
                                                        icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                                                    },
                                                    {
                                                        name: "WhatsApp",
                                                        color: "bg-green-500 hover:bg-green-600",
                                                        icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106",
                                                    },
                                                ].map((social, index) => (
                                                    <button
                                                        key={index}
                                                        className={`p-3 rounded-full ${social.color} text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                                                    >
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d={social.icon} />
                                                        </svg>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                            <span className="font-novaReg">Save for later</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Enhanced Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-36 space-y-8">
                            {/* Article Info Card */}
                            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-5 sm:p-6 border border-blue-100">
                                <h3 className="text-xl font-novaBold text-gray-900 mb-6 flex items-center">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    Article Info
                                </h3>
                                <div className="space-y-4">
                                    {(data.event_date || data.addedon) && (
                                        <div className="flex items-center justify-between py-3 px-4 bg-white rounded-lg shadow-sm">
                                            <span className="text-sm text-gray-600 font-novaReg">Published</span>
                                            <span className="text-sm font-novaBold text-gray-900">
                                                {formatDate(data.event_date || data.addedon)}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between py-3 px-4 bg-white rounded-lg shadow-sm">
                                        <span className="text-sm text-gray-600 font-novaReg">Reading Time</span>
                                        <span className="text-sm font-novaBold text-blue-600">{getReadingTime(data.description)}</span>
                                    </div>
                                    {data.organizer && (
                                        <div className="flex items-center justify-between py-3 px-4 bg-white rounded-lg shadow-sm">
                                            <span className="text-sm text-gray-600 font-novaReg">Author</span>
                                            <span className="text-sm font-novaBold text-gray-900">{data.organizer}</span>
                                        </div>
                                    )}
                                    {data.location && (
                                        <div className="flex items-center justify-between py-3 px-4 bg-white rounded-lg shadow-sm">
                                            <span className="text-sm text-gray-600 font-novaReg">Location</span>
                                            <span className="text-sm font-novaBold text-gray-900">{data.location}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-5 sm:p-6 border border-purple-100">
                                <h4 className="text-xl font-novaBold text-gray-900 mb-6 flex items-center">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    Quick Actions
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        {
                                            icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z",
                                            text: "Share Article",
                                            gradient: "from-blue-500 to-cyan-500",
                                        },
                                        {
                                            icon: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z",
                                            text: "Bookmark",
                                            gradient: "from-green-500 to-emerald-500",
                                        },
                                    ].map((action, index) => (
                                        <button
                                            key={index}
                                            className="w-full text-left px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4 text-sm font-novaSemi text-gray-700 hover:text-white group transform hover:-translate-y-1 relative overflow-hidden"
                                        >
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                            ></div>
                                            <div
                                                className={`w-10 h-10 bg-gradient-to-r ${action.gradient} rounded-lg flex items-center justify-center relative z-10`}
                                            >
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
                                                </svg>
                                            </div>
                                            <span className="relative z-10">{action.text}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra Components */}
            {data?.extraComponentData && Object.values(data.extraComponentData).some(Boolean) && (
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-novaBold text-gray-900 mb-4">Additional Resources</h2>
                            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
                            <p className="text-gray-600 mt-4 text-lg">Explore more content related to this article</p>
                        </div>
                        <div className="grid gap-8">
                            {Array.from({ length: 40 }, (_, index) =>
                                data.extraComponentData[`holder${index}`] ? (
                                    <div
                                        key={`holder-${index}`}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                    >
                                        <Holder data={data.extraComponentData[`holder${index}`]} />
                                    </div>
                                ) : null,
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
