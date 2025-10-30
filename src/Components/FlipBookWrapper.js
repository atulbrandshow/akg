"use client";
import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

const FlipBookWrapper = forwardRef(({ pages = [] }, ref) => {
  const internalRef = useRef(null);
  const [HTMLFlipBook, setHTMLFlipBook] = useState(null);

  // Load react-pageflip only on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const module = require("react-pageflip");
      setHTMLFlipBook(() => module.default || module);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    flipNext: () =>
      internalRef.current?.pageFlip?.()?.flipNext?.() ??
      console.warn("flipNext not available yet"),
    flipPrev: () =>
      internalRef.current?.pageFlip?.()?.flipPrev?.() ??
      console.warn("flipPrev not available yet"),
  }));

  useEffect(() => {
    console.log("FlipBookWrapper mounted →", internalRef.current?.pageFlip?.());
  }, [HTMLFlipBook]);

  if (!HTMLFlipBook) {
    return <p className="text-center py-6 text-gray-600">Loading Flipbook...</p>;
  }

  return (
    <HTMLFlipBook
      ref={internalRef}
      width={400}
      height={550}
      size="stretch"
      minWidth={315}
      maxWidth={800}
      maxHeight={1000}
      showCover={true}
      mobileScrollSupport={true}
      style={{
        boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
        backgroundColor: "#f5f5f5",
      }}
    >
      {pages.map((src, i) => (
        <div key={i} className="bg-white">
          <img
            src={src}
            alt={`page-${i + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </HTMLFlipBook>
  );
});

export default FlipBookWrapper;
