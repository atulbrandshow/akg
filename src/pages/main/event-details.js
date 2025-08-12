"use client"
import Breadcrumb from "@/Components/Breadcrumb"
import Holder from "@/Components/Holder"
import { IMAGE_PATH } from "@/configs/config"
import Image from "next/image"

export default function EventDetailPage({ data }) {
    console.log(data)

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="text-center bg-white p-12 rounded-3xl shadow-xl max-w-md mx-4">
                    <div className="text-red-500 mb-6">
                        <svg className="mx-auto h-20 w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-novaBold text-gray-900 mb-3">Event Not Found</h2>
                    <p className="text-gray-600 leading-relaxed font-novaReg">
                        The event you're looking for doesn't exist or has been removed.
                    </p>
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

    return (
        <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 min-h-screen">
            {/* Hero Banner Section */}
            {data.banner_img && (
                <div className="relative h-80 sm:h-96 md:h-[600px] overflow-hidden">
                    <Image src={`${IMAGE_PATH}${data.banner_img}`} alt="Event Banner" height={2000} width={2000} className="w-full h-full object-top object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-novaBold text-center mb-4 drop-shadow-lg">
                            {data.title || data.name || "Event Details"}
                        </h1>
                    </div>
                </div>
            )}

            {data?.breadCrumb && (
                <div className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <Breadcrumb data={data.breadCrumb} />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Event Header (if no banner) */}
                        {!data.banner_img && (
                            <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
                                <div className="flex flex-col md:flex-row gap-8">
                                    {data.featured_img && (
                                        <div className="md:w-1/3">
                                            <img
                                                src={`${IMAGE_PATH}${data.featured_img}`}
                                                alt="Featured Event"
                                                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <h1 className="text-4xl font-novaBold text-gray-900 mb-4">
                                            {data.title || data.name || "Event Details"}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Short Description (if banner exists) */}
                        {data.banner_img && data.shortdesc && (
                            <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-8 border border-purple-100">
                                <h2 className="text-2xl font-novaBold text-gray-900 mb-4 flex items-center">
                                    <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-4"></span>
                                    Event Overview
                                </h2>
                                <p className="text-lg text-gray-700 font-novaReg leading-relaxed" dangerouslySetInnerHTML={{ __html: data.shortdesc }}></p>
                            </div>
                        )}

                        {/* Featured Image (if banner exists) */}
                        {data.banner_img && data.featured_img && (
                            <div className="bg-white rounded-3xl shadow-xl p-2 sm:p-8 border border-purple-100">
                                <Image
                                    src={`${IMAGE_PATH}${data.featured_img}`}
                                    height={500}
                                    width={1000}
                                    alt="Featured Event"
                                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                                />
                            </div>
                        )}

                        {/* Full Description */}
                        {data.description && (
                            <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-8 border border-purple-100">
                                <h2 className="text-3xl font-novaBold text-gray-900 mb-6 flex items-center">
                                    <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-4"></span>
                                    About This Event
                                </h2>
                                <div
                                    className="prose prose-lg max-w-none font-novaReg text-gray-800 leading-relaxed"
                                    style={{ fontSize: "18px", lineHeight: "1.8" }}
                                    dangerouslySetInnerHTML={{ __html: data.description }}
                                />
                            </div>
                        )}

                        {/* Gallery Section */}
                        {data.galleryimg && Array.isArray(data.galleryimg) && data.galleryimg.length > 0 && (
                            <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
                                <h2 className="text-3xl font-novaBold text-gray-900 mb-6 flex items-center">
                                    <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-4"></span>
                                    Event Gallery
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {data.galleryimg.map((image, index) => (
                                        <div
                                            key={index}
                                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                        >
                                            <img
                                                src={`${IMAGE_PATH}${image}`}
                                                alt={`Gallery image ${index + 1}`}
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-36 space-y-6">
                            {/* Event Details Card */}
                            <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 border border-purple-100">
                                <h3 className="text-2xl font-novaBold text-gray-900 mb-6 flex items-center">
                                    <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </span>
                                    Event Details
                                </h3>

                                <div className="space-y-4">
                                    {(data.event_date || data.addedon) && (
                                        <div className="flex items-start space-x-3">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-novaSemi text-gray-900">Date</p>
                                                <p className="text-blue-600 font-novaSemi">{formatDate(data.event_date || data.addedon)}</p>
                                            </div>
                                        </div>
                                    )}

                                    {data.time && (
                                        <div className="flex items-start space-x-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-novaSemi text-gray-900">Time</p>
                                                <p className="text-blue-600 font-novaSemi">{data.time}</p>
                                            </div>
                                        </div>
                                    )}

                                    {data.location && (
                                        <div className="flex items-start space-x-3">
                                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-novaSemi text-gray-900">Location</p>
                                                <p className="text-blue-600 font-novaReg">{data.location}</p>
                                            </div>
                                        </div>
                                    )}

                                    {data.organizer && (
                                        <div className="flex items-start space-x-3">
                                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-novaSemi text-gray-900">Organizer</p>
                                                <p className="text-blue-600 font-novaReg">{data.organizer}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {data.registration_link && (
                                    <div className="mt-8">
                                        <a
                                            href={data.registration_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-novaBold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
                                        >
                                            Register Now
                                            <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl shadow-xl p-5 sm:p-6 text-white">
                                <h4 className="text-xl font-novaBold mb-4">Quick Actions</h4>
                                <div className="space-y-3">
                                    <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-3 rounded-xl font-novaSemi transition-all duration-300 flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            />
                                        </svg>
                                        <span>Share Event</span>
                                    </button>
                                    <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-3 rounded-xl font-novaSemi transition-all duration-300 flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                        <span>Save Event</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra Components */}
            {data?.extraComponentData && Object.values(data.extraComponentData).some(Boolean) && (
                <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
                    <h2 className="text-3xl font-novaBold text-gray-900 text-center mb-12">Additional Information</h2>
                    {Array.from({ length: 40 }, (_, index) =>
                        data.extraComponentData[`holder${index}`] ? (
                            <div
                                key={`holder-${index}`}
                                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-shadow duration-300"
                            >
                                <Holder data={data.extraComponentData[`holder${index}`]} />
                            </div>
                        ) : null,
                    )}
                </div>
            )}
        </div>
    )
}