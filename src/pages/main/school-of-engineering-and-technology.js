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
import {
  Laptop,
  Cpu,
  Cog,
  Building,
  PlugZap,
  Biohazard,
  Check,
  ChevronRight,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  ArrowDownToLine,
} from "lucide-react"
import React, { useState } from 'react'

const departments = [
  {
    name: "Computer Science & Engineering",
    code: "CSE",
    icon: <Laptop size={28} strokeWidth={1.5} />,
    color: "from-blue-500 to-cyan-500",
    description: "Cutting-edge computing and software development",
  },
  {
    name: "Information Technology",
    code: "IT",
    icon: <Cpu size={28} strokeWidth={1.5} />,
    color: "from-purple-500 to-pink-500",
    description: "Digital solutions and system architecture",
  },
  {
    name: "Mechanical Engineering",
    code: "ME",
    icon: <Cog size={28} strokeWidth={1.5} />,
    color: "from-orange-500 to-red-500",
    description: "Design, manufacturing and automation",
  },
  {
    name: "Civil Engineering",
    code: "CE",
    icon: <Building size={28} strokeWidth={1.5} />,
    color: "from-green-500 to-teal-500",
    description: "Infrastructure and construction technology",
  },
  {
    name: "Electrical Engineering",
    code: "EE",
    icon: <PlugZap size={28} strokeWidth={1.5} />,
    color: "from-yellow-500 to-orange-500",
    description: "Power systems and electronics",
  },
  {
    name: "Biotechnology",
    code: "BT",
    icon: <Biohazard size={28} strokeWidth={1.5} />,
    color: "from-emerald-500 to-green-500",
    description: "Life sciences and bioengineering",
  },
]

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
  { name: "Graduate", icon: <GraduationCap size={20} />, students: "2,500+" },
  { name: "Post Graduate", icon: <BookOpen size={20} />, students: "800+" },
  { name: "Doctoral", icon: <Award size={20} />, students: "200+" },
  { name: "Diploma", icon: <Users size={20} />, students: "600+" },
  { name: "Integrated", icon: <GraduationCap size={20} />, students: "400+" },
  { name: "Certificate", icon: <BookOpen size={20} />, students: "300+" },
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



const CustomButton = ({ children, onClick, className, active }) => (
  <button
    className={`
      relative px-6 py-3 rounded-full font-novaSemi transition-all duration-300 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
      text-sm overflow-hidden group
      ${active
        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105"
        : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md"
      }
      ${className}
    `}
    onClick={onClick}
  >
    <div className="relative z-10 flex items-center justify-center">{children}</div>
    {active && (
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    )}
  </button>
)
const EngineeringTechnology = () => {
  const [activeView, setActiveView] = useState("departments")
  const [hoveredProgramme, setHoveredProgramme] = useState(null)
  const [hoveredDepartment, setHoveredDepartment] = useState(null)

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
          <h4 className='text-xl font-novaSemi my-3'>Overview</h4>
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
              <h2 className="text-2xl font-novaBold mb-2 max-lg:text-xl max-md:text-lg">Objective</h2>
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
              <h2 className="text-2xl font-novaBold mb-2 max-lg:text-xl max-md:text-lg">Key Highlights</h2>
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
      <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-10 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-novaBold text-gray-900 mb-4">
              Academic{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-novaReg">
              Explore our comprehensive range of departments and programmes designed to shape tomorrow's leaders
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-full shadow-xl border border-gray-100 backdrop-blur-sm">
              <div className="flex space-x-2">
                <CustomButton
                  active={activeView === "departments"}
                  onClick={() => setActiveView("departments")}
                  className="min-w-[140px] sm:min-w-[160px]"
                >
                  {activeView === "departments" && (
                    <Check
                      className="inline-block mr-2 h-5 w-5 bg-white rounded-full p-1 text-blue-600"
                      strokeWidth={3}
                    />
                  )}
                  Departments
                </CustomButton>
                <CustomButton
                  active={activeView === "programmes"}
                  onClick={() => setActiveView("programmes")}
                  className="min-w-[140px] sm:min-w-[180px]"
                >
                  {activeView === "programmes" && (
                    <Check
                      className="inline-block mr-2 h-5 w-5 bg-white rounded-full p-1 text-blue-600"
                      strokeWidth={3}
                    />
                  )}
                  Programmes 2024-25
                </CustomButton>
              </div>
            </div>
          </div>

          {/* Departments View */}
          {activeView === "departments" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className={`
                  group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                  transition-all duration-500 transform hover:-translate-y-2 
                  border border-gray-100 overflow-hidden cursor-pointer
                  ${hoveredDepartment === index ? "scale-105" : ""}
                `}
                  onMouseEnter={() => setHoveredDepartment(index)}
                  onMouseLeave={() => setHoveredDepartment(null)}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`
                      p-3 rounded-xl bg-gradient-to-br ${dept.color} text-white 
                      shadow-lg group-hover:shadow-xl
                      group-hover:scale-110 transform transition-transform duration-300
                    `}
                      >
                        {dept.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-novaBold text-gray-500 tracking-wider uppercase">{dept.code}</span>
                          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-novaBold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {dept.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-novaReg">{dept.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className={`h-1 bg-gradient-to-r ${dept.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Programmes View */}
          {activeView === "programmes" && (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[32rem]">
                {/* Programme List */}
                <div className="lg:col-span-1 bg-gradient-to-b from-gray-50 to-white border-r border-gray-100">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-novaBold text-gray-900">Programme Types</h3>
                    <p className="text-sm text-gray-600 font-novaReg mt-1">Hover to explore courses</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {programmes.map((prog, index) => (
                      <div
                        key={index}
                        className={`
                        p-4 cursor-pointer transition-all duration-300 group
                        ${hoveredProgramme === prog.name
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                            : "hover:bg-blue-50 text-gray-700"
                          }
                      `}
                        onMouseEnter={() => setHoveredProgramme(prog.name)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`
                            p-2 rounded-lg transition-colors duration-300
                            ${hoveredProgramme === prog.name
                                  ? "bg-white text-blue-600"
                                  : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                                }
                          `}
                            >
                              {prog.icon}
                            </div>
                            <div>
                              <span className="font-novaSemi text-base block">{prog.name}</span>
                              <span
                                className={`
                              text-xs transition-colors font-novaReg duration-300
                              ${hoveredProgramme === prog.name ? "text-blue-100" : "text-gray-500"}
                            `}
                              >
                                {prog.students} students
                              </span>
                            </div>
                          </div>
                          <ChevronRight
                            className={`
                          h-5 w-5 transition-all duration-300
                          ${hoveredProgramme === prog.name
                                ? "text-white transform translate-x-1"
                                : "text-gray-400 group-hover:text-blue-500"
                              }
                        `}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3 relative">
                  <img
                    src="/image/schools/group-students.jpg"
                    alt="Students studying together"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

                  {/* Course Details Overlay */}
                  {(hoveredProgramme === "Graduate" || hoveredProgramme === "Post Graduate") && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm">
                      <div className="h-full overflow-y-auto">
                        <div className="p-8">
                          <div className="mb-6">
                            <h2 className="text-3xl font-novaBold text-gray-900 mb-2">{hoveredProgramme} Programmes</h2>
                            <p className="text-gray-600 font-novaReg">
                              Comprehensive courses designed for academic and professional excellence
                            </p>
                          </div>

                          <div className="space-y-2">
                            {courses[hoveredProgramme].map((course, idx) => (
                              <div
                                key={idx}
                                className="group p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                              >
                                <div className="flex items-center justify-between">
                                  <p className="text-gray-800 font-novaSemi group-hover:text-blue-700 transition-colors duration-300 flex-1 pr-4">
                                    {course}
                                  </p>
                                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Default overlay for other programmes */}
                  {hoveredProgramme && hoveredProgramme !== "Graduate" && hoveredProgramme !== "Post Graduate" && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <div className="mb-4">
                          <div className="inline-flex p-4 bg-white/20 rounded-full backdrop-blur-sm">
                            {programmes.find((p) => p.name === hoveredProgramme)?.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-novaBold mb-2">{hoveredProgramme} Programme</h3>
                        <p className="text-blue-100">Course details coming soon</p>
                      </div>
                    </div>
                  )}
                </div>
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