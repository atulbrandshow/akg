'use client';

import '../styles/globals.css';
import NavBar from '@/Components/NavBar';
import { StickyFooter } from '@/Components';
import Footer from '@/Components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default MyApp;
