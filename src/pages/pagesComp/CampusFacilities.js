import React from "react";

const campusFacility = [
    {
        name: "Hostel Mess",
        image: "/image/campus-facilities/mostel-mess.jpg",
        description: " Hostel Mess offers nutritious meals and a communal dining experience for students...",
    },
    {
        name: "Cafeterias",
        image: "/image/campus-facilities/cafeterias.jpg",
        description: "Cafeterias provide a variety of food options and a social space for students...",
    },
    {
        name: "Transport Facilities",
        image: "/image/campus-facilities/transport-facilities.jpg",
        description: "Transport facilities offer convenient commuting options for students and staff within the campus...",
    },
    {
        name: "24*7 Wi-Fi enabled campus",
        image: "/image/campus-facilities/wi-fi.jpg",
        description: "The campus features 24/7 Wi-Fi access for seamless connectivity and online learning...",
    },
    {
        name: "Laundry Services",
        image: "/image/campus-facilities/laundry-services.jpg",
        description: "Laundry services offer convenient washing and drying facilities for students clothing and linens...",
    },
    {
        name: "Emergency Van/ambulances",
        image: "/image/campus-facilities/emergency-van-ambulances.jpg",
        description: "Emergency vans and ambulances provide prompt medical assistance and transportation for students....",
    },
];

export default function CampusFacilities() {
    return (
        <>
            <div className="">
                <div className="">
                    <h1 className="text-4xl font-novaReg mb-4 max-sm:text-xl max-sm:mb-2 max-sm:font-novaSemi">Campus Facilities</h1>
                    <div className="space-y-4 mb-8 max-sm:space-y-2.5 max-sm:mb-4">
                        <p className="text-base text-gray-900 max-sm:text-sm text-justify">
                            AKG University provides a wide range of exceptional facilities designed to foster an environment where students can shape their future. The campus includes various cafés, restaurants, spaces for conferences and meetings, special events, receptions, and athletic competitions. We place great importance on our facilities and learning resources, ensuring that both staff and students have access to everything they need to excel in their academic and professional pursuits.
                        </p>
                        <p className="text-base text-gray-900 max-sm:text-sm text-justify">
                            At AKG University, we understand the value of taking a break from academic pressures and relaxing with friends. Our university-owned and managed accommodations offer students the choice of quieter settings along with excellent social opportunities to meet new people. Our sports centers provide opportunities for fitness enthusiasts of all levels to stay active.
                        </p>
                        <p className="text-base text-gray-900 max-sm:text-sm text-justify">
                            Safety and comfort remain our top priorities for both staff and students. The university’s dedicated fleet of buses offers a reliable pick-and-drop service, ensuring a comfortable travel experience for all students.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 max-sm:gap-3 max-sm:">
                    {campusFacility?.map((CampusFacilities) => (
                        <div key={CampusFacilities.name} className="bg-white group hover:scale-95 transition-all duration-300 ease-in-out rounded-lg shadow-md overflow-hidden">
                            <div
                                className="w-full h-[180px] bg-cover"
                                style={{
                                    backgroundImage: `url(${CampusFacilities.image})`,
                                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2vw))",
                                }}
                            />
                            <div className="p-4 max-sm:p-2.5">
                                <h2 className="text-lg font-novaSemi mb-2 max-sm:text-base">{CampusFacilities.name}</h2>
                                <div className=" w-0 group-hover:w-full transition-all duration-300 ease-linear  h-0.5 bg-red-500 mb-4 max-sm:mb-2.5"></div>
                                <p className="text-gray-600 font-novaReg text-sm text-justify">{CampusFacilities.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
