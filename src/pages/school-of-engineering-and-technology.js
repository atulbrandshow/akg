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
  { name: 'Computer Science & Engineering (CSE)', icon: <Laptop size={32} strokeWidth={1} /> },
  { name: 'Information Technology (IT)', icon: <Cpu size={32} strokeWidth={1} /> },
  { name: 'Mechanical Engineering (ME)', icon: <Cog size={32} strokeWidth={1} /> },
  { name: 'Civil Engineering (CE)', icon: <Building size={32} strokeWidth={1} /> },
  { name: 'Electrical Engineering (EE)', icon: <PlugZap size={32} strokeWidth={1} /> },
  { name: 'Biotechnology', icon: <Biohazard size={32} strokeWidth={1} /> },
];

const placementsData = [
  {
    title: "Computer Science and IT branches lead campus placements at AKGEC",
    description: `The Computer Science and Information Technology departments at AKGEC have set new records in campus placements this year. 
    With a focus on cutting-edge technologies like Artificial Intelligence, Machine Learning, Data Science, and Cloud Computing, 
    students have demonstrated exceptional skills and innovation, attracting some of the biggest IT firms in the country. 
    Renowned companies such as TCS, Infosys, Wipro, Capgemini, Cognizant, and Accenture visited the campus, offering lucrative packages 
    to over 500 students. The highest international package reached Rs. 45 LPA, and the national package went up to Rs. 20 LPA.`,
    companies: 80,
    studentsSelected: 500,
    highestPackage: "45",
  },
  {
    title: "Mechanical, Mechatronics, and Automobile Engineering placements soar at AKGEC",
    description: `The Mechanical, Mechatronics, and Automobile Engineering departments at AKGEC have witnessed tremendous success in 
    placements this year, with over 40 companies hiring more than 200 students. Companies like Tata Motors, Hero MotoCorp, 
    Mahindra & Mahindra, and Escorts visited the campus, offering packages as high as Rs. 12 LPA. These placements are a testament 
    to the college's state-of-the-art laboratories and industry-relevant curriculum, which enable students to gain practical 
    experience in areas such as robotics, automation, and advanced automotive systems.`,
    companies: 40,
    studentsSelected: 200,
    highestPackage: "12",
  },
  {
    title: "Civil and Electrical Engineering students at AKGEC excel in placements",
    description: `AKGEC's Civil and Electrical Engineering branches have achieved commendable placement results this year, with 
    more than 50 top companies, including L&T, Shapoorji Pallonji, Siemens, and ABB, selecting over 150 students. Civil 
    Engineering students were particularly successful in securing roles in construction management, urban planning, and 
    structural engineering, while Electrical Engineering students were recruited for power generation, automation, and renewable 
    energy projects. The highest package offered to students in these branches was Rs. 10 LPA, with multiple offers coming from 
    companies that are known for large-scale infrastructure projects both in India and abroad.`,
    companies: 50,
    studentsSelected: 150,
    highestPackage: "10",
  },
  {
    title: "Electronics and Communication Engineering placements shine at AKGEC",
    description: `The Electronics and Communication Engineering (ECE) department at AKGEC continues to be a hub for innovation and 
    technical excellence, as reflected in this year’s stellar placement results. More than 60 companies, including Samsung, 
    Texas Instruments, Bharat Electronics, and Ericsson, visited the campus, offering positions to over 180 students. With a 
    focus on emerging technologies such as 5G, IoT, semiconductor technology, and embedded systems, ECE students from AKGEC 
    have consistently demonstrated their ability to contribute to high-impact projects and cutting-edge research.`,
    companies: 60,
    studentsSelected: 180,
    highestPackage: "15",
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
    'Bachelor of Technology (Computer Science & Engineering)',
    'Bachelor of Technology (Electronics & Computer Engineering)',
    'Bachelor of Technology (Electrical and Electronics Engineering)',
    'Bachelor of Technology (Information Technology)',
    'Bachelor of Technology (Electronics and Communication Engineering) with Specialization in VLSI Design and Technology',
    'Bachelor of Technology (Mechanical Engineering)',
    'Bachelor of Technology (Civil Engineering)',
    'Bachelor of Science (Information Technology)'
  ],
  'Post Graduate': [
    'Master of Technology (Computer Science & Engineering)',
    'Master of Technology (Electronics & Computer Engineering)',
    'Master of Technology (Electrical and Electronics Engineering)',
    'Master of Technology (Information Technology)',
    'Master of Technology (Electronics and Communication Engineering) with Specialization in VLSI Design and Technology',
    'Master of Technology (Mechanical Engineering)',
    'Master of Technology (Structural Engineering)',
    'Master of Business Administration (MBA) in Technology Management'
  ],
};



const CustomButton = ({ children, onClick, className }) => (
  <button className={`sm:pl-2 pl-1 sm:pr-8 pr-1 py-1 sm:py-2 w-full rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 text-["7px"] sm:text-base ${className}`} onClick={onClick}>
    {children}
  </button>
)

const EngineeringTechnology = () => {
  const [activeView, setActiveView] = useState('departments');
  const [hoveredProgramme, setHoveredProgramme] = useState(null);

  const description = "Empowering future engineers with hands-on experience and innovative solutions, our programs prepare students to excel in fields like computer science, mechanical, and civil engineering."

  const gradientColors = ['#6366F1', '#A855F7', '#EC4899'];
  return (
    <>
      <SchoolHeader banner="bg-BG17" heading="AKGU School of Engineering and Technology" desc={description} gradientColors={gradientColors} />
      <section className='max-w-7xl mx-auto px-5 max-sm:px-2 py-10'>
        <div>
          <div className='sm:flex justify-between'>
            <h2 className='font-novaReg text-4xl md:w-1/2 lg:w-[60%] sm:w-[60%]'>School of Engineering and Technology</h2>
            <button className='lg:px-6 sm:px-3 mt-3 sm:mt-0 py-3 px-5 md:px-4 lg:py-2 text-sm bg-black text-white font-novaSemi uppercase tracking-wider rounded-full hover:bg-gray-300 hover:text-black hover:border border-gray-300 transition duration-200 ease-linear flex items-center lg:gap-2 gap-3 sm:gap-1 md:gap-1'>
              <ArrowDownToLine size={18} strokeWidth={2} /> Download Brochure
            </button>
          </div>
          <h4 className='text-xl font-semibold my-3'>Overview</h4>
          <p className='font-novaReg'>
            A.K.G. University is committed to fostering an innovative learning environment where students can excel in their academic pursuits and develop their skills for the modern workforce. Recognized as a leading institution in India, A.K.G. provides a comprehensive education that blends theoretical knowledge with practical application.
          </p>
          <p className='font-novaReg my-3'>
            With a focus on student engagement and hands-on learning, A.K.G. offers a dynamic curriculum that encourages creativity, critical thinking, and collaboration. Students are guided by experienced faculty members who are dedicated to nurturing talent and preparing graduates for success in their chosen fields.
          </p>
          <p className='font-novaReg'>
            The mission of A.K.G. University is to empower students through rigorous education, ensuring they become well-rounded professionals capable of addressing the challenges of an ever-evolving global landscape.
          </p>
        </div>

        <div className='mt-5'>
          <h2 className='font-novaSemi text-3xl'>Financial Statements</h2>
          <ul className='mt-5 list-disc pl-5 text-cyan-600 font-novaSemi text-sm space-y-3'>
            <li>Audited Financial Statement 2019-20</li>
            <li>Audited Financial Statement 2020-21</li>
            <li>Audited Financial Statement 2021-22</li>
            <li>Audited Financial Statement 2022-23</li>
          </ul>
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
                  The programmes under the <strong>A.K.G. University</strong> are designed to enable students to:
                </p>
                <ul className='mt-3 list-disc pl-5 font-novaReg space-y-2'>
                  <li className='leading-5'>Acquire a solid foundation in scientific and mathematical principles necessary for engineering practice.</li>
                  <li className='leading-5'>Effectively analyze and solve complex engineering problems using innovative approaches.</li>
                  <li className='leading-5'>Develop an understanding of diverse cultures and global perspectives in technology.</li>
                  <li className='leading-5'>Cultivate professional integrity, intellectual growth, and a commitment to sustainable practices in engineering.</li>
                  <li className='leading-5'>Enhance their communication skills to articulate technical information clearly and effectively.</li>
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
                  <li className='leading-5'>A.K.G. University recognized as a leading institution in engineering education in the region, receiving multiple accolades for academic excellence.</li>
                  <li className='leading-5'>ISO 9001:2015 Certified Institute, ensuring high-quality education and continuous improvement in all operations.</li>
                  <li className='leading-5'>Opportunities for engineering students to engage in international internships in countries like the USA, Germany, Canada, and Australia.</li>
                  <li className='leading-5'>Strong placement record with partnerships with top industries, ensuring students have access to a wide range of career opportunities.</li>
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

export default EngineeringTechnology