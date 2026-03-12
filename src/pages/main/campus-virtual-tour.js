import Header from '@/Components/Header';
import CampusVirtualTour from '../pagesComp/CampusVirtualTour';

export default function Home() {
  return (
    <>
      <Header
        title={"Campus Virtual Tour"}
        gradient={"bg-gradient-to-r from-black to-white/"}
        bgKey='BG7'
      />
      <div className="max-w-[1400px] w-full mx-auto py-16 px-5">
        <div className="w-full">
          <CampusVirtualTour />
        </div>
      </div>
    </>
  );
}
