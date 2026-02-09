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
const amcData = {
    title: "Advanced Manufacturing Centre (AMC)",
    description: [
        "Advanced Manufacturing Centre (AMC) has been established in collaboration with industry partners such as SIEMENS and Carl Zeiss. The centre features world-class, state-of-the-art infrastructure to train engineers, diploma/ITI holders, and students in conventional & computer-aided manufacturing, robot-assisted manufacturing, additive manufacturing, measurement & metrology, and high-end reverse engineering processes.",
        "AMC also undertakes production assignments of complex parts from local industry and supports proof-of-concept work, prototyping of new parts and assemblies using advanced manufacturing technologies."
    ],
    infrastructure: {
        title: "Infrastructure & Facilities",
        items: [
            {
                id: "1",
                title: "CNC Vertical Machining Centre (4-Axis – ACE MCV-400)",
                description: "This high-precision 4-axis machining centre is designed for complex milling, contouring, drilling, and finishing operations. Its rigid structure and advanced CNC control ensure excellent dimensional accuracy and repeatability. Ideal for machining intricate industrial parts, it supports multi-surface machining in a single setup, enhancing productivity and quality.",
                icon: Settings,
                image: "/image/skill-foundation/amc/infrastructure/cnc-vertical-machining-centre-4-axis-ace-mcv-400.webp"
            },
            {
                id: "2",
                title: "CNC Turning Centre (Slant Bed – LT-16)",
                description: "A robust slant-bed CNC lathe capable of high-accuracy turning, threading, grooving, and facing operations. It features an advanced tool turret and supports integration with robotic loading/unloading systems for automation. The rigid bed design minimizes vibrations, ensuring superior surface finish and consistent machining performance.",
                icon: Activity,
                image: "/image/skill-foundation/amc/infrastructure/cnc-turning-centre-slant-bed-lt-16.webp"
            },
            {
                id: "3",
                title: "CNC Lathe – TUTOR Model",
                description: "This compact CNC lathe is ideal for educational and industrial training applications, providing hands-on experience in precision turning. Despite its small size, it delivers high accuracy, stable performance, and ease of programming for beginners. It is widely used for producing shafts, bushings, pins, and other cylindrical components.",
                icon: Radio,
                image: "/image/skill-foundation/amc/infrastructure/cnc-lathe-tutor-model.webp"
            },
            {
                id: "4",
                title: "CNC Drill–Tap SparkE Machining Centre",
                description: "A high-speed machining system designed specifically for rapid drilling, tapping, and thread-forming operations. It ensures excellent repeatability, making it suitable for mass production of threaded components. The machine’s fast tool response and spindle speed significantly reduce cycle time while maintaining accuracy.",
                icon: Zap,
                image: "/image/skill-foundation/amc/infrastructure/cnc-drill-tap-sparke-machining-centre.webp"
            },
            {
                id: "5",
                title: "Cylindrical Grinding Machine",
                description: "A precision hydraulic grinding machine used for external, internal, and face grinding of small to medium-sized components. It offers fine control over feed and speed, achieving micron-level surface finishes. Ideal for shafts, rollers, pins, and other precision parts requiring high roundness and dimensional accuracy.",
                icon: Crosshair,
                image: "/image/skill-foundation/amc/infrastructure/cylindrical-grinding-machine.webp"
            },
            {
                id: "6",
                title: "Robotic Milling System – 7 Axis",
                description: "This advanced 7-axis robotic machining system enables complex-shape milling, trimming, polishing, and finishing tasks not possible on conventional machines. Its extended reach and multi-axis flexibility allow processing of large or irregular components with high accuracy. It supports applications across automotive, aerospace, tooling, and prototyping domains.",
                icon: Bot,
                image: "/image/skill-foundation/amc/infrastructure/robotic-milling-system-7-axis.webp"
            },
            {
                id: "7",
                title: "CNC Electric Tapping Machine",
                description: "A high-precision CNC-controlled tapping system designed specifically for fast, accurate internal threading operations. It allows programmable depth control, consistent thread quality, and smooth operation even for small-diameter taps. The machine enhances productivity in mass-threading applications and ensures repeatability with minimal operator effort. Its compact, rigid structure makes it ideal for both training and industrial production environments.",
                icon: Settings,
                image: "/image/skill-foundation/amc/infrastructure/cnc-electric-tapping-machine.webp"
            }
        ]
    },
    events: {
        title: "Glimpse of the Events/Workshops",
        items: [
            { id: "1", title: "Induction Training for Hindalco Industries Ltd.", description: "AKGEC conducted a comprehensive induction training program for Hindalco Industries Ltd., Pune, focusing on strengthening participants’ practical skills in CNC programming. The program covered hands-on practice on industrial CNC machines, tool selection, and part programming fundamentals. Participants were trained to interpret drawings, develop accurate programs, and execute machining operations confidently. This initiative helped enhance their shop-floor readiness and overall technical competence.", image: "/image/skill-foundation/amc/workshop-events/induction-training-for-hindalco-industries-ltd.webp" }
        ]
    },
    awards: {
        title: "Awards & Recognition",
        items: []
    },
    programs: {
        title: "Training Programs Offered",
        description: "The Centre offers a variety of training programs (short-term and long-term) — tailored to meet industry requirements and international standards:",
        items: [
            "Industrial Measurement (Basic / Advanced)",
            "Computer Integrated Manufacturing: Milling | Turning | CAD & CAM",
            "Flexible Manufacturing System (CNC + CAD + Machining)",
            "Manufacturing Technologies (Basic / Advanced)",
            "CNC Machining (Milling, Turning, Drill‑Tap), CAD/CAM, Reverse Engineering, Metrology",
            "Finishing School Program: Production Engineering (CAD | CAM | Measurement & Metrology)"
        ]
    },
    upcoming: {
        title: "Upcoming Programs",
        description: "The Advance Manufacturing Centre is offering an 80-hour Winter Training Program in Flexible Manufacturing Technologies for B.Tech and Diploma students, scheduled for January 2026. The program culminates in a globally recognized joint certification awarded by SIEMENS and AKGEC.",
        contactEmail: "amc@akgec.ac.in",
        contactPhone: "+91-7696176376",
        table: [
            {
                title: "Flexible Manufacturing Technologies",
                duration: "80 Hours",
                fee: "₹ 6,000",
                coordinator: "Dr. Vishwas Grover",
                contact: "amc@akgec.ac.in / +91-7696176376"
            }
        ]
    },
    contact: {
        address: "AKGEC Skills Foundation — AKGEC Campus, 27th Km Stone, Delhi–Hapur Bypass Road, P.O. Adhyatmik Nagar, Ghaziabad – 201009",
        email: "amc@akgec.ac.in",
        phones: ["+91-7696176376"]
    }
};

const SkillFoundationDetails = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header
                title="Centre of Excellence"
                subHeading="State-of-the-art infrastructure for advanced manufacturing training and research."
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
                                    <Settings size={40} />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-5xl font-novaBold text-gray-900 leading-tight">
                                        {amcData.title}
                                    </h1>
                                    <div className="h-1.5 w-24 bg-brand-yellow mt-4 rounded-full"></div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 font-novaReg leading-relaxed">
                                {amcData.description.map((para, i) => (
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
                            {amcData.infrastructure.title}
                        </motion.h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                        {amcData.infrastructure.items.map((item, index) => {
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
                {amcData.events.items.length > 0 ? (
                    <section className="px-6 lg:px-8 max-w-[1450px] mx-auto mb-20">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{amcData.events.title}</h2>
                            <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {amcData.events.items.map((event, idx) => (
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
                {amcData.awards.items.length > 0 ? (
                    <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-20">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{amcData.awards.title}</h2>
                            <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {amcData.awards.items.map((award, idx) => (
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
                            <h2 className="text-3xl md:text-4xl font-novaBold mb-6">{amcData.programs.title}</h2>
                            <p className="max-w-3xl mx-auto text-blue-100 font-novaReg text-lg">{amcData.programs.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {amcData.programs.items.map((program, idx) => (
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{amcData.upcoming.title}</h2>
                        <p className="text-gray-600 font-novaReg text-lg mb-8">{amcData.upcoming.description}</p>

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
                                    {amcData.upcoming.table.map((row, idx) => (
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
                                    <p className="text-gray-300 text-lg leading-relaxed">{amcData.contact.address}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-5">
                                        <Mail className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <a href={`mailto:${amcData.contact.email}`} className="text-gray-300 text-lg hover:text-white transition-colors">{amcData.contact.email}</a>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <Phone className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <div className="text-gray-300 text-lg leading-relaxed">
                                            {amcData.contact.phones.join(" / ")}
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
