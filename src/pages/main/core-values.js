"use client";

import Header from "@/Components/Header";
import CoreValue from "../pagesComp/CoreValue";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Home = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const bgElements = bgRef.current.querySelectorAll('.bg-animate');
    const pulseElements = bgRef.current.querySelectorAll('.pulse-animate');
    const scaleElements = bgRef.current.querySelectorAll('.scale-animate');

    // Initial setup
    gsap.set(bgElements, {
      opacity: 0.3,
      scale: 0.8
    });

    // Continuous rotation
    gsap.to(bgElements, {
      rotation: 360,
      duration: 25,
      ease: "none",
      repeat: -1
    });

    // Floating motion
    gsap.to(bgElements, {
      y: "random(-30, 30)",
      x: "random(-20, 20)",
      duration: "random(4, 8)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.3
    });

    // Pulse animation
    gsap.to(pulseElements, {
      scale: "random(0.5, 1.2)",
      opacity: "random(0.2, 0.6)",
      duration: "random(2, 4)",
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    });

    // Scale animation
    gsap.to(scaleElements, {
      scaleX: "random(0.8, 1.3)",
      scaleY: "random(0.8, 1.3)",
      duration: "random(3, 6)",
      ease: "elastic.inOut(1, 0.3)",
      repeat: -1,
      yoyo: true,
      stagger: 0.4
    });
  }, []);

  return (
    <>
      <div ref={bgRef} className="bg-gray-100 relative min-h-screen">
        {/* Full Screen Animated Grid Pattern Background */}
        <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {/* Blue Squares */}
          <div className="bg-animate absolute top-20 left-32 w-16 h-16 border-3 border-blue-500 opacity-30 rotate-12"></div>
          <div className="bg-animate absolute top-40 right-40 w-12 h-12 border-3 border-blue-600 opacity-25 rotate-45"></div>
          <div className="bg-animate absolute bottom-60 left-24 w-20 h-20 border-3 border-blue-400 opacity-35 -rotate-12"></div>
          <div className="bg-animate absolute top-1/3 left-1/4 w-8 h-8 border-2 border-blue-300 opacity-40 rotate-30"></div>

          {/* Yellow Diamonds */}
          <div className="bg-animate absolute top-32 right-24 w-14 h-14 border-3 border-yellow-500 opacity-30 rotate-45"></div>
          <div className="bg-animate absolute bottom-40 right-48 w-18 h-18 border-3 border-yellow-600 opacity-25 rotate-45"></div>
          <div className="bg-animate absolute top-2/3 left-16 w-10 h-10 border-2 border-yellow-400 opacity-35 rotate-45"></div>
          <div className="bg-animate absolute top-1/4 right-1/3 w-6 h-6 border-2 border-yellow-300 opacity-45 rotate-45"></div>

          {/* Blue & Yellow Circles */}
          <div className="bg-animate absolute top-24 left-1/2 w-24 h-24 border-3 border-blue-300 rounded-full opacity-20"></div>
          <div className="bg-animate absolute bottom-32 left-2/3 w-16 h-16 border-2 border-yellow-300 rounded-full opacity-30"></div>
          <div className="bg-animate absolute top-1/2 right-32 w-12 h-12 border-2 border-blue-500 rounded-full opacity-35"></div>
          <div className="bg-animate absolute bottom-20 left-1/3 w-20 h-20 border-3 border-yellow-500 rounded-full opacity-25"></div>
          <div className="bg-animate absolute top-16 right-1/4 w-8 h-8 border-2 border-blue-400 rounded-full opacity-40"></div>
          <div className="bg-animate absolute bottom-1/4 right-16 w-14 h-14 border-2 border-yellow-400 rounded-full opacity-30"></div>

          {/* Pulse Elements */}
          <div className="pulse-animate absolute top-1/4 left-1/2 w-18 h-18 border-2 border-blue-600 opacity-25 rotate-12"></div>
          <div className="pulse-animate absolute bottom-1/3 right-1/4 w-10 h-10 border-2 border-yellow-600 rounded-full opacity-30"></div>
          <div className="pulse-animate absolute top-3/4 left-1/4 w-12 h-12 border-2 border-blue-300 rotate-45 opacity-35"></div>
          <div className="pulse-animate absolute top-1/6 right-1/3 w-6 h-6 border-2 border-yellow-500 rounded-full opacity-40"></div>

          {/* Scale Elements */}
          <div className="scale-animate absolute top-1/3 right-1/6 w-16 h-16 border-2 border-blue-400 rotate-30 opacity-25"></div>
          <div className="scale-animate absolute bottom-1/6 left-1/6 w-14 h-14 border-2 border-yellow-400 rotate-45 opacity-30"></div>
          <div className="scale-animate absolute top-5/6 right-1/2 w-8 h-8 border-2 border-blue-500 rounded-full opacity-35"></div>
          <div className="scale-animate absolute bottom-1/2 left-3/4 w-10 h-10 border-2 border-yellow-300 rotate-60 opacity-40"></div>

          {/* Additional Triangles */}
          <div className="bg-animate absolute top-1/5 left-1/5 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-blue-400 opacity-30"></div>
          <div className="pulse-animate absolute bottom-1/5 right-1/5 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-yellow-500 opacity-35"></div>
          <div className="scale-animate absolute top-2/3 left-3/4 w-0 h-0 border-l-10 border-r-10 border-b-14 border-l-transparent border-r-transparent border-b-blue-500 opacity-25"></div>

          {/* Floating Dots */}
          <div className="bg-animate absolute top-10 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-20"></div>
          <div className="pulse-animate absolute top-20 right-20 w-6 h-6 bg-yellow-400 opacity-25"></div>
          <div className="scale-animate absolute bottom-10 left-20 w-5 h-5 bg-blue-400 rotate-45 opacity-30"></div>
          <div className="bg-animate absolute bottom-20 right-10 w-3 h-3 bg-yellow-300 rounded-full opacity-35"></div>
          <div className="pulse-animate absolute top-1/2 left-10 w-7 h-7 bg-blue-500 opacity-20"></div>
          <div className="scale-animate absolute top-10 right-1/2 w-4 h-4 bg-yellow-500 rotate-30 opacity-25"></div>
        </div>

        <Header
          title={"Core Values"}
          bgKey="BG-Building-5"
          gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"}
        />
        <section className="w-full max-w-[1400px] max-2xl:max-w-7xl max-xl:max-w-6xl mx-auto py-20 max-sm:py-10 px-5 max-sm:px-2 relative z-10">
          <CoreValue />
        </section>
      </div>
    </>
  );
};

export default Home;
