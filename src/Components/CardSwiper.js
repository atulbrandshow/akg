"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const slides = [
    {
        id: 1,
        title: 'An International Community by Design',
        content: 'Chandigarh University harbors a global perspective on higher learning, and our internationalization strategy emulates this outlook in everything we do. We attract world-class academics who have a wide spectrum of academic experience and are champions of real world learning. All this means that you graduate from CU with a truly global viewpoint - something highly valued by employers.',
    },
    {
        id: 2,
        title: 'First University to Forge 502 Partnerships with 95+ Countries!',
        content: 'Chandigarh University enjoys an exceptionally high standing among many national rating services that evaluate the quality of education, research activity, affordability, and athletic excellence. It is the first in North India to have 502 global alliances across 95+ countries. These alliances provide students with a global perspective that makes them the most desirable candidates for worldwide recruiters.',
    },
    {
        id: 3,
        title: 'Extraordinary Industry Patronage',
        content: 'Our synergistic alliances with reputed multinational companies assure that you will have continuous professional learning and exclusive opportunities to meet and engage with top organizations and industry leaders. You will have exposure to the corporate standard learning environment, multifaceted industry-sponsored infrastructure, and corporate experts who are playing a proactive role in transforming and elevating the learning process.',
    },
    {
        id: 4,
        title: 'Empowering Progress Through Participation',
        content: "We have always recognized the important contributions made by individuals from a variety of backgrounds. Our diverse student body—comprised of students from all Indian states and 50+ countries promises you a culturally enriching experience. You'll be encouraged to challenge yourself and your way of thinking. These influences will help you grow and expand. Ethnic and cultural diversity enriches our student life, academic programs, and campus activities.",
    },
    {
        id: 5,
        title: 'Redefining Future Learning',
        content: "Keeping at par with advanced technological trends and providing uninterrupted learning amid COVID times to facilitate comprehensive, and hassle-free learning, CU introduced the world's top-end Learning Management system BLACKBOARD Ultra.",
    },
];

export default function CardSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                modules={[Pagination]}
                className="mySwiper"
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div className="bg-[#e6e6e6] rounded-2xl overflow-hidden cursor-grab ">
                            <div className='bg-indigo-950 p-2 h-20 flex items-center justify-center'>
                                <h3 className='leading-none text-white text-xl font-novaSemi text-center selection-transparent'>{slide.title}</h3>
                            </div>
                            <p className='px-10 py-5 text-black mt-4 font-novaLight selection-transparent'>{slide.content}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
