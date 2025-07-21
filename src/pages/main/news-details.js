import Breadcrumb from '@/Components/Breadcrumb';
import React from 'react'

function NewsDetailPage({ data }) {
    console.log(data);

    if (!data) {
        return <div className="p-4 text-red-600">No news data available.</div>
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <Breadcrumb data={data?.breadCrumb} />
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{data.name}</h1>

            {/* Date & Category */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <span>{formatDate(data.addedon)}</span>
                {data.category && (
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {data.category}
                    </span>
                )}
            </div>

            {/* Banner Image */}
            {data.banner_img && (
                <img
                    src={data.banner_img}
                    alt={data.name}
                    className="w-full h-64 object-cover rounded-lg shadow mb-6"
                />
            )}

            {/* Description with HTML */}
            <div
                className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-800"
                dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>

            {/* Gallery Images */}
            {Array.isArray(data.images) && data.images.length > 0 && (
                <div className="mt-10">
                    <h3 className="text-lg font-semibold mb-2">More Images</h3>
                    <div className="flex gap-4 flex-wrap">
                        {data.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`img-${index}`}
                                className="w-32 h-32 object-cover rounded shadow"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default NewsDetailPage

function formatDate(dateString) {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
