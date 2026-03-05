import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    BookOpen,
    Monitor,
    FileCheck,
    BarChart3,
    Users,
    Lightbulb,
    ArrowRight
} from 'lucide-react';

const AcademicOverview = () => {
    const coreFunctions = [
        {
            title: "Academic Policy and Regulatory Framework",
            description: "The Office of the Director (Academics) provides strategic academic leadership by formulating comprehensive academic regulations, policies, and quality frameworks aligned with the National Education Policy (NEP), UGC guidelines, and other statutory and regulatory bodies.",
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: "Curriculum Design and Board of Studies (BoS)",
            description: "Curriculum development and periodic revision are undertaken through structured academic mechanisms involving the Board of Studies, Academic Council, and other statutory bodies. The curriculum is designed to be dynamic, interdisciplinary, and industry-relevant.",
            icon: <BookOpen className="w-6 h-6" />
        },
        {
            title: "Technology-Enabled Teaching–Learning Ecosystem",
            description: "The University promotes a digitally integrated teaching–learning environment through Learning Management Systems (LMS) and institutional ERP platforms, enabling effective academic planning, content delivery, and learner progression tracking.",
            icon: <Monitor className="w-6 h-6" />
        },
        {
            title: "Assessment, Evaluation, and Examination Reforms",
            description: "A robust and transparent evaluation framework is implemented through continuous internal assessments, formative and summative evaluation methods, and end-semester examinations, ensuring fairness and academic integrity.",
            icon: <FileCheck className="w-6 h-6" />
        },
        {
            title: "Result Analysis and Academic Performance Monitoring",
            description: "Comprehensive analysis of academic performance data is carried out to monitor attainment of course outcomes. Evidence-based academic interventions and mentoring strategies are implemented to enhance student learning.",
            icon: <BarChart3 className="w-6 h-6" />
        },
        {
            title: "Feedback System and Academic Audit",
            description: "A structured multi-stakeholder feedback mechanism involving students, faculty, and industry experts is institutionalized to support continuous improvement. Periodic internal academic audits ensure compliance with quality benchmarks.",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Academic Governance, Innovation, and Policy Reforms",
            description: "The Office facilitates academic innovation through data-driven decision-making and strategic initiatives. It promotes academic flexibility and interdisciplinary learning aligned with institutional vision.",
            icon: <Lightbulb className="w-6 h-6" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className="font-novaReg">
            {/* Intro Section */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative mb-16"
            >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-yellow rounded-full hidden md:block" />
                <div className="md:pl-10">
                    <h2 className="text-4xl md:text-5xl font-novaBold text-brand-blue mb-8 leading-tight">
                        Office of the <span className="text-brand-yellow">Director (Academics)</span>
                    </h2>

                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify md:max-w-4xl">
                        <p>
                            The Office of the Director (Academics) at AKG University functions as the apex academic body responsible for providing strategic direction in academic governance, policy formulation, curriculum design, innovation, and quality assurance. The office plays a pivotal role in strengthening the academic framework of the University by fostering a learner-centric, outcome-based, and research-driven ecosystem aligned with national education priorities and global standards.
                        </p>
                        <p>
                            With a strong commitment to academic excellence, the Office ensures systematic planning, effective implementation, and continuous review of all academic processes, ensuring Outcome-Based Education (OBE), industry integration, and interdisciplinary learning to enhance graduate attributes and employability.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Core Functions Section */}
            <div className="mb-12">
                <div className="flex items-center gap-4 mb-10">
                    <h3 className="text-3xl font-novaBold text-brand-blue whitespace-nowrap">Core Functions</h3>
                    <div className="h-px bg-gray-200 w-full" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {coreFunctions.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-inner">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-novaBold text-brand-blue mb-4 leading-tight min-h-[56px]">
                                {item.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed text-base mb-6">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Mission Card */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-brand-blue p-8 rounded-2xl text-white md:col-span-2 lg:col-span-2 flex flex-col justify-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <h4 className="text-2xl font-novaBold mb-6 text-brand-yellow">Our Commitment</h4>
                            <p className="text-gray-200 text-lg leading-relaxed italic">
                                "The Office of the Director (Academics) is committed to ensuring a robust, learner-centric, and quality-driven academic ecosystem. Through strong academic governance, outcome-based education, and continuous quality assurance, we strive to nurture competent professionals and ethical leaders."
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default AcademicOverview;
