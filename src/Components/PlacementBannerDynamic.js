import { IMAGE_PATH } from '@/configs/config';
import React from 'react'

const PlacementBannerDynamic = ({ data }) => {
    const d = data?.pageData;

    const statsData = [];
    for (let i = 1; i <= 10; i++) {
        const rawValue = d?.[`PDT-${i}`];
        const description = d?.[`PDD-${i}`];

        if (rawValue && description) {
            const match = rawValue.match(/^([\d.]+)\s*([a-zA-Z]+)$/);
            const value = match?.[1] || rawValue;
            const unit = match?.[2] || "";

            statsData.push({
                value,
                unit,
                description,
            });
        }
    }
    return (d?.Placement_Banner || d?.Placement_Company_Logo || d?.Placement_Student_Name || d?.Placement_Company_Name || d?.Placement_Highlight_Title || d?.Placement_Highlight_Desc || statsData.length > 0) && (
        <section>
            <div className='relative bg-cover bg-top h-full lg:h-[70vh]'
                style={{
                    backgroundImage: `url(${IMAGE_PATH + d?.Placement_Banner})`,
                }}
            >
                <div className='hidden lg:block absolute bottom-5 right-24 xl:right-64 2xl:right-[23rem] leading-none rounded-lg bg-white animate-bounce drop-shadow-md px-6 py-4'>
                    <img className='w-40 object-cover' src={IMAGE_PATH + d?.Placement_Company_Logo} alt="Logo" />
                    <h5 className='text-lg font-novaReg'>{d?.Placement_Student_Name}</h5>
                    <small className='text-sm font-novaReg'>{d?.Placement_Company_Name}</small>
                </div>
                <div className='absolute left-0 w-[45%] max-lg:bg-white max-lg:w-full h-full bg-offwhite-gradient z-10'></div>
                <div className='relative max-w-[1500px] mx-auto h-full z-20 px-5 max-sm:px-3 pb-10'>
                    <div className='flex max-lg:flex-col'>
                        <div className='mt-20'>
                            <div className='relative z-20'>
                                <h1 className='text-4xl font-novaReg max-w-md leading-none max-sm:text-center max-sm:text-3xl'>
                                    {d?.Placement_Highlight_Title}
                                </h1>
                                <p className='mt-5 max-w-xl text-lg font-novaReg max-sm:text-center'>
                                    {d?.Placement_Highlight_Desc}
                                </p>
                            </div>
                            <div className='lg:absolute bottom-20 left-5 grid grid-cols-2 mt-8 md:grid-cols-4 gap-5 max-w-7xl lg:w-[60%]'>
                                {statsData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`rounded-2xl p-4 sm:p-8 text-center relative overflow-hidden ${index === 0
                                            ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white"
                                            : "bg-white text-gray-900 shadow-lg border border-gray-100"
                                            }`}
                                    >
                                        {index === 0 && (
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
                                        )}
                                        <div className="relative">
                                            <div
                                                className={`text-4xl font-novaBold mb-2 ${index === 0 ? "text-white" : "text-gray-900"
                                                    }`}
                                            >
                                                {item.value}
                                                <span
                                                    className={`text-lg font-novaReg ${index === 0 ? "text-white/80" : "text-gray-700"
                                                        }`}
                                                >
                                                    {item.unit}
                                                </span>
                                            </div>
                                            <p
                                                className={`text-sm leading-tight font-novaReg ${index === 0 ? "text-blue-100" : "text-gray-600"
                                                    }`}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden relative h-[300px] overflow-hidden max-lg:block'>
                <div className='absolute left-0 w-[45%] h-full bg-offwhite-gradient z-10'></div>
                <img className='w-full h-full object-cover object-top max-sm:object-right' src="/image/AKG_Student.jpg" alt="" />
                <div className='absolute z-30 bottom-5 left-3 leading-none rounded-lg bg-white drop-shadow-md px-6 py-4 max-sm:p-2'>
                    <img className='w-28 object-cover' src={IMAGE_PATH + d?.Placement_Company_Logo} alt="Logo" />
                    <h5 className='text-lg font-novaReg'>{d?.Placement_Student_Name}</h5>
                    <small className='font-novaReg'>{d?.Placement_Company_Name}</small>
                </div>
            </div>
        </section>
    )
}

export default PlacementBannerDynamic