'use client';

import '../styles/globals.css';
import NavBar from '@/Components/NavBar';
import { StickyFooter } from '@/Components';
import Footer from '@/Components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {isShowNavAndFooter && <StickyFooter data={pageProps?.data?.data?.stream} />}
            {isShowNavAndFooter && <Footer />}
        </>
    );
}

export default MyApp;
