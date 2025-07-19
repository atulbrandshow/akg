'use client';

import ContactIncubator from "@/Components/ContactIncubator";
import ResearchInfo from "@/Components/ResearchInfo";
import { ArrowRight } from "lucide-react";


const sky = [
    {
        title: <>Ground Station Features<br /> From Sky to Space</>,
        image: "/image/student/5.jpg",
        features: [
            "Can Communicate with all countries' Ground Station, which are members of SatNOGS",
            "Research on 3D Printed Aluminum/Plastics Structures that can be used in SPACE explorations",
            "Thermal Study of Materials in Vacuum",
            "Experimental studies on Compact Structures of satellites for LEO",
            "Experimental Materials for Antennae and Deployment Methods",
            "Unmanned Arial Vehicle Design",
            "Centre for research in Geospatial",
            "Model Rocketry Lab",
            "Star Gazing Centre"
        ]
    }
];

const mentor = [
    {
        name: "Dr. Aditi Sharma",
        image: "/image/center-of-research/pro1.jpg",
        desc: "Expert in Astrophysics with over 10 years of teaching experience."
    },
    {
        name: "Prof. Rajesh Mehta",
        image: "/image/center-of-research/pro1.jpg",
        desc: "Leading researcher in Space Technology and Innovations."
    },
    {
        name: "Ms. Neha Gupta",
        image: "/image/center-of-research/pro1.jpg",
        desc: "Specializes in Satellite Communication and Remote Sensing."
    },
    {
        name: "Mr. Vikram Singh",
        image: "/image/center-of-research/pro1.jpg",
        desc: "Passionate about promoting STEM education among students."
    },
    {
        name: "Dr. Priya Desai",
        image: "/image/center-of-research/pro1.jpg",
        desc: "Researcher in the field of Aerospace Engineering."
    },
    {
        name: "Mr. Arjun Patel",
        image: "/image/center-of-research/pro1.jpg",
        desc: "Experienced in Space Mission Planning and Execution."
    }
];

const students = [
    {
        "image": "/image/student/student9.jpg",
        "alt": "Student 9"
    },
    {
        "image": "/image/student/student6.jpg",
        "alt": "Student 6"
    },
    {
        "image": "/image/student/student7.jpg",
        "alt": "Student 7"
    },
    {
        "image": "/image/student/student8.jpg",
        "alt": "Student 8"
    }
]

const outcomes = {
    title: "Learning Outcomes for Students",
    list: [
        "Students gain experience of the complete process: defining the Mission, design, development/constructing, programming, testing, launching, and analysis.",
        "Acquired knowledge and experience as a precursor to application-based implementation to other projects stimulating students' critical and higher-order thinking skills.",
        "Opportunities for existing/future students for 'Learning by Doing' which is the Highest in RBT Level of Learning.",
        "Pedagogy- right from manufacturing, environmental testing, satellite integration, spaceport, launch vehicle, range, and spacecraft operations etc."
    ]
}

const CentreOfResearch = () => {
    const slide = (direction) => {
        const slider = document.getElementById('slider');
        const scrollAmount = 300;

        if (direction === 'left') {
            slider.scrollLeft -= scrollAmount;
        } else {
            slider.scrollLeft += scrollAmount;
        }
    };
    return (
        <>
            <section className="bg-BG33 bg-no-repeat bg-top bg-cover pt-40 pb-20">
                <div className="max-w-7xl mx-auto px-3">
                    <div className="w-full">
                        <div className="w-3/5">
                            <a href="/apply" className="p-4 mb-2">
                                <img
                                    src="/image/center-of-research/space-x.jpg"
                                    alt="AKG Project Logo"
                                    className="w-56 rounded-full"
                                />
                            </a>
                            <p className="text-3xl font-novaLight mt-5 text-white">
                                Leading Innovations in Space Science<br /> at AKG University
                            </p>
                            <h3 className="text-5xl font-novaBold uppercase text-white mt-5 leading-[42px]">
                                Ajay Kumar Garg University Centre for Research in Space Science & Technology
                            </h3>
                            <a href="/apply" className="flex mt-5 w-fit text-black py-3 px-9 bg-secondary rounded-3xl">
                                Apply Now
                                <ArrowRight />
                            </a>
                        </div>
                    </div>
                    <div className="mt-24 w-full">
                        <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
                            <div className="w-6/12">
                                <h2 className="text-4xl font-bold mb-6 text-white">
                                    INNOVATIONS IN SPACE SCIENCE & TECHNOLOGY
                                </h2>
                                <p className="mb-6 text-white">
                                    The establishment of the Ajay K. Gupta Centre for Research in Space Science & Technology represents a groundbreaking advancement for students at
                                    AKG University. This centre aims to foster intellectual growth and enhance the nation's capabilities in space exploration and technology.
                                </p>
                                <h3 className="text-xl font-bold mb-4 text-white">
                                    AKG University is proud to be the first institution in India to operate a fully functional real-time ground station for satellite communications.
                                </h3>
                                <p className="mb-6 text-white">
                                    Our commitment is to provide unparalleled educational experiences and resources to inspire young innovators. The centre serves as a platform for students to delve
                                    into advanced research in space science, fostering curiosity and ambition, and significantly contributing to national technological progress.
                                </p>
                                <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full flex items-center gap-2">
                                    Apply Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="w-6/12">
                                <div className="relative flex gap-4">
                                    <img
                                        src="/image/center-of-research/astro-1.jpg" // Original image source
                                        alt="Scientist working in a lab"
                                        className="h-[500px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:scale-105"
                                    />
                                    <img
                                        src="/image/center-of-research/astro-2.jpg" // Original image source
                                        alt="Scientist working in a lab"
                                        className="h-[500px] grayscale z-10 object-cover rounded-lg shadow-lg mt-16 transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-BG30 bg-no-repeat bg-center bg-cover bg-fixed min-h-[600px]"></section>

            <section className="bg-BG42 bg-no-repeat bg-cover">
                <div className="bg-black/90">
                    <div className="max-w-[1400px] mx-auto px-3 py-20">
                        <h3 className="text-4xl font-novaBold uppercase mt-5 mb-4 w-full text-white">
                            {sky[0].title}
                        </h3>
                        <div className="flex justify-center">
                            <div className="px-3">
                                <img
                                    src={sky[0].image}
                                    alt="students-img"
                                    className="mt-12"
                                />
                            </div>
                            <div className="px-3 pt-10">
                                <ol className="mt-12 pl-10 list-decimal">
                                    {sky[0].features.map((feature, index) => (
                                        <li key={index} className="text-white text-xl font-novaReg mb-5 pl-8" >
                                            {feature}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="w-full">
                <div className="overflow-hidden py-32">
                    <div className="px-6 lg:px-8">
                        <div className="w-full text-center">
                            <div>
                                <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
                                    What everyone is saying
                                </h2>
                                <h3 className="mt-2 text-pretty uppercase text-4xl font-medium tracking-tighter text-gray-950 sm:text-5xl">
                                    Trusted by professionals.
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div id="slider" className="mt-16 mx-20 flex gap-8 px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth w-full">
                        {mentor.map((m, index) => (
                            <div key={index} style={{ opacity: '1' }} className="relative flex aspect-[9/16] w-72 shrink-0 snap-start flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[3/4] sm:w-96">
                                <img alt={m.name} src={m.image} className="absolute inset-x-0 top-0 aspect-square w-full object-cover object-top" />
                                <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-25%"></div>
                                <figure className="relative p-10">
                                    <blockquote>
                                        <p className="relative text-xl/7 text-white">
                                            <span aria-hidden="true" className="absolute -translate-x-full">“</span> {m.desc} <span aria-hidden="true" className="absolute">”</span>
                                        </p>
                                    </blockquote>
                                    <figcaption className="mt-6 border-t border-white/20 pt-6">
                                        <p className="text-sm/6 font-medium text-white">{m.name}</p>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex justify-end gap-3 px-6 ">
                        <button onClick={() => slide('left')} className="inline-flex items-center rounded-full bg-black p-2 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 0l3-3m-3 3l3 3" />
                            </svg>
                        </button>
                        <button onClick={() => slide('right')} className="inline-flex items-center rounded-full bg-black p-2 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m6 0l-3 3m3-3l-3-3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-BG49 bg-no-repeat h-screen bg-center bg-cover bg-indigo-950 bg-blend-multiply bg-opacity-90 py-10">
                <div>
                    <div className="max-w-[1400px] mx-auto">
                        <div className="w-full">
                            <div className="flex items-center w-full">
                                <div className="mt-20 w-full">
                                    <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8">

                                        {students.map((student, index) => (
                                            <div key={index} className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl ${index % 2 === 0 ? "rotate-2" : "-rotate-2"}`}>
                                                <img
                                                    alt={student.alt}
                                                    loading="lazy"
                                                    width="3744"
                                                    height="5616"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="absolute inset-0 h-full w-full object-cover object-center"
                                                    style={{ color: 'transparent' }}
                                                    // sizes="(min-width: 640px) 18rem, 11rem"
                                                    src={student.image}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
                                        <div className="py-8 text-center">
                                            <h2 className="text-3xl font-bold text-white sm:text-4xl">{outcomes.title}</h2>
                                        </div>

                                        <ul className="list-disc space-y-4 py-6 text-white">
                                            {outcomes.list.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-yellow-300 transition-colors">
                                            APPLY NOW
                                            <ArrowRight className="ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ResearchInfo />
            <ContactIncubator />
        </>
    );
};

export default CentreOfResearch;
