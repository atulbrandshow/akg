import Header from "@/Components/Header";
import AcademicComplex from "../pagesComp/AcademicComplex";

const Button = {
    name: "Apply Now",
    Link: "",
};


const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"Infrastructure/Visual Tour"} bgKey="BG-Building-14" Button={Button} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <AcademicComplex />
            </div>
        </>
    )
}


export default Home;