"use client";

import React, { useState } from "react";

const events = [
    {
        "Sl. No": "01",
        "Activity": "Establishment of Entrepreneurship cell",
        "Year": "2013"
    },
    {
        "Sl. No": "02",
        "Activity": "Establishment of IPR Cell",
        "Year": "2014"
    },
    {
        "Sl. No": "03",
        "Activity": "Establishment of IEDC (Innovation and Entrepreneurship Development Cell)",
        "Year": "2015"
    },
    {
        "Sl. No": "04",
        "Activity": "IIT Bombay- Pre Eureka Workshop",
        "Year": "16th September 2015"
    },
    {
        "Sl. No": "05",
        "Activity": "Entrexcellence 2015 (Business Plan Competition)",
        "Year": "19th October 2015"
    },
    {
        "Sl. No": "06",
        "Activity": "Establishment of CU-TBI",
        "Year": "2016"
    },
    {
        "Sl. No": "07",
        "Activity": "CAB visit to CU-TBI and Investor meet 2016",
        "Year": "19th& 20th March 2016"
    },
    {
        "Sl. No": "08",
        "Activity": "EDC Awareness Lecture - Astra Trehan",
        "Year": "14th September 2016"
    },
    {
        "Sl. No": "09",
        "Activity": "EFFECTUS 2016- A Sole Platform for Diverse & BIG Entrepreneurship Ideas",
        "Year": "15th& 16th Sept. 2016"
    },
    {
        "Sl. No": "10",
        "Activity": "Awareness camp cum Inauguration of MCSSAN COMPANY OR WCarPs APP",
        "Year": "24th Nov. 2016"
    },
    {
        "Sl. No": "11",
        "Activity": "Grant for CU-TBI from NSTEDB DST",
        "Year": "2017"
    },
    {
        "Sl. No": "12",
        "Activity": "Visit of Prof. (Dr.) Mohammad Yunus Nobel laureate to the CUTBI",
        "Year": "8th January 2017"
    },
    {
        "Sl. No": "13",
        "Activity": "Promoting the Spirit of Entrepreneurship amongst Youth! (Entrepreneurship Awareness Lecture by Dr.Sujit Banerjee)",
        "Year": "22nd February 2017"
    },
    {
        "Sl. No": "14",
        "Activity": "Awareness camp cum Inauguration of the EXPERT COMMUNITY (TEC) first startup",
        "Year": "22nd February 2017"
    },
    {
        "Sl. No": "15",
        "Activity": "CAB visit to CU-TBI and Investor meet 2017",
        "Year": "18th& 19th March 2017"
    },
    {
        "Sl. No": "16",
        "Activity": "INVESTORS MEET MR. KIM COPPEN",
        "Year": "13th April 2017"
    },
    {
        "Sl. No": "17",
        "Activity": "EFFECTUS 2017 (400 Startups participated)",
        "Year": "29th Sept. 2017"
    },
    {
        "Sl. No": "18",
        "Activity": "CAB visit to CU-TBI and Investor meet 2018",
        "Year": "17th& 18th March 2018"
    },
    {
        "Sl. No": "19",
        "Activity": "Interaction with successful entrepreneur “My Story”",
        "Year": "16th April 2018"
    },
    {
        "Sl. No": "20",
        "Activity": "Annual Meet CU-TBI 2017",
        "Year": "27th April 2018"
    },
    {
        "Sl. No": "21",
        "Activity": "Entrepreneurship Awareness Camp",
        "Year": "18th July 2018"
    }
];

const startups = [
    {
        "Sl. No": "01",
        "Name of the Student": "DIKSHA",
        "Startup Name": "FITOUT"
    },
    {
        "Sl. No": "02",
        "Name of the Student": "SHIVANGI",
        "Startup Name": "SHWT+"
    },
    {
        "Sl. No": "03",
        "Name of the Student": "MONIKA",
        "Startup Name": "CIRCLES"
    },
    {
        "Sl. No": "04",
        "Name of the Student": "BROUNIKA GREWAL",
        "Startup Name": "VERIFY D"
    },
    {
        "Sl. No": "05",
        "Name of the Student": "PRANCEY CHAUHAN",
        "Startup Name": "PROVISE"
    },
    {
        "Sl. No": "06",
        "Name of the Student": "SHOMYA THAKUR",
        "Startup Name": "TEC AND PRENZA"
    },
    {
        "Sl. No": "07",
        "Name of the Student": "DIKSHA PRIYA",
        "Startup Name": "TRI BIOMETRIC"
    },
    {
        "Sl. No": "08",
        "Name of the Student": "LALITA",
        "Startup Name": "HELPCARD"
    }
];

const InnovationAndEntrepreneurshipDevelopmentCell = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 7;

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEvents = events.slice(indexOfFirstEntry, indexOfLastEntry);
    const totalPages = Math.ceil(events.length / entriesPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="">
            <div className="">
                <div className="max-w-7xl mx-auto ">
                    <p className="font-novaReg leading-tight">
                        Entrepreneurship & IPR Cell was established in 2014 and started working on patenting the ideas of the students. University also started funding the student’s projects for prototyping. The initial amount given to the students was 25 thousand. After looking at the high participation level of the student’s university applied for the Innovation and Entrepreneurship Development cell (IEDC) in the year 2015 and got a grant of 55 Lacs from Department of Science and Technology for a period of 5 years. The scheme facilitates the student with financial support from the university. Under this initiative the students had to submit their proposal for prototyping and after the scrutiny if the proposal found suitable they were getting an amount of INR 1 Lac for prototyping.
                        <br />
                        <br />
                        DST allowed a maximum of 5 projects per year but university management sanctioned additional 10 Lacs per year and maximum sanctioned project numbers has been increased to 15. In the first two years 14 prototypes were built by the students and more than 40 patents were filed.
                        <br />
                        <br />
                        Encouraged by this outstanding performance of the students, the University established Chandigarh University Technology Business Incubator (CUTBI) at Chandigarh University through its own funding. The Technology Business Incubator is also in sync with university vision of being internationally renowned and respected institution imparting excellent education and training based upon the foundation of futuristic research and innovations. In the year 2016-2017 NSTEB (National Entrepreneurship Board) and DST (Department of Science & Technology) sanctioned a grant of 4.12 crore for the Technology Business Incubator. Under CU-TBI there are 39 Startups got incubated and 5 startups pass out.
                        <br />
                        The major Activities organized by the cell in the past years are as follows:
                    </p>
                </div>
                
                <div className="max-w-7xl mx-auto py-4 mb-10">
                    <table className="w-full border-collapse items-center">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 text-left whitespace-nowrap rounded-tl-lg">Sl. No</th>
                                <th className="p-4 text-left whitespace-nowrap">Activity</th>
                                <th className="p-4 text-left whitespace-nowrap rounded-tr-lg">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEvents.map((event) => (
                                <tr key={event["Sl. No"]} className=" text-sm">
                                    <td className="border border-gray-300 p-4 align-top w-12">{event["Sl. No"]}</td>
                                    <td className="border border-gray-300 p-4 align-top">{event["Activity"]}</td>
                                    <td className="border border-gray-300 p-4 align-top w-48">{event["Year"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-between max-sm:flex-col mt-4">
                        <div className="text-sm mb-2.5 mr-5 pt-3 text-gray-700">
                            Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, events.length)} of {events.length} entries
                        </div>

                        <div className="text-sm w-fit bg-blue-950 rounded-lg flex items-center">
                            <button
                                className={`text-white px-4 py-2.5 rounded-lg ${currentPage === 1
                                    ? "cursor-not-allowed opacity-50"
                                    : "cursor-pointer hover:bg-blue-900"
                                    }`}
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                Previous
                            </button>

                            {[...Array(totalPages)]?.map((_, pageIndex) => (
                                <button
                                    key={pageIndex + 1}
                                    className={`text-white px-4 py-2.5 hover:bg-blue-900 rounded ${currentPage === pageIndex + 1 ? "bg-blue-900" : ""
                                        }`}
                                    onClick={() => handlePageChange(pageIndex + 1)}
                                >
                                    {pageIndex + 1}
                                </button>
                            ))}

                            <button
                                className={`text-white px-3 py-2 rounded-lg ${currentPage === totalPages
                                    ? "cursor-not-allowed opacity-50"
                                    : "cursor-pointer hover:bg-blue-900"
                                    }`}
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-4 mb-10">
                    <h3 className="w-full text-3xl font-novaReg mb-4">Special facilities for women Startup’s</h3>
                    <div className="pb-4">
                        <table className="w-full border-collapse items-center">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="p-4 text-left whitespace-nowrap rounded-tl-lg">Sl. No</th>
                                    <th className="p-4 text-left whitespace-nowrap">Name of the Student</th>
                                    <th className="p-4 text-left whitespace-nowrap rounded-tr-lg">Startup Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {startups.map((startup) => (
                                    <tr key={startup["Sl. No"]} className=" text-sm">
                                        <td className="border border-gray-300 p-4 align-top w-12">{startup["Sl. No"]}</td>
                                        <td className="border border-gray-300 p-4 align-top">{startup["Name of the Student"]}</td>
                                        <td className="border border-gray-300 p-4 align-top w-48">{startup["Startup Name"]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnovationAndEntrepreneurshipDevelopmentCell;
