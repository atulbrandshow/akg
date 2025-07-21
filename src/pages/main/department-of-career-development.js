"use client";

import { useState } from 'react'
import Image from 'next/image'
import { GraduationCap, BookOpen, Building, ChevronDown, ChevronUp } from "lucide-react"

const domains = {
    'Technical Skills': [
        'Introduction to Programming (Python, Java)',
        'Web Development (HTML, CSS, JavaScript)',
        'Data Science and Analytics',
        'Database Management Systems (MySQL, MongoDB)',
        'Cloud Computing (AWS, Azure)'
    ],
    'Quantitative Skills': [
        'Mathematical Aptitude',
        'Critical Thinking and Logical Reasoning',
        'Statistics and Data Analysis'
    ],
    'Professional Skills': [
        'Effective Communication',
        'Teamwork and Collaboration',
        'Leadership and Interpersonal Skills',
        'Resume Building and Interview Techniques',
        'Industry Mock Interviews and Workshops'
    ]
}


const leftSections = [
    {
        title: 'Outcome-Focused Curriculum',
        content: [
            'Ongoing Research and Development for Curriculum Enhancement',
            'Tailored Learning Experiences for Individual Student Needs',
            'Regular Feedback Mechanisms for Continuous Improvement'
        ]
    },
    {
        title: 'Extensive Study Resources',
        content: [
            'Subject-Specific Textbooks and Reference Materials',
            'Personalized Study Guides and Handouts',
            '3000+ Practice Questions Available for Each Course'
        ]
    },
    {
        title: 'State-of-the-Art Facilities',
        content: [
            'Dedicated Computer and Software Labs',
            'Smart Classrooms with Interactive Tools',
            'Library with Extensive Digital Resources'
        ]
    },
    {
        title: 'Hands-On Learning Approach',
        content: [
            'Interactive Workshops and Seminars',
            'Group Projects and Collaborative Learning',
            'Case Studies and Real-World Applications',
            'Industry Internships and Practical Training'
        ]
    },
    {
        title: 'Personalized Support Services',
        content: [
            'Weekend Skill Development Sessions',
            'After-Hours Tutoring and Mentoring (Optional)',
            'One-on-One Counseling for Academic Guidance'
        ]
    }
]

const rightSections = [
    {
        title: 'Expert Faculty and Trainers',
        content: [
            'Ongoing performance evaluations and constructive feedback',
            'Regular Faculty Development Programs (FDPs)'
        ]
    },
    {
        title: 'Continuous Assessment Framework',
        content: [
            'Comprehensive Assessments (e.g., AMCAT/CU-CAT)',
            'Regular Feedback Mechanisms for Improvement',
            'Open Communication Channels for Student Queries'
        ]
    },
    {
        title: 'Tailored Support Services',
        content: [
            'Dedicated Mentorship Initiatives',
            'Targeted Doubt-Clearing Sessions on Weekdays and Weekends'
        ]
    },
    {
        title: 'Engaging Extracurricular Activities',
        content: [
            'Company-Specific Training Workshops',
            'Seasonal Training Camps (Summer/Winter)',
            'Events Focused on Soft Skills and Technical Skills',
            'Guest Lectures by Industry Experts'
        ]
    },
    {
        title: 'Diverse Training Modalities',
        content: [
            'Incorporation of Credit-Based Courses in the Curriculum',
            'Comprehensive Training and Placement Programs'
        ]
    }
]

const DepartmentCareerDevelopment = () => {
    const [openDomain, setOpenDomain] = useState('IT Skills');
    const [openSections, setOpenSections] = useState({
        'Result Oriented Content': true,
        'Dynamic Team of Trainers': true
    })

    const toggleDomain = (domain) => {
        setOpenDomain(openDomain === domain ? null : domain)
    }

    const toggleSection = (title) => {
        setOpenSections(prev => ({ ...prev, [title]: !prev[title] }))
    }

    const renderSection = (section) => (
        <div key={section.title} className="mb-2">
            <button
                onClick={() => toggleSection(section.title)}
                className="w-full font-novaBold uppercase text-lg flex justify-between items-center bg-secondary p-3 text-black transition-colors duration-200"
            >
                <span>{section.title}</span>
                {openSections[section.title] ? (
                    <ChevronUp className="w-5 h-5" />
                ) : (
                    <ChevronDown className="w-5 h-5" />
                )}
            </button>
            {openSections[section.title] && section.content.length > 0 && (
                <ul className="bg-transparent list-disc p-3">
                    {section.content.map((item, index) => (
                        <li key={index} className="ml-5 font-novaReg text-[15px]">{item}</li>
                    ))}
                </ul>
            )}
        </div>
    )

    return (
        <section className='bg-PaperBackground'>
            <div className='relative bg-BG47 bg-cover h-[100vh] max-2xl:h-[90vh] max-lg:h-[80vh] max-md:h-[70vh] bg-top flex items-end'>
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'/>
                <div className='relative text-white w-full max-w-7xl mx-auto mb-20 max-md:mb-5 px-4'>
                    <span className='text-sm text-gray-300 tracking-widest uppercase font-novaReg'>Career - placements</span>
                    <h1 className='my-2 text-5xl max-lg:text-4xl max-w-2xl font-novaSemi uppercase'>Today's Actions Shape Tomorrow's Success</h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-16 max-lg:py-12 max-md:py-10 max-sm:px-3 max-sm:py-8">
                <div className="grid md:grid-cols-2 gap-8 max-md:gap-6 max-sm:gap-4">
                    <div>
                        <Image
                            src="/image/placements/three-students.webp"
                            alt="Students studying together"
                            width={600}
                            height={300}
                            className="shadow-cardShadow mb-10 max-md:mb-8 max-sm:mb-6"
                        />
                        <h2 className="text-4xl font-novaLight mb-4 max-sm:text-2xl max-sm:mb-2">Our Approach to Success:</h2>
                        <ul className="list-disc pl-5 space-y-2 text-justify">
                            <li>Assessing industry trends and preparing students to meet evolving placement demands.</li>
                            <li>Delivering high-quality training that equips students with essential skills and knowledge.</li>
                            <li>Evaluating students' current competencies and creating tailored development plans to transform them into industry-ready professionals.</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-4xl font-montserrat font-bold mb-6 max-sm:text-2xl max-sm:mb-3">Career Development and Planning Department</h1>
                        <p className="mb-4 text-lg font-novaLight text-justify max-sm:text-base max-md:mb-3 max-sm:mb-2">
                            <strong>AKG University</strong> is committed to fostering continuous learning and professional development among students. We strive to nurture their career growth from the moment they step into AKG University, guiding them to build strong personal and professional competencies. Through engaging and dynamic learning approaches, we fulfill the aptitude, verbal ability, and soft skills training needs across all Engineering and Non-Engineering departments at AKG University.
                        </p>
                        <p className="text-lg font-novaLight mb-4 text-justify max-sm:text-base max-sm:mb-3">
                            <strong>Vision:</strong> To equip students with a robust platform to develop and refine their professional skills, empowering them for a successful career.
                        </p>
                        <Image
                            src="/image/placements/students.webp"
                            alt="Students collaborating on a project"
                            width={600}
                            height={300}
                            className="shadow-cardShadow mt-10 max-md:mt-8 max-sm:mt-6"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-indigo-600 text-white py-16 px-4 max-lg:py-12 max-md:py-10 max-sm:py-8 max-sm:px-2">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-montserrat text-center mb-12 max-md:text-3xl max-sm:text-2xl max-lg:mb-10 max-md:mb-8 max-sm:mb-6">Our Range of Opportunities</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-md:gap-6 max-sm:gap-4">
                        <div className="text-center">
                            <div className="inline-block p-4 bg-white rounded-full mb-4 max-sm:p-2.5 max-sm:mb-2.5">
                                <GraduationCap className="w-12 h-12 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-montserrat font-bold mb-2 max-sm:text-base max-md:text-lg">Career-Ready Training</h3>
                            <p className="text-sm font-novaLight max-sm:text-xs">
                                Preparing students to successfully navigate different stages of Placement Drives.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-block p-4 bg-white rounded-full mb-4 max-sm:p-2.5 max-sm:mb-2.5">
                                <BookOpen className="w-12 h-12 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-montserrat font-bold mb-2 max-sm:text-base max-md:text-lg">Examination & Civil Services Coaching</h3>
                            <p className="text-sm font-novaLight max-sm:text-xs">
                                Preparing students for Government job opportunities and success in IAS, SSC, and Bank PO entrance exams.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-block p-4 bg-white rounded-full mb-4 max-sm:p-2.5 max-sm:mb-2.5">
                                <Building className="w-12 h-12 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-montserrat font-bold mb-2 max-sm:text-base max-md:text-lg">Guidance for Higher Studies Entrance Exams</h3>
                            <p className="text-sm font-novaLight max-sm:text-xs">
                                Preparing to excel in entrance exams for higher studies, including GRE, GMAT, IELTS, and GATE.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-8 max-lg:p-7 max-md:p-6 max-sm:p-5">
                <h1 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800 max-md:text-3xl max-sm:text-2xl max-lg:mb-10z max-md:mb-8 max-sm:mb-6">Domains of Training</h1>
                <div className="flex flex-col md:flex-row gap-8 items-start max-md:gap-6 max-sm:gap-4">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/image/placements/computer-group.webp"
                            alt="Training session"
                            width={600}
                            height={400}
                            className="shadow-cardShadow"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-black">
                        {Object.entries(domains).map(([domain, skills]) => (
                            <div key={domain} className="mb-4 max-sm:mb-2">
                                <button
                                    onClick={() => toggleDomain(domain)}
                                    className="w-full flex justify-between items-center p-4 rounded-lg bg-blue-200 shadow-md transition-colors duration-200 max-md:p-3 max-sm:p-2.5"
                                >
                                    <span className="text-lg font-montserrat font-bold max-md:text-base max-sm:text-sm">{domain}</span>
                                    {openDomain === domain ? (
                                        <ChevronUp className="w-6 h-6" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6" />
                                    )}
                                </button>
                                {openDomain === domain && (
                                    <ul className="mt-2 list-disc bg-transparent rounded-lg shadow-inner p-4 max-md:p-3 max-sm:mt-1 max-sm:p-2.5">
                                        {skills.map((skill, index) => (
                                            <li key={index} className="ml-5 py-2 font-novaReg text-black max-sm:ml-2.5">
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-BG42 bg-cover bg-cente bg-gray-800 bg-opacity-80 bg-blend-multiply text-white py-14 max-lg:py-12 max-md:py-10 max-sm:py-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-montserrat font-bold leading-none text-center mb-2 max-md:text-3xl max-sm:text-2xl">Benefits of Choosing the Department of Career</h1>
                    <h1 className="text-4xl font-montserrat font-bold text-center mb-4 max-md:mb-3 max-sm:mb-2.5 max-md:text-3xl max-sm:text-2xl">Planning for Future Development</h1>
                    <p className="text-center text-sm">Provides Diverse Career Pathways Beyond Your Main Discipline</p>
                    <div className="grid md:grid-cols-2 gap-8 mt-14 px-3 max-md:gap-6 max-sm:gap-4 max-lg:mt-12 max-md:mt-10 max-sm:mt-8">
                        <div>
                            {leftSections.map(renderSection)}
                        </div>
                        <div>
                            {rightSections.map(renderSection)}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mx-auto py-16 text-center text-black max-lg:py-14 max-md:py-12 max-sm:py-10'>
                <div className='max-w-xl mx-auto'>
                    <h2 className='text-5xl tracking-wider font-montserrat font-bold max-lg:text-4xl max-md:text-4xl max-sm:text-3xl'>Our Commitment</h2>
                    <p className='mt-5 px-2 font-novaReg text-xl max-md:text-lg max-sm:text-base'>Our goal in the Department of Career Planning & Development is to bridge the gap between today's industry pioneers and the aspiring leaders of tomorrow.</p>
                </div>
            </div>
        </section>
    )
}

export default DepartmentCareerDevelopment