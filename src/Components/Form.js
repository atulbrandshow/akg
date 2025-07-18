"use client";
import { useState } from 'react';
import Button from './Button';

const programData = [
  {
    discipline: 'B.Tech',
    programs: [
      "B.Tech Computer Science and Engineering",
      "B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
      "B.Tech Computer Science and Engineering (Data Science)",
      "B.Tech Computer Science",
      "B.Tech Computer Science and Engineering (Hindi)",
      "B.Tech Artificial Intelligence & Machine Learning",
      "B.Tech Information Technology",
      "B.Tech Computer Science and Information Technology",
      "B.Tech Electronics and Communication Engineering",
      "B.Tech Mechanical Engineering",
      "B.Tech Electrical and Electronics Engineering",
      "B.Tech Civil Engineering"
    ]
  },
  {
    discipline: 'M.Tech',
    programs: [
      "M.Tech Computer Science and Engineering",
      "M.Tech Electrical and Electronics Engineering",
      "M.Tech Electronics and Communication Engineering",
      "M.Tech Mechanical Engineering"
    ]
  },
  {
    discipline: 'Master of Computer Applications (MCA)',
    programs: ["MCA"]
  }
];

export default function Form() {
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [programs, setPrograms] = useState([]);

  const handleDisciplineChange = (e) => {
    const selected = e.target.value;
    setSelectedDiscipline(selected);
    const selectedPrograms = programData.find(p => p.discipline === selected)?.programs || [];
    setPrograms(selectedPrograms);
  };

  return (
    <div className="flex items-center justify-center h-full pb-4 md:pt-20 ">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
        <div className='bg-gray-100 flex flex-col justify-center items-center px-8 py-6 max-sm:py-6'>
          <h2 className="text-sm bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent font-novaBold tracking-wider text-center">APPLY TODAY FOR</h2>
          <h1 className="mt-3 font-novaBold text-center text-xl max-sm:text-base">AKG UNIVERSITY PROGRAMS</h1>
          <p className="bg-btn-gradient animate-gradient text-white text-center font-novaBold mb-6 max-sm:mb-0 text-xs w-max py-2 px-4 max-sm:px-2 max-sm:py-1.5 rounded-lg mt-2">Registration End Date (Phase-II) - 30 Aug 2024</p>
        </div>
        <form className='p-6 max-sm:p-4'>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Enter your Name" className="w-full px-4 max-sm:px-2 py-3 max-sm:py-2 border placeholder:text-gray-600 placeholder:text-[13px] border-gray-500 rounded-md text-xs font-novaReg"/>
            <input type="email" placeholder="Enter your Email" className="w-full px-4 max-sm:px-2 py-3 max-sm:py-2 border placeholder:text-gray-600 placeholder:text-[13px] border-gray-500 rounded-md text-xs font-novaReg"/>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="tel" placeholder="Enter Mobile No" className="w-full px-4 max-sm:px-2 py-3 max-sm:py-2 border placeholder:text-gray-600 placeholder:text-[13px] border-gray-500 rounded-md text-xs font-novaReg"/>
            <input type="text" placeholder="Type your City" className="w-full px-4 max-sm:px-2 py-3 max-sm:py-2 border placeholder:text-gray-600 placeholder:text-[13px] border-gray-500 rounded-md text-xs font-novaReg"/>
          </div>
          <div className="grid grid-cols-2 gap-4 h-9 mb-6">
            <select className="w-full px-4 max-sm:px-1 py-3 max-sm:py-1.5 border border-gray-500 rounded-md text-xs font-novaReg" value={selectedDiscipline} onChange={handleDisciplineChange}>
              <option value="">Select Discipline</option>
              {programData?.map((item, index) => (
                <option key={index} value={item.discipline}>
                  {item.discipline}
                </option>
              ))}
            </select>
            <select className="w-full px-4 max-sm:px-1 py-3 max-sm:py-1.5 border border-gray-500 rounded-md text-xs font-novaReg">
              <option value="">Select Program</option>
              {programs?.map((program, index) => (
                <option key={index} value={program}>
                  {program}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-3 gap-4 h-9 mb-6">
            <select className="w-full px-4 max-sm:px-1 py-3 max-sm:py-1.5 border border-gray-500 rounded-md text-xs font-novaReg">
              <option>DD</option>
              {[...Array(31)]?.map((_, i) => (
                <option key={i}>{String(i + 1).padStart(2, '0')}</option>
              ))}
            </select>
            <select className="w-full px-4 max-sm:px-1 py-3 max-sm:py-1.5 border border-gray-500 rounded-md text-xs font-novaReg">
              <option>MM</option>
              {[
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ]?.map((month, i) => (
                <option key={i}>{month}</option>
              ))}
            </select>
            <select className="w-full px-4 max-sm:px-1 py-3 max-sm:py-1.5 border border-gray-500 rounded-md text-xs font-novaReg">
              <option>YYYY</option>
              {Array.from({ length: 100 }, (_, i) => 2024 - i)?.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-between items-center">
          <Button text={'REGISTER NOW'} type='submit' className="bg-btn-gradient animate-gradient text-white font-novaBold py-4 px-12 max-sm:px-6 max-sm:py-3 text-xs rounded-md" />
            <a href="#" className="text-xs max-[350px]:text-[11px] text-right font-novaBold text-gray-600 underline">
              ALREADY REGISTERED
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
