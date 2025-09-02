"use client";

import { CampusSlider, FooterCard, MilestonesSection, NewsEvents, PlacementHighlights, ExploreCourses, ResearchEnvironment, SlickSlider, StudentReviews } from "@/Components";
import HomeLogoSlider from "@/Components/HomeLogoSlider";
import HomeTopCard from "@/Components/HomeTopCard";
import MainSection from "@/Components/MainSection";
import NotificationSlider from "@/Components/NotificationSlider";

export default function HomePage({ data }) {

  return (
    <>
      {data && <MainSection data={data} />}
      {data && <HomeTopCard data={data} />}
      {data && <ExploreCourses data={data} />}
      {data && <SlickSlider data={data} />}
      {data && <NotificationSlider data={data} />}
      {data && <MilestonesSection data={data} />}
      {data && <PlacementHighlights data={data} />}
      {data && <HomeLogoSlider data={data} />}
      {data && <CampusSlider data={data} />}
      {data && <StudentReviews data={data} />}
      {data && <NewsEvents data={data} />}
      {data && <FooterCard data={data} />}
      {data && <ResearchEnvironment data={data} />}
    </>
  );
}