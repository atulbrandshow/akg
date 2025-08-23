'use client';

import React, { useRef, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { facultyData } from '@/Json/BtechFacultyData';
import { IMAGE_PATH } from '@/configs/config';

const ProgramFacultySlider = ({ data }) => {
  const sliderRef = useRef(null);
  const [autoSlide, setAutoSlide] = useState(true);

  const facultyData = data?.faculties;

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(() => {
        scroll('right');
      }, 2000); // Automatically scroll every 2 seconds
    }
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [autoSlide]);


  return (
    <section className="relative px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
        Our {" "}
        <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
          Faculty
        </span>
      </h1>
      <div className="mt-10 max-w-[1400px] mx-auto relative">
        <ul
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {facultyData.length > 0 && facultyData?.map((faculty) => (
            <li key={faculty._id} className="flex-shrink-0 snap-start md:mr-6 last:mr-0 px-4">
              <div className="relative flex aspect-[3/4] w-64 sm:w-72 md:w-80 shrink-0 flex-col justify-end overflow-hidden rounded-2xl md:rounded-3xl">
                <img
                  alt={faculty.name}
                  src={IMAGE_PATH + faculty.banner_img}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-t from-black from-5% to-transparent"
                />
                <figure className="relative p-4 md:p-6 lg:p-8">
                  <blockquote>
                    <p className="text-lg md:text-xl text-white leading-snug">
                      {faculty.name}
                    </p>
                    <span className='text-sm max-sm:text-xs text-gray-400'>{faculty.param5}</span>
                  </blockquote>
                </figure>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/80 p-1 rounded-full hidden md:block"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/80 p-1 rounded-full hidden md:block"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </section>
  )
}

export default ProgramFacultySlider