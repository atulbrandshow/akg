"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CubeSlider from "@/Components/CubeSlider";
import { fdpsData } from "@/Json/FDPSdata";
import Link from "next/link";

const buttonData = [
  { name: "FDPs IN 2018-19", link: "/pdf/fdps/FDPs_2018-19.pdf" },
  { name: "FDPs IN 2017-18", link: "/pdf/fdps/FDPs_2017-18.pdf" },
  { name: "FDPs IN 2016-17", link: "/pdf/fdps/FDPs_2016-17.pdf" },
  { name: "FDPs IN 2015-16", link: "/pdf/fdps/FDPs_2015-16.pdf" },
  { name: "FDPs IN 2014-15", link: "/pdf/fdps/FDPs_2014-15.pdf" },
  { name: "FDPs IN 2013-14", link: "/pdf/fdps/FDPs_2013-14.pdf" }
]

const FDPS = () => {
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
      <section className='max-sm:px-2'>
        <h1 className="text-4xl font-novaReg mb-5 pl-2">FDPs</h1>
        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg">
          <div className="w-full text-black">
            {fdpsData.map((result, index) => (
              <div key={index} className="border-b border-gray-300">
                <a onClick={() => toggleDomain(index)} className={`flex justify-between items-center w-full px-5 ${openIndices.includes(index) ? 'text-white bg-indigo-950' : 'text-black'} py-6 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-indigo-900 hover:text-white`}>
                  <span className="font-semibold">{result.title}</span>
                  {openIndices.includes(index) ? (<ChevronUp className="w-6 h-6" />) : (<ChevronDown className="w-6 h-6" />)}
                </a>
                {openIndices.includes(index) && (
                  <div className="py-10 bg-gray-200">
                    <p className="font-novaReg mb-4">{result.desc}</p>
                    {result.table && <>
                      <div className="">
                        <table className="table-auto border-collapse w-full max-w-3xl mt-8">
                          <thead>
                            <tr className="bg-gray-200">
                              <th className="bg-indigo-950 text-white px-6 py-3 font-semibold text-center rounded-tl-lg border-r border-gray-300">Speaker</th>
                              <th className="bg-indigo-950 text-white px-6 py-3 font-semibold text-center rounded-tr-lg">Topic Delivered</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result?.table?.map((speaker, index) => (
                              <>
                                <tr key={index}>
                                  <td
                                    className="border border-gray-300 bg-indigo-900 text-white px-6 py-4 text-center align-top"
                                    rowSpan={speaker.topics.length}
                                  >
                                    <div className="flex flex-col items-center justify-center">
                                      <p className="font-medium">{speaker.name}</p>
                                      <p className="text-sm">{speaker.position}</p>
                                      <p className="text-sm">{speaker.institution}</p>
                                    </div>
                                  </td>
                                  <td className="border border-gray-300 bg-indigo-900 text-white px-6 py-4 text-center">{speaker.topics[0]}</td>
                                </tr>
                                {speaker.topics.slice(1).map((topic, topicIndex) => (
                                  <tr key={`${index}-${topicIndex}`}>
                                    <td className="border border-gray-300 bg-indigo-900 text-white px-6 py-4 text-center">{topic}</td>
                                  </tr>
                                ))}
                              </>
                            ))}
                          </tbody>
                        </table>
                        <p className="mt-2">The FDP will be of immense use to the participants in expanding their knowledge sphere and delivery to the students. The FDP was participated by 27 faculty members.</p>
                      </div>

                    </>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {result.slides1 && <CubeSlider slides={result.slides1} />}
                      {result.slides2 && <CubeSlider slides={result.slides2} />}
                      {result.slides3 && <CubeSlider slides={result.slides3} />}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5">
          {buttonData.map(({ name, link }) => (
            <Link href={link} target="_blank" className="py-3 px-4 mt-5 text-[15px] rounded-xl font-novaBold uppercase bg-btn-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 animate-gradient tracking-wider h-12">{name}</Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default FDPS;