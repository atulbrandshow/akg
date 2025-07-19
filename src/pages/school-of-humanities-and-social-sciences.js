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
import { ArrowDownToLine, Check, Laptop, Cpu, Cog, Biohazard, Building, PlugZap } from 'lucide-react';
import React, { useState } from 'react'

const departments = [
  { name: 'Humanities and Social Sciences', icon: <Laptop size={32} strokeWidth={1} /> }
]

const placementsData = [
  {
    title: "Psychology graduates achieve remarkable placements at AKGU",
    description: `The Psychology department at AKGU has seen exceptional success in campus placements this year. 
    With a curriculum focused on applied psychology, behavioral analysis, and counseling techniques, graduates attracted top employers 
    in the healthcare and education sectors. Leading organizations such as Apollo Hospitals, Max Healthcare, and various educational institutions visited the campus, 
    offering roles to over 120 students. The highest package reached Rs. 12 LPA, showcasing the demand for skilled psychology professionals.`,
    companies: 20,
    studentsSelected: 120,
    highestPackage: "12",
  },
  {
    title: "Journalism and Mass Communication students secure prestigious roles",
    description: `AKGU's Journalism and Mass Communication students have made significant strides in the media industry. This year, 
    more than 25 companies, including NDTV, Times of India, Zee News, and radio channels, hired over 80 students. With an emphasis on digital media and content creation, 
    graduates are well-equipped for dynamic roles in the fast-evolving media landscape. The highest package for this stream was Rs. 10 LPA, reflecting the competitive nature of the field.`,
    companies: 25,
    studentsSelected: 80,
    highestPackage: "10",
  },
];


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
    'Bachelor of Arts in English',
    'Bachelor of Arts in Psychology',
    'Bachelor of Arts in Sociology',
    'Bachelor of Arts in Political Science',
    'Bachelor of Arts in History',
    'Bachelor of Arts in Journalism and Mass Communication',
    'Bachelor of Fine Arts',
    'Bachelor of Arts in Economics'
  ],
  'Post Graduate': [
    'Master of Arts in English',
    'Master of Arts in Psychology',
    'Master of Arts in Sociology',
    'Master of Arts in Political Science',
    'Master of Arts in History',
    'Master of Arts in Journalism and Mass Communication',
    'Master of Fine Arts',
    'Master of Arts in International Relations'
  ],
};



const CustomButton = ({ children, onClick, className }) => (
  <button className={`sm:pl-2 pl-1 sm:pr-8 pr-1 py-1 sm:py-2 w-full rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 text-["7px"] sm:text-base ${className}`} onClick={onClick}>
    {children}
  </button>
)

const LanguageCulture = () => {
  const [activeView, setActiveView] = useState('departments');
  const [hoveredProgramme, setHoveredProgramme] = useState(null);

  const description = "Empowering future leaders with critical thinking, cultural awareness, and practical skills, our programs prepare students to excel in fields like psychology, sociology, political science, and communication studies."

  const gradientColors = ['#8711c1', '#2472fc'];
  return (
    <>
      <SchoolHeader banner="bg-BG17" heading="AKGU School of Humanities & Social Sciences" desc={description} gradientColors={gradientColors} />
      <section className='max-w-7xl mx-auto px-5 max-sm:px-2 py-10'>
        <div>
          <div className='sm:flex justify-between'>
            <h2 className='font-novaReg text-4xl'>School of Humanities & Social Sciences</h2>
            <button className='lg:px-6 sm:px-3 mt-3 sm:mt-0 py-3 px-5 md:px-4 lg:py-2 text-sm bg-black text-white font-novaSemi uppercase tracking-wider rounded-full hover:bg-gray-300 hover:text-black hover:border border-gray-300 transition duration-200 ease-linear flex items-center lg:gap-2 gap-3 sm:gap-1 md:gap-1'><ArrowDownToLine size={18} strokeWidth={2} /> Download Brochure</button>
          </div>
          <h4 className='text-xl font-semibold my-3'>Overview</h4>
          <p className='font-novaReg'>Welcome to the AKGEC School of Humanities and Social Sciences, a vibrant center for intellectual exploration and academic excellence. Since its inception, SHSS has established itself as a hub of cultural and creative engagement, attracting students from across the globe to foster a multicultural and inclusive environment.</p>
          <p className='font-novaReg my-3'>With a focus on student-centered learning, project-based methodologies, and a curriculum designed to encourage critical thinking and innovation, SHSS equips students with the skills needed for complex problem-solving and a lifelong passion for knowledge.</p>
          <p className='font-novaReg'>Our mission is to cultivate well-rounded individuals who possess both the technical expertise and social awareness to thrive in various professional fields, tackling global challenges with informed, ethical, and innovative solutions.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 sm:py-10'>
          <div className="bg-[#f6ffaa] text-black rounded-3xl overflow-hidden pb-5">
            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
              <img className='w-8 h-8' src="/image/icons/icon-return-on-investment.png" alt="investment logo" />
            </div>
            <div className='p-4'>
              <h2 className="text-2xl font-bold mb-2 max-lg:text-xl max-md:text-lg">Objective</h2>
              <div className=''>
                <p className="">
                  The programmes under the <strong>AKGEC School of Humanities & Social Sciences</strong> are designed to enable students to:
                </p>
                <ul className='mt-3 list-disc pl-5 font-novaReg space-y-2'>
                  <li className='leading-5'>Develop a deep understanding of social sciences and humanities, essential for analyzing and solving complex societal issues</li>
                  <li className='leading-5'>Cultivate critical thinking, creativity, and analytical skills necessary for meaningful contributions in diverse professional fields</li>
                  <li className='leading-5'>Gain an appreciation for diverse cultural perspectives and social dynamics</li>
                  <li className='leading-5'>Pursue intellectual maturity, ethical growth, and personal development to foster positive societal change</li>
                  <li className='leading-5'>Enhance their written, oral, and interpersonal communication skills to effectively engage in professional and public discourse</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#96fffa] text-black rounded-3xl overflow-hidden pb-5">
            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
              <img className='w-8 h-8' src="/image/icons/icon-return-on-investment.png" alt="investment logo" />
            </div>
            <div className='p-4'>
              <h2 className="text-2xl font-bold mb-2 max-lg:text-xl max-md:text-lg">Key Highlights</h2>
              <div className=''>
                <ul className='mt-3 list-disc pl-5 font-novaReg space-y-2'>
                  <li className='leading-5'>Awarded 'Best Emerging School of Humanities & Social Sciences in the North' by the National Education Awards in 2019</li>
                  <li className='leading-5'>State-of-the-art research and cultural center, fostering interdisciplinary research and creative expression</li>
                  <li className='leading-5'>Opportunities for global internships and exchange programs in collaboration with universities in the UK, Canada, and Japan, promoting cross-cultural learning</li>
                  <li className='leading-5'>Regular participation in national and international conferences, encouraging students to present and publish their research</li>
                  <li className='leading-5'>Strong alumni network with graduates pursuing successful careers in fields such as education, public policy, and international relations</li>
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
              {activeView === 'departments' && <Check className="inline-block mr-2 sm:h-7 sm:w-7 bg-white rounded-full p-1 text-black" strokeWidth={3} />}
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
                  <div className="flex items-center px-5 space-x-4 h-24">
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

export default LanguageCulture