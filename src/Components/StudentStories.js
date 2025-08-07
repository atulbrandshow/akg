'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IMAGE_PATH } from '@/configs/config';

const testimonials = [
  {
    name: "Avinash Singh",
    education: "B.Tech IT (2015-2019)",
    company: "UKG",
    designation: "Senior Product Manager",
    image: "/",
    speaks: "My experience at AKGEC has been nothing less than phenomenal. The college provided me with a supportive environment that fostered growth and learning. The faculty was welcoming, and their guidance greatly aided our academic journey, moving us closer toward our goals. I had mentors who consistently went the extra mile to offer help and guidance. Being a part of Software Incubator - SDC, an R&D center at our college, was transformative, expanding my knowledge of diverse technologies and the corporate landscape. The camaraderie within the team was truly remarkable, nurturing a supportive and collaborative environment."
  },
  {
    name: "Ishu Bansal",
    education: "B.Tech IT (2007-2011)",
    company: "Truck Suvidha",
    designation: "Founder & CEO",
    image: "/",
    speaks: "While at AKGEC, I was actively involved in various societies, won awards for academic and extracurricular achievements, and was a founding member of the Software Incubator. These experiences have shaped my journey, ultimately leading me to found TruckSuvidha, a startup aimed at revolutionizing the transportation industry.",
  }
]

const StudentStories = ({ studentReviews }) => {
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative px-4 py-8 md:px-6 lg:px-8">
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {studentReviews.map((review) => (
            <div
              key={review?._id}
              className="flex-shrink-0 snap-start w-[280px] sm:w-[320px] md:w-[360px] mr-4 md:mr-6 last:mr-0 py-4"
            >
              <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
                <div className="flex gap-4 border-b border-gray-100 pb-3 mb-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500">
                    <img
                      src={IMAGE_PATH + review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-novaBold text-gray-800">{review.name}</p>
                    <p className="text-xs font-novaReg text-gray-600">{review.course}</p>
                    <p className="text-xs font-novaSemi text-gray-600">{review.company_name}</p>
                  </div>
                </div>
                <p className="text-sm font-novaReg text-gray-700 line-clamp-5 text-justify">{review.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-20 -top-5 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-1 rounded-full hidden md:block"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          className="absolute right-8 -top-5 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-1 rounded-full hidden md:block"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default StudentStories;
