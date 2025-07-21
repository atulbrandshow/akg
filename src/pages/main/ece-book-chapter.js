import Header from "@/Components/Header";
import ECEBookChapter from "../pagesComp/ECEBookChapter";

const Button = {
    name: "Apply Now",
    Link: "",
};

const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"ECE Book Chapter"} Button={Button} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto">
                    <div className="">
                        <ECEBookChapter />
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;