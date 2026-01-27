'use client';

import AnnouncementSlider from '@/Components/AnnouncementSlider';
import DirectorMessage from '@/Components/DirectorMessage';
import FacultySlider from '@/Components/FacultySlider';
import HighlightsSection from '@/Components/HighlightsSection';
import PlacementData from '@/Components/PlacementData';
import ReviewSlider from '@/Components/ReviewSlider';
import SchoolHeader from '@/Components/SchoolHeader'
import SchoolLogoSlider from '@/Components/SchoolLogoSlider';
import SliderEvent from '@/Components/SliderEvent';
import DOMPurify from 'dompurify';
import { Testimonial } from '@/Components/Testimonial';
import {
  Laptop,
  Cpu,
  Cog,
  Building,
  PlugZap,
  Biohazard,
  Check,
  ChevronRight,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  ArrowDownToLine,
  Atom, Beaker, FlaskConical, Hammer
} from "lucide-react"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { API_NODE_URL, IMAGE_PATH } from '@/configs/config';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Breadcrumb from '@/Components/Breadcrumb';
import FAQHolder from '@/Components/FAQHolder';
import LargeHighlightBannerSlider from '@/Components/LargeHighlightBannerSlider copy';
import MediumHighlightBannerSlider from '@/Components/MediumHighlightBannerSlider';


const CustomButton = ({ children, onClick, className, active }) => (
  <button
    className={`
      relative px-6 py-3 rounded-full font-novaSemi transition-all duration-300 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
      text-sm overflow-hidden group
      ${active
        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105"
        : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md"
      }
      ${className}
    `}
    onClick={onClick}
  >
    <div className="relative z-10 flex items-center justify-center">{children}</div>
    {active && (
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    )}
  </button>
)
const SchoolDetails = ({ data }) => {
  const router = useRouter();
  const [activeView, setActiveView] = useState("schools")
  const [hoveredProgramme, setHoveredProgramme] = useState(null)
  const [hoveredDepartment, setHoveredDepartment] = useState(null)
  const [largeHighlightBanner, setLargeHighlightBanner] = useState([]);
  const [mediumHighlightBanner, setMediumHighlightBanner] = useState([]);
  const [smallHighlightBanner, setSmallHighlightBanner] = useState([]);


  const fetchHighlightBanners = async (streamId) => {
    try {
      const res = await fetch(`${API_NODE_URL}highlight-banner/get-by-tags?stream=${streamId}`, {
        method: "GET",
        credentials: "include",
      });
      const resData = await res.json();
      console.log(resData);

      if (resData?.status) {
        const banners = resData?.data?.banners || [];

        // filter by size
        setLargeHighlightBanner(banners.filter((b) => b.size === "large"));
        setMediumHighlightBanner(banners.filter((b) => b.size === "medium"));
        setSmallHighlightBanner(banners.filter((b) => b.size === "small"));
      } else {
        setLargeHighlightBanner([]);
        setMediumHighlightBanner([]);
        setSmallHighlightBanner([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setLargeHighlightBanner([]);
      setMediumHighlightBanner([]);
      setSmallHighlightBanner([]);
    }
  };

  useEffect(() => {
    if (data?.stream) {
      fetchHighlightBanners(data?.stream);
    }
  }, [data?.stream]);

  const d = data?.pageData;

  const overviewHtml = d?.Overview_Description_
    ? DOMPurify.sanitize(d?.Overview_Description_?.replace(/classname/gi, 'class'))
    : '';

  const objectiveHtml = d?.Objective_Desc
    ? DOMPurify.sanitize(d?.Objective_Desc?.replace(/classname/gi, 'class'))
    : '';

  const highlightHtml = d?.Highlight_Desc
    ? DOMPurify.sanitize(d?.Highlight_Desc?.replace(/classname/gi, 'class'))
    : '';

  const icons = [Laptop, Cpu, Cog, Building, PlugZap, Biohazard, Atom, Beaker, FlaskConical, Hammer];
  const colors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-green-500 to-teal-500",
    "from-yellow-500 to-orange-500",
    "from-emerald-500 to-green-500",
    "from-indigo-500 to-purple-500",
    "from-rose-500 to-pink-500",
    "from-sky-500 to-blue-500",
    "from-lime-500 to-green-500",
  ];

  const departments = []
  for (let i = 1; i <= 10; i++) {
    const title = d?.[`School-Name-${i}`]
    const link = d?.[`School-Link-${i}`]

    if (title) {
      // Create code from first letter of each word
      const words = title
        .replace(/[^a-zA-Z ]/g, "") // removes &, -, etc.
        .split(" ")
        .filter(Boolean); // remove empty strings

      // Create code from first letters
      const code = words.map((word) => word[0]).join("").toUpperCase();

      const Icon = icons[i % icons.length];
      const color = colors[i % colors.length];

      departments.push({
        name: title,
        code,
        link,
        icon: <Icon size={28} strokeWidth={1.5} />,
        color,
      });
    }
  }

  const programIcons = [GraduationCap, BookOpen, Award, Users, GraduationCap, BookOpen];

  const programmes = [];
  for (let i = 1; i <= 10; i++) {
    const name = d?.[`Program-Title-${i}`]
    if (name) {
      const Icon = programIcons[i % programIcons.length];
      programmes.push({
        name,
        icon: <Icon size={20} />,
      })
    }
  }
  const courses = {}

  programmes.forEach((programme) => {
    const programmeType = programme.name; // e.g., "Graduate", "Post Graduate", "Certificate"
    const key = programmeType.trim(); // in case of spaces

    const programmeCourses = [];

    for (let i = 1; i <= 20; i++) {
      const keyName = programmeType.replace(/\s+/g, "-"); // replaces spaces with dashes
      console.log(keyName);

      const value = d?.[`${keyName}-${i}`];
      const link = d?.[`${keyName}-Link-${i}`];

      if (value || link) {
        programmeCourses.push({
          value: value || null,
          link: link || null,
        });
      }
    }

    if (programmeCourses.length) {
      courses[key] = programmeCourses;
    }
  });

  console.log(courses);


  const programs = [
    "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
    "B.Tech in Computer Science and Engineering (Data Science)",
    "B.Tech in Computer Science and Engineering (Information Technology)",
    "B.Tech in Computer Science and Engineering (Cyber Security)",
    "B.Tech in Computer Science and Engineering (Cloud Technology)",
    "B.Tech in Computer Science and Engineering (AI & Machine Learning)",
    "B.Tech in Computer Science and Engineering (Blockchain)",
    "M.Tech in Computer Science and Engineering (Artificial Intelligence)",
    "M.Tech in Computer Science and Engineering (Data Science)",
    "M.Tech in Computer Science and Engineering (Information Technology)",
    "M.Tech in Computer Science and Engineering (Cyber Security)",
    "M.Tech in Computer Science and Engineering (Cloud Technology)",
    "M.Tech in Computer Science and Engineering (AI & Machine Learning)",
    "M.Tech in Computer Science and Engineering (Blockchain)"
  ];

  return (
    <>
      <SchoolHeader data={d} banner="bg-BG17" heading={d?.Hero_Title} desc={d?.Hero_Desc} />
      <section className='max-w-[1400px] mx-auto px-5 max-sm:px-2 py-10'>
        {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
        <div className='mt-10'>
          <div className='sm:flex justify-between'>
            <h2 className='font-novaReg text-4xl md:w-1/2 lg:w-[60%] sm:w-[60%]'>{d?.Overview_Title}</h2>
            <Link href={IMAGE_PATH + d?.Brochure_Pdf} target='_blank' className='max-sm:mt-5 px-4 py-2.5 w-fit h-fit text-sm bg-black text-white font-novaSemi uppercase tracking-wider rounded-full hover:bg-gray-300 hover:text-black hover:border border-gray-300 transition duration-200 ease-linear flex items-center lg:gap-2 gap-3 sm:gap-1 md:gap-1'>
              <ArrowDownToLine size={18} strokeWidth={2} /> Download Brochure
            </Link>
          </div>
          <h4 className='text-xl font-novaSemi my-3'>Overview</h4>
          <p className="leading-relaxed max-sm:text-sm font-novaReg text-justify" dangerouslySetInnerHTML={{ __html: overviewHtml }} />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 sm:py-10'>
          <div className="bg-white drop-shadow-lg border text-black rounded-3xl overflow-hidden pb-5">
            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
              <img className='w-8 h-8' src="/image/icons/icon-return-on-investment.png" alt="investment logo" />
            </div>
            <div className='p-4'>
              <h2 className="text-2xl font-novaBold mb-2 max-lg:text-xl max-md:text-lg">{d?.Objective_Title}</h2>
              <div className='font-novaReg' dangerouslySetInnerHTML={{ __html: objectiveHtml }} />
            </div>
          </div>
          <div className="bg-white drop-shadow-lg border text-black rounded-3xl overflow-hidden pb-5">
            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
              <img className='w-8 h-8' src="/image/icons/icon-return-on-investment.png" alt="investment logo" />
            </div>
            <div className='p-4'>
              <h2 className="text-2xl font-novaBold mb-2 max-lg:text-xl  max-md:text-lg">{d?.Highlight_Title}</h2>
              <div className='font-novaReg' dangerouslySetInnerHTML={{ __html: highlightHtml }} />
            </div>
          </div>
        </div>
      </section>


      <section className="max-w-[1400px] mx-auto px-5 max-sm:px-2 pb-16">
        <div className="relative bg-slate-50 rounded-[3rem] p-8 md:p-16 overflow-hidden border border-slate-200">

          {/* Technical Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f61a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white border-2 border-slate-900 text-slate-900 font-novaBold text-xs tracking-widest uppercase mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                Future Ready Curriculum
              </span>
              <h2 className="text-4xl md:text-5xl font-novaBold text-slate-900 mb-6 tracking-tight">
                Specialized Programs
              </h2>
              <p className="text-slate-600 font-novaReg max-w-2xl mx-auto text-lg leading-relaxed">
                Engineering specializations crafted for the next generation of innovators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((item, idx) => {
                const isMTech = item.includes("M.Tech");
                const degree = isMTech ? "M.Tech" : "B.Tech";
                const match = item.match(/\((.*?)\)/);
                const specialization = match ? match[1] : item.split('Engineering')[1]?.trim();
                const accentColor = isMTech ? 'group-hover:shadow-[6px_6px_0px_0px_#9333ea]' : 'group-hover:shadow-[6px_6px_0px_0px_#2563eb]';
                const borderColor = isMTech ? 'group-hover:border-purple-600' : 'group-hover:border-blue-600';

                return (
                  <div
                    key={idx}
                    className={`group relative bg-white border-2 border-slate-200 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 ${accentColor} ${borderColor} cursor-pointer`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 ${isMTech ? 'bg-purple-50 border-purple-200 text-purple-600' : 'bg-blue-50 border-blue-200 text-blue-600'} group-hover:scale-110 transition-transform duration-200`}>
                        {isMTech ? <Atom size={24} strokeWidth={2} /> : <Cpu size={24} strokeWidth={2} />}
                      </span>
                      <span className={`px-2 py-1 rounded text-[10px] font-novaBold uppercase tracking-wider border ${isMTech ? 'bg-purple-100/50 border-purple-200 text-purple-800' : 'bg-blue-100/50 border-blue-200 text-blue-800'}`}>
                        {degree}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-lg font-novaBold text-slate-900 mb-2 group-hover:text-black transition-colors">
                        {specialization}
                      </h3>

                      <p className="text-slate-500 text-xs font-novaReg line-clamp-2 leading-relaxed border-t border-slate-100 pt-3 mt-3 group-hover:border-slate-200">
                        {item}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* <section className="max-w-[1400px] mx-auto px-5 max-sm:px-2 pb-16">
        <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-novaSemi text-sm tracking-wider uppercase mb-4">
                Future Ready Curriculum
              </span>
              <h2 className="text-4xl md:text-5xl font-novaBold text-white mb-6">
                Specialized Programs
              </h2>
              <p className="text-gray-400 font-novaReg max-w-2xl mx-auto text-lg">
                Advanced specializations tailored to meet the demands of the evolving tech landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
                "B.Tech in Computer Science and Engineering (Data Science)",
                "B.Tech in Computer Science and Engineering (Information Technology)",
                "B.Tech in Computer Science and Engineering (Cyber Security )",
                "B.Tech in Computer Science and Engineering (Cloud Technology )",
                "B.Tech in Computer Science and Engineering (AI & Machine Learning )",
                "B.Tech in Computer Science and Engineering (Blockchain)",
                "M.Tech in Computer Science and Engineering (Artificial Intelligence)",
                "M.Tech in Computer Science and Engineering (Data Science)",
                "M.Tech in Computer Science and Engineering (Information Technology)",
                "M.Tech in Computer Science and Engineering (Cyber Security )",
                "M.Tech in Computer Science and Engineering (Cloud Technology )",
                "M.Tech in Computer Science and Engineering (AI & Machine Learning )",
                "M.Tech in Computer Science and Engineering (Blockchain)"
              ].map((item, idx) => {
                const isMTech = item.includes("M.Tech");
                const degree = isMTech ? "M.Tech" : "B.Tech";
              
                const match = item.match(/\((.*?)\)/);
                const specialization = match ? match[1] : item.replace("B.Tech in Computer Science and Engineering", "").replace("M.Tech in Computer Science and Engineering", "").trim();

                return (
                  <div
                    key={idx}
                    className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/50"
                  >
                    <div className={`absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300 ${isMTech ? 'text-purple-400' : 'text-cyan-400'}`}>
                      {isMTech ? <Atom size={40} strokeWidth={1} /> : <Cpu size={40} strokeWidth={1} />}
                    </div>

                    <div className="relative z-10">
                      <span className={`inline-block px-3 py-1 rounded-lg text-xs font-novaBold uppercase tracking-wider mb-4 ${isMTech
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        }`}>
                        {degree} Program
                      </span>

                      <h3 className="text-xl font-novaBold text-white mb-2 group-hover:text-blue-200 transition-colors">
                        {specialization}
                      </h3>

                      <div className="w-full h-px bg-white/10 my-4 group-hover:bg-white/20 transition-colors" />

                      <p className="text-gray-400 text-sm font-novaReg line-clamp-2">
                        {item}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      <LargeHighlightBannerSlider
        banners={largeHighlightBanner}
      />
      <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-novaBold text-gray-900 mb-4">
              {d?.Academic_Title}
            </h2>
            <p className="sm:text-lg text-gray-600 max-w-2xl mx-auto font-novaReg">
              {d?.Academic_Desc}
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-full shadow-xl border border-gray-100 backdrop-blur-sm">
              <div className="flex space-x-2">
                <CustomButton
                  active={activeView === "schools"}
                  onClick={() => setActiveView("schools")}
                  className="min-w-[140px] sm:min-w-[160px]"
                >
                  {activeView === "schools" && (
                    <div>
                      <Check
                        className="inline-block mr-2 h-5 w-5 bg-white rounded-full p-1 text-blue-600"
                        strokeWidth={3}
                      />
                    </div>
                  )}
                  {d?.School_Title}
                </CustomButton>
                <CustomButton
                  active={activeView === "programmes"}
                  onClick={() => setActiveView("programmes")}
                  className="min-w-[140px] sm:min-w-[180px]"
                >
                  {activeView === "programmes" && (
                    <div>
                      <Check
                        className="inline-block mr-2 h-5 w-5 bg-white rounded-full p-1 text-blue-600"
                        strokeWidth={3}
                      />
                    </div>
                  )}
                  {d?.Programme_Title}
                </CustomButton>
              </div>
            </div>
          </div>

          {/* Departments View */}
          {activeView === "schools" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {departments.map((dept, index) => (
                <div
                  onClick={() => router.push(dept.link)}
                  key={index}
                  className={`
                  group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                  transition-all duration-500 transform hover:-translate-y-2 
                  border border-gray-100 overflow-hidden cursor-pointer
                  ${hoveredDepartment === index ? "scale-105" : ""}
                `}
                  onMouseEnter={() => setHoveredDepartment(index)}
                  onMouseLeave={() => setHoveredDepartment(null)}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative p-2 sm:p-4">
                    <div className="flex items-start space-x-3">
                      <div
                        className={`
                      p-3 rounded-xl bg-gradient-to-br ${dept.color} text-white 
                      shadow-lg group-hover:shadow-xl
                      group-hover:scale-110 transform transition-transform duration-300
                    `}
                      >
                        {dept.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-novaBold text-gray-500 tracking-wider uppercase">{dept.code}</span>
                          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                        </div>
                        <h3 className="text-base sm:text-lg font-novaBold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {dept.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className={`h-1 bg-gradient-to-r ${dept.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Programmes View */}
          {activeView === "programmes" && (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[32rem]">
                {/* Programme List */}
                <div className="lg:col-span-1 bg-gradient-to-b from-gray-50 to-white border-r border-gray-100">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-novaBold text-gray-900">Programme Types</h3>
                    <p className="text-sm text-gray-600 font-novaReg mt-1">Hover to explore courses</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {programmes.map((prog, index) => (
                      <div
                        key={index}
                        className={`
                        p-4 cursor-pointer transition-all duration-300 group
                        ${hoveredProgramme === prog.name
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                            : "hover:bg-blue-50 text-gray-700"
                          }
                      `}
                        onMouseEnter={() => setHoveredProgramme(prog.name)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`
                            p-2 rounded-lg transition-colors duration-300
                            ${hoveredProgramme === prog.name
                                  ? "bg-white text-blue-600"
                                  : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                                }
                          `}
                            >
                              {prog.icon}
                            </div>
                            <div>
                              <span className="font-novaSemi text-base block">{prog.name}</span>
                            </div>
                          </div>
                          <ChevronRight
                            className={`
                          h-5 w-5 transition-all duration-300
                          ${hoveredProgramme === prog.name
                                ? "text-white transform translate-x-1"
                                : "text-gray-400 group-hover:text-blue-500"
                              }
                        `}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3 relative">
                  <Image
                    src={IMAGE_PATH + d?.Academic_Banner}
                    height={400}
                    width={400}
                    alt="Students studying together"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

                  {/* Course Details Overlay */}
                  {(hoveredProgramme === "Graduate" || hoveredProgramme === "Post Graduate" || hoveredProgramme === "Doctorate") && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm">
                      <div className="h-full overflow-y-auto">
                        <div className="p-8">
                          <div className="mb-6">
                            <h2 className="text-3xl font-novaBold text-gray-900 mb-2">{hoveredProgramme} Programmes</h2>
                            <p className="text-gray-600 font-novaReg">
                              Comprehensive courses designed for academic and professional excellence
                            </p>
                          </div>

                          <div className="space-y-2">
                            {courses[hoveredProgramme]?.map((course, idx) => (
                              <Link
                                key={idx}
                                href={course.link || "#"} // fallback if link is missing
                                className="group block p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                              >
                                <div className="flex items-center justify-between">
                                  <p className="text-gray-800 font-novaSemi group-hover:text-blue-700 transition-colors duration-300 flex-1 pr-4">
                                    {course.value}
                                  </p>
                                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <HighlightsSection data={d} />
      <DirectorMessage data={d} />
      <AnnouncementSlider />
      {data?.studentReviews.length > 0 && <ReviewSlider data={data} />}
      {data?.faculties.length > 0 && <FacultySlider data={data} />}
      <SliderEvent />
      <PlacementData data={d} />
      {data?.testimonials.length > 0 && <Testimonial data={data} />}
      <SchoolLogoSlider data={d} />
      {data?.faq && (<FAQHolder data={data} />)}
    </>
  )
}

export default SchoolDetails