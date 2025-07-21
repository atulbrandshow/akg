import Header from "@/Components/Header";
import BlockchainResearch from "../pagesComp/BlockchainResearch";


export const Home = () => {
    return (
        <>
            <div className="">
                <Header title={"Blockchain Research Lab"} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-2 px-2">
                    <BlockchainResearch />
                </section>
            </div>
        </>
    )
}

export default Home;