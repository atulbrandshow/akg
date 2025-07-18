"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
    incentiveDec2022,
    incentiveSep2022_22,
    incentiveSep2022_01,
    incentiveJun2022_27,
    incentiveMay2022_25,
    incentiveAug2022_31
} from '@/Json/FacultyMembersResearchIncentives';

const incentiveData = [
    { title: "December 2022", data: incentiveDec2022 },
    { title: "September 2022 (22)", data: incentiveSep2022_22 },
    { title: "September 2022 (01)", data: incentiveSep2022_01 },
    { title: "August 2022 (31)", data: incentiveAug2022_31 },
    { title: "June 2022 (27)", data: incentiveJun2022_27 },
    { title: "May 2022 (25)", data: incentiveMay2022_25 },
];

const FacultyResearchIncentives = () => {
    const [openIndices, setOpenIndices] = useState([]);

    const toggleDomain = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices((prev) => prev.filter((i) => i !== index));
        } else {
            setOpenIndices((prev) => [...prev, index]);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-[40px] max-2xl:text-3xl leading-none font-novaReg mb-2.5">
                Research Incentives to Faculty Members
            </h1>
            <div className="w-full text-black">
                {incentiveData.map((item, index) => (
                    <div key={index} className="mb-4 border-b border-gray-300">
                        <a
                            onClick={() => toggleDomain(index)}
                            className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}
                        >
                            <span className={`font-semibold ${openIndices.includes(index) ? 'text-[#00BFE7]' : 'text-black'}`}>
                                {item.title}
                            </span>
                            {openIndices.includes(index) ? (
                                <ChevronUp className="w-6 h-6" />
                            ) : (
                                <ChevronDown className="w-6 h-6" />
                            )}
                        </a>
                        {openIndices.includes(index) && (
                            <div className="rounded-lg p-5 bg-white">
                                {item.data ? (
                                    item.data[0].hasOwnProperty('desc') ? (
                                        item.data.map((entry, idx) => (
                                            <div key={idx} className="mb-4">
                                                <p className="text-lg leading-tight font-novaReg text-gray-700">{entry.desc}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="mb-6 mt-4 rounded-lg">
                                            <table className="min-w-full my-4 bg-white rounded-lg">
                                                <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                                    <tr className="border-b">
                                                        <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                                            Faculty Name
                                                        </th>
                                                        <th className="px-4 py-2 border-r border-white border-opacity-10 text-left">
                                                            Paper Title
                                                        </th>
                                                        <th className="px-4 py-2 text-left border-r border-white border-opacity-10">
                                                            Journal
                                                        </th>
                                                        <th className="px-4 py-2 text-left rounded-tr-lg">
                                                            Incentive (in Cash)
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                                                    {item.data.map((result, idx) => (
                                                        <tr
                                                            key={idx}
                                                            className={`bg-indigo-950 text-white ${idx === item.data.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                                        >
                                                            <td className={`p-4 max-sm:p-3 font-novaReg border-b border-white border-opacity-20`}>
                                                                {result.facultyName}
                                                            </td>
                                                            <td className={`p-4 max-sm:p-3 font-novaReg border-b border-l border-white border-opacity-20`}>
                                                                {result.paperTitle}
                                                            </td>
                                                            <td className={`p-4 max-sm:p-3 font-novaReg border-b border-l border-white border-opacity-20`}>
                                                                {result.journalName}
                                                            </td>
                                                            <td className={`p-4 max-sm:p-3 font-novaReg border-b border-l border-white border-opacity-20`}>
                                                                ₹{result.incentive}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )
                                ) : (
                                    // In case there's no data to display
                                    <p className="text-sm text-gray-700">No data available.</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacultyResearchIncentives;
