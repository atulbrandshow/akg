import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import Facilities from "../pagesComp/Facilities";

const SideBarLink = [
  { name: "Facilities", link: "/campus-life/facilities" },
  { name: "Library", link: "/campus-life/library" },
  { name: "Hostel", link: "/campus-life/hostel" },
  { name: "Sports", link: "/campus-life/sports" },
  { name: "Infrastructure", link: "/campus-life/infrastructure" },
  { name: "Technical Clubs", link: "/campus-life/technical-clubs" },
  { name: "Extra-Curricular Societies", link: "/campus-life/extra-curricular-societies" },
  { name: "Student Welfare", link: "/campus-life/student-welfare" },
];

const FacilitiesPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header 
                title={"Campus & Academic Facilities"} 
                subHeading={"World-Class Infrastructure for a World-Class Experience 🏢🌟"}
                bg="/image/campus-life/main-banner-1.jpg" 
                gradient={"bg-gradient-to-r from-slate-900/90 to-transparent"} 
                height="h-[600px]" 
            />
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-16 max-sm:py-8 gap-10 px-4 max-md:gap-0">
                <div className="col-span-12 lg:col-span-12">
                    <Facilities />
                </div>
                {/* <div className="col-span-12 lg:col-span-3">
                     <SideBar title={"Campus Life"} LinkList={SideBarLink} />
                </div> */}
            </section>
        </div>
    );
};

export default FacilitiesPage;
