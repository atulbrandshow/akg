"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react'

const facilities = [
  {
    "title": "POWER BACK UP",
    "details": [
      "DG sets 2365 kVA (320+ 200 +200+140 +125+500+500+380)",
      "Dedicated 1445 kVA feeder line"
    ]
  },
  {
    "title": "WATER",
    "details": [
      "3 Bore wells",
      "Chlorination dozing system",
      "19 Harvesting wells"
    ]
  },
  {
    "title": "REPROGRAPHIC",
    "details": [
      "5 in campus and 1 in hostel"
    ]
  },
  {
    "title": "MEDICAL FACILITY",
    "details": [
      "Cashless medical cover to students",
      "Indo German Hospital (on campus)",
      "Ambulance on call",
      "First aid kits and stretchers",
      "Collaboration with Shivam hospital"
    ]
  },
  {
    "title": "INTERNET FACILITY",
    "details": [
      "20 mbps radio link / 80 mbps fiber",
      "Internet lab (8:30 am to 9:00 pm)",
      "Wi-fi (whole campus)"
    ]
  },
  {
    "title": "CANTEEN",
    "details": [
      "Modern hygienic college canteens"
    ]
  },
  {
    "title": "TRANSPORT",
    "details": [
      "2 college owned buses",
      "5 contracted buses",
      "16 light vehicles"
    ]
  },
  {
    "title": "BANKING",
    "details": [
      "On campus ATM"
    ]
  },
  {
    "title": "UTILITY SHOPS",
    "details": [
      "1 Stationary Shop in College Campus",
      "Each hostel also has a utility shop & canteen"
    ]
  }
]

const SupportFacilities = () => {

  const [openIndices, setOpenIndices] = useState([0]);

  const toggleFacility = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };
  return (
    <>
      <section className='bg-PaperBackground '>
        <div className="bg-[#eaf1ff] p-5 shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg">
          <h2 className="text-4xl font-novaReg mb-4 pl-2 w-full">Support Facilities</h2>
          <ul className="list-none w-full">
            {facilities.map((facility, index) => (
              <li key={index} className="mb-4 border-b border-gray-300">
                <a
                  onClick={() => toggleFacility(index)}
                  className={`flex justify-between items-center w-full px-7 py-6 cursor-pointer transition-colors duration-200`}
                >
                  <span className={`font-semibold ${openIndices.includes(index) ? 'text-[#00BFE7]' : 'text-black'}`}>
                    {facility.title}
                  </span>
                  {openIndices.includes(index) ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </a>
                {openIndices.includes(index) && (
                  <div className="ml-5 pl-5">
                    <ul className="list-disc text-sm pb-3">
                      {facility.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="mb-1">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

      </section>
    </>
  );
};

export default SupportFacilities