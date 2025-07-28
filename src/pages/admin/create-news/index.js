import CreateDynamicPages from "../Components/CreateDynamicPages";
import SideBar from "../Components/SideBar";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 overflow-x-auto w-full h-screen px-10">
          <CreateDynamicPages type="News" componentType="news-details" parentId={989951} />
        </div>
      </div>
    </>
  );
}
