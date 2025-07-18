"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from 'lucide-react'


const events = [
  {
    date: '22 Aug 2023',
    title: "Celebrating Diwali: Unity in Diversity at AKGEC",
    description: 'Ajay Kumar Garg University (AKGEC), Ghaziabad, celebrated Diwali on November 4, 2023...',
    image: '/image/event/Diwali2022_3.jpg ',
  },
  {
    date: '3 November 2023',
    title: 'VE Cell Workshop: Nurturing Relationships through Self-Exploration',
    description: 'The workshop’s objective was to help students to see their innate potential ...',
    image: '/image/event/ve-cell-workshop.jpg',
  },
  {
    date: '03 Dec 2022',
    title: 'AKGEC celebrated the nation’s 75th Independence day',
    description: '76th Independence day on 15 Aug 2022 was celebrated at Ajay Kumar Garg University...',
    image: '/image/event/Independence2023_4.jpg',
  },
  {
    date: '23 Nov 2022',
    title: 'IT department and won Smart India Hackathon',
    description: 'The B.Tech. (Information Technology) Program is NBA Re-Accredited...',
    image: '/image/event/ITAchieve3.jpg',
  },
  {
    date: '22 Aug 2023',
    title: "Innovating Insights: AKGEC's Big Data Centre of Excellence",
    description: 'The Big Data Centre of Excellence at AKGEC, established...',
    image: '/image/event/Sanrachna2.jpg',
  },
  {
    date: '13 February, 2020',
    title: 'India STEM College Award 2020',
    description: 'AKGEC has been honored with STEM Award–2020 under “India STEM College Award 2020...',
    image: '/image/event/Stem4.jpg',
  },
  {
    date: '02 Jun 2023',
    title: 'A Grand Farewell for B. Tech & MCA Graduates',
    description: 'Samvartan’, the farewell ceremony for the final year students...',
    image: '/image/event/samvartan-2023-farewell-party.jpg',
  },
  {
    date: '15 March 2024',
    title: '"30Hacks” Hackathon organised by Hitachi x GlobalLogic',
    description: 'Team VidyutKavach from Ajay Kumar Garg University was recently...',
    image: '/image/event/hackathon-organised.jpg',
  },
]

export default function SliderEvent() {

  const breakpoints = {
    320: { slidesPerView: 1 },
    480: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 2 },
    1280: { slidesPerView: 4 },
  };
  return (
    <div className="bg-blue-400 py-10">
      <h2 className="text-4xl font-novaReg text-white uppercase text-center mb-8">School News and Updates</h2>
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-32">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={breakpoints}
          navigation={{
            nextEl: '#slider-button-right',
            prevEl: '#slider-button-left',
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg cursor-grab">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2vw))",
                }} />
                <div className="p-4">
                  <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-2 w-14 h-14 flex items-center justify-center text-center leading-[18px] italic break-words  top-[130px] left-[15px]       absolute">
                    <span>Event</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{event.date}</p>
                  <h3 className="font-novaSemi leading-5 text-lg mb-2 line-clamp-2">{event.title}</h3>
                  <p className="text-gray-700 text-sm line-clamp-2">{event.description}</p>
                  <button className="mt-4 text-white text-sm bg-blue-500 py-1.5 px-4 rounded-lg hover:bg-blue-700">
                    Read More
                    <ArrowRight className="inline-block ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
        <div id="slider-button-left" className="absolute left-6 sm:left-14 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md cursor-pointer z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div id="slider-button-right" className="absolute right-6 sm:right-14 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md cursor-pointer z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

      </div>

      <div className="text-center mt-8 sm:mb-4">
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold">
          View More
        </button>
      </div>
    </div>
  )
}