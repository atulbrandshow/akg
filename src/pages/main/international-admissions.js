"use client";

import "swiper/css";
import "swiper/css/pagination";
import { LogoSlider } from "@/Components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AdmissionsShowcase from "@/Components/AdmissionsShowcase";
import ScholarshipHighlight from "@/Components/ScholarshipHighlight";
import HighlightPlacement from "@/Components/HighlightPlacement";
import OurOffice from "@/Components/OurOffice";
import SpotlightHighlight from "@/Components/SpotlightHighlight";
import ResearchFacility from "@/Components/ResearchFacility";


const cards = [
    {
        count: "120+",
        title: "Accredited Programs",
        description: (
            <>
                Offering a wide range of accredited programs
                <br />
                across various fields of study.
            </>
        ),
    },
    {
        count: "3000+",
        title: "Students Enrolled",
        description: (
            <>
                A vibrant community of over 3000 students
                <br />
                from diverse backgrounds.
            </>
        ),
    },
    {
        count: "150+",
        title: "Qualified Faculty",
        description: (
            <>
                Home to more than 150 qualified faculty members
                <br />
                dedicated to student success.
            </>
        ),
    },
    {
        count: "50+",
        title: "International Collaborations",
        description: (
            <>
                Partnered with 50+ international universities
                <br />
                for exchange programs and research.
            </>
        ),
    },
    {
        count: "200+",
        title: "Research Projects",
        description: (
            <>
                Involved in over 200 research projects
                <br />
                contributing to various fields of innovation.
            </>
        ),
    },
];

const globalData = [
    {
        id: 1,
        title: "A Global Learning Community",
        content:
            "AKG University embraces a worldwide vision for higher education, reflecting this ethos in every facet of our internationalization strategy. We attract esteemed educators with diverse academic backgrounds who prioritize experiential learning. This commitment ensures that you graduate with a truly global perspective—an attribute highly sought after by employers.",
    },
    {
        id: 2,
        title: "First University with 300+ Partnerships Across 50+ Countries!",
        content:
            "AKG University holds a prominent position in national rankings, evaluating the quality of education, research excellence, affordability, and student achievements. It is the first in its region to establish over 300 global partnerships across more than 50 countries. These collaborations provide students with an international perspective, making them competitive candidates for global job markets.",
    },
    {
        id: 3,
        title: "Exceptional Industry Connections",
        content:
            "Our partnerships with renowned multinational corporations guarantee that you will have continuous professional development and unique opportunities to engage with leading organizations and industry leaders. You will gain exposure to a professional learning environment, state-of-the-art infrastructure, and corporate mentors committed to enhancing your educational experience.",
    },
    {
        id: 4,
        title: "Fostering Growth Through Diversity",
        content:
            "We acknowledge the significant contributions of individuals from various backgrounds. Our diverse student population—comprising students from across India and 30+ countries—promises a culturally enriching experience. You will be encouraged to challenge your perspectives and grow personally and academically. Cultural diversity enhances our student life, academic programs, and campus events.",
    },
    {
        id: 5,
        title: "Innovating Future Education",
        content:
            "In keeping with advanced technological trends and ensuring seamless learning during unprecedented times, AKG University has implemented a state-of-the-art Learning Management System (LMS). This cutting-edge platform not only facilitates engaging and efficient learning experiences for students but also offers a wide array of interactive tools and resources designed to enhance the educational journey.",
    },
];

const InternationalAdmission = () => {

    return (
        <>
            <section className="h-screen w-full bg-BG50 bg-no-repeat bg-cover bg-top bg-gray-800 bg-blend-multiply bg-opacity-95">
                <div className="flex px-4 sm:px-6 md:px-12 lg:px-24">
                    <div className="container max-w-7xl mx-auto flex justify-end max-xl:flex-col-reverse gap-10">
                        <div className="w-full h-screen flex justify-center items-center">
                            <div className="max-w-4xl text-center">
                                {/* Title */}
                                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-novaBold text-white uppercase mb-4">
                                    Welcome to AKG University
                                </h3>

                                {/* Description */}
                                <p className="text-base sm:text-lg md:text-xl font-novaReg text-white mb-7 px-4 sm:px-0">
                                    AKG University is where innovation meets excellence. From cutting-edge research to a student-centered
                                    learning environment, we equip you with the skills and knowledge to excel in a global landscape. Explore our
                                    diverse programs and vibrant campus life, where your aspirations become reality.
                                </p>

                                {/* Button */}
                                <div className="w-full flex justify-center items-center">
                                    <a
                                        href="#"
                                        className="flex items-center bg-secondary px-6 py-3 rounded-xl uppercase gap-3 text-sm sm:text-base lg:text-lg text-black hover:bg-secondary-dark transition duration-300"
                                    >
                                        Discover More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-move-right"
                                        >
                                            <path d="M18 8L22 12L18 16" />
                                            <path d="M2 12H22" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="relative w-full h-full lg:h-48 lg:-mt-[150px] lg:bg-transparent bg-blue-500"
            >
                <div className="flex flex-wrap justify-between h-full">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-6 py-5 border-t lg:border-r text-white"
                        >
                            <span className="text-2xl md:text-3xl lg:text-3xl font-novaBold">
                                {card.count}
                            </span>
                            <h5 className="text-lg md:text-xl lg:text-xl font-novaSemi">
                                {card.title}
                            </h5>
                            <p
                                className={`${index === 4 ? "text-xs" : "text-sm"
                                    } md:text-sm lg:text-sm font-novaReg`}
                            >
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <AdmissionsShowcase />
            <LogoSlider />

            <section className="bg-BG42 bg-cover bg-no-repeat bg-black bg-blend-multiply bg-opacity-85 bg-top h-[85vh] max-sm:h-[85vh] max-lg:h-[95vh] pt-24 pb-36 max-lg:pt-12 max-sm:pt-8 max-sm:pb-4">
                <div className="max-w-[1400px] mx-auto px-3 scale-x-2 max-sm:mb-4">
                    <div className="flex justify-center items-center text-center w-full">
                        <div className="w-7/12 max-sm:w-full">
                            <h2 className="text-4xl font-novaBold text-white mb-4 max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-sm:mb-0">
                                AKG University - Connecting
                                <br /> to a Global Network!
                            </h2>
                            <p className="text-lg font-novaReg mb-5 text-white max-lg:mb-2.5">Discover Your Future Today!</p>
                        </div>
                    </div>
                </div>
                <Swiper
                    centeredSlides={true}
                    spaceBetween={20}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2, 
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {globalData.map((door) => (
                        <SwiperSlide key={door.id}>
                            <div className="bg-[#e6e6e6] rounded-2xl overflow-hidden cursor-grab mt-4">
                                <div className="bg-indigo-950 p-2 h-20 flex items-center justify-center max-sm:h-auto">
                                    <h3 className="leading-none text-white text-xl font-novaSemi text-center selection-transparent max-sm:text-lg">
                                        {door.title}
                                    </h3>
                                </div>
                                <p className="px-10 py-5 text-black mt-4 font-novaLight selection-transparent max-lg:px-5 max-lg:py-4 max-lg:mt-1 max-sm:px-2.5 max-sm:py-2.5 max-sm:mt-2">{door.content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="px-3">
                <div className="max-w-4xl mx-auto p-8 text-center">
                    <h1 className="text-2xl font-bold mb-2">AKG UNIVERSITY</h1>
                    <h2 className="text-2xl lg:text-4xl font-extrabold mb-6">
                        INTERNATIONAL SCHOLARSHIPS
                        <br />
                        (FOR 2024 ADMISSION)
                    </h2>
                    <p className="text-sm leading-relaxed">
                        AKG University offers a range of international scholarships aimed at supporting outstanding students from around the globe. These scholarships are designed to recognize academic excellence and promote cultural
                        diversity within our campus community. Eligibility for these scholarships is based on academic performance, standardized test scores, and the date of admission.
                    </p>
                </div>
                <ScholarshipHighlight heading={"Global Talent"} subheading={"Scholarship"} desc={"For International Students for the Academic"} ugSub={"B.Tech [For International Students]"} pgSub={"MCA [For International Students]"} />
            </section>
            <HighlightPlacement />
            <OurOffice />
            <ResearchFacility />
            <SpotlightHighlight />
        </>
    );
};

export default InternationalAdmission;
