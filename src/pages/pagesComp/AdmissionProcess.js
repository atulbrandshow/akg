"use client";

import React from 'react';
import { ArrowDown } from "lucide-react";

const AdmissionProcess = () => {
    return (
        <>
            <div className="min-h-screen bg-[#003366] p-4 md:p-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 bg-[#FFD700] p-4 rounded-lg shadow-md">
                        <h1 className="text-center text-2xl font-bold text-[#003366]">AKG University Admission Flow Chart</h1>
                    </div>

                    {[
                        {
                            step: "Step 1",
                            content: (
                                <>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="p-4 border rounded-lg shadow-md bg-white flex justify-center items-center">
                                            <p className="text-center text-[#003366]">Register Online at www.akguniversity.ac.in</p>
                                        </div>
                                        <div className="bg-[#FFD700] p-4 border rounded-lg shadow-md">
                                            <p className="text-center text-[#003366]">
                                                Register Manually at Admission Cell, AKG University OR Authorized Admission Centers
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-4">
                                        <ArrowDown className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="mx-auto bg-[#FFD700] p-4 md:w-2/3 border rounded-lg shadow-md">
                                        <ul className="list-inside list-disc flex justify-around text-[#003366]">
                                            <li>Enquiry registered</li>
                                            <li>System ID generated</li>
                                        </ul>
                                    </div>
                                </>
                            ),
                        },
                        {
                            step: "Step 2",
                            content: (
                                <>
                                    <div className="mx-auto bg-[#FFD700] p-4 md:w-2/3 border rounded-lg shadow-md">
                                        <ul className="list-inside list-disc flex justify-around text-[#003366]">
                                            <li>Pay Application Fee</li>
                                            <li>Fill Application Form</li>
                                            <li>Submit Required Documents</li>
                                        </ul>
                                    </div>
                                    <div className="flex justify-center py-4">
                                        <ArrowDown className="h-8 w-8 text-white" />
                                    </div>
                                </>
                            ),
                        },
                        {
                            step: "Step 3",
                            content: (
                                <>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div>
                                            <div className="mb-4 bg-[#FFD700] p-4 text-center border rounded-lg shadow-md">
                                                <p className="text-[#003366]">Admission through AKG Entrance Test</p>
                                            </div>
                                            <div className="mb-4 bg-[#FFD700] p-4 text-center border rounded-lg shadow-md">
                                                <p className="text-[#003366]">Test ID & Password are issued</p>
                                            </div>
                                        </div>
                                        <div className="h-fit p-4 text-center border rounded-lg shadow-md bg-white">
                                            <p className="text-[#003366]">Admission through National/State Level Entrance Exam</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-4">
                                        <ArrowDown className="h-8 w-8 text-white" />
                                    </div>
                                </>
                            ),
                        },
                        {
                            step: "Step 4",
                            content: (
                                <>
                                    <div className="mx-auto bg-[#FFD700] p-4 text-center md:w-2/3 border rounded-lg shadow-md">
                                        <p className="text-[#003366]">Appear for Personal Interview (PI) and/or Group Discussion (GD) for MBA</p>
                                    </div>
                                    <div className="flex justify-center py-4">
                                        <ArrowDown className="h-8 w-8 text-white" />
                                    </div>
                                </>
                            ),
                        },
                        {
                            step: "Step 5",
                            content: (
                                <>
                                    <div className="mt-10 space-y-4">
                                        <div className="mx-auto bg-[#FFD700] p-4 text-center md:w-2/3 border rounded-lg shadow-md">
                                            <p className="text-[#003366]">Provisional Admission Offered</p>
                                        </div>
                                        <div className="flex justify-center py-4">
                                            <ArrowDown className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="mx-auto bg-[#FFD700] p-4 text-center border rounded-lg shadow-md">
                                            <p className="text-[#003366]">Payment of Tuition Fee</p>
                                        </div>
                                        <div className="flex justify-center py-4">
                                            <ArrowDown className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="mx-auto p-4 text-center md:w-2/3 border rounded-lg shadow-md bg-white">
                                            <p className="text-[#003366]">Document Verification & Final Enrollment</p>
                                        </div>
                                        <div className="flex justify-center py-4">
                                            <ArrowDown className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="mx-auto p-4 text-center md:w-2/3 border rounded-lg shadow-md bg-white">
                                            <p className="text-[#003366]">Commencement of Classes</p>
                                        </div>
                                    </div>
                                </>
                            ),
                        },
                    ].map(({ step, content }, index) => (
                        <div key={index} className="mb-8 relative">
                            <div className="absolute -left-2 flex h-8 w-20 items-center justify-center rounded-r-full bg-[#FFD700] text-[#003366]">
                                {step}
                            </div>
                            <div className="">{content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AdmissionProcess;
