"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Globe, GraduationCap, MapPin, PlaneTakeoff, ChevronRight, ChevronLeft } from "lucide-react";
import { LogoSlider, TopCard } from "@/Components";
import React, { useState, useEffect, useRef } from "react";
import AdmissionForm from "@/Components/AdmissionForm";
import AdmissionsShowcase from "@/Components/AdmissionsShowcase";
import ScholarshipHighlight from "@/Components/ScholarshipHighlight";
import HighlightPlacement from "@/Components/HighlightPlacement";
import OurOffice from "@/Components/OurOffice";
import ResearchFacility from "@/Components/ResearchFacility";


const statsData = [
    {
        number: "200+",
        text: "Start-ups supported",
        image: "/image/national-admission/start-up.jpg",
    },
    {
        number: "10",
        text: "Start-ups Recognized by Start-up India",
        image: "/image/national-admission/suss.jpg",
    },
    {
        number: "100+",
        text: "Companies with more than 1 Crore Turnover",
        image: "/image/national-admission/cmp.jpg",
    },
];

const programs = [
    {
        "name": "Bachelor of Technology",
        "abbreviation": "B.Tech"
    },
    {
        "name": "Bachelor of Business Administration",
        "abbreviation": "BBA"
    },
    {
        "name": "Master of Technology",
        "abbreviation": "M.Tech"
    },
    {
        "name": "Master of Business Administration",
        "abbreviation": "MBA"
    },
    {
        "name": "Bachelor of Arts",
        "abbreviation": "BA"
    },
    {
        "name": "Bachelor of Science",
        "abbreviation": "B.Sc"
    },
    {
        "name": "Bachelor of Computer Applications",
        "abbreviation": "BCA"
    },
    {
        "name": "Master of Computer Applications",
        "abbreviation": "MCA"
    }
];

const benefits = [
    {
        "title": "Access To Quality Education",
        "description": "Achieve your academic goals with a supportive learning environment and scholarships."
    },
    {
        "title": "Career Development Opportunities",
        "description": "Enhance your employability through workshops and internships provided by AKG University."
    },
    {
        "title": "Financial Aid Availability",
        "description": "We offer scholarships and financial assistance to support students in their educational journey."
    },
    {
        "title": "Networking Opportunities",
        "description": "Connect with industry professionals and alumni through various university-led events."
    }
];



const slides = [
    {
        imgSrc: "/image/placement/1.png",
        altText: "Ravi Kumar",
        heading: <>Launch your <br /> career with AKG</>,
        description: `With AKG University's excellent placement support, I secured a position at Infosys, setting a strong foundation for my career in technology.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2018-2022)",
        name: "Ravi Kumar",
        companyLogo: "/image/company-logos/Infosys.webp",
        companyAlt: "infosys-logo",
    },
    {
        imgSrc: "/image/placement/2.png",
        altText: "Anjali Gupta",
        heading: <>Your dream job <br /> awaits you</>,
        description: `AKG University provided me with the skills and opportunities needed to land a role at TCS, where I'm excited to contribute to innovative projects.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2018-2022)",
        name: "Anjali Gupta",
        companyLogo: "/image/company-logos/TCS.webp",
        companyAlt: "tcs-logo",
    },
    {
        imgSrc: "/image/placement/3.png",
        altText: "Vikram Singh",
        heading: <>Unlock your potential <br /> with AKG</>,
        description: `Thanks to AKG University’s placement initiatives, I joined Wipro, which is a significant step in my professional journey.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2018-2022)",
        name: "Vikram Singh",
        companyLogo: "/image/company-logos/WIPRO.webp",
        companyAlt: "wipro-logo",
    },
    {
        imgSrc: "/image/placement/4.png",
        altText: "Neha Verma",
        heading: <>Shape your future <br /> at AKG</>,
        description: `The career services at AKG University helped me secure a placement at HCL, where I'm working on exciting technological advancements.`,
        degree: "B.TECH (CSE)",
        batch: "(Batch 2018-2022)",
        name: "Neha Verma",
        companyLogo: "/image/company-logos/HCL.webp",
        companyAlt: "hcl-logo",
    }
];

const moon = [
    {
        title: "Research Center for Emerging Technologies",
        description: "AKG University’s Research Center focuses on developing new technologies and fostering innovation. The center collaborates with industry leaders and provides students with hands-on experience in cutting-edge projects.",
        url: "/image/center-of-research/space-x.jpg"
    }
];

const ground = [
    {
        title: "State-of-the-Art Research Facilities",
        features: [
            "Advanced laboratories for practical learning",
            "Research collaborations with leading institutions",
            "Innovative projects in renewable energy and AI",
            "Robotics and automation research",
            "Focus on sustainable technology development",
            "Workshops and seminars led by industry experts",
            "State-of-the-art equipment for cutting-edge research",
            "Internship opportunities with top tech companies",
            "Interdisciplinary projects fostering teamwork and creativity",
            "Access to industry-standard software and tools",
            "Participation in national and international conferences",
            "Hands-on experience with real-world problems through capstone projects"
        ]
    }
];

const prog = [
    {
        title: "INTERNATIONAL SUMMER/WINTER PROGRAMS",
        description: "Short duration programs of 2-4 weeks designed to provide international exposure and cultural immersion.",
        icon: Globe,
    },
    {
        title: "SEMESTER ABROAD/EXCHANGE PROGRAMS",
        description: "Complete a semester abroad to enhance your educational experience and expand your global network.",
        icon: PlaneTakeoff,
    },
    {
        title: "HIGHER EDUCATION PROGRAMS",
        description: "Opportunities for visiting international universities for advanced study and research.",
        icon: GraduationCap,
    },
    {
        title: "GLOBAL IMMERSION PROGRAMS",
        description: "Gain professional experience through attachments with multinational companies abroad.",
        icon: Globe,
    },
    {
        title: "INTERNATIONAL PLACEMENTS",
        description: "Top global companies recruit from AKG University, providing excellent placement opportunities for students.",
        icon: MapPin,
    },
];

const posts = [
    {
        id: 1,
        title: 'Robotics Lab',
        href: '#',
        imageUrl: '/image/article/Btech-article.webp',
    },
    {
        id: 2,
        title: 'Artificial Intelligence Lab',
        href: '#',
        imageUrl: '/image/article/Mtech-article.webp',
    },
    {
        id: 3,
        title: 'Data Science Lab',
        href: '#',
        imageUrl: '/image/article/MCA-article.webp',
    },
    // {
    //     id: 4,
    //     title: 'Cybersecurity Lab',
    //     href: '#',
    //     imageUrl: '/image/article/MCA-article.webp',
    // },
];


const NationalAdmissions = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 3000);
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <>
            <section className="h-screen max-lg:h-max w-full bg-BG16 bg-cover bg-center bg-indigo-950 bg-blend-multiply bg-opacity-80">
                <div className="flex px-1 md:px-12 pt-40 lg:px-24 max-lg:pt-32 max-lg:pb-10">
                    <div className="container max-w-full lg:max-w-[1700px] flex justify-end max-xl:flex-col-reverse gap-10">
                        <div className="max-w-[1400px] w-full mx-auto flex max-lg:flex-col justify-between items-center">
                            <div className="text-white max-lg:text-center max-lg:px-10 max-sm:px-4">
                                <span className="text-base md:text-xl uppercase font-novaSemi">Unlock Your Future: Apply Now!</span>
                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-novaBold">Start Your Journey: <br /> National Admission 2024</h3>
                                <p className="font-novaReg lg:max-w-lg leading-none mt-3">Join a diverse community of learners and innovators at our esteemed institution. Our National Admission program welcomes students from all backgrounds, offering unparalleled academic opportunities. Don't miss your chance to be part of a vibrant academic environment that fosters growth and success.</p>
                                <button className="rounded-md uppercase bg-secondary px-5 py-3 mt-10 text-base font-novaBold tracking-wider hover:text-white text-black shadow-sm hover:bg-white/20 duration-500">APPLY NOW ➜</button>
                            </div>
                            <AdmissionForm />
                        </div>
                    </div>
                </div>
            </section>
            <TopCard />
            <AdmissionsShowcase />
            <section className="px-3">
                <div className="max-w-4xl mx-auto p-8 text-center">
                    <h1 className="text-2xl font-bold mb-2">AKG UNIVERSITY</h1>
                    <h2 className="text-4xl font-extrabold mb-6">
                        COMMON ENTRANCE TEST
                        <br />
                        (AKG CET)
                    </h2>
                    <p className="text-sm leading-relaxed">
                        AKG University Common Entrance Test (AKG CET 2024) is a national-level entrance exam and scholarship test mandatory for admission. The AKG CET forms the basis of eligibility that is required for admission in Engineering, MBA, MCA, Pharmacy, LLM, and Integrated Law programs. The scholarship amount depends on the program's fee, the date of admission, and the student's performance in AKG CET 2024.
                    </p>
                </div>
                <ScholarshipHighlight heading={"Early Bird"} subheading={"Scholarship"} desc={"For PG Students for the Academic"} ugSub={"B.Tech [For I, II, III and IV Year]"} pgSub={"MCA [For I and II Year]"} />
            </section >
            <section className="max-w-[1400px] mx-auto px-3 my-10">
                <div className="grid grid-cols-5 gap-4">
                    <div className="bg-teal-500 text-black col-span-2 max-lg:col-span-5 rounded-3xl card overflow-hidden">
                        <div className='h-16 flex items-center pl-5 bg-indigo-950'>
                            <img className='w-9 h-9' src="/image/icons/icon-academic-excellence.png" alt="academic logo" />
                        </div>
                        <div className='p-4'>
                            <h2 className="text-2xl font-bold max-lg:text-xl max-md:text-lg mb-4">
                                Programs for which AKG University<br /> Admission Test  is Compulsory:
                            </h2>
                            <div className=''>
                                <ul className="text-sm overflow-auto list-disc pl-6">
                                    {programs.map((program, index) => (
                                        <li key={index} className="text-base mb-2.5">
                                            {program.name} <small className="text-sm">({program.abbreviation || 'N/A'})</small>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#f6ffaa] col-span-3 text-black max-lg:col-span-5 rounded-3xl card overflow-hidden">
                        <div className='h-16 flex items-center pl-5 bg-indigo-950'>
                            <img className='w-9 h-9' src="/image/icons/icon-academic-excellence.png" alt="academic logo" />
                        </div>
                        <div className='p-4'>
                            <h2 className="text-2xl font-bold max-lg:text-xl max-md:text-lg mb-4">One Exam Multiple Benefits</h2>
                            <div className=''>
                                <p className="text-sm overflow-auto mb-5">
                                    At AKG University, our mission is to provide every deserving student with the opportunity to achieve success and realize their dreams. Through our scholarship support program, we are committed to investing in our collective future and empowering students to maximize their potential by:
                                </p>
                                <ul className="text-sm list-disc pl-6">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="text-lg font-novaBold mb-5">
                                            {benefit.title}:<small className="text-sm mt-2.5">{benefit.description}</small>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HighlightPlacement />
            <LogoSlider />

            <section className="px-3">
                <div className="bg-white min-h-screen py-6 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-novaSemi text-center text-gray-900 mb-4">
                            VENTURE INTO ENTREPRENEURSHIP
                        </h1>
                        <p className="text-lg md:text-xl text-center font-novaReg text-gray-600 mb-12 max-w-3xl mx-auto">
                            Nurturing leaders of tomorrow, by building the foundation for their
                            dreams and equipping them with global exposure and industry support.
                        </p>

                        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
                            {statsData.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-lg shadow-lg bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6 border-blue-300"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.text}
                                        width={300}
                                        height={400}
                                        className="w-full h-full object-cover"
                                        style={{
                                            clipPath:
                                                "polygon(62% 4%, 20% 17%, 100% 0, 100% 100%, 0 89%, 48% 97%, 0 100%, 0 0)",
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h2 className="text-5xl font-novaBold mb-2">{item.number}</h2>
                                        <p className="text-xl font-novaSemi">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-fit bg-PaperBackground bg-primary bg-blend-multiply bg-opacity-50 my-5">
                <div className="relative max-w-7xl mx-auto px-3 space-x-10 ">
                    <div className="flex flex-wrap justify-evenly w-full">
                        {[currentSlide].map((index) => (
                            <div
                                key={index}
                                className={`flex md:flex-row items-stretch w-full md:w-10/12 transition-all duration-1000 ease-in-out`}
                            >
                                <div className="flex-shrink-0 w-1/2 flex items-center justify-center">
                                    <img
                                        src={slides[index].imgSrc}
                                        alt={slides[index].altText}
                                        className="w-full h-auto object-cover mt-auto"
                                    />
                                </div>
                                <div className="pt-10 w-full md:w-1/2 flex flex-col p-4 justify-center">
                                    <h2 className="max-sm:text-base text-xl text-secondary xl:text-3xl max-lg:text-2xl font-novaBold mt-2.5 uppercase">
                                        {slides[index].heading}
                                    </h2>
                                    <p className="font-novaReg text-sm md:text-lg mt-2.5 mb-12 max-sm:mb-6 max-w-md mx-auto italic text-white">
                                        {slides[index].description}
                                    </p>
                                    <p className="text-sm mb-2 text-secondary">
                                        {slides[index].degree}{" "}
                                        <strong className="text-white">{slides[index].batch}</strong>
                                    </p>
                                    <h3 className="text-xl md:text-3xl text-secondary font-novaReg mb-8 italic">
                                        {slides[index].name}
                                    </h3>
                                    <img
                                        src={slides[index].companyLogo}
                                        alt={slides[index].companyAlt}
                                        className="w-28"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </section>

            <section className="bg-BG33 bg-fixed bg-center bg-no-repeat bg-cover py-5">
                <div className="max-w-7xl mx-auto px-3 py-8 md:py-24 lg:py-32">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="bg-teal-500 text-black col-span-2 max-lg:col-span-4 rounded-3xl card overflow-hidden">
                            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
                            </div>
                            <div className='p-4 '>
                                <h2 className="text-2xl font-novaSemi max-lg:text-xl max-md:text-lg mb-2">{moon[0].title}</h2>
                                <div className='mb-5'>
                                    <p className="text-base mb-2.5 font-novaReg">{moon[0].description}</p>
                                </div>
                                <img src={moon[0].url} className="rounded-3xl" />
                            </div>
                        </div>
                        <div className="bg-teal-500 text-black col-span-2 max-lg:col-span-4 rounded-3xl card overflow-hidden">
                            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-satellite">
                                    <path d="M12 2l1.5 3h3l-2.5 2 1 3-3-1-2.5 2 2-2.5-3-1 2-2.5z" />
                                    <path d="M20 16c0 2.21-1.79 4-4 4s-4-1.79-4-4" />
                                    <path d="M16 20c-2.21 0-4-1.79-4-4 0-.38.04-.75.1-1.11" />
                                    <path d="M16 8a3.97 3.97 0 0 0-2.74 1.04L12 10l-1.26-1.24A3.97 3.97 0 0 0 8 8c-1.35 0-2.61.68-3.38 1.74l-.43.75A3.975 3.975 0 0 0 4 12c0 2.21 1.79 4 4 4h8" />
                                    <path d="M22 12h-2a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h2" />
                                </svg>
                            </div>
                            <div className='p-4'>
                                <h2 className="text-2xl font-novaSemi max-lg:text-xl max-md:text-lg mb-2">{ground[0].title}</h2>
                                <div className=''>
                                    <ul className="text-base mb-2.5 list-disc pl-6">
                                        {ground[0].features.map((feature, index) => (
                                            <li key={index} className="mb-2.5 font-novaReg">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OurOffice />
            <ResearchFacility />
        </>
    );
};

export default NationalAdmissions;