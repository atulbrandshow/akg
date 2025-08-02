"use client";

import ScholarshipHighlight from "@/Components/ScholarshipHighlight";
import { useState } from "react";

const Admissions = ({ onApplyNow }) => {
const [showUndergraduateCourses, setShowUndergraduateCourses] = useState(false);
  const [showPostgraduateCourses, setShowPostgraduateCourses] = useState(false);
  const [showDoctoralCourses, setShowDoctoralCourses] = useState(false);

  

  return (
    <>
      <section className="py-12 w-full">
        <div className="relative flex justify-center px-1 md:px-12 lg:px-24">
          <div className="container max-w-full lg:max-w-[1400px] flex max-xl:flex-col-reverse gap-10">
            <div className="max-w-3xl max-2xl:max-w-xl max-xl:w-full px-2">
              <div className="mb-5">
                <h1 className="text-xl font-novaReg mb-3">
                  AKG University
                  <br className="w-auto" />
                  <div className="">
                    <span className="text-5xl max-sm:text-3xl max-sm:py-0.5 py-1 inline-block font-novaReg lg:text-5xl bg-btn-gradient animate-gradient text-white text-center w-fit h-fit px-2.5">
                      Admissions
                    </span>
                  </div>
                </h1>
                <p className="bg-[#eeeeee] max-sm:leading-none max-sm:max-w-52 text-lg font-novaReg py-1 px-2.5 w-fit mb-4">
                  Apply for Admissions at AKG University
                </p>
              </div>
              <p className="pb-4 max-sm:leading-none font-novaReg text-justify">
                AKG University offers admissions to a comprehensive range of academic programs spanning undergraduate, postgraduate, and doctoral levels, all designed to foster innovation, critical thinking, and career readiness.
              </p>
              <div className="border-l-4 border-[#fecc00] pl-5 max-w-full lg:max-w-[420px] mt-5">
                <p className="mb-4 font-novaReg text-[18px] leading-[24px] italic">
                  Choose the program that interests you and make a wise decision in your life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full pb-16 flex justify-center mt-10">
        <div className="max-w-full lg:max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 max-sm:mx-5 relative">
          {/* Undergraduate Programs */}
          <div className="relative w-full h-[342px] flex flex-col items-center justify-between">
            <div className="group bg-white border border-gray-300 rounded-lg shadow-lg w-full h-full flex flex-col items-center justify-center transition-transform duration-100 ease-in-out hover:bg-blue-950 relative">
              <img
                src="/image/admission/admission-icon-cap-black.webp"
                alt="dynamic"
                className="object-cover w-20 max-sm:w-16 max-sm:mb-20 mb-16 transition-opacity duration-100 ease-in-out group-hover:opacity-0"
              />
              <img
                src="/image/admission/admission-icon-cap-white.webp"
                alt="dynamic"
                className="absolute w-20 max-sm:w-16 max-sm:mb-20 mb-16 inset-x-auto inset-y-auto object-cover opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100"
              />
              <h2 className="text-xl font-novaBold max-sm:font-novaSemi text-black group-hover:text-white absolute bottom-20">
                Undergraduate Programs
              </h2>
              <p className="text-black max-sm:text-sm font-novaReg text-center group-hover:text-white absolute bottom-6">
                Explore our
                <br />
                Undergraduate programs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-evenly mt-4 w-full relative">
                <button
                onClick={() => onApplyNow('undergraduate')}
                className="flex-1 bg-btn-gradient animate-gradient uppercase text-sm font-novaSemi w-full sm:w-48 text-center px-4 py-2.5 mb-2 sm:mb-0 sm:mr-2 rounded-md text-white cursor-pointer"
              >
                Apply Now
              </button>

              <div className="relative flex-1">
                <a
                  href="#"
                  id="undergraduate-program"
                  onMouseEnter={() => setShowUndergraduateCourses(true)}
                  onMouseLeave={() => setShowUndergraduateCourses(false)}
                  className="block bg-white uppercase text-sm font-novaReg border border-black w-full sm:w-48 text-center text-black px-4 py-2 rounded-md hover:bg-blue-950 hover:text-white"
                >
                  Our Program
                </a>
                {showUndergraduateCourses && (
                  <div className="absolute bottom-full left-0 w-full min-w-[300px] bg-white border border-gray-300 rounded-lg shadow-xl p-4 z-50 mb-2">
                    <h3 className="text-lg font-novaBold text-blue-950 mb-3">Undergraduate Courses</h3>
                    <ul className="font-novaReg space-y-2">
                      <li className="hover:text-blue-700 transition-colors">• Bachelor of Technology</li>
                      <li className="hover:text-blue-700 transition-colors">• Bachelor of Business Administration</li>
                      <li className="hover:text-blue-700 transition-colors">• Bachelor of Computer Application</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Postgraduate Programs */}
          <div className="relative w-full h-[342px] flex flex-col items-center justify-between">
            <div className="group bg-white border border-gray-300 rounded-lg shadow-lg w-full h-full flex flex-col items-center justify-center transition-transform duration-100 ease-in-out hover:bg-blue-950 relative">
              <img
                src="/image/admission/admission-icon-cap-black.webp"
                alt="dynamic"
                className="object-cover w-20 max-sm:w-16 max-sm:mb-20 mb-16 transition-opacity duration-100 ease-in-out group-hover:opacity-0"
              />
              <img
                src="/image/admission/admission-icon-cap-white.webp"
                alt="dynamic"
                className="absolute w-20 max-sm:w-16 max-sm:mb-20 mb-16 inset-x-auto inset-y-auto object-cover opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100"
              />
              <h2 className="text-xl font-novaBold max-sm:font-novaSemi text-black group-hover:text-white absolute bottom-20">
                Postgraduate Programs
              </h2>
              <p className="text-black max-sm:text-sm text-center font-novaReg group-hover:text-white absolute bottom-6">
                Explore our
                <br />
                Postgraduate programs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-evenly mt-4 w-full relative">
             <button
                onClick={() => onApplyNow('postgraduate')}
                className="flex-1 bg-btn-gradient animate-gradient uppercase text-sm font-novaSemi w-full sm:w-48 text-center px-4 py-2.5 mb-2 sm:mb-0 sm:mr-2 rounded-md text-white cursor-pointer"
              >
                Apply Now
              </button>
              <div className="relative flex-1">
                <a
                  href="#"
                  id="postgraduate-program"
                  onMouseEnter={() => setShowPostgraduateCourses(true)}
                  onMouseLeave={() => setShowPostgraduateCourses(false)}
                  className="block bg-white border uppercase font-novaReg text-sm border-black w-full sm:w-48 text-center text-black py-2.5 rounded-md hover:bg-blue-950 hover:text-white"
                >
                  Our Program
                </a>
                {showPostgraduateCourses && (
                  <div className="absolute bottom-full left-0 w-full min-w-[300px] bg-white border border-gray-300 rounded-lg shadow-xl p-4 z-50 mb-2">
                    <h3 className="text-lg font-novaBold text-blue-950 mb-3">Postgraduate Courses</h3>
                    <ul className="font-novaReg space-y-2">
                      <li className="hover:text-blue-700 transition-colors">• Master of Business Administration</li>
                      <li className="hover:text-blue-700 transition-colors">• Master of Technology</li>
                      <li className="hover:text-blue-700 transition-colors">• Master of Computer Applications</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Doctoral Programs */}
          <div className="relative w-full h-[342px] flex flex-col items-center justify-between">
            <div className="group bg-white border border-gray-300 rounded-lg shadow-lg w-full h-full flex flex-col items-center justify-center transition-transform duration-100 ease-in-out hover:bg-blue-950 relative">
              <img
                src="/image/admission/admission-icon-cap-black.webp"
                alt="dynamic"
                className="object-cover w-20 max-sm:w-16 max-sm:mb-20 mb-16 transition-opacity duration-100 ease-in-out group-hover:opacity-0"
              />
              <img
                src="/image/admission/admission-icon-cap-white.webp"
                alt="dynamic"
                className="absolute w-20 max-sm:w-16 max-sm:mb-20 mb-16 inset-x-auto inset-y-auto object-cover opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100"
              />
              <h2 className="text-xl font-novaBold max-sm:font-novaSemi text-black group-hover:text-white absolute bottom-20">
                Doctoral Programs
              </h2>
              <p className="text-black max-sm:text-sm text-center font-novaReg group-hover:text-white absolute bottom-6">
                Explore our
                <br />
                Doctoral programs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-evenly mt-4 w-full relative">
              <button
                onClick={() => onApplyNow('doctoral')}
                className="flex-1 bg-btn-gradient animate-gradient uppercase text-sm font-novaSemi w-full sm:w-48 text-center px-4 py-2.5 mb-2 sm:mb-0 sm:mr-2 rounded-md text-white cursor-pointer"
              >
                Apply Now
              </button>
              <div className="relative flex-1">
                <a
                  href="#"
                  id="doctoral-program"
                  onMouseEnter={() => setShowDoctoralCourses(true)}
                  onMouseLeave={() => setShowDoctoralCourses(false)}
                  className="block bg-white border uppercase font-novaReg text-sm border-black w-full sm:w-48 text-center text-black py-2.5 rounded-md hover:bg-blue-950 hover:text-white"
                >
                  Our Program
                </a>
                {showDoctoralCourses && (
                  <div className="absolute bottom-full left-0 w-full min-w-[300px] bg-white border border-gray-300 rounded-lg shadow-xl p-4 z-50 mb-2">
                    <h3 className="text-lg font-novaBold text-blue-950 mb-3">Doctoral Programs</h3>
                    <ul className="font-novaReg space-y-2">
                      <li className="hover:text-blue-700 transition-colors">• Ph.D. in Engineering</li>
                      <li className="hover:text-blue-700 transition-colors">• Ph.D. in Management</li>
                      <li className="hover:text-blue-700 transition-colors">• Ph.D. in Computer Applications</li>
                      <li className="hover:text-blue-700 transition-colors">• Interdisciplinary Research</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScholarshipHighlight heading={"Early Access Grant"} desc={"Higher Education Pathway 2025-2026"} />
      <section className=" max-w-7xl max-xl:max-w-5xl max-lg:max-w-2xl max-md:max-w-lg mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
          <div className="min-h-52 flex flex-col group">
            <h4 className="text-xl sm:text-2xl font-novaReg group-hover:text-[#fecc00] transition-colors duration-300 ease-in-out">Education Loan Facility</h4>
            <p className="pt-2 max-sm:leading-none text-base font-novaReg line-clamp-2">Get a loan of up to ₹4 lakh without any security. To take advantage of this facility, visit your nearest PNB or Indian Overseas Bank branch today.</p>
            <button onClick={() => router.push("/admissions/education-loan")} className="my-3 w-fit px-5 py-2.5 font-novaReg border border-gray-200 rounded-md uppercase text-sm tracking-widest hover:bg-indigo-950 hover:text-white transition duration-300 ease-in-out">View More Details</button>
            <div className="mt-auto">
              <img className="w-full h-48 max-sm:h-40 object-cover" src="/image/admission/scholar.webp" alt="scholar" />
            </div>
          </div>
          <div className="min-h-52 flex flex-col group">
            <h4 className="text-xl sm:text-2xl font-novaReg group-hover:text-[#fecc00] transition-colors duration-300 ease-in-out">AKG Advantages</h4>
            <p className="pt-2 max-sm:leading-none text-base font-novaReg line-clamp-2">Industry-Institute Interface: Bridging Academics with Transparent Learning and Objective Assessment</p>
            <button onClick={() => router.push("/about/core-values")} className="my-3 w-fit px-5 py-2.5 font-novaReg border border-gray-200 rounded-md uppercase text-sm tracking-widest hover:bg-indigo-950 hover:text-white transition duration-300 ease-in-out">View More Details</button>
            <div className="mt-auto">
              <img className="w-full h-48 max-sm:h-40 object-cover" src="/image/admission/enlab_4.webp" alt="advantages" />
            </div>
          </div>
          <div className="min-h-52 flex flex-col group">
            <h4 className="text-xl sm:text-2xl font-novaReg group-hover:text-[#fecc00] transition-colors duration-300 ease-in-out">Why AKGU ?</h4>
            <p className="pt-2 max-sm:leading-none text-base font-novaReg line-clamp-2">History, Culture, Innovation, Technology, and more—AKG University provides a diverse array of opportunities.</p>
            <button onClick={() => router.push("/about/vision-and-mission")} className="my-3 w-fit px-5 py-2.5 font-novaReg border border-gray-200 rounded-md uppercase text-sm tracking-widest hover:bg-indigo-950 hover:text-white transition duration-300 ease-in-out">View More Details</button>
            <div className="mt-auto">
              <img className="w-full h-48 max-sm:h-40 object-cover" src="/image/building/building6.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;