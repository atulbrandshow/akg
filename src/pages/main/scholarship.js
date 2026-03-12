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
  const tableRef = useRef(null);
  const migrationRef = useRef(null);

  const scholarships = [
    {
      title: "Merit-Based Scholarships",
      description: `Awarded to students securing top ranks in JEE Main (for B.Tech) or other entrance exams, 
      with tuition fee waivers ranging from 25% to 100% based on rank.`,
      image: "/image/scholarship/logo-1.jpg",
    },
    {
      title: "Academic Excellence Scholarships",
      description: `For students scoring above 65% in qualifying exams, 
      with incremental fee waivers (25%, 50%, 75%, 100%) based on marks percentage.`,
      image: "/image/scholarship/logo-2.jpg",
    },
    {
      title: "Merit cum Means Scholarship",
      description: `For meritorious students from economically weaker sections, 
      providing up to 50% tuition fee waiver.`,
      image: "/image/scholarship/logo-3.jpg",
    },
    {
      title: "Sports Scholarships",
      description: `For students excelling at state, national, or international sports events, 
      offering fee support and incentives.`,
      image: "/image/scholarship/logo-4.jpg",
    },
    {
      title: "Category-Based Government Scholarships",
      description: `Scholarships for SC/ST/OBC/Minority categories based on family income criteria, 
      supported by state government schemes.`,
      image: "/image/scholarship/logo-5.jpg",
    },
    {
      title: "Alumni and Special Scholarships",
      description: `Loan facilities, fee waivers, and financial aid driven by alumni donations 
      and special institutional provisions for deserving candidates.`,
      image: "/image/scholarship/logo-6.jpg",
    },
  ];

  const governmentScholarships = [
    {
      name: "Central Sector Scheme of Scholarships",
      provider: "Government of India",
      programs: "Graduate & Postgraduate",
      criteria: "≥80% in Class 12, pursuing UG/PG courses",
      benefits: "Up to ₹1 lakh per year",
      deadline: "Varies",
      website: "https://scholarships.gov.in",
    },
    {
      name: "National Scholarship Portal (NSP) Scholarships",
      provider: "Government of India",
      programs: "UG, PG, Ph.D.",
      criteria: "Varies by scheme, generally for economically weaker sections",
      benefits: "Tuition fee, maintenance allowance",
      deadline: "Rolling",
      website: "https://scholarships.gov.in",
    },
    {
      name: "Post Matric Scholarship for Minorities",
      provider: "Ministry of Minority Affairs",
      programs: "Graduate & Postgraduate",
      criteria: "Minority candidates, family income ≤ ₹2 lakh/yr",
      benefits: "Tuition & maintenance allowance",
      deadline: "December 31, 2025",
      website: "https://scholarships.gov.in",
    },
    {
      name: "Rajiv Gandhi National Fellowship for SC/ST",
      provider: "Government of India",
      programs: "Ph.D.",
      criteria: "SC/ST candidates enrolled in M.Phil/Ph.D.",
      benefits: "Research fellowship stipend",
      deadline: "Varies",
      website: "https://scholarships.gov.in",
    },
    {
      name: "Prime Minister’s Research Fellowship (PMRF)",
      provider: "Government of India",
      programs: "Ph.D. (STEM fields)",
      criteria: "Excellent academic record, research potential",
      benefits: "Full funding + stipend",
      deadline: "Varies",
      website: "https://pmrf.in",
    },
    {
      name: "UP Pre & Post Matric Scholarship",
      provider: "Government of Uttar Pradesh",
      programs: "Graduate & Postgraduate",
      criteria: "Resident students, income and category-based",
      benefits: "Tuition fee & maintenance",
      deadline: "Varies",
      website: "https://upscholarship.gov.in",
    },
    {
      name: "UP Scholarship for Professional & Technical Courses",
      provider: "Government of Uttar Pradesh",
      programs: "Graduate & Postgraduate",
      criteria: "Reserved category candidates, income criteria",
      benefits: "Tuition fee, exam fee reimbursement",
      deadline: "Varies",
      website: "https://upscholarship.gov.in",
    },
    {
      name: "Maulana Azad National Fellowship",
      provider: "Government of India",
      programs: "M.Phil & Ph.D.",
      criteria: "Minority candidates",
      benefits: "Fellowship plus contingency grant",
      deadline: "Varies",
      website: "https://scholarships.gov.in",
    },
    {
      name: "Central Sector Scheme for SC Students",
      provider: "Government of India",
      programs: "Graduate & Postgraduate",
      criteria: "SC category students with ≥50% in Class 12",
      benefits: "₹50,000 per year",
      deadline: "September 30, 2025",
      website: "https://scholarships.gov.in",
    },
  ];

  // GSAP Animations
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

      // Table animation
      gsap.fromTo(
        tableRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Migration section animation
      gsap.fromTo(
        migrationRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: migrationRef.current,
            start: "top 80%",
            end: "bottom 20%",
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
              AKG <br /> University, <br />{" "}
              <span className="text-secondary">Scholarship</span>
            </h2>
          </div>
          <div className="hero-image">
            <img
              className="w-96 drop-shadow-2xl"
              src="/image/scholarship/worth-crore-bg.png"
              alt="Scholarship"
            />
          </div>
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
              AKG University is committed to supporting talented and deserving
              students through a range of scholarships designed to foster
              academic excellence and provide financial assistance. These
              scholarships aim to reward high achievers, encourage consistent
              performance, and promote inclusivity by supporting students from
              diverse backgrounds.
            </p>
            <p className="mt-3 font-novaLight text-lg leading-6">
              With structured criteria based on entrance ranks, academic
              performance, and socio-economic factors, AKG Scholarships help
              reduce financial barriers and motivate students towards their
              educational and career goals.
            </p>
            <button className="mt-5 rounded-md uppercase bg-secondary px-5 py-3 text-base font-novaBold tracking-wider hover:text-white text-black shadow-sm hover:bg-primary duration-300">
              Avail Scholarship ➜
            </button>
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
            {/* LEFT SIDE */}
            <div className="col-span-1 md:col-span-3 sticky top-20">
              <h3 className="text-2xl font-novaReg mb-6 text-primary">
                Click below to view other Scholarships
              </h3>
              <div className="flex flex-col space-y-2">
                {scholarships.map((s, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScholarship(index)}
                    className={`scholarship-card flex flex-row p-4 items-center transition-all duration-300 rounded-lg shadow-md ${
                      activeScholarship === index
                        ? "bg-primary text-white transform scale-105"
                        : "text-gray-700 hover:bg-primary hover:shadow-lg"
                    }`}
                  >
                    <img
                      src={s.image}
                      className="mr-4 rounded-full w-12 h-12 object-cover border-2 border-secondary"
                      alt={s.title}
                    />
                    <p className="text-sm font-novaReg text-left">{s.title}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="scholarship-content px-3 col-span-1 md:col-span-9">
              <h3 className="text-4xl font-novaReg mb-6 text-primary border-l-4 border-secondary pl-4">
                {scholarships[activeScholarship].title}
              </h3>
              <div className="p-8 shadow-xl bg-white rounded-xl border border-gray-100 relative overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <img
                    src="/image/akgec-logo.svg"
                    alt="AKG Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-lg font-novaLight leading-8 text-gray-700 relative z-10">
                  {scholarships[activeScholarship].description}
                </p>

                <p className="mt-6 text-lg font-novaLight leading-8 text-gray-700 relative z-10">
                  These scholarships are subject to maintaining defined academic
                  performance and attendance criteria, helping students sustain
                  their focus on learning while easing financial commitments.
                </p>
              </div>

              {/* GOVERNMENT SCHOLARSHIPS TABLE */}
              <div ref={tableRef} className="mt-16 relative">
                {/* Background Elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-secondary/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full"></div>
                
                {/* Vector Images */}
                <div className="absolute top-0 left-0 opacity-10">
                  <img
                    src="/image/akgec-logo.svg"
                    alt="AKG Logo"
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <div className="absolute bottom-0 right-0 opacity-10">
                  <img
                    src="/image/akgec-logo.svg"
                    alt="AKG Logo"
                    className="w-48 h-48 object-contain rotate-45"
                  />
                </div>

                <h3 className="text-3xl font-novaReg mb-6 border-l-4 border-secondary pl-4 text-primary relative z-10">
                  Government & National Scholarships
                </h3>
                <div className="overflow-x-auto rounded-xl shadow-2xl relative">
                  {/* Table Background Pattern */}
                  <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
                    <img
                      src="/image/akgec-logo.svg"
                      alt="AKG Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 opacity-10">
                    <img
                      src="/image/akgec-logo.svg"
                      alt="AKG Logo"
                      className="w-full h-full object-contain rotate-12"
                    />
                  </div>

                  <table className="w-full border border-gray-200 text-left text-[15px] relative z-10">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="p-4 border-r border-primary/80 font-semibold">
                          Scholarship Name
                        </th>
                        <th className="p-4 border-r border-primary/80 font-semibold">
                          Provider
                        </th>
                        <th className="p-4 border-r border-primary/80 font-semibold">
                          Eligible Programs
                        </th>
                        <th className="p-4 border-r border-primary/80 font-semibold">
                          Eligibility Criteria
                        </th>
                        <th className="p-4 border-r border-primary/80 font-semibold">
                          Benefits
                        </th>
                        <th className="p-4 border-r border-primary/80 font-semibold">
                          Application Deadline
                        </th>
                        <th className="p-4 font-semibold">Official Website</th>
                      </tr>
                    </thead>
                    <tbody>
                      {governmentScholarships.map((item, idx) => (
                        <tr
                          key={idx}
                          className={`${
                            idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                          } hover:bg-primary/5 transition-colors duration-300`}
                        >
                          <td className="p-4 border-r border-gray-200">
                            {item.name}
                          </td>
                          <td className="p-4 border-r border-gray-200">
                            {item.provider}
                          </td>
                          <td className="p-4 border-r border-gray-200">
                            {item.programs}
                          </td>
                          <td className="p-4 border-r border-gray-200">
                            {item.criteria}
                          </td>
                          <td className="p-4 border-r border-gray-200">
                            {item.benefits}
                          </td>
                          <td className="p-4 border-r border-gray-200">
                            {item.deadline}
                          </td>
                          <td className="p-4 text-primary underline font-medium hover:text-secondary transition-colors">
                            <a
                              href={item.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Site
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* MIGRATION POLICY */}
              <div
                ref={migrationRef}
                className="mt-20 relative overflow-hidden"
              >
                {/* Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5 rounded-xl"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full translate-y-10 -translate-x-10"></div>

                {/* AKG Logo Vector Background */}
                <div className="absolute bottom-4 right-4 opacity-10">
                  <img
                    src="/image/akgec-logo.svg"
                    alt="AKG Logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="absolute top-4 left-4 opacity-10">
                  <img
                    src="/image/akgec-logo.svg"
                    alt="AKG Logo"
                    className="w-28 h-28 object-contain rotate-180"
                  />
                </div>
                <div className="absolute top-1/2 right-1/4 opacity-10">
                  <img
                    src="/image/akgec-logo.svg"
                    alt="AKG Logo"
                    className="w-36 h-36 object-contain rotate-90"
                  />
                </div>

                <div className="relative z-10 rounded-xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-3xl font-novaReg mb-6 border-l-4 border-secondary pl-4 text-primary">
                    Migration Policy
                  </h3>
                  <div className="space-y-6 text-[16px] leading-8 text-gray-700">
                    <p className="bg-white/70 p-4 rounded-lg border-l-4 border-primary/20">
                      Migration is permitted for students from recognized Indian
                      or foreign universities, subject to regulatory compliance
                      and seat availability within the desired discipline and
                      year.
                    </p>
                    <p className="bg-white/70 p-4 rounded-lg border-l-4 border-primary/20">
                      Typically, migration is allowed after successful
                      completion of the first year (before or into the third
                      semester), and is not permitted into the final
                      year/semester.
                    </p>
                    <p className="bg-white/70 p-4 rounded-lg border-l-4 border-primary/20">
                      Applicants must have a minimum of{" "}
                      <strong className="text-primary">60% aggregate</strong>{" "}
                      (or equivalent CGPA) with no backlogs, and course
                      compatibility is verified before approval.
                    </p>

                    <div className="mt-10 bg-white/50 p-6 rounded-lg">
                      <h4 className="font-novaBold text-xl text-primary mb-4 flex items-center">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                        Application and Documentation
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                          Duly filled migration application form with a written
                          request.
                        </li>
                        <li>
                          NOC from the current institution/university and
                          migration certificate.
                        </li>
                        <li>
                          Transcripts, ID proof, and character certificate.
                        </li>
                        <li>
                          Credit transfer details for academic equivalence.
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 bg-white/50 p-6 rounded-lg">
                      <h4 className="font-novaBold text-xl text-primary mb-4 flex items-center">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                        Process and Regulations
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                          Applications considered only against vacant seats.
                        </li>
                        <li>
                          Migration does not allow a change in discipline or
                          branch.
                        </li>
                        <li>
                          Applicants may be interviewed or evaluated
                          academically.
                        </li>
                        <li>
                          Students must have no disciplinary record or backlogs.
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 bg-white/50 p-6 rounded-lg">
                      <h4 className="font-novaBold text-xl text-primary mb-4 flex items-center">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                        Special Considerations
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                          International students follow national equivalence
                          norms.
                        </li>
                        <li>
                          No dual enrollment in other universities is allowed.
                        </li>
                        <li>
                          Fee and refund follow AKG University policies at the
                          time of migration.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Scholarship;
