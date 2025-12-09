"use client";

import ScholarshipHighlight from "@/Components/ScholarshipHighlight";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollTrigger);

const Admissions = ({ onApplyNow }) => {
  const router = useRouter();
  const [showUndergraduateCourses, setShowUndergraduateCourses] = useState(false);
  const [showPostgraduateCourses, setShowPostgraduateCourses] = useState(false);
  const [showDoctoralCourses, setShowDoctoralCourses] = useState(false);

  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const infoCardsRef = useRef(null);
  const scholarshipRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        heroRef.current.querySelector(".hero-title"),
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        heroRef.current.querySelector(".hero-content"),
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Program cards animation
      const programCards = cardsRef.current.querySelectorAll(".program-card");
      programCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: i * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Info cards animation
      const infoCards = infoCardsRef.current.querySelectorAll(".info-card");
      infoCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: infoCardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Early Access Grant section animation
      if (scholarshipRef.current) {
        gsap.fromTo(
          scholarshipRef.current,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: scholarshipRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Floating background elements
      gsap.to(".float-element", {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });
    }, [heroRef, cardsRef, infoCardsRef, scholarshipRef]);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Background Layer with AKG Logo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/image/akgec-logo.svg"
          alt=""
          className="absolute top-1/4 right-10 w-96 h-96 opacity-5 float-element"
        />
        <img
          src="/image/akgec-logo.svg"
          alt=""
          className="absolute bottom-20 left-10 w-80 h-80 opacity-5 float-element"
        />
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-[#3c5686] opacity-10 rounded-full blur-3xl float-element"></div>
        <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-[#fecc00] opacity-10 rounded-full blur-3xl float-element"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="py-12 w-full relative z-10">
        <div className="relative flex justify-center px-1 md:px-12 lg:px-24">
          <div className="container max-w-full lg:max-w-[1400px] flex max-xl:flex-col-reverse gap-10">
            <div className="max-w-3xl max-2xl:max-w-xl max-xl:w-full px-2">
              <div className="mb-5 hero-title">
                <h1 className="text-xl font-novaReg mb-3">
                  AKG University
                  <br className="w-auto" />
                  <div className="">
                    <span className="text-5xl max-sm:text-3xl max-sm:py-0.5 py-1 inline-block font-novaReg lg:text-5xl bg-gradient-to-r from-[#3c5686] via-[#4a6ba8] to-[#3c5686] bg-[length:200%_100%] animate-gradient text-white text-center w-fit h-fit px-2.5 shadow-lg">
                      Admissions
                    </span>
                  </div>
                </h1>
                <p className="bg-gradient-to-r from-[#fecc00] to-[#ffd700] max-sm:leading-none max-sm:max-w-52 text-lg font-novaSemi py-1 px-2.5 w-fit mb-4 shadow-md">
                  Apply for Admissions at AKG University
                </p>
              </div>
              <div className="hero-content">
                <p className="pb-4 max-sm:leading-none font-novaReg text-justify text-gray-700">
                  AKG University offers admissions to a comprehensive range of academic programs spanning undergraduate, postgraduate, and doctoral levels, all designed to foster innovation, critical thinking, and career readiness.
                </p>
                <div className="border-l-4 border-[#fecc00] pl-5 max-w-full lg:max-w-[420px] mt-5 bg-gradient-to-r from-blue-50 to-transparent py-3">
                  <p className="mb-4 font-novaReg text-[18px] leading-[24px] italic text-[#3c5686]">
                    Choose the program that interests you and make a wise decision in your life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Cards Section */}
      <section ref={cardsRef} className="w-full pb-16 flex justify-center mt-10 relative z-10">
        <div className="max-w-full lg:max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 max-sm:mx-5 relative">
          {/* Undergraduate Programs */}
          <div className="program-card relative w-full h-[342px] flex flex-col items-center justify-between">
            <div className="group bg-white border-2 border-[#3c5686] rounded-xl shadow-xl w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#3c5686] hover:to-[#2a4a6a] hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fecc00] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <img
                src="/image/admission/admission-icon-cap-black.webp"
                alt="dynamic"
                className="object-cover w-20 max-sm:w-16 max-sm:mb-20 mb-16 transition-opacity duration-300 ease-in-out group-hover:opacity-0 relative z-10"
              />
              <img
                src="/image/admission/admission-icon-cap-white.webp"
                alt="dynamic"
                className="absolute w-20 max-sm:w-16 max-sm:mb-20 mb-16 inset-x-auto inset-y-auto object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10"
              />
              <h2 className="text-xl font-novaBold max-sm:font-novaSemi text-[#3c5686] group-hover:text-white absolute bottom-20 transition-colors duration-300 z-10">
                Undergraduate Programs
              </h2>
              <p className="text-gray-600 max-sm:text-sm font-novaReg text-center group-hover:text-white absolute bottom-6 transition-colors duration-300 z-10">
                Explore our
                <br />
                Undergraduate programs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-evenly mt-4 w-full relative">
              <button
                onClick={() => onApplyNow("undergraduate")}
                className="flex-1 bg-gradient-to-r from-[#3c5686] to-[#4a6ba8] hover:from-[#2a4a6a] hover:to-[#3c5686] uppercase text-sm font-novaSemi w-full sm:w-48 text-center px-4 py-2.5 mb-2 sm:mb-0 sm:mr-2 rounded-md text-white cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Apply Now
              </button>

              <div className="relative flex-1">
                <a
                  href="#"
                  id="undergraduate-program"
                  onMouseEnter={() => setShowUndergraduateCourses(true)}
                  onMouseLeave={() => setShowUndergraduateCourses(false)}
                  className="block bg-white uppercase text-sm font-novaReg border-2 border-[#3c5686] w-full sm:w-48 text-center text-[#3c5686] px-4 py-2 rounded-md hover:bg-[#3c5686] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Our Program
                </a>
                {showUndergraduateCourses && (
                  <div className="absolute bottom-full left-0 w-full min-w-[300px] bg-white border-2 border-[#3c5686] rounded-lg shadow-2xl p-4 z-50 mb-2">
                    <h3 className="text-lg font-novaBold text-[#3c5686] mb-3 border-b-2 border-[#fecc00] pb-2">
                      Undergraduate Courses
                    </h3>
                    <ul className="font-novaReg space-y-2">
                      <li className="hover:text-[#fecc00] transition-colors cursor-pointer">
                        • Bachelor of Technology
                      </li>
                      <li className="hover:text-[#fecc00] transition-colors cursor-pointer">
                        • Bachelor of Business Administration
                      </li>
                      <li className="hover:text-[#fecc00] transition-colors cursor-pointer">
                        • Bachelor of Computer Application
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Postgraduate Programs */}
          <div className="program-card relative w-full h-[342px] flex flex-col items-center justify-between">
            <div className="group bg-white border-2 border-[#3c5686] rounded-xl shadow-xl w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#3c5686] hover:to-[#2a4a6a] hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fecc00] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <img
                src="/image/admission/admission-icon-cap-black.webp"
                alt="dynamic"
                className="object-cover w-20 max-sm:w-16 max-sm:mb-20 mb-16 transition-opacity duration-300 ease-in-out group-hover:opacity-0 relative z-10"
              />
              <img
                src="/image/admission/admission-icon-cap-white.webp"
                alt="dynamic"
                className="absolute w-20 max-sm:w-16 max-sm:mb-20 mb-16 inset-x-auto inset-y-auto object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10"
              />
              <h2 className="text-xl font-novaBold max-sm:font-novaSemi text-[#3c5686] group-hover:text-white absolute bottom-20 transition-colors duration-300 z-10">
                Postgraduate Programs
              </h2>
              <p className="text-gray-600 max-sm:text-sm text-center font-novaReg group-hover:text-white absolute bottom-6 transition-colors duration-300 z-10">
                Explore our
                <br />
                Postgraduate programs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-evenly mt-4 w-full relative">
              <button
                onClick={() => onApplyNow("postgraduate")}
                className="flex-1 bg-gradient-to-r from-[#3c5686] to-[#4a6ba8] hover:from-[#2a4a6a] hover:to-[#3c5686] uppercase text-sm font-novaSemi w-full sm:w-48 text-center px-4 py-2.5 mb-2 sm:mb-0 sm:mr-2 rounded-md text-white cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Apply Now
              </button>
              <div className="relative flex-1">
                <a
                  href="#"
                  id="postgraduate-program"
                  onMouseEnter={() => setShowPostgraduateCourses(true)}
                  onMouseLeave={() => setShowPostgraduateCourses(false)}
                  className="block bg-white border-2 uppercase font-novaReg text-sm border-[#3c5686] w-full sm:w-48 text-center text-[#3c5686] py-2.5 rounded-md hover:bg-[#3c5686] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Our Program
                </a>
                {showPostgraduateCourses && (
                  <div className="absolute bottom-full left-0 w-full min-w-[300px] bg-white border-2 border-[#3c5686] rounded-lg shadow-2xl p-4 z-50 mb-2">
                    <h3 className="text-lg font-novaBold text-[#3c5686] mb-3 border-b-2 border-[#fecc00] pb-2">
                      Postgraduate Courses
                    </h3>
                    <ul className="font-novaReg space-y-2">
                      <li className="hover:text-[#fecc00] transition-colors cursor-pointer">
                        • Master of Business Administration
                      </li>
                      <li className="hover:text-[#fecc00] transition-colors cursor-pointer">
                        • Master of Technology
                      </li>
                      <li className="hover:text-[#fecc00] transition-colors cursor-pointer">
                        • Master of Computer Applications
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Doctoral Programs */}
          <div className="program-card relative w-full h-[342px] flex flex-col items-center justify-between">
            <div className="group bg-white border-2 border-[#3c5686] rounded-xl shadow-xl w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#3c5686] hover:to-[#2a4a6a] hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fecc00] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <img
                src="/image/admission/admission-icon-cap-black.webp"
                alt="dynamic"
                className="object-cover w-20 max-sm:w-16 max-sm:mb-20 mb-16 transition-opacity duration-300 ease-in-out group-hover:opacity-0 relative z-10"
              />
              <img
                src="/image/admission/admission-icon-cap-white.webp"
                alt="dynamic"
                className="absolute w-20 max-sm:w-16 max-sm:mb-20 mb-16 inset-x-auto inset-y-auto object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10"
              />
              <h2 className="text-xl font-novaBold max-sm:font-novaSemi text-[#3c5686] group-hover:text-white absolute bottom-20 transition-colors duration-300 z-10">
                Doctoral Programs
              </h2>
              <p className="text-gray-600 max-sm:text-sm text-center font-novaReg group-hover:text-white absolute bottom-6 transition-colors duration-300 z-10">
                Explore our
                <br />
                Doctoral programs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-evenly mt-4 w-full relative">
              <button
                onClick={() => onApplyNow("doctoral")}
                className="flex-1 bg-gradient-to-r from-[#3c5686] to-[#4a6ba8] hover:from-[#2a4a6a] hover:to-[#3c5686] uppercase text-sm font-novaSemi w-full sm:w-48 text-center px-4 py-2.5 mb-2 sm:mb-0 sm:mr-2 rounded-md text-white cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Apply Now
              </button>
              <div className="relative flex-1">
                <a
                  href="#"
                  id="doctoral-program"
                  onMouseEnter={() => setShowDoctoralCourses(true)}
                  onMouseLeave={() => setShowDoctoralCourses(false)}
                  className="block bg-white border-2 uppercase font-novaReg text-sm border-[#3c5686] w-full sm:w-48 text-center text-[#3c5686] py-2.5 rounded-md hover:bg-[#3c5686] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Our Program
                </a>
                {showDoctoralCourses && (
                  <div className="absolute bottom-full left-0 w-full min-w-[300px] bg-white border-2 border-[#3c5686] rounded-lg shadow-2xl p-4 z-50 mb-2">
                    <h3 className="text-lg font-novaBold text-[#3c5686] mb-3 border-b-2 border-[#fecc00] pb-2">
                      Doctoral Programs
                    </h3>
                    <ul className="font-novaReg space-y-2">
                      <li className="hover:text-[#fecc00] transition-colors cursor-pointer">
                        • Ph.D. in Engineering
                      </li>
                      <li className="hover:text-[#fecc00] transition-colors cursor-pointer">
                        • Ph.D. in Management
                      </li>
                      <li className="hover:text-[#fecc00] transition-colors cursor-pointer">
                        • Ph.D. in Computer Applications
                      </li>
                      <li className="hover:text-[#fecc00] transition-colors cursor-pointer">
                        • Interdisciplinary Research
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={scholarshipRef}>
        <ScholarshipHighlight heading={"Early Access Grant"} desc={"Higher Education Pathway 2025-2026"} />
      </div>

      {/* Info Cards Section */}
      <section ref={infoCardsRef} className="max-w-7xl max-xl:max-w-5xl max-lg:max-w-2xl max-md:max-w-lg mx-auto py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
          <div className="info-card min-h-52 flex flex-col group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:border-[#3c5686]">
            <div className="p-5">
              <h4 className="text-xl sm:text-2xl font-novaReg text-[#3c5686] group-hover:text-[#fecc00] transition-colors duration-300 ease-in-out">
                Education Loan Facility
              </h4>
              <p className="pt-2 max-sm:leading-none text-base font-novaReg line-clamp-2 text-gray-700">
                Get a loan of up to ₹4 lakh without any security. To take advantage of this facility, visit your nearest PNB or Indian Overseas Bank branch today.
              </p>
              <button
                onClick={() => router.push("/admissions/education-loan")}
                className="my-3 w-fit px-5 py-2.5 font-novaReg border-2 border-[#3c5686] rounded-md uppercase text-sm tracking-widest text-[#3c5686] hover:bg-[#3c5686] hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                View More Details
              </button>
            </div>
            <div className="mt-auto">
              <img
                className="w-full h-48 max-sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                src="/image/admission/scholar.webp"
                alt="scholar"
              />
            </div>
          </div>

          <div className="info-card min-h-52 flex flex-col group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:border-[#3c5686]">
            <div className="p-5">
              <h4 className="text-xl sm:text-2xl font-novaReg text-[#3c5686] group-hover:text-[#fecc00] transition-colors duration-300 ease-in-out">
                AKG Advantages
              </h4>
              <p className="pt-2 max-sm:leading-none text-base font-novaReg line-clamp-2 text-gray-700">
                Industry-Institute Interface: Bridging Academics with Transparent Learning and Objective Assessment
              </p>
              <button
                onClick={() => router.push("/about/core-values")}
                className="my-3 w-fit px-5 py-2.5 font-novaReg border-2 border-[#3c5686] rounded-md uppercase text-sm tracking-widest text-[#3c5686] hover:bg-[#3c5686] hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                View More Details
              </button>
            </div>
            <div className="mt-auto">
              <img
                className="w-full h-48 max-sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                src="/image/admission/enlab_4.webp"
                alt="advantages"
              />
            </div>
          </div>

          <div className="info-card min-h-52 flex flex-col group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:border-[#3c5686]">
            <div className="p-5">
              <h4 className="text-xl sm:text-2xl font-novaReg text-[#3c5686] group-hover:text-[#fecc00] transition-colors duration-300 ease-in-out">
                Why AKGU ?
              </h4>
              <p className="pt-2 max-sm:leading-none text-base font-novaReg line-clamp-2 text-gray-700">
                History, Culture, Innovation, Technology, and more—AKG University provides a diverse array of opportunities.
              </p>
              <button
                onClick={() => router.push("/about/vision-and-mission")}
                className="my-3 w-fit px-5 py-2.5 font-novaReg border-2 border-[#3c5686] rounded-md uppercase text-sm tracking-widest text-[#3c5686] hover:bg-[#3c5686] hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                View More Details
              </button>
            </div>
            <div className="mt-auto">
              <img
                className="w-full h-48 max-sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                src="/image/building/building6.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;
