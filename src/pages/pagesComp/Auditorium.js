import React from "react";

const auditoriumData = [
  {
    name: "Auditorium 1",
    image: "/image/auditorium/Auditorium-1.jpg",
    description: "With its excellent technical facilities and theatre-style seating...",
  },
  {
    name: "Auditorium 2",
    image: "/image/auditorium/Auditorium-2.jpg",
    description: "With its amphitheatre design and a vast stage, Visvesvaraya Auditorium is a hub for all the...",
  },
  {
    name: "Auditorium 3",
    image: "/image/auditorium/Auditorium-3.jpg",
    description: "With its excellent technical facilities and theatre style seating capacity, the visually stunning...",
  },
];

export default function Auditorium() {
  return (
    <>
      <div className="px-4 max-sm:px-3">
        <h1 className="text-4xl font-novaReg mb-4 max-md:text-2xl max-sm:text-xl max-sm:font-novaSemi max-sm:mb-2.5">Auditorium</h1>
        <div className="space-y-4 mb-8 max-sm:mb-4 max-sm:space-y-2">
          <p className="text-base text-gray-900 font-novaReg max-sm:text-sm text-justify">
            AKG University features three spacious auditoriums, ideal for hosting a variety of international, national, and institutional events, such as conferences, workshops, seminars, meetings, placement sessions, and cultural activities. Each auditorium is well-furnished, air-conditioned, and equipped with advanced projection systems, audio setups, and internet access.
          </p>
          <p className=" text-base text-gray-900 font-novaReg max-sm:text-sm text-justify">
            The auditoriums are designed with fixed theatre-style seating, a raised stage, adjustable lighting, a quality sound system, and large screens for presentations. Their layout ensures a clear view of the stage from every seat, providing an optimal experience for all attendees.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 max-xl:gap-3 max-md:gap-3 max-sm:gap-3">
        {auditoriumData?.map((auditorium) => (
          <div key={auditorium.name} className="bg-white group rounded-lg hover:scale-95 duration-300 transition-all ease-linear shadow-md overflow-hidden">
            <img src={auditorium.image} alt={auditorium.name} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4 max-md:p-3 max-sm:p-2.5">
              <h2 className="text-xl font-novaSemi mb-2 max-sm:text-base max-sm:mb-1.5">{auditorium.name}</h2>
              <div className="w-0 group-hover:w-full transition-all duration-300 ease-linear h-0.5 bg-blue-500 mb-4 max-sm:mb-2"></div>
              <p className="text-base text-gray-600 font-novaReg max-sm:text-sm text-justify">{auditorium.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
