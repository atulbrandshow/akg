import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import Infrastructure from "../pagesComp/Infrastructure";

const SideBarLink = [
  { name: "Campus Life", link: "/campus-life" },
  { name: "Infrastructure", link: "/infrastructure" },
  { name: "Academic Facilities", link: "/campus-life/academic-facilities" },
  { name: "Campus Facilities", link: "/campus-life/campus-facilities" },
  { name: "Transportation", link: "/campus-life/transportation" },
  {
    name: "Residential Facilities",
    link: "/campus-life/residential-facilities",
  },
  { name: "Library", link: "/campus-life/library" },
  { name: "Auditorium", link: "/campus-life/auditorium" },
  { name: "Student Welfare", link: "/campus-life/student-welfare" },
  { name: "Convocations", link: "/campus-life/convocations" },
  { name: "Tech Invent & Events", link: "/campus-life/tech-invent-and-events" },
  {
    name: "Cultural & Cosmopolitan",
    link: "/campus-life/cultural-and-cosmopolitan",
  },
];

const Home = () => {
  return (
    <>
      <div className="bg-[#f2f6ff]">
        <Header
          title={"Designed to inspire, built to empower"}
          bgKey="BG5"
          buttonType={"link"}
          buttonText="Apply Now"
          buttonLink="/"
          gradient={"bg-gradient-to-r from-black to-slate-900/"}
          height="h-[600px]"
        />
        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-16 gap-8 px-4 max-lg:py-10 max-md:py-8 max-sm:py-6 max-sm:px-2 max-sm:gap-0">
          <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
            <Infrastructure />
          </div>
          <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
            <SideBar title={"About Us"} LinkList={SideBarLink} />
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
