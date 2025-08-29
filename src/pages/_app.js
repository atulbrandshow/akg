'use client';

import '../styles/globals.css';
import { StickyFooter } from '@/Components';
import Footer from '@/Components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewNavBar from '@/Components/NewNavBar';

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
            {isShowNavAndFooter && <NewNavBar />}
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
            {isShowNavAndFooter && <StickyFooter streamId={pageProps?.data?.data?.stream} />}
            {isShowNavAndFooter && <Footer />}
        </>
    );
}

export default MyApp;
