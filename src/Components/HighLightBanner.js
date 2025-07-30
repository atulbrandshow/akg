"use client"

import { API_NODE_URL } from "@/configs/config"
import Image from "next/image"
import { useState, useEffect } from "react"

const HighlightBanner = ({ stream, tags = [] }) => {
    const [banners, setBanners] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    // Fetch banners from API
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                setLoading(true)
                const queryParams = new URLSearchParams({
                    page: 1,
                    limit: 50,
                    sortBy: "order",
                    sortOrder: "asc",
                    status: "true",
                })

                if (stream) {
                    queryParams.append("stream", stream?._id)
                }

                if (tags.length > 0) {
                    tags.forEach((tag) => queryParams.append("tags", tag))
                }

                const response = await fetch(`${API_NODE_URL}highlight-banner/get-by-tags?${queryParams}`)
                const data = await response.json()
                console.log(data);

                if (data.status) {
                    setBanners(data.data.banners)
                } else {
                    setError("Failed to fetch banners")
                }
            } catch (err) {
                setError("Error fetching banners")
                console.error("Error:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchBanners()
    }, [stream, tags])

    // Auto-slide effect for multiple banners
    useEffect(() => {
        if (banners.length > 1) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % banners.length)
            }, 4000) // Change slide every 4 seconds

            return () => clearInterval(interval)
        }
    }, [banners.length])

    // Get size classes based on banner size
    const getSizeClasses = (size) => {
        switch (size?.toLowerCase()) {
            case "small":
                return "h-32 md:h-40"
            case "medium":
                return "h-48 md:h-64"
            case "large":
                return "h-64 md:h-80"
            case "extra-large":
                return "h-80 md:h-96"
            default:
                return "h-48 md:h-64"
        }
    }

    // Loading state
    if (loading) {
        return (
            <div className="w-full bg-gray-200 animate-pulse rounded-lg">
                <div className="h-48 md:h-64 bg-gray-300 rounded-lg"></div>
            </div>
        )
    }

    // Error state
    if (error) {
        return (
            <div className="w-full p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-center">{error}</p>
            </div>
        )
    }

    // No banners found
    if (banners.length === 0) {
        return null
    }

    // Single banner display
    if (banners.length === 1) {
        const banner = banners[0]
        return (
            <div
                className={`relative w-full ${getSizeClasses(banner.size)} overflow-hidden rounded-lg shadow-lg group cursor-pointer`}
            >
                <a href={banner.link} className="block w-full h-full">
                    <Image
                        src={'https://csip-image.blr1.digitaloceanspaces.com/csip-image/HighlightBanner'+banner.banner}
                        alt={banner.bannerAlt || banner.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        width={100}
                        height={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                            <h3 className="text-white text-lg md:text-xl font-bold mb-2 line-clamp-2">{banner.title}</h3>
                            {banner.description && (
                                <p className="text-white/90 text-sm md:text-base line-clamp-2">{banner.description}</p>
                            )}
                        </div>
                    </div>
                </a>
            </div>
        )
    }

    // Multiple banners slider
    return (
        <div className={`relative w-full ${getSizeClasses(banners[0]?.size)} overflow-hidden rounded-lg shadow-lg`}>
            {/* Slides */}
            <div className="relative w-full h-full">
                {banners.map((banner, index) => (
                    <div
                        key={banner._id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <a href={banner.link} className="block w-full h-full">
                            <img
                                src={banner.banner || "/placeholder.svg"}
                                alt={banner.bannerAlt || banner.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                    <h3 className="text-white text-lg md:text-xl font-bold mb-2 line-clamp-2">{banner.title}</h3>
                                    {banner.description && (
                                        <p className="text-white/90 text-sm md:text-base line-clamp-2">{banner.description}</p>
                                    )}
                                    {banner.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {banner.tags.slice(0, 3).map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Navigation arrows */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}

export default HighlightBanner
