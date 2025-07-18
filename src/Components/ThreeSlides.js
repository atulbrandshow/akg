"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ThreeSlides = ({ slides }) => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="w-full relative py-10 max-lg:py-9 max-md:py-7 max-sm:py-5">
        <h2 className="text-center text-2xl font-novaBold uppercase mb-6 max-sm:text-xl max-lg:mb-5 max-md:mb-4 max-sm:mb-3">Latest Research News</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1, 
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: "#slider-button-right",
            prevEl: "#slider-button-left",
          }}
          className="multiple-slide-carousel"
        >
          {slides?.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="rounded-2xl shadow-cardShadow flex flex-col justify-start items-center flex-grow p-8 my-10 min-h-52 bg-yellow-100/10 max-lg:my-9 max-md:my-7 max-sm:my-5 max-lg:p-7 max-md:p-6 max-sm:p-5">
                <div className="relative w-full mb-4 max-md:mb-3 max-sm:mb-2.5">
                  <div className="relative -top-[10px] left-[50%] -translate-x-[50%] text-white text-center w-max">
                    <span className="w-5 h-2.5 bg-gray-800 absolute -left-2.5 top-0 z-0 rounded-t-xl" />
                    <span className="font-novaBold uppercase bg-gradient-to-t from-gray-600 via-gray-400 to-gray-600 px-10 rounded-b-3xl relative py-1 text-white block">
                      {slide.title}
                    </span>
                    <span className="w-5 h-2.5 bg-gray-800 absolute -right-2.5 top-0 z-0 rounded-t-xl" />
                  </div>
                </div>
                <p className="mt-4 text-left leading-5 font-novaLight max-md:mt-3 max-sm:mt-2.5">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          id="slider-button-left"
          className="absolute left-10 xl:-left-10 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md cursor-pointer z-10 hidden xl:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div
          id="slider-button-right"
          className="absolute right-10 xl:-right-10 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md cursor-pointer z-10 hidden xl:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ThreeSlides;
