"use client";

import React from "react";

const MachineLearningCoE = () => {
    const workshops = [
        "Data Analytics with Python",
        "IoT Fundamentals",
        "Data Prediction with Machine Learning -I",
        "Data Prediction with Machine Learning -II",
    ];

    const projects = [
        "Hybrid IoT based traffic light monitoring and controller system.",
        "Vehicle theft control system using SMTP protocol for sending email alert.",
        "IOT ecosystem based smart parking system for malls.",
        "Hybrid land irrigation and monitoring system using IOT.",
        "IOT based smart wrist band to send alert notification to guardian.",
        "Weather monitoring and management system for greenhouse.",
    ];

    const events = [
        {
            date: "27-28 April 2024",
            name: "Beyond The Binary",
            report: "/pdf/rd/machine-learning-center-of-excellence/beyond-the-binary.pdf",
            target: "_blank",
        },
        {
            date: "10 April 2024",
            name: 'Workshop on "Cloud AWS"',
            report: "/pdf/rd/machine-learning-center-of-excellence/workshop-on-cloud-aws.pdf",
            target: "_blank",
        },
        {
            date: "27 September, 2023",
            name: 'Workshop on "Unleashing the Power of AI: Trends and Applications"',
            report: "/pdf/rd/machine-learning-center-of-excellence/workshop-on-unleashing-the-power-ai.pdf",
            target: "_blank",
        },
    ];

    return (
        <div className="space-y-12 text-gray-800 leading-relaxed font-novaReg">
            {/* Introduction */}
            <div className="space-y-6">
                <p>
                    Department of Computer Science & Engineering has opened a Machine Learning Centre of Excellence in partnership with Antrix Academy – a division of Froyo Technologies, Noida. It is an ecosystem to the students with a blended approach of connecting advantage of Machine Learning & Embedded System to make projects for Industry. Students are trained on different type of sensors & actuators that would be used in automation device/machine with a cutting edge technology of Machine Learning & Artificial Intelligence with IoT integration.
                </p>
                <p>
                    20 Embedded kits have already been purchased for the same. Froyo Technologies conducted a test of CSE and IT III year students and shortlisted a batch of 30 students. Various workshops on Data Analytics, Machine Learning and IOT are conducted in this COE. Students also work on various projects on IOT and Machine Leaning.
                </p>
            </div>

            {/* Workshops */}
            <div className="space-y-4">
                <h3 className="text-xl font-novaSemi">The following workshops have been held till date:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    {workshops.map((workshop, index) => (
                        <li key={index}>{workshop}</li>
                    ))}
                </ul>
            </div>

            {/* Projects */}
            <div className="space-y-4">
                <h3 className="text-xl font-novaSemi">List of few of the undergoing projects are:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    {projects.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>
            </div>

            {/* Events Table */}
            <div className="space-y-6">
                <h3 className="text-xl font-novaSemi">Events Conducted [2023-24]</h3>
                <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-4 font-novaSemi text-sm uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 font-novaSemi text-sm uppercase tracking-wider">Event Name</th>
                                <th className="px-6 py-4 font-novaSemi text-sm uppercase tracking-wider">Report</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {events.map((event, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">{event.date}</td>
                                    <td className="px-6 py-4 text-sm">{event.name}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <a href={event.report} target={event.target} rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                                            View
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MachineLearningCoE;
