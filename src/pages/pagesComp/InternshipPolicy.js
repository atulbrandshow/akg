import React from 'react';
import { motion } from 'framer-motion';

const GuidelineCard = ({ icon, title, items, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-100 border border-gray-100 flex flex-col h-full group hover:border-[#df8934] transition-colors duration-300"
    >
        <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 text-white shadow-lg`}>
            {icon}
        </div>
        <h3 className="text-xl font-novaBold text-[#1c1f52] mb-4">{title}</h3>
        <ul className="space-y-4 flex-grow">
            {items.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#df8934] shrink-0" />
                    <span className="text-sm leading-relaxed font-novaReg">{item}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const InternshipPolicy = () => {
    const sections = [
        {
            title: "Financial & Timing",
            color: "bg-blue-600",
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            items: [
                "A student is not allowed for the internship at 0 (zero) stipend and without PPO.",
                "The internship is allowed in the 8 th Semester only.",
                "In case the student has not received the offer letter he/ she will submit an undertaking that he/ she submit the offer letter after completion of training."
            ]
        },
        {
            title: "Permissions & Logistics",
            color: "bg-emerald-600",
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
            items: [
                "It is mandatory to get the NOC from the Dean T&P for the internship.",
                "The company confirmation is mandatory to allow leaves for all exams, practical & project presentation.",
                "The college academic calendar will be shared with the company."
            ]
        },
        {
            title: "Monitoring & Reporting",
            color: "bg-indigo-600",
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
            items: [
                "Attendance of the student should be submitted by company’s HR from his/her official mail id on internship@akgec.ac.in and cc to tpo@akgec.ac.in on last date of every month.",
                "Faculty mentor must be appointed for such students to keep the record of above documents. It is the responsibility of the mentor to take a review of student’s performance from the company on monthly basis.",
                "The departments must ensure proper monitoring & recording of data of these students during their period of internship."
            ]
        }
    ];

    return (
        <section className="pb-16 px-2">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-gray-100 pb-8 mb-12">
                <div>
                    <h2 className="text-4xl font-novaBold text-[#1c1f52] mb-2 uppercase tracking-tight">Guidelines For NOC</h2>
                    <p className="text-gray-500 font-novaMedium uppercase tracking-widest text-sm text-[#df8934]">Internship Framework for Final Year Students</p>
                </div>
            </div>

            {/* Introductory Context Card */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-indigo-50/50 border border-indigo-100 p-8 rounded-3xl mb-12 text-[#1c1f52]"
            >
                <p className="text-lg font-novaReg leading-relaxed">
                    To ensure smooth process of final year students for internship in industry and course work completion, 
                    the following guidelines are to be strictly followed:
                </p>
            </motion.div>

            {/* Guidelines Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {sections.map((section, idx) => (
                    <GuidelineCard key={idx} {...section} />
                ))}
            </div>

            {/* Critical Contact & Action */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-[#1c1f52] rounded-3xl p-10 text-white relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-world-map opacity-5 grayscale" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-novaBold mb-2">Important Mailing Instructions</h3>
                        <p className="text-indigo-200 font-novaReg">
                            Company HRs are requested to send monthly attendance records to the official 
                            internship desk with a mandatory CC to the TPO.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <a
                            href="mailto:internship@akgec.ac.in"
                            className="bg-[#df8934] hover:bg-orange-600 px-8 py-4 rounded-2xl font-novaBold text-center transition-all flex items-center justify-center gap-3 group"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            internship@akgec.ac.in
                        </a>
                        <p className="text-xs text-center text-indigo-300">CC: tpo@akgec.ac.in</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default InternshipPolicy;
