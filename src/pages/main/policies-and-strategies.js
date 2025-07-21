import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import ContactIncubator from "@/Components/ContactIncubator";
import ResearchInfo from "@/Components/ResearchInfo";

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
        <Header title={"Policies And Strategies"} bg="/image/tech-invent-&-events/tech-invent-banner.jpg" Button={{ name: "Apply Now", Link: "/" }} gradient={"bg-gradient-to-r from-zinc-900 to-gray-900/40"} />
        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 gap-8 px-4 max-sm:px-2">
          <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
            <div className="px-3">
              <div className="mb-4">
                <h2 className="text-5xl font-novaReg mb-5">Vision for Sustainable Development</h2>
                <p className="font-novaReg text-lg">In today’s interconnected world, universities play a pivotal role in fostering collaboration among governments, businesses, and civil society to achieve shared goals. AKG University stands out as a key contributor to this mission, leveraging its position to enhance soft diplomacy. Through various channels, the university promotes meaningful interactions that bridge cultures and perspectives. Every year, countless students embark on international journeys, immersing themselves in diverse cultures and facilitating mutual understanding. Additionally, researchers from across the globe unite at AKG University, collaborating to create networks and develop the innovative knowledge needed to address global challenges.</p>
                <br />
                <p className="font-novaReg text-lg">At AKG University, sustainable development is defined as equipping students with the necessary knowledge, skills, and values to navigate a world that demands environmental stewardship, social responsibility, and economic viability. Education for Sustainable Development (ESD) is not simply an isolated subject or goal; it is a holistic approach that transcends traditional educational boundaries. The university firmly believes that ESD can only thrive when it is seamlessly integrated into the institution's culture and strategic vision. This includes embedding sustainability principles into teaching practices, aligning educational objectives with employability and international engagement, and fostering connections with the community through hands-on learning experiences.</p>
              </div>
            </div>
          </div>
          <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
            <SideBar title={"About Us"} LinkList={SideBarLink} />
          </div>
        </section>
        <ResearchInfo />
        <ContactIncubator />
      </div>
    </>
  );
}
