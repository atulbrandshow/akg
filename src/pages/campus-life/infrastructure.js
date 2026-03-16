import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import Infrastructure from "../pagesComp/Infrastructure";

const SideBarLink = [
  { name: "Campus Facilities", link: "/campus-life/campus-facilities" },
  { name: "Library", link: "/campus-life/library" },
  { name: "Hostel", link: "/campus-life/hostel" },
  { name: "Sports", link: "/campus-life/sports" },
  { name: "Infrastructure", link: "/campus-life/infrastructure" },
  { name: "Student Welfare", link: "/campus-life/student-welfare" },
];

const InfrastructurePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header 
                title={"Campus Infrastructure"} 
                subHeading={"Designed for Excellence, Built for the Future 🏛️✨"}
                bg="/image/infrastructure/building-1.webp" 
                gradient={"bg-gradient-to-r from-gray-900/80 to-transparent"} 
                height="h-[600px]" 
            />
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-16 max-sm:py-8 gap-10 px-4 max-md:gap-0">
                <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                    <Infrastructure />
                </div>
                <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
                     <SideBar title={"Campus Life"} LinkList={SideBarLink} />
                </div>
            </section>
        </div>
    );
};

export default InfrastructurePage;
