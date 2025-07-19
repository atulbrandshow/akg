"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CubeSlider from "@/Components/CubeSlider";

const results = [
  {
    title: "Innovations During Covid 19 Pandemic",
    desc: (
      <>
        During the Covid 19 pandemic, AKGU FabLab developed a low-cost yet environmentally friendly and reusable products – Respirator and Face shield using 3D printing Technology.<br />
        The respirator was developed using Polylactic Acid. The filter material used was disposable mask cloth but any material as per exposed environment can be used. Design considerations such as suitability for average male/female face size with ergonomic characteristics and perfect fit on the face without causing any problems due to prolonged usage were taken into consideration. The weight of the respirator was 47 grams and average cost of manufacture was INR 100.
      </>
    ),
    width: "w-72",
    slides: [
      { title: 'Innovation', img:"/image/consultancy/Innovation1.jpg" },
      { title: 'Innovation', img:"/image/consultancy/Innovation2.jpg" },
      { title: 'Innovation', img:"/image/consultancy/Innovation3.jpg" },
      { title: 'Innovation', img:"/image/consultancy/Innovation4.jpeg" },
    ]
  },
  {
    title: "Indian Railways: Modern Coach Factory, Rai Bareilly",
    desc: (
      <>
        AKGU Skills Foundation (ASF) is working very closely with Modern Coach Factory, Rae Bareilly for training and upgradation of the competency of their engineers in Industrial Robotics and Automation. Further to this, MCF has agreed to organize joint In-Plant Training Programs through their Technical Training Centre on Robot Operation & Programming. The first program on “Robot Operation & Programming – In-Plant Training” was conducted at Modern Coach Factory Rae Bareilly during 17-28 September, 2018 for 15 participants.
      </>
    ),
    width: "w-72",
    slides: [
      { title: 'Railways', img:"/image/consultancy/Railways.jpg" },
      { title: 'Railways', img:"/image/consultancy/Railways1.jpg" },
      { title: 'Railways', img:"/image/consultancy/Railways2.jpg" },
    ]
  },
  {
    title: "Indian Air Force-Base Repair Depot",
    desc: (
      <>
        AKGU Skills Foundation (ASF) team led by Prof. IP Sharma and Mr. Som Ashutosh visited No. 1 & No. 4 Base Repair Depot (BRD) at Kanpur in May, 2018 and June, 2018 respectively and No. 7 BRD, Tughlakhabad Air Force Station in August, 2018. No. 7 BRD have sought ASF’s support in conducting repair and life enhancement studies of their Surface to Air Missile Launching Systems. ASF has also been requested to scan and develop a 3D printed model of their Surface to Air Missile Launcher which may be presented to the Prime Minister on the Air Force Day. AKGU has been attached to Nodal Technological Centres (NTC) of No. 7 BRD, Tughlakhabad, New Delhi and No. 3 BRD, Chandigarh. Prof. Ashiv Shah, Prof. I. P. Sharma and Mr. Som Ashutosh participated in NTC Symposium organized by 7 BRD, Indian Air Force, at AIR Force Station, Tughlakabad on 27 September, 2018.
      </>
    ),
    slides: [
      { title: 'Air-Force', img:"/image/consultancy/Air-Force.jpg" },
      { title: 'Air-Force', img:"/image/consultancy/Air-Force1.jpg" },
    ]
  }
];

const Consultancy = () => {
  const [openIndices, setOpenIndices] = useState([0]);

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
          <h1 className="text-4xl font-novaReg mb-5 pl-2">Consultancy</h1>
        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg">
          <div className="w-full text-black">
            {results.map((result, index) => (
              <div key={index} className="border-b border-gray-300">
                <a
                  onClick={() => toggleDomain(index)}
                  className={`flex justify-between items-center w-full px-5 py-6 ${openIndices.includes(index) ? 'text-white bg-indigo-950' : 'text-black'} cursor-pointer rounded-lg transition-colors duration-200 hover:bg-indigo-900 hover:text-white`}
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
                  <div className="px-5 flex justify-around items-center gap-10 py-10 bg-gray-200">
                    <p className="font-novaReg text-base mb-4 leading-snug text-justify max-w-3xl">{result.desc}</p>
                    <CubeSlider width={result.width} slides={result.slides} />
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

export default Consultancy;
