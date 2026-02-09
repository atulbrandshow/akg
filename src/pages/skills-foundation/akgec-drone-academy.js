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
    MapPin,
    Plane,
    Camera,
    Map,
    Gamepad2,
    Cpu,
    Tool,
    Flag
} from "lucide-react";

// Data Structure
const droneData = {
    title: "AKGEC Drone Academy",
    description: [
        "AKGEC Drone Academy, an initiative of the AKGEC Skills Foundation (ASF), is a DGCA-certified Remote Pilot Training Organization (RPTO No. 35/2024) committed to developing industry-ready drone professionals. The academy delivers mission-focused training through a rigorous curriculum that integrates advanced simulators, certified UAV platforms, and compliance-driven safety procedures aligned with national aerospace standards.",
        "The program seamlessly blends comprehensive theoretical instructions with extensive hands-on flying sessions, ensuring every trainee gains real-world operational experience. Equipped with state-of-the-art simulators, a modern multi-category drone fleet, and industry-standard safety protocols, the academy prepares learners to meet the demands of the rapidly advancing UAV sector.",
        "AKGEC Drone Academy is supported by a strong technical team comprising five experienced DGCA-certified Remote Pilot Instructors and two certified drone service engineers, ensuring high-quality, reliable, and professional training delivery."
    ],
    infrastructure: {
        title: "Infrastructure at AKGEC Drone Academy CoE",
        description: "Experience world-class drone training supported by state-of-the-art infrastructure, certified instructors, and immersive hands-on learning. The academy is committed to empowering youth with industry-relevant skills and comprehensive UAV knowledge, enabling them to excel in the rapidly expanding drone ecosystem.",
        items: [
            {
                id: "1",
                title: "Advanced Drone Pilot Simulation & Skill Development Center",
                description: "The academy uses the RealFlight Evolution Drone Flight Simulator, equipped with the Spektrum InterLink DX controller for an authentic, real-world flying feel. With access to 300+ aircraft models and 75+ simulated flying sites, trainees can practice diverse scenarios, refine maneuvers, and build strong operational confidence before actual field flying.",
                icon: Gamepad2,
                image: "/image/skill-foundation/drone-academy/infrastructure/remote-pilot-simulation-proficiency-center.webp"
            },
            {
                id: "2",
                title: "Small-Class Rotorcraft Drone Fleet",
                description: "A versatile fleet of four small-class rotorcraft drones supports a wide range of applications, including training, mapping, surveillance, and agricultural spraying. Key models include: Asteria Aerospace A200 XT (multipurpose with obstacle detection), Crystal Ball Model V (mapping & surveillance with parachute recovery), and IoTech Agribot A6 (DGCA-certified agricultural spraying drone).",
                icon: Plane,
                image: "/image/skill-foundation/drone-academy/infrastructure/small-class-rotorcraft-drone-fleet.webp"
            },
            {
                id: "3",
                title: "Pix4 Dmapper Educational Perpetual License – Photogrammetry Classroom",
                description: "AKGEC Drone Academy operates a dedicated photogrammetry classroom equipped with Pix4Dmapper Educational Perpetual Licenses, enabling students to learn industry-standard drone mapping workflows. The facility supports end-to-end processing for traditional UAV surveying, 3D modeling, orthomosaic generation, and advanced geospatial analysis.",
                icon: Map,
                image: "/image/skill-foundation/drone-academy/infrastructure/pix4dmapper-photogrammetry-classroom.webp"
            },
            {
                id: "4",
                title: "DGCA-Approved Flying Grounds",
                description: "AKGEC Drone Academy maintains two DGCA-approved flying grounds, fully compliant with prescribed regulations for Small-Class Rotorcraft training. Each ground spans 80 × 80 meters and is equipped with a standard windsock, ensuring safe, controlled, and environment-aware flight operations during training and mission-based exercises.",
                icon: Flag,
                image: "/image/skill-foundation/drone-academy/infrastructure/dgca-approved-flying-grounds.webp"
            },
            {
                id: "5",
                title: "Advanced UAV Flight Training & Operations Hub",
                description: "AKGEC Drone Academy features a state-of-the-art, first-of-its-kind Drone Flying Station in the region, purpose-built to elevate training, safety, and operational efficiency. The facility includes a dedicated viewing area for supervised monitoring, along with drone hangars and integrated charging points.",
                icon: Cpu,
                image: "/image/skill-foundation/drone-academy/infrastructure/state-of-the-art-drone-flying-station.webp"
            },
            {
                id: "6",
                title: "Integrated Drone Servicing & Power Systems Center",
                description: "AKGEC Drone Academy operates a fully Integrated Drone Maintenance & Power Systems Facility dedicated to comprehensive UAV servicing, diagnostics, and operational readiness. The lab supports routine maintenance, component-level repairs, battery health monitoring, and safe charging operations—managed by two certified Drone Service Engineers.",
                icon: Tool,
                image: "/image/skill-foundation/drone-academy/infrastructure/integrated-drone-maintenance-power-systems-facility.webp"
            },
            {
                id: "7",
                title: "Smartboard-Enabled Drone Training Classroom",
                description: "AKGEC Drone Academy provides a dedicated training classroom equipped with an interactive Smartboard, enabling dynamic theory sessions, real-time demonstrations, and multimedia-based learning. The setup enhances concept clarity, supports simulator integration, and ensures an engaging, modern classroom experience for all trainees.",
                icon: BookOpen,
                image: "/image/skill-foundation/drone-academy/infrastructure/smartboard-enabled-drone-training-classroom.webp"
            }
        ]
    },
    events: {
        title: "Glimpse of the Events/Workshops",
        items: [
            {
                id: "1",
                title: "Introductory UAV Technology Workshop for AKGEC Faculty Members",
                description: "A one-day faculty workshop on 30th September 2023 was conducted to introduce AKGEC faculty members to drone technology, operations, and applications, providing hands-on experience and foundational insights into UAV systems.",
                image: "/image/skill-foundation/drone-academy/events/introductory-drone-workshop-faculty.webp"
            },
            {
                id: "2",
                title: "Three-Day Introductory Drone Workshop for AKGEC Students",
                description: "A three-day students workshop was held from 16th to 18th April 2024, introducing AKGEC students to drone technology, flight operations, and practical UAV applications. The program combined hands-on flying sessions, simulator training, and interactive learning to provide a comprehensive foundational experience.",
                image: "/image/skill-foundation/drone-academy/events/three-day-introductory-drone-workshop-students.webp"
            },
            {
                id: "3",
                title: "National Drone Symposium | Sponsored by AKTU, Lucknow & Drone Federation of India",
                description: "The AKGEC Drone Academy CoE organized a one-day National Drone Symposium on 6th September 2024, sponsored by AKTU, Lucknow and the Drone Federation of India. The event brought together industry professionals, research scholars, and students for expert panel discussions on emerging UAV technologies, followed by an engaging drone flying demonstration showcasing practical applications.",
                image: "/image/skill-foundation/drone-academy/events/national-drone-symposium.webp"
            },
            {
                id: "4",
                title: "Specialized Training Program for CDO, Ghaziabad",
                description: "AKGEC Drone Academy CoE conducted a specialized Remote Pilot Certification Training Program for Mr. Abhinav Gopal, IAS, Chief Development Officer (CDO), Ghaziabad, from 12th to 22nd November 2025. The customized program included focused sessions on drone regulations, mission planning, GIS-based applications, and supervised on-field flying exercises.",
                image: "/image/skill-foundation/drone-academy/events/specialized-training-program-cdo-ghaziabad.webp"
            },
            {
                id: "5",
                title: "Remote Pilot Certification Training for Rotary Club Participants",
                description: "AKGEC Drone Academy CoE, under its MoU with the Rotary Club, conducted a Remote Pilot Certification Training Program for the first batch of Agriculture Science students from Madhya Pradesh. The week-long program offered hands-on exposure to modern drone technology, blending theory with supervised flying sessions as per DGCA norms.",
                image: "/image/skill-foundation/drone-academy/events/remote-pilot-certification-rotary-club.webp"
            },
            {
                id: "6",
                title: "Faculty Development Program: DGCA-Authorized Remote Pilot Training",
                description: "AKGEC Drone Academy CoE conducted a DGCA-authorized Remote Pilot Certification Training Program for professors from Jamia Millia Islamia, New Delhi. Held from 10–17 February 2025, the program enhanced faculty expertise in UAV technology through DGCA-compliant ground classes and structured flight training.",
                image: "/image/skill-foundation/drone-academy/events/specialized-drone-technology-training-educators.webp"
            },
            {
                id: "7",
                title: "Corporate DGCA-Authorized Remote Pilot Certification Program",
                description: "AKGEC Drone Academy delivered a focused DGCA-authorized Remote Pilot Certification Program for professionals from Ghaziabad Precision Product Pvt. Ltd., Ghaziabad, held from 4th to 8th August 2025. The program emphasized real-world industrial applications, operational safety, and full compliance with DGCA guidelines.",
                image: "/image/skill-foundation/drone-academy/events/corporate-dgca-authorized-remote-pilot-certification.webp"
            },
            {
                id: "8",
                title: "Student Training Program for B.Tech. Students",
                description: "AKGEC Drone Academy CoE conducted two DGCA-approved Remote Pilot Certificate Training Programs for AKGEC B.Tech. students from various engineering disciplines—first from 7th to 16th December 2024 and the second from 6th to 15th November 2025. These programs offered end-to-end learning.",
                image: "/image/skill-foundation/drone-academy/events/student-training-program-btech-students.webp"
            }
        ]
    },
    awards: {
        title: "Awards & Recognition",
        items: [
            {
                text: "Team AKG Engineering College’s Drone Club secured the First Prize at “The Airborne Archers” competition held at RKGIT, Ghaziabad. The team demonstrated exceptional innovation and flying skills, earning a cash award of ₹25,000. This achievement highlights AKGEC’s growing strength in drone technology and student-led innovation.",
                image: "/image/skill-foundation/drone-academy/awards/akgec-drone-club.webp"
            },
            {
                text: "AKGEC Drone Academy signed a Memorandum of Understanding (MoU) with Rotary District 3011 on 6th September 2024 to train 200 candidates for the DGCA-approved Remote Pilot Certificate. This collaboration reinforces AKGEC’s commitment to developing a skilled drone workforce and contributing to India’s rapidly expanding UAV ecosystem and capacity-building initiatives.",
                image: "/image/skill-foundation/drone-academy/awards/mou-rotary-district-3011.webp"
            }
        ]
    },
    programs: {
        title: "Programs Offered",
        description: "The Centre offers the following regular training programs for enthusiastic drone professionals and engineering students of all disciplines. On successful completion of training, participants are assessed for their learning & skills and awarded with a certificate from AKGEC Drone Academy authorized by DGCA.",
        items: [
            { text: "DGCA Certified Remote Pilot Training Program (8 Days)", pdf: "/image/skill-foundation/drone-academy/programs-offered/dgca-remote-pilot-training-program-small.pdf" },
            { text: "DGCA certified Program for Agriculture Drone Spraying with RPC (10 Days)", pdf: "/image/skill-foundation/drone-academy/programs-offered/dgca-agriculture-drone-spraying-rpc.pdf" },
            { text: "Advanced Training Program for Agriculture Spraying for DGCA-Certified RPC Holders (2 Days)", pdf: "/image/skill-foundation/drone-academy/programs-offered/advanced-training-agriculture-spraying.pdf" },
            { text: "Professional Training Program for Drone Technician Training (5 Days)", pdf: "/image/skill-foundation/drone-academy/programs-offered/professional-training-drone-technician.pdf" },
            { text: "Intensive Flying Program for Instructors aspirants (4 Days)", pdf: "/image/skill-foundation/drone-academy/programs-offered/intensive-flying-program-instructor-aspirants.pdf" }
        ]
    },
    upcoming: {
        title: "Upcoming Programs",
        description: "The AKGEC Drone Academy Centre of Excellence is offering a Winter Training Program for Basic Drone Technology and DGCA Approved Remote Pilot Certificate Program for enthusiastic drone aspirants as well as B.Tech. and Diploma students, scheduled for December 2025 and January 2026. The program culminates in a DGCA Recognized Certification awarded by AKGEC Drone Academy.",
        contactEmail: "drone.academy@akgec.ac.in",
        contactPhone: "+91-7737742021",
        table: [
            {
                title: "Basic Drone Technology",
                duration: "5 Days",
                fee: "₹ 3,000",
                coordinator: "Mr. Abhishek Tiwari",
                contact: "drone.academy@akgec.ac.in / +91-7737742021",
                pdf: "/image/skill-foundation/drone-academy/upcoming-programs/wtp-basic-drone-technology.pdf"
            },
            {
                title: "DGCA approved Remote Pilot Certificate",
                duration: "8 Days",
                fee: "₹ 25,000",
                coordinator: "Mr. Abhishek Tiwari",
                contact: "drone.academy@akgec.ac.in / +91-7737742021",
                pdf: "/image/skill-foundation/drone-academy/upcoming-programs/wtp-dgca-remote-pilot-training-program.pdf"
            }
        ]
    },
    contact: {
        address: "AKGEC Campus: 27th KM Milestone, Delhi-Meerut Expressway, Adhyatmik Nagar, Ghaziabad, Uttar Pradesh-201015",
        email: "drone.academy@akgec.ac.in",
        phones: ["+91-7737742021", "8743879879"]
    }
};

const SkillFoundationDetails = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header
                title="Centre of Excellence"
                subHeading="Empowering the future with advanced drone technology and DGCA-certified training."
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
                                    <Plane size={40} />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-5xl font-novaBold text-gray-900 leading-tight">
                                        {droneData.title}
                                    </h1>
                                    <div className="h-1.5 w-24 bg-brand-yellow mt-4 rounded-full"></div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 font-novaReg leading-relaxed">
                                {droneData.description.map((para, i) => (
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
                            {droneData.infrastructure.title}
                        </motion.h2>
                        <p className="max-w-3xl mx-auto text-gray-600 font-novaReg text-lg mb-6">{droneData.infrastructure.description}</p>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 justify-center">
                        {droneData.infrastructure.items.map((item, index) => {
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{droneData.events.title}</h2>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {droneData.events.items.map((event, idx) => (
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{droneData.awards.title}</h2>
                        <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {droneData.awards.items.map((award, idx) => (
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
                            <h2 className="text-3xl md:text-4xl font-novaBold mb-6">{droneData.programs.title}</h2>
                            <p className="max-w-3xl mx-auto text-blue-100 font-novaReg text-lg">{droneData.programs.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                            {droneData.programs.items.map((program, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-2">
                                        <BookOpen className="text-brand-yellow" size={20} />
                                        <h4 className="font-novaBold text-lg">Program {idx + 1}</h4>
                                    </div>
                                    <p className="text-blue-50 font-novaReg mb-4 flex-grow">{program.text}</p>
                                    {program.pdf && (
                                        <a
                                            href={program.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-semibold text-brand-yellow hover:text-white transition-colors mt-auto group/link"
                                        >
                                            View Brochure <ArrowRight size={16} className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Upcoming Programs */}
                <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{droneData.upcoming.title}</h2>
                        <p className="text-gray-600 font-novaReg text-lg mb-8">{droneData.upcoming.description}</p>

                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Program Title</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Duration</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Fee (INR)</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Coordinator</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Contact</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Brochure</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {droneData.upcoming.table.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-gray-800 font-medium">{row.title}</td>
                                            <td className="py-4 px-6 text-gray-600">{row.duration}</td>
                                            <td className="py-4 px-6 text-gray-600">{row.fee}</td>
                                            <td className="py-4 px-6 text-gray-600">{row.coordinator}</td>
                                            <td className="py-4 px-6 text-gray-600 text-sm">{row.contact}</td>
                                            <td className="py-4 px-6">
                                                {row.pdf ? (
                                                    <a
                                                        href={row.pdf}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold hover:bg-brand-blue hover:text-white transition-colors"
                                                    >
                                                        Download <ArrowRight size={12} className="ml-1" />
                                                    </a>
                                                ) : (
                                                    <span className="text-gray-400 text-xs italic">N/A</span>
                                                )}
                                            </td>
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
                                    <p className="text-gray-300 text-lg leading-relaxed">{droneData.contact.address}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-5">
                                        <Mail className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <a href={`mailto:${droneData.contact.email}`} className="text-gray-300 text-lg hover:text-white transition-colors">{droneData.contact.email}</a>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <Phone className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <div className="text-gray-300 text-lg leading-relaxed">
                                            {droneData.contact.phones.join(" / ")}
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
