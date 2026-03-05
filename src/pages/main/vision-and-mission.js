import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import VisionAndMission from "../pagesComp/VisionMission";
import Breadcrumb from "@/Components/Breadcrumb";

const SideBarLink = [
  { name: "Overview", link: "/skills-foundation" },
  {
    name: "Industrial Training",
    link: "/skills-foundation/industrial-training",
  },
  { name: "Skill Development", link: "/skills-foundation/skill-development" },
  { name: "Consultancy", link: "/skills-foundation/consultancy" },
];

export const Home = ({ data }) => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen pb-10">
        <Header
          title={"Vision and Mission"}
          bg="/image/lab/User-Manual-AKGEC 5.webp"
          gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
        />
        {/* <section className="max-w-[1400px] mx-auto px-5 max-sm:px-2 py-5">
          {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
        </section> */}
        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-10 lg:py-20 gap-10 px-4">
          <div className="col-span-12 lg:col-span-12">
            <VisionAndMission />
          </div>
          {/* <div className="col-span-12 lg:col-span-3 sticky top-32 self-start h-max">
            <SideBar title={"Skills Foundation"} LinkList={SideBarLink} />
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Home;
