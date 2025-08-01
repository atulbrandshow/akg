"use client";

import { CampusSlider, FooterCard, LogoSlider, MilestonesSection, NewsEvents, PlacementHighlights, ExploreCourses, ResearchEnvironment, SlickSlider, StickyFooter, StudentReviews, TopCard } from "@/Components";
import MainSection from "@/Components/MainSection";
import NotificationSlider from "@/Components/NotificationSlider";

export default function HomePage({ data }) {
  return (
    <>
      <MainSection data={data} />
      <TopCard data={data} />
      <ExploreCourses data={data}/>
      <SlickSlider data={data} />
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