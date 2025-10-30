"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import FlipBookWrapper from "../../Components/FlipBookWrapper";

// Setup pdf.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function UniversityHandbooks() {
  const [flipbookVisible, setFlipbookVisible] = useState(false);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bookRef = useRef(null);

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
    <div className="py-10">
      <h2 className="text-4xl font-novaReg mb-6">University Handbooks</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {handbooksData.map(({ id, title, description, image, link }) => (
          <div
            key={id}
            className="rounded-lg shadow-md p-3 flex flex-col justify-between hover:shadow-lg transition"
          >
            <img src={image} alt={title} className="mx-auto w-32 rounded-lg" />
            <h3 className="font-semibold mt-3">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{description}</p>

            {/* All open Flipbook now */}
            <button
              onClick={() => loadPdf(link)}
              className="mt-3 w-full bg-blue-900 text-white text-xs py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              View (Flipbook)
            </button>
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
  );
}
