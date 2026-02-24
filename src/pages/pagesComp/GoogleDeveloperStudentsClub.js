"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const facultyCoordinators = [
    {
        role: "HOD",
        name: "Prof. Rahul Sharma",
        img: "/image/rd/Rahul_Sharma.jpeg", // Found in search
    },
    {
        role: "FACULTY CO-ORDINATOR",
        name: "Mr. Birendra Kumar",
        img: "/image/rd/Kumar_Idea.jpg", // Using Kumar_Idea.jpg as a match for Birendra Kumar
    },
];

const studentCoordinators = [
    {
        role: "ORGANIZER",
        name: "Shreya Pal",
        img: "/image/rd/Idea_Lab_Logo.jpg", // Placeholder - exact not found
    },
    {
        role: "CO-ORGANIZER",
        name: "Ananya Jain",
        img: "/image/rd/big-data/BDCoe_Ananya.jpg", // Found in search
    },
    {
        role: "CO-ORGANIZER",
        name: "Sankalp Jha",
        img: "/image/rd/Idea_Lab_Logo.jpg", // Placeholder - exact not found
    },
    {
        role: "CO-ORGANIZER",
        name: "Abhishek Kumar",
        img: "/image/testimonials/Abhishek_mishra.jpg", // Found in search
    },
];

const activities = [
    {
        title: "Build with AI",
        session: "Session 2024 – 2025(ODD)",
        img: "/image/rd/google.jpg", // Using google.jpg as a placeholder for the poster
        isOpen: true,
    },
    {
        title: "Tech Winter Break",
        session: "",
        isOpen: false,
    },
    {
        title: "Google Solution Challenge 2025",
        session: "",
        isOpen: false,
    },
];

const GoogleDeveloperStudentsClub = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="px-4 py-8 max-w-7xl mx-auto space-y-20">
            {/* Faculty Coordinators Section */}
            <div>
                <h2 className="text-center text-xl font-semibold mb-12 tracking-wider">FACULTY COORDINATORS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-start">
                    {facultyCoordinators.map((coord, index) => (
                        <div key={index} className="flex justify-center">
                            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg p-6 w-full max-w-sm flex flex-col items-center border border-gray-100">
                                <div className="w-full h-80 relative mb-6 overflow-hidden rounded-lg">
                                    <Image
                                        src={coord.img}
                                        alt={coord.name}
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="text-center space-y-2">
                                    <h3 className="text-lg font-bold text-gray-800 tracking-tight">{coord.role}</h3>
                                    <p className="text-gray-500 font-medium">{coord.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Student Coordinators Section */}
            <div>
                <h2 className="text-center text-xl font-semibold mb-12 tracking-wider">STUDENT COORDINATORS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {studentCoordinators.map((coord, index) => (
                        <div key={index} className="flex justify-center">
                            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-lg p-5 w-full max-w-xs flex flex-col items-center border border-gray-50">
                                <div className="w-full h-56 relative mb-5 overflow-hidden rounded-lg">
                                    <Image
                                        src={coord.img}
                                        alt={coord.name}
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="text-center space-y-1">
                                    <h3 className="text-md font-bold text-gray-800 tracking-tight">{coord.role}</h3>
                                    <p className="text-sm text-gray-500 font-medium">{coord.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activities Section */}
            <div className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Recent Activities</h2>
                    <p className="text-gray-600 font-medium">Session 2024 – 2025(ODD)</p>
                </div>

                <div className="space-y-4">
                    {activities.map((activity, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-4 bg-[#FFD700] hover:bg-[#E6C200] transition-colors duration-200"
                            >
                                <span className="font-bold text-gray-900 uppercase tracking-wide">{activity.title}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-700" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-700" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="p-8 bg-gray-50 flex justify-center">
                                    <div className="relative w-full max-w-lg aspect-square shadow-2xl rounded-lg overflow-hidden border-8 border-white">
                                        <Image
                                            src={activity.img || "/image/rd/google.jpg"}
                                            alt={activity.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <div className="space-y-2">
                    {/* <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Recent Activities</h2> */}
                    <p className="text-gray-600 font-medium">Session 2024 – 2025(ODD)</p>
                </div>

                <div className="space-y-4">
                    {activities.map((activity, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-4 bg-[#FFD700] hover:bg-[#E6C200] transition-colors duration-200"
                            >
                                <span className="font-bold text-gray-900 uppercase tracking-wide">{activity.title}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-700" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-700" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="p-8 bg-gray-50 flex justify-center">
                                    <div className="relative w-full max-w-lg aspect-square shadow-2xl rounded-lg overflow-hidden border-8 border-white">
                                        <Image
                                            src={activity.img || "/image/rd/google.jpg"}
                                            alt={activity.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <div className="space-y-2">
                    {/* <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Recent Activities</h2> */}
                    <p className="text-gray-600 font-medium">Session 2024 – 2025(ODD)</p>
                </div>

                <div className="space-y-4">
                    {activities.map((activity, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-4 bg-[#FFD700] hover:bg-[#E6C200] transition-colors duration-200"
                            >
                                <span className="font-bold text-gray-900 uppercase tracking-wide">{activity.title}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-700" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-700" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="p-8 bg-gray-50 flex justify-center">
                                    <div className="relative w-full max-w-lg aspect-square shadow-2xl rounded-lg overflow-hidden border-8 border-white">
                                        <Image
                                            src={activity.img || "/image/rd/google.jpg"}
                                            alt={activity.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GoogleDeveloperStudentsClub;
