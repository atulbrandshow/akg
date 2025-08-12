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

const ProgramDetails = ({ data }) => {
    return (
        <section>
            <ProgramHeroSection data={data} />
            <ProgramCarousel data={data} />
            <AboutProgram data={data} />
            <IndustryPartnerSliderDynamic data={data} />
            <PlacementBannerDynamic data={data} />
            <FeeStructure data={data} />
            <LabsNewsSection data={data}/>
            <InternationalTieUps data={data} />
            <EligibilityCriteriaUnique data={data} />
            <ProgramFacultySlider data={data} />
            <FAQHolder data={data} />
        </section>
    )
}

export default ProgramDetails