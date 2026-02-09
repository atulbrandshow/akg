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
const plmData = {
    title: "SIEMENS Product Lifecycle Management (PLM) COE",
    description: [
        "To develop engineering professionals equipped with next-generation technologies, AKGEC jointly with SIEMENS Industry Software, has set up the PLM Centre of Excellence at AKGEC campus. This COE provides education to the next generation of designers/engineers on state of art software such as SOLIDEDGE, NX;CAD/CAM/CAE: for digital product engineering, Team center for digital life cycle management and Technomatix for digital manufacturing. This COE addresses diverse industry segments like automotive, industrial machinery, Industrial automation, aerospace and shipbuilding etc.",
        "The Centre offers specialized training programs tailored to meet industry expectations and to promote research-driven learning across all engineering disciplines."
    ],
    infrastructure: {
        title: "Infrastructure at SIEMENS PLMC",
        items: [
            {
                id: "1",
                title: "SOLID EDGE",
                description: "Solid Edge is a portfolio of affordable, easy-to-use software tools that address all aspects of the product development process, 3D design, simulation, manufacturing, design management and more, thanks to a growing ecosystem of apps. Solid Edge combines the speed and simplicity of direct modeling with the flexibility and control of parametric design, made possible with synchronous technology. At the SIEMENS PLM COE, Solid Edge is used to create detailed engineering models, analyze part behavior, and manage design workflows through an intuitive and efficient interface. The computational tool uses synchronous technology to accelerate design, make revision faster, and enable better reuse. With 3d Cad, Simulation, and Data Management, Solid Edge helps companies design better.",
                icon: Settings,
                image: "/image/skill-foundation/plm/infrastructure/siemens-solid-edge.webp"
            },
            {
                id: "2",
                title: "NX-CAD/CAM/CAE",
                description: "Siemens NX is an industry-leading integrated CAD/CAM/CAE platform used for advanced design, simulation, and manufacturing. The award-winning NX software helps designers and manufacturers deliver better products faster using powerful, integrated CAD and CAM solutions that realize the full value of the digital twin. At the SIEMENS PLM COE, NX enables students to model complex components, validate engineering behavior, and generate toolpaths for real-time manufacturing scenarios. Learners design 3D parts, perform simulations to assess stresses and performance, and create CNC-ready programs within a unified digital environment. This hands-on workflow helps students understand the complete product development cycle, from conceptual design to virtual testing and final machining, leveraging the full value of the digital twin for accurate and efficient engineering outcomes.",
                icon: Activity,
                image: "/image/skill-foundation/plm/infrastructure/siemens-nx-cad-cam.webp"
            },
            {
                id: "3",
                title: "FEMAP",
                description: "FEMAP is an advanced engineering simulation environment used to create high-fidelity finite element analysis (FEA) models for complex components and systems. At the SIEMENS PLM COE, FEMAP is utilized to build precise geometric meshes, apply realistic loading conditions, and evaluate structural responses under various operational scenarios. Users generate finite element models, ranging from beam and shell representations to tetrahedral or hexahedral meshes, and analyze them using industry-standard FE solvers. This setup enables learners to practice model preparation, boundary condition definition, result interpretation, and design validation, helping them develop strong competencies in simulation-driven engineering and virtual product evaluation.",
                icon: Zap,
                image: "/image/skill-foundation/plm/infrastructure/siemens-femap.webp"
            },
            {
                id: "4",
                title: "TEAMCENTRE",
                description: "Teamcenter is a comprehensive PLM platform that integrates people, processes, and product data across the entire engineering and manufacturing workflow. At the SIEMENS PLM COE, Teamcenter is used to manage design information, coordinate multi-disciplinary engineering tasks, and maintain complete digital continuity through the product lifecycle. Students work with digital twins of products and processes, enabling them to visualize assemblies, track revisions, and resolve design issues before physical prototypes are built. This environment develops strong capabilities in data management, collaboration, configuration control, and lifecycle governance, preparing learners to operate efficiently within modern digital manufacturing ecosystems.",
                icon: Package,
                image: "/image/skill-foundation/plm/infrastructure/siemens-teamcenter.webp"
            },
            {
                id: "5",
                title: "TECNOMATIX ROBCAD",
                description: "Tecnomatix Robcad software enables the design, simulation, optimization, analysis and off-line programming of multi-device robotic and automated manufacturing processes in the context of product and production resources. At the SIEMENS PLM COE, ROBCAD enables users to model multi-robot workcells, define robot motions, and evaluate cycle times in a virtual environment before implementation on the shop floor. Learners simulate complex tasks such as material handling, welding, painting, and assembly while assessing reachability, collision risks, and process efficiency. This hands-on virtual workflow helps students understand robotic kinematics, path planning, cell layout optimization, and offline programming, providing essential skills for modern automated manufacturing systems.",
                icon: Bot,
                image: "/image/skill-foundation/plm/infrastructure/siemens-robcad.webp"
            }
        ]
    },
    events: {
        title: "Glimpse of the Events/Workshops",
        items: [
            {
                id: "1",
                title: "MOU with SIEMENS",
                description: "North India’s first Center of Competence in Product Lifecycle Management (PLM) was established at AKGEC through a strategic MoU with SIEMENS India Group. This collaborative initiative aims to bridge the gap between academia and industry by providing state-of-the-art training, research support, and technical exposure in digital design, simulation, and manufacturing. The PLM Centre is dedicated to supporting the needs of manufacturing industries, young engineers, and students by equipping them with industry-relevant skills, advanced tools, and hands-on experience in Siemens PLM technologies.",
                image: "/image/skill-foundation/plm/events-and-workshops/mou-with-siemens.webp"
            },
            {
                id: "2",
                title: "India Skills Track–2 Competition",
                description: "The SIEMENS PLM COE hosted the India Skills Track–2 Competition in the M-CAD (Mechanical Computer-Aided Design) category on March 5th, 2024. The event brought together skilled participants from various institutions to showcase their proficiency in advanced CAD modeling, design methodology, and problem-solving using industry-standard tools. The competition was conducted within the state-of-the-art PLM CoE infrastructure, enabling participants to work on complex 3D modeling challenges under real-world constraints. The event provided students with an opportunity to demonstrate precision, creativity, and technical competence in mechanical design, while also gaining exposure to national-level skill benchmarks. The program helped cultivate competitive spirit, promoted industry-relevant CAD skills, and strengthened AKGEC’s role in fostering excellence in skill development and digital engineering.",
                image: "/image/skill-foundation/plm/events-and-workshops/india-skills-track-2-competition.webp"
            }
        ]
    },
    awards: {
        title: "Awards & Recognition",
        items: []
    },
    programs: {
        title: "Programs Offered",
        description: "The Centre offers specialized training programs tailored to meet industry expectations and to promote research-driven learning across all engineering disciplines.",
        items: [
            { text: "Short Term Training Program on Product Design & Development for B.Tech — (40 Hrs)" },
            { text: "Industrial Training Program on Digital Manufacturing (ITP) — (160 Hrs)" },
            { text: "Winter Training Program on SIEMENS NX-CAD/CAM/CAE (WTP) — (80 Hrs)", pdf: "/image/skill-foundation/plm/programs-offered/wtp-siemens-plm-nx.pdf" }
        ]
    },
    upcoming: {
        title: "Upcoming Programs",
        description: "The SIEMENS PLM COE is offering an 80-hour Winter Training Program on SIEMENS NX–CAD/CAM/CAE, scheduled for December 2025 and January 2026. This intensive program is designed to equip B.Tech students with industry-grade competencies in advanced 3D modeling, engineering simulation, and computer-aided manufacturing using Siemens NX.",
        contactEmail: "plm@akgec.ac.in",
        contactPhone: "+91-9540376072",
        table: [
            {
                title: "SIEMENS NX–CAD/CAM/CAE",
                duration: "80 Hours",
                fee: "₹ 7000",
                coordinator: "Dr. Anuj Kumar",
                contact: "plm@akgec.ac.in / +91-9540376072",
                pdf: "/image/skill-foundation/plm/upcoming-programs/wtp-siemens-plm-nx.pdf"
            }
        ]
    },
    contact: {
        address: "AKGEC Campus: 27th KM Milestone, Delhi-Meerut Expressway, Adhyatmik Nagar, Ghaziabad, Uttar Pradesh-201015",
        email: "plm@akgec.ac.in",
        phones: ["+91-9540376072"]
    }
};

const SkillFoundationDetails = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header
                title="Centre of Excellence"
                subHeading="Empowering engineers with next-generation digital manufacturing and product lifecycle management technologies."
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
                                    <Activity size={40} />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-5xl font-novaBold text-gray-900 leading-tight">
                                        {plmData.title}
                                    </h1>
                                    <div className="h-1.5 w-24 bg-brand-yellow mt-4 rounded-full"></div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 font-novaReg leading-relaxed">
                                {plmData.description.map((para, i) => (
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
                            {plmData.infrastructure.title}
                        </motion.h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                        {plmData.infrastructure.items.map((item, index) => {
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
                {plmData.events.items.length > 0 ? (
                    <section className="px-6 lg:px-8 max-w-[1450px] mx-auto mb-20">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{plmData.events.title}</h2>
                            <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {plmData.events.items.map((event, idx) => (
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
                {plmData.awards.items.length > 0 ? (
                    <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-20">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{plmData.awards.title}</h2>
                            <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {plmData.awards.items.map((award, idx) => (
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
                            <h2 className="text-3xl md:text-4xl font-novaBold mb-6">{plmData.programs.title}</h2>
                            <p className="max-w-3xl mx-auto text-blue-100 font-novaReg text-lg">{plmData.programs.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {plmData.programs.items.map((program, idx) => (
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{plmData.upcoming.title}</h2>
                        <p className="text-gray-600 font-novaReg text-lg mb-8">{plmData.upcoming.description}</p>

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
                                    {plmData.upcoming.table.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-gray-800 font-medium">{row.title}</td>
                                            <td className="py-4 px-6 text-gray-600">{row.duration}</td>
                                            <td className="py-4 px-6 text-gray-600">{row.fee}</td>
                                            <td className="py-4 px-6 text-gray-600">{row.coordinator}</td>
                                            <td className="py-4 px-6 text-gray-600 text-sm">{row.contact}</td>
                                            <td className="py-4 px-6">
                                                {row.pdf && (
                                                    <a
                                                        href={row.pdf}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white text-xs font-semibold transition-all duration-300"
                                                    >
                                                        Download <ArrowRight size={12} className="ml-1" />
                                                    </a>
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
                                    <p className="text-gray-300 text-lg leading-relaxed">{plmData.contact.address}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-5">
                                        <Mail className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <a href={`mailto:${plmData.contact.email}`} className="text-gray-300 text-lg hover:text-white transition-colors">{plmData.contact.email}</a>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <Phone className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <div className="text-gray-300 text-lg leading-relaxed">
                                            {plmData.contact.phones.join(" / ")}
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
