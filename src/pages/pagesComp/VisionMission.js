"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Target, 
  Eye, 
  Compass, 
  Lightbulb, 
  Users, 
  BookOpen, 
  Award, 
  Globe, 
  Rocket,
  Star,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const VisionMissionSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const statsRef = useRef(null);
  const componentsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Hexagons animation
      gsap.fromTo(
        [visionRef.current, missionRef.current],
        { scale: 0, rotation: -180, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Components animation
      gsap.fromTo(
        componentsRef.current?.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: componentsRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen font-novaReg bg-white py-20 overflow-hidden"
    >
      {/* Enhanced Background with Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/20 via-transparent to-blue-50/20"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(60, 86, 134, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(60, 86, 134, 0.8) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Vector Logo Watermarks */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 opacity-[0.25] rotate-12 hover:scale-110 hover:opacity-40 transition-all duration-300">
          <img
            src="/image/akgec-logo.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-24 left-16 w-24 h-24 opacity-[0.22] -rotate-6 hover:scale-110 hover:opacity-40 transition-all duration-300">
          <img
            src="/image/akgec-logo.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-1/4 left-8 w-20 h-20 opacity-[0.20] rotate-45 hover:scale-110 hover:opacity-40 transition-all duration-300">
          <img
            src="/image/akgec-logo.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.12] hover:scale-105 hover:opacity-20 transition-all duration-300">
          <img
            src="/image/akgec-logo.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-block mb-4 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-1 bg-primary mb-2 hover:w-20 transition-all duration-300"></div>
            <h2 className="text-4xl md:text-5xl font-bold hover:scale-105 transition-transform duration-300">
              <span className="text-gray-600 hover:text-primary transition-colors duration-300">VISION &</span> <span className="text-primary hover:text-gray-600 transition-colors duration-300">MISSION STATEMENT</span>
            </h2>
          </div>
        </div>

        {/* Main Content - Infographic Style */}
        <div className="max-w-6xl mx-auto">
          
          {/* Vision & Mission Hexagons */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
            {/* Vision Hexagon */}
            <div ref={visionRef} className="relative hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-80 h-80 bg-primary transform rotate-0 flex items-center justify-center hover:bg-primary/90 transition-colors duration-300" style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}>
                <div className="text-center text-white p-8">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 p-2 hover:scale-110 hover:bg-white/30 transition-all duration-300">
                    <span className="text-2xl font-bold text-white">76%</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 hover:scale-105 transition-transform duration-300">VISION</h3>
                  <p className="text-sm leading-relaxed hover:scale-105 transition-transform duration-300">
                    To empower innovative leaders through transformative education, cutting-edge research, and ethical practices for a sustainable global future.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Hexagon */}
            <div ref={missionRef} className="relative hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-80 h-80 bg-secondary transform rotate-0 flex items-center justify-center hover:bg-secondary/90 transition-colors duration-300" style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}>
                <div className="text-center text-gray-800 p-8">
                  <div className="bg-white/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 p-2 hover:scale-110 hover:bg-white/30 transition-all duration-300">
                    <span className="text-2xl font-bold text-gray-800">87%</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 hover:scale-105 transition-transform duration-300">MISSION</h3>
                  <p className="text-sm leading-relaxed hover:scale-105 transition-transform duration-300">
                    Deliver exceptional education, foster industry engagement, prioritize student-centric approaches, and champion global <span className="px-2 hover:bg-white/20 transition-colors duration-300 rounded">standards for sustainable development.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Components Grid */}
          <div ref={componentsRef} className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            <div className="bg-secondary text-gray-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <BookOpen className="w-8 h-8 mb-3 hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold mb-2 hover:scale-105 transition-transform duration-300">Education</h4>
              <p className="text-sm hover:scale-105 transition-transform duration-300">Exceptional education across multiple disciplines</p>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Users className="w-8 h-8 mb-3 hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold mb-2 hover:scale-105 transition-transform duration-300">Industry</h4>
              <p className="text-sm hover:scale-105 transition-transform duration-300">Foster engagement and practical skills</p>
            </div>
            <div className="bg-secondary text-gray-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Star className="w-8 h-8 mb-3 hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold mb-2 hover:scale-105 transition-transform duration-300">Students</h4>
              <p className="text-sm hover:scale-105 transition-transform duration-300">Student-centric inclusive approaches</p>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Award className="w-8 h-8 mb-3 hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold mb-2 hover:scale-105 transition-transform duration-300">Standards</h4>
              <p className="text-sm hover:scale-105 transition-transform duration-300">Champion global standards and diversity</p>
            </div>
            <div className="bg-secondary text-gray-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Globe className="w-8 h-8 mb-3 hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold mb-2 hover:scale-105 transition-transform duration-300">Future</h4>
              <p className="text-sm hover:scale-105 transition-transform duration-300">Sustainable development for tomorrow</p>
            </div>
          </div>

          {/* Values Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
            {/* Values Hexagon */}
            <div className="relative hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-64 h-64 bg-primary transform rotate-0 flex items-center justify-center hover:bg-primary/90 transition-colors duration-300" style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}>
                <div className="text-center text-white p-6">
                  <div className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2 p-2 hover:scale-110 hover:bg-white/30 transition-all duration-300">
                    <span className="text-lg font-bold text-white">89%</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:scale-105 transition-transform duration-300">VALUES</h3>
                  <p className="text-xs hover:scale-105 transition-transform duration-300">
                    Excellence, Innovation, Integrity, and Global Impact
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg p-4 mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-primary hover:scale-105 transition-transform duration-300">Market Leadership</span>
                  <span className="text-lg font-bold text-primary hover:scale-110 transition-transform duration-300">44.7%</span>
                </div>
                <p className="text-xs text-gray-700 hover:scale-105 transition-transform duration-300">
                  We occupy 44.7% of the market for the production of exclusive educational programs
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement Box */}
          <div ref={statsRef} className="mt-16">
            <div className="rounded-2xl shadow-xl border border-gray-200/60 p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <Target className="w-12 h-12 text-white hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-4 hover:scale-105 transition-transform duration-300">MISSION STATEMENT</h3>
                  <p className="text-gray-700 leading-relaxed text-lg hover:scale-105 transition-transform duration-300">
                    A mission statement captures the essence of your organization and explains why you do what you do and why you exist in principle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;