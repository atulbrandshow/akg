"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CubeSlider from "@/Components/CubeSlider";

const results = [
  {
    title: "MoU with AICRA",
    desc: (
      <>
        AKGU Skills Foundation signed MoU with AICRA (All India Council for Automation and Robotics) during ‘India STEM Summit & Awards 2020’ held at NDMC Convention Center, New Delhi on 13 February, 2020. <br /> The summit was inaugurated by Chief Guest Honorable Shri Nitin Gadkari – Union Cabinet Minister MSME, Road Transport & Highway. <br /> AKGU Skills Foundation participated in the event as a sponsor and exhibitor showcasing the latest tools and technologies in the field of Industrial Automation & Robotics, Digital Manufacturing and 3D Printing etc.
      </>
    ),
    slides: [
      { title: 'AICRA', img:"/image/mous/MOU_AICRA1.jpg" },
      { title: 'AICRA', img:"/image/mous/MOU_AICRA2.jpg" },
    ]
  },
  {
    title: "Partnership with Modern Coach Factory (MCF)",
    desc: (
      <>
        ASF works closely for training and upgradation of the competency of MCF engineers in Industrial Robotics and Automation. MCF organizes joint In-Plant Training Programs through their Technical Training Centre on Robot Operation & Programming.
      </>
    ),
    slides: [
      { title: 'MCF', img:"/image/lab/User-Manual-AKGEC 5.webp" },
    ]
  },
  {
    title: "Collaboration with Indian Air Force",
    desc: (
      <>
        ASF supports the Indian Air Force (Base Repair Depots) in conducting repair and life enhancement studies of Surface to Air Missile Launching Systems and developing 3D printed models for strategic presentations.
      </>
    ),
    slides: [
      { title: 'IAF', img:"/image/lab/User-Manual-AKGEC 5.webp" },
    ]
  }
];

const SkillsMoUs = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleDomain = (index) => {
    setOpenIndices((prev) => {
      if (prev.includes(index)) {
        return []
      } else {
        return [index];
      }
    });
  };

  return (
    <>
      <section className='max-w-[1400px]'>
          <h1 className="text-4xl font-novaReg mb-5 pl-2">Industrial Partners & MoUs</h1>
        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg">
          <div className="w-full text-black">
            {results.map((result, index) => (
              <div key={index} className="border-b border-gray-300">
                <a
                  onClick={() => toggleDomain(index)}
                  className={`flex justify-between items-center w-full px-5 ${openIndices.includes(index) ? 'text-white bg-indigo-950' : 'text-black'} py-6 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-indigo-900 hover:text-white`}
                >
                  <span className={`font-semibold`}>
                    {result.title}
                  </span>
                  {openIndices.includes(index) ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </a>
                {openIndices.includes(index) && (
                  <div className="pl-5 flex justify-around items-center py-10 bg-gray-200">
                    <p className="font-novaReg mb-4 max-w-3xl">{result.desc}</p>
                    <CubeSlider slides={result.slides} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsMoUs;
