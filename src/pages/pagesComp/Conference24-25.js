"use client";

import CubeSlider from '@/Components/CubeSlider';
import React from 'react';

const acetSummary = [
    {
        desc: "Ajay Kumar Garg University, known for its dedication to high-quality education and promoting research initiatives, successfully organized the 1st International Conference on “Advanced Computing and Emerging Technologies (ACET-2024)\". The two-day event, held on August 23-24, 2024, was organized by the Department of Computer Science and Engineering and was technically co-sponsored by IEEE UP Section and Ghaziabad Management Association (GMA). The conference attracted significant interest, with over 800 research papers submitted globally, of which 148 were selected for presentation, highlighting the exceptional quality of the work showcased."
    },
    {
        desc: "Researchers from across India and various international institutions participated, engaging in a wide range of technical sessions. Scholars from esteemed institutions such as IIT, JNU, and IIIT shared their research, facilitating a rich exchange of ideas. The event served as a vital platform for discussing the societal impact of emerging technologies and research advancements."
    },
    {
        desc: "The conference featured distinguished international keynote speakers, including Professor Dr. Valentina E. Balas from AVUA, Romania, Dr. Hauwa Ahmad Amshi from Federal University, Gashua, Nigeria, and Dr. Varun Kumar, Joint Secretary of IEEE UP Section. Their insights provided valuable perspectives on the current trends and future possibilities in technological research."
    },
    {
        desc: "Additionally, invited talks were delivered by esteemed experts such as Dr. Balakrishnan Athiyaman, Head of the Supercomputing Division at the Ministry of Earth Sciences; Dr. Srinivas Singh, Director of ABV-IIITM Gwalior; Dr. J. RamKumar, Professor at IIT Kanpur; and Dr. Satish Kumar Singh, Associate Professor at IIIT Allahabad. These discussions emphasized the critical role of research in societal progress and India's journey toward innovation-driven development."
    },
    {
        desc: "The Chief Patron of the conference was Dr. R. K. Agarwal, Director General of Ajay Kumar Garg University, whose leadership and vision were instrumental in making the event a grand success."
    }
];

const imgassets = [
    {
        slides: [
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/1.webp' },
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/2.webp' },
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/3.webp' },
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/4.webp' },
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/5.webp' },
        ]
    },
    {
        slides: [
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/6.webp' },
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/7.webp' },
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/8.webp' },
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/9.webp' },
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/10.webp' },
        ]
    },
    {
        slides: [
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/11.webp' },
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/12.webp' },
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/13.webp' },
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/14.webp' },
            { title: 'conferences-2024-25', img: '/image/conferences-2024-25/15.webp' },
        ]
    },
];

const Conference = () => {
    return (
        <section className="max-w-7xl mx-auto px-3 py-10">
            <div className='p-3'>
                <h3 className="text-2xl font-novaBold text-center mb-5">International conference on “Advanced Computing and Emerging Technologies (ACET-2024)"</h3>
                {acetSummary.map((item, index) => (
                    <p key={index} className='mb-3 text-lg font-novaReg'>{item.desc}</p>
                ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {imgassets.map((asset, index) => (
                    <CubeSlider key={index} slides={asset.slides}/>
                ))}
            </div>
        </section>
    );
};

export default Conference;
