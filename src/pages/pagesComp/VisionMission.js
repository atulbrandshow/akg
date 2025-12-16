"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ChartLine} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VisionMissionSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.timeline()
            .from(titleRef.current, { y: -40, opacity: 0, duration: 0.6 })
            .from(leftRef.current, { x: -60, opacity: 0, duration: 0.6 }, 0.2)
            .from(rightRef.current, { x: 60, opacity: 0, duration: 0.6 }, 0.2)
            .from([visionRef.current, valuesRef.current], {
              scale: 0.6,
              opacity: 0,
              duration: 0.6,
              stagger: 0.15,
            })
            .from(missionRef.current, {
              scale: 0.6,
              opacity: 0,
              duration: 0.8,
              ease: "elastic.out(1,0.6)",
            });
        },
        onEnterBack: () => {
          gsap.timeline()
            .from(titleRef.current, { y: -40, opacity: 0, duration: 0.6 })
            .from(leftRef.current, { x: -60, opacity: 0, duration: 0.6 }, 0.2)
            .from(rightRef.current, { x: 60, opacity: 0, duration: 0.6 }, 0.2)
            .from([visionRef.current, valuesRef.current], {
              scale: 0.6,
              opacity: 0,
              duration: 0.6,
              stagger: 0.15,
            })
            .from(missionRef.current, {
              scale: 0.6,
              opacity: 0,
              duration: 0.8,
              ease: "elastic.out(1,0.6)",
            });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const hexStyle = {
    clipPath:
      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  };

  const logoRefs = useRef([]);

  return (
    <section  ref={sectionRef} className="relative bg-gray-100 py-20 overflow-hidden">
      {/* Layer 1: Enhanced Base Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/20 via-transparent to-blue-50/20"></div>
      </div>

      {/* Layer 3: Logo Watermarks */}
      <div className="absolute inset-0">
        <div
          ref={(el) => (logoRefs.current[0] = el)}
          className="absolute top-20 right-20 w-32 h-32 opacity-[0.25] rotate-12"
        >
          <img
            src="/image/akgec-logo.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div
          ref={(el) => (logoRefs.current[1] = el)}
          className="absolute bottom-24 left-16 w-24 h-24 opacity-[0.22] -rotate-6"
        >
          <img
            src="/image/akgec-logo.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div
          ref={(el) => (logoRefs.current[2] = el)}
          className="absolute top-1/4 left-8 w-20 h-20 opacity-[0.20] rotate-45"
        >
          <img
            src="/image/akgec-logo.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div
          ref={(el) => (logoRefs.current[3] = el)}
          className="absolute bottom-1/3 right-12 w-28 h-28 opacity-[0.18] -rotate-12"
        >
          <img
            src="/image/akgec-logo.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.12]">
          <img
            src="/image/akgec-logo.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute top-16 left-1/3 w-16 h-16 opacity-[0.15] rotate-30">
          <img
            src="/image/akgec-logo.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Layer 4: Grid Pattern */}
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

      {/* Layer 6: Geometric Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-radial from-red-500/18 via-red-500/10 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-green-500/20 via-green-500/12 to-transparent rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-radial from-red-500/12 via-red-500/6 to-transparent rounded-full"></div>
        <div className="absolute top-3/4 left-1/4 w-40 h-40 bg-gradient-radial from-green-500/10 via-green-500/5 to-transparent rounded-full"></div>
      </div>

      {/* Layer 7: Diagonal Light Streaks */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.08]">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent transform -rotate-12"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/25 to-transparent transform rotate-6"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform -rotate-3"></div>
        </div>
      </div>

      {/* Layer 8: Subtle Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white/5 to-transparent"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Title */}
        <div ref={titleRef} className="mb-24">
          <div className="w-20 h-1 bg-red-500 mb-6" />
          <h2 className="text-5xl font-bold text-gray-700">
            VISION & <span className="text-red-500">MISSION STATEMENT</span>
          </h2>
        </div>

        <div className="flex items-center justify-between gap-12">
          {/* Left Card */}
          <div ref={leftRef} className="w-1/5">
            <div className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out">
              <div className="w-24 h-24 border-4 border-gray-300 mx-auto mb-6 flex items-center justify-center rounded-lg hover:border-red-400 hover:bg-red-50 transition-all duration-300">
                <ChartLine className="w-8 h-8 text-gray-400 hover:text-red-500 transition-colors duration-300" />
              </div>
              <h4 className="text-xs font-bold tracking-widest mb-3">
                MISSION STATEMENT
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                A mission statement captures the essence of your organization and explains why you exist.
              </p>
            </div>
          </div>

          {/* Center Hexagons */}
          <div className="relative w-3/5 h-[600px]">
            {/* Vision */}
            <div ref={visionRef} className="absolute left-0 top-0 text-center">
              <div className="relative">
                <Badge color="red" value="76%" />
                <Hex bg="bg-red-500" title="VISION" text="We believe that buying glasses should be easy and fun. He should leave you happy and beautiful with money left in your pocket. We also believe that everyone has the right to see." />
              </div>
            </div>

            {/* Values */}
            <div ref={valuesRef} className="absolute right-0 top-0 text-center">
              <div className="relative">
                <Badge color="green" value="89%" />
                <Hex bg="bg-green-500" title="VALUES" text="Be an expert, a real professional. Be effective, take personal responsibility. Create and promote useful, quality innovative products." />
              </div>
            </div>

            {/* Mission */}
            <div ref={missionRef} className="absolute left-1/2 top-[55%] transform -translate-x-1/2 text-center z-10">
              <div className="relative">
                <Badge color="amber" value="87%" />
                <Hex bg="bg-orange-500" title="MISSION" text="Warby Parker was founded with a rebellious spirit and a lofty goal: to offer designer eyewear at a revolutionary price, while at the same time leading the way for socially conscious businesses." />
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div ref={rightRef} className="w-1/5">
            <div className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group">
              <h3 className="text-6xl font-bold text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300">44.7%</h3>
              <p className="text-xs text-gray-600">
                Market share in exclusive eyewear production
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hex({ bg, title, text }) {
  return (
    <div
      className={`w-80 h-80 ${bg} text-white flex items-center justify-center hover:scale-110 hover:-translate-y-3 transition-all duration-500 ease-out cursor-pointer relative group`}
      style={{
        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 15px 25px rgba(0, 0, 0, 0.2), inset 0 -5px 10px rgba(0, 0, 0, 0.2)",
        filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.25))",
        transform: "perspective(1000px) rotateX(5deg)"
      }}
    >
      <div className="p-10 text-center">
        <h3 className="text-2xl font-bold mb-6 tracking-wider group-hover:scale-105 transition-transform duration-300 text-white drop-shadow-lg">{title}</h3>
        <p className="text-sm leading-relaxed text-white/95 drop-shadow-md font-medium">{text}</p>
      </div>
    </div>
  );
}

function Badge({ color, value }) {
  const colors = {
    red: "bg-red-500",
    amber: "bg-orange-500",
    green: "bg-green-500",
  };

  return (
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
      <div 
        className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-200 flex items-center gap-2"
        style={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.1)",
          transform: "perspective(500px) rotateX(-10deg)"
        }}
      >
        <span className={`w-3 h-3 rounded-full ${colors[color]}`} />
        <span className="text-sm font-bold text-gray-700">{value}</span>
      </div>
    </div>
  );
}
