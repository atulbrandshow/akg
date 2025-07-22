import SideBar from "../Components/SideBar";
import TableList from "../Components/TableList";

export default function Home() {
  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="pt-10 px-10 overflow-x-auto w-full h-screen">
        <TableList type="Circuler" title="Circuler Management" subTitle="Manage your circuler here" />
      </div>
    </div>
  );
}
