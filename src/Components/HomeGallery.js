"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { IMAGE_PATH } from "@/configs/config";

const HomeGallery = ({ data }) => {
    const d = data?.pageData;
    const galleryImages = d?.bottomGallery || [];

    // ✅ MOVE THIS HERE (inside component)
    const images = galleryImages.map((img, index) => ({
        id: index + 1,
        src: IMAGE_PATH + img,
        height: ["h-64", "h-40", "h-80", "h-52", "h-72", "h-44", "h-60", "h-36"][index % 8],
    }));

    const [selectedIndex, setSelectedIndex] = useState(null);

    const open = (index) => setSelectedIndex(index);
    const close = () => setSelectedIndex(null);

    const prev = (e) => {
        e.stopPropagation();
        setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    };

    const next = (e) => {
        e.stopPropagation();
        setSelectedIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    };

    useEffect(() => {
        const handleKey = (e) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") setSelectedIndex((i) => (i === images.length - 1 ? 0 : i + 1));
            if (e.key === "ArrowLeft") setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1));
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex, images.length]); // small improvement

    return (
        // ✅ your JSX remains SAME
        <div className="relative py-16">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200/30 mb-4">
                        <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-purple-600 font-novaSemi">Gallery</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                        <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-pink-600 bg-clip-text text-transparent font-novaBold">
                            Moments That Matter
                        </span>
                    </h2>

                    <div className="mt-4 flex justify-center">
                        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    </div>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        A glimpse into our experiences, creativity, and unforgettable memories captured in time.
                    </p>
                </div>

                {/* Gallery */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
                    {images.map((img, index) => (
                        <div
                            key={img.id}
                            onClick={() => open(index)}
                            className={`relative w-full ${img.height} rounded-2xl overflow-hidden break-inside-avoid group cursor-pointer shadow-md hover:shadow-xl transition duration-300`}
                        >
                            <Image
                                src={img.src}
                                alt={img.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={close}>
                    <div className="relative w-full max-w-6xl h-[75vh]">
                        <Image
                            src={images[selectedIndex].src}
                            alt="preview"
                            fill
                            className="object-contain rounded-xl"
                        />

                        {/* Close */}
                        <button onClick={close} className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow">
                            <X size={18} />
                        </button>

                        {/* Prev */}
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
                        >
                            <ChevronLeft />
                        </button>

                        {/* Next */}
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeGallery;
