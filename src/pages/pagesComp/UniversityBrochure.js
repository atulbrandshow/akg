"use client";

import { useState } from "react";
import { FileText, ChevronDown, ChevronUp } from "lucide-react";

const brochures = [
    {
        title: 'Brochure 2020-21',
        link: '#'
    },
    {
        title: 'Brochure 2019-20',
        link: '#'
    },
    {
        title: 'Brochure 2018-19',
        link: '#'
    },
    {
        title: 'Brochure 2017-18',
        link: '#'
    },
    {
        title: 'Brochure 2016-17',
        link: '#'
    }
];

const UniversityBrochure = () => {
    const [openIndices, setOpenIndices] = useState([0]);

    const toggleBrochure = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices((prev) => prev.filter((i) => i !== index));
        } else {
            setOpenIndices((prev) => [...prev, index]);
        }
    };

    return (
        <div className="bg-[#eaf1ff] p-5 shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg mb-3">
            <h2 className="text-4xl max-lg:text-3xl max-sm:text-2xl max-sm:font-novaSemi font-novaReg mb-4 w-full">University Brochure</h2>
            <ul className="list-none w-full">
                {brochures.map((brochure, index) => (
                    <li key={index} className="mb-4 border-b border-gray-300">
                        <a
                            onClick={() => toggleBrochure(index)}
                            className={`flex justify-between items-center w-full px-7 max-sm:px-2 py-6 cursor-pointer transition-colors duration-200`}
                        >
                            <span className={`font-semibold ${openIndices.includes(index) ? 'text-[#00BFE7]' : 'text-black'}`}>
                                {brochure.title}
                            </span>
                            {openIndices.includes(index) ? (
                                <ChevronUp className="w-6 h-6" />
                            ) : (
                                <ChevronDown className="w-6 h-6" />
                            )}
                        </a>
                        {openIndices.includes(index) && (
                            <div className="pl-5">
                                <a
                                    href={brochure.link}
                                    className="text-[#00BFE7] text-sm flex items-center pb-3"
                                >
                                    <FileText className="w-4 h-4 mr-2" />
                                    {brochure.title}
                                </a>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UniversityBrochure;
