import Breadcrumb from '@/Components/Breadcrumb';
import Description from '@/Components/Description'
import Header from '@/Components/Header';
import Holder from '@/Components/Holder';
import SideBar from '@/Components/SideBar';
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
        <div className="bg-gray-100">
            <Header title={data?.name} gradient={"bg-gradient-to-r from-gray-800 to-transparent"} bgUrl={data?.banner_img} custom={true} subHeading={data?.shortdesc} />
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-5 gap-10 px-5 max-sm:px-2 max-sm:gap-0">
                <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12 space-y-10">
                    {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
                    {data?.description && <Description text={data?.description} />}

                    {data?.extraComponentData && (
                        <div className="space-y-8">
                            {Array.from({ length: 5 }, (_, i) => i + 1).map(
                                (item) =>
                                    data?.extraComponentData?.[`holder${item}`] && (
                                        <div key={`holder-${item}`} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                                            <Holder data={data?.extraComponentData[`holder${item}`]} initialData={data} />
                                        </div>
                                    )
                            )}
                        </div>
                    )}

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