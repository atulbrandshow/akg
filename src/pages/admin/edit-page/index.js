import { Suspense } from "react";
import SideBar from "../Components/SideBar";
import EditDynamicPages from "../Components/EditDynamicPages";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 overflow-x-auto w-full h-screen px-10">
          <Suspense fallback={<div>Loading...</div>}>
            <EditDynamicPages type="Page" />
          </Suspense>
        </div>
      </div>
    </>
  );
}
