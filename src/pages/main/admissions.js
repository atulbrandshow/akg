import Header from '@/Components/Header';
import Admissions from '../pagesComp/Admissions';

const Button = {
  name: "Apply Now",
  Link: "",
};


export default function Home() {
  return (
    <>
      <Header Button={Button} position='center' title={<span className="text-4xl md:text-5xl lg:text-6xl pt-20">Discover First<br />Decide Later</span>} subHeading={<>Turning Dreams into Reality With <strong> Special Scholarship Program at AKG University</strong></>} gradient={"bg-gradient-to-r from-black to-black/20"} bgKey='BG1'/>
      <Admissions />
    </>
  );
}
