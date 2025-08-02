"use client";

import React from 'react'
import Image from 'next/image';
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { studentReviewsData } from '@/Json/PlacementData';
import CSEForm from '@/Components/CSEForm'
import { ArrowRight, Check, IndianRupee, MoveRight } from 'lucide-react'
import {
  GraduationCap,
  BookOpen,
  PiggyBank,
  Award,
  Send,
  Brain,
  Cpu,
  Database,
  Code,
  Zap,
  TrendingUp,
} from "lucide-react"
import HowToApply from '@/Components/HowToApply';
import IndustryPartnerSlider from '@/Components/IndustryPartnerSlider';
import HighlightSlider from '@/Components/HighlightSlider';
import Breadcrumb from '@/Components/Breadcrumb';


const AIMLDepartment = () => {
  const features = [
    "Triple-Level Certification Program.",
    "15-hour Online/Blended Course with one credit for each level, aligned with industry standards.",
    "Advance earning opportunity for students with 3 credits.",
    "Skill development aligned with NEP guidelines.",
    "Immersive learning experience to cultivate future-ready skills.",
    "Live, instructor-led sessions with hands-on learning from expert faculty.",
  ];

  const recruiters = [
    { name: "Amazon", column: 1 },
    { name: "Uber", column: 1 },
    { name: "IBM", column: 1 },
    { name: "Accenture", column: 1 },
    { name: "Infosys", column: 1 },
    { name: "Adobe", column: 2 },
    { name: "Walmart", column: 2 },
    { name: "CISCO", column: 2 },
    { name: "Cognizant", column: 2 },
    { name: "Wipro", column: 2 },
  ]

  const services = [
    {
      title: "Study Abroad",
      icon: GraduationCap,
      href: "/study-abroad",
      description: "Global education opportunities",
    },
    // {
    //   title: "Program Exchange",
    //   icon: BookOpen,
    //   href: "/program-exchange",
    //   description: "International academic programs",
    // },
    {
      title: "Education Loan",
      icon: PiggyBank,
      href: "/education-loan",
      description: "Financial assistance for studies",
    },
    {
      title: "Scholarship",
      icon: Award,
      href: "/scholarship",
      description: "Merit-based funding support",
    },
    {
      title: "Apply Now",
      icon: Send,
      href: "/apply",
      description: "Start your AI journey today",
    },
  ]

  const departmentFeatures = [
    { icon: Brain, label: "Deep Learning" },
    { icon: Cpu, label: "Neural Networks" },
    { icon: Database, label: "Big Data Analytics" },
    { icon: Code, label: "Algorithm Design" },
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
            <h2 className='font-novaReg max-md:text-center text-3xl sm:text-4xl'>Artificial Intelligence & Machine Learning</h2>
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
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Department Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Department Overview */}
            <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-novaBold text-gray-900">Department Overview</h2>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed font-novaReg text-justify">
                <p className="text-lg">
                  The Department of Artificial Intelligence & Machine Learning at AKGU was established to meet the
                  growing demand for AI professionals. We provide a cutting-edge learning environment that combines
                  theoretical foundations with practical applications in AI/ML, supported by world-class research
                  facilities.
                </p>
                <p>
                  Our department has quickly become a hub for innovation in machine learning, deep learning, and
                  intelligent systems. We offer comprehensive support to M.Tech. scholars through specialized AI lab
                  facilities, access to high-performance computing resources, and guidance from faculty with industry
                  and research expertise.
                </p>
                <p>
                  Our faculty and students regularly publish research in top-tier AI conferences (NeurIPS, ICML, CVPR)
                  and journals, with particular strengths in computer vision, natural language processing, and
                  reinforcement learning.
                </p>
              </div>

              {/* Features Grid */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {departmentFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-sm font-novaSemi text-gray-700 text-center">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope Section */}
            <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 rounded-3xl p-4 sm:p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-novaBold">Market Scope & Opportunities</h2>
                </div>

                <p className="text-blue-100 leading-relaxed text-lg font-novaReg">
                  According to a McKinsey report, AI adoption has more than doubled since 2017, with 50% of companies
                  now using AI in at least one business function. The global AI market is projected to grow at a CAGR of
                  38.1% from 2022 to 2030, creating unprecedented demand for skilled AI/ML professionals across all
                  sectors.
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-3xl font-novaBold text-blue-200">50%</div>
                    <div className="text-sm text-blue-100 font-novaSemi">Companies using AI</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-3xl font-novaBold text-purple-200">38.1%</div>
                    <div className="text-sm text-blue-100 font-novaSemi">Market CAGR</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-3xl font-novaBold text-indigo-200">2030</div>
                    <div className="text-sm text-blue-100 font-novaSemi">Growth projection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-novaBold text-gray-900 mb-2">Quick Services</h3>
                  <p className="text-gray-600 font-novaReg">Explore our comprehensive offerings</p>
                </div>

                <div className="space-y-4">
                  {services.map((service, index) => (
                    <a
                      key={service.title}
                      href={service.href}
                      className="group block p-4 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-indigo-600 transition-all duration-300">
                          <service.icon
                            className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-novaSemi text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                            {service.title}
                          </h4>
                          <p className="text-sm text-gray-500 font-novaReg group-hover:text-blue-700 transition-colors duration-300 mt-1">
                            {service.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-novaSemi py-4 px-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <span>Get Started Today</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Section 1: Computer Science & Engineering */}
      <section className="relative h-[40vh] xl:h-[50vh] bg-cover flex flex-col justify-between lg:p-10">
        <div className="absolute inset-0 bg-BG42 bg-cover bg-fixed grayscale">
          <div className="absolute inset-0 bg-gray-800 bg-opacity-90" />
        </div>
        <div className="relative max-w-4xl w-full mx-auto text-white text-center flex max-md:flex-col max-md:gap-5 items-center justify-between px-4 py-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-novaBold max-w-lg leading-6 sm:leading-7">
              ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
            </h2>
            <span className="text-lg sm:text-xl md:text-2xl font-novaReg">
              Cutting-Edge Program Recognized Among
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
      <section className="bg-blue-600 px-8 py-16 h-full xl:h-[50vh]">
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
                <span className="text-gray-600">AI-first curriculum with industry-aligned specializations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Hands-on experience with TensorFlow, PyTorch and cloud AI platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Collaborations with leading AI research labs and companies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">100% placement assistance in AI/ML roles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Real-world projects in computer vision, NLP and predictive analytics</span>
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
                <span className="text-gray-600">Deep Learning Research Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">NVIDIA AI Computing Center</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Computer Vision & Robotics Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Natural Language Processing Center</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">AI Cloud Computing Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Reinforcement Learning Research Facility</span>
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
                'AI Research', 'ML Publications', 'Hackathons', 'Industry Expert Talks',
                'AI Conferences', 'Research Centers', 'Certifications', 'Specializations',
                'Learning Outcomes', 'Faculty Profiles', 'AI Best Practices'
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

      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 py-8 sm:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="xl:col-span-2 space-y-8">
            {/* Eligibility Section */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-novaBold text-gray-800">Admission Eligibility</h2>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-l-4 border-indigo-500">
                <p className="text-gray-700 text-lg leading-relaxed font-novaReg">
                  Applicants must have completed{" "}
                  <span className="font-novaSemi text-indigo-700">10+2 with Mathematics</span> as compulsory subject
                  along with
                  <span className="font-novaSemi text-indigo-700"> Physics/Computer Science/Statistics</span>, securing
                  at least
                  <span className="font-novaSemi text-indigo-700"> 65% aggregate marks</span>. Strong aptitude in
                  quantitative subjects and programming is preferred.
                </p>
              </div>

              {/* Key Requirements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="text-green-600 font-novaSemi text-sm uppercase tracking-wide mb-1">Minimum Marks</div>
                  <div className="text-2xl font-novaBold text-green-800">65%</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-blue-600 font-novaSemi text-sm uppercase tracking-wide mb-1">
                    Required Subject
                  </div>
                  <div className="text-lg font-novaBold text-blue-800">Mathematics</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="text-purple-600 font-novaSemi text-sm uppercase tracking-wide mb-1">Plus One Of</div>
                  <div className="font-novaSemi text-purple-800">Physics/CS/Stats</div>
                </div>
              </div>
            </div>

            {/* Fee Structure Section */}
            {/* <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <IndianRupee className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-novaBold text-gray-800">Fee Structure</h2>
              </div>
              <div className="mb-8">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-xl p-4 sm:p-6">
                  <h3 className="text-xl font-novaBold text-white mb-2">Program Fee</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-novaBold text-white">₹1,45,000</span>
                    <span className="text-indigo-200 ml-2 font-novaReg">per semester</span>
                  </div>
                </div>
                <div className="bg-white border-2 border-indigo-600 rounded-b-xl p-4 sm:p-6">
                  <div className="flex items-center font-novaReg text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Total program duration: 4 years (8 semesters)</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-novaBold text-gray-800 mb-6">Additional Fees</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 sm:p-6 border border-orange-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-novaSemi text-gray-800">Examination Fee</h4>
                    </div>
                    <div className="text-2xl font-novaBold text-orange-600">₹4,500</div>
                    <div className="text-sm text-gray-600 mt-1 font-novaReg">Per semester</div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 sm:p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-novaSemi text-gray-800">AI Lab Security</h4>
                    </div>
                    <div className="text-2xl font-novaBold text-blue-600">₹5,000</div>
                    <div className="text-sm text-gray-600 mt-1 font-novaReg">One-time deposit</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border border-purple-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                          />
                        </svg>
                      </div>
                      <h4 className="font-novaSemi text-gray-800">Cloud Access</h4>
                    </div>
                    <div className="text-2xl font-novaBold text-purple-600">₹8,000</div>
                    <div className="text-sm text-gray-600 mt-1 font-novaReg">Annual fee</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 sm:p-6">
                <div className="flex justify-between items-center text-white">
                  <span className="text-lg font-novaSemi">First Semester Total</span>
                  <span className="text-3xl font-novaBold">₹1,62,500</span>
                </div>
                <div className="text-gray-300 text-sm mt-2 font-novaReg">
                  Includes semester fee, examination fee, lab deposit, and cloud access
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Image and CTA */}
          <div className="xl:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Hero Image Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative">
                  <img
                    src="https://imgs.search.brave.com/Hue7bpZgnaDEf6Yub5aRxipDEnEF9M_aXkSWqFExmLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYXZl/Y2FtZXJhd2lsbHRy/YXZlbC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDEv/eW91dHViZS10aHVt/Ym5haWxzLXNpemUt/aGVhZGVyLTEtODAw/eDQ1MC5wbmc"
                    alt="AI & Machine Learning Program"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-novaBold">Future-Ready Education</h3>
                    <p className="text-sm text-gray-200 font-novaReg">Advanced AI & ML Curriculum</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              {/* <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-novaBold text-gray-800 mb-6">Program Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-novaSemi text-gray-800">4 Years</div>
                      <div className="text-sm text-gray-600 font-novaReg">Program Duration</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-novaSemi text-gray-800">Industry Ready</div>
                      <div className="text-sm text-gray-600 font-novaReg">Practical Learning</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-novaSemi text-gray-800">AI Labs</div>
                      <div className="text-sm text-gray-600 font-novaReg">State-of-the-art</div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* CTA Button */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-novaBold mb-2">Ready to Apply?</h3>
                <p className="text-indigo-100 mb-4 text-sm font-novaReg">Join the next generation of AI innovators</p>
                <button className="w-full bg-white text-indigo-600 font-novaBold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
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
            Artificial Intelligence & Machine Learning
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Careers Section */}
            <div>
              <h2 className="text-2xl font-novaReg text-white mb-4">Career Prospects</h2>
              <p className="text-white font-novaReg leading-relaxed">
                The AI revolution is creating unprecedented demand for skilled professionals across industries. Our graduates are placed in top tech companies, research labs, and startups as AI/ML Engineers, Data Scientists, and Research Analysts. With expertise in deep learning, computer vision, and NLP, they build careers in healthcare AI, autonomous systems, fintech, and more. The average starting salary for our AI graduates is 35% higher than conventional CS roles, with rapid career growth in this future-proof field.
              </p>
            </div>
            {/* Top Recruiters Section */}
            <div>
              <h2 className="text-2xl font-novaReg text-white mb-4">Leading Employers</h2>
              <p className="text-white font-novaReg mb-4">
                Some of the leading companies hiring Computer Science Engineers include:
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
              className="group font-novaSemi inline-flex items-center gap-2 rounded-full bg-btn-gradient animate-gradient px-6 py-2 text-sm font-novaSemi text-white transition-colors hover:bg-red-700"
            >
              VIEW MORE
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      <section>
        <div className='relative bg-BG6 bg-cover bg-top h-full lg:h-[70vh]'>
          <div className='hidden lg:block absolute bottom-5 right-24 xl:right-64 2xl:right-[23rem] leading-none rounded-lg bg-white animate-bounce drop-shadow-md px-6 py-4'>
            <img className='w-40 object-cover' src="/image/company-logos/Google.png" alt="" />
            <h5 className='text-lg font-novaReg'>Sakshi Panchal</h5>
            <small className='text-sm font-novaReg'>Placed in Google</small>
          </div>
          <div className='absolute left-0 w-[45%] max-lg:bg-white max-lg:w-full h-full bg-offwhite-gradient z-10'></div>
          <div className='relative max-w-[1500px] mx-auto h-full z-20 px-5 max-sm:px-3 pb-10'>
            <div className='flex max-lg:flex-col'>
              <div className='mt-20 '>
                <div className='relative z-20'>
                  <h1 className='text-4xl font-novaReg max-w-md leading-none max-sm:text-center max-sm:text-3xl'>
                    AKG University Engineering Placement Highlights
                  </h1>
                  <p className='mt-5 max-w-xl text-lg font-novaReg max-sm:text-center'>
                    Our commitment to excellence reflects in our outstanding placement records and industry partnerships
                  </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4  gap-5 mt-8 relative z-20 max-w-7xl lg:w-2/3'>
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 sm:p-8 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <div className="relative">
                      <div className="text-4xl font-novaBold mb-2">
                        1.13<span className="text-lg font-novaReg">CR</span>
                      </div>
                      <p className="text-blue-100 text-sm leading-tight font-novaReg">International Highest Package Offered</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 sm:p-8 text-center shadow-lg border border-gray-100">
                    <div className="text-4xl font-novaBold text-gray-900 mb-2">33.80</div>
                    <p className="text-gray-600 text-sm leading-tight font-novaReg">
                      <span className="font-novaReg">LPA</span> National Highest Package Offered
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-4 sm:p-8 text-center shadow-lg border border-gray-100">
                    <div className="text-4xl font-novaBold text-gray-900 mb-2">
                      11<span className="text-lg font-novaReg">LPA</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-tight font-novaReg">Offered to Approx 306 Students</p>
                  </div>

                  <div className="bg-white rounded-2xl p-4 sm:p-8 text-center shadow-lg border border-gray-100">
                    <div className="text-4xl font-novaBold text-gray-900 mb-2">
                      6<span className="text-lg font-novaReg">LPA</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-tight">Offered to 1042 Students</p>
                  </div>
                </div>
                <div className="mt-10 lg:mt-16 w-full lg:w-1/2 grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-novaBold text-blue-600 mb-2">95%</div>
                    <p className="text-gray-600 font-novaReg">Placement Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-novaBold text-blue-600 mb-2">200+</div>
                    <p className="text-gray-600 font-novaReg">Recruiting Companies</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-novaBold text-blue-600 mb-2">15+</div>
                    <p className="text-gray-600 font-novaReg">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden relative h-[300px] overflow-hidden max-lg:block'>
          <div className='absolute left-0 w-[45%] h-full bg-offwhite-gradient z-10'></div>
          <img className='w-full h-full object-cover object-top max-sm:object-right' src="/image/AKG_Student.jpg" alt="" />
          <div className='absolute z-30 bottom-5 left-3 leading-none rounded-lg bg-white drop-shadow-md px-6 py-4 max-sm:p-2'>
            <img className='w-28 object-cover' src="/image/company-logos/Google.png" alt="" />
            <h5 className='text-lg font-novaReg'>Sakshi Panchal</h5>
            <small className='font-novaReg'>Placed in Google</small>
          </div>
        </div>
      </section>
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
                      <h4 className="font-novaBold">{review.name}</h4>
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

export default AIMLDepartment