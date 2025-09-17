"use client";

import { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Scrollbar, A11y, } from "swiper/modules";
import CSEForm from "@/Components/CSEForm";
import { ArrowRight, Check } from "lucide-react";
import { GraduationCap, User, PiggyBank, FileText, CreditCard, CheckCircle, Send, Brain, Cpu, Database, Code, Zap, TrendingUp, MoveRight, Award } from "lucide-react";
import Breadcrumb from "@/Components/Breadcrumb";
import { IMAGE_PATH } from "@/configs/config";
import DOMPurify from 'dompurify';
import { splitTitle } from '@/utills/splitTitle'
import { Button } from '@headlessui/react';
import UniqueUniversity from '@/Components/UniqueUniversity';
import VisionMission from '@/Components/VisionMission';
import DeptScholarship from '@/Components/DeptScholarship';
import Abroad from '@/Components/Abroad';
import FAQHolder from '@/Components/FAQHolder';


const DepartmentDetails = ({ data }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)
  const timerRef = useRef(null)
  const componentRef = useRef(null)
  const sliderRef = useRef(null)
  const d = data?.pageData;

  const icons = [Brain, Cpu, Database, Code];

  const items = [];
  for (let i = 1; i <= 10; i++) {
    const title = d?.[`OVT-${i}`];

    if (title) {
      const IconComponent = icons[i % icons.length];
      items.push({
        icon: <IconComponent className="w-8 h-8 text-blue-600 mb-2" />,
        title,
      });
    }
  }

  const scope = [];
  for (let i = 1; i <= 10; i++) {
    const title = d?.[`ST-${i}`];
    const description = d?.[`SD-${i}`];

    if (title && description) {
      scope.push({
        title,
        description,
      });
    }
  }

  const placements = [];
  for (let i = 1; i <= 10; i++) {
    const logo = d?.[`Placement_Logo-${i}`];
    const count = d?.[`Placement_Count-${i}`];

    if (logo && count) {
      placements.push({
        logo,
        count,
      });
    }
  }

  const recruiters = [];
  for (let i = 1; i <= 10; i++) {
    const company = d?.[`Career_Company-${i}`];

    if (company) {
      recruiters.push({
        company,
      });
    }
  }

  const features = [];
  for (let i = 1; i <= 10; i++) {
    const feature = d?.[`Credit_list-${i}`];

    if (feature) {
      features.push({
        feature,
      });
    }
  }

  const statsData = [];
  for (let i = 1; i <= 10; i++) {
    const rawValue = d?.[`PDT-${i}`];
    const description = d?.[`PDD-${i}`];

    if (rawValue && description) {
      const match = rawValue.match(/^([\d.]+)\s*([a-zA-Z]+)$/);
      const value = match?.[1] || rawValue;
      const unit = match?.[2] || "";

      statsData.push({
        value,
        unit,
        description,
      });
    }
  }

  const studentReviewsData = data?.studentReviews || [];

  const slidesData = [];
  for (let i = 1; i <= 10; i++) {

    const description = d?.[`HD-${i}`];
    const title = d?.[`HT-${i}`];
    const image = d?.[`H_Image-${i}`];

    if (description && title && image) {
      slidesData.push({
        description,
        title,
        image
      });
    }
  }


  const { first, middle, last } = splitTitle(d?.International_TieUps_Title);

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const scroll = () => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1
        if (newPosition >= slider.scrollWidth / 2) {
          return 0
        }
        return newPosition
      })
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollPosition
    }
  }, [scrollPosition])

  const logos = d?.Industry_Logos || [];

  const allLogos = [...logos, ...logos]

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep % 3) + 1)
    }, 5000)
  }

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    startTimer()
    return () => stopTimer()
  }, [])

  useEffect(() => {
    const component = componentRef.current
    if (component) {
      component.addEventListener("mouseenter", stopTimer)
      component.addEventListener("mouseleave", startTimer)
      return () => {
        component.removeEventListener("mouseenter", stopTimer)
        component.removeEventListener("mouseleave", startTimer)
      }
    }
  }, [])


  const programCardDesc = d?.PCD_1
    ? DOMPurify.sanitize(d?.PCD_1?.replace(/classname/gi, 'class'))
    : '';

  const programCardDesc1 = d?.PCD_2
    ? DOMPurify.sanitize(d?.PCD_2?.replace(/classname/gi, 'class'))
    : '';

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
  ];


  return (
    <section>
      <div className="relative h-[95vh] max-lg:h-full bg-cover">
        <div className="absolute inset-0 bg-BG42 bg-cover grayscale">
          <div className="absolute inset-0 bg-black bg-opacity-70" />
        </div>
        <div className="relative max-w-[1400px] mx-auto h-full w-full grid grid-cols-3 px-10 max-sm:px-3">
          <div className="col-span-1 flex flex-col justify-center max-lg:items-center text-white max-lg:col-span-3 max-lg:pt-40">
            <span className="text-xl sm:text-2xl max-sm:text-center font-novaReg">{d?.Hero_Sub_Title}</span>
            <h2 className="font-novaReg max-md:text-center text-3xl sm:text-4xl">{d?.Hero_Title}</h2>
            <button className="py-3 max-sm:py-2 max-sm:px-6 max-sm:text-xs px-8 mt-5 text-[15px] rounded-lg font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 tracking-widest flex items-center gap-1">
              Apply Now <MoveRight className="w-5 h-5" />
            </button>
            <div className="mt-10 flex max-[420px]:flex-col gap-2">
              {d?.Hero_Image?.map((img, index) => (
                <img key={index} className="w-60 max-xl:w-48 rounded-lg" src={IMAGE_PATH + img} alt={`Image ${index + 1}`} />
              ))}
            </div>
          </div>
          <div className="col-span-2 flex justify-end items-center max-lg:col-span-3 max-lg:justify-center lg:pt-10 max-lg:py-10">
            <CSEForm />
          </div>
        </div>
      </div>
      <main className="max-w-[1400px] max-[1450px]:container mx-auto py-10 px-10 max-sm:px-2">
        {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Department Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Department Overview */}
            <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-novaBold text-gray-900">{d?.Overview_Title}</h2>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed font-novaReg text-justify">
                <p className="text-lg" dangerouslySetInnerHTML={{ __html: d?.Overview_Desc || "" }}></p>
              </div>

              {/* Features Grid */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((item, index) => (
                  <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300">
                    {item.icon}
                    <h3 className="text-sm font-novaSemi text-gray-700 text-center">{item.title}</h3>
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
                  <h2 className="text-3xl font-novaBold">{d?.Scope_Title}</h2>
                </div>

                <p className="text-blue-100 leading-relaxed text-lg font-novaReg"
                  dangerouslySetInnerHTML={{ __html: d?.Scope_Desc || "" }}>
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {scope.map((item, index) => (
                    <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="text-3xl font-novaBold text-blue-200">{item.title}</div>
                      <div className="text-sm text-blue-100 font-novaSemi">{item.description}</div>
                    </div>
                  ))}
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
                          <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-novaSemi text-gray-900 group-hover:text-blue-900 transition-colors duration-300">{service.title}</h4>
                          <p className="text-sm text-gray-500 font-novaReg group-hover:text-blue-700 transition-colors duration-300 mt-1">{service.description}</p>
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
      <section className="relative bg-cover flex flex-col justify-between py-6 sm:py-20 md:py-32">
        <div className="absolute inset-0 bg-BG42 bg-cover bg-fixed grayscale">
          <div className="absolute inset-0 bg-gray-800 bg-opacity-90" />
        </div>
        <div className="relative max-w-4xl w-full mx-auto text-white text-center flex max-md:flex-col max-md:gap-5 items-center justify-between px-4 py-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-novaBold max-w-lg leading-6 sm:leading-7">{d?.Program_Title}</h2>
            <span className="text-lg sm:text-xl md:text-2xl font-novaReg">{d?.Program_Sub_Title}</span>
            <h1 className="text-2xl sm:text-4xl xl:text-6xl text-yellow-500 font-novaBold">{d?.Program_Highlight_Title}</h1>
          </div>
          <div>
            <img className="w-40 sm:w-48 md:w-60 rounded-lg" src={IMAGE_PATH + d?.Program_Highlight_Image} alt="I-GAUGE" />
          </div>
        </div>
      </section>

      {/* Section 2: Blue Background with 3 Cards */}
      <section className="bg-blue-600 px-8 py-16 xl:pt-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto xl:-translate-y-40">
          {/* Department at a Glance Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-10 h-10 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <h2 className="text-2xl font-novaSemi text-black">{d?.PCT_1}</h2>
            </div>
            <div dangerouslySetInnerHTML={{ __html: programCardDesc }} />
            <button className="py-2 max-sm:py-1.5 max-sm:px-4 max-sm:text-xs px-5 mt-5 text-[15px] rounded-lg font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 tracking-widest flex items-center gap-1">
              VIEW MORE <MoveRight className="w-5 h-5" />
            </button>
          </div>

          {/* Exclusive Labs Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-10 h-10 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
              </svg>
              <h2 className="text-2xl font-novaSemi text-black">{d?.PCT_2}</h2>
            </div>
            <div dangerouslySetInnerHTML={{ __html: programCardDesc1 || "" }}></div>

            <button className="py-2 max-sm:py-1.5 max-sm:px-4 max-sm:text-xs px-5 mt-5 text-[15px] rounded-lg font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 tracking-widest flex items-center gap-1">
              VIEW MORE <MoveRight className="w-5 h-5" />
            </button>
          </div>


          {/* Department in a Nutshell Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-novaSemi text-black">{d?.PCT_3}</h2>
            </div>

            <ul className="space-y-1 font-novaReg">
              {(() => {
                try {
                  // 1. Remove all HTML tags
                  const cleanString = d?.PCD_3?.replace(/<\/?[^>]+(>|$)/g, '');

                  // 2. Handle case where string might be "[...]" or just "..."
                  const arrayString = cleanString?.trim()?.startsWith('[')
                    ? cleanString
                    : `["${cleanString}"]`;

                  // 3. Parse as JSON
                  const items = JSON.parse(arrayString);

                  return items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[15px] text-gray-900 cursor-pointer hover:pl-1.5 duration-200 ease-in-out">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14m-7-7l7 7-7 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ));
                } catch (error) {
                  console.error("Error parsing items:", error, "Raw data:", d?.PCD_3);

                  // Fallback UI
                  return (
                    <li className="text-red-500">
                      Could not load items. Data format may be invalid.
                    </li>
                  );
                }
              })()}
            </ul>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Eligibility Section */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 aspect-square bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-novaBold text-gray-800">{d?.Admission_Title}</h2>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl font-novaReg p-4 sm:p-6 border-l-4 border-indigo-500">
                <p
                  dangerouslySetInnerHTML={{ __html: d?.Admission_Description_ || "" }}>
                </p>
              </div>

              {/* Key Requirements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="text-green-600 font-novaSemi text-sm uppercase tracking-wide mb-1">{d?.["AET-1"]}</div>
                  <div className="text-2xl font-novaBold text-green-800">{d?.["AED-1"]}</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-blue-600 font-novaSemi text-sm uppercase tracking-wide mb-1">{d?.["AET-2"]}</div>
                  <div className="text-lg font-novaBold text-blue-800">{d?.["AED-2"]}</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="text-purple-600 font-novaSemi text-sm uppercase tracking-wide mb-1">{d?.["AET-3"]}</div>
                  <div className="font-novaSemi text-purple-800">{d?.["AED-3"]}</div>
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
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6 max-lg:grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Hero Image Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative">
                  <img
                    src={IMAGE_PATH + d?.Apply_Image}
                    alt="AI & Machine Learning Program"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-novaBold">{d?.Apply_Image_Title}</h3>
                    <p className="text-sm text-gray-200 font-novaReg">{d?.Apply_Image_Name}</p>
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
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white text-center h-fit">
                <h3 className="text-xl font-novaBold mb-2">{d?.Apply_Title}</h3>
                <p className="text-indigo-100 mb-4 text-sm font-novaReg">{d?.Apply_Description_}</p>
                <button className="w-full bg-white text-indigo-600 font-novaBold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeptScholarship />

      <section className='bg-gray-200'>
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-center text-3xl font-novaSemi mb-12 text-gray-800">{d?.Placement_Title}</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-start">
            {placements.map((placement, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-3xl lg:text-4xl font-novaBold mb-2">
                  <span className={placement.isRed ? "text-red-500" : "text-gray-600"}>{placement.count}</span>
                  <span className="text-gray-400 text-lg ml-1">LPA</span>
                </div>
                <div className="w-32 h-12 relative">
                  <Image src={IMAGE_PATH + placement.logo} alt="company logo" fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Abroad />
      <UniqueUniversity />
      <VisionMission />
      <section className="bg-indigo-900">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <h1 className="text-3xl font-novaReg text-white leading-7 mb-8" dangerouslySetInnerHTML={{ __html: d?.Career_Title || "" }}>

          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Careers Section */}
            <div>
              <h2 className="text-2xl font-novaReg text-white mb-4">{d?.Career_Short_Desc || ""}</h2>
              <p className="text-white font-novaReg leading-relaxed">
                {d?.Career_Description || ""}
              </p>
            </div>
            {/* Top Recruiters Section */}
            <div>
              <h2 className="text-2xl font-novaReg text-white mb-4">{d?.["Career_Title-2"] || ""}</h2>
              <p className="text-white font-novaReg mb-4">{d?.["Career_Short_Desc-2"] || ""}</p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                {recruiters.map((recruiter, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="bg-gray-300 p-0.5 rounded-md">
                      <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-white font-novaReg">{recruiter.company}</span>
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
              <Image src="/image/building/building5.webp" alt="Advanced Credit Programs" className="h-full w-full object-cover object-left grayscale" width={500} height={600} priority />
              <div className="absolute inset-0 bg-red-600/20 mix-blend-multiply" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 p-6 lg:col-span-4">
            <h1 className="text-3xl font-novaSemi tracking-tight text-gray-900 md:text-4xl "
              dangerouslySetInnerHTML={{ __html: d?.Credit_Program_Title || "" }}>

            </h1>
            <p className="text-gray-600 font-novaReg"
              dangerouslySetInnerHTML={{ __html: d?.Credit_Program_Desc || "" }}>

            </p>
          </div>
          {/* Features Section */}
          <div className="space-y-6 bg-gray-50 p-6 lg:col-span-4">
            <h2 className="text-xl font-novaSemi text-gray-900">{d?.Credit_highlight_Title || ""}</h2>
            <ul className="space-y-4">
              {features.map((item, index) => ( // Changed `feature` to `item` since it's an object
                <li key={index} className="flex items-center gap-3">
                  <span className="bg-gray-300 rounded-md p-0.5">
                    <Check className="h-4 w-4 flex-shrink-0 text-black" />
                  </span>
                  <span className="text-sm text-gray-600 font-novaReg">
                    {item.feature} {/* Access the `feature` property */}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="#" className="group inline-flex items-center gap-2 rounded-full bg-btn-gradient animate-gradient px-6 py-2 text-sm font-novaSemi text-white transition-colors hover:bg-red-700">
              VIEW MORE
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className='relative bg-cover bg-top h-full lg:h-[70vh]'
          style={{
            backgroundImage: `url(${IMAGE_PATH + d?.Placement_Banner})`,
          }}
        >
          <div className='hidden lg:block absolute bottom-5 right-24 xl:right-64 2xl:right-[23rem] leading-none rounded-lg bg-white animate-bounce drop-shadow-md px-6 py-4'>
            <img className='w-40 object-cover' src={IMAGE_PATH + d?.Placement_Company_Logo} alt="Logo" />
            <h5 className='text-lg font-novaReg'>{d?.Placement_Student_Name}</h5>
            <small className='text-sm font-novaReg'>{d?.Placement_Company_Name}</small>
          </div>
          <div className='absolute left-0 w-[45%] max-lg:bg-white max-lg:w-full h-full bg-offwhite-gradient z-10'></div>
          <div className='relative max-w-[1500px] mx-auto h-full z-20 px-5 max-sm:px-3 pb-10'>
            <div className='flex max-lg:flex-col'>
              <div className='mt-20'>
                <div className='relative z-20'>
                  <h1 className='text-4xl font-novaReg max-w-md leading-none max-sm:text-center max-sm:text-3xl'>
                    {d?.Placement_Hightlight_Title}
                  </h1>
                  <p className='mt-5 max-w-xl text-lg font-novaReg max-sm:text-center'>
                    {d?.Placement_Highlight_Desc}
                  </p>
                </div>
                <div className='lg:absolute bottom-20 left-5 grid grid-cols-2 mt-8 md:grid-cols-4 gap-5 max-w-7xl lg:w-[60%]'>
                  {statsData.map((item, index) => (
                    <div
                      key={index}
                      className={`rounded-2xl p-4 sm:p-8 text-center relative overflow-hidden ${index === 0
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white"
                        : "bg-white text-gray-900 shadow-lg border border-gray-100"
                        }`}
                    >
                      {index === 0 && (
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
                      )}
                      <div className="relative">
                        <div
                          className={`text-4xl font-novaBold mb-2 ${index === 0 ? "text-white" : "text-gray-900"
                            }`}
                        >
                          {item.value}
                          <span
                            className={`text-lg font-novaReg ${index === 0 ? "text-white/80" : "text-gray-700"
                              }`}
                          >
                            {item.unit}
                          </span>
                        </div>
                        <p
                          className={`text-sm leading-tight font-novaReg ${index === 0 ? "text-blue-100" : "text-gray-600"
                            }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden relative h-[300px] overflow-hidden max-lg:block'>
          <div className='absolute left-0 w-[45%] h-full bg-offwhite-gradient z-10'></div>
          <img className='w-full h-full object-cover object-top max-sm:object-right' src="/image/AKG_Student.jpg" alt="" />
          <div className='absolute z-30 bottom-5 left-3 leading-none rounded-lg bg-white drop-shadow-md px-6 py-4 max-sm:p-2'>
            <img className='w-28 object-cover' src={IMAGE_PATH + d?.Placement_Company_Logo} alt="Logo" />
            <h5 className='text-lg font-novaReg'>{d?.Placement_Student_Name}</h5>
            <small className='font-novaReg'>{d?.Placement_Company_Name}</small>
          </div>
        </div>
      </section>

      {/* Industry partner */}
      <section className='py-10 bg-gray-100'>
        <div className="max-w-7xl mx-auto pt-6 overflow-hidden shadow-lg bg-white">
          <div className="">
            <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
              {first}{" "}
              <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                {middle}{" "}
              </span>
              {last}
            </h1>
            <p className="text-center font-novaReg text-gray-600 mb-12 max-w-4xl mx-auto px-3 max-sm:text-sm mt-3">
              {d?.International_TieUps_Desc}
            </p>

            <div className="relative px-4">
              <div
                ref={sliderRef}
                className="flex overflow-x-hidden gap-16 py-8 max-sm:pt-0 px-4"
              >
                {allLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center"
                  >
                    <Image
                      src={IMAGE_PATH + logo}
                      alt="Company Logo"
                      width={130}
                      height={130}
                      className="object-contain max-sm:h-20 max-sm:w-20"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 text-white p-6 sm:p-10 text-sm sm:text-base text-center font-novaReg">
              <p>
                {d?.Industry_Bottom_Description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen">
        <div className="absolute inset-0 bg-BG45 bg-center bg-cover bg-gray-600 bg-blend-multiply grayscale" />
        <div className="relative pt-20">
          <h2 className="text-center text-4xl md:text-5xl text-white font-novaSemi">{d?.Review_Title_}</h2>
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
              nextEl: "#slider-button-right",
              prevEl: "#slider-button-left",
            }}
            className="mySwiper"
          >
            {studentReviewsData?.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="my-6 text-center flex flex-col items-center mx-10 max-sm:mx-5">
                  {review.image && (<Image className="w-16 mb-3" src={IMAGE_PATH + review.image} alt={review.name} height={200} width={200} />)}
                  <p className="mt-4 sm:mt-8 max-w-4xl text-2xl font-novaReg max-md:text-xl">{review.description}</p>
                  <div className="flex flex-col items-center mt-10">
                    <div className="mt-4 uppercase text-center">
                      <h4 className="font-novaBold tracking-wider">{review.name}</h4>
                      <p className='mb-4 text-xs font-novaReg'>{review.course}</p>
                      <small>{review.company_name}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="mt-5 lg:-mt-40 max-w-[1500px] max-2xl:max-w-7xl w-full mx-auto mb-6">
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Scrollbar, A11y, Autoplay]}
          breakpoints={{
            680: { slidesPerView: 1 },
            1100: { slidesPerView: 2 },
          }}
        >
          {slidesData?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={`relative w-full h-[400px] max-sm:h-72 bg-cover bg-center p-6 max-sm:p-2`} style={{ backgroundImage: `url(${IMAGE_PATH + slide.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent-900/20"></div>
                <div className="relative p-6 max-sm:p-0">
                  <h2 className={`text-4xl max-sm:text-2xl max-w-xs font-novaReg text-white mb-2 ${slide.text} `}>{slide.title}</h2>
                  <p className={`${slide.description} max-w-md max-sm:text-xs text-white mb-5`}>{slide.description}</p>
                  <Button className={`bg-btn-gradient animate-gradient text-white py-2 text-sm font-novaSemi px-4 rounded`}>
                    View More
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* How to Apply */}
      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Section - Steps */}
          <div className="lg:col-span-7">
            <div ref={componentRef} className="space-y-8">
              {/* Header */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-novaSemi mb-4">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Application Process
                </div>
                <h2 className="text-4xl lg:text-5xl font-novaBold text-gray-900 mb-4">
                  {(() => {
                    const { first, middle, last } = splitTitle(d?.Application_Title || " ");
                    return (
                      <>
                        {first}{" "}
                        {middle && (
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {middle}{" "}
                          </span>
                        )}
                        {last}
                      </>
                    );
                  })()}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl font-novaReg">
                  {d?.Application_Short_Desc || " "}
                </p>
              </div>

              {/* Generate steps data dynamically */}
              {(() => {
                const steps = [];
                const stepColors = [
                  "from-blue-500 to-blue-600",
                  "from-purple-500 to-purple-600",
                  "from-indigo-500 to-indigo-600",
                  "from-green-500 to-green-600",
                  "from-yellow-500 to-yellow-600"
                ];
                const stepIcons = [
                  <User className="w-5 h-5 sm:w-7 sm:h-7" />,
                  <FileText className="w-5 h-5 sm:w-7 sm:h-7" />,
                  <CheckCircle className="w-5 h-5 sm:w-7 sm:h-7" />,
                  <CreditCard className="w-5 h-5 sm:w-7 sm:h-7" />,
                  <Award className="w-5 h-5 sm:w-7 sm:h-7" />
                ];
                const stepBgColors = ["bg-blue-50", "bg-purple-50", "bg-indigo-50", "bg-green-50", "bg-yellow-50"];
                const stepBorderColors = ["border-blue-100", "border-purple-100", "border-indigo-100", "border-green-100", "border-yellow-100"];

                // Find how many steps we have by checking AS-* fields
                let stepCount = 0;
                for (let i = 1; i <= 10; i++) {
                  if (d?.[`AS-${i}`] || d?.[`Application_Desc_Step-${i}`]) {
                    stepCount++;
                  } else {
                    break;
                  }
                }

                // If no steps found, default to 3
                if (stepCount === 0) stepCount = 3;

                // Generate steps data
                for (let i = 1; i <= stepCount; i++) {
                  steps.push({
                    number: i,
                    title: d?.[`AS-${i}`] || `Step ${i}`,
                    description: d?.[`Application_Desc_Step-${i}`] || "Description not available",
                    color: stepColors[(i - 1) % stepColors.length],
                    icon: stepIcons[(i - 1) % stepIcons.length],
                    bgColor: stepBgColors[(i - 1) % stepBgColors.length],
                    borderColor: stepBorderColors[(i - 1) % stepBorderColors.length]
                  });
                }

                return (
                  <>
                    {/* Steps Navigation */}
                    <div className="relative">
                      {/* Progress Line */}
                      <div className="absolute top-8 left-8 right-8 h-0.5 bg-gray-200 hidden md:block" />
                      <div
                        className="absolute top-8 left-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-in-out hidden md:block"
                        style={{ width: `${((currentStep - 1) / (stepCount - 1)) * 100}%`, maxWidth: "calc(100% - 6rem)" }}
                      />

                      {/* Step Indicators */}
                      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 relative z-10">
                        {steps.map((step) => (
                          <div
                            key={step.number}
                            className={`flex items-center md:flex-col cursor-pointer transition-all duration-300`}
                            onClick={() => setCurrentStep(step.number)}
                          >
                            <div className="flex items-center md:flex-col">
                              <div
                                className={`h-12 w-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${step.number === currentStep
                                  ? `bg-gradient-to-br ${step.color} text-white shadow-xl`
                                  : step.number < currentStep
                                    ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white"
                                    : "bg-white border-2 border-gray-200 text-gray-400"
                                  }`}
                              >
                                {step.number < currentStep ? (
                                  <Check className="w-5 h-5 sm:w-7 sm:h-7" />
                                ) : step.number === currentStep ? (
                                  step.icon
                                ) : (
                                  <span className="text-xl font-novaBold">{step.number}</span>
                                )}
                              </div>
                              <div className="ml-4 md:ml-0 md:mt-4 text-left md:text-center">
                                <p className="text-sm font-novaReg text-gray-500 mb-1">Step {step.number}</p>
                                <h3
                                  className={`font-novaBold text-lg ${step.number === currentStep ? "text-gray-900" : "text-gray-600"
                                    }`}
                                >
                                  {step.title}
                                </h3>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="mt-12">
                      {steps.map((step) => (
                        <div
                          key={step.number}
                          className={`transition-all duration-500 ${step.number === currentStep
                            ? "opacity-100 transform translate-y-0"
                            : "opacity-0 transform translate-y-4 absolute"
                            }`}
                        >
                          <div className={`rounded-3xl p-4 sm:p-8 ${step.bgColor} border ${step.borderColor} shadow-sm`}>
                            <div className="flex flex-col items-start">
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                                >
                                  {step.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-novaBold text-gray-900">
                                  Step {step.number} - {step.title}
                                </h3>
                              </div>
                              <div className="mt-5">
                                <p className="text-gray-700 text-lg leading-relaxed mb-4 font-novaReg">{step.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

          {/* Right Section - CTA (unchanged) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-800 rounded-3xl transform -rotate-3 opacity-10"></div>

              {/* Main Content */}
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-novaSemi mb-6">
                    <Award className="w-4 h-4 mr-2" />
                    Start Your Journey
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-novaBold text-gray-900 mb-6 leading-tight">
                    {d?.["Application_Title-2"] || " "}
                  </h2>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-novaReg">
                    {d?.["Application_Desc-2"] || " "}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                      <div className="text-2xl font-novaBold text-blue-600">{d?.["AT-1"] || " "}</div>
                      <div className="text-sm text-gray-600 font-novaReg">{d?.["AD-1"] || " "}</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                      <div className="text-2xl font-novaBold text-green-600">{d?.["AT-2"] || " "}</div>
                      <div className="text-sm text-gray-600 font-novaReg">{d?.["AD-2"] || " "}</div>
                    </div>
                  </div>

                  <button className="group relative w-full lg:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-novaBold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center space-x-2">
                      <span>Apply Today</span>
                      <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>

                  <p className="text-sm text-gray-500 mt-4 font-novaReg">
                    {d?.["Apply_Description_"] || "🎓 Join thousands of successful graduates"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data?.faq && (<FAQHolder data={data} />)}
    </section>
  );
};

export default DepartmentDetails;
