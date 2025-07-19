"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const accounts = [
    {
        "img": "/image/admission/bank3.png",
        "AccName": "Ajay Kumar Garg University",
        "AccNum": "1234567890",
        "IFSCCode": "ICIC0001234",
        "BankName": "ICICI Bank Ltd"
    },
    {
        "img": "/image/admission/bank2.png",
        "AccName": "Ajay Kumar Garg University",
        "AccNum": "AKGU123",
        "IFSCCode": "HDFC0005678",
        "BankName": "HDFC Bank Ltd"
    },
    {
        "img": "/image/admission/bank6.png",
        "AccName": "Ajay Kumar Garg Institute of Management",
        "AccNum": "AKGIM",
        "IFSCCode": "KKBK0009012",
        "BankName": "Kotak Mahindra Bank Ltd"
    },
    {
        "img": "/image/admission/bank1.png",
        "AccName": "Ajay Kumar Garg University Trust",
        "AccNum": "AKGUT",
        "IFSCCode": "SBIN0003456",
        "BankName": "State Bank of India"
    }
];

const PaymentProcedure = () => {
    const [openIndices, setOpenIndices] = useState([0]);

    const toggleTable = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter(i => i !== index));
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };

    return (
        <section className="bg-white p-5 mb-4 shadow-md rounded-lg max-lg:p-4 max-md:p-3 max-sm:p-2">
            <h1 className="text-4xl font-novaReg mb-4 max-sm:text-xl max-sm:mb-2">Payment Procedure</h1>
            <p className="mb-4 max-sm:text-sm max-sm:mb-3">
                AKG University offers multiple options for efficient, hassle-free, and secure fee payment for its students. Different modes of fee payment for Indian Students are given below.
            </p>

            <h2 className="text-2xl font-novaSemi mb-2 max-sm:text-lg">Online Fee Payment For National Students</h2>
            <p className="text-base mb-4 max-sm:text-sm max-sm:mb-3">
                AKG University Students can make online payment of all fees related to Registration fee/ Academic fee/ Hostel & Other fees.
            </p>

            <div className="mb-4 cursor-pointer py-4 px-5 bg-gray-100 max-sm:py-2 max-sm:px-2.5" onClick={() => toggleTable(0)}>
                <h3 className="flex justify-between items-center w-full transition-colors duration-200 ">
                    <span className="flex-1 text-lg font-novaSemi max-sm:text-base">
                        1. Payment via NEFT/RTGS/IMPS mode Only, Please transfer the amount as per the details below:
                    </span>
                    {openIndices.includes(0) ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </h3>
            </div>

            {openIndices.includes(0) && (
                <>
                    <div className="max-sm:overflow-x-auto ">
                        <table className="min-w-full border border-gray-300 mt-2">
                            <thead>
                                <tr className="text-base text-white bg-primary max-sm:text-sm">
                                    <th className="border border-gray-300 px-4 py-2">Bank</th>
                                    <th className="border border-gray-300 px-4 py-2">Account Name</th>
                                    <th className="border border-gray-300 px-4 py-2">Account Number</th>
                                    <th className="border border-gray-300 px-4 py-2">IFSC Code</th>
                                </tr>
                            </thead>
                            <tbody>
                                {accounts.map((item, index) => (
                                    <tr key={index} className="text-base max-sm:text-sm px-4 py-2">
                                        <td className="border border-gray-300 px-4 py-2 max-sm:px-2 max-sm:py-1">
                                            <img src={item.img} alt={item.BankName} className="w-20" />
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">{item.AccName}</td>
                                        <td className="border border-gray-300 px-4 py-2">{item.AccNum}</td>
                                        <td className="border border-gray-300 px-4 py-2">{item.IFSCCode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="text-base mt-5 text-red-600 font-novaBold max-sm:text-sm">
                        <p>Note: If you are paying through ICICI bank (same bank), you still have to add the above details under "ICICI Bank Virtual Payee" beneficiary details. The payment will be done through NEFT/RTGS/IMPS and will not be processed through fund transfer as per the usual case of the same bank.</p>
                    </div>

                    <div className="my-5 font-novaBold">
                        <p className="mb-2 text-green-700 text-xl max-sm:text-lg">Please do not pay through Phone Pay / Google Pay & UPI!</p>
                        <p className="text-base text-red-600 max-sm:text-sm">Note: Please do not transfer the payment through RTGS/NEFT/IMPS apart from the above bank details. If the payment is made, it will be at your risk. The University will not entertain such payments.</p>
                    </div>
                </>
            )}

            <div className="mb-4 cursor-pointer py-4 px-5 bg-gray-100 max-sm:py-2 max-sm:px-2.5" onClick={() => toggleTable(1)}>
                <h3 className="flex justify-between items-center w-full transition-colors duration-200">
                    <span className="font-novaSemi text-lg max-sm:text-base">
                        2. Through Student Login:
                    </span>
                    {openIndices.includes(1) ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </h3>
            </div>

            {openIndices.includes(1) && (
                <>
                    <p className="text-base mb-4 max-sm:text-sm max-sm:mb-2">
                        Students/ Parents can log in to the Student Portal for the Online Payment of fees and conveniently pay through the following payment gateways
                    </p>
                    <a href="https://student.akgu.net/psp/CSPRD/?cmd=login&languageCd=ENG&" className="text-base text-blue-600 underline mb-4 max-sm:text-sm max-sm:mb-2">
                        Student Portal Login
                    </a>
                    <div className="mt-5 text-green-700 font-novaBold text-xl italic max-sm:text-base max-sm:mt-2">
                        <p>Please do not pay through Phone Pay / Google Pay & UPI!</p>
                    </div>
                    <div className="flex justify-center items-center flex-col mt-3 max-sm:mt-2">
                        <img src="/image/admission/bank6.png" alt="Payment Options" className="w-60 h-auto my-4 max-sm:my-2" />
                        <p className="text-base max-sm:text-sm">(Students Login &rarr; Fee payment &rarr; AXIS &rarr; Pay)</p>
                    </div>

                    <div className="text-base my-5 text-red-600 font-novaSemi max-sm:text-sm max-sm:my-2">
                        <p>Note: For newly admitted students, a password will be sent along with the confirmation email of admission.</p>
                    </div>
                </>
            )}

            {/* <div className="mb-4 cursor-pointer" onClick={() => toggleTable(2)}>
                <h3 className="flex justify-between items-center w-full py-4 px-5 transition-colors duration-200 bg-gray-100">
                    <span className="font-novaSemi text-lg">
                        3. Students can now pay FEES in Easy Monthly Installments and get multiple rewards through GrayQuest and Financepeer, India's leading fee payment platform:
                    </span>
                    {openIndices.includes(2) ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </h3>
            </div> */}

            {openIndices.includes(2) && (
                <>
                    <img src="path/to/your/image.png" alt="Payment Options" className="w-full h-auto mt-4 mb-4" />
                    <img src="path/to/your/image.png" alt="Payment Options" className="w-full h-auto mt-4 mb-4" />
                    <img src="path/to/your/image.png" alt="Payment Options" className="w-full h-auto mt-4 mb-4" />
                </>
            )}

            <h2 className="text-xl font-novaSemi mb-2 mt-4 max-sm:text-base max-sm:mt-2">Other Fee Payment Options</h2>
            <ul className="text-base list-disc ml-5 mb-4 max-sm:text-sm max-sm:ml-2.5 max-sm:mb-2 max-sm:px-3">
                <li className="mb-3 max-sm:mb-1.5">Debit/Credit card swipe at Cash counter (Some extra charges may apply as per banking norms)</li>
                <li className="mb-3 max-sm:mb-1.5">Cash counters are located at the University campus, Finance & Accounts section (Block-2 basement)</li>
                <li className="mb-3 max-sm:mb-1.5">Cash/ Demand draft deposit at Cash counter</li>
                <li className="mb-3 max-sm:mb-1.5">Cheques will be accepted from first-year students only</li>
            </ul>
            <p className="text-base max-sm:text-sm">Please draw the Demand Draft in favor of "Ajay Kumar Garg University". Please mention your name, System ID, and contact number on the backside.</p>

            <div className="mt-4 max-sm:mt-2">
                <h3 className="text-base font-novaSemi mb-3 max-sm:text-sm max-sm:mb-1.5">Helpdesk for Students, Staff, and vendors relating to accounts-related issues:</h3>
                <p className="text-base mb-3 max-sm:text-sm max-sm:mb-1.5">Email ID: <a href="mailto:akg.finance.info@akgu.ac.in" className="text-blue-600">akg.finance.info@akgu.ac.in</a></p>
                <p className="text-base mb-3 max-sm:text-sm max-sm:mb-1.5">Help Desk Phone No / WhatsApp No: <span className="text-blue-600">+91-8800766992</span></p>
            </div>

            <div className="mt-4 text-sm text-gray-500 max-sm:mt-2">
                <p className="mb-3 max-sm:mb-1.5">Students are advised to deposit the Fee to the University account only as per the details published above. The University will not be liable if payment is made to any other account.</p>
                <p className="mb-3 max-sm:mb-1.5">Receipt for online fee payment can be downloaded from the student login dashboard after 48 hours of successful payment or can be collected from the fee counter of AKG University.</p>
                <p className="mb-3 max-sm:mb-1.5">Fee payment in cash more than INR 50,000 is not acceptable in any case in each academic session.</p>
            </div>
        </section>
    );
};

export default PaymentProcedure;
