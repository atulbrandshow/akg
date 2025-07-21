"use client";

import Image from "next/image";
import Link from "next/link";
import ThreeSlides from "@/Components/ThreeSlides";

const statisticsData = [
  { number: '20+', sub: 'COE', text: 'Center of Excellence' },
  { number: '60', sub: 'Research Centers', text: '67 Funded Projects Ongoing' },
  { number: '15', sub: 'Crores', text: 'Annual Research Budget' },
];

const slides = [
  {
    id: 1,
    title: "Aerospace",
    description: "AKG University introduces 'CUSAT', North India's premier Student Satellite Designing and Training program, marking its pioneering step in advanced aerospace engineering education."
  },
  {
    id: 2,
    title: "Inauguration",
    description: "Union Defence Minister Rajnath Singh inaugurated the Kalpana Chawla Centre for Research in Space Science and Technology (KCCRST) at AKG University on January 3, 2022."
  },
  {
    id: 3,
    title: "ISRO",
    description: "India's four astronaut-designates for the Gaganyaan mission undergo rigorous training at ISRO's crew training facility, covering simulators, microgravity familiarization, survival, flying practice, and Yoga sessions."
  },
  {
    id: 4,
    title: "Aerospace",
    description: "AKG University introduces 'CUSAT', North India's premier Student Satellite Designing and Training program, marking its pioneering step in advanced aerospace engineering education."
  },
  {
    id: 5,
    title: "Inauguration",
    description: "Union Defence Minister Rajnath Singh inaugurated the Kalpana Chawla Centre for Research in Space Science and Technology (KCCRST) at AKG University on January 3, 2022."
  },
  {
    id: 6,
    title: "ISRO",
    description: "India's four astronaut-designates for the Gaganyaan mission undergo rigorous training at ISRO's crew training facility, covering simulators, microgravity familiarization, survival, flying practice, and Yoga sessions."
  }
];

const Research = () => {
  return (
    <>
      <section className="relative bg-BG45 bg-cover w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative flex flex-col md:grid md:grid-cols-2 h-full max-w-7xl mx-auto py-20 px-4 md:gap-8 max-sm:py-10">
          <div className="flex flex-col justify-center md:order-1 md:px-6 lg:px-8 max-sm:px-0">
            <div className="max-w-[440px] mx-auto md:mx-0 max-sm:pb-5">
              <div className="mb-6 max-md:mb-4 max-sm:mb-2.5">
                <h2 className="text-[28px] md:text-[32px] font-novaReg text-white mb-2">
                  Innovation & 
                  <span className="text-black"> Entrepreneurship</span>
                </h2>
              </div>
              <p className="font-novaBold text-lg text-white mb-4 leading-[1.5] max-sm:text-base">
                Firmly established as a rapidly rising hub of excellence for innovation and entrepreneurship, AKG University actively nurtures and empowers handpicked creative ideas across diverse fields, transforming them into valuable and viable business opportunities.
              </p>
              <div className="flex flex-wrap mb-6 gap-2 max-lg:mb-5 max-md:mb-4 max-sm:mb-3 max-sm:gap-1.5">
                <a className="py-1 px-4 font-novaBold text-white bg-[#f7a600] rounded-md hover:opacity-90 transition" href="tbi.php">AKG TBI</a>
                <a className="py-1 px-4 font-novaBold text-white bg-[#f7a600] rounded-md hover:opacity-90 transition" href="tbi.php">IEDC</a>
                <a className="py-1 px-4 font-novaBold text-white bg-[#f7a600] rounded-md hover:opacity-90 transition" href="tbi.php">APJ Abdul Kalam Conclave</a>
              </div>
              <div className="flex flex-wrap gap-4 mb-6 max-lg:mb-5 max-md:mb-4 max-sm:mb-2.5 max-md:gap-3 max-sm:gap-2.5">
                <div className="flex flex-col items-start border-r-2 pr-4">
                  <h2 className="text-5xl text-white mb-2 font-novaBold max-md:text-4xl max-sm:text-3xl">120</h2>
                  <span className="text-base font-novaBold text-[#f7a600] uppercase max-sm:text-sm">Startups</span>
                </div>
                <div className="flex flex-col items-start pl-4">
                  <h2 className="text-5xl text-white mb-2 font-novaBold max-md:text-4xl max-sm:text-3xl">2300+</h2>
                  <span className="text-base font-novaBold text-[#f7a600] uppercase max-sm:text-sm">Patents</span>
                </div>
              </div>
              <a href="#" className="py-2 px-6 mt-4 bg-[#f7a600] text-white text-sm font-novaBold uppercase rounded-lg hover:opacity-90 transition">Read More</a>
            </div>
          </div>

          <div className="flex flex-col justify-center md:order-2 md:px-6 lg:px-8 py-5">
            <div className="max-w-[430px] mx-auto md:mx-0">
              <div className="mb-6">
                <h1 className="text-white md:text-black font-novaReg text-[28px] md:text-[40px] mb-2 text-left">Research</h1>
              </div>
              <p className="font-novaBold text-lg text-white mb-4 leading-[1.5] max-sm:text-base">
                A beacon of innovation & education, AKG fosters research, experiential learning, and industry ties for students' future success. With substantial funding, 50 research groups, 30 advanced labs, and numerous patents, AKG sets remarkable standards in academia & research.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex flex-col items-start">
                  <h3 className="text-5xl text-white mb-2 font-novaBold max-md:text4xl max-sm:text-3xl">420</h3>
                  <span className="text-base text-[#f7a600] font-novaBold uppercase leading-none max-sm:text-sm">
                    Million INR received as grants in last 5 years
                  </span>
                </div>
                <div className="flex flex-col items-start border-r-2 pr-4">
                  <h3 className="text-5xl text-white mb-2 font-novaBold max-md:text4xl max-sm:text-3xl">9000+</h3>
                  <span className="text-base text-[#f7a600] font-novaBold uppercase max-sm:text-sm">Published in Referred Journals</span>
                </div>
                <div className="flex flex-col items-start max-sm:pl-0">
                  <h3 className="text-5xl text-white mb-2 font-novaBold max-md:text4xl max-sm:text-3xl">70</h3>
                  <span className="text-base text-[#f7a600] font-novaBold uppercase max-sm:text-sm">Center of Research</span>
                </div>
              </div>
              <a href="research.php" className="py-2 px-6 mt-4 bg-[#f7a600] text-white text-sm font-novaBold uppercase rounded-lg hover:opacity-90 transition">Read More</a>
            </div>
          </div>

        </div>
      </section>


      <section className="py-10 max-lg:py-9 max-md:py-7 max-sm:py-5">
        <div className="max-w-7xl mx-auto h-full flex flex-wrap gap-10 lg:flex-nowrap px-5 max-sm:gap-4 max-sm:px-2">
          <div className="w-full lg:w-[35%] bg-blue-600 py-16 flex flex-col gap-5 text-white px-5 rounded-lg lg:rounded-none max-md:px-4 max-sm:px-3 max-md:gap-4 max-sm:gap-2.5 max-lg:py-10 max-md:py-8 max-sm:py-6">
            <h2 className="text-3xl lg:text-4xl font-novaBold">About Research</h2>
            <p className="leading-6 text-sm lg:text-base font-novaLight">
              The research landscape at AKG University is extensive and impactful. Scholars at the university engage in research across diverse fields, striving to enhance human knowledge through rigorous inquiry, innovation, and insight. AKG University is acknowledged by the Department of Scientific and Industrial Research (DSIR) for its contributions to scientific advancement.
            </p>
            <a
              className="w-fit py-2.5 px-6 border rounded-xl bg-[#f7a600] text-white text-xs lg:text-sm font-novaBold uppercase transition duration-300 hover:bg-[#e49400]"
              href="#"
            >
              Read More
            </a>
          </div>

          <div className="w-full lg:w-[65%] flex flex-col lg:flex-row items-center gap-10 max-lg:gap-8 max-md:gap-6 max-sm:gap-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-5 max-md:gap-4 max-sm:gap-2.5">
              {statisticsData?.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-100 rounded-lg shadow-md text-center"
                >
                  <h2 className="text-3xl lg:text-4xl font-novaBold">
                    {item.number}
                    <sub className="text-sm font-novaBold ml-1 uppercase align-bottom">
                      {item.sub}
                    </sub>
                  </h2>
                  <span className="font-novaBold uppercase text-sm lg:text-base leading-none">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-auto flex justify-center">
              <div className="relative">
                <Image
                  src="/image/research/research-female.webp"
                  alt="Research Video"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 py-10 max-md:px-3 max-sm:px-2.5 max-lg:py-9 max-md:py-7 max-sm:py-5">
          <h1 className="text-4xl font-novaBold text-center mb-6 max-md:text-3xl max-sm:text-2xl max-md:mb-5 max-sm:mb-4">Know About Us</h1>
          <div className="space-y-6 text-center max-md:space-y-4 max-sm:space-y-3">
            <p className="leading-5 font-novaLight text-lg max-sm:text-base">
              AKG University research is strengthened by additional 52 Crore of funded research by the government bodies and corporates.
              The research is conceded at both in the department itself and at University Centre for Research & Development and at the 60 Research
              centers within the campus. AKG University Research fraternity includes teaching staff members, scholars, postgraduate and
              undergraduate student & international scholars. The university has tie ups with the prominent national and international institutions for
              joint research and guidance. University is also focusing on the innovation and patents. The innovation and entrepreneurship activities is
              carried out at AKG University Technology Business Incubator.
            </p>
            <p className="leading-5 font-novaLight text-lg max-sm:text-base">
              Technology Business Incubator is an innovative platform offering mentorship and financial support to passionate individuals aspiring to
              be entrepreneurs. TBI is accelerating the development of young entrepreneurial start-ups from early to mid-stage entrepreneurial
              development. AKG University filed 2400+ Patents, which is second highest number of patent filed by any institution/organization
              in India.
            </p>
          </div>
        </div>
      </section>

      <ThreeSlides slides={slides} />

      <section className="max-w-5xl mx-auto">
        <div className="container mx-auto px-4 py-10 max-md:px-3 max-sm:px-2.5 max-lg:py-9 max-md:py-7 max-sm:py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-md:gap-6 max-sm:gap-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/image/research/student-1.webp"
                alt="Students presenting Queen Belt"
                width={400}
                height={200}
                className="w-full h-64  object-cover"
              />
              <div className="mb-10 lg:p-4 max-md:p-3 max-sm:p-3 max-lg:mb-8 max-md:mb-6 max-sm:mb-4">
                <h2 className="text-xl font-novaBold mb-2 max-md:text-lg max-sm:text-base">AKG University students invent 'King Belt' for women's safety</h2>
                <p className="text-base leading-5 font-novaLight max-sm:text-sm">
                  At a time when rape cases are increasing at an alarming rate, a group of students from AKG
                  University have invented a device for women's safety. The students have invented.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/image/research/student-2.webp"
                alt="Student with app-based cycle"
                width={400}
                height={200}
                className="w-full h-64 object-cover"
              />
              <div className="mb-10 lg:p-4 max-md:p-3 max-sm:p-3 max-lg:mb-8 max-md:mb-6 max-sm:mb-4">
                <h2 className="text-xl font-novaBold mb-2 max-md:text-lg max-sm:text-base">AKG University student invents app-based, battery-operated</h2>
                <p className="text-base leading-5 font-novaLight max-sm:text-sm">
                  A university student in AKG invented an application-based battery-operated for the
                  students living in hostel to travel to their classes.Spot can be traced through.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Research;