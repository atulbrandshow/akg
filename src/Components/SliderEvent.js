"use client";

import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowRight } from 'lucide-react'
import { API_NODE_URL, IMAGE_PATH } from '@/configs/config';
import Link from 'next/link';
import Image from 'next/image';

export default function SliderEvent() {
  const [eventData, setEventData] = useState([]);

  const fetchEvent = async () => {
    try {
      const response = await fetch(`${API_NODE_URL}list-detail-page/all?type=Event`, {
        credentials: "include",
      })
      const data = await response.json();
      if (data.status && data.data) {
        setEventData([...data.data].reverse());
      } else {
        setEventData([])
      }
    } catch (error) {
      console.error("Failed to fetch news:", error)
      setEventData([])
    }
  }

  !eventData.length > 0 && fetchEvent();

  const breakpoints = {
    320: { slidesPerView: 1 },
    480: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 2 },
    1280: { slidesPerView: 4 },
  };
  return (
    <div className="bg-blue-400 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-novaReg text-white uppercase text-center mb-10">School Events and Updates</h2>
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
          {eventData.map((event) => (
            <SwiperSlide key={event._id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg cursor-grab">
                <Image src={IMAGE_PATH + event.banner_img} alt={event.name} className="w-full h-48 object-cover" height={400} width={400} style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2vw))",
                }} />
                <div className="p-4">
                  <div className="bg-blue-500 text-white text-xs font-novaBold px-2 py-1 rounded-full mb-2 w-14 h-14 flex items-center justify-center text-center leading-[18px] italic break-words  top-[130px] left-[15px]       absolute">
                    <span>Event</span>
                  </div>
                  <p className="text-gray-600 font-novaSemi text-sm mb-2">
                    {new Date(event.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="font-novaSemi leading-5 text-lg mb-2 line-clamp-2">{event.name}</h3>
                  <p className="text-gray-700 text-sm line-clamp-2 mb-3 font-novaReg" dangerouslySetInnerHTML={{ __html: event.description }} />
                  <Link href={event?.path} className="text-white text-sm bg-blue-500 py-1.5 px-4 rounded-lg hover:bg-blue-700">
                    Read More
                    <ArrowRight className="inline-block ml-1 w-4 h-4" />
                  </Link>
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
        <Link href="/events" className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold">
          View More
        </Link>
      </div>
    </div>
  )
}