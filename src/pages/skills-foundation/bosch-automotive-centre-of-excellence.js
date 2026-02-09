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
    title: "BOSCH Automotive Centre of Excellence",
    description: [
        "Bosch Automotive Centre of Excellence is the first and largest Joint Certification Centre in the Delhi NCR Region, established in collaboration with BOSCH India to produce highly skilled technical manpower in the field of Automotive Technology. This centre aims to train young engineers and industry professionals to meet industry requirements and foster research in the Automotive field. It is one among the 17 Joint Certification Centre in India."
    ],
    infrastructure: {
        title: "Infrastructure at BOSCH Automotive CoE",
        items: [
            {
                id: "1",
                title: "AUTO ELECTRICAL TEST BENCH",
                description: "Our advanced three-phase auto-electric test bench is engineered to deliver precise, high-capacity testing for modern automotive alternators and starters. It supports alternators up to 170A/12V and 110A/24V, with both V-pulley and Poly-V groove pulley configurations tested at speeds ranging from 1,500 to 6,000 rpm. The bench features a starter free-spin test with an automatic timer cut-off, a vacuum pump testing system with oil circulation, and cam-operated heavy-duty rotary switches for reliable load application during 10–20 minute test cycles.",
                icon: Zap,
                image: "/image/skill-foundation/bosch-jcc/infrastructure/auto-electrical-test-bench.webp"
            },
            {
                id: "2",
                title: "AUTOMOBILE BATTERY TESTER",
                description: "The BAT 131 is a portable battery tester with a large LCD display and a multi-language menu-guided interface, suitable for testing across the DIN, JIS, EN, SAE, IEC and EN2 standards. With the capability to test 12 V and 24 V starter and charging systems, the tester can support the optional use of a current clamp, enabling more extensive testing and improving test results.",
                icon: Activity,
                image: "/image/skill-foundation/bosch-jcc/infrastructure/industrial-battery-tester.webp"
            },
            {
                id: "3",
                title: "INDUSTRIAL BATTERY CHARGER",
                description: "This advanced battery charger is designed for reliable trickle charging and floating-mode operation, with fully adjustable charge current to handle even deeply discharged batteries. Its interference-free, peak-free output voltage (DIN 40839 Level I) enables safe charging without disconnecting the battery. A clear status display, along with switches for 12V/24V selection and battery temperature range, ensures precise and safe operation in all conditions.",
                icon: Zap,
                image: "/image/skill-foundation/bosch-jcc/infrastructure/industrial-battery-charger.webp"
            },
            {
                id: "4",
                title: "ECU SCANNER KTS",
                description: "The KTS 590 is a cutting-edge communication module designed for advanced ECU diagnostics, supporting Ethernet-based DoIP for next-generation vehicles. Equipped with a built-in 2-channel oscilloscope and multimeter, it enables precise real-time analysis of electrical signals, helping technicians quickly evaluate voltage, resistance, current, and complex sensor or actuator behavior. Fully PassThru compliant, it allows seamless access and reprogramming of OEM control unit software.",
                icon: Radio,
                image: "/image/skill-foundation/bosch-jcc/infrastructure/ecu-scanner-kts.webp"
            },
            {
                id: "5",
                title: "CUT SECTION MODEL OF CHASSIS (SWIFT) CAR",
                description: "Our Cut Section Model of the Swift Car Chassis is an expertly engineered training tool designed to provide a clear and comprehensive understanding of modern automotive structure and component integration. The chassis is precisely sectioned to expose key structural elements, suspension mounting points, drivetrain pathways, steering linkages, and safety reinforcements, giving learners and technicians an in-depth view of the vehicle’s core framework.",
                icon: Settings,
                image: "/image/skill-foundation/bosch-jcc/infrastructure/cut-section-model-of-chassis-swift-car.webp"
            },
            {
                id: "6",
                title: "VEHICLE AIR CONDITIONING SYSTEM",
                description: "The ACS 701 is a high-precision, fully automatic A/C service unit engineered to meet stringent European standards, ensuring efficient servicing for both passenger and commercial vehicles. With dual oil bottles (PAG and POE) and an automatic flushing function, it is ideal for servicing hybrid and electric vehicles. The Deep Recovery function achieves up to 99% refrigerant recovery within minutes, reducing costs while supporting environmental protection.",
                icon: Snowflake,
                image: "/image/skill-foundation/bosch-jcc/infrastructure/vehicle-air-conditioning-systems.webp"
            },
            {
                id: "7",
                title: "ADVANCE UNIVERSAL ENGINE TESTING FACILITY",
                description: "The Universal Engine (1 Ton Capacity) is a robust training and demonstration unit designed to clearly showcase the complete working principles of an automotive engine. Built for technical institutes, skill centers, and workshop training environments, it allows learners to observe engine components, power transmission, combustion cycles, and functional assemblies in real time.",
                icon: Flame,
                image: "/image/skill-foundation/bosch-jcc/infrastructure/universal-engine-1-ton-capacity.webp"
            },
            {
                id: "8",
                title: "MPFI TECHNOLOGY DEMONSTRATION BENCH",
                description: "The MPFI Petrol Engine Training Module is a comprehensive instructional unit designed to demonstrate the operation, fuel delivery, and electronic control of modern multi-point fuel injection systems. It enables learners to study injector timing, fuel atomization, ECU-controlled ignition, sensor inputs, and emission management in a real working setup.",
                icon: Settings,
                image: "/image/skill-foundation/bosch-jcc/infrastructure/mpfi-technology-demonstration-bench.webp"
            },
            {
                id: "9",
                title: "POWER STEERING SYSTEM",
                description: "The Hydraulic & Electronic Power Steering Training Platform offers a clear, hands-on understanding of modern steering assistance systems, from fluid-based pressure control to motor-driven assistance. It allows learners to observe real-time steering response, practice fault diagnosis, and perform key maintenance procedures. Designed for automotive labs, it provides a safe, accessible, and durable setup for mastering both hydraulic and electronic steering technologies.",
                icon: Settings,
                image: "/image/skill-foundation/bosch-jcc/infrastructure/training-platform-for-hydraulic-electronic-power-steering-system.webp"
            },
            {
                id: "10",
                title: "AC & ABS TECHNOLOGY DEMONSTRATION BENCH",
                description: "The AC System & ABS Cut Section Working Bench is an advanced dual-function training platform designed to demonstrate both automotive air-conditioning operation and Anti-lock Braking System functionality in a single setup. With precisely sectioned components, learners can clearly visualize refrigerant flow, ABS modulation, sensor integration, and hydraulic control in real time.",
                icon: Crosshair,
                image: "/image/skill-foundation/bosch-jcc/infrastructure/ac-system-abs-cut-section-working-bench.webp"
            },
            {
                id: "11",
                title: "ELECTRICAL TEST BENCH (COMPLETE CAR)",
                description: "The Electrical Test Bench (Complete Car) is a fully equipped diagnostic and training platform designed to replicate the electrical systems of a modern vehicle in operational form. It allows learners and technicians to study, test, and troubleshoot complete wiring circuits, alternator and starter functions, lighting systems, ECU-controlled modules, sensors, actuators, and battery charging performance just as in a live vehicle.",
                icon: Zap,
                image: "/image/skill-foundation/bosch-jcc/infrastructure/auto-electrical-test-bench-complete-car.webp"
            },
            {
                id: "12",
                title: "TRAINING SIMULATOR FOR AIR BAG",
                description: "The Airbag Safety System Test Bench is a specialized training platform designed to demonstrate the complete working principles of modern automotive airbag deployment and safety electronics. It enables learners to understand sensor inputs, crash signal processing, ECU-controlled activation, seatbelt pretensioner integration, and fault indication in a controlled, non-deploying environment.",
                icon: Settings,
                image: "/image/skill-foundation/bosch-jcc/infrastructure/training-simulator-for-air-bag.webp"
            }
        ]
    },
    events: {
        title: "Glimpse of the Events/Workshops",
        items: [
            {
                id: "1",
                title: "Engineering Solutions for Healthcare Mobility – Talk by Prof. Wolf Burger",
                description: "Prof. Wolf Burger, SES Expert from Germany, delivered an insightful session for SAE students of AKGEC on designing Electric Bike Ambulances for developing nations on 11th November 2025. He shared practical engineering approaches, global case studies, and innovative design ideas aimed at improving emergency mobility in resource-limited regions.",
                image: "/image/skill-foundation/bosch-jcc/glimpse-of-event-ws/engineering-solutions-for-healthcare-mobility-talk-by-prof-wolf-burger.webp"
            },
            {
                id: "2",
                title: "AKGEC Signs Strategic MoU with JustAuto India Pvt. Ltd.",
                description: "On 29 October 2025, AKGEC signed a Strategic MoU with Just Auto India Pvt. Ltd. to launch industry-aligned training programs in Automobile and Electric Vehicle (EV) technologies. Through this collaboration, both institutions will offer co-branded courses in Car Mechanic, Car Electrician, and EV 2/3/4-Wheeler Service, supported by world-class training facilities, joint certification, internships, and placement opportunities. The event was graced by senior dignitaries from AKGEC, Just Auto, and ASDC, marking a significant step toward developing a skilled, EV-ready workforce for the future of mobility.",
                image: "/image/skill-foundation/bosch-jcc/glimpse-of-event-ws/akgec-signs-strategic-mou-with-justauto-india-pvt-ltd.webp"
            },
            {
                id: "3",
                title: "AACAR 10.0 – Race Car Vehicle Design Workshop",
                description: "A 2-day hands-on workshop, “AACAR 10.0,” was conducted for Mechanical, Electrical, and Electronics students across Delhi NCR held on 6th & 7th September 2025, focusing on core principles of race car vehicle design. Over 175 students participated, gaining practical exposure to performance engineering, system integration, and real-world motorsport design techniques.",
                image: "/image/skill-foundation/bosch-jcc/glimpse-of-event-ws/aacar-10-race-car-vehicle-design-workshop.webp"
            },
            {
                id: "4",
                title: "Automotive Skill Development Council (ASDC) Expert Group Meeting",
                description: "The Automotive Skill Development Council (ASDC) Expert Group Meeting on 10th June’ 2025 brought together leading industry professionals from major automotive companies to discuss the future roadmap of the automobile sector and its after-sales services. The session focused on emerging technologies, skill requirements, and industry expectations, reinforcing the collective commitment to building a more advanced and service-ready automotive ecosystem.",
                image: "/image/skill-foundation/bosch-jcc/glimpse-of-event-ws/automotive-skill-development-council-asdc-expert-group-meeting.webp"
            },
            {
                id: "5",
                title: "AKGEC Hosts Finale of National Automobile Olympiad 2023",
                description: "AKGEC proudly hosted the finale of the National Automobile Olympiad 2023, jointly organized by ASDC and CBSE. The event brought together young automotive talent to learn, explore, and compete in practical skill-based challenges. Inspiring sessions and interactive engagements encouraged innovation, curiosity, and hands-on learning. The Olympiad reinforces AKGEC’s commitment to nurturing future-ready engineers and strengthening India’s skill ecosystem.",
                image: "/image/skill-foundation/bosch-jcc/glimpse-of-event-ws/akgec-hosts-finale-of-national-automobile-olympiad-2023.webp"
            }
        ]
    },
    awards: {
        title: "Awards & Recognition",
        items: []
    },
    programs: {
        title: "Programs Offered",
        description: "The Centre offers the following training programs for industry professionals and engineering students of all disciplines. On successful completion of training, participants are assessed for their learning & skills and awarded with a globally recognized joint certification from AKGEC & BOSCH.",
        items: [
            { text: "Industrial Training Program on Automotive Technicians — (160 Hrs)", pdf: "/pdf/skill-foundation/bosch-jcc/industrial-training-program-on-automotive-technicians.pdf" },
            { text: "Industrial Training Program on Race Car Vehicle Design— (160 Hrs)", pdf: "/pdf/skill-foundation/bosch-jcc/industrial-training-program-on-race-car-vehicle-design.pdf" },
            { text: "Short Term Training Program on Automotive Technology— (40 Hrs)", pdf: "/pdf/skill-foundation/bosch-jcc/short-term-training-program-on-automotive-technology.pdf" },
            { text: "Winter Training Program on Automotive Technology— (80 Hrs)", pdf: "/pdf/skill-foundation/bosch-jcc/winter-training-program-on-automotive-technology.pdf" }
        ]
    },
    upcoming: {
        title: "Upcoming Programs",
        description: "The BOSCH JCC is offering an 80-hour Winter Training Program in Automotive Technology for B.Tech Students and a Short Term Training Program in Automotive Technology for Diploma/ ITI students, scheduled for January 2026 and February 2025. The program culminates in a globally recognized joint certification awarded by BOSCH and AKGEC.",
        contactEmail: "boschjcc@akgec.ac.in",
        contactPhone: "+91-88518057766",
        table: [
            {
                title: "Winter Training Program (WTP) - Automotive Technology",
                duration: "80 Hours",
                fee: "₹ 7,000",
                coordinator: "Mr Vikram Singh",
                contact: "boschjcc@akgec.ac.in/ +91-88518057766",
                pdf: "/pdf/skill-foundation/bosch-jcc/upcoming-winter-training-program-on-automotive-technology.pdf"
            },
            {
                title: "Industrial Training Program (ITP) for Diploma/ ITI - Automotive Technician",
                duration: "40 Hours",
                fee: "₹ 5,000",
                coordinator: "Mr. J S Sirohi",
                contact: "boschjcc@akgec.ac.in/ +91-9999972391",
                pdf: "/pdf/skill-foundation/bosch-jcc/upcoming-industrial-training-program-on-automotive-technicians.pdf"
            }
        ]
    },
    contact: {
        address: "AKGEC Campus: 27th KM Milestone, Delhi-Meerut Expressway, Adhyatmik Nagar, Ghaziabad, Uttar Pradesh-201015",
        email: "boschjcc@akgec.ac.in",
        phones: ["+91-8851805766", "9999972391"]
    }
};

const SkillFoundationDetails = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header
                title="Centre of Excellence"
                subHeading="Empowering engineers with next-generation automotive technologies and skills."
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
                {boschData.events.items.length > 0 ? (
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
                ) : null}

                {/* Awards Section */}
                {boschData.awards.items.length > 0 ? (
                    <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-20">
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
                    </section>
                ) : null}

                {/* Programs Offered */}
                <section className="bg-brand-blue text-white py-20 mb-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-novaBold mb-6">{boschData.programs.title}</h2>
                            <p className="max-w-3xl mx-auto text-blue-100 font-novaReg text-lg">{boschData.programs.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {boschData.programs.items.map((program, idx) => (
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
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Brochure</th>
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
