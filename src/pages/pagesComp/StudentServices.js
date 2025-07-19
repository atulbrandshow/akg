"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import BannerSlider from '@/Components/BannerSlider'

const slides = [
    {
        title: "Student Services",
        subHeading: "Promote a Healthy Lifestyle",
        subtitle: "Fostering Physical Fitness and Well-being",
        description: "We encourage students to embrace physical fitness by engaging in sports and recreational activities, enhancing overall health.",
        buttonText: "Explore Fitness",
        image: "/image/student-services/main-banner-1.jpg",
    },
    {
        title: "Student Services",
        subHeading: "Experience Exceptional Campus Living",
        subtitle: "A Comfortable and Modern Residence",
        description: "At AKGU, we provide state-of-the-art accommodations that prioritize comfort, ensuring a conducive environment for personal growth.",
        buttonText: "Explore Accommodation",
        image: "/image/student-services/main-banner-2.jpg",
    },
    {
        title: "Student Services",
        subHeading: "Celebrate Cultural Diversity",
        subtitle: "Bringing Together a Global Community",
        description: "AKGU takes pride in its culturally diverse student body, fostering an inclusive environment for learning and collaboration.",
        buttonText: "Explore Diversity",
        image: "/image/student-services/main-banner-3.jpg",
    },
]

const studentService = [
    {
        id: 1,
        image: "/image/student-services/transport1.jpg",
        description: "Safety and added comfort, both are the prime concerns of AKG University."
    },
    {
        id: 2,
        image: "/image/student-services/yoga.jpg",
        description: "Yoga is a group of physical, mental, and spiritual practices that originated in ancient India."
    }
]


const StudentServices = () => {

    const [activeModal, setActiveModal] = useState(null);

    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [activeModal]);

    const handleModalOpen = (type) => {
        setActiveModal(type);
    };

    const handleModalClose = () => {
        setActiveModal(null);
    };

    return (
        <>
            <BannerSlider slides={slides} />
            <div className='max-w-7xl mx-auto py-8'>
                <h2 className='text-3xl max-sm:text-2xl font-novaSemi max-xl:px-4'>Exciting Student Journey at AKG University!</h2>
                <p className='mt-2 text-base font-novaReg max-xl:px-4 max-sm:text-sm max-sm:leading-tight'>At AKGU, the university experience is about embracing independence and personal growth. Our campus is fully equipped with everything you need—comfortable accommodation, diverse entertainment, dining options, and excellent sports facilities. With students from various Indian states and union territories, as well as an increasing global presence, AKGU offers abundant opportunities for making lifelong friends, engaging in cultural exchange, and creating lasting memories.</p>
                <div className='py-20 max-md:py-16 max-sm:py-10 max-sm:px-2'>
                    <ul className='grid grid-cols-4 gap-4 max-sm:grid-cols-2'>
                        <li className='flex items-center justify-center group'>
                            <Link href="/about/hostel" className='flex flex-col items-center gap-2'>
                                <span>
                                    <img src="/image/icons/accommodation.png" alt="accommodation" className='max-lg:w-20 max-sm:w-16 max-[400px]:w-14'/>
                                </span>
                                <strong className='font-novaBold text-gray-500 group-hover:text-[#c75050] max-sm:text-sm'>HOME AT AKGU
                                </strong>
                            </Link>
                        </li>
                        <li className='flex items-center justify-center group'>
                            <Link href="" className='flex flex-col items-center gap-2'>
                                <span>
                                    <img src="/image/icons/student-welfare.png" alt="student-welfare" className='max-lg:w-20 max-sm:w-16 max-[400px]:w-14'/>
                                </span>
                                <strong className='font-novaBold text-gray-500 text-center group-hover:text-[#c75050] max-sm:text-sm'>STUDENT WELFARE SERVICES</strong>
                            </Link>
                        </li>
                        <li className='flex items-center justify-center group'>
                            <Link href="" className='flex flex-col items-center gap-2'>
                                <span>
                                    <img src="/image/icons/sports.png" alt="sports" className='max-lg:w-20 max-sm:w-16 max-[400px]:w-14'/>
                                </span>
                                <strong className='font-novaBold text-gray-500 group-hover:text-[#c75050] max-sm:text-sm'>SPORTS</strong>
                            </Link>
                        </li>
                        <li className='flex items-center justify-center group'>
                            <Link href="" className='flex flex-col items-center gap-2'>
                                <span>
                                    <img src="/image/icons/cultural.png" alt="cultural" className='max-lg:w-20 max-sm:w-16 max-[400px]:w-14'/>
                                </span>
                                <strong className='font-novaBold text-gray-500 group-hover:text-[#c75050] max-sm:text-sm'>CULTURAL</strong>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-[#0B4640]'>
                <div className='max-w-7xl mx-auto py-14 px-5 max-sm:px-3'>
                    <h2 className='text-3xl text-white font-novaBold max-sm:text-xl'>More Services</h2>
                    <div className="grid max-[600px]:grid-cols-1 grid-cols-3 max-lg:grid-cols-2 gap-6 mt-10">
                        {studentService.map(({ id, description, image }) => (
                            <div key={id} className="bg-white rounded-md">
                                <div>
                                    <Image
                                        src={image}
                                        alt={image}
                                        width={400}
                                        height={200}
                                        className="w-full h-80 object-cover max-sm:h-40"
                                    />
                                </div>
                                <div className='p-5'>
                                    <p className="text-sm font-novaReg text-gray-600">{description}</p>
                                    <button className="mt-5 my-3 px-5 py-2.5 font-novaSemi border rounded-md text-sm tracking-widest bg-indigo-950 text-white hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out">Read more</button>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    <div className='mt-5 text-white'>
                        <h2 className='text-3xl font-novaBold max-sm:text-xl'>Department of Student Welfare</h2>
                        <div className='mt-7 flex items-start justify-between gap-5'>
                            <p className='text-xs max-sm:pt-5'>Dial: +91-7290034978 <br /> Email: info@akgec.ac.in <br /> Mailing Address <br /><br />27th Km Milestone, <br />Delhi-Meerut Expressway, <br />P.O. Adhyatmik Nagar, <br />Ghaziabad - 201015
                            </p>
                            <div>
                                {/* Facility List */}
                                <ul className='flex items-center gap-10 max-sm:flex-col max-sm:gap-2'>
                                    <li>
                                        <button onClick={() => handleModalOpen('banking')} className='flex flex-col items-center gap-2'>
                                            <span><img className='h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20' src="/image/icons/bank.png" alt="bank" /></span>
                                            <small className='text-[11px] uppercase'>Banking Facilities</small>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleModalOpen('fitness')} className='flex flex-col items-center gap-2'>
                                            <span><img className='h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20' src="/image/icons/gym.png" alt="gym" /></span>
                                            <small className='text-[11px] uppercase'>Fitness</small>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleModalOpen('eating')} className='flex flex-col items-center gap-2'>
                                            <span><img className='h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20' src="/image/icons/eat.png" alt="eat" /></span>
                                            <small className='text-[11px] uppercase'>Eating Joints</small>
                                        </button>
                                    </li>
                                </ul>
                                {activeModal && (
                                    <div className="fixed inset-0 z-[100] bg-black flex justify-center items-start max-sm:items-center pt-5 px-2">
                                        <div className="bg-white text-black p-6 rounded shadow-lg max-w-3xl w-full relative">
                                            <button
                                                onClick={handleModalClose}
                                                className="absolute top-2 right-7 text-2xl max-sm:text-lg max-sm:top-6 font-bold text-gray-500 hover:text-gray-800"
                                            >
                                                &#x2715; {/* Close icon */}
                                            </button>

                                            {activeModal === 'banking' && (
                                                <div>
                                                    <h2 className="text-lg font-novaBold mb-5">Banking Facilities</h2>
                                                    <p className='border-y border-gray-300 text-sm py-5'>
                                                        At AKG University, we provide the best banking facilities to our students. In order
                                                        to cater to their banking needs, we have on-campus, fully air-conditioned and fully computerized branches of the State Bank of India.
                                                    </p>
                                                </div>
                                            )}

                                            {activeModal === 'fitness' && (
                                                <div>
                                                    <h2 className="text-lg font-novaBold mb-5">Fitness</h2>
                                                    <p className='border-y border-gray-300 text-sm py-5'>
                                                        Our university is equipped with a modern gym and fitness center, accessible to all students, to help maintain their physical health.
                                                    </p>
                                                </div>
                                            )}

                                            {activeModal === 'eating' && (
                                                <div>
                                                    <h2 className="text-lg font-novaBold mb-5">Eating Joints</h2>
                                                    <p className='border-y border-gray-300 text-sm py-5'>
                                                        AKGU campus has multiple food courts and cafeterias that serve a variety of healthy and delicious meals.
                                                    </p>
                                                </div>
                                            )}

                                            <button
                                                onClick={handleModalClose}
                                                className="mt-4 bg-red-700 float-right text-white px-4 py-2 max-sm:py-1.5 max-sm:text-xs uppercase font-novaBold rounded-lg"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default StudentServices