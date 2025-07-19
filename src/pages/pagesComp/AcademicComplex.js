'use client';

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react';

const images = [
    {
        src: "/image/infrastructure-visual-tour/adminstration.jpg",
        alt: "Administrative Block",
        title: "ADMINISTRATIVE BLOCK",
        description: "This is the main administrative block where administrative activities take place.",
        category: "Administration"
    },
    {
        src: "/image/infrastructure-visual-tour/EN-2.jpg",
        alt: "EN / EC Block",
        title: "EN / EC BLOCK",
        description: "The Engineering and Electronics Block, home to engineering labs and classrooms.",
        category: "Engineering"
    },
    {
        src: "/image/infrastructure-visual-tour/seminar-1.jpg",
        alt: "Seminar Halls",
        title: "SEMINAR HALLS",
        description: "Equipped with modern facilities for hosting seminars and conferences.",
        category: "Event Space"
    },
    {
        src: "/image/infrastructure-visual-tour/tutorials.jpg",
        alt: "Lecture Rooms & Tutorials",
        title: "LECTURE ROOMS & TUTORIALS",
        description: "Rooms designed for lectures and tutorials, fostering interactive learning.",
        category: "Classrooms"
    },
    {
        src: "/image/infrastructure-visual-tour/Computer.jpg",
        alt: "Computer Center",
        title: "COMPUTER CENTRE",
        description: "A dedicated center for computer-based learning and research.",
        category: "Technology"
    },
    {
        src: "/image/infrastructure-visual-tour/CS.jpg",
        alt: "CS / IT Block",
        title: "CS / IT BLOCK",
        description: "The Computer Science and Information Technology Block, featuring specialized labs.",
        category: "Technology"
    },
    {
        src: "/image/infrastructure-visual-tour/ME.jpg",
        alt: "MECHANICAL BLOCK",
        title: "MECHANICAL BLOCK",
        description: "A block dedicated to mechanical engineering with state-of-the-art facilities.",
        category: "Engineering"
    },
    {
        src: "/image/infrastructure-visual-tour/lecture.jpg",
        alt: "LECTURE THEATRE COMPLEX",
        title: "LECTURE THEATRE COMPLEX",
        description: "A large complex designed for lectures and presentations with advanced audio-visual systems.",
        category: "Classrooms"
    },
];


export default function AcademicComplex() {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <div className="max-w-[1400px] mx-auto p-4 py-10">
            <div className='w-full'>
                <h2 className='text-4xl font-novaReg'>The Academic Complex: An Ecosystem of Learning</h2>
                <p className='max-w-4xl my-3 text-lg leading-5 font-novaReg'>The academic complex encompasses diverse entities, including schools, colleges, and universities, fostering collaboration, innovation, and holistic education to empower students.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10">
                {images.map((image, index) => (
                    <div key={index} style={{ opacity: 1 }} onClick={() => setSelectedImage(image)}
                        className="relative flex aspect-[9/16] w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[3/4] sm:w-96 cursor-pointer">
                        <img alt={image.alt} src={image.src} className="absolute inset-x-0 top-0 aspect-square w-full object-cover" />
                        <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(4/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-15%" />
                        <figure className="relative p-10">
                            <blockquote>
                                <p className="relative text-xl font-novaSemi text-white">
                                    {image.title}
                                </p>
                            </blockquote>
                            <figcaption className="mt-3 border-t border-white/20 pt-3">
                                <p className="text-sm/6 font-medium text-white">{image.category}</p>
                                <p className="text-sm/6 font-medium">
                                    <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                                    {image.description}
                                    </span>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-black bg-opacity-75 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-3xl max-h-full">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            width={800}
                            height={600}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-xl font-bold bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                        >
                            <X />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}