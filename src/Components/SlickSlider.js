"use client";
import { useState, useEffect } from "react";

const cardDetails = [
  {
    id: 1,
    title: "Honored at the Tech Startups Conclave & Awards 2022",
    subheading: "Ishu Bansal",
    images: [
      "/image/home/IshuBansal.jpg",
      "/image/home/AKTULITERARY1.jpg",
      "/image/home/AKTULITERARY2.jpg",
    ],
  },
  {
    id: 2,
    title: "The AKGU Robotics club is a student chapter formed on 8'MAY '2013",
    subheading: "Robotics Club",
    images: [
      "/image/home/RoboticsHome.jpg",
      "/image/home/Robocon2018_1.jpg",
      "/image/home/Robocon2022_3.jpg",
    ],
  },
  {
    id: 3,
    title: "Explore ICI Membership Benefits and Advanced Concrete Technology",
    subheading: "A Grand Inaugural Ceremony",
    images: [
      "/image/home/ICI4.jpg",
      "/image/home/ICI2.jpg",
      "/image/home/ICI3.jpg",
    ],
  },
  {
    id: 4,
    title: "Developing Top Engineers and Technicians for a Thriving Industry",
    subheading: "ISTE",
    images: [
      "/image/home/iste.jpg",
      "/image/home/Robocon2015_4.jpg",
      "/image/home/Robocon2015_5.jpg",
    ],
  },
  {
    id: 5,
    title: "SAE International: A Century of Engineering Excellence",
    subheading: "SAE International",
    images: [
      "/image/home/Aacar2.jpg",
      "/image/home/Aacar5.jpg",
      "/image/home/SUPRA3.jpg",
    ],
  },
  {
    id: 6,
    title: "Celebrating Future Innovators in Robotics and Automation",
    subheading: "Robotics Competition",
    images: [
      "/image/home/Mitsubishi_1.jpg",
      "/image/home/Mitsubishi_3.jpg",
      "/image/home/Mitsubishi_2.jpg",
    ],
  },
];

export default function SlickSlider() {
  const [imageIndex, setImageIndex] = useState(
    cardDetails.reduce((acc, item) => {
      acc[item.id] = 0; // Initialize each item's index to 0
      return acc;
    }, {})
  );

  useEffect(() => {
    const intervals = cardDetails.map((item, idx) => {
      return setInterval(() => {
        setImageIndex((prevIndex) => {
          const newIndex = { ...prevIndex };
          newIndex[item.id] = (prevIndex[item.id] + 1) % item.images.length; // Increment index
          return newIndex;
        });
      }, (idx + 1) * 1000); // Set different intervals for each item
    });

    // Clear all intervals on component unmount
    return () => {
      intervals.forEach(clearInterval);
    };
  }, [cardDetails]);

  return (
    <>
      <section className="h-full bg-[#F3F3F3] py-8">
        <div className="break1:max-w-[1500px] break2:max-w-[1320px] break3:max-w-[1200px] break4:max-w-[1040px] mx-auto">
          <header className="text-center mb-8 max-xl:mb-5">
            <h1 className="text-[42px] font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
              A Glimpse into Our{" "}
              <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                Vibrant Journey
              </span>
            </h1>
          </header>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 max-lg:col-span-12 max-lg:mb-4 flex items-center relative">
              {/* Unique Design Elements */}
              <div
                className="absolute left-[-30%] top-[-10%] h-64 w-64 transform rotate-45 bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-500 opacity-30 blur-xl rounded-full z-0"
              />
              <div
                className="absolute max-lg:hidden right-[-20%] bottom-[20%] h-48 w-48 transform -rotate-45 bg-gradient-to-br from-amber-500 via-amber-700 to-amber-900 opacity-30 blur-xl rounded-full z-0"
              />
              <div
                className="absolute left-[30%] top-[70%] h-32 w-32 transform rotate-12 bg-gradient-to-br from-red-400 via-red-600 to-red-800 opacity-30 blur-xl rounded-full z-0"
              />

              {/* Left Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-lg:grid-cols-2 max-lg:px-10 max-sm:px-5 max-[400px]:px-2 z-10 relative max-lg:w-full">
                <article className="border-r border-b border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                  <h2 className="text-5xl xl:text-5xl font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700">
                    282
                  </h2>
                  <span className="bg-gradient-to-tr from-amber-500 to-red-600 text-white py-1.5 max-[400px]:py-1 max-[400px]:text-xs mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold">
                    Companies
                  </span>
                  <p className="mt-3 text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                    For 2023-24 campus <br /> placements{" "}
                  </p>
                </article>

                <article className="border-b border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                  <h2 className="text-5xl xl:text-5xl font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700">
                    1406
                  </h2>
                  <span className="bg-gradient-to-tr from-amber-500 to-red-600 text-white py-1.5 max-[400px]:py-1 max-[400px]:text-xs mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold">
                    placements
                  </span>
                  <p className="mt-3 text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                    Offered in <br /> 2023-24 Batch
                  </p>
                </article>

                <article className="border-r border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                  <h2 className="text-5xl xl:text-5xl font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700">
                    <span className="whitespace-nowrap">
                      33.80{" "}
                      <span className="text-gray-600 font-novaLight text-xl max-xl:-ml-3 max-lg:-ml-2 pr-5 max-2xl:text-xl max-md:text-lg max-sm:text-base">
                        LPA
                      </span>
                    </span>
                  </h2>
                  <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-1.5 max-[400px]:py-1 max-[400px]:text-xs mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold">
                    Engineering
                  </span>
                  <p className="mt-3 text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                    Highest Package <br /> Offered{" "}
                  </p>
                </article>

                <article className="p-6 max-xl:p-4 leading-5 max-lg:text-center">
                  <h2 className="text-5xl xl:text-5xl font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700">
                    <span className="whitespace-nowrap">
                      1.13{" "}
                      <span className="text-gray-600 font-novaLight text-xl max-xl:-ml-3 max-lg:-ml-2 max-2xl:text-xl max-md:text-lg max-sm:text-base">
                        CR
                      </span>
                    </span>
                  </h2>
                  <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-1.5 max-[400px]:py-1 max-[400px]:text-xs mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold">
                    Engineering
                  </span>
                  <p className="mt-3 text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                    Average Package <br /> Offered{" "}
                  </p>
                </article>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-8 max-lg:col-span-12 max-lg:mx-auto">
              <section className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {cardDetails.slice(0, 6).map((item) => (
                  <div
                    key={item.id}
                    className="group relative h-[20rem] w-full max-sm:h-80 max-sm:w-72 max-2xl:w-64 max-2xl:h-80 max-xl:w-52 max-xl:h-72 max-lg:h-96 max-lg:w-80 max-md:w-60 max-md:h-80 bg-white shadow-md overflow-hidden"
                  >
                    <img
                      src={item.images[imageIndex[item.id] || 0]}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-5%"
                    />
                    <div className="absolute bottom-0 left-0 p-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <blockquote>
                        <p className="text-xs uppercase text-white">
                          {item.subheading}
                        </p>
                      </blockquote>
                      <figcaption className="mt-3 border-t border-white/20 pt-2">
                        <p className="font-novaReg">
                          <span className="bg-gradient-to-r text-sm line-clamp-2 from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                            {item.title}
                          </span>
                        </p>
                      </figcaption>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
