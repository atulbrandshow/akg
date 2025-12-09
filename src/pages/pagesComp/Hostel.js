import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const facilities = [
  {
    id: 1,
    name: "Furnished rooms including Curtains, Mattress, Pillow, Bed Sheets",
    icon: "/image/icons/furnished-rooms.png",
  },
  {
    id: 2,
    name: "Clean and Hygienic – Mess & Dining",
    icon: "/image/icons/clean-and-hygienic.png",
  },
  {
    id: 3,
    name: "High-speed Internet Facility (Wi-Fi)",
    icon: "/image/icons/internet-facility.png",
  },
  {
    id: 4,
    name: "Solar Water Heaters (Eco-friendly)",
    icon: "/image/icons/solarwater-heaters.png",
  },
  { id: 5, name: "Modern Gymnasium", icon: "/image/icons/gymnasium.png" },
  {
    id: 6,
    name: "TV Lounge with Entertainment Facilities",
    icon: "/image/icons/tv-room.png",
  },
  { id: 7, name: "Well-stocked Library", icon: "/image/icons/librarery.png" },
  {
    id: 8,
    name: "Indoor and Outdoor Sports Facilities",
    icon: "/image/icons/indoor-and-outdoor.png",
  },
  { id: 9, name: "24/7 Canteen Services", icon: "/image/icons/canteen.png" },
  // { id: 10, name: "Utility Store for Daily Needs", icon: "/image/icons/utility-store.png" },
  // { id: 11, name: "Laundry Services", icon: "/image/icons/laundry.png" },
  // { id: 12, name: "24/7 Security & CCTV Surveillance", icon: "/image/icons/security.png" },
];

export default function HostelFacility() {
  // Refs for GSAP animations
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const sectionTitleRef = useRef(null);
  const facilitiesRef = useRef([]);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
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

      // Paragraph animations
      gsap.fromTo(
        paragraph1Ref.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraph1Ref.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        paragraph2Ref.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraph2Ref.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Section title animation
      gsap.fromTo(
        sectionTitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionTitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Facilities cards animations
      facilitiesRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
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
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full -translate-y-40 translate-x-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-32 -translate-x-32"></div>
      
      {/* AKG Logo Vector Background */}
      <div className="absolute top-20 right-20 opacity-10">
        <img
          src="/image/akgec-logo.svg"
          alt="AKG Logo"
          className="w-48 h-48 object-contain"
        />
      </div>
      <div className="absolute bottom-40 left-10 opacity-3">
        <img
          src="/image/akgec-logo.svg"
          alt="AKG Logo"
          className="w-40 h-40 object-contain rotate-45"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-40 left-20 w-4 h-4 bg-secondary rounded-full animate-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-80 right-40 w-5 h-5 bg-secondary/70 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-60 right-20 w-3 h-3 bg-secondary/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 ref={titleRef} className="text-5xl font-novaSemi mb-6 max-md:text-4xl max-sm:text-3xl text-primary leading-tight">
            Comfortable Living Spaces for Students
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
        </div>
        
        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div ref={paragraph1Ref} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
              <h3 className="text-xl font-novaSemi text-primary">Modern Facilities</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              AKGEC offers state-of-the-art hostel facilities designed to provide a
              comfortable and secure living environment for students. Our
              residential complexes include separate accommodations for boys and
              girls, with modern amenities that create a perfect home-away-from-home
              experience. The hostels feature spacious rooms with ample natural
              light and ventilation, creating an ideal atmosphere for both study and
              relaxation.
            </p>
          </div>
          
          <div ref={paragraph2Ref} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
              <h3 className="text-xl font-novaSemi text-primary">Comprehensive Care</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We understand the importance of nutrition for academic success, which
              is why our hostel mess serves balanced, hygienic meals prepared under
              strict quality control. The campus also features recreational areas,
              study lounges, and common spaces that encourage social interaction and
              community building. With round-the-clock security, maintenance
              services, and dedicated wardens, we ensure a safe and supportive
              environment for all residents.
            </p>
          </div>
        </div>
      </div>
        {/* Facilities Section */}
        <div className="max-w-7xl mx-auto py-20 px-6 relative">
          {/* Section Background Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/5 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 rounded-full translate-x-20 translate-y-20"></div>
          
          {/* AKG Logo Vector Background */}
          <div className="absolute top-10 right-10 opacity-3">
            <img
              src="/image/akgec-logo.svg"
              alt="AKG Logo"
              className="w-24 h-24 object-contain rotate-12"
            />
          </div>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 ref={sectionTitleRef} className="text-4xl font-novaSemi mb-4 text-primary relative z-10">
              Premium Hostel Amenities
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience world-class facilities designed for your comfort, convenience, and academic success
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {facilities?.map((facility, index) => (
              <div
                key={facility.id}
                ref={(el) => (facilitiesRef.current[index] = el)}
                className="group bg-white/90 backdrop-blur-sm flex flex-col text-center min-h-48 justify-center items-center p-8 hover:shadow-2xl hover:transform hover:scale-105 hover:-translate-y-3 transition-all duration-500 rounded-2xl relative overflow-hidden border border-gray-100 cursor-pointer"
              >
                {/* Card Background Pattern */}
                <div className="absolute top-1 right-1 w-6 h-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img
                    src="/image/akgec-logo.svg"
                    alt="AKG Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                {/* Icon Container */}
                <div className="relative z-10 mb-6 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <Image
                    src={facility.icon}
                    alt={facility.name}
                    width={60}
                    height={60}
                    className="object-contain h-16 w-16 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-lg font-novaSemi text-gray-800 group-hover:text-primary transition-colors duration-300 relative z-10 leading-tight">
                  {facility.name}
                </h3>
                
                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
