"use client"

import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"
import Image from "next/image"
import { useEffect, useState } from "react"

function Widget({ type, stream, limit }) {
    const [widgetData, setWidgetData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            if (!type) return
            try {
                const queryParams = new URLSearchParams({
                    type,
                    stream: stream?._id || "",
                    limit: limit || "",
                }).toString()

                console.log(queryParams);
                
                const res = await fetch(`${API_NODE_URL}widget?${queryParams}`)
                const result = await res.json()
                console.log(result);

                if (result.status) {
                    setWidgetData(result.data || [])
                } else {
                    console.error("API returned error:", result.message)
                    setWidgetData([])
                }
            } catch (err) {
                console.error("Fetch failed:", err)
                setWidgetData([])
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [type, stream, limit])

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="relative">
                    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                    <div className="mt-4 text-gray-600 font-medium">Loading {type}...</div>
                </div>
            </div>
        )
    }

    if (type === "News") {
        return <NewsWidget initialShowCount={limit} newsData={widgetData || []} />
    }

    if (type === "Event") {
        return <EventWidget initialShowCount={limit} eventData={widgetData || []} />
    }

    if (type === "Circular") {
        return <CircularWidget initialShowCount={limit} circularData={widgetData || []} />
    }

    if (type === "Article") {
        return <ArticleWidget initialShowCount={limit} articleData={widgetData || []} />
    }

    return <NewsWidget initialShowCount={limit} newsData={widgetData || []} />
}

// News Widget - Newspaper Style
function NewsWidget({ initialShowCount = 5, newsData = [] }) {
    const [showAll, setShowAll] = useState(false)
    const filteredNews = newsData.filter((item) => item.type === "News")
    const itemsToShow = showAll ? filteredNews : filteredNews.slice(0, initialShowCount)
    const hasMoreItems = filteredNews.length > initialShowCount
    const featuredNews = filteredNews[0]
    const regularNews = filteredNews.slice(1)

    const handleCardClick = (path) => {
        window.location.href = path
    }

    const stripHtml = (html) => {
        const tmp = document.createElement("div")
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ""
    }

    const truncateText = (text, maxLength = 150) => (text.length <= maxLength ? text : text.substr(0, maxLength) + "...")

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    if (filteredNews.length === 0) {
        return (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-novaBold text-gray-700 mb-2">No News Available</h3>
                    <p className="text-gray-500 font-novaReg">Stay tuned for the latest campus updates and announcements.</p>
                </div>
            </div>
        )
    }

    return (
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-novaBold mb-4">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                        BREAKING NEWS
                    </div>
                    <h2 className="text-4xl font-novaBold text-gray-900 mb-4">Campus News</h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto"></div>
                </div>

                {/* Featured News */}
                {featuredNews && (
                    <div
                        onClick={() => handleCardClick(featuredNews.path)}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                    >
                        <div className="md:flex">
                            <div className="md:w-1/2 relative">
                                {featuredNews.banner_img ? (
                                    <Image
                                        src={IMAGE_PATH + featuredNews.banner_img || "/placeholder.svg"}
                                        alt={featuredNews.name}
                                        height={400}
                                        width={400}
                                        quality={100}
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-64 md:h-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-lg font-novaSemi">Featured News</span>
                                        </div>
                                    </div>
                                )}
                                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 tracking-wide rounded-full text-xs font-novaBold">
                                    FEATURED
                                </div>
                            </div>
                            <div className="md:w-1/2 p-8">
                                <div className="flex items-center mb-4">
                                    <div className="bg-black text-gray-100 px-3 py-1 rounded-full text-sm font-novaSemi mr-3">
                                        {formatDate(featuredNews.date)}
                                    </div>
                                </div>
                                <h3 className="text-3xl font-novaBold text-gray-900 mb-4 leading-tight">{featuredNews.name}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed font-novaReg mb-6" dangerouslySetInnerHTML={{ __html: featuredNews.shortdesc || truncateText(stripHtml(featuredNews.description), 200) }}>
                                </p>
                                <div className="flex items-center text-red-600 font-novaSemi">
                                    <span>Read Full Story</span>
                                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Regular News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularNews.slice(0, showAll ? regularNews.length : initialShowCount - 1).map((item) => (
                        <article
                            key={item._id}
                            onClick={() => handleCardClick(item.path)}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                        >
                            <div className="relative">
                                {item.banner_img ? (
                                    <Image
                                        src={IMAGE_PATH + item.banner_img}
                                        alt={item.name}
                                        height={400}
                                        width={400}
                                        className="w-full h-48 object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                        <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 font-novaSemi rounded">
                                    {formatDate(item.date)}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-novaBold text-gray-900 mb-1 line-clamp-2 hover:text-blue-600 transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 leading-snug line-clamp-2 font-novaReg" dangerouslySetInnerHTML={{ __html: item.shortdesc || truncateText(stripHtml(item.description)) }}>
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-blue-600 font-novaSemi text-sm">Read More →</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Show More Button */}
                {hasMoreItems && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-red-600 hover:bg-red-700 text-white font-novaBold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {showAll ? "Show Less" : `View All News (${filteredNews.length - initialShowCount} more)`}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

// Event Widget - Timeline Style
function EventWidget({ initialShowCount = 3, eventData = [] }) {
    const [showAll, setShowAll] = useState(false)
    const filteredEvents = eventData.filter((item) => item.type === "Event")
    const itemsToShow = showAll ? filteredEvents : filteredEvents.slice(0, initialShowCount)
    const hasMoreItems = filteredEvents.length > initialShowCount

    const handleCardClick = (path) => {
        window.location.href = path
    }

    const stripHtml = (html) => {
        const tmp = document.createElement("div")
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ""
    }

    const truncateText = (text, maxLength = 120) => (text.length <= maxLength ? text : text.substr(0, maxLength) + "...")

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const day = date.getDate()
        const month = date.toLocaleDateString("en-US", { month: "short" })
        return { day, month }
    }

    if (filteredEvents.length === 0) {
        return (
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-novaBold text-gray-700 mb-2">No Events Scheduled</h3>
                    <p className="text-gray-500 font-novaReg">Check back soon for upcoming campus events and activities.</p>
                </div>
            </div>
        )
    }

    return (
        <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm tracking-wider font-novaBold mb-4">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                            />
                        </svg>
                        UPCOMING EVENTS
                    </div>
                    <h2 className="text-4xl font-novaBold text-gray-900 mb-4">Campus Events</h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-purple-300 h-full"></div>

                    {itemsToShow.map((event, index) => {
                        const dateInfo = formatDate(event.date)
                        const isEven = index % 2 === 0

                        return (
                            <div
                                key={event._id}
                                className={`relative flex items-center mb-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                {/* Date Circle */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-purple-600 rounded-full flex flex-col items-center justify-center text-white font-novaBold shadow-lg z-10">
                                    <span className="text-lg">{dateInfo.day}</span>
                                    <span className="text-xs">{dateInfo.month}</span>
                                </div>

                                {/* Event Card */}
                                <div
                                    onClick={() => handleCardClick(event.path)}
                                    className={`ml-24 md:ml-0 ${isEven ? "md:mr-8" : "md:ml-8"} md:w-5/12 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden`}
                                >
                                    <div className="relative">
                                        {event.banner_img ? (
                                            <Image
                                                src={IMAGE_PATH + event.banner_img}
                                                alt={event.name}
                                                height={400}
                                                width={400}
                                                className="w-full h-48 object-top object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                                                <div className="text-white text-center">
                                                    <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span className="text-lg font-novaSemi">Event</span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-novaBold">
                                            EVENT
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-novaBold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                                            {event.name}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed font-novaReg" dangerouslySetInnerHTML={{ __html: event.shortdesc || truncateText(stripHtml(event.description)) }}></p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-purple-600 font-novaSemi">Learn More →</span>
                                            <div className="flex items-center font-novaSemi text-sm text-gray-500">
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {new Date(event.date).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Show More Button */}
                {hasMoreItems && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-purple-600 hover:bg-purple-700 text-white font-novaBold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {showAll ? "Show Less Events" : `View All Events (${filteredEvents.length - initialShowCount} more)`}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

// Circular Widget - Official Document Style
function CircularWidget({ initialShowCount = 3, circularData = [] }) {
    const [showAll, setShowAll] = useState(false)
    const filteredCirculars = circularData.filter((item) => item.type === "Circular")
    const itemsToShow = showAll ? filteredCirculars : filteredCirculars.slice(0, initialShowCount)
    const hasMoreItems = filteredCirculars.length > initialShowCount

    const handleCardClick = (path) => {
        window.location.href = path
    }

    const stripHtml = (html) => {
        const tmp = document.createElement("div")
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ""
    }

    const truncateText = (text, maxLength = 150) => (text.length <= maxLength ? text : text.substr(0, maxLength) + "...")

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    if (filteredCirculars.length === 0) {
        return (
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-novaBold text-gray-700 mb-2">No Circulars Available</h3>
                    <p className="text-gray-500">Official notices and circulars will appear here when published.</p>
                </div>
            </div>
        )
    }

    return (
        <section className="bg-gradient-to-br from-amber-50 to-yellow-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-novaBold mb-4">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        OFFICIAL NOTICES
                    </div>
                    <h2 className="text-4xl font-novaBold text-gray-900 mb-4">Circulars & Notices</h2>
                    <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
                </div>

                {/* Circulars List */}
                <div className="space-y-6">
                    {itemsToShow.map((circular, index) => (
                        <div
                            key={circular._id}
                            onClick={() => handleCardClick(circular.path)}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border-l-4 border-amber-500 overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Document Icon & Number */}
                                <div className="md:w-32 bg-gradient-to-br from-amber-500 to-orange-600 flex flex-col items-center justify-center p-6 text-white">
                                    <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm font-novaBold">#{String(index + 1).padStart(3, "0")}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center mb-2">
                                                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-novaBold mr-3">
                                                    IMPORTANT
                                                </span>
                                                <span className="text-gray-500 font-novaSemi text-sm">{formatDate(circular.date)}</span>
                                            </div>
                                            <h3 className="text-xl font-novaBold text-gray-900 mb-3 hover:text-amber-600 transition-colors">
                                                {circular.name}
                                            </h3>
                                            <p className="text-gray-600 leading-snug line-clamp-2 font-novaReg" dangerouslySetInnerHTML={{ __html: circular.shortdesc || truncateText(stripHtml(circular.description))}}>
                                            </p>
                                        </div>

                                        {/* {circular.banner_img && (
                                            <div className="md:w-32 md:h-24 w-full h-32 md:ml-6 mb-4 md:mb-0 rounded-lg overflow-hidden">
                                                <Image
                                                    src={IMAGE_PATH + circular.banner_img || "/placeholder.svg"}
                                                    alt={circular.name}
                                                    height={400}
                                                    width={400}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )} */}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center text-amber-600 font-novaSemi">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>View Document</span>
                                        </div>
                                        <div className="text-sm text-gray-500 font-novaReg">Official Notice</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More Button */}
                {hasMoreItems && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-amber-600 hover:bg-amber-700 text-white font-novaBold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {showAll
                                ? "Show Less Circulars"
                                : `View All Circulars (${filteredCirculars.length - initialShowCount} more)`}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

// Article Widget - Magazine Style
function ArticleWidget({ initialShowCount = 3, articleData = [] }) {
    const [showAll, setShowAll] = useState(false)
    const filteredArticles = articleData.filter((item) => item.type === "Article")
    const itemsToShow = showAll ? filteredArticles : filteredArticles.slice(0, initialShowCount)
    const hasMoreItems = filteredArticles.length > initialShowCount

    const handleCardClick = (path) => {
        window.location.href = path
    }

    const stripHtml = (html) => {
        const tmp = document.createElement("div")
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ""
    }

    const truncateText = (text, maxLength = 180) => (text.length <= maxLength ? text : text.substr(0, maxLength) + "...")

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    if (filteredArticles.length === 0) {
        return (
            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-novaBold text-gray-700 mb-2">No Articles Available</h3>
                    <p className="text-gray-500 font-novaReg">Explore insightful articles and academic content coming soon.</p>
                </div>
            </div>
        )
    }

    return (
        <section className="bg-gradient-to-br from-emerald-50 to-cyan-100 py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-emerald-600 text-white px-6 py-2 rounded-full text-sm tracking-wide font-novaBold mb-4">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        FEATURED ARTICLES
                    </div>
                    <h2 className="text-4xl font-novaBold text-gray-900 mb-4">Academic Articles</h2>
                    <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {itemsToShow.map((article, index) => (
                        <article
                            key={article._id}
                            onClick={() => handleCardClick(article.path)}
                            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] overflow-hidden group"
                        >
                            <div className="relative">
                                {article.banner_img ? (
                                    <Image
                                        src={IMAGE_PATH + article.banner_img || "/placeholder.svg"}
                                        alt={article.name}
                                        height={400}
                                        width={400}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-lg font-novaSemi">Article</span>
                                        </div>
                                    </div>
                                )}

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-novaBold">
                                    ARTICLE
                                </div>

                                {/* Date Badge */}
                                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-novaSemi">
                                    {formatDate(article.date)}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center mb-4">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                    <span className="text-emerald-600 font-novaSemi text-xs uppercase tracking-wide">
                                        Academic Content
                                    </span>
                                </div>

                                <h3 className="text-2xl font-novaBold text-gray-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                                    {article.name}
                                </h3>
                                <p className="text-gray-600 text-base mb-4 line-clamp-3 leading-relaxed font-novaReg" dangerouslySetInnerHTML={{ __html: article.shortdesc || truncateText(stripHtml(article.description)) }}></p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center text-emerald-600 font-novaSemi">
                                        <span>Read Article</span>
                                        <svg
                                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex items-center text-sm font-novaSemi text-gray-500">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        5 min read
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Show More Button */}
                {hasMoreItems && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-novaBold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {showAll
                                ? "Show Less Articles"
                                : `Explore All Articles (${filteredArticles.length - initialShowCount} more)`}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Widget
