"use client";

import React from "react";
import Header from "@/Components/Header";
import Breadcrumb from "@/Components/Breadcrumb";
import { Cpu, IndianRupee, Globe, GraduationCap, Send, Briefcase } from "lucide-react";

const SpecializationDetails = ({data}) => {
  console.log("Specialization Details Data:", data);
  const breadcrumbData = [
    { name: "Academics", Link: "/academics" },
    { name: "B.Tech", Link: "/btech" },
    { name: "Artificial Intelligence", Link: "#" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        title={data?.["hero-title"] || data?.hero_title || "B.Tech (CSE) - Artificial Intelligence"}
        subHeading={data?.hero_sub_title || "Future-focused undergraduate program aimed at developing competent engineers with expertise in intelligent computing systems."}
        bgKey="BG1"
      />

      <main className="max-w-[1400px] mx-auto px-6 py-12">
        <Breadcrumb data={breadcrumbData} />

        {/* 1.1 Overview */}
        <section className="mt-12">
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-novaBold text-gray-900">Program Overview</h2>
                {data?.["Overview-Title"] && (
                  <h3 className="text-xl font-novaSemi text-blue-700 mt-1">{data["Overview-Title"]}</h3>
                )}
              </div>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed font-novaReg text-justify">
              {data?.["Overview-Des"] ? (
                <div dangerouslySetInnerHTML={{ __html: data["Overview-Des"] }} />
              ) : (
                <>
                  <p>
                    The B.Tech in Computer Science and Engineering (Artificial Intelligence) at AKGU is a future-focused undergraduate program aimed at developing competent engineers with expertise in intelligent computing systems. The program is designed to provide a strong foundation in core computer science subjects such as programming, data structures, algorithms, databases, computer networks, and operating systems, while progressively introducing advanced concepts in artificial intelligence.
                  </p>
                  <p>
                    Students gain in-depth exposure to key AI domains including machine learning, deep learning, neural networks, natural language processing, computer vision, data analytics, and intelligent automation. The curriculum emphasizes a balanced blend of theory and practice, supported by hands-on laboratory work, project-based learning, internships, and industry-oriented training. This approach enables students to apply AI techniques to solve real-world engineering and societal problems.
                  </p>
                  <p>
                    The program also promotes ethical use of artificial intelligence, critical thinking, innovation, and interdisciplinary learning in alignment with the objectives of NEP 2020. Graduates are well prepared for careers in artificial intelligence, data science, software development, and emerging technology sectors, as well as for higher education, research, and entrepreneurial opportunities in the field of computer science and artificial intelligence.
                  </p>
                </>
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
              <h2 className="text-2xl font-novaBold text-gray-900">Fee Structure</h2>
            </div>
            <p className="text-gray-600 mb-6 font-novaReg text-sm">
              Framed in accordance with UGC fee transparency norms. All payments and refunds shall be governed by the University Fee Refund Policy.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-novaSemi text-blue-800 mb-3 flex items-center gap-2">
                  <IndianRupee className="w-4 h-4" /> National Students
                </h3>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-left font-novaReg">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-2 text-sm font-novaSemi">Year</th>
                        <th className="px-4 py-2 text-sm font-novaSemi">Fee (INR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {data?.FNS && Array.isArray(data.FNS) ? (
                        data.FNS.map((item, idx) => (
                          <tr key={idx}>
                            <td className="px-4 py-2 text-sm">{item.year || `${idx + 1}st Year`}</td>
                            <td className="px-4 py-2 text-sm font-novaSemi">{item.fee}</td>
                          </tr>
                        ))
                      ) : (
                        <>
                          <tr>
                            <td className="px-4 py-2 text-sm">1st Year</td>
                            <td className="px-4 py-2 text-sm font-novaSemi">1,33,500/-</td>
                          </tr>
                          {["2nd Year", "3rd Year", "4th Year"].map((year) => (
                            <tr key={year}>
                              <td className="px-4 py-2 text-sm">{year}</td>
                              <td className="px-4 py-2 text-xs text-gray-500 italic">Will be notified on website</td>
                            </tr>
                          ))}
                        </>
                      )}
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
                        <th className="px-4 py-2 text-sm font-novaSemi">Year</th>
                        <th className="px-4 py-2 text-sm font-novaSemi">Fee Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {data?.FFS && Array.isArray(data.FFS) ? (
                        data.FFS.map((item, idx) => (
                          <tr key={idx}>
                            <td className="px-4 py-2 text-sm">{item.year || `${idx + 1}st Year`}</td>
                            <td className="px-4 py-2 text-sm font-novaSemi">{item.fee || item.status}</td>
                          </tr>
                        ))
                      ) : (
                        ["1st Year", "2nd Year", "3rd Year", "4th Year"].map((year) => (
                          <tr key={year}>
                            <td className="px-4 py-2 text-sm">{year}</td>
                            <td className="px-4 py-2 text-xs text-gray-500 italic">Will be notified on website</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* 1.3 Eligibility Criteria */}
          <section className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-novaBold text-gray-900">Eligibility Criteria</h2>
            </div>
            
            <div className="space-y-6">
              <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="font-novaSemi text-blue-900 mb-2">Indian / National Students</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 font-novaReg">
                  {data?.INS && Array.isArray(data.INS) ? (
                    data.INS.map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <>
                      <li>10+2 or equivalent from recognized Board with Physics, Chemistry, and Mathematics.</li>
                      <li>Minimum 60% aggregate (55% for reserved categories).</li>
                      <li>Admission based on JEE Main / University Entrance Test.</li>
                      <li>Reservation policy as per UP Government norms.</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100">
                <h3 className="font-novaSemi text-indigo-900 mb-2">International / Foreign Students</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 font-novaReg">
                  {data?.IFS && Array.isArray(data.IFS) ? (
                    data.IFS.map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <>
                      <li>12 years of formal schooling equivalent to Indian 10+2.</li>
                      <li>Minimum 50% aggregate marks or equivalent grade.</li>
                      <li>Academic merit based; SAT/JEE/equivalent may be considered.</li>
                      <li>Must submit AIU equivalence certificate, passport, and student visa.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
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
              {data?.HTA_Des ? (
                <div dangerouslySetInnerHTML={{ __html: data.HTA_Des }} />
              ) : (
                <p>
                  Eligible candidates must apply through the official University admission portal by completing online registration, submitting academic details, uploading required documents, and participating in the counselling process. Admission is confirmed after document verification, fee payment, and physical reporting.
                </p>
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
              <h2 className="text-3xl font-novaBold text-gray-900">Career Path</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "AI Engineer", desc: "Designing and deploying intelligent systems and AI-driven applications" },
                { title: "Machine Learning Engineer", desc: "Developing predictive models and learning algorithms" },
                { title: "Data Scientist / Analyst", desc: "Analysing large datasets to extract actionable insights" },
                { title: "Software Engineer", desc: "Building intelligent and scalable software solutions" },
                { title: "Computer Vision Engineer", desc: "Working on image and video processing systems" },
                { title: "NLP Specialist", desc: "Developing language-based AI applications" },
                { title: "Automation & Robotics", desc: "Implementing AI-based automation solutions" },
                { title: "Research Assistant", desc: "Contributing to research in AI and advanced computing" },
                { title: "Higher Studies", desc: "Pursuing M.Tech, MS, or PhD in AI and Data Science" },
                { title: "Entrepreneurship", desc: "Developing innovative AI-based products and technology ventures" },
              ].map((item, idx) => (
                <div key={idx} className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300">
                  <h4 className="font-novaSemi text-blue-900 mb-2 group-hover:text-blue-700">{item.title}</h4>
                  <p className="text-sm text-gray-600 font-novaReg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SpecializationDetails;
