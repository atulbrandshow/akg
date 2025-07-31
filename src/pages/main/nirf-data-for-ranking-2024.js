import Header from "@/Components/Header";

const Button = {
    name: "Apply Now",
    Link: "",
};

const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"NIRF Data for Ranking 2024"} Button={Button} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-2 max-sm:gap-0">
                    <div className="col-span-12 max-md:col-span-12">
                        <section>
                            <iframe
                                src="/pdf/mandatory-disclosure/NIRF-2024-Data.pdf"
                                width="100%"
                                height="600px"
                                title="NIRF Data"
                            />
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;