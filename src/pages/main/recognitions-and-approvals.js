"use client";
import React, { useState } from "react";

const RecognitionApprovals = () => {
    const [selectedRecognition, setSelectedRecognition] = useState("naac");

    const recognitionsData = [
        {
            id: "naac",
            title: "NAAC Accreditation",
            description: "The only engineering college in Uttar Pradesh (AKTU) accredited by NAAC with the highest grading of A++.",
            imgSrc: "/image/NaaC.webp",
        },
        {
            id: "nba",
            title: "NBA Accreditation",
            description: "Five B.Tech. branches in CSE, ECE, EN, IT & ME are accredited for the period of three year w.e.f. academic year 2022-23 To 2024-25.",
            imgSrc: "/image/nba.jpg",
        },
        {
            id: "aicte",
            title: "AICTE Approval",
            description: "Approval of extension for Engineering and Technology Programs for the Academic Year 2025-26 granted vide AICTE letter no. F.No. Northern/1-44640999101/2025/EOA dated 03-Jan-2025 addressed to the Principal Secretary (Tech. Edu.), Govt. of Uttar Pradesh.",
            imgSrc: "/image/recognitions-and-approvals/AICTE.png",
        },
        {
            id: "aktu",
            title: "AKTU Affiliation",
            description: "Affiliation letter by AKTU for the academic year 2024-25 to 2026-27 granted vide AKTU letter no. AKTU/RO/AS/2024/3319 dated 26-July-2024 addressed to the Director, Ajay Kumar Garg Engineering College.",
            imgSrc: "/image/recognitions-and-approvals/AKTU.png",
        },
    ];

    const handleRecognitionClick = (recognition) => {
        setSelectedRecognition(recognition.id);
    };

    const selectedDescription = recognitionsData.find(
        (item) => item.id === selectedRecognition
    ).description;

    return (
        <>
            <div className="relative bg-BG44 w-full h-[500px] bg-center bg-cover bg-no-repeat">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent "/>
                <div className="relative max-w-[1400px] mx-auto h-full px-3 items-end flex justify-between">
                    <div className="text-white">
                        <h2 className="text-4xl font-novaReg">Approvals by <br />Statutory Bodies</h2>
                    </div>
                </div>
            </div>
            <div className="bg-BG17 h-[450px] w-full top-20 bg-no-repeat bg-cover">
                <div className="max-w-[1400px] mx-auto h-full px-3">
                    <div className="max-w-2xl">
                        <div className="Cutout py-1 bg-yellow-400 mb-10"><h2 className="text-4xl font-novaReg">NAAC A++ Rating</h2></div>
                        <p className="font-novaReg text-lg leading-6">AKG University is a fully established institution under the UP State Legislature and is recognized by the University Grants Commission (UGC) under Section 2(f) of the UGC Act, 1956. The university holds the prestigious NAAC A++ accreditation, placing it among the top engineering colleges in Uttar Pradesh.</p>
                        <button className="mt-5 rounded-md uppercase bg-secondary px-5 py-3 text-base font-novaBold tracking-wider hover:text-white text-black shadow-sm hover:bg-[#3c5686] duration-300">View More ➜</button>
                    </div>
                </div>
            </div>
            <section>
                <div className="max-w-[1400px] mx-auto py-12 px-3">
                    <div className="grid grid-cols-1 w-full gap-3 md:grid-cols-7">
                    {/* Sidebar */}
                    <div className="px-3 col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-novaReg mb-6">
                        Click below to view other Recognitions
                        </h3>
                        <div className="flex flex-col">
                        {recognitionsData.map((item) => (
                            <React.Fragment key={item.id}>
                            <p className="font-novaSemi mb-2">{item.title}</p>
                            <a
                                onClick={() => handleRecognitionClick(item)}
                                className="cursor-pointer -mb-[1px]"
                            >
                                <div
                                className={`flex flex-row mb-10 p-5 items-center ${selectedRecognition === item.id
                                    ? "bg-[#d91f23] text-white"
                                    : "bg-[#333333] hover:bg-[#d91f23] hover:text-white"
                                    }`}
                                >
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className="mr-4 w-16"
                                />
                                <p className="text-sm font-novaReg text-white">
                                    {item.title}
                                </p>
                                </div>
                            </a>
                            </React.Fragment>
                        ))}
                        </div>
                    </div>
                    {/* Recognitions & Approvals */}
                    <div className="px-3 col-span-1 md:col-span-5">
                        <h3 className="text-[32px] font-novaReg mb-6">
                        Recognitions & Approvals
                        </h3>
                        <div className="p-11 shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px]">
                        <div className="flex mb-12 -mx-3">
                            <div className="px-3">
                            <h3 className="text-2xl font-novaReg">
                                {recognitionsData.find(item => item.id === selectedRecognition).title}
                            </h3>
                            <p className="text-lg font-novaReg mt-2.5 mb-5">
                                {selectedDescription}
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="grid grid-cols-1 mt-4 w-full bg-red-600 md:grid-cols-7">
                        <div className="col-span-3 md:col-span-1">
                            <img
                            src="/image/top-nav.jpg"
                            className="w-full"
                            alt="Top Navigation"
                            />
                        </div>
                        <div className="bg-[#d91f24] col-span-1 md:col-span-4">
                            <div className="p-5">
                            <h3 className="text-2xl text-white font-novaReg">Get in Touch</h3>
                            <p className="mt-2.5 mb-3 text-white font-novaReg text-lg">
                                For any information regarding accreditations and approvals:
                            </p>
                            <p className="mt-2.5 mb-3 text-white font-novaReg text-lg">
                                Accreditation Cell: +91-7290034978
                            </p>
                            <p className="mt-2.5 mb-3 text-white font-novaReg text-lg">
                                Mobile: +91-7290034978, +91-8744052891-93
                            </p>
                            <p className="mt-2.5 mb-3 text-white font-novaReg text-lg">
                                Toll Free: 1800-200-0777
                            </p>
                            <p className="mt-2.5 mb-3 text-white font-novaReg text-lg">
                                Email: accreditation@akgec.ac.in
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </>
    );
}

export default RecognitionApprovals;