import Header from "@/Components/Header";
import UniversityBrochure from "../pagesComp/UniversityBrochure";
import Breadcrumb from "@/Components/Breadcrumb";

export const Home = ({ data }) => {
  return (
    <>
      <div className="bg-gray-300">
        <Header
          title={"University Brochure"}
          bgKey="BG1"
          gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
        />
        {/* <section className="max-w-[1400px] mx-auto px-5 max-sm:px-2 py-5">
          {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
        </section> */}
        <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-5 px-4 max-sm:px-2">
          <div className="w-full">
            <UniversityBrochure />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
