'use client';

import Card from '@/Components/Card';
import { euphonyData, footprintsData, goonjData, horizonData, photoClubData, renaissanceData, taalData, verveData } from '@/Json/ExtraCurricularData';
import React, { useState } from 'react';

const eventTabs = [
    { label: 'Euphony', data: euphonyData },
    { label: 'Footprints', data: footprintsData },
    { label: 'Horizon', data: horizonData },
    { label: 'Goonj', data: goonjData },
    { label: 'Renaissance', data: renaissanceData },
    { label: 'Taal', data: taalData },
    { label: 'Verve', data: verveData },
    { label: 'Photography and Media Club', data: photoClubData },
];

const ExtraCurricularSocieties = () => {
    const [activeTab, setActiveTab] = useState(eventTabs[0]);

    return (
        <>
            <section className="relative bg-BG44 bg-center bg-no-repeat bg-cover h-[90vh]">
                <div className="max-w-7xl mx-auto px-3">
                    <div className="absolute inset-0 flex">
                        <div className="block w-1/2 h-full max-sm:hidden"></div>
                        <div className="w-1/2 bg-yellow-300 opacity-80 h-full flex items-center justify-center flex-col max-sm:w-full">
                            <div className="max-w-xl px-4 text-center">
                                <h2 className="text-6xl font-novaReg uppercase mb-3 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
                                    Explore <span className="font-semibold text-blue-600">Vibrant Extra-Curricular</span> Societies
                                </h2>
                                <h6 className="font-novaReg text-2xl border-y py-3 border-gray-600 text-center max-md:text-xl max-sm:text-lg">
                                    Unleash Your Passion, Connect, and Grow
                                </h6>
                                <p className="text-base mt-3 font-novaSemi text-center max-sm:text-sm">
                                    Join our diverse societies to enhance your skills, creativity, and leadership.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#faf9f6]">
                <div className="max-w-[1400px] mx-auto px-3 py-10 max-lg:py-9 max-md:py-7 max-sm:py-5">
                    <div className="mb-7">
                        <div className="w-full text-left">
                            <h3 className="text-3xl font-novaReg mb-2 max-md:text-2xl max-sm:text-xl">Explore Our Event Archives</h3>
                            <p className="text-base font-novaReg text-gray-400 max-sm:text-sm">Life at India's Most Vibrant Campus</p>
                        </div>
                    </div>
                    <div className="py-3">
                        <ul className="mt-4 flex flex-wrap justify-center space-x-2 gap-y-6 cursor-pointer max-md:mt-3 max-sm:mt-2 max-sm:gap-y-3">
                            {eventTabs.map((tab, index) => (
                                <li key={index} className="hover:translate-y-[-3px] transform transition-transform duration-200">
                                    <button
                                        onClick={() => setActiveTab(tab)}
                                        className={`py-2 px-5 rounded-2xl shadow-xl font-novaSemi transition-colors duration-200 ${activeTab.label === tab.label
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-300 text-black'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='max-w-[1400px] max-2xl:max-w-6xl max-xl:max-w-5xl max-lg:max-w-3xl mx-auto grid grid-cols-12 gap-8 py-10 max-lg:py-9 max-md:py-7 max-sm:py-5 max-sm:gap-0'>
                        {activeTab.data?.length > 0 ? (
                            activeTab.data.map((event, index) => (
                                <Card key={index} img={event.img} title={event.title} desc={event.desc} />
                            ))
                        ) : (
                            <p className="text-center col-span-12 text-gray-500">No events available for {activeTab.label}</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExtraCurricularSocieties