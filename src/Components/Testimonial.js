"use client";

import { useState, useRef } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Star } from 'lucide-react';

const testimonials = [
    {
        image: "/image/testimonials/s_k_sharma.png",
        name: "Prof. S. K. Sharma",
        description: "The college is transparent and open. Mutual commitment and faith amongst management and employees is worth appreciation. The college director Dr. Agarwal is a fine gentleman, committed for transformation of the college.",
        rating: 5,
        college: "IIT-BHU, Varanasi",
        designation: "Head ME"
    },
    {
        image: "/image/testimonials/PeterGorzyza.jpg",
        name: "Mr. Peter Gorzyza",
        description: "Fantastic college. This will bring students much closer to industry requirements. Inauguration perfectly organized!",
        rating: 5,
        college: "Drives and Control Academy Bosch Rexroth AG, Germany",
        designation: "Director"
    },
    {
        image: "/image/testimonials/Prof.-Kak.jpg",
        name: "Prof. S. K. Kak",
        description: "Congratulations and wonderful to be here for this great occasion. I am confident that the college will be a Benchmark institution for others to follow! Good environment & excellent arrangement. Congrats!",
        rating: 5,
        college: "Mahamaya Technical University, Noida, G.B. Nagar",
        designation: "Vice Chancellor"
    },
    {
        image: "/image/testimonials/somnath-baishya.jpg",
        name: "Mr. Somnath Baishya",
        description: "I have no doubts in saying that, this college is a very progressive set up driven by strong leadership, a long term vision, vibrant staff & great students. We at Infosys take pride in saying the students from this college will in a big way contribute to creating the Infosys of tomorrow. Congratulations to everyone in this college!",
        rating: 5,
        college: "Campus Relations, Infosys",
        designation: "Head-Global Rect"
    },
    {
        image: "/image/testimonials/RS-Rajkumar.jpg",
        name: "Mr. R.S. Rajkumar",
        description: "Orienting to the future of technical education bringing technologies to the industry and developing a sustained scalable model take AKGEC to league of IIT's and beyond. Its no doubt AKGEC will set trends in higher education!",
        rating: 5,
        college: "Drives and Control Academy Bosch Rexroth, India",
        designation: "Head"
    },
    {
        image: "/image/testimonials/schmitt.jpg",
        name: "Mr. Schmitt Gerald",
        description: "I am very much looking forward to coming back. Fascinating people & place!",
        rating: 5,
        college: "Fronius",
        designation: "Managing Director"
    },
    {
        image: "/image/testimonials/Nagesh_Bhandari.jpg",
        name: "Dr. Nagesh Bhandari",
        description: "Overwhelmed with great infrastructure and the philosophy of Excellence. Hope it grows day by day.",
        rating: 5,
        college: "Indus University, Ahmedabad",
        designation: "Orthopaedic Surgeon"
    },
    {
        image: "/image/testimonials/SKyadav.jpg",
        name: "Mr. S. K. Yadav",
        description: "I am spellbound. I could feel the dedication of faculties and the commitment of owners and the institutions is lucky to have a worthy Director. All the best to students, faculties and the management.",
        rating: 5,
        college: "GDA",
        designation: "VC"
    },
    {
        image: "/image/testimonials/StephenjohnTurner.jpg",
        name: "Mr. Stephen John Turner",
        description: "Excellent organisation. A beautiful campus with very good facilities.",
        rating: 5,
        college: "NTU, Singapore",
        designation: "VC"
    },
    {
        image: "/image/testimonials/a_subash_babu.jpg",
        name: "Prof. A. Subash Babu",
        description: "The college has made significant progress and it is very evident that in the last few years, under the able guidance of a leader with vision and conviction, the developments have been phenomenal.",
        rating: 5,
        college: "IIT - Bombay",
        designation: "Mech. Engg."
    },
    {
        image: "/image/testimonials/atul_bhatnagar.jpg",
        name: "Shri Atul Bhatnagar",
        description: "I was very impressed with the infrastructure, facilities and dedication of the faculty and students. I've no doubt that AKGEC will continue to scale new heights in excellence and will contribute to nation building a big way. All the best & God Bless!",
        rating: 5,
        college: "NSDC, New Delhi",
        designation: "Chief Operating Officer"
    },
    {
        image: "/image/testimonials/n_k_sharma.jpg",
        name: "Prof. N. K. Sharma",
        description: "The institute has a vision and mission supported by its management to carry forward its philosophy. I wish the institute the very best!",
        rating: 5,
        college: "IIT - Kanpur",
        designation: "Head Institute of Management Education"
    },
    {
        image: "/image/testimonials/r_ramesh.jpg",
        name: "Mr. R. Ramesh",
        description: "I am impressed with the commitment at all levels of your institute & their energy level is high. Wishing you all the Best! for all your new endeavours. We would like to associate with you in the best possible way! Very good campus, dedicated team of faculty & teachers, great visionary Director! Wish you all success in all your endeavours!",
        rating: 5,
        college: "Janatics",
        designation: "Executive Director"
    },
    {
        image: "/image/testimonials/dilipsawhney.jpg",
        name: "Mr. Dilip Sawhney",
        description: "Your passion, infrastructure, facilities and faculty..... All were World Class. I wish you great success!",
        rating: 5,
        college: "Rockwell",
        designation: "VC"
    },
    {
        image: "/image/testimonials/Athawale.jpg",
        name: "Air Marshal P.V Athawale",
        description: "When some great things happen in life, one wonders why not earlier. It's been a great day with AKGEC. The commitment for excellence is visible. The college shows great promise for India's future. May you make a difference to Make India of Tomorrow! Best Wishes!",
        rating: 5,
        college: "",
        designation: "VC"
    },
    {
        image: "/image/testimonials/Prof.-Prem-Vrat.jpg",
        name: "Prof. Prem Vrat",
        description: "I am delighted to be present in the 15th Annual Convocation of AKGEC and compliment the college and its Director, Board, faculties and students for maintaining very high standards of academic excellence. My best wishes for continued success of this great college!",
        rating: 5,
        college: "The NorthCap University, Gurgaon",
        designation: "Pro-Chancellor"
    },
    {
        image: "/image/testimonials/Sunil_Rai.jpg",
        name: "Dr. Sunil Rai",
        description: "Outstanding facilities and spirit of advanced learning systems in automation. This truly a 'demo' effort which the rest of education must follow. All the best for your continued pursuit in excellence!",
        rating: 5,
        college: "Kaziranga University, Jorhat, Assam",
        designation: "Vice Chancellor"
    },
    {
        image: "/image/testimonials/KripaShanker.jpg",
        name: "Prof. Kripa Shanker",
        description: "Exciting to see the face of UPTU in many ways. Wish all the best for further spiralling ups, Excellent in all respects and aspect, Impressive performance by the institute and the students academically and otherwise, Best of luck to all!",
        rating: 5,
        college: "UPTU",
        designation: "Vice Chancellor"
    },
    {
        image: "/image/testimonials/RobReilly.jpg",
        name: "Dr. Rob Reilly",
        description: "Excellent Organization & Hospitality! Nice vibrant function, excellent academic achievements. My all the best for all your future endeavours.",
        rating: 5,
        college: "MIT, USA",
        designation: "VC"
    },
    {
        image: "/image/testimonials/bharat.jpg",
        name: "Mr. Bharat Bhargava",
        description: "Excellent organization. Intellectual discussions. Good Food!",
        rating: 5,
        college: "Purdue University",
        designation: "CS Dept"
    },
    {
        image: "/image/testimonials/rajeev_arora.jpg",
        name: "Mr. Rajeev Arora",
        description: "Excellent infrastructure, management is very passionate about the academic. Thanks for spending time and explaining and taking around the campus.",
        rating: 5,
        college: "TCS, Delhi",
        designation: "VC"
    },
    {
        image: "/image/testimonials/Abhishek_mishra.jpg",
        name: "Prof. Abhishek Mishra",
        description: "It was a fantastic convocation. I loved the spirit and the energy of all present. I wish the graduating class all the very best in life & in all that they choose to do.",
        rating: 5,
        college: "Skill Development U.P Govt.",
        designation: "State Minister Vocational Education"
    },
    {
        image: "/image/testimonials/Subir_Ahluwalia.jpg",
        name: "Col Subir Ahluwalia",
        description: "An absolutely outstanding institution. A worthy example to be emulated. An exhilarating experience.",
        rating: 5,
        college: "AVIATION SOLUTIONS INTERNATIONAL, LLC",
        designation: "Vice President"
    },
    {
        image: "/image/testimonials/vijendra_agarwal.jpg",
        name: "Dr. Vijendra Agarwal",
        description: "Great facility; well maintained.",
        rating: 5,
        college: "University of Wisconsin La Crosse",
        designation: "Associate Vice Chancellor"
    },
    {
        image: "/image/testimonials/banwet.jpg",
        name: "Prof. D.K Banwet",
        description: "An institute with a difference, Wonderful architectural conception, lovely infrastructure backed with visionary zeal with bubbly pillars of students energy thriving & a great deal of development & corporate social responsibility & helpful attitude & a best of mind. Thoroughly professional in approach & high up in the journey to excellence. Best wishes!",
        rating: 5,
        college: "IIT Delhi",
        designation: "VC"
    },
    {
        image: "/image/testimonials/JnyanPatel.jpg",
        name: "Mr. Jnyan Patel",
        description: "Excellent vision execution towards enabling a brighter, smarter, enterprising workforce.",
        rating: 5,
        college: "SPR Group of Companies, Mumbai",
        designation: "Group Vice President"
    },
    {
        image: "/image/testimonials/shinji.jpg",
        name: "Mr. Shinji Yamabe",
        description: "Great day to start strong collaboration Thanks!",
        rating: 5,
        college: "Mitsubishi Electric India",
        designation: "VC"
    }
];

export const Testimonial = () => {
    const swiperRef = useRef(null);

    const breakpoints = {
        320: { slidesPerView: 1 },
        480: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1280: { slidesPerView: 3 },
    };


    return (
        <section className="bg-[#f2f6ff] text-white py-12">
            <h2 className="text-center text-3xl text-black font-semibold mb-8">What People Say</h2>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-32">
                <Swiper
                    ref={swiperRef}
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
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="border border-b-4 border-yellow-700 rounded-md px-5 py-5 bg-white h-[27rem]">
                                <div className="flex justify-center mb-4 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        className="rounded-full border border-yellow-700"
                                    />
                                </div>
                                <h3 className="text-black text-lg font-novaSemi text-center mb-1">{item.name}</h3>
                                <div className='flex gap-1 justify-center'>
                                    <Star className='text-[#ff9c00]' fill='#ff9c00' size={16} />
                                    <Star className='text-[#ff9c00]' fill='#ff9c00' size={16} />
                                    <Star className='text-[#ff9c00]' fill='#ff9c00' size={16} />
                                    <Star className='text-[#ff9c00]' fill='#ff9c00' size={16} />
                                    <Star className='text-[#ff9c00]' fill='#ff9c00' size={16} />
                                </div>
                                <p className="mt-2 text-gray-400 text-sm text-center mb-4">{item.designation}</p>
                                <p className='h-32 my-3 text-sm overflow-y-auto custom-scrollbar text-black font-novaReg'>{item.description}</p>
                                <span className='pb-5 text-black font-novaSemi text-[13px]'>{item.college}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div id="slider-button-left" className="absolute left-8 sm:left-14 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2 shadow-md cursor-pointer z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div id="slider-button-right" className="absolute right-8 sm:right-14 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2 shadow-md cursor-pointer z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
            <div className="text-center mt-8 sm:mb-4">
                <button className="bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold">
                    View More
                </button>
            </div>
        </section>
    );
};
