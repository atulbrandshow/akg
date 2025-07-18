import React from 'react'
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay } from 'swiper/modules';



const Slider = ({slidesData, heading, white, right}) => {
    return (
        <div className={`max-w-full mt-10 ${right === true ? "ml-auto text-right" : ""}`}>
            <Swiper
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Scrollbar, A11y, Autoplay]}
                breakpoints={{
                    680: { slidesPerView: 1 },
                }}
            >
                {slidesData?.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={`p-2 max-w-md max-lg:max-w-full ${right === true ? "ml-auto" : ""}`}>
                            <h2 className='text-sm text-orange-400'>{heading}</h2>
                            <p className='my-4 font-novaSemi text-lg italic'>{slide.description}</p>
                            <div className={`${white === true ? "bg-white text-black" : "bg-indigo-950"} ${right === true ? "ml-auto" : ""} p-2 rounded-2xl flex items-center gap-5 max-w-md`}>
                                <div className='h-16 w-16 '>
                                    <img className='h-full w-full rounded-full object-cover object-top' src={slide.img} alt={slide.name} />
                                </div>

                                <div className=' flex flex-col items-start gap-1'>
                                    <div className='flex'>
                                        {[...Array(slide.rating)]?.map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <h3 className='font-novaSemi'>{slide.name} / </h3>
                                        <span className='font-normal text-sm'>{slide.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider