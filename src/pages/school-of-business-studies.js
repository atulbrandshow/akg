'use client';

import { LogoSlider } from '@/Components';
import AnnouncementSlider from '@/Components/AnnouncementSlider';
import DirectorMessage from '@/Components/DirectorMessage';
import FacultySlider from '@/Components/FacultySlider';
import HighlightsSection from '@/Components/HighlightsSection';
import PlacementData from '@/Components/PlacementData';
import ReviewSlider from '@/Components/ReviewSlider';
import SchoolHeader from '@/Components/SchoolHeader'
import SliderEvent from '@/Components/SliderEvent';
import { Testimonial } from '@/Components/Testimonial';
import { ArrowDownToLine, Check, Laptop, Cog } from 'lucide-react';
import React, { useState } from 'react'

const departments = [
  { name: 'Management', icon: <Laptop size={32} strokeWidth={1} /> },
  { name: 'Business Implementation', icon: <Cog size={32} strokeWidth={1} /> },
]

const placementsData = [
  {
    title: "Business Administration and Finance graduates achieve top placements at AKGU",
    description: `The Business Administration and Finance departments at AKGU have excelled in campus placements this year. 
    With a curriculum that emphasizes strategic management, financial analytics, and data-driven decision-making, students attracted top employers 
    in the finance and consulting sectors. Leading companies such as Deloitte, KPMG, HDFC Bank, ICICI Bank, and PwC visited the campus, 
    offering lucrative roles to over 300 students. The highest international package reached Rs. 30 LPA, and the top national package was Rs. 18 LPA.`,
    companies: 50,
    studentsSelected: 300,
    highestPackage: "30",
  },
  {
    title: "Marketing and International Business students secure high-profile roles",
    description: `AKGU's Marketing and International Business students have made a strong impression in the corporate world. This year, 
    over 35 companies, including Amazon, PepsiCo, Nestlé, and Reliance, hired more than 150 students. With the focus on global market trends 
    and digital marketing strategies, graduates are well-prepared for roles in multinational corporations and fast-paced business environments. 
    The highest package for this stream was Rs. 16 LPA, highlighting the demand for AKGU's skilled business professionals.`,
    companies: 35,
    studentsSelected: 150,
    highestPackage: "16",
  },
]
const programmes = [
  'Graduate',
  'Post Graduate',
  'Doctoral',
  'Diploma',
  'Integrated',
  'Certificate'
]

const courses = {
  'Graduate': [
    'Bachelor of Business Administration (BBA)',
    'BBA in Marketing',
    'BBA in Finance & Accounting',
    'BBA in International Business',
    'B.Com (Hons.) in Financial Markets',
    'BBA in Business Analytics',
    'B.Com (Hons.) in Banking & Insurance',
    'Bachelor of Business Administration (BBA) with ACCA Certification'
  ],
  'Post Graduate': [
    'Master of Business Administration (MBA)',
    'MBA in Human Resource Management',
    'MBA in Finance',
    'MBA in Marketing',
    'MBA in International Business',
    'MBA in Business Analytics',
    'M.Com (Hons.) in Financial Markets',
    'Master of Business Administration (MBA) with Specialization in Entrepreneurship'
  ]
};



const CustomButton = ({ children, onClick, className }) => (
  <button className={`sm:pl-2 pl-1 sm:pr-8 pr-1 py-1 sm:py-2 w-full rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 text-["7px"] sm:text-base ${className}`} onClick={onClick}>
    {children}
  </button>
)

const BusinessStudies = () => {
  const [activeView, setActiveView] = useState('departments');
  const [hoveredProgramme, setHoveredProgramme] = useState(null);

  const description = "Equipping future business leaders with strategic thinking, innovative approaches, and real-world experience, our programs prepare students to excel in fields like finance, marketing, entrepreneurship, and management."

  const gradientColors = ['#f5c900', '#210cae'];
  return (
    <>
      <SchoolHeader banner="bg-BG17" heading="AKGU School of Business Studies" desc={description} gradientColors={gradientColors} />
      <section className='max-w-7xl mx-auto px-5 max-sm:px-2 py-10'>
        <div>
          <div className='sm:flex justify-between'>
            <h2 className='font-novaReg text-4xl md:w-1/2 lg:w-[60%] sm:w-[60%]'>School of Business Studies</h2>
            <button className='lg:px-6 sm:px-3 mt-3 sm:mt-0 py-3 px-5 md:px-4 lg:py-2 text-sm bg-blue-600 text-white font-novaSemi uppercase tracking-wider rounded-full hover:bg-gray-300 hover:text-blue-600 hover:border border-gray-300 transition duration-200 ease-linear flex items-center  lg:gap-2 gap-3 sm:gap-1 md:gap-1'>
              <ArrowDownToLine size={18} strokeWidth={2} /> Download Brochure
            </button>
          </div>
          <h4 className='text-xl font-semibold my-3'>Overview</h4>
          <p className='font-novaReg'>
            The AKGU School of Business Studies is dedicated to developing the next generation of business leaders and innovators. Our programs combine rigorous academic learning with practical experiences that help students build essential skills in areas such as business strategy, analytics, and leadership.
          </p>
          <p className='font-novaReg my-3'>
            We prioritize experiential learning, with a curriculum designed around hands-on projects, internships, and industry-driven case studies. The school features modern facilities, including smart classrooms, collaborative workspaces, a business simulation lab, a well-equipped library, and various recreational amenities.
          </p>
          <p className='font-novaReg'>
            With a distinguished faculty and a commitment to academic excellence, AKGU School of Business Studies offers comprehensive training that prepares students for rewarding careers in the corporate world. Our strong placement cell collaborates with leading companies such as Deloitte, Amazon, and HDFC Bank to provide outstanding career opportunities for our graduates.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 sm:py-10'>
          <div className="bg-[#96fffa] text-black rounded-3xl overflow-hidden pb-5">
            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
              <img className='w-8 h-8' src="/image/icons/icon-return-on-investment.png" alt="investment logo" />
            </div>

            <div className='p-4'>
              <h2 className="text-2xl font-bold mb-2 max-lg:text-xl max-md:text-lg">Objective</h2>
              <div className=''>
                <p className="">
                  The programmes offered by the <strong>AKGU School of Business Studies</strong> aim to empower students to:
                </p>
                <ul className='mt-3 list-disc pl-5 font-novaReg space-y-2'>
                  <li className='leading-5'>Develop a strategic mindset that enables them to analyze complex business situations and make informed decisions.</li>
                  <li className='leading-5'>Gain the skills and knowledge needed to become proficient business leaders in diverse industries.</li>
                  <li className='leading-5'>Understand organizational dynamics, cultivate analytical and critical thinking abilities, and enhance communication and leadership skills.</li>
                  <li className='leading-5'>Effectively interpret financial and market data to make impactful business decisions.</li>
                  <li className='leading-5'>Become ethical, socially responsible, and culturally aware professionals ready to contribute to society.</li>
                </ul>
              </div>
            </div>

          </div>
          <div className="bg-[#f6ffaa] text-black rounded-3xl overflow-hidden pb-5">
            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
              <img className='w-8 h-8' src="/image/icons/icon-return-on-investment.png" alt="investment logo" />
            </div>
            <div className='p-4'>
              <h2 className="text-2xl font-bold mb-2 max-lg:text-xl max-md:text-lg">Key Highlights</h2>
              <div className=''>
                <ul className='mt-3 list-disc pl-5 font-novaReg space-y-2'>
                  <li className='leading-5'>Ranked among the Top 10 Private Universities for Business Education in India as per the Times i3RC B-School Ranking 2020.</li>
                  <li className='leading-5'>Recognized as 'Best Emerging Business School' by Business Today and awarded 'Outstanding B-School in Innovation' at the EduTech Awards.</li>
                  <li className='leading-5'>Collaborates with prestigious international institutions like the University of Queensland, Singapore Management University, and Solvay Brussels School of Economics & Management for its Global Immersion Programs.</li>
                  <li className='leading-5'>Focused on fostering entrepreneurship through initiatives such as 'Start-Up Labs,' 'AKGU Incubator,' and 'Business Xcelerator Programs' for aspiring entrepreneurs.</li>
                  <li className='leading-5'>Partnership with the Chartered Institute of Management Accountants (CIMA), UK, offering dual certification programs in Finance & Management.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='w-full bg-[#f2f6ff] py-10 sm:py-20'>
        <div className="max-w-7xl mx-auto p-4 space-y-6 flex flex-col items-center">
          <div className="flex sm:space-x-2 justify-between bg-white md:w-[65%] lg:w-1/2 w-full sm:w-[75%] p-1 rounded-full border border-gray-300">
            <CustomButton
              className={`${activeView === 'departments' ? "text-start bg-cyan-500 text-white" : "bg-white text-black"
                }`}
              onClick={() => setActiveView('departments')}
            >
              {activeView === 'departments' && <Check className="inline-block mr-2 h-5 w-5 sm:h-7 sm:w-7 bg-white rounded-full p-1 text-black" strokeWidth={3} />}
              Departments
            </CustomButton>
            <CustomButton
              className={`${activeView === 'programmes' ? "text-start bg-cyan-500 text-white" : "bg-white text-black"
                }`}
              onClick={() => setActiveView('programmes')}
            >
              {activeView === 'programmes' && <Check className="inline-block mr-2 h-7 w-7 bg-white rounded-full p-1 text-black" strokeWidth={3} />}
              Programme 2024-25
            </CustomButton>
          </div>

          {activeView === 'departments' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departments.map((dept, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
                  <div className="flex items-center px-5 space-x-4 h-20">
                    {dept.icon}
                    <span className="font-medium text-sm">{dept.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeView === 'programmes' && (
            <div className="grid grid-cols-4 max-w-6xl w-full mx-auto" onMouseLeave={() => setHoveredProgramme(null)}>
              <div className="col-span-1 max-h-[28rem] flex flex-col justify-between">
                {programmes.map((prog, index) => (
                  <span
                    key={index}
                    className={`text-xl font-novaReg pl-5 border-b border-gray-300 flex items-center justify-start h-full cursor-pointer ${hoveredProgramme === prog ? 'bg-[#5f77ff] text-white' : 'bg-white text-black'}`}
                    onMouseEnter={() => setHoveredProgramme(prog)}
                  >
                    {prog}
                  </span>
                ))}
              </div>
              <div className="col-span-3 relative">
                <img src="/image/schools/group-students.jpg" alt="Students" className="w-full max-h-[28rem] object-bottom object-cover" />
                {(hoveredProgramme === 'Graduate' || hoveredProgramme === 'Post Graduate') && (
                  <div className="absolute top-0 left-0 w-96 h-full bg-white bg-opacity-90 flex items-start justify-start overflow-y-auto">
                    <div className="space-y-2">
                      {/* <h2 className="text-2xl font-novaReg px-4">{hoveredProgramme} Courses</h2> */}
                      {courses[hoveredProgramme].map((course, idx) => (
                        <p key={idx} className={`text-lg flex items-center font-novaReg justify-start h-full hover:bg-[#5f77ff] px-4 py-2 border-b border-gray-300`}>
                          {course}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <HighlightsSection />
      <DirectorMessage />
      <AnnouncementSlider />
      <ReviewSlider />
      <FacultySlider />
      <SliderEvent />
      <PlacementData placementsData={placementsData} />
      <Testimonial />
      <LogoSlider />
    </>
  )
}

export default BusinessStudies