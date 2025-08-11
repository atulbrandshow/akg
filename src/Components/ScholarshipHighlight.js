import React from 'react'

const ScholarshipHighlight = ({heading, desc, pgSub, ugSub}) => {
    return (
        <section className="relative grid grid-cols-2 max-xl:grid-cols-1">
            <div className=" bg-no-repeat bg-cover h-full bg-BG14 bg-blue-700 bg-blend-multiply">
                <div className="flex justify-center items-center max-lg:justify-start max-lg:items-start max-lg:mt-10 max-lg:ml-10  h-full">
                    <div className="max-xl:flex max-xl:items-end gap-10 py-10 max-sm:flex-col max-sm:items-start">
                        <div>
                            <h2 className="text-white text-5xl max-md:text-4xl leading-12 uppercase tracking-wide font-normal">
                                {heading}
                            </h2>
                            <p className="text-white text-base leading-6 my-3">
                                {desc} <br />
                                Year 2023-2024
                            </p>
                        </div>
                        <a
                            href=""
                            className="border bg-white text-black text-center inline-block rounded-md uppercase tracking-wide py-[14px] px-6 text-sm hover:bg-yellow-500 hover:text-white transition ease-in-out duration-200"
                        >
                            Read Policy
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex max-sm:flex-wrap justify-start max-xl:justify-center items-start gap-5 mx-10 max-sm:mx-0 max-sm:gap-3 mt-10 ">
                <div className=" ">
                    <div className=" bg-[#F7F7F7] border w-full border-gray-300 shadow-lg">
                        <div className=" text-center py-3">
                            <img
                                src="/image/akgec-logo.webp"
                                alt="logo"
                                className="inline-block w-20 mb-2"
                            />
                            <span className="block w-fit mx-auto text-[16px] uppercase text-center py-0 px-2.5 mt-1.5">
                               {ugSub}
                            </span>
                            <p className="text-sm mt-2 font-novaReg">AIR in JEE Examination</p>
                            <p className="text-lg font-novaSemi">Scholarship</p>
                        </div>
                        <div className="py-5 px-16 max-lg:px-10">
                            <ul className="list-none pl-0 space-y-6 max-lg:space-y-3 font-novaReg">
                                <li className="relative text-sm leading-[16px] mb-3">
                                    1 – 10,000:
                                    <b>
                                        <br />
                                        Equivalent to 100% of Tuition Fees
                                    </b>
                                </li>
                                <li className="relative text-sm leading-[16px] mb-3">
                                    10,001 – 15,000:
                                    <b>
                                        <br />
                                        Equivalent to 75% of Tuition Fees
                                    </b>
                                </li>
                                <li className="relative text-sm leading-[16px] mb-3">
                                    15,001 – 20,000:
                                    <b>
                                        <br />
                                        Equivalent to 50% of Tuition Fees
                                    </b>
                                </li>
                                <li className="relative text-sm leading-[16px] mb-3">
                                    20,001 – 25,000:
                                    <b>
                                        <br />
                                        Equivalent to 25% of Tuition Fees
                                    </b>
                                </li>
                            </ul>
                        </div>
                        <div className="py-5 px-10">
                            <a
                                href=""
                                className="font-novaBold border bg-btn-gradient animate-gradient text-center inline-block rounded-md uppercase tracking-wide py-3 w-full text-sm text-white transition ease-in-out duration-200"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" ">
                    <div className="bg-[#F7F7F7] border w-full border-gray-300 shadow-lg ">
                        <div className=" text-center py-3">
                            <img
                                src="/image/akgec-logo.webp"
                                alt="logo"
                                className="inline-block w-20 mb-2"
                            />
                            <span className="block w-fit mx-auto text-[16px] uppercase text-center py-0 px-2.5 mt-1.5">
                                {pgSub}
                            </span>
                            <p className="text-sm mt-2 font-novaReg">AIR in CUET PG Examination</p>
                            <p className="text-lg font-novaSemi">Scholarship</p>
                        </div>
                        <div className="py-5 px-16 max-lg:px-10">
                            <ul className="list-none pl-0 space-y-6 max-lg:space-y-3 font-novaReg">
                                <li className="relative text-sm leading-[16px] mb-3">
                                    1 – 100:
                                    <br />
                                    <b>Equivalent to 100% of Tuition Fees</b>
                                </li>
                                <li className="relative text-sm leading-[16px] mb-3">
                                    101 – 250:
                                    <b>
                                        <br />
                                        Equivalent to 75% of Tuition Fees
                                    </b>
                                </li>
                                <li className="relative text-sm leading-[16px] mb-3">
                                    251 – 500:
                                    <b>
                                        <br />
                                        Equivalent to 50% of Tuition Fees
                                    </b>
                                </li>
                                <li className="relative text-sm leading-[16px] mb-3">
                                    501 – 750:
                                    <b>
                                        <br />
                                        Equivalent to 25% of Tuition Fees
                                    </b>
                                </li>
                            </ul>
                        </div>
                        <div className="py-5 px-10">
                            <a
                                href=""
                                className="border font-novaBold bg-btn-gradient animate-gradient w-full text-center inline-block rounded-md uppercase tracking-wide py-3 px-6 text-sm text-white transition ease-in-out duration-200"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScholarshipHighlight