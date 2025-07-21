import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import Breadcrumb from "@/Components/Breadcrumb";
import PolicyAndProcessForRefundOfCautionMoney from "../pagesComp/PolicyAndProcessForRefundOfCautionMoney";

const Button = {
    name: "Apply Now",
    Link: "",
};

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

const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header 
                    title={"Policy And Process For Refund Of Caution Money"}
                    bgKey="BG7"
                    buttonType={"link"} 
                    buttonText="Apply Now"
                    buttonLink="/"
                    gradient={"bg-gradient-to-r from-black to-white/"} 
                />
                <div className="w-full max-w-[1400px] pl-2 mt-20 mx-auto ">
                    <Breadcrumb data={BreadCrumb} />
                </div>
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-2 max-sm:gap-0">
                    <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                        <PolicyAndProcessForRefundOfCautionMoney />
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