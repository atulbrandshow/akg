"use client";

import React from 'react';

const HowToApply = () => {
    return (
        <>
            <div className="bg-white p-8 max-sm:p-5 shadow-sm rounded-3xl border border-gray-100">
                <h3 className="text-4xl font-novaReg mb-3 w-full max-lg:text-3xl max-sm:text-xl max-sm:font-novaSemi text-gray-900">AKG University Admissions 2026</h3>
                <h3 className="text-2xl font-novaReg mb-5 w-full max-lg:text-xl max-md:mb-3 max-sm:text-lg max-sm:mb-3 text-gray-700">How to Apply</h3>
                <hr className="w-full my-4 border-gray-200" />

                {/* Online Mode Section */}
                <div className="w-full mb-10">
                    <h4 className="mb-4 text-xl md:text-2xl font-novaSemi text-blue-900">Online Mode:</h4>
                    <p className="text-base md:text-lg font-novaReg text-gray-700 leading-relaxed">
                        Applicants can visit the official website through the link provided to access detailed information regarding programs, eligibility, and the application process.
                    </p>
                </div>

                {/* Offline Mode Section */}
                <div className="w-full">
                    <h4 className="mb-4 text-xl md:text-2xl font-novaSemi text-blue-900">Offline Mode:</h4>
                    <p className="text-base md:text-lg font-novaReg text-gray-700 leading-relaxed mb-6">
                        Applicants may also visit the Admission Office in person at the following address:
                    </p>
                    
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 border-l-4 border-l-blue-600">
                      <p className="font-novaBold text-blue-900 mb-2 uppercase tracking-wide text-sm">Admission Office Address</p>
                      <address className="not-italic text-gray-800 font-novaReg text-lg leading-relaxed">
                        Admission Office, Ajay Kumar Garg University,<br />
                        27th Km Milestone, Delhi–Meerut Expressway,<br />
                        P.O. Adhyatmik Nagar, Ghaziabad – 201015
                      </address>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowToApply;
