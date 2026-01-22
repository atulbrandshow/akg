"use client";

import { useState, useRef, useEffect } from "react";
import { CheckSquare } from "lucide-react";
import {
  programFeatures,
  recruitmentPartners,
  sectionData,
} from "@/Json/OverviewData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Header from "@/Components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

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
      // Section 3 animations removed as layout changed to slider

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
        custom={true}
        bgUrl="/image/about/over-view.webp"
        height="!py-14 sm:!py-20 xl:!py-24"
      />

      {/* Section 1 - Modern & Simple Redesign */}
      <section
        ref={section1Ref}
        className="relative w-full py-16"
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-brand-blue bg-BG5 bg-cover bg-center opacity-10"></div>

        {/* Dark Overlay for contrast */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 border-brand-blue">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Side (Optional visual anchor or just gradient sidebar) */}
              <div className="hidden lg:block lg:col-span-1 bg-brand-blue relative overflow-hidden">
                {/* Rich Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue to-blue-900"></div>

                {/* Spotlight / Glow Effect */}
                <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/10 to-transparent"></div>

                {/* Content: Vertical Layout (Logo + Text) */}
                <div className="absolute inset-0 flex flex-col items-center justify-start gap-4">


                  <div className="text-white font-slick text-4xl tracking-widest leading-relaxed flex flex-col items-center  opacity-80 select-none">
                    <span>A</span>
                    <span>K</span>
                    <span>G</span>
                  </div>
                  <div className="text-white font-slick text-3xl tracking-widest leading-relaxed flex flex-col items-center  opacity-80 select-none">
                    <span>U</span>
                    <span>N</span>
                    <span>I</span>
                    <span>V</span>
                    <span>E</span>
                    <span>R</span>
                    <span>S</span>
                    <span>I</span>
                    <span>T</span>
                    <span>Y</span>
                  </div>
                </div>

                {/* Decorative Accent Line */}
                <div className="absolute top-0 right-0 w-1 h-full bg-white/10 backdrop-blur-sm"></div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-11 p-8 sm:p-12 lg:p-10">
                <div className="max-w-5xl">
                  <h1 className="text-4xl sm:text-5xl font-novaBold tracking-tight mb-8">
                    <span className="text-brand-blue">
                      About AKG University
                    </span>
                  </h1>

                  <div className="space-y-6 text-lg sm:text-xl text-gray-800 leading-relaxed font-novaReg text-justify">
                    <div className="flex gap-4 items-start">
                      <CheckSquare className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                      <p>
                        <span className="font-semibold text-brand-blue">AKG University</span> is a centre of academic excellence and innovation, proudly built on the strong foundation and laurels of <span className="font-semibold text-brand-blue">Ajay Kumar Garg Engineering College (AKGEC)</span>, which brings over three decades of rich history in technical education and academic distinction. The enduring AKGEC legacy of discipline, quality education, and consistent outcomes continues to shape the university's vision and values.
                      </p>
                    </div>

                    <div className="flex gap-4 items-start">
                      <CheckSquare className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                      <p>
                        Situated on a 40-acre green campus in Ghaziabad, Uttar Pradesh, AKG University offers industry-aligned undergraduate, postgraduate, and doctoral programmes in engineering, technology, and management. The university adopts an interdisciplinary approach to education, emphasizing practical learning and strong collaborations with leading multinational organizations.
                      </p>
                    </div>

                    <div className="flex gap-4 items-start">
                      <CheckSquare className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                      <p>
                        Supported by state-of-the-art laboratories, automated libraries, advanced research facilities, Centres of Excellence, and dedicated skill development centres, AKG University fosters innovation, employability, and entrepreneurship. The campus offers Wi-Fi-enabled hostels, top-tier sports and recreation facilities, and a vibrant student life that nurtures creativity, leadership, and holistic development.
                      </p>
                    </div>

                    <div className="flex gap-4 items-start">
                      <CheckSquare className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                      <p>
                        With a strong commitment to academic excellence, outstanding placements, and measurable outcomes, the university boasts a distinguished record of alumni success and industry recognition. Guided by visionary leadership and an accomplished faculty, AKG University is shaping future-ready technologists, innovators, and responsible global citizens grounded in ethical values and social responsibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Background Section */}
      {/* <section className="bg-[url('/image/building/building5.webp')] bg-no-repeat bg-center bg-cover bg-fixed min-h-[600px]"></section> */}

      {/* Section 3 */}
      <section
        ref={section3Ref}
        className="relative w-full h-[50vh]"
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
        {/* Content Area */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-2  py-10 gap-10">
          <h2 className="text-4xl font-novaBold text-white mb-10 text-center">Our Associations</h2>
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={5}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={3000}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 20 },
                640: { slidesPerView: 3, spaceBetween: 30 },
                768: { slidesPerView: 4, spaceBetween: 40 },
                1024: { slidesPerView: 5, spaceBetween: 50 },
              }}
              className="w-full"
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center shadow-lg mx-auto transition-transform hover:scale-110">
                    <img src={logo} alt={`Logo ${index + 1}`} className="w-24 h-24 object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
