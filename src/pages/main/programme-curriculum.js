import Header from "@/Components/Header";
import ProgrammeCurriculum from "../pagesComp/ProgrammeCurriculum";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Header
          bgKey="BG9"
          title={"Programme Curriculum"}
          buttonType={"link"}
          buttonText="Apply Now"
          buttonLink=""
          gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
        />
        <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-2 px-2">
          <div className="w-full">
            <ProgrammeCurriculum />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
