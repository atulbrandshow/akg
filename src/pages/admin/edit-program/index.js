import { Suspense } from "react";
import SideBar from "../Components/SideBar";
import EditProgramPage from "../Components/EditProgramPage";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 px-10 overflow-x-auto w-full h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <EditProgramPage type="Program" componentType="program-details" />
          </Suspense>
        </div>
      </div>
    </>
  );
}
