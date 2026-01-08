"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Target, Lightbulb, Eye, TrendingUp } from "lucide-react";
import Image from 'next/image';

const SkillsFoundation = () => {
    const [openIndices, setOpenIndices] = useState([0]);

    const toggleDomain = (index) => {
        setOpenIndices((prev) => {
            if (prev.includes(index)) {
                return []
            } else {
                return [index];
            }
        });
    };

    const sections = [
        {
            title: "OVERVIEW",
            icon: <Eye className="w-5 h-5" />,
            content: (
                <div className="space-y-4">
                    <p>
                        AKGU Skills Foundation (ASF) is a section 8 company established by Ajay Kumar Garg Engineering College to bridge the gap between academia and industry. ASF focus on providing industry-relevant skill development and consultancy services.
                    </p>
                    <p>
                        ASF works closely with various government and private organizations, including Indian Railways (Modern Coach Factory) and Indian Air Force, for training and competency upgradation of their engineers and personnel.
                    </p>
                </div>
            )
        },
        {
            title: "VISION",
            icon: <Lightbulb className="w-5 h-5" />,
            content: (
                <p>
                    To be a leading center of excellence in skill development and industrial consultancy, empowering the workforce with cutting-edge technologies and fostering innovation for national growth.
                </p>
            )
        },
        {
            title: "MISSION",
            icon: <Target className="w-5 h-5" />,
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>To provide high-quality technical training in emerging technologies.</li>
                    <li>To facilitate industrial consultancy and research for complex engineering problems.</li>
                    <li>To strengthen the industry-academia interface through MoUs and collaborative programs.</li>
                    <li>To empower students and professionals with practical skills that enhance employability.</li>
                </ul>
            )
        },
        {
            title: "INDUSTRIAL PARTNERSHIPS & MoUs",
            icon: <TrendingUp className="w-5 h-5" />,
            content: (
                <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                        <h4 className="font-bold text-indigo-900 mb-2">Modern Coach Factory, Rae Bareilly</h4>
                        <p className="text-sm">
                            ASF works closely for training and upgradation of the competency of MCF engineers in Industrial Robotics and Automation. MCF organizes joint In-Plant Training Programs through their Technical Training Centre on Robot Operation & Programming.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                        <h4 className="font-bold text-indigo-900 mb-2">AICRA (All India Council for Automation and Robotics)</h4>
                        <p className="text-sm">
                            AKGU Skills Foundation signed an MoU with AICRA to showcase and implement the latest tools and technologies in Industrial Automation, Robotics, Digital Manufacturing, and 3D Printing.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                        <h4 className="font-bold text-indigo-900 mb-2">Indian Air Force</h4>
                        <p className="text-sm">
                            ASF supports the Indian Air Force (Base Repair Depots) in conducting repair and life enhancement studies of Surface to Air Missile Launching Systems and developing 3D printed models for strategic presentations.
                        </p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="max-w-[1400px] mx-auto p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl font-novaBold text-indigo-950 mb-8 border-b-2 border-secondary pb-4">
                AKGU Skills Foundation (ASF)
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                    <div className="space-y-4">
                        {sections.map((section, index) => (
                            <div key={index} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <button
                                    onClick={() => toggleDomain(index)}
                                    className={`flex justify-between items-center w-full px-6 py-4 text-left transition-colors ${
                                        openIndices.includes(index) 
                                        ? 'bg-indigo-950 text-white' 
                                        : 'bg-white text-gray-800 hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={openIndices.includes(index) ? 'text-secondary' : 'text-indigo-600'}>
                                            {section.icon}
                                        </span>
                                        <span className="font-novaBold text-lg">{section.title}</span>
                                    </div>
                                    {openIndices.includes(index) ? (
                                        <ChevronUp className="w-5 h-5 text-secondary" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>
                                
                                {openIndices.includes(index) && (
                                    <div className="px-8 py-6 bg-gray-50 text-gray-700 font-novaReg leading-relaxed animate-fadeIn">
                                        {section.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-4">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="relative h-48 bg-indigo-900">
                            <Image 
                                src="/image/lab/User-Manual-AKGEC 5.webp" 
                                alt="Skills Foundation" 
                                fill 
                                className="object-cover opacity-60"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-novaBold text-center px-4">
                                    Bridging the Gap Between <br/>
                                    <span className="text-secondary uppercase">Theory & Practice</span>
                                </h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="font-novaBold text-lg text-indigo-900 mb-4 border-l-4 border-secondary pl-3">
                                Key Focus Areas
                            </h4>
                            <ul className="space-y-3">
                                {['Industrial Robotics', 'Automation', 'Digital Manufacturing', '3D Printing', 'Competency Training'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 p-4 bg-indigo-50 rounded-xl">
                                <p className="text-xs text-indigo-800 italic text-center">
                                    "Committed to creating a skilled workforce for the future of Indian industry."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsFoundation;
