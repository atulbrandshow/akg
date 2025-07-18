'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
  },
  {
    name: "Aditya Gupta",
    education: "2021 Batch",
    company: "Sigmoid",
    designation: "Software Developer",
    image: "/",
    speaks: "AKGEC was a great experience. The college was lively, with bustling corridors and lively classrooms. It wasn't just about studying; it was about growing and making lifelong friends. AKGEC made me feel like I belonged.",
  },
  {
    name: "Avadesh Chaudhary",
    education: "2015 Batch",
    company: "Infosys",
    designation: "Sr. Technical Architect",
    image: "/",
    speaks: "My time at AKGEC was amazing. The campus was always buzzing with energy, featuring lively classrooms and engaging discussions. It wasn't just about earning a degree; it was about being part of a vibrant community.",
  },
  {
    name: "Ram Bahadur Singh",
    education: "MCA - 2008",
    company: "KNNX",
    designation: "Vice President- Product Manager",
    image: "/",
    speaks: "My journey at AKGEC was remarkable. From the bustling corridors to the lively classrooms, the college was filled with energy and opportunity. It wasn't just about studying; it was about growing, learning, and building lasting friendships. AKGEC provided more than just an education—it gave me a sense of belonging and community.",
  },
  {
    name: "Ashish Mishra",
    education: "2015 Batch",
    company: "Innovaccer",
    designation: "Associate Director - Platform and Engineering",
    image: "/",
    speaks: "My time at AKGEC was genuinely transformative. The campus buzzed with energy, and every class sparked engaging conversations and personal growth. AKGEC is more than just a college; it's a supportive network that fosters teamwork and progress.",
  },
  {
    name: "Madhur Vashistha",
    education: "2018-2022 Batch",
    company: "Google",
    designation: "Software Engineer",
    image: "/",
    speaks: "My experience at AKGEC was truly exceptional. From the bustling campus atmosphere to the engaging classroom discussions, the college provided a rich environment for personal and academic growth. AKGEC wasn’t just about obtaining a degree; it was about fostering a sense of belonging and community among students. What sets AKGEC apart is its commitment to excellence, evident in the success of its graduates who are making significant contributions in their respective fields. Being part of AKGEC means being part of a supportive network that empowers individuals to thrive and succeed.",
  },
  {
    name: "Garima Pandey",
    education: "2019-2013 Batch",
    company: "Amazon",
    designation: "Senior Developer - 1",
    image: "/",
    speaks: "Looking back on my time at AKGEC, it has been an enlightening journey. The vibrant campus atmosphere fueled my curiosity, and the mentors' guidance shaped my growth. AKGEC's unique strength lies in its close-knit community and hands-on learning approach. Beyond academics, it was a place where lifelong friendships were forged and dreams were nurtured.",
  },
]

const StudentStories = () => {
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
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start w-[280px] sm:w-[320px] md:w-[360px] mr-4 md:mr-6 last:mr-0 py-4"
            >
              <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
                <div className="flex gap-4 border-b border-gray-100 pb-3 mb-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-novaBold text-gray-800">{testimonial.name}</p>
                    <p className="text-xs font-novaReg text-gray-600">{testimonial.education}</p>
                    <p className="text-xs font-novaSemi text-gray-600">{testimonial.designation} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-sm font-novaReg text-gray-700 line-clamp-5 text-justify">{testimonial.speaks}</p>
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
