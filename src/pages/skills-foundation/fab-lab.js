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
    ExternalLink
} from "lucide-react";

// Data Structure
const fabLabData = {
    title: "FAB LAB",
    description: [
        "AKGEC, in its endeavor to nurture creativity and foster innovation among youth, has established a state-of-the-art FabLab on campus. As a part of the global network of more than 1,700 FabLabs and 700+ innovators worldwide, the FabLab at AKGEC is dedicated to promote open-source ecology and collaborative development. Operational since December 2016, the FabLab continues to empower students and researchers with cutting-edge tools, resources, and opportunities to transform ideas into reality.",
        "The AKGEC FABLAB features a comprehensive digital manufacturing and fabrication infrastructure built around three core verticals: digital fabrication & prototyping, additive manufacturing, and electronics & IoT systems design. The facility includes advanced 3D printers for precise prototypes, a fully equipped electronics and embedded systems lab with diverse sensors and development boards, and essential power tools for rapid fabrication. Together, these resources enable students and innovators to turn ideas into functional models and working prototypes with speed and precision."
    ],
    infrastructure: {
        title: "Infrastructure at FAB LAB",
        items: [
            {
                id: "1",
                title: "Laser Cutting & Engraving System",
                description: "A Laser Cutting & Engraving System is a precision machine that uses a focused laser beam to cut, mark, and engrave a wide range of materials such as wood, acrylic, leather, paper, and certain metals. It delivers high-speed, high-accuracy performance, allowing users to produce intricate designs, detailed engravings, and clean cuts with minimal post-processing. Equipped with advanced motion control, adjustable laser power, and digital file compatibility, the system supports both vector cutting and raster engraving. Depending on the application, CO₂, fiber, or diode laser sources can be used to achieve optimal results. These systems are widely used in manufacturing, prototyping, signage, education, and creative industries for producing precise and repeatable outputs.",
                icon: Scissors,
                image: "/image/skill-foundation/fab-lab/infrastructure/laser-cutting-engraving-system.webp"
            },
            {
                id: "2",
                title: "CNC Milling",
                description: "CNC Milling is a computer-controlled machining process that uses rotating cutting tools to precisely remove material from metal, plastic, or composite workpieces. The machine follows programmed toolpaths to create complex shapes, contours, and features with high accuracy and repeatability. Equipped with multi-axis control, high-speed spindles, and advanced CAM integration, CNC mills can perform operations such as drilling, pocketing, contouring, and surface finishing. This technology is widely used in industries like aerospace, automotive, tooling, and product manufacturing due to its ability to produce tight-tolerance components. CNC milling ensures consistent quality, efficient production, and scalability for both prototyping and mass manufacturing.",
                icon: Settings,
                image: "/image/skill-foundation/fab-lab/infrastructure/cnc-milling.webp"
            },
            {
                id: "3",
                title: "CNC Wood Router",
                description: "A CNC Wood Router is a computer-controlled cutting machine designed to accurately carve, shape, and engrave wood, MDF, plywood, and other soft materials. Using programmed toolpaths, it performs intricate cutting, profiling, pocketing, and 3D carving with high precision and repeatability. Equipped with a high-speed spindle, rigid frame, and advanced motion control, the router enables smooth, detailed, and consistent machining. It is widely used in furniture manufacturing, signage, cabinetry, interior décor, and custom woodworking for producing complex designs efficiently. CNC wood routers significantly improve productivity, reduce manual labor, and ensure uniform quality across repeated parts.",
                icon: Crosshair,
                image: "/image/skill-foundation/fab-lab/infrastructure/cnc-wood-router.webp"
            },
            {
                id: "4",
                title: "Lathe Machine",
                description: "A Lathe Machine is a precision machining tool used to shape materials such as metal, wood, or plastic by rotating the workpiece against a cutting tool. It performs essential operations like turning, facing, threading, boring, knurling, and taper cutting with high accuracy and control. Built with a robust bed, spindle system, carriage, and tailstock, a lathe ensures stable rotation and smooth tool movement for consistent machining results. Lathes are widely used in manufacturing, workshops, maintenance, and production environments to create cylindrical components and precision shafts. Their versatility, reliability, and ability to work with a wide range of materials make them a fundamental tool in machining and fabrication industries.",
                icon: Settings,
                image: "/image/skill-foundation/fab-lab/infrastructure/lathe-machine.webp"
            },
            {
                id: "5",
                title: "Additive Manufacturing (3D Printing)",
                description: "The Additive Manufacturing (3D Printing) facility at AKGEC FABLAB provides a robust setup for producing high-precision prototypes and functional parts. With a range of FDM, SLA, and PolyJet printers, the lab supports engineering design, product development, and research needs. Users can create complex geometries, multi-material components, and detailed models with high accuracy. The facility offers end-to-end support—from digital modeling to final prints—enabling rapid iteration, quick validation, and seamless conversion of ideas into test-ready prototypes.",
                icon: Printer,
                image: "/image/skill-foundation/fab-lab/infrastructure/additive-manufacturing-3d-printing.webp"
            },
            {
                id: "6",
                title: "Stratasys F370",
                description: "The Stratasys F370 is a professional-grade FDM 3D printer engineered for high accuracy, reliability, and efficient prototyping. It features a fully enclosed heated chamber, automated calibration, and support for engineering materials such as ABS-M30, ASA, TPU 92A, and PC-ABS. With its user-friendly touchscreen interface and GrabCAD Print software, the F370 streamlines the workflow from CAD to finished part. Its robust build and consistent performance make it ideal for functional prototypes, manufacturing tools, and low-volume production. The F370 ensures dimensionally stable, high-quality prints, making it a trusted solution for engineering, manufacturing, and product development environments.",
                icon: Printer,
                image: "/image/skill-foundation/fab-lab/infrastructure/stratasys-f370.webp"
            },
            {
                id: "7",
                title: "Stratasys J55 Polyjet Printer",
                description: "The Stratasys J55 is a compact, office-friendly PolyJet 3D printer designed to deliver ultra-realistic, full-color prototypes with exceptional detail and surface quality. It supports multi-material printing with over 500,000 color combinations, enabling designers to create final-product–like models for CMF (Color, Material, Finish) exploration. Its unique rotating build platform ensures uniform print quality, quiet operation, and efficient material usage. The J55 works seamlessly with Stratasys materials such as Vero, Vivid, and Elastico, allowing the creation of transparent, flexible, and textured parts. Ideal for product design, packaging, education, and concept modeling, the J55 dramatically accelerates the design-to-prototype workflow.",
                icon: Printer,
                image: "/image/skill-foundation/fab-lab/infrastructure/stratasys-j55-polyjet-printer.webp"
            },
            {
                id: "8",
                title: "Bambu Lab X1 Carbon",
                description: "The Bambu Lab X1 Carbon is a high-performance CoreXY 3D printer engineered for speed, precision, and advanced multi-material printing. Its carbon-fiber–reinforced frame, AI-assisted monitoring, and lidar-based first-layer inspection ensure consistent, high-quality prints. With a hardened steel hotend and all-metal components, it supports demanding engineering materials such as PETG-CF, PA-CF, and PC. The X1 Carbon’s vibration compensation and closed-loop motor control enable ultra-fast printing without sacrificing detail. When paired with the AMS, it offers seamless multi-color and multi-material workflows, making it ideal for professional prototyping and functional part production.",
                icon: Printer,
                image: "/image/skill-foundation/fab-lab/infrastructure/bambu-lab-x1-carbon.webp"
            },
            {
                id: "9",
                title: "Snapmaker A150/A350",
                description: "The Snapmaker A150/A350 are modular 3-in-1 fabrication systems that combine 3D printing, laser engraving/cutting, and CNC carving in a single, compact machine. Built with a durable all-metal frame and precision linear modules, they deliver accurate and repeatable performance across all three functions. The interchangeable toolheads allow users to switch seamlessly between fabrication modes, making the system ideal for makers, educators, and small workshops. The A150 offers a smaller footprint for limited spaces, while the A350 provides a significantly larger workspace for bigger projects. Paired with Snapmaker Luban software, the system enables streamlined workflows and creative versatility for a wide range of digital fabrication tasks.",
                icon: Settings,
                image: "/image/skill-foundation/fab-lab/infrastructure/snapmaker-a150-a350.webp"
            },
            {
                id: "10",
                title: "MakerBot Z18",
                description: "The MakerBot Replicator Z18 is a large-format FDM 3D printer designed for producing tall, full-scale prototypes and functional parts with exceptional consistency. Its enclosed heated chamber minimizes warping and ensures strong layer adhesion, even for large prints. With a massive 18-inch build height, the Z18 enables designers and engineers to create oversized models in a single run, reducing assembly time. It integrates seamlessly with MakerBot Print and Cloud software for easy workflow management and remote monitoring. Built for reliability and ease of use, the Z18 is ideal for product development, education, architecture, and industrial prototyping.",
                icon: Printer,
                image: "/image/skill-foundation/fab-lab/infrastructure/makerbot-z18.webp"
            },
            {
                id: "11",
                title: "Ultimaker 3D Printer",
                description: "Ultimaker 3D Printers are professional-grade FDM systems known for their precision, reliability, and ease of use across a wide range of applications. With advanced dual-extrusion technology, they enable multi-material and soluble-support printing for creating detailed, functional prototypes and end-use parts. Their open-material ecosystem allows compatibility with engineering filaments such as nylon, CPE, TPU, and composites. Features like active bed leveling, touchscreen controls, and seamless Cura software integration streamline the printing workflow. Trusted by engineers, educators, and designers, Ultimaker printers deliver consistent, high-quality results for both prototyping and production environments.",
                icon: Printer,
                image: "/image/skill-foundation/fab-lab/infrastructure/ultimaker-3d-printer.webp"
            },
            {
                id: "12",
                title: "FormLab 3B+",
                description: "The Formlabs Form 3B+ is a high-performance SLA 3D printer engineered for medical, dental, and engineering-grade applications requiring exceptional precision. Powered by Low Force Stereolithography (LFS), it delivers smooth surfaces, accurate geometries, and consistent part quality. The advanced Light Processing Unit (LPU) ensures uniform curing and improved reliability across biocompatible and engineering resins. With automated resin handling, intelligent sensors, and fast print speeds, the Form 3B+ streamlines production workflows. Ideal for dental models, surgical guides, medical devices, and detailed prototypes, it offers professional-grade results in a compact, user-friendly system. ",
                icon: Printer,
                image: "/image/skill-foundation/fab-lab/infrastructure/formlab-3b-plus.webp"
            },
            {
                id: "13",
                title: "AAKAR 3D Printer",
                description: "AAKAR is a patented, low-cost, single-extruder 3D printer designed for reliable, high-precision prototyping and in-house production. Built with a sturdy mechanical frame and an optimized extrusion system, it delivers smooth, consistent prints across a variety of materials. Its affordability combined with dependable performance makes it ideal for schools, startups, labs, and small manufacturing units seeking an efficient in-house fabrication solution. AAKAR offers excellent dimensional accuracy, stable layer adhesion, and clean surface quality, ensuring professional-grade results. With a user-friendly interface and easy calibration, it supports both beginners and advanced users, making rapid prototyping accessible and economical.",
                icon: Printer,
                image: "/image/skill-foundation/fab-lab/infrastructure/aakar-3d-printer.webp"
            },
            {
                id: "14",
                title: "Electronics Systems Design",
                description: "The Electronics System Design facility at AKGEC FABLAB provides a robust ecosystem for electronics prototyping and IoT development. It is equipped with a diverse range of industry-standard microcontroller platforms, single-board computers, essential sensors, and professional test instruments. The lab also supports complete circuit design and PCB fabrication, enabling end-to-end development of electronic projects—from concept to fully built hardware.",
                icon: Zap,
                image: "/image/skill-foundation/fab-lab/infrastructure/electronics-systems-design.webp"
            },
            {
                id: "15",
                title: "PCB Designing and Manufacturing",
                description: "PCB Designing and Manufacturing together transform an electronic concept into a fully functional circuit board. The design phase includes schematic development, footprint creation, multilayer routing, and DFM validation using professional open-source tools like KiCad. For rapid product prototyping, PCB fabrication is supported through both chemical etching and CNC milling, using machines such as the Modela MDX-50 and Roland SRM-20. This integrated facility enables the quick development of high-quality prototype PCBs, allowing teams to validate and test their products efficiently.",
                icon: Settings,
                image: "/image/skill-foundation/fab-lab/infrastructure/pcb-designing-manufacturing.webp"
            },
            {
                id: "16",
                title: "Electronic Circuit Design",
                description: "AKGEC FABLAB is equipped with professional-grade soldering stations, hot-air rework systems, and an SMT reflow oven to support high-precision electronics prototyping and assembly. These advanced tools provide independent temperature control, rapid heat-up, and stable airflow for reliable SMD/SMT soldering, desoldering, and reflow processes. Together, they enable the production of high-quality electronic assemblies for academic, research, and product development applications.",
                icon: Zap,
                image: "/image/skill-foundation/fab-lab/infrastructure/electronic-circuit-design.webp"
            },
            {
                id: "17",
                title: "IoT Development Boards",
                description: "At AKGEC FABLAB, advanced IoT development boards like the NVIDIA Jetson Nano, BeagleBone Black, and Raspberry Pi 4/5 power rapid creation of intelligent connected systems. Jetson Nano enables GPU-accelerated AI for robotics and edge vision, while BeagleBone Black offers industrial-grade real-time control for automation. Raspberry Pi adds high-speed processing and robust connectivity for versatile IoT applications. Together, these platforms support fast prototyping, seamless sensor integration, and deployment of smart, data-driven IoT solutions.",
                icon: Radio,
                image: "/image/skill-foundation/fab-lab/infrastructure/iot-development-boards.webp"
            },
            {
                id: "18",
                title: "Embedded System Boards",
                description: "Embedded System Boards like Raspberry Pi Pico, STM32, ESP32, and Arduino offer a strong platform for developing advanced electronics and IoT solutions. The Pico delivers fast dual-core performance, STM32 provides high processing power for complex designs, and ESP32 integrates Wi-Fi/Bluetooth for connected applications. Arduino adds simplicity and broad community support for quick prototyping. Together, these boards enable the creation of reliable, scalable, and feature-rich embedded systems.",
                icon: Activity,
                image: "/image/skill-foundation/fab-lab/infrastructure/embedded-system-boards.webp"
            }
        ]
    },
    events: {
        title: "Workshop / Events",
        items: [
            { id: "1", title: "AICTE – Basic IDEA Lab Faculty Development Program", description: "Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad conducted a five-day AICTE-sponsored Basic IDEA Lab FDP from 21–25 April 2025 to train IDEA Lab coordinators and faculty from across India. The program combined expert lectures and hands-on sessions in 3D Printing, Product Design, CNC Machining, Embedded Systems, IoT, Design Thinking, and IPR, emphasizing learning-by-doing and prototype development in alignment with NEP 2020, and strengthening the IDEA Lab innovation ecosystem.", image: "/image/skill-foundation/fab-lab/events/aicte-basic-idea-lab-fdp.webp" },
            { id: "2", title: "AICTE-MIC-DoSEL-CBSE- One Day Design Thinking & Innovation Workshop", description: "Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad has been selected as the Nodal Centre for Uttar Pradesh by AICTE, MIC, and CBSE to conduct a One-Day Design Thinking & Innovation Workshop on 27 September 2025. The workshop will engage around 100 CBSE Principals and Teachers, featuring eminent dignitaries and expert speakers from AICTE, MIC, IIT Bombay, and leading institutions, and aims to promote innovation-led problem solving and experiential learning in alignment with national educational initiatives.", image: "/image/skill-foundation/fab-lab/events/aicte-mic-dosel-cbse-workshop.webp" },
            { id: "3", title: "Additive Manufacturing Symposium 2025", description: "The National Symposium on Additive Manufacturing (NSAM 2025) is a prestigious one-day national-level event scheduled on 26 March 2025 at Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad. Organized by the Center of Excellence for Additive Manufacturing (CoE-AM) in collaboration with the Innovation Hub–AKTU, and sponsored by Dr. A.P.J. Abdul Kalam Technical University (AKTU), the symposium focuses on emerging trends, applications, and future directions of Additive Manufacturing (AM). NSAM 2025 will bring together industry leaders, academicians, government representatives, and innovators to deliberate on the transformative role of AM across key sectors, including Drones & Aerospace, Healthcare, and Automotive. The symposium will also feature live hands-on demonstrations of polymer and metal 3D printing technologies, offering participants valuable practical insights. The National Centre for Additive Manufacturing (NCAM) serves as the Knowledge Partner, while the Additive Manufacturing Society of India (AMSI) is the Strategic Partner for the event.", image: "/image/skill-foundation/fab-lab/events/additive-manufacturing-symposium-2025.webp" },
            { id: "4", title: "FDP & Chief Mentor Conclave for AICTE IDEA LAB", description: "Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, was nominated by AICTE to organize a five-day Faculty Development Program (FDP) on AICTE IDEA Lab, followed by a One-Day Chief Mentor Conclave, under the AICTE Training and Learning (ATAL) Academy. Conducted from 2nd to 7th May 2022, the program aimed to train IDEA Lab coordinators from AICTE-selected institutions through hands-on exposure to key IDEA Lab equipment and technologies. The FDP brought together faculty members from newly established IDEA Labs across multiple states, fostering collaboration, knowledge sharing, and best practices for effective IDEA Lab implementation. The Chief Mentor Conclave provided a unique platform for institutional heads and mentors to interact, network, and gain first-hand insights into the objectives and operational framework of the AICTE IDEA Lab Scheme, strengthening the national innovation and experiential learning ecosystem", image: "/image/SkillFoundationImage/skill-foundation4.jpeg" },
            { id: "5", title: "Super FABLAB Bhutan Training Bootcamp", description: "Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad conducted an international training bootcamp for delegates from the Jigme Namgyel Wangchuck Super Fab Lab, Bhutan from 16–20 January 2023, focusing on Advanced Embedded Systems & IoT, Industrial Automation, PLC & SCADA, Robotics, and Reverse Engineering. The hands-on program promoted practical skill development, global knowledge exchange, and international collaboration, reinforcing AKGEC’s role as a center for advanced technical training.", image: "/image/skill-foundation/fab-lab/events/super-fablab-bhutan-bootcamp.webp" }
        ]
    },
    awards: {
        title: "Awards",
        items: [
            { text: "IndiaSkills 2021. We are delighted to announce that Mr. Dhruv Verma, a fourth-year B.Tech Mechanical Engineering student at Ajay Kumar Garg Engineering College, has won the Silver Medal in the IndiaSkills 2021 National Competition in the Additive Manufacturing skill category. Dhruv earned this prestigious recognition for his outstanding performance and successful completion of challenging projects during the competition. IndiaSkills and WorldSkills India are initiatives of the National Skill Development Corporation (NSDC) under the Ministry of Skill Development & Entrepreneurship (MSDE), Government of India. WorldSkills Competitions—often referred to as the “Olympics of Skills”—represent the global benchmark of vocational excellence, bringing together talented participants from around the world.", image: "/image/skill-foundation/fab-lab/awards/indiaskills-2021.webp" }
        ]
    },
    programs: {
        title: "Programs Offered",
        description: "The Centre offers the following training programs for industry professionals and engineering students of all disciplines. On successful completion of training, participants are assessed for their learning & skills and awarded with a globally recognised joint certification from AKGEC & FAB LAB.",
        items: [
            { text: "Short Term Training Program - Internet Of Things (40 Hrs)", pdf: "/image/skill-foundation/fab-lab/programs-offered/sttp-iot.pdf" },
            { text: "Short Term Training Program - Embedded System (40 Hrs)", pdf: "" },
            { text: "Short Term Training Program - 3D Printing (40 Hrs)", pdf: "/image/skill-foundation/fab-lab/programs-offered/sttp-3d-printing.pdf" },
            { text: "Innovation Bootcamp - School Students (80 Hrs)", pdf: "/image/skill-foundation/fab-lab/programs-offered/bootcamp-school.pdf" },
            { text: "Innovation Bootcamp - Engineering Students (80 Hrs)", pdf: "/image/skill-foundation/fab-lab/programs-offered/bootcamp-engineer.pdf" },
            { text: "Industrial Training Program - Internet of Things (80 Hrs)", pdf: "/image/skill-foundation/fab-lab/programs-offered/itp-iot.pdf" },
            { text: "Industrial Training Program - Embedded System (80 Hrs)", pdf: "" },
            { text: "Industrial Training Program - 3D Printing (80 Hrs)", pdf: "/image/skill-foundation/fab-lab/programs-offered/itp-3d-printing.pdf" }
        ]
    },
    upcoming: {
        title: "Upcoming Programs",
        description: "",
        contactEmail: "fablab@akgecskills.in",
        contactPhone: "+91-9873812070",
        table: [
            {
                title: "Winter Training Program - IoT",
                duration: "40 Hrs",
                fee: "₹ 7,000",
                coordinator: "Mr. Himanshu Tripathi",
                contact: "tripathihimanshu@akgec.ac.in / +91 9873812070",
                pdf: "/image/skill-foundation/fab-lab/upcoming-programs/winter-training-iot.pdf"
            },
            {
                title: "Winter Training Program - 3D Printing",
                duration: "40 Hrs",
                fee: "₹ 7,000",
                coordinator: "Mr. Himanshu Tripathi",
                contact: "tripathihimanshu@akgec.ac.in / +91 9873812070",
                pdf: "/image/skill-foundation/fab-lab/upcoming-programs/winter-training-3d-printing.pdf"
            }
        ]
    },
    contact: {
        address: "AKGEC Campus: 27th KM Milestone, Delhi-Meerut Expressway, Adhyatmik Nagar, Ghaziabad, Uttar Pradesh-201015",
        email: "fablab@akgecskills.in",
        phones: ["+91-9873812070", "8743879879"]
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
                                        {fabLabData.title}
                                    </h1>
                                    <div className="h-1.5 w-24 bg-brand-yellow mt-4 rounded-full"></div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 font-novaReg leading-relaxed">
                                {fabLabData.description.map((para, i) => (
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
                            {fabLabData.infrastructure.title}
                        </motion.h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                        {fabLabData.infrastructure.items.map((item, index) => {
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{fabLabData.events.title}</h2>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {fabLabData.events.items.map((event, idx) => (
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{fabLabData.awards.title}</h2>
                        <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {fabLabData.awards.items.map((award, idx) => (
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
                            <h2 className="text-3xl md:text-4xl font-novaBold mb-6">{fabLabData.programs.title}</h2>
                            <p className="max-w-3xl mx-auto text-blue-100 font-novaReg text-lg">{fabLabData.programs.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {fabLabData.programs.items.map((program, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <BookOpen className="text-brand-yellow" size={20} />
                                            <h4 className="font-novaBold text-lg text-white">Program {idx + 1}</h4>
                                        </div>
                                        <p className="text-blue-50 font-novaReg mb-4">{program.text}</p>
                                    </div>
                                    {program.pdf && (
                                        <a
                                            href={program.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-semibold text-brand-yellow hover:text-white transition-colors mt-auto"
                                        >
                                            Download Brochure <ArrowRight size={16} className="ml-1" />
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{fabLabData.upcoming.title}</h2>
                        <p className="text-gray-600 font-novaReg text-lg mb-8">{fabLabData.upcoming.description}</p>

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
                                    {fabLabData.upcoming.table.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-gray-800 font-medium">
                                                {row.pdf ? (
                                                    <a href={row.pdf} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue hover:underline flex items-center gap-2 group">
                                                        {row.title}
                                                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </a>
                                                ) : (
                                                    row.title
                                                )}
                                            </td>
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
                                    <p className="text-gray-300 text-lg leading-relaxed">{fabLabData.contact.address}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-5">
                                        <Mail className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <a href={`mailto:${fabLabData.contact.email}`} className="text-gray-300 text-lg hover:text-white transition-colors">{fabLabData.contact.email}</a>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <Phone className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <div className="text-gray-300 text-lg leading-relaxed">
                                            {fabLabData.contact.phones.join(" / ")}
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
