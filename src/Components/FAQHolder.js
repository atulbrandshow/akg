"use client";

import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

const FAQHolder = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const dropdownData = data?.faq || [];

    return (
        <div className="max-w-7xl mx-auto py-8 text-gray-700">
            <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
                Frequently {" "}
                <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                    Asked
                </span>
                {" "}Questions
            </h1>
            {dropdownData.length > 0 && dropdownData?.map((dropdown, index) => (
                <div key={dropdown._id} className="my-4 px-6 max-sm:px-2">
                    <div
                        className={`flex justify-between gap-2 items-center p-4 rounded-lg ${openIndex === index && 'rounded-t-lg rounded-b-none'} cursor-pointer bg-gray-200 text-black`}
                        onClick={() => toggleDropdown(index)}>
                        <span className="ml-2 font-novaSemi text-lg max-md:text-base max-sm:text-sm">{dropdown.question}</span>
                        <span className={`font-novaBold text-3xl max-sm:text-xl text-blue-600`}>
                            {openIndex === index ? <Minus strokeWidth={2.5} className='max-sm:w-5 max-sm:h-5' /> : <Plus strokeWidth={2.5} className='max-sm:w-5 max-sm:h-5' />}
                        </span>
                    </div>

                    <div
                        className={`p-4 ${openIndex === index ? 'block border rounded-b-lg' : 'hidden'}`}
                    >
                        <p className="ml-2 font-novaReg leading-snug text-justify">{dropdown.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQHolder;
