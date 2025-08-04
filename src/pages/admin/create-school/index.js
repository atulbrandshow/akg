import CreateSchoolPages from "../Components/CreateSchoolPages";
import SideBar from "../Components/SideBar";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 overflow-x-auto w-full h-screen px-10">
          <CreateSchoolPages type="School" componentType="school-details" parentId={0} />
        </div>
      </div>
    </>
  );
}
