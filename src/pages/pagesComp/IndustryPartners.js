import { ChevronLeft, ChevronRight, Handshake } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function IndustryPartners() {
  const container = useRef();
  const partners = [
    // Row 1
    [
      { name: "KUKA", logo: "KUKA" },
      { name: "Fronius", logo: "fronius" },
      { name: "Rexroth", logo: "rexroth", subtitle: "Bosch Company" },
      { name: "n1", logo: "n1" },
    ],
    // Row 2
    [
      { name: "SIEMENS", logo: "SIEMENS" },
      { name: "Mitsubishi", logo: "MITSUBISHI ELECTRIC" },
      { name: "Stratasys", logo: "stratasys" },
      { name: "Messer", logo: "MESSER" },
    ],
    // Row 3
    [
      { name: "TÜV Rheinland", logo: "TÜV Rheinland" },
      { type: "icon" },
      { name: "IPG Photonics", logo: "IPG", subtitle: "PHOTONICS" },
    ],
    // Row 4
    [
      { name: "ZEISS", logo: "ZEISS" },
      { name: "Bosch", logo: "BOSCH" },
      { name: "Servax", logo: "SERVAX" },
      { name: "Pepperl+Fuchs", logo: "Pepperl+Fuchs" },
    ],
    // Row 5
    [
      { name: "Schunk", logo: "SCHUNK" },
      { name: "Jamatics", logo: "JAMATICS" },
      { name: "FAB", logo: "FAB", subtitle: "Automazione" },
      { name: "Formulacion", logo: "Formulacion y Analisis" },
    ],
  ];

  useGSAP(
    () => {
      // Header animation
      gsap.from(".partner-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".partner-header",
          start: "top 85%",
        },
      });

      // Title animation
      gsap.from(".partner-title", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".partner-title",
          start: "top 85%",
        },
      });

      // Rows and cards
      const rows = gsap.utils.toArray(".partner-row");
      rows.forEach((row, i) => {
        gsap.from(row.querySelectorAll(".partner-card"), {
          y: 50,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
          },
        });
      });
    },
    { scope: container }
  );

  const ArrowLeft = () => (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
      <ChevronLeft
        className="w-5 h-5 text-blue-700 fill-blue-700"
        strokeWidth={3}
      />
    </div>
  );

  const ArrowRight = () => (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
      <ChevronRight
        className="w-5 h-5 text-blue-700 fill-blue-700"
        strokeWidth={3}
      />
    </div>
  );

  return (
    <div
      ref={container}
      className="relative py-20 bg-gray-50 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    >
      {/* Layering elements for background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16 partner-header">
          <h2 className="text-4xl font-extrabold text-red-600 mb-4 tracking-tight">
            Proud Partners:
          </h2>
          <p className="text-2xl font-bold">
            <span className="bg-yellow-300 px-4 py-2 rounded-sm shadow-sm inline-block">
              Strengthening Futures Through Powerful Industry Collaborations
            </span>
          </p>
        </div>

        {/* Industry Partners Title */}
        <div className="flex items-center justify-center gap-6 mb-16 partner-title">
          <ChevronLeft
            className="w-10 h-10 text-blue-700 fill-blue-700"
            strokeWidth={4}
          />
          <h3 className="text-4xl font-black text-blue-800 tracking-wider">
            INDUSTRY PARTNERS
          </h3>
          <ChevronRight
            className="w-10 h-10 text-blue-700 fill-blue-700"
            strokeWidth={4}
          />
        </div>

        {/* Partners Grid */}
        <div className="space-y-10">
          {partners.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-8 partner-row"
            >
              {row.map((partner, partnerIndex) => {
                if (partner.type === "icon") {
                  // Center handshake icon
                  return (
                    <div
                      key={partnerIndex}
                      className="flex items-center gap-6 partner-card"
                    >
                      <ChevronLeft
                        className="w-12 h-12 text-pink-500 fill-pink-500"
                        strokeWidth={4}
                      />
                      <div className="w-40 h-24 flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100">
                        <Handshake
                          className="w-24 h-24 text-blue-700"
                          strokeWidth={1.5}
                        />
                      </div>
                      <ChevronRight
                        className="w-12 h-12 text-pink-500 fill-pink-500"
                        strokeWidth={4}
                      />
                    </div>
                  );
                }

                return (
                  <div
                    key={partnerIndex}
                    className="relative partner-card group"
                  >
                    <ArrowLeft />
                    <div className="bg-white border border-gray-200 rounded-xl px-8 py-6 w-48 h-24 flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-blue-200">
                      <div className="text-center">
                        <div
                          className="font-black text-gray-800"
                          style={{
                            fontSize:
                              partner.logo === "KUKA"
                                ? "28px"
                                : partner.logo === "n1"
                                ? "32px"
                                : "20px",
                          }}
                        >
                          {partner.logo === "KUKA" && (
                            <span className="text-orange-600">
                              {partner.logo}
                            </span>
                          )}
                          {partner.logo === "fronius" && (
                            <span className="text-red-600">{partner.logo}</span>
                          )}
                          {partner.logo === "rexroth" && (
                            <div>
                              <div className="text-blue-900 text-lg">
                                {partner.logo}
                              </div>
                              <div className="text-xs text-gray-600">
                                {partner.subtitle}
                              </div>
                            </div>
                          )}
                          {partner.logo === "n1" && (
                            <span className="text-green-500">
                              {partner.logo}
                            </span>
                          )}
                          {partner.logo === "SIEMENS" && (
                            <span className="text-teal-600">
                              {partner.logo}
                            </span>
                          )}
                          {partner.logo === "MITSUBISHI ELECTRIC" && (
                            <div>
                              <div className="text-red-600 text-xs">
                                MITSUBISHI
                              </div>
                              <div className="text-red-600 text-xs">
                                ELECTRIC
                              </div>
                            </div>
                          )}
                          {partner.logo === "stratasys" && (
                            <span className="text-blue-600">
                              {partner.logo}
                            </span>
                          )}
                          {partner.logo === "MESSER" && (
                            <span className="text-blue-900">
                              {partner.logo}
                            </span>
                          )}
                          {partner.logo === "TÜV Rheinland" && (
                            <div className="text-blue-600 text-sm">
                              {partner.logo}
                            </div>
                          )}
                          {partner.logo === "IPG" && (
                            <div>
                              <div className="text-blue-700 text-xl">IPG</div>
                              <div className="text-xs text-gray-600">
                                {partner.subtitle}
                              </div>
                            </div>
                          )}
                          {partner.logo === "ZEISS" && (
                            <span className="text-blue-800">
                              {partner.logo}
                            </span>
                          )}
                          {partner.logo === "BOSCH" && (
                            <span className="text-red-600">{partner.logo}</span>
                          )}
                          {partner.logo === "SERVAX" && (
                            <span className="text-blue-900">
                              {partner.logo}
                            </span>
                          )}
                          {partner.logo === "Pepperl+Fuchs" && (
                            <span className="text-green-700 text-sm">
                              {partner.logo}
                            </span>
                          )}
                          {partner.logo === "SCHUNK" && (
                            <span className="text-blue-900">
                              {partner.logo}
                            </span>
                          )}
                          {partner.logo === "JAMATICS" && (
                            <span className="text-cyan-500">
                              {partner.logo}
                            </span>
                          )}
                          {partner.logo === "FAB" && (
                            <div>
                              <div className="text-blue-700 text-lg flex items-center justify-center gap-1">
                                <div className="w-6 h-6 rounded-full bg-red-600"></div>
                                <span>{partner.logo}</span>
                              </div>
                              <div className="text-xs text-gray-600">
                                {partner.subtitle}
                              </div>
                            </div>
                          )}
                          {partner.logo === "Formulacion y Analisis" && (
                            <div className="text-red-600 text-xs leading-tight">
                              <div className="w-5 h-5 rounded-full bg-red-600 mx-auto mb-1"></div>
                              <div>Formulación</div>
                              <div>y Análisis</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <ArrowRight />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
