import Header from "@/Components/Header";
import CSEAchievements from "../pagesComp/CSEAchievements";

// const Button = {
//     name: "Apply Now",
//     Link: "",
// };


const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header /*{title={"VECell SDPs"} Button={Button}}*/ gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto py-10">
                    <div className="">
                        <CSEAchievements />
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;