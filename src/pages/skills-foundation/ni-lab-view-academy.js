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
const niLabViewData = {
    title: "NI LabVIEW Academy",
    description: [
        "The NI LabVIEW Academy at Ajay Kumar Garg Engineering College (AKGEC) is an advanced training and certification centre established to develop highly skilled engineers in the field of Graphical System Design, Test & Measurement, Embedded Systems, and Automation using National Instruments (NI) LabVIEW.",
        "It aims to equip engineering students, industry professionals, and researchers with the ability to design, prototype, validate, and deploy engineering solutions using LabVIEW and NI hardware platforms."
    ],
    infrastructure: {
        title: "Infrastructure at NI LabVIEW Academy CoE",
        items: [
            {
                id: "1",
                title: "myDAQ",
                description: "The NI myDAQ is a portable data acquisition device designed for hands-on experimentation in circuits, measurement, and instrumentation using LabVIEW. At AKGEC NI LabVIEW Academy, myDAQ is used to interface sensors and test control logic in real time. Students connect touch sensors and monitor signals through LabVIEW VIs, which interpret input events as elevator floor commands, execute predefined control routines, and update the system display. This setup enables practical learning in data acquisition, sensor interfacing, and control logic implementation in a safe and real-time environment.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "2",
                title: "myRIO",
                description: "The NI myRIO is a real-time embedded controller with onboard FPGA and multi-channel I/O, ideal for rapid prototyping and automation studies. At the LabVIEW Academy, myRIO is used for mobility assistance and robotics demonstrations, where students connect a joystick to acquire position signals, process data on the FPGA, and map directional commands to motor actions. This configuration enables implementation of embedded control logic, signal filtering, and real-time actuation, helping students build practical expertise in robotics and system integration.",
                icon: Zap,
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "3",
                title: "Analog Discovery 2",
                description: "Analog Discovery 2 is a multi-instrument device combining an oscilloscope, waveform generator, logic analyzer, and power tools for compact electronics testing. Students at AKGEC use it to validate circuit behavior by generating test signals, observing amplifier response, checking distortions, and measuring output characteristics directly in LabVIEW. This setup allows rapid breadboard testing, real-time signal visualization, and comparative analysis between theoretical designs and practical performance.",
                icon: Activity,
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "4",
                title: "NI USRP",
                description: "USRP is a software-defined radio platform used for prototyping and testing wireless communication systems. It enables acquisition, modulation, transmission, and reception of signals for applications such as telemetry, digital communication, and real-time analysis of wireless links through LabVIEW.",
                icon: Radio,
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            },
            {
                id: "5",
                title: "CompactDAQ",
                description: "NI CompactDAQ is a modular data acquisition platform that supports a wide range of sensor and signal-conditioning modules for precise industrial measurements. It is used to build a predictive maintenance setup for an induction motor, where vibration and temperature sensors are interfaced to acquire real-time data in LabVIEW. The system analyzes trends and machine condition parameters to detect imbalance, bearing faults, and overheating through continuous monitoring and alert indicators.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation5.png"
            },
            {
                id: "6",
                title: "CompactRIO",
                description: "The NI CompactRIO is an industrial-grade embedded control and monitoring platform that combines a real-time processor, reconfigurable FPGA, and modular I/O for high-performance automation and measurement applications. Integrated with LabVIEW, it enables deterministic control, rapid prototyping, and deployment of advanced industrial systems in real-world environments.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "7",
                title: "Virtual Bench",
                description: "The NI VirtualBench is an all-in-one PC-based instrument combining an oscilloscope, function generator, digital I/O, DMM, and power supply into a single compact device. Used with LabVIEW or its desktop app, it enables streamlined circuit testing, signal generation, and measurement without multiple standalone instruments.",
                icon: Activity,
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "8",
                title: "PXI",
                description: "The NI PXI-1078 is an 8-slot PXI chassis that provides the backbone for modular instrumentation and automated test systems. It supports multiple PXI modules (DAQ, signal conditioning, RF, digital I/O, etc.), offering synchronized timing and high reliability — ideal for building flexible, scalable test benches with LabVIEW.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "9",
                title: "ELVIS II",
                description: "The NI ELVIS II is an integrated engineering education platform that combines instruments such as an oscilloscope, DMM, function generator, power supplies, and prototyping area into a single workstation. With direct LabVIEW integration, it enables hands-on learning of circuits, measurements, control, and embedded system concepts in a classroom or lab environment.",
                icon: Zap,
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            },
            {
                id: "10",
                title: "NI Robotic Kit",
                description: "The NI Robotic Kit enables hands-on development of autonomous and semi-autonomous robotic systems using LabVIEW. Equipped with sensors, drive modules, and controller interfaces, it supports experiments in motion control, path planning, sensor fusion, and embedded real-time decision making for education and research.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation5.png"
            }
        ]
    },
    events: {
        title: "Glimpse of the Events/Workshops",
        items: [
            { id: "1", title: 'Faculty Development Program - Empowering Engineering Education through LabVIEW', description: "A 5-Days Faculty Development Program (FDP) on LabVIEW Essentials for Test, Measurement & Control was conducted to enhance faculty expertise in graphical system design and modern engineering practices. The sessions covered core LabVIEW concepts, instrumentation techniques, and practical test-automation demonstrations. The FDP empowered faculty to integrate LabVIEW into their teaching and actively encourage students to adopt it for projects, research, and career advancement.", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" },
            { id: "2", title: "Staff Development Program on LabVIEW", description: "AKGEC NI LabVIEW Academy organized a 5-days Staff Development Program on LabVIEW Essentials for Test, Measurement & Control, introducing virtual instrumentation and LabVIEW’s industrial and research applications. The program also highlighted job opportunities for LabVIEW programmers, with 16 staff participants from EN, ECE, CSE, IT, and AS&H departments. The event concluded successfully with positive feedback from all attendees.", image: "/image/SkillFoundationImage/skill-foundation2.jpeg" },
            { id: "3", title: "Training Program - Building Proficiency in Graphical Programming", description: "Training programs on LabVIEW Core I & II were conducted to build strong foundational and intermediate skills in graphical programming, data acquisition, and application development. Participants learned essential LabVIEW structures, debugging methods, modular programming practices, and DAQ integration through hands-on exercises. The programs equipped learners to confidently develop real-world LabVIEW applications and advance toward certification and project work.", image: "/image/SkillFoundationImage/skill-foundation3.png" },
            { id: "4", title: "Corporate Training Program - Micromatic Engineers", description: "AKGEC NI LabVIEW Academy conducted a 3-day LabVIEW Training Program for engineers from Micromatic Grinding Technologies, focusing on core LabVIEW concepts, real-time data acquisition, and hardware integration for industry applications. Participants found the training highly beneficial in enhancing their ability to design and troubleshoot LabVIEW-based test and measurement solutions.", image: "/image/SkillFoundationImage/skill-foundation4.jpeg" },
            { id: "5", title: "IIT Delhi Workshop Series", description: "AKGEC NI LabVIEW Academy conducted a series of hands-on workshops at IIT Delhi on various LabVIEW topics, including LabVIEW Basics, IoT with LabVIEW, Robocode, Data Analysis, and more. These sessions helped participants explore the wide range of LabVIEW applications through practical exercises and guided demonstrations. The initiative was undertaken to extend the Academy’s reach to students from other institutions and inspire them to pursue LabVIEW-driven learning and project work.", image: "/image/SkillFoundationImage/skill-foundation5.png" },
            { id: "6", title: "Train the Trainer Program on USRP", description: "A 2-Day Train the Trainer Program on USRP was conducted to strengthen faculty proficiency in software-defined radio and wireless communication concepts using LabVIEW. The sessions covered RF fundamentals, modulation techniques, real-time signal processing, and hands-on experimentation with USRP hardware. This program enabled trainers to confidently guide students in SDR-based projects and advanced communication system learning.", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" },
            { id: "7", title: "Global Certifications Support", description: "The Academy provides structured preparatory classes to support learners aiming for NI’s global LabVIEW certifications, including CLAD and CLD. We also host these certification exams on campus for the convenience of students and professionals. This helps participants confidently pursue industry-recognized LabVIEW credentials to strengthen their career prospects.", image: "/image/SkillFoundationImage/skill-foundation2.jpeg" }
        ]
    },
    awards: {
        title: "Awards & Recognition",
        items: [
            { text: "Winner of NI System Design Contest 2025: Team Udbhav from AKGEC secured First Prize at the Emerson–NI System Design Contest 2025 at IIT Madras Research Park, winning for their innovative project “Bhoomitra – Smart In-House Waste Segregation & Vermicompost Monitor.”", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" },
            { text: "NI Conclave 2024: Emerging NI Academy in North India. The AKGEC Skills Foundation's NI LabVIEW Academy won the \"NI LabVIEW Academy: School of Excellence\" award for India at the VVDN-NI Academic Conclave 2024.", image: "/image/SkillFoundationImage/skill-foundation2.jpeg" }
        ]
    },
    programs: {
        title: "Programs Offered",
        description: "The Centre offers the following training programs for industry professionals and engineering students of all disciplines. On successful completion, participants are assessed for their learning & skills and awarded with a globally recognised joint certification from AKGEC & NI.",
        items: [
            "Short-Term Training Program - LabVIEW Core 1 and Core 2",
            "Training Program Core 3",
            "Industrial Training Program"
        ]
    },
    upcoming: {
        title: "Upcoming Programs",
        description: "The NI LabVIEW Academy Centre of Excellence is offering a 40-hour Winter Training Program on Industrial IoT with LabVIEW for B.Tech students and Professionals, scheduled for December 2025 and January 2026.",
        contactEmail: "nilabview@akgec.ac.in",
        contactPhone: "+91-9650552846",
        table: [
            {
                title: "LabVIEW CORE I & II",
                duration: "40 Hours",
                fee: "₹ 7000",
                coordinator: "Dr. Suvarna Mujumar",
                contact: "nilabview@akgec.ac.in / +91-9650552846"
            },
            {
                title: "Industrial IoT with LabVIEW",
                duration: "40 Hours",
                fee: "₹ 7000",
                coordinator: "Ms. Deepti Singh",
                contact: "nilabview@akgec.ac.in / +91-9818212869"
            },
            {
                title: "FDP on System Integration Using LabVIEW",
                duration: "5 Days",
                fee: "-",
                coordinator: "Dr. Suvarna Mujumar",
                contact: "nilabview@akgec.ac.in / +91-9650552846"
            }
        ]
    },
    contact: {
        address: "AKGEC Campus: 27th KM Milestone, Delhi-Meerut Expressway, Adhyatmik Nagar, Ghaziabad, Uttar Pradesh-201015",
        email: "nilabview@akgec.ac.in",
        phones: ["+91-9650552846", "8743879879"]
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
                                        {niLabViewData.title}
                                    </h1>
                                    <div className="h-1.5 w-24 bg-brand-yellow mt-4 rounded-full"></div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 font-novaReg leading-relaxed">
                                {niLabViewData.description.map((para, i) => (
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
                            {niLabViewData.infrastructure.title}
                        </motion.h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                        {niLabViewData.infrastructure.items.map((item, index) => {
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{niLabViewData.events.title}</h2>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {niLabViewData.events.items.map((event, idx) => (
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{niLabViewData.awards.title}</h2>
                        <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {niLabViewData.awards.items.map((award, idx) => (
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
                            <h2 className="text-3xl md:text-4xl font-novaBold mb-6">{niLabViewData.programs.title}</h2>
                            <p className="max-w-3xl mx-auto text-blue-100 font-novaReg text-lg">{niLabViewData.programs.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {niLabViewData.programs.items.map((program, idx) => (
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{niLabViewData.upcoming.title}</h2>
                        <p className="text-gray-600 font-novaReg text-lg mb-8">{niLabViewData.upcoming.description}</p>

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
                                    {niLabViewData.upcoming.table.map((row, idx) => (
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
                                    <p className="text-gray-300 text-lg leading-relaxed">{niLabViewData.contact.address}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-5">
                                        <Mail className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <a href={`mailto:${niLabViewData.contact.email}`} className="text-gray-300 text-lg hover:text-white transition-colors">{niLabViewData.contact.email}</a>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <Phone className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <div className="text-gray-300 text-lg leading-relaxed">
                                            {niLabViewData.contact.phones.join(" / ")}
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
