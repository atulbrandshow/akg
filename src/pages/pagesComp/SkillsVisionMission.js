"use client";

import React, { useRef } from "react";
import { 
  TrendingUp, 
  Eye, 
  Target, 
  Award, 
  Users, 
  Zap, 
  ShieldCheck, 
  Globe,
  Handshake 
} from "lucide-react";

const VISION_CONTENT = "To train young professionals and enable Indian industry to attain global leadership by establishing a world class Centre for Training, Research and Product development in the field of Automation, Robotics and Advance Manufacturing.";

const MISSION_POINTS = [
  "To perform state-of-the-art research in Automation, Robotics and Advance Manufacturing to emphasize applications in these areas.",
  "To provide excellence in engineering education and prepare young scientists and engineers for leadership positions in academia, industrial research, and development.",
  "To foster collaboration and interaction with industrial sponsors and government research agencies.",
];

const OBJECTIVE_CONTENT = "The primary objective of the AKGEC Skills Foundation is to encourage young professionals to take up this cross-disciplinary field as a career of their choice and empower youth through training and research in new-age technologies.";

const SkillsVisionMission = () => {
  const sections = [
    {
      title: "VISION",
      icon: <Eye className="w-6 h-6 text-blue-700" />,
      color: "border-yellow-400",
      bg: "bg-yellow-50",
      accent: "text-blue-700",
      highlight: "bg-yellow-100/30",
      content: VISION_CONTENT,
    },
    {
      title: "MISSION",
      icon: <Target className="w-6 h-6 text-blue-700" />,
      color: "border-blue-400",
      bg: "bg-blue-50",
      accent: "text-blue-700",
      highlight: "bg-blue-100/30",
      points: MISSION_POINTS,
    },
    {
      title: "OBJECTIVE",
      icon: <Award className="w-6 h-6 text-blue-700" />,
      color: "border-emerald-400",
      bg: "bg-emerald-50",
      accent: "text-blue-700",
      highlight: "bg-emerald-100/30",
      content: OBJECTIVE_CONTENT,
    },
  ];

  const coreValues = [
    {
      title: "Teamwork",
      desc: "Energizing our efforts through teamwork will yield greater result.",
      icon: <Users className="w-6 h-6" />,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "Innovation",
      desc: "We are Committed to the continuous improvement of program, tools and creative solutions for achieving organizational growth.",
      icon: <Zap className="w-6 h-6" />,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Speed",
      desc: "Responsiveness in all our actions, ability to execute and implement strategies.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Collaboration",
      desc: "Our Success is dependent on that of our collaboration with our industry partners, to achieve shared goals.",
      icon: <Handshake className="w-6 h-6" />,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      title: "Excellence",
      desc: "Measuring performance and meeting expectations is the surest path to excellence.",
      icon: <Award className="w-6 h-6" />,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-6">
            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            <span className="text-xs font-novaBold text-indigo-600 tracking-[0.2em] uppercase">Foundation & Purpose</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-novaBold text-indigo-950 mb-4 tracking-tight">
            Our Strategic <span className="text-blue-600">Framework</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 font-novaReg text-base">
            Building a world-class ecosystem for automation and robotics through defined values.
          </p>
        </div>

        {/* Vision/Mission/Objective Cards */}
        <div className="grid grid-cols-1 gap-8 mb-24 max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`relative p-6 md:p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="flex flex-col gap-6">
                {/* Icon and Title in one row */}
                <div className="flex items-center gap-4 border-b border-gray-50 pb-4">
                  <div className={`w-12 h-12 ${section.bg} ${section.accent} rounded-xl flex items-center justify-center shadow-sm`}>
                    {section.icon}
                  </div>
                  <h3 className={`text-xl md:text-2xl font-novaBold ${section.accent} tracking-wide uppercase`}>
                    {section.title}
                  </h3>
                </div>
                
                <div className="relative">
                  {section.content ? (
                    <div className={`p-5 rounded-2xl ${section.highlight} border-l-4 ${section.color}`}>
                      <p className="text-gray-800 font-novaSemi leading-relaxed text-justify text-base md:text-lg">
                        {section.content}
                      </p>
                    </div>
                  ) : (
                    <div className={`p-5 rounded-2xl ${section.highlight} border-l-4 ${section.color}`}>
                      <ul className="space-y-3">
                        {section.points.map((point, i) => (
                          <li key={i} className="flex gap-3 text-gray-800 font-novaSemi text-sm md:text-base leading-relaxed">
                            <div className={`mt-2 shrink-0 w-1.5 h-1.5 rounded-full ${section.accent.replace('text-', 'bg-')} opacity-60`}></div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {/* Subtle Corner Accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${section.bg} rounded-bl-[4rem] opacity-20`}></div>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="values-container relative mb-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-novaBold text-indigo-950 mb-4">Core Values</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          {/* Circular Layout for Large Screens */}
          <div className="relative max-w-5xl mx-auto h-[700px] hidden lg:flex items-center justify-center scale-90 md:scale-100">
            {/* Background Rings */}
            <div className="absolute w-[500px] h-[500px] border-2 border-dashed border-indigo-100 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[350px] h-[350px] border border-indigo-50 rounded-full"></div>
            
            {/* Center Circle */}
            <div className="relative z-20 w-56 h-56 bg-indigo-950 rounded-full flex flex-col items-center justify-center border-[12px] border-white shadow-[0_0_50px_rgba(0,0,0,0.1)] group">
               <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-900 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <span className="relative z-10 text-white text-2xl font-novaBold text-center leading-tight tracking-wider">CORE<br/>VALUES</span>
               <div className="relative z-10 w-12 h-1 bg-secondary mt-3 rounded-full"></div>
            </div>
            
            {/* Value Items (Pentagonal Positioning) */}
            {coreValues.map((value, index) => {
              const angles = [270, 342, 54, 126, 198]; // Top, Right-Top, Right-Bottom, Left-Bottom, Left-Top
              const angle = angles[index];
              const radius = 300;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div 
                  key={index}
                  className="absolute w-64 group"
                  style={{ 
                    top: `calc(50% + ${y}px)`, 
                    left: `calc(50% + ${x}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="relative p-6 rounded-[2rem] bg-white shadow-xl border border-gray-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 ${value.bg} ${value.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform`}>
                      {value.icon}
                    </div>
                    <div className="mt-4 text-center">
                      <h4 className={`text-lg font-novaBold text-indigo-950 mb-2 uppercase tracking-wide`}>{value.title}</h4>
                      <p className="text-gray-500 text-sm font-novaReg leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                    {/* Corner Accent */}
                    <div className={`absolute bottom-0 right-0 w-8 h-8 ${value.bg} rounded-tl-[2rem] rounded-br-[2rem] opacity-50`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grid Layout for Smaller Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white shadow-lg border border-gray-50 hover:-translate-y-2 transition-all duration-300 group text-center"
              >
                <div className={`w-14 h-14 ${value.bg} ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner mx-auto group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-novaBold text-indigo-950 mb-3">{value.title}</h4>
                <p className="text-gray-500 font-novaReg leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* About ASF Summary */}
        <div className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-indigo-950 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-900 rounded-full -mr-32 -mt-32 opacity-20"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-novaBold mb-6">About AKGEC Skills Foundation</h2>
              <p className="text-indigo-100/80 font-novaReg leading-relaxed text-justify text-base">
                AKGEC SKILLS FOUNDATION, an ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified and NABL accredited facility, is a joint initiative of Ajay Kumar Garg Engineering College (AKGEC) and the National Skill Development Corporation (NSDC), Ministry of Skills Development & Entrepreneurship, Govt. of India.
              </p>
            </div>
            <div className="w-full lg:w-auto grid grid-cols-2 gap-4">
              {[
                { label: "ISO", sub: "Certified" },
                { label: "NABL", sub: "Accredited" },
                { label: "NSDC", sub: "Partner" },
                { label: "QP/NOS", sub: "Aligned" }
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-white/10 rounded-2xl border border-white/10 text-center min-w-[120px]">
                  <span className="block text-xl font-novaBold text-secondary">{stat.label}</span>
                  <span className="block text-[10px] uppercase tracking-widest text-indigo-300">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsVisionMission;
