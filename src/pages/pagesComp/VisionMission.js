"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Target,
  Lightbulb
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial positions
      gsap.set(titleRef.current, { y: -50, opacity: 0 });
      gsap.set([missionRef.current, visionRef.current], {
        y: 100,
        opacity: 0
      });

      // ScrollTrigger animations
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      gsap.to([missionRef.current, visionRef.current], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Floating animations
      gsap.to(missionRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to(visionRef.current, {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `
    url('/image/akg-logo.svg'),
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)
  `,
        // backgroundSize: 'contain, 400px 400px, 300px 300px',  // contain for SVG
        backgroundPosition: 'center top, 0 0, 100% 100%',     // ✅ Horizontally centered, TOP aligned
        backgroundRepeat: 'no-repeat, repeat, repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

      {/* Existing Background blobs refined */}
      <div className="pointer-events-none absolute -top-40 right-[-140px] h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-blue-50/80 backdrop-blur-sm" />
      <div className="pointer-events-none absolute bottom-[-140px] right-[-60px] h-48 w-48 rounded-full bg-yellow-50/80 backdrop-blur-sm" />

      {/* Optional: Add subtle vector pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-blue-200/50 rounded-full" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-yellow-200/50 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-blue-100/50 rounded-full" />
      </div>

      {/* SVG decorative background */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-10 mx-auto w-[900px] max-w-[95%] opacity-20"
        viewBox="0 0 900 260"
        fill="none"
      >
        <path
          d="M0 180C120 140 220 120 340 130C460 140 560 190 680 190C780 190 850 170 900 150V260H0V180Z"
          fill="url(#visionMissionGradient)"
        />
        <circle cx="120" cy="90" r="36" stroke="#93C5FD" strokeWidth="1.5" />
        <circle cx="780" cy="60" r="52" stroke="#FACC15" strokeWidth="1.5" />
        <defs>
          <linearGradient
            id="visionMissionGradient"
            x1="0"
            y1="140"
            x2="900"
            y2="260"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EFF6FF" />
            <stop offset="0.5" stopColor="#FEF9C3" />
            <stop offset="1" stopColor="#DBEAFE" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[3px] w-10 rounded-full bg-blue-500" />
            <span className="h-[3px] w-10 rounded-full bg-yellow-400" />
          </div>
          {/* <p className="text-lg font-semibold tracking-[0.25em] text-slate-500 uppercase bg-blue-500">
            Vision & Mission
          </p> */}
          {/* <h2 className="mt-3 text-lg sm:text-xl md:text-[22px] font-medium text-slate-800 max-w-3xl mx-auto">
            Shaping the future through excellence in education, innovation, and societal impact
          </h2> */}
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 items-stretch">
          {/* Vision card */}
          <article
            ref={visionRef}
            className="relative h-full rounded-3xl bg-white/95 backdrop-blur-md border border-blue-100/50 shadow-[0_18px_40px_rgba(15,23,42,0.1)] overflow-hidden transition-all duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] hover:-translate-y-1"
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 to-blue-600" />
            <div className="pointer-events-none absolute -top-20 right-[-40px] h-44 w-44 rounded-full bg-blue-50/80 backdrop-blur-sm" />
            <div className="relative z-10 px-6 sm:px-8 py-7 sm:py-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center rounded-2xl bg-blue-600 shadow-md px-4 py-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase">
                    Vision
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-500">
                    Where the institution aspires to be.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700">
                To empower innovative leaders through transformative education, cutting-edge research,
                and ethical practices for a sustainable global future.
              </p>

              <div className="mt-auto rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-3 flex items-start gap-3">
                <span className="mt-1 h-6 w-[3px] rounded-full bg-blue-500" />
                <p className="text-xs sm:text-sm italic text-slate-700">
                  "Leading the future of higher education through innovation and impact."
                </p>
              </div>
            </div>
          </article>

          {/* Mission card */}
          <article
            ref={missionRef}
            className="relative h-full rounded-3xl bg-white/95 backdrop-blur-md border border-yellow-100/50 shadow-[0_18px_40px_rgba(15,23,42,0.1)] overflow-hidden transition-all duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] hover:-translate-y-1"
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-yellow-400 to-amber-400" />
            <div className="pointer-events-none absolute -top-20 right-[-40px] h-44 w-44 rounded-full bg-yellow-50/80 backdrop-blur-sm" />
            <div className="pointer-events-none absolute bottom-[-40px] right-4 h-24 w-24 rounded-full bg-yellow-50/80 backdrop-blur-sm" />

            <div className="relative z-10 px-6 sm:px-8 py-7 sm:py-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center rounded-2xl bg-yellow-500 shadow-md px-4 py-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.25em] text-amber-600 uppercase">
                    Mission
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-500">
                    How the institution fulfils its vision.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 text-sm sm:text-[15px] leading-relaxed text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Deliver exceptional education across engineering, management, law, health sciences, liberal arts, and emerging areas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Foster industry engagement, research, entrepreneurship, and practical skills (skilling, internships, placements).</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Prioritize student-centric, inclusive approaches for lifelong learning and societal impact.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Champion global standards, diversity, and sustainable development.</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
