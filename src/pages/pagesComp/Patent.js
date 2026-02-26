"use client";
import Link from 'next/link';
import { useState } from 'react';

const Patent = () => {
    const [activeTab, setActiveTab] = useState('Journals');
    const tabs = ['Journals', 'Conferences', 'Book Chapters'];

    // Data for patents
    const patentsData = [
        { title: "PATENT DETAILS 2025", link: "/pdf/patents/PATENT DETAILS 2025.pdf" },
        { title: "PATENT DETAILS 2024", link: "/pdf/patents/PATENT DETAILS 2024.pdf" },
        { title: "PATENT DETAILS 2023", link: "/pdf/patents/PATENT DETAILS 2023.pdf" },
        { title: "GRANTED Patent Details", link: "/pdf/patents/GRANTED Patent Details IPR Cell.pdf" },
    ];

    // Data for publications grouped by tab
    const publicationsData = {
        'Journals': [
            { title: "Journal Publication 2025", link: "/pdf/publication/Journal-2025.pdf" },
            { title: "Journal Publication 2024", link: "/pdf/publication/Journal-2024.pdf" },
            { title: "Journal Publication 2023", link: "/pdf/publication/Journal-2023.pdf" },
        ],
        'Conferences': [
            { title: "Conference Papers 2025", link: "/pdf/publication/Conferences-2025.pdf" },
            { title: "Conference Papers 2024", link: "/pdf/publication/Conferences-2024.pdf" },
            { title: "Conference Papers 2023", link: "/pdf/publication/Conferences-2023.pdf" },
        ],
        'Book Chapters': [
            { title: "Book Chapter 2025", link: "/pdf/publication/BookChapter2025.pdf" },
            { title: "Book Chapter 2024", link: "/pdf/publication/BookChapter2024.pdf" },
            { title: "Book Chapter 2023", link: "/pdf/publication/BookChapter2023.pdf" },
        ]
    };

    return (
        <div className="container mx-auto space-y-8">
            {/* Patents Section */}
            <div className="bg-[#f4f4f4] p-8 md:p-12 w-full">
                <h2 className="text-[#1c2b4d] text-2xl md:text-3xl font-bold font-novaReg mb-10">
                    Patents
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {patentsData.map((patent, index) => (
                        <Link key={index} href={patent.link} target="_blank" rel="noopener noreferrer" className="block relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200">
                            <h3 className="text-[#1c2b4d] text-lg font-semibold font-novaReg group-hover:text-[#c1272d] transition-colors">
                                {patent.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Publications Section */}
            <div className="bg-[#f4f4f4] p-8 md:p-12 w-full">
                <h2 className="text-[#1c2b4d] text-2xl md:text-3xl font-bold font-novaReg mb-8">
                    Publications
                </h2>

                {/* Tabs Header */}
                <div className="flex border-b border-gray-300 mb-6 space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-2 px-1 font-semibold text-lg font-novaReg transition-colors border-b-2 ${activeTab === tab
                                ? 'text-[#c1272d] border-[#c1272d]'
                                : 'text-[#1c2b4d] border-transparent hover:text-[#c1272d]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tabs Content */}
                <div className="py-4 font-novaReg">
                    {tabs.map((tab) => (
                        <div key={tab} className={activeTab === tab ? "block" : "hidden"}>
                            <h3 className="text-[#1c2b4d] text-xl font-semibold mb-3">{tab}</h3>
                            <p className="text-gray-600 mb-4">Explore our latest {tab.toLowerCase()} below.</p>
                            <ul className="text-gray-700 space-y-3">
                                {publicationsData[tab].map((item, index) => (
                                    <li key={index} className="border-b border-gray-300 pb-3">
                                        <Link href={item.link} target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group">
                                            <span className="flex items-center before:content-['•'] before:mr-2 before:text-[#c1272d] before:text-xl group-hover:text-[#c1272d] transition-colors">
                                                {item.title}
                                            </span>
                                            <span className="flex items-center group-hover:text-[#c1272d] transition-colors">
                                                View Details <span className="ml-1 text-lg leading-none">&rarr;</span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Patent;
