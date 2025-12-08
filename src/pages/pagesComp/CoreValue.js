"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CoreValue = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation on scroll
      gsap.fromTo(titleRef.current, 
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 20%",
            toggleActions: "play none none reverse",
            markers: false
          }
        }
      );

      gsap.fromTo(descRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(cardsRef.current,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Section hover animation for title
      const handleSectionMouseEnter = () => {
        gsap.to(titleRef.current, {
          scale: 1.1,
          y: -5,
          duration: 0.5,
          ease: "back.out(1.7)"
        });
      };

      const handleSectionMouseLeave = () => {
        gsap.to(titleRef.current, {
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      };

      containerRef.current.addEventListener('mouseenter', handleSectionMouseEnter);
      containerRef.current.addEventListener('mouseleave', handleSectionMouseLeave);

      // Hover animations for each card
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const img = card.querySelector('img');
          const title = card.querySelector('h4');
          const content = card.querySelector('ul');

          const handleMouseEnter = () => {
            gsap.to(card, {
              scale: 1.05,
              y: -10,
              duration: 0.4,
              ease: "power2.out"
            });
            gsap.to(img, {
              scale: 1.1,
              rotation: 5,
              duration: 0.4,
              ease: "power2.out"
            });
            gsap.to(title, {
              scale: 1.1,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(content, {
              x: 10,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out"
            });
            gsap.to(img, {
              scale: 1,
              rotation: 0,
              duration: 0.4,
              ease: "power2.out"
            });
            gsap.to(title, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(content, {
              x: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-100 py-20 overflow-hidden">
      {/* Layer 1: Enhanced Base Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/20 via-transparent to-blue-50/20"></div>
      </div>
      
      {/* Layer 2: SVG Wave Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-64 opacity-[0.15]">
          <svg viewBox="0 0 1200 300" className="w-full h-full">
            <path d="M0,100 C300,50 600,150 900,80 C1050,40 1150,120 1200,100 L1200,0 L0,0 Z" fill="url(#gradient1)" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3C5686" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="absolute bottom-0 right-0 w-full h-48 opacity-[0.12]">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <path d="M1200,100 C900,150 600,50 300,120 C150,160 50,80 0,100 L0,200 L1200,200 Z" fill="url(#gradient2)" />
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3C5686" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Layer 3: Logo Watermarks */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 opacity-[0.20] rotate-12">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="absolute bottom-24 left-16 w-24 h-24 opacity-[0.18] -rotate-6">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="absolute top-1/4 left-8 w-20 h-20 opacity-[0.15] rotate-45">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.08]">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      
      {/* Layer 4: Geometric Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-radial from-primary/15 via-primary/8 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-secondary/18 via-secondary/10 to-transparent rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full"></div>
      </div>
      
      {/* Layer 5: Subtle Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            Core Values
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p ref={descRef} className="text-lg text-gray-600 max-w-2xl mx-auto">
            The Core Values of the University are as follows:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-sm:gap-2">
          <div ref={el => cardsRef.current[0] = el} className="bg-HumanDignity bg-[#3b210c] text-white p-10 max-sm:p-2 flex items-center gap-5 bg-center bg-cover bg-blend-overlay min-h-52 max-sm:min-h-48 cursor-pointer transition-shadow duration-300 hover:shadow-2xl">
            <img
              src="/image/core-value/carrer-icon-1.webp"
              alt="excellence-icon"
              className="align-middle overflow-clip mr-4 max-sm:w-16"
            />
            <div>
              <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">
                Excellence
              </h4>
              <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                <li>
                  Unwavering commitment to quality in teaching, research, and
                  campus life.
                </li>
              </ul>
            </div>
          </div>

          <div ref={el => cardsRef.current[1] = el} className="bg-[#6a7414] text-white p-10 max-sm:p-2 flex items-center gap-5 min-h-52 max-sm:min-h-48 cursor-pointer transition-shadow duration-300 hover:shadow-2xl">
            <img
              src="/image/core-value/carrer-icon-2.webp"
              alt="integrity-icon"
              className="align-middle overflow-clip mr-4 max-sm:w-16"
            />
            <div>
              <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">
                Integrity
              </h4>
              <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                <li>Transparency, ethics, and fairness in all dealings.</li>
              </ul>
            </div>
          </div>

          <div ref={el => cardsRef.current[2] = el} className="bg-[#c75622] text-white p-10 max-sm:p-2 flex items-center gap-5 min-h-52 max-sm:min-h-48 cursor-pointer transition-shadow duration-300 hover:shadow-2xl">
            <img
              src="/image/core-value/carrer-icon-3.webp"
              alt="inclusivity-icon"
              className="align-middle overflow-clip mr-4 max-sm:w-16"
            />
            <div>
              <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">
                Inclusivity
              </h4>
              <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                <li>
                  Cultivate a diverse, welcoming environment for students and
                  staff.
                </li>
              </ul>
            </div>
          </div>

          <div ref={el => cardsRef.current[3] = el} className="bg-Giving bg-[#251470] text-white p-10 max-sm:p-2 bg-center bg-cover bg-blend-overlay flex items-center gap-5 min-h-52 max-sm:min-h-48 cursor-pointer transition-shadow duration-300 hover:shadow-2xl">
            <img
              src="/image/core-value/carrer-icon-4.webp"
              alt="innovation-icon"
              className="align-middle overflow-clip mr-4 max-sm:w-16"
            />
            <div>
              <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">
                Innovation
              </h4>
              <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                <li>
                  Encourage creative thinking, discovery, and continuous
                  improvement.
                </li>
              </ul>
            </div>
          </div>

          <div ref={el => cardsRef.current[4] = el} className="bg-IndustryFocus bg-[#0b4d4d] text-white p-10 max-sm:p-2 bg-center bg-cover bg-blend-overlay flex items-center gap-5 min-h-52 max-sm:min-h-48 cursor-pointer transition-shadow duration-300 hover:shadow-2xl">
            <img
              src="/image/core-value/carrer-icon-5.webp"
              alt="industry-icon"
              className="align-middle overflow-clip mr-4 max-sm:w-16"
            />
            <div>
              <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">
                Industry Focus
              </h4>
              <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                <li>
                  Active collaboration with business, healthcare, legal, and
                  technology partners.
                </li>
              </ul>
            </div>
          </div>

          <div ref={el => cardsRef.current[5] = el} className="bg-[#5e2a84] text-white p-10 max-sm:p-2 flex items-center gap-5 min-h-52 max-sm:min-h-48 cursor-pointer transition-shadow duration-300 hover:shadow-2xl">
            <img
              src="/image/core-value/carrer-icon-6.webp"
              alt="social-responsibility-icon"
              className="align-middle overflow-clip mr-4 max-sm:w-16"
            />
            <div>
              <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">
                Social Responsibility
              </h4>
              <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                <li>Dedication to community service and development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValue;