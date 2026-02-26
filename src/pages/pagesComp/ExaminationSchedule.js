"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";

const schedules = {
    "2026-27": [
        { "title": "Schedule of AKGU B.TECH I Sem", "link": "#" },
        { "title": "Schedule of AKGU M.TECH I Sem", "link": "#" },
        { "title": "Schedule of AKGU BCA I Sem", "link": "#" },
        { "title": "Schedule of AKGU MCA I Sem", "link": "#" },
        { "title": "Schedule of AKGU BBA I Sem", "link": "#" },
        { "title": "Schedule of AKGU MBA I Sem", "link": "#" },
    ],
};

const ExaminationSchedule = () => {
    const [openIndices, setOpenIndices] = useState([0]);
    const [activeTab, setActiveTab] = useState("2026-27");

    const toggleSchedule = (index) => {
        setOpenIndices((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="">
            <h1 className="text-4xl font-novaBold tracking-tight mb-8 text-brand-blue">Examination Schedule</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
                <div className="flex space-x-2 mb-6 w-fit pt-6 px-6 max-[400px]:mx-auto">
                    {Object.keys(schedules).map((year) => (
                        <button
                            key={year}
                            onClick={() => setActiveTab(year)}
                            className={`px-6 max-sm:px-4 text-base max-sm:text-sm py-2.5 transition-all duration-200 font-novaSemi ${activeTab === year
                                ? "bg-brand-blue text-white rounded-md shadow-md"
                                : "bg-gray-50 text-gray-600 border border-gray-200 rounded-md hover:bg-gray-100"
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                <div className="px-6 pb-6">
                    {schedules[activeTab].map((schedule, index) => (
                        <div key={index} className="mb-3 rounded-lg overflow-hidden border border-gray-100">
                            <button
                                onClick={() => toggleSchedule(index)}
                                className={`px-5 flex justify-between items-center w-full cursor-pointer py-4 transition-colors ${openIndices.includes(index) ? 'bg-brand-blue text-white' : 'bg-gray-50 text-gray-800 hover:bg-blue-50'}`}
                                aria-expanded={openIndices.includes(index)}
                            >
                                <span className={`font-novaSemi text-lg sm:text-xl`}>
                                    {schedule.title}
                                </span>
                                {openIndices.includes(index) ? (
                                    <ChevronUp className="w-5 h-5" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            {openIndices.includes(index) && (
                                <div className="p-5 bg-white">
                                    <a
                                        href={schedule.link}
                                        className="text-gray-400 font-novaSemi text-base flex items-center mb-0 pointer-events-none cursor-not-allowed"
                                        aria-disabled="true"
                                        tabIndex="-1"
                                    >
                                        <FileText className="w-4 h-4 mr-2" />
                                        Download Schedule (Coming Soon)
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExaminationSchedule;
