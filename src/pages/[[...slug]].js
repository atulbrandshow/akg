import { useEffect, useState, Suspense } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import DynamicPageWrapper from "./main/DynamicPage";
import ShimmerContent from "@Components/ShimmerContent";
import { API_NODE_URL } from "@/configs/config";

const loadComponent = async (componentName) => {
    try {
        const mod = await import(`./main/${componentName}`);
        return mod.default;
    } catch (error) {
        console.error(`Error loading component: ${componentName}`, error);
        return null;
    }
};

export default function DynamicPage({ data: initialData }) {
    const router = useRouter();
    const { slug } = router.query;
    const [Component, setComponent] = useState(null);
    const [pageData, setPageData] = useState(initialData);
    const [loading, setLoading] = useState(!initialData);

    useEffect(() => {
        const fetchDataForPath = async (path) => {
            setLoading(true);
            try {
                // Clean the path
                let cleanPath = path;
                if (cleanPath.includes('?')) cleanPath = cleanPath.split('?')[0];
                
                // Handle root path
                if (cleanPath === '' || cleanPath === '/') {
                    cleanPath = '/';
                }

                const response = await fetch(`${API_NODE_URL}slug?path=${encodeURIComponent(cleanPath)}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });

                const result = await response.json();

                if (result.status && result.data) {
                    setPageData(result);
                    
                    // Load component dynamically
                    if (result.data.ComponentType) {
                        const dynamicComponent = await loadComponent(result.data.ComponentType);
                        setComponent(() => dynamicComponent);
                    }
                } else {
                    // If no data found, show 404
                    router.push('/404');
                }
            } catch (error) {
                console.error("Client-side API error:", error);
                // Don't redirect to 404 here to avoid loops
            } finally {
                setLoading(false);
            }
        };

        // If we have a slug parameter, use it to construct the path
        if (slug && slug.length > 0) {
            const path = '/' + slug.join('/');
            if (!pageData || pageData.data.path !== path) {
                fetchDataForPath(path);
            }
        } else {
            // Handle root path
            if (!pageData || pageData.data.path !== '/') {
                fetchDataForPath('/');
            }
        }
    }, [slug]); // Depend on slug parameter changes

    useEffect(() => {
        if (pageData?.data?.ComponentType) {
            loadComponent(pageData.data.ComponentType).then(comp => {
                setComponent(() => comp);
            });
        }
    }, [pageData]);

    // Generate meta tags
    const metaTitle = pageData?.data?.meta_title || "AKGEC - Ajay Kumar Garg Engineering College, Ghaziabad";
    const metaDescription = pageData?.data?.meta_description || "Explore AKGEC, Ghaziabad – a premier engineering college affiliated to Dr. A.P.J. Abdul Kalam Technical University. Discover courses, campus, placements, and admission details.";
    const bannerImage = pageData?.data?.banner_image || "https://www.akgec.ac.in/wp-content/uploads/2023/03/akgec-campus.jpg";
    const pageUrl = `https://www.akgec.ac.in${router.asPath}`;

    return (
        <DynamicPageWrapper>
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
                {loading ? <ShimmerContent /> : (Component ? <Component data={pageData?.data} /> : <ShimmerContent />)}
            </Suspense>
        </DynamicPageWrapper>
    );
}

export async function getServerSideProps(context) {
    const { slug = [] } = context.params || {};
    let path = "/" + slug.join("/");
    
    // Handle root path explicitly
    if (slug.length === 0) {
        path = "/";
    }

    console.log("Server-side path:", path);

    // Clean the path
    if (path.includes("?")) path = path.split("?")[0];

    const ignoredPaths = [
        "/favicon.ico",
        "/sw.js",
        "/manifest.json",
        "/robots.txt",
        "/sitemap.xml",
    ];

    if (
        ignoredPaths.includes(path) ||
        path.startsWith("/_next") ||
        path.startsWith("/static") ||
        path.startsWith("/api") ||
        path.match(/\.(js|css|map|json|svg|png|jpg|jpeg|ico)$/)
    ) {
        return { notFound: true };
    }

    try {
        const response = await fetch(`${API_NODE_URL}slug?path=${encodeURIComponent(path)}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        // Handle HTTP errors
        if (!response.ok) {
            console.error(`API responded with status: ${response.status}`);
            return { notFound: true };
        }

        const result = await response.json();

        if (!result.status || !result.data) {
            return { notFound: true };
        }

        return {
            props: {
                data: result,
            },
        };
    } catch (error) {
        console.error("API error:", error);
        return { notFound: true };
    }
}