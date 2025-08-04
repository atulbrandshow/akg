"use client";

import { CampusSlider, FooterCard, LogoSlider, MilestonesSection, NewsEvents, PlacementHighlights, ExploreCourses, ResearchEnvironment, SlickSlider, StickyFooter, StudentReviews, TopCard } from "@/Components";
import MainSection from "@/Components/MainSection";
import NotificationSlider from "@/Components/NotificationSlider";

export default function HomePage({ data }) {
  
  return (
    <>
      <MainSection data={data} />
      <TopCard data={data} />
      <ExploreCourses data={data} />
      <SlickSlider data={data} />
      <NotificationSlider data={data} />
      <MilestonesSection data={data} />
      <PlacementHighlights data={data} />
      <LogoSlider data={data} />
      <CampusSlider data={data} />
      <StudentReviews data={data} />
      <NewsEvents data={data} />
      <FooterCard data={data} />
      <ResearchEnvironment data={data} />
    </>
  );
}