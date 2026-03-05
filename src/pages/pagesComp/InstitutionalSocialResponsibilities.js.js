import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {
  ShieldCheck,
  HeartHandshake,
  Recycle,
  Users,
  School,
  HandHeart,
  Building2,
  Rocket,
} from "lucide-react";

const initiatives = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
    title:
      "Membership in United Nations Academic Impact (UNAI) supporting global education and sustainability goals",
  },
  {
    icon: <Recycle className="w-10 h-10 text-green-600" />,
    title:
      "“Future Forward: Sustainability Club” engaging students in climate action, renewable energy, and waste reduction projects",
  },
  {
    icon: <Rocket className="w-10 h-10 text-green-600" />,
    title:
      "Samriddhi Pravaah initiative promoting resource sharing and circular economy principles within the campus",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-green-600" />,
    title:
      "Blood donation camps and health awareness drives benefiting local communities",
  },
  {
    icon: <School className="w-10 h-10 text-green-600" />,
    title:
      "Adoption and support of municipal and primary schools, including provision of infrastructure and educational resources",
  },
  {
    icon: <Users className="w-10 h-10 text-green-600" />,
    title:
      "Anti-ragging awareness campaigns promoting safe and inclusive campus culture",
  },
  {
    icon: <Building2 className="w-10 h-10 text-green-600" />,
    title:
      "Regular community outreach programs aligned with national campaigns like Swachh Bharat Abhiyan (Clean India Mission)",
  },
  {
    icon: <HandHeart className="w-10 h-10 text-green-600" />,
    title:
      "Skill development and Entrepreneurship programs targeting underprivileged youth",
  },
];

function InstitutionalSocialResponsibilities() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current.querySelectorAll(".initiative-card"),
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        footerRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/30 via-white to-yellow-50/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src="/image/akgec-logo.svg" alt="" className="absolute top-20 right-10 w-96 h-96 object-contain" />
        <img src="/image/akgec-logo.svg" alt="" className="absolute bottom-20 left-10 w-80 h-80 object-contain" />
      </div>
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="relative rounded-3xl shadow-2xl p-8 mb-14 overflow-hidden border-2 border-primary/10">
          <div className="absolute inset-0 bg-primary opacity-10"></div>
          <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 leading-relaxed text-lg text-justify"
          >
            AKG embraces Institutional Social Responsibility (ISR) as
            a vital part of its mission to nurture not only skilled
            professionals but also socially conscious citizens. The university
            actively engages students and faculty in initiatives that promote
            sustainability, community welfare, and ethical leadership. Through
            awareness campaigns, environmental programs, and outreach efforts,
            AKG University fosters a culture of empathy, responsibility, and
            positive societal impact.
          </motion.p>
          </div>
        </div>

        {/* Initiatives Grid */}
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center uppercase">
          Key Social Responsibility Initiatives
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="initiative-card relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-primary to-blue-700 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <div className="text-white">{item.icon}</div>
                  </div>
                </div>
                <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-900 transition-colors">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div ref={footerRef} className="mt-16 text-center">
          <div className="relative max-w-4xl mx-auto rounded-3xl shadow-2xl p-8 lg:p-12 overflow-hidden border-2 border-secondary/20">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-yellow-600/10"></div>
            <div className="relative z-10">
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed font-semibold">
            These initiatives demonstrate AKG’s commitment to
            embedding social responsibility at the core of its educational
            environment and making a meaningful difference in society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstitutionalSocialResponsibilities;
