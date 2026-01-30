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
    ArrowRight,
    Calendar,
    Trophy,
    BookOpen,
    Clock,
    Phone,
    Mail,
    MapPin
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
    },
    events: {
        title: "Glimpse of the Events/Workshops",
        items: [
            { id: "1.1.2.1", title: 'Corporate Workshop on "Welding Automation through Industrial Robots"', description: "The Industrial Robotics CoE conducted a One-Day Corporate Workshop on \"Welding Automation through Industrial Robots\" on 21st February 2025. With 23 delegates from 17 industries, the session covered robotic welding fundamentals, advancements, practical demonstrations, and industry case studies highlighting next-generation welding technologies.", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" },
            { id: "1.1.2.2", title: "AKGEC Drives Innovation Through Robotics Workshops", description: "During the 2024–25 session, AKGEC empowered innovators by conducting 15+ hands-on workshops on Industrial Robotics for student entrepreneurs and startup teams. The sessions enabled participants to explore automation technologies, robotic programming, and real-world applications.", image: "/image/SkillFoundationImage/skill-foundation2.jpeg" },
            { id: "1.1.2.3", title: "AKGEC Delivers Industrial Induction Training to Hindalco", description: "AKGEC conducted induction training for Hindalco Industries Ltd., Pune, from 4th to 28th December 2023, strengthening practical competencies across Robotics, Automation, Welding, Machining, and Quality Inspection.", image: "/image/SkillFoundationImage/skill-foundation3.png" },
            { id: "1.1.2.4", title: "IIT Delhi VLFM Delegates Gain Hands-On Experience", description: "Participants from IIT Delhi’s Visionary Leaders for Manufacturing (VLFM) program visited the AKGEC–KUKA Industrial Robotics Training Center for immersive, hands-on learning. They explored real-world automation applications and industrial robot programming.", image: "/image/SkillFoundationImage/skill-foundation4.jpeg" },
            { id: "1.1.2.5", title: "SERB Delegates Receive Advanced Research Training", description: "Participants from the Science and Engineering Research Board (SERB) engaged in advanced hands-on training at AKGEC, gaining exposure to cutting-edge tools and applied research methodologies.", image: "/image/SkillFoundationImage/skill-foundation5.png" },
            { id: "1.1.2.6", title: "Empowering Indian Railways Through Advanced Skills", description: "AKGEC conducted \"Empowering Indian Railways Through Advanced Skills & Smart Manufacturing,\" a capacity-building program rooted in the Design Thinking approach. Participants explored real railway challenges through ideation and protyping.", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" },
            { id: "1.1.2.7", title: "In-Plant Industrial Robotics Training for Modern Coach Factory", description: "AKGEC delivered advanced in-plant training on Industrial Robot Programming and Operations to the Indian Railways Modern Coach Factory, Raebareli. Conducted directly on live production lines, the program enabled participants to gain hands-on experience with automation systems.", image: "/image/SkillFoundationImage/skill-foundation2.jpeg" },
            { id: "1.1.2.8", title: "AKGEC Partners with IRIMEE Jamalpur for Railway Officer Upskilling", description: "AKGEC collaborated with the Indian Railways Institute of Mechanical and Electrical Engineering (IRIMEE), Jamalpur, Bihar, to deliver specialised skill development in Automation Technologies. A five-day training program was conducted from 10–14 February 2020.", image: "/image/SkillFoundationImage/skill-foundation3.png" },
            { id: "1.1.2.9", title: "Hands-On Robotics Learning for IGDTUW M.Tech Students", description: "The KUKA Robotics CoE at AKGEC hosted practical robotics classes for M.Tech (Automation & Robotics) students from IGDTUW. The sessions provided real-time exposure to industrial robots, programming practices, and automation applications.", image: "/image/SkillFoundationImage/skill-foundation4.jpeg" },
            { id: "1.1.2.10", title: "Industry delegates participated in AKGEC–KUKA’s Workshop", description: "Industry delegates participated in a Two-Day Workshop on Robot Operation & Applications hosted at the AKGEC–KUKA Industrial Robotics Training Center. The program provided technical insight into robot-based manufacturing, covering benefits and operational challenges.", image: "/image/SkillFoundationImage/skill-foundation5.png" },
            { id: "1.1.2.11", title: "AKGEC empowered ISB Chandigarh participants", description: "AKGEC empowered participants from ISB Chandigarh through an Advanced Workshop on Automation and Robotics, offering immersive exposure to industry-grade technologies and hands-on learning.", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" }
        ]
    },
    awards: {
        title: "Awards & Recognition",
        items: [
            { text: "AKGEC Students proudly represented the institution in the final round of FANUC India’s 1st Edition Robotics Olympiad 2025.", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" },
            { text: "AKGEC students won the India Skills 2024 Medallion Award in Robot Systems Integration, reflecting excellence in advanced automation.", image: "/image/SkillFoundationImage/skill-foundation2.jpeg" },
            { text: "Best Robo Setup Award 2019 by All India Council for Robotics & Automation (AICRA)", image: "/image/SkillFoundationImage/skill-foundation3.png" },
            { text: "Best Robotic Education Award 2018 by All India Council for Robotics & Automation (AICRA)", image: "/image/SkillFoundationImage/skill-foundation4.jpeg" },
            { text: "AKGEC was honored with the Award for Best Vocational Robotics Educational Centre by AICRA, affirming its national leadership in skill-based robotics education.", image: "/image/SkillFoundationImage/skill-foundation5.png" },
            { text: "Achieved top honors at the World Robot Olympiad 2018", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" }
        ]
    },
    programs: {
        title: "Programs Offered",
        description: "The Centre offers the following training programs for industry professionals and engineering students of all disciplines. On successful completion, participants are awarded a globally recognized joint certification from AKGEC & KUKA.",
        items: [
            "Industrial Robot Programming—Basic Level (80 Hrs)",
            "Industrial Robot Programming—Advanced Level (80 Hrs)",
            "Industrial Robot Programming—Expert Level (80 Hrs)",
            "Robotic Application Programming—Arc Welding Technology (40 Hrs)",
            "Robotic Application Programming—Spot Welding Technology (40 Hrs)",
            "Robotic Application Programming—Milling (40 Hrs)"
        ]
    },
    upcoming: {
        title: "Upcoming Programs",
        description: "The KUKA Robotics Centre of Excellence is offering an 80-hour Winter Training Program in Industrial Robot Programming—Basic and Advanced Levels for B.Tech and Diploma students, scheduled for December 2025 and January 2026.",
        contactEmail: "irtc@akgec.ac.in",
        contactPhone: "+91-9953064510",
        table: [
            {
                title: "Industrial Robot Programming - Basic Level",
                duration: "80 Hours",
                fee: "₹ 13,000",
                coordinator: "Dr. Manoj Kumar Yadav",
                contact: "irtc@akgec.ac.in / +91-9953064510"
            },
            {
                title: "Industrial Robot Programming - Advanced Level",
                duration: "80 Hours",
                fee: "₹ 19,500",
                coordinator: "Ms. Gaganpreet Kaur",
                contact: "irtc@akgec.ac.in / +91-9711043008"
            }
        ]
    },
    contact: {
        address: "AKGEC Campus: 27th KM Milestone, Delhi-Meerut Expressway, Adhyatmik Nagar, Ghaziabad, Uttar Pradesh-201015",
        email: "irtc@akgec.ac.in",
        phones: ["+91-7669094514", "8743879879"]
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
                <section className="px-6 lg:px-8 max-w-[1450px] mx-auto mb-20">
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

                {/* Events Section */}
                <section className="px-6 lg:px-8 max-w-[1450px] mx-auto mb-20">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{kukaData.events.title}</h2>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {kukaData.events.items.map((event, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedItem(event)}
                                className="bg-white rounded-xl shadow-md p-0 border border-gray-100 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                            >
                                {/* Image Section */}
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 right-4 z-20 text-xs font-bold text-gray-800 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                                        {event.id}
                                    </span>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Calendar size={18} className="text-brand-blue" />
                                        <span className="text-sm text-brand-blue font-semibold">Event / Workshop</span>
                                    </div>
                                    <h3 className="text-lg font-novaBold text-gray-800 mb-3 leading-snug group-hover:text-brand-blue transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 font-novaReg leading-relaxed text-justify flex-1 line-clamp-3 mb-4">
                                        {event.description}
                                    </p>

                                    {/* Expand indicator */}
                                    <div className="mt-auto flex items-center text-xs font-semibold text-brand-blue group-hover:translate-x-2 transition-transform duration-300">
                                        Read More <ArrowRight size={14} className="ml-2" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Awards Section */}
                <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-20">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{kukaData.awards.title}</h2>
                        <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {kukaData.awards.items.map((award, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={award.image}
                                        alt="Award Recognition"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex items-start gap-4">
                                    <Trophy className="text-brand-yellow shrink-0 mt-1" size={24} />
                                    <p className="text-gray-700 font-novaReg text-sm text-justify leading-relaxed">{award.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Programs Offered */}
                <section className="bg-brand-blue text-white py-20 mb-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-novaBold mb-6">{kukaData.programs.title}</h2>
                            <p className="max-w-3xl mx-auto text-blue-100 font-novaReg text-lg">{kukaData.programs.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {kukaData.programs.items.map((program, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <BookOpen className="text-brand-yellow" size={20} />
                                        <h4 className="font-novaBold text-lg">Program {idx + 1}</h4>
                                    </div>
                                    <p className="text-blue-50 font-novaReg">{program}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Upcoming Programs */}
                <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{kukaData.upcoming.title}</h2>
                        <p className="text-gray-600 font-novaReg text-lg mb-8">{kukaData.upcoming.description}</p>

                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Program Title</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Duration</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Fee (INR)</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Coordinator</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Contact</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {kukaData.upcoming.table.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-gray-800 font-medium">{row.title}</td>
                                            <td className="py-4 px-6 text-gray-600">{row.duration}</td>
                                            <td className="py-4 px-6 text-gray-600">{row.fee}</td>
                                            <td className="py-4 px-6 text-gray-600">{row.coordinator}</td>
                                            <td className="py-4 px-6 text-gray-600 text-sm">{row.contact}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] z-0"></div>
                        <div className="relative z-10">
                            <h2 className="text-5xl font-novaBold mb-12">Contact Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
                                <div className="flex items-start gap-5">
                                    <MapPin className="text-brand-yellow shrink-0 mt-1" size={24} />
                                    <p className="text-gray-300 text-lg leading-relaxed">{kukaData.contact.address}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-5">
                                        <Mail className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <a href={`mailto:${kukaData.contact.email}`} className="text-gray-300 text-lg hover:text-white transition-colors">{kukaData.contact.email}</a>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <Phone className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <div className="text-gray-300 text-lg leading-relaxed">
                                            {kukaData.contact.phones.join(" / ")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
