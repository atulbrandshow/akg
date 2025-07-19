"use client"

import { useState } from 'react';

const HowToReachUs = () => {
    const [activeOption, setActiveOption] = useState(1);

    const toggleOption = (optionIndex) => {
        setActiveOption(activeOption === optionIndex ? null : optionIndex);
    };

    return (
        <div className="bg-white py-4 px-2 rounded-xl">
            <h2 className='text-4xl font-novaReg mb-2 max-lg:text-3xl max-sm:font-novaSemi text-center'>How to Reach Us ?</h2>
            <div>
                <p className="text-base font-novaReg max-sm:text-sm text-center">
                    Ajay Kumar Garg University (AKGU), 27th KM Milestone, Delhi - Meerut Expy, Ghaziabad, Uttar Pradesh 201015.
                </p>
            </div>

            <div className="mt-5">
                <h2 className="pl-2 text-2xl text-black font-novaSemi mb-5 max-sm:text-xl ">Transport Options to Reach Ajay Kumar Garg University:</h2>

                {/* Option 1: By Road */}
                <div className="border rounded-lg mb-2">
                    <div className="flex justify-between items-center py-1.5 px-3 cursor-pointer" onClick={() => toggleOption(1)}>
                        <h2 className="font-novaReg text-lg max-sm:text-base"><strong className='text-lg max-sm:text-sm uppercase'>Option 1 :-</strong> By Road (Bus/Auto-Rickshaw/Taxi)</h2>
                        <span className={`transform transition-transform ${activeOption === 1 ? 'rotate-180' : ''}`}>
                            ↓
                        </span>
                    </div>
                    {activeOption === 1 && (
                        <div className="py-1.5 px-2 transition-all ease-in-out duration-1000 ">
                            <p className=" mb-2 max-sm:text-sm">AKGU is well-connected by road to nearby areas such as Ghaziabad city center, Delhi, and Noida.</p>
                            <h2 className="mb-2 font-novaSemi text-xl max-sm:text-base">DIRECT CAB to Ajay Kumar Garg University</h2>
                            <ul className="list-disc list-inside px-3">
                                <li className="text-base max-sm:text-sm">
                                    <span className="text-lg font-novaBold max-sm:text-base">From Ghaziabad Bus Stand (Old Bus Stand):</span> You can take an auto-rickshaw or taxi directly to AKGU. The distance is about 12 km, and it takes approximately 30-40 minutes to reach.
                                </li>
                                <div className="mt-2 mb-5 w-1/2 max-sm:w-full bg-red-500 ">
                                    <a href="https://www.google.com/maps/dir/''/Bus+Station+Ghaziabad,+Hapur+Road,+Navyug+Market,+Naya+Ganj,+Ghaziabad,+Uttar+Pradesh+201001/@28.6859113,77.4485222,13.86z/data=!4m23!1m8!3m7!1s0x390cf1b689134b91:0xa96ed66f0c96eb!2sBus+Station+Ghaziabad!8m2!3d28.670256!4d77.431217!15sCjJidXMgc3RhbmQgbmVhciBBamF5IEt1bWFyIEdhcmcgRW5naW5lZXJpbmcgQ29sbGVnZVo0IjJidXMgc3RhbmQgbmVhciBhamF5IGt1bWFyIGdhcmcgZW5naW5lZXJpbmcgY29sbGVnZZIBC2J1c19zdGF0aW9u4AEA!16s%2Fg%2F1tfhdt1r!4m13!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!1m5!1m1!1s0x390cf1b689134b91:0xa96ed66f0c96eb!2m2!1d77.431217!2d28.670256!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                        <img className='w-[100%] object-cover' src="/image/about/BusStand1.png" alt="Map1" />
                                    </a>
                                </div>
                                <li className="text-base max-sm:text-sm">
                                    <span className="text-lg font-novaBold max-sm:text-base">From ISBT Anand Vihar, Delhi:</span> Buses from Anand Vihar to Ghaziabad are available regularly. After reaching Ghaziabad, you can take a local bus, shared auto, or hire a taxi to reach AKGU.
                                </li>
                                <div className="mt-4 mb-10 w-1/2 max-sm:w-full ">
                                    <a className="https://www.google.com/maps/dir/''/Isbt+Anand+Vihar,+Anand+Vihar,+Delhi,+110092/@28.6403612,77.3335071,13.04z/data=!4m14!4m13!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!1m5!1m1!1s0x390cfb39486b2fcb:0x95107699484eb8d!2m2!1d77.3144936!2d28.6476506!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" href="" target="_blank">
                                        <img className='w-[100%]  object-cover' src="/image/about/BusStand2.png" alt="Map1" />
                                    </a>
                                </div>
                                <li className="text-base max-sm:text-sm">
                                    <span className="text-lg font-novaBold max-sm:text-base">From Noida Sector 62 or Sector 18:</span> You can hire a cab or take local buses towards Ghaziabad and then proceed to AKGU.
                                </li>
                                <div className="mt-2 mb-5 w-1/2 max-sm:w-full">
                                    <p className="mb-2">Sector 62 </p>
                                    <a href="https://www.google.com/maps/dir/''/Sector+62,+Noida,+Uttar+Pradesh/@28.6526118,77.3922363,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!1m5!1m1!1s0x390ce5456ef36d9f:0x3b7191b1286136c8!2m2!1d77.3648567!2d28.627981!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                        <img className='w-[100%] object-cover mb-3' src="/image/about/BusStand3.png" alt="Map1" />
                                    </a>
                                    <p className="mb-2"> Sector 18 </p>
                                    <a className="" href="https://www.google.com/maps/dir/''/Sector+18+noida+uttar+pradesh,+J82R%2BWX5,+E+Block,+Sector+56,+Noida,+Uttar+Pradesh+201301/@28.6225115,77.4418651,13.04z/data=!4m14!4m13!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!1m5!1m1!1s0x390ce50030b61b0b:0xe26bc0791f1484dc!2m2!1d77.3425648!2d28.602266!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                        <img className='w-[100%] object-cover' src="/image/about/BusStand4.png" alt="Map1" />
                                    </a>
                                </div>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Option 2: By Metro */}
                <div className="border rounded-lg mb-2">
                    <div className="flex justify-between items-center py-1.5 px-3 cursor-pointer" onClick={() => toggleOption(2)}>
                        <h2 className="font-novaReg text-lg max-sm:text-base"><strong className='text-lg max-sm:text-sm uppercase'>Option 2 :-</strong> By Metro</h2>
                        <span className={`transform transition-transform ${activeOption === 2 ? 'rotate-180' : ''}`}>
                            ↓
                        </span>
                    </div>
                    {activeOption === 2 && (
                        <div className="py-1.5 px-3">
                            <li className="text-lg font-novaReg max-sm:text-base">The nearest metro station to AKGU is Vaishali Metro Station (on the Blue Line), around 15 km from the campus. From Vaishali, you can hire a cab or take a shared auto to reach the university.</li>
                            <div className="mt-2 mb-5 w-1/2 max-sm:w-full">
                                <a className="w-[50%] object-cover" href="https://www.google.com/maps/dir/Vaishali+Metro+Station,+Madan+Mohan+Malviya+Marg,+Gaur+Ganga+2,+Phase+1,+Sector+4,+Vaishali,+Ghaziabad,+Uttar+Pradesh+201010/Ajay+Kumar+Garg+Engineering+College,+Delhi+-+Meerut+Expressway,+Ghaziabad,+Uttar+Pradesh/@28.6578434,77.3401034,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x390cfadbb9d8f833:0xa063c0e377aae595!2m2!1d77.33968!2d28.64984!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                    <img className='w-[100%]  object-cover' src="/image/about/Metro1.png" alt="Map1" />
                                </a>
                            </div>
                            <li className="text-lg font-novaReg max-sm:text-base">Alternatively, you can travel to Ghaziabad Metro Station on the Red Line, then take a cab or shared auto to the university.</li>
                            <div className="mt-2 mb-5 w-1/2 max-sm:w-full">
                                <a className="w-[50%] object-cover" href="https://www.google.com/maps/place/84,+Village+Bajahi+Post+Khajuri+Dist+Sant+Kabir+Nagar,+above+Talab,+Railway+Colony,+Madhopura,+Ghaziabad,+Uttar+Pradesh+201009/@28.6674489,77.5004967,12.83z/data=!4m23!1m16!4m15!1m6!1m2!1s0x390cf0437a9dd911:0xa7052bc649f79007!2sHindon+River,+Sewa+Nagar,+Ghaziabad,+Uttar+Pradesh+201003!2m2!1d77.40637!2d28.673415!1m6!1m2!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2sAjay+Kumar+Garg+Engineering+College,+Delhi+-+Meerut+Expressway,+Ghaziabad,+Uttar+Pradesh!2m2!1d77.5020041!2d28.6756736!3e0!3m5!1s0x390cf13b91816bab:0x8b5c7816602bec2e!8m2!3d28.6536035!4d77.4274923!16s%2Fg%2F11vypdd41d?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                    <img className='w-[100%]  object-cover' src="/image/about/Metro2.png" alt="Map1" />
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                {/* Option 3: By Train */}
                <div className="border rounded-lg mb-2">
                    <div className="flex justify-between items-center py-1.5 px-3 cursor-pointer" onClick={() => toggleOption(3)}>
                        <h2 className="font-novaReg text-lg max-sm:text-base"><strong className='text-lg max-sm:text-sm uppercase'>Option 3 :-</strong> By Train (Nearest Railway Station)</h2>
                        <span className={`transform transition-transform ${activeOption === 3 ? 'rotate-180' : ''}`}>
                            ↓
                        </span>
                    </div>
                    {activeOption === 3 && (
                        <div className="py-1.5 px-3">
                            <li className="text-lg font-novaReg max-sm:text-base">The nearest railway station is Ghaziabad Junction (GZB), which is around 10 km from AKGU. You can take an auto-rickshaw or taxi to reach the university from the station.</li>
                            <div className="mt-2 mb-5 w-1/2 max-sm:w-full">
                                <a className="w-[50%]  object-cover" href="https://www.google.com/maps/dir/Ghaziabad,+Bhur+Bharat+Nagar,+Railway+Colony,+Madhopura,+Ghaziabad,+Uttar+Pradesh+201009/Ajay+Kumar+Garg+Engineering+College,+Delhi+-+Meerut+Expressway,+Ghaziabad,+Uttar+Pradesh/@28.6586456,77.4274073,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x390cf1d263d479d5:0x1ec65e86735c7cf8!2m2!1d77.42744!2d28.6534785!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                    <img className='w-[100%] object-cover' src="/image/about/Map1.png" alt="Map1" />
                                </a>
                            </div>
                            <li className="text-lg font-novaReg max-sm:text-base">Another option is New Delhi Railway Station (NDLS), which is approximately 40 km from the campus. You can take a train to Ghaziabad or a direct cab from New Delhi.</li>
                            <div className="mt-2 mb-5 w-1/2 max-sm:w-full">
                                <a className="w-[50%]  object-cover" href="https://www.google.com/maps/dir/New+Delhi+Railway+Station,+Bhavbhuti+Marg,+Ratan+Lal+Market,+Kamla+Market,+Ajmeri+Gate,+New+Delhi,+Delhi,+110006/Ajay+Kumar+Garg+Engineering+College,+Delhi+-+Meerut+Expressway,+Ghaziabad,+Uttar+Pradesh/@28.6244909,77.3584146,12z/data=!4m14!4m13!1m5!1m1!1s0x390cfd3c113a7b05:0xf8913afee1665916!2m2!1d77.2190894!2d28.6428915!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                    <img className='w-[100%] object-cover' src="/image/about/Map2.png" alt="Map1" />
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                {/* Option 4: By Air */}
                <div className="border rounded-lg mb-2">
                    <div className="flex justify-between items-center py-1.5 px-3 cursor-pointer" onClick={() => toggleOption(4)}>
                        <h2 className="font-novaReg text-lg max-sm:text-base"><strong className='text-lg max-sm:text-sm'>OPTION 4 :-</strong> By Air</h2>
                        <span className={`transform transition-transform ${activeOption === 4 ? 'rotate-180' : ''}`}>
                            ↓
                        </span>
                    </div>
                    {activeOption === 4 && (
                        <div className="py-1.5 px-3">
                            <li className="text-lg font-novaReg max-sm:text-base">The nearest airport is Indira Gandhi International (IGI) Airport, New Delhi, which is approximately 50 km from AKGU. You can hire a cab directly to the university or take the metro to Vaishali/Ghaziabad and then a cab or auto.</li>
                            <div className="mt-2 mb-5 w-1/2 max-sm:w-full">
                                <a className="w-[50%]  object-cover" href="https://www.google.com/maps/dir/Indira+Gandhi+Int'l+Airport,+New+Delhi,+Delhi+110037/Ajay+Kumar+Garg+Engineering+College,+Delhi+-+Meerut+Expressway,+Ghaziabad,+Uttar+Pradesh/@28.5468665,77.2882397,12.04z/data=!4m14!4m13!1m5!1m1!1s0x390d1b85fc2a2d89:0xbef376182c43ed9d!2m2!1d77.0999623!2d28.5561437!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                    <img className='w-[100%] object-cover' src="/image/about/Airport.png" alt="Map1" />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HowToReachUs;
