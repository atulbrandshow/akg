"use client";

import Header from "@/Components/Header";
import TeachingPractices from "../pagesComp/TeachingPractices";

export const Home = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Header
          title={"Teaching Practices"}
          buttonType={"link"}
          bgKey="BG9"
          position="center"
          buttonText="Apply Now"
          buttonLink="/"
          gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
        />
        <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-5 px-4 max-sm:px-2">
          <div className="w-full max-w-5xl mx-auto">
            <TeachingPractices />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
