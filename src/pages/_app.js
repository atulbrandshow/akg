'use client';

import '../styles/globals.css';
import NavBar from '@/Components/NavBar';
import { StickyFooter } from '@/Components';
import Footer from '@/Components/Footer';
import useStickyBar from '@/hooks/useStickyBar';

function MyApp({ Component, pageProps }) {
    // const showStickyBar = useStickyBar();
    
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            {/* <StickyFooter ShowState={showStickyBar} /> */}
            <StickyFooter  />
            <Footer />
        </>
    )
}

export default MyApp;