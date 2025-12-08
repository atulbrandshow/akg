"use client";
import React, { useState } from "react";

const RecognitionApprovals = () => {
    const [selectedRecognition, setSelectedRecognition] = useState("naac");

    const recognitionsData = [
        {
            id: "naac",
            title: "NAAC Accreditation",
            description:
                "A++ Grade (Highest grade in Uttar Pradesh)",
            imgSrc: "/image/NaaC.webp",
        },
        {
            id: "nba",
            title: "NBA Accreditation",
            description:
                "Five B.Tech. branches in CSE, ECE, EN, IT & ME are accredited for the period of three year w.e.f. academic year 2022-23 To 2024-25.",
            imgSrc: "/image/nba.jpg",
        },
        {
            id: "aicte",
            title: "AICTE Approval",
            description:
                "Engineering and Technology Programs approved for Academic Year 2025–26",
            imgSrc: "/image/recognitions-and-approvals/AICTE.png",
        },
        // {
        //     id: "aktu",
        //     title: "AKTU Affiliation",
        //     description: "Affiliation letter by AKTU for the academic year 2024-25 to 2026-27 granted vide AKTU letter no. AKTU/RO/AS/2024/3319 dated 26-July-2024 addressed to the Director, Ajay Kumar Garg Engineering College.",
        //     imgSrc: "/image/recognitions-and-approvals/AKTU.png",
        // },
    ];

    const handleRecognitionClick = (recognition) => {
        setSelectedRecognition(recognition.id);
    };

    const selectedDescription = recognitionsData.find((item) => item.id === selectedRecognition).description;

    return (
        <>
            <div className="relative bg-BG44 w-full h-[500px] bg-center bg-cover bg-no-repeat">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent " />
                <div className="relative max-w-[1400px] mx-auto h-full px-3 items-end flex justify-between">
                    <div className="text-white">
                        <h2 className="text-4xl font-novaReg">
                            Approvals by <br />
                            Statutory Bodies
                        </h2>
                    </div>
                </div>
            </div>
            <div className="relative h-[450px] bg-BG17 sm:h-[500px] lg:h-[550px] xl:h-[600px] w-full bg-no-repeat bg-cover bg-center overflow-hidden group">
                {/* Fixed: Stronger overlay for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70 backdrop-blur-md" />

                {/* Floating geometric elements */}
                <div className="absolute top-20 right-10 w-24 h-24 border-2 border-yellow-400/30 rounded-2xl -rotate-12 animate-pulse opacity-30 lg:opacity-50" />
                <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full backdrop-blur-sm shadow-xl" />

                {/* Content Container */}
                <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex items-center lg:items-start">
                    <div className="max-w-2xl w-full space-y-8 lg:space-y-10">

                        {/* Fixed: High contrast badge */}
                        <div className="relative inline-flex items-center px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl shadow-2xl shadow-yellow-500/50 backdrop-blur-sm border-4 border-white/30 group/cutout hover:scale-[1.02] transition-all duration-500 hover:shadow-yellow-500/70">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 -skew-x-3 rounded-3xl blur-sm" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/60 to-orange-400/60 rounded-[30px] blur opacity-75 group-hover/cutout:opacity-100 transition-opacity" />

                            <div className="relative flex items-center gap-3">
                                <div className="w-3 h-3 bg-white rounded-full animate-ping" />
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-2xl tracking-tight font-novaReg leading-tight">
                                    NAAC A++
                                </h2>
                                <div className="w-12 h-px bg-white/80" />
                            </div>
                        </div>

                        {/* Fixed: Pure white text with shadows */}
                        <div className="space-y-4">
                            <p className="text-lg sm:text-xl lg:text-2xl xl:text-2.5xl text-white font-medium leading-relaxed font-novaReg max-w-lg lg:max-w-xl tracking-wide drop-shadow-lg shadow-black/50">
                                AKG University is a fully established institution under the UP State Legislature and is recognized by the{' '}
                                <span className="text-yellow-300 font-bold drop-shadow-md">University Grants Commission (UGC)</span> under Section 2(f)
                                of the UGC Act, 1956. The university holds the prestigious{' '}
                                <span className="text-yellow-200 font-bold text-2xl drop-shadow-2xl">NAAC A++ accreditation</span>,
                                placing it among the top engineering colleges in Uttar Pradesh.
                            </p>
                        </div>

                        {/* Fixed: High contrast buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
                            <button className="group relative px-8 py-4 sm:px-10 sm:py-4 bg-white backdrop-blur-md border-2 border-white/50 rounded-2xl text-black font-bold text-base sm:text-lg font-novaBold uppercase tracking-wider hover:bg-yellow-400 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-2xl shadow-black/30">
                                <span className="relative z-10 flex items-center gap-2">
                                    View More
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>

                            <button className="px-8 py-4 sm:px-10 sm:py-4 text-white font-semibold text-base sm:text-lg font-novaBold uppercase tracking-wider border-2 border-white/50 rounded-2xl backdrop-blur-md hover:bg-white/20 hover:shadow-2xl shadow-lg shadow-black/30 transition-all duration-300">
                                Our Achievements →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll hint */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-80 z-30">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1 shadow-lg">
                        <div className="w-1 h-3 bg-white rounded-full animate-bounce [animation-duration:1.5s]" />
                    </div>
                </div>
            </div>




            <section className="py-20 bg-gradient-to-b from-blue-50/50 via-white to-yellow-50/30"
                style={{
                    backgroundImage: `
    url('/image/main-logo.png'),
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)
  `,
                    // contain for SVG
                    backgroundSize: '',
                    backgroundPosition: 'right top, 0 0, 100% 100%',     // ✅ Horizontally centered, TOP aligned
                    backgroundRepeat: 'no-repeat, repeat, repeat'
                }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start">

                        {/* Sidebar - Recognition Cards */}
                        <div className="xl:col-span-4 order-2 xl:order-1">

                            <div className="space-y-4">
                                {recognitionsData.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleRecognitionClick(item)}
                                        className={`
            group relative w-full p-6 md:p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer overflow-hidden hover:shadow-lg
            ${selectedRecognition === item.id
                                                ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200/50 scale-[1.02]'
                                                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                                            }
          `}
                                    >
                                        <div className="flex items-start gap-4 relative z-10">
                                            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-md ring-1 ring-gray-200/50 group-hover:ring-blue-300/70 transition-all bg-white group-hover:shadow-lg">
                                                <img
                                                    src={item.imgSrc}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0 pt-1">
                                                <h4 className="font-semibold text-base md:text-lg text-slate-900 group-hover:text-blue-700 mb-2 leading-tight">
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed line-clamp-2">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                        {selectedRecognition === item.id && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-2xl" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="xl:col-span-8 order-1 xl:order-2">

                            {/* Selected Recognition Details */}
                            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200/50 mb-12 hover:shadow-md transition-shadow">
                                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                    {recognitionsData.find((item) => item.id === selectedRecognition)?.title}
                                </h3>
                                <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 lg:p-8 rounded-xl border-l-4 border-blue-500 mb-8">
                                    <p className="text-lg lg:text-xl text-slate-700 leading-relaxed">
                                        {selectedDescription}
                                    </p>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-12">
                                <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-8 p-8 lg:p-12">

                                    {/* Image */}
                                    <div className="col-span-1 lg:col-span-3 row-span-1">
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <img
                                                src="/image/top-nav.jpg"
                                                alt="Campus Excellence"
                                                className="w-full h-48 lg:h-64 rounded-xl object-cover shadow-md hover:shadow-lg transition-shadow group-hover:scale-[1.02] duration-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="col-span-1 lg:col-span-4 lg:col-start-4">
                                        <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Get in Touch</h4>
                                        <p className="text-lg text-slate-700 mb-8 opacity-90 leading-relaxed">
                                            For any information regarding accreditations and approvals:
                                        </p>

                                        <div className="grid grid-cols-1 gap-4 md:gap-5">
                                            <div className="group flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all border border-blue-100/50 hover:border-blue-200">
                                                <div className="w-12 h-12 flex-shrink-0 mt-1 bg-blue-100 rounded-lg flex items-center justify-center shadow-sm">
                                                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>
                                                </div>
                                                <div className="min-w-0">
                                                    <span className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1">Accreditation Cell</span>
                                                    <a href="tel:+917290034978" className="font-bold text-lg text-slate-900 hover:text-blue-600 transition-colors block">
                                                        +91-7290034978
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="group flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all border border-blue-100/50 hover:border-blue-200">
                                                <div className="w-12 h-12 flex-shrink-0 mt-1 bg-blue-100 rounded-lg flex items-center justify-center shadow-sm">
                                                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="min-w-0">
                                                    <span className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1">Mobile</span>
                                                    <a href="tel:+917290034978" className="font-bold text-lg text-slate-900 hover:text-blue-600 transition-colors block">
                                                        +91-7290034978
                                                    </a>
                                                    <span className="text-sm text-slate-600 ml-1">+91-8744052891-93</span>
                                                </div>
                                            </div>

                                            <div className="group flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all border border-blue-100/50 hover:border-blue-200">
                                                <div className="w-12 h-12 flex-shrink-0 mt-1 bg-blue-100 rounded-lg flex items-center justify-center shadow-sm">
                                                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>
                                                </div>
                                                <div className="min-w-0">
                                                    <span className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1">Toll Free</span>
                                                    <a href="tel:18002000777" className="font-bold text-lg text-slate-900 hover:text-blue-600 transition-colors block">
                                                        1800-200-0777
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="group flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all border border-blue-100/50 hover:border-blue-200">
                                                <div className="w-12 h-12 flex-shrink-0 mt-1 bg-blue-100 rounded-lg flex items-center justify-center shadow-sm">
                                                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                    </svg>
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <span className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1">Email</span>
                                                    <a href="mailto:accreditation@akgec.ac.in" className="font-bold text-lg text-slate-900 hover:text-blue-600 transition-colors block truncate">
                                                        accreditation@akgec.ac.in
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Final CTA (YELLOW + BLUE + WHITE) */}
                    <div className="text-center my-20 py-16 px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="group relative bg-white border-4 border-blue-100 shadow-xl rounded-3xl p-12 lg:p-16 backdrop-blur-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-2 mx-auto max-w-5xl">

                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-yellow-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/25 group-hover:scale-110 transition-all duration-500 ring-4 ring-white ring-opacity-50">
                                    <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zM12.962 2.144a2.066 2.066 0 00-1.2.468 2.066 2.066 0 00-.481 1.2c.029.151.051.303.076.45a11.96 11.96 0 000 2.694 2.066 2.066 0 00.481 1.2 2.066 2.066 0 001.2.468 2.066 2.066 0 001.193-.431 2.066 2.066 0 00.466-1.192 11.96 11.96 0 000-2.696 2.066 2.066 0 00-.466-1.192 2.066 2.066 0 00-1.193-.468zm-6.924 10.712a2.066 2.066 0 00-1.2-.468 2.066 2.066 0 00-1.193.431 2.066 2.066 0 00-.466 1.192 11.96 11.96 0 000 2.696 2.066 2.066 0 00.466 1.192 2.066 2.066 0 001.193.468 2.066 2.066 0 001.2-.468 2.066 2.066 0 00.481-1.2 11.96 11.96 0 000-2.694 2.066 2.066 0 00-.481-1.2zm10.689-4.222a2.066 2.066 0 00-1.2.468 2.066 2.066 0 00-.481 1.2c.029.151.051.303.076.45a11.96 11.96 0 010 2.694 2.066 2.066 0 00.481 1.2 2.066 2.066 0 001.2.468 2.066 2.066 0 001.193-.431 2.066 2.066 0 00.466-1.192 11.96 11.96 0 000-2.696 2.066 2.066 0 00-.466-1.192 2.066 2.066 0 00-1.193-.468z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                {/* Main Text */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-tight px-4">
                                        Institutional Excellence
                                    </h3>
                                    <p className="text-lg lg:text-xl text-slate-700 font-semibold leading-relaxed max-w-3xl mx-auto px-6">
                                        These accreditations and approvals reflect our supreme standing in technical and professional education, validated by India's most prestigious statutory bodies.
                                    </p>
                                </div>

                                {/* Subtle accent line */}
                                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </>
    );
};

export default RecognitionApprovals;
