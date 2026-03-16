import React from 'react';
import { motion } from 'framer-motion';

const PolicyCard = ({ icon, title, items, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-100 border border-gray-100 flex flex-col h-full"
    >
        <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 text-white shadow-lg`}>
            {icon}
        </div>
        <h3 className="text-xl font-novaBold text-[#1c1f52] mb-4">{title}</h3>
        <ul className="space-y-4 flex-grow">
            {items.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-gray-600 group">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#df8934] shrink-0 group-hover:scale-150 transition-transform duration-200" />
                    <span className="text-sm leading-relaxed font-novaReg">{item}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const PlacementPolicy = () => {
    const policies = [
        {
            title: "Offer & Salary Policies",
            color: "bg-blue-600",
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            items: [
                "Students are permitted to receive two (2) job offers: one (1) in tech and one (1) in non-tech field.",
                "Students can participate in further drives only if the offered salary is at least Rs. 3 Lac higher than the existing offer.",
                "Selected students can hold two (2) exclusive offer letters simultaneously (one Tech/Core and one Non-Tech).",
                "Eligible students can participate in campus drives until they secure one offer in each category (Tech & Non-Tech)."
            ]
        },
        {
            title: "Attendance & Eligibility",
            color: "bg-emerald-600",
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
            items: [
                "A minimum of 75% attendance in regular classes is mandatory for placement eligibility.",
                "Students not meeting attendance criteria must improve records and get HOD sign-off for re-inclusion.",
                "Students joining any company will be excluded from participating in any future recruitment drives.",
                "Higher studies aspirants must submit a written declaration through their respective HODs."
            ]
        },
        {
            title: "Drive Participation",
            color: "bg-indigo-600",
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>,
            items: [
                "Only registered students can participate. Failure to attend after registration leads to exclusion from next 3 drives.",
                "Strict review of Job Descriptions (JD), company profile, and T&Cs is required before registration.",
                "Prepare well: Research company name, role, criteria, location, stipend, CTC, and bonds before the PPT.",
                "If not satisfied with the Job Description, students are advised NOT to register for that particular drive."
            ]
        },
        {
            title: "Comm. & Conduct",
            color: "bg-rose-600",
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
            items: [
                "All communication will be via registered email and mobile. Regularly checking WhatsApp updates is mandatory.",
                "Academic dishonesty, cheating, or manipulating info will lead to permenant exclusion from all drives.",
                "Contacting company HR via social media or personal emails is strictly prohibited and treated as misconduct.",
                "In case of doubts, contact class placement volunteers or coordinators immediately for prompt resolution."
            ]
        }
    ];

    return (
        <section className="pb-16 px-2">
            {/* Main Title & Session */}
            <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-gray-100 pb-8 mb-12">
                <div>
                    <h2 className="text-4xl font-novaBold text-[#1c1f52] mb-2">Training & Placement Policies</h2>
                    <p className="text-gray-500 font-novaMedium uppercase tracking-widest text-sm text-[#df8934]">Session 2025–2026 @AKGU</p>
                </div>
            </div>

            {/* PDP Attendance Notice Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-orange-50 border-l-8 border-[#df8934] p-8 rounded-3xl mb-16 relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#df8934]/5 rounded-bl-full transition-all duration-500 group-hover:scale-150" />
                <div className="flex items-start gap-5">
                    <div className="bg-[#df8934] p-3 rounded-2xl text-white shadow-lg animate-pulse">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-novaBold text-[#1c1f52] mb-2 uppercase tracking-wide">Critical Attendance Notice</h4>
                        <p className="text-gray-700 leading-relaxed font-novaReg">
                            All students in the 2026 Passing Out Batch must maintain a **minimum of 60% attendance in PDP**. 
                            Those below this threshold must attend placement preparatory sessions (Mock Aptitude, G.D., and Interviews) 
                            to improve their eligibility.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Policy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {policies.map((policy, index) => (
                    <PolicyCard key={index} {...policy} />
                ))}
            </div>

            {/* Escalation & Contact */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-[#1c1f52] text-white p-10 rounded-3xl flex flex-col items-center text-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-world-map opacity-10" />
                <div className="relative z-10 w-full max-w-2xl">
                    <h3 className="text-2xl font-novaBold mb-4">Questions or Concerns?</h3>
                    <p className="text-indigo-200 mb-8 font-novaReg">
                        Our T&P Cell is here to support you. If issues persist after contacting your volunteer, 
                        please escalate via email or visit the office directly.
                    </p>
                    <a
                        href="mailto:tpo@akgec.ac.in"
                        className="inline-flex items-center gap-3 bg-[#df8934] hover:bg-orange-600 px-8 py-4 rounded-full font-novaBold transition-all duration-300 group"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        tpo@akgec.ac.in
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default PlacementPolicy;