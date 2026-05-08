"use client";

import React from "react";
import { 
  Landmark, 
  FileText, 
  ShieldCheck, 
  Smartphone 
} from "lucide-react";

const PaymentProcedure = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 p-8 md:p-12 text-white">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-novaBold">Payment Procedure</h1>
        </div>
        <p className="text-lg text-blue-100 font-novaReg leading-relaxed max-w-3xl">
          AKG University offers multiple options for efficient, hassle-free, and secure fee payment for its students. Different modes of fee payment for Indian Students are given below.
        </p>
      </div>

      <div className="p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Online Payment Card */}
          <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 right-0 p-12 bg-blue-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110 duration-500"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                <Landmark className="w-8 h-8" />
              </div>
              
              <h2 className="text-2xl font-novaBold text-gray-900 mb-4">Online Fee Payment</h2>
              
              <p className="text-gray-700 font-novaReg leading-relaxed">
                Students can make online payment of all fees related to Registration fee/ Academic fee/ Hostel & Other fees through NEFT/RTGS/UPI.
              </p>
            </div>
          </div>

          {/* Offline Payment Card */}
          <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 right-0 p-12 bg-indigo-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110 duration-500"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-200">
                <FileText className="w-8 h-8" />
              </div>
              
              <h2 className="text-2xl font-novaBold text-gray-900 mb-4">Offline Mode of Payment</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 font-novaReg leading-relaxed">
                  Payment may be made through a Demand Draft (DD) drawn in favour of <strong>“Ajay Kumar Garg University”</strong>, payable at Ghaziabad or Delhi.
                </p>

                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                  <Smartphone className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                  <p className="text-amber-900 text-sm font-novaReg italic">
                    Kindly mention your <strong>name and mobile number</strong> on the reverse side of the draft.
                  </p>
                </div>

                <p className="text-gray-700 font-novaReg leading-relaxed">
                  The completed DD may be submitted either by post or in person at the Admission Office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcedure;
