'use client';
import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar, ExternalLink } from 'lucide-react'
import { API_NODE_URL } from '@/configs/config';
import Link from 'next/link';

export default function AnnouncementSlider() {
    const sliderRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [announcements, setAnnouncements] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return {
            date: date.getDate().toString().padStart(2, '0'),
            month: date.toLocaleDateString('en-US', { month: 'short' }),
            year: date.getFullYear().toString()
        }
    }

    const fetchAnnouncements = async () => {
        try {
            setLoading(true)
            const res = await fetch(`${API_NODE_URL}announcement/all`, {
                credentials: "include"
            })

            const result = await res.json()
            if (result.status) {
                const activeAnnouncements = result?.data?.filter(announcement => announcement.status).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                setAnnouncements(activeAnnouncements)
                setError(null)
            }
        } catch (error) {
            console.error("Error fetching announcements: ", error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    const scrollToIndex = (index) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth
            sliderRef.current.scrollTo({
                left: slideWidth * index,
                behavior: 'smooth'
            })
        }
    }

    const nextSlide = () => {
        if (announcements.length === 0) return
        const newIndex = (currentIndex + 1) % announcements.length
        setCurrentIndex(newIndex)
        scrollToIndex(newIndex)
    }

    const prevSlide = () => {
        if (announcements.length === 0) return
        const newIndex = (currentIndex - 1 + announcements.length) % announcements.length
        setCurrentIndex(newIndex)
        scrollToIndex(newIndex)
    }

    // Fetch announcements on component mount
    useEffect(() => {
        fetchAnnouncements()
    }, [])

    // Auto-slide functionality
    useEffect(() => {
        if (announcements.length <= 1) return

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const newIndex = (prevIndex + 1) % announcements.length
                scrollToIndex(newIndex)
                return newIndex
            })
        }, 5000)

        return () => clearInterval(interval)
    }, [announcements.length])

    if (loading) {
        return (
            <div className="w-full max-w-7xl mx-auto sm:p-4 p-2">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-novaBold text-gray-800 tracking-tight">ANNOUNCEMENTS</h2>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-8">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <span className="ml-3 text-gray-600 font-novaSemi">Loading announcements...</span>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full max-w-7xl mx-auto sm:p-4 p-2">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-novaBold text-gray-800 tracking-tight">ANNOUNCEMENTS</h2>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl shadow-lg p-8">
                    <div className="flex items-center justify-center">
                        <div className="text-red-600 font-novaSemi">
                            Failed to load announcements: {error}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (announcements.length === 0) {
        return (
            <div className="w-full max-w-7xl mx-auto sm:p-4 p-2">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-novaBold text-gray-800 tracking-tight">ANNOUNCEMENTS</h2>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-8">
                    <div className="flex items-center justify-center">
                        <div className="text-gray-600 font-novaSemi">
                            No announcements available at the moment.
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-7xl mx-auto sm:p-4 p-2">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-novaBold text-gray-800 tracking-tight">ANNOUNCEMENTS</h2>
                {announcements.length > 1 && (
                    <div className="max-sm:hidden flex gap-3">
                        <button
                            className="group p-3 rounded-full bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 shadow-md hover:shadow-lg"
                            onClick={prevSlide}
                            aria-label="Previous announcement"
                        >
                            <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                        </button>
                        <button
                            className="group p-3 rounded-full bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 shadow-md hover:shadow-lg"
                            onClick={nextSlide}
                            aria-label="Next announcement"
                        >
                            <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                        </button>
                    </div>
                )}
            </div>

            <div
                ref={sliderRef}
                className="flex overflow-x-hidden scroll-smooth"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {announcements.map((announcement) => {
                    const { date, month, year } = formatDate(announcement.createdAt)

                    return (
                        <div
                            key={announcement._id}
                            className="w-full flex-shrink-0"
                            style={{ scrollSnapAlign: 'start' }}
                        >
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 sm:p-5 p-2 border border-blue-100">
                                <div className="flex items-start gap-3 sm:gap-6">
                                    {/* Date Card */}
                                    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-lg p-2 text-center min-w-16 sm:min-w-[90px] shadow-lg">
                                        <div className="text-2xl sm:text-3xl font-novaBold mb-1">{date}</div>
                                        <div className="text-sm font-novaSemi opacity-90 uppercase tracking-wide">{month}</div>
                                        <div className="text-sm font-novaSemi opacity-75">{year}</div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <Link
                                                    href={announcement.link || "#"}
                                                    className="group block"
                                                >
                                                    <h3 className="sm:text-lg md:text-xl font-novaBold text-gray-800 group-hover:text-blue-700 transition-colors duration-200 leading-tight mb-3">
                                                        {announcement.title}
                                                    </h3>
                                                </Link>

                                                <div className="flex items-center gap-4 text-sm text-gray-600">

                                                    {announcement.stream && (
                                                        <div className="flex items-center gap-1">
                                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                            <span className="font-novaSemi text-green-700">Live</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {announcement.link && (
                                                <Link
                                                    href={announcement.link}
                                                    className="max-sm:hidden flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-novaSemi transition-colors duration-200 shadow-md hover:shadow-lg group"
                                                >
                                                    <span>Read More</span>
                                                    <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {announcements.length > 1 && (
                <div className="sm:hidden my-2 flex justify-center items-center gap-3">
                    <button
                        className="group p-3 rounded-full bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 shadow-md hover:shadow-lg"
                        onClick={prevSlide}
                        aria-label="Previous announcement"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    </button>
                    <button
                        className="group p-3 rounded-full bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 shadow-md hover:shadow-lg"
                        onClick={nextSlide}
                        aria-label="Next announcement"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    </button>
                </div>
            )}
        </div>
    )
}
