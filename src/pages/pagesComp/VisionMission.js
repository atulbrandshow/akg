"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Target, 
  Lightbulb,
  Eye,
  Compass
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: -50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        }
      );

      // Cards animation
      gsap.fromTo([missionRef.current, visionRef.current],
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play reverse play reverse"
          }
        }
      );

      // Logo watermarks animation
      gsap.fromTo(logoRefs.current,
        { scale: 0, rotation: 0, opacity: 0 },
        {
          scale: 1,
          rotation: (i) => [15, -10, 20, -15][i] || 0,
          opacity: (i) => [0.06, 0.04, 0.05, 0.03][i] || 0.04,
          duration: 1.5,
          ease: "back.out(1.7)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen font-novaReg bg-gray-100 py-20 overflow-hidden"
    >
      {/* Layer 1: Enhanced Base Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/20 via-transparent to-blue-50/20"></div>
      </div>
      
      {/* Layer 1.5: Overlay Cards Similar to Image */}
      <div className="absolute inset-0">
        {/* Top right card overlay */}
        <div className="absolute top-16 right-16 w-80 h-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/60 p-6 transform rotate-3 hover:rotate-1 transition-transform duration-500">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-semibold text-primary">AKG University</div>
            <div className="text-xs text-secondary font-medium">Excellence</div>
          </div>
          <div className="text-lg font-bold text-gray-800 mb-2">Academic Excellence</div>
          <div className="text-sm text-gray-600">Transforming education through innovation and research</div>
          <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
        
        {/* Bottom left card overlay - Our Goals */}
        <div className="absolute bottom-16 left-12 w-72 h-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/60 p-5 transform -rotate-2 hover:rotate-0 hover:scale-105 hover:-translate-y-4 z-10 hover:z-[100] transition-all duration-500 group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Target className="w-4 h-4 text-white" />
            </div>
            <div className="text-sm font-semibold text-gray-700">Our Goals</div>
          </div>
          <div className="text-sm text-gray-600">Empowering students for global success</div>
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        </div>
        
        {/* Center floating elements */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-lg"></div>
      </div>
      
      {/* Layer 3: Logo Watermarks */}
      <div className="absolute inset-0">
        <div ref={el => logoRefs.current[0] = el} className="absolute top-20 right-20 w-32 h-32 opacity-[0.25] rotate-12">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div ref={el => logoRefs.current[1] = el} className="absolute bottom-24 left-16 w-24 h-24 opacity-[0.22] -rotate-6">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div ref={el => logoRefs.current[2] = el} className="absolute top-1/4 left-8 w-20 h-20 opacity-[0.20] rotate-45">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div ref={el => logoRefs.current[3] = el} className="absolute bottom-1/3 right-12 w-28 h-28 opacity-[0.18] -rotate-12">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.12]">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="absolute top-16 left-1/3 w-16 h-16 opacity-[0.15] rotate-30">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      
      {/* Layer 4: Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `
            linear-gradient(rgba(60, 86, 134, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(60, 86, 134, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Layer 6: Geometric Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-radial from-primary/18 via-primary/10 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-secondary/20 via-secondary/12 to-transparent rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-radial from-primary/12 via-primary/6 to-transparent rounded-full"></div>
        <div className="absolute top-3/4 left-1/4 w-40 h-40 bg-gradient-radial from-secondary/10 via-secondary/5 to-transparent rounded-full"></div>
      </div>
      
      {/* Layer 7: Diagonal Light Streaks */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.08]">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -rotate-12"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent transform rotate-6"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -rotate-3"></div>
        </div>
      </div>
      
      {/* Layer 8: Subtle Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white/5 to-transparent"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div 
            ref={missionRef}
            className="group relative bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 overflow-hidden border-2 border-primary/20 hover:border-primary/40 transform-gpu perspective-1000"
            style={{
              transform: 'rotateX(2deg) rotateY(-2deg)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-br-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-yellow-500/20 to-transparent rounded-tl-3xl"></div>
            
            {/* Enhanced border accent - all around */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary"></div>
            <div className="absolute top-0 right-0 w-32 h-1 bg-secondary"></div>
            <div className="absolute bottom-0 left-0 w-32 h-1 bg-secondary"></div>
            
            <div className="relative p-10">
              {/* Icon with enhanced styling */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative p-4 bg-primary rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Compass className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Title with enhanced styling */}
              <h3 className="text-3xl font-bold text-gray-800 text-center mb-8 group-hover:text-primary transition-colors duration-300">
                <span className="text-5xl">M</span>ISSION
              </h3>

              {/* Enhanced Content with Icons */}
              <div className="space-y-5 font-novaReg">
                <div className="group/item relative bg-gradient-to-r from-blue-50/30 to-transparent p-5 rounded-2xl hover:from-blue-100/50 hover:to-primary/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-primary/10 hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                        <span className="text-white font-bold text-lg">📚</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-primary mb-2 group-hover/item:text-secondary transition-colors duration-300"><span className="font-bold text-2xl">D</span>eliver Excellence</h4>
                      <p className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                        Exceptional education across engineering, management, law, health sciences, liberal arts, and emerging areas.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group/item relative bg-gradient-to-r from-blue-50/30 to-transparent p-5 rounded-2xl hover:from-blue-100/50 hover:to-primary/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-primary/10 hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                        <span className="text-white font-bold text-lg">🤝</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-primary mb-2 group-hover/item:text-secondary transition-colors duration-300"><span className="font-bold text-2xl">F</span>oster Engagement</h4>
                      <p className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                        Industry engagement, research, entrepreneurship, and practical skills through internships and placements.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group/item relative bg-gradient-to-r from-blue-50/30 to-transparent p-5 rounded-2xl hover:from-blue-100/50 hover:to-primary/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-primary/10 hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                        <span className="text-white font-bold text-lg">🎯</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-primary mb-2 group-hover/item:text-secondary transition-colors duration-300"><span className="font-bold text-2xl">P</span>rioritize Students</h4>
                      <p className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                        Student-centric, inclusive approaches for lifelong learning and meaningful societal impact.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group/item relative bg-gradient-to-r from-blue-50/30 to-transparent p-5 rounded-2xl hover:from-blue-100/50 hover:to-primary/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-primary/10 hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                        <span className="text-white font-bold text-lg">🌍</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-primary mb-2 group-hover/item:text-secondary transition-colors duration-300"><span className="font-bold text-2xl">C</span>hampion Standards</h4>
                      <p className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                        Global standards, diversity, and sustainable development for a better tomorrow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div 
            ref={visionRef}
            className="group relative bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 overflow-hidden border-2 border-secondary/20 hover:border-secondary/40 transform-gpu perspective-1000"
            style={{
              transform: 'rotateX(2deg) rotateY(2deg)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-tr-3xl"></div>
            
            {/* Enhanced border accent - all around */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"></div>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-secondary"></div>
            <div className="absolute top-0 right-0 w-32 h-1 bg-primary"></div>
            <div className="absolute bottom-0 left-0 w-32 h-1 bg-primary"></div>
            
            <div className="relative p-10">
              {/* Icon with enhanced styling */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative p-4 bg-secondary rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-10 h-10 text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Title with enhanced styling */}
              <h3 className="text-3xl font-bold text-gray-800 text-center mb-8 group-hover:text-secondary transition-colors duration-300">
                <span className="text-5xl">V</span>ISION
              </h3>

              {/* Content with enhanced styling */}
              <div className="flex justify-center items-center min-h-[280px]">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50/50 to-orange-50/50 group-hover:from-yellow-100/50 group-hover:to-orange-100/50 transition-all duration-300">
                  <p className="text-gray-700 font-novaReg text-xl leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    <span className="font-bold text-2xl">T</span>o empower innovative leaders through transformative education, cutting-edge research, and ethical practices for a sustainable global future.
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

export default AboutSection;