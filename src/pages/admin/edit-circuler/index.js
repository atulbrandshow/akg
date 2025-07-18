import { Suspense } from "react";
import SideBar from "../Components/SideBar";
import EditCirculer from "./EditCirculer";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 overflow-x-auto w-full h-screen px-10">
          <Suspense fallback={<div>Loading...</div>}>
            <EditCirculer />
          </Suspense>
        </div>
      </div>
    </>
  );
}
