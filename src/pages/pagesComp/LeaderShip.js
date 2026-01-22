import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    name: "Dr. Amita Dev",
    role: "Vice Chancellor, AKGU",
    image: "/image/leadership/director-2.png",
    quote: "Prof. Amita Dev is a distinguished Academician, Engineer, and Visionary leader with over 40 years of rich experience in Academia, Research, Industry, and Higher Education Administration.",
    content: [
      "Prof. Amita Dev is a distinguished Academician, Engineer, and Visionary leader with over 40 years of rich experience in Academia, Research, Industry, and Higher Education Administration. She is an Engineer with a Ph.D. in Computer Engineering.",
      "She has held prestigious leadership roles including Vice Chancellor of Indira Gandhi Delhi Technical University for Women (IGDTUW) and Delhi Skill and Entrepreneurship University (DSEU), as well as Pro Vice Chancellor, Principal, and Head of Department at premier institutions. She is widely recognized for her excellence in Institutional Development, Policy Formulation, Research Leadership, and Innovation-Driven growth in Technical Education and Entrepreneurship.",
      "Her research expertise spans Artificial Intelligence, Deep Neural Networks, Natural Language Processing. She has authored over 140 research publications, holds an impressive portfolio of 31 patents (20 granted), and has successfully led several Nationally funded projects exceeding ₹34 Crores from agencies such as DST, MeitY, AICTE, UKRI, and CFSL etc.",
      "A sought-after speaker, mentor, and motivator, Prof. Dev has delivered thought-provoking lectures and keynote addresses at numerous national and international forums. Her outstanding contributions have been recognized with multiple National and International awards, including the AICTE Young Teacher Career Award, Best Engineering Teacher Award by ISTE, Lifetime Achievement Award by DMA, \"Ambassador For Peace\" by Universal Peace Federation, Shrimati Sushma Swaraj \"STREE SHAKTI SAMMAN\" Institution of Happiness Award by Hon'ble Minister of Women & Child Development, Vittiya Saksharta Abhiyan Award by Hon'ble Minister of Education and many more.",
      "Prof. Amita Dev continues to inspire as a trailblazer in research, innovation, and academic leadership, with a vision to harness technology for education, empowerment, and societal progress."
    ]
  }
];

const LeaderShip = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(titleRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      );

      // Section Animation
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative py-16 bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-novaBold text-gray-900 mb-6 tracking-tight">
            Leadership
          </h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-32">
          {leaders.map((leader, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="flex flex-col lg:flex-row gap-16 items-start"
            >
              {/* Image Column */}
              <div className="w-full lg:w-5/12 sticky top-32">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-gray-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Name Overlay on Image (Mobile/Tablet optional, but keeps it clean here) */}
                  <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <div className="text-xs font-bold tracking-widest uppercase mb-2 text-brand-yellow">
                      {leader.role}
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="hidden lg:block absolute -bottom-10 -left-10 w-24 h-24 bg-brand-blue/90 -z-10 rounded-full blur-2xl opacity-50"></div>
              </div>

              {/* Text Column */}
              <div className="w-full lg:w-7/12 lg:pt-8">
                <div className="mb-10 border-b border-gray-200 pb-10">
                  <h3 className="text-4xl md:text-5xl font-novaBold text-brand-blue mb-4">
                    {leader.name}
                  </h3>
                  <p className="text-xl text-gray-500 font-novaReg">
                    {leader.role}
                  </p>
                </div>

                <div className="prose prose-lg text-gray-600 font-novaReg leading-relaxed space-y-6 text-justify max-w-none">
                  {leader.content.map((paragraph, pIndex) => {
                    // Highlight first letter of first paragraph
                    if (pIndex === 0) {
                      return (
                        <p key={pIndex} className="first-letter:text-5xl first-letter:font-bold first-letter:text-brand-blue first-letter:mr-3 first-letter:float-left">
                          {paragraph}
                        </p>
                      )
                    }
                    return <p key={pIndex}>{paragraph}</p>;
                  })}
                </div>

                <div className="mt-12 pl-8 border-l-2 border-brand-yellow">
                  <p className="text-xl italic text-gray-800 font-novaReg">
                    "{leader.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderShip;