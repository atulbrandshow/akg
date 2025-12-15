"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionMissionSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const visionHexRef = useRef(null);
  const missionHexRef = useRef(null);
  const valuesHexRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        titleRef.current,
        { y: -40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.7, 
          ease: "power2.out" 
        },
        0
      )
      .fromTo(
        leftCardRef.current,
        { x: -80, opacity: 0, rotateY: -20 },
        { 
          x: 0, 
          opacity: 1, 
          rotateY: 0,
          duration: 0.8, 
          ease: "power3.out" 
        },
        0.15
      )
      .fromTo(
        rightCardRef.current,
        { x: 80, opacity: 0, rotateY: 20 },
        { 
          x: 0, 
          opacity: 1, 
          rotateY: 0,
          duration: 0.8, 
          ease: "power3.out" 
        },
        0.15
      )
      .fromTo(
        missionHexRef.current,
        { 
          scale: 0.3, 
          opacity: 0, 
          y: 60,
          rotationZ: -30
        },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0,
          rotationZ: 0,
          duration: 1.2, 
          ease: "elastic.out(1, 0.6)" 
        },
        0.2
      )
      .fromTo(
        visionHexRef.current,
        { 
          scale: 0.4, 
          opacity: 0, 
          x: -60, 
          y: -60,
          rotationZ: 45
        },
        { 
          scale: 1, 
          opacity: 1, 
          x: 0, 
          y: 0,
          rotationZ: 0,
          duration: 1, 
          ease: "back.out(1.7)" 
        },
        0.45
      )
      .fromTo(
        valuesHexRef.current,
        { 
          scale: 0.4, 
          opacity: 0, 
          x: 60, 
          y: -60,
          rotationZ: -45
        },
        { 
          scale: 1, 
          opacity: 1, 
          x: 0, 
          y: 0,
          rotationZ: 0,
          duration: 1, 
          ease: "back.out(1.7)" 
        },
        0.45
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-white py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div ref={titleRef} className="mb-20">
          <div className="w-20 h-1 bg-red-500 mb-6"></div>
          <h2 className="text-5xl font-bold text-gray-700">
            VISION & <span className="text-red-500">MISSION STATEMENT</span>
          </h2>
        </div>

        <div className="flex gap-12 items-center justify-between">
          {/* Left Side - Mission Statement Card */}
          <div className="w-1/5 flex-shrink-0">
            <div ref={leftCardRef} className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 border-4 border-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xs font-bold text-gray-800 mb-4 tracking-widest text-center">MISSION STATEMENT</h3>
              <p className="text-gray-600 text-xs leading-relaxed text-center">
                A mission statement captures the essence of your organization and explains why you do what you do and why you exist in principle.
              </p>
            </div>
          </div>

          {/* Center - Hexagon Layout */}
          <div className="w-3/5 flex-shrink-0 relative" style={{ height: '520px' }}>
            <div className="absolute inset-0 flex items-center justify-center gap-4">
              {/* Vision Hexagon - Left */}
              <div 
                ref={visionHexRef}
                className="relative flex flex-col items-center"
              >
                <div className="mb-12">
                  <div className="bg-white rounded-xl shadow-2xl px-5 py-2 flex items-center gap-3 border-2 border-gray-100">
                    <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-bold text-gray-800">76%</span>
                  </div>
                </div>
                
                <div 
                  className="w-64 h-64 bg-red-500 flex items-center justify-center shadow-2xl cursor-pointer hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}
                >
                  <div className="text-center text-white p-8">
                    <h3 className="text-2xl font-bold mb-4 tracking-wide">VISION</h3>
                    <p className="text-xs leading-relaxed">
                      We believe that buying glasses should be easy and fun. He should leave you happy and beautiful with money in your pocket. We also believe that everyone has the right to see.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Hexagon - Center */}
              <div 
                ref={missionHexRef}
                className="relative flex flex-col items-center z-30 -mx-8"
              >
                <div className="mb-12">
                  <div className="bg-white rounded-xl shadow-2xl px-5 py-2 flex items-center gap-3 border-2 border-gray-100">
                    <div className="w-5 h-5 bg-amber-500 rounded-full"></div>
                    <span className="text-sm font-bold text-gray-800">87%</span>
                  </div>
                </div>
                
                <div 
                  className="w-64 h-64 bg-amber-500 flex items-center justify-center shadow-2xl cursor-pointer hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}
                >
                  <div className="text-center text-white p-8">
                    <h3 className="text-2xl font-bold mb-4 tracking-wide">MISSION</h3>
                    <p className="text-xs leading-relaxed">
                      Warby Parker was founded with a rebellious spirit and a lofty goal: to offer designer eyewear at a revolutionary price, while at the same time leading the way for socially conscious businesses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Values Hexagon - Right */}
              <div 
                ref={valuesHexRef}
                className="relative flex flex-col items-center"
              >
                <div className="mb-12">
                  <div className="bg-white rounded-xl shadow-2xl px-5 py-2 flex items-center gap-3 border-2 border-gray-100">
                    <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-bold text-gray-800">89%</span>
                  </div>
                </div>
                
                <div 
                  className="w-64 h-64 bg-green-500 flex items-center justify-center shadow-2xl cursor-pointer hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}
                >
                  <div className="text-center text-white p-8">
                    <h3 className="text-2xl font-bold mb-4 tracking-wide">VALUES</h3>
                    <p className="text-xs leading-relaxed">
                      Be an expert, a real professional. Be effective, take personal responsibility. Create and promote useful, quality innovative products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Statistics Card */}
          <div className="w-1/5 flex-shrink-0">
            <div ref={rightCardRef} className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg text-center">
              <div className="text-6xl font-bold text-green-600 mb-3">44.7%</div>
              <p className="text-xs text-gray-600 leading-relaxed">
                We occupy 44.7% of the market for the production of exclusive glasses
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Branding */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">POWERSLIDES</span>
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">2</span>
            </div>
          </div>
          <div className="text-red-500 text-sm font-medium">
            WWW.POWERSLIDES.COM
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;