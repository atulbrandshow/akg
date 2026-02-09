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
    TrendingUp,
    Scan,
    Ruler,
    Tool
} from "lucide-react";

// Data Structure
const zeissData = {
    title: "AKGEC-ZEISS Industrial Metrology Centre",
    description: [
        "AKGEC Skills Foundation Calibration & Testing Centre (ASF-CTC) is an NABL Accredited Facility established in collaboration with M/s CARL ZEISS INDIA to meet the Dimensional Metrology requirements of the Industry.",
        "The Centre is equipped with state of art Precision Measurement & Metrology Equipment and is committed to provide reliable, suitable, accurate, impartial and prompt calibration & dimensional measurements which are typically found only in high-end manufacturing plants like automotive or aerospace sectors."
    ],
    infrastructure: {
        title: "Infrastructure at Zeiss Calibration CoE",
        items: [
            {
                id: "1",
                title: "Coordinate Measuring Machine (CMM)",
                description: "ZEISS CMM Contura G2 used for precise 3D measurement of complex geometric components. The Coordinate Measuring Machine (CMM) together with Zeiss Calypso software is a quality control device used in manufacturing sectors to measure the physical, geometric characteristics of an object precisely within the accuracy of 1.8 µm. It works by moving a probe along three principal axes (X, Y, and Z) in a 3D Cartesian coordinate system.",
                icon: Crosshair,
                image: "/image/skill-foundation/akg-zeiss/infrastructure/coordinate-measuring-machine-cmm.webp"
            },
            {
                id: "2",
                title: "Surface Roughness Tester",
                description: "A roughness tester ZEISS SURFCOM FLEX equipped is a precision instrument used in manufacturing and quality control to quantify the texture of a material's surface. It typically uses a stylus that traces the surface, recording the microscopic peaks and valleys (irregularities) using Acctee software to calculate parameters like average roughness Ra, Rz and Rmax with accuracy of 0.3 µm.",
                icon: Activity,
                image: "/image/skill-foundation/akg-zeiss/infrastructure/surface-roughness-tester.webp"
            },
            {
                id: "3",
                title: "Contour Measuring Machine",
                description: "ZEISS Contour Measuring Machine SURFCOM NEX is used to measure the 2D form and geometry (contours) of manufactured parts. It uses a fine stylus or probe to mechanically trace the surface profile, recording X and Z coordinates with high accuracy of 1.0 µm. The collected data is then compared to a nominal design using Acctee software to analyze features like angles, radii, and champers, ensuring components meet strict quality and tolerance requirements.",
                icon: TrendingUp,
                image: "/image/skill-foundation/akg-zeiss/infrastructure/contour-measuring-machine.webp"
            },
            {
                id: "4",
                title: "Reverse Engineering Setup",
                description: "ZEISS COMET L3D & ARTEC EVA-M used for Reverse Engineering - scanning a physical object to Create a 3D CAD Model. These devices capture the three-dimensional shape of a physical object, collecting millions of data points (a point cloud). It uses technologies like lasers or structured light to create an accurate digital 3D model for applications such as quality inspection and reverse engineering.",
                icon: Scan,
                image: "/image/skill-foundation/akg-zeiss/infrastructure/reverse-engineering-setup.webp"
            },
            {
                id: "5",
                title: "Vision Measuring Systems",
                description: "BANBROS VMM Optical systems for non-contact measurement of delicate or small parts with high-resolution camera and optics to capture and analyze magnified images of a part. Specialized software uses automatic edge detection to precisely measure 2D and 3D features, making it ideal for fast, accurate inspection of delicate or small components.",
                icon: Eye,
                image: "/image/skill-foundation/akg-zeiss/infrastructure/vision-measuring-systems.webp"
            },
            {
                id: "6",
                title: "Universal Length Measuring Machine",
                description: "ULMM (OCTAGON LMM SILVER), a high-precision instrument used primarily in calibration laboratories to accurately measure and calibrate the dimensions of gauges like plug and ring gauges and precision components using the software ULM Inspect. Following the Abbe principle for accuracy, it measures both internal and external dimensions with exceptionally low uncertainty.",
                icon: Ruler,
                image: "/image/skill-foundation/akg-zeiss/infrastructure/universal-length-measuring-machine.webp"
            },
            {
                id: "7",
                title: "Basic Measurement Instruments",
                description: "Besides all the precision instruments, basic measuring instruments & gauges such as Vernier Calipers, Micrometers, Angle Gauges, Slip Gauges, height gauge etc. are available in the centre which are used to calibrate or test different types of instruments and components.",
                icon: Tool,
                image: "/image/skill-foundation/akg-zeiss/infrastructure/basic-measurement-instruments.webp"
            }
        ]
    },
    events: {
        title: "Glimpse of the Events/Workshops",
        items: [
            {
                id: "1",
                title: "Training Program on “Metrology & Quality Control in Manufacturing”",
                description: "Final year B.Tech students at AKGEC successfully completed a comprehensive 40-hour training program on “Metrology & Quality Control in Manufacturing.” Designed to bridge the gap between academic theory and industrial application, the course provided hands-on experience with precision instruments like CMM, VMM, ULMM, micrometers, slip gauges, and dial indicators. This initiative significantly enhanced students' technical expertise and readiness for modern quality assurance roles.",
                image: "/image/skill-foundation/akg-zeiss/events/training-program-metrology-quality-control.webp"
            },
            {
                id: "2",
                title: "Corporate Training on “Metrology & Uncertainty of Measurement”",
                description: "The Calibration Centre organized a specialized Corporate Training on “Advanced Metrology & Measurement Uncertainty.” The session saw active participation from distinguished organizations, including Ramco Steel, India Steel, Deno India, and DU. Focusing on ISO/IEC 17025 standards and precision calibration, the program upskilled delegates in minimizing measurement errors, enhancing their capability to ensure strict quality assurance and reliability in their respective industries.",
                image: "/image/skill-foundation/akg-zeiss/events/corporate-training-metrology-uncertainty.webp"
            },
            {
                id: "3",
                title: "Workshop for the students of Sarvoday Pvt. ITI. Organised by Zeiss Calibration CoE",
                description: "The Calibration Centre conducted a specialized One-Day Workshop for the students of Sarvoday Pvt. ITI. Designed to enhance technical competency, the session covered the fundamentals of Metrology and Calibration, offering hands-on training with precision instruments such as Vernier Calipers, Micrometers, and Dial Indicators. The initiative focused on bridging the gap between classroom theory and industrial application, preparing the future workforce for critical roles in quality control and measurement.",
                image: "/image/skill-foundation/akg-zeiss/events/workshop-sarvoday-pvt-iti.webp"
            }
        ]
    },
    awards: {
        title: "Awards & Recognition",
        items: [
            {
                text: "The Zeiss-Calibration CoE has achieved a significant milestone by securing NABL Accreditation (ISO/IEC 17025). This prestigious recognition validates the laboratory’s technical competence, operational impartiality, and adherence to global quality standards. It stands as a testament to our unwavering commitment to precision and excellence, establishing the centre as a trusted and authorized entity for industrial calibration and measurement services.",
                image: "/image/SkillFoundationImage/skill-foundation1.jpeg"
            }
        ]
    },
    programs: {
        title: "Programs Offered",
        description: "The Centre offers the following training programs for industry professionals and engineering students of all disciplines. On successful completion of training, participants are assessed for their learning & skills and awarded with a globally recognized joint certification from AKGEC & CARL ZEISS.",
        items: [
            { text: "Training Program on “Metrology & Quality Control in Manufacturing” - (40 Hrs)", brochure: "/image/skill-foundation/akg-zeiss/programs-offered/training-program-metrology-quality-control.docx" },
            { text: "Professional Training Program on “CMM & Dimensional Metrology”-  (40 Hrs)", brochure: "/image/skill-foundation/akg-zeiss/programs-offered/professional-training-cmm-dimensional-metrology.docx" }
        ]
    },
    upcoming: {
        title: "Upcoming Programs",
        description: "The ZEISS Calibration Centre of Excellence is offering a 40-hours Winter Training Program in Metrology & Quality Control in Manufacturing and CMM & Dimensional Metrology for undergraduate, post-graduate, diploma students, QC inspector and Technicians, and the professionals associated with production, and testing labs, are scheduled for December 2025 and January 2026. The program culminates in a globally recognized joint certification awarded by ZEISS Calibration and AKGEC.",
        contactEmail: "asfctc@akgec.ac.in",
        contactPhone: "+91-95409 35533",
        table: [
            {
                title: "Winter Training Program on “Metrology & Quality Control in Manufacturing”",
                duration: "40 Hours",
                fee: "₹ 6,000",
                coordinator: "Dr. Namrata Gangil",
                contact: "asfctc@akgec.ac.in / +91-95409 35533",
                brochure: "/image/skill-foundation/akg-zeiss/upcoming-programs/winter-training-metrology-quality-control.docx"
            },
            {
                title: "Winter Training Program on CMM & Dimensional Metrology",
                duration: "40 Hours",
                fee: "₹ 6,000",
                coordinator: "Dr. Namrata Gangil",
                contact: "asfctc@akgec.ac.in / +91-95409 35533",
                brochure: "/image/skill-foundation/akg-zeiss/upcoming-programs/winter-training-cmm-dimensional-metrology.docx"
            }
        ]
    },
    contact: {
        address: "AKGEC Campus: 27th KM Milestone, Delhi-Meerut Expressway, Adhyatmik Nagar, Ghaziabad, Uttar Pradesh-201015",
        email: "asfctc@akgec.ac.in",
        phones: ["+91-95409 35533", "8743879879"]
    }
};

const SkillFoundationDetails = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header
                title="Centre of Excellence"
                subHeading="Delivering precision measurement and NABL-accredited calibration services."
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
                                    <Crosshair size={40} />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-5xl font-novaBold text-gray-900 leading-tight">
                                        {zeissData.title}
                                    </h1>
                                    <div className="h-1.5 w-24 bg-brand-yellow mt-4 rounded-full"></div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 font-novaReg leading-relaxed">
                                {zeissData.description.map((para, i) => (
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
                            {zeissData.infrastructure.title}
                        </motion.h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 justify-center">
                        {zeissData.infrastructure.items.map((item, index) => {
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{zeissData.events.title}</h2>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {zeissData.events.items.map((event, idx) => (
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{zeissData.awards.title}</h2>
                        <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {zeissData.awards.items.map((award, idx) => (
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
                            <h2 className="text-3xl md:text-4xl font-novaBold mb-6">{zeissData.programs.title}</h2>
                            <p className="max-w-3xl mx-auto text-blue-100 font-novaReg text-lg">{zeissData.programs.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                            {zeissData.programs.items.map((program, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-2">
                                        <BookOpen className="text-brand-yellow" size={20} />
                                        <h4 className="font-novaBold text-lg">Program {idx + 1}</h4>
                                    </div>
                                    <p className="text-blue-50 font-novaReg mb-4 flex-grow">{program.text}</p>
                                    {program.brochure && (
                                        <a
                                            href={program.brochure}
                                            download
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
                        <h2 className="text-3xl md:text-4xl font-novaBold text-gray-900 mb-4">{zeissData.upcoming.title}</h2>
                        <p className="text-gray-600 font-novaReg text-lg mb-8">{zeissData.upcoming.description}</p>

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
                                    {zeissData.upcoming.table.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-gray-800 font-medium">{row.title}</td>
                                            <td className="py-4 px-6 text-gray-600">{row.duration}</td>
                                            <td className="py-4 px-6 text-gray-600">{row.fee}</td>
                                            <td className="py-4 px-6 text-gray-600">{row.coordinator}</td>
                                            <td className="py-4 px-6 text-gray-600 text-sm">{row.contact}</td>
                                            <td className="py-4 px-6">
                                                {row.brochure ? (
                                                    <a
                                                        href={row.brochure}
                                                        download
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
                                    <p className="text-gray-300 text-lg leading-relaxed">{zeissData.contact.address}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-5">
                                        <Mail className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <a href={`mailto:${zeissData.contact.email}`} className="text-gray-300 text-lg hover:text-white transition-colors">{zeissData.contact.email}</a>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <Phone className="text-brand-yellow shrink-0 mt-1" size={24} />
                                        <div className="text-gray-300 text-lg leading-relaxed">
                                            {zeissData.contact.phones.join(" / ")}
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
