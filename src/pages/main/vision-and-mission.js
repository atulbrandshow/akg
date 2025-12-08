import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import VisionAndMission from "../pagesComp/VisionMission";

const SideBarLink = [
  { name: "Our Identity", link: "/overview" },
  { name: "Leadership", link: "" },
  { name: "Governance", link: "" },
  { name: "Recognition and Approvals", link: "" },
  { name: "Awards and Rankings", link: "" },
  { name: "Institution Social Responsibility", link: "" },
];

export const Home = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Header
          title={"Vision and Mission"}
          gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
          bgKey="BG-Building-1"
        />
        <VisionAndMission />
      </div>
    </>
  );
};

export default Home;
