import Header from "@/Components/Header";
import ProfessorsOfPractice from "../pagesComp/ProfessorsOfPractice";

export const Home = () => {
    return (
        <>
        <Header bgKey="BG4" height="h-[300px] md:h-[500px] lg:h-[700px]" position="center" gradient={false} />
        <ProfessorsOfPractice />
        </>
    )
}


export default Home;