"use client";

import { useState } from "react";
import { programFeatures, recruitmentPartners, sectionData } from "@/Json/OverviewData";
import { motion } from "framer-motion";

export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);

    const logos = Array.from({ length: 10 }, (_, i) => `/image/company-logos/logo${i + 1}.jpg`);
    return (
        <div className="about-page-container">
            {/* Section 1 */}
            <section className="relative w-full h-full">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/image/building/building2.webp')",
                    }}
                ></div>

                {/* Overlay with Opacity */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Center Box */}
                <div className="pt-24 pb-5 sm:pt-32 sm:pb-10 lg:pt-52 lg:pb-16 relative max-w-7xl mx-auto flex items-center justify-start max-sm:justify-center h-full px-4 max-sm:px-0 max-lg:items-end max-xl:items-end">
                    <div className="bg-white shadow-lg rounded-lg w-[90%] max-w-md h-[600px] flex flex-col items-center justify-center px-10 max-sm:px-6" style={{ fontFamily: "Arial, sans-serif" }}>
                        {/* Heading */}
                        <h1 className="text-3xl max-sm:text-2xl font-novaSemi uppercase tracking-wide text-center mb-4">
                            Top University <span className="text-green-500">for Students</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-500 text-base sm:text-lg mb-6 text-center" style={{ fontFamily: "font-novareg" }}>
                            Ajay Kumar Garg University (AKGU) is a full-fledged University affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow. It is approved by the All India Council for Technical Education (AICTE)
                            and recognized for its right to offer undergraduate and postgraduate degrees in engineering and technology.
                        </p>

                        {/* Button */}
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-[#d91f23] hover:bg-blue-700 text-white font-bold text-sm py-3 px-6 rounded focus:outline-none focus:shadow-outline">
                            READ MORE
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <motion.section className="relative w-full min-h-screen" style={{ overflow: "hidden" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/image/building/building3.webp')",
                    }}
                ></div>

                {/* Overlay with Opacity */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Content Area */}
                <div className="relative z-10 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-evenly w-full min-h-screen px-6 lg:px-20 py-10 gap-10">
                    {/* Left Box - Bullet List */}
                    <motion.div className="bg-[#56397d] shadow-md rounded-lg w-full lg:w-[45%] p-6 text-left overflow-hidden" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <ul className="list-disc pl-5 text-white text-[13px] space-y-2 text-justify">
                            <li>AKGU, Ghaziabad, is affiliated with Dr. A.P.J. Abdul Kalam Technical University, Lucknow, and approved by the AICTE.</li>
                            <li>
                                Established in 1998, the college offers B.Tech courses in nine engineering disciplines, including Computer Science, AI & ML, Electronics, Mechanical, and Civil Engineering. Some programs are accredited by
                                NBA.
                            </li>
                            <li>The college offers M.Tech in several disciplines, including Electronics, Computer Science, Electrical, and Mechanical Engineering, along with an MCA program.</li>
                            <li>
                                AKGU has received multiple accolades for academic performance, including the Academic Excellence Award for the Best Engineering College in UPTU for two consecutive years and the Chancellor’s Award for the
                                highest B.Tech marks for five consecutive years.
                            </li>
                            <li>The 40-acre campus includes state-of-the-art laboratories, classrooms, a central library with over 100,000 books, and computing facilities with over 1400 networked computers.</li>
                            <li>The campus includes Wi-Fi-enabled hostels with facilities like a library, gymnasium, and sports facilities for over 1500 students.</li>
                            <li>The college is led by distinguished faculty and administrators, including the Director General, Dr. R.K. Agarwal, with qualifications from IIT Kanpur, C.I.T. Cranfield, UK, and IISc Bangalore.</li>
                            <li>AKGU emphasizes industry collaboration, with partnerships for student training, consultancy projects, and research in emerging technologies like Automation and Robotics.</li>
                            <li>AKGU maintains transparent policies and systems, setting high standards and goals in all its activities.</li>
                        </ul>
                    </motion.div>

                    {/* Right Box - Heading and Description */}
                    <motion.div
                        className="bg-white shadow-lg rounded-lg w-full lg:w-[30%] p-8 flex flex-col items-center justify-center text-center"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl lg:text-3xl sm:text-2xl font-normal tracking-wide mb-6">About AKG University</h1>
                        <p className="text-gray-500 font-novaReg">
                            Ajay Kumar Garg University (AKGU), Ghaziabad is affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow, and is approved by the All India Council for Technical Education. The college was established in
                            1998 and offers B.Tech courses in nine disciplines of Engineering namely Computer Science and Engineering, Information Technology, Computer Science, Computer Science & Information Technology, Computer Science and
                            Engineering (Artificial Intelligence & Machine Learning), Computer Science and Engineering (Data Science), Computer Science and Engineering (Hindi), Artificial Intelligence & Machine Learning, Electronics and
                            Communication Engineering, Electrical and Electronics Engineering, Mechanical Engineering and Civil Engineering.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section className="relative w-full min-h-screen" style={{ overflow: "hidden" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/image/building/building4.webp')",
                    }}
                ></div>

                {/* Overlay with Opacity */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Content Area */}
                <div className="relative z-10 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between w-full min-h-screen px-6 lg:px-20 py-10 gap-10">
                    {/* Left Box - Logos */}
                    <motion.div className="w-full lg:w-[50%] flex flex-col items-center justify-center" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        {/* Circular Layout Container (Visible on Larger Screens) */}
                        <div className="hidden lg:flex relative items-center justify-center h-[600px]">
                            {/* Center Logo */}
                            <div
                                className="absolute bg-white rounded-full flex items-center justify-center"
                                style={{
                                    width: "160px",
                                    height: "160px", // Explicitly set the size of the div
                                    zIndex: 20, // Ensure it is above surrounding logos
                                }}
                            >
                                <img
                                    src="/image/AKG_LOGO.PNG"
                                    alt="Center Logo"
                                    className="w-36 h-36 object-contain" // Ensure the logo fits within the div
                                />
                            </div>

                            {/* Surrounding Logos */}
                            {logos?.map((logo, index) => {
                                const angle = (index / logos.length) * 2 * Math.PI;
                                const radius = 240; // Distance from center
                                const x = radius * Math.cos(angle);
                                const y = radius * Math.sin(angle);

                                return (
                                    <div
                                        key={index}
                                        className="absolute bg-white rounded-full flex items-center justify-center"
                                        style={{
                                            width: "120px",
                                            height: "120px",
                                            transform: `translate(${x}px, ${y}px)`,
                                            zIndex: 10, // Lower than the center logo
                                        }}
                                    >
                                        <img src={logo} alt={`Logo ${index + 1}`} className="w-20 h-20 object-contain" />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Grid Layout (Visible on Smaller Screens) */}
                        <div className="grid mt-10 grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:hidden">
                            {logos?.map((logo, index) => (
                                <div key={index} className="w-24 h-24 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center">
                                    <img src={logo} alt={`Logo ${index + 1}`} className="w-16 h-16 sm:w-14 sm:h-14 object-contain" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Box - Heading, Description, Button */}
                    <motion.div
                        className="w-full lg:w-[30%] xl:w-[40%] bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl sm:text-3xl font-normal tracking-wide mb-6">AKG University</h1>
                        <p className="text-gray-500 text-sm sm:text-base mb-5">Ajay Kumar Garg University (AKGU) is recognized and actively participates as a member of various professional associations.</p>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-[#d91f23] hover:bg-blue-700 text-white font-bold text-sm py-3 px-6 rounded focus:outline-none">
                            READ MORE
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section className="relative w-full min-h-screen flex items-center justify-center" style={{ overflow: "hidden" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                {/* Background Image with Opacity Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/image/building/building10.webp')",
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>

                {/* Container for Flex Layout */}
                <div className="lg:flex lg:w-full w-full relative z-10 flex-col lg:flex-row lg:gap-x-10">
                    {/* Left Box (Leading Academic Institution) */}
                    <div className="lg:w-1/2 w-full flex items-center justify-center relative z-10 p-10 lg:mx-40">
                        <div className="bg-white shadow-lg p-8 flex flex-col items-center justify-center">
                            <h1 className="text-4xl sm:text-3xl max-sm:text-2xl font-normal text-center mb-10">Leading Academic Institution</h1>
                            <p className="mb-5 text-center text-sm">
                                Ajay Kumar Garg University (AKGU) is ranked among the leading and best educational institutions in North India. AKGU consistently ranks among the top university in Uttar Pradesh for its academic excellence,
                                innovative teaching methods, research achievements, and placement records, as recognized by national and international accreditation bodies and media outlets.
                            </p>
                            <p className="text-center text-sm">
                                Ajay Kumar Garg University (AKGU) has established itself as a leader in campus placements. The repeated visits by top-tier multinational companies underscore AKGU's reputation as a premier institution with
                                exceptional placement opportunities in India.
                            </p>
                            <button className="bg-[#d91f23] mt-5 hover:bg-blue-700 text-white font-bold text-sm py-3 px-6 rounded focus:outline-none focus:shadow-outline">READ MORE</button>
                        </div>
                    </div>

                    {/* Right Box (Program Features) */}
                    <div className="lg:w-full w-full flex justify-center items-center relative z-10 mb-10 lg:mb-0">
                        <div className="h-64 max-sm:h-44 w-[99%] max-xl:w-full relative z-10 max-xl:flex max-xl:justify-center max-xl:items-center">
                            <div className="w-1/2 max-xl:w-1/2 max-sm:w-full max-sm:mx-3 h-full bg-white flex rounded-lg shadow-lg">
                                {/* Text Section */}
                                <div className="text-center text-[14px] font-serif flex flex-col w-1/2 border-r border-gray-300">
                                    {programFeatures?.map((item, index) => (
                                        <a
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                            className={`flex-1 flex max-sm:text-xs items-center justify-center px-5 cursor-pointer ${activeIndex === index ? "bg-yellow-700" : ""} border-b border-gray-300 last:border-0`}
                                        >
                                            {item.text}
                                        </a>
                                    ))}
                                </div>

                                {/* Image Section */}
                                <div className="w-1/2 flex items-center justify-center">
                                    <img src={programFeatures[activeIndex].imgSrc} alt={programFeatures[activeIndex].text} className="max-w-full max-h-full object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Section 5 */}
            {/* <motion.section className="relative w-full min-h-screen flex items-center justify-center" style={{ overflow: "hidden" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/image/building/building5.webp')",
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>

                <div className="lg:flex lg:w-full w-full relative z-10 flex-col lg:flex-row">
                    <div className="lg:w-1/3 w-full flex items-center justify-center relative z-10 p-10 lg:mx-32">
                        <div className="bg-white shadow-lg p-8 flex flex-col items-center justify-center">
                            <h1 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-normal text-center mb-10">
                                Unblemished
                                <span className="text-green-500"> Batch of 2023-24 Placements</span>
                            </h1>
                            <p className="text-center text-sm mb-5">
                                Ajay Kumar Garg University (AKGU) has become an undisputed leader in campus placements. The consistent presence of top-tier companies highlights AKGU's reputation as the 'University with the Best Placements'
                                in India.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full flex items-center justify-center relative z-10">
                        <div className="h-full w-3/4 lg:w-4/5 max-sm:w-full p-6 flex flex-col items-center text-white">
                            <h2 className="text-4xl max-sm:text-3xl font-novaReg text-center mb-6">2023-24 Placement Successes</h2>

                            <div className="flex flex-wrap xl:flex-nowrap justify-between gap-6 lg:gap-10 mb-6 lg:mr-10">
                                <div className="text-center space-y-2 p-6 text-white rounded-lg shadow-lg w-full lg:w-1/3">
                                    <p className="text-6xl max-sm:text-3xl font-slick">282</p>
                                    <p className="text-sm font-novaReg">Highest Number of Companies</p>
                                </div>

                                <div className="text-center space-y-2 p-6 text-white rounded-lg shadow-lg w-full lg:w-1/3">
                                    <p className="text-6xl max-sm:text-3xl font-slick">1406</p>
                                    <p className="text-sm font-novaReg">Placement Offers</p>
                                </div>

                                <div className="text-center space-y-2 p-6 text-white rounded-lg shadow-lg w-full lg:w-1/3">
                                    <p className="text-6xl max-sm:text-3xl font-slick">
                                        33.80<span className="text-xl max-sm:text-lg">LPA</span>
                                    </p>
                                    <p className="text-sm font-novaReg">Highest Package Offered</p>
                                </div>
                            </div>

                            <div className="border-b border-gray-300 w-full mb-6"></div>

                            <p className="text-sm text-center">
                                Continuing the Tradition of Excellence, AKGU Secures <span className="font-novaBold">1406</span> Placement Offers.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section> */}

            {/* Last Section - Top Hiring Partners */}
            <motion.section className="relative w-full py-20 bg-[#f9fafb]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Heading */}
                    <h2 className="text-4xl max-sm:text-2xl font-semibold mb-4 leading-tight text-black">Top Hiring Partners</h2>

                    {/* Description */}
                    <p className="text-lg max-sm:text-xs leading-6 mb-8 text-gray-700">Institutional Alliances with Leading Companies to Foster Strong Industry Connections and More</p>

                    {/* Images List */}
                    <div className="mt-6">
                        <ul className="flex flex-wrap justify-center gap-8 max-sm:gap-6">
                            {recruitmentPartners?.map((image, index) => (
                                <li key={index} className="w-1/5 max-md:w-1/4 max-sm:w-1/3 px-6 py-4 text-center flex items-center">
                                    <img src={image.src} alt={image.alt} className="mx-auto" style={{ width: image.width }} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* View All Button */}
                    <a href="#" className="bg-red-500 text-white font-bold text-sm uppercase tracking-wider py-3 px-8 max-sm:text-xs rounded-lg inline-block mt-8 transition duration-200 ease-in-out hover:bg-sky-500">
                        View All
                    </a>
                </div>
            </motion.section>
        </div>
    );
}
