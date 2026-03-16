'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Laptop, Book, Presentation, FlaskConical, Home, Trophy, Utensils, Building } from 'lucide-react';

const infrastructureItems = [
    {
        title: "Administrative Block",
        desc: "The nerve center of AKG University, housing the core administrative offices, registry, and executive leadership suites in a modern, professional setting.",
        icon: Building,
        img: '/image/infrastructure/building-1.webp'
    },
    {
        title: "Academic Blocks",
        desc: "State-of-the-art department buildings equipped with advanced specialized laboratories, faculty chambers, and interactive learning spaces for every discipline.",
        icon: GraduationCap,
        img: '/image/infrastructure/building-2.webp'
    },
    {
        title: "Lecture Theatre Complex",
        desc: "A cluster of tiered, air-conditioned lecture halls featuring advanced audio-visual systems and ergonomic seating for an immersive learning experience.",
        icon: Presentation,
        img: '/image/infrastructure/building-3.webp'
    },
    {
        title: "Computer Center / IT Block",
        desc: "A high-tech digital hub with high-speed internet, cutting-edge computing resources, and specialized software labs for intensive technical training.",
        icon: Laptop,
        img: '/image/infrastructure/building-4.webp'
    },
    {
        title: "Central Library",
        desc: "A vast repository of knowledge featuring thousands of physical volumes, digital journals, and silent research zones for deep academic exploration.",
        icon: Book,
        img: '/image/infrastructure/building-7.webp'
    },
    {
        title: "Seminar & Conference Halls",
        desc: "Premium venues designed for international conferences, corporate seminars, and guest lectures, equipped with global-standard presentation technology.",
        icon: Building2,
        img: '/image/infrastructure/building-1.webp'
    },
    {
        title: "Centres of Excellence / Labs",
        desc: "Specialized research laboratories focused on industry 4.0, robotics, and advanced engineering, fostering innovation and groundbreaking discoveries.",
        icon: FlaskConical,
        img: '/image/infrastructure/building-5.webp'
    },
    {
        title: "Hostels (Boys & Girls)",
        desc: "Modern residential complexes providing a secure, comfortable, and vibrant home-away-from-home experience with premium amenities for all students.",
        icon: Home,
        img: '/image/infrastructure/building-6.webp'
    },
    {
        title: "Sports Complex / Playground",
        desc: "International-standard sports facilities including a FIFA-sized football ground, synthetic courts, and a modern power gym for holistic physical growth.",
        icon: Trophy,
        img: '/image/infrastructure/building-4.webp'
    },
    {
        title: "Cafeteria & Student Facilities",
        desc: "Dynamic social hubs offering hygienic, multi-cuisine dining options and essential services to ensure a balanced and convenient campus life.",
        icon: Utensils,
        img: '/image/infrastructure/building-2.webp'
    }
];

const Infrastructure = () => {
    return (
        <div className="font-novaReg">
            {/* Header Content Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-[2px] bg-[#df8934]" />
                    <span className="text-xs uppercase tracking-[0.3em] font-novaBold text-[#df8934]">World Class Infrastructure</span>
                </div>
                <h1 className="text-4xl font-novaSemi text-[#1c1f52] mb-6 max-sm:text-3xl leading-tight">
                    Designed to <span className="text-[#df8934]">Inspire</span>, Built to <span className="text-[#df8934]">Empower</span>
                </h1>
                <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed text-justify">
                    <p className="bg-white/50 p-6 rounded-3xl border border-gray-100 backdrop-blur-sm shadow-sm italic">
                        AKG University is dedicated to providing an exceptional educational experience, equipped with cutting-edge facilities and modern infrastructure. Recognized as one of the leading universities in the region, we strive to meet international standards in education through technologically advanced classrooms and innovative learning tools.
                    </p>
                    <p className="bg-white/50 p-6 rounded-3xl border border-gray-100 backdrop-blur-sm shadow-sm italic text-gray-500">
                        Our campus is a smoke-free, sustainable environment that actively pursues green initiatives such as solar energy and rainwater harvesting. With 24/7 security and extensive CCTV coverage, we ensure a safe and thriving ecosystem for academic excellence.
                    </p>
                </div>
            </motion.div>

            {/* Infrastructure Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-12 px-2">
                {infrastructureItems.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl hover:border-[#df8934]/30 transition-all duration-500"
                    >
                        {/* Image Section */}
                        <div className="h-64 overflow-hidden relative">
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f52]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Icon Overlay */}
                            <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 text-white shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:bg-[#df8934] group-hover:border-transparent">
                                <item.icon size={28} />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-1 bg-[#df8934] rounded-full group-hover:w-20 transition-all duration-500" />
                                <h2 className="text-xl font-novaSemi text-[#1c1f52] group-hover:text-[#df8934] transition-colors">{item.title}</h2>
                            </div>
                            <p className="text-sm font-novaReg text-gray-500 leading-relaxed text-justify">
                                {item.desc}
                            </p>
                        </div>

                        {/* Stately Brand Mark */}
                        <div className="absolute bottom-4 right-8 opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
                             <img src="/image/akgec-logo.svg" alt="" className="w-24 grayscale" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom CTA Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-[#1c1f52] to-[#2a2e6e] text-center relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#df8934]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="relative z-10">
                    <h3 className="text-white text-3xl font-novaSemi mb-4">Experience Our <span className="text-[#df8934]">Digital Campus</span></h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto italic">Explore our world-class facilities through a virtual interactive tour and see where your future begins.</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-[#df8934] text-white font-novaSemi rounded-full shadow-lg shadow-[#df8934]/30 hover:bg-[#c6762a] transition-all"
                    >
                        Start Virtual Tour
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Infrastructure;