"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import { motion, AnimatePresence } from "framer-motion";
import HighlightPlacement from "@/Components/HighlightPlacement";
import { LogoSlider } from "@/Components";
import { placementsData } from "@/Json/PlacementData";
import PlacementData from "@/Components/PlacementData";

const placementData = [
    {
        title: "600+",
        comp: "COMPANIES",
        description: "Total number of companies participated in campus recruitment.",
    },
    {
        title: "150+",
        comp: "MNCs TILL DATE",
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
    },
];

const slides = [
    {
        imgSrc: "/image/student/ankit-mishra.webp",
        heading: (
            <>
                Built a strong <br /> foundation for success
            </>
        ),
        description: `Being a graduate of AKGEC, I truly appreciate the strong academic foundation and enriching campus environment that shaped both my technical and personal growth.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2019-2023)",
        name: "ANKIT MISHRA",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "Arista Networks",
    },
    {
        imgSrc: "/image/student/ritik-gupta.webp",
        heading: (
            <>
                Learn, innovate <br /> and grow together
            </>
        ),
        description: `AKGEC provided me with a balanced environment where academics, innovation, and collaboration went hand in hand throughout my journey.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2018-2022)",
        name: "RITIK GUPTA",
        companyLogo: "/image/company-logos/microsoft.webp",
        company: "PayPal",
    },
    {
        imgSrc: "/image/student/rishabh-tyagi.webp",
        heading: (
            <>
                Transform passion <br /> into real impact
            </>
        ),
        description: `AKGEC played a major role in shaping my confidence, technical mindset, and practical problem-solving abilities for the software industry`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2018-2022)",
        name: "RISHABH TYAGI",
        companyLogo: "/image/company-logos/amazon.webp",
        company: "Amazon",
    },
    {
        imgSrc: "/image/student/prabhanshu-chauhan.webp",
        heading: (
            <>
                Shape your future <br /> with practical learning
            </>
        ),
        description: `AKGEC gave me much more than theoretical knowledge by preparing me to confidently face real-world challenges and opportunities.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2016-2020)",
        name: "PRABHANSHU CHAUHAN",
        companyLogo: "/image/company-logos/google.webp",
        company: "Confluent",
    },
    {
        imgSrc: "/image/student/garima-pandey.webp",
        heading: (
            <>
                Discover your <br /> true potential
            </>
        ),
        description: `My journey at AKGEC was transformative, helping me grow alongside talented peers while building confidence and technical expertise.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2019-2023)",
        name: "GARIMA PANDEY",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "Amazon",
    },
    {
        imgSrc: "/image/student/suhail-ahmad.webp",
        heading: (
            <>
                Create memories <br /> beyond classrooms
            </>
        ),
        description: `AKGEC was more than an institution for me—it became a place of growth, friendships, unforgettable experiences, and lifelong learning.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2021-2025)",
        name: "SUHAIL AHMAD",
        companyLogo: "/image/company-logos/microsoft.webp",
        company: "Benefi Global",
    },
    {
        imgSrc: "/image/student/ayush-raghuwanshi.webp",
        heading: (
            <>
                Turn ideas into <br /> real achievements
            </>
        ),
        description: `The blend of academics, innovation, and experiential learning at AKGEC helped me build confidence and a growth-oriented mindset.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2021-2025)",
        name: "AYUSH RAGHUWANSHI",
        companyLogo: "/image/company-logos/amazon.webp",
        company: "Benefi Global",
    },
    {
        imgSrc: "/image/student/ayush-jain.webp",
        heading: (
            <>
                Build skills for <br /> tomorrow’s challenges
            </>
        ),
        description: `The environment at AKGEC encouraged creativity, leadership, teamwork, and practical learning through impactful experiences.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2020-2024)",
        name: "AYUSH JAIN",
        companyLogo: "/image/company-logos/google.webp",
        company: "Google",
    },
    {
        imgSrc: "/image/student/himanshu-sachan.webp",
        heading: (
            <>
                Bridge theory with <br /> practical innovation
            </>
        ),
        description: `AKGEC helped me bridge the gap between theoretical concepts and real-world applications through innovation and industry exposure.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2019-2023)",
        name: "HIMANSHU SACHAN",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "SHL",
    },
    {
        imgSrc: "/image/student/akshay-agarwal.webp",
        heading: (
            <>
                Grow through <br /> leadership and learning
            </>
        ),
        description: `The collaborative campus culture at AKGEC helped me develop technical expertise, leadership abilities, and lifelong values.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "AKSHAY AGARWAL",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "CRED",
    },
    {
        imgSrc: "/image/student/kavi-kumar.webp",
        heading: (
            <>
                Empowering ideas <br /> with innovation
            </>
        ),
        description: `AKGEC provided an environment that encouraged exploration, creativity, teamwork, and strong professional growth opportunities.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2018-2022)",
        name: "KAVI KUMAR",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "PayPal",
    },
    {
        imgSrc: "/image/student/deepanshu-jain.webp",
        heading: (
            <>
                Develop confidence <br /> beyond academics
            </>
        ),
        description: `The balanced mix of academics, practical exposure, and student activities at AKGEC shaped both my career and personality.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2016-2020)",
        name: "DEEPANSHU JAIN",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "EclecticIQ",
    },
    {
        imgSrc: "/image/student/simranpreet-kaur.webp",
        heading: (
            <>
                Experience learning <br /> with vibrant campus life
            </>
        ),
        description: `AKGEC offered me a strong academic foundation along with a lively campus culture that supported growth and leadership.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2015-2019)",
        name: "SIMRANPREET KAUR",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "Microsoft",
    },
    {
        imgSrc: "/image/student/pranat-sharma.webp",
        heading: (
            <>
                Achieve balance in <br /> academics and growth
            </>
        ),
        description: `The modern infrastructure, practical learning approach, and active societies at AKGEC made my journey truly enriching.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2018-2022)",
        name: "PRANAT SHARMA",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "Coin Switch",
    },
    {
        imgSrc: "/image/student/aditya-gupta.webp",
        heading: (
            <>
                Build confidence <br /> for real challenges
            </>
        ),
        description: `AKGEC helped me improve technically and personally while encouraging participation in hackathons and practical projects.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "ADITYA GUPTA",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "Eleven",
    },
    {
        imgSrc: "/image/student/arnav-jain.webp",
        heading: (
            <>
                Prepare yourself <br /> for future success
            </>
        ),
        description: `The practical exposure, supportive faculty, and extracurricular culture at AKGEC shaped me into a more capable individual.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2018-2022)",
        name: "ARNAV JAIN",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "Amazon",
    },
    {
        imgSrc: "/image/student/suyash-singh.webp",
        heading: (
            <>
                Find inspiration <br /> among innovators
            </>
        ),
        description: `AKGEC connected me with talented peers, mentors, and opportunities that inspired me to continuously push my limits.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2020-2024)",
        name: "SUYASH SINGH",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "Abnormal AI",
    },
    {
        imgSrc: "/image/student/vinayak-gupta.webp",
        heading: (
            <>
                A campus that <br /> feels like home
            </>
        ),
        description: `AKGEC gave me unforgettable memories, meaningful friendships, and a supportive environment for personal and technical growth.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "VINAYAK GUPTA",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "Uber",
    },
    {
        imgSrc: "/image/student/ayush-verma.webp",
        heading: (
            <>
                Lead with innovation <br /> and confidence
            </>
        ),
        description: `AKGEC encouraged curiosity, leadership, and hands-on learning experiences that continue to guide my professional journey.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2019-2023)",
        name: "AYUSH VERMA",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "Truemeds",
    },
    {
        imgSrc: "/image/student/alok-ranjan.webp",
        heading: (
            <>
                Grow with purpose <br /> and resilience
            </>
        ),
        description: `The dynamic learning environment at AKGEC helped me nurture my aspirations, creativity, and long-term growth mindset.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "ALOK RANJAN",
        companyLogo: "/image/company-logos/goldman-sachs.webp",
        company: "Gainsight",
    },
    {
        imgSrc: "/image/placement/1.png",
        heading: (
            <>
                Accelerate your <br /> career at a global scale
            </>
        ),
        description: `Amazon is a global leader in innovation and technology, offering endless opportunities for growth and development. Thanks to AKG University’s excellent placement support, I’ve kick-started my career with one of the world's most impactful companies, Amazon. I’m excited to be a part of the future of technology.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "NEHA SHARMA",
        companyLogo: "/image/company-logos/AmozonIcon.webp",
        company: "amazon",
    },
    {
        imgSrc: "/image/placement/2.png",
        heading: (
            <>
                Choose the jobs <br /> you love, not the ones you get
            </>
        ),
        description: `No doubt, AKG University is one of the best colleges in North India when it comes to education and placement. AKG University does everything possible to get its students placed in the best companies in the world. I would like to thank AKG University for giving me an opportunity to work at Wipro.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "SAKSHI AGRAWAL",
        companyLogo: "/image/company-logos/WIPRO.webp",
        company: "wipro",
    },
    {
        imgSrc: "/image/placement/4.png",
        heading: (
            <>
                Accelerate your <br /> career at a global scale
            </>
        ),
        description: `Amazon is a global leader in innovation and technology, offering endless opportunities for growth and development. Thanks to AKG University’s excellent placement support, I’ve kick-started my career with one of the world's most impactful companies, Amazon. I’m excited to be a part of the future of technology.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "SANJAY JAIN",
        companyLogo: "/image/company-logos/AmozonIcon.webp",
        company: "amazon",
    },
    {
        imgSrc: "/image/placement/4.png",
        heading: (
            <>
                Choose the jobs <br /> you love, not the ones you get
            </>
        ),
        description: `No doubt, AKG University is one of the best colleges in North India when it comes to education and placement. AKG University does everything possible to get its students placed in the best companies in the world. I would like to thank AKG University for giving me an opportunity to work at Wipro.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "AYUSH AGRAWAL",
        companyLogo: "/image/company-logos/WIPRO.webp",
        company: "wipro",
    },
    {
        imgSrc: "/image/placement/4.png",
        heading: (
            <>
                Accelerate your <br /> career at a global scale
            </>
        ),
        description: `Amazon is a global leader in innovation and technology, offering endless opportunities for growth and development. Thanks to AKG University’s excellent placement support, I’ve kick-started my career with one of the world's most impactful companies, Amazon. I’m excited to be a part of the future of technology.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "DEEPAK YADAV",
        companyLogo: "/image/company-logos/AmozonIcon.webp",
        company: "amazon",
    },
    {
        imgSrc: "/image/placement/3.png",
        heading: (
            <>
                Choose the jobs <br /> you love, not the ones you get
            </>
        ),
        description: `No doubt, AKG University is one of the best colleges in North India when it comes to education and placement. AKG University does everything possible to get its students placed in the best companies in the world. I would like to thank AKG University for giving me an opportunity to work at Wipro.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2017-2021)",
        name: "AROHI PRAJAPAT",
        companyLogo: "/image/company-logos/WIPRO.webp",
        company: "wipro",
    },
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
];

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
);

const yearlyData = {
    2021: {
        companies: "220",
        students: "928",
        offers: "1329",
        exclusive: "598",
        salary0_5: "905",
        salary5_10: "376",
        salary10_20: "26",
        salary20plus: "7",
        average: "4.67",
        highest: "30",
    },
    2022: {
        companies: "225",
        students: "973",
        offers: "2008",
        exclusive: "767",
        salary0_5: "1412",
        salary5_10: "507",
        salary10_20: "41",
        salary20plus: "38",
        average: "5.13",
        highest: "113",
    },
    2023: {
        companies: "220",
        students: "1205",
        offers: "1406",
        exclusive: "833",
        salary0_5: "543",
        salary5_10: "236",
        salary10_20: "49",
        salary20plus: "5",
        average: "5.22",
        highest: "33.8",
    },
    2024: {
        companies: "235",
        students: "1110",
        offers: "1727",
        exclusive: "1080",
        salary0_5: "454",
        salary5_10: "607",
        salary10_20: "14",
        salary20plus: "5",
        average: "5.68",
        highest: "42.75",
    },
    2025: {
        companies: "322",
        students: "1152",
        offers: "1509",
        exclusive: "983",
        salary0_5: "423",
        salary5_10: "651",
        salary10_20: "18",
        salary20plus: "6",
        average: "6.09",
        highest: "30",
    },
};

const StatCard = ({ label, value, icon, highlight }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{
            translateY: -5,
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        }}
        className={`relative overflow-hidden p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
            highlight
                ? "bg-gradient-to-br from-[#df8934] to-[#c76e20] text-white shadow-orange-200"
                : "bg-white border border-gray-100 shadow-lg shadow-gray-100"
        }`}
    >
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl ${highlight ? "bg-white/20" : "bg-indigo-50"}`}>{icon}</div>
            {highlight && (
                <div className="text-[10px] font-novaBold uppercase tracking-widest bg-white/30 px-2 py-1 rounded-full">
                    Top Performer
                </div>
            )}
        </div>
        <div>
            <span className={`block text-3xl font-novaBold mb-1 ${highlight ? "text-white" : "text-[#1c1f52]"}`}>
                {value}
            </span>
            <span className={`text-sm font-novaMedium ${highlight ? "text-orange-50" : "text-gray-500"}`}>{label}</span>
        </div>
    </motion.div>
);

const PlacementHighlightsTable = () => {
    const [selectedYear, setSelectedYear] = useState("2025");
    const years = ["2021", "2022", "2023", "2024", "2025"];
    const currentData = yearlyData[selectedYear];

    const icons = {
        companies: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
            </svg>
        ),
        students: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        ),
        offers: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        exclusive: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
            </svg>
        ),
        salary: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2zM7 7h10M7 12h10m-10 5l8.5 8M7 17h3c6.667 0 6.667-10 0-10"
                />
            </svg>
        ),
        highest: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <div className="text-left w-full md:w-auto">
                    <span className="text-[#df8934] text-sm font-novaBold uppercase tracking-widest block mb-2">
                        Performance Analytics
                    </span>
                    <h2 className="text-4xl font-novaBold text-[#1c1f52]">Placement Statistics</h2>
                </div>

                <div className="flex bg-gray-100 p-1.5 rounded-2xl w-full md:w-auto overflow-x-auto whitespace-nowrap scrollbar-hide">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-6 py-2.5 rounded-xl font-novaSemi transition-all duration-300 ${
                                selectedYear === year
                                    ? "bg-white text-[#1c1f52] shadow-md"
                                    : "text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedYear}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <StatCard label="Companies Visited" value={currentData.companies} icon={icons.companies} />
                    <StatCard label="Total Students" value={currentData.students} icon={icons.students} />
                    <StatCard label="Total Offers" value={currentData.offers} icon={icons.offers} />
                    <StatCard label="Exclusive Offers" value={currentData.exclusive} icon={icons.exclusive} />

                    <div className="lg:col-span-2 grid grid-cols-2 gap-4 bg-indigo-50/50 p-4 rounded-3xl border border-indigo-100">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-novaBold uppercase text-indigo-400 mb-1">
                                Salary Distribution
                            </span>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-600">0-5 LPA</span>
                                    <span className="text-sm font-novaBold text-[#1c1f52]">
                                        {currentData.salary0_5}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-600">5-10 LPA</span>
                                    <span className="text-sm font-novaBold text-[#1c1f52]">
                                        {currentData.salary5_10}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-600">10-20 LPA</span>
                                    <span className="text-sm font-novaBold text-[#1c1f52]">
                                        {currentData.salary10_20}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-600">20+ LPA</span>
                                    <span className="text-sm font-novaBold text-[#1c1f52]">
                                        {currentData.salary20plus}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-l border-indigo-100 pl-4">
                            <div className="text-center">
                                <span className="text-xs text-gray-500 block">Total Placements</span>
                                <span className="text-4xl font-novaBold text-indigo-600">{currentData.offers}</span>
                            </div>
                        </div>
                    </div>

                    <StatCard
                        label="Average Salary (LPA)"
                        value={`₹ ${currentData.average} LPA`}
                        icon={icons.salary}
                        highlight
                    />
                    <StatCard
                        label="Highest Package (LPA)"
                        value={`₹ ${currentData.highest} LPA`}
                        icon={icons.highest}
                        highlight
                    />
                </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex flex-wrap gap-6 items-center justify-center text-sm text-gray-500 bg-gray-50 p-6 rounded-2xl border border-gray-100 italic">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#df8934]"></div>
                    <span>LPA: Lakhs Per Annum</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span>Data subject to final audit for 2025</span>
                </div>
            </div>
        </section>
    );
};

const PlacementHighlights = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <section className="max-w-[1400px] mx-auto grid grid-cols-5 py-2 px-2">
                <div className="col-span-3 max-lg:col-span-5">
                    <h2 className="text-4xl font-novaReg mb-3 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                        Career Success Highlights
                    </h2>
                    <p className="font-novaReg text-lg max-sm:text-sm text-justify">
                        Our university takes pride in its exceptional placement records, consistently achieving
                        impressive success rates year after year. With dedicated training and strong industry
                        partnerships, our students are well-prepared to embark on fulfilling career journeys. From
                        leading multinational corporations to fast-growing startups, graduates secure roles in various
                        industries, showcasing their talent and skills. The continuous efforts of our career development
                        team, along with focused career preparation programs, have resulted in placements across
                        top-tier organizations, giving our students a competitive edge in today’s job market.
                    </p>
                </div>
                <div className="col-span-2 max-lg:col-span-5 max-lg:mt-5">
                    <div className="w-full mx-auto p-4">
                        <Swiper
                            effect={"cube"}
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
                                                    <h3 className="text-5xl font-novaSemi text-center text-cyan-700 max-md:text-4xl max-sm:text-3xl">
                                                        {item.title}
                                                    </h3>
                                                    <h3 className="text-2xl font-novaSemi text-center text-cyan-700 mb-5 max-md:text-2xl max-md:mb-3 max-sm:text-xl max-sm:mb-3 ">
                                                        {item.comp}
                                                    </h3>
                                                </div>
                                                <p className="text-lg font-novaReg max-sm:text-sm text-center">
                                                    {item.description}
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <img
                                                    src={item.img}
                                                    alt={item.description}
                                                    className="mx-auto w-32 max-md:mb-5 max-sm:mb-3"
                                                />
                                                <p className="text-lg font-novaReg max-sm:text-sm text-center">
                                                    {item.description}
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            <PlacementHighlightsTable />
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
                                nextEl: "#slider-button-right",
                                prevEl: "#slider-button-left",
                            }}
                            className="mySwiper"
                        >
                            {slides?.map((student, index) => (
                                <SwiperSlide key={index}>
                                    <div className="my-10 text-center flex flex-col items-center mx-10 max-sm:mx-5">
                                        <h2 className="text-2xl font-novaBold uppercase mb-4">{student.heading}</h2>
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
                                                <p className="font-novaReg text-gray-300">
                                                    {student.degree} {student.batch}
                                                </p>
                                                <small className="font-novaSemi">{student.company}</small>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div
                            id="slider-button-left"
                            className="absolute -left-10 max-lg:-left-2 max-md:hidden top-1/2 transform -translate-y-1/2 p-2 shadow-md cursor-pointer z-10"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 opacity-50 hover:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.3}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </div>
                        <div
                            id="slider-button-right"
                            className="absolute -right-10 max-lg:-right-2 max-md:hidden top-1/2 transform -translate-y-1/2 p-2 shadow-md cursor-pointer z-10"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 opacity-50 hover:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-3">
                <div className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-novaSemi text-center text-indigo-800 mb-8">
                            University Placement Information
                        </h2>
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                            <div className="flex border-b border-gray-200">
                                {sections.map((section, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`flex-1 py-4 px-6 text-lg font-novaSemi transition-colors duration-200 ${
                                            activeTab === index
                                                ? "bg-indigo-600 text-white"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
