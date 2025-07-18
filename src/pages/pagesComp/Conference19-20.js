"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CubeSlider from '@/Components/CubeSlider';

const conferenceData = [
    {
        title: "National Conference - Emerging Trends in Electronics & Communication-2019 (ETEC-2019)",
        summary: [
            "Department of Electronics & Communication Engineering organized two Days National Conference on Emerging Trends in Electronics & Communication-2019 (ETEC-2019) from 5-6 February, 2019. Emerging technologies of Electronics & Communication does not only satisfy the growing demands of end users but also poses several challenges to the researchers. Thus, the main objective of this conference (ETEC-2019) is to provide a platform for researchers, industry experts and faculty of various university to share their ideas/ research work over the latest developments in this field",

            "Undoubtedly, Electronics & Communication has crept into every sphere of human life e.g., pocket FM radio to televisions, computers, internet, mobile phones and even the high-end satellites, thus increasing its scope manifolds for mankind. The resource personnel for this conference were accomplished experts from organizations like ITU, BEL, ISRO, BSNL, IITs, NSIT, DTU etc.",

            "The resource personnel for this conference were accomplished experts from various organizations. The details are given below:"
        ],
        slides1: [
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ETEC1.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ETEC2.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ETEC3.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ETEC4.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ETEC5.webp' },
        ],
        slides2: [
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ETEC6.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ETEC7.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ETEC8.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ETEC9.webp' },
        ]
    },
    {
        title: "National Conference - Mechanical and Automation Engineering (MAAE-2020)",
        summary: [
            "Department of Mechanical Engineering AKGU organized the conference Mechanical and Automation Engineering (MAAE-2020), during 7-8 February 2020. The aim of the conference was to provide a knowledge sharing platform for researchers, academicians and industry personnel. The conference also provided an opportunity to students to get exposed to the culture of academic development and to the field of research and innovation.",

            "Research papers were invited on topics including Unconventional Manufacturing, Automation & Robotics, product Development and PLM, Non Destructive Testing, Mechatronics, Additive Manufacturing, Flexible Manufacturing System, Concurrent Engineering, Simulation and Modelling and more.",

            "The patrons and organizers were honored to have senior academicians from IITs, NITs and other eminent technical institutions on the Technical and Advisory Board of the Conference.",

            "Air Marsal R.K.S. Shera, PVSM, AVSM, VSM (Retd.), graced the opening ceremony as the Chief Guest, Dr. P.C. Pant, Director, HRD Innovative Projects, Ministry of New and Renewable Energy, was the Guest of Honour and Dr. Rajeev Agrawal, Associate Professor and Associate Dean (Research) , Malaviya National Institute Of Technology, Jaipur, was the Key Note Speaker. The opening ceremony was attended by Director General AKGU Dr. R.K. Agarwal, Heads of Departments, Deans, faulty, delegates and the students.",

            "Dr. Devender Singh, HoD Mechanical Engineering and Convenor of the Conference, introduced the theme of the Conference by sharing his industrial experiences.",

            "Dr. R.K. Agarwal, Director General AKGU, welcomed the guests and the participants and expressed his views on the various aspects of Automation. He conveyed his best wishes to the participants and urged them to use the conference as a great opportunity for learning and sharing.",

            "The Chief Guest R.K.S. Shera made note of his illustrious career at the Indian Air Force and pointed out the opportunities and challenges that engineers can find in a career at the IAF. He urged the budding engineers to join the Indian Air Force for a fruitful career and service to the Nation.",

            "Dr. P.C. Pant, Guest of Honor, deliberated on his personal experiences in the field of renewable energy and its importance in Automation and Robotics. Keynote Speaker Dr. Rajeev Agrawal, deliberated on Automation, the theme of the Conference, and further extended his talk to Autonomation – ‘Automation with human intelligence’ wherein machines can be made capable to predict defects. He sighted various case studies on Autonomation and advised the students and faculty to explore it as a new field for research.",

            "5 papers were received from academicians and researchers from institutions including IIM Kolkata; YMCA, Faridabad; NIT Jamshedpur; Rajkiya University, Mainpuri; Chhatrapati Shivaji University, Navi Mumbai;  Thapar Institute of Engineering and Technology, Patiala and Colleges affiliated to Dr. A.P.J. Abdul",

            "Kalam Technical University, Lucknow. 36 papers were selected for presentation and inclusion in e-proceedings after a blind peer review process.",

            "The conference ended with the valedictory function. Certificates and conference CDs were presented to the participants."
        ],
        slides1: [
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ME2020_1.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ME2020_2.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ME2020_3.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ME2020_4.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ME2020_5.webp' },
        ],
        slides2: [
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ME2020_6.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ME2020_7.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ME2020_8.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/ME2020_9.webp' }
        ]
    },
    {
        title: "National Conference - Information Technology for Business Transformation (ITBT’19)",
        summary: [
            "6th National Conference on Information Technology for Business Transformation (ITBT’19) was organized jointly by Department of Information Technology and Department of Computer Science and Engineering during 8-9 Nov, 2019. The conference was technically sponsored by Institution of Electronics and Telecommunication Engineers (IETE), Computer Society of India (CSI)-Ghaziabad Chapter, Ghaziabad Management Association (GMA).",

            "Honorable Chief Guest, Mr. Prateek Garg, CEO & MD, Progressive Infotech Ltd., Noida, discussed challenges and opportunities in business life and focused on soft skills development. Guest of Honor, Mr. Anup Kapoor, Vice President and Global Head of Operations, Infosys BPM Noida, emphasized on three pillars in any industry as People, Process and Technology. Key Note Speaker, Dr. Deo Prakash Vidyarthi, Professor, School of Computer and Systems Sciences, JNU, New Delhi, presented the role of technologies in day to day life and discussed current research trends in the field of Information Technology such as cloud, IoT and Data Science. He had also depicted some very interesting videos showcasing future of IOT.",

            "The conference received enthusiastic response in the form of large number of research papers, of which 58 papers were selected for presentation and publication in e-proceeding.",
        ],
        slides1: [
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/1.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/2.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/3.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/4.webp' },
        ],
        slides2: [
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/5.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/6.webp' },
            { title: 'conferences-2019-20', img: '/image/conferences-2019-20/7.webp' }
        ]
    },
];

const conferenceTable = [
    {
        session: "Inaugural Session",
        date: "(05 February 2019, Tuesday), 10 A.M to 12:30 P.M",
        panellists: [
            {
                sNo: "1",
                name: "Mr. Kuldeep Goyal",
                designation: "Telecommunications Consultant & Former Chairman & Managing Director, BSNL",
                email: "kuldeep_goyal@yahoo.com",
                role: "(Chief Guest)"
            },
            {
                sNo: "2",
                name: "Mr. Bharat Bhatia",
                designation: "Head of International Spectrum team at MOTOROLA Solutions, Government Affairs\nPublic Protection &| Disaster Relief (PPDR), Spectrum Management & ICT Policies & Regulations",
                email: "bharat.bhatia@itu-apt.org",
                role: "(Guest of Honour)"
            },
            {
                sNo: "3",
                name: "Mr. Jitendra Singh",
                designation: "Senior Director, Government Affairs, Qualcomm\n(India & South Asia)",
                email: "jitendra@qti.qualcomm.com",
                role: "(Keynote Speaker)"
            }
        ]
    },
    {
        session: "Technical Session - I - Wireless Communication",
        date: "(05 February 2019, Tuesday) 1:30 P.M. to 3:30 P.M.",
        panellists: [
            {
                sNo: "4",
                name: "Wg. Cdr (Retd.) Arif Ullah Khan",
                designation: "CEO, Chrishall T-Sec Solutions\nNew Delhi",
                email: "arifukhan2@gmail.com"
            },
            {
                sNo: "5",
                name: "Mr. Vikas Nigam",
                designation: "Asst. Director, ALTTC",
                email: "nigamvikas06@gmail.com"
            }
        ]
    },
    {
        session: "Technical Session - II - Antenna and Microwave Communication",
        date: "(06 February 2019, Wednesday) 9 A.M. to 11 A.M.",
        panellists: [
            {
                sNo: "6",
                name: "Dr. Sanjeev Yadav",
                designation: "Asst. Prof. Women Engg. College Ajmer",
                email: "sanjeev.yadav@gweca.ac.in"
            },
            {
                sNo: "7",
                name: "Mr. Amit Tiwari",
                designation: "Project Manager, BEL",
                email: "amittiwari_it2001@yahoo.co.in"
            }
        ]
    },
    {
        session: "Technical Session - III - Analog & Digital VLSI Circuits",
        date: "06 February 2019, Wednesday",
        panellists: [
            {
                "sNo": 8,
                "name": "Dr. Richa Gupta",
                "designation": "Asst. Prof (Senior Grade), JIIT, Noida",
                "email": "richa.gupta@jiit.ac.in"
            },
            {
                "sNo": 9,
                "name": "Dr. N. P. Gupta",
                "designation": "Prof., ECE, ABES University, Ghaziabad",
                "email": "narbada.gupta@abes.ac.in"
            }
        ]
    },
    {
        session: "Technical Session - IV - Analog & Digital Signal Processing",
        date: "06 February 2019, Wednesday",
        panellists: [
            {
                "sNo": 10,
                "name": "Dr. N. S. Raghava",
                "designation": "Prof. in ECE, DTU",
                "email": "nsraghava@dce.ac.in"
            },
            {
                "sNo": 11,
                "name": "Dr. A. N. Mishra",
                "designation": "Prof in ECE, KEC Ghaziabad",
                "email": "achyuta.mishra@krishnacollege.ac.in"
            }
        ]
    }
];

const Conference = () => {
    const [openIndices, setOpenIndices] = useState([0]);

    const toggleSummary = (index) => {
        setOpenIndices((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="rounded-lg max-w-7xl mx-auto px-3 py-10">
            <h1 className="text-4xl font-novaReg p-5 mb-4">Conferences Summary</h1>
            <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] w-full text-black pt-5">
                {conferenceData.map((conference, index) => (
                    <div key={index} className="mb-4 border-b border-gray-300">
                        <a onClick={() => toggleSummary(index)} className="flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200">
                            <span className={`font-semibold text-xl ${openIndices.includes(index) ? 'text-[#00BFE7]' : 'text-black'}`}>{conference.title}</span>
                            {openIndices.includes(index) ? (
                                <ChevronUp className="w-6 h-6" />
                            ) : (
                                <ChevronDown className="w-6 h-6" />
                            )}
                        </a>
                        {openIndices.includes(index) && (
                            <>
                                <div className="ml-5 pl-5">
                                    {conference.summary.map((desc, i) => (
                                        <p key={i} className="text-lg font-novaReg mb-3">{desc}</p>
                                    ))}
                                </div>
                                <div className="overflow-x-auto p-5">
                                    {conferenceTable.map((session, i) => (
                                        <div key={i} className="mb-6 mt-4 rounded-lg">
                                            <h2 className="text-xl font-semibold">{session.session}</h2>
                                            <p className="text-md pb-2">{session.date}</p>
                                            <table className="min-w-full my-4 bg-white rounded-lg">
                                                <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                                    <tr className="border-b">
                                                        <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                                            S. No.
                                                        </th>
                                                        <th className="px-4 py-2 border-r border-white border-opacity-10 text-left">
                                                            Panellist Name
                                                        </th>
                                                        <th className="px-4 py-2 text-left">
                                                            Designation
                                                        </th>
                                                        <th className="px-4 py-2 text-left rounded-tr-lg">
                                                            E-mail ID
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                                                    {session.panellists.map((panellist, j) => (
                                                        <tr key={j} className={`bg-indigo-950 text-white ${j === session.panellists.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}>
                                                            <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${j === session.panellists.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                                                {panellist.sNo}
                                                            </td>
                                                            <td className="p-4 text-left max-sm:p-3 border-b border-l border-white border-opacity-20">
                                                                {panellist.name} {panellist.role}
                                                            </td>
                                                            <td className={`p-4 max-sm:p-3 border-b border-l border-white border-opacity-20`}>
                                                                {panellist.designation}
                                                            </td>
                                                            <td className={`p-4 text-left max-sm:p-3 border-b border-l border-white border-opacity-20 ${j === session.panellists.length - 1 ? 'rounded-br-lg' : ''}`}>
                                                                {panellist.email}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto pb-10 pt-5">
                                    <CubeSlider key={index} slides={conference.slides1} />
                                    <CubeSlider key={index} slides={conference.slides2} />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Conference;
