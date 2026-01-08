import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const sliderData = [
  {
    image: "/image/SkillFoundationImage/skill-foundation1.jpeg",
    title: "Hon'ble Prime Minister Visits ASF Stall at MCF",
    description: "AKGEC Skills Foundation (ASF) showcased its innovative skills development models during the Hon'ble Prime Minister's visit to MCF.",
  },
  {
    image: "/image/SkillFoundationImage/skill-foundation2.jpeg",
    title: "Industry-Grade Automation Lab Empowering Practical Skill Development",
    description: "Our state-of-the-art automation labs provide students with hands-on experience using industry-standard equipment.",
  },
  {
    image: "/image/SkillFoundationImage/skill-foundation3.png",
    title: "Experiential Learning with Industrial Robots",
    description: "Students gain practical knowledge by working directly with industrial robots, preparing them for the future of manufacturing.",
  },
  {
    image: "/image/SkillFoundationImage/skill-foundation4.jpeg",
    title: "Live Automotive Learning Through Full-Scale Vehicle Cutaway Model",
    description: "A full-scale vehicle cutaway model allows students to explore the intricate details of automotive engineering in real-time.",
  },
  {
    image: "/image/SkillFoundationImage/skill-foundation5.png",
    title: "Bridging Mechanics, Electronics & Automation, Mechatronics Lab Experience",
    description: "Our mechatronics lab bridges the gap between mechanics and electronics, fostering a holistic understanding of automated systems.",
  },
];

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRefs = useRef([]);
  const imageRefs = useRef([]);
  const overlayRefs = useRef([]);
  const contentRefs = useRef([]);

  const changeSlide = (newIndex) => {
    if (isAnimating || newIndex === currentIndex) return;
    
    setIsAnimating(true);
    const oldIndex = currentIndex;

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      }
    });

    // Animate out current slide
    tl.to(overlayRefs.current[oldIndex], {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.in',
    })
    .to(contentRefs.current[oldIndex], {
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: 'power2.in',
    }, 0)
    .to(slideRefs.current[oldIndex], {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut',
    }, 0.2);

    // Animate in new slide
    tl.set(slideRefs.current[newIndex], { opacity: 1, zIndex: 10 })
    .fromTo(imageRefs.current[newIndex],
      { scale: 1.15 },
      {
        scale: 1,
        duration: 1.4,
        ease: 'power2.out',
      }, 0.4)
    .fromTo(overlayRefs.current[newIndex],
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, 0.5)
    .fromTo(contentRefs.current[newIndex],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, 0.7);
  };

  const nextSlide = () => {
    changeSlide((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide((currentIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Initial entrance animation
    const tl = gsap.timeline();
    
    tl.fromTo(imageRefs.current[0],
      { scale: 1.2 },
      {
        scale: 1,
        duration: 1.8,
        ease: 'power3.out',
      })
    .fromTo(contentRefs.current[0],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }, 0.8);

    // Auto-advance
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5500);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <div className="relative w-full h-full bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={(el) => (slideRefs.current[index] = el)}
          className="absolute inset-0"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 10 : 0,
            pointerEvents: index === currentIndex ? 'auto' : 'none',
          }}
        >
          {/* Image */}
          <img
            ref={(el) => (imageRefs.current[index] = el)}
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Transition Overlay */}
          <div
            ref={(el) => (overlayRefs.current[index] = el)}
            className="absolute inset-0 bg-black opacity-0"
          />
          
          {/* Content */}
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12"
          >
            <div className="max-w-3xl">
              <div className="inline-block mb-4 px-4 py-1.5 bg-yellow-400 rounded-full">
                <span className="text-xs md:text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Featured
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-white mb-3 leading-tight">
                {slide.title}
              </h3>
              
              <p className="text-base md:text-lg lg:text-lg text-gray-200 leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Progress Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            disabled={isAnimating}
            className="relative group disabled:cursor-not-allowed"
            aria-label={`Slide ${index + 1}`}
          >
            <div className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'w-10 bg-yellow-400 shadow-lg shadow-yellow-400/50'
                : 'w-1.5 bg-white/50 group-hover:bg-white/80 group-hover:w-6'
            }`} />
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-5 md:top-6 right-5 md:right-6 z-20 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
        <span className="text-sm md:text-base font-bold text-white">
          {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

export function SkillsFoundation() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentLeftRef = useRef(null);
  const sliderRightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Content left animation
      gsap.fromTo(
        contentLeftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentLeftRef.current,
            start: 'top 70%',
          },
        }
      );

      // Slider right animation
      gsap.fromTo(
        sliderRightRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sliderRightRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-[1500px] mx-auto px-5 md:px-12 lg:px-20 py-20 md:py-28">
        {/* Header Section */}
        <div ref={headerRef} className="mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400" />
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">Overview</span>
          </div>
          
          <h1 className="text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-bold leading-[1.05] mb-0">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700">
              AKGU Skills Foundation
            </span>
            <span className="block text-gray-900 mt-2">(ASF)</span>
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:gap-20 items-start">
          {/* Left Content */}
          <div ref={contentLeftRef}>
            <div className="space-y-7">
              <p className="text-[17px] md:text-[19px] lg:text-[21px] leading-[1.75] text-gray-700">
                <span className="font-semibold text-gray-900">AKGEC Skills Foundation</span>, an ISO <strong>9001:2015</strong>, ISO <strong>14001:2015</strong>, and ISO <strong>45001:2018</strong> certified and <span className="font-semibold text-blue-600">NABL accredited facility</span>, is a joint initiative of <span className="font-semibold text-gray-900">Ajay Kumar Garg Engineering College (AKGEC)</span> and the <span className="font-semibold text-gray-900">National Skill Development Corporation (NSDC)</span>.
              </p>
              
              <p className="text-[17px] md:text-[19px] lg:text-[21px] leading-[1.75] text-gray-700">
                ASF offers courses at par with global didactic concepts, in line with the <span className="font-semibold text-blue-600">National Occupational Standards (NOS)</span> and <span className="font-semibold text-blue-600">Qualification Packs (QPs)</span>, to offer Skill Certificates in various industry sectors.
              </p>
              
              <p className="text-[17px] md:text-[19px] lg:text-[21px] leading-[1.75] text-gray-700">
                ASF has state-of-the-art training, prototyping, testing and measurement facilities in the field of <span className="font-semibold text-blue-600">automation, robotics, drones, embedded systems & IoT</span>, all end manufacturing including <span className="font-semibold text-blue-600">welding, thermoplasma cutting, destructive & nondestructive testing, CNC machining, 3D printing etc</span>. These facilities are coordinated with active support from eminent industry partners to meet the demand of highly skilled manpower.
              </p>
            </div>
          </div>

          {/* Right Slider */}
          <div ref={sliderRightRef} className="lg:sticky lg:top-20">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-yellow-400/30 to-blue-600/30 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Slider Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
                <div className="h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                  <ImageSlider slides={sliderData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsFoundation;
