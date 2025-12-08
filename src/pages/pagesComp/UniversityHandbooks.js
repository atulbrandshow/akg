"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlipBookWrapper from "../../Components/FlipBookWrapper";

gsap.registerPlugin(ScrollTrigger);
let pdfjsLib = null;


export default function UniversityHandbooks() {
  const [flipbookVisible, setFlipbookVisible] = useState(false);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bookRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

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
        cardsRef.current.querySelectorAll(".handbook-card"),
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // 🧾 All handbook data (every one will open as flipbook)
  const handbooksData = [
    {
      id: 1,
      title: "Undergraduate Handbook",
      description: "Comprehensive guide for undergraduate students.",
      image: "/image/university-handbooks/book-1.jpg",
      link: "/pdf/university-handbooks/CS_Handbook_2024.pdf",
    },
    {
      id: 2,
      title: "Postgraduate Handbook",
      description: "Essential information for postgraduate students.",
      image: "/image/university-handbooks/book-2.jpg",
      link: "/pdf/university-handbooks/CS_Handbook_2024.pdf",
    },
    {
      id: 3,
      title: "Research Handbook",
      description: "Detailed guidelines for research students and scholars at AKG University.",
      image: "/image/university-handbooks/book-3.jpg",
      link: "/pdf/university-handbooks/CS_Handbook_2024.pdf",
    },
    {
      id: 4,
      title: "Advanced Handbook",
      description: "Comprehensive research guidelines for scholars at AKG University.",
      image: "/image/university-handbooks/book-4.jpg",
      link: "/pdf/university-handbooks/CS_Handbook_2024.pdf",
    },
    {
      id: 5,
      title: "Doctoral Handbook",
      description: "In-depth guide for PhD candidates and researchers at AKG University.",
      image: "/image/university-handbooks/book-5.jpg",
      link: "/pdf/university-handbooks/CS_Handbook_2024.pdf",
    },
    {
      id: 6,
      title: "Engineering Handbook",
      description: "Guidelines for engineering students at AKG University.",
      image: "/image/university-handbooks/book-6.jpg",
      link: "/pdf/university-handbooks/CS_Handbook_2024.pdf",
    },
    {
      id: 7,
      title: "Management Handbook",
      description: "Complete guide for management students at AKG University.",
      image: "/image/university-handbooks/book-7.jpg",
      link: "/pdf/university-handbooks/CS_Handbook_2024.pdf",
    },
    {
      id: 8,
      title: "IT Handbook",
      description: "A guide for students pursuing Information Technology at AKG University.",
      image: "/image/university-handbooks/book-8.jpg",
      link: "/pdf/university-handbooks/CS_Handbook_2024.pdf",
    },
    {
      id: 9,
      title: "Soft Skills Handbook",
      description: "Guidelines on soft skills development at AKG University.",
      image: "/image/university-handbooks/book-9.jpg",
      link: "/pdf/university-handbooks/CS_Handbook_2024.pdf",
    },
  ];

  // 📘 Load PDF and convert pages to images
  const loadPdf = async (pdfUrl) => {
    try {
      setFlipbookVisible(true);
      setLoading(true);

      // Dynamically import pdfjs-dist
      if (!pdfjsLib) {
        pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
        pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
      }

      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const numPages = pdf.numPages;
      const imgs = [];

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: context, viewport }).promise;
        imgs.push(canvas.toDataURL());
      }

      setPages(imgs);
      setLoading(false);

      // small delay to ensure FlipBook mounts before using ref
      setTimeout(() => {
        console.log("BOOK REF AFTER LOAD:", bookRef.current);
      }, 300);
    } catch (err) {
      console.error("PDF load error:", err);
      setLoading(false);
    }
  };

  // 🔄 Navigation handlers
  const nextPage = () => {
    console.log("Next clicked", bookRef.current);
    bookRef.current?.flipNext?.();
  };

  const prevPage = () => {
    console.log("Prev clicked", bookRef.current);
    bookRef.current?.flipPrev?.();
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/30 via-white to-yellow-50/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/image/akgec-logo.svg" alt="" className="absolute top-20 right-10 w-96 h-96 object-contain" />
        <img src="/image/akgec-logo.svg" alt="" className="absolute bottom-20 left-10 w-80 h-80 object-contain" />
      </div>
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
      <h2 ref={headerRef} className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center uppercase">University Handbooks</h2>

      {/* Cards Grid */}
      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {handbooksData.map(({ id, title, description, image, link }) => (
          <div
            key={id}
            className="handbook-card relative bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/40 rounded-3xl shadow-xl p-6 flex flex-col hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gray-200 hover:border-primary group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-white rounded-2xl p-4 shadow-lg mb-4 group-hover:shadow-xl transition-shadow">
                <img src={image} alt={title} className="mx-auto w-32 h-40 object-cover rounded-lg" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">{description}</p>

              {/* All open Flipbook now */}
              <button
                onClick={() => loadPdf(link)}
                className="mt-auto w-full text-sm font-semibold py-3 px-4 rounded-xl bg-gradient-to-r from-blue-700 to-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Flipbook
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Flipbook Modal */}
     {flipbookVisible && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4"
    onClick={(e) => {
      if (e.target === e.currentTarget) setFlipbookVisible(false);
    }}
  >
    <div className="relative bg-white p-4 rounded-lg max-w-6xl w-full shadow-2xl overflow-hidden z-[10000]">
      {/* Close Button */}
      <button
        className="absolute top-2 right-3 text-red-600 font-bold text-2xl z-[10001] hover:scale-110 transition-transform"
        onClick={() => setFlipbookVisible(false)}
        aria-label="Close flipbook"
      >
        ✕
      </button>

      {loading ? (
        <p className="text-center text-gray-700 py-12 text-lg">
          Loading flipbook...
        </p>
      ) : (
        <>
          {/* Left Arrow */}
          <button
            onClick={prevPage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md text-xl z-[10001]"
            aria-label="Previous page"
          >
            ◀
          </button>

          {/* Flipbook */}
          <div className="flex justify-center">
            <FlipBookWrapper ref={bookRef} pages={pages} />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextPage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md text-xl z-[10001]"
            aria-label="Next page"
          >
            ▶
          </button>
        </>
      )}
    </div>
  </div>
)}
      </div>
    </section>
  );
}
