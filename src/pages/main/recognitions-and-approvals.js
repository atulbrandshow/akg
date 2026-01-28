"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Breadcrumb from "@/Components/Breadcrumb";
import { ShieldCheck, Star, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const RecognitionApprovals = ({ data }) => {
  const [selectedRecognition, setSelectedRecognition] = useState("naac");
  const headerRef = useRef(null);
  const naacRef = useRef(null);
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);

  const recognitionsData = [
    {
      id: "naac",
      title: "NAAC Accreditation",
      description: "A++ Grade (Highest grade in Uttar Pradesh)",
      imgSrc: "/image/recognitions-and-approvals/NAAC.png",
    },
    {
      id: "nba",
      title: "NBA Accreditation",
      description:
        "Five B.Tech. branches in CSE, ECE, EN, IT & ME are accredited for the period of three year w.e.f. academic year 2022-23 To 2024-25.",
      imgSrc: "/image/recognitions-and-approvals/nba.png",
    },
    {
      id: "aicte",
      title: "AICTE Approval",
      description:
        "Engineering and Technology Programs approved for Academic Year 2025–26",
      imgSrc: "/image/recognitions-and-approvals/AICTE.png",
      pdfSrc: "/pdf/recognitions-and-approvals/Z_AICTE-APPROVAL-LETTER_Year-2025-26.pdf",
    },
    {
      id: "Accreditation",
      title: "Accreditation of Measurement",
      description:
        "Accreditation of Measurement and Metrology Centre by National Accreditation Board for Testing and Calibration Laboratories (NABL) These accreditations and approvals reflect our supreme standing in technical and professional education.",
      imgSrc: "/image/recognitions-and-approvals/placeholder.png",
    },
  ];

  const handleRecognitionClick = (recognition) => {
    setSelectedRecognition(recognition.id);
  };

  const selectedRecognitionData = recognitionsData.find(
    (item) => item.id === selectedRecognition,
  );
  const selectedDescription = selectedRecognitionData?.description;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header section animation
      gsap.fromTo(
        headerRef.current.querySelectorAll(".badge, h2, p"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      // NAAC section animation
      gsap.fromTo(
        naacRef.current.querySelectorAll(
          ".naac-badge, .naac-text, .naac-buttons",
        ),
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: naacRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Floating Blobs Animation
      gsap.to(".blob-1", {
        y: -30,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".blob-2", {
        y: 30,
        x: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });

      // Tab cards animation (Staggered entrance)
      gsap.fromTo(
        sidebarRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: "top 85%",
          },
        },
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  // Animate content change
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [selectedRecognition]);

  return (
    <>
      <div
        ref={headerRef}
        className="relative bg-BG44 w-full h-[800px] bg-center bg-cover bg-no-repeat"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
        <div className="relative max-w-[1400px] mx-auto h-full px-6 flex items-center">
          <div className="text-white space-y-6 max-w-2xl">
            <div className="badge inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
              <span className="text-sm font-semibold tracking-wider uppercase">
                Statutory Recognition
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-novaBold leading-tight">
              Approvals by <br />
              <span className="text-yellow-400">Statutory Bodies</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
              Inspired by the remarkable legacy of Ajay Kumar Garg Engineering College, AKG University advances a tradition of technical education, academic distinction and impactful industry alliances through numerous prestigious recognitions, approvals and accolades.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="h-20 bg-gradient-to-b from-gray-900 to-white"></div> */}

      <div
        ref={naacRef}
        className="relative min-h-[500px] w-full bg-gradient-to-br from-[#002147] to-[#00152e] overflow-hidden flex items-center justify-center py-20"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        {/* Abstract Glows */}
        <div className="blob-1 absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="blob-2 absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">

            {/* Elegant Badge */}
            <div className="naac-badge mb-8 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg cursor-default hover:bg-white/20 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
              <span className="text-white font-novaSemi text-sm tracking-widest uppercase">
                Highest Grade Accreditation
              </span>
            </div>

            {/* Main Title - NAAC A++ */}
            <div className="naac-text mb-8 relative">
              <h1 className="text-6xl md:text-8xl font-novaBold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-2xl">
                NAAC <span className="text-brand-yellow font-bold">A++</span>
              </h1>
              <div className="absolute -inset-1 blur-2xl bg-brand-yellow/20 rounded-full opacity-50 -z-10"></div>
            </div>

            {/* Description */}
            <p className="naac-text text-lg md:text-xl text-gray-300 font-novaReg leading-relaxed max-w-2xl mb-10 drop-shadow-md">
              AKG University is recognized by the <span className="text-brand-yellow font-bold">UGC</span> and holds the prestigious <span className="text-white font-bold">NAAC A++</span> accreditation, marking it as a leader in engineering education in Uttar Pradesh.
            </p>
          </div>
        </div>

        {/* Elegant Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-70 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <section
        className="py-20 bg-gradient-to-b from-blue-50/50 via-white to-yellow-50/30"
        style={{
          backgroundImage: `
    url('/image/main-logo.png'),
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)
  `,
          // contain for SVG
          backgroundSize: "",
          backgroundPosition: "right top, 0 0, 100% 100%", // ✅ Horizontally centered, TOP aligned
          backgroundRepeat: "no-repeat, repeat, repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:gap-12">
            {/* Horizontal Tabs - Recognition Cards */}
            <div className="w-full order-1 ">
              <div ref={sidebarRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {recognitionsData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleRecognitionClick(item)}
                    className={`
                        group relative w-full p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-lg flex flex-col items-center text-center h-full
                         ${selectedRecognition === item.id
                        ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200/50 scale-[1.02]"
                        : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 bg-white"
                      }
                  `}
                  >
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden shadow-md ring-1 ring-gray-200/50 group-hover:ring-blue-300/70 transition-all bg-white group-hover:shadow-lg">
                        {item.imgSrc && !item.imgSrc.includes("placeholder") ? (
                          <img
                            src={item.imgSrc}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                            <span className="text-white font-bold text-lg md:text-xl">
                              {item.title.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-xs md:text-sm text-slate-900 group-hover:text-blue-700 leading-tight">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    {selectedRecognition === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-blue-600/5 rounded-xl" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div ref={contentRef} className="w-full order-2">
              {/* Selected Recognition Details */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm  mb-8 hover:shadow-md transition-shadow border-l-4 border-t-4 border-blue-500">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-4 leading-tight text-center">
                  {selectedRecognitionData?.title}
                </h3>
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-4 lg:p-6 rounded-xl border-l-4 border-blue-500 mb-6">
                  <p className="text-base lg:text-lg text-slate-700 leading-relaxed text-center">
                    {selectedDescription}
                  </p>
                </div>

                {/* Image Display */}
                {selectedRecognitionData?.imgSrc && !selectedRecognitionData.imgSrc.includes("placeholder") && (
                  <div className="mb-6">
                    <div className="relative group">
                      <img
                        src={selectedRecognitionData.imgSrc}
                        alt={selectedRecognitionData.title}
                        className="w-full max-w-md mx-auto h-48 object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 bg-white p-4"
                      />
                    </div>
                  </div>
                )}

                {/* PDF Download Button */}
                {selectedRecognitionData?.pdfSrc && (
                  <div className="flex justify-center">
                    <a
                      href={selectedRecognitionData.pdfSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Final CTA (YELLOW + BLUE + WHITE) */}
          <div className="max-w-7xl mx-auto px-4 mt-20">
            <div className="bg-brand-blue rounded-3xl p-10 md:p-16 relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-novaBold text-white mb-6">
                  Institutional Excellence
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Our supreme standing in technical and professional education is validated by India's most prestigious statutory bodies.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2 text-white/80">
                    <ShieldCheck className="w-5 h-5 text-brand-yellow" />
                    <span>UGC Recognized</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Star className="w-5 h-5 text-brand-yellow" />
                    <span>NAAC A++</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Award className="w-5 h-5 text-brand-yellow" />
                    <span>NBA Accredited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecognitionApprovals;
