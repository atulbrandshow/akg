"use client";

import React from "react";
import { placementsData } from "@/Json/PlacementData";
import PlacementData from "@/Components/PlacementData";
import LogoSlider from "@/Components/LogoSlider";
import ReviewSlider from "@/Components/ReviewSlider";
import PlacementLinks from "@/Components/PlacementLinks";

const PlacementEngineering = () => {

  return (
    <>
      <section>
        <div className="w-full flex justify-center items-center h-[600px] max-lg:h-80 bg-cover bg-center bg-[#535353] bg-blend-overlay bg-BG15">
          <div className="text-white text-center mt-auto mb-32 max-w-2xl max-md:max-w-lg max-sm:max-w-sm max-sm:px-2">
            <h3 className="text-xl tracking-wide font-novaReg max-sm:text-[18px]">
              University with Best Placements
            </h3>
            <h1 className="text-5xl max-md:text-4xl max-md:font-novaSemi max-sm:text-3xl tracking-tight font-novaBold">
              Engineering Placements in AKG University
            </h1>
          </div>
        </div>
        <main className="py-10 lg:py-20">
          <div className="h-full mx-auto max-w-[1250px] max-xl:max-w-[1000px] max-lg:max-w-[600px] max-sm:max-w-[5x00px] py-5 grid grid-cols-2 max-lg:grid-cols-1 gap-5">
            <div className="max-w-2xl max-sm:px-2 ">
              <h1 className="leading-none text-4xl tracking-wide font-novaBold max-w-md">
                Engineering Placements at AKG University: A Glance
              </h1>
              <p className="text-sm leading-4 my-5">
                Campus Placements for the session Batch 2023-24 at AKG University saw major recruiters like TCS, Infosys, Accenture, Capgemini, HCL, Siemens, Mahindra, Cognizant, and Oracle offering positions to engineering students. A record number of 2,850 engineering students were successfully placed, with over 180 multinational companies participating in the placement drive.
              </p>
              <p className="text-sm leading-4">
                Moreover, the total number of offers made to the engineering students at AKG University saw a 55% increase compared to last year. Out of the 180 engineering sector companies, more than 300+ multinational companies offered pay packages of over 5 LPA, while the number of companies offering packages exceeding 10 LPA reached 90+ this year. Thanks to their hard work and exceptional talent, AKG University's brilliant students have set a new milestone by securing an international package of Rs. 1.5 CR and a national package of Rs. 45 LPA.
              </p>
            </div>

            <div className="grid grid-cols-3 max-sm:px-2 text-white">
              <div className="max-xl:hidden max-lg:block">
                <img
                  className="h-full w-full object-cover"
                  src="/image/placements/study-group-b&w.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-2 max-xl:hidden max-lg:block">
                <img
                  className="h-full w-full object-cover"
                  src="/image/placements/group-students.jpg"
                  alt=""
                />
              </div>
              <div className="col-start-1 row-start-3">
                <img
                  className="h-full w-full object-cover"
                  src="/image/placements/graduate-student.jpg"
                  alt=""
                />
              </div>
              <div className="col-start-1 row-start-2 bg-[#1c1f52] flex justify-start py-6 px-5 max-sm:px-2 items-center flex-col text-center">
                <h1 className="text-4xl font-novaBold max-sm:text-2xl">100</h1>
                <p className="text-[14px] leading-4 max-sm:text-[10px]">
                  Multi-Nationals Select 2,850 Engineers during Batch 2023-24
                </p>
              </div>
              <div className="col-start-2 row-start-2 bg-[#74ae3d] flex justify-start py-6 px-5 max-sm:px-2 items-center flex-col text-center">
                <h1 className="text-4xl font-novaBold max-sm:text-2xl">50</h1>
                <p className="text-[14px] leading-4 max-sm:text-[10px]">
                  Companies offering package of Rs. 15 LPA or more.
                </p>
              </div>
              <div className="row-span-2 col-start-3 row-start-2 bg-[#0173bc] flex justify-start pt-5 px-5 max-sm:px-2 max-sm:py-3 items-center flex-col text-center">
                <h1 className="text-4xl font-novaBold max-sm:text-2xl">118</h1>
                <p className="text-[14px] leading-4 max-sm:text-[10px]">
                  Core Engineering Companies Select 950 Students from Mechanical, Automobile, Electrical, Electronics & Communication, and Civil Engineering Branches
                </p>
              </div>
              <div className="h-60 row-span-2 row-start-3 bg-[#00a362] flex justify-start pt-5 px-5 items-center max-sm:py-3 flex-col text-center">
                <h1 className="text-4xl font-novaBold max-sm:text-2xl">500</h1>
                <p className="text-[14px] leading-4 max-sm:text-[10px]">
                  In the Batch 2023-24 campus placements at AKG University, leading Fortune 500 companies like (Google, Accenture, Capgemini, Intel, Qualcomm, Cisco, JP Morgan, PwC, and Oracle) selected a large number of engineering students.
                </p>
              </div>
              <div className="col-start-3 row-start-4 bg-[#f47621] flex justify-start py-6 px-5 items-center max-sm:py-3 flex-col text-center">
                <h1 className="text-4xl font-novaBold max-sm:text-2xl">100</h1>
                <p className="text-[14px] leading-4 max-sm:text-[10px]">
                  Companies offering 10 LPA or more salary package made 100+
                  selections
                </p>
              </div>
              <div className="h-44 row-span-2 col-start-1 row-start-4 bg-[#5c5c5c] flex justify-start pt-5 px-5 max-sm:py-3 items-center flex-col text-center">
                <h1 className="text-4xl font-novaBold max-sm:text-2xl">50</h1>
                <p className="text-[14px] leading-4 max-sm:text-[10px]">
                  MNCs among the India's Top 100 companies have made 500+
                  offers.
                </p>
              </div>
            </div>
          </div>
        </main>
        <PlacementData placementsData={placementsData} />
        <LogoSlider />
        <ReviewSlider />
        <PlacementLinks />
      </section>
    </>
  );
};

export default PlacementEngineering;