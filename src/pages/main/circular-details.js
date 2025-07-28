"use client";

import Breadcrumb from "@/Components/Breadcrumb";
import Holder from "@/Components/Holder";

export default function CicularDetailPage({ data }) {
    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
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
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Circular Not Found</h2>
                    <p className="text-gray-600">The event you're looking for doesn't exist or has been removed.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-white border-b shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <Breadcrumb data={data?.breadCrumb} />
                </div>
            </div>

            {/* Hero Banner */}
            <div className="relative w-full h-96">
                <img
                    src={data.banner_img || "/placeholder.svg"}
                    alt={data.name}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = "/placeholder.svg?height=400&width=800&text=Circular+Image")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="max-w-7xl mx-auto px-4 pb-10 text-white">
                        <h1 className="text-4xl md:text-5xl font-bold">{data.name}</h1>
                        {data.location && <p className="text-lg mt-2">{data.location}</p>}
                    </div>
                </div>
            </div>

            {/* Details Section */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4 py-10">
                {/* Details Card */}
                <div className="md:col-span-1 bg-white rounded-2xl shadow-md p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Circular Details</h2>
                    <div className="text-gray-600 space-y-2 text-sm">
                        <p>
                            <span className="font-medium text-gray-700">Date:</span>{" "}
                            {formatDate(data.event_date || data.addedon)}
                        </p>
                        {data.time && (
                            <p>
                                <span className="font-medium text-gray-700">Time:</span> {data.time}
                            </p>
                        )}
                        {data.location && (
                            <p>
                                <span className="font-medium text-gray-700">Location:</span> {data.location}
                            </p>
                        )}
                        {data.organizer && (
                            <p>
                                <span className="font-medium text-gray-700">Organizer:</span> {data.organizer}
                            </p>
                        )}
                    </div>

                    {data.registration_link && (
                        <a
                            href={data.registration_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
                        >
                            Register Now
                        </a>
                    )}
                </div>

                {/* Description */}
                <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Circular</h2>
                    <div
                        className="prose prose-lg max-w-none text-gray-800"
                        style={{ fontSize: "18px", lineHeight: "1.8" }}
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                </div>
            </div>

            {/* Extra Components */}
            {data?.extraComponentData && (
                <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
                    {Array.from({ length: 40 }, (_, index) =>
                        data.extraComponentData[`holder${index}`] ? (
                            <div
                                key={`holder-${index}`}
                                className="bg-white rounded-2xl shadow-sm overflow-hidden"
                            >
                                <Holder data={data.extraComponentData[`holder${index}`]} />
                            </div>
                        ) : null
                    )}
                </div>
            )}
        </div>
    );
}

function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
