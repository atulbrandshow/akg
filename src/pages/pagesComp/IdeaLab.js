"use client";

import CubeSlider from '@/Components/CubeSlider';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'


const results = [
    {
        title: "Technical Business Incubator Inauguration",
        desc: (
            <>
                AKGEC IDEA Lab Inaugurated a new floor for the Technical Business Incubator. This extended facility aims to provide an opportunity for budding entrepreneurs at AKGEC to catalyze their groundbreaking ventures and innovation. The Startup Conclave promotes a vibrant entrepreneurial ecosystem, inspiring students to turn creative ideas into impactful ventures through teamwork and connections with investors and business leaders.<br />
                The ribbon-cutting ceremony, led by the honorable guests Dr. S P Mishra, Advisor to the Innovation Hub at AKTU Lucknow; Dr. Sandeep Shukla, Professor, CSE at IIT Kanpur, Dr. Anuj Kumar Sharma, Associate Dean of Innovation and Incubation at AKTU, Lucknow, and our esteemed Dr. R K Agarwal, Director General, AKGEC, and Dr. Rahul Sharma, HoD-IT & Head IDEA Lab, alongside Dr. Hemant Ahuja, Director, AKGEC, and all HoDs marked a significant milestone in fostering innovation and entrepreneurship. Here’s to new beginnings! ? #IDEALab #Innovation #Entrepreneurship
            </>
        ),
        width: "w-72",
        slides: [
            { title: 'Idea-Lab', img: "/image/rd/idea-lab/idea_1.jpg" },
            { title: 'Idea-Lab', img: "/image/rd/idea-lab/idea_2.jpg" },
            { title: 'Idea-Lab', img: "/image/rd/idea-lab/idea_3.jpg" },
            { title: 'Idea-Lab', img: "/image/rd/idea-lab/idea_4.jpg" },
            { title: 'Idea-Lab', img: "/image/rd/idea-lab/idea_5.jpg" },
            { title: 'Idea-Lab', img: "/image/rd/idea-lab/idea_6.jpg" },
            { title: 'Idea-Lab', img: "/image/rd/idea-lab/idea_7.jpg" },
        ]
    },
    {
        title: "Startup Conclave-2024",
        desc: (
            <>
                Empowering Innovators: The Startup Conclave was a resounding success! With initial prototype grants of 10 thousand and seed funds up to 3 lakhs, 10 winning teams emerged from a pool of 70 registered ones. The pitching round on 2nd May witnessed the presence of two external judges, including Mr. Rishi Meel, Senior Engineering Manager at Paytm Payments Bank, Mr. Sachin Sharma, Incubation Manager at UPID Noida, and two senior experts from college, Dr. Vani Bhargava, Associate Professor in the Department of Electronics and Communication Engineering and Dr. Ayushi Prakash, Professor of Computer Science Engineering. On 3rd May, winners shared their groundbreaking ideas with distinguished guests Dr. S P Mishra, Advisor to the Innovation Hub at AKTU Lucknow; Dr. Sandeep Shukla, Professor, CSE at IIT Kanpur, Dr. Anuj Kumar Sharma, Associate Dean of Innovation and Incubation at AKTU, Lucknow, Dr. R K Agarwal, Director General, AKGEC, and Dr. Rahul Sharma, HoD-IT and Head IDEA Lab alongside AKGEC’s leadership. Congratulations to the winning teams! ? #StartupConclave #Innovation #Entrepreneurship #AKGEC #IDEALab
            </>
        ),
        width: "w-72",
        slides: [
            { title: 'Startup', img: "/image/rd/idea-lab/startup_1.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_2.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_3.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_4.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_5.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_6.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_7.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_8.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_9.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_10.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_11.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_12.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_13.jpg" },
            { title: 'Startup', img: "/image/rd/idea-lab/startup_14.jpg" },
        ]
    },
    {
        title: "World Intellectual Property Day",
        desc: (
            <>
                AKGEC IDEA Lab celebrated World Intellectual Property Day on April 22, 2024, to raise awareness about Intellectual Property Rights and IP Management. <br />
                The workshop began with an address by Dr. Rahul Sharma, HOD-IT & Dean of IDEA Lab. Following that, Dr. Rahul Sharma felicitated Mr. Khushal Juneja, our first speaker, with a token of appreciation. Mr. Khushal Juneja then proceeded with his session. He shared his insight on the topic “PROCEDURE FOR FILING A PATENT, FOR BOTH NATIONAL AND INTERNATIONAL.” After his session, we expressed our appreciation by presenting him with a certificate of appreciation, given by Dr. Rahul Sharma. <br />
                The second session commenced with an introduction by Dr. Anupama Sharma, Professor Incharge of the IT Branch. Following her introduction, Dr. Anupama presented Dr. Alok Gupta, our second speaker, with a token of appreciation. Dr. Alok Gupta then commenced his session. He shared his knowledge with us on the topic “HOW TO SEARCH, FILE, AND DRAFT A PATENT.” After his presentation, we conveyed our gratitude by presenting him with a certificate of appreciation, presented by Dr. Anupama Sharma. <br />
                The third session began with an introduction by Dr. Ruchi Gupta, Professor Incharge of the CSIT Branch. Following her introduction, Dr. Ruchi presented Mr. Prashant Vaxish, Advocate at the Supreme Court of India, our third speaker, with a token of appreciation. Mr. Prashant Vaxish then proceeded with his session. He shared his valuable insights and details about the “CHALLENGES CREATED BY AI IN REALM OF IP”. After his presentation, we expressed our appreciation by presenting her with a certificate of appreciation, given by Dr. Ruchi Gupta. <br />
                The workshop on IPR and IP management for students concluded with an interactive Q&A session with students. The workshop was truly enthralling and knowledgeable, with the participation of over 150 students across various disciplines. TEAM IDEALAB presents its gratitude to the speakers and attendees.
            </>
        ),
        slides: [
            { title: 'Conclave', img: "/image/rd/idea-lab/Conclave_1.jpg" },
            { title: 'Conclave', img: "/image/rd/idea-lab/Conclave_2.jpg" },
            { title: 'Conclave', img: "/image/rd/idea-lab/Conclave_3.jpg" },
            { title: 'Conclave', img: "/image/rd/idea-lab/Conclave_4.jpg" },
            { title: 'Conclave', img: "/image/rd/idea-lab/Conclave_5.jpg" },
            { title: 'Conclave', img: "/image/rd/idea-lab/Conclave_6.jpg" },
            { title: 'Conclave', img: "/image/rd/idea-lab/Conclave_7.jpg" },
            { title: 'Conclave', img: "/image/rd/idea-lab/Conclave_8.jpg" },
            { title: 'Conclave', img: "/image/rd/idea-lab/Conclave_9.jpg" },
            { title: 'Conclave', img: "/image/rd/idea-lab/Conclave_10.jpg" },
        ]
    }
];

const IdeaLab = () => {
    const [openIndices, setOpenIndices] = useState([0]);

    const toggleDomain = (index) => {
        setOpenIndices((prev) => {
            if (prev.includes(index)) {
                return []
            } else {
                return [index];
            }
        });
    };

    return (
        <section>
            <div className="">
                <div className="container mx-auto px-4 py-8">
                    {/* Hero Section */}
                    <div className="mb-12 text-center">
                        <div className="relative mx-auto mb-8 h-48 w-full max-w-2xl">
                            <Image
                                src="/image/rd/Idea_Lab_Logo.jpg"
                                alt="IDEA Lab Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            AKGEC Technical Business Incubator
                        </h1>
                    </div>

                    {/* Introduction Section */}
                    <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-6 text-2xl font-bold tracking-tight">
                            INTRODUCTION
                        </h2>
                        <blockquote className="mb-6 border-l-4 border-blue-500 pl-4 italic">
                            "The way to get started is to quit talking and begin doing." – Walt
                            Disney
                        </blockquote>
                        <p className="mb-6 leading-7 text-gray-700">
                            Established in the year 2017, IDEA Lab (Innovation, Development of
                            Entrepreneurship and Application Lab) has been continuously working
                            very closely for promoting innovation and entrepreneurship with the
                            aspiring young minds of the college. The basic objective of IDEA Lab
                            is to be a establishing technical business incubator for
                            entrepreneurship development and innovation, which enables
                            establishing new enterprises, creating new job positions, as well as
                            developing new IDEAs and technologies.
                        </p>
                        <p className="leading-7 text-gray-700">
                            The Business Incubator Centre has the tools, expertise, mentors and
                            experience to help early age start-ups and ideas. IDEA Lab is
                            developed to support every small or medium size business idea,
                            innovation, entrepreneurship and start-ups in the college. Our
                            general education is not geared toward teaching the skills to run a
                            business. A great idea can die for failure of proper business
                            principles. That is where the IDEA Lab, Technical Business Incubator
                            Centre at AKGEC does something magical.
                        </p>
                    </div>

                    {/* Objectives Section */}
                    <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-6 text-2xl font-bold tracking-tight">OBJECTIVE</h2>
                        <ol className="list-decimal space-y-4 pl-5">
                            <li className="leading-7 text-gray-700">
                                Promote and accelerate the successful development of entrepreneurial
                                Technology based on Small Enterprises in selected thrust areas such
                                as manufacturing, Internet of Things, Electronics and Energy
                                through an array of business support resources, expertise,
                                facilities and other infra- structure available in the college.
                            </li>
                            <li className="leading-7 text-gray-700">
                                Concentrates on providing opportunities for product development,
                                commercialization, new business model, foster local development and
                                employment of highly skilled graduates.
                            </li>
                            <li className="leading-7 text-gray-700">
                                The incubation model at AKGEC has been adopted to meet a variety
                                of needs, from fostering commercialization of technologies to
                                generation of employment. The incubator facility at AKGEC has the
                                provision of providing the infrastructure, survival and growth
                                which are the major challenges for the start-ups and innovators to
                                develop and to stay in a strategic and good entrepreneurial
                                climate.
                            </li>
                        </ol>
                    </div>
                    <div className="mb-8 grid gap-8 md:grid-cols-2">
                        {/* Vision */}
                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <h2 className="mb-6 text-2xl font-bold tracking-tight">Vision</h2>
                            <p className="leading-7 text-gray-700">
                                To work towards creating a dynamic environment of unhesitant exchange of
                                information and ideas amongst all, the faculty and the students. To contribute
                                towards the growth of society in general and be the ripple that brings the wave
                                of change for the betterment of humankind and the world. Development of a
                                best practice and nurturing environment that supports: New entrepreneurial
                                and innovative businesses, direct and indirect job creation and community
                                development.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <h2 className="mb-6 text-2xl font-bold tracking-tight">Mission</h2>
                            <p className="mb-6 leading-7 text-gray-700">
                                The mission of the IDEA Lab is to help students' ideas and encourage them to
                                think beyond the ordinary, for the betterment of mankind. To make IDEA Lab a
                                place where no idea is considered out of bounds so that there is no pulling
                                back. To encourage students and teachers alike to use their technical skills and
                                inherence managerial skills for the production of goods, or services or an
                                amalgamation of both to bring relief and ease human existence.
                            </p>
                            <p className="leading-7 text-gray-700">
                                The mission of the IDEA Lab is to help students to generate new IDEAs. The
                                IDEAs can be used for a new product or service, or for solving a problem,
                                improving a process or for creating something that never existed. That is up to
                                you.
                            </p>
                        </div>
                    </div>

                    {/* Faculty Coordinators Section */}
                    <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
                            FACULTY COORDINATORS
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            {/* Head IDEA LAB */}
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-4 h-64 w-64 overflow-hidden rounded-lg">
                                    <Image
                                        src="/image/rd/Rahul_Sharma.jpeg"
                                        alt="Prof. Rahul Sharma"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">HEAD IDEA LAB</h3>
                                <p className="text-gray-600">Prof. Rahul Sharma</p>
                            </div>

                            {/* Associate Dean */}
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-4 h-64 w-64 overflow-hidden rounded-lg">
                                    <Image
                                        src="/image/rd/Shilpi-Gupta-1.jpg"
                                        alt="Ms. Shilpi Gupta"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">ASSOCIATE DEAN – IDEA LAB</h3>
                                <p className="text-gray-600">Ms. Shilpi Gupta</p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg">
                        <div className="w-full text-black">
                            {results.map((result, index) => (
                                <div key={index} className="border-b border-gray-300">
                                    <a
                                        onClick={() => toggleDomain(index)}
                                        className={`flex justify-between items-center w-full px-5 py-6 ${openIndices.includes(index) ? 'text-white bg-indigo-950' : 'text-black'} cursor-pointer rounded-lg transition-colors duration-200 hover:bg-indigo-900 hover:text-white`}
                                    >
                                        <span className={`font-semibold`}>
                                            {result.title}
                                        </span>
                                        {openIndices.includes(index) ? (
                                            <ChevronUp className="w-6 h-6" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6" />
                                        )}
                                    </a>
                                    {openIndices.includes(index) && (
                                        <div className="py-10 bg-gray-200 px-5 max-sm:px-2">
                                            <p className="font-novaReg text-base mb-4 leading-snug text-justify">{result.desc}</p>
                                            <CubeSlider width={result.width} slides={result.slides} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IdeaLab