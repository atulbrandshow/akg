import Header from "@/Components/Header";
import ContactIncubator from "@/Components/ContactIncubator";
import ResearchInfo from "@/Components/ResearchInfo";
import InnovationAndEntrepreneurshipDevelopmentCell from "../pagesComp/InnovationAndEntrepreneurshipDevelopmentCell";

const SideBarLink = [
  { name: "Our Identity", link: "/overview" },
  { name: "Leadership", link: "" },
  { name: "Governance", link: "" },
  { name: "Recognition and Approvals", link: "" },
  { name: "Awards and Rankings", link: "" },
  { name: "Institution Social Responsibility", link: "" }
]


export default function AboutPlacement() {
  return (
    <>
      <div className="bg-[#f2f6ff]">
        <Header title={"Entrepreneurship TBi"} bg="/image/tech-invent-&-events/tech-invent-banner.jpg" Button={{ name: "Apply Now", Link: "/" }} gradient={"bg-gradient-to-r from-zinc-900 to-gray-900/40"} />
        <section className="w-full mx-auto py-20 gap-8 max-sm:px-2">
          <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
            <InnovationAndEntrepreneurshipDevelopmentCell />
          </div>
        </section>
        <ResearchInfo />
        <ContactIncubator />
      </div>
    </>
  );
}
