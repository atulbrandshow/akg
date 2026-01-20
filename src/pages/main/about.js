"use client";

import { useState, useRef, useEffect } from "react";
import {
  programFeatures,
  recruitmentPartners,
  sectionData,
} from "@/Json/OverviewData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Header from "@/Components/Header";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const partnersRef = useRef(null);
  const section3Ref = useRef(null);
  const section1Ref = useRef(null);

  const logos = Array.from(
    { length: 10 },
    (_, i) => `/image/company-logos/logo${i + 1}.jpg`
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section 3 animations
      gsap.fromTo(
        section3Ref.current.querySelector(".left-column"),
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section3Ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        section3Ref.current.querySelector(".right-column"),
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section3Ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate logos emerging from AKG logo center
      const companyLogos = gsap.utils.toArray(".company-logo");

      companyLogos.forEach((logo, i) => {
        const angle = (i / logos.length) * 2 * Math.PI;
        const radius = 240;
        const targetX = radius * Math.cos(angle);
        const targetY = radius * Math.sin(angle);

        gsap.fromTo(
          logo,
          { x: 0, y: 0, scale: 0, opacity: 0, rotation: 360 },
          {
            x: targetX,
            y: targetY,
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            delay: i * 0.12,
            ease: "elastic.out(1, 0.6)",
            scrollTrigger: {
              trigger: section3Ref.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Partners section animations - with toggle actions
      gsap.fromTo(
        partnersRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        partnersRef.current.querySelector("h2"),
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        partnersRef.current.querySelector("p"),
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        partnersRef.current.querySelectorAll("li"),
        {
          x: (i) =>
            Math.floor(i / 5) % 3 === 0
              ? -200
              : Math.floor(i / 5) % 3 === 1
                ? 200
                : -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      // gsap.fromTo(
      //   partnersRef.current.querySelector("a"),
      //   { y: 100, opacity: 0 },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 0.8,
      //     delay: 0.5,
      //     scrollTrigger: {
      //       trigger: partnersRef.current,
      //       start: "top 80%",
      //       toggleActions: "play none none reverse",
      //     },
      //   }
      // );
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="about-page-container">
      <Header
        title={"Overview"}
        gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
        bgKey="BG-Building-2"
        height="!py-14 sm:!py-20 xl:!py-24"
      />

      {/* Section 1 - Modern & Simple Redesign */}
      <section
        ref={section1Ref}
        className="relative w-full py-16"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/building/building2.webp')",
          }}
        ></div>

        {/* Dark Overlay for contrast */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 border-brand-blue">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Side (Optional visual anchor or just gradient sidebar) */}
              <div className="hidden lg:block lg:col-span-1 bg-brand-blue inset-0"></div>

              {/* Content Side */}
              <div className="lg:col-span-11 p-8 sm:p-12 lg:p-10">
                <div className="max-w-5xl">
                  <h1 className="text-4xl sm:text-5xl font-novaBold tracking-tight mb-8">
                    <span className="text-brand-blue">
                      About AKG University
                    </span>
                  </h1>

                  <div className="space-y-6 text-lg sm:text-xl text-gray-800 leading-relaxed font-novaReg text-justify">
                    <p>
                      <span className="font-semibold text-brand-blue">AKG University</span> is a centre of academic excellence and innovation, proudly built on the strong foundation and laurels of <span className="font-semibold text-brand-blue">Ajay Kumar Garg Engineering College (AKGEC)</span>, which brings over three decades of rich history in technical education and academic distinction. The enduring AKGEC legacy of discipline, quality education, and consistent outcomes continues to shape the university's vision and values.
                    </p>

                    <p>
                      Situated on a 40-acre green campus in Ghaziabad, Uttar Pradesh, AKG University offers industry-aligned undergraduate, postgraduate, and doctoral programmes in engineering, technology, and management. The university adopts an interdisciplinary approach to education, emphasizing practical learning and strong collaborations with leading multinational organizations.
                    </p>

                    <p>
                      Supported by state-of-the-art laboratories, automated libraries, advanced research facilities, Centres of Excellence, and dedicated skill development centres, AKG University fosters innovation, employability, and entrepreneurship. The campus offers Wi-Fi-enabled hostels, top-tier sports and recreation facilities, and a vibrant student life that nurtures creativity, leadership, and holistic development.
                    </p>

                    <p>
                      With a strong commitment to academic excellence, outstanding placements, and measurable outcomes, the university boasts a distinguished record of alumni success and industry recognition. Guided by visionary leadership and an accomplished faculty, AKG University is shaping future-ready technologists, innovators, and responsible global citizens grounded in ethical values and social responsibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Background Section */}
      <section className="bg-[url('/image/building/building5.webp')] bg-no-repeat bg-center bg-cover bg-fixed min-h-[600px]"></section>

      {/* Section 3 */}
      <section
        ref={section3Ref}
        className="relative w-full min-h-screen"
        style={{ overflow: "hidden" }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/building/building4.webp')",
          }}
        ></div>

        {/* Overlay with Opacity */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content Area */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between w-full min-h-screen px-6 lg:px-20 py-10 gap-10">
          {/* Left Box - Logos */}
          {/* LEFT SIDE — ROTATION AREA */}
          <div className="left-column w-full lg:w-[50%] flex flex-col items-center justify-center">
            {/* Animation Container */}
            <div className="hidden lg:flex relative items-center justify-center h-[600px] w-[600px]">
              {/* Center Logo */}
              <div
                className="absolute bg-white rounded-full flex items-center justify-center shadow-xl overflow-hidden"
                style={{ width: "160px", height: "160px", zIndex: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                <img
                  src="/image/AKG_LOGO.PNG"
                  className="w-36 h-36 object-contain relative z-10"
                />
              </div>

              {/* Company Logos */}
              <div className="absolute inset-0 flex items-center justify-center">
                {logos?.map((logo, index) => (
                  <div
                    key={index}
                    className="company-logo absolute bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer"
                    style={{ width: "110px", height: "110px" }}
                  >
                    <img src={logo} className="w-20 h-20 object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Layout (Visible on Smaller Screens) */}
            <div className="grid mt-10 grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:hidden">
              {logos?.map((logo, index) => (
                <div
                  key={index}
                  className="w-24 h-24 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="w-16 h-16 sm:w-14 sm:h-14 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — TEXT BOX */}
          {/* <div className="right-column w-full lg:w-[35%] bg-white shadow-lg rounded-lg p-6 text-center">
            <h1 className="text-3xl font-semibold mb-4">AKG University</h1>
            <p className="text-gray-600 mb-5">
              Ajay Kumar Garg University (AKGU) is recognized and actively
              participates as a member of various professional associations.
            </p>
          </div> */}
        </div>
      </section>

      {/* Last Section - Top Hiring Partners */}
      <section ref={partnersRef} className="relative w-full py-20 bg-[#f9fafb] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-4xl max-sm:text-2xl font-semibold mb-4 leading-tight text-black">
            Top Hiring Partners
          </h2>

          {/* Description */}
          <p className="text-lg max-sm:text-xs leading-6 mb-8 text-gray-700">
            Institutional Alliances with Leading Companies to Foster Strong
            Industry Connections and More
          </p>

          {/* Images List */}
          <div className="mt-6">
            <ul className="flex flex-wrap justify-center gap-8 max-sm:gap-6">
              {recruitmentPartners?.map((image, index) => (
                <li
                  key={index}
                  className="w-1/5 max-md:w-1/4 max-sm:w-1/3 px-6 py-4 text-center flex items-center"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="mx-auto"
                    style={{ width: image.width }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
