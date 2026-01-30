"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import { motion, AnimatePresence } from "framer-motion";
import {
    Bot,
    Settings,
    Zap,
    Activity,
    Flame,
    Snowflake,
    Crosshair,
    Printer,
    Radio,
    Eye,
    Package,
    Scissors,
    X,
    ArrowRight
} from "lucide-react";

// Data Structure
const kukaData = {
    title: "KUKA Robotics Centre of Excellence",
    description: [
        "KUKA Robotics Centre of Excellence is the first and largest robotics centre in the country, established in collaboration with KUKA Robotics to produce highly skilled technical manpower in the field of industrial robotics.",
        "This centre aims to train young engineers and industry professionals to meet industry requirements and foster research in the applied robotics field."
    ],
    infrastructure: {
        title: "Infrastructure at KUKA Robotics CoE",
        items: [
            {
                id: "1.1.1.1",
                title: "Robotic Milling Application",
                description: "The Robotic Milling Cell at AKGEC uses the KUKA KR 120, a high-payload robot capable of handling heavy tools such as HSD spindles with exceptional reach and rigidity. This setup enables precision machining of molds, patterns, and complex surfaces. The robot’s flexibility supports routing, trimming, contouring, engraving, and prototype machining across high density thermacol, composites, and foam, offering capabilities beyond fixed-axis CNC systems.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "1.1.1.2",
                title: "Robotic Spot Welding",
                description: "Spot welding is executed using the KUKA KR 180 equipped with a C-Type DENYO make welding gun and automatic tool changer (ATC) ensuring consistent pressure and current delivery for high-strength sheet-metal joining. The robot offers long reach, superior repeatability, and safe automatic sequencing for multi-point welding. Capable applications include automotive panel fabrication, resistance weld trials, cycle-time optimization, fixture-based assembly, and industrial welding training with repeatable results.",
                icon: Zap,
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "1.1.1.3",
                title: "Robotic Time Twin Welding",
                description: "The Time Twin Welding application operates on the KUKA KR 30, integrating synchronized dual-wire technology for high deposition rates and reduced heat input. The robot’s speed, accuracy, and controlled path motion make it ideal for large-scale fabrication. Engineered for breakthrough performance, this system excels in continuous seam welding and high-strength multi-pass joints, powering the fabrication of ship sections and heavy industrial structures with unmatched speed.",
                icon: Activity,
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "1.1.1.4",
                title: "Robotic MIG Welding",
                description: "The KUKA KR 5 Arc elevates robotic MIG welding at AKGEC with unmatched finesse, delivering ultra-smooth arc control and microscopic path accuracy. Paired with the Fronius TPSi, it achieves consistently superior weld quality on industrial steels and specialty materials. This advanced cell enables high-complexity joints, automated production sequences, intelligent path refinement, ergonomic posture calibration, and professional-grade training tailored for future-ready manufacturing ecosystems.",
                icon: Flame,
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            },
            {
                id: "1.1.1.5",
                title: "Robotic Cold Metal Transfer Welding",
                description: "The KUKA KR 16, seamlessly integrated with the state-of-the-art Fronius CMT power source, delivers an exceptionally controlled, ultra-low-heat metal transfer process ideal for thin sheets and challenging dissimilar joints. Its superior repeatability enables precision directed energy deposition of advanced alloys, including aluminum, stainless steel, mild steel, Inconel, and duplex SS. This capability empowers the fabrication of complex, large-size metal structures at a fraction of traditional metal 3D-printing costs, driving breakthrough innovation in aerospace, automotive, and high-performance manufacturing.",
                icon: Snowflake,
                image: "/image/SkillFoundationImage/skill-foundation5.png"
            },
            {
                id: "1.1.1.6",
                title: "Robotic Laser Welding & Cutting",
                description: "The KUKA KR 30 HA, paired with an IPG Photonics fiber laser, delivers an elite, high-accuracy platform for both laser 3D cutting and laser welding. Its exceptional precision and path repeatability enable ultra-clean contour cutting, deep-penetration welds, and intricate geometries with minimal heat distortion. This advanced hybrid setup supports automotive, aerospace, and high-value fabrication—empowering rapid prototyping, complex metal processing, and production-grade laser manufacturing with unmatched quality and consistency.",
                icon: Crosshair,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "1.1.1.7",
                title: "Robotic 3D Printing Application",
                description: "The KUKA KR 120 powers large-format robotic 3D printing using high-flow extruders capable of processing polymer granules directly as raw material, ensuring exceptional cost efficiency and production scalability. Its long reach and high payload enable precise deposition of complex geometries, architectural forms, and industrial prototypes. Granule-based extrusion significantly reduces material cost and broadens material flexibility, making this system ideal for functional components, molds, furniture-grade designs, and advanced engineering structures.",
                icon: Printer,
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "1.1.1.8",
                title: "Robotic Ultrasonic Welding",
                description: "The KUKA KR 10 powers high-precision ultrasonic welding, enabling rapid, clean, and distortion-free joining of thermoplastic components. Its agility and repeatability ensure consistent weld quality for intricate assemblies and complex geometries. Widely used in the automotive sector, this system efficiently welds interior trims, lighting housings, instrument panel components, and other precision plastic parts. The setup supports micro-assembly, airtight sealing, and high-volume production with exceptional reliability.",
                icon: Radio,
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "1.1.1.9",
                title: "Robotic Vision Application",
                description: "Robotic vision-based automation is enabled using the KUKA KR 6, integrating cameras and sensors for intelligent detection and guidance. The robot performs part identification, orientation correction, quality inspection, and adaptive pick-and-place with real-time decision-making. Capabilities include defect inspection, bin-picking, automated sorting, position tracking, and smart manufacturing workflows with minimal human intervention.",
                icon: Eye,
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            },
            {
                id: "1.1.1.10",
                title: "Robotic Material Handling Applications",
                description: "Material handling at AKGEC uses the KUKA KR 6 and Agilus robots, providing fast, precise, and safe transfer of components using grippers and vacuum systems. Their compact design allows operation in confined spaces while maintaining repeatability. Work possible includes palletizing, machine loading, stacking, carton movement, assembly support, and continuous automated handling for high-speed industrial environments.",
                icon: Package,
                image: "/image/SkillFoundationImage/skill-foundation5.png"
            },
            {
                id: "1.1.1.11",
                title: "Robotic Deburring Application",
                description: "The KUKA KR 6 delivers exceptional precision and consistency in robotic deburring, enabling automated removal of sharp edges, burrs, and surface imperfections from metal, plastic, and composite components. With its high-speed motion, repeatability, and compliant tooling, the robot ensures uniform finishing even on complex contours. This system supports the automotive, aerospace, and tooling industries by enhancing surface quality, improving safety, reducing manual effort, and ensuring production-ready components with superior accuracy.",
                icon: Scissors,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            }
        ]
    }
};

const SkillFoundationDetails = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header
                title="Centre of Excellence"
                subHeading="Pioneering industrial robotics training and research with state-of-the-art KUKA technology."
                bgUrl="/image/about/over-view.webp"
                height="!py-14 sm:!py-20 xl:!py-24"
            />

            <main className="pb-20">
                {/* Intro Section */}
                <section className="relative py-16 px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-t-4 border-brand-blue relative overflow-hidden"
                    >
                        {/* Background Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/3"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row gap-6 md:items-center mb-8">
                                <div className="p-4 bg-brand-blue rounded-2xl shadow-lg inline-block text-white">
                                    <Bot size={40} />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-5xl font-novaBold text-gray-900 leading-tight">
                                        {kukaData.title}
                                    </h1>
                                    <div className="h-1.5 w-24 bg-brand-yellow mt-4 rounded-full"></div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 font-novaReg leading-relaxed">
                                {kukaData.description.map((para, i) => (
                                    <p key={i} className="mb-4 text-lg md:text-xl text-justify">{para}</p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Infrastructure Grid */}
                <section className="px-6 lg:px-8 max-w-[1450px] mx-auto">
                    <div className="mb-16 text-center">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4"
                        >
                            {kukaData.infrastructure.title}
                        </motion.h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                        {kukaData.infrastructure.items.map((item, index) => {
                            const Icon = item.icon || Settings;
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.05, duration: 0.5 }}
                                    onClick={() => setSelectedItem(item)}
                                    className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 overflow-hidden cursor-pointer hover:-translate-y-2"
                                >
                                    {/* Image Section - Top (Hero) */}
                                    {item.image && (
                                        <div className="w-full h-56 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                            />
                                            {/* ID Badge on Image */}
                                            <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm border border-white/50">
                                                {item.id}
                                            </div>
                                        </div>
                                    )}

                                    <div className="p-6 md:p-8 flex-1 flex flex-col relative">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
                                                <Icon size={24} strokeWidth={1.5} />
                                            </div>
                                            {!item.image && (
                                                <span className="ml-auto text-gray-300 font-medium text-sm tracking-wider">
                                                    {item.id}
                                                </span>
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-novaBold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors leading-tight">
                                            {item.title}
                                        </h3>

                                        {/* Description (Truncated) */}
                                        <p className="text-gray-600 text-sm leading-relaxed font-novaReg text-justify line-clamp-3 mb-4">
                                            {item.description}
                                        </p>

                                        {/* Expand indicator */}
                                        <div className="mt-auto flex items-center text-xs font-semibold text-brand-blue group-hover:translate-x-2 transition-transform duration-300">
                                            Read More <ArrowRight size={14} className="ml-2" />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>
            </main>

            {/* Modal for Details */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-white/80 hover:bg-white rounded-full transition-colors shadow-sm"
                            >
                                <X size={24} className="text-gray-800" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[500px]">
                                <div className="h-64 md:h-auto relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                                    <img
                                        src={selectedItem.image}
                                        alt={selectedItem.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-8 md:p-12 overflow-y-auto">
                                    <div className="flex items-center gap-3 mb-6">
                                        {(() => {
                                            const Icon = selectedItem.icon || Settings;
                                            return (
                                                <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue">
                                                    <Icon size={28} />
                                                </div>
                                            );
                                        })()}
                                        <span className="text-gray-400 font-mono font-bold tracking-widest">{selectedItem.id}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-novaBold text-gray-900 mb-6 leading-tight">
                                        {selectedItem.title}
                                    </h3>
                                    <div className="w-20 h-1.5 bg-brand-yellow rounded-full mb-8"></div>
                                    <div className="prose prose-lg text-gray-600 font-novaReg leading-relaxed text-justify">
                                        <p>{selectedItem.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SkillFoundationDetails;
