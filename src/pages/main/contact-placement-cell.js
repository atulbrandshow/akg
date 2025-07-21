import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import ContactPlacementCell from "../pagesComp/ContactPlacementCell";

const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
]


export const Home = () => {
    return (
        <>
            <div className="bg-PaperBackground">
                <Header title={"Placement Cell"} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-16 gap-8 px-4 max-sm:gap-0 max-sm:px-2 sm:px-4 max-lg:py-14 max-md:py-12 max-sm:py-10">
                    <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12 max-sm:col-span-12">
                    <ContactPlacementCell />
                    </div>
                    <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12 max-sm:col-span-12">
                        <SideBar title={"About Us"} LinkList={SideBarLink} />
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;