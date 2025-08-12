"use client"
import Breadcrumb from "@/Components/Breadcrumb"
import Holder from "@/Components/Holder"

export default function CircularDetailPage({ data }) {
    function formatDate(dateString) {
        if (!dateString) return ""
        const date = new Date(dateString)
        return date.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
                <div className="text-center bg-white rounded-2xl shadow-xl p-12 max-w-md mx-4">
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
                    <h2 className="text-2xl font-novaBold text-gray-900 mb-3">Circular Not Found</h2>
                    <p className="text-gray-600 mb-6">The circular you're looking for doesn't exist or has been removed.</p>
                    <button
                        onClick={() => window.history.back()}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-novaSemi py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-gradient-to-br from-amber-50 to-yellow-100">
            {/* Title Section */}
            <div className="pt-32 lg:pt-56 bg-gradient-to-r from-blue-600 to-blue-600 text-white pb-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-start space-x-6">
                        {/* Document Icon */}
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex-shrink-0">
                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>

                        {/* Title and Meta */}
                        <div className="flex-1">
                            <div className="flex items-center mb-3">
                                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-novaBold mr-4">
                                    IMPORTANT NOTICE
                                </span>
                            </div>
                            <h1 className="text-2xl md:text-4xl font-novaBold leading-tight mb-3">{data.name}</h1>
                            <div className="flex items-center text-white/90 font-novaReg">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Published on {formatDate(data.event_date || data.addedon)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="mb-4">
                    <Breadcrumb data={data?.breadCrumb} />
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 pb-16">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar - Details Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden sticky top-8">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6">
                                <h2 className="text-xl font-novaBold flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Circular Details
                                </h2>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-6">
                                {/* Date */}
                                <div className="flex items-start space-x-3">
                                    <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                                        <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-novaSemi text-gray-800">Publication Date</p>
                                        <p className="text-gray-600">{formatDate(data.event_date || data.addedon)}</p>
                                    </div>
                                </div>

                                {/* Time */}
                                {data.time && (
                                    <div className="flex items-start space-x-3">
                                        <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-novaSemi text-gray-800">Time</p>
                                            <p className="text-gray-600">{data.time}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Location */}
                                {data.location && (
                                    <div className="flex items-start space-x-3">
                                        <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-novaSemi text-gray-800">Location</p>
                                            <p className="text-gray-600">{data.location}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Organizer */}
                                {data.organizer && (
                                    <div className="flex items-start space-x-3">
                                        <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                                            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-novaSemi text-gray-800">Organizer</p>
                                            <p className="text-gray-600">{data.organizer}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Registration Link */}
                                {data.registration_link && (
                                    <div className="pt-4 border-t border-gray-200">
                                        <a
                                            href={data.registration_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4 rounded-xl font-novaBold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                        >
                                            <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                                            </svg>
                                            Register Now
                                        </a>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="pt-4 border-t border-gray-200 space-y-3">
                                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-novaSemi py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Download PDF
                                    </button>
                                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-novaSemi py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                        </svg>
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content - Description */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8">
                                <h2 className="text-2xl font-novaBold flex items-center">
                                    <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    About this Circular
                                </h2>
                                <p className="text-white/90 mt-2 font-novaReg">Complete details and information</p>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div
                                    className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-novaReg"
                                    style={{
                                        fontSize: "18px",
                                        lineHeight: "1.8",
                                    }}
                                    dangerouslySetInnerHTML={{ __html: data.description }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra Components */}
            {data?.extraComponentData && Object.values(data.extraComponentData).some(Boolean) && (
                <div className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-novaBold text-gray-900 mb-4">Additional Information</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
                        </div>

                        <div className="space-y-8">
                            {Array.from({ length: 40 }, (_, index) =>
                                data.extraComponentData[`holder${index}`] ? (
                                    <div
                                        key={`holder-${index}`}
                                        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
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