"use client";

import Header from "@/Components/Header";
import { holidays2026 } from "@/Json/HolidaysData";
import ListOfHolidays from "../pagesComp/ListOfHolidays";

export const Home = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Header
          title={<>List of Holidays <br /> 2026</>}
          bgKey="BG13"
          buttonType={"link"}
          buttonText="Apply Now"
          buttonLink="/"
          gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
        />
        <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-5 px-2">
          <div className="w-full">
            <ListOfHolidays holidays={holidays2026} title="List of Holidays 2026" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home;