import Header from "@/Components/Header";
import Conference from "../pagesComp/Conference24-25";

const Button = {
    name: "Apply Now",
    Link: "",
};


const Home = () => {
    return (
        <>
            <div className="">
                <Header title={"Conferences 2024-25"} Button={Button} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto">
                    <div className="">
                        <Conference />
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;