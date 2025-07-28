import Banner from '@/Components/Banner';
import Breadcrumb from '@/Components/Breadcrumb';
import Description from '@/Components/Description'
import Header from '@/Components/Header';
import Holder from '@/Components/Holder';
import ImageGallery from '@/Components/ImageGallery';
import ImageSlider from '@/Components/ImageSlider';
import ShortDescription from '@/Components/ShortDescription';
import SideBar from '@/Components/SideBar';
import Title from '@/Components/Title';
import React from 'react'
const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
]

function Default({ data }) {
    return (
        // <div className='max-w-7xl mx-auto h-max p-10 flex flex-col gap-5'>
        //     {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
        //     {/* {data?.banner_img && <Banner backgroundImage={data?.banner_img} height='small' overlay={false} overlayOpacity='zero' className='rounded-lg' />} */}
        //     {data?.banner_img &&  <Header title={data?.name} gradient={"bg-gradient-to-r from-gray-900 to-transparent"} bg={data?.banner_img} /> }
        //     {data?.extraComponentData && (
        //         <div className="space-y-8">
        //             {Array.from({ length: 5 }, (_, i) => i + 1).map(
        //                 (item, index) =>
        //                     data?.extraComponentData?.[`holder${index}`] && (
        //                         <div key={`holder-${index}`} className="bg-white rounded-2xl shadow-sm overflow-hidden">
        //                             <Holder data={data?.extraComponentData[`holder${index}`]} />
        //                         </div>
        //                     ),
        //             )}
        //         </div>
        //     )}
        //     {data?.name && <Title text={data?.name} level='h1' gradient align="center" />}
        //     {/* Extra Components */}
        // {data?.extraComponentData && (
        //     <div className="space-y-8">
        //         {Array.from({ length: 5 }, (_, i) => i + 6).map(
        //             (item, index) =>
        //                 data?.extraComponentData?.[`holder${item}`] && (
        //                     <div key={`holder-${item}`} className="bg-white rounded-2xl shadow-sm overflow-hidden">
        //                         <Holder data={data?.extraComponentData[`holder${item}`]} />
        //                     </div>
        //                 )
        //         )}
        //     </div>
        // )}
        //     {data?.galleryimg && <ImageSlider images={data?.galleryimg} aspectRatio='cinema' showDots={false} className='max-w-7xl mx-auto' />}
        //     {data?.galleryimg && <ImageGallery images={data?.galleryimg} aspectRatio='square' showDots={false} className='max-w-7xl mx-auto' />}
        //     {data?.shortdesc && <ShortDescription text={data?.shortdesc} allowHTML={true} />}
        //     {data?.description && <Description text={data?.description} />}
        //     {data?.extraComponentData && (
        //         <div className="">
        //             {Array.from({ length: 20 }, (_, i) => i + 11).map(
        //                 (item) =>
        //                     data?.extraComponentData?.[`holder${item}`] && (
        //                         <div key={`holder-${item}`} className="bg-white rounded-2xl shadow-sm overflow-hidden">
        //                             <Holder data={data?.extraComponentData[`holder${item}`]} />
        //                         </div>
        //                     )
        //             )}
        //         </div>
        //     )}
        // </div>
        <div className="bg-gray-100">
            <Header title={data?.name} gradient={"bg-gradient-to-r from-blue-500 to-transparent"} bgUrl={data?.banner_img} custom={true} />
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-5 gap-10 px-5 max-sm:px-2 max-sm:gap-0">
                <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12 space-y-10">
                    {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
                    {data?.featured_img && <Banner backgroundImage={data?.featured_img} height='small' overlay={false} overlayOpacity='zero' className='rounded-lg' />}
                    {data?.extraComponentData && (
                        <div className="space-y-8">
                            {Array.from({ length: 5 }, (_, i) => i + 1).map(
                                (item, index) =>
                                    data?.extraComponentData?.[`holder${index}`] && (
                                        <div key={`holder-${index}`} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                                            <Holder data={data?.extraComponentData[`holder${index}`]} initialData={data} />
                                        </div>
                                    ),
                            )}
                        </div>
                    )}
                    {data?.extraComponentData && (
                        <div className="space-y-8">
                            {Array.from({ length: 5 }, (_, i) => i + 6).map(
                                (item, index) =>
                                    data?.extraComponentData?.[`holder${item}`] && (
                                        <div key={`holder-${item}`} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                                            <Holder data={data?.extraComponentData[`holder${item}`]} initialData={data} />
                                        </div>
                                    )
                            )}
                        </div>
                    )}
                    {data?.shortdesc && <ShortDescription text={data?.shortdesc} allowHTML={true} />}
                    {data?.description && <Description text={data?.description} />}
                    {data?.extraComponentData && (
                        <div className="space-y-8">
                            {Array.from({ length: 20 }, (_, i) => i + 11).map(
                                (item) =>
                                    data?.extraComponentData?.[`holder${item}`] && (
                                        <div key={`holder-${item}`} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                                            <Holder data={data?.extraComponentData[`holder${item}`]} initialData={data} />
                                        </div>
                                    )
                            )}
                        </div>
                    )}
                </div>
                <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
                    <SideBar title={"About Us"} LinkList={SideBarLink} />
                </div>
            </section>
        </div>
    )
}

export default Default