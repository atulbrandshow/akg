import Header from "@/Components/Header";
import ABC from "../pagesComp/ABC";

const Home = () => {

    return (
        <>
            <div className="bg-gray-100">
                <Header 
                    title={<>Academic Bank of Credits (ABC)</>}
                    buttonLink="https://www.abc.gov.in/"
                    buttonType={"link"}
                    buttonText="Go to ABC"
                    gradient={"bg-gradient-to-r from-black to-slate-700/"} bgKey="BG3"/>
                <ABC />
            </div>
        </>
    )
}


export default Home;