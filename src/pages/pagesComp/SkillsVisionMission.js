"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  TrendingUp, 
  Eye, 
  Target, 
  Award, 
  Users, 
  Zap, 
  ShieldCheck, 
  Globe,
  Handshake,
  ArrowRight
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VISION_CONTENT = "To train young professionals and enable Indian industry to attain global leadership by establishing a world class Centre for Training, Research and Product development in the field of Automation, Robotics and Advance Manufacturing.";

const MISSION_POINTS = [
  "To perform state-of-the-art research in Automation, Robotics and Advance Manufacturing to emphasize applications in these areas.",
  "To provide excellence in engineering education and prepare young scientists and engineers for leadership positions in academia, industrial research, and development.",
  "To foster collaboration and interaction with industrial sponsors and government research agencies.",
];

const OBJECTIVE_CONTENT = "The primary objective of the AKGEC Skills Foundation is to encourage young professionals to take up this cross-disciplinary field as a career of their choice and empower youth through training and research in new-age technologies.";

const SkillsVisionMission = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const valuesRef = useRef(null);
  const aboutRef = useRef(null);
  const bgShapesRef = useRef([]);
  const gridRef = useRef(null);

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
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      title: "Innovation",
      desc: "We are Committed to the continuous improvement of program, tools and creative solutions for achieving organizational growth.",
      icon: <Zap className="w-6 h-6" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Speed",
      desc: "Responsiveness in all our actions, ability to execute and implement strategies.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      title: "Collaboration",
      desc: "Our Success is dependent on that of our collaboration with our industry partners, to achieve shared goals.",
      icon: <Handshake className="w-6 h-6" />,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      title: "Excellence",
      desc: "Measuring performance and meeting expectations is the surest path to excellence.",
      icon: <Award className="w-6 h-6" />,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Grid Animation
      gsap.to(gridRef.current, {
        opacity: 0.08,
        duration: 2,
        ease: "power2.inOut",
      });

      gsap.to(gridRef.current, {
        backgroundPosition: "40px 40px",
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      // Background floating shapes
      bgShapesRef.current.forEach((shape, i) => {
        gsap.to(shape, {
          y: "random(-100, 100)",
          x: "random(-50, 50)",
          rotation: "random(-180, 180)",
          duration: "random(10, 20)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Header Animation
      gsap.from(headerRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        }
      });

      // Stacking Cards Animation
      cardsRef.current.forEach((card, i) => {
        // Initial animation for cards appearance
        gsap.fromTo(card, 
          { 
            y: 100,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 20%",
              scrub: 1,
            }
          }
        );

        // Pin each card with a staggered offset to show headers of previous cards
        const offset = i * 80; // 80px offset for each header
        ScrollTrigger.create({
          trigger: card,
          start: `top ${60 + offset}px`, // Staggered pin position
          pin: true,
          pinSpacing: false, 
          endTrigger: valuesRef.current,
          end: `top ${60 + offset}px`,
        });
      });

      // Core Values Circle Animation
      gsap.from(".center-circle", {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 70%",
        }
      });

      gsap.from(".value-item", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 60%",
        }
      });

      // About section animation
      gsap.from(aboutRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 90%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Layered Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid Pattern */}
        <div 
          ref={gridRef}
          className="absolute inset-0 opacity-0 transition-opacity duration-1000" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #4f46e5 1px, transparent 1px), 
              linear-gradient(to bottom, #4f46e5 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} 
        />
        
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]" />
        
        {/* Animated Shapes */}
        <div ref={el => bgShapesRef.current[0] = el} className="absolute top-[10%] -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60" />
        <div ref={el => bgShapesRef.current[1] = el} className="absolute top-[40%] -right-20 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] opacity-40" />
        <div ref={el => bgShapesRef.current[2] = el} className="absolute bottom-[10%] left-[20%] w-80 h-80 bg-violet-100 rounded-full blur-[90px] opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-32">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-indigo-50/50 backdrop-blur-sm border border-indigo-100 rounded-full mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
            </span>
            <span className="text-sm font-bold text-indigo-900 tracking-widest uppercase">Foundation & Purpose</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Our Strategic <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Framework</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 font-medium leading-relaxed">
            Pioneering a world-class ecosystem for automation and robotics through visionary leadership and core values.
          </p>
        </div>

        {/* Stacking Vision/Mission/Objective Cards */}
        <div className="relative space-y-12 mb-48 max-w-4xl mx-auto pb-20">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="relative py-10"
              style={{ zIndex: index + 1 }}
            >
              <div className="relative p-6 md:p-8 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <div className="flex flex-col gap-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 border-b border-gray-50 pb-4">
                    <div className={`w-12 h-12 ${section.bg} ${section.accent} rounded-xl flex items-center justify-center shadow-sm`}>
                      {section.icon}
                    </div>
                    <h3 className={`text-xl md:text-2xl font-black ${section.accent} tracking-wide uppercase`}>
                      {section.title}
                    </h3>
                  </div>
                  
                  <div className="relative">
                    {section.content ? (
                      <div className={`p-5 md:p-8 rounded-2xl ${section.highlight} border-l-4 ${section.color}`}>
                        <p className="text-gray-800 font-semibold leading-relaxed text-justify text-base md:text-lg">
                          {section.content}
                        </p>
                      </div>
                    ) : (
                      <div className={`p-5 md:p-8 rounded-2xl ${section.highlight} border-l-4 ${section.color}`}>
                        <ul className="space-y-4">
                          {section.points.map((point, i) => (
                            <li key={i} className="flex gap-4 text-gray-800 font-semibold text-sm md:text-base leading-relaxed">
                              <div className={`mt-2 shrink-0 w-2 h-2 rounded-full ${section.accent.replace('text-', 'bg-')} opacity-60`}></div>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${section.bg} rounded-bl-[5rem] opacity-30 -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div ref={valuesRef} className="relative pt-4 bg-white z-[10]">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-4xl font-black text-slate-900 mb-6">Core Values</h2>
            <div className="w-24 h-2 bg-indigo-600 mx-auto rounded-full" />
          </div>
          
          {/* Circular Layout for Large Screens */}
          <div className="relative max-w-5xl mx-auto h-[600px] hidden lg:flex items-center justify-center scale-90">
            {/* Background Decor */}
            <div className="absolute w-[500px] h-[500px] border border-slate-100 rounded-full" />
            <div className="absolute w-[350px] h-[350px] border border-dashed border-indigo-100 rounded-full animate-[spin_60s_linear_infinite]" />
            
            {/* Center Circle */}
            <div className="center-circle relative z-20 w-48 h-48 bg-slate-900 rounded-full flex flex-col items-center justify-center border-[8px] border-white shadow-2xl group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="relative z-10 text-center">
                 <span className="block text-white text-2xl font-black tracking-tighter leading-none mb-1">CORE</span>
                 <span className="block text-white text-2xl font-black tracking-tighter leading-none">VALUES</span>
                 <div className="w-10 h-1 bg-white mt-2 mx-auto rounded-full" />
               </div>
            </div>
            
            {/* Value Items (Pentagonal Positioning) */}
            {coreValues.map((value, index) => {
              const angles = [270, 342, 54, 126, 198];
              const angle = angles[index];
              const radius = 260; // Reduced radius
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div 
                  key={index}
                  className="value-item absolute w-60 group" // Reduced width
                  style={{ 
                    top: `calc(50% + ${y}px)`, 
                    left: `calc(50% + ${x}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="relative p-5 rounded-[2rem] bg-white shadow-xl border border-slate-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                    <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 ${value.bg} ${value.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-all duration-500`}>
                      {value.icon}
                    </div>
                    <div className="mt-6 text-center">
                      <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-wider">{value.title}</h4>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grid Layout for Smaller Screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="value-item p-10 rounded-[2.5rem] bg-white shadow-xl border border-slate-50 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${value.bg} ${value.color} rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* About ASF Summary */}
        {/* <div ref={aboutRef} className="relative rounded-[4rem] bg-slate-900 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full -mr-64 -mt-64 opacity-20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600 rounded-full -ml-32 -mb-32 opacity-10 blur-[80px]" />
          
          <div className="relative z-10 p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className="text-indigo-400 font-black tracking-[0.3em] uppercase text-sm">Empowering Tomorrow</span>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">About AKGEC Skills Foundation</h2>
              </div>
              <p className="text-slate-300 font-medium leading-relaxed text-justify text-lg md:text-xl">
                AKGEC SKILLS FOUNDATION, an ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified and NABL accredited facility, is a joint initiative of Ajay Kumar Garg Engineering College (AKGEC) and the National Skill Development Corporation (NSDC), Ministry of Skills Development & Entrepreneurship, Govt. of India.
              </p>
              <button className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-black hover:bg-indigo-50 transition-colors group">
                LEARN MORE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="w-full lg:w-auto grid grid-cols-2 gap-6">
              {[
                { label: "ISO", sub: "Certified", color: "text-blue-400" },
                { label: "NABL", sub: "Accredited", color: "text-indigo-400" },
                { label: "NSDC", sub: "Partner", color: "text-violet-400" },
                { label: "QP/NOS", sub: "Aligned", color: "text-purple-400" }
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 text-center min-w-[160px] group hover:bg-white/10 transition-colors">
                  <span className={`block text-3xl font-black mb-1 ${stat.color}`}>{stat.label}</span>
                  <span className="block text-xs uppercase tracking-[0.2em] font-bold text-slate-400">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SkillsVisionMission;
