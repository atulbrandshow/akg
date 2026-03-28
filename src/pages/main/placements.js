"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from "@/Components/Button";
import StudentStories from '@/Components/StudentStories';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import HighlightPlacement from '@/Components/HighlightPlacement';
import AdmissionsShowcase from '@/Components/AdmissionsShowcase';

const topslides = [
  {
    id: 1,
    image: "/image/placement/placement-overview-1.webp",
    title: "Industry Integration",
    subtitle: "Connecting students with world-class recruiters."
  },
  {
    id: 2,
    image: "/image/placement/placement-overview-2.webp",
    title: "Global Reach",
    subtitle: "Placing our talented students in prestigious global organizations."
  },
  {
    id: 3,
    image: "/image/placement/placement-overview-3.webp",
    title: "Future Ready",
    subtitle: "Empowering students with skills that define the next generation."
  },
  {
    id: 4,
    image: "/image/placement/placement-overview-4.webp",
    title: "Career Success",
    subtitle: "A legacy of excellence in placement and professional growth."
  }
];

const slides = [
  {
    imgSrc: "/image/placement/1.png",
    heading: <>Accelerate your <br /> career at a global scale</>,
    description: `Joining Goldman Sachs has been a dream come true. The technical rigour and innovation-driven culture here are unparalleled. I am immensely grateful to Ajay Kumar Garg University for providing the foundation and placement support that helped me secure this incredible opportunity.`,
    degree: "B.TECH (CSE)",
    batch: "(Batch 2021-2025)",
    name: "ANSHUMAN NANDAN",
    companyLogo: "/image/company-logos/goldman-sachs.webp",
    company: "Goldman Sachs",
  },
  {
    imgSrc: "/image/placement/2.png",
    heading: <>Choose the jobs <br /> you love, not the ones you get</>,
    description: `Securing a position at Q Benefi Global Corp is a major milestone in my career. AKGU's emphasis on practical learning and industry readiness truly prepared me for the competitive landscape. I'm excited to contribute to global solutions in this new role.`,
    degree: "B.TECH (CSE)",
    batch: "(Batch 2021-2025)",
    name: "VIBHU DIXIT",
    companyLogo: "/image/company-logos/q-benefi.webp",
    company: "Q Benefi Global Corp",
  },
  {
    imgSrc: "/image/placement/4.png",
    heading: <>Bridging the gap <br /> between campus and corporate</>,
    description: `I am thrilled to start my journey with Amazon. The placement cell at AKGU was instrumental in guiding me through the intensive recruitment process. The skills I've gained here have equipped me with the confidence to succeed in a world-class organization like Amazon.`,
    degree: "B.TECH (CSE)",
    batch: "(Batch 2021-2025)",
    name: "RANI",
    companyLogo: "/image/company-logos/AmozonIcon.webp",
    company: "amazon",
  },
  {
    imgSrc: "/image/placement/3.png",
    heading: <>Excellence in every <br /> step of the journey</>,
    description: `Getting placed at Google is a testament to the quality of education and support at AKGU. The university's commitment to bridging the gap between academia and industry has was pivotal in landing this role. I'm eager to join the team and make a global impact.`,
    degree: "B.TECH (CSE)",
    batch: "(Batch 2021-2025)",
    name: "SOUMYA MAHESHWARI",
    companyLogo: "/image/company-logos/google.webp",
    company: "google",
  }
];

const highlightsData = [
  { category: "No. of Companies Visited", y2021: "220", y2022: "225", y2023: "220", y2024: "235", y2025: "322" },
  { category: "Total Students", y2021: "928", y2022: "973", y2023: "1205", y2024: "1110", y2025: "1152" },
  { category: "Total Offers", y2021: "1329", y2022: "2008", y2023: "1406", y2024: "1727", y2025: "1509" },
  { category: "Avg. Salary (LPA)", y2021: "4.67", y2022: "5.13", y2023: "5.22", y2024: "5.68", y2025: "6.09" },
  { category: "Highest Package (LPA)", y2021: "30", y2022: "113", y2023: "33.8", y2024: "42.75", y2025: "30" },
];

const awards = [
  {
    logo: "/image/placement/NAACLogo.jpg",
    title: "NIRF Ranking 2023",
    description: "Ranked A++ among The Best Universities In India By NAAC",
  },
  {
    logo: "/image/placement/gold-akg.jpg",
    title: "NIRF Ranking 2023",
    description: "Awarded Gold Rating by QS I-GAUGE in Overall Status",
  },
  {
    logo: "/image/placement/diamond-akg.jpg",
    title: "NIRF Ranking 2023",
    description: "Awarded Diamond Rating by QS I-GAUGE in Facilities",
  },
  {
    logo: "/image/placement/diamond-akg.jpg",
    title: "NIRF Ranking 2023",
    description: "Awarded Platinum Rating by QS I-GAUGE in Employability",
  },
  {
    logo: "/image/placement/diamond-akg.jpg",
    title: "NIRF Ranking 2023",
    description: "Awarded Platinum Rating by QS I-GAUGE in Teaching & Learning",
  }
];

const stats = [
  { id: 1, name: 'Total no of Recruiters (2025)', value: '322' },
  { id: 2, name: 'Average Salary (LPA)', value: '6.09' },
  { id: 3, name: 'Highest Package (LPA)', value: '30' },
  { id: 4, name: 'Total Placement Offers', value: '1509' },
]

const sections = [
  {
    title: "University Placement Tracker",
    items: [
      "Highest Package Offered",
      "Students Placed",
      "No. of Companies Visited",
      "Campus Placements during COVID-19",
      "Job Roles Offered",
      "Student Diversity",
    ],
  },
  {
    title: "On-Campus Placement Packages",
    items: [
      "Above 25 Lacs",
      "Above 20 Lacs",
      "Above 15 Lacs",
      "10-15 Lacs",
      "07-10 Lacs",
      "05-06 Lacs",
      "Stipend Range",
    ],
  },
  {
    title: "University Placement Analysis",
    items: [
      "Engineering Placement",
      "Management Placement",
      "MCA Placement",
      "Pharma Sciences Placement",
      "Physics Placement",
      "Placement Tracker",
      "Joint Placement Program",
    ],
  },
]

const PlacementSection = ({ title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg p-6"
  >
    <h3 className="text-2xl font-novaBold text-indigo-700 mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-2"
        >
          <span className="w-2 h-2 bg-indigo-500 rounded-full" />
          <span className="text-gray-700 hover:text-indigo-600 hover:underline font-novaReg transition-colors duration-200 cursor-pointer">
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
)

const Placement = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [activeTopSlide, setActiveTopSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTopSlide((prev) => (prev + 1) % topslides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-indigo-950">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeTopSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              <img 
                src={topslides[activeTopSlide].image} 
                className="w-full h-full object-cover" 
                alt={topslides[activeTopSlide].title}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-indigo-950/40 to-transparent" />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <motion.div
              key={`content-${activeTopSlide}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-8xl font-novaBold text-white leading-tight mb-6">
                Placement <br /> 
                <span className="text-yellow-500">Excellence</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-200 font-novaReg mb-10 leading-relaxed max-w-2xl"
              >
                {topslides[activeTopSlide].subtitle}
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-6 right-6 hidden md:flex items-center justify-between z-20 pointer-events-none">
          <button
            onClick={() => setActiveTopSlide((prev) => (prev - 1 + topslides.length) % topslides.length)}
            className="w-14 h-14 rounded-full border border-white/20 bg-black/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-yellow-500 hover:text-indigo-950 hover:border-yellow-500 transition-all pointer-events-auto group shadow-2xl"
          >
            <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setActiveTopSlide((prev) => (prev + 1) % topslides.length)}
            className="w-14 h-14 rounded-full border border-white/20 bg-black/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-yellow-500 hover:text-indigo-950 hover:border-yellow-500 transition-all pointer-events-auto group shadow-2xl"
          >
            <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">
            <div className="flex gap-2">
              {topslides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTopSlide(idx)}
                  className={`h-2 transition-all duration-500 rounded-full ${
                    activeTopSlide === idx ? "bg-yellow-500 w-16" : "bg-white/30 w-8"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="h-[1px] flex-1 bg-white/20 hidden md:block" />
            <div className="text-white font-novaBold text-sm tracking-widest hidden md:block uppercase opacity-70">
              0{activeTopSlide + 1} / 0{topslides.length}
            </div>
          </div>
        </div>
      </section>
       <div className="bg-indigo-900 py-4">
                        <div className="container max-w-7xl mx-auto">
                          <div className="flex justify-around flex-wrap">
                            <div className="text-center py-6 px-5">
                              <h3 className="text-white text-5xl font-novaBold mb-2">
                                <span className="inline-flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 ">
                                    <path d="M6 3h12" />
                                    <path d="M6 8h12" />
                                    <path d="m6 13 8.5 8" />
                                    <path d="M6 13h3" />
                                    <path d="M9 13c6.667 0 6.667-10 0-10" />
                                  </svg>
                                  1.13<sub className="text-xl font-novaSemi mt-2">CR</sub>
                                </span>
                              </h3>
                              <span className="text-white font-novaSemi">INTERNATIONAL</span>
                            </div>
                            <div className="text-center py-6 px-12">
                              <h3 className="text-white text-5xl font-novaBold mb-2">
                                <span className="inline-flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                    <path d="M6 3h12" />
                                    <path d="M6 8h12" />
                                    <path d="m6 13 8.5 8" />
                                    <path d="M6 13h3" />
                                    <path d="M9 13c6.667 0 6.667-10 0-10" />
                                  </svg>
                                  33.80<sub className="text-xl font-novaSemi mt-2">LPA</sub>
                                </span>
                              </h3>
                              <span className="text-white font-novaSemi">NATIONAL</span>
                            </div>
                            <div className="text-center py-6 px-12">
                              <h3 className="text-white text-5xl font-novaBold mb-2">
                                <span className="inline-flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                    <path d="M6 3h12" />
                                    <path d="M6 8h12" />
                                    <path d="m6 13 8.5 8" />
                                    <path d="M6 13h3" />
                                    <path d="M9 13c6.667 0 6.667-10 0-10" />
                                  </svg>
                                  32.75<sub className="text-xl font-novaSemi mt-2">LPA</sub>
                                </span>
                              </h3>
                              <span className="text-white font-novaSemi">MBA</span>
                            </div>
                            {/* <div className="text-center py-6 px-12">
                              <h3 className="text-white text-5xl font-novaBold mb-2">
                                <span className="inline-flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                    <path d="M6 3h12" />
                                    <path d="M6 8h12" />
                                    <path d="m6 13 8.5 8" />
                                    <path d="M6 13h3" />
                                    <path d="M9 13c6.667 0 6.667-10 0-10" />
                                  </svg>
                                  32<sub className="text-xl font-novaSemi mt-2">LPA</sub>
                                </span>
                              </h3>
                              <span className="text-white font-novaSemi">HOTEL MANAGEMENT</span>
                            </div> */}
                          </div>
                        </div>
                      </div>
      <AdmissionsShowcase />

      <section className="bg-white py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-balance text-4xl font-novaSemi tracking-tight text-gray-900 sm:text-5xl">
                Outstanding Placement Records
              </h2>
              <p className="mt-4 text-lg/8 font-novaReg text-gray-600">
                Our students secure top positions in leading companies worldwide, achieving remarkable career success.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-blue-500 p-8">
                  <dt className="text-sm/6 font-novaSemi text-gray-200">{stat.name}</dt>
                  <dd className="order-first text-4xl font-novaBold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Placement Highlights Table */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-novaBold text-center text-indigo-900 mb-12">
            Placement Highlights <span className="text-yellow-500">(2021 - 2025)</span>
          </h2>
          <div className="overflow-x-auto shadow-2xl rounded-2xl border border-gray-100 bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-indigo-900 text-white">
                  <th className="py-5 px-6 font-novaBold">Category</th>
                  <th className="py-5 px-6 font-novaBold">2021</th>
                  <th className="py-5 px-6 font-novaBold">2022</th>
                  <th className="py-5 px-6 font-novaBold">2023</th>
                  <th className="py-5 px-6 font-novaBold">2024</th>
                  <th className="py-5 px-6 font-novaBold">2025</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-novaReg">
                {highlightsData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50/50 transition-colors">
                    <td className="py-4 px-6 font-novaSemi text-indigo-800">{row.category}</td>
                    <td className="py-4 px-6">{row.y2021}</td>
                    <td className="py-4 px-6">{row.y2022}</td>
                    <td className="py-4 px-6">{row.y2023}</td>
                    <td className="py-4 px-6">{row.y2024}</td>
                    <td className="py-4 px-6 font-novaBold text-yellow-600">{row.y2025}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#1c1f52] w-full ">
        <div className="max-w-6xl max-xl:max-w-4xl max-lg:max-w-3xl mx-auto h-full flex justify-start pt-10 items-center flex-col text-white bg-center bg-contain bg-world-map">
          <span className="text-[#d58544] text-3xl font-novaReg max-sm:text-2xl">Placement</span>
          <h1 className="text-5xl font-novaBold max-sm:text-4xl">Reviews</h1>
          <div className="relative w-full flex justify-center items-center">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '#slider-button-right',
                prevEl: '#slider-button-left',
              }}
              className="mySwiper"
            >
              {slides?.map((student, index) => (
                <SwiperSlide key={index}>
                  <div className="my-10 text-center flex flex-col items-center mx-10 max-sm:mx-5">
                    <h2 className='text-2xl font-novaBold uppercase mb-4'>{student.heading}</h2>
                    <p className="max-w-3xl max-md:text-sm font-novaReg text-justify leading-relaxed">{student.description}</p>
                    <div className="flex flex-col items-center mt-10">
                      <div className="border-[6px] border-[#e4e01327] rounded-full">
                        <img
                          className="h-32 w-32 object-cover object-top rounded-full bg-gray-400"
                          src={student.imgSrc}
                          alt={student.name}
                        />
                      </div>
                      <div className="mt-4 uppercase text-center">
                        <h4 className="font-novaBold text-lg ">{student.name}</h4>
                        <p className='font-novaReg text-gray-300'>{student.degree} {student.batch}</p>
                        <small className='font-novaSemi text-yellow-400'>{student.company}</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div id="slider-button-left" className="absolute -left-10 max-lg:-left-2 max-md:hidden top-1/2 transform -translate-y-1/2 p-2 shadow-md cursor-pointer z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-50 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div id="slider-button-right" className="absolute -right-10 max-lg:-right-2 max-md:hidden top-1/2 transform -translate-y-1/2 p-2 shadow-md cursor-pointer z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-50 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pt-16 h-fit bg-yellow-400">
        <div className="relative px-3 space-x-10">
          <div className="flex flex-wrap justify-evenly w-full">
            {[currentSlide, (currentSlide + 1) % slides.length].map((index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-stretch w-full md:w-6/12 transition-all duration-1000 ease-in-out`}
              >
                <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center p-0">
                  <img
                    src={slides[index].imgSrc}
                    alt={slides[index].altText}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="pt-10 w-full md:w-1/2 flex flex-col p-4 max-md:bg-[#f3f3f3]">
                  <h2 className="text-xl xl:text-3xl max-lg:text-2xl max-md:text:2xl font-novaBold mt-2.5 uppercase">
                    {slides[index].heading}
                  </h2>
                  <p className="font-novaReg text-base md:text-lg mt-2.5 mb-12 max-w-md mx-auto italic">
                    {slides[index].description}
                  </p>
                  <p className="text-sm mb-2">
                    {slides[index].degree}{" "}
                    <strong className="text-blue-400">{slides[index].batch}</strong>
                  </p>
                  <h3 className="text-xl md:text-3xl text-[#ffd96e] font-novaReg mb-8 italic">
                    {slides[index].name}
                  </h3>
                  <img
                    src={slides[index].companyLogo}
                    alt={slides[index].companyAlt}
                    className="w-28"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section> */}

      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className=''>
              <h2 className='text-3xl font-novaSemi mb-5'>Awards, Recognitions & Accreditations</h2>
              <div className='grid grid-cols-3 gap-5'>
                {awards.map((award, index) => (
                  <div key={index} className='mb-6'>
                    <div className='py-2.5 px-5 border rounded-lg w-full mb-2.5 flex justify-center'>
                      <img src={award.logo} alt={award.title} className="w-[300px]" />
                    </div>
                    <p className='text-xs uppercase font-novaReg'>{award.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-black font-novaBold text-xl mb-5">
                SEE HOW AKG UNIVERSITY <br /> STUDENTS PREPARE AND BAG RS. 1.7 CR INTERNATIONAL <br /> PLACEMENTS AT TOP COMPANIES!
              </h4>
              <div className="flex justify-center">
                <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                  <img src="/image/building/building4.webp" alt="thumbnail" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <a href="https://youtu.be/tOl8-QPLIAU?si=mhbEHi44Z0VX6NsE" target="_blank">
                      <div className="bg-blue-400 rounded-full h-16 w-16 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="40" height="40" fill="white">
                          <path
                            d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='px-3'>
              <div>
                <h2 className='pl-10 text-3xl font-novaBold mb-8'>Charting Pathways to <br />Success and Fulfillment</h2>
              </div>
              <div className='pl-10 mb-8 flex items-start gap-3'>
                <div className="mt-1 bg-[#163b70] h-20 w-[10px] rounded-tr-lg rounded-br-lg"></div>
                <div>
                  <h2 className='text-lg font-novaBold mb-2'>Corporate Connect Program</h2>
                  <p className='font-novaReg'>The AKG Career Development Program (CCP) has been designed to enhance employability for our graduates.</p>
                </div>
              </div>

              <div className='pl-10 mb-8 flex items-start gap-3'>
                <div className="mt-1 bg-[#163b70] h-20 w-[10px] rounded-tr-lg rounded-br-lg"></div>
                <div>
                  <h6 className='text-lg font-novaBold mb-2'>Career Resource Centre</h6>
                  <p className='font-novaReg'>The AKG Career Resource Center (CRC) focuses on educating, connecting, and advising students about placement opportunities.</p>
                </div>
              </div>
              <div className='pl-10 mb-8 flex items-start gap-3'>
                <div className="mt-1 bg-[#f7a600] h-20 w-[10px] rounded-tr-lg rounded-br-lg"></div>
                <div>
                  <h6 className='text-lg font-novaBold mb-2'>Accreditations &amp; Validations</h6>
                  <p className='font-novaReg'>Accreditations and Validations serve as the cornerstones of correctness and credibility.</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <HighlightPlacement />

      <section className='py-16'>
        <div className='px-3 max-w-7xl mx-auto'>
          <div className='flex max-md:flex-col'>
            <div className='flex-1'>
              <img
                src="/image/leadership/Director_AKGEC.webp"
                alt="Vice President"
                className='rounded-tl-lg rounded-bl-lg h-full w-full object-cover'
              />
            </div>
            <div className='relative p-10 bg-[#f3f3f3] flex-1 flex flex-col rounded-tr-lg rounded-br-lg overflow-hidden'>
              <h3 className='mb-2.5 text-2xl uppercase'>Dr. Hemant Ahuja</h3>
              <p className='mb-[15px]'>
                <strong className='text-lg font-novaSemi pr-3 border-r-2 border-r-[#f7a600] mr-2'>Director</strong> AKG University
              </p>
              <div className="mt-[15px]">
                <p className='mb-2.5'>
                  <strong className='pr-3 mr-2 text-base font-novaBold'>Mobile</strong><br />
                  <a href="tel:919958744941">8744052891-93</a>, <a href="tel:919781925244">7290034978</a>
                </p>
                <p className='mb-2.5'>
                  <strong className='pr-3 mr-2 text-base font-novaBold'>Telephone</strong><br />
                  <a href="tel:011-40623135">1800-200-0777</a>
                </p>
                <p className='mb-2.5'>
                  <strong className='pr-3 mr-2 text-base font-novaBold'>Email ID</strong><br />
                  <a href="mailto:himani.sood@cumail.in">info@akgec.ac.in</a>
                </p>
              </div>
              <img
                src="/image/icons/circle-border.png"
                alt="border-image"
                className="absolute -bottom-48 -right-44 h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-BG45 min-h-[600px] bg-cover bg-center'>
        <div className='max-w-full mx-auto h-full'>
          <div className='px-3 flex items-center max-lg:w-full justify-start h-full ml-auto bg-brand-blue/90 w-1/2 min-h-[600px]'>
            <div className='p-20 max-md:p-10 max-w-2xl'>
              <h2 className='text-4xl font-novaBold text-white mb-6 leading-tight'>
                Ajay Kumar Garg University <br />
                <span className="text-brand-yellow">Empowering Careers</span>
              </h2>
              <div className="space-y-4 text-white font-novaReg leading-relaxed text-justify">
                <p>
                  Ajay Kumar Garg University (AKGU) maintains a strong focus on career development and industry engagement to ensure excellent placement opportunities for its students. The University’s Training and Placement Cell actively collaborates with leading national and multinational companies to facilitate campus recruitment across diverse disciplines.
                </p>
                <p>
                  Through structured training programs, industry interactions, internships, workshops, and skill development initiatives, students are well-prepared to meet the evolving demands of the professional world. The placement process is supported by continuous aptitude training, technical skill enhancement, and personality development sessions.
                </p>
                <p>
                  Over the years, AKGU has built strong relationships with reputed organizations across sectors such as information technology, consulting, finance, core engineering, and emerging technologies. The University consistently records commendable placement outcomes, with many students securing positions in prestigious companies with competitive salary packages.
                </p>
                <p>
                  With a commitment to bridging academia and industry, AKG University strives to equip students with the knowledge, skills, and professional ethics required to succeed in a global career landscape.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  text={"APPLY TODAY"}
                  className="bg-brand-yellow text-brand-blue text-sm font-novaBold px-8 py-3 rounded-md hover:bg-yellow-500 transition-all transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-novaBold text-brand-blue mb-12">
            Our Top <span className="text-brand-yellow">Recruiters</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Accenture", "Adobe", "Amazon", "Capgemini", "Cognizant", "Deloitte",
              "Goldman Sachs", "Google", "IBM", "Infosys", "Microsoft", "TCS"
            ].map((company, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center"
              >
                <span className="font-novaBold text-gray-700 text-lg">{company}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-gray-500 font-novaReg italic">
            Part of a global network of 300+ Industry Partners
          </p>
        </div>
      </section>

      <section className='pt-20'>
        <div className="relative w-full max-w-7xl mx-auto px-3 overflow-hidden">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-novaBold text-center mb-4">Student Stories</h2>
          <p className="text-center md:text-lg font-novaReg mx-10 lg:mx-36 text-gray-600">
            At AKG University, we are committed to student success, empowering individuals to thrive academically, socially, and professionally. Through exceptional learning experiences and comprehensive support services, we inspire our students to reach their fullest potential.
          </p>
          <StudentStories />
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-3'>
        <div className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-novaSemi text-center text-brand-blue mb-8">University Placement Information</h2>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row border-b border-gray-200">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 py-4 px-6 text-lg font-novaSemi transition-colors duration-200 ${activeTab === index ? "bg-brand-blue text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <PlacementSection key={activeTab} {...sections[activeTab]} />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default Placement;