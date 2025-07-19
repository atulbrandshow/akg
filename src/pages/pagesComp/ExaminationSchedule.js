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
                <h1 className="text-4xl max-sm:text-3xl font-novaReg mb-4 ">Examination Schedule</h1>
            <div className="bg-[#eaf1ff] shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg">
                <div className="flex space-x-2 mb-6 w-fit pt-5 max-[400px]:mx-auto">
                    {Object.keys(schedules).map((year) => (
                        <button
                            key={year}
                            onClick={() => setActiveTab(year)}
                            className={`px-6 max-sm:px-4 max-sm:text-sm py-2 transition-colors duration-200 ${activeTab === year
                                ? "bg-indigo-950 text-white rounded-br-lg rounded-tl-lg"
                                : "bg-white text-black border border-gray-300 rounded-bl-lg rounded-tr-lg"
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                <div>
                    {schedules[activeTab].map((schedule, index) => (
                        <div key={index} className="mb-2 border-b border-gray-300">
                            <a
                                onClick={() => toggleSchedule(index)}
                                className={`px-5 flex justify-between items-center w-full cursor-pointer py-4 hover:bg-indigo-950 hover:text-white ${openIndices.includes(index) ? 'bg-indigo-900 text-white' : 'text-black'}`}
                                aria-expanded={openIndices.includes(index)}
                            >
                                <span className={`font-novaSemi`}>
                                    {schedule.title}
                                </span>
                                {openIndices.includes(index) ? (
                                    <ChevronUp className="w-5 h-5" />
                                ) : (
                                    <ChevronDown className="w-5 h-5" />
                                )}
                            </a>
                            {openIndices.includes(index) && (
                                <div className="pl-5 py-4">
                                    <a
                                        href={schedule.link}
                                        className="text-[#00BFE7] text-sm flex items-center"
                                    >
                                        <FileText className="text-[#00BFE7] w-4 h-4 mr-2" />
                                        {schedule.title}
                                    </a>
                                    <p className="text-xs font-novaReg mb-4">{schedule.date}</p>
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
