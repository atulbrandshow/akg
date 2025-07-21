"use client";

import { useState } from "react";
import Header from "@/Components/Header";
import Calendar from "@/Components/Calendar";
import SideBar from "@/Components/SideBar";
import TeachingPractices from "../pagesComp/TeachingPractices";


const SideBarLink = [
  { name: "Our Identity", link: "/overview" },
  { name: "Leadership", link: "" },
  { name: "Governance", link: "" },
  { name: "Recognition and Approvals", link: "" },
  { name: "Awards and Rankings", link: "" },
  { name: "Institution Social Responsibility", link: "" }
]

export const Home = () => {
  const [currentSemester, setCurrentSemester] = useState('even');
  return (
    <>
      <div className="bg-gray-100">
        <Header title={"Teaching Practices"} buttonType={"link"} 
          bgKey="BG9" 
          position="center"
          buttonText="Apply Now"
          buttonLink="/" 
          gradient={"bg-gradient-to-r from-black to-white/"}
        /> 
        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-5 gap-10 px-2 max-sm:gap-0">
          <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
            <div className="container mx-auto">
              <div className="px-3 max-sm:px-0">
                <h2 className="text-2xl max-2xl:text-3xl max-lg:text-2xl font-novaSemi max-sm:leading-none mb-2.5">
                  Optimal Knowledge Acquisition at AKG University
                </h2>
                <p className="mb-5 mt-2.5 max-2xl:text-[15px] font-novaReg leading-6 max-2xl:leading-5">
                   At AKG University, students cultivate the ability to perceive and comprehend the world around them. The learning experience at AKG emphasizes the development of conceptual frameworks, embracing outcomes, retaining practical knowledge, and mastering methods and systems. Students engage in analyzing and discussing ideas while also fostering behaviors suited to various contexts.
                </p>
              </div>
              <div className="px-3 max-sm:px-0">
                <h2 className="text-2xl max-2xl:text-3xl max-lg:text-2xl font-novaSemi mb-2 leading-9 max-sm:leading-none">
                  Your Learning Adventure Begins: Unveiling AKG University's Transformative Practices
                </h2>
                <p className="font-novaReg mb-5 mt-2.5 leading-6">
                  As you step into AKG University's realm of transformative practices, remember that you are not just a student; you are an active participant in your growth story.
                </p>
                <ul className="mb-4 list-disc ml-5 text-[14px] lg:text-[14px] md:text-[15px]">
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5"><b>Active Learning -</b> Engage, Participate, Excel</li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5"><b>Project-Based Learning -</b> Learning by Doing</li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5"><b>Collaborative Learning -</b> Unleash the Power of We</li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5"><b>Technology Integration -</b> Where Education Meets Innovation</li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5"><b>Personalized Learning -</b> Your journey, your pace, your unique path to success</li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5"><b>Cross-Cultural Sensitivity -</b> Connecting Worlds, Expanding Minds</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <Calendar currentSemester={currentSemester} setCurrentSemester={setCurrentSemester} />
            <SideBar title={"About Us"} LinkList={SideBarLink} />
          </div>
        </section>
      </div>
      <TeachingPractices />
    </>
  )
}


export default Home;