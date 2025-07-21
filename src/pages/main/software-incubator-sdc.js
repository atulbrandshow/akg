import Header from "@/Components/Header";
import SoftwareIncubator from "../pagesComp/SoftwareIncubator";

export const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"Software Incubator – SDC"} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-2 px-2">
                    <SoftwareIncubator />
                </section>
            </div>
        </>
    )
}

export default Home;
