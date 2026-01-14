import { ArrowRight, Trophy, Star, Award, Zap, Target, Rocket, ChevronDown, ChevronUp } from "lucide-react";
import React, { useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function App() {
  const container = useRef();
  const projects = [
    {
      id: "01",
      title: "Distinguished Visit by Senior Experten Service (SES), Germany",
      description:
        "Ajay Kumar Garg Engineering College has been privileged to host eminent experts from the Senior Experten Service (SES), Germany, including Dr. Wolfgang Sommer (Siemens), Dr. Detlev Schmidt (Mercedes Benz), Dr. Hans Peter Barbey, and Prof. Helmut Behler. The most recent visit in November 2025 by Prof. Wolf Burger further enriched this tradition.",
      tags: ["GLOBAL EXPOSURE", "ACADEMIC EXCELLENCE", "GERMANY COLLABORATION"],
      image: "/image/proud-moment-images/image6.jpg",
      link: "#",
      icon: <Star className="w-6 h-6" />
    },
    {
      id: "02",
      title: "Recognition by Indian Railways Leadership",
      description:
        "AKGEC had the honour of hosting Mr. Rajesh Agarwal, Member of Rolling Stock (MoRS), Indian Railways. His exceptional appreciation for our capabilities strengthened institutional credibility and enhanced our outreach within Indian Railways, reinforcing AKGEC's impact in national-level technology initiatives.",
      tags: ["INDIAN RAILWAYS", "NATIONAL IMPACT", "INNOVATION"],
      image: "/image/proud-moment-images/image3.jpg",
      link: "#",
      icon: <Award className="w-6 h-6" />
    },
    {
      id: "03",
      title: "Strengthening Industry Linkages: Hindalco Leaders at AKGEC",
      description:
        "AKGEC hosted Mr. Nilesh Koul, Sr. President & CEO (Aluminium Downstream), and Mr. Lovkesh, Jt. President & Head (Personal Mobility EV Aluminium Components), from Hindalco Industries Ltd. The visit highlighted our Centres of Excellence and strengthened high-value industry engagement.",
      tags: ["HINDALCO", "EV COMPONENTS", "INDUSTRY ENGAGEMENT"],
      image: "/image/proud-moment-images/image13.jpg",
      link: "#",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: "04",
      title: "A Milestone Institutional Visit by Mr. Naveen Jindal",
      description:
        "AKGEC had the honour of hosting Mr. Naveen Jindal, Founding Chancellor of O.P. Jindal Global University and Chairman of Jindal Steel & Power. His visit marked a milestone moment, reflecting AKGEC's rising national stature and recognition across industry and academia.",
      tags: ["MILESTONE", "JINDAL STEEL", "NATIONAL RECOGNITION"],
      image: "/image/proud-moment-images/image15.png",
      link: "#",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      id: "05",
      title: "AICTE Chairman Prof. T. G. Sitharam Graces IDEA Lab FDP",
      description:
        "AKGEC hosted the National Faculty Development Program under the AICTE IDEA Lab. A key highlight was the presence of Prof. T. G. Sitharam, Chairman, AICTE, whose visit added exceptional value and inspiration to the program, advancing innovation and experiential learning.",
      tags: ["AICTE", "IDEA LAB", "FACULTY DEVELOPMENT"],
      image: "/image/proud-moment-images/image8.png",
      link: "#",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: "06",
      title: "International Automotive & Tier-1 Industry Conclave with KUKA",
      description:
        "AKGEC, in collaboration with KUKA, organized an exclusive international workshop. The event brought together major automotive and Tier-1 industry stakeholders for high-impact dialogue, technology exchange, and strategic learning, strengthening AKGEC's position as an advanced automation hub.",
      tags: ["KUKA", "ROBOTICS", "AUTOMOTIVE CONCLAVE"],
      image: "/image/proud-moment-images/image4.jpg",
      link: "#",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      id: "07",
      title: "Industrial Automation Upskilling for Defence Personnel",
      description:
        "AKGEC Skills Foundation, in partnership with IASC SSC, launched a 570-hour Industrial Automation Program for JCOs/ORs of the Army, Navy, and Air Force. The program covers electrical safety, automation design, and hands-on industrial systems, marking a milestone in defence skilling.",
      tags: ["DEFENCE SKILLING", "AUTOMATION", "INDIAN ARMED FORCES"],
      image: "/image/proud-moment-images/image14.jpg",
      link: "#",
      icon: <Award className="w-6 h-6" />
    },
    {
      id: "08",
      title: "AICTE Leadership Visit for Design Thinking & Innovation",
      description:
        "Prof. Shyama Rath, Member Secretary, AICTE, inaugurated AKGEC's Design Thinking & Innovation Workshop. Her address highlighted the need to embed innovation-led learning into education, strengthening AKGEC's mission to promote creative and future-ready learning.",
      tags: ["DESIGN THINKING", "INNOVATION", "AICTE LEADERSHIP"],
      image: "/image/proud-moment-images/image10.jpg",
      link: "#",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: "09",
      title: "CBSE National Exposure Visit for School Principals",
      description:
        "AKGEC was chosen by CBSE to host a two-day national Exposure Visit for School Principals, reflecting our technical capabilities and leadership in skill-based education. The program showcased our laboratories and industry-aligned training ecosystem.",
      tags: ["CBSE", "EXPOSURE VISIT", "SKILL EDUCATION"],
      image: "/image/proud-moment-images/image1.jpg",
      link: "#",
      icon: <Star className="w-6 h-6" />
    },
    {
      id: "10",
      title: "Nationwide Capacity Building for Indian Railways Leadership",
      description:
        "Since 2021, AKGEC has been driving large-scale technical upskilling for Indian Railways, training 250+ officers and staff. This initiative reflects our commitment to strengthening operational excellence and modernisation within India's railway ecosystem.",
      tags: ["CAPACITY BUILDING", "UPSKILLING", "RAILWAY MODERNISATION"],
      image: "/image/proud-moment-images/image11.jpg",
      link: "#",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: "11",
      title: "National Welding Excellence Platform Hosted at AWTRC",
      description:
        "AKGEC hosted the National Skill Competition – Best of the Best Welders 2024. The event featured the National Best Welder Competition for Women 2024, reinforcing our commitment to inclusion, gender equity, and professional excellence in welding.",
      tags: ["WELDING EXCELLENCE", "GENDER EQUITY", "NATIONAL COMPETITION"],
      image: "/image/proud-moment-images/image5.jpg",
      link: "#",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      id: "12",
      title: "Advanced Workshop on Automation & Robotics for ISB Chandigarh",
      description:
        "AKGEC empowered participants from ISB Chandigarh through an advanced workshop, offering immersive exposure to industry-grade technologies. The sessions focused on real-world automation applications, robotic programming, and smart manufacturing.",
      tags: ["ISB CHANDIGARH", "SMART MANUFACTURING", "ROBOTICS"],
      image: "/image/proud-moment-images/image9.jpg",
      link: "#",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      id: "13",
      title: "Strengthening Quality Benchmarks: Triple NABL Accreditation",
      description:
        "AKGEC proudly hosts three NABL-accredited laboratories: Material Testing, Non-Destructive Testing (NDT), and Calibration. This milestone underscores our commitment to quality, precision, and excellence in technical education and research.",
      tags: ["NABL ACCREDITED", "QUALITY CONTROL", "TECHNICAL EXCELLENCE"],
      image: "/image/proud-moment-images/image2.jpg",
      link: "#",
      icon: <Star className="w-6 h-6" />
    },
    {
      id: "14",
      title: "AKGEC Wins Dual Honors at JASC 2025 National Finals",
      description:
        "Team Enginerds from AKGEC secured two Special Category Awards: Best Prototype and Best CAD Design, at the Janatics Automation Skill Challenge 2025 in Pune. They were the only team representing the Northern Region.",
      tags: ["JASC 2025", "CAD DESIGN", "NATIONAL WINNERS"],
      image: "/image/proud-moment-images/image12.jpg",
      link: "#",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      id: "15",
      title: "First Prize at Emerson–NI System Design Contest 2025",
      description:
        "Team Udbhav from AKGEC secured First Prize at the Emerson–NI System Design Contest 2025 at IIT Madras Research Park for project 'Bhoomitra'—Smart In-House Waste Segregation & Vermicompost Monitor built using LabVIEW.",
      tags: ["SYSTEM DESIGN", "FIRST PRIZE", "SOCIAL IMPACT"],
      image: "/image/proud-moment-images/image7.jpg",
      link: "#",
      icon: <Award className="w-6 h-6" />
    },
  ];

  useGSAP(() => {
    gsap.from(".moment-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".moment-header",
        start: "top 80%",
      }
    });

    const cards = gsap.utils.toArray(".moment-card");
    cards.forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        }
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }}></div>
      
      <div className="max-w-7xl mx-auto py-20 px-6 relative z-10">
        <div className="mb-20 text-center moment-header">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
            PROUD <span className="text-blue-600">MOMENTS</span>
          </h1>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Celebrating Excellence, Innovation, and Global Recognition at AKGEC Skills Foundation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 moment-card group border border-slate-100">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* ID Badge */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-blue-600 font-black text-lg">{project.id}</span>
        </div>

        {/* Icon Badge */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg text-white">
          {project.icon}
        </div>
      </div>

      <div className="p-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] font-bold text-blue-600 bg-blue-50 rounded-full uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2 h-14">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3">
          {project.description}
        </p>

        {/* Action */}
        <a
          href={project.link}
          className="inline-flex items-center gap-3 text-blue-600 font-bold text-sm hover:gap-5 transition-all duration-300"
        >
          EXPLORE DETAILS
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
