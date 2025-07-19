import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";

const Button = {
    name: "Apply Now",
    Link: "",
};

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
                <Header title={"Stationary Shop"} Button={Button} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-2 max-sm:gap-0">
                    <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                        <section className='px-5'>
                            <div className='space-y-5'>
                                <h2 className='text-4xl font-novaReg leading-5'>Stationery Shop: Everything You Need, All in One Place</h2>
                                <p className='text-lg max-w-5xl leading-6 font-novaReg'>To facilitate student needs, a stationary store is present inside university campus. This store stocks full range of stationary stuffs required by students for their day to day curriculum activities including study material like textbooks , reference books, journals, laboratory manuals and many more.</p>
                                <p className='text-lg max-w-5xl leading-6 font-novaReg'>All the stationary for students are available at very reasonable rates. Store is open during university timings only.</p>
                            </div>
                        </section>
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