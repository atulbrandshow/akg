"use client";

import React, { useState } from "react";

const Scholarship = () => {
    const [activeScholarship, setActiveScholarship] = useState(0);

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
            criteria:
                "Varies by scheme, generally for economically weaker sections",
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

    return (
        <>
            {/* HERO SECTION */}
            <div className="bg-BG16 w-full h-[60vh] bg-black bg-blend-darken bg-opacity-40 bg-center bg-cover bg-no-repeat">
                <div className="max-w-[1400px] mx-auto h-full px-3 items-end flex justify-start">
                    <div className="text-white">
                        <h2 className="text-[42px] leading-none font-novaReg ">
                            AKG <br /> University, <br /> Scholarship
                        </h2>
                    </div>
                    <div>
                        <img
                            className="w-96"
                            src="/image/scholarship/worth-crore-bg.png"
                            alt="Scholarship"
                        />
                    </div>
                </div>
            </div>

            {/* INTRO SECTION */}
            <div className="bg-BG17 h-[450px] w-full top-20 bg-no-repeat bg-cover">
                <div className="max-w-[1400px] mx-auto h-full px-3">
                    <div className="max-w-2xl">
                        <div className="Cutout py-1.5 bg-[#d7292b] mb-10">
                            <h2 className="text-4xl font-novaReg text-white">
                                Year 2024-2025
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
                        <button className="mt-5 rounded-md uppercase bg-secondary px-5 py-3 text-base font-novaBold tracking-wider hover:text-white text-black shadow-sm hover:bg-[#3c5686] duration-300">
                            Avail Scholarship ➜
                        </button>
                    </div>
                </div>
            </div>

            {/* SCHOLARSHIP SECTION */}
            <section className="px-3">
                <div className="max-w-[1400px] mx-auto py-12 px-3">
                    <div className="grid grid-cols-1 w-full gap-3 md:grid-cols-12">
                        {/* LEFT SIDE */}
                        <div className="col-span-1 md:col-span-3 sticky">
                            <h3 className="text-2xl font-novaReg mb-6">
                                Click below to view other Scholarships
                            </h3>
                            <div className="flex flex-col">
                                {scholarships.map((s, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveScholarship(index)}
                                        className={`flex flex-row p-5 items-center transition-all duration-300 ${activeScholarship === index
                                                ? "bg-[#d91f23] text-white"
                                                : "bg-[#333333] text-white hover:bg-[#d91f23]"
                                            }`}
                                    >
                                        <img
                                            src={s.image}
                                            className="mr-4 rounded-full w-16 h-16 object-cover"
                                            alt={s.title}
                                        />
                                        <p className="text-sm font-novaReg">{s.title}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="px-3 col-span-1 md:col-span-9">
                            <h3 className="text-4xl font-novaReg mb-6">
                                {scholarships[activeScholarship].title}
                            </h3>
                            <div className="p-11 shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] bg-white">
                                <p className="text-lg font-novaLight leading-7">
                                    {scholarships[activeScholarship].description}
                                </p>

                                <p className="mt-6 text-lg font-novaLight leading-7">
                                    These scholarships are subject to maintaining defined academic
                                    performance and attendance criteria, helping students sustain
                                    their focus on learning while easing financial commitments.
                                </p>
                            </div>

                            {/* GOVERNMENT SCHOLARSHIPS TABLE */}
                            <div className="mt-16">
                                <h3 className="text-3xl font-novaReg mb-6 border-l-4 border-[#d91f23] pl-3">
                                    Government & National Scholarships
                                </h3>
                                <div className="overflow-x-auto rounded-lg shadow-md">
                                    <table className="w-full border border-gray-200 text-left text-[15px]">
                                        <thead className="bg-[#d91f23] text-white">
                                            <tr>
                                                <th className="p-4 border-r border-[#c41a1e] font-semibold">
                                                    Scholarship Name
                                                </th>
                                                <th className="p-4 border-r border-[#c41a1e] font-semibold">
                                                    Provider
                                                </th>
                                                <th className="p-4 border-r border-[#c41a1e] font-semibold">
                                                    Eligible Programs
                                                </th>
                                                <th className="p-4 border-r border-[#c41a1e] font-semibold">
                                                    Eligibility Criteria
                                                </th>
                                                <th className="p-4 border-r border-[#c41a1e] font-semibold">
                                                    Benefits
                                                </th>
                                                <th className="p-4 border-r border-[#c41a1e] font-semibold">
                                                    Application Deadline
                                                </th>
                                                <th className="p-4 font-semibold">Official Website</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {governmentScholarships.map((item, idx) => (
                                                <tr
                                                    key={idx}
                                                    className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                                        } hover:bg-[#fff1f1] transition-colors`}
                                                >
                                                    <td className="p-4 border-r">{item.name}</td>
                                                    <td className="p-4 border-r">{item.provider}</td>
                                                    <td className="p-4 border-r">{item.programs}</td>
                                                    <td className="p-4 border-r">{item.criteria}</td>
                                                    <td className="p-4 border-r">{item.benefits}</td>
                                                    <td className="p-4 border-r">{item.deadline}</td>
                                                    <td className="p-4 text-[#d91f23] underline font-medium">
                                                        <a href={item.website} target="_blank" rel="noopener noreferrer">
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
                            <div className="mt-20 bg-gray-50 rounded-xl p-8 shadow-sm">
                                <h3 className="text-3xl font-novaReg mb-6 border-l-4 border-[#d91f23] pl-3">
                                    Migration Policy
                                </h3>
                                <div className="space-y-5 text-[16px] leading-8 text-gray-800">
                                    <p>
                                        Migration is permitted for students from recognized Indian or foreign
                                        universities, subject to regulatory compliance and seat availability within
                                        the desired discipline and year.
                                    </p>
                                    <p>
                                        Typically, migration is allowed after successful completion of the first
                                        year (before or into the third semester), and is not permitted into the
                                        final year/semester.
                                    </p>
                                    <p>
                                        Applicants must have a minimum of <strong>60% aggregate</strong> (or
                                        equivalent CGPA) with no backlogs, and course compatibility is verified
                                        before approval.
                                    </p>

                                    <div className="mt-10">
                                        <h4 className="font-novaBold text-xl text-[#d91f23] mb-2">
                                            Application and Documentation
                                        </h4>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>
                                                Duly filled migration application form with a written request.
                                            </li>
                                            <li>
                                                NOC from the current institution/university and migration certificate.
                                            </li>
                                            <li>Transcripts, ID proof, and character certificate.</li>
                                            <li>Credit transfer details for academic equivalence.</li>
                                        </ul>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="font-novaBold text-xl text-[#d91f23] mb-2">
                                            Process and Regulations
                                        </h4>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>Applications considered only against vacant seats.</li>
                                            <li>Migration does not allow a change in discipline or branch.</li>
                                            <li>Applicants may be interviewed or evaluated academically.</li>
                                            <li>Students must have no disciplinary record or backlogs.</li>
                                        </ul>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="font-novaBold text-xl text-[#d91f23] mb-2">
                                            Special Considerations
                                        </h4>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>International students follow national equivalence norms.</li>
                                            <li>No dual enrollment in other universities is allowed.</li>
                                            <li>
                                                Fee and refund follow AKG University policies at the time of migration.
                                            </li>
                                        </ul>
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
