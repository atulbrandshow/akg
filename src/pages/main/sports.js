import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import SportsFacility from "../pagesComp/Sports";

const SideBarLink = [
  { name: "Campus Facilities", link: "/campus-life/campus-facilities" },
  { name: "Library", link: "/campus-life/library" },
  { name: "Hostel", link: "/campus-life/hostel" },
  { name: "Sports", link: "/campus-life/sports" },
  { name: "Student Welfare", link: "/campus-life/student-welfare" },
  { name: "Innovations & Events", link: "/campus-life/innovations-and-events" },
];

const SportsPage = () => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <Header
                    title={"Sports & Fitness"}
                    subHeading={"Excelling Beyond the Classroom 🏆🔥"}
                    bg="/image/campus-life/sports.jpg"
                    gradient={"bg-gradient-to-r from-gray-900/80 to-transparent"}
                />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-16 max-sm:py-8 gap-10 px-4 max-md:gap-0">
                    <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                        <SportsFacility />
                    </div>
                    <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
                        <SideBar title={"Campus Life"} LinkList={SideBarLink} />
                    </div>
                </section>
            </div>
        </>
    );
};

export default SportsPage;
