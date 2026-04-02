import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import OurIdentity from "../pagesComp/OurIdentity";
import Breadcrumb from "@/Components/Breadcrumb";

const Button = {
  name: "Apply Now",
  link: "/apply",
};

const SideBarLink = [
  { name: "Our Legacy", link: "about/our-identity" },
  { name: "Leadership", link: "about/leadership" },
  { name: "Governance", link: "about/governance" },
  {
    name: "Recognition and Approvals",
    link: "about/recognitions-and-approvals",
  },
  { name: "Awards and Rankings", link: "about/awards-and-rankings" },
  {
    name: "Institution Social Responsibility",
    link: "about/institution-social-responsibility",
  },
];

export const Home = ({ data }) => {
  return (
    <div className="bg-gray-100">
      <Header
        title={"Our Legacy: The Legacy of AKG University"}
        Button={Button}
        // bgKey="BG-Building-2"
        bgUrl={"/image/about/over-view-latest-identity.webp"}
        custom={true}
        height="!h-[85vh] !justify-center"
        gradient={"bg-gradient-to-r from-brand-blue/60 via-brand-blue/40 to-brand-blue/20"}
        position="center"
      />
      {/* <section className="max-w-[1400px] mx-auto px-5 max-sm:px-2 py-5">
        {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
      </section> */}
      <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-5 max-sm:py-5 gap-5 px-5 max-sm:px-2 max-sm:gap-0">
        <div className="col-span-12 max-xl:col-span-12 max-lg:col-span-12">
          <OurIdentity />
        </div>
        {/* <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12 sticky top-32 self-start">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div> */}
      </section>
    </div>
  );
};

export default Home;
