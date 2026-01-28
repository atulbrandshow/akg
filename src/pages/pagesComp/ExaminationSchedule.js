"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";

const schedules = {
    "2024-25": [
        { "title": "Schedule of (AKG) MTech III Sem", "link": "#", "date": "2024-01-15" },
        { "title": "Schedule of (AKG) MTech V Sem", "link": "#", "date": "2024-01-20" },
        { "title": "Schedule of (AKG) BTech I Sem", "link": "#", "date": "2024-01-25" },
        { "title": "Schedule of (AKG) BTech III Sem", "link": "#", "date": "2024-02-01" },
        { "title": "Schedule of (AKG) BTech V Sem", "link": "#", "date": "2024-02-05" },
        { "title": "Schedule of (AKG) MCA I Sem", "link": "#", "date": "2024-02-10" },
        { "title": "Schedule of (AKG) MCA III Sem", "link": "#", "date": "2024-02-15" },
        { "title": "Schedule of (AKG) MCA V Sem", "link": "#", "date": "2024-02-20" },
        { "title": "Schedule of (AKG) BCA I Sem", "link": "#", "date": "2024-02-25" },
        { "title": "Schedule of (AKG) BCA III Sem", "link": "#", "date": "2024-03-01" },
    ],

    "2023-24": [
        { "title": "Schedule of (AKG) MTech III Sem", "link": "#", "date": "2023-01-15" },
        { "title": "Schedule of (AKG) MTech V Sem", "link": "#", "date": "2023-01-20" },
        { "title": "Schedule of (AKG) BTech I Sem", "link": "#", "date": "2023-01-25" },
        { "title": "Schedule of (AKG) BTech III Sem", "link": "#", "date": "2023-02-01" },
        { "title": "Schedule of (AKG) BTech V Sem", "link": "#", "date": "2023-02-05" },
        { "title": "Schedule of (AKG) MCA I Sem", "link": "#", "date": "2023-02-10" },
        { "title": "Schedule of (AKG) MCA III Sem", "link": "#", "date": "2023-02-15" },
        { "title": "Schedule of (AKG) MCA V Sem", "link": "#", "date": "2023-02-20" },
        { "title": "Schedule of (AKG) BCA I Sem", "link": "#", "date": "2023-02-25" },
        { "title": "Schedule of (AKG) BCA III Sem", "link": "#", "date": "2023-03-01" },
    ],

    "2022-23": [
        { "title": "Schedule of (AKG) MTech III Sem", "link": "#", "date": "2022-01-15" },
        { "title": "Schedule of (AKG) MTech V Sem", "link": "#", "date": "2022-01-20" },
        { "title": "Schedule of (AKG) BTech I Sem", "link": "#", "date": "2022-01-25" },
        { "title": "Schedule of (AKG) BTech III Sem", "link": "#", "date": "2022-02-01" },
        { "title": "Schedule of (AKG) BTech V Sem", "link": "#", "date": "2022-02-05" },
        { "title": "Schedule of (AKG) MCA I Sem", "link": "#", "date": "2022-02-10" },
        { "title": "Schedule of (AKG) MCA III Sem", "link": "#", "date": "2022-02-15" },
        { "title": "Schedule of (AKG) MCA V Sem", "link": "#", "date": "2022-02-20" },
        { "title": "Schedule of (AKG) BCA I Sem", "link": "#", "date": "2022-02-25" },
        { "title": "Schedule of (AKG) BCA III Sem", "link": "#", "date": "2022-03-01" },
    ],
};

const ExaminationSchedule = () => {
    const [openIndices, setOpenIndices] = useState([0]);
    const [activeTab, setActiveTab] = useState("2024-25");

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
                                        className="text-blue-600 hover:text-blue-800 font-novaSemi text-base flex items-center mb-2"
                                    >
                                        <FileText className="w-4 h-4 mr-2" />
                                        Download Schedule
                                    </a>
                                    <p className="text-sm text-gray-500 font-novaReg">{schedule.date}</p>
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
