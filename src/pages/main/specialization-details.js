"use client";

import React from "react";
import Header from "@/Components/Header";
import Breadcrumb from "@/Components/Breadcrumb";
import {
  Cpu,
  IndianRupee,
  Globe,
  GraduationCap,
  Send,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const SpecializationDetails = ({ data }) => {
  const pageData = data?.pageData || data;
  console.log("Specialization Details Data:", pageData);

  const getSequentialData = (prefix) => {
    return Object.keys(pageData || {})
      .filter((key) => key.startsWith(prefix))
      .sort((a, b) => {
        console.log("a, b:", a, b);
        const numA = parseInt(a.split("_")[1]);
        const numB = parseInt(b.split("_")[1]);
        return numA - numB;
      })
      .map((key) => pageData[key]);
  };

  const insList = getSequentialData("INS_");
  const ifsList = getSequentialData("IFS_");

  const feeYears = [
    ...new Set(
      Object.keys(pageData || {})
        .filter((key) => key.startsWith("FNS_") || key.startsWith("FFS_"))
        .map((key) => key.replace(/^(FNS_|FFS_)/, ""))
    ),
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        title={
          pageData?.["Hero-Title"] || "B.Tech (CSE) - Artificial Intelligence"
        }
        bgKey="BG1"
      />

      <main className="max-w-[1400px] mx-auto px-6 py-12">
        {/* 1.1 Overview */}
        <section className="mt-12">
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-novaBold text-gray-900">
                  Program Overview
                </h2>
                {pageData?.["Overview-Title"] && (
                  <h3 className="text-xl font-novaSemi text-blue-700 mt-1">
                    {pageData["Overview-Title"]}
                  </h3>
                )}
              </div>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed font-novaReg text-justify">
              {pageData?.["Overview-Des"] ? (
                <div
                  dangerouslySetInnerHTML={{ __html: pageData["Overview-Des"] }}
                />
              ) : (
                <p>Data not available.</p>
              )}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* 1.2 Fee Structure */}
          <section className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-600 rounded-xl">
                <IndianRupee className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-novaBold text-gray-900">
                Fee Structure
              </h2>
            </div>

            <Link
              href="/admissions/course-fee"
              className="inline-flex items-center gap-4 px-6 py-3.5 bg-indigo-50 text-indigo-700 rounded-2xl hover:bg-indigo-600 hover:text-white border border-indigo-100 hover:border-indigo-600 font-novaSemi text-[15px] mb-8 group transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[11px] uppercase tracking-wider opacity-70 font-novaBold">View Details</span>
                <span>Full Fee Structure Breakdown</span>
              </div>
              <div className="flex items-center justify-center w-8 h-8 bg-white/50 group-hover:bg-white/20 rounded-full transition-colors">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            {/* {pageData?.["Fee-Structure-Title"] && (
              <p className="text-gray-600 mb-6 font-novaReg text-sm">
                {pageData["Fee-Structure-Title"]}
              </p>
            )} */}

            {/* <div className="space-y-6">
              <div>
                <h3 className="text-lg font-novaSemi text-blue-800 mb-3 flex items-center gap-2">
                  <IndianRupee className="w-4 h-4" /> National Students
                </h3>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-left font-novaReg">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-2 text-sm font-novaSemi">
                          Year
                        </th>
                        <th className="px-4 py-2 text-sm font-novaSemi">
                          Fee (INR)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {feeYears.map((year) => (
                        <tr key={year}>
                          <td className="px-4 py-2 text-sm">
                            {year.replace("_", " ")}
                          </td>
                          <td className="px-4 py-2 text-sm font-novaSemi">
                            {pageData?.[`FNS_${year}`] || ""}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-novaSemi text-indigo-800 mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Foreign Students
                </h3>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-left font-novaReg">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-2 text-sm font-novaSemi">
                          Year
                        </th>
                        <th className="px-4 py-2 text-sm font-novaSemi">
                          Fee Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {feeYears.map((year) => (
                        <tr key={year}>
                          <td className="px-4 py-2 text-sm">
                            {year.replace("_", " ")}
                          </td>
                          <td className="px-4 py-2 text-sm font-novaSemi">
                            {pageData?.[`FFS_${year}`] || ""}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div> */}
          </section>

          {/* 1.3 Eligibility Criteria */}
          <section className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-novaBold text-gray-900">
                Eligibility Criteria
              </h2>
            </div>
            <Link
              href="/admissions/admission-criteria"
              className="inline-flex items-center gap-4 px-6 py-3.5 bg-indigo-50 text-indigo-700 rounded-2xl hover:bg-indigo-600 hover:text-white border border-indigo-100 hover:border-indigo-600 font-novaSemi text-[15px] mb-8 group transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[11px] uppercase tracking-wider opacity-70 font-novaBold">View Details</span>
                <span>View Eligibility Criteria</span>
              </div>
              <div className="flex items-center justify-center w-8 h-8 bg-white/50 group-hover:bg-white/20 rounded-full transition-colors">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            {/* <div className="space-y-6">
              <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="font-novaSemi text-blue-900 mb-2">
                  Indian / National Students
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 font-novaReg">
                  {insList.length > 0 ? (
                    (console.log("insList", insList),
                      insList.map((item, idx) => <li key={idx}>{item}</li>))
                  ) : (
                    <li>Data not available.</li>
                  )}
                </ul>
              </div>

              <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100">
                <h3 className="font-novaSemi text-indigo-900 mb-2">
                  International / Foreign Students
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 font-novaReg">
                  {ifsList.length > 0 ? (
                    ifsList.map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <li>Data not available.</li>
                  )}
                </ul>
              </div>
            </div> */}
          </section>
        </div>

        {/* 1.4 How to Apply */}
        <section className="mt-8">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 shadow-xl text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-novaBold">How to Apply</h2>
            </div>
            <div className="font-novaReg text-blue-50 leading-relaxed mb-6">
              {pageData?.HTA_Des ? (
                <div dangerouslySetInnerHTML={{ __html: pageData.HTA_Des }} />
              ) : (
                <p>Data not available.</p>
              )}
            </div>
            <button className="bg-brand-yellow text-brand-blue font-novaBold px-8 py-3 rounded-xl hover:bg-yellow-400 transition-colors uppercase tracking-wider shadow-lg">
              Apply Online Today
            </button>
          </div>
        </section>

        {/* 1.5 Career Path */}
        <section className="mt-8 mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-novaBold text-gray-900">
                  Career Path
                </h2>
                {pageData?.["CP-Title"] && (
                  <h3 className="text-xl font-novaSemi text-blue-700 mt-1">
                    {pageData["CP-Title"]}
                  </h3>
                )}
              </div>
            </div>

            <div className="text-gray-700 leading-relaxed font-novaReg text-justify">
              {pageData?.["CP-Des"] ? (
                <div dangerouslySetInnerHTML={{ __html: pageData["CP-Des"] }} />
              ) : (
                <p>Data not available.</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SpecializationDetails;
