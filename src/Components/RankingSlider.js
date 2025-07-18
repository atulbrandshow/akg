"use client";

import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css'

const slides = [
    {
        id: 1,
        title: "QS I-Gauge Ranking",
        description: "AKG University introduces 'CUSAT', North India's premier Student Satellite Designing and Training program, marking its pioneering step in advanced aerospace engineering education."
    },
    {
        id: 2,
        title: "QS I-Gauge Ranking",
        description: "Union Defence Minister Rajnath Singh inaugurated the Kalpana Chawla Centre for Research in Space Science and Technology (KCCRST) at AKG University on January 3, 2022."
    },
    {
        id: 3,
        title: "QS I-Gauge Ranking",
        description: "India's four astronaut-designates for the Gaganyaan mission undergo rigorous training at ISRO's crew training facility, covering simulators, microgravity familiarization, survival, flying practice, and Yoga sessions."
    },
    {
        id: 4,
        title: "QS I-Gauge Ranking",
        description: "AKG University introduces 'CUSAT', North India's premier Student Satellite Designing and Training program, marking its pioneering step in advanced aerospace engineering education."
    },
    {
        id: 5,
        title: "QS I-Gauge Ranking",
        description: "Union Defence Minister Rajnath Singh inaugurated the Kalpana Chawla Centre for Research in Space Science and Technology (KCCRST) at AKG University on January 3, 2022."
    },
    {
        id: 6,
        title: "QS I-Gauge Ranking",
        description: "India's four astronaut-designates for the Gaganyaan mission undergo rigorous training at ISRO's crew training facility, covering simulators, microgravity familiarization, survival, flying practice, and Yoga sessions."
    }
];

const RankingSlider = ({ slide = 3, hiddenBtn }) => {
    return (
        <section className="max-w-7xl max-[1375px]:max-w-6xl max-[1250px]:max-w-5xl mx-auto">
            <div className="w-full relative">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1, // Show 1 slide for small screens
                        },
                        768: {
                            slidesPerView: slide, // Show 3 slides for md and larger screens
                        },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '#slider-button-right',
                        prevEl: '#slider-button-left',
                    }}
                    className="multiple-slide-carousel"
                >
                    {slides?.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="rounded-2xl shadow-cardShadow flex flex-col justify-start items-center flex-grow p-8 my-10 pt-0 min-h-52 bg-white">
                                <div className="relative w-full mb-4">
                                    <div className="relative -top-[10px] left-[50%] -translate-x-[50%] right-0 text-white text-center w-max ">
                                        <span className='w-5 h-2.5 bg-gray-800 absolute -left-2.5 top-0 z-0 rounded-t-xl' />
                                        <span className="font-novaBold uppercase bg-gradient-to-t from-gray-600 z-20 via-gray-400 px-10 rounded-b-3xl relative py-1 to-gray-600 text-white w-full block">{slide.title}</span>
                                        <span className='w-5 h-2.5 bg-gray-800 absolute -right-2.5 top-0 z-0 rounded-t-xl' />
                                    </div>
                                </div>
                                <div className='w-full mt-5'>
                                    <img src='/image/awards-and-ranking/diamond-akg.webp' alt="logo" className="w-28 object-cover rounded-md mb-8 -mt-3" />
                                    <h4 className="text-lg font-bold text-black mb-4">QS I-Gauge overall<br />-2024</h4>
                                    <a href="#" className="text-sm hover:text-blue-700 mt-1">Click to Read More</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    id="slider-button-left"
                    className={`${hiddenBtn ? "hidden" : "hidden xl:flex"} absolute left-10 xl:-left-10 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md cursor-pointer z-10`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </div>
                <div
                    id="slider-button-right"
                    className={`${hiddenBtn ? "hidden" : "hidden xl:flex"} absolute right-10 xl:-right-10 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md cursor-pointer z-10`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>

            </div>

        </section>
    )
}

export default RankingSlider