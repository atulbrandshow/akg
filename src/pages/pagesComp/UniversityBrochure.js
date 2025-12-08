"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, ChevronDown, ChevronUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const brochures = [
  {
    title: "Brochure 2020-21",
    link: "#",
  },
  {
    title: "Brochure 2019-20",
    link: "#",
  },
  {
    title: "Brochure 2018-19",
    link: "#",
  },
  {
    title: "Brochure 2017-18",
    link: "#",
  },
  {
    title: "Brochure 2016-17",
    link: "#",
  },
];

const UniversityBrochure = () => {
  const [openIndices, setOpenIndices] = useState([0]);
  const headerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        listRef.current.querySelectorAll(".brochure-item"),
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const toggleBrochure = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices((prev) => prev.filter((i) => i !== index));
    } else {
      setOpenIndices((prev) => [...prev, index]);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/30 via-white to-yellow-50/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/image/akgec-logo.svg"
          alt=""
          className="absolute top-20 right-10 w-96 h-96 object-contain"
        />
        <img
          src="/image/akgec-logo.svg"
          alt=""
          className="absolute bottom-20 left-10 w-80 h-80 object-contain"
        />
      </div>
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <h2
          ref={headerRef}
          className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center uppercase"
        >
          University Brochure
        </h2>
        <ul ref={listRef} className="list-none w-full max-w-4xl mx-auto">
          {brochures.map((brochure, index) => (
            <li key={index} className="brochure-item mb-6">
              <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/40 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-primary group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <a
                    onClick={() => toggleBrochure(index)}
                    className="flex justify-between items-center w-full px-6 py-5 cursor-pointer"
                  >
                    <span
                      className={`font-bold text-lg transition-colors ${
                        openIndices.includes(index)
                          ? "text-primary"
                          : "text-gray-800 group-hover:text-primary"
                      }`}
                    >
                      {brochure.title}
                    </span>
                    {openIndices.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
                    )}
                  </a>
                  {openIndices.includes(index) && (
                    <div className="px-6 pb-5 bg-white/10 rounded-b-2xl">
                      <a
                        href={brochure.link}
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-lg hover:brightness-110 transition-all duration-300"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Download {brochure.title}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UniversityBrochure;
