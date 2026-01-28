import Header from "@/Components/Header";
import NationalAcademicDepository from "../pagesComp/NationalAcademicDepository";

export const Home = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <Header
          title={"National Academic Depository"}
          gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
        />
        <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-10 px-4 max-sm:px-2">
          <div className="w-full">
            <NationalAcademicDepository />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
