import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const upcomingEvents = [
    {
        id: 1,
        title:
            "2024 1st International Conference on Advanced Computing & Emerging Technologies (ACET)",
        btn: "Read More",
    },
    {
        id: 2,
        title:
            "2nd International Conference on Advancements and Key Challenges in Green Energy and Computing (AKGU 2024)",
        btn: "Read More",
    },
];

const NotificationSlider = () => {
    return (
        <section className='bg-gray-200 py-2'>
            <div className="max-w-[1500px] m-auto px-2 grid grid-cols-12 gap-4">
                <div className="col-span-4 max-lg:col-span-12 max-lg:mb-4">
                    <aside className="">
                        <div className="max-lg:px-10 max-md:px-8 max-sm:px-1 h-full ">
                            <section className="swiper-container ">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    // pagination={{ clickable: true }}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    loop={true}
                                    modules={[Pagination, Autoplay]}
                                    className="mySwiper h-full"
                                >
                                    {upcomingEvents?.map((item) => (
                                        <SwiperSlide key={item.id} className="h-full">
                                            <article className="bg-[#FFFFFF] leading-none overflow-hidden p-5 h-52 max-md:h-40 max-sm:h-52 shadow-sm rounded-lg">
                                                <h5 className="text-sm bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent uppercase font-novaBold">
                                                    Upcoming Events
                                                </h5>
                                                <div className="mt-5">
                                                    <h3 className="font-novaSemi leading-none text-xl max-lg:text-base max-md:text-sm max-sm:text-sm">
                                                        {item.title}
                                                    </h3>
                                                    <a
                                                        className="mt-5 max-sm:mt-3 bg-gradient-to-r from-amber-500 to-orange-700 bg-clip-text text-transparent text-[15px] font-novaBold uppercase w-full block text-right"
                                                        href="#"
                                                    >
                                                        {item.btn}
                                                    </a>
                                                </div>
                                            </article>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </section>
                        </div>
                    </aside>
                </div>
                <div className="col-span-8 max-lg:col-span-12 h-full max-lg:mb-4 max-lg:px-10 max-md:px-8 max-sm:px-1 max-lg:ml-0 ">
                    <section className="bg-gradient-to-r from-cyan-500 to-indigo-600 animate-gradient rounded-lg h-full">
                        <div className="grid grid-cols-12 h-full">
                            <div className="col-span-2 max-sm:hidden p-2 flex justify-center items-center">
                                <img
                                    src="/image/company-logos/Akgec.png"
                                    alt="UNA Logo"
                                    className="w-28 aspect-square"
                                />
                            </div>
                            <div className="col-span-5 max-sm:col-span-5 flex justify-center items-center">
                                <h2 className="uppercase text-center max-w-96 font-novaBold leading-5 text-xl max-lg:text-base max-md:text-sm max-sm:text-xs text-white">
                                    AKGU hosts ACET 2024: <span className="text-orange-300"> 1st International Conference </span> on Advanced Computing and Emerging Technologies
                                </h2>
                            </div>
                            <div className="col-span-5 max-sm:col-span-7">
                                <img
                                    className="rounded-xl max-2xl:h-full h-full w-full ml-auto max-lg:w-full max-lg:ml-0 object-cover"
                                    src="/image/building/building8.webp"
                                    alt="UNA Background"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default NotificationSlider