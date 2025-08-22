import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { IMAGE_PATH } from '@/configs/config';

const ReviewSlider = ({ data }) => {
  const studentReviewsData = data?.studentReviews || [];

  return (
    <section className="bg-[#1c1f52] w-full ">
      <div className="h-full flex justify-start pt-10 items-center flex-col text-white bg-center bg-contain bg-world-map">
        <span className="text-[#d58544] text-3xl font-novaReg max-sm:text-2xl">Reviews</span>
        <h1 className="text-5xl font-novaBold max-sm:text-4xl">{data?.pageData?.Reviews_Title}</h1>
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto relative w-full flex justify-center items-center">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '#slider-button-right',
              prevEl: '#slider-button-left',
            }}
            className="mySwiper"
          >
            {studentReviewsData.length > 0 && studentReviewsData?.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="my-10 text-center flex flex-col items-center mx-10 max-sm:mx-5">
                  <p className="max-w-3xl max-md:text-sm">{review.description}</p>
                  <div className="flex flex-col items-center mt-10">
                    {review.image && (
                      <div className="border-[6px] border-[#FFFFFF1A] rounded-full">
                        <img
                          className="h-20 w-20 object-cover object-top rounded-full bg-gray-400"
                          src={IMAGE_PATH + review.image}
                          alt={review.name}
                        />
                      </div>
                    )}
                    <div className="mt-4 uppercase text-center">
                      <h4 className="font-bold">{review.name}</h4>
                      <small>{review.company_name}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div id="slider-button-left" className="absolute -left-10 max-lg:-left-2 max-md:hidden top-1/2 transform -translate-y-1/2 p-2 shadow-md cursor-pointer z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-50 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div id="slider-button-right" className="absolute -right-10 max-lg:-right-2 max-md:hidden top-1/2 transform -translate-y-1/2 p-2 shadow-md cursor-pointer z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-50 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewSlider