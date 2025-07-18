"use client";

import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

const DropdownsUI = ({ dropdownData }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="max-w-7xl mx-auto py-8 text-gray-700">
             <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
            Frequently {" "}
        <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
        Asked
        </span>
        {" "}Questions
      </h1>
            {dropdownData.map((dropdown, index) => (
                <div key={index} className="my-4 px-6 max-sm:px-2">
                    <div
                        className={`flex justify-between gap-2 items-center p-4 rounded-lg ${openIndex === index && 'rounded-t-lg rounded-b-none'} cursor-pointer bg-gray-200 text-black`}
                        onClick={() => toggleDropdown(index)}>
                        <span className="ml-2 font-novaSemi text-lg max-md:text-base max-sm:text-sm">{dropdown.title}</span>
                        <span className={`font-novaBold text-3xl max-sm:text-xl text-blue-600`}>
                            {openIndex === index ? <Minus strokeWidth={2.5} className='max-sm:w-5 max-sm:h-5' /> : <Plus strokeWidth={2.5} className='max-sm:w-5 max-sm:h-5' />}
                        </span>
                    </div>

                    <div
                        className={`p-4 ${openIndex === index ? 'block border rounded-b-lg' : 'hidden'}`}
                    >
                        {dropdown.content.includes('\n') ? (
                            // If content contains line breaks, render as preformatted text
                            <pre className="ml-2 text-left whitespace-pre-line">{dropdown.content}</pre>
                        ) : (
                            // If content is a single line, render as normal text
                            <p className="ml-2 text-left">{dropdown.content}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DropdownsUI;
