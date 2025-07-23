import { API_NODE_URL } from '@/configs/config';
import React, { useEffect, useState } from 'react';

function Widget({ type, stream, limit }) {
    
    const [widgetData, setWidgetData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!type) return;

            try {
                const queryParams = new URLSearchParams({
                    type,
                    stream: stream?._id || '',
                    limit: limit || ''
                }).toString();

                const res = await fetch(`${API_NODE_URL}widget?${queryParams}`);
                const result = await res.json();
                console.log(result);

                if (result.status) {
                    setWidgetData(result.data || []);
                } else {
                    console.error('API returned error:', result.message);
                    setWidgetData([]);
                }
            } catch (err) {
                console.error('Fetch failed:', err);
                setWidgetData([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [type, stream, limit]);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (type === "News") {
        return <NewsWidget type="News" initialShowCount={limit} newsData={widgetData || []} />
    }
    if (type === "Event") {
        return <NewsWidget type="Event" initialShowCount={limit} newsData={widgetData || []} />
    }
    if (type === "Download Center") {
        return <NewsWidget type="Download Center" initialShowCount={limit} newsData={widgetData || []} />
    }
    if (type === "Circular") {
        return <NewsWidget type="Circular" initialShowCount={limit} newsData={widgetData || []} />
    }
    if (type === "Article") {
        return <NewsWidget type="Article" initialShowCount={limit} newsData={widgetData || []} />
    }
    if (type === "Announcement") {
        return <NewsWidget type="Announcement" initialShowCount={limit} newsData={widgetData || []} />
    }
    return (
        <NewsWidget type="News" initialShowCount={limit} newsData={widgetData || []} />
    );
}

function NewsWidget({ type = "News", initialShowCount = 3, newsData = [] }) {
    const [showAll, setShowAll] = useState(false);

    const filteredNews = newsData.filter((item) => item.type === type);
    const itemsToShow = showAll ? filteredNews : filteredNews.slice(0, initialShowCount);
    const hasMoreItems = filteredNews.length > initialShowCount;

    const handleCardClick = (path) => {
        window.location.href = path; // You can replace with router.push if using Next.js router
    };

    const stripHtml = (html) => {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    const truncateText = (text, maxLength = 150) =>
        text.length <= maxLength ? text : text.substr(0, maxLength) + "...";

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <section className="w-full py-6 px-4 bg-gray-50 ">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest {type}</h2>
                    <div className="w-20 h-1 bg-blue-600 rounded"></div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {itemsToShow.map((item) => (
                        <article
                            key={item._id}
                            onClick={() => handleCardClick(item.path)}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative h-48 bg-gray-200 overflow-hidden">
                                {item.banner_img ? (
                                    <img
                                        src={item.banner_img}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                        <div className="text-white text-center p-4">
                                            <svg className="w-12 h-12 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-sm font-medium">News Image</span>
                                        </div>
                                    </div>
                                )}
                                {/* Date Badge */}
                                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                                    {formatDate(item.date)}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 ">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {item.shortdesc || truncateText(stripHtml(item.description))}
                                </p>

                                {/* Read More */}
                                <div className="flex items-center justify-between">
                                    <span className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                                        Read More →
                                    </span>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {formatDate(item.date)}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Show More/Less */}
                {hasMoreItems && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            {showAll ? (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Show Less
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Show More ({filteredNews.length - initialShowCount} more)
                                </>
                            )}
                        </button>
                    </div>
                )}

                {/* No Data */}
                {filteredNews.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-600 mb-2">No {type} Available</h3>
                        <p className="text-gray-500">Check back later for the latest updates.</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Widget;
