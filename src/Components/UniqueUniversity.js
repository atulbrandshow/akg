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
            "Choice Based Credit System (CBCS) aligned with NEP 2020, enabling flexibility in course selection, interdisciplinary learning, and holistic student development.",
    },
    {
        number: "02",
        icon: Brain,
        description:
            "Centres of Excellence in Artificial Intelligence, Data Science, and Cybersecurity providing industry-driven research and hands-on training opportunities.",
    },
    {
        number: "03",
        icon: FileText,
        description:
            "Strong focus on research and innovation with funded projects, patents, and publications in reputed Scopus/SCI indexed international journals.",
    },
    {
        number: "04",
        icon: GraduationCap,
        description:
            "State-of-the-art campus with smart classrooms, modern laboratories, high-performance computing facilities, and advanced research infrastructure.",
    },
    {
        number: "05",
        icon: Database,
        description:
            "Excellent placement track record with students placed in top companies like TCS, Infosys, Wipro, Accenture, Cognizant, Siemens, and Federal Bank.",
    },
    {
        number: "06",
        icon: Award,
        description:
            "Active student engagement in national & international competitions, innovation hackathons, industry projects, and entrepreneurship initiatives.",
    },
];


const UniqueUniversity = () => {
    return (
        <section className="bg-green-700 py-16 px-4">
            <div className="mb-12 max-w-[1400px] mx-auto text-center md:text-left">
                <h2 className="text-3xl text-white font-novaReg mb-4">
                    What makes University Institute
                    <br />
                    of Sciences Unique?
                </h2>
                <p className="leading-relaxed text-gray-200 font-novaReg">
                    Since inception, UIS has established the highest standards of delivering science education in the region. While delivering innovative academics and practical based learning, the institute has been emerging on the ideal
                    of interactive learning that is purposeful and transformative. What else makes us unique is:
                </p>
            </div>

            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="flex max-w-[1400px] mx-auto"
            >
                {uniqueFeatures.map(({ number, icon: Icon, description }) => (
                    <SwiperSlide key={number} className="h-full flex p-4">
                        <div className="bg-white shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] border border-gray-200 rounded-lg p-6 flex flex-col justify-between relative w-full h-64">
                            <div>
                                <Icon className="w-10 h-10 text-red-500" />
                                <p className="mt-4 text-base font-novaReg leading-tight text-black">{description}</p>
                            </div>
                            <span className="mt-6 text-gray-300 text-3xl font-novaBold">{number}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default UniqueUniversity;
