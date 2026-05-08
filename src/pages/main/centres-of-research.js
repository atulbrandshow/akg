"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// New Data for Research & Development Centers
const researchCenters = [
    {
        name: "SOFTWARE INCUBATOR",
        image: "/image/rd/incubator.png",
        link: "/software-incubator-sdc",
    },
    {
        name: "AKGEC IDEA LAB",
        image: "/image/rd/IDEA_LAB.png",
        link: "/akgec-idea-lab",
    },
    {
        name: "CLOUD COMPUTING CELL",
        image: "/image/rd/cloud.png",
        link: "/cloud-computing-cell",
    },
    {
        name: "RESEARCH AND INDUSTRIAL CONSULTANCY CENTRE",
        image: "/image/rd/consultancy.png",
        link: "/research-and-industrial-consultancy-centre",
    },
    {
        name: "BIG DATA CENTER OF EXCELLENCE",
        image: "/image/rd/excellence.png",
        link: "/big-data-centre-of-excellence",
    },
    {
        name: "OPEN SOURCE SOFTWARE RESEARCH AND DEVELOPMENT (OSSR&DC)",
        image: "/image/rd/source.png",
        link: "/open-source-software-rd-center",
    },
    {
        name: "BLOCKCHAIN RESEARCH LAB",
        image: "/image/rd/blockchain.jpeg",
        link: "/blockchain-research-lab",
    },
    {
        name: "CENTRE OF METAVERSE",
        image: "/image/rd/Metaverse.jpg",
        link: "/centre-of-metaverse",
    },
    {
        name: "GOOGLE DEVELOPER STUDENTS CLUB",
        image: "/image/rd/google.jpg",
        link: "/google-developer-students-club",
    },
    {
        name: "MACHINE LEARNING CENTRE OF EXCELLENCE",
        image: "/image/rd/machine.jpg",
        link: "/machine-learning-centre-of-excellence",
    },
    {
        name: "PROGRAMMING CLUB",
        image: "/image/rd/programing-club.jpg",
        link: "/programming-club",
    },
];

// Data for Student Clubs


const CentreOfResearch = () => {
    return (
        <>
            {/* ----------------- First Section (KEPT AS REQUESTED) ----------------- */}
            <section className="bg-BG33 bg-no-repeat bg-top bg-cover pt-40 pb-20">
                <div className="max-w-7xl mx-auto px-3">
                    <div className="w-full">
                        <div className="w-full lg:w-3/5">
                            <a href="/apply" className="p-4 mb-2 inline-block">
                                <img
                                    src="/image/center-of-research/space-x.jpg"
                                    alt="AKG Project Logo"
                                    className="w-40 lg:w-56 rounded-full"
                                />
                            </a>
                            <p className="text-2xl lg:text-3xl font-novaLight mt-5 text-white">
                                Leading Innovations in Space Science<br /> at AKG University
                            </p>
                            <h3 className="text-3xl lg:text-5xl font-novaBold uppercase text-white mt-5 leading-tight">
                                Ajay Kumar Garg University Centre for Research in Space Science & Technology
                            </h3>
                            <a href="/apply" className="flex mt-5 w-fit text-black py-3 px-9 bg-[#f7a600] rounded-3xl items-center gap-2 hover:bg-yellow-500 transition">
                                Apply Now
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 lg:mt-24 w-full">
                        <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
                            <div className="w-full lg:w-6/12">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                                    INNOVATIONS IN SPACE SCIENCE & TECHNOLOGY
                                </h2>
                                <p className="mb-6 text-white text-lg font-novaLight">
                                    The establishment of the Ajay Kumar Garg University Centre for Research in Space Science & Technology represents a groundbreaking advancement for students at
                                    AKG University. This centre aims to foster intellectual growth and enhance the nation's capabilities in space exploration and technology.
                                </p>
                                <h3 className="text-xl font-bold mb-4 text-white">
                                    AKG University is proud to be the first institution in India to operate a fully functional real-time ground station for satellite communications.
                                </h3>
                                <p className="mb-6 text-white text-lg font-novaLight">
                                    Our commitment is to provide unparalleled educational experiences and resources to inspire young innovators. The centre serves as a platform for students to delve
                                    into advanced research in space science, fostering curiosity and ambition, and significantly contributing to national technological progress.
                                </p>
                                <div className="flex gap-4">
                                    <button className="bg-[#f7a600] text-black font-semibold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-yellow-500 transition">
                                        Apply Now
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12">
                                <div className="relative flex gap-4 justify-center lg:justify-start">
                                    <img
                                        src="/image/center-of-research/astro-1.jpg"
                                        alt="Scientist working in a lab"
                                        className="h-[300px] lg:h-[500px] w-1/2 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:scale-105"
                                    />
                                    <img
                                        src="/image/center-of-research/astro-2.jpg"
                                        alt="Scientist working in a lab"
                                        className="h-[300px] lg:h-[500px] w-1/2 grayscale z-10 object-cover rounded-lg shadow-lg mt-8 lg:mt-16 transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------------- New Research & Development Section ----------------- */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-center text-3xl md:text-3xl font-novaReg uppercase mb-16 text-gray-800 tracking-wide">
                        Research And Development
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {researchCenters.map((center, index) => (
                            <a
                                key={index}
                                href={center.link}
                                className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 block"
                            >
                                <div className="h-40 w-40 flex items-center justify-center mb-6 relative">
                                    <img
                                        src={center.image}
                                        alt={center.name}
                                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-center font-novaBold text-sm lg:text-sm uppercase text-gray-800 group-hover:text-[#f7a600] transition-colors duration-300 leading-snug">
                                    {center.name}
                                </h3>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CentreOfResearch;
