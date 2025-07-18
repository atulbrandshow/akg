import React from "react";
import { FaMedal } from "react-icons/fa";

const sectionData = [
    "The B.Tech Computer Science & Engineering Program is NBA Accredited for the academic years 2022-2023 to 2024-2025 i.e., up to 30/06/2025.",
    "Our student named Deepika Maurya from BTech CSE (Batch 2020-22) secured 5th position in top 10 university positions and Geetika Singh from MTech CSE (Batch 2020-22) secured 2nd Rank in AKTU and won Silver Medal.",
    "Our student named Deeksha Singh from BTech CSE (Batch 2015-19) secured 1st Rank in AKTU and won Chancellor Medal and Gold Medal.",
    "Our student named Preeti Gupta from BTech CSE (Batch 2014-18) 1st Rank in AKTU and won Chancellor Medal and Gold Medal.",
    "Our student named Ayushi Agarwal from BTech CSE (Batch 2012-16) 1st Rank in AKTU and won Chancellor Medal and Gold Medal.",
    "Deepak Sharma, student of BTech CSE (Batch 2018-22), placed in Amazon with a CTC of 1.13 Cr and Muskan Agrawal, student of BTech CSE (Batch 2018-22), placed in Cloudera with a CTC of 28.70 LPA.",
    "Faculties published 18 SCI or ESCI Research papers and 9 Scopus indexed journal papers, 9 Springer, and 6 Scopus indexed conference papers in 2021-2022. There are 10 patents published/granted during 2021-2022.",
    "Ankur Rawat 4th year Student of CSE with his team Blaze won joint winner award at SIH 2022, Vaibhav Bansal 3rd year Student of CSE -DS with his team SupaSolvers won joint winner award at SIH 2022, Garima Saroj 3rd year Student of CSE-AIML with his team SwasthyaVardhakwon joint winner award at SIH 2022, Apoorv Maheshwari 4th year Student of CSE with his team Blockridge won winner award at SIH 2022, Ayush Rawat 4thyear Student of CSE with his team Proxymorons won winner award at SIH 2022.",
];

const CSEAchievements = () => {
    return (
        <>
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="text-center py-6">
                    <h3 className="text-5xl font-novaBold">CSE Achievements</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-4 p-4">
                    <a href="#" className="py-2 px-4 bg-yellow-400 border-2 border-blue-500 text-gray-900 rounded-md hover:bg-white transition-colors mb-2 sm:mb-0 font-novareg">
                        HOME
                    </a>
                    <a href="#" className="py-2 px-4 bg-yellow-400 border-2 border-blue-500 text-gray-900 rounded-md hover:bg-white transition-colors mb-2 sm:mb-0 font-novareg">
                        FACULTY
                    </a>
                    <a href="#" className="py-2 px-4 bg-yellow-400 border-2 border-blue-500 text-gray-900 rounded-md hover:bg-white transition-colors mb-2 sm:mb-0 font-novareg">
                        LABS
                    </a>
                    <a href="#" className="py-2 px-4 bg-yellow-400 border-2 border-blue-500 text-gray-900 rounded-md hover:bg-white transition-colors mb-2 sm:mb-0 font-novareg">
                        ACHIEVEMENTS
                    </a>
                    <a href="#" className="py-2 px-4 bg-yellow-400 border-2 border-blue-500 text-gray-900 rounded-md hover:bg-white transition-colors mb-2 sm:mb-0 font-novareg">
                        SOCIETY
                    </a>
                    <a href="#" className="py-2 px-4 bg-yellow-400 border-2 border-blue-500 text-gray-900 rounded-md hover:bg-white transition-colors mb-2 sm:mb-0 font-novareg">
                        DEPARTMENTAL ACTIVITIES
                    </a>
                </div>

                <div className="mt-8 grid grid-cols-2 px-3 gap-4 max-md:grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:gap-3 max-sm:gap-2">
                    {sectionData.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-md flex items-start space-x-4 border border-gray-200"
                        >
                            <div className="text-yellow-400 text-3xl mt-1">
                                <FaMedal />
                            </div>
                            <div className="">
                                <p className="text-gray-700 font-medium text-lg leading-tight max-md:text-base max-sm:text-sm">{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CSEAchievements;
