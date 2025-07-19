'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCube, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cube'
import { motion, AnimatePresence } from 'framer-motion';
import HighlightPlacement from '@/Components/HighlightPlacement';
import { LogoSlider } from '@/Components';
import { placementsData } from '@/Json/PlacementData';
import PlacementData from '@/Components/PlacementData';

const placementData = [
    {
        title: "600+",
        comp: 'COMPANIES',
        description: "Total number of companies participated in campus recruitment.",
    },
    {
        title: "150+",
        comp: 'MNCs TILL DATE',
        description: "Total number of MNCs till date that have recruited students.",
    },
    {
        img: "/image/company-logos/AirForce.webp",
        description: "Nodal Center for the Indian Air Force for Fast Track Selections.",
    },
    {
        img: "/image/company-logos/IndianArmy.webp",
        description: "Recruitment partner for the Indian Army.",
    },
    {
        img: "/image/company-logos/IndianNavy.webp",
        description: "Nodal Center for Indian Navy for Campus Recruitment.",
    },
    {
        img: "/image/company-logos/tcs.webp",
        description: "TCS - Top recruiter among IT companies.",
    },
    {
        img: "/image/company-logos/infosys.webp",
        description: "Infosys - Offers 100% placement opportunities for MBA graduates.",
    },
    {
        img: "/image/company-logos/adobe.webp",
        description: "Adobe - Renowned for innovative digital solutions.",
    },
    {
        img: "/image/company-logos/google.webp",
        description: "Google - Offers career opportunities in various domains.",
    },
    {
        img: "/image/company-logos/amazon.webp",
        description: "Amazon - A top recruiter in technology and operations.",
    },
    {
        img: "/image/company-logos/microsoft.webp",
        description: "Microsoft - Leading tech giant hiring fresh talent.",
    }
];

const slides = [
    {
        imgSrc: "/image/placement/1.png",
        heading: <>Accelerate your <br /> career at a global scale</>,
        description: `Amazon is a global leader in innovation and technology, offering endless opportunities for growth and development. Thanks to AKG University’s excellent placement support, I’ve kick-started my career with one of the world's most impactful companies, Amazon. I’m excited to be a part of the future of technology.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "NEHA SHARMA",
        companyLogo: "/image/company-logos/AmozonIcon.webp",
        company: "amazon",
    },
    {
        imgSrc: "/image/placement/2.png",
        heading: <>Choose the jobs <br /> you love, not the ones you get</>,
        description: `No doubt, AKG University is one of the best colleges in North India when it comes to education and placement. AKG University does everything possible to get its students placed in the best companies in the world. I would like to thank AKG University for giving me an opportunity to work at Wipro.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "SAKSHI AGRAWAL",
        companyLogo: "/image/company-logos/WIPRO.webp",
        company: "wipro",
    },
    {
        imgSrc: "/image/placement/4.png",
        heading: <>Accelerate your <br /> career at a global scale</>,
        description: `Amazon is a global leader in innovation and technology, offering endless opportunities for growth and development. Thanks to AKG University’s excellent placement support, I’ve kick-started my career with one of the world's most impactful companies, Amazon. I’m excited to be a part of the future of technology.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "SANJAY JAIN",
        companyLogo: "/image/company-logos/AmozonIcon.webp",
        company: "amazon",
    },
    {
        imgSrc: "/image/placement/4.png",
        heading: <>Choose the jobs <br /> you love, not the ones you get</>,
        description: `No doubt, AKG University is one of the best colleges in North India when it comes to education and placement. AKG University does everything possible to get its students placed in the best companies in the world. I would like to thank AKG University for giving me an opportunity to work at Wipro.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "AYUSH AGRAWAL",
        companyLogo: "/image/company-logos/WIPRO.webp",
        company: "wipro",
    },
    {
        imgSrc: "/image/placement/4.png",
        heading: <>Accelerate your <br /> career at a global scale</>,
        description: `Amazon is a global leader in innovation and technology, offering endless opportunities for growth and development. Thanks to AKG University’s excellent placement support, I’ve kick-started my career with one of the world's most impactful companies, Amazon. I’m excited to be a part of the future of technology.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "DEEPAK YADAV",
        companyLogo: "/image/company-logos/AmozonIcon.webp",
        company: "amazon",
    },
    {
        imgSrc: "/image/placement/3.png",
        heading: <>Choose the jobs <br /> you love, not the ones you get</>,
        description: `No doubt, AKG University is one of the best colleges in North India when it comes to education and placement. AKG University does everything possible to get its students placed in the best companies in the world. I would like to thank AKG University for giving me an opportunity to work at Wipro.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "AROHI PRAJAPAT",
        companyLogo: "/image/company-logos/WIPRO.webp",
        company: "wipro",
    }
];

const sections = [
    {
        title: "University Placement Tracker",
        items: [
            "Highest Package Offered",
            "Students Placed",
            "No. of Companies Visited",
            "Campus Placements during COVID-19",
            "Job Roles Offered",
            "Student Diversity",
        ],
    },
    {
        title: "On-Campus Placement Packages",
        items: [
            "Above 25 Lacs",
            "Above 20 Lacs",
            "Above 15 Lacs",
            "10-15 Lacs",
            "07-10 Lacs",
            "05-06 Lacs",
            "Stipend Range",
        ],
    },
    {
        title: "University Placement Analysis",
        items: [
            "Engineering Placement",
            "Management Placement",
            "MCA Placement",
            "Pharma Sciences Placement",
            "Physics Placement",
            "Placement Tracker",
            "Joint Placement Program",
        ],
    },
]

const PlacementSection = ({ title, items }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6"
    >
        <h3 className="text-2xl font-novaBold text-indigo-700 mb-4">{title}</h3>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span className="text-gray-700 hover:text-indigo-600 hover:underline font-novaReg transition-colors duration-200 cursor-pointer">
                        {item}
                    </span>
                </motion.li>
            ))}
        </ul>
    </motion.div>
)

const PlacementHighlights = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <>
            <section className='max-w-[1400px] mx-auto grid grid-cols-5 py-2 px-2'>
                <div className='col-span-3 max-lg:col-span-5'>
                    <h2 className="text-4xl font-novaReg mb-3 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">Career Success Highlights</h2>
                    <p className='font-novaReg text-lg max-sm:text-sm text-justify'>Our university takes pride in its exceptional placement records, consistently achieving impressive success rates year after year. With dedicated training and strong industry partnerships, our students are well-prepared to embark on fulfilling career journeys. From leading multinational corporations to fast-growing startups, graduates secure roles in various industries, showcasing their talent and skills. The continuous efforts of our career development team, along with focused career preparation programs, have resulted in placements across top-tier organizations, giving our students a competitive edge in today’s job market.</p>
                </div>
                <div className='col-span-2 max-lg:col-span-5 max-lg:mt-5'>
                    <div className="w-full mx-auto p-4">
                        <Swiper
                            effect={'cube'}
                            grabCursor={true}
                            loop={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectCube, Autoplay]}
                            className={`mySwiper w-96 max-sm:w-72`}
                        >
                            {placementData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        key={index}
                                        className="p-6 border bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 min-h-60 flex flex-col justify-center max-md:p-3 max-sm:p-3"
                                    >
                                        {item.title ? (
                                            <>
                                                <div>
                                                    <h3 className="text-5xl font-novaSemi text-center text-cyan-700 max-md:text-4xl max-sm:text-3xl">{item.title}</h3>
                                                    <h3 className="text-2xl font-novaSemi text-center text-cyan-700 mb-5 max-md:text-2xl max-md:mb-3 max-sm:text-xl max-sm:mb-3 ">{item.comp}</h3>
                                                </div>
                                                <p className="text-lg font-novaReg max-sm:text-sm text-center">{item.description}</p>
                                            </>
                                        ) : (
                                            <>
                                                <img src={item.img} alt={item.description} className="mx-auto w-32 max-md:mb-5 max-sm:mb-3" />
                                                <p className="text-lg font-novaReg max-sm:text-sm text-center">{item.description}</p>
                                            </>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            <HighlightPlacement />
            <LogoSlider />
            <PlacementData placementsData={placementsData} />
            <section className="bg-[#1c1f52] w-full ">
                <div className="max-w-6xl max-xl:max-w-4xl max-lg:max-w-3xl mx-auto h-full flex justify-start pt-10 items-center flex-col text-white bg-center bg-contain bg-world-map">
                    <span className="text-[#d58544] text-3xl font-novaReg max-sm:text-2xl">Placement</span>
                    <h1 className="text-5xl font-novaBold max-sm:text-4xl">Reviews</h1>
                    <div className="relative w-full flex justify-center items-center">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={30}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: '#slider-button-right',
                                prevEl: '#slider-button-left',
                            }}
                            className="mySwiper"
                        >
                            {slides?.map((student, index) => (
                                <SwiperSlide key={index}>
                                    <div className="my-10 text-center flex flex-col items-center mx-10 max-sm:mx-5">
                                        <h2 className='text-2xl font-novaBold uppercase mb-4'>{student.heading}</h2>
                                        <p className="max-w-3xl max-md:text-sm font-novaReg">{student.description}</p>
                                        <div className="flex flex-col items-center mt-10">
                                            <div className="border-[6px] border-[#e4e01327] rounded-full">
                                                <img
                                                    className="h-32 w-32 object-cover object-top rounded-full bg-gray-400"
                                                    src={student.imgSrc}
                                                    alt={student.name}
                                                />
                                            </div>
                                            <div className="mt-4 uppercase text-center">
                                                <h4 className="font-novaBold text-lg ">{student.name}</h4>
                                                <p className='font-novaReg text-gray-300'>{student.degree} {student.batch}</p>
                                                <small className='font-novaSemi'>{student.company}</small>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div id="slider-button-left" className="absolute -left-10 max-lg:-left-2 max-md:hidden top-1/2 transform -translate-y-1/2 p-2 shadow-md cursor-pointer z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-50 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <div id="slider-button-right" className="absolute -right-10 max-lg:-right-2 max-md:hidden top-1/2 transform -translate-y-1/2 p-2 shadow-md cursor-pointer z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-50 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <section className='max-w-7xl mx-auto px-3'>
                <div className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-novaSemi text-center text-indigo-800 mb-8">University Placement Information</h2>
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                            <div className="flex border-b border-gray-200">
                                {sections.map((section, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`flex-1 py-4 px-6 text-lg font-novaSemi transition-colors duration-200 ${activeTab === index ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </div>
                            <div className="p-6">
                                <AnimatePresence mode="wait">
                                    <PlacementSection key={activeTab} {...sections[activeTab]} />
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlacementHighlights;
