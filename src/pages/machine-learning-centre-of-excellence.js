import Header from "@/Components/Header";
import MachineLearningCoE from "./pagesComp/MachineLearningCoE";

export const Home = () => {
    return (
        <>
            <div className="">
                <Header title={"Machine Learning Centre of Excellence"} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-2 px-2">
                    <MachineLearningCoE />
                </section>
            </div>
        </>
    )
}

export default Home;
