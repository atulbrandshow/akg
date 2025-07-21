import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import TopPlacement from "../pagesComp/TopPlacement";

const SideBarLink = [
    { name: "About Placements", link: "/placements" },
    { name: "Dept. of Career Planning & Development", link: "/placements/department-of-career-development" },
    { name: "Top Placement", link: "/placements/top-placement" },
    { name: "Placement Highlights", link: "/placements/placement-highlights" },
    { name: "Placement Policy", link: "/placements/placement-policy" },
    { name: "Our Leading Recruiters", link: "/placements/our-leading-recruiters" },
    { name: "Contact Placement Cell", link: "/placements/contact-placement-cell" }
]

export const Home = () => {
    return (
        <>
            <div className="bg-gray-50">
                <Header title={"Top Placements"} subHeading={"Turning dreams into offers! 🚀🎯"} bg="/image/building/building2.webp" gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-5 gap-8 px-4 max-sm:px-2 max-sm:gap-0">
                    <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                        <TopPlacement />
                    </div>
                    <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12 max-sm:pt-5">
                        <SideBar title={"About Us"} LinkList={SideBarLink} />
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;