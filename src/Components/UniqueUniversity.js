"use client";

import React from "react";
import { BookOpen, Brain, FileText, GraduationCap, Database, Award } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const uniqueFeatures = [
    {
        number: "01",
        icon: BookOpen,
        description:
            "Flexible Choice Based Credit System (FCBS) aligned with NEP 2020 promotes interdisciplinary, skill-based, and student-centric learning, offering multiple entry-exit options and a modular credit structure for seamless academic progression.",
    },
    {
        number: "02",
        icon: Brain,
        description: "Centre of Excellence in Data Science and Cognitive Computing for high end computations, simulation and modelling in collaboration with INTEL.",
    },
    {
        number: "03",
        icon: FileText,
        description: "Mandatory Dissertation for PG students leading to publications in peer reviewed Scopus/SCI/SCIE International Journals with high impact factor.",
    },
    {
        number: "04",
        icon: GraduationCap,
        description: "State of art infrastructure, Research, Computing, Communication, Statistical and Data Visualization Laboratories with advanced software.",
    },
    {
        number: "05",
        icon: Database,
        description: "Outstanding achievements with students qualifying CSIR-NET/GATE/DST-Inspire Fellowships, placement & internship opportunities with Accenture, Cognizant, Siemens, Federal Bank, etc.",
    },
    {
        number: "06",
        icon: Award,
        description: "Engage PG students in flagship projects focused on advanced technology-driven innovation, offering hands-on research, collaboration, and problem-solving.",
    },
];

const UniqueUniversity = () => {
    return (
        <section className="py-16 px-4 max-w-[1500px] mx-auto">
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl mb-6">
                    What makes University Institute
                    <br />
                    of Sciences Unique?
                </h2>
                <p className="leading-relaxed">
                    Since inception, UIS has established the highest standards of delivering science education in the region. While delivering innovative academics and practical based learning, the institute has been emerging on the ideal
                    of interactive learning that is purposeful and transformative. What else makes us unique is:
                </p>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                autoplay={{ delay: 2000 }}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="flex"
            >
                {uniqueFeatures.map(({ number, icon: Icon, description }) => (
                    <SwiperSlide key={number} className="h-auto flex">
                        <div className="bg-white shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] rounded-lg p-8 flex flex-col justify-between relative w-full h-64">
                            <div>
                                <Icon className="w-10 h-10 text-red-500" />
                                <p className="mt-4 text-base leading-relaxed text-black">{description}</p>
                            </div>
                            <span className="absolute bottom-0 text-gray-300 text-3xl font-bold">{number}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default UniqueUniversity;
