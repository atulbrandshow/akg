"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MoveRight } from 'lucide-react';
import Link from 'next/link';

const grievances = [
    {
        title: "Internal Complaints Committee",
        link: "/internal-complaints-committee",
        desc: <>In continuation to notice AKGU/D.O.Notice/28/09-10<br /> dated 9th August, 2009 and under the provision</>
    },
    {
        title: "Student Grievance Committee",
        link: "/student-grievance-committee",
        desc: <>In order to address the grievances of students of College,<br /> which are not taken care of by the normal available channels,</>
    },
    {
        title: "Grievance Redressal Committee (GRC) for Faculty & Staff",
        link: "/grievance-redressal-committee",
        desc: <>In order to address the grievances of Faculty & Staff members of the College,<br /> which are not taken care of by the normal</>
    }
];

const GrievanceCommittee = () => {
    const [openIndices, setOpenIndices] = useState([0]);

    const toggleDomain = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter(i => i !== index));
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };

    return (
        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg mr-10">
            <h1 className="text-4xl font-novaReg p-5 mb-4">Grievance Committee</h1>
            <div className="w-full text-black">
                {grievances.map((grievance, index) => (
                    <div key={index} className="mb-4 border-b border-gray-300">
                        <a
                            onClick={() => toggleDomain(index)}
                            className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}
                        >
                            <span className={`font-semibold ${openIndices.includes(index) ? 'text-[#00BFE7]' : 'text-black'}`}>
                                {grievance.title}
                            </span>
                            {openIndices.includes(index) ? (
                                <ChevronUp className="w-6 h-6" />
                            ) : (
                                <ChevronDown className="w-6 h-6" />
                            )}
                        </a>
                        {openIndices.includes(index) && (
                            <div className="flex justify-between ml-5 pl-5 pb-4">
                                <p className="font-novaReg leading-tight">{grievance.desc}</p>
                                <Link
                                    href={grievance.link}
                                    className="text-gray-800 uppercase font-novaSemi text-sm flex items-center justify-center bg-secondary px-5 rounded-xl mr-8"
                                >
                                    Read More <MoveRight className='pl-2' />
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrievanceCommittee;
