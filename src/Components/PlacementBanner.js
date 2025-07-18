import React from 'react'

const PlacementBanner = () => {
    return (
        <section>
            <div className='relative bg-BG6 bg-cover bg-center min-h-screen'>
                <div className='hidden lg:block absolute z-30 bottom-40 right-[450px] max-2xl:right-[300px] max-xl:right-5  leading-none rounded-lg bg-[#e5e5e5] p-6'>
                    <img className='w-40 object-cover' src="/image/company-logos/Google.png" alt="" />
                    <h5 className='text-lg font-novaReg'>Sakshi Panchal</h5>
                    <small className='text-sm font-novaReg'>Placed in Google</small>
                </div>
                <div className='absolute left-0 w-[45%] max-lg:bg-white max-lg:w-full h-full bg-offwhite-gradient z-10'></div>
                <div className='relative max-w-[1500px] mx-auto h-full z-20 px-5 max-sm:px-3'>
                    <div className='flex max-lg:flex-col'>
                        <div className='mt-20 '>
                            <div className='relative z-20'>
                                <h1 className='text-4xl font-novaReg max-w-md leading-none max-sm:text-center max-sm:text-3xl'>
                                    Enhance Your Expertise with Our Top Specializations
                                </h1>
                                <p className='mt-5 max-w-xl font-novaReg max-sm:text-center'>
                                    Unleash Your Potential: Dive Deep into Your Passions and Master In-Demand Skills with Our Elite Specialization Programs.
                                </p>
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-4  gap-5 mt-8 relative z-20 max-w-7xl'>
                                <div className='p-6 max-sm:p-4 bg-white shadow-cardShadow rounded-lg flex flex-col justify-start max-lg:items-center hover:bg-[#bfd3ff] transition-all duration-300 ease-in-out'>
                                    <div className='my-5 bg-svgElement h-[27px] bg-[0_-99px] w-[26px]'></div>
                                    <span className='font-novaReg leading-none text-start max-lg:text-center'>Satellite <br /> Design</span>
                                </div>
                                <div className='p-6 max-sm:p-4 bg-white shadow-cardShadow rounded-lg flex flex-col justify-start max-lg:items-center hover:bg-[#bfd3ff] transition-all duration-300 ease-in-out'>
                                    <div className='my-5 bg-svgElement h-[34px] w-[22px]'></div>
                                    <span className='font-novaReg leading-none text-start max-lg:text-center'>Digital <br /> Manufacturing</span>
                                </div>
                                <div className='p-6 max-sm:p-4 bg-white shadow-cardShadow rounded-lg flex flex-col justify-start max-lg:items-center hover:bg-[#bfd3ff] transition-all duration-300 ease-in-out'>
                                    <div className='my-5 bg-svgElement h-[24px] w-[24px] bg-[0_-39px]'></div>
                                    <span className='font-novaReg leading-none text-start max-lg:text-center'>Electric <br /> Vehicles</span>
                                </div>
                                <div className='p-6 max-sm:p-4 bg-white shadow-cardShadow rounded-lg flex flex-col justify-start max-lg:items-center hover:bg-[#bfd3ff] transition-all duration-300 ease-in-out'>
                                    <div className='my-5 bg-svgElement h-[26px] w-[27px] bg-[0_-68px]'></div>
                                    <span className='font-novaReg leading-none text-start max-lg:text-center'>Intelligent <br /> Transport System</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-20 max-w-2xl max-lg:max-w-5xl'>
                        <div className='relative z-20'>
                            <h1 className='text-4xl font-novaReg max-w-md leading-none max-sm:text-center max-sm:text-3xl'>
                                AKG University Engineering Placement Highlights
                            </h1>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-8 relative z-20'>
                            <div className='p-5 shadow-cardShadow rounded-lg flex flex-col justify-center max-sm:items-center bg-[#29376d] text-white'>
                                <h2 className='font-novaReg text-4xl'>1.13<small className='text-base'>CR</small></h2>
                                <span className='mt-1 text-xs leading-none text-start max-sm:text-center'>International Highest Package offered</span>
                            </div>
                            <div className='p-5 bg-white shadow-cardShadow rounded-lg flex flex-col max-sm:items-center justify-center'>
                                <h2 className='font-novaReg text-4xl'>33.80</h2>
                                <span className='mt-1 text-xs leading-none text-start max-sm:text-center'><strong>LPA</strong> National Highest Package offered</span>
                            </div>
                            <div className='p-5 bg-white shadow-cardShadow rounded-lg flex flex-col max-sm:items-center justify-center'>
                                <h2 className='font-novaReg text-4xl'>11<small className='text-base'>LPA</small></h2>
                                <span className='mt-1 text-xs leading-none text-start max-sm:text-center'>Offered to Approx 306 Students</span>
                            </div>
                            <div className='p-5 bg-white shadow-cardShadow rounded-lg flex flex-col max-sm:items-center justify-center'>
                                <h2 className='font-novaReg text-4xl'>6<small className='text-base'>LPA</small></h2>
                                <span className='mt-1 text-xs leading-none text-start max-sm:text-center'>Offered to 1042 Students</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden relative h-[250px] overflow-hidden max-lg:block'>
                <img className='w-full h-full object-cover object-top max-sm:object-right' src="/image/AKG_Student.jpg" alt="" />
                <div className='absolute bottom-3 left-3 leading-none rounded-lg bg-[#eeeeee] p-6 max-sm:p-2'>
                    <img className='w-28 object-cover' src="/image/company-logos/Google.png" alt="" />
                    <h5 className='text-lg font-novaReg'>Sakshi Panchal</h5>
                    <small className='font-novaReg'>Placed in Google</small>
                </div>
            </div>
        </section>
    )
}

export default PlacementBanner