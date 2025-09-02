import { useContext } from "react";
import { AppDataContext } from "@/context/AppDataContext";
import HomePage from "./pagesComp/HomePage";
import HomeShimmer from "@/Components/HomeShimmer";

export default function Home() {
  const { homeData, loading } = useContext(AppDataContext);

  if (loading) return <HomeShimmer />;
  return <HomePage data={homeData} />;
}
