"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import HostelFees from '@/Components/HostelFees';

const feeBtech = [
    { particular: 'Registration Fees', amount: 1500 },
    { particular: 'Tuition & Development Fees', amount: 111256 },
    { particular: 'Exam & Enrollment Fees', amount: '-' },
    { particular: 'Medical Charges', amount: 1500 },
    { particular: 'Book Bank Fees', amount: 2900 },
    { particular: 'Activity Fee (One Time)', amount: 10000 },
    { particular: 'Career Planning & Placement (One Time)', amount: 10000 },
    { particular: 'Caution Money (Refundable)', amount: 5000 },
    { particular: 'Total Amount', amount: 142156 }
];

const bTechScheme = [
    { particular: 'Registration Fees', amount: 1500 },
    { particular: 'Development Fees', amount: 10114 },
    { particular: 'Exam & Enrollment Fees', amount: '-' },
    { particular: 'Medical Charges', amount: 1500 },
    { particular: 'Book Bank Fees', amount: 2900 },
    { particular: 'Activity Fee (One Time)', amount: 10000 },
    { particular: 'Career Planning & Placement (One Time)', amount: 10000 },
    { particular: 'Caution Money (Refundable)', amount: 5000 },
    { particular: 'Total Amount', amount: 41014 }
];

const mcaScheme = [
    { particular: 'Registration Fees', amount: 1500 },
    { particular: 'Tuition & Development Fees', amount: 10114 },
    { particular: 'Exam & Enrollment Fees', amount: '-' },
    { particular: 'Medical Charges', amount: 1500 },
    { particular: 'Book Bank Fees', amount: 3200 },
    { particular: 'Activity Fee (One Time)', amount: 5000 },
    { particular: 'PDP Charges (One Time)', amount: 3500 },
    { particular: 'Career Planning & Placement (One Time)', amount: 5000 },
    { particular: 'Caution Money (Refundable)', amount: 5000 },
    { particular: 'Total Amount', amount: 34814 }
];

const bTechEntry = [
    { particular: 'Registration Fees', amount: 1500 },
    { particular: 'Tuition & Development Fees', amount: 111256 },
    { particular: 'Exam & Enrollment Fees', amount: '-' },
    { particular: 'Medical Charges', amount: 1500 },
    { particular: 'Book Bank Fees', amount: '-' },
    { particular: 'PDP Charges', amount: 3500 },
    { particular: 'Activity Fee (One Time)', amount: 7500 },
    { particular: 'Career Planning & Placement (One Time)', amount: 10000 },
    { particular: 'Caution Money (Refundable)', amount: 5000 },
    { particular: 'Total Amount', amount: 140256 }
];


const feeMCA = [
    { particular: 'Registration Fees', amount: 1500 },
    { particular: 'Tuition & Development Fees', amount: 111256 },
    { particular: 'Exam & Enrollment Fees', amount: '-' },
    { particular: 'Medical Charges', amount: 1500 },
    { particular: 'Book Bank Fees', amount: 3200 },
    { particular: 'Activity Fee (One Time)', amount: 5000 },
    { particular: 'PDP Charges (One Time)', amount: 3500 },
    { particular: 'Career Planning & Placement (One Time)', amount: 5000 },
    { particular: 'Caution Money (Refundable)', amount: 5000 },
    { particular: 'Total Amount', amount: 135956 }
];

const feeMtech = [
    { particular: 'Registration Fees', iSem: '1500', iiSem: '1500', total: '1500' },
    { particular: 'Tuition & Development Fees', iSem: '55628', iiSem: '55628', total: '111256' },
    { particular: 'Exam & Enrollment Fees*', iSem: '-', iiSem: '-', total: '-' },
    { particular: 'Medical Charges', iSem: '1500', iiSem: '1500', total: '1500' },
    { particular: 'Caution Money (Refundable)', iSem: '5000', iiSem: '-', total: '5000' },
    { particular: 'Total', iSem: '63628', iiSem: '55628', total: '119256' }
]

const FeeNewStudents = () => {
    const [openSections, setOpenSections] = useState({
        bTech: true,
        mca: false,
        mTech: false,
        bTechScheme: false,
        mcaScheme: false,
        bTechEntry: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const hostelCharges = {
        boys: {
            singleSeater: { rentAndMessCharges: 135000, securityRefundable: 10000, total: 145000 },
            doubleSeater: { rentAndMessCharges: 125000, securityRefundable: 10000, total: 135000 },
            tripleSeater: { rentAndMessCharges: 115000, securityRefundable: 10000, total: 125000 }
        },
        girls: {
            doubleSeater: { rentAndMessCharges: 125000, securityRefundable: 10000, total: 135000 },
            tripleSeater: { rentAndMessCharges: 115000, securityRefundable: 10000, total: 125000 }
        }
    };

    const categories = [
        { label: 'Rent & Mess Charges', key: 'rentAndMessCharges' },
        { label: 'Security (Refundable)', key: 'securityRefundable' },
        { label: 'Total', key: 'total' }
    ];

    const seatTypes = [
        { label: 'Single Seater', key: 'singleSeater', gender: 'boys' },
        { label: 'Triple Seater', key: 'tripleSeater', gender: 'boys' },
        { label: 'Double Seater', key: 'doubleSeater', gender: 'girls' },
        { label: 'Triple Seater', key: 'tripleSeater', gender: 'girls' }
    ];

    return (
        <div className="shadow-lg rounded-lg mr-10">
            <h1 className="text-4xl font-novaReg p-5 mb-4">Fee Structure for New Students (2024-25)</h1>
            <div className="">
                <div className="w-full text-black mb-4 border-b border-gray-300">
                    <a
                        onClick={() => toggleSection('bTech')}
                        className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}
                    >
                        <span className={`font-novaSemi`}>TUITION FEE FOR THE B. TECH STUDENTS TO BE ADMITTED DURING THE SESSION 2024-25
                        </span>
                        {openSections.bTech ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                    </a>
                    {openSections.bTech && (
                        <>
                            <div className="px-5 pb-4">
                                <div className="mb-6 mt-4 rounded-lg">
                                    <h2 className='text-2xl text-gray-500 font-novaSemi'>B.Tech 1st Year</h2>
                                    <table className="min-w-full my-4 bg-white rounded-lg">
                                        <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                            <tr className="border-b">
                                                <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                                    Particular
                                                </th>
                                                <th className="px-4 py-2 border-r border-white border-opacity-10 text-left rounded-tr-lg">
                                                    Amount (in Rs.)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                                            {feeBtech.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className={`bg-indigo-950 text-white ${index === feeBtech.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                                >
                                                    <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === feeBtech.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                                        {item.particular}
                                                    </td>
                                                    <td className={`p-4 max-sm:p-3 border-b border-l border-white border-opacity-20 ${index === feeBtech.length - 1 ? 'rounded-br-lg' : ''}`}>
                                                        {item.amount}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <h2 className="font-novaBold text-lg mb-3">The Following payments will be paid by the students directly to the University as and when demanded:</h2>
                                    <ul className="list-disc list-inside mb-3">
                                        <li className='mb-2'>Examination Fee Rs. 7500/- and Digital Library Fee Rs. 700/-.</li>
                                        <li className='mb-2'>The aforesaid fees are subject to change, if any, by the University.</li>
                                    </ul>
                                </div>
                            </div>
                            <HostelFees />
                        </>
                    )}
                </div>
                <div className="w-full text-black mb-4 border-b border-gray-300">
                    <a
                        onClick={() => toggleSection('mca')}
                        className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}
                    >
                        <span className={`font-novaSemi`}>TUITION FEE FOR THE MCA STUDENTS TO BE ADMITTED DURING THE SESSION 2024-25</span>
                        {openSections.mca ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                    </a>
                    {openSections.mca && (
                        <div className="px-5 pb-4">
                            <div className="mb-6 mt-4 rounded-lg">
                                <h2 className='text-2xl text-gray-500 font-novaSemi'>MCA 1st Year</h2>
                                <table className="min-w-full my-4 bg-white rounded-lg">
                                    <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                        <tr className="border-b">
                                            <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">Particular</th>
                                            <th className="px-4 py-2 border-r border-white border-opacity-10 text-left rounded-tr-lg">Amount (in Rs.)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                                        {feeMCA.map((item, index) => (
                                            <tr key={index} className={`bg-indigo-950 text-white ${index === feeMCA.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}>
                                                <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === feeMCA.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                                    {item.particular}
                                                </td>
                                                <td className={`p-4 max-sm:p-3 border-b border-l border-white border-opacity-20 ${index === feeMCA.length - 1 ? 'rounded-br-lg' : ''}`}>
                                                    {item.amount}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="font-novaBold text-lg mb-3">The Following payments will be paid by the students directly to the University as and when demanded:</h2>
                            <ul className="list-disc list-inside mb-3">
                                <li className='mb-2'>Examination Fee Rs. 7500/- and Digital Library Fee Rs. 1000/-.</li>
                                <li className='mb-2'>The aforesaid fees are subject to change, if any, by the University.</li>
                            </ul>

                            <h2 className="font-novaBold mt-4 text-xl">Hostel Fee for the students to be admitted during the session 2024-25</h2>
                            <table className="min-w-full my-4 bg-white rounded-lg">
                                <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                    <tr className='border-b'>
                                        <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg"></th>
                                        <th className="border border-gray-300 px-4 py-2">For Boys (Triple Seater)</th>
                                        <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tr-lg">For Girls (Triple Seater)</th>
                                    </tr>
                                </thead>
                                <tbody className='border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi'>
                                    {categories.map((category, index) => (
                                        <tr key={index}
                                            className={`bg-indigo-950 text-white ${index === categories.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                        >
                                            <td className={`p-4 max-sm:p-3 border-b border-r border-white border-opacity-20 ${index === categories.length - 1 ? 'rounded-bl-lg' : ''}`}>{category.label}</td>
                                            <td className="p-4 max-sm:p-3 border-b border-r border-white border-opacity-20">{hostelCharges.boys.tripleSeater[category.key]}</td>
                                            <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === categories.length - 1 ? 'rounded-br-lg' : ''}`}>{hostelCharges.girls.tripleSeater[category.key]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <h2 className="font-novaSemi mt-4 text-lg">Notes:</h2>
                            <ul className="list-disc list-inside mb-3">
                                <li className='mb-2'>The fee structure is subject to change by the State Govt. / Fee Fixation Committee.</li>
                                <li className='mb-2'>Medical charges include Medical Insurance on hospitalization up to Rs.50,000/-, Accidental Insurance up to Rs.1,00,000/- and free OPD & annual medical checkup at Dr. R.S.G. (Indo-German) Hospital.</li>
                            </ul>

                            <strong>Mode of Payment:</strong>
                            <p className="mt-2 mb-2">1. By DD/PO in favour of “Ajay Kumar Garg University" payable at Ghaziabad or Delhi. Write your name and mobile number on the reverse of the draft. It may be submitted by post or in person.</p>
                            <strong>OR</strong>
                            <p className="mt-2 mb-2">2. Online transfer through NEFT/RTGS. Bank Account details of College for online payment are as under:</p>
                            <ul className='list-inside pl-5 mb-3'>
                                <li className='mb-2'>Name of the Beneficiary: Ajay Kumar Garg University</li>
                                <li className='mb-2'>Name of the Bank: Kotak Mahindra Bank Ltd., Navyug Market, Ghaziabad -201001 (U.P.)-INDIA</li>
                                <li className='mb-2'>Bank Account No.: 508010250461 (Saving Bank Account)</li>
                                <li className='mb-2'>RTGS/NEFT/IFSC Code: KKBK0005295</li>
                            </ul>
                            <p><strong>Note:</strong> This Fee Structure is a demand letter from the college and valid for Bank Loan.</p>
                        </div>
                    )}
                </div>
                <div className='w-full text-black mb-4  border-b border-gray-300'>
                    <a
                        onClick={() => toggleSection('mTech')}
                        className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}
                    >
                        <span className={`font-novaSemi`}>TUITION FEE FOR THE M.TECH STUDENTS TO BE ADMITTED DURING THE SESSION 2024-25</span>
                        {openSections.mTech ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                    </a>
                    {openSections.mTech && (
                        <>
                            <div className='px-5 pb-4'>
                                <div className='mb-6 mt-4 rounded-lg'>
                                    <h2 className='text-2xl text-gray-500 font-novaSemi'>M.TECH 1st Year (2024-25)</h2>
                                    <table className='min-w-full my-4 bg-white rounded-lg'>
                                        <thead className='bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg'>
                                            <tr className='border-b text-center '>
                                                <th className='py-4 px-4 border-r text-left border-white border-opacity-10 rounded-tl-lg'>Particular</th>
                                                <th className='py-4 px-4 border-r border-white border-opacity-10'>I SEM <br /> (Amount in Rs.)</th>
                                                <th className='py-4 px-4 border-r border-white border-opacity-10'>II SEM <br /> (Amount in Rs.)</th>
                                                <th className='py-4 px-4 border-r border-white border-opacity-10 rounded-tr-lg'>Total <br /> (Amount in Rs.)</th>
                                            </tr>
                                        </thead>
                                        <tbody className='border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi'>
                                            {feeMtech.map((item, index) => (
                                                <tr key={index} className={`bg-indigo-950 text-white ${index === feeMtech.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}>
                                                    <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === feeMtech.length - 1 ? 'rounded-bl-lg' : ''}`}>{item.particular}</td>
                                                    <td className='p-4 max-sm:p-3 border-b text-center border-white border-opacity-20'>{item.iSem}</td>
                                                    <td className='p-4 max-sm:p-3 border-b text-center border-white border-opacity-20'>{item.iiSem}</td>
                                                    <td className={`p-4 max-sm:p-3 border-b text-center border-white border-opacity-20 ${index === feeMtech.length - 1 ? 'rounded-br-lg' : ''}`}>{item.total}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <h2 className="font-novaBold text-lg mb-3">The Following payments will be paid by the students directly to the University as and when demanded:</h2>
                                <ul className="list-disc list-inside mb-3">
                                    <li className='mb-2'>Examination Fee Rs. 7500/- and Digital Library Fee Rs. 1000/-.</li>
                                    <li className='mb-2'>The aforesaid fees are subject to change, if any, by the University.</li>
                                </ul>

                                <h2 className="font-novaBold mt-4 text-xl">Hostel Fee for the students to be admitted during the session 2024-25</h2>
                                <table className="min-w-full my-4 bg-white rounded-lg">
                                    <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                        <tr className='border-b'>
                                            <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg"></th>
                                            <th colSpan={2} className="border border-gray-300 px-4 py-2">For Boys</th>
                                            <th colSpan={2} className="px-4 py-2 border-r border-white border-opacity-10 rounded-tr-lg">For Girls</th>
                                        </tr>
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2"></th>
                                            {seatTypes.map((seatType, index) => (
                                                <th key={index} className="border border-gray-300 px-4 py-2">
                                                    {seatType.label}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className='border-t-2 rounded-lg text-xs text-center lg:text-sm font-novaSemi'>
                                        {categories.map((category, index) => (
                                            <tr key={index} className={`bg-indigo-950 text-white ${index === categories.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}>
                                                <td className={`p-4 max-sm:p-3 text-left border-b border-r border-white border-opacity-20 ${index === categories.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                                    {category.label}
                                                </td>
                                                <td className="p-4 max-sm:p-3 border-b border-r border-white border-opacity-20">
                                                    {hostelCharges.boys.singleSeater[category.key]}
                                                </td>
                                                <td className="p-4 max-sm:p-3 border-b border-r border-white border-opacity-20">
                                                    {hostelCharges.boys.tripleSeater[category.key]}
                                                </td>
                                                <td className="p-4 max-sm:p-3 border-b border-r border-white border-opacity-20">
                                                    {hostelCharges.girls.doubleSeater[category.key]}
                                                </td>
                                                <td className="p-4 max-sm:p-3 border-b border-r border-white border-opacity-20">
                                                    {hostelCharges.girls.tripleSeater[category.key]}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <strong>Note:</strong>
                                <ul className="list-inside mb-3">
                                    <li className='mb-2'>The fee structure is subject to change by the State Govt. / Fee Fixation Committee.</li>
                                    <li className='mb-2'>Medical charges include Medical Insurance on hospitalization up to Rs.50,000/-, Accidental Insurance up to Rs.1,00,000/- and free OPD & annual medical checkup at Dr. R.S.G. (Indo-German) Hospital.</li>
                                    <li className='mb-2'>Fee is payable semester-wise.</li>
                                    <li className='mb-2'>(a) Scholarship equivalent to 25% of tuition fee (Approx. Rs. 25,000) for candidates securing 65% (60% for AKGU Alumni) or above aggregate marks in B.Tech</li>
                                    <li className='mb-2'>(b) Scholarship equivalent to 50% of tuition fee (Approx. Rs. 50,000) for candidates securing 70% (65% for AKGU Alumni) or above aggregate marks in B.Tech</li>
                                    <li className='mb-2'>(c) Scholarship equivalent to 75% of tuition fee (Approx. Rs. 75,000) for candidates securing 75% (70% for AKGU Alumni) or above aggregate marks in B.Tech</li>
                                    <li className='mb-2'>(d) Scholarship equivalent to 100% of tuition fee (Approx. Rs. 1,00,000) for candidates securing 80% (75% for AKGU Alumni) or above aggregate marks in B.Tech</li>
                                </ul>
                                <strong>Mode of Payment:</strong>
                                <p className="mt-2 mb-2">1. By DD/PO in favour of “Ajay Kumar Garg University" payable at Ghaziabad or Delhi. Write your name and mobile number on the reverse of the draft. It may be submitted by post or in person.</p>
                                <strong>OR</strong>
                                <p className="mt-2 mb-2">2. Online transfer through NEFT/RTGS. Bank Account details of College for online payment are as under:</p>
                                <ul className='list-inside pl-5 mb-3'>
                                    <li className='mb-2'>Name of the Beneficiary: Ajay Kumar Garg University</li>
                                    <li className='mb-2'>Name of the Bank: Kotak Mahindra Bank Ltd., Navyug Market, Ghaziabad -201001 (U.P.)-INDIA</li>
                                    <li className='mb-2'>Bank Account No.: 508010250461 (Saving Bank Account)</li>
                                    <li className='mb-2'>RTGS/NEFT/IFSC Code: KKBK0005295</li>
                                </ul>
                                <p><strong>Note:</strong> This Fee Structure is a demand letter from the college and valid for Bank Loan.</p>
                            </div>
                        </>
                    )}
                </div>
                <div className="w-full text-black mb-4 border-b border-gray-300">
                    <a
                        onClick={() => toggleSection('bTechScheme')}
                        className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}
                    >
                        <span className={`font-novaSemi`}>TUITION FEE FOR THE B. TECH STUDENTS TO BE ADMITTED DURING THE SESSION 2024-25 UNDER FEE WAIVER SCHEME
                        </span>
                        {openSections.bTechScheme ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                    </a>
                    {openSections.bTechScheme && (
                        <>
                            <div className="px-5 pb-4">
                                <div className="mb-6 mt-4 rounded-lg">
                                    <h2 className='text-2xl text-gray-500 font-novaSemi'>B.Tech 1st Year</h2>
                                    <table className="min-w-full my-4 bg-white rounded-lg">
                                        <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                            <tr className="border-b">
                                                <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                                    Particular
                                                </th>
                                                <th className="px-4 py-2 border-r border-white border-opacity-10 text-left rounded-tr-lg">
                                                    Amount (in Rs.)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                                            {bTechScheme.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className={`bg-indigo-950 text-white ${index === bTechScheme.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                                >
                                                    <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === bTechScheme.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                                        {item.particular}
                                                    </td>
                                                    <td className={`p-4 max-sm:p-3 border-b border-l border-white border-opacity-20 ${index === bTechScheme.length - 1 ? 'rounded-br-lg' : ''}`}>
                                                        {item.amount}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <h2 className="font-novaBold text-lg mb-3">The Following payments will be paid by the students directly to the University as and when demanded:</h2>
                                    <ul className="list-disc list-inside mb-3">
                                        <li className='mb-2'>Examination Fee Rs. 7500/- and Digital Library Fee Rs. 700/-.</li>
                                        <li className='mb-2'>The aforesaid fees are subject to change, if any, by the University.</li>
                                    </ul>
                                </div>
                            </div>
                            <HostelFees />
                        </>
                    )}
                </div>
                <div className="w-full text-black mb-4 border-b border-gray-300">
                    <a
                        onClick={() => toggleSection('mcaScheme')}
                        className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}
                    >
                        <span className={`font-novaSemi`}>TUITION FEE FOR THE MCA STUDENTS TO BE ADMITTED DURING THE SESSION 2024-25 UNDER FEE WAIVER SCHEME
                        </span>
                        {openSections.mcaScheme ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                    </a>
                    {openSections.mcaScheme && (
                        <>
                            <div className="px-5 pb-4">
                                <div className="mb-6 mt-4 rounded-lg">
                                    <h2 className='text-2xl text-gray-500 font-novaSemi'>MCA 1st Year</h2>
                                    <table className="min-w-full my-4 bg-white rounded-lg">
                                        <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                            <tr className="border-b">
                                                <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                                    Particular
                                                </th>
                                                <th className="px-4 py-2 border-r border-white border-opacity-10 text-left rounded-tr-lg">
                                                    Amount (in Rs.)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                                            {mcaScheme.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className={`bg-indigo-950 text-white ${index === mcaScheme.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                                >
                                                    <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === mcaScheme.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                                        {item.particular}
                                                    </td>
                                                    <td className={`p-4 max-sm:p-3 border-b border-l border-white border-opacity-20 ${index === mcaScheme.length - 1 ? 'rounded-br-lg' : ''}`}>
                                                        {item.amount}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <h2 className="font-novaBold text-lg mb-3">The Following payments will be paid by the students directly to the University as and when demanded:</h2>
                                    <ul className="list-disc list-inside mb-3">
                                        <li className='mb-2'>Examination Fee Rs. 7500/- and Digital Library Fee Rs. 700/-.</li>
                                        <li className='mb-2'>The aforesaid fees are subject to change, if any, by the University.</li>
                                    </ul>
                                </div>
                            </div>
                            <HostelFees />
                        </>
                    )}
                </div>
                <div className="w-full text-black mb-4 border-b border-gray-300">
                    <a
                        onClick={() => toggleSection('bTechEntry')}
                        className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}
                    >
                        <span className={`font-novaSemi`}>TUITION FEE FOR THE B. TECH STUDENTS TO BE ADMITTED DURING THE SESSION 2024-25 (Lateral Entry)
                        </span>
                        {openSections.bTechEntry ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                    </a>
                    {openSections.bTechEntry && (
                        <>
                            <div className="px-5 pb-4">
                                <div className="mb-6 mt-4 rounded-lg">
                                    <h2 className='text-2xl text-gray-500 font-novaSemi'>B.Tech IInd Year (Lateral Entry)</h2>
                                    <table className="min-w-full my-4 bg-white rounded-lg">
                                        <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                            <tr className="border-b">
                                                <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                                    Particular
                                                </th>
                                                <th className="px-4 py-2 border-r border-white border-opacity-10 text-left rounded-tr-lg">
                                                    Amount (in Rs.)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                                            {bTechEntry.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className={`bg-indigo-950 text-white ${index === bTechEntry.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                                >
                                                    <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === bTechEntry.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                                        {item.particular}
                                                    </td>
                                                    <td className={`p-4 max-sm:p-3 border-b border-l border-white border-opacity-20 ${index === bTechEntry.length - 1 ? 'rounded-br-lg' : ''}`}>
                                                        {item.amount}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <h2 className="font-novaBold text-lg mb-3">The Following payments will be paid by the students directly to the University as and when demanded:</h2>
                                    <p className='my-3'>a) Examination Fee Rs. 7500/- and Digital Library Fee Rs. 700/-.</p>
                                    <ul className="list-decimal list-inside mb-3 space-y-2">
                                    <p>Book Bank Fees Differs Coursewise as follows:</p>
                                        <li>Civil Engineering Rs 2900/-</li>
                                        <li>IT / CSIT Rs 2500/-</li>
                                        <li>Electronics & Communication Engineering Rs 2300/-</li>
                                        <li>Mechanical/ AIML/ CS (Hindi) Rs 2200/-</li>
                                        <li>Electrical & Electronics Rs 2000/-</li>
                                        <li>Computer Science Rs 1900/-</li>
                                    </ul>
                                </div>
                            </div>
                            <HostelFees />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeeNewStudents;
