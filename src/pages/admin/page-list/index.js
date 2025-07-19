
import SideBar from "../Components/SideBar";
import PageList from "./PageList";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 px-10 overflow-x-auto w-full h-screen">
          <PageList />
        </div>
      </div>
    </>
  );
}
