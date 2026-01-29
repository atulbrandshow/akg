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
  { name: "Institution Social Responsibility", link: "" },
];

export const Home = () => {
  const [currentSemester, setCurrentSemester] = useState("even");
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
        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-5 gap-10 px-2 max-sm:gap-0">
          <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
            <div className="container mx-auto">
              <div className="px-3 max-sm:px-0">
                <h2 className="text-2xl max-2xl:text-3xl max-lg:text-2xl font-novaSemi max-sm:leading-none mb-2.5">
                  Optimal Knowledge Acquisition at AKG University
                </h2>
                <p className="mb-5 mt-2.5 max-2xl:text-md font-novaReg leading-6 max-2xl:leading-5">
                  At AKG University, students cultivate the ability to perceive
                  and comprehend the world around them. The learning experience
                  at AKG emphasizes the development of conceptual frameworks,
                  embracing outcomes, retaining practical knowledge, and
                  mastering methods and systems. Students engage in analyzing
                  and discussing ideas while also fostering behaviors suited to
                  various contexts.
                </p>
              </div>
              <div className="px-3 max-sm:px-0">
                <h2 className="text-2xl max-2xl:text-3xl max-lg:text-2xl font-novaSemi mb-2 leading-9 max-sm:leading-none">
                  Your Learning Adventure Begins: Unveiling AKG University's
                  Transformative Practices
                </h2>
                <p className="font-novaReg text-md mb-5 mt-2.5 leading-6">
                  As you step into AKG University's realm of transformative
                  practices, remember that you are not just a student; you are
                  an active participant in your growth story.
                </p>
                <ul className="mb-4 list-disc ml-5 text-[14px] lg:text-md md:text-[15px]">
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Active Learning -</b> Engage, Participate, Excel
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Project-Based Learning -</b> Learning by Doing
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Collaborative Learning -</b> Unleash the Power of We
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Technology Integration -</b> Where Education Meets
                    Innovation
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Personalized Learning -</b> Your journey, your pace, your
                    unique path to success
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Cross-Cultural Sensitivity -</b> Connecting Worlds,
                    Expanding Minds
                  </li>
                </ul>
                <p className="font-novaReg mb-5 mt-2.5 leading-6">
                  AKGU's Academic Focus: Pioneering Your Path to Success At AKG
                  University, our academic focus is designed to prepare students
                  for the complexities of the modern world. We integrate deep
                  knowledge with practical skills to ensure our graduates excel
                  in their careers and contribute to societal advancement.
                </p>
                <ul className="mb-4 list-disc ml-5 text-[14px] lg:text-md md:text-[15px]">
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Comprehensive Expertise -</b> World-class faculty provide
                    both theoretical knowledge and practical application
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Innovative Program Design -</b> Cross-disciplinary
                    courses that foster holistic learning
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Career-Ready Graduates -</b> Emphasis on research,
                    industry engagement, and job placement
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Advanced Technology Integration -</b> Hands-on experience
                    with cutting-edge technologies like AI and blockchain
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Personalized Learning -</b> Your journey, your pace, your
                    unique path to success
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Inclusive Environment -</b> Welcoming and supportive
                    community for students from all backgrounds
                  </li>
                </ul>
              </div>
              <div className="px-3 max-sm:px-0">
                <h2 className="text-2xl max-2xl:text-3xl max-lg:text-2xl font-novaSemi mb-2 leading-9 max-sm:leading-none">
                  Embracing Outcome-Based Education: Your Path to Empowerment
                </h2>
                <p className="font-novaReg mb-5 mt-2.5 leading-6">
                  At AKGU, Outcome-Based Education (OBE) is central to our
                  teaching philosophy. We are committed to providing a
                  structured learning experience that focuses on achieving
                  specific educational outcomes through continuous feedback and
                  improvement.
                </p>
                <ul className="mb-4 list-disc ml-5 text-[14px] lg:text-md md:text-[15px]">
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Defined Learning Outcomes -</b> Clear objectives guiding
                    student achievements
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Customized Curriculum -</b> Instruction designed to meet
                    individual learning needs
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Comprehensive Assessment -</b> Regular evaluations to
                    track progress and ensure mastery
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Focus on Improvement -</b> Commitment to refining
                    educational methods and achieving excellence
                  </li>
                </ul>
              </div>
              <div className="px-3 max-sm:px-0">
                <h2 className="text-2xl max-2xl:text-3xl max-lg:text-2xl font-novaSemi mb-2 leading-9 max-sm:leading-none">
                  Your Gateway to a Cutting-Edge Education
                </h2>
                <p className="font-novaReg mb-5 mt-2.5 leading-6">
                  At AKGU, we believe that education goes beyond traditional
                  learning. Our curriculum is designed to equip students with
                  the skills and knowledge required to excel in today’s
                  competitive environment. We focus on a comprehensive approach
                  that integrates both theoretical knowledge and practical
                  experience.
                </p>
                <ul className="mb-4 list-disc ml-5 text-[14px] lg:text-md md:text-[15px]">
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Blended Learning Approaches -</b> Blended learning
                    approach integrating in-person teaching and online
                    resources.
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Data Analytics and Artificial Intelligence -</b>{" "}
                    Utilization of data analytics and AI tools for personalized
                    learning insights and improvement.
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Online Learning Resources -</b> Vast online resources
                    including e-books and research databases for comprehensive
                    learning.
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>State-of-the-Art Infrastructure -</b> Technologically
                    advanced campus with high-speed internet and cutting-edge
                    ICT facilities.
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>E-Assessments -</b> Online assessments for remote exams
                    and instant feedback, enhancing evaluation efficiency.
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Industry-Relevant Simulations -</b> ICT simulations and
                    virtual labs for practical experience, particularly in
                    technical fields.
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>E-Learning Modules -</b> Self-paced e-learning modules
                    from platforms like Coursera and NPTEL for personalized
                    learning.
                  </li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5">
                    <b>Digital Learning Platforms -</b> Access to advanced
                    learning management systems and online platforms for
                    flexible learning.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
            <Calendar
              currentSemester={currentSemester}
              setCurrentSemester={setCurrentSemester}
            />
            <SideBar title={"About Us"} LinkList={SideBarLink} />
          </div>
        </section>
      </div>
      <TeachingPractices />
    </>
  );
};

export default Home;
