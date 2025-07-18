"use client";

import Link from "next/link";
import { socialMediaLinks } from "@/Json/socialMediaLinks"

const StickyFooter = ({ ShowState }) => {

  return (
    <>
      <section className="max-w-screen-2xl mx-auto w-full duration-500">
        <div
          className={`transition-all overflow-hidden  
                z-50 fixed bottom-[50%] -right-7 flex justify-end items-center max-md:gap-2 gap-5 px-5 max-md:flex-col-reverse`}
        >
          <div className="flex items-center justify-end gap-5 px-2 py-3 max-md:flex-col fixed">
            <div className="max-md:hidden">
              <div className="flex flex-col items-end text-white max-md:p-2 justify-center overflow-hidden">
                {socialMediaLinks?.map((link, index) => (
                  <div key={index} className="relative group">
                    <Link href={link.url} target="_blank" className="bg-blue-700 flex items-center">
                      <span className="w-0 transition-all group-hover:w-20 overflow-hidden hover:visible group-hover:px-4 group-hover:py-1.5 rounded-lg text-xs duration-300">
                        {link.name}
                      </span>
                      <span className="flex w-10 border-b border-b-gray-50/20 h-10 items-center justify-center p-1 gap-2">
                        {link.icon}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={` max-w-screen-2xl mx-auto w-full  duration-500`}>
        <div className={`transition-all overflow-hidden ${ShowState ? "h-0" : "max-md:h-10"} z-50 fixed bottom-0 left-0 w-full flex justify-center items-center max-md:gap-2 gap-5 px-5 max-[400px]:px-2 max-md:flex-col-reverse`}>
          <div className="flex-1 max-md:flex max-md:items-center bg-btn-gradient animate-gradient text-white rounded-lg pt-2 pb-1 overflow-hidden w-full px-2">
            <marquee className="font-novaBold max-[400px]:text-sm">
              APPLY NOW for Ajay Kumar Garg University
            </marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default StickyFooter;
