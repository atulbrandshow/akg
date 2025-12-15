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
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        })
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const hexStyle = {
    clipPath:
      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  };

  const logoRefs = useRef([]);

  return (
    <section ref={sectionRef} className="relative bg-gray-100 py-20 overflow-hidden">
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
            <div className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="w-24 h-24 border-4 border-gray-300 mx-auto mb-6 flex items-center justify-center rounded-lg">
                <ChartLine className="w-8 h-8 text-gray-400" />
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
          <div className="relative w-3/5 h-[480px]">
            {/* Vision */}
            <div ref={visionRef} className="absolute left-[5%] top-[5%] text-center">
              <Badge color="red" value="76%" />
              <Hex bg="bg-red-500" title="VISION" text="Buying glasses should be easy, fun, and affordable for everyone." />
            </div>

            {/* Mission */}
            <div ref={missionRef} className="absolute left-1/2 top-[65%] transform] -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <Badge color="amber" value="87%" />
              <Hex bg="bg-amber-500" title="MISSION" text="Offer designer eyewear at revolutionary prices while leading socially conscious business." />
            </div>

            {/* Values */}
            <div ref={valuesRef} className="absolute right-[5%] top-[5%] text-center">
              <Badge color="green" value="89%" />
              <Hex bg="bg-green-500" title="VALUES" text="Be professional, responsible, innovative, and quality-driven." />
            </div>
          </div>

          {/* Right Card */}
          <div ref={rightRef} className="w-1/5">
            <div className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-2xl hover:shadow-3xl transition-shadow">
              <h3 className="text-6xl font-bold text-green-600 mb-3">44.7%</h3>
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
      className={`w-56 h-56 ${bg} text-white flex items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer`}
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))"
      }}
    >
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold mb-3 tracking-wide">{title}</h3>
        <p className="text-xs leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function Badge({ color, value }) {
  const colors = {
    red: "text-red-500",
    amber: "text-amber-500",
    green: "text-green-500",
  };

  return (
    <div className="mb-6 flex justify-center">
      <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${colors[color]} bg-current`} />
        <span className="text-sm font-bold text-gray-800">{value}</span>
      </div>
    </div>
  );
}
