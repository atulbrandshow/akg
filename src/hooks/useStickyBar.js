'use client';

import { useState, useEffect } from "react";

const useStickyBar = () => {
    const [showStickyBar, setShowStickyBar] = useState(false);

    useEffect(() => {
        let lastScrollPosition = window.scrollY;

        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            if (currentScrollPosition < 150) {
                setShowStickyBar(false);
            } else if (currentScrollPosition > lastScrollPosition) {
                setShowStickyBar(false);
            } else if (currentScrollPosition < lastScrollPosition) {
                setShowStickyBar(true);
            }
            lastScrollPosition = currentScrollPosition;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return showStickyBar;
};

export default useStickyBar;
