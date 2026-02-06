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
const froniusData = {
    title: "AKGEC Fronius Advance Welding Technology & Research Centre",
    description: [
        "AKGEC Skills Foundation, in collaboration with Fronius International GmbH, has established India’s first “Advanced Welding Technology and Research Centre (AWTRC)” in Uttar Pradesh. The Centre features state-of-the-art facilities to develop a globally competent workforce of welders, cutters, fitters, operators, engineers, and inspectors.",
        "AWTRC supports advanced welding, plasma cutting, and NDT/DT technologies, enabling weld trials, process validation, and industry-focused research, with AWS and IIW-India offering international welding certifications."
    ],
    infrastructure: {
        title: "Infrastructure at AKGEC Fronius Advance Welding Technology & Research Centre",
        items: [
            {
                id: "1",
                title: "Trans Steel Gas Metal Arc Welding",
                description: "TransSteel GMAW welding systems feature a fully digital power source that ensures reproducible welds. Using Steel Transfer Technology, they provide expert-designed characteristics for precise ignition and stable burn-off. With up to 30% higher deposition rates, TransSteel is ideal for cost-effective welding of thick steel. Its dual-circuit cooling, adjustable contact tip, high wire-feed speed, and optimized system design enable an impressive deposition rate of 13.5 kg/h.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "2",
                title: "AccuPocket Shielded Metal Arc Welding (SMAW) Portable System",
                description: "AccuPocket welding machines are battery-operated systems with an intelligent charger, enabling truly mobile welding without mains power. A full charge supports up to six 3.25 mm or eighteen 2.5 mm electrodes. With a 2 kVA generator, it delivers full welding performance. It handles all electrode types up to 3.25 mm on carbon steel, stainless steel and aluminium, enhanced by AccuBoost technology for superior arc control.",
                icon: Zap,
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "3",
                title: "Shielded Metal Arc Welding (SMAW)",
                description: "TransPocket SMAW power sources are lightweight, robust and shockproof, delivering highly stable arcs even with voltage fluctuations. They support all electrode types, including cellulosic for vertical-down welding, with optimized ignition settings, Hot-Start for rutile/cellulosic and Soft-Start for basic electrodes. Offering constant arc performance and high reliability, they suit plant engineering, structural steelwork, construction, pipelines, mechanical engineering and shipbuilding applications.",
                icon: Activity,
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "4",
                title: "Synergic Pulse-based Gas Metal Arc Welding Inverter System",
                description: "The TransPuls Synergic Pulsed GMAW system is a fully digitized 320 A multi-process power source for MIG/MAG, TIG and SMAW, suitable for manual or robotic use. Its digital inverter ensures energy efficiency and self-diagnostics. Adaptive Arc Control, smooth starting features, pulse waveforms and a comprehensive alloy database ensure superior arc quality, while Syncropulse delivers TIG-like beads. Synergic mode auto-optimizes welding parameters.",
                icon: Flame,
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            },
            {
                id: "5",
                title: "Synergic Pulse-Based Intelligent Gas Metal Arc Welding Inverter System",
                description: "The TPS/i is a fully digitized, modular GMAW system with high-speed data processing for exceptionally stable arcs, faster control loops and superior welding precision. Supporting CV, Pulse, LSC and PMC processes, it offers advanced arc-stabilizing features for higher weld quality, speed and minimal spatter. With extensive communication capabilities, it delivers maximum efficiency, reliability and profitability for modern automated production.",
                icon: Snowflake,
                image: "/image/SkillFoundationImage/skill-foundation5.png"
            },
            {
                id: "6",
                title: "DC Inverter-based Gas Tungsten Arc Welding System",
                description: "TransTIG GTAW systems are lightweight, robust and fully digitized, delivering a quiet, highly stable TIG arc with excellent energy efficiency. Features like low open-circuit power, automatic cooling cut-out and automatic cap shaping reduce power use, wear and labour time. With long service life and high versatility, they excel in chemical plants, pipelines, fabrication, maintenance and even robotic or manual welding applications.",
                icon: Crosshair,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "7",
                title: "AC Inverter-based Gas Tungsten Arc Welding (GTAW) System for Aluminium Welding",
                description: "MagicWave series of GTAW systems are fully digitized and most efficient TIG AC welding machines having extremely low open-circuit power. It is equipped with “Active Wave technology” for peace and quiet operation with a much quieter arc. The integrated digital signal processor always computes in real time – the waveform that will permit the highest possible arc stability with the lowest possible noise emissions levels. These machines are very suitable for aluminium and its alloys, but also for low and high alloy steels and non-ferrous metals. Also, it is possible to make variable adjustments to the AC waveform, giving the welder reliable weld-pool control even at high amperages.",
                icon: Printer,
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "8",
                title: "Inverter based Gas Tungsten Arc Welding with digitally controlled Cold Wire Metal Transfer System",
                description: "The MagicWave GTAW (CWT) system combines a digital MagicWave power source with a cold-wire feeding unit that automates filler metal delivery in TIG welding. This ensures repeatable parameters, higher travel speeds and zero filler-rod stub loss while keeping wire clean in a sealed cabinet. Suitable for manual or automated use, it boosts productivity, reduces downtime and delivers consistently high-quality welds with a dual-groove drive for multiple wire sizes.",
                icon: Radio,
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "9",
                title: "Pug Cutting System",
                description: "The Pug Cutting System is a semiautomatic, track-mounted portable thermal cutter known for its flexibility, ease of use and reliable performance. Equipped with a Messer oxy-fuel torch, flashback arrestor and a single-phase motor with 200–1000 mm/min speed control, it delivers smooth straight or bevel cuts on mild steel and aluminium from 3–100 mm. Its robust build ensures high efficiency, strength and low maintenance.",
                icon: Eye,
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            },
            {
                id: "10",
                title: "Smart Blade CNC Plasma Cutting System",
                description: "Smart Blade is a compact, powerful Messer gantry-type CNC plasma cutting system with a Hypertherm power source and downdraft fume-extraction bed. It cuts MS and SS precisely at high speeds, with 12 m/min positioning to minimize idle time. Slag trays ease cleaning, while Global Control ensures simple three-step operation. Collision detection, magnetic torch holding and arc-voltage height control enhance safety, nozzle life and cut quality.",
                icon: Package,
                image: "/image/SkillFoundationImage/skill-foundation5.png"
            },
            {
                id: "11",
                title: "Deburring Machine",
                description: "Deburring removes burrs and surface imperfections formed during metal cutting. The deburring machine features a dual-disc motor mounted on a mechanized arm for easy maneuvering. Its vacuum-based table securely grips flat metal pieces cut by a plasma machine, ensuring quick mounting, stable operation and efficient finishing of components.",
                icon: Scissors,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "12",
                title: "Ultrasonic Testing Machine",
                description: "The Krautkramer USM 36 combines a modern operating platform with GE’s proven, robust flaw-detection hardware. Designed as a reliable everyday NDT tool, it offers features like screenshot reporting and A-scan video recording for analysis and inspection validation. Suitable for welds, corrosion, castings, forgings and special materials, it serves industries from power and petrochemical to automotive, metals and aerospace.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "13",
                title: "Eddy Current Testing Machine",
                description: "This eddy current inspection system offers an excellent signal-to-noise ratio and a high-resolution display. With customizable workflows and onboard Wi-Fi, inspectors can share screens, communicate, and troubleshoot instantly. It supports single, dual, and dynamic gain modes for crack detection and coating measurement and is built for harsh environments with a superior IP rating.",
                icon: Zap,
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "14",
                title: "Magnetizing Machine",
                description: "Magnetic Particle Inspection (MPI) is an NDT method for detecting surface and near-surface defects in ferromagnetic materials using wet or dry magnetic particles. Magnaflux MPI equipment is fast, reliable and durable, with AC, half-wave DC or full-wave DC outputs. Its yokes and power packs suit various industrial needs and part sizes.",
                icon: Activity,
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            },
            {
                id: "15",
                title: "Bench Grinding Station",
                description: "The Grinding Station has refurbished a 20×8×8.5 ft ship container with aluminium flooring, PPGI PUF wall panels, UPVC glass doors and windows, custom workstations, ventilation ducts, exhaust systems and electrical fittings. It includes LED lighting, awning, tool boards, foldable tables, rolling shutters, fans, toughened glass partitions, GI sheet tops and rain-protection canopies for student project work.",
                icon: Flame,
                image: "/image/SkillFoundationImage/skill-foundation5.png"
            },
            {
                id: "16",
                title: "Virtual Welding Simulation System",
                description: "The Virtual Welding System simulates real welding conditions, allowing trainees to build skills safely and cost-effectively. With advanced sensors and real-time feedback, it supports custom courses, tailored assignments, skill assessment, and progress tracking. A playback feature helps learners review mistakes, and the system enables SMAW and GMAW training across all positions and joint configurations.",
                icon: Snowflake,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            }
        ]
    },
    events: {
        title: "Glimpse of the Events/Workshops",
        items: [
            { id: "1", title: "Welder Qualification Test in Association With Alstom Czech", description: "AKGEC Skills Foundation conducted a Welder Qualification Test Program on 10–11 October 2025 at AWTRC in collaboration with Randstad India Pvt. Ltd. and ALSTOM, Czech Republic. A total of 76 participants were tested using the GMAW process, with evaluations through visual inspection and fracture testing. Experts from ALSTOM and Randstad assessed the tests, enabling successful candidates to work in the Czech Republic.", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" },
            { id: "2", title: "Training of Welders from Spheros Motherson, Greater Noida", description: "AKGEC-Fronius AWTRC organized a two-day training program for Spheros Motherson Thermal System Ltd. at the Advanced Welding Technology & Research Centre on 30 June 2025 & 01 July 2025. The program included classroom-based theory sessions and hands-on practical training covering SMAW, GMAW, GTAW, brazing, and identification and rectification of welding defects, providing participants with comprehensive knowledge and practical skills in advanced welding techniques.", image: "/image/SkillFoundationImage/skill-foundation2.jpeg" },
            { id: "3", title: "Women Welding Fraternity Competition - 2025 (WWFc-2025)", description: "The Women Welding Fraternity Competition 2025, organized by Fronius India with leading institutes including AKGEC, promoted women’s participation in welding. AKGEC hosted the North Zone event with 24 participants from industry and academia. Ten candidates qualified for the national final at CVRGU, Bhubaneswar.", image: "/image/SkillFoundationImage/skill-foundation3.png" },
            { id: "4", title: "Corporate Workshop on Oxy-fuel Cutting & Safety for Messer Cutting System", description: "AKGEC Skills Foundation, in collaboration with Messer Cutting Systems India Pvt. Ltd., successfully conducted an Industry Training Program on Oxy-fuel Cutting & Safety led by international expert Mr. Peter Rohlssen on 15 July 2025. A total of 68 professionals from leading industries participated. The program featured live oxy-fuel demos, advanced safety training, facility showcasing, networking sessions, and a round-table seminar with full multimedia support.", image: "/image/SkillFoundationImage/skill-foundation4.jpeg" },
            { id: "5", title: "Training Program for Maruti Suzuki India Pvt. Ltd. on Brazing Technology", description: "AKGEC Skills Foundation, in association with IMTMA, successfully conducted a two-day Brazing Technology training for 20 engineers from Maruti Suzuki India Pvt. Ltd. on 16–17 December 2024 at AWTRC. The program included hands-on sessions, theory classes, and demonstrations on copper and aluminium brazing, advanced techniques, joint design, safety measures, and quality inspection, enhancing participants’ skills for automotive applications.", image: "/image/SkillFoundationImage/skill-foundation5.png" },
            { id: "6", title: "Training Program for Maruti Suzuki India Pvt. Ltd. on Welding Technology", description: "AKGEC Skills Foundation, in association with IMTMA, successfully conducted a two-day Welding Technology training for 20 engineers from Maruti Suzuki India Pvt. Ltd. on 12–13 December 2024 at AWTRC. The program covered MIG, TIG, spot, and resistance welding, welding symbols, blueprint reading, troubleshooting, quality inspection, and advanced technologies including adaptive welding, robotics, laser beam, electron beam, and hybrid welding processes for automotive applications.", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" },
            { id: "7", title: "Skill Development Program in Welding Domain under DDUGKY Scheme", description: "AKGEC Skills Foundation, Ghaziabad successfully trained 68 candidates in the welding domain under the DDU-GKY scheme, empowering youth with industry-relevant skills and hands-on expertise. The program focused on advanced welding techniques, safety practices, and employability enhancement, enabling participants to secure better career opportunities and contribute effectively to the manufacturing and industrial sectors.", image: "/image/SkillFoundationImage/skill-foundation2.jpeg" },
            { id: "8", title: "Welding Competency Program in association with Fronius India Pvt Ltd, under FACT Scheme", description: "From 15 March to 13 April 2023, Fronius India, in association with AKGEC Skills Foundation, sponsored a 160-hour Advanced Arc Welding training program to prepare trainees as Welding Technicians. The course strengthened understanding of arc-welding parameters and synergic digital power sources, enabling high-quality welds on steel, stainless steel, and aluminium while ensuring strict safety standards.", image: "/image/SkillFoundationImage/skill-foundation3.png" },
            { id: "9", title: "Welding and Cutting Workshop for Air Liquide India Pvt. Ltd.", description: "AKGEC-Fronius AWTRC organized a Welding & Cutting Workshop for 25 Air Liquide personnel from 22–24 August 2023. The program included two days of classroom sessions and one day of GMAW practical demonstrations, along with training in safety and good welding practices. Experts from Air Liquide and ALTEC attended the valedictory session. Participants learned welding fundamentals, gas equipment, cutting, troubleshooting, and post-weld practices.", image: "/image/SkillFoundationImage/skill-foundation4.jpeg" },
            { id: "10", title: "ToT Program for Instructors from Government ITI under DTTE, Govt. of NCT of Delhi on Advance Welding Technology", description: "AKGEC Skills Foundation conducted a fully residential Training of Trainers (ToT) program for Government ITI instructors from 31 July–4 August 2023. Eleven participants trained in Advanced Welding Technology and eight in IT. The welding ToT included hands-on SMAW, GMAW, and GTAW training, safety practices, expert lectures, and demos on robotic welding, CNC plasma, NDT, and linear welding carriage.", image: "/image/SkillFoundationImage/skill-foundation5.png" },
            { id: "11", title: "Training of Welding Technician from Nepal", description: "AKGEC-Fronius AWTRC organized a Welder’s Competency Development Program for 8 technicians from Nepal from 10–25 July 2023, mobilized by Hetauda Academy. Participants received hands-on training in SMAW, GMAW, and FCAW across multiple welding positions, along with safety practices. The Indian Institute of Welding assessed them in GMAW and FCAW (3G & 5G), and all candidates successfully passed.", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" },
            { id: "12", title: "Training of Trainer (ToT) in association with CGSC", description: "AKGEC FRONIUS AWTRC, in association with CGSC, hosted the Train the Trainer (ToT) program from 4–6 October 2023 for nine Welding and Machining job roles. Eighteen participants attended. CGSC supported facility, hospitality, and consumable costs. AWTRC provided classrooms, practical labs, trainers, and optional residential facilities. The program was successfully organized with full support and coordination.", image: "/image/SkillFoundationImage/skill-foundation2.jpeg" },
            { id: "13", title: "Training program for Amritsar Railway Workshop", description: "A Residential Training Program for Northern Railway Mechanical Workshop, Amritsar is being conducted at AKGEC-Fronius AWTRC from 6th to 10th June 2022 for eight railway employees. The program includes advanced welding training in collaboration with Fronius India and Oxyweld Engineers", image: "/image/SkillFoundationImage/skill-foundation3.png" },
            { id: "14", title: "World Skills India 2021 Boot Camp and Final Competition", description: "IndiaSkills 2021 Finals in Welding Technology, organized by NSDC, were hosted by AKGEC Skills Foundation, Ghaziabad, from 6–10 January 2022. A four-day boot camp prepared contestants in Welding. In Welding, 13 participants from 10 states completed tasks using SMAW, GMAW, and GTAW, evaluated on weld quality and test results after fabricating various assemblies.", image: "/image/SkillFoundationImage/skill-foundation4.jpeg" },
            { id: "15", title: "Industrial Welding Training Program for welders of U.S. Embassy, New Delhi", description: "Successfully completed 2 Weeks Industrial Welding Training Program for welders of the U.S. Embassy, New Delhi. The program was conducted by AKGEC-Fronius Advance Welding Technology & Research Centre in association with M/s Enviro Solutions, authorized training partners of the Indian Institute of Welding from 9th –23rd August 2021.", image: "/image/SkillFoundationImage/skill-foundation5.png" }
        ]
    },
    awards: {
        title: "Awards & Recognition",
        items: [
            { text: "Best Welder Competition for Northern Region 2025 hosted by AWTRC. AKGEC-Fronius AWTRC hosted the National Skill Competition – Best of the Best Welders 2025 on 12–13 September, in collaboration with IIW-India and sponsored by Voestalpine Böhler. 64 welders competed in structural and pipe welding categories, judged by the IIW jury. Winners will advance to the National Finals in Chennai, showcasing talent from leading organizations and promoting excellence in welding.", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" },
            { text: "Fabrication of Rakshita– Bike Ambulance for DRDO INMAS. AKGEC-Fronius AWTRC supported DRDO INMAS in the Rakshita Bike Ambulance project by preparing and submitting Technology Transfer documents for absorption certification. Rakshita, developed for CRPF, provides immediate medical aid to injured personnel in remote and urban areas using a modified Royal Enfield Classic 350cc, equipped with first-aid kits, oxygen, splints, and monitoring equipment for rapid response within the critical “golden hour.”", image: "/image/SkillFoundationImage/skill-foundation2.jpeg" },
            { text: "Fabrication of Bullock Driven Tractor for Rural Technology Action Group (RUTAG) IIT Delhi. AKGEC-Fronius AWTRC, in collaboration with RUTAG, IIT Delhi, fabricated a modified Bullock Driven Tractor (BDT) to enhance traditional agricultural practices. Designed for efficiency and multi-tasking, the BDT performs ploughing, harrowing, sowing, planting, and harvesting. Features include a steel rope and winch mechanism for attachments, ergonomic car seats, easy maneuverability, lightweight construction, and user-friendly operation for rural farmers.", image: "/image/SkillFoundationImage/skill-foundation3.png" }
        ]
    },
    programs: {
        title: "Programs Offered",
        description: "The Centre offers the following training programs for industry professionals and engineering students of all disciplines. On successful completion of training, participants are assessed for their learning & skills and awarded with a globally recognized joint certification from AKGEC Skills Foundation & Fronius.",
        items: [
            "Welder’s Competency Program - Basic",
            "Welder’s Competency Program - Advance",
            "Industrial Welding Training - Basic",
            "Industrial Welding Training - Advance",
            "Onsite Training Program in Welding Technology",
            "Industrial Training Program on Welding & Inspection Technology- Technician",
            "Industrial Training Program on Welding & Inspection Technology- Engineers",
            "Industrial Internship Program on Welding & Fabrication Technology"
        ]
    },
    upcoming: {
        title: "Upcoming Programs",
        description: "The AKGEC Fronius Advance Welding Technology & Research Centre is offering a 120-hour Winter Training Program on Welding & Inspection Technology.",
        contactEmail: "awtrc@akgec.ac.in",
        contactPhone: "+91-8968651422",
        table: [
            {
                title: "Winter Training Program on Welding & Inspection Technology",
                duration: "120 Hours",
                fee: "₹ 6,000",
                coordinator: "Mr. Abhishek Gupta",
                contact: "awtrc@akgec.ac.in / +91-8968651422"
            }
        ]
    },
    contact: {
        address: "AKGEC Campus: 27th KM Milestone, Delhi-Meerut Expressway, Adhyatmik Nagar, Ghaziabad, Uttar Pradesh-201015",
        email: "awtrc@akgec.ac.in",
        phones: ["+91-8968651422", "8743879879"]
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
                                        {froniusData.title}
                                    </h1>
                                    <div className="h-1.5 w-24 bg-brand-yellow mt-4 rounded-full"></div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 font-novaReg leading-relaxed">
                                {froniusData.description.map((para, i) => (
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
                            {froniusData.infrastructure.title}
                        </motion.h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                        {froniusData.infrastructure.items.map((item, index) => {
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{froniusData.events.title}</h2>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {froniusData.events.items.map((event, idx) => (
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{froniusData.awards.title}</h2>
                        <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {froniusData.awards.items.map((award, idx) => (
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
                            <h2 className="text-3xl md:text-4xl font-novaBold mb-6">{froniusData.programs.title}</h2>
                            <p className="max-w-3xl mx-auto text-blue-100 font-novaReg text-lg">{froniusData.programs.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {froniusData.programs.items.map((program, idx) => (
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{froniusData.upcoming.title}</h2>
                        <p className="text-gray-600 font-novaReg text-lg mb-8">{froniusData.upcoming.description}</p>

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
                                    {froniusData.upcoming.table.map((row, idx) => (
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
                                    <p className="text-gray-300 text-lg leading-relaxed">{froniusData.contact.address}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-5">
                                        <Mail className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <a href={`mailto:${froniusData.contact.email}`} className="text-gray-300 text-lg hover:text-white transition-colors">{froniusData.contact.email}</a>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <Phone className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <div className="text-gray-300 text-lg leading-relaxed">
                                            {froniusData.contact.phones.join(" / ")}
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
