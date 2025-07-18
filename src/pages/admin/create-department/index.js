import SideBar from "../Components/SideBar";
import CreatePage from "./CreateDepartment";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 overflow-x-auto w-full h-screen px-10">
          <CreatePage />
        </div>
      </div>
    </>
  );
}
