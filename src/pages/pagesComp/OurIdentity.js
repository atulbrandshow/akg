"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, Globe, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const OurIdentity = () => {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const logoRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - once on scroll
      gsap.fromTo(
        titleRef.current,
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
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Left column animation
      gsap.fromTo(
        leftColumnRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Right column cards stagger animation
      gsap.fromTo(
        cardsRef.current,
        { x: 100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Logo watermarks animation
      gsap.fromTo(
        logoRefs.current,
        { scale: 0, rotation: 0, opacity: 0 },
        {
          scale: 1,
          rotation: (i) => [0, 0, 0][i] || 0,
          opacity: (i) => [0.1, 0.1, 0.05][i] || 0.1,
          duration: 1.5,
          ease: "back.out(1.7)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
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
      className="relative min-h-screen bg-gray-100 py-10 overflow-hidden"
    >
      {/* Layer 1: Enhanced Base Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/20 via-transparent to-blue-50/20"></div>
      </div>

      {/* Layer 2: Vector Shapes & Curves */}
      <div className="absolute inset-0">
        {/* AKGEC Logo watermarks */}
        <div
          ref={(el) => (logoRefs.current[0] = el)}
          className="absolute top-20 right-20 w-32 h-32 opacity-10"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <image
              href="/image/akgec-logo.svg"
              x="0"
              y="0"
              width="100"
              height="100"
            />
          </svg>
        </div>

        <div
          ref={(el) => (logoRefs.current[1] = el)}
          className="absolute bottom-14 left-14 w-24 h-24"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <image
              href="/image/akgec-logo.svg"
              x="0"
              y="0"
              width="100"
              height="100"
              opacity={0.1}
            />
          </svg>
        </div>
      </div>

      {/* Layer 4: Complex Vector Patterns */}
      <div className="absolute inset-0">
        {/* Small scattered logo watermarks */}
        <div className="absolute -bottom-40 -right-0 w-96 h-96">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <image
              href="/image/akgec-logo.svg"
              x="0"
              y="0"
              width="100"
              height="100"
              opacity={0.1}
            />
          </svg>
        </div>

        <div className="absolute bottom-12 left-10 w-24 h-24 opacity-2">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <image
              href="/image/akgec-logo.svg"
              x="0"
              y="0"
              width="100"
              height="100"
              opacity={0.1}
            />
          </svg>
        </div>

        <div className="absolute top-12 left-10 w-14 h-14 opacity-2">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <image
              href="/image/akgec-logo.svg"
              x="0"
              y="0"
              width="100"
              height="100"
              opacity={0.1}
            />
          </svg>
        </div>
      </div>

      {/* Layer 5: Advanced Geometric Overlays */}
      <div className="absolute inset-0">
        {/* Large central watermark */}
        <div
          ref={(el) => (logoRefs.current[2] = el)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <image
              href="/image/akgec-logo.svg"
              x="0"
              y="0"
              width="100"
              height="100"
            />
          </svg>
        </div>
      </div>

      {/* Layer 7: Advanced Overlay Effects */}
      <div className="absolute inset-0">
        {/* Diagonal light streaks */}
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -rotate-12"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent transform rotate-6"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -rotate-3"></div>
        </div>

        {/* Corner light effects */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-secondary/12 via-secondary/6 to-transparent rounded-full"></div>
      </div>

      {/* Layer 8: Subtle Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white/5 to-transparent"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      </div>

      {/* Layer 9: Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            Our Legacy
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Two Column Layout */}
        <div className="relative grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div ref={leftColumnRef} className="space-y-8 sticky top-20">
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
              <div className="absolute top-0 right-0 w-32 h-1 bg-secondary"></div>

              <div className="relative p-8 text-justify font-novaReg text-gray-800 leading-relaxed">
                <p className="mb-6 text-lg">
                  <span className="font-bold text-3xl">R</span>ooted in a
                  profound legacy of academic excellence, AKG University builds
                  on the pioneering spirit of Ajay Kumar Garg Engineering
                  College, established in 1998 by visionary Dr. Ajay Kumar Garg.
                </p>

                <p className="mb-6">
                  From its inception, AKG University has been dedicated to
                  transforming education through innovation, professional rigor,
                  and a deep commitment to social responsibility.
                </p>

                <p className="mb-6">
                  Our journey is one of relentless growth—growing from a
                  specialized engineering college into a multidisciplinary
                  institution that shapes future leaders, technologists, and
                  change-makers.
                </p>

                <p>
                  <strong className="text-primary">
                    AKG University is not just an Institution;
                  </strong>{" "}
                  it's a movement toward{" "}
                  <em className="text-primary font-semibold">
                    Excellence and Ethical leadership.
                  </em>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Features */}
          <div ref={rightColumnRef} className="space-y-6">
            {/* Achievement Cards */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-brand-blue overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-yellow"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                  Legacy Since 1998
                </h3>
              </div>
              <p className="text-gray-600">
                25+ years of academic excellence and innovation in education.
              </p>
            </div>

            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-brand-yellow overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow to-brand-blue"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                  Multidisciplinary
                </h3>
              </div>
              <p className="text-gray-600">
                Diverse programs across engineering, management, law, and health
                sciences.
              </p>
            </div>

            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-brand-blue overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-yellow"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                  Global Partnerships
                </h3>
              </div>
              <p className="text-gray-600">
                Strong collaborations with industry leaders and international
                institutions.
              </p>
            </div>

            <div
              ref={(el) => (cardsRef.current[3] = el)}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-brand-yellow overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow to-brand-blue"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                  Innovation Focus
                </h3>
              </div>
              <p className="text-gray-600">
                Cutting-edge research centers and commitment to technological
                advancement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurIdentity;
