"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowToReachUs = () => {
  const [activeOption, setActiveOption] = useState(1);
  
  // Refs for GSAP animations
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const addressRef = useRef(null);
  const subtitleRef = useRef(null);
  const optionsRef = useRef([]);

  const toggleOption = (optionIndex) => {
    setActiveOption(activeOption === optionIndex ? null : optionIndex);
  };

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Address animation
      gsap.fromTo(
        addressRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: addressRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Options animations
      optionsRef.current.forEach((option, index) => {
        if (option) {
          gsap.fromTo(
            option,
            { y: 60, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: option,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-white/90 backdrop-blur-sm py-8 px-6 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full translate-y-24 -translate-x-24"></div>
      
      {/* AKG Logo Vector Background */}
      <div className="absolute top-4 right-4 opacity-10">
        <img
          src="/image/akgec-logo.svg"
          alt="AKG Logo"
          className="w-32 h-32 object-contain"
        />
      </div>
      <div className="absolute bottom-4 left-4 opacity-10">
        <img
          src="/image/akgec-logo.svg"
          alt="AKG Logo"
          className="w-24 h-24 object-contain rotate-45"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-secondary rounded-full animate-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-40 right-32 w-4 h-4 bg-secondary/70 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 right-20 w-2 h-2 bg-secondary/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 ref={titleRef} className="text-5xl font-novaSemi mb-4 max-lg:text-4xl max-sm:text-3xl text-primary">
            How to Reach Us ?
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
          <div ref={addressRef} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
              <h3 className="text-xl font-novaSemi text-primary">University Address</h3>
            </div>
            <p className="text-lg font-novaReg max-sm:text-base text-gray-700 leading-relaxed">
              Ajay Kumar Garg University (AKGU), 27th KM Milestone, Delhi - Meerut
              Expy, Ghaziabad, Uttar Pradesh 201015.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 ref={subtitleRef} className="text-3xl text-primary font-novaSemi mb-8 max-sm:text-2xl text-center">
            Transport Options to Reach Ajay Kumar Garg University
          </h2>

          {/* Option 1: By Road */}
          <div ref={(el) => (optionsRef.current[0] = el)} className={`border-2 rounded-2xl mb-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
            activeOption === 1 ? "border-secondary bg-primary/5" : "border-gray-200 bg-white hover:border-primary/30"
          }`}>
            <div
              className="flex justify-between items-center py-4 px-6 cursor-pointer hover:bg-primary/5 transition-colors duration-300 relative"
              onClick={() => toggleOption(1)}
            >
              {/* Card Background Pattern */}
              <div className="absolute top-1 right-1 w-6 h-6 opacity-10">
                <img
                  src="/image/akgec-logo.svg"
                  alt="AKG Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h2 className="font-novaSemi text-xl max-sm:text-lg text-primary">
                <span className="bg-secondary text-black px-3 py-1 rounded-full text-sm font-novaBold mr-3">
                  OPTION 1
                </span>
                By Road (Bus/Auto-Rickshaw/Taxi)
              </h2>
              <span
                className={`transform transition-transform duration-300 text-2xl text-secondary ${
                  activeOption === 1 ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </div>
            {activeOption === 1 && (
              <div className="py-6 px-6 bg-white/80 backdrop-blur-sm border-t border-gray-200 relative">
                {/* Content Background Pattern */}
                <div className="absolute bottom-2 right-2 w-12 h-12 opacity-10">
                  <img
                    src="/image/akgec-logo.svg"
                    alt="AKG Logo"
                    className="w-full h-full object-contain rotate-12"
                  />
                </div>
                
                <div className="bg-primary/10 p-4 rounded-xl mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    AKGU is well-connected by road to nearby areas such as Ghaziabad
                    city center, Delhi, and Noida.
                  </p>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                  <h3 className="font-novaSemi text-xl max-sm:text-lg text-primary">
                    DIRECT CAB to Ajay Kumar Garg University
                  </h3>
                </div>
              <ul className="list-disc list-inside px-3">
                <li className="text-base max-sm:text-sm">
                  <span className="text-lg font-novaBold max-sm:text-base">
                    From Ghaziabad Bus Stand (Old Bus Stand):
                  </span>{" "}
                  You can take an auto-rickshaw or taxi directly to AKGU. The
                  distance is about 12 km, and it takes approximately 30-40
                  minutes to reach.
                </li>
                <div className="mt-4 mb-6 w-full md:w-2/3 lg:w-1/2">
                  <a
                    href="https://www.google.com/maps/dir/''/Bus+Station+Ghaziabad,+Hapur+Road,+Navyug+Market,+Naya+Ganj,+Ghaziabad,+Uttar+Pradesh+201001/@28.6859113,77.4485222,13.86z/data=!4m23!1m8!3m7!1s0x390cf1b689134b91:0xa96ed66f0c96eb!2sBus+Station+Ghaziabad!8m2!3d28.670256!4d77.431217!15sCjJidXMgc3RhbmQgbmVhciBBamF5IEt1bWFyIEdhcmcgRW5naW5lZXJpbmcgQ29sbGVnZVo0IjJidXMgc3RhbmQgbmVhciBhamF5IGt1bWFyIGdhcmcgZW5naW5lZXJpbmcgY29sbGVnZZIBC2J1c19zdGF0aW9u4AEA!16s%2Fg%2F1tfhdt1r!4m13!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!1m5!1m1!1s0x390cf1b689134b91:0xa96ed66f0c96eb!2m2!1d77.431217!2d28.670256!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="block hover:transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      className="w-full object-cover rounded-xl shadow-lg border-2 border-primary/20 hover:border-secondary transition-colors duration-300"
                      src="/image/about/BusStand1.png"
                      alt="Map1"
                    />
                  </a>
                </div>
                <li className="text-base max-sm:text-sm">
                  <span className="text-lg font-novaBold max-sm:text-base">
                    From ISBT Anand Vihar, Delhi:
                  </span>{" "}
                  Buses from Anand Vihar to Ghaziabad are available regularly.
                  After reaching Ghaziabad, you can take a local bus, shared
                  auto, or hire a taxi to reach AKGU.
                </li>
                <div className="mt-4 mb-10 w-1/2 max-sm:w-full ">
                  <a
                    className="https://www.google.com/maps/dir/''/Isbt+Anand+Vihar,+Anand+Vihar,+Delhi,+110092/@28.6403612,77.3335071,13.04z/data=!4m14!4m13!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!1m5!1m1!1s0x390cfb39486b2fcb:0x95107699484eb8d!2m2!1d77.3144936!2d28.6476506!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                    href=""
                    target="_blank"
                  >
                    <img
                      className="w-[100%]  object-cover"
                      src="/image/about/BusStand2.png"
                      alt="Map1"
                    />
                  </a>
                </div>
                <li className="text-base max-sm:text-sm">
                  <span className="text-lg font-novaBold max-sm:text-base">
                    From Noida Sector 62 or Sector 18:
                  </span>{" "}
                  You can hire a cab or take local buses towards Ghaziabad and
                  then proceed to AKGU.
                </li>
                <div className="mt-2 mb-5 w-1/2 max-sm:w-full">
                  <p className="mb-2">Sector 62 </p>
                  <a
                    href="https://www.google.com/maps/dir/''/Sector+62,+Noida,+Uttar+Pradesh/@28.6526118,77.3922363,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!1m5!1m1!1s0x390ce5456ef36d9f:0x3b7191b1286136c8!2m2!1d77.3648567!2d28.627981!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] object-cover mb-3"
                      src="/image/about/BusStand3.png"
                      alt="Map1"
                    />
                  </a>
                  <p className="mb-2"> Sector 18 </p>
                  <a
                    className=""
                    href="https://www.google.com/maps/dir/''/Sector+18+noida+uttar+pradesh,+J82R%2BWX5,+E+Block,+Sector+56,+Noida,+Uttar+Pradesh+201301/@28.6225115,77.4418651,13.04z/data=!4m14!4m13!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!1m5!1m1!1s0x390ce50030b61b0b:0xe26bc0791f1484dc!2m2!1d77.3425648!2d28.602266!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] object-cover"
                      src="/image/about/BusStand4.png"
                      alt="Map1"
                    />
                  </a>
                </div>
              </ul>
            </div>
          )}
        </div>

          {/* Option 2: By Metro */}
          <div ref={(el) => (optionsRef.current[1] = el)} className={`border-2 rounded-2xl mb-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
            activeOption === 2 ? "border-secondary bg-primary/5" : "border-gray-200 bg-white hover:border-primary/30"
          }`}>
            <div
              className="flex justify-between items-center py-4 px-6 cursor-pointer hover:bg-primary/5 transition-colors duration-300 relative"
              onClick={() => toggleOption(2)}
            >
              {/* Card Background Pattern */}
              <div className="absolute top-1 right-1 w-6 h-6 opacity-10">
                <img
                  src="/image/akgec-logo.svg"
                  alt="AKG Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h2 className="font-novaSemi text-xl max-sm:text-lg text-primary">
                <span className="bg-secondary text-black px-3 py-1 rounded-full text-sm font-novaBold mr-3">
                  OPTION 2
                </span>
                By Metro
              </h2>
              <span
                className={`transform transition-transform duration-300 text-2xl text-secondary ${
                  activeOption === 2 ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </div>
          {activeOption === 2 && (
            <div className="py-1.5 px-3">
              <li className="text-lg font-novaReg max-sm:text-base">
                The nearest metro station to AKGU is Vaishali Metro Station (on
                the Blue Line), around 15 km from the campus. From Vaishali, you
                can hire a cab or take a shared auto to reach the university.
              </li>
              <div className="mt-2 mb-5 w-1/2 max-sm:w-full">
                <a
                  className="w-[50%] object-cover"
                  href="https://www.google.com/maps/dir/Vaishali+Metro+Station,+Madan+Mohan+Malviya+Marg,+Gaur+Ganga+2,+Phase+1,+Sector+4,+Vaishali,+Ghaziabad,+Uttar+Pradesh+201010/Ajay+Kumar+Garg+Engineering+College,+Delhi+-+Meerut+Expressway,+Ghaziabad,+Uttar+Pradesh/@28.6578434,77.3401034,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x390cfadbb9d8f833:0xa063c0e377aae595!2m2!1d77.33968!2d28.64984!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <img
                    className="w-[100%]  object-cover"
                    src="/image/about/Metro1.png"
                    alt="Map1"
                  />
                </a>
              </div>
              <li className="text-lg font-novaReg max-sm:text-base">
                Alternatively, you can travel to Ghaziabad Metro Station on the
                Red Line, then take a cab or shared auto to the university.
              </li>
              <div className="mt-2 mb-5 w-1/2 max-sm:w-full">
                <a
                  className="w-[50%] object-cover"
                  href="https://www.google.com/maps/place/84,+Village+Bajahi+Post+Khajuri+Dist+Sant+Kabir+Nagar,+above+Talab,+Railway+Colony,+Madhopura,+Ghaziabad,+Uttar+Pradesh+201009/@28.6674489,77.5004967,12.83z/data=!4m23!1m16!4m15!1m6!1m2!1s0x390cf0437a9dd911:0xa7052bc649f79007!2sHindon+River,+Sewa+Nagar,+Ghaziabad,+Uttar+Pradesh+201003!2m2!1d77.40637!2d28.673415!1m6!1m2!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2sAjay+Kumar+Garg+Engineering+College,+Delhi+-+Meerut+Expressway,+Ghaziabad,+Uttar+Pradesh!2m2!1d77.5020041!2d28.6756736!3e0!3m5!1s0x390cf13b91816bab:0x8b5c7816602bec2e!8m2!3d28.6536035!4d77.4274923!16s%2Fg%2F11vypdd41d?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <img
                    className="w-[100%]  object-cover"
                    src="/image/about/Metro2.png"
                    alt="Map1"
                  />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Option 3: By Train */}
        <div className="border rounded-lg mb-2">
          <div
            className="flex justify-between items-center py-1.5 px-3 cursor-pointer"
            onClick={() => toggleOption(3)}
          >
            <h2 className="font-novaReg text-lg max-sm:text-base">
              <strong className="text-lg max-sm:text-sm uppercase">
                Option 3 :-
              </strong>{" "}
              By Train (Nearest Railway Station)
            </h2>
            <span
              className={`transform transition-transform ${
                activeOption === 3 ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </div>
          {activeOption === 3 && (
            <div className="py-1.5 px-3">
              <li className="text-lg font-novaReg max-sm:text-base">
                The nearest railway station is Ghaziabad Junction (GZB), which
                is around 10 km from AKGU. You can take an auto-rickshaw or taxi
                to reach the university from the station.
              </li>
              <div className="mt-2 mb-5 w-1/2 max-sm:w-full">
                <a
                  className="w-[50%]  object-cover"
                  href="https://www.google.com/maps/dir/Ghaziabad,+Bhur+Bharat+Nagar,+Railway+Colony,+Madhopura,+Ghaziabad,+Uttar+Pradesh+201009/Ajay+Kumar+Garg+Engineering+College,+Delhi+-+Meerut+Expressway,+Ghaziabad,+Uttar+Pradesh/@28.6586456,77.4274073,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x390cf1d263d479d5:0x1ec65e86735c7cf8!2m2!1d77.42744!2d28.6534785!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <img
                    className="w-[100%] object-cover"
                    src="/image/about/Map1.png"
                    alt="Map1"
                  />
                </a>
              </div>
              <li className="text-lg font-novaReg max-sm:text-base">
                Another option is New Delhi Railway Station (NDLS), which is
                approximately 40 km from the campus. You can take a train to
                Ghaziabad or a direct cab from New Delhi.
              </li>
              <div className="mt-2 mb-5 w-1/2 max-sm:w-full">
                <a
                  className="w-[50%]  object-cover"
                  href="https://www.google.com/maps/dir/New+Delhi+Railway+Station,+Bhavbhuti+Marg,+Ratan+Lal+Market,+Kamla+Market,+Ajmeri+Gate,+New+Delhi,+Delhi,+110006/Ajay+Kumar+Garg+Engineering+College,+Delhi+-+Meerut+Expressway,+Ghaziabad,+Uttar+Pradesh/@28.6244909,77.3584146,12z/data=!4m14!4m13!1m5!1m1!1s0x390cfd3c113a7b05:0xf8913afee1665916!2m2!1d77.2190894!2d28.6428915!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <img
                    className="w-[100%] object-cover"
                    src="/image/about/Map2.png"
                    alt="Map1"
                  />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Option 4: By Air */}
        <div className="border rounded-lg mb-2">
          <div
            className="flex justify-between items-center py-1.5 px-3 cursor-pointer"
            onClick={() => toggleOption(4)}
          >
            <h2 className="font-novaReg text-lg max-sm:text-base">
              <strong className="text-lg max-sm:text-sm">OPTION 4 :-</strong> By
              Air
            </h2>
            <span
              className={`transform transition-transform ${
                activeOption === 4 ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </div>
          {activeOption === 4 && (
            <div className="py-1.5 px-3">
              <li className="text-lg font-novaReg max-sm:text-base">
                The nearest airport is Indira Gandhi International (IGI)
                Airport, New Delhi, which is approximately 50 km from AKGU. You
                can hire a cab directly to the university or take the metro to
                Vaishali/Ghaziabad and then a cab or auto.
              </li>
              <div className="mt-2 mb-5 w-1/2 max-sm:w-full">
                <a
                  className="w-[50%]  object-cover"
                  href="https://www.google.com/maps/dir/Indira+Gandhi+Int'l+Airport,+New+Delhi,+Delhi+110037/Ajay+Kumar+Garg+Engineering+College,+Delhi+-+Meerut+Expressway,+Ghaziabad,+Uttar+Pradesh/@28.5468665,77.2882397,12.04z/data=!4m14!4m13!1m5!1m1!1s0x390d1b85fc2a2d89:0xbef376182c43ed9d!2m2!1d77.0999623!2d28.5561437!1m5!1m1!1s0x390cf30885b1e2a5:0x9983675e24c6638b!2m2!1d77.5020041!2d28.6756736!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <img
                    className="w-[100%] object-cover"
                    src="/image/about/Airport.png"
                    alt="Map1"
                  />
                </a>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToReachUs;
