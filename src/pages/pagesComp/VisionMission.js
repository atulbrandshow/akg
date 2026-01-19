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
  { title: "Teamwork", desc: "Energizing our efforts through teamwork will yield greater result." },
  { title: "Innovation", desc: "We are Committed to the continuous improvement of program, tools and creative solutions for achieving organizational growth." },
  { title: "Speed", desc: "Responsiveness in all our actions, ability to execute and implement strategies." },
  { title: "Collaboration", desc: "Our Success is dependent on that of our collaboration with our industry partners, to achieve shared goals." },
  { title: "Excellence", desc: "Measuring performance and meeting expectations is the surest path to excellence." },
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
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div ref={el => cardsRef.current[0] = el} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-1 bg-cyan-400"></div>
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-cyan-400" strokeWidth={2} />
                </div>
              </div>
              <h2 className="text-center text-xl text-gray-800 mb-6">VISION</h2>
              <div className="text-sm text-gray-700 text-center px-4">
                <p>{VISION_CONTENT}</p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div ref={el => cardsRef.current[1] = el} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-1 bg-red-500"></div>
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                  <Target className="w-8 h-8 text-red-500" strokeWidth={2} />
                </div>
              </div>
              <h2 className="text-center text-xl text-gray-800 mb-6">MISSION</h2>
              <ul className="space-y-4 text-sm text-gray-700">
                {MISSION_POINTS.map((point, i) => (
                  <li key={i} className="flex">
                    <span className="mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Values Card */}
          {/* <div ref={el => cardsRef.current[2] = el} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-1 bg-yellow-500"></div>
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center">
                  <Scale className="w-8 h-8 text-yellow-500" strokeWidth={2} />
                </div>
              </div>
              <h2 className="text-center text-xl text-gray-800 mb-6">CORE VALUES</h2>
              <ul className="space-y-4 text-sm text-gray-700">
                {CORE_VALUES.map((value, i) => (
                  <li key={i} className="flex">
                    <span className="mr-2">•</span>
                    <div>
                      <span className="font-semibold">{value.title}:</span> {value.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default SkillsVisionMission;
