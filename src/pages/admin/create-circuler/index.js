import SideBar from "../Components/SideBar";
import CreateCirculer from "./CreateCirculer";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 px-10 overflow-x-auto w-full h-screen">
          <CreateCirculer />
        </div>
      </div>
    </>
  );
}
