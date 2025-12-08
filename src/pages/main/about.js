"use client";

import { useState, useRef, useEffect } from "react";
import { programFeatures, recruitmentPartners, sectionData } from "@/Json/OverviewData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);

    const partnersRef = useRef(null);
    const section3Ref = useRef(null);
    const section1Ref = useRef(null);

    const logos = Array.from({ length: 10 }, (_, i) => `/image/company-logos/logo${i + 1}.jpg`);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section 1 Professional Animations
            const section1 = section1Ref.current;
            const leftCard = section1?.querySelector(".left-card");
            const rightCard = section1?.querySelector(".right-card");
            const floatingElements = section1?.querySelectorAll(".floating-element");
            const gradientOverlays = section1?.querySelectorAll(".gradient-overlay");

            // Initial 3D setup - different rotationY for each card
            gsap.set(leftCard, { opacity: 0, rotationY: 45, z: -200, scale: 0.8 });
            gsap.set(rightCard, { opacity: 0, rotationY: -45, z: -200, scale: 0.8 });
            gsap.set(floatingElements, { opacity: 0, scale: 0 });
            gsap.set(gradientOverlays, { opacity: 0 });

            // Background fade in
            gsap.fromTo(
                section1?.querySelector(".bg-overlay"),
                { opacity: 0 },
                { opacity: 0.6, duration: 1.5, ease: "power2.out" }
            );

            // Gradient overlays animation
            gsap.to(gradientOverlays, {
                opacity: 1,
                duration: 2,
                stagger: 0.3,
                ease: "power2.out",
            });

            // Floating elements animation
            gsap.to(floatingElements, {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                delay: 0.5,
                ease: "back.out(1.7)",
            });

            // Left card entrance - keep rotated
            gsap.to(leftCard, {
                opacity: 1,
                rotationY: 45,
                z: 0,
                scale: 1,
                duration: 1.2,
                delay: 1,
                ease: "power3.out",
            });

            // Right card entrance - keep rotated
            gsap.to(rightCard, {
                opacity: 1,
                rotationY: -45,
                z: 0,
                scale: 1,
                duration: 1.2,
                delay: 1.3,
                ease: "power3.out",
            });

            // Card content animations
            gsap.fromTo(
                leftCard?.querySelectorAll("h1, p, button"),
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    delay: 1.5,
                    ease: "power2.out",
                }
            );

            gsap.fromTo(
                rightCard?.querySelectorAll("h1, p"),
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    delay: 1.8,
                    ease: "power2.out",
                }
            );

            // Initial straightening animation after page load
            gsap.to(leftCard, {
                rotationY: 0,
                duration: 0.8,
                delay: 2.5,
                ease: "power2.out",
            });

            gsap.to(rightCard, {
                rotationY: 0,
                duration: 0.8,
                delay: 2.5,
                ease: "power2.out",
            });

            // ScrollTrigger to control card rotation based on active section
            ScrollTrigger.create({
                trigger: section1,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: () => {
                    gsap.to(leftCard, { rotationY: 0, duration: 0.8, ease: "power2.out" });
                    gsap.to(rightCard, { rotationY: 0, duration: 0.8, ease: "power2.out" });
                },
                onLeave: () => {
                    gsap.to(leftCard, { rotationY: 45, duration: 0.8, ease: "power2.out" });
                    gsap.to(rightCard, { rotationY: -45, duration: 0.8, ease: "power2.out" });
                },
                onEnterBack: () => {
                    gsap.to(leftCard, { rotationY: 0, duration: 0.8, ease: "power2.out" });
                    gsap.to(rightCard, { rotationY: 0, duration: 0.8, ease: "power2.out" });
                },
                onLeaveBack: () => {
                    gsap.to(leftCard, { rotationY: 45, duration: 0.8, ease: "power2.out" });
                    gsap.to(rightCard, { rotationY: -45, duration: 0.8, ease: "power2.out" });
                },
            });

            // Subtle hover effects for cards
            leftCard?.addEventListener("mouseenter", () => {
                gsap.to(leftCard, {
                    scale: 1.02,
                    y: -10,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });

            leftCard?.addEventListener("mouseleave", () => {
                gsap.to(leftCard, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });

            rightCard?.addEventListener("mouseenter", () => {
                gsap.to(rightCard, {
                    scale: 1.02,
                    y: -10,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });

            rightCard?.addEventListener("mouseleave", () => {
                gsap.to(rightCard, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });

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

            // Continuous rotation for surrounding logos
            gsap.to(".rotating-logos", {
                rotation: 360,
                transformOrigin: "50% 50%",
                duration: 20,
                repeat: -1,
                ease: "none",
            });

            // Counter-rotate company logos to keep them upright
            gsap.to(".company-logo", {
                rotation: -360,
                duration: 20,
                repeat: -1,
                ease: "none",
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
                    x: (i) => (Math.floor(i / 5) % 3 === 0 ? -200 : Math.floor(i / 5) % 3 === 1 ? 200 : -200),
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
            gsap.fromTo(
                partnersRef.current.querySelector("a"),
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: partnersRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);
    return (
        <div className="about-page-container">
            {/* Section 1 */}
            <section ref={section1Ref} className="relative w-full h-full overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/image/building/building2.webp')",
                    }}
                ></div>

                {/* Overlay with Opacity */}
                <div className="bg-overlay absolute inset-0 bg-black"></div>

                {/* Subtle Floating Elements */}
                {/* <div className="floating-element absolute top-10 left-10 w-2 h-2 bg-white/20 z-50 text-black text-4xl rounded-full">hii</div>
        <div className="floating-element absolute top-1/4 right-20 w-1 h-1 bg-green-500/30 rounded-full"></div>
        <div className="floating-element absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-500/25 rounded-full"></div>
        <div className="floating-element absolute top-3/4 right-1/3 w-1 h-1 bg-red-500/20 rounded-full"></div> */}

                {/* Gradient Overlays */}
                <div className="gradient-overlay absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
                <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

                {/* Content Container */}
                <div
                    className="pt-24 pb-5 sm:pt-32 sm:pb-10 lg:pt-52 lg:pb-16 relative max-w-7xl mx-auto flex items-center justify-between max-sm:justify-center h-full px-4 max-sm:px-0 max-lg:items-end max-xl:items-end gap-10"
                    style={{ perspective: "1000px" }}
                >
                    <div
                        className="left-card relative bg-white/95 backdrop-blur-sm shadow-2xl rounded-lg w-[90%] max-w-md h-[600px] flex flex-col items-center justify-center px-10 max-sm:px-6 border border-white/20 overflow-hidden cursor-pointer"
                        style={{ fontFamily: "Arial, sans-serif", transformStyle: "preserve-3d" }}
                    >
                        {/* Card Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full animate-shimmer"></div>
                        {/* Heading */}
                        <h1 className="text-3xl max-sm:text-2xl font-novaSemi uppercase tracking-wide text-center mb-4">
                            Top University <span className="text-green-500">for Students</span>
                        </h1>

                        {/* Description */}
                        <p
                            className="text-gray-500 text-base sm:text-lg mb-6 text-center"
                            style={{ fontFamily: "font-novareg" }}
                        >
                            AKG University stands as a dynamic hub of innovation and academic excellence, building on
                            the distinguished legacy of Ajay Kumar Garg Engineering College. Spread across a sprawling
                            40-acre campus in Ghaziabad, Uttar Pradesh, the university offers cutting-edge
                            undergraduate, postgraduate, and doctoral programs in engineering, technology, and
                            management, supported by state-of-the-art laboratories, automated libraries, and high-tech
                            research centers.
                        </p>

                        {/* Button */}
                        <button className="bg-gradient-to-r from-[#d91f23] to-[#b91c1c] hover:from-blue-600 hover:to-blue-700 text-white font-bold text-sm py-3 px-8 rounded-full focus:outline-none shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                            READ MORE
                        </button>
                    </div>

                    {/* About AKG University Box */}
                    <div
                        className="right-card relative bg-white/95 backdrop-blur-sm shadow-2xl rounded-lg w-[90%] max-w-md h-[600px] p-8 flex flex-col items-center justify-center text-center max-lg:hidden border border-white/20 overflow-hidden"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Card Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-0 hover:opacity-20 transition duration-500"></div>
                        <h1 className="text-4xl lg:text-3xl sm:text-2xl font-normal tracking-wide mb-6">
                            About AKG University
                        </h1>
                        <p className="text-gray-500 text-lg font-novaReg">
                            AKG University is dedicated to nurturing future-ready leaders through an interdisciplinary
                            approach, practical learning, and strong industry collaborations with top multinational
                            organizations. The campus features Wi-Fi-enabled hostels, top-tier sports and recreation
                            facilities, and a vibrant student life that fosters creativity and holistic development.
                            <br />
                            With a commitment to outstanding placements and academic results, AKG University boasts a
                            remarkable record of alumni success and industry recognition, while fostering ethical values
                            and social responsibility. Guided by visionary leadership and an accomplished faculty, the
                            university is shaping technologists, innovators, and responsible citizens for global impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* Fixed Background Section */}
            <section className="bg-[url('/image/building/building5.webp')] bg-no-repeat bg-center bg-cover bg-fixed min-h-[600px]"></section>

            {/* Section 3 */}
            <section ref={section3Ref} className="relative w-full min-h-screen" style={{ overflow: "hidden" }}>
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
                        {/* Rotation Container */}
                        <div className="hidden lg:flex relative items-center justify-center h-[600px] w-[600px]">
                            {/* Center Logo — NOT ROTATING */}
                            <div
                                className="absolute bg-white rounded-full flex items-center justify-center"
                                style={{ width: "160px", height: "160px", zIndex: 20 }}
                            >
                                <img src="/image/AKG_LOGO.PNG" className="w-36 h-36 object-contain" />
                            </div>

                            {/* WRAPPER WHICH ROTATES */}
                            <div className="rotating-logos absolute inset-0 flex items-center justify-center">
                                {logos?.map((logo, index) => {
                                    const angle = (index / logos.length) * 2 * Math.PI;
                                    const radius = 240;
                                    const x = radius * Math.cos(angle);
                                    const y = radius * Math.sin(angle);

                                    return (
                                        <div
                                            key={index}
                                            className="company-logo absolute bg-white rounded-full shadow-lg flex items-center justify-center"
                                            style={{
                                                width: "110px",
                                                height: "110px",
                                                transform: `translate(${x}px, ${y}px)`,
                                            }}
                                        >
                                            <img src={logo} className="w-20 h-20 object-contain" />
                                        </div>
                                    );
                                })}
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
                    <div className="right-column w-full lg:w-[35%] bg-white shadow-lg rounded-lg p-6 text-center">
                        <h1 className="text-3xl font-semibold mb-4">AKG University</h1>
                        <p className="text-gray-600 mb-5">
                            Ajay Kumar Garg University (AKGU) is recognized and actively participates as a member of
                            various professional associations.
                        </p>

                        <button className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition">
                            READ MORE
                        </button>
                    </div>
                </div>
            </section>

            {/* Last Section - Top Hiring Partners */}
            <section ref={partnersRef} className="relative w-full py-20 bg-[#f9fafb]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Heading */}
                    <h2 className="text-4xl max-sm:text-2xl font-semibold mb-4 leading-tight text-black">
                        Top Hiring Partners
                    </h2>

                    {/* Description */}
                    <p className="text-lg max-sm:text-xs leading-6 mb-8 text-gray-700">
                        Institutional Alliances with Leading Companies to Foster Strong Industry Connections and More
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

                    {/* View All Button */}
                    <a
                        href="#"
                        className="bg-red-500 text-white font-bold text-sm uppercase tracking-wider py-3 px-8 max-sm:text-xs rounded-lg inline-block mt-8 transition duration-200 ease-in-out hover:bg-sky-500"
                    >
                        View All
                    </a>
                </div>
            </section>
        </div>
    );
}
