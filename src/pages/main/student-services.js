import Breadcrumb from "@/Components/Breadcrumb";
import StudentServices from "../pagesComp/StudentServices";
import BannerSlider from "@/Components/BannerSlider";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Student Services",
    subHeading: "Promote a Healthy Lifestyle",
    subtitle: "Fostering Physical Fitness and Well-being",
    description:
      "We encourage students to embrace physical fitness by engaging in sports and recreational activities, enhancing overall health.",
    buttonText: "Explore Fitness",
    image: "/image/student-services/main-banner-1.jpg",
  },
  {
    title: "Student Services",
    subHeading: "Experience Exceptional Campus Living",
    subtitle: "A Comfortable and Modern Residence",
    description:
      "At AKGU, we provide state-of-the-art accommodations that prioritize comfort, ensuring a conducive environment for personal growth.",
    buttonText: "Explore Accommodation",
    image: "/image/student-services/main-banner-2.jpg",
  },
  {
    title: "Student Services",
    subHeading: "Celebrate Cultural Diversity",
    subtitle: "Bringing Together a Global Community",
    description:
      "AKGU takes pride in its culturally diverse student body, fostering an inclusive environment for learning and collaboration.",
    buttonText: "Explore Diversity",
    image: "/image/student-services/main-banner-3.jpg",
  },
];

export const Home = ({ data }) => {
  // Refs for GSAP animations
  const containerRef = useRef(null);
  const bannerRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const servicesRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Banner animation
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Breadcrumb animation
      gsap.fromTo(
        breadcrumbRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: breadcrumbRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Services section animation
      gsap.fromTo(
        servicesRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={containerRef} className="relative overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full translate-y-40 -translate-x-40"></div>

        {/* AKG Logo Vector Background */}
        <div className="absolute top-32 right-32 opacity-10">
          <img
            src="/image/akgec-logo.svg"
            alt="AKG Logo"
            className="w-56 h-56 object-contain"
          />
        </div>
        <div className="absolute bottom-32 left-16 opacity-10">
          <img
            src="/image/akgec-logo.svg"
            alt="AKG Logo"
            className="w-48 h-48 object-contain rotate-45"
          />
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-64 left-32 w-5 h-5 bg-secondary rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-96 right-48 w-6 h-6 bg-secondary/70 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-80 right-32 w-4 h-4 bg-secondary/50 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <section className="w-full mx-auto grid grid-cols-12 gap-10 max-sm:gap-0 relative z-10">
          <div className="col-span-12 max-xl:col-span-12 max-lg:col-span-12">
            <div ref={bannerRef}>
              <BannerSlider slides={slides} />
            </div>

            <section
              ref={breadcrumbRef}
              className="max-w-[1400px] mx-auto px-5 max-sm:px-2 py-8 relative"
            >
              {/* Enhanced Breadcrumb Container */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 relative overflow-hidden">
                {/* Breadcrumb Background Pattern */}
                <div className="absolute top-2 right-2 w-12 h-12 opacity-5">
                  <img
                    src="/image/akgec-logo.svg"
                    alt="AKG Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-secondary/20 rounded-full"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary/20 rounded-full"></div>
                
                {/* <div className="relative z-10">
                  {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
                </div> */}
              </div>
            </section>

            <div ref={servicesRef} className="relative">
              {/* Services Background Elements */}
              <div className="absolute top-10 left-10 w-24 h-24 bg-secondary/5 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full"></div>

              {/* AKG Logo Vector Background */}
              <div className="absolute top-20 right-20 opacity-10">
                <img
                  src="/image/akgec-logo.svg"
                  alt="AKG Logo"
                  className="w-32 h-32 object-contain rotate-12"
                />
              </div>

              <StudentServices />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
