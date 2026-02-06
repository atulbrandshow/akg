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
    Cpu,
    Server,
    Shield,
    Timer,
    ToggleLeft,
    Gauge,
    Monitor
} from "lucide-react";

// Data Structure
const siemensData = {
    title: "SIEMENS Centre of Excellence in Automation",
    description: [
        "The AKGEC–Siemens Industrial Automation Centre of Excellence, established in 2016, is equipped with modern Siemens automation hardware, including S7-1200, S7-1500, and LOGO! PLCs, along with AC-DC drives, HMIs, SCADA, Switchgear and Process Instrumentation.",
        "The centre provides hands-on training, industrial projects, and skill development for students and professionals. Through dedicated labs such as the PLC-DCS-SCADA Lab, Switchgear and Process Instrumentation Lab, learners gain real-time experience in programming, troubleshooting, and implementing automation solutions. This setup empowers trainees with industry-aligned competencies essential for modern manufacturing and digital industrial technologies."
    ],
    infrastructure: {
        title: "Infrastructure at Siemens Automation CoE",
        items: [
            {
                id: "1",
                title: "Programmable Logic Controller (PLC)",
                description: "AKGEC’s SIEMENS PLC, HMI, SCADA, and DCS Laboratory is designed to offer immersive, application-oriented training in advanced automation technologies. The lab houses industry-grade SIEMENS hardware and software, allowing learners to work directly with real-time control systems, build automation logic, and visualize data on HMI and SCADA platforms. This dedicated facility empowers students with practical expertise, preparing them to meet the evolving needs of the automation and industrial sectors.",
                icon: Cpu,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "2",
                title: "Distributed Control System (DCS)",
                description: "A Siemens Distributed Control System (DCS)—exemplified by the SIMATIC PCS 7 platform—is a high-performance automation solution designed for complex, large-scale industrial processes. The DCS system cabinet typically includes a rack-mounted industrial PC, S7-400 PLC, ET-200SP and ET-200M interface modules, a Scalance-managed 24V DC busbar, SMPS, relays, MCBs, a 750 VA transformer, and terminal blocks—engineered for efficient, continuous, and stable operation.",
                icon: Server,
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "3",
                title: "SINAMICS G120 AC Drives",
                description: "Siemens SINAMICS drives deliver precise, efficient motor speed and torque control for diverse industrial applications. The SINAMICS G120 is a versatile, modular AC drive used in pumps, fans, HVAC, compressors, conveyors, and general machinery. It offers energy-efficient operation, smooth control, built-in safety (STO), and easy integration. With its modular design and wide power range (0.55–250 kW), it suits both light and heavy-duty applications.",
                icon: Zap,
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "4",
                title: "SINAMICS 6AR80 DC Drives",
                description: "The Siemens SINAMICS 6RA80 is a high-performance DC drive designed for precise, stable speed and torque control across wide load ranges. Its 4-quadrant operation ensures efficient motoring and braking in both directions with low-ripple torque, even at low speeds. The drive integrates seamlessly with automation systems. Ideal applications include rolling mills, wire drawing, extruders, presses, cranes, hoists, and elevators.",
                icon: Activity,
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            },
            {
                id: "5",
                title: "SimoCode",
                description: "SIMOCODE offers advanced motor protection and monitoring with features like overload detection, diagnostics, remote access, and configurable settings, enhancing efficiency and safety across industrial motor applications. It supports multiple communication protocols, enabling seamless integration with PLCs or control systems. The system also logs operational data, offering predictive-maintenance insights and improving plant reliability with much less wiring than traditional relay-based motor starters.",
                icon: Shield,
                image: "/image/SkillFoundationImage/skill-foundation5.png"
            },
            {
                id: "6",
                title: "Type 2 Coordination Kit & Timer and Relay Kit",
                description: "The Type 2 Coordination Kit demonstrates selective fault isolation, device coordination, and safe operation of low-voltage switchgear. The Timer & Relay Kit enables practical learning of sequential control, time-delay operations, interlocking, and relay-based automation logic.",
                icon: Timer,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "7",
                title: "Type 2 Star-Delta & Soft Starter Kit",
                description: "The Star-Delta Starter Kit demonstrates reduced-voltage starting of three-phase induction motors, highlighting current reduction and smooth acceleration. The Soft Starter Kit enables gradual motor ramp-up and ramp-down, protecting mechanical and electrical components while improving energy efficiency.",
                icon: Zap,
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "8",
                title: "Circuit Breaker",
                description: "The Siemens Switchgear & Circuit Breaker Lab is equipped with practical training kits. The WT air circuit breakers demonstrate compact low-voltage protection for distribution panels, while the WL air circuit breakers teach high-capacity, long-life switching for industrial loads. The VT/3VA MCCB kits provide hands-on experience with molded-case breakers for overload, short-circuit protection, and selective coordination. Students gain practical skills in installation, operation, testing, and troubleshooting, learning safe switching practices, breaker selection, and real-world industrial power system protection.",
                icon: ToggleLeft,
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "9",
                title: "Process Instrumentation Lab",
                description: "The Siemens Process Instrumentation Laboratory is equipped with a wide range of instruments, including pressure, temperature, flow, and level transmitters, control valves, signal conditioners, recorders, and calibration devices. This Lab supports experiments in process control loops, PID tuning, and instrumentation troubleshooting, providing practical exposure to real-world industrial process monitoring and control systems.",
                icon: Gauge,
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            }
        ]
    },
    events: {
        title: "Glimpse of the Events/Workshops",
        items: [
            {
                id: "1",
                title: "Workshop on ‘Basics of PLC and Drives’ for M.Tech Students",
                description: "AKGEC-SIEMENS CoE successfully organized a four-day workshop on ‘Basics of PLC and Drives’ for M.Tech students of the EN and ECE branches. The program provided students with in-depth understanding, hands-on training, and practical exposure to modern automation systems.",
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "2",
                title: "Workshop on ‘LOGO PLC and Automation Technologies’",
                description: "AKGEC-SIEMENS CoE successfully conducted a one-day workshop on ‘LOGO PLC and Automation Technologies’ for 2nd-year Electrical Engineering students, equipping them with essential skills in industrial automation and control systems.",
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "3",
                title: "Workshop for Subharti University Students",
                description: "Students from Subharti University, Meerut had the opportunity to participate in a one-day workshop organized by AKGEC-SIEMENS. The session focused on practical exposure to automation technologies and PLC systems, allowing students to engage directly with real-world applications. Through demonstrations and interactive learning, participants enhanced their technical skills and gained valuable insights into the latest trends in engineering.",
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "4",
                title: "Workshop for Mechatronics Students of ITM SLS, Baroda",
                description: "AKGEC successfully conducted a workshop program for the Mechatronics students of ITM SLS, Baroda. The workshop offered an in-depth understanding of advanced mechatronics systems, combining theoretical knowledge with hands-on sessions. Students gained practical experience with industry-relevant tools and technologies, bridging the gap between classroom learning and real-world applications.",
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            },
            {
                id: "5",
                title: "Orientation and Training for SoSE Delhi Students",
                description: "AKGEC conducted an orientation and training program for 34 Grade 11 students from SoSE Lajpat Nagar and SoSE Narela, Delhi. The program provided students with an introduction to emerging engineering concepts and practical exposure to foundational technologies, fostering early interest in STEM and preparing them for future academic pursuits.",
                image: "/image/SkillFoundationImage/skill-foundation5.png"
            },
            {
                id: "6",
                title: "ASDC Training of Trainers (ToT) Program",
                description: "With support from the Automotive Skills Development Council (ASDC), AKGEC conducted a comprehensive Training of Trainers (ToT) program for SRPs specializing in Mechatronics and Electrical domains. The initiative aimed to strengthen industry-relevant skills, enabling trainers to effectively mentor students and professionals in cutting-edge engineering and automation technologies.",
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "7",
                title: "Internship Program for Grade XI Students of SoSE (DBSE)",
                description: "AKGEC successfully conducted an 80-hour internship program for Grade XI students of SoSE (DBSE). The program offered in-depth exposure to foundational engineering concepts and practical applications, helping students build essential technical skills and a strong understanding of STEM principles.",
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "8",
                title: "PMKVY 4.0 Training for Industrial Automation Specialists",
                description: "AKGEC, under PMKVY 4.0, organized a comprehensive training program for Industrial Automation Specialists. The program focused on equipping professionals with the latest industry-relevant skills, practical exposure to automation systems, and technical knowledge necessary to succeed in modern industrial environments.",
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "9",
                title: "Induction Training Program for Hindalco Industries Ltd.",
                description: "AKGEC organized an induction training program for Hindalco Industries Ltd., Pune, providing participants with intensive hands-on experience in Robotics, Automation, Welding, Machining, and Quality Inspection. The training helped trainees build strong technical foundations and gain exposure to real-world industrial practices.",
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            },
            {
                id: "10",
                title: "PLC Training Program for SFC Solution, Sahibabad",
                description: "AKGEC delivered an intensive PLC training program for SFC Solution, Sahibabad, focusing on developing strong practical skills in PLC and Drive systems. The training covered essential automation modules, including PLC architecture, ladder logic programming, drive configuration, and real-time system diagnostics. With a strong emphasis on practical exposure and industry-oriented learning, participants gained valuable experience in handling automation equipment and implementing effective control strategies, preparing them to excel in today’s advanced manufacturing environments.",
                image: "/image/SkillFoundationImage/skill-foundation5.png"
            },
            {
                id: "11",
                title: "DGR Candidate Training Program on Industrial Automation",
                description: "AKGEC organized a specialized DGR Candidate Training Program on Industrial Automation, aimed at empowering defence personnel with advanced technical skills for post-service careers. The program offered immersive training in PLC systems, industrial drives, control circuits, and automation tools. Practical sessions, real-time simulations, and expert-led workshops helped participants build strong competencies in modern manufacturing technologies.",
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            }
        ]
    },
    awards: {
        title: "Awards & Recognition",
        items: [] // Specified as NA
    },
    programs: {
        title: "Programs Offered",
        description: "The Centre offers the following training programs for industry professionals and engineering students of all disciplines. On successful completion of training, participants are assessed for their learning & skills and awarded with a globally recognized joint certification from AKGEC & SIEMENS.",
        items: [
            "Industrial Automation - Foundation (40 hrs.)",
            "Industrial Automation - Intermediate/ Advance (80 hrs.)",
            "Industrial Drives - Foundation (40 hrs.)",
            "Industrial Drives - Advance (80 hrs.)",
            "Training Program on SIMOCODE - Foundation level (40 hrs.)",
            "Training Program on Low Voltage Switchgear - Foundation level (40 hrs.)",
            "Training Program on Process Instrumentation - Foundation level (40 hrs.)"
        ]
    },
    upcoming: {
        title: "Upcoming Programs",
        description: "The SIEMENS- Centre of Excellence is offering an 80 Hrs Winter Training Program in Industrial Automation—Basic and Advanced Levels for B.Tech and Diploma students, scheduled for December 2025 and January 2026.",
        contactEmail: "siemens@akgec.ac.in",
        contactPhone: "+91-9718663712",
        table: [
            {
                title: "Industrial Automation",
                duration: "80 Hours",
                fee: "₹ 7,000",
                coordinator: "Ms. Preeti Singh",
                contact: "siemens@akgec.ac.in / +91-9718663712"
            }
        ]
    },
    contact: {
        address: "AKGEC Campus: 27th KM Milestone, Delhi-Meerut Expressway, Adhyatmik Nagar, Ghaziabad, Uttar Pradesh-201015",
        email: "siemens@akgec.ac.in",
        phones: ["+91-9015839522", "9718663712", "8743879879"]
    }
};

const SkillFoundationDetails = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header
                title="Centre of Excellence"
                subHeading="Empowering students and professionals with advanced Siemens automation technologies."
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
                                    <Cpu size={40} />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-5xl font-novaBold text-gray-900 leading-tight">
                                        {siemensData.title}
                                    </h1>
                                    <div className="h-1.5 w-24 bg-brand-yellow mt-4 rounded-full"></div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 font-novaReg leading-relaxed">
                                {siemensData.description.map((para, i) => (
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
                            {siemensData.infrastructure.title}
                        </motion.h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-8 justify-center">
                        {siemensData.infrastructure.items.map((item, index) => {
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
                {siemensData.events.items.length > 0 ? (
                    <section className="px-6 lg:px-8 max-w-[1450px] mx-auto mb-20">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{siemensData.events.title}</h2>
                            <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                            {siemensData.events.items.map((event, idx) => (
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
                ) : null}

                {/* Awards Section */}
                {siemensData.awards.items.length > 0 ? (
                    <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-20">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{siemensData.awards.title}</h2>
                            <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                            {siemensData.awards.items.map((award, idx) => (
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
                ) : null}

                {/* Programs Offered */}
                <section className="bg-brand-blue text-white py-20 mb-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-novaBold mb-6">{siemensData.programs.title}</h2>
                            <p className="max-w-3xl mx-auto text-blue-100 font-novaReg text-lg">{siemensData.programs.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                            {siemensData.programs.items.map((program, idx) => (
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

                {/* Upcoming Programs - Conditionally Rendered */}
                {siemensData.upcoming.table && siemensData.upcoming.table.length > 0 ? (
                    <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{siemensData.upcoming.title}</h2>
                            {siemensData.upcoming.description && (
                                <p className="text-gray-600 font-novaReg text-lg mb-8">{siemensData.upcoming.description}</p>
                            )}

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
                                        {siemensData.upcoming.table.map((row, idx) => (
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
                ) : null}

                {/* Contact Section */}
                <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] z-0"></div>
                        <div className="relative z-10">
                            <h2 className="text-5xl font-novaBold mb-12">Contact Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
                                <div className="flex items-start gap-5">
                                    <MapPin className="text-brand-yellow shrink-0 mt-1" size={24} />
                                    <p className="text-gray-300 text-lg leading-relaxed">{siemensData.contact.address}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-5">
                                        <Mail className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <a href={`mailto:${siemensData.contact.email}`} className="text-gray-300 text-lg hover:text-white transition-colors">{siemensData.contact.email}</a>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <Phone className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <div className="text-gray-300 text-lg leading-relaxed">
                                            {siemensData.contact.phones.join(" / ")}
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
