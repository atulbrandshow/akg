'use client';

import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const announcements = [
    {
      date: '15',
      month: 'Sep',
      year: '2024',
      title: 'Inauguration of the new state-of-the-art laboratory for Robotics and AI.'
    },
    {
      date: '10',
      month: 'Sep',
      year: '2024',
      title: 'Appointment of Dr. Priya Sharma as Dean of Academic Affairs.'
    },
    {
      date: '05',
      month: 'Aug',
      year: '2024',
      title: 'Successful completion of the International Conference on Emerging Technologies.'
    },
    {
      date: '20',
      month: 'Jul',
      year: '2024',
      title: 'New scholarship program launched for deserving engineering students.'
    },
    {
      date: '01',
      month: 'Jun',
      year: '2024',
      title: 'Placement drive for final year students scheduled for June 15th.'
    },
    {
      date: '12',
      month: 'May',
      year: '2024',
      title: 'Annual Sports Day celebrated with great enthusiasm and participation.'
    },
    {
      date: '18',
      month: 'Apr',
      year: '2024',
      title: 'Workshop on Cybersecurity Awareness conducted for students and faculty.'
    },
    {
      date: '25',
      month: 'Mar',
      year: '2024',
      title: 'Collaborative research project launched with industry partners for innovation.'
    },
    {
      date: '30',
      month: 'Jan',
      year: '2024',
      title: 'Alumni Meet scheduled for February 10th; all alumni are invited to attend.'
    },
    {
      date: '05',
      month: 'Jan',
      year: '2024',
      title: 'New curriculum for B.Tech programs approved to include emerging technologies.'
    }
];
  

export default function AnnouncementSlider() {
    const sliderRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)

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
        const newIndex = (currentIndex + 1) % announcements.length
        setCurrentIndex(newIndex)
        scrollToIndex(newIndex)
    }

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + announcements.length) % announcements.length
        setCurrentIndex(newIndex)
        scrollToIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [currentIndex])

    return (
        <div className="w-full max-w-7xl mx-auto sm:p-4 p-2">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">ANNOUNCEMENTS</h2>
                <div className="flex gap-2">
                    <button
                        className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                        className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
            <div
                ref={sliderRef}
                className="flex overflow-x-hidden scroll-smooth "
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {announcements.map((announcement, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 scroll-snap-align-start "
                        style={{ scrollSnapAlign: 'start' }}
                    >
                        <div className="bg-[#f1f5fe] rounded-lg shadow-md sm:p-6 p-4 m-2">
                            <div className="flex items-center gap-4">
                                <div className="bg-black text-white rounded-md p-2 text-center w-28">
                                    <div className="text-2xl font-bold">{announcement.date}</div>
                                    <div className="text-sm">{announcement.month}</div>
                                    <div className="text-sm">{announcement.year}</div>
                                </div>
                                <h3 className="sm:text-lg font-semibold">{announcement.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}