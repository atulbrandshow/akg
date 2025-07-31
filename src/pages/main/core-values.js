import Header from "@/Components/Header";
import CoreValue from "../pagesComp/CoreValue";

export const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"Core Values"} bgKey="BG-Building-5" gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <section className="w-full max-w-[1400px] max-2xl:max-w-7xl max-xl:max-w-6xl mx-auto py-20 max-sm:py-10 px-5 max-sm:px-2">
                    <CoreValue />
                </section>
            </div>
        </>
    )
}


export default Home;