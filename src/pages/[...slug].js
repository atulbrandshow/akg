import { useEffect, useState, Suspense, lazy } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Page from "./index";
import ShimmerContent from "@Components/ShimmerContent";
import { API_NODE_URL, API_KEY, Domain_Secrete_Code } from "@/configs/config";

// Cache loaded components in memory
const componentCache = {};

const loadComponent = async (componentName) => {
    if (componentCache[componentName]) {
        return componentCache[componentName];
    }

    try {
        const mod = await import(`./${componentName}`);
        const Component = mod.default;
        componentCache[componentName] = Component;
        return Component;
    } catch (error) {
        console.error(`Error loading component: ${componentName}`, error);
        return null;
    }
};

export default function DynamicPage({ data }) {
    const router = useRouter();
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const init = async () => {
            if (!data || !data?.data?.ComponentType) return;

            const dynamicComponent = await loadComponent(data.data.ComponentType);

            if (isMounted) {
                setComponent(() => dynamicComponent);
            }
        };

        init();

        return () => {
            isMounted = false;
        };
    }, [data]);

    const metaTitle = "AKGEC - Ajay Kumar Garg Engineering College, Ghaziabad";
    const metaDescription =
        "Explore AKGEC, Ghaziabad – a premier engineering college affiliated to Dr. A.P.J. Abdul Kalam Technical University. Discover courses, campus, placements, and admission details.";
    const bannerImage = "https://www.akgec.ac.in/wp-content/uploads/2023/03/akgec-campus.jpg"; // use official image URL if available
    const pageUrl = `https://www.akgec.ac.in${router.asPath}`;

    return (
        <Page>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={bannerImage} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:type" content="website" />
            </Head>

            <Suspense fallback={<ShimmerContent />}>
                {Component ? <Component data={data.data} /> : <ShimmerContent />}
            </Suspense>
        </Page>
    );
}
let serverCache = {};

function getFromCache(key) {
    const item = serverCache[key];
    if (!item) return null;

    const now = Date.now();
    if (now - item.timestamp > 5 * 60 * 1000) {
        delete serverCache[key];
        return null;
    }
    return item.data;
}

function saveToCache(key, data) {
    serverCache[key] = {
        data,
        timestamp: Date.now(),
    };
}

export async function getServerSideProps(context) {
    const { slug = [] } = context.params || {};
    let path = slug.join("/") || "";

    if (!path.startsWith("/")) path = "/" + path;
    if (path.includes("?")) path = path.split("?")[0];

    const ignoredPaths = ["/favicon.ico", "/.well-known/appspecific/com.chrome.devtools.json"];
    if (ignoredPaths.includes(path)) {
        return { notFound: true };
    }

    const cacheKey = path;
    const cached = getFromCache(cacheKey);
    if (cached) {
        return { props: { data: cached } };
    }

    const response = await fetch(`${API_NODE_URL}slug?path=${encodeURIComponent(path)}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (!result.status || !result.data) {
        return { notFound: true };
    }

    saveToCache(cacheKey, result);

    return {
        props: {
            data: result,
        },
    };
}
