"use client";

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { API_NODE_URL, IMAGE_PATH } from '@/configs/config';
import Link from 'next/link';

const NotificationSlider = ({ data }) => {
    const d = data?.pageData;
    const [eventsData, setEventsData] = useState(null);

    const fetchEvents = async () => {
        try {
            const response = await fetch(
                `${API_NODE_URL}list-detail-page/all?type=Event`, {
                credentials: "include",
            })
            const data = await response.json()

            if (data.status && data.data) {
                setEventsData(data.data)
            } else {
                setEventsData([])
            }
        } catch (error) {
            console.error("Failed to fetch events:", error)
            setEventsData([])
        }
    }

    !eventsData && fetchEvents();

    return (
        <main className='bg-gray-100 py-2'>
            <div className="max-w-[1500px] m-auto px-2 grid grid-cols-12 gap-4">
                <section className="col-span-4 max-lg:col-span-12 max-lg:mb-4">
                    <div className="max-lg:px-10 max-md:px-8 max-sm:px-1 h-full ">
                        <section className="swiper-container drop-shadow-lg">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                // pagination={{ clickable: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper h-full"
                            >
                                {eventsData?.map((item) => (
                                    <SwiperSlide key={item._id} className="h-full">
                                        <article className="bg-[#FFFFFF] leading-none overflow-hidden p-5 h-52 max-md:h-40 max-sm:h-52 shadow-sm rounded-lg">
                                            <h5 className="text-sm bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent uppercase font-novaBold">
                                                Upcoming Events
                                            </h5>
                                            <div className="mt-5">
                                                <h3 className="font-novaSemi leading-none text-xl max-lg:text-base max-md:text-sm max-sm:text-sm">
                                                    {item?.name}
                                                </h3>
                                                <Link
                                                    href={item?.path}
                                                    className="mt-5 max-sm:mt-3 bg-gradient-to-r from-amber-500 to-orange-700 bg-clip-text text-transparent text-[15px] font-novaBold uppercase w-full block text-right"
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </section>
                    </div>
                </section>
                <section className="col-span-8 max-lg:col-span-12 h-full max-lg:mb-4 max-lg:px-10 max-md:px-8 max-sm:px-1 max-lg:ml-0 drop-shadow-lg">
                    <section className="bg-gradient-to-r from-cyan-500 to-indigo-600 animate-gradient rounded-lg h-full">
                        <div className="grid grid-cols-12 h-full">
                            <div className="col-span-2 max-sm:hidden p-2 flex justify-center items-center">
                                <img
                                    src={IMAGE_PATH + d?.AKG_Logo}
                                    alt="AKG Logo"
                                    className="w-28 aspect-square"
                                />
                            </div>
                            <div className="col-span-5 max-sm:col-span-5 flex justify-center items-center">
                                <h2 className="uppercase text-center max-w-96 font-novaBold leading-5 text-xl max-lg:text-base max-md:text-sm max-sm:text-xs text-white" dangerouslySetInnerHTML={{ __html: d?.AKG_Desc }} />
                            </div>
                            <div className="col-span-5 max-sm:col-span-7">
                                <img
                                    className="rounded-xl max-2xl:h-full h-full w-full ml-auto max-lg:w-full max-lg:ml-0 object-cover"
                                    src={IMAGE_PATH + d?.AKG_Building_Image}
                                    alt="AKG Building"
                                />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </main>
    )
}

export default NotificationSlider