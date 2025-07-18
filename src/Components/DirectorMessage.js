import React from 'react'

const DirectorMessage = () => {
    return (
        <section className='max-w-7xl mx-auto'>
            <div className="grid grid-cols-8 gap-5 mb-20 max-md:border-t-2 max-md:border-t-gray-200 pt-5">
                <div className="col-span-3 max-md:col-span-8">
                    <div className="relative">
                        <img
                            src="/image/leadership/Director_AKGEC.webp"
                            alt="director-general"
                            className="w-full aspect-square object-cover h-96"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-white/0 pt-16 p-4">
                            <b className="font-novaBold text-lg text-white">Dr. Hemant Ahuja</b>
                            <small className="block text-white text-[11px] -mt-1">Director, AKGEC</small>
                        </div>
                    </div>
                </div>
                <div className="relative col-span-5 max-md:col-span-8 h-full sm:max-h-[550px] text-sm font-novaReg scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 text-justify px-3 sm:px-0 sm:pr-5">
                    <p className="leading-5">
                        Graduating with honors in Electrical Engineering from Kurukshetra University in 2001, Dr. Ahuja's journey continued with an M.Tech. in Energy and Environmental Management from the Indian Institute of Technology, Delhi, in 2008. His exceptional academic prowess was recognized with the Prof. O.P. Gupta Gold Medal, an accolade bestowed upon him for achieving the highest CGPA during his M.Tech. program. Dr. Ahuja's academic pursuits culminated in a PhD from IIT Delhi in 2013, cementing his reputation as a dedicated scholar.
                    </p>
                    <p className="mt-4 leading-5">
                        His expertise lies in the domains of Electrical Machines, Power Electronics, and Wind Energy Conversion Systems. Dr. Ahuja's scholarly contributions extend across more than 50 publications in prestigious international journals and conferences. His commitment to innovation is evident in his patent achievements, with several patents published under his name. Notably, he has successfully led two research projects funded under TEQIP-III, underscoring his proactive engagement in advancing knowledge.
                    </p>
                    <p className="mt-4 leading-5">
                        As a valued member of influential professional bodies such as IEEE, PES, ISTE, and IEI, Dr. Ahuja actively contributes to the growth and development of his field. His collaboration with the IEI-Ghaziabad local center as an eminent engineer reflects his dedication to community-driven initiatives. Moreover, Dr. Ahuja plays a pivotal role in shaping Electrical Engineering activities at the Abdul Kalam Technical University level, serving as a member of the Board of Studies for Electrical Engineering at AKTU.
                    </p>
                    <p className="mt-4  leading-5">
                        Dr. Hemant Ahuja's multifaceted expertise, dedication to academia, and active involvement in research and collaboration position him as a visionary leader at the helm of Ajay Kumar Garg University, driving excellence and innovation in engineering education.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default DirectorMessage