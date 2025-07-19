"use client";

import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const Certificate = [
    {
        title: "Character Certificate",
        desc: [
            "Photocopy of the Final year marksheet",
            "No dues certificate from the Accounts Section."
        ]
    },
    {
        title: "Transfer Certificate",
        desc: [
            "Photocopy of the Final year marksheet.",
            "Photocopy of the 10th pass certificate.",
            "A receipt of Rs. 50/- as processing fee from the Accounts Section.",
            "No dues certificate from the Accounts Section."
        ]
    },
    {
        title: "Migration Certificate",
        desc: [
            "Apply online on AKTU website (Link: https://erp.aktu.ac.in/WebPages/Public/Students/Dashboard.aspx)"
        ]
    },
    {
        title: "Degree Certificate",
        desc: [
            "ID- Proof (issued by the Govt.) of the concerned student.",
            "No dues certificate from the Accounts Section.",
            "In absence of student, the parents/guardian may collect the degree certificate subject to submission of their Id-proof (issued by the Govt.) and authority letter given by the concerned student."
        ]
    }
];

const IssuanceOfCertificatesForPassoutStudents = () => {
    const [openIndices, setOpenIndices] = useState([0]);

    const toggleCertificate = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter(i => i !== index));
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };

    return (
        <section className='w-full'>
            <div className='px-3'>
                <h3 className='font-novaReg text-3xl text-center mb-4'>
                    Documents required to be submitted at the College for issuance of various certificates to the Passout students
                </h3>
            </div>
            
            <div className="w-full text-black mb-5 px-3">
                {Certificate.map((certificate, index) => (
                    <div key={index} className="mb-4 border-b border-gray-300">
                        <a
                            onClick={() => toggleCertificate(index)}
                            className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}
                        >
                            <span className={`font-semibold text-lg ${openIndices.includes(index) ? 'text-[#00BFE7]' : 'text-black'}`}>
                                {certificate.title}
                            </span>
                            {openIndices.includes(index) ? (
                                <ChevronUp className="w-6 h-6" />
                            ) : (
                                <ChevronDown className="w-6 h-6" />
                            )}
                        </a>
                        {openIndices.includes(index) && (
                            <div className="ml-5 pl-5">
                                <ol className="list-decimal text-[#00BFE7]">
                                    {certificate.desc.map((item, i) => (
                                        <li key={i} className="mb-2 text-black">
                                            {item}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className='px-3 mt-5'>
                <h3 className='text-2xl text-red-600 font-novaBold mb-4'>Most Important :</h3>
                <p className='font-novaReg'>The Students must collect their T.C. and Character Certificate within one month from the date of application (online and offline). Those failing to collect the certificates within above said time-frame, may collect the same in next one month after paying a fine of Rs. 200/-. The certificates not collected within two months from the date of application shall be cancelled and can be re-applied for. In such a case, both certificates can be obtained on payment of Rs. 500/-.</p>
            </div>
        </section>
    );
};

export default IssuanceOfCertificatesForPassoutStudents;
