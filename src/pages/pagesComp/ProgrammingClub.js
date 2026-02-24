"use client";

import React from "react";
import Image from "next/image";

const ProgrammingClub = () => {
    const eventsByYear = [
        {
            year: "2024-25",
            events: [{ name: "Code Crunch", date: "09 December, 2024", report: "#" }],
        },
        {
            year: "2023-24",
            events: [
                { name: "#include 3.0", date: "16-17 April 2024", report: "#" },
                { name: "Code Crunch", date: "13 December, 2023", report: "#" },
            ],
        },
        {
            year: "2022-23",
            events: [
                { name: "#include 2.0", date: "13 May, 2023", report: "#" },
                { name: "#include", date: "11 October, 2022", report: "#" },
            ],
        },
        {
            year: "2021-22",
            events: [{ name: "BIT CODERS", date: "20 April, 2022", report: "#" }],
        },
        {
            year: "2020-21",
            events: [
                { name: "CODE-IN-CORONA", date: "17 April, 2021", report: "#" },
                { name: "Online Internal Hackathon", date: "21-22 August, 2020", report: "#" },
            ],
        },
        {
            year: "2019-20",
            events: [
                { name: "Sacred Codes", date: "28th September, 2019", report: "#" },
                { name: "HCL AI Hackathon", date: "2nd & 3rd November, 2019", report: "#" },
                { name: "ACM ICPC Hackathon", date: "30th & 31st December, 2019", report: "#" },
            ],
        },
        {
            year: "2018-19",
            events: [
                {
                    name: "One Week Workshop on Data Structures & Algorithms for Competitive Programming",
                    date: "5th March, 2019 to 11th March, 2019",
                    report: "#",
                },
            ],
        },
    ];

    return (
        <div className="space-y-12 text-gray-800 leading-relaxed font-novaReg">
            {/* Introduction Section */}
            <div className="space-y-6">
                <h2 className="text-3xl font-novaBold text-gray-900 border-b-2 border-[#FFD700] w-fit">Programming Club</h2>
                <p>
                    The Programming Club at Ajay Kumar Garg Engineering College is dedicated to Competitive Programming and Data Structures & Algorithms (DSA). We aim to develop students' problem-solving skills through coding workshops and seminars that prepare them for national and global competitions. Our events are designed for all skill levels, offering insights and techniques to master Competitive Programming.
                </p>
                <p>
                    Founded in 2019, the club is privileged to have an inspiring alumni network. Righved Kumar, a member of the founding batch, played a key role in laying the foundation of the club and fostering a culture of learning, innovation, and collaboration. He currently works at the Quant Firm Susquehanna International Group and has previously worked with Microsoft and Media.net. Alongside, Suresh Upadhyay, another distinguished alumnus, has contributed to the club's legacy with his exceptional journey in competitive programming and industry. He is currently a Software Engineer at Google, with past experience at Amazon, Dunzo, and Samsung. Their achievements and guidance continue to motivate and empower the next generation of coders at AKGEC.
                </p>
            </div>

            {/* Achievements Section */}
            <div className="space-y-4">
                <h3 className="text-2xl font-novaBold text-gray-900">Achievements</h3>
                <p>
                    Our journey in the International Collegiate Programming Contest (ICPC) reflects dedication, teamwork, and perseverance. In 2024, we qualified as Regionalists at the Amritapuri Doublesite Regional Contest, following our 2023 success at the Kanpur and Chennai sites. Along the way, our teams were also honored with the Team Excellence recognition. Over the years, members including Aakarsh Singh, Ayush Agrawal, Paras Upadhayay, Kapish Upadhyay, Shreyansh Mittal, Utkarsh Shukla, Satvik Maheshwari, Utkarsh Kumar Yadav, and Shreyansh Mohan have carried forward this legacy of achievement. These milestones highlight not only technical expertise but also the collaborative spirit that drives us. We continue to strive for excellence, aiming to reach greater heights in future contests.
                </p>
            </div>

            {/* Images Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <Image
                        src="/image/rd/programming-club/PC25_1.jpg"
                        alt="Programming Club Group Photo 1"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <Image
                        src="/image/rd/programming-club/PC25_2.jpg" // Using an available high-quality group photo as a second match
                        alt="Programming Club Group Photo 2"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Events Sections by Year */}
            <div className="space-y-12 pt-8">
                {eventsByYear.map((yearSection, idx) => (
                    <div key={idx} className="space-y-6">
                        <h3 className="text-xl font-novaBold text-gray-900">Year: {yearSection.year}</h3>
                        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="px-6 py-4 font-novaSemi text-sm uppercase tracking-wider w-1/2">Event</th>
                                        <th className="px-6 py-4 font-novaSemi text-sm uppercase tracking-wider w-1/4">Dates</th>
                                        <th className="px-6 py-4 font-novaSemi text-sm uppercase tracking-wider w-1/4">Report</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {yearSection.events.map((event, eventIdx) => (
                                        <tr key={eventIdx} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-700">{event.name}</td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap">{event.date}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <a href={event.report} className="text-blue-600 hover:text-blue-800 font-medium">
                                                    View
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgrammingClub;
