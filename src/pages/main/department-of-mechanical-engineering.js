"use client";

import React from 'react'
import Image from 'next/image';
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { studentReviewsData } from '@/Json/PlacementData';
import CSEForm from '@/Components/CSEForm'
import { ArrowRight, Check, MoveRight } from 'lucide-react'
import { GraduationCap, BookOpen, PiggyBank, Award, Send } from 'lucide-react'
import PlacementBanner from '@/Components/PlacementBanner';
import HowToApply from '@/Components/HowToApply';
import IndustryPartnerSlider from '@/Components/IndustryPartnerSlider';
import HighlightSlider from '@/Components/HighlightSlider';
import Breadcrumb from '@/Components/Breadcrumb';


const MEDepartment = () => {
  const features = [
    "Triple-Level Certification Program.",
    "15-hour Online/Blended Course with one credit for each level, aligned with industry standards.",
    "Advance earning opportunity for students with 3 credits.",
    "Skill development aligned with NEP guidelines.",
    "Immersive learning experience to cultivate future-ready skills.",
    "Live, instructor-led sessions with hands-on learning from expert faculty.",
  ];

  const recruiters = [
    { name: "Tata Motors", column: 1 },
    { name: "Mahindra & Mahindra", column: 1 },
    { name: "Ashok Leyland", column: 1 },
    { name: "Bharat Heavy Electricals Limited (BHEL)", column: 1 },
    { name: "Larsen & Toubro (L&T)", column: 1 },
    { name: "Bosch India", column: 2 },
    { name: "General Electric (GE)", column: 2 },
    { name: "Siemens", column: 2 },
    { name: "JCB India", column: 2 },
    { name: "ISRO", column: 2 },
  ];


  const services = [
    {
      title: "Study Abroad",
      icon: GraduationCap,
      href: "/study-abroad",
    },
    {
      title: "Program Exchange",
      icon: BookOpen,
      href: "/program-exchange",
    },
    {
      title: "Education Loan",
      icon: PiggyBank,
      href: "/education-loan",
    },
    {
      title: "Scholarship",
      icon: Award,
      href: "/scholarship",
    },
    {
      title: "Apply Now",
      icon: Send,
      href: "/apply",
    }
  ]

  const placements = [
    {
      logo: "/image/company-logos/UBER.png",
      number: "38.44",
      company: "UBER",
      isRed: false
    },
    {
      logo: "/image/company-logos/nxtpeLogo.png",
      number: "42.75",
      company: "NXTPE",
      isRed: true
    },
    {
      logo: "/image/company-logos/CommvaultLogo.png",
      number: "34",
      company: "Commvault Systems",
      isRed: false
    },
    {
      logo: "/image/company-logos/walmart.jpg",
      number: "19.48",
      company: "Walmart",
      isRed: true
    },
    {
      logo: "/image/company-logos/CISCO.png",
      number: "24.73",
      company: "CISCO",
      isRed: false
    },
    {
      logo: "/image/company-logos/tanx-long-light.png",
      number: "55.50",
      company: "TANX.FI",
      isRed: true
    }
  ]

  const BreadCrumb = [
    {
      name: "Department Of Computer Science and Engineering",
      Link: "/department-of-computer-science-and-engineering",
    },
  ]

  return (
    <section>
      <div className='relative h-[90vh] max-lg:h-full bg-cover'>
        <div className='absolute inset-0 bg-BG42 bg-cover grayscale'>
          <div className='absolute inset-0 bg-black bg-opacity-70' />
        </div>
        <div className='relative max-w-[1400px] mx-auto h-full w-full grid grid-cols-3 px-10 max-sm:px-3'>
          <div className='col-span-1 flex flex-col justify-center max-lg:items-center text-white max-lg:col-span-3 max-lg:pt-40'>
            <span className='text-xl sm:text-2xl max-sm:text-center font-novaReg'>Bachelor of Engineering</span>
            <h2 className='font-novaReg max-md:text-center text-3xl sm:text-4xl'>Mechanical Engineering</h2>
            <button className="py-3 max-sm:py-2 max-sm:px-6 max-sm:text-xs px-8 mt-5 text-[15px] rounded-lg font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 tracking-widest flex items-center gap-1">Apply Now <MoveRight className='w-5 h-5' /></button>
            <div className='mt-10 flex max-[420px]:flex-col gap-2'>
              <img className='w-60 max-xl:w-48 rounded-lg' src="/image/qs-i-gauge.jpg" alt="I-GAUGE" />
              <img className='w-60 max-xl:w-48 rounded-lg' src="/image/iic.jpg" alt="IIC" />
            </div>
          </div>
          <div className='col-span-2 flex justify-end items-center max-lg:col-span-3 max-lg:justify-center lg:pt-10 max-lg:py-10'>
            <CSEForm />
          </div>
        </div>
      </div>
      <main className='max-w-[1400px] max-[1450px]:container mx-auto py-10 px-10 max-sm:px-2'>
        <Breadcrumb data={BreadCrumb} />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-novaReg">Mechanical Engineering</h2>
              <p className="my-5 tracking-tight font-novaReg text-start leading-5">
                The Department of Mechanical Engineering at AKGU has been a cornerstone of engineering education since the inception of the university. Known for its strong academic foundation and hands-on training, the department focuses on preparing students to meet real-world industrial challenges.
              </p>
              <p className="leading-5 text-start font-novaReg">
                With well-equipped labs and experienced faculty, the department offers comprehensive support to  undergraduate  students in areas such as design, thermal engineering, and manufacturing. The department also encourages research and innovation through project-based learning, workshops, and participation in national-level technical events.
              </p>

            </div>
            <div>
              <h2 className='font-novaReg text-2xl'>Scope</h2>
              <p className='mt-2 font-novaReg'>  Mechanical Engineering offers a broad and enduring scope, with opportunities spanning across core industries such as automotive, aerospace, energy, manufacturing, and robotics. With the growing emphasis on sustainable technologies, automation, and advanced materials, mechanical engineers are increasingly contributing to innovations in electric vehicles, renewable energy systems, and smart manufacturing. Graduates from this department are well-equipped to pursue careers in design, production, quality control, R&D, and also have strong prospects in government services, higher education, and entrepreneurship.
              </p>
            </div>
          </div>
          <div className="h-max border border-gray-400 rounded-lg p-6 shadow-lg mt-14">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="flex flex-col text-center items-center gap-3 group">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center border bg-gray-200 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white`}>
                    <service.icon strokeWidth={1.5} className="w-8 h-8" />
                  </div>
                  <span className="font-novaReg text-black">{service.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* Section 1: Computer Science & Engineering */}
      <section className="relative bg-cover flex flex-col justify-between py-6 sm:py-20 md:py-32">
        <div className="absolute inset-0 bg-BG42 bg-cover bg-fixed grayscale">
          <div className="absolute inset-0 bg-gray-800 bg-opacity-90" />
        </div>
        <div className="relative max-w-4xl w-full mx-auto text-white text-center flex max-md:flex-col max-md:gap-5 items-center justify-between px-4 py-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-novaBold max-w-lg leading-6 sm:leading-7">
              Mechanical Engineering
            </h2>
            <span className="text-lg sm:text-xl md:text-2xl font-novaReg">
              Program Ranked Amongst
            </span>
            <h1 className="text-2xl sm:text-4xl xl:text-6xl text-yellow-500 font-novaBold">
              TOP UNIVERSITY
            </h1>
          </div>
          <div>
            <img
              className="w-40 sm:w-48 md:w-60 rounded-lg"
              src="/image/qs-i-gauge.jpg"
              alt="I-GAUGE"
            />
          </div>
        </div>
      </section>


      {/* Section 2: Blue Background with 3 Cards */}
      <section className="bg-blue-600 px-8 py-16 xl:pt-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto xl:-translate-y-40">
          {/* Department at a Glance Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-10 h-10 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <h2 className="text-2xl font-novaSemi text-black">
                Department at a Glance
              </h2>
            </div>
            <ul className="space-y-2 font-novaReg">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Innovative Curriculum with Global Standards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Hands-on Experience with Emerging Technologies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Strong Network with Industry Leaders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Outstanding Career Opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Practical Learning through Real-world Projects</span>
              </li>
            </ul>
            <button className="py-2 max-sm:py-1.5 max-sm:px-4 max-sm:text-xs px-5 mt-5 text-[15px] rounded-lg font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 tracking-widest flex items-center gap-1">
              VIEW MORE <MoveRight className='w-5 h-5' />
            </button>
          </div>

          {/* Exclusive Labs Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-10 h-10 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
              </svg>
              <h2 className="text-2xl font-novaSemi text-black">Exclusive Labs</h2>
            </div>
            <ul className="space-y-2 font-novaReg">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Texas Instruments Embedded Systems Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Siemens Center of Excellence in Automation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">ABB Electrical Systems Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Schneider Electric Smart Grid Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Bosch Center for Power Electronics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">National Instruments LabVIEW Innovation Hub</span>
              </li>

            </ul>
            <button className="py-2 max-sm:py-1.5 max-sm:px-4 max-sm:text-xs px-5 mt-5 text-[15px] rounded-lg font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 tracking-widest flex items-center gap-1">
              VIEW MORE <MoveRight className='w-5 h-5' />
            </button>
          </div>

          {/* Department in a Nutshell Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-novaSemi text-black">Your Department in a <br /> Nutshell</h2>
            </div>

            <ul className="space-y-1 font-novaReg">
              {[
                'Innovations', 'Publications', 'Workshops', 'Guest Lectures',
                'Events', 'Research Centers', 'Coaching Programs', 'Syllabus',
                'Program Outcomes', 'Staff Directory', 'Best Practices'
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[15px] text-gray-900 cursor-pointer hover:pl-1.5 duration-200 ease-in-out">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
      <div className="max-w-[1400px] mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-novaReg text-gray-800 mb-2">
              AKG University B.Tech ME Admission Eligibility & Fees
            </h1>
            <p className="text-gray-800 font-novaReg">
              Applicants must have completed 10+2 with Physics, Mathematics, and one additional subject such as Chemistry / Biotechnology / Computer Science / Biology, securing at least 60% aggregate marks.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <table className="w-full border border-gray-300 border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 bg-gray-600 text-white font-novaReg">
                      Program Fee
                    </th>
                    <th className="text-left py-3 px-4 bg-gray-600 text-white font-novaReg">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b font-novaReg">
                    <td className="py-3 px-4 text-gray-700">Fee Per Annum</td>
                    <td className="py-3 px-4 text-gray-700">1,75,000/- INR</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <table className="w-full border border-gray-300 border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-3 bg-gray-600 text-white font-novaReg">
                      Other Fee Details
                    </th>
                    <th className="text-left py-3 px-4 bg-gray-600 text-white font-novaReg">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b font-novaReg">
                    <td className="py-3 px-4 text-gray-700">Examination Fee + Security Fee</td>
                    <td className="py-3 px-4 text-gray-700">25,000/- INR</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] rounded-lg">
          <img
            src="https://imgs.search.brave.com/Hue7bpZgnaDEf6Yub5aRxipDEnEF9M_aXkSWqFExmLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYXZl/Y2FtZXJhd2lsbHRy/YXZlbC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDEv/eW91dHViZS10aHVt/Ym5haWxzLXNpemUt/aGVhZGVyLTEtODAw/eDQ1MC5wbmc"
            alt="Thumbnail"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-center text-3xl font-novaSemi mb-12 text-gray-800">
          Unprecedented Placement Achievements
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-start">
          {placements.map((placement, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="text-3xl lg:text-4xl font-novaBold mb-2">
                <span className={placement.isRed ? "text-red-500" : "text-gray-600"}>
                  {placement.number}
                </span>
                <span className="text-gray-400 text-lg ml-1">LPA</span>
              </div>
              <div className="w-32 h-12 relative">
                <Image
                  src={placement.logo}
                  alt={`${placement.company} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className='bg-indigo-900'>
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <h1 className="text-3xl font-novaReg text-white leading-7 mb-8">
            Career Opportunities After
            <br />
            Mechanical Engineering
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Careers Section */}
            <div>
              <h2 className="text-2xl font-novaReg text-white mb-4">Career Prospects</h2>
              <p className="text-white font-novaReg leading-relaxed">
                Graduates of Mechanical Engineering have diverse career paths in industries like automotive, aerospace, power generation, manufacturing, and HVAC. They are well-suited for roles in design, maintenance, quality assurance, and operations. Many also pursue higher studies, research, or government jobs through exams like GATE and UPSC, while others explore opportunities in emerging fields like robotics and sustainable energy systems.
              </p>
            </div>
            {/* Top Recruiters Section */}
            <div>
              <h2 className="text-2xl font-novaReg text-white mb-4">Leading Employers</h2>
              <p className="text-white font-novaReg mb-4">
                Some of the leading companies hiring Mechanical Engineers include:
              </p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                {recruiters.map((recruiter, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className='bg-gray-300 p-0.5 rounded-md'>
                      <svg
                        className="w-4 h-4 text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-white font-novaReg">{recruiter.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl bg-white shadow-xl my-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Image Section */}
          <div className="relative h-[300px] md:h-full lg:col-span-4">
            <div className="absolute inset-0 bg-red-600">
              <Image
                src="/image/building/building5.webp"
                alt="Advanced Credit Programs"
                className="h-full w-full object-cover object-left grayscale"
                width={500}
                height={600}
                priority
              />
              <div className="absolute inset-0 bg-red-600/20 mix-blend-multiply" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 p-6 lg:col-span-4">
            <h1 className="text-3xl font-novaSemi tracking-tight text-gray-900 md:text-4xl">
              Specialized
              <br />
              Credit Programs
            </h1>
            <p className="text-gray-600 font-novaReg">
              AKG University offers advanced credit programs that include career-focused certifications in multiple fields like Engineering, Technology, Management, and more, adhering to the National Education Policy.
            </p>
            <p className="text-gray-600 font-novaReg">
              These programs equip students with advanced expertise in emerging skill areas, providing them with an excellent platform to excel in their careers. It’s an opportunity for passionate students to gain exposure to a dynamic and challenging academic environment.
            </p>
          </div>
          {/* Features Section */}
          <div className="space-y-6 bg-gray-50 p-6 lg:col-span-4">
            <h2 className="text-xl font-novaSemi text-gray-900">
              Key Highlights
            </h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className='bg-gray-300 rounded-md p-0.5'><Check className="h-4 w-4 flex-shrink-0 text-black" /></span>
                  <span className="text-sm text-gray-600 font-novaReg">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="group font-novaSemi inline-flex items-center gap-2 rounded-full bg-btn-gradient animate-gradient px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              VIEW MORE
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      <PlacementBanner />
      <IndustryPartnerSlider />
      <section className='relative h-screen'>
        <div className='absolute inset-0 bg-BG45 bg-center bg-cover bg-gray-600 bg-blend-multiply grayscale' />
        <div className='relative pt-20'>
          <h2 className='text-center text-4xl md:text-5xl text-white font-novaSemi'>Student Stories</h2>
        </div>
        <div className="relative w-full text-white">
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
            {studentReviewsData?.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="my-6 text-center flex flex-col items-center mx-10 max-sm:mx-5">
                  <img className='w-16 mb-3' src="/image/quote.png" alt="Quote" />
                  <p className="max-w-4xl text-2xl font-novaReg max-md:text-xl">{review.quote}</p>
                  <div className="flex flex-col items-center mt-10">
                    <div className="mt-4 uppercase text-center">
                      <h4 className="font-bold">{review.name}</h4>
                      <small>{review.company}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <HighlightSlider />
      <HowToApply />
    </section>
  )
}

export default MEDepartment