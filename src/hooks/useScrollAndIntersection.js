import { useEffect, useRef, useState } from "react";

const useScrollAndIntersection = (threshold = 0.5) => {
  const [activeSection, setActiveSection] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold, // Dynamic threshold, default is 50% visibility
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = sectionRefs.current.indexOf(entry.target);
          setActiveSection(sectionIndex);
        }
      });
    }, options);

    sectionRefs.current.forEach((section) => observer.observe(section));
  }, [threshold]);

  useEffect(() => {
    // Scroll event logic
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;

      if (scrollY > 200) {
        setTranslateX(300);
      }

      if (scrollY >= 5 && scrollY < sectionHeight * 0.6) {
        setTranslateY(-80); // Move up slightly
      } else if (scrollY >= 30) {
        setTranslateX(300); // Move to the right
      } else {
        setTranslateX(0); // Reset X translation
        setTranslateY(0); // Reset Y translation
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return {
    activeSection,
    translateX,
    translateY,
    sectionRefs,
  };
};

export default useScrollAndIntersection;
