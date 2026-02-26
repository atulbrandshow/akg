import React from 'react';

const AcademicOverview = () => {
    const coreFunctions = [
        {
            title: "Academic Policy and Regulatory Framework",
            description: "The Office of the Director (Academics) provides strategic academic leadership by formulating comprehensive academic regulations, policies, and quality frameworks aligned with the National Education Policy (NEP), UGC guidelines, and other statutory and regulatory bodies. It ensures effective academic governance and adherence to outcome-based and quality-driven educational practices across the University."
        },
        {
            title: "Curriculum Design and Board of Studies (BoS)",
            description: "Curriculum development and periodic revision are undertaken through structured academic mechanisms involving the Board of Studies, Academic Council, and other statutory bodies. The curriculum is designed to be dynamic, interdisciplinary, industry-relevant, and aligned with graduate attributes, employability skills, and research orientation, ensuring continuous academic enrichment and relevance."
        },
        {
            title: "Technology-Enabled Teaching–Learning Ecosystem",
            description: "The University promotes a digitally integrated teaching–learning environment through Learning Management Systems (LMS) and institutional ERP platforms, enabling effective academic planning, content delivery, continuous assessment, attendance monitoring, and learner progression tracking. This technology-enabled ecosystem strengthens blended learning practices and enhances academic transparency and efficiency."
        },
        {
            title: "Assessment, Evaluation, and Examination Reforms",
            description: "A robust and transparent evaluation framework is implemented through continuous internal assessments, formative and summative evaluation methods, and end-semester examinations. Emphasis is placed on fairness, academic integrity, outcome-based assessment, and continuous improvement of examination processes in line with best academic practices."
        },
        {
            title: "Result Analysis and Academic Performance Monitoring",
            description: "Comprehensive analysis of academic performance data is carried out to monitor attainment of course outcomes and program outcomes. Evidence-based academic interventions, mentoring strategies, and remedial measures are implemented to enhance student learning outcomes and overall academic performance."
        },
        {
            title: "Feedback System and Academic Audit",
            description: "A structured multi-stakeholder feedback mechanism involving students, faculty, alumni, employers, and industry experts is institutionalized to support continuous academic improvement. Periodic internal academic audits and quality reviews ensure compliance with quality benchmarks and foster a culture of accountability and continuous enhancement."
        },
        {
            title: "Academic Governance, Innovation, and Policy Reforms",
            description: "The Office facilitates academic innovation through data-driven decision-making, policy reforms, and strategic initiatives under the guidance of the Academic Council and associated statutory bodies. It promotes academic flexibility, interdisciplinary learning, and continuous quality improvement aligned with institutional vision and mission."
        }
    ];

    return (
        <div className="bg-white p-6 md:p-10 shadow-sm rounded-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-[#1c2b4d] mb-6 font-novaReg">
                Office of the Director (Academics)
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed font-novaReg mb-10 text-justify">
                <p>
                    <strong>About:</strong> The Office of the Director (Academics) at AKG University functions as the apex academic body responsible for providing strategic direction in academic governance, policy formulation, curriculum design, innovation, and quality assurance. The office plays a pivotal role in strengthening the academic framework of the University by fostering a learner-centric, outcome-based, and research-driven ecosystem aligned with national education priorities and global standards.
                </p>
                <p>
                    With a strong commitment to academic excellence, the Office ensures systematic planning, effective implementation, and continuous review of all academic processes, including curriculum development, teaching learning methodologies, faculty development initiatives, academic audits, and student performance monitoring. Emphasis is placed on Outcome-Based Education (OBE), industry integration, interdisciplinary learning, and continuous quality improvement to enhance graduate attributes and employability.
                </p>
                <p>
                    Through robust academic governance and quality assurance practices, the Office of the Director (Academics) strives to uphold the highest standards of higher education while promoting innovation, academic integrity, and excellence in teaching, learning, and research across the University.
                </p>
            </div>

            <h3 className="text-2xl font-bold text-[#1c2b4d] mb-6 font-novaReg border-b pb-2">
                Core Functions
            </h3>

            <div className="space-y-6 font-novaReg">
                {coreFunctions.map((item, index) => (
                    <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                            {/* Checkmark icon for the list item */}
                            <svg className="w-6 h-6 text-[#c1272d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#1c2b4d] mb-2">{item.title}</h4>
                            <p className="text-gray-700 leading-relaxed text-justify">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed font-novaReg text-justify italic font-medium">
                    The Office of the Director (Academics) at AKG University is committed to ensuring a robust, learner-centric, and quality-driven academic ecosystem. Through strong academic governance, outcome-based education, and continuous quality assurance practices, the University strives to nurture competent professionals, ethical leaders, and lifelong learners capable of contributing effectively to industry, society, and national development.
                </p>
            </div>
        </div>
    );
};

export default AcademicOverview;
