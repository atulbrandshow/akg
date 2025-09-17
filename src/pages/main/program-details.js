"use client";

import AboutProgram from '@/Components/AboutProgram'
import EligibilityCriteriaUnique from '@/Components/EligibilityCriteriaUnique'
import FeeStructure from '@/Components/FeeStructure'
import InternationalTieUps from '@/Components/InternationalTieUps'
import ProgramHeroSection from '@/Components/ProgramHeroSection'
import ProgramCarousel from '@/Components/ProgramsCarousel'
import React from 'react'
import ProgramFacultySlider from '@/Components/ProgramFacultySlider';
import PlacementBannerDynamic from '@/Components/PlacementBannerDynamic';
import IndustryPartnerSliderDynamic from '@/Components/IndustryPartnerSliderDynamic';
import FAQHolder from '@/Components/FAQHolder';
import LabsNewsSection from '@/Components/LabsSection';
import Breadcrumb from '@/Components/Breadcrumb';
import AlumniSection from '@/Components/AlumniSection';

const ProgramDetails = ({ data }) => {
    return (
        <section className='bg-white'>
            <ProgramHeroSection data={data} />
            <section className='max-w-[1400px] mx-auto px-5 max-sm:px-2 py-5'>
                {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
            </section>
            <ProgramCarousel data={data} />
            <AboutProgram data={data} />
            <IndustryPartnerSliderDynamic data={data} />
            <PlacementBannerDynamic data={data} />
            <FeeStructure data={data} />
            <LabsNewsSection data={data} />
            <InternationalTieUps data={data} />
            <AlumniSection />
            <EligibilityCriteriaUnique data={data} />
            {data?.faculties.length > 0 && <ProgramFacultySlider data={data} />}
            {data?.faq.length > 0 && <FAQHolder data={data} />}
        </section>
    )
}

export default ProgramDetails