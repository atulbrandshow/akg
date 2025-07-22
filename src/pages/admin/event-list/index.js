import SideBar from "../Components/SideBar";
import TableList from "../Components/TableList";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-10 px-10 overflow-x-auto w-full h-screen">
          <TableList type="Event" title="Event Management" subTitle="Manage your event here" />
        </div>
      </div>
    </>
  );
}
