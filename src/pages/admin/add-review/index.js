"use client";
import AddReview from "../Components/AddReview";
import SideBar from "../Components/SideBar";

export default function Home() {
  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="pt-10 overflow-x-auto w-full h-screen px-10">
       <AddReview />
      </div>
    </div>
  );
}