"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CubeSlider from "@/Components/CubeSlider";
import Image from "next/image";
import Link from "next/link";

const results = [
  {
    title: "BLOCKVERSE’24",
    desc: (
      <>
        With unwavering determination, Team Blockchain Research Lab at AKGEC organized “BLOCKVERSE’24," a two-phase technical, analytical, and mathematical competitive event on April 20, 2024. The first round involved building a project to replicate innovative schemas provided by the team. The subsequent round featured two sub-phases: BlackBox and CryptHunt, challenging participants’ critical, analytical, and mathematical thinking. The event significantly enhanced participants’ knowledge and innovativeness, fostering insightful exploration. Winners received prize money from a pool of Rs. 9000, and all participants received certificates. BLOCKVERSE’24 was a resounding success, invigorating budding innovators and inspiring them to expand their creative boundaries.
      </>
    ),
    slides: [
      { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_1.jpg" },
      { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_2.jpg" },
      { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_3.jpg" },
      { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_4.jpg" },
      { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_5.jpg" },
      { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_6.jpg" },
      { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_7.jpg" },
    ]
  },
  {
    title: "FOUNDER’S DAY",
    desc: (
      <>
        The day team BRL meets to commemorate our founders PRAKHAR AGARWAL, SHAKTI JAISWAL & SHUBH SINGHAL who have bequeathed resources to its development. It’s been a long way since establishment, and we are enthused to see the place BRL has achieved so far through manifesting both compassion and hard work together. <br /> <br />
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1">
            <img src="/image/rd/blockchain/brl7.png" alt="Blockchain" />
          </div>
          <div className="col-span-2">
            <img src="/image/rd/blockchain/brl8.png" alt="Blockchain" />
          </div>
        </div>
      </>
    ),
  },
  {
    title: "RELOAD",
    desc: (
      <>
        Blockchain Research Lab conducts a recruitment drive to recruit second year students. The event takes place in two parts – a test followed by a personal interview round with a motive of putting the participants’ analytical and logical skills to test.
      </>
    ),
    slides: [
      { title: 'Blockchain', img: "/image/rd/blockchain/brl9.png" },
      { title: 'Blockchain', img: "/image/rd/blockchain/brl10.png" },
      { title: 'Blockchain', img: "/image/rd/blockchain/brl11.png" },
    ]
  },
  {
    title: "HASHEZ",
    desc: (
      <div className="grid grid-cols-2 gap-5">
        <p>Blockchain Research Lab in collaboration with DLT LABS organises an interactive online workshop “Hashez" every year. This inter college session covers basics of Blockchain technology and Smart Contracts to advance with hands-on experience on DL Unify by industry experts. A verified certificate and exciting prizes are awarded to the winners and participants.</p>
        <img src="/image/rd/blockchain/brl12.png" alt="Blockchain" />
      </div>
    ),
  },
  {
    title: "BLOCKVERSE",
    desc: (
      <>
        It is the team's most exciting event which is usually conducted for first & second year students. It comprises two phases: first one being the project building round followed by a rejuvenating treasure hunt game, CryptHunt, where the participants had to brainstorm over the hints and solve the riddles within the specified time limit. Exciting cash prizes, goodies and certificates are awarded to the winners. <br />
        <div className="grid grid-cols-2 gap-3">
          <img src="/image/rd/blockchain/brl13.png" alt="Blockchain" />
          <img src="/image/rd/blockchain/brl14.png" alt="Blockchain" />
        </div>
      </>
    ),
  },
  {
    title: "TECHNIVAL",
    desc: (
      <>
        It is a multi-branch unique event that incorporates two stages: TECHNOPIAD, a technical Olympiad to brainstorm over critical engineering and computational problems followed by BIDBUZZ, a fun-filled yet enthralling auction experience poured with problem-solving where teams battle while individuals learned. <br />
        <div className="grid grid-cols-2 gap-3">
          <img src="/image/rd/blockchain/brl15.png" alt="Blockchain" />
          <img src="/image/rd/blockchain/brl16.png" alt="Blockchain" />
        </div>
      </>
    ),
  },
  {
    title: "EXCLUSIVE INTERACTIVE SESSIONS",
    desc: (
      <>
        The society organises regular webinars for the students to interact with entrepreneurs and tech masters. One among them was a most awaited session with the founder of GeeksForGeeks by Sandeep Jain Sir. It was an enlightening conclave, wherein Sir shared his experiences as an engineering student and took all the participants on the ride of his entrepreneurial journey in establishing GeeksforGeeks. He also addressed numerous queries of the inquisitive students.
        <div className="grid grid-cols-2 gap-3">
          <img src="/image/rd/blockchain/brl17.png" alt="Blockchain" />
          <img src="/image/rd/blockchain/brl18.png" alt="Blockchain" />
        </div>
      </>
    ),
  },
];

const projects = [
  {
    title: "BRL TEST PORTAL",
    description: "The students who seek admission in AKGEC appear for a 30-minute test to assess their fundamentals in Physics, Chemistry and Mathematics. In this regard, we built the admission test portal to conduct the test. Registered students can login using the verified email id and phone number. The test will be automatically submitted, and the student will be logged out if they do not submit it within the allotted time.",
    link: "https://akgectestportal.vercel.app/"
  },
  {
    title: "PUNCTUALITY DRIVE",
    description: "An application developed to bring punctuality in students as it will scan ID cards of students visiting late for their college classes. The application is solely developed by BRL and will be used to maintain records of late comers and ultimately bring punctuality in day-to-day life of all students."
  },
  {
    title: "BRL_AKGEC APP",
    description: "Blockchain Research Lab Application is designed for the modern workforce that helps the society to recruit talented and enthusiastic candidates easily and efficiently. With a sleek and attractive user interface, our application is the go-to solution for students across the college who want to join BRL.",
    link: "https://play.google.com/store/apps/details?id=com.sap.brl"
  },
  {
    title: "VISIONI",
    description: "Visioni is a fast, dependable and clever assistive tool that enables blind and visually impaired users read text, detect objects, scan codes, retrieve location, recognise colours, expiry and currency. It is also integrated with a smart simple calculator for performing basic calculations. It allows the blind people to converse using morse code.",
    link: "https://play.google.com/store/apps/details?id=com.sap.visioni"
  },
  {
    title: "CALMU",
    description: "CalmU is a pioneering healthcare software that uses structured yoga, introspective activities, guided rumination and soothing music to help you unveil your inner self. It is the solution to all quandaries, including stress, apprehensiveness, lack of focus, fear, mood swings, insomnia, melancholy, self-doubt and worries-all stem from the body & mind.",
    link: "https://play.google.com/store/apps/details?id=com.CalmU"
  },
  {
    title: "BIDBUZZ PORTAL",
    description: "It is an interactive web application for bidding and solving questions by teams simultaneously in real time with rich UI/UX features. The portal is a technological innovation as it is solely independent from any third-party websites for compilation of its source code and testing against various test cases."
  },
  {
    title: "BRL CRYPTHUNT",
    description: "This portal provides an online treasure hunt where players are given questions in the form of different levels with some mandatory hints. The team is supposed to find solutions by any way possible. They are permitted to access the internet, encrypt keywords, do backtracking and retrieve metadata using references."
  }
];

const achievements = [
  {
    title: "1. MOU BETWEEN AKGEC AND DLT LABS:",
    description: "A Memorandum of Understanding (MOU) was signed with DLT to share expertise in the field of Blockchain technology and collaborate on research and training programs and impart knowledge. The MoU was signed by Dr R.K. Agarwal, Director General, AKGEC, Ghaziabad and Mr. Vivek Srivastava, Director of Operations, DLT Labs."
  },
  {
    title: "2. SIH’22 WINNERS:",
    description: "10 team members from BRL won Smart India Hackathon 2022 organised by Government of India under its nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives.",
  },
  {
    title: "3. MLH – HTM 3.0 CHAMPIONS:",
    description: "Hack The Mountains 3.0 is a community — focused 36 hours Hybrid Hackathon title sponsored by Major League Hacking (MLH) organised on 17th-18th September 2022 with 3300+ participants, 300+ business projects and 55+ Qubit sessions wherein our Team SASA, consisting of our four coordinators, was declared as the grand winners of the International Virtual Hackathon.",
  },
  {
    title: "4. C-DAC GRAND CHALLENGE WINNERS:",
    description: "Our lead coordinators Apoorv Maheshwari and Stuti Goyal were declared as the winners of the Grand Challenge in the domain Behavioral Analysis under the Call for Application category for their project VisionI. They were awarded with a certificate, a cash prize of Rs 9000/ and an exhilarating offer to work as an intern for 6 months.",
  },
  {
    title: "5. ANVESHANA’22 WINNERS:",
    description: "Two teams from BRL secured 4th & 5th positions in Anveshana’22 and won cash prizes and certificates. Anveshana is a Science & Engineering competition which culminates in a Fair where the undergraduate Engineering students and underprivileged school going students exhibit their projects/models.",
  },
]

const BlockchainResearch = () => {
  const [openIndices, setOpenIndices] = useState([]);

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
    <>
      <section>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="px-4 py-16 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
              <div>
                <img
                  src="/image/rd/blockchain/BRL1.jpg"
                  alt="Team photo"
                  className="rounded-lg w-full"
                  width={600}
                  height={400}
                />
              </div>
              <div className="space-y-4">
                <h1 className="text-2xl font-medium mb-4">Introduction</h1>
                <p className="text-gray-600 leading-relaxed">
                  "The Blockchain Research Lab Centre of Excellence (BRLCoE)", founded in 2019, is the research and development centre of AKGEC. Being the sole centre entirely entitled towards the aim of bringing maximum transparency into systems, the Lab works on developing, deploying and distributing applications and services on Distributed Ledger Technology as well as other side technologies. BRL works in collaboration with DLT Labs which is built by pioneers with experience across a wide variety of sectors of business, technology and distributed application architecture. The enterprise has delivered many of the largest blockchain projects globally.
                </p>
                <p className="text-gray-600">
                  Our website: <a href="https://brlakgec.com/" className="text-blue-500 hover:underline">https://brlakgec.com/</a>
                </p>
              </div>
            </div>
          </section>

          {/* Strategy Section */}
          <section className="px-4 py-16 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-novaSemi text-center mb-16">OUR STRATEGY:</h2>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto text-[#3B82F6]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">1. DEVELOP</h3>
                  <p className="text-gray-600">
                    We create applications based on DLT technologies as well as side technologies.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto text-[#3B82F6]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">2. DEPLOY</h3>
                  <p className="text-gray-600">
                    We offer a modern containerized solution to provide seamless and scalable service.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto text-[#3B82F6]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">3. DISTRIBUTE</h3>
                  <p className="text-gray-600">
                    We connect organisations with highly transparent and integrable solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="min-h-screen">
          <section className="px-4 py-16 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-novaSemi text-center mb-16">FIELDS WE WORK IN</h2>

              <p className="text-center text-gray-600 mb-16 max-w-4xl mx-auto">
                We, at BLOCKCHAIN RESEARCH LAB Centre of Excellence, AKGEC, are an impassioned class of people who offer a diversity of skills in a variety of domains:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Blockchain Research */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto text-[#3B82F6]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">BLOCKCHAIN RESEARCH</h3>
                  <p className="text-gray-600">
                    Executing smart contracts and integrating with the web and application we attempt to offer new solutions and anticipate the advancement in the Blockchain technology and its recent changes.
                  </p>
                  <img
                    src="/image/rd/blockchain/BRL2.png"
                    alt="Blockchain cubes"
                    className="mx-auto w-24 h-24"
                  />
                </div>

                {/* Web Development */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto text-[#3B82F6]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5" />
                      <path d="M3 16v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1" />
                      <path d="M12 12v8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">WEB DEVELOPMENT</h3>
                  <p className="text-gray-600">
                    Bridge the space by operating on both front end as well as backend and offer distinctive answers to solve real time problems, we have a splendid team of innovators and thinkers working together on creating web-based solutions for day-to-day problems. Frontend frameworks include React and Angular and Backend frameworks include Node.js express and Django.
                  </p>
                  <img
                    src="/image/rd/blockchain/BRL3.png"
                    alt="Web technologies"
                    className="mx-auto w-24 h-24"
                  />
                </div>

                {/* Application Development */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto text-[#3B82F6]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="2" />
                      <path d="M7 12h10" />
                      <path d="M12 7v10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">APPLICATION DEVELOPMENT</h3>
                  <p className="text-gray-600">
                    Our team makes use of voguish technology, to twirl ideas full of capability into installable software applications. Here we work on different software like flutter, react native and NetBeans and provide the desired solutions.
                  </p>
                  <img
                    src="/image/rd/blockchain/BRL4.png"
                    alt="Mobile development"
                    className="mx-auto w-24 h-24"
                  />
                </div>

                {/* UI/UX Designing */}
                <div className="text-center space-y-4 lg:col-start-2">
                  <div className="w-16 h-16 mx-auto text-[#3B82F6]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">UI/UX DESIGNING</h3>
                  <p className="text-gray-600">
                    We have a team full of innovators and authentic intellect who with their apex of creativity engage themselves in bringing imaginations right into reality providing an edge to the web and app developers with an appealing UI. Frameworks include Figma, illustrator and Photoshop.
                  </p>
                  <img
                    src="/image/rd/blockchain/BRL5.png"
                    alt="Design tools"
                    className="mx-auto w-24 h-24"
                  />
                </div>

                {/* Machine Learning */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto text-[#3B82F6]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <path d="M12 22v-6" />
                      <path d="M12 8v6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">MACHINE LEARNING</h3>
                  <p className="text-gray-600">
                    Accurately predicting the outcomes without being explicitly programmed is what our job is. Here we work in Python, R Programming and C/C++ language.
                  </p>
                  <img
                    src="/image/rd/blockchain/BRL6.png"
                    alt="Machine learning"
                    className="mx-auto w-24 h-24"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <h2 className="text-2xl text-center py-10 font-novaSemi">EVENTS OF BRL:</h2>
        <div className="max-w-7xl mx-auto shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg">
          <div className="w-full text-black">
            {results.map((result, index) => (
              <div key={index} className="border-b border-gray-300">
                <a
                  onClick={() => toggleDomain(index)}
                  className={`flex justify-between items-center w-full px-5 ${openIndices.includes(index) ? 'text-white bg-indigo-950' : 'text-black'} py-6 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-indigo-900 hover:text-white`}
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
                  <div className="pl-5 flex justify-around items-start py-10 bg-gray-200">
                    <p className={`font-novaReg mb-4 ${result.slides && "max-w-3xl"}`}>{result.desc}</p>
                    {/* You can render images as needed */}
                    {result.slides && <CubeSlider slides={result.slides} />}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-novaSemi mb-6 text-center">OUR PROJECTS:</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-novaSemi">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
                {project.link && (
                  <div className="">
                    <span className="text-gray-700 font-medium">LINK: </span>
                    <a
                      href={project.link}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer">
                      {project.link}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h2 className="text-2xl font-novaSemi mb-12 text-center">OUR ACHIEVEMENTS:</h2>
          <div className="space-y-6">
            {achievements.map((project, index) => (
              <div key={index} className="space-y-1">
                <h3 className="text-xl font-novaSemi">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-center text-2xl font-semibold mb-12">FACULTY COORDINATORS:</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm flex flex-col justify-center items-center">
                <Image
                  src="/image/rd/blockchain/SLKapoor.png"
                  alt="Faculty mentor"
                  width={400}
                  height={300}
                  className=" h-72 object-cover object-top mb-4 rounded-lg"
                />
                <div className="text-center">
                  <h2 className="text-xl font-medium mb-2">MENTOR:</h2>
                  <p className="text-gray-600">Prof. (Col) S.L KAPOOR</p>
                  <p className="text-sm text-gray-500">(Dean 1st Year and Proctor)</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm flex flex-col justify-center items-center">
                <Image
                  src="/image/rd/blockchain/Aditya_Pratap.png"
                  alt="Faculty head"
                  width={400}
                  height={300}
                  className="h-72 object-cover object-top mb-4 rounded-lg"
                />
                <div className="text-center">
                  <h2 className="text-xl font-medium mb-2">HEAD:</h2>
                  <p className="text-gray-600">Dr. ADITYA PRATAP SINGH</p>
                  <p className="text-sm text-gray-500">(Associate Professor)</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-center text-2xl font-semibold mb-12">STUDENT COORDINATORS:</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm flex flex-col justify-center items-center">
                <Image
                  src="/image/rd/blockchain/Apporv_brl.png"
                  alt="Student coordinator"
                  width={300}
                  height={300}
                  className="h-72 object-cover mb-4 rounded-lg"
                />
                <div className="text-center">
                  <p className="text-lg font-medium">APOORV MAHESHWARI</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm flex flex-col justify-center items-center">
                <Image
                  src="/image/rd/blockchain/Stuti_brl.png"
                  alt="Student coordinator"
                  width={300}
                  height={300}
                  className="h-72 object-cover mb-4 rounded-lg"
                />
                <div className="text-center">
                  <p className="text-lg font-medium">STUTI GOYAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlockchainResearch;