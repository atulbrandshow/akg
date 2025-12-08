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
      // Initial hidden states
      gsap.set(titleRef.current, { y: 60, opacity: 0 });
      gsap.set(descRef.current, { y: 50, opacity: 0 });
      gsap.set(accordionRefs.current, { y: 80, opacity: 0, scale: 0.95 });

      // Scroll-triggered animations
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })
      .to(titleRef.current, { 
        y: 0, opacity: 1, duration: 1, ease: "power3.out" 
      })
      .to(descRef.current, { 
        y: 0, opacity: 1, duration: 1, ease: "power2.out" 
      }, "-=0.6")
      .to(accordionRefs.current, { 
        y: 0, opacity: 1, scale: 1, 
        stagger: 0.15,
        duration: 1.2, 
        ease: "back.out(1.7)" 
      }, "-=0.8");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      {/* Title - Animated */}
      <h3 ref={titleRef} className="text-4xl font-semibold text-blue-900 mb-6 px-2 max-sm:text-3xl">
        Governance
      </h3>
      
      {/* Description - Animated */}
      <p ref={descRef} className="text-gray-700 mb-8 px-2 text-justify max-w-4xl">
        The AKG University Act grants distinct powers and responsibilities to various governing bodies within the university. These entities play a vital role in shaping policies, upholding academic standards, and ensuring both the integrity of financial management and the responsible use of resources. They also provide strategic direction, oversee policy implementation, and intervene with corrective actions when required. The University's governance is supported by the following bodies:
      </p>

      {/* Accordions - Animated */}
      <div className="space-y-6">
        {sections.map(({ title, contentKey }, i) => (
          <div
            key={i}
            ref={(el) => (accordionRefs.current[i] = el)}
            className={`border rounded-xl overflow-hidden shadow-md ${
              openIndex === contentKey
                ? "ring-4 ring-yellow-400 bg-blue-50"
                : "bg-white"
            } transition-all duration-300`}
          >
            <button
              onClick={() => toggleContent(contentKey)}
              className={`flex items-center justify-between w-full px-6 py-5 text-left font-semibold text-lg sm:text-xl ${
                openIndex === contentKey ? "text-blue-900" : "text-blue-800"
              } hover:bg-yellow-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 focus-visible:ring-opacity-75 rounded-xl`}
              aria-expanded={openIndex === contentKey}
              aria-controls={`section-content-${contentKey}`}
              id={`section-header-${contentKey}`}
            >
              {title}
              {openIndex === contentKey ? (
                <ChevronUp className="w-6 h-6 text-yellow-500" />
              ) : (
                <ChevronDown className="w-6 h-6 text-yellow-500" />
              )}
            </button>
            
            {openIndex === contentKey && (
              <div
                id={`section-content-${contentKey}`}
                aria-labelledby={`section-header-${contentKey}`}
                className="bg-white p-6 max-w-full overflow-x-auto"
              >
                <p className="mb-6 text-gray-700 text-sm sm:text-base font-normal px-2 max-w-4xl">
                  The {title} of AKG University has been recently updated for the 2022-2024 academic session due to leadership changes.
                </p>
                <table className="w-full border-collapse min-w-[600px] sm:min-w-full text-left">
                  <thead>
                    <tr className="bg-blue-900 text-white text-sm sm:text-base font-semibold">
                      <th className="py-3 px-4 rounded-tl-lg">Sr. No.</th>
                      <th className="py-3 px-4 border-l border-blue-700">Name</th>
                      <th className="py-3 px-4 border-l border-blue-700">Designation</th>
                      <th className="py-3 px-4 border-l border-blue-700">Under Section</th>
                      <th className="py-3 px-4 border-l border-blue-700 rounded-tr-lg">Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gbody.map((member) => (
                      <tr
                        key={`${contentKey}-${member.sr_no}`}
                        className="odd:bg-blue-50 even:bg-white border-b border-blue-100 text-gray-800 text-sm sm:text-base hover:bg-blue-100 transition-colors duration-300 hover:scale-[1.01] hover:-translate-y-0.5"
                      >
                        <td className="py-2 px-4">{member.sr_no}</td>
                        <td className="py-2 px-4 border-l border-blue-100">{member.name}</td>
                        <td className="py-2 px-4 border-l border-blue-100">{member.designation}</td>
                        <td className="py-2 px-4 border-l border-blue-100">{member.under_section}</td>
                        <td className="py-2 px-4 border-l border-blue-100">{member.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Governance;
