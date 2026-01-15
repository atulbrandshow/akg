import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import IndustryOrientedResearchComp from "../pagesComp/IndustryOrientedResearchComp";

const SideBarLink = [
  { name: "Overview", link: "/skills-foundation" },
  {
    name: "Industrial Training",
    link: "/skills-foundation/industrial-training",
  },
  { name: "Skill Development", link: "/skills-foundation/skill-development" },
  { name: "Consultancy", link: "/skills-foundation/consultancy" },
  { name: "Major Projects", link: "/skills-foundation/major-projects" },
  { name: "Proud Moments", link: "/skills-foundation/proud-moments" },
  {
    name: "Centres of Excellence",
    link: "/skills-foundation/centres-of-excellence",
  },
  {
    name: "Industry Oriented Research",
    link: "/skills-foundation/industry-oriented-research",
  },
];

export const Home = () => {
  return (
    <>
      <div className="bg-[#f1f5f9] min-h-screen pb-20">
        <Header
          title={"Industry Oriented Research"}
          bg="/image/lab/User-Manual-AKGEC 5.webp"
          gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"}
        />

        <section className="w-full max-w-[1550px] mx-auto grid grid-cols-12 py-10 lg:py-16 gap-8 px-4 relative">
          <div className="col-span-12 lg:col-span-9">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-md">
              <IndustryOrientedResearchComp />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-32">
              <div className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <SideBar title={"Skills Foundation"} LinkList={SideBarLink} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
