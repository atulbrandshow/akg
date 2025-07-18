"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


const AcademicFee = () => {
    const [openSections, setOpenSections] = useState({
        first: true,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="shadow-lg rounded-lg mr-10">
            <h1 className="text-4xl font-novaReg p-5 mb-4">Fee Structure for Existing Students</h1>
            <div className="">
                <div className="w-full text-black mb-4 border-b border-gray-300">
                    <a onClick={() => toggleSection('first')} className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}>
                        <span className={`font-novaSemi text-lg`}>B.TECH_II TO IV YEAR (2024-25)
                        </span>
                        {openSections.first ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                    </a>
                    {openSections.first && (
                        <iframe
                        src="/pdf/academic-fee/B.TECH_II-TO-IV-YEAR.pdf" 
                        width="100%"
                        height="600px"
                        title="NIRF Data"
                      />
                    )}
                </div>
                <div className="w-full text-black mb-4 border-b border-gray-300">
                    <a onClick={() => toggleSection('second')} className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}>
                        <span className={`font-novaSemi text-lg`}>B.TECH_II TO IV YEAR (FW) (2024-25)</span>
                        {openSections.second ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                    </a>
                    {openSections.second && (
                        <iframe
                        src="/pdf/academic-fee/B.TECH_II-TO-IV-YEAR-FW.pdf" 
                        width="100%"
                        height="600px"
                        title="NIRF Data"
                      />
                    )}
                </div>
                <div className='w-full text-black mb-4  border-b border-gray-300'>
                    <a onClick={() => toggleSection('third')} className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}>
                        <span className={`font-novaSemi text-lg`}>B.TECH_III AND IV YEAR (LATERAL ENTRY) (2024-25)</span>
                        {openSections.third ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                    </a>
                    {openSections.third && (
                       <iframe
                       src="/pdf/academic-fee/B.TECH_III-AND-IV-YEAR-LATERAL-ENTRY.pdf" 
                       width="100%"
                       height="600px"
                       title="NIRF Data"
                     />
                    )}
                </div>
                <div className="w-full text-black mb-4 border-b border-gray-300">
                    <a onClick={() => toggleSection('fourth')} className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}>
                        <span className={`font-novaSemi text-lg`}>MCA_II YEAR (2024-25)
                        </span>
                        {openSections.fourth ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                    </a>
                    {openSections.fourth && (
                        <iframe
                        src="/pdf/academic-fee/MCA_II-YEAR.pdf" 
                        width="100%"
                        height="600px"
                        title="NIRF Data"
                      />
                    )}
                </div>
                <div className="w-full text-black mb-4 border-b border-gray-300">
                    <a onClick={() => toggleSection('fifth')} className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}>
                        <span className={`font-novaSemi text-lg`}>MCA_II YEAR (FW) (2024-25)</span>
                        {openSections.fifth ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                    </a>
                    {openSections.fifth && (
                       <iframe
                       src="/pdf/academic-fee/MCA_II-YEAR-FW.pdf" 
                       width="100%"
                       height="600px"
                       title="NIRF Data"
                     />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AcademicFee;
