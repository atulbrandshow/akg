'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { splitTitle } from '@/utills/splitTitle';

export default function EligibilityCriteriaUnique({ data }) {
    const [activeTab, setActiveTab] = useState('eligibility')
    const d = data?.pageData;
    const { first, middle, last } = splitTitle(d?.Admission_Criteria_Title);

    return (d?.Eligibility_Criteria_Description || d?.Selection_Process_Description) && (
        <div className="bg-gradient-to-br from-purple-200 to-blue-100 py-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
                    {first}{" "}
                    <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                        {middle}{" "}
                    </span>
                    {last}
                </h1>

                {(d?.Eligibility_Criteria_Description || d?.Selection_Process_Description) && (
                    <div className="mt-5 bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            {/* Navigation Sidebar */}
                            <nav className="md:w-1/3 bg-gradient-to-b from-blue-600 to-indigo-700 text-white p-6">
                                <div className="space-y-4">
                                    {d?.Eligibility_Criteria_Description && (
                                        <button
                                            onClick={() => setActiveTab("eligibility")}
                                            className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${activeTab === "eligibility"
                                                ? "bg-white text-indigo-700 shadow-lg"
                                                : "hover:bg-white/10 border border-gray-400"
                                                }`}
                                        >
                                            <span className="text-xl max-sm:text-base font-semibold capitalize">
                                                Eligibility
                                            </span>
                                        </button>
                                    )}
                                    {d?.Selection_Process_Description && (
                                        <button
                                            onClick={() => setActiveTab("selection")}
                                            className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${activeTab === "selection"
                                                ? "bg-white text-indigo-700 shadow-lg"
                                                : "hover:bg-white/10 border border-gray-400"
                                                }`}
                                        >
                                            <span className="text-xl max-sm:text-base font-semibold capitalize">
                                                Selection
                                            </span>
                                        </button>
                                    )}
                                </div>
                            </nav>

                            <div className="md:w-2/3 p-6">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-6"
                                >
                                    {activeTab === "eligibility" &&
                                        d?.Eligibility_Criteria_Description && (
                                            <>
                                                <h2 className="text-3xl max-sm:text-2xl font-novaSemi text-gray-800 mb-4">
                                                    Eligibility Criteria
                                                </h2>
                                                <div className="space-y-6">
                                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg">
                                                        <div
                                                            className="max-w-none text-lg font-novaSemi text-gray-800 mb-3"
                                                            dangerouslySetInnerHTML={{
                                                                __html: d?.Eligibility_Criteria_Description,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                    {activeTab === "selection" &&
                                        d?.Selection_Process_Description && (
                                            <>
                                                <h2 className="text-3xl max-sm:text-2xl font-novaSemi text-gray-800 mb-4">
                                                    Selection Process
                                                </h2>
                                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg">
                                                    <div
                                                        className="max-w-none text-lg font-novaSemi text-gray-800 mb-3"
                                                        dangerouslySetInnerHTML={{
                                                            __html: d?.Selection_Process_Description,
                                                        }}
                                                    />
                                                </div>
                                                {d?.Selection_Process_Note && (
                                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                                                        <p className="text-sm text-yellow-700 font-novaReg">
                                                            <span className="font-novaSemi">Note: </span>
                                                            {d?.Selection_Process_Note}
                                                        </p>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}