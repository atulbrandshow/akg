"use client";

import { CampusSlider, FooterCard, LogoSlider, MilestonesSection, NewsEvents, PlacementHighlights, ExploreCourses, ResearchEnvironment, SlickSlider, StickyFooter, StudentReviews, TopCard } from "@/Components";
import MainSection from "@/Components/MainSection";
import NotificationSlider from "@/Components/NotificationSlider";

export default function HomePage() {

    return (
        <>
            <MainSection />
            <TopCard />
            <ExploreCourses />
            <SlickSlider />
            <NotificationSlider />
            <MilestonesSection />
            <PlacementHighlights />
            <LogoSlider />
            <CampusSlider />
            <StudentReviews />
            <NewsEvents />
            <FooterCard />
            <ResearchEnvironment />
        </>
    );
}