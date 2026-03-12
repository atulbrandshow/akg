import Header from "@/Components/Header";
import StudentTestimonials from "../pagesComp/StudentTestimonials";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Header
          title={"Student Testimonials"}
          bgKey="BG15"
          gradient={"bg-gradient-to-r from-brand-blue to-transparent"}
        />
        <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-10 px-6 max-sm:px-4">
          <div className="w-full">
            <StudentTestimonials />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
