'use client'

import { splitTitle } from '@/utills/splitTitle';
import Link from 'next/link'
import { useState } from 'react'
import DOMPurify from 'dompurify';

export default function FeeStructure({ data }) {
    const [activeTab, setActiveTab] = useState('fees')
    const d = data?.pageData;
    const { first, middle, last } = splitTitle(d?.Fee_Structure_Title);

    const feeHtml = d?.Fee_Structure_2025
        ? DOMPurify.sanitize(d?.Fee_Structure_2025?.replace(/classname/gi, 'class'))
        : '';

    const scholarshipHtml = d?.Scholarship_2025
        ? DOMPurify.sanitize(d?.Scholarship_2025?.replace(/classname/gi, 'class'))
        : '';

    return (d?.Fee_Structure_Title || d?.Scholarship_2025 || d?.Fee_Structure_2025) && (
        <section className='py-10'>
            <div>
                <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
                    {first}{" "}
                    <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                        {middle}{" "}{last}
                    </span>
                </h1>
            </div>
            <div className="max-w-6xl mx-auto p-4 sm:p-6 font-novaReg">
                {/* Tab Navigation */}
                <div className="flex justify-center flex-col sm:flex-row gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('fees')}
                        className={`px-6 py-3 text-lg max-sm:text-base font-novaSemi rounded-full transition-all duration-300 w-full sm:w-auto ${activeTab === 'fees'
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300'
                            }`}
                    >
                        Fee Structure 2024
                    </button>
                    <button
                        onClick={() => setActiveTab('scholarship')}
                        className={`px-6 py-3 text-lg max-sm:text-base font-novaSemi rounded-full transition-all duration-300 w-full sm:w-auto ${activeTab === 'scholarship'
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300'
                            }`}
                    >
                        Scholarship 2024
                    </button>
                </div>

                {/* Fee Structure Section */}
                <div
                    className={`transition-all duration-500 ${activeTab === 'fees' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full hidden'
                        }`}
                >
                    <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
                        {feeHtml ? (
                            <div dangerouslySetInnerHTML={{ __html: feeHtml }} />
                        ) : (
                            <p className="text-center text-gray-500">No fee data available</p>
                        )}
                    </div>
                    <Link href="/admissions/course-fee" className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex justify-center items-center gap-2 mx-auto">
                        View full Fee Structure
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Scholarship Section */}
                <div
                    className={`transition-all duration-500 ${activeTab === 'scholarship' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full hidden'
                        }`}
                >
                    <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
                        {scholarshipHtml ? (
                            <div dangerouslySetInnerHTML={{ __html: scholarshipHtml }} />
                        ) : (
                            <p className="text-center text-gray-500">No scholarship data available</p>
                        )}
                    </div>
                    <Link href="/admissions/scholarship" className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex justify-center items-center gap-2 mx-auto">
                        View full Scholarship
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

