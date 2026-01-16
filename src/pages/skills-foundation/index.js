import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import SkillsVisionMission from "../pagesComp/SkillsVisionMission";
import IndustryPartners from "../pagesComp/IndustryPartners";
import SkillsMoUs from "../pagesComp/SkillsMoUs";
import Testimonial from "../pagesComp/Testimonial";
import OurRecentEndeavors from "../pagesComp/OurRecentEndeavors";
import ProudMoment from "../pagesComp/ProudMoment";
import Consultancy from "../pagesComp/Consultancy";
import ResearchIndustrial from "../pagesComp/ResearchIndustrial";
import { ChevronLeft, ChevronRight, Handshake, GraduationCap, ArrowRight, Beaker, Cpu, Settings, Zap, Globe, Building2, Users, ExternalLink, Trophy, Star, Award, Target, Rocket, Quote, TrendingUp, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SideBarLink = [
  { name: "Overview", link: "/skills-foundation#overview" },
  { name: "Vision & Mission", link: "/skills-foundation#vision-mission" },
  { name: "Industry Partners", link: "/skills-foundation#industry-partners" },
  { name: "MoUs", link: "/skills-foundation#mous" },
  { name: "Testimonial", link: "/skills-foundation#testimonial" },
  { name: "Consultancy", link: "/skills-foundation#consultancy" },
  { name: "Major Projects", link: "/skills-foundation#major-projects" },
  { name: "Proud Moments", link: "/skills-foundation#proud-moments" },
  { name: "Centres of Excellence", link: "/skills-foundation#centres-of-excellence" },
  { name: "Industry Oriented Research", link: "/skills-foundation#industry-oriented-research" },
];

// Data
const sliderData = [
  { image: "/image/SkillFoundationImage/skill-foundation1.jpeg", title: "Hon'ble Prime Minister Visits ASF Stall at MCF", description: "AKGEC Skills Foundation (ASF) showcased its innovative skills development models during the Hon'ble Prime Minister's visit to MCF." },
  { image: "/image/SkillFoundationImage/skill-foundation2.jpeg", title: "Industry-Grade Automation Lab Empowering Practical Skill Development", description: "Our state-of-the-art automation labs provide students with hands-on experience using industry-standard equipment." },
  { image: "/image/SkillFoundationImage/skill-foundation3.png", title: "Experiential Learning with Industrial Robots", description: "Students gain practical knowledge by working directly with industrial robots, preparing them for the future of manufacturing." },
  { image: "/image/SkillFoundationImage/skill-foundation4.jpeg", title: "Live Automotive Learning Through Full-Scale Vehicle Cutaway Model", description: "A full-scale vehicle cutaway model allows students to explore the intricate details of automotive engineering in real-time." },
  { image: "/image/SkillFoundationImage/skill-foundation5.png", title: "Bridging Mechanics, Electronics & Automation, Mechatronics Lab Experience", description: "Our mechatronics lab bridges the gap between mechanics and electronics, fostering a holistic understanding of automated systems." },
];

const coes = [
  { title: "KUKA Industrial Robotics Training Centre", icon: <Cpu size={24} />, color: "from-blue-600 to-cyan-500" },
  { title: "FRONIUS Advance Welding Technology & Research Centre", icon: <Zap size={24} />, color: "from-orange-600 to-yellow-500" },
  { title: "SIEMENS Advance Manufacturing Centre", icon: <Settings size={24} />, color: "from-indigo-600 to-purple-500" },
  { title: "NI LabVIEW Academy", icon: <Beaker size={24} />, color: "from-green-600 to-emerald-500" },
  { title: "BOSCH Rexroth Centre of Competence in Automation Technologies", icon: <Settings size={24} />, color: "from-red-600 to-rose-500" },
  { title: "AIA Centre for Integrated Automation", icon: <Cpu size={24} />, color: "from-indigo-900 to-blue-800" },
  { title: "SIEMENS PLM Centre of Excellence", icon: <Settings size={24} />, color: "from-sky-600 to-blue-500" },
  { title: "MITSUBISHI Authorised Training Centre", icon: <Zap size={24} />, color: "from-red-700 to-orange-600" },
  { title: "FAB LAB Centre of Digital Manufacturing", icon: <Cpu size={24} />, color: "from-slate-700 to-slate-500" },
  { title: "BOSCH Joint Certification Centre", icon: <Settings size={24} />, color: "from-red-500 to-pink-500" },
  { title: "ZEISS Calibration & Testing Centre", icon: <Beaker size={24} />, color: "from-blue-800 to-indigo-700" },
  { title: "SIEMENS Centre of Excellence in Automation", icon: <Settings size={24} />, color: "from-cyan-600 to-blue-600" },
  { title: "JANATICS Industrial Pneumatic Knowledge Centre", icon: <Zap size={24} />, color: "from-blue-500 to-sky-400" },
  { title: "DGCA Certified Remote Pilot Training Drone Academy", icon: <Cpu size={24} />, color: "from-indigo-800 to-purple-800" },
];

const projects = [
  { 
    title: "Technology Transfer for RAKSHITA Bike Ambulance for DRDO", 
    description: "AKGEC delivered end-to-end engineering support for DRDO's RAKSHITA bike ambulance, featuring a modular Casualty Evacuation Seat (CES) for rapid deployment. Developed by the Institute of Nuclear Medicine and Allied Sciences (INMAS), a premier DRDO laboratory in Delhi. This innovation enables swift first aid and evacuation in difficult terrains. The solution benefits military, paramilitary, and potential civilian emergency response where conventional ambulances cannot operate.",
    image: "/image/major-project-images/image1.jpg"
  },
  { 
    title: "3D Scanning and Scaled Printing of Combat Vehicle for Indian Air Force", 
    description: "A detailed 3D scanning and 1:10 scale fabrication of the OSA-AK-M combat vehicle was executed by AKGEC for the 7 Base Repair Depot, Indian Air Force. The project enabled accurate digital reconstruction and physical model manufacturing for technical study and display purposes. This initiative highlights advanced defence prototyping capability and collaborative innovation between academia and the armed forces.",
    image: "/image/major-project-images/image2.png"
  },
  { 
    title: "Cycle Time Optimization through Robotic Integration for Micromatic Grinding", 
    description: "AKGEC successfully integrated robotic automation with CNC systems at Micromatic Grinding, significantly enhancing operational efficiency. This innovation reduced the process time from 163 seconds to just 52 seconds, showcasing a remarkable improvement in productivity. The project exemplifies industry–academia collaboration for smart manufacturing and automation excellence.",
    image: "/image/major-project-images/image3.jpg"
  },
  { 
    title: "Vision-Based Inspection System for Ghaziabad Precision Products", 
    description: "AKGEC designed and deployed a customized machine vision inspection system for Rocker Arm assemblies at Ghaziabad Precision Products (GPP). Built using LabVIEW, the solution enhances quality assurance through precise defect detection and automated inspection. This initiative demonstrates advanced industrial automation capability and supports improved manufacturing reliability.",
    image: "/image/major-project-images/image4.jpg"
  },
  { 
    title: "3D Printed Prototype of Humsafar Coach for Indian Railways", 
    description: "A precision-engineered 3D printed model of the newly designed Humsafar Coach, developed by Modern Coach Factory, Raebareli. This prototype visually communicates key design features and structural enhancements of the coach. The model was proudly showcased and presented to the Honorable Railway Minister of India, symbolizing innovation and advancement in passenger coach development.",
    image: "/image/major-project-images/image5.jpg"
  },
  { 
    title: "Rapid Prototype of Pressure Regulating System for Air Liquide India", 
    description: "A detailed working model of the Pressure Regulating System, Bulk Storage Installation, and Air Liquide Healthcare setup was developed to demonstrate Cryogenic Liquid Oxygen installations in industries and hospitals. Executed for Air Liquide India, the project visually represented critical safety and process features. Remarkably, the complete prototype was delivered in a record time of just 10 days, reflecting technical agility and execution excellence.",
    image: "/image/major-project-images/image6.jpg"
  },
  { 
    title: "Innovative Orthopedic Screw Developed via Metal 3D Printing", 
    description: "AKGEC engineered an advanced orthopedic screw featuring a variable thread pitch and a lightweight internal lattice structure. Manufactured using the Metallic SLM 280 3D printer, the design enhances strength while reducing material usage. This breakthrough showcases the potential of metal additive manufacturing in next-generation biomedical implants.",
    image: "/image/major-project-images/image7.png"
  },
  { 
    title: "Lightweight Ergonomic Surgical Handle Designed for AIIMS New Delhi", 
    description: "AKGEC developed a customized surgical handle featuring improved ergonomics and reduced weight to enhance surgeon comfort and precision. Fabricated using Selective Laser Melting (SLM) metal 3D printing technology, the product reflects advanced biomedical engineering capability. The solution was designed and produced for AIIMS New Delhi, supporting healthcare innovation through additive manufacturing.",
    image: "/image/major-project-images/image8.png"
  },
  { 
    title: "Consistent Tender Participation and Delivery for Indian Railways", 
    description: "With a strong presence on the Indian Railways E-Procurement System (IREPS), we have participated in over 300 tenders and successfully delivered more than 40 job work orders. Our projects span multiple Railway divisions, including North Western, Eastern, and Southern Railways. This achievement reflects our reliability, capability, and sustained execution excellence in railway sector engagements.",
    image: "/image/major-project-images/image9.jpg"
  }
];

// Components
function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRefs = useRef([]);
  const imageRefs = useRef([]);
  const contentRefs = useRef([]);

  const changeSlide = (newIndex) => {
    if (isAnimating || newIndex === currentIndex) return;
    setIsAnimating(true);
    const oldIndex = currentIndex;
    const tl = gsap.timeline({ onComplete: () => { setCurrentIndex(newIndex); setIsAnimating(false); } });
    tl.to(contentRefs.current[oldIndex], { opacity: 0, y: 20, duration: 0.4, ease: 'power2.in' })
      .to(slideRefs.current[oldIndex], { opacity: 0, duration: 0.6, ease: 'power2.inOut' }, "-=0.2");
    tl.set(slideRefs.current[newIndex], { opacity: 1, zIndex: 10 })
      .fromTo(imageRefs.current[newIndex], { scale: 1.2 }, { scale: 1, duration: 1.5, ease: 'power2.out' }, 0.2)
      .fromTo(contentRefs.current[newIndex], { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.6);
  };

  const nextSlide = () => changeSlide((currentIndex + 1) % slides.length);
  const prevSlide = () => changeSlide((currentIndex - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl group/slider">
      {slides.map((slide, index) => (
        <div key={index} ref={(el) => (slideRefs.current[index] = el)} className="absolute inset-0" style={{ opacity: index === currentIndex ? 1 : 0, zIndex: index === currentIndex ? 10 : 0, pointerEvents: index === currentIndex ? 'auto' : 'none' }}>
          <img ref={(el) => (imageRefs.current[index] = el)} src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div ref={(el) => (contentRefs.current[index] = el)} className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{slide.title}</h3>
              <p className="text-base text-gray-200 leading-relaxed line-clamp-3">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-6 z-30 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button onClick={prevSlide} disabled={isAnimating} className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 rounded-full transition-all duration-300 pointer-events-auto"><ChevronLeft className="w-6 h-6 text-white" /></button>
        <button onClick={nextSlide} disabled={isAnimating} className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 rounded-full transition-all duration-300 pointer-events-auto"><ChevronRight className="w-6 h-6 text-white" /></button>
      </div>
      <div className="absolute bottom-8 right-8 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button key={index} onClick={() => changeSlide(index)} className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/50 hover:bg-white'}`} />
        ))}
      </div>
    </div>
  );
}

// Animated Section Blobs
function SectionBlob1() {
  const blobRef = useRef(null);
  useEffect(() => {
    if (blobRef.current) gsap.to(blobRef.current, { x: "20%", y: "15%", duration: 18, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, []);
  return <div ref={blobRef} className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />;
}

function SectionBlob2() {
  const blobRef = useRef(null);
  useEffect(() => {
    if (blobRef.current) gsap.to(blobRef.current, { x: "-15%", y: "20%", duration: 22, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, []);
  return <div ref={blobRef} className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-yellow-400/18 rounded-full blur-3xl pointer-events-none" />;
}

function SectionBlob3() {
  const blobRef = useRef(null);
  useEffect(() => {
    if (blobRef.current) gsap.to(blobRef.current, { x: "25%", y: "-10%", duration: 20, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, []);
  return <div ref={blobRef} className="absolute top-20 right-20 w-[520px] h-[520px] bg-blue-500/12 rounded-full blur-3xl pointer-events-none" />;
}

function SectionBlob4() {
  const blobRef = useRef(null);
  useEffect(() => {
    if (blobRef.current) gsap.to(blobRef.current, { x: "-20%", y: "-15%", duration: 19, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, []);
  return <div ref={blobRef} className="absolute top-10 left-10 w-[580px] h-[580px] bg-yellow-500/16 rounded-full blur-3xl pointer-events-none" />;
}

function SectionBlob5() {
  const blobRef = useRef(null);
  useEffect(() => {
    if (blobRef.current) gsap.to(blobRef.current, { x: "18%", y: "22%", duration: 21, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, []);
  return <div ref={blobRef} className="absolute bottom-20 right-20 w-[480px] h-[480px] bg-blue-400/14 rounded-full blur-3xl pointer-events-none" />;
}

function SectionBlob6() {
  const blobRef = useRef(null);
  useEffect(() => {
    if (blobRef.current) gsap.to(blobRef.current, { x: "-22%", y: "18%", duration: 23, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, []);
  return <div ref={blobRef} className="absolute top-10 left-10 w-[540px] h-[540px] bg-yellow-400/13 rounded-full blur-3xl pointer-events-none" />;
}

function SectionBlob7() {
  const blobRef = useRef(null);
  useEffect(() => {
    if (blobRef.current) gsap.to(blobRef.current, { x: "15%", y: "-18%", duration: 20, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, []);
  return <div ref={blobRef} className="absolute bottom-10 right-1/3 w-[560px] h-[560px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />;
}

function SkillsFoundationComp() {
  const sectionRef = useRef(null);
  const overviewRef = useRef(null);
  const sliderRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(overviewRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } });
      gsap.fromTo(sliderRef.current, { opacity: 0, scale: 0.95, x: 50 }, { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } });
      shapesRef.current.forEach((shape, i) => {
        if (!shape) return;
        const isParticle = shape.classList.contains('particle');
        const isGeometric = i >= 4 && i <= 7;
        gsap.to(shape, { 
          y: isParticle ? "random(-250, 250)" : isGeometric ? "random(-30, 30)" : "random(-80, 80)", 
          x: isParticle ? "random(-200, 200)" : isGeometric ? "random(-40, 40)" : "random(-60, 60)", 
          rotation: isParticle ? "random(-180, 180)" : isGeometric ? "random(-15, 15)" : "random(-10, 10)", 
          opacity: isParticle ? "random(0.15, 0.5)" : isGeometric ? "random(0.1, 0.3)" : "random(0.08, 0.2)", 
          scale: isGeometric ? "random(0.9, 1.1)" : 1,
          duration: isParticle ? "random(12, 22)" : isGeometric ? "random(8, 15)" : "random(18, 28)", 
          repeat: -1, 
          yoyo: true, 
          ease: "sine.inOut", 
          delay: i * 0.15 
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden py-20">
      {/* Animated Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div ref={el => shapesRef.current[0] = el} className="absolute top-[8%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-blue-500/8 to-indigo-500/5 rounded-full blur-3xl" />
        <div ref={el => shapesRef.current[1] = el} className="absolute bottom-[8%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tl from-blue-400/8 to-cyan-400/5 rounded-full blur-3xl" />
        <div ref={el => shapesRef.current[2] = el} className="absolute top-[42%] right-[3%] w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/6 to-blue-400/4 rounded-full blur-2xl" />
        <div ref={el => shapesRef.current[3] = el} className="absolute bottom-[32%] left-[5%] w-[350px] h-[350px] bg-gradient-to-tr from-blue-300/6 to-indigo-300/4 rounded-full blur-2xl" />
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div ref={el => shapesRef.current[4] = el} className="absolute top-[16%] right-[10%] w-40 h-40 border border-blue-300/15 rounded-3xl rotate-12" />
        <div ref={el => shapesRef.current[5] = el} className="absolute bottom-[26%] left-[4%] w-32 h-32 border border-indigo-300/15 rounded-full" />
        <div ref={el => shapesRef.current[6] = el} className="absolute top-[58%] left-[16%] w-24 h-24 bg-blue-200/8 rounded-2xl -rotate-12" />
        <div ref={el => shapesRef.current[7] = el} className="absolute top-[28%] right-[20%] w-28 h-28 border border-blue-300/15 rotate-45" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} ref={el => shapesRef.current[i + 8] = el} className={`particle absolute rounded-full ${
            i % 4 === 0 ? 'w-2 h-2 bg-blue-400/20' : 
            i % 4 === 1 ? 'w-2.5 h-2.5 border border-blue-300/20' : 
            i % 4 === 2 ? 'w-1.5 h-1.5 bg-indigo-400/20' : 
            'w-2 h-2 border border-indigo-300/15'
          }`} style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} />
        ))}
      </div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={overviewRef} className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4">
                <span className="h-[2px] w-12 bg-blue-600" />
                <span className="text-sm font-black tracking-widest text-blue-600 uppercase">Foundation Overview</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">AKGU Skills <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Foundation</span></h1>
              <p className="text-xl text-slate-500 font-bold uppercase tracking-wider">Ajay Kumar Garg Skills Foundation (ASF)</p>
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-white/40 backdrop-blur-sm rounded-3xl space-y-6">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium"><span className="text-slate-900 font-black">AKGEC Skills Foundation</span> is an ISO <strong>9001:2015</strong>, <strong>14001:2015</strong>, and <strong>45001:2018</strong> certified and <span className="text-blue-600 font-bold">NABL accredited</span> facility. It is a prestigious joint initiative of <strong>AKGEC</strong> and the <strong>NSDC</strong>.</p>
                <p className="text-lg text-slate-600 leading-relaxed">ASF offers courses aligned with global didactic concepts and <strong>National Occupational Standards (NOS)</strong>, providing recognized Skill Certificates across various industry sectors.</p>
                <p className="text-lg text-slate-600 leading-relaxed">With state-of-the-art facilities in <strong>automation, robotics, drones, and IoT</strong>, ASF coordinates with industry partners to meet the growing demand for highly skilled professionals in advanced manufacturing and technology.</p>
              </div>
            </div>
          </div>
          <div ref={sliderRef} className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-xl mx-auto w-full">
            <div className="absolute inset-0 bg-blue-600/5 rounded-[2.5rem] -rotate-3 scale-105" />
            <div className="absolute inset-0 bg-indigo-600/5 rounded-[2.5rem] rotate-2 scale-105" />
            <ImageSlider slides={sliderData} />
          </div>
        </div>
      </div>
    </section>
  );
}

export const Home = () => {
  const bgRef = useRef(null);
  const gridRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.to(gridRef.current, { backgroundPosition: '100px 100px', duration: 20, repeat: -1, yoyo: true, ease: 'none' });
      }
      gsap.to(blob1Ref.current, { x: "30%", y: "20%", duration: 20, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(blob2Ref.current, { x: "-25%", y: "-25%", duration: 25, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, bgRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={bgRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background Layers */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />
        
        {/* Animated Grid */}
        <div ref={gridRef} className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`, backgroundSize: '50px 50px', backgroundPosition: '0 0' }} />
        
        {/* Animated Blobs */}
        <div ref={blob1Ref} className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-400/8 rounded-full blur-[120px]" />
        <div ref={blob2Ref} className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-yellow-400/6 rounded-full blur-[130px]" />
      </div>

      <Header title={"Skills Foundation"} bg="/image/lab/User-Manual-AKGEC 5.webp" gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
      
      <div className="relative w-full mx-auto py-8">
        <div className="space-y-0">
          
          <div id="overview" className="scroll-mt-32">
            <div className="overflow-hidden">
              <SkillsFoundationComp />
            </div>
          </div>

          {/* Vision Mission - Blue with side panel */}
          <div id="vision-mission" className="scroll-mt-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-white pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/15 via-blue-400/8 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-full bg-blue-500/5 pointer-events-none" />
            <SectionBlob1 />
            <div className="relative md:py-16 px-4 md:px-8 max-w-[1440px] mx-auto">
              <SkillsVisionMission />
            </div>
          </div>

          {/* Industry Research - Yellow with side panel */}
          <div id="industry-oriented-research" className="scroll-mt-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-white pointer-events-none" />
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-yellow-500/15 via-yellow-400/8 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-64 h-full bg-yellow-500/5 pointer-events-none" />
            <SectionBlob2 />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `repeating-linear-gradient(45deg, #eab308 0, #eab308 1px, transparent 1px, transparent 100px)` }} />
            <div className="relative py-8 md:py-12 px-4 md:px-8 max-w-[1440px] mx-auto">
              <IndustryOrientedResearch />
            </div>
          </div>

          {/* Industry Partners - Blue with side panel */}
          <div id="industry-partners" className="scroll-mt-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-white pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/15 via-blue-500/8 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-72 h-full bg-blue-600/5 pointer-events-none" />
            <SectionBlob3 />
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)`, backgroundSize: '60px 60px' }} />
            <div className="relative py-12 md:py-16 px-4 md:px-8 max-w-[1440px] mx-auto">
              <IndustryPartners />
            </div>
          </div>

          {/* Major Projects - Yellow with side panel */}
          <div id="major-projects" className="scroll-mt-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-white pointer-events-none" />
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-yellow-600/15 via-yellow-500/8 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-72 h-full bg-yellow-600/5 pointer-events-none" />
            <SectionBlob4 />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `linear-gradient(#eab308 1px, transparent 1px), linear-gradient(90deg, #eab308 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
            <div className="relative py-12 md:py-16 px-4 md:px-8 max-w-[1440px] mx-auto">
              <MajorProjectsContent />
            </div>
          </div>

          {/* Proud Moments - Blue with side panel */}
          <div id="proud-moments" className="scroll-mt-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-white pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/15 via-blue-400/8 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-full bg-blue-500/5 pointer-events-none" />
            <SectionBlob5 />
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: `repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 50px, #3b82f6 50px, #3b82f6 51px)` }} />
            <div className="relative py-12 md:py-16 max-w-[1440px] mx-auto">
              <ProudMoment />
            </div>
          </div>

          {/* MoUs - Yellow with side panel */}
          <div id="mous" className="scroll-mt-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-white pointer-events-none" />
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-yellow-500/15 via-yellow-400/8 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-64 h-full bg-yellow-500/5 pointer-events-none" />
            <SectionBlob6 />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `repeating-linear-gradient(-45deg, #eab308 0, #eab308 1px, transparent 1px, transparent 100px)` }} />
            <div className="relative py-12 md:py-16 max-w-[1440px] mx-auto">
              <SkillsMoUs />
            </div>
          </div>

          {/* Testimonial - Blue with side panel */}
          <div id="testimonial" className="scroll-mt-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-white pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/15 via-blue-500/8 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-72 h-full bg-blue-600/5 pointer-events-none" />
            <SectionBlob7 />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
            <div className="relative py-12 md:py-16 max-w-[1440px]">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MajorProjectsContent = () => {
  const projectsRef = useRef([]);

  useEffect(() => {
    projectsRef.current.forEach((project, i) => {
      if (!project) return;
      gsap.fromTo(project,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <div className="">
      <h2 className="text-3xl font-novaBold text-indigo-950 mb-12">Major Projects @ ASF</h2>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <div 
            key={index} 
            ref={el => projectsRef.current[index] = el}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}
          >
            <div className="w-full md:w-1/3 aspect-video bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl overflow-hidden flex-shrink-0 relative group">
              {project.image ? (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm italic">Project Image {index + 1}</div>
              )}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-novaBold text-indigo-900 mb-4">{index + 1}. {project.title}</h3>
              <p className="text-gray-600 leading-relaxed text-justify font-novaReg">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CentresOfExcellenceContent = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-novaBold text-indigo-950 mb-8">Centres of Excellence</h2>
      <p className="text-gray-600 mb-10 font-novaReg">Under the ASF umbrella, the following 14 Centres of Excellence (COEs) are operational, providing state-of-the-art training and research facilities in collaboration with eminent industry partners:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coes.slice(0, 14).map((coe, index) => (
          <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-indigo-50/50 to-transparent hover:from-indigo-50 transition-all group">
            <div className="w-8 h-8 rounded-full bg-indigo-900 text-white flex items-center justify-center flex-shrink-0 font-novaBold text-sm group-hover:bg-secondary transition-colors">{index + 1}</div>
            <span className="text-indigo-900 font-novaBold group-hover:text-secondary transition-colors">{coe.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CentresOfExcellence = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <Header title={"Centres of Excellence"} bg="/image/lab/User-Manual-AKGEC 5.webp" gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
      <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-10 lg:py-20 gap-10 px-4">
        <div className="col-span-12 lg:col-span-9">
          <CentresOfExcellenceContent />
        </div>
        <div className="col-span-12 lg:col-span-3 sticky top-32 self-start h-max"><SideBar title={"Skills Foundation"} LinkList={SideBarLink} /></div>
      </section>
    </div>
  );
};

export const MajorProjects = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <Header title={"Major Projects @ ASF"} bg="/image/lab/User-Manual-AKGEC 5.webp" gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
      <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-10 lg:py-20 gap-10 px-4">
        <div className="col-span-12 lg:col-span-9">
          <MajorProjectsContent />
        </div>
        <div className="col-span-12 lg:col-span-3 sticky top-32 self-start h-max"><SideBar title={"Skills Foundation"} LinkList={SideBarLink} /></div>
      </section>
    </div>
  );
};

export const SkillDevelopment = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <Header title={"Skill Development"} bg="/image/lab/User-Manual-AKGEC 5.webp" gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
      <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-10 lg:py-20 gap-10 px-4">
        <div className="col-span-12 lg:col-span-9 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-3xl font-novaBold text-indigo-950 mb-6">Skill Development Initiatives</h2>
          <p className="text-gray-700 font-novaReg leading-relaxed mb-6">Skill Development at AKGU Skills Foundation focus on enhancing the technical and vocational skills of the youth to make them industry-ready. We provide training in cutting-edge technologies that are transforming the global industrial landscape.</p>
          <div className="space-y-6 mt-8">
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all">
              <h4 className="font-bold text-indigo-900 mb-2">Robotics & Industrial Automation</h4>
              <p className="text-sm text-gray-600">Specialized training on industrial robots, PLC programming, and automated production systems.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all">
              <h4 className="font-bold text-indigo-900 mb-2">3D Printing & Additive Manufacturing</h4>
              <p className="text-sm text-gray-600">Hands-on experience with 3D design and printing technologies for rapid prototyping and manufacturing.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all">
              <h4 className="font-bold text-indigo-900 mb-2">Digital Manufacturing</h4>
              <p className="text-sm text-gray-600">Integrated training on digital tools for design, simulation, and manufacturing processes.</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 sticky top-32 self-start h-max"><SideBar title={"Skills Foundation"} LinkList={SideBarLink} /></div>
      </section>
    </div>
  );
};

export const IndustryOrientedResearch = () => {
  const containerRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(blob1Ref.current, { x: "30%", y: "20%", duration: 15, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(blob2Ref.current, { x: "-20%", y: "-30%", duration: 20, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.fromTo(".content-header", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", scrollTrigger: { trigger: ".content-header", start: "top 90%", toggleActions: "play none none reverse" } });
      gsap.fromTo(".coe-card-new", { y: 80, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.15, ease: "back.out(1.2)", scrollTrigger: { trigger: ".grid-container-new", start: "top 85%", toggleActions: "play none none reverse" } });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="">
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div ref={blob1Ref} className="absolute top-0 right-0 w-96 h-96 bg-indigo-300/10 rounded-full blur-[100px]"></div>
          <div ref={blob2Ref} className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="content-header relative mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-indigo-950"></div>
            <span className="text-sm font-novaBold uppercase tracking-widest text-indigo-950">Technical Innovation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-novaBold text-indigo-950 mb-6 leading-tight">Industry Oriented <span className="text-secondary">Research</span></h2>
          <p className="text-lg text-slate-600 font-novaReg leading-relaxed max-w-4xl">Under the AKGU Skills Foundation (ASF) umbrella, we bridge the gap between academia and industry through cutting-edge research and innovation across 14 specialized domains.</p>
          <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none"><GraduationCap size={200} className="text-indigo-950" /></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-container-new relative">
          {coes.map((coe, index) => (
            <div key={index} className="coe-card-new group cursor-pointer relative">
              <div className="relative h-full bg-white/60 backdrop-blur-sm p-6 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/40 hover:-translate-y-2">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${coe.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500 ease-in-out`}>{coe.icon}</div>
                  <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-xs font-novaBold text-slate-300 group-hover:text-secondary group-hover:border-secondary/30 transition-all">{(index + 1).toString().padStart(2, '0')}</div>
                </div>
                <h3 className="text-base font-novaBold text-indigo-950 leading-tight mb-4 group-hover:text-secondary transition-colors duration-300">{coe.title}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex-grow h-[1px] bg-slate-100 group-hover:bg-secondary/20 transition-colors"></div>
                  <ArrowRight size={14} className="text-slate-300 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </div>
                <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${coe.color} transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
