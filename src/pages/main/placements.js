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
    image: "/image/placement/main-banner-1.jpg"
  },
  {
    id: 2,
    image: "/image/placement/main-banner-2.jpg"
  },
  {
    id: 3,
    image: "/image/placement/main-banner-3.jpg"
  },
  {
    id: 4,
    image: "/image/placement/main-banner-2.jpg"
  }
];

const slides = [
  {
    imgSrc: "/image/placement/1.png",
    heading: <>Accelerate your <br /> career at a global scale</>,
    description: `Amazon is a global leader in innovation and technology, offering endless opportunities for growth and development. Thanks to AKG University’s excellent placement support, I’ve kick-started my career with one of the world's most impactful companies, Amazon. I’m excited to be a part of the future of technology.`,
    degree: "B.TECH (CSE)",
    batch: "(Batch 2017-2021)",
    name: "NEHA SHARMA",
    companyLogo: "/image/company-logos/AmozonIcon.webp",
    company: "amazon",
  },
  {
    imgSrc: "/image/placement/2.png",
    heading: <>Choose the jobs <br /> you love, not the ones you get</>,
    description: `No doubt, AKG University is one of the best colleges in North India when it comes to education and placement. AKG University does everything possible to get its students placed in the best companies in the world. I would like to thank AKG University for giving me an opportunity to work at Wipro.`,
    degree: "B.TECH (CSE)",
    batch: "(Batch 2017-2021)",
    name: "SAKSHI AGRAWAL",
    companyLogo: "/image/company-logos/WIPRO.webp",
    company: "wipro",
  },
  {
    imgSrc: "/image/placement/4.png",
    heading: <>Accelerate your <br /> career at a global scale</>,
    description: `Amazon is a global leader in innovation and technology, offering endless opportunities for growth and development. Thanks to AKG University’s excellent placement support, I’ve kick-started my career with one of the world's most impactful companies, Amazon. I’m excited to be a part of the future of technology.`,
    degree: "B.TECH (CSE)",
    batch: "(Batch 2017-2021)",
    name: "SANJAY JAIN",
    companyLogo: "/image/company-logos/AmozonIcon.webp",
    company: "amazon",
  },
  {
    imgSrc: "/image/placement/4.png",
    heading: <>Choose the jobs <br /> you love, not the ones you get</>,
    description: `No doubt, AKG University is one of the best colleges in North India when it comes to education and placement. AKG University does everything possible to get its students placed in the best companies in the world. I would like to thank AKG University for giving me an opportunity to work at Wipro.`,
    degree: "B.TECH (CSE)",
    batch: "(Batch 2017-2021)",
    name: "AYUSH AGRAWAL",
    companyLogo: "/image/company-logos/WIPRO.webp",
    company: "wipro",
  },
  {
    imgSrc: "/image/placement/4.png",
    heading: <>Accelerate your <br /> career at a global scale</>,
    description: `Amazon is a global leader in innovation and technology, offering endless opportunities for growth and development. Thanks to AKG University’s excellent placement support, I’ve kick-started my career with one of the world's most impactful companies, Amazon. I’m excited to be a part of the future of technology.`,
    degree: "B.TECH (CSE)",
    batch: "(Batch 2017-2021)",
    name: "DEEPAK YADAV",
    companyLogo: "/image/company-logos/AmozonIcon.webp",
    company: "amazon",
  },
  {
    imgSrc: "/image/placement/3.png",
    heading: <>Choose the jobs <br /> you love, not the ones you get</>,
    description: `No doubt, AKG University is one of the best colleges in North India when it comes to education and placement. AKG University does everything possible to get its students placed in the best companies in the world. I would like to thank AKG University for giving me an opportunity to work at Wipro.`,
    degree: "B.TECH (CSE)",
    batch: "(Batch 2017-2021)",
    name: "AROHI PRAJAPAT",
    companyLogo: "/image/company-logos/WIPRO.webp",
    company: "wipro",
  }
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
  { id: 1, name: 'Total no of Recruiters', value: '600+' },
  { id: 2, name: 'Fortune 500 Companies', value: '30+' },
  { id: 3, name: 'Highest Package', value: '1 Crore' },
  { id: 4, name: 'MNCs', value: '150+' },
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
  const [currentTopSlide, setCurrentTopSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextTopSlide = () => {
    setCurrentTopSlide((prev) => (prev + 1) % topslides.length);
  };

  const prevTopSlide = () => {
    setCurrentTopSlide((prev) => (prev - 1 + topslides.length) % topslides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextTopSlide();
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [currentTopSlide]);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])
  return (
    <>
      <div className="relative w-full h-[95vh] max-md:h-[80vh] max-sm:h-[50vh] overflow-hidden">
        {topslides ?
          <AnimatePresence initial={false}>
            {topslides[currentTopSlide] && (
              <motion.div
                key={currentTopSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <img
                    src={topslides[currentTopSlide].image}
                    alt="Slide"
                    className="w-full h-full object-cover max-md:w-full max-md:h-full"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
                  <section className='absolute inset-0 flex'>
                    <div className="w-full mt-auto">
                      {/* <div className="text-center">
                        <h2 className="text-white font-novaBold text-3xl mb-2">Highest Package</h2>
                        <small className="text-white font-novaBold text-lg">Batch 2023-24</small>
                      </div> */}
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
                                  32<sub className="text-xl font-novaSemi mt-2">LPA</sub>
                                </span>
                              </h3>
                              <span className="text-white font-novaSemi">HOTEL MANAGEMENT</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          : null}
        <button
          variant="outline"
          size="icon"
          className="flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 bg-white opacity-50 rounded-full hover:bg-opacity-75 w-4 h-4 lg:w-12 lg:h-12 max-md:w-6 max-md:h-6 "
          onClick={prevTopSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          variant="outline"
          size="icon"
          className="flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 bg-white opacity-50 rounded-full hover:bg-opacity-75  w-4 h-4 lg:w-12 lg:h-12 max-md:w-6 max-md:h-6"
          onClick={nextTopSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
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
                    <p className="max-w-3xl max-md:text-sm font-novaReg">{student.description}</p>
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
                        <small className='font-novaSemi'>{student.company}</small>
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

      <section className='bg-BG45 h-full bg-cover bg-center cursor-pointer'>
        <div className='max-w-full mx-auto'>
          <div className='px-3 flex items-center max-lg:w-full justify-start h-full ml-auto bg-[#1f4171] w-1/2 opacity-90'>
            <div className='p-20 max-w-2xl'>
              <div className=''>
                <h2 className='text-3xl font-novaBold text-white mb-4'>AKG <br />University<br />
                  <span>Leader in Campus Placements</span>
                </h2>
              </div>
              <p className='text-justify mb-4 leading-tight text-white'>Dreaming of securing a position with Fortune 500 or India's Top 100 Companies? Look no further than AKG University, your gateway to realizing those aspirations. With a robust Industry-Academic interface, AKG University is setting new standards in campus placements. Year after year, renowned companies like Microsoft, Amazon, and IBM actively recruit fresh talent from our campus.</p>
              <p className='text-justify mb-4 leading-tight text-white'>For the Batch of 2023-24, AKG University has welcomed over 600 Multi-National Corporations, resulting in an impressive total of 7,500 placement offers. The highest package has seen a remarkable increase of 25%, reaching a new high of 1.5 CR for international placements, alongside 50 LPA for national placements.</p>
              <p className='text-justify mb-4 leading-tight text-white'>Continuing the Tradition of Excellence, AKG University Registers 7,500 Placement Offers for Batch 2023-24 (Highest in the Region).</p>
              <p className='text-justify mb-4 leading-tight text-white'>Over 40 MNCs have consistently recruited engineering students from AKG University, competing with IITs and NITs. Additionally, the University School of Business at AKG University has attracted more than 30 leading firms, including top names such as Deloitte, Ernst & Young, SAP Labs, and Hitachi.</p>
              <p className='text-justify mb-4 leading-tight text-white'>Our Corporate Relations Office is located in Greater Noida, dedicated to connecting students with industry leaders. For any inquiries, please contact Mr. Ravi Sharma (Director of Corporate Relations & Placements) at 9812345678.</p>
              <Button
                text={"APPLY TODAY"}
                className="bg-secondary text-white text-sm font-novaBold px-6 py-2 rounded-md hover:bg-[#3c5686] hover:border-b-4 hover:border-[#4070af] hover:transform hover:transition-transform hover:ease-in-out hover:duration-500 scale-y-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className='pt-20'>
        <div className="relative w-full max-w-7xl mx-auto px-3 overflow-hidden">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-novaBold text-center mb-4">Students Stories</h2>
          <p className="text-center md:text-lg font-novaReg mx-36 text-gray-600">
            At AKG University, we are committed to student success, empowering individuals to thrive academically, socially, and professionally. Through exceptional learning experiences and comprehensive support services, we inspire our students to reach their fullest potential.
          </p>
          <StudentStories />
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-3'>
        <div className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-novaSemi text-center text-indigo-800 mb-8">University Placement Information</h2>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="flex border-b border-gray-200">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 py-4 px-6 text-lg font-novaSemi transition-colors duration-200 ${activeTab === index ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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