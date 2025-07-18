"use client";

import React, { useState } from 'react';
import Slider from "@/Components/Slider";
import BannerSlider from "@/Components/BannerSlider";


const slides = [
    {
        title: "Igniting",
        subHeading: "Minds",
        subtitle: "University Focused on Student Success",
        description: "Maximizing Learning Outcomes Through Comprehensive Experiences and Support Services",
        buttonText: "VIDEO TOUR",
        image: "/image/campus-life/main-banner-1.jpg",
    },
    {
        title: "Building",
        subHeading: "Leaders",
        subtitle: "Pioneering Research and Cutting-Edge Innovation",
        description: "Innovative Experiential Learning Through Advanced Technology and State-of-the-Art Labs",
        buttonText: "VIDEO TOUR",
        image: "/image/campus-life/main-banner-2.jpg",
    },
    {
        title: "Cultivating",
        subHeading: "Success",
        subtitle: "Elite Sports Facilities, Expert Mentorship, and Exceptional Opportunities",
        description: "Exceptional Mentorship, Cutting-Edge Sports Facilities, and Boundless Opportunities",
        buttonText: "VIDEO TOUR",
        image: "/image/campus-life/main-banner-3.jpg",
    },
    // Add more slides here
]

const studentSpeaks = [
    {
        description: "At AKG, it's more than just studying – it's about experiencing a community that supports your growth. The campus has a lively atmosphere where academics, culture, and extracurriculars come together, making learning enjoyable and enriching. I feel like AKG is shaping me into a confident professional ready for the future.",
        name: "Aman Chauhan",
        title: "Batch 2022",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "AKG feels like my second home. From the vibrant campus life to the endless opportunities to grow beyond academics, it’s a place that helps you discover your potential. Whether it's participating in cultural events or taking up leadership roles, AKG gives you the tools to excel in all areas of life.",
        name: "Priti Singh",
        title: "Batch 2023",
        img: "/image/student/2.png",
        rating: 4
    },
    {
        description: "Being at AKG has been an incredible journey. The dynamic environment here allows us to combine academics with fun activities, making every day on campus exciting. It's a place that truly helps you prepare for a bright and successful future, both professionally and personally.",
        name: "Sakshi Sharma",
        title: "Batch 2024",
        img: "/image/student/3.png",
        rating: 5
    },
    {
        description: "AKG isn’t just a place for education; it’s a community where you grow as an individual. The campus is always buzzing with events, and there’s always something new to learn or participate in. I’m proud to be a part of a college that goes beyond academics to nurture creativity and leadership.",
        name: "Atul Kumar",
        title: "Batch 2024",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "Life at AKG is vibrant and fulfilling. It offers a perfect blend of academics and extracurriculars, helping you develop holistically. The experiences here have made me more confident and prepared for the challenges of the real world. It truly feels like a second home where I can grow and thrive.",
        name: "Raghav Shukla",
        title: "Batch 2024",
        img: "/image/student/2.png",
        rating: 5
    },

]

const facultySpeaks = [
    {
        description: "Our programs are designed with flexibility and experiential learning at their core, allowing students to explore multiple disciplines and grow holistically. The inclusive and supportive atmosphere we nurture on campus is one of the reasons we attract students from over 50 countries, creating a truly global learning environment.",
        name: "Dr. Meena Verma",
        title: "Professor of CS",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "At AKGU, we emphasize interdisciplinary learning and hands-on experiences, ensuring students receive an education that goes beyond textbooks. The welcoming culture here, built on inclusivity and openness, has fostered a diverse community, with students joining us from more than 50 nations.",
        name: "Dr. Rakesh Gupta",
        title: "Dean of Engineering",
        img: "/image/student/2.png",
        rating: 5
    },
    {
        description: "The academic framework at AKGU encourages students to engage in experiential learning while exploring diverse disciplines, creating a unique and enriching educational experience. Our commitment to inclusivity and a friendly campus culture has been pivotal in attracting a growing international student body from 50+ countries.",
        name: "Dr. Anjali Sharma",
        title: "Head of ME",
        img: "/image/student/3.png",
        rating: 5
    },
    {
        description: "We believe in an education that is flexible, practical, and interdisciplinary, enabling students to gain valuable real-world experience alongside their academic studies. The inclusive and supportive environment here has been instrumental in building our diverse student community, with students from over 50 nations choosing AKGU.",
        name: "Dr. Vijay Singh",
        title: "Professor of EE",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "AKGU offers students a dynamic blend of experiential learning and interdisciplinary education, preparing them to excel in an ever-changing world. The sense of belonging and inclusivity we foster on campus has been a key driver in attracting a diverse range of students from more than 50 countries.",
        name: "Dr. Priya Mehta",
        title: "Professor of CE",
        img: "/image/student/2.png",
        rating: 5
    },
]

const distinguishedGuests = [
    {
        description: "This University, I think, has made significant contributions to help the world move further as a whole. I really enjoyed having the honor to speak with the public.",
        name: "Dr. Ramesh Kumar",
        title: "Former President, ISRO",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "AKGU has created an incredible platform for fostering innovation and collaboration. The dedication to shaping the next generation of leaders is truly commendable. I was honored to be part of such an inspiring event.",
        name: "Ms. Shalini Verma",
        title: "CEO, Global Tech Solutions",
        img: "/image/student/2.png",
        rating: 5
    },
    {
        description: "It was an absolute pleasure to witness the brilliant minds at AKGU. The institution is not just advancing knowledge but also shaping future innovators who will positively impact the world.",
        name: "Prof. Arvind Sharma",
        title: "Nobel Laureate, Physics",
        img: "/image/student/3.png",
        rating: 5
    },
    {
        description: "The academic excellence and community engagement at AKGU are truly impressive. It’s clear that this institution is committed to pushing the boundaries of knowledge and creating global leaders.",
        name: "Mr. Rajiv Mehra",
        title: "Chairman",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "AKGU has established itself as a beacon of educational brilliance. It was a pleasure interacting with students and faculty alike, and I believe the impact this institution has on the future is profound.",
        name: "Dr. Priya Menon",
        title: "Director",
        img: "/image/student/2.png",
        rating: 5
    },
    {
        description: "My visit to AKGU left me deeply impressed by their focus on both academic and personal development. The enthusiasm of the students and faculty is inspiring, and I look forward to seeing their continued contributions to society.",
        name: "Mr. Anil Kapoor",
        title: "Vice Chancellor",
        img: "/image/student/3.png",
        rating: 5
    }
];



const CampusLife = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <>
            <BannerSlider slides={slides} />

            <div className="bg-indigo-900 text-white min-h-screen py-20">
                <div className="max-w-7xl max-xl:max-w-5xl max-lg:grid-cols-1 max-lg:max-w-3xl mx-auto grid grid-cols-5 gap-5 px-5">
                    <div className="col-span-3">
                        <div className="space-y-8">
                            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
                                <img src="/image/campus-life/convocation.jpg" alt="Ceremony" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Ceremony</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                    <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                        View More
                                    </button>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
                                <img src="/image/campus-life/tt_tournament.jpg" alt="Table Tennis" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Table Tennis</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200 rounded-xl">
                                    <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                        View More
                                    </button>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
                                <img src="/image/campus-life/FresherParty.png" alt="Fresher's Party" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Fresher's Party</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200 rounded-xl">
                                    <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 max-lg:col-span-1">
                        <div className="space-y-6 text-right">
                            <div>
                                <h1 className="text-5xl font-bold max-w-lg max-lg:max-w-full uppercase">
                                    Where Comfort Meets<span className="text-orange-400"> New</span>
                                    <span className="text-orange-400"> Beginnings</span>
                                </h1>
                                <p className="mt-4 text-3xl leading-none font-novaReg">
                                    A Cosmopolitan Campus: Where Cultures Converge, <strong>Ideas Flourish, and Opportunities Abound</strong> </p>
                            </div>
                            <button className="py-2.5 px-6 rounded-xl float-right bg-yellow-500 text-black font-novaBold tracking-wider text-sm hover:bg-orange-600 flex items-center gap-2">
                                {slides[currentSlide].buttonText}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-play"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                            </button>
                        </div>

                        <div className="flex justify-end mt-32 max-xl:mt-10 max-lg:mt-20">
                            <svg className="w-12 h-12 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h2 className="text-2xl font-novaBold text-right leading-none max-w-48 mb-4 flex items-center">
                                WHAT PEOPLE SAY ABOUT US?
                            </h2>
                        </div>
                        <div className="space-y-12 max-xl:space-y-3 max-lg:space-y-10 mt-10">
                            <Slider right={true} heading={"Student Speaks"} slidesData={studentSpeaks} />
                            <Slider right={true} white={true} heading={"Faculty Speaks"} slidesData={facultySpeaks} />
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl max-xl:max-w-5xl max-lg:grid-cols-1 max-lg:max-w-3xl mx-auto grid grid-cols-5 items-end gap-8 px-5 mt-20 max-lg:mt-5">
                    <div className="col-span-3">
                        <div className="space-y-8 mb-auto">
                            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
                                <img src="/image/campus-life/DiwaliMela.png" alt="Diwali Mela" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Diwali Mela</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                    <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                        View More
                                    </button>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
                                <img src="/image/campus-life/cultural.jpg" alt="Garba" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Garba</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                    <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                        View More
                                    </button>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
                                <img src="/image/campus-life/ceremony.jpg" alt="Ceremony" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Ceremony</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                    <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 mb-auto">
                        <div className="space-y-8">
                            <Slider right={true} heading={"Distinguished Guests"} slidesData={distinguishedGuests} />
                            <div className="relative group overflow-hidden rounded-2xl h-[450px]">
                                <img src="/image/campus-life/plantation.jpeg" alt="Plantation" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Plantation</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                    <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                        View More
                                    </button>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-2xl h-[450px]">
                                <img src="/image/campus-life/sports.jpg" alt="Sports" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Sports</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                    <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl max-xl:max-w-5xl max-lg:grid-cols-1 max-lg:max-w-3xl mx-auto grid grid-cols-3 gap-8 px-5 mt-20">
                    <div className="relative group overflow-hidden rounded-2xl h-[300px]">
                        <img src="/image/campus-life/Award2023.jpg" alt="Awards" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                        <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Awards</h3>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                            <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                View More
                            </button>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl h-[300px]">
                        <img src="/image/campus-life/sports-fest.jpg" alt="Sports Fest" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                        <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Sports Fest</h3>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                            <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                View More
                            </button>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl h-[300px]">
                        <img src="/image/campus-life/Yoga2023.jpg" alt="Yoga" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                        <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Yoga</h3>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                            <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                View More
                            </button>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl h-[300px]">
                        <img src="/image/campus-life/sports.jpg" alt="Sports" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                        <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Sports</h3>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                            <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                View More
                            </button>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl h-[300px]">
                        <img src="/image/campus-life/plantation.jpeg" alt="Plantation" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                        <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Plantation</h3>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                            <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                View More
                            </button>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl h-[300px]">
                        <img src="/image/campus-life/cultural.jpg" alt="Garba" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                        <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Garba</h3>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                            <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CampusLife