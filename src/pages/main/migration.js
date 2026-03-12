import Header from "@/Components/Header";
import Migration from "../pagesComp/Migration";

export const Home = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Header
          title={"Migration Policy"}
          buttonType={"link"}
          buttonLink="/"
          buttonText="Registration for Migration"
          bgKey="BG8"
          gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
        />
        <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-8 px-4">
          <div className="w-full">
            <Migration />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
