'use client';

import CubeSlider from "@/Components/CubeSlider";
import { ChevronDown, ChevronUp, BookOpen, Clock, ShieldCheck, Download, Link2, Users, Mail, Phone, BookMarked, Globe, Monitor, Database } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const libraryTabs = [
    { id: "Home", name: "Overview", icon: BookOpen },
    { id: "About", name: "About Library", icon: BookMarked },
    { id: "Digital Library", name: "Digital Library", icon: Monitor },
    { id: "Digital Repository", name: "Digital Repository", icon: Database },
    { id: "E-resources", name: "E-resources", icon: Globe },
    { id: "KOHA OPAC (Search)", name: "Search OPAC", icon: Link2 },
    { id: "Useful Links", name: "Useful Links", icon: Link2 },
    { id: "Library Team", name: "Library Team", icon: Users },
    { id: "Contact Us", name: "Contact Us", icon: Mail },
];

const eResourcesData = [
    {
        id: 1,
        publication: "AKGEC (Greenstone)",
        subject: "Institutional Repository",
        link: "http://10.10.153.40:8080/jspui/",
        note: "Available via Bytepad app on Play Store"
    },
    {
        id: 2,
        publication: "Central Library",
        subject: "Central Library Portal",
        link: "https://www.akgec.ac.in/central-library/"
    },
    {
        id: 3,
        publication: "Web OPAC",
        subject: "KOHA Management System",
        link: "http://117.55.241.42/"
    },
    {
        id: 4,
        publication: "IEEE (ASPP)",
        subject: "CS+EC+EN Telecommunication",
        link: "http://ieeexplore.ieee.org"
    },
    {
        id: 5,
        publication: "Elsevier e-Journals",
        subject: "Engineering & Comp Science",
        link: "http://www.sciencedirect.com/"
    },
    {
        id: 6,
        publication: "DELNET",
        subject: "General Engineering Reference",
        link: "http://www.delnet.in/"
    },
    {
        id: 7,
        publication: "National Digital Library",
        subject: "NDL Portal",
        link: "https://ndl.iitkgp.ac.in/"
    },
    {
        id: 8,
        publication: "MyLOFT",
        subject: "Mobile/System Database Access",
        link: "https://app.myloft.xyz/browse/home"
    },
];

const aboutSections = [
    {
        title: "About AKGEC Central Library",
        desc: "The AKGEC Library System comprises of a Central Library, nine Departmental Libraries and five Hostel Libraries. The Central Library, housed in the Administrative Block, spans 1465 sq. m with seats for 344 users. It features modern reading halls, study cubicles, and a dedicated digital library. Equipped with KOHA Open Source software and DSpace repository, the system provides seamless access to DELNET and National Digital Library resources.",
        images: [
            { title: 'Library', img: "/image/library/Library_1.jpg" },
            { title: 'Library', img: "/image/library/Library_2.jpg" },
        ]
    },
    {
        title: "Library Timings",
        timings: [
            { label: "Normal Working Days", time: "8:30 AM – 9:00 PM" },
            { label: "During University Exams", time: "8:30 AM – 12:01 AM" },
            { label: "Issue & Return of Books", time: "8:40 AM – 3:45 PM" },
            { label: "Digital Library Access", time: "8:30 AM – 9:00 PM" },
            { label: "Reprographic Services", time: "8:30 AM – 7:00 PM" }
        ]
    },
    {
        title: "Library Rules & Guidelines",
        rules: [
            "Mandatory scanning of ID-cum-Library card at entry.",
            "Personal belongings are restricted inside library premises.",
            "Late return fee: Rs. 5/- per day per volume.",
            "Reference books: Overnight issue only (3:15 PM - 3:45 PM).",
            "Silence and discipline are strictly enforced.",
            "Loss of books: Replacement with latest edition required."
        ]
    }
];

const staffData = [
    { name: "Gp Capt I P Sharma (Retd)", position: "Dean Library" },
    { name: "Dr. Shiv Shankar Srivastava", position: "Senior Librarian" },
    { name: "Ms. Kavita Kulshreshtha", position: "Assistant Librarian" },
    { name: "Mr. Ram Abhilash", position: "Library Assistant" },
    { name: "Mr. Dinesh Kumar", position: "Library Assistant" },
    { name: "Mr. Shobhit Kumar Sharma", position: "Library Assistant" },
    { name: "Mr. Rajkumar Sharma", position: "Library Assistant" },
    { name: "Mr. Balkishan", position: "Book Lifter" },
    { name: "Mr. Rajeev Sharma", position: "Book Lifter" },
    { name: "Mr. Ratan Singh", position: "Library Attendant" },
    { name: "Mr. Ritesh", position: "Library Attendant" },
];

const Library = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [openAboutIndex, setOpenAboutIndex] = useState(0);

    const renderContent = () => {
        switch (activeTab) {
            case "Home":
                return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                        <div className="relative group overflow-hidden rounded-3xl h-[450px] shadow-2xl">
                            <img className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110" src="/image/building/central_Library.webp" alt="library" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f52]/90 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-white text-3xl font-novaSemi mb-2">Central Resource Knowledge Hub</h3>
                                <p className="text-gray-200 font-novaReg max-w-2xl">Ensuring seamless access to global knowledge with state-of-the-art facilities and a massive collection of academic resources.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#1c1f52] transition-colors duration-300">
                                    <Globe className="text-[#1c1f52] group-hover:text-white" />
                                </div>
                                <h2 className="font-novaSemi text-2xl mb-4 text-[#1c1f52]">Our Vision</h2>
                                <p className="font-novaReg text-gray-700 leading-relaxed text-justify">To attain high standards of comprehensive services related to dissemination of required information by adoption of state-of-the-art technology thereby creating a welcoming and comfortable physical environment for the user.</p>
                            </div>
                            <div className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#df8934] transition-colors duration-300">
                                    <BookOpen className="text-[#df8934] group-hover:text-white" />
                                </div>
                                <h2 className="font-novaSemi text-2xl mb-4 text-[#df8934]">Our Mission</h2>
                                <p className="font-novaReg text-gray-700 leading-relaxed text-justify">We strive to provide and maintain state-of-the-art comprehensive resource center of books and journals and most efficient library service environment for dissemination of required knowledge to our faculty and students.</p>
                            </div>
                        </div>
                    </motion.div>
                );
            case "About":
                return (
                    <div className="space-y-4">
                        {aboutSections.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                <button
                                    onClick={() => setOpenAboutIndex(openAboutIndex === idx ? -1 : idx)}
                                    className={`w-full flex items-center justify-between p-6 transition-colors ${openAboutIndex === idx ? 'bg-[#1c1f52] text-white' : 'hover:bg-gray-50'}`}
                                >
                                    <span className="font-novaSemi text-lg">{section.title}</span>
                                    {openAboutIndex === idx ? <ChevronUp /> : <ChevronDown />}
                                </button>
                                <AnimatePresence>
                                    {openAboutIndex === idx && (
                                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                            <div className="p-8 bg-gray-50/50">
                                                {section.desc && <p className="font-novaReg text-gray-700 leading-relaxed mb-8">{section.desc}</p>}
                                                {section.timings && (
                                                    <div className="grid gap-4">
                                                        {section.timings.map((t, i) => (
                                                            <div key={i} className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100">
                                                                <span className="font-novaSemi text-[#1c1f52] flex items-center gap-2"><Clock size={16} /> {t.label}</span>
                                                                <span className="font-novaBold text-[#df8934]">{t.time}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                {section.rules && (
                                                    <div className="grid sm:grid-cols-2 gap-4">
                                                        {section.rules.map((rule, i) => (
                                                            <div key={i} className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100">
                                                                <ShieldCheck className="text-green-500 shrink-0 mt-1" size={18} />
                                                                <span className="text-sm font-novaReg">{rule}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                {section.images && <div className="mt-8"><CubeSlider width="w-full" slides={section.images} /></div>}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                );
            case "E-resources":
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {eResourcesData.map((res) => (
                            <motion.div key={res.id} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                                <span className="text-[10px] uppercase tracking-widest font-novaBold text-[#df8934]">{res.subject}</span>
                                <h4 className="text-xl font-novaSemi text-[#1c1f52] mt-2 group-hover:text-[#df8934] transition-colors">{res.publication}</h4>
                                {res.note && <p className="text-xs text-gray-400 mt-2 mb-4 italic">{res.note}</p>}
                                <Link target="_blank" href={res.link} className="inline-flex items-center gap-2 text-blue-600 font-novaReg text-sm mt-4 group">
                                    Access Portal <Link2 size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <div className="mt-4 w-12 h-0.5 bg-gray-100 group-hover:w-full transition-all duration-500" />
                            </motion.div>
                        ))}
                    </div>
                );
            case "Library Team":
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {staffData.map((member, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#1c1f52]/30 transition-all">
                                <div className="w-12 h-12 bg-[#1c1f52]/5 rounded-full flex items-center justify-center text-[#1c1f52]">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <h5 className="font-novaSemi text-[#1c1f52] text-sm">{member.name}</h5>
                                    <p className="text-xs text-gray-500 font-novaReg">{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case "Contact Us":
                return (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-[#1c1f52] to-[#2a2e6e] p-10 rounded-3xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl font-novaSemi text-[#df8934]">Reach Out to Us</h3>
                                <p className="text-gray-300">Our librarians are available to assist you with research, resources, and any inquiries regarding the central library.</p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#df8934] transition-colors"><Mail size={20} /></div>
                                        <div><p className="text-xs text-gray-400">Email Address</p><a href="mailto:srivastavass@akgec.ac.in" className="font-novaSemi">srivastavass@akgec.ac.in</a></div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#df8934] transition-colors"><Phone size={20} /></div>
                                        <div><p className="text-xs text-gray-400">Mobile Number</p><p className="font-novaSemi">+91 9818590621</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-auto text-center md:text-left bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                <h4 className="font-novaSemi mb-2">Dr. Shiv Shankar Srivastava</h4>
                                <p className="text-sm text-gray-300 italic mb-4">Senior Librarian</p>
                                <p className="text-xs text-gray-200">Central Library, Admin Block<br />Ajay Kumar Garg Engineering College<br />Ghaziabad, UP – 201015</p>
                            </div>
                        </div>
                    </motion.div>
                );
            case "Digital Library":
            case "Digital Repository":
            case "Useful Links":
            case "KOHA OPAC (Search)":
                return (
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                        <Globe className="text-[#df8934] mb-6" size={48} />
                        <h3 className="text-2xl font-novaSemi text-[#1c1f52] mb-4">External Portal Access</h3>
                        <p className="text-gray-600 mb-8 max-w-lg">Click the button below to access the secure external portal for {activeTab}.</p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            target="_blank"
                            href={activeTab === "Digital Library" ? "https://app.myloft.xyz/user/login" : activeTab === "Useful Links" ? "https://nptel.ac.in/" : "http://117.55.241.42/"}
                            className="px-10 py-4 bg-[#df8934] text-white font-novaSemi rounded-full shadow-lg shadow-[#df8934]/30 hover:bg-[#c6762a] transition-all flex items-center gap-3"
                        >
                            Open External Portal <Link2 size={18} />
                        </motion.a>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative font-novaReg">
            {/* Main Container */}
            <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden min-h-[800px] flex flex-col lg:flex-row">
                
                {/* Lateral Sidebar Navigation */}
                <div className="w-full lg:w-[320px] bg-gray-50/80 border-r border-gray-100 p-8 pt-12 flex flex-col gap-8">
                    <div className="flex items-center gap-3 px-2">
                        <div className="p-2 bg-[#1c1f52] rounded-lg">
                            <BookOpen className="text-white" size={24} />
                        </div>
                        <h2 className="text-2xl font-novaSemi text-[#1c1f52]">Library <span className="text-[#df8934]">Hub</span></h2>
                    </div>

                    <nav className="flex flex-col gap-2">
                        {libraryTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${activeTab === tab.id ? 'bg-[#1c1f52] text-white shadow-xl shadow-indigo-900/20 translate-x-2' : 'hover:bg-white hover:shadow-md text-gray-600 hover:text-[#1c1f52]'}`}
                            >
                                <tab.icon size={20} className={`${activeTab === tab.id ? 'text-[#df8934]' : 'text-gray-400 group-hover:text-[#1c1f52]'}`} />
                                <span className="font-novaSemi text-sm whitespace-nowrap">{tab.name}</span>
                                {activeTab === tab.id && <motion.div layoutId="active" className="ml-auto w-1.5 h-1.5 bg-[#df8934] rounded-full" />}
                            </button>
                        ))}
                    </nav>

                    {/* Quick Access Manual Card */}
                    <div className="mt-12 p-6 rounded-3xl bg-white border border-gray-100 shadow-xl relative group overflow-hidden">
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-50/50 rounded-full group-hover:scale-150 transition-transform duration-700" />
                        <div className="relative z-10">
                            <Download className="text-blue-500 mb-4" size={24} />
                            <h5 className="font-novaSemi text-sm mb-2 text-[#1c1f52]">Central User Manual</h5>
                            <p className="text-[10px] text-gray-500 mb-4">Complete guide for students and faculty members.</p>
                            <Link href="/pdf/library/User-Manual-AKGEC1.pdf" target="_blank" className="text-xs text-blue-600 font-novaBold flex items-center gap-1 hover:gap-2 transition-all">
                                Download PDF <Link2 size={12} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Dynamic Content Area */}
                <div className="flex-1 bg-white p-8 lg:p-12 overflow-y-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex justify-between items-end mb-12">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-[2px] bg-[#df8934]" />
                                        <span className="text-xs uppercase tracking-[0.2em] font-novaBold text-[#df8934]">Section: {activeTab}</span>
                                    </div>
                                    <h2 className="text-4xl font-novaSemi text-[#1c1f52] tracking-tight">{libraryTabs.find(t => t.id === activeTab)?.name}</h2>
                                </div>
                                <div className="hidden sm:block">
                                    <img src="/image/akgec-logo.svg" alt="Logo" className="w-16 opacity-10" />
                                </div>
                            </div>

                            <div className="min-h-[500px]">
                                {renderContent()}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
            
            {/* Atmospheric Background Blurs */}
            <div className="fixed -top-40 -right-40 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="fixed -bottom-40 -left-40 w-[600px] h-[600px] bg-orange-50/30 rounded-full blur-[100px] pointer-events-none -z-10" />
        </div>
    );
};

export default Library;
