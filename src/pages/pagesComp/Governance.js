"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const gbody = [
  {
    "sr_no": 1,
    "name": "Ankur Vishwakarma",
    "designation": "The Chancellor",
    "under_section": "1 (1) (a)",
    "position": "Chairman"
  },
  {
    "sr_no": 2,
    "name": "Swati Jain",
    "designation": "Vice-Chancellor",
    "under_section": "1 (1) (b)",
    "position": "Member"
  },
  {
    "sr_no": 3,
    "name": "Mahesh Sisodiya",
    "designation": "Pro-Chancellor",
    "under_section": "1 (1) (c)",
    "position": "Member"
  },
  {
    "sr_no": 4,
    "name": "Lokesh Sharma",
    "designation": "Eminent Educationist",
    "under_section": "1 (1) (c)",
    "position": "Member"
  },
  {
    "sr_no": 5,
    "name": "Ajay Singh",
    "designation": "Eminent Educationist",
    "under_section": "1 (1) (c)",
    "position": "Member"
  },
  {
    "sr_no": 6,
    "name": "Radhika Joshi",
    "designation": "Senior Vice President, Management & Technology Expert",
    "under_section": "1 (1) (d)",
    "position": "Member"
  },
  {
    "sr_no": 7,
    "name": "Prem Singh Upadhyay",
    "designation": "Chief Advisor, AKG University, nominated by Hon'ble Chancellor",
    "under_section": "--------",
    "position": "Special Member"
  },
  {
    "sr_no": 8,
    "name": "Nitin Jain",
    "designation": "Pro-Vice Chancellor",
    "under_section": "--------",
    "position": "Special Invitee"
  },
  {
    "sr_no": 9,
    "name": "Satyam Rajput",
    "designation": "Finance Expert",
    "under_section": "1 (1) (e)",
    "position": "Member"
  },
  {
    "sr_no": 10,
    "name": "Hemant Chauhan",
    "designation": "Department of Higher Education.",
    "under_section": "1 (1) (f)",
    "position": "Member"
  },
  {
    "sr_no": 11,
    "name": "Adarsh Sharma",
    "designation": "Department of Higher Education.",
    "under_section": "1 (1) (g)",
    "position": "Member"
  },
  {
    "sr_no": 12,
    "name": "Prerna Prajapati",
    "designation": "Registrar",
    "under_section": "1 (1)",
    "position": "Member Secretary"
  }
];

const Governance = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const accordionRefs = useRef([]);

  const sections = [
    { title: "Governing Body", contentKey: 0 },
    { title: "Board Of Management", contentKey: 1 },
    { title: "Academic Council", contentKey: 2 },
    { title: "Underpinning Corporate Patronage", contentKey: 3 },
  ];

  const toggleContent = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Description animation
      gsap.fromTo(
        descRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Accordion animations
      accordionRefs.current.forEach((accordion, index) => {
        if (accordion) {
          gsap.fromTo(
            accordion,
            { y: 80, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: accordion,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full translate-y-24 -translate-x-24"></div>
      
      {/* AKG Logo Vector Background */}
      <div className="absolute top-10 right-10 opacity-5">
        <img
          src="/image/akgec-logo.svg"
          alt="AKG Logo"
          className="w-40 h-40 object-contain"
        />
      </div>
      <div className="absolute bottom-20 left-20 opacity-3">
        <img
          src="/image/akgec-logo.svg"
          alt="AKG Logo"
          className="w-32 h-32 object-contain rotate-45"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-64 right-32 w-4 h-4 bg-secondary/70 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 right-16 w-2 h-2 bg-secondary/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10">
        {/* Title - Animated */}
        <h3 ref={titleRef} className="text-4xl font-semibold text-primary mb-6 px-2 max-sm:text-3xl">
          Governance
        </h3>
        
        {/* Description - Animated */}
        <p ref={descRef} className="text-gray-700 mb-8 px-2 text-justify max-w-4xl">
          The AKG University Act grants distinct powers and responsibilities to various governing bodies within the university. These entities play a vital role in shaping policies, upholding academic standards, and ensuring both the integrity of financial management and the responsible use of resources. They also provide strategic direction, oversee policy implementation, and intervene with corrective actions when required. The University's governance is supported by the following bodies:
        </p>
      </div>

        {/* Accordions - Animated */}
        <div className="space-y-6 relative z-10">
          {sections.map(({ title, contentKey }, i) => (
            <div
              key={i}
              ref={(el) => (accordionRefs.current[i] = el)}
              className={`relative border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                openIndex === contentKey
                  ? "ring-4 ring-secondary bg-primary/5"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {/* Card Background Pattern */}
              <div className="absolute top-2 right-2 w-8 h-8 opacity-5">
                <img
                  src="/image/akgec-logo.svg"
                  alt="AKG Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <button
                onClick={() => toggleContent(contentKey)}
                className={`flex items-center justify-between w-full px-6 py-5 text-left font-semibold text-lg sm:text-xl transition-all duration-300 hover:transform hover:translate-x-1 ${
                  openIndex === contentKey ? "text-primary" : "text-primary/80"
                } hover:bg-secondary/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary focus-visible:ring-opacity-75 rounded-xl relative z-10`}
                aria-expanded={openIndex === contentKey}
                aria-controls={`section-content-${contentKey}`}
                id={`section-header-${contentKey}`}
              >
                {title}
                {openIndex === contentKey ? (
                  <ChevronUp className="w-6 h-6 text-secondary" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-secondary" />
                )}
              </button>
            
              {openIndex === contentKey && (
                <div
                  id={`section-content-${contentKey}`}
                  aria-labelledby={`section-header-${contentKey}`}
                  className="bg-white p-6 max-w-full overflow-x-auto relative"
                >
                  {/* Content Background Pattern */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 opacity-3">
                    <img
                      src="/image/akgec-logo.svg"
                      alt="AKG Logo"
                      className="w-full h-full object-contain rotate-12"
                    />
                  </div>
                  
                  <p className="mb-6 text-gray-700 text-sm sm:text-base font-normal px-2 max-w-4xl relative z-10">
                    The {title} of AKG University has been recently updated for the 2022-2024 academic session due to leadership changes.
                  </p>
                  
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    {/* Table Background Pattern */}
                    <div className="absolute top-2 left-2 w-12 h-12 opacity-5">
                      <img
                        src="/image/akgec-logo.svg"
                        alt="AKG Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <table className="w-full border-collapse min-w-[600px] sm:min-w-full text-left relative z-10">
                      <thead>
                        <tr className="bg-primary text-white text-sm sm:text-base font-semibold">
                          <th className="py-3 px-4 rounded-tl-lg">Sr. No.</th>
                          <th className="py-3 px-4 border-l border-primary/70">Name</th>
                          <th className="py-3 px-4 border-l border-primary/70">Designation</th>
                          <th className="py-3 px-4 border-l border-primary/70">Under Section</th>
                          <th className="py-3 px-4 border-l border-primary/70 rounded-tr-lg">Position</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gbody.map((member) => (
                          <tr
                            key={`${contentKey}-${member.sr_no}`}
                            className="odd:bg-primary/5 even:bg-white border-b border-gray-200 text-gray-800 text-sm sm:text-base hover:bg-secondary/10 transition-all duration-300 hover:transform hover:scale-[1.01] hover:-translate-y-0.5"
                          >
                            <td className="py-2 px-4">{member.sr_no}</td>
                            <td className="py-2 px-4 border-l border-gray-200">{member.name}</td>
                            <td className="py-2 px-4 border-l border-gray-200">{member.designation}</td>
                            <td className="py-2 px-4 border-l border-gray-200">{member.under_section}</td>
                            <td className="py-2 px-4 border-l border-gray-200">{member.position}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
    </section>
  );
};

export default Governance;
