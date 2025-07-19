"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const transportRoutes = {
    delhi: [
        {
            route: "Route No. 1A",
            stops: [
                { srNo: 1, stop: "Piragarhi Chowk", time: "6.40 am" },
                { srNo: 2, stop: "Mangol Puri, Police Line", time: "6.50 am" },
                { srNo: 3, stop: "Saraswati Vihar", time: "7.00 am" },
                { srNo: 4, stop: "Pitam Pura Metro Station/Madhuvan Chowk", time: "7.08 am" },
                { srNo: 5, stop: "AKG University", time: "8.20 am" },
            ],
        },
        {
            route: "Route No. 1B",
            stops: [
                { srNo: 1, stop: "Janakpuri West Metro Station", time: "6.45 am" },
                { srNo: 2, stop: "Dwarka Sector 21", time: "6.55 am" },
                { srNo: 3, stop: "Rohini Sector 16", time: "7.05 am" },
                { srNo: 4, stop: "Pitampura", time: "7.15 am" },
                { srNo: 5, stop: "Dharamshila Hospital", time: "8.30 am" },
            ],
        },
        {
            route: "Route No. 1C",
            stops: [
                { srNo: 1, stop: "Rajouri Garden", time: "6.50 am" },
                { srNo: 2, stop: "Punjabi Bagh", time: "6.55 am" },
                { srNo: 3, stop: "Shalimar Bagh", time: "7.05 am" },
                { srNo: 4, stop: "Azadpur Metro Station", time: "7.15 am" },
                { srNo: 5, stop: "Mahatma Gandhi Park", time: "8.35 am" },
            ],
        },
        {
            route: "Route No. 1D",
            stops: [
                { srNo: 1, stop: "Chandni Chowk", time: "6.55 am" },
                { srNo: 2, stop: "Connaught Place", time: "7.05 am" },
                { srNo: 3, stop: "Rajiv Chowk", time: "7.15 am" },
                { srNo: 4, stop: "Lajpat Nagar", time: "7.25 am" },
                { srNo: 5, stop: "Khan Market", time: "7.35 am" },
            ],
        },
        {
            route: "Route No. 1E",
            stops: [
                { srNo: 1, stop: "Khan Market", time: "6.30 am" },
                { srNo: 2, stop: "Safdarjung Hospital", time: "6.40 am" },
                { srNo: 3, stop: "AIIMS", time: "6.50 am" },
                { srNo: 4, stop: "Vasant Kunj", time: "7.00 am" },
                { srNo: 5, stop: "Jawaharlal Nehru University", time: "7.10 am" },
            ],
        },
    ],
    noida: [
        {
            route: "Route No. 2A",
            stops: [
                { srNo: 1, stop: "Sector 15", time: "6.40 am" },
                { srNo: 2, stop: "Sector 16", time: "6.50 am" },
                { srNo: 3, stop: "Sector 17", time: "7.00 am" },
                { srNo: 4, stop: "Sector 18", time: "7.10 am" },
                { srNo: 5, stop: "Sector 19", time: "7.20 am" },
            ],
        },
        {
            route: "Route No. 2B",
            stops: [
                { srNo: 1, stop: "Sector 18 Metro Station", time: "6.45 am" },
                { srNo: 2, stop: "Noida Sector 62", time: "6.55 am" },
                { srNo: 3, stop: "Noida City Center", time: "7.05 am" },
                { srNo: 4, stop: "Sector 34", time: "7.15 am" },
                { srNo: 5, stop: "Noida Stadium", time: "7.25 am" },
            ],
        },
        {
            route: "Route No. 2C",
            stops: [
                { srNo: 1, stop: "Sector 27", time: "6.50 am" },
                { srNo: 2, stop: "Sector 12", time: "7.00 am" },
                { srNo: 3, stop: "Noida Stadium", time: "7.10 am" },
                { srNo: 4, stop: "Sector 18", time: "7.20 am" },
                { srNo: 5, stop: "Sector 20", time: "7.30 am" },
            ],
        },
        {
            route: "Route No. 2D",
            stops: [
                { srNo: 1, stop: "Sector 15A", time: "6.55 am" },
                { srNo: 2, stop: "Sector 16A", time: "7.05 am" },
                { srNo: 3, stop: "Sector 19", time: "7.15 am" },
                { srNo: 4, stop: "Sector 20", time: "7.25 am" },
                { srNo: 5, stop: "Sector 21", time: "7.35 am" },
            ],
        },
        {
            route: "Route No. 2E",
            stops: [
                { srNo: 1, stop: "Sector 32", time: "7.00 am" },
                { srNo: 2, stop: "Sector 35", time: "7.10 am" },
                { srNo: 3, stop: "Noida Sector 56", time: "7.20 am" },
                { srNo: 4, stop: "Sector 62 Metro Station", time: "7.30 am" },
                { srNo: 5, stop: "Noida Sector 58", time: "7.40 am" },
            ],
        },
    ],
    gurugram: [
        {
            route: "Route No. 3A",
            stops: [
                { srNo: 1, stop: "Cyber City", time: "7.00 am" },
                { srNo: 2, stop: "MG Road", time: "7.10 am" },
                { srNo: 3, stop: "Sector 25", time: "7.20 am" },
                { srNo: 4, stop: "DLF Phase 2", time: "7.30 am" },
                { srNo: 5, stop: "Cyber Hub", time: "7.40 am" },
            ],
        },
        {
            route: "Route No. 3B",
            stops: [
                { srNo: 1, stop: "Sohna Road", time: "7.15 am" },
                { srNo: 2, stop: "Gurgaon Sector 14", time: "7.25 am" },
                { srNo: 3, stop: "Gurgaon Sector 56", time: "7.35 am" },
                { srNo: 4, stop: "Gurgaon Sector 15", time: "7.45 am" },
                { srNo: 5, stop: "Gurgaon Sector 10", time: "7.55 am" },
            ],
        },
        {
            route: "Route No. 3C",
            stops: [
                { srNo: 1, stop: "Gurgaon Railway Station", time: "7.05 am" },
                { srNo: 2, stop: "Sushant Lok", time: "7.15 am" },
                { srNo: 3, stop: "Palam Vihar", time: "7.25 am" },
                { srNo: 4, stop: "Hero Honda Chowk", time: "7.35 am" },
                { srNo: 5, stop: "Gurgaon Sector 22", time: "7.45 am" },
            ],
        },
        {
            route: "Route No. 3D",
            stops: [
                { srNo: 1, stop: "DLF Cyber Hub", time: "7.10 am" },
                { srNo: 2, stop: "Sohna Road", time: "7.20 am" },
                { srNo: 3, stop: "Golf Course Extension", time: "7.30 am" },
                { srNo: 4, stop: "Gurgaon Sector 65", time: "7.40 am" },
                { srNo: 5, stop: "Gurgaon Sector 50", time: "7.50 am" },
            ],
        },
        {
            route: "Route No. 3E",
            stops: [
                { srNo: 1, stop: "Gurgaon Sector 33", time: "7.00 am" },
                { srNo: 2, stop: "Gurgaon Sector 48", time: "7.10 am" },
                { srNo: 3, stop: "Gurgaon Sector 43", time: "7.20 am" },
                { srNo: 4, stop: "Gurgaon Sector 40", time: "7.30 am" },
                { srNo: 5, stop: "Gurgaon Sector 36", time: "7.40 am" },
            ],
        },
    ],
    faridabad: [
        {
            route: "Route No. 4A",
            stops: [
                { srNo: 1, stop: "Sector 12", time: "7.30 am" },
                { srNo: 2, stop: "Sector 15", time: "7.40 am" },
                { srNo: 3, stop: "Sector 16", time: "7.50 am" },
                { srNo: 4, stop: "Sector 17", time: "8.00 am" },
                { srNo: 5, stop: "Sector 18", time: "8.10 am" },
            ],
        },
        {
            route: "Route No. 4B",
            stops: [
                { srNo: 1, stop: "Badkal Lake", time: "7.35 am" },
                { srNo: 2, stop: "Sector 21", time: "7.45 am" },
                { srNo: 3, stop: "Faridabad Sector 16", time: "7.55 am" },
                { srNo: 4, stop: "Sector 24", time: "8.05 am" },
                { srNo: 5, stop: "Sector 25", time: "8.15 am" },
            ],
        },
        {
            route: "Route No. 4C",
            stops: [
                { srNo: 1, stop: "Sector 16", time: "7.40 am" },
                { srNo: 2, stop: "Sector 17", time: "7.50 am" },
                { srNo: 3, stop: "Sector 18", time: "8.00 am" },
                { srNo: 4, stop: "Sector 19", time: "8.10 am" },
                { srNo: 5, stop: "AKG University", time: "8.30 am" },
            ],
        },
        {
            route: "Route No. 4D",
            stops: [
                { srNo: 1, stop: "Sector 22", time: "7.45 am" },
                { srNo: 2, stop: "Sector 23", time: "7.55 am" },
                { srNo: 3, stop: "Sector 24", time: "8.05 am" },
                { srNo: 4, stop: "Sector 25", time: "8.15 am" },
                { srNo: 5, stop: "Sector 26", time: "8.25 am" },
            ],
        },
        {
            route: "Route No. 4E",
            stops: [
                { srNo: 1, stop: "Sector 9", time: "7.20 am" },
                { srNo: 2, stop: "Sector 10", time: "7.30 am" },
                { srNo: 3, stop: "Sector 11", time: "7.40 am" },
                { srNo: 4, stop: "Sector 14", time: "7.50 am" },
                { srNo: 5, stop: "AKG University", time: "8.00 am" },
            ],
        },
    ],
};

const year = [
    {
        city: "Noida",
        amount: "78,500/-"
    },
    {
        city: "Delhi & Ghaziabad",
        amount: "65,300/-"
    },
    {
        city: "Faridabad",
        amount: "92,400/-"
    }
];

const quarter = [
    {
        city: "Noida",
        amount: "53,750/-"
    },
    {
        city: "Delhi & Ghaziabad",
        amount: "59,950/-"
    },
    {
        city: "Faridabad",
        amount: "73,600/-"
    }
];

const halfyear = [
    {
        city: "Noida",
        amount: "51,300/-"
    },
    {
        city: "Delhi & Ghaziabad",
        amount: "62,800/-"
    },
    {
        city: "Faridabad",
        amount: "75,900/-"
    }
];


const Transportation = () => {
    const [openIndices, setOpenIndices] = useState([0]);
    const [currentRoutes, setCurrentRoutes] = useState(transportRoutes.delhi);
    const [selectedData, setSelectedData] = useState(year);

    const handleButtonClick = (data) => {
        setSelectedData(data);
    };

    const toggleRoute = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices((prev) => prev.filter((i) => i !== index));
        } else {
            setOpenIndices((prev) => [...prev, index]);
        }
    };

    const handleRouteChange = (routeKey) => {
        setCurrentRoutes(transportRoutes[routeKey]);
        setOpenIndices([0]);
    };

    return (
        <>
            <div className="">
                <h1 className="text-2xl max-sm:font-novaSemi font-novaReg mb-3 sm:text-3xl lg:text-4xl">Transportation Facilities</h1>
                <p className="text-base font-novaReg max-sm:text-sm">
                    AKGU situated in Uttarpradesh is well-connected with the national capital. It offers transport facilities to its students and faculty members at very nominal charges. The buses ply on different routes of Delhi,Noida, and other NCR areas to pick and drop the students.</p>
                <p className="text-base my-4 font-novaReg max-sm:text-sm">
                    The students are spared from the difficulty of commuting to the University by public transport. The transport facility is also a significant contributor to inculcating an element of punctuality among the students.
                </p>
                <div className="flex justify-between items-start mt-4 mb-6 w-full max-sm:flex-col max-sm:items-center">
                    <div className="flex w-6/12 max-sm:w-full max-sm:py-4">
                        <div className="pr-5 border-r max-sm:w-6/12">
                            <p className="font-novaBold">Concern Person</p>
                            <p>Mr. Jatin Yadav</p>
                        </div>
                        <div className="pl-5 max-sm:w-6/12">
                            <p className="font-novaBold">Contact No</p>
                            <p>+91-888888888</p>
                        </div>
                    </div>
                    <div className="text-red-500 w-6/12">
                        <p>Bus coordinators list 2023-24</p>
                    </div>
                </div>
            </div>

            <div className="bg-white mt-4 px-3 py-2.5 shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px]">
                <h2 className="text-xl font-novaBold mb-4">Transport Route Plan</h2>
                <div className="flex gap-2 mb-4 w-full max-sm:grid max-sm:grid-cols-2 max-sm:justify-center max-sm:items-center max-sm:space-x-0 max-sm:gap-1 max-sm:w-full">
                    {Object.keys(transportRoutes).map((routeKey) => (
                        <button
                            key={routeKey}
                            onClick={() => handleRouteChange(routeKey)}
                            className={`px-4 w-fit py-2 transition-colors duration-200 max-sm:w-full max-sm:text-sm ${currentRoutes === transportRoutes[routeKey]
                                ? "bg-blue-500 text-white"
                                : "bg-white text-black border border-blue-400"
                                }`}
                        >
                            {routeKey.charAt(0).toUpperCase() + routeKey.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="w-full text-black">
                    {currentRoutes.map((route, index) => (
                        <div key={index} className="mb-2 max-sm:mb-2">
                            <a
                                onClick={() => toggleRoute(index)}
                                className="flex justify-between items-center w-full cursor-pointer p-4"
                                aria-expanded={openIndices.includes(index)}
                            >
                                <span
                                    className={`font-novaSemi max-sm:text-sm ${openIndices.includes(index) ? 'text-[#00BFE7]' : 'text-black'
                                        }`}
                                >
                                    {route.route}
                                </span>
                                {openIndices.includes(index) ? (
                                    <ChevronUp className="w-6 h-6" />
                                ) : (
                                    <ChevronDown className="w-6 h-6" />
                                )}
                            </a>
                            {openIndices.includes(index) && (
                                <div className="ml-3 px-2 max-md:ml-2 max-md:px-2 max-sm:ml-1">
                                    <table className="min-w-full border-collapse">
                                        <thead>
                                            <tr className="text-base bg-secondary max-sm:text-sm">
                                                <th className="border p-2 w-32 max-sm:w-10">Sr. No.</th>
                                                <th className="p-2">Bus Stop</th>
                                                <th className="p-2">Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {route.stops.map((stop) => (
                                                <tr
                                                    key={stop.srNo}
                                                    className="text-base bg-primary text-white max-sm:text-sm"
                                                >
                                                    <td className="border p-2">{stop.srNo}</td>
                                                    <td className="border p-2">{stop.stop}</td>
                                                    <td className="border p-2">{stop.time}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
            <section id="transportation-fee" className="py-5 max-sm:py-5">
                <div className="mb-4 bg-white shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] p-4 max-sm:mb-3 max-sm:p-3">
                    <h3 className="text-3xl font-novaBold mb-5 max-md:text-2xl max-md:mb-3 max-sm:text-xl max-sm:mb-3">Transportation Fee</h3>
                    <div className="mb-5 grid grid-cols-3 max-sm:grid-cols-2 max-sm:gap-2 gap-5">
                        <button
                            className=" text-base p-3 bg-blue-500 text-white rounded max-sm:text-sm"
                            onClick={() => handleButtonClick(year)}
                        >
                            Yearly
                        </button>
                        <button
                            className=" text-base p-3 bg-blue-500 text-white rounded max-sm:text-sm"
                            onClick={() => handleButtonClick(halfyear)}
                        >
                            Half-Yearly
                        </button>
                        <button
                            className="text-base p-3 bg-blue-500 text-white rounded max-sm:text-sm"
                            onClick={() => handleButtonClick(quarter)}
                        >
                            Quarterly
                        </button>
                    </div>
                    {selectedData.length > 0 && (
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200 bg-primary text-white">
                                    <th className="text-base p-4 w-6/12 rounded-tl-lg border-r border-current max-sm:text-sm">City</th>
                                    <th className="text-base p-4 rounded-tr-lg max-sm:text-sm">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedData.map((item, index) => (
                                    <tr key={index} className="bg-white">
                                        <td className="text-base border border-gray-400 p-4 max-sm:text-sm">{item.city}</td>
                                        <td className="text-base border border-gray-400 p-4 max-sm:text-sm">{item.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </section>
        </>
    );
};

export default Transportation;
