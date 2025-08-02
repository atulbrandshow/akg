"use client";

import AboutProgram from '@/Components/AboutProgram'
import DropdownsUI from '@/Components/DropdownsUI'
import EligibilityCriteriaUnique from '@/Components/EligibilityCriteriaUnique'
import FeeStructure from '@/Components/FeeStructure'
import IndustryPartnerSlider from '@/Components/IndustryPartnerSlider'
import InternationalTieUps from '@/Components/InternationalTieUps'
import Placement from '@/Components/Placement'
import ProgramHeroSection from '@/Components/ProgramHeroSection'
import ProgramCarousel from '@/Components/ProgramsCarousel'
import { dropdownJsonData } from '@/Json/DropdownJsonData'
import React from 'react'
import ProgramFacultySlider from '@/Components/ProgramFacultySlider';
import PlacementBanner from '@/Components/PlacementBanner';

const ProgramDetails = ({ data }) => {
    return (
        <section>
            <ProgramHeroSection data={data} />
            <ProgramCarousel data={data} />
            <AboutProgram data={data} />
            <IndustryPartnerSlider data={data} />
            <PlacementBanner data={data} />
            <FeeStructure data={data} />
            <InternationalTieUps data={data} />
            <EligibilityCriteriaUnique data={data} />
            <ProgramFacultySlider />
            <DropdownsUI dropdownData={dropdownJsonData} />
        </section>
    )
}

export default ProgramDetails