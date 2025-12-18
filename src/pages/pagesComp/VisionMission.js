"use client";

import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VisionMission() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        [visionRef.current, missionRef.current, valuesRef.current],
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <style jsx global>{`
        body {
          background-color: #F8FAFC;
        }

        .pattern-grid {
          background-image: radial-gradient(#CBD5E1 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .bg-shape-blob {
          position: absolute;
          background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          z-index: 0;
          filter: blur(40px);
          opacity: 0.6;
        }

        .strategy-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .strategy-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -5px rgba(15, 23, 42, 0.1);
        }

        .icon-box {
          background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
        }
      `}</style>
      
      <div ref={sectionRef} className="flex justify-center w-full bg-slate-50 text-slate-800">
        {/* Main Container: Fixed 1440px */}
        <div className="bg-white min-h-[900px] shadow-2xl relative overflow-hidden flex flex-col">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-[600px] pattern-grid z-0 opacity-40"></div>
          <div className="bg-shape-blob w-[800px] h-[800px] -top-20 -right-40"></div>
          
          {/* Header Section */}
          <header ref={headerRef} className="relative z-10 px-20 pt-16 pb-12 flex justify-between items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Mission Statement</span>
              </div>
              <h1 className="font-bold text-5xl text-slate-900 leading-tight">
                VISION <span className="text-blue-600">&</span> MISSION<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-600">STATEMENT</span>
              </h1>
              <div className="w-24 h-1.5 bg-yellow-400 mt-6 rounded-full"></div>
            </div>
            
            <div className="text-right max-w-md">
              <p className="text-slate-500 font-medium">A mission statement captures the essence of your organization and explains why you exist.</p>
            </div>
          </header>

          {/* Main Grid Content */}
          <main className="relative z-10 px-20 pb-20 grid grid-cols-12 gap-8 items-stretch h-full flex-grow">
            
            {/* LEFT SPAN: VISION (Strategic Goal) */}
            <div className="col-span-5 flex flex-col">
              <div ref={visionRef} className="strategy-card group relative h-full bg-slate-900 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-end">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                    alt="Office Skyscrapper" 
                    className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="relative p-10 z-10">
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                    <i className="fa-solid fa-eye text-slate-900 text-2xl"></i>
                  </div>
                  <h2 className="font-bold text-3xl text-white mb-4">VISION</h2>
                  <p className="text-slate-300 leading-relaxed text-lg mb-8">
                    To empower innovative leaders through transformative education, cutting-edge research, and ethical practices for a sustainable global future.
                  </p>
                  

                </div>
              </div>
            </div>

            {/* CENTER SPAN: MISSION (Execution) */}
            <div className="col-span-4 flex flex-col">
              <div ref={missionRef} className="strategy-card bg-white border border-slate-100 rounded-3xl p-10 shadow-lg h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full opacity-50 z-0"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <i className="fa-solid fa-rocket text-2xl"></i>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active</span>
                  </div>

                  <h2 className="font-bold text-3xl text-slate-900 mb-4">MISSION</h2>
                  <div className="text-slate-600 leading-relaxed mb-6 space-y-4">
                    <p className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-blue-600 mt-1 flex-shrink-0"></i>
                      <span>Deliver exceptional education across engineering, management, law, health sciences, liberal arts, and emerging areas.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-blue-600 mt-1 flex-shrink-0"></i>
                      <span>Foster industry engagement, research, entrepreneurship, and practical skills through internships and placements.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-blue-600 mt-1 flex-shrink-0"></i>
                      <span>Prioritize student-centric, inclusive approaches for lifelong learning and meaningful societal impact.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-blue-600 mt-1 flex-shrink-0"></i>
                      <span>Champion global standards, diversity, and sustainable development for a better tomorrow.</span>
                    </p>
                  </div>
                </div>


              </div>
            </div>

            {/* RIGHT SPAN: VALUES & STATS (Stacked) */}
            <div className="col-span-3 flex flex-col gap-6">
              
              {/* Values List Card */}
              <div ref={valuesRef} className="strategy-card bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-lg text-white flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <i className="fa-solid fa-gem text-yellow-400"></i>
                  <h3 className="font-bold text-xl">VALUES</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/50 flex items-center justify-center text-xs mt-0.5">
                      <i className="fa-solid fa-check text-white"></i>
                    </div>
                    <span className="font-medium text-sm text-blue-50">Professional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/50 flex items-center justify-center text-xs mt-0.5">
                      <i className="fa-solid fa-check text-white"></i>
                    </div>
                    <span className="font-medium text-sm text-blue-50">Responsible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/50 flex items-center justify-center text-xs mt-0.5">
                      <i className="fa-solid fa-check text-white"></i>
                    </div>
                    <span className="font-medium text-sm text-blue-50">Innovative</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/50 flex items-center justify-center text-xs mt-0.5">
                      <i className="fa-solid fa-check text-white"></i>
                    </div>
                    <span className="font-medium text-sm text-blue-50">Quality Driven</span>
                  </li>
                </ul>


              </div>

            </div>
          </main>

          {/* Footer Strip */}
          <footer className="bg-white border-t border-slate-200 px-20 py-8 flex justify-between items-center text-slate-400">
            <div className="flex gap-2">
              <div className="h-2 w-2 bg-slate-900 rounded-full"></div>
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              <div className="h-2 w-2 bg-yellow-400 rounded-full"></div>
            </div>
            <span className="text-sm font-medium">Corporate Identity System v2.4</span>
          </footer>

        </div>
      </div>
    </>
  );
}
