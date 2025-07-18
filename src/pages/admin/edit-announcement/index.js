import { Suspense } from "react";
import SideBar from "../Components/SideBar";
import EditAnnouncement from "./EditAnnouncement";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 overflow-x-auto w-full h-screen px-10">
          <Suspense fallback={<div>Loading...</div>}>
            <EditAnnouncement />
          </Suspense>
        </div>
      </div>
    </>
  );
}
