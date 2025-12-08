"use client";

import { ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SideBar = ({ title, LinkList }) => {
  const router = useRouter();
  const sidebarRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Links stagger animation
      gsap.fromTo(
        linksRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sidebarRef);

    return () => ctx.revert();
  }, [LinkList]);
  return (
    <section ref={sidebarRef}>
      <div className="rounded-xl overflow-hidden bg-indigo-900 text-white w-full">
        <ul>
          <div className="flex justify-start overflow-hidden">
            <img
              ref={imageRef}
              src="/image/Students.jpeg"
              alt="side-bar-image"
              className="w-full h-60 object-cover object-top"
            />
          </div>
          {/* Title Section */}
          <div className="px-6 py-4 bg-primary">
            <h2
              ref={titleRef}
              className="text-xl font-bold text-white flex items-center gap-2"
            >
              <div className="w-1 h-6 bg-secondary rounded-full"></div>
              Quick Links
            </h2>
          </div>

          {/* Links Section */}
          <div>
            {LinkList?.map((item, index) => (
              <button
                key={index}
                ref={(el) => (linksRef.current[index] = el)}
                onClick={() => router.push(item.link)}
                className="relative w-full text-left group border-b border-primary/20 bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                {/* Hover Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                {/* Content */}
                <div className="flex items-center justify-between p-4 group-hover:pl-6 transition-all duration-300">
                  <span className="text-sm text-white/90 group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </span>
                  <ChevronRightIcon className="w-4 h-4 text-white/60 group-hover:text-secondary transform group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </button>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
