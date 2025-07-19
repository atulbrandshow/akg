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
    title: "MoU with NFU",
    desc: (
      <>
        AKGU in its endeavor to promote global exposure in industry oriented teaching and international practices signed MoU with National Formosa University, Taiwan on 18 January, 2020. <br /> The MoU was signed to encourage cooperation in education and research areas of mutual interest and to promote direct contact between the faculty members, departments and students of both the parties. <br /> This initiative will be helpful for faculty and student exchange/internship programs and will encourage students to pursue joint research and development activities. The students will be benefitted by learning professional language and participation in cultural exchange programs.
      </>
    ),
    slides: [
      { title: 'NFU', img:"/image/mous/NFU.jpg" },
    ]
  },
  {
    title: "MoU with BOSCH",
    desc: (
      <>
        AKGU signed MoU with BOSCH Automotive Ltd. on 14 November, 2019 at BOSCH head quarters at Bangalore. The primary purpose of this association is to develop facility for Joint Certification Training Centre and Express Bosch Car Service Workshop at AKGU under AKGU Skills initiative.
      </>
    ),
    slides: [
      { title: 'BOSCH', img:"/image/mous/Bosch-mou.jpg" },
    ]
  }
];

const MoUs = () => {
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
          <h1 className="text-4xl font-novaReg mb-5 pl-2">MoUs</h1>
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
                    {/* You can render images as needed */}
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

export default MoUs;
