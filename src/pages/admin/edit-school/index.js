import { Suspense } from "react";
import SideBar from "../Components/SideBar";
import EditDynamicPages from "../Components/EditDynamicPages";
import EditSchoolPage from "../Components/EditSchoolPage";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 px-10 overflow-x-auto w-full h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <EditSchoolPage type="School" componentType="school-details" />
          </Suspense>
        </div>
      </div>
    </>
  );
}
