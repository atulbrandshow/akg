"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Lightbulb, Scale } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MISSION_POINTS = [
  "Deliver transformative education across Engineering, Management, Law, Health Sciences, Applied Sciences, and Emerging Areas.",
  "Foster Industry Engagement, Research, Entrepreneurship, and Practical Skills (Skilling, Internships, Placements).",
  "Prioritize student-centric, Inclusive Approaches for Lifelong Learning and Societal Impact.",
  "Champion Global Standards, Diversity, and Sustainable Development "
];

const VISION_CONTENT = "To empower students, the future innovative leaders through transformative education, Cutting-edge research, and ethical practices for a sustainable global future.";

const CORE_VALUES = [
  { title: "Transparency & Uniformity", desc: "Clear, unbiased policies and processes in all operations." },
  { title: "Excellence", desc: "Striving for high standards in academics and systems." },
  { title: "Ethical Conduct", desc: "Uncompromised honesty and moral responsibility." },
  { title: "Discipline", desc: "Strong emphasis on disciplined behavior and learning." },
  { title: "Holistic Development", desc: "Focus on developing competent professionals and responsible citizens." },
];

const SkillsVisionMission = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Layer 1: Enhanced Base Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/20 via-transparent to-blue-50/20"></div>
      </div>

      {/* Layer 2: SVG Wave Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-64 opacity-[0.15]">
          <svg viewBox="0 0 1200 300" className="w-full h-full">
            <path d="M0,100 C300,50 600,150 900,80 C1050,40 1150,120 1200,100 L1200,0 L0,0 Z" fill="url(#gradient1)" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3C5686" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 w-full h-48 opacity-[0.12]">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <path d="M1200,100 C900,150 600,50 300,120 C150,160 50,80 0,100 L0,200 L1200,200 Z" fill="url(#gradient2)" />
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3C5686" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Layer 3: Logo Watermarks */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 opacity-[0.20] rotate-12">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="absolute bottom-24 left-16 w-24 h-24 opacity-[0.18] -rotate-6">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="absolute top-1/4 left-8 w-20 h-20 opacity-[0.15] rotate-45">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.08]">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Layer 4: Geometric Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-radial from-primary/15 via-primary/8 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-secondary/18 via-secondary/10 to-transparent rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full"></div>
      </div>

      {/* Layer 5: Subtle Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>

      <main className="relative z-10 container mx-auto px-4">
        <div className="space-y-16 max-w-6xl mx-auto">
          {/* Vision Section */}
          <div ref={el => cardsRef.current[0] = el} className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-2 border-l-2 border-brand-blue">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
              {/* Vision Image/Icon Side */}
              <div className="bg-brand-blue/5 flex items-center justify-center p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-blue/10 transform rotate-12 scale-150 transition-transform duration-700 group-hover:rotate-45"></div>
                <Lightbulb className="w-32 h-32 text-brand-blue relative z-10 drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
              </div>

              {/* Vision Content Side */}
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-1 bg-brand-blue rounded-full"></span>
                  <h2 className="text-3xl font-bold text-gray-800">VISION</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  <span className="text-4xl text-brand-blue font-bold leading-none">T</span>
                  {VISION_CONTENT.slice(1)}
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div ref={el => cardsRef.current[1] = el} className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-2 border-l-2 border-brand-yellow">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
              {/* Mission Content Side */}
              <div className="p-12 flex flex-col justify-center order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-1 bg-brand-yellow rounded-full"></span>
                  <h2 className="text-3xl font-bold text-gray-800">OUR MISSION</h2>
                </div>
                <ul className="space-y-4 text-gray-700">
                  {MISSION_POINTS.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-yellow shrink-0 mt-4"></span>
                      <span className="text-lg leading-relaxed">
                        <span className="text-4xl text-brand-yellow font-bold leading-none">{point.charAt(0)}</span>
                        {point.slice(1)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mission Image/Icon Side */}
              <div className="bg-brand-yellow/10 flex items-center justify-center p-12 relative overflow-hidden group order-1 md:order-2">
                <div className="absolute inset-0 bg-brand-yellow/20 transform -rotate-12 scale-150 transition-transform duration-700 group-hover:-rotate-45"></div>
                <Target className="w-32 h-32 text-brand-yellow relative z-10 drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Core Values Section */}
      <section className="py-20">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-gray-900">
              Core Values
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto font-medium">
              The Core Values of the University are as follows:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-sm:gap-2">
            <div ref={el => cardsRef.current[2] = el} className="bg-HumanDignity bg-[#3b210c] text-white p-10 max-sm:p-2 flex items-center gap-5 bg-center bg-cover bg-blend-overlay min-h-52 max-sm:min-h-48 cursor-pointer transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="/image/core-value/carrer-icon-1.webp"
                alt="transparency-icon"
                className="align-middle overflow-clip mr-4 max-sm:w-16"
              />
              <div>
                <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">
                  Transparency & Uniformity
                </h4>
                <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                  <li>
                    Clear, unbiased policies and processes in all operations.
                  </li>
                </ul>
              </div>
            </div>

            <div ref={el => cardsRef.current[3] = el} className="bg-[#6a7414] text-white p-10 max-sm:p-2 flex items-center gap-5 min-h-52 max-sm:min-h-48 cursor-pointer transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="/image/core-value/carrer-icon-2.webp"
                alt="excellence-icon"
                className="align-middle overflow-clip mr-4 max-sm:w-16"
              />
              <div>
                <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">
                  Excellence
                </h4>
                <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                  <li>Striving for high standards in academics and systems.</li>
                </ul>
              </div>
            </div>

            <div ref={el => cardsRef.current[4] = el} className="bg-[#c75622] text-white p-10 max-sm:p-2 flex items-center gap-5 min-h-52 max-sm:min-h-48 cursor-pointer transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="/image/core-value/carrer-icon-3.webp"
                alt="ethical-conduct-icon"
                className="align-middle overflow-clip mr-4 max-sm:w-16"
              />
              <div>
                <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">
                  Ethical Conduct
                </h4>
                <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                  <li>
                    Uncompromised honesty and moral responsibility.
                  </li>
                </ul>
              </div>
            </div>

            <div ref={el => cardsRef.current[5] = el} className="bg-Giving bg-[#251470] text-white p-10 max-sm:p-2 bg-center bg-cover bg-blend-overlay flex items-center gap-5 min-h-52 max-sm:min-h-48 cursor-pointer transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="/image/core-value/carrer-icon-4.webp"
                alt="discipline-icon"
                className="align-middle overflow-clip mr-4 max-sm:w-16"
              />
              <div>
                <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">
                  Discipline
                </h4>
                <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                  <li>
                    Strong emphasis on disciplined behavior and learning.
                  </li>
                </ul>
              </div>
            </div>

            <div ref={el => cardsRef.current[6] = el} className="bg-IndustryFocus bg-[#0b4d4d] text-white p-10 max-sm:p-2 bg-center bg-cover bg-blend-overlay flex items-center gap-5 min-h-52 max-sm:min-h-48 cursor-pointer transition-shadow duration-300 hover:shadow-2xl md:col-span-2">
              <img
                src="/image/core-value/carrer-icon-5.webp"
                alt="holistic-development-icon"
                className="align-middle overflow-clip mr-4 max-sm:w-16"
              />
              <div>
                <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">
                  Holistic Development
                </h4>
                <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                  <li>
                    Focus on developing competent professionals and responsible citizens.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsVisionMission;
