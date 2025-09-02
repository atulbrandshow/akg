import { useEffect, useState, Suspense } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import DynamicPageWrapper from "./main/DynamicPage";
import ShimmerContent from "@Components/ShimmerContent";
import { API_NODE_URL } from "@/configs/config";

const fetcher = (url) => fetch(url).then((res) => res.json());

const loadComponent = async (componentName) => {
  try {
    const mod = await import(`./main/${componentName}`);
    return mod.default;
  } catch (error) {
    console.error(`Error loading component: ${componentName}`, error);
    return null;
  }
};

export default function DynamicPage({ fallbackData, pagePath }) {
  const router = useRouter();
  const [Component, setComponent] = useState(null);

  // 🔥 SWR hook with fallbackData from SSR
  const { data, error, isLoading } = useSWR(
    `${API_NODE_URL}slug?path=${encodeURIComponent(pagePath)}`,
    fetcher,
    {
      fallbackData,
      revalidateOnFocus: false, // don't refetch when switching tabs
    }
  );

  // Dynamic import of component when data changes
  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      if (!data?.data?.ComponentType) return;

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

  // Meta data (static for now, you can make dynamic from API)
  const metaTitle = "AKGEC - Ajay Kumar Garg Engineering College, Ghaziabad";
  const metaDescription =
    "Explore AKGEC, Ghaziabad – a premier engineering college affiliated to Dr. A.P.J. Abdul Kalam Technical University. Discover courses, campus, placements, and admission details.";
  const bannerImage =
    "https://www.akgec.ac.in/wp-content/uploads/2023/03/akgec-campus.jpg";
  const pageUrl = `https://www.akgec.ac.in${router.asPath}`;

  if (isLoading) return <ShimmerContent />;
  if (error || !data?.status) return <div>Page not found</div>;

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
        {Component ? (
          <Component data={data.data} />
        ) : (
          <ShimmerContent />
        )}
      </Suspense>
    </DynamicPageWrapper>
  );
}

export async function getServerSideProps(context) {
  const { slug = [] } = context.params || {};
  let path = "/" + slug.join("/");

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
    const response = await fetch(
      `${API_NODE_URL}slug?path=${encodeURIComponent(path)}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const result = await response.json();

    if (!result.status || !result.data) {
      return { notFound: true };
    }

    return {
      props: {
        fallbackData: result, // ✅ pass as SWR fallback
        pagePath: path, // ✅ pass pagePath for SWR key
      },
    };
  } catch (error) {
    console.error("API error:", error);
    return { notFound: true };
  }
}
