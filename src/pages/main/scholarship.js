"use client";

import Breadcrumb from "@/Components/Breadcrumb";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scholarship = ({ data }) => {
  const [activeScholarship, setActiveScholarship] = useState(0);

  // Refs for GSAP animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const scholarshipRef = useRef(null);

  const scholarships = [
    {
      title: "Merit Based Scholarship",
      description: `Ajay Kumar Garg University offers various merit-based scholarships for technical and management programs based on academic performance and entrance examination ranks.`,
      image: "/image/scholarship/logo-1.jpg",
      details: [
        {
          course: "For B.Tech CSE and Specializations",
          table: [
            { sno: 1, category: "Class 10+2 Board Merit Holders", criteria: "98% or above in PCM", benefit: "25% Tuition Fee Waiver" },
            { sno: 2, category: "JEE Main Rank Holders", criteria: "97 Percentile and above", benefit: "100% Tuition Fee Waiver" },
            { sno: "", category: "", criteria: "95 – 96.99 Percentile", benefit: "50% Tuition Fee Waiver" },
            { sno: "", category: "", criteria: "90 – 94.99 Percentile", benefit: "10% Tuition Fee Waiver" },
          ]
        },
        {
          course: "For B.Tech ECE, EE, ME, CE and Specializations",
          table: [
            { sno: 1, category: "Class 10+2 Board Merit Holders", criteria: "90% or above in PCM", benefit: "20% Tuition Fee Waiver" },
            { sno: 2, category: "JEE Main Rank Holders", criteria: "90 Percentile and above", benefit: "20% Tuition Fee Waiver" },
          ]
        },
        {
          course: "For MBA",
          table: [
            { sno: 1, category: "Graduation", criteria: "90% or above", benefit: "10% Tuition Fee Waiver" },
            { sno: 2, category: "CAT / XAT", criteria: "75 Percentile and above", benefit: "10% Tuition Fee Waiver" },
            { sno: "", category: "CMAT / NMAT / SNAP", criteria: "80 Percentile and above", benefit: "10% Tuition Fee Waiver" },
            { sno: "", category: "CUET-PG / MAT", criteria: "Rank 3000 or below", benefit: "10% Tuition Fee Waiver" },
          ]
        },
        {
          course: "For MCA",
          table: [
            { sno: 1, category: "Graduation", criteria: "90% or above", benefit: "10% Tuition Fee Waiver" },
            { sno: 2, category: "CUET-PG", criteria: "Rank 1500 or below", benefit: "10% Tuition Fee Waiver" },
          ]
        },
        {
          course: "For BCA",
          table: [
            { sno: 1, category: "Class 10+2 Board Merit Holders", criteria: "90% or above in Class 12 (any stream)", benefit: "10% Tuition Fee Waiver" },
            { sno: 2, category: "Entrance / Merit Based Admission", criteria: "As per university admission criteria", benefit: "10% Tuition Fee Waiver" },
          ]
        },
        {
          course: "For BBA",
          table: [
            { sno: 1, category: "Class 10+2 Board Merit Holders", criteria: "90% or above in Class 12 (any stream)", benefit: "10% Tuition Fee Waiver" },
            { sno: "", category: "", criteria: "80% – 89.99% in Class 12 (any stream)", benefit: "" },
            { sno: 2, category: "Entrance / Merit Based Admission", criteria: "As per university admission criteria", benefit: "10% – 20% Tuition Fee Waiver (as applicable)" },
          ]
        }
      ]
    },
    {
      title: "Socio-Economic Assistance Scholarship",
      description: `Scholarships provided to meritorious students belonging to the Economically Weaker Section (EWS).`,
      image: "/image/scholarship/logo-4.jpg",
      content: `The scholarship is granted in accordance with the eligibility criteria prescribed by the University and applicable Government norms, ensuring that deserving students receive support to pursue their higher education without financial constraints.`,
      table: [
        {
          sno: 1,
          category: "Economically Weaker Section (EWS)*",
          criteria: "Verified annual family income and excellent academic record (As per Govt. norms)",
          benefit: "Weightage of 5% in merit criteria will be provided for all courses OR 20% Tuition Fee waiver (in 1st year Fee)"
        }
      ],
      footer: "* EWS certificate is required as per prescribed format of Govt. & with other relevant documents."
    },
    {
      title: "Relaxation for exemplary achievements in Sports, Cultural & Arts",
      description: `Providing special weightage to students who have demonstrated excellence in sports, cultural, and arts activities at various competitive levels.`,
      image: "/image/scholarship/logo-5.jpg",
      sections: [
        {
          name: "Sports, Cultural & Arts",
          table: [
            { sno: 1, level: "International level competitions", criteria: "Winner", relaxation: "Relaxation of 10% in admission merit criteria will be provided for all courses." },
            { sno: 2, level: "National level competitions", criteria: "Winner", relaxation: "Relaxation of 5% in admission merit criteria will be provided for all courses." },
            { sno: 3, level: "State level competitions", criteria: "Winner", relaxation: "Relaxation of 3% in admission merit criteria will be provided for all courses." },
          ]
        }
      ]
    },
    {
      title: "Relaxation for Defence Personnel, Martyrs & All Girls",
      description: `Financial assistance and merit relaxations for children of defence personnel, martyrs, and to promote female education.`,
      image: "/image/scholarship/logo-5.jpg",
      sections: [
        {
          name: "Defence Personnel & All Girls",
          table: [
            { sno: 1, category: "Children of Defence Personnel, Martyrs", relaxation: "(a) Students who are dependents of serving or retired defence personnel, as well as children of martyrs who have laid down their lives in the line of duty, shall be eligible for an additional 5% relaxation in the admission merit criteria, based on the verified service category and case status. (b) The extent of the waiver shall be determined in accordance with the University's approved guidelines and upon submission of valid supporting documents issued by competent defence authorities." },
            { sno: 2, category: "All Girls Students", relaxation: "To promote and encourage girls’ participation in higher education, an additional 5% relaxation shall be provided in the admission merit criteria." },
          ]
        }
      ]
    },
    {
      title: "Additional Institutional Scholarships",
      description: `Special provisions for wards of alumni, siblings of currently enrolled students, and wards of employees of AKGU.`,
      image: "/image/scholarship/logo-6.jpg",
      provisions: [
        { name: "Scholarships for Wards of Alumni of AKGU", provision: "Students who are wards of alumni of Ajay Kumar Garg University shall be eligible for an additional 10% relaxation in the admission merit criteria or a 10% tuition fee waiver in the first-year fee , subject to verification of alumni records." },
        { name: "Scholarships for Siblings of Currently Enrolled Students of AKGU", provision: "Students who are siblings of currently enrolled students at Ajay Kumar Garg University shall be eligible for an additional 5% relaxation in the admission merit criteria or a 5% tuition fee waiver in the first-year fee , as per the University guidelines." },
        { name: "Scholarships for Wards of Employees of AKGU", provision: "Students who are wards of employees of Ajay Kumar Garg University shall be eligible for an additional 10% relaxation in the admission merit criteria or a 5% tuition fee waiver in each year of study , subject to verification of employment records and University policies." },
      ]
    },
    {
      title: "Application & Approval Process",
      description: `The formal process for the submission, verification, and approval of scholarship applications at the University.`,
      image: "/image/scholarship/logo-1.jpg",
      steps: [
        { title: "Submission of Application", content: "Students shall submit the scholarship application at the time of admission through the prescribed online or offline application process of Ajay Kumar Garg University." },
        { title: "Document Verification", content: "All supporting documents shall be verified by the Admission Cell in coordination with the Scholarship Committee to confirm the eligibility of the applicant." },
        { title: "Committee Recommendation", content: "The Scholarship Committee shall review the applications based on the prescribed eligibility criteria and availability of scholarships, and thereafter submit its recommendations." },
        { title: "Administrative Approval", content: "Final approval of the recommended candidates shall be granted by the competent authority of the University as per the applicable rules and regulations." },
      ]
    },
  ];

  const activeData = scholarships[activeScholarship];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        heroRef.current.querySelector(".hero-title"),
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        heroRef.current.querySelector(".hero-image"),
        { x: 100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Intro section animations
      gsap.fromTo(
        introRef.current.querySelector(".intro-content"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Scholarship cards animations
      gsap.fromTo(
        scholarshipRef.current.querySelectorAll(".scholarship-card"),
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: scholarshipRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        scholarshipRef.current.querySelector(".scholarship-content"),
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: scholarshipRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div
        ref={heroRef}
        className="bg-BG16 w-full h-[60vh] bg-black bg-blend-darken bg-opacity-40 bg-center bg-cover bg-no-repeat relative overflow-hidden"
      >
        {/* AKG Logo Vector Background */}
        <div className="absolute top-10 right-10 opacity-10">
          <img
            src="/image/akgec-logo.svg"
            alt="AKG Logo"
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-20 w-4 h-4 bg-secondary rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-6 h-6 bg-secondary/70 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-32 w-3 h-3 bg-secondary/50 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-[1400px] mx-auto h-full px-3 items-end flex justify-start relative z-10">
          <div className="hero-title text-white">
            <h2 className="text-[42px] leading-none font-novaReg">
              AKG University <br />{" "}
              <span className="text-secondary">Scholarship</span>
            </h2>
          </div>
          {/* <div className="hero-image">
            <img
              className="w-96 drop-shadow-2xl"
              src="/image/scholarship/worth-crore-bg.png"
              alt="Scholarship"
            />
          </div> */}
        </div>
      </div>
      {/* <section className="max-w-[1400px] mx-auto px-5 max-sm:px-2 py-5">
        {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
      </section> */}

      {/* INTRO SECTION */}
      <div
        ref={introRef}
        className="bg-BG17 h-[450px] w-full top-20 bg-no-repeat bg-cover relative overflow-hidden"
      >
        {/* AKG Logo Vector Background */}
        <div className="absolute bottom-0 right-0 opacity-5">
          <img
            src="/image/akgec-logo.svg"
            alt="AKG Logo"
            className="w-96 h-96 object-contain"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-20 w-20 h-20 border-2 border-secondary/20 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-primary/10 rounded-full"></div>

        <div className="max-w-[1400px] mx-auto h-full px-3 relative z-10">
          <div className="intro-content max-w-2xl">
            <div className="Cutout py-1.5 bg-primary mb-10">
              <h2 className="text-4xl font-novaReg text-white px-6">
                Year 2026-2027
              </h2>
            </div>
            <p className="font-novaLight text-lg leading-6">
              Ajay Kumar Garg University, Ghaziabad is committed to promoting access to quality education by supporting talented and deserving students.

            </p>
            <p className="mt-3 font-novaLight text-lg leading-6">
              The University believes that financial limitations should not prevent capable students from achieving their academic goals.

            </p>
            <p className="font-novaLight text-lg leading-6 mt-3">
              To encourage excellence, the University offers various scholarships and financial assistance schemes based on academic merit and notable achievements in sports and cultural activities.
            </p>
            <p className="mt-3 font-novaLight text-lg leading-6">
              Depending on eligibility, students may receive full or partial tuition fee waivers, enabling them to pursue their education in a motivating and supportive environment.

            </p>
            {/* <button className="mt-5 rounded-md uppercase bg-secondary px-5 py-3 text-base font-novaBold tracking-wider hover:text-white text-black shadow-sm hover:bg-primary duration-300">
              Avail Scholarship ➜
            </button> */}
          </div>
        </div>
      </div>

      {/* SCHOLARSHIP SECTION */}
      <section
        ref={scholarshipRef}
        className="relative px-3 py-16 overflow-hidden"
      >
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>

        {/* AKG Logo Vector Background */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-10">
          <img
            src="/image/akgec-logo.svg"
            alt="AKG Logo"
            className="w-80 h-80 object-contain"
          />
        </div>

        <div className="max-w-[1400px] mx-auto py-12 px-3 relative z-10">
          <div className="grid grid-cols-1 w-full gap-6 md:grid-cols-12">
            {/* LEFT SIDE - Sidebar Navigation */}
            <div className="col-span-1 md:col-span-3 sticky top-24 h-fit">
              <h3 className="text-xl font-novaReg mb-6 text-primary">
                Scholarship Categories
              </h3>
              <div className="flex flex-col space-y-3">
                {scholarships.map((s, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScholarship(index)}
                    className={`scholarship-card flex flex-row p-4 items-center transition-all duration-300 rounded-xl shadow-sm border-2 ${activeScholarship === index
                      ? "bg-primary text-white border-primary transform scale-105 shadow-lg"
                      : "bg-white text-gray-700 border-gray-100 hover:border-secondary hover:shadow-md"
                      }`}
                  >
                    <div className={`w-12 h-12 rounded-full overflow-hidden mr-4 border-2 ${activeScholarship === index ? "border-secondary" : "border-gray-200"}`}>
                      <img
                        src={s.image}
                        className="w-full h-full object-cover"
                        alt={s.title}
                      />
                    </div>
                    <p className="text-sm font-novaBold text-left leading-tight">{s.title}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - Active Content */}
            <div className="scholarship-content px-3 col-span-1 md:col-span-9">
              <div className="mb-12">
                <h3 className="text-4xl font-novaReg mb-8 text-primary border-l-4 border-secondary pl-4">
                  {activeData.title}
                </h3>

                <div className="p-8 shadow-xl bg-white rounded-xl border border-gray-100 relative overflow-hidden mb-8">
                  {/* Card Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <img
                      src="/image/akgec-logo.svg"
                      alt="AKG Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <p className="text-lg font-novaLight leading-8 text-gray-700 relative z-10">
                    {activeData.description}
                  </p>

                  {activeData.content && (
                    <p className="mt-4 text-gray-600 italic relative z-10">
                      {activeData.content}
                    </p>
                  )}

                  {activeData.benefit && !activeData.table && (
                    <div className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg relative z-10">
                      <p className="font-novaBold text-primary">Benefit:</p>
                      <p className="text-gray-700">{activeData.benefit}</p>
                    </div>
                  )}
                </div>

                {/* DYNAMIC DETAILS RENDERING */}
                {activeData.details && activeData.details.map((detail, dIdx) => (
                  <div key={dIdx} className="mb-12">
                    <h4 className="text-2xl font-novaBold mb-4 border-l-4 border-[#FFC526] pl-4 text-slate-800">
                      {detail.course}
                    </h4>
                    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-primary text-white text-[16px]">
                          <tr>
                            <th className="p-4 border-r border-white/10">S.No.</th>
                            <th className="p-4 border-r border-white/10">Admission Category</th>
                            <th className="p-4 border-r border-white/10">Eligibility Criteria</th>
                            <th className="p-4">Benefit</th>
                          </tr>
                        </thead>
                        <tbody className="text-[15px]">
                          {detail.table.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                              <td className="p-4 border-r border-gray-100 font-novaBold text-center">{row.sno}</td>
                              <td className="p-4 border-r border-gray-100">{row.category}</td>
                              <td className="p-4 border-r border-gray-100">{row.criteria}</td>
                              <td className="p-4">{row.benefit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}

                {activeData.table && (
                  <div className="mb-12">
                    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-primary text-white text-[16px]">
                          <tr>
                            <th className="p-4 border-r border-white/10">S.No.</th>
                            <th className="p-4 border-r border-white/10">Admission Category</th>
                            <th className="p-4 border-r border-white/10">Eligibility Criteria</th>
                            <th className="p-4">Benefit</th>
                          </tr>
                        </thead>
                        <tbody className="text-[15px]">
                          {activeData.table.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                              <td className="p-4 border-r border-gray-100 font-novaBold text-center">{row.sno}</td>
                              <td className="p-4 border-r border-gray-100">{row.category}</td>
                              <td className="p-4 border-r border-gray-100">{row.criteria}</td>
                              <td className="p-4">{row.benefit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {activeData.footer && (
                      <p className="mt-4 text-sm text-gray-500 italic font-novaLight">
                        {activeData.footer}
                      </p>
                    )}
                  </div>
                )}

                {activeData.sections && activeData.sections.map((subSection, sIdx) => (
                  <div key={sIdx} className="mb-12">
                    <h4 className="text-2xl font-novaReg mb-4 text-secondary underline decoration-secondary/30 underline-offset-8">
                      {subSection.name}
                    </h4>
                    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-primary text-white text-[16px]">
                          <tr>
                            <th className="p-4 border-r border-white/10">S.No.</th>
                            <th className="p-4 border-r border-white/10">{subSection.name === "Sports, Cultural & Arts" ? "Level" : "Category"}</th>
                            {subSection.name === "Sports, Cultural & Arts" && <th className="p-4 border-r border-white/10">Criteria</th>}
                            <th className="p-4">Relaxation / Benefit</th>
                          </tr>
                        </thead>
                        <tbody className="text-[15px]">
                          {subSection.table.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                              <td className="p-4 border-r border-gray-100 font-novaBold text-center">{row.sno}</td>
                              <td className="p-4 border-r border-gray-100 font-novaBold">{row.level || row.category}</td>
                              {subSection.name === "Sports, Cultural & Arts" && <td className="p-4 border-r border-gray-100">{row.criteria}</td>}
                              <td className="p-4 leading-relaxed">{row.relaxation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}

                {activeData.provisions && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {activeData.provisions.map((prov, pIdx) => (
                      <div key={pIdx} className="p-8 bg-white shadow-lg rounded-2xl border border-gray-100 hover:border-secondary transition-all hover:shadow-xl group">
                        <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                          <i className="ri-award-line text-2xl text-primary group-hover:text-secondary"></i>
                        </div>
                        <h5 className="font-novaBold text-xl text-primary mb-4">
                          {prov.name}
                        </h5>
                        <p className="text-gray-600 leading-relaxed text-[15px] font-novaLight">
                          {prov.provision}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeData.steps && (
                  <div className="space-y-8 mb-12">
                    {activeData.steps.map((step, stIdx) => (
                      <div key={stIdx} className="flex gap-8 items-start p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-secondary/30 transition-all">
                        <div className="flex-shrink-0 w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center font-novaBold text-2xl shadow-lg">
                          {stIdx + 1}
                        </div>
                        <div>
                          <h5 className="font-novaBold text-2xl text-primary mb-3">
                            {step.title}
                          </h5>
                          <p className="text-gray-600 leading-relaxed text-[16px] font-novaLight">
                            {step.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Scholarship;
