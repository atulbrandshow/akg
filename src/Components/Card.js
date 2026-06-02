"use client";

import React, { useEffect, useState } from "react";

const Card = ({ img, title, desc }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = Array.isArray(img) ? img : [img];

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="bg-white col-span-4 max-lg:col-span-6 max-sm:col-span-12 rounded-lg border-b-[5px] border-yellow-500 overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px]">
            
            <div className="h-60 max-2xl:h-48 w-full overflow-hidden group relative">
                <img
                    className="h-full w-full object-cover object-top transition-transform duration-[5s] group-hover:scale-125"
                    src={images[currentImage]}
                    alt={title}
                />

                {images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-2 rounded-full ${
                                    currentImage === index
                                        ? "bg-white"
                                        : "bg-white/50"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-3 px-4 max-sm:px-2">
                <h2 className="max-xl:text-base leading-none uppercase font-novaBold">
                    {title}
                </h2>

                <p className="py-2 leading-none text-sm italic font-novaReg">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default Card;