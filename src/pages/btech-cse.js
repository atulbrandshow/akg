"use client";

import { LogoSlider } from '@/Components'
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

const BtechCSE = () => {
    return (
        <section>
            <ProgramHeroSection />
            <ProgramCarousel />
            <AboutProgram />
            <IndustryPartnerSlider />
            <Placement />
            <FeeStructure />
            {/* <PlacementUi /> */}
            <InternationalTieUps />
            <EligibilityCriteriaUnique />
            <ProgramFacultySlider />
            <LogoSlider />
            <DropdownsUI dropdownData={dropdownJsonData} />
        </section>
    )
}

export default BtechCSE