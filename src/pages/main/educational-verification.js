import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import Breadcrumb from "@/Components/Breadcrumb";
import EducationalVerification from "../pagesComp/EducationalVerification";

const BreadCrumb = [
    {
        name: "Policy And Process For Refund Of Caution Money",
        Link: "#",
    },
    // {
    //     name: "Support Facilities",
    //     Link: "#",
    // }
]

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
            <div className="">
                <Header 
                    title={"Educational Verification"}
                    bgKey="BG8"
                    gradient={"bg-gradient-to-r from-black to-white/"} 
                />
                <div className="w-full max-w-[1400px] pl-10 mt-20 mx-auto ">
                    <Breadcrumb data={BreadCrumb} />
                </div>
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 gap-8 px-4 max-sm:px-2">
                    <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                        <EducationalVerification />
                    </div>
                    <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
                        <SideBar title={"About Us"} LinkList={SideBarLink} />
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;