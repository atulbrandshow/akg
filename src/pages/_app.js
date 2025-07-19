'use client';

import '../styles/globals.css';
import NavBar from '@/Components/NavBar';
import { StickyFooter } from '@/Components';
import Footer from '@/Components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
    const [isShowNavAndFooter, setIsShowNavAndFooter] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const hiddenPrefixes = ['/admin']; // only prefix, no *

        const shouldHide = hiddenPrefixes.some(prefix => 
            router.pathname === prefix || router.pathname.startsWith(prefix + '/')
        );

        setIsShowNavAndFooter(!shouldHide);
    }, [router.pathname]);

    return (
        <>
            {isShowNavAndFooter && <NavBar />}
            <Component {...pageProps} />
            {isShowNavAndFooter && <StickyFooter />}
            {isShowNavAndFooter && <Footer />}
        </>
    );
}

export default MyApp;
