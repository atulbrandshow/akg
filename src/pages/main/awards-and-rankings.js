"use client"

import { useState } from 'react';

// AwardPopup Component
const AwardPopup = ({ award, onClose }) => {
    if (!award) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">{award.title}</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 transition"
                            aria-label="Close popup"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="prose max-w-none">
                        {award.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                        ))}
                        {award.image && (
                            <div className="mt-6 flex justify-center">
                                <img
                                    src={award.image}
                                    alt={award.title}
                                    className="w-full max-w-[600px] h-auto max-h-[400px] object-contain rounded-lg shadow-md mx-auto"
                                />
                            </div>
                        )}
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// RankingSlider Component
const RankingSlider = ({ items }) => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex space-x-6 py-4 overflow-x-auto scrollbar-hide">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                        onClick={item.onClick}
                    >
                        <div className="h-70 bg-gray-100 flex items-center justify-center">
                            <img
                                src={item.img}
                                alt={typeof item.title === 'string' ? item.title : 'Award'}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <div className="p-4">
                            <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                            <button
                                className="text-secondary hover:text-secondary-dark font-medium"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    item.onClick();
                                }}
                            >
                                {item.url}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Awards data - Comprehensive list including all requested awards
const awardsData = {

    nabl: {
        title: "NABL Accreditation for Measurement & Metrology Centre",
        content: `Ajay Kumar Garg Engineering College has established a world class Measurement & Metrology Centre in collaboration with Zeiss. It is equipped with 3D Coordinate Measuring Machine (CMM), Surface Roughness Testing, Contour Measurement and 3D Scanning setup.
    
The facility has been accredited by NABL as per ISO/IEC 17025:2017 standard. National Accreditation Board for Testing and Calibration Laboratories (NABL) is a constituent Board of Quality Council of India providing accreditation for testing and calibration laboratories.

The centre is now authorized to provide internationally valid dimension testing/calibration results. With this recognition, AKGEC joins the few elite engineering institutes with NABL accredited laboratories in the country.`,

    },
    patent3d: {
        title: "Patent for 3-D Printer",
        content: `AKGEC attained patent for 3-D Printer developed by Mr. Pradeep Jain, Associate Professor, Department of Mechanical Engineering, under the aegis of Research and Industrial Consultancy Centre, AKGEC.

The printer uses Additive Manufacturing technology which builds objects by adding material layer by layer rather than removing material. This innovative approach enables creation of complex geometries that would be difficult with traditional manufacturing methods.`,
        image: '/image/awards-and-ranking/3DPrinter1.jpg'
    },
    aicra2020: {
        title: "AICRA 2020 Awards - India STEM College Award and Best Robolab Setup",
        content: `AKGEC has been honored with STEM Award-2020 under India STEM College Award 2020 and Best Robolab Setup during the 3rd edition of STEM Contribution Awards & Summit -2020 organized by AICRA India.

Dr. R K Agrawal, Director General AKGEC, and Prof Ashiv Shah received the award on behalf of the college. This marked the third consecutive year of AKGEC being honored at STEM Awards & Summit, showcasing our consistent excellence in robotics and STEM education.`,
        image: '/image/awards-and-ranking/Stem1.jpg'
    },
    // AICRA Awards
    aicra2019: {
        title: "AICRA 2019 Award for Excellence and Innovation in Robotics Education",
        content: `AKGEC was awarded for Excellence and Innovation in Robotics Education by All India Council for Robotics & Automation (AICRA), India during 2nd edition of STEM Contribution Awards & Conference-2019 at IIT Delhi on 16th April, 2019. Dr. R K Agarwal, Director AKGEC, received the award.

Prof. V. Ramgopal Rao, Chairman & Director of IIT Delhi and Mr. R. Ramanan, Mission Director, Atal Innovation Mission, Niti Ayog addressed the gathering. The conference was participated by eminent academia and industry professionals active in STEM education.`,
        image: '/image/awards-and-ranking/AICRA2019.jpg'
    },
    aicra2018: {
        title: "AICRA 2018 Awards - Best Technology Infrastructure & Best Vocational Robotics Educational Centre",
        content: `AKGEC was honored with two prestigious awards at the STEM Summit & Awards-2018:
    - Best Technology Infrastructure of the Year Award 2018
    - Best Vocational Robotics Education Award 2018
    
The awards were conferred by All India Council for Robotics & Automation (AICRA) and Ministry of Science & Technology, Govt. of India along with media partner TimesNow during ceremony held at NDMC Convention Centre, New Delhi on 11 April, 2018. This recognition came as a result of AKGEC's continuous efforts to promote excellence in engineering education and imparting high-end technical training programs.`,
        image: '/image/awards-and-ranking/Award.jpg'
    },

    // NAFEMS Award
    nafems2018: {
        title: "NAFEMS UK 2018 Award for Best Industry Institute Interaction",
        content: `AKGEC received the Best Industry Institute Interaction Award from NAFEMS UK in recognition of its outstanding efforts to promote excellence in engineering education through Industry-Institute partnerships.

The award was presented by NAFEMS Chief Executive Mr. Tim Morris during the NAFEMS 18th International Conference on 21st July, 2018 at Bangalore. Dr. R.K Agarwal, Director, AKGEC and Prof. Ashiv Shah, Head CORE received the award during ceremony organized as part of the Newton Bhabha – Industry Academic Partnership Project of the Royal Academy of Engineering, UK.

NAFEMS is the global body with focus on engineering analysis and simulation.`,
        image: '/image/awards-and-ranking/Award_2.jpg'
    },

    // Dialogue India Award
    dialogue2018: {
        title: "Dialogue India 2018 Award for Best Private Engineering College in North India",
        content: `AKGEC Ghaziabad achieved the Dialogue India Award-2018 on 19 May, 2018 during a ceremony at IIT Delhi. The College was awarded as "Best Private Engineering College in North India".

The award was given during 4th Dialogue India Academia Conclave held in association with the Design Department of IIT along with an exhibition on innovative designs. This award recognized AKGEC's consistent performance and excellence in technical education.`,
        image: '/image/awards-and-ranking/Award_3.jpg'
    },

    // LabVIEW Awards
    labview2016: {
        title: "Best LabVIEW Academy Award by National Instruments (2016)",
        content: `AKGEC-NI was awarded the Best LabVIEW Academy in India for Excellent Performance and Innovation in Education on 19 October, 2016 during Annual Award Ceremony of National Instruments (NI) at Hotel ITC Gardenia, Bangalore.

Key achievements:
- Trained over 600 engineers on LabVIEW
- Accomplished excellent placement opportunities in Test, Measurement and Control domains
- Achieved 204 CLAD certifications and 17 CLD certifications
- Established a niche position in just four years`,
        image: '/image/awards-and-ranking/Award_4.jpg'
    },
    labview2014: {
        title: "Emerging LabVIEW Academy Award by National Instruments (2014)",
        content: `AKGEC was honored with the Emerging LabVIEW Academy in North India 2014 Award by National Instruments, USA during NI Days on 30 September, 2014 at ITC Gardenia, Bangalore.

This early recognition marked the beginning of AKGEC's excellence in LabVIEW education and set the foundation for future achievements in this domain.`,

    },

    // Innovation Awards
    innovation2015: {
        title: "Best Institution for Innovation Award (2015)",
        content: `AKGEC received the award for Best Institution for Innovation from Entrepreneurship and Skill Development Association at National Summit on Industry–Academia Integration and Awards held at PHD Chamber of Commerce, New Delhi, on 22 August, 2015.

The award was presented in presence of:
- Prof. Shivakant Ojha, Hon'ble Minister of Technical Education, Government of U.P.
- Shri Vijay Goel, Hon'ble Member of Parliament, Rajya Sabha
- Prof. Vinay Pathak, Vice Chancellor, Dr. A.P.J. Abdul Kalam Technical University, Lucknow`,
        image: '/image/awards-and-ranking/innovation2015.jpg'
    },

    // CMAI Award
    cmai2013: {
        title: "Best Institute Award by CMAI (2013)",
        content: `AKGEC was awarded for its best Industry-Institute Interface by Hon'ble Shri Abhishek Mishra, Minister of Science & Technology, U.P Government on 19 August, 2013.

The award was presented during National UP Educational Awards-2013 organized by CMAI Association of India and supported by:
- Mahamaya Technical University, Noida
- AICTE, Government of India

This recognition came at JSS Academy of Technical Education, Noida.`,
        image: '/image/awards-and-ranking/get_start.jpg'
    },

    // Academic Excellence Awards
    uptu2008_2010: {
        title: "Academic Excellence Awards by UPTU (2008-2010)",
        content: `AKGEC has been recipient of Academic Excellence Award from Uttar Pradesh Technical University for three consecutive years:
- 2008
- 2009
- 2010

Additional recognitions during this period:
- Superior Overall Performance Adjudged By UPTU in 2008
- Best Engineering College Award by Ghaziabad Management Association in 2008
- Appreciation Letters from UPTU for excellent academic performance in 2007 (both 1st and 3rd semesters)
- Recognized as "Most Appreciated Institution Of UPTU" in 2005 for ensuring 100% results and quality of academic achievements`,
        image: '/image/awards-and-ranking/Award2008.jpg'
    },

    // Add more awards as needed
};

// Award items organized by category
const accreditationItems = [
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>NABL Accredited<br />Measurement Centre</>,
        url: 'Click to Read More',
        key: 'nabl'
    },
    // Add more accreditation items
];

const innovationItems = [

    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>Patent for 3D Printer</>,
        url: 'Click to Read More',
        key: 'patent3d'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>AICRA 2020<br />Industry Interaction</>,
        url: 'Click to Read More',
        key: 'aicra2020'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>AICRA 2019<br />Robotics Excellence</>,
        url: 'Click to Read More',
        key: 'aicra2019'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>AICRA 2018<br />Dual Awards</>,
        url: 'Click to Read More',
        key: 'aicra2018'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>NAFEMS 2018<br />Industry Interaction</>,
        url: 'Click to Read More',
        key: 'nafems2018'
    },
    // Add more innovation items
];

const academicItems = [
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>Dialogue India 2018<br />Best College</>,
        url: 'Click to Read More',
        key: 'dialogue2018'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>UPTU Excellence<br />2008-2010</>,
        url: 'Click to Read More',
        key: 'uptu2008_2010'
    },
    // Add more academic items
];

const technicalItems = [
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>LabVIEW Academy<br />Best in India</>,
        url: 'Click to Read More',
        key: 'labview2016'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>Emerging LabVIEW<br />Academy 2014</>,
        url: 'Click to Read More',
        key: 'labview2014'
    },
    // Add more technical items
];

// Main Component
export default function AwardsAndRankings() {
    const [selectedAward, setSelectedAward] = useState(null);

    const handleAwardClick = (awardKey) => {
        setSelectedAward(awardsData[awardKey]);
    };

    const closePopup = () => {
        setSelectedAward(null);
    };

    return (
        <>
            <section className="bg-BG-Building-6 h-[90vh] w-full bg-cover bg-center bg-no-repeat relative">
                <div className="absolute w-full h-full z-0 bg-black bg-blend-darken bg-opacity-70" />
                <div className="max-w-[1400px] mx-auto px-3 relative z-10 py-28 pb-40">
                    <div className="pt-36 w-full">
                        <div className="flex gap-2 w-full items-center mb-4 justify-center lg:justify-start">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    width="20"
                                    height="20"
                                    fill="orange"
                                >
                                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                            ))}
                        </div>
                        <div className="w-full lg:w-6/12 mx-auto lg:mx-0 text-center lg:text-left">
                            <h2 className="text-[32px] lg:text-[42px] uppercase font-novaReg font-bold text-white leading-tight">
                                <span className="text-secondary">Prestigious Awards</span>
                                <br />
                                and Recognitions
                                <br />
                                for Academic Excellence
                            </h2>
                            <p className="w-full lg:w-9/12 text-lg font-novaBold mt-5 text-white mx-auto lg:mx-0">
                                Ajay Kumar Garg Engineering College has been consistently recognized for its outstanding contributions to technical education, innovation, and industry collaboration through numerous prestigious awards and accolades.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Sections */}
            <section className="-mt-32 bg-gray-100">
                <div className="max-w-[1400px] mx-auto px-3">
                    <div className="flex w-full">
                        <div className="px-3 w-full">
                            {/* Innovation & Robotics Awards */}
                            <div className="flex items-center w-full">
                                <h3 className="text-3xl font-novaBold text-white items-center text-center w-full mb-6 uppercase bg-primary py-2 rounded-t-lg">
                                    Innovation & Robotics Awards
                                </h3>
                            </div>
                            <div className="-mt-10 z-10 bg-white p-6 rounded-lg shadow-lg">
                                <div className="w-full">
                                    <RankingSlider
                                        items={innovationItems.map(item => ({
                                            ...item,
                                            onClick: () => handleAwardClick(item.key)
                                        }))}
                                    />
                                </div>
                            </div>

                            {/* Academic Excellence Awards */}
                            <div className="flex items-center w-full mt-14">
                                <h3 className="text-3xl font-novaBold text-black items-center text-center w-full mb-6 uppercase">
                                    Academic Excellence Awards
                                </h3>
                            </div>
                            <div className="w-full bg-white p-6 rounded-lg shadow-lg">
                                <RankingSlider
                                    items={academicItems.map(item => ({
                                        ...item,
                                        onClick: () => handleAwardClick(item.key)
                                    }))}
                                />
                            </div>

                            {/* Technical Excellence Awards */}
                            <div className="flex items-center w-full mt-14">
                                <h3 className="text-3xl font-novaBold text-black items-center text-center w-full mb-6 uppercase">
                                    Technical Excellence Awards
                                </h3>
                            </div>
                            <div className="w-full bg-white p-6 rounded-lg shadow-lg">
                                <RankingSlider
                                    items={technicalItems.map(item => ({
                                        ...item,
                                        onClick: () => handleAwardClick(item.key)
                                    }))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Awards Section */}
            <section className="pt-24 pb-12 bg-gray-100">
                <div className="max-w-[1400px] mx-auto px-3">
                    <div className="flex flex-col md:flex-row w-full gap-5 -mt-6 -mx-3">
                        <div className="w-full md:w-8/12 mt-6 px-3">
                            <div className="flex items-center w-full">
                                <h3 className="text-2xl md:text-3xl font-novaBold text-black text-center md:text-center w-full mb-6 uppercase">
                                    Industry Collaboration Awards
                                </h3>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <RankingSlider
                                    items={[
                                        ...innovationItems.filter(item => ['nafems2018'].includes(item.key)),
                                        ...technicalItems
                                    ].slice(0, 4).map(item => ({
                                        ...item,
                                        onClick: () => handleAwardClick(item.key)
                                    }))}


                                    slide={2}
                                    hiddenBtn={true}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 mt-6 px-3">
                            <div className="flex items-center w-full">
                                <h3 className="text-2xl md:text-3xl font-novaBold text-black text-center md:text-left w-full mb-6 uppercase">
                                    Special Recognitions
                                </h3>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <RankingSlider
                                    items={[
                                        ...academicItems,
                                        ...technicalItems.filter(item => ['labview2016', 'labview2014'].includes(item.key))
                                    ].slice(0, 2).map(item => ({
                                        ...item,
                                        onClick: () => handleAwardClick(item.key)
                                    }))}
                                    slide={1}
                                    hiddenBtn={true}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Historical Achievements Section */}
                    <div className="flex items-center w-full mt-14">
                        <h3 className="text-3xl font-novaBold text-black items-center text-center w-full mb-6 uppercase">
                            Historical Achievements
                        </h3>
                    </div>
                    <div className="w-full bg-white p-6 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* CMAI Award */}
                            <div
                                className="border rounded-lg p-4 hover:shadow-md transition cursor-pointer"
                                onClick={() => handleAwardClick('cmai2013')}
                            >
                                <h4 className="text-lg font-bold text-gray-800 mb-2">Best Institute Award by CMAI (2013)</h4>
                                <p className="text-gray-600 mb-3 line-clamp-2">Recognized for best Industry-Institute Interface by UP Government</p>
                                <button className="text-secondary hover:text-secondary-dark font-medium">
                                    Click to Read More
                                </button>
                            </div>

                            {/* Innovation Award */}
                            <div
                                className="border rounded-lg p-4 hover:shadow-md transition cursor-pointer"
                                onClick={() => handleAwardClick('innovation2015')}
                            >
                                <h4 className="text-lg font-bold text-gray-800 mb-2">Best Institution for Innovation (2015)</h4>
                                <p className="text-gray-600 mb-3 line-clamp-2">Awarded for outstanding innovation in technical education</p>
                                <button className="text-secondary hover:text-secondary-dark font-medium">
                                    Click to Read More
                                </button>
                            </div>

                            {/* UPTU Excellence */}
                            <div
                                className="border rounded-lg p-4 hover:shadow-md transition cursor-pointer"
                                onClick={() => handleAwardClick('uptu2008_2010')}
                            >
                                <h4 className="text-lg font-bold text-gray-800 mb-2">Academic Excellence Awards (2008-2010)</h4>
                                <p className="text-gray-600 mb-3 line-clamp-2">Three consecutive years of recognition from UPTU</p>
                                <button className="text-secondary hover:text-secondary-dark font-medium">
                                    Click to Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Award Popup */}
            <AwardPopup award={selectedAward} onClose={closePopup} />
        </>
    );
}