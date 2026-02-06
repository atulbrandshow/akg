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
const boschData = {
    title: "BOSCH-Rexroth Industrial Automation Centre of Excellence",
    description: [
        "BOSCH-Rexroth Industrial Automation Centre of Excellence is one of North India’s first and most comprehensive centres dedicated to modern industrial automation technologies. Established in collaboration with BOSCH Rexroth, Germany, the centre serves as a premier hub for developing highly skilled manpower in the domains of hydraulics, pneumatics, PLC, sensorics, mechatronics, drives, and Industry 4.0.",
        "This Centre of Competence aims to upskill engineering students and industry professionals by providing hands-on training, industry-oriented certification, and practical exposure through state-of-the-art labs, live industrial projects, and consultancy support."
    ],
    infrastructure: {
        title: "Infrastructure at BOSCH-Rexroth Industrial Automation CoE",
        items: [
            {
                id: "1",
                title: "Pneumatic Training System",
                description: "BOSCH Rexroth modular, state-of-the-art Pneumatic Training System is developed using standard components from the Bosch Rexroth industrial product range. This system enables comprehensive learning of fundamental Pneumatic and Electro-pneumatic principles through a structured, hands-on approach. Equipped with both hardware and software modules, it allows beginners as well as experienced users to perform practical exercises, gradually building specialized technical expertise in pneumatic control and automation.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "2",
                title: "Hydraulic Training System",
                description: "BOSCH Rexroth Hydraulic Training System is a modular, advanced learning platform designed using high-performance industrial components from the Bosch Rexroth product line. This system enables comprehensive understanding of Basic Hydraulics, Electro-hydraulics, Proportional Hydraulics, and Mobile Hydraulics through practical, hands-on experimentation. With its integrated hardware, control modules, and simulation support, the system allows learners at all levels to progressively develop deep technical competence in hydraulic circuits, system behavior, troubleshooting, and real-world industrial applications.",
                icon: Zap,
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "3",
                title: "Sensorics Training System",
                description: "BOSCH Rexroth Sensorics Training System, equipped with Pepperl & Fuchs industrial-grade sensors, enables learners to perform practical exercises and develop specialized knowledge of sensor characteristics and behavior. This versatile trainer can be integrated into broader automation setups, offering hands-on exposure to the sensors and transducers commonly used in industry. Starting from basic applications, features, and parameters, the system guides users through various sensor types and their real-world applications, building a strong foundation in industrial sensing technologies.",
                icon: Activity,
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "4",
                title: "PLC Training System",
                description: "The BOSCH Rexroth L20/L25 PLC Training System offers flexible, hands-on learning in logic control, continuous control, and integrated automation. It is widely used to teach PLC-based control of industrial sensorics, pneumatics, and hydraulics. The setup also supports robotics communication and master–slave configurations with suitable interfaces. Learners practice PLC fundamentals, relay logic, and programming in LD, FBD, SFC, and CFC. Overall, it prepares trainees for real industrial environments with strong skills in PLC programming, system integration, and safety.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            },
            {
                id: "5",
                title: "Mechatronics Training System",
                description: "BOSCH Rexroth Mechatronics Training System combines Sensorics, Pneumatics, and PLC technologies in a modular, easy-to-learn platform. All actuator and sensor signals communicate with the PLC via Profibus DP for efficient control. Trainees can start with basic modules and gradually move to the full system. It builds strong skills in PLC programming, circuit analysis, commissioning, troubleshooting, and safety. The three coordinated stations—magazine, processing, and storage—simulate real automated handling and assembly operations.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation5.png"
            },
            {
                id: "6",
                title: "Motion Controller",
                description: "A Motion Controller ensures precise, controlled movement of machine tools by following defined motion profiles and correcting deviations through closed-loop feedback. The Bosch Rexroth 2-Axis Motion Controller teaches both open-loop and closed-loop servo drive principles. Trainees learn to configure, operate, and analyze servo drive performance in real time. It provides practical understanding of motion control, system response, and stability. The setup also builds essential skills in troubleshooting and maintenance of servo systems.",
                icon: Activity,
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            },
            {
                id: "7",
                title: "CNC Simulator",
                description: "Bosch Rexroth CNC Simulator allows users to model and test machining processes on a standard PC without affecting real production. It provides a virtual environment for developing, optimizing, and transferring CNC programs, with ready-made lathe and milling scenarios. The simulator realistically replicates operations like milling, turning, grinding, cutting, and more. It helps operators, instructors, and students understand CNC programming and machine behavior without needing a physical machine tool.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation2.jpeg"
            },
            {
                id: "8",
                title: "Industrial Internet of Things (IIoT 4.0) Training System",
                description: "The Industrial Internet of Things (IIoT), or Industry 4.0, connects smart machines, automation, and data analytics to improve factory performance. The BOSCH Rexroth IIoT 4.0 Training Kit offers a practical platform to experience these technologies in real time. With wireless and Ethernet connectivity, users can remotely access PLC functions, control drives, and monitor encoder feedback. This setup helps learners understand industrial connectivity, live data acquisition, and smart automation for modern manufacturing.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation3.png"
            },
            {
                id: "9",
                title: "Automation Studio",
                description: "Automation Studio is a powerful software tool for designing and simulating pneumatic, hydraulic, electrical, and PLC circuits in a virtual environment. It enables real-time simulation, troubleshooting, and visualization of system behavior without the need for physical hardware. The platform helps learners develop practical skills in fluid power, electrical automation, and system diagnostics. Its extensive libraries and user-friendly interface support strong foundations in circuit design and documentation.",
                icon: Zap,
                image: "/image/SkillFoundationImage/skill-foundation4.jpeg"
            },
            {
                id: "10",
                title: "Variable Frequency Drive (VFD) Training System",
                description: "Bosch Rexroth VFD Training System offers practical learning in AC motor speed and torque control using modern drive technology. Trainees learn how varying frequency and voltage regulate motor performance, along with key functions like start/stop control, acceleration, braking, and parameter setup. The system allows real-time observation of motor behavior and drive diagnostics. It builds essential skills for safe operation, energy-efficient motor control, and industrial automation applications.",
                icon: Settings,
                image: "/image/SkillFoundationImage/skill-foundation5.png"
            }
        ]
    },
    events: {
        title: "Glimpse of the Events/Workshops",
        items: [
            { id: "1", title: 'BOSCH Rexroth–CoE Conducts Basic Mechanical Workshop for Windmöller & Hölscher (W&H) Engineers', description: "BOSCH-Rexroth Industrial Automation CoE conducted an eight-day Basic Mechanical Workshop Training for engineers of W&H, aimed at enhancing their practical skills in mechanical assembly, maintenance, and troubleshooting, held from 27 August 2024. Three service engineers (one from the mechatronics stream and two from the mechanical stream) participated in the training program.", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" },
            { id: "2", title: "Two-Day PLC Training Program for SFC Solutions, Sahibabad (SFC  ( Full Form) Solutions Employees Complete Advanced PLC Training at AKGEC)", description: "A two-day PLC training program for employees of SFC Solutions, Sahibabad was successfully conducted on 22–23 August 2024 at the CEAT and Siemens Centres of Excellence, AKGEC, in joint collaboration with IMTMA. Nine participants attended the program, where they gained hands-on training in PLC fundamentals, hardware architecture, ladder logic programming, I/O interfacing, troubleshooting techniques, and basic industrial automation applications.", image: "/image/SkillFoundationImage/skill-foundation2.jpeg" },
            { id: "3", title: "Empowering the Future Workforce: BOSCH-Rexroth CoE Conducts 45+ Industrial Automation Workshops", description: "BOSCH-Rexroth Industrial Automation CoE conducted more than 45 hands-on workshops on industrial automation technologies to bridge the gap between theoretical knowledge and industrial practice. The workshops offered extensive practical exposure to PLCs, industrial sensors, drives, hydraulics, pneumatics, robotics, and integrated automation systems. Strong emphasis was placed on experiential learning, real-time fault diagnosis, and application-based training. These initiatives significantly enhanced students’ technical competence, problem-solving abilities, confidence, and overall industry readiness.", image: "/image/SkillFoundationImage/skill-foundation3.png" },
            { id: "4", title: "Professional Training Programs under Pradhan Mantri Kaushal Vikas Yojana (PMKVY) 4.0 by BOSCH-Rexroth CoE", description: "BOSCH-Rexroth Industrial Automation CoE conducted professional training programs under the PMKVY 4.0 scheme, including Industrial Automation Specialist and PLC Programmer & Troubleshooter courses, aimed at enhancing workforce competency and improving industry employability.", image: "/image/SkillFoundationImage/skill-foundation4.jpeg" },
            { id: "5", title: "DGR Candidate Training Programs at AKGEC", description: "AKGEC conducted DGR Candidate Training programs in Industrial Automation Specialist and Building Automation Specialist courses to support skill development and enhance the employability of retiring defence personnel. AKGEC successfully conducted DGR Candidate Training Programs in Industrial Automation Specialist and Building Automation Specialist courses, aimed at equipping retiring defence personnel with industry-relevant technical skills, facilitating smooth career transition, and enhancing their employability in automation-driven sectors.", image: "/image/SkillFoundationImage/skill-foundation5.png" },
            { id: "6", title: "Industry-Focused Induction Training Program for Hindalco Engineers at AKGEC", description: "AKGEC conducted a comprehensive induction training program for engineers of Hindalco Industries Ltd., Pune, with a focus on strengthening practical and industry-relevant skills. The training covered key domains including Robotics and Industrial Automation, Welding technologies, Machining processes, and Quality Inspection techniques. The program emphasized hands-on learning, exposure to modern industrial equipment, and best manufacturing practices to enhance participants’ technical competency and workplace readiness.", image: "/image/SkillFoundationImage/skill-foundation1.jpeg" }
        ]
    },
    awards: {
        title: "Awards & Recognition",
        items: []
    },
    programs: {
        title: "Programs Offered",
        description: "The Centre offers the following training programs for industry professionals and engineering students of all disciplines. On successful completion, participants are assessed for their learning & skills and awarded with a globally recognized joint certification from BOSCH-Rexroth & AKGEC.",
        items: [
            "Industrial Automation Technologies—Basic Level (40 Hrs)",
            "Industrial Automation Technologies—Intermediate  Level (80 Hrs)",
            "Industrial Automation Technologies—Advance Level (120 Hrs)"
        ]
    },
    upcoming: {
        title: "Upcoming Programs",
        description: "The BOSCH Rexroth Industrial Automation Centre of Excellence is offering a 40-hour Winter Training Program on Industrial Automation Technologies-Basic Level for B.Tech and Diploma students, scheduled for January 2026. The program culminates in a globally recognized joint certification awarded by BOSCH-Rexroth and AKGEC.",
        contactEmail: "ceat@akgec.ac.in",
        contactPhone: "+91-9458582870",
        table: [
            {
                title: "Winter Training Program on Industrial Automation Technologies-Basic Level",
                duration: "40 Hours",
                fee: "₹ 7,000",
                coordinator: "Dr. Alok Vardhan",
                contact: "ceat@akgec.ac.in/ +91-9458582870"
            }
        ]
    },
    contact: {
        address: "AKGEC Campus: 27th KM Milestone, Delhi-Meerut Expressway, Adhyatmik Nagar, Ghaziabad, Uttar Pradesh-201015",
        email: "ceat@akgec.ac.in",
        phones: ["+91-9458582870", "8743879879"]
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
                                        {boschData.title}
                                    </h1>
                                    <div className="h-1.5 w-24 bg-brand-yellow mt-4 rounded-full"></div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 font-novaReg leading-relaxed">
                                {boschData.description.map((para, i) => (
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
                            {boschData.infrastructure.title}
                        </motion.h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                        {boschData.infrastructure.items.map((item, index) => {
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{boschData.events.title}</h2>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {boschData.events.items.map((event, idx) => (
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
                {/* <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-20">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{boschData.awards.title}</h2>
                        <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {boschData.awards.items.map((award, idx) => (
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
                </section> */}

                {/* Programs Offered */}
                <section className="bg-brand-blue text-white py-20 mb-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-novaBold mb-6">{boschData.programs.title}</h2>
                            <p className="max-w-3xl mx-auto text-blue-100 font-novaReg text-lg">{boschData.programs.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {boschData.programs.items.map((program, idx) => (
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{boschData.upcoming.title}</h2>
                        <p className="text-gray-600 font-novaReg text-lg mb-8">{boschData.upcoming.description}</p>

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
                                    {boschData.upcoming.table.map((row, idx) => (
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
                                    <p className="text-gray-300 text-lg leading-relaxed">{boschData.contact.address}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-5">
                                        <Mail className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <a href={`mailto:${boschData.contact.email}`} className="text-gray-300 text-lg hover:text-white transition-colors">{boschData.contact.email}</a>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <Phone className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <div className="text-gray-300 text-lg leading-relaxed">
                                            {boschData.contact.phones.join(" / ")}
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
