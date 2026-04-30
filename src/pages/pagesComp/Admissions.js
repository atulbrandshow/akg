"use client";

import ScholarshipHighlight from "@/Components/ScholarshipHighlight";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollTrigger);

const COURSE_DATA = {
  undergraduate: [
    {
      shortName: "B.Tech CSE",
      fullName: "B.Tech in Computer Science Engineering",
      eligibility: "10+2 (PCM) / JEE Mains / AKGUEE",
      duration: "4 years",
      url: "/school-of-engineering-and-technology/department-of-computer-science-and-engineering/btech-computer-science-and-engineering",
    },
    {
      shortName: "B.Tech ECE",
      fullName: "B.Tech in Electronics and Communication Engineering",
      eligibility: "10+2 (PCM) / JEE Mains / AKGUEE",
      duration: "4 years",
      url: "/school-of-engineering-and-technology/department-of-computer-science-and-engineering/btech-electronics-and-communication-engineering",
    },
    {
      shortName: "B.Tech EEE",
      fullName: "B.Tech in Electrical & Electronics Engineering",
      eligibility: "10+2 (PCM) / JEE Mains / AKGUEE",
      duration: "4 years",
      url: "/school-of-engineering-and-technology/department-of-computer-science-and-engineering/btech-electrical-electronics-engineering",
    },
    {
      shortName: "B.Tech ME",
      fullName: "B.Tech in Mechanical Engineering",
      eligibility: "10+2 (PCM) / JEE Mains / AKGUEE",
      duration: "4 years",
      url: "/school-of-engineering-and-technology/department-of-computer-science-and-engineering/btech-mechanical-engineering",
    },
    // {
    //   shortName: "B.Tech CE",
    //   fullName: "B.Tech in Civil Engineering",
    //   eligibility: "10+2 (PCM) / JEE Mains / CUET",
    //   duration: "4 years",
    //   url: "/school-of-engineering-and-technology/department-of-computer-science-and-engineering/btech-civil-engineering",
    // },
    {
      shortName: "BCA",
      fullName: "Bachelor of Computer Application",
      eligibility: "50% Marks in 12th and CUTE / AKGUEE",
      duration: "3 years",
      url: "/department-of-computer-science-engineering",
    },
    {
      shortName: "BBA",
      fullName: "Bachelor of Business Administration",
      eligibility: "50% Marks in 12th and CUTE / AKGUEE",
      duration: "3 years",
      url: "/school-of-business-studies",
    },
  ],
  postgraduate: [
    {
      shortName: "M.Tech CSE",
      fullName: "M.Tech in Computer Science Engineering",
      eligibility: "50% Marks in B.Tech / BE or MCA / MSC(CS/IT) and CUTE / GATE / AKGUEE",
      duration: "2 years",
      url: "/school-of-engineering-and-technology/department-of-computer-science-and-engineering/mtech-computer-science-engineering",
    },
    {
      shortName: "M.Tech ECE",
      fullName: "M.Tech in Electronics and Communication Engineering",
      eligibility: "50% Marks in B.Tech / BE or MCA / MSC(CS/IT) and CUTE / GATE / AKGUEE",
      duration: "2 years",
      url: "/school-of-engineering-and-technology/department-of-computer-science-and-engineering/mtech-electronics-and-communication-engineering",
    },
    {
      shortName: "M.Tech EEE",
      fullName: "M.Tech in Electrical & Electronics Engineering",
      eligibility: "50% Marks in B.Tech / BE or MCA / MSC(CS/IT) and CUTE / GATE / AKGUEE",
      duration: "2 years",
      url: "/school-of-engineering-and-technology/department-of-computer-science-and-engineering/mtech-electrical-electronics-engineering",
    },
    {
      shortName: "M.Tech ME",
      fullName: "M.Tech in Mechanical Engineering",
      eligibility: "50% Marks in B.Tech / BE or MCA / MSC(CS/IT) and CUTE / GATE / AKGUEE",
      duration: "2 years",
      url: "/school-of-engineering-and-technology/mtech-in-mechanical-engineering",
    },
    {
      shortName: "MBA",
      fullName: "Master of Business Administration",
      eligibility: "50% Marks in Graduation and MAT / XAT / CMAT / NMAT / GMAT /CUTE / AKGUEE",
      duration: "2 years",
      url: "/school-of-business-studies",
    },
    {
      shortName: "MCA",
      fullName: "Master of Computer Applications",
      eligibility: "50% Marks in Graduation and CUTE / AKGUEE",
      duration: "2 years",
      url: "/department-of-computer-science-engineering",
    },
  ],
  doctorate: [
    {
      shortName: "Ph.D",
      fullName: "Doctor of Philosophy",
      eligibility: "Master's Degree in relevant field",
      duration: "3-5 years",
      url: "/school-of-computer-science-engineering-and-technology/phd-computer-science-and-engineering",
    },
  ],
};

const CourseSection = ({ title, courses }) => {
  const router = useRouter();
  return (
    <div className="course-section mb-20 last:mb-0">
      <div className="section-header mb-10 text-center">
        <h3 className="text-4xl max-sm:text-2xl font-novaReg text-[#3c5686] relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:h-0.5 after:bg-[#fecc00]">
          {title}
        </h3>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ${courses.length === 1 ? 'lg:flex lg:justify-center' : ''}`}>
        {courses.map((course, index) => (
          <div
            key={index}
            className="course-card group bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 border-b-4 border-transparent hover:border-[#fecc00] flex flex-col justify-between"
          >
            <div>
              <h4 className="text-4xl font-novaBold text-[#3c5686] mb-1 group-hover:translate-x-1 transition-transform uppercase">
                {course.shortName}
              </h4>
              <p className="text-[#002147] font-novaSemi text-lg mb-6">
                {course.fullName}
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-novaBold">
                    Eligibility
                  </span>
                  <span className="text-gray-700 font-novaReg">
                    {course.eligibility}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-novaBold">
                    Duration
                  </span>
                  <span className="text-gray-700 font-novaReg">
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => router.push(course.url)}
              className="w-fit px-8 py-3 bg-[#3c5686] text-white font-novaBold rounded-md transform group-hover:scale-105 transition-all duration-300 shadow-md hover:bg-[#2a3f63]"
            >
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

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
      // const programCards = cardsRef.current.querySelectorAll(".program-card");
      // programCards.forEach((card, i) => {
      //   gsap.fromTo(
      //     card,
      //     { y: 100, opacity: 0, scale: 0.8 },
      //     {
      //       y: 0,
      //       opacity: 1,
      //       scale: 1,
      //       duration: 0.8,
      //       delay: i * 0.2,
      //       ease: "back.out(1.7)",
      //       scrollTrigger: {
      //         trigger: cardsRef.current,
      //         start: "top 75%",
      //         toggleActions: "play none none reverse",
      //       },
      //     }
      //   );
      // });

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

      // New Course listing section animation
      const courseSections = document.querySelectorAll(".course-section");
      courseSections.forEach((section) => {
        gsap.fromTo(
          section.querySelector(".section-header"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const cards = section.querySelectorAll(".course-card");
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

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


      {/* Course Listings Section */}
      <section className="w-full py-16 bg-[#f8fafc] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-novaBold text-[#3c5686] mb-4">
              Explore Courses Across Diverse Disciplines
            </h2>
            <div className="w-24 h-1 bg-[#fecc00] mx-auto"></div>
          </div>

          <CourseSection
            title="Under Graduation Programs"
            courses={COURSE_DATA.undergraduate}
          />
          <CourseSection
            title="Post Graduation Programs"
            courses={COURSE_DATA.postgraduate}
          />
          <CourseSection
            title="Doctorate Programs"
            courses={COURSE_DATA.doctorate}
          />
        </div>
      </section>

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
                AKG Scholarship
              </h4>
              <p className="pt-2 max-sm:leading-none text-base font-novaReg line-clamp-2 text-gray-700">
                Industry-Institute Interface: Bridging Academics with Transparent Learning and Objective Assessment
              </p>
              <button
                onClick={() => router.push("/admissions/scholarship")}
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
                Campus Virtual Tour
              </h4>
              <p className="pt-2 max-sm:leading-none text-base font-novaReg line-clamp-2 text-gray-700">
                History, Culture, Innovation, Technology, and more—AKG University provides a diverse array of opportunities.
              </p>
              <button
                onClick={() => router.push("/admissions/campus-virtual-tour")}
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
