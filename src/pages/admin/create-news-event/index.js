import SideBar from "../Components/SideBar";
import CreateNewsEvent from "./CreateNewsEvent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 overflow-x-auto w-full h-screen px-10">
          <CreateNewsEvent />
        </div>
      </div>
    </>
  );
}
