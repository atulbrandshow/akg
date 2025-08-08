"use client";
import { useState, useRef } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { IMAGE_PATH } from '@/configs/config';

export const Testimonial = ({ data }) => {
    const swiperRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const breakpoints = {
        320: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 24 },
        1024: { slidesPerView: 2, spaceBetween: 28 },
        1280: { slidesPerView: 3, spaceBetween: 32 },
    };

    const testimonialsData = data?.testimonials || [];

    return (
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6">
                        <Quote className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-novaBold text-gray-900 mb-4">
                        What People Say
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-novaReg">
                        Hear from industry leaders, academics, and professionals about their experience
                    </p>
                </div>

                {/* Testimonials Slider */}
                <div className="relative px-16">
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay, Navigation]}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={breakpoints}
                        navigation={{
                            nextEl: '#slider-button-right',
                            prevEl: '#slider-button-left',
                        }}
                        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                        className="testimonial-swiper"
                    >
                        {testimonialsData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="group h-full py-10">
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full min-h-[500px] flex flex-col border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                                        {/* Quote Icon */}
                                        <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                            <Quote className="w-8 h-8 text-blue-600" />
                                        </div>

                                        {/* Profile Section */}
                                        <div className="flex flex-col items-center mb-6">
                                            <div className="relative mb-4">
                                                <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                                                    <Image
                                                        src={IMAGE_PATH + item.image || "/placeholder.svg"}
                                                        alt={item.name}
                                                        width={80}
                                                        height={80}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-novaBold text-gray-900 text-center mb-1">
                                                {item.name}
                                            </h3>

                                            <p className="text-sm font-novaSemi text-blue-600 text-center mb-2">
                                                {item.position}
                                            </p>

                                            {/* Rating */}
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(5)].map((_, starIndex) => (
                                                    <Star
                                                        key={starIndex}
                                                        className={`w-4 h-4 transition-colors duration-200 ${starIndex < item.rating
                                                            ? 'text-amber-400 fill-amber-400'
                                                            : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Testimonial Content */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <blockquote className="text-gray-700 text-center font-novaReg leading-snug mb-6 flex-grow italic">
                                                "{item.description}"
                                            </blockquote>

                                            {/* Company Info */}
                                            <div className="pt-4 border-t border-gray-100 mt-auto">
                                                <p className="text-sm font-novaSemi text-gray-900 text-center">
                                                    {[item.company_name, item.company_city, item.company_state]
                                                        .filter(Boolean)
                                                        .join(', ')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button
                        id="slider-button-left"
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200 hover:border-blue-300"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                    </button>

                    <button
                        id="slider-button-right"
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200 hover:border-blue-300"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .testimonial-swiper {
                    padding: 20px 0;
                    overflow: visible;
                }
                
                .testimonial-swiper .swiper-slide {
                    height: auto;
                }
            `}</style>
        </section>
    );
};
