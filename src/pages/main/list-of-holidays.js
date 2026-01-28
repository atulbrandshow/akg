"use client";

import { useState } from "react";
import Header from "@/Components/Header";
import { gazettedHolidays, restrictedHolidays } from "@/Json/HolidaysData";
import ListOfHolidays from "../pagesComp/ListOfHolidays";


export const Home = () => {
  const [activeTab, setActiveTab] = useState("gazetted");

  const holidays = activeTab === "gazetted" ? gazettedHolidays : restrictedHolidays;
  return (
    <>
      <div className="bg-gray-100">
        <Header
          title={<>List of Holidays <br /> 2024</>}
          bgKey="BG13"
          buttonType={"link"}
          buttonText="Apply Now"
          buttonLink="/"
          gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
        />
        <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-5 px-2">
          <div className="w-full">
            <ListOfHolidays holidays={holidays} activeTab={activeTab} />
          </div>
        </section>
      </div>
    </>
  )
}


export default Home;