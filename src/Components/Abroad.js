"use client"

import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import {
    Briefcase,
    Clock,
    BookOpen,
    BadgeCheck,
    Wallet,
    Users,
    Network
} from "lucide-react";
import Image from "next/image"

const tabsData = [
    {
        id: "employability",
        icon: Briefcase, // Career-focused
        title: "Career Readiness",
        subtitle: "with Industry Exposure",
        image: "/image/department/career.jpg",
        heading: "Enhanced Employability",
        description:
            "AKG University provides industry-focused programs that prepare students for the real-world job market.",
        points: [
            "Internships with leading companies",
            "Industry-oriented workshops and training",
            "Skill development & placement support",
        ],
    },
    {
        id: "parttime",
        icon: Clock, // Time/work related
        title: "Part-time Work",
        subtitle: "on Campus",
        image: "/image/department/part-time-work.jpg",
        heading: "On-Campus Work Opportunities",
        description:
            "Students can take up part-time roles within the campus to gain valuable experience and financial support.",
        points: [
            "Earn while you learn",
            "Practical exposure in labs, library, and admin roles",
            "Enhances time management & responsibility",
        ],
    },
    {
        id: "degree",
        icon: BookOpen, // Education/degree
        title: "UG & PG",
        subtitle: "Programs",
        image: "/image/department/ug-and-pg.jpg",
        heading: "Globally Recognized Degrees",
        description:
            "Our degrees are recognized by top employers and universities, opening global career and higher education opportunities.",
        points: [
            "International collaborations & MoUs",
            "NAAC & AICTE accredited courses",
            "Research-driven curriculum",
        ],
    },
    {
        id: "workpermit",
        icon: BadgeCheck, // Verification, success
        title: "Internships",
        subtitle: "& Industry Projects",
        image: "/image/department/internship.jpg",
        heading: "Industry Training & Placement",
        description:
            "Get hands-on exposure with industry projects, internships, and placement support to build your future.",
        points: [
            "100+ placement partners",
            "Paid internships & projects",
            "Career development programs",
        ],
    },
    {
        id: "scholarships",
        icon: Wallet, // Finance/money
        title: "Scholarships",
        subtitle: "& Financial Aid",
        image: "/image/department/scholarship.jpg",
        heading: "Scholarship Opportunities",
        description:
            "AKG University supports meritorious and financially weak students through scholarships and aid programs.",
        points: [
            "Merit-based scholarships",
            "Government & private financial aid",
            "Research fellowships",
        ],
    },
    {
        id: "cultural",
        icon: Users, // People, community
        title: "Cultural Life",
        subtitle: "& Diversity",
        image: "/image/department/cultural-life.jpg",
        heading: "Vibrant Campus Life",
        description:
            "From cultural fests to student clubs, AKG University ensures a holistic experience beyond academics.",
        points: [
            "Annual fests & technical events",
            "Student-run clubs & societies",
            "Cross-cultural exchange programs",
        ],
    },
    {
        id: "alumni",
        icon: Network, // Connections, alumni
        title: "Alumni Network",
        subtitle: "& Mentorship",
        image: "/image/department/alumni-network.jpg",
        heading: "Strong Alumni & Mentorship",
        description:
            "Our alumni network connects current students with industry professionals for guidance and career growth.",
        points: [
            "Active alumni association",
            "Career mentorship programs",
            "Industry networking events",
        ],
    },
];

export default function Abroad() {
    const [activeTab, setActiveTab] = useState("employability")
    const swiperRef = useRef(null)

    const activeTabData = tabsData.find((tab) => tab.id === activeTab)

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.realIndex
        setActiveTab(tabsData[currentIndex].id)
    }

    const goToPrevious = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper
            swiper.slidePrev()
        }
    }

    const goToNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper
            swiper.slideNext()
        }
    }

    const handleTabClick = (tabId) => {
        const tabIndex = tabsData.findIndex((tab) => tab.id === tabId)
        setActiveTab(tabId)
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(tabIndex)
        }
    }

    return (
        <section className="bg-white">
            <div className="max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8 pb-10">
                <div className="pt-10 text-center">
                    <h2 className="text-3xl font-novaReg">Shaping Global Futures at AKG University</h2>
                    <p className="font-novaReg max-w-4xl mx-auto mt-3">
                        Through AKG University's <span className="font-semibold">Global Education Exchange Program</span>,
                        students get the opportunity to pursue a part of their degree at renowned international partner universities,
                        gaining exposure to diverse cultures and global academic standards.
                    </p>
                </div>

                <div className="mt-10 text-center">
                    <p className="font-novaReg">
                        International Learning Opportunities offered across leading Countries
                    </p>
                    <p className="mt-1 text-sm text-gray-600 font-novaReg">
                        (Students can complete foundation years at AKG University and transfer credits abroad,
                        ensuring reduced cost and a globally recognized degree.)
                    </p>
                    <Image
                        className="mt-10 mx-auto"
                        src="/image/international-flags.png"
                        height={400}
                        width={400}
                        alt="International Flags"
                    />
                </div>
                {/* Navigation Arrows and Tabs */}
                <div className="mt-10 flex items-center justify-center mb-12">
                    <button
                        onClick={goToPrevious}
                        className="rounded-full transition-colors mr-2 sm:mr-4 hover:scale-110 active:scale-95 flex-shrink-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                    </button>

                    <div className="flex-1 max-w-7xl overflow-hidden">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation]}
                            spaceBetween={16}
                            slidesPerView={1}
                            centeredSlides={false}
                            loop={true}
                            onSlideChange={handleSlideChange}
                            allowTouchMove={true}
                            watchSlidesProgress={true}
                            breakpoints={{
                                400: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 32,
                                },
                            }}
                            className="tabs-swiper"
                        >
                            {tabsData.map((tab) => (
                                <SwiperSlide key={tab.id}>
                                    <button
                                        onClick={() => handleTabClick(tab.id)}
                                        className={`flex flex-col items-center p-3 sm:p-4 rounded-lg w-full min-w-0`}
                                    >
                                        <div
                                            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-xl sm:text-2xl mb-2 sm:mb-3 transition-all duration-300 flex-shrink-0 ${activeTab === tab.id ? "bg-blue-500 text-red-500" : "bg-white drop-shadow-md"
                                                }`}
                                        >
                                            <tab.icon strokeWidth={1.5} className={`w-10 h-10 ${activeTab === tab.id ? "text-white" : "text-gray-300"
                                                }`} />
                                        </div>
                                        <div className="text-center w-32">
                                            <div className={`font-novaReg leading-tight ${activeTab === tab.id ? "font-novaSemi text-blue-600" : "text-gray-400"
                                                }`}>{tab.title}</div>
                                        </div>
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <button
                        onClick={goToNext}
                        className="rounded-full transition-colors ml-2 sm:ml-4 hover:scale-110 active:scale-95 flex-shrink-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>

                {/* Content Area */}
                <div className="overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Image Section */}
                        <div className="lg:w-1/2 relative overflow-hidden">
                            <div key={activeTab} className="h-[35vh] sm:h-[50vh] animate-fadeIn">
                                <img
                                    src={activeTabData.image || "/placeholder.svg"}
                                    alt={activeTabData.heading}
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-1/2 p-8 lg:p-12">
                            <div key={`content-${activeTab}`} className="animate-slideIn">
                                <h2 className="text-2xl font-novaReg leading-none w-40 text-gray-900 mb-6">{activeTabData.heading}</h2>

                                <p className="text-black font-novaReg leading-relaxed mb-8">{activeTabData.description}</p>

                                <div className="space-y-4">
                                    {activeTabData.points.map((point, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3 animate-slideIn"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="text-black font-novaReg">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
