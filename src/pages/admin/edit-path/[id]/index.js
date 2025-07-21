import { useRouter } from "next/router";
import SideBar from "../../Components/SideBar";
import EditPath from "./EditPath"; // adjust path if needed

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="pt-10 px-10 overflow-x-auto w-full h-screen">
        {/* Wait for id to be available */}
        {id && <EditPath pageId={id} />}
      </div>
    </div>
  );
}
