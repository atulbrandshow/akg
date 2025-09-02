import { useContext } from "react";
import { AppDataContext } from "@/context/AppDataContext";
import HomePage from "./pagesComp/HomePage";
import ShimmerContent from "@/Components/ShimmerContent";

export default function Home() {
  const { homeData, loading } = useContext(AppDataContext);

  if (loading) return <ShimmerContent />;
  return <HomePage data={homeData} />;
}
