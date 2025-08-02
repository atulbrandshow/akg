import CreateDynamicProgram from "../Components/CreateDynamicProgram";
import SideBar from "../Components/SideBar";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 overflow-x-auto w-full h-screen px-10">
          <CreateDynamicProgram type="Program" componentType="program-details" />
        </div>
      </div>
    </>
  );
}
