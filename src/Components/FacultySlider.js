import { IMAGE_PATH } from '@/configs/config';
import { CircleArrowRight, CircleArrowLeft, CircleUserRound, GraduationCap } from 'lucide-react';
import React, { useRef } from 'react';

const membersData = [
    {
        name: "Dr. Nitisha Shrivastava",
        role: "Dean, Students Welfare",
        image: "/image/Faculty/Dr. Nitisha Shrivastava.jpg",
    },
    {
        name: "Dr. J. G. Yadav",
        role: "Director, Sports",
        image: "/image/Faculty/Dr. J. G. Yadav.jpg",
    },
    {
        name: "Prof. V.K. Parashar",
        role: "Director, BCA",
        image: "/image/Faculty/Prof. V.K. Parashar.jpg",
    },
    {
        name: "Dr. Nitisha Shrivastava",
        role: "Dean, Students Welfare",
        image: "/image/Faculty/Dr. Nitisha Shrivastava.jpg",
    },
    {
        name: "Dr. J. G. Yadav",
        role: "Director, Sports",
        image: "/image/Faculty/Dr. J. G. Yadav.jpg",
    },
    {
        name: "Prof. V.K. Parashar",
        role: "Director, BCA",
        image: "/image/Faculty/Prof. V.K. Parashar.jpg",
    },
    {
        name: "Dr. Nitisha Shrivastava",
        role: "Dean, Students Welfare",
        image: "/image/Faculty/Dr. Nitisha Shrivastava.jpg",
    },
    // Add more members as needed
];

const FacultySlider = ({ data }) => {
    const d = data?.pageData;
    const sliderRef = useRef(null);

    const facultyData = data?.faculties || [];

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -300, // Adjust this value as needed for the scroll amount
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 300, // Adjust this value as needed for the scroll amount
            behavior: 'smooth',
        });
    };

    return (
        <section className='w-full bg-[#f1f5fe]'>
            <div className='max-w-7xl mx-auto py-10 text-center'>
                <p className='text-blue-600 uppercase font-novaBold tracking-wider text-lg'>Faculty</p>
                <h2 className='text-3xl font-novaBold'>{d?.Faculty_Title}</h2>
                <p className='mt-3 font-novaReg'>{d?.Faculty_Description_}</p>

                <div className="relative mt-6 px-12">
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        onClick={scrollLeft}
                        aria-label="Scroll Left"
                    >
                        <CircleArrowLeft size={24} className="text-[#432c6e]" />
                    </button>

                    <div
                        ref={sliderRef}
                        className="overflow-x-auto scrollbar-none flex gap-6 py-10"
                    >
                        {facultyData?.map((faculty) => (
                            <div key={faculty._id} className="min-w-[250px] bg-[#fff7f7] border border-blue-400 text-black overflow-hidden shadow transition hover:duration-300 hover:ease-in-out hover:shadow-2xl rounded-xl">
                                <div className="py-8 px-4">
                                    {faculty.banner_img && (
                                        <div className="flex items-center justify-center">
                                            <div className="h-34 w-34 rounded-full border-4 border-[#E7EBFB]">
                                                <img className="h-32 w-32 rounded-full" src={IMAGE_PATH + faculty.banner_img} alt={faculty.name} />
                                            </div>
                                        </div>
                                    )}
                                    <div className="mt-4 space-y-2">
                                        <h4 className="text-lg font-novaBold mb-4">{faculty.name}</h4>
                                        {faculty.param5 && (
                                            <div className="flex justify-center items-center gap-1">
                                                <CircleUserRound size={16} />
                                                <p className="text-sm text-gray-600">{faculty.param5}</p>
                                            </div>
                                        )}
                                        {faculty.param9 && (
                                            <div className="flex justify-center items-center gap-1">
                                                <GraduationCap size={16} />
                                                <p className="text-sm text-gray-600">{faculty.param9}</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-6 w-full flex items-center justify-end">
                                        <CircleArrowRight className="h-8 w-8 text-primary items-end" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        onClick={scrollRight}
                        aria-label="Scroll Right"
                    >
                        <CircleArrowRight size={24} className="text-[#432c6e]" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FacultySlider;
