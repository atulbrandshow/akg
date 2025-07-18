import SideBar from "../Components/SideBar";
import TopperForm from "./TopperForm";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 overflow-x-auto w-full h-screen px-10">
          <TopperForm />
        </div>
      </div>
    </>
  );
}
