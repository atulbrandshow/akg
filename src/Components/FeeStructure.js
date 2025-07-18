'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function FeeStructure() {
    const [activeTab, setActiveTab] = useState('fees')

    return (
        <section className='py-10'>
            <div>
                <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
                Investment in{" "}
                    <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                    Education
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
                        <table className="w-full text-sm sm:text-base">
                            <thead>
                                <tr>
                                    <th className="bg-gray-50 p-2 sm:p-4 font-semibold text-left">Fee Type</th>
                                    <th className="bg-purple-100 p-2 sm:p-4 font-semibold">Year 1</th>
                                    <th className="bg-blue-100 p-2 sm:p-4 font-semibold">Year 2</th>
                                    <th className="bg-amber-100 p-2 sm:p-4 font-semibold">Year 3</th>
                                    <th className="bg-emerald-100 p-2 sm:p-4 font-semibold">Year 4</th>
                                    <th className="bg-red-100 p-2 sm:p-4 font-semibold">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 sm:p-4 border-b">Tuition fee (INR)</td>
                                    <td className="p-2 sm:p-4 border-b bg-purple-50 text-center">3,80,000</td>
                                    <td className="p-2 sm:p-4 border-b bg-blue-50 text-center">3,90,000</td>
                                    <td className="p-2 sm:p-4 border-b bg-amber-50 text-center">4,00,000</td>
                                    <td className="p-2 sm:p-4 border-b bg-emerald-50 text-center">4,00,000</td>
                                    <td className="p-2 sm:p-4 border-b bg-red-50 text-center">15,70,000</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-4">Registration Fees One Time (INR)</td>
                                    <td className="p-2 sm:p-4 bg-purple-50 text-center">45,000</td>
                                    <td className="p-2 sm:p-4 bg-blue-50 text-center">-</td>
                                    <td className="p-2 sm:p-4 bg-amber-50 text-center">-</td>
                                    <td className="p-2 sm:p-4 bg-emerald-50 text-center">-</td>
                                    <td className="p-2 sm:p-4 bg-red-50 text-center">45,000</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-4 bg-gray-100 font-bold">Total Fees</td>
                                    <td className="p-2 sm:p-4 bg-purple-200 font-bold text-center">4,25,000</td>
                                    <td className="p-2 sm:p-4 bg-blue-200 font-bold text-center">3,90,000</td>
                                    <td className="p-2 sm:p-4 bg-amber-200 font-bold text-center">4,00,000</td>
                                    <td className="p-2 sm:p-4 bg-emerald-200 font-bold text-center">4,00,000</td>
                                    <td className="p-2 sm:p-4 bg-red-200 font-bold text-center">16,15,000</td>
                                </tr>
                            </tbody>
                        </table>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {/* Header */}
                        <div className="bg-white p-4 rounded-xl shadow-md">
                            <h3 className="font-bold text-lg mb-4">Scholarship Range</h3>
                            <div className="space-y-4">
                                <div className="p-2 bg-gray-50 rounded">50%</div>
                                <div className="p-2 bg-gray-50 rounded">30%</div>
                                <div className="p-2 bg-gray-50 rounded">20%</div>
                                <div className="p-2 bg-gray-50 rounded">10%</div>
                            </div>
                        </div>

                        {/* XII Score */}
                        <div className="bg-purple-50 p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                            <h3 className="font-bold text-lg mb-4 text-purple-800">XII Score (Best of 3)*</h3>
                            <div className="space-y-4">
                                <div className="p-2 bg-purple-100 rounded">{'>'}=96</div>
                                <div className="p-2 bg-purple-100 rounded">91-95.99</div>
                                <div className="p-2 bg-purple-100 rounded">86-90.99</div>
                                <div className="p-2 bg-purple-100 rounded">81-85.99</div>
                            </div>
                        </div>

                        {/* JEE Mains */}
                        <div className="bg-blue-50 p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                            <h3 className="font-bold text-lg mb-4 text-blue-800">JEE Mains Score</h3>
                            <div className="space-y-4">
                                <div className="p-2 bg-blue-100 rounded">{'>'}=90</div>
                                <div className="p-2 bg-blue-100 rounded">75-89.99</div>
                                <div className="p-2 bg-blue-100 rounded">70-74.99</div>
                                <div className="p-2 bg-blue-100 rounded">65-69.99</div>
                            </div>
                        </div>

                        {/* IB Score */}
                        <div className="bg-amber-50 p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                            <h3 className="font-bold text-lg mb-4 text-amber-800">IB Score</h3>
                            <div className="space-y-4">
                                <div className="p-2 bg-amber-100 rounded">{'>'}=40</div>
                                <div className="p-2 bg-amber-100 rounded">34-39</div>
                                <div className="p-2 bg-amber-100 rounded">32-33</div>
                                <div className="p-2 bg-amber-100 rounded">30-31</div>
                            </div>
                        </div>

                        {/* SAT Score */}
                        <div className="bg-emerald-50 p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                            <h3 className="font-bold text-lg mb-4 text-emerald-800">SAT Score</h3>
                            <div className="space-y-4">
                                <div className="p-2 bg-emerald-100 rounded">{'>'}=1401</div>
                                <div className="p-2 bg-emerald-100 rounded">1301-1400</div>
                                <div className="p-2 bg-emerald-100 rounded">1201-1300</div>
                                <div className="p-2 bg-emerald-100 rounded">1150-1200</div>
                            </div>
                        </div>
                    </div>
                    <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 mx-auto">
                        View full Scholarship
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

