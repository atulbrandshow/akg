'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const stats = [
  { label: "Company Visits", value: "282+", color: "#FF6B6B" },
  { label: "Highest International Package", value: "₹1.13 CR", color: "#aa159e" },
  { label: "Highest National Package", value: "₹33.80 LPA", color: "#370f66" },
  { label: "Placement Offers", value: "1406", color: "#45B7D1" },
  { label: "Package Offered to 5 Students", value: "₹20 LPA", color: "#6e15aa" },
  { label: "Package Offered to 53 Students", value: "₹10-20 LPA", color: "#F7B731" },
  { label: "Package Offered to 306 Students", value: "₹5-10 LPA", color: "#5D5FEF" },
  { label: "Package Offered to 1042 Students", value: "₹5 LPA", color: "#aa4515" },
]

const placements = [
  {
    name: "Aditi Roy",
    course: "B.Tech CSE (2019-2023)",
    ctc: "1.3 Crore",
    company: "Microsoft",
    image: "/image/placement/placement1.webp"
  },
  {
    name: "Shreya Sharma",
    course: "B.Tech CSE (2019-2023)",
    ctc: "33.5 Lacs",
    company: "Zomato",
    image: "/image/placement/placement3.jpeg"
  },
  {
    name: "Isha Patel",
    course: "B.Tech CSE (2019-22)",
    ctc: "20 Lacs",
    company: "OLA",
    image: "/image/placement/placement4.webp"
  },
  {
    name: "Shruti Prajapati",
    course: "B.Tech CSE (2019-2023)",
    ctc: "18 Lacs",
    company: "Tech Mahindra",
    image: "/image/placement/placement5.jpg"
  }
]

export default function Placement() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % placements.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handleStatClick = (index) => {
    if (!isAnimating) {
      setIsAnimating(true)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  return (
    <div className="w-full h-full bg-gradient-to-r from-purple-200 to-cyan-200 text-white py-20 px-3 sm:p-8 overflow-hidden">
      <h1 className="text-[42px] text-center font-novaBold max-lg:text-4xl max-md:text-3xl text-gray-800">
        Placement{" "}
        <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
          Glimpses
        </span>
      </h1>

      <div className="mt-8 relative w-full h-[400px] sm:h-[600px]">
        {/* Circular Stats */}
        <div className="absolute inset-0 flex items-center justify-center">
          {stats.map((stat, index) => (
            <button
              key={index}
              onClick={() => handleStatClick(index)}
              className={`absolute transform transition-all duration-500 ease-in-out ${isAnimating ? 'scale-95 opacity-50' : ''
                } animate-fade-in hidden sm:flex`}
              style={{
                top: `${40 - 40 * Math.cos((index / stats.length) * 2 * Math.PI)}%`,
                left: `${50 + 30 * Math.sin((index / stats.length) * 2 * Math.PI)}%`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div
                className="w-16 h-16 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center text-center p-2 transition-transform hover:scale-110 animate-pulse"
                style={{ backgroundColor: stat.color, animationDuration: '3s' }}
              >
                <span className="text-xs font-semibold">{stat.label}</span>
                <span className="text-sm sm:text-lg font-bold mt-1">{stat.value}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Stats */}
        <div className="sm:hidden grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => (
            <button
              key={index}
              onClick={() => handleStatClick(index)}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="w-full h-24 rounded-lg flex flex-col items-center justify-center text-center p-2 transition-transform hover:scale-105 animate-pulse"
                style={{ backgroundColor: stat.color, animationDuration: '3s' }}
              >
                <span className="text-xs font-semibold">{stat.label}</span>
                <span className="text-lg font-bold mt-1">{stat.value}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Central Placement Info */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-60 h-60 sm:w-72 sm:h-72 bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full flex items-center justify-center overflow-hidden animate-rotate">
            <div className="text-center p-4 animate-fade-in" key={activeIndex}>
              <Image
                src={placements[activeIndex].image}
                alt={placements[activeIndex].name}
                width={120}
                height={120}
                className="rounded-full max-sm:h-28 max-sm:w-28 aspect-square object-cover mx-auto mb-2 sm:mb-4"
              />
              <h2 className="text-lg sm:text-xl text-black max-sm:text-base font-novaBold">{placements[activeIndex].name}</h2>
              <p className="text-xs text-gray-700">{placements[activeIndex].course}</p>
              <p className="text-sm sm:text-lg font-novaSemi text-gray-800 mt-1 sm:mt-2">CTC: ₹{placements[activeIndex].ctc}</p>
              <p className="text-xs sm:text-sm text-gray-700">Placed at {placements[activeIndex].company}</p>
            </div>
          </div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10 animate-float"
              style={{
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                backgroundColor: stats[Math.floor(Math.random() * stats.length)].color,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

