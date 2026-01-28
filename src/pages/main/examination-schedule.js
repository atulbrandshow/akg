import Header from "@/Components/Header";
import ExaminationSchedule from "../pagesComp/ExaminationSchedule";

export const Home = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Header
          title={"Examination Schedule"}
          bgKey="BG3"
          gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
        />
        <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-5 px-4 max-sm:px-2">
          <div className="w-full">
            <ExaminationSchedule />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
