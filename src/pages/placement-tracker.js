"use client";

import React, { useState, useEffect } from 'react'
import LogoSlider from '@/Components/LogoSlider'
import PlacementLinks from '@/Components/PlacementLinks'
import ReviewSlider from '@/Components/ReviewSlider'



const trackers = [
    "CAMPUS PLACEMENTS DURING COVID-19 TIMES",
    "HIGHEST PACKAGE OFFERED",
    "STUDENT PLACED",
    "NO. OF COMPANIES VISITED",
    "MNC'S OFFERING ABOVE 20 LACS PACKAGE",
    "MNC'S OFFERING ABOVE 15 LACS PACKAGE"
]

const PlacementTracker = () => {

    const [isGraphOpen, setIsGraphOpen] = useState(false);

    const openGraph = () => {
        setIsGraphOpen(true);
    };

    const closeGraph = () => {
        setIsGraphOpen(false);
    };

    useEffect(() => {
        if (isGraphOpen) {
          // Disable body scroll with Tailwind's overflow-hidden
          document.body.classList.add('overflow-hidden');
        } else {
          // Enable body scroll
          document.body.classList.remove('overflow-hidden');
        }
        // Clean up on component unmount
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
      }, [isGraphOpen]);

    return (
        <>
            <section>
                <div className="w-full flex justify-center items-center h-[600px] max-lg:h-80 bg-cover bg-center bg-[#535353] bg-blend-overlay bg-BG16">
                    <div className="text-white text-center mt-auto mb-32 max-w-2xl max-md:max-w-lg max-sm:max-w-sm max-sm:px-2">
                        <h3 className="text-xl tracking-wide font-novaReg max-sm:text-[18px]">
                            University with Best Placements
                        </h3>
                        <h1 className="text-5xl max-md:text-4xl max-md:font-novaSemi max-sm:text-3xl tracking-tight font-novaBold">
                            Engineering Placements in AKG University
                        </h1>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto py-20">
                    <h1 className="text-3xl font-bold text-center mb-8">Placement Tracker</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {trackers?.map((title, index) => (
                            <div key={index} className="border border-gray-300 rounded-md p-7">
                                <div>
                                    <h2 className="text-sm text-center font-novaBold">{title}</h2>
                                </div>
                                <main>
                                    <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center mb-4">
                                        {index < 4 ? (
                                            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                            </svg>
                                        )}
                                    </div>
                                    <button onClick={openGraph} className="text-teal-500 w-full">Click to View Graph</button>
                                </main>
                            </div>
                        ))}
                    </div>
                    {isGraphOpen && (
                    <div className={`fixed inset-0 bg-white z-[100] p-8 transform transition-transform duration-1000 ${isGraphOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                        <button onClick={closeGraph} className="text-gray-500 hover:text-gray-700">
                            {/* Close Icon */}
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className='max-w-[1400px] mx-auto border border-gray-300 rounded-lg h-full'>

                        </div>
                    </div>
                )}
                </div>

                <LogoSlider />
                <ReviewSlider />
                <PlacementLinks />
            </section>
        </>
    )
}

export default PlacementTracker