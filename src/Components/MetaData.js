// src/components/MetaData.js
import Head from 'next/head';
import React from 'react';

const MetaData = ({
  title,
  description,
  keywords,
  path,
  bannerImage,
  author,
  app_id
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="copyright" content="Copyright © AKG University. All Rights Reserved." />

      <link rel="alternate" href={`${path}`} hreflang="es-us" />
      <link rel="canonical" href={`${path}`} />
      <meta name="image" content={logoUrl} />

      {/* Facebook Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={path} />
      <meta property="og:image" content={bannerImage} />
      <meta property="fb:app_id" content={app_id} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@DirectorAKGEC" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Geotag */}
      <meta name="DC.title" content="Ajay Kumar Garg University" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Ghaziabad" />
      <meta name="geo.position" content="28.6358;77.4377" />
      <meta name="ICBM" content="28.6358, 77.4377" />


      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "url": `${path}/blog`
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          "name": "Ajay Kumar Garg University",
          "url": path,
          "sameAs": [
            "https://www.facebook.com/Official.AKGU",
            "https://x.com/official_akgec",
            "https://www.instagram.com/official.akgec/",
            "https://www.linkedin.com/school/officialakgec",
            "https://www.youtube.com/@AKGECDigitalSchool",
          ]
        })
      }} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://www.schema.org",
            "@type": "Organization",
            name: "Dr. Vinay Bajrangi - Best Online Astrologer in India, Delhi NCR",
            url: "https://www.vinaybajrangi.com/",
            logo: logoUrl,
            image: "https://www.vinaybajrangi.com/upload/pages/139_karma%20Karrection.jpg",
            description:
              "I Dr. Vinay Bajrangi, am a trustworthy Indian Vedic astrologer who acts as a facilitator for helping you to achieve your ultimate goals and am also dedicated to the cause till you get the desired goals.",
            sameAs: [
              "https://www.facebook.com/ptVinayBajrangi/",
              "https://twitter.com/drvinaybajrangi",
              "https://plus.google.com/u/0/116937443282048557482",
              "https://www.instagram.com/drvinaybajrangi/",
              "https://www.youtube.com/c/DrVinayBajrangi"
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "BAJRANGI DHAM",
              addressLocality: "M-22, Sector-66,",
              addressRegion: "Noida",
              postalCode: "201301",
              addressCountry: "India"
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Bajrangi Dham Customer Support",
              telephone: "+91-9278555588"
            },
            aggregateRating: {
              ratingValue: "4.9",
              reviewCount: "1724"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://www.schema.org",
            "@type": "Website",
            name: title,
            alternateName: "Dr. Vinay Bajrangi",
            url: pageUrl,
            logo: bannerImage,
            sameAs: [
              "https://www.facebook.com/ptVinayBajrangi/",
              "https://www.vinaybajrangi.com/",
              "https://www.youtube.com/@drvinaybajrangiji"
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumb && breadcrumb.length > 0
              ? breadcrumb.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": `https://www.vinaybajrangi.com/${item.path}`
              }))
              : [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.vinaybajrangi.com/"
                }
              ]
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": title,
            "image": bannerImage,
            "description": shortDesc,
            "sku": reportID,
            "mpn": date,
            "brand": {
              "@type": "VinayBajrangi",
              "name": "Vinay Bajrangi"
            },
            "offers": {
              "@type": "Offer",
              "url": pageUrl,
              "priceCurrency": currency,
              "price": selectedPrice,
              "priceValidUntil": "2024-12-31",
              "seller": {
                "@type": "Organization",
                "name": "Vinay Bajrangi"
              }
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": pageUrl,
            },
            "headline": metaTitle,
            "image": bannerImage,
            "author": {
              "@type": "Person",
              "name": "Dr. Vinay Bajrangi",
            },
            "publisher": {
              "@type": "Organization",
              "name": "Vinay Bajrangi",
              "logo": {
                "@type": "ImageObject",
                "url": logoUrl,
              },
            },
            "datePublished": date,
            "dateModified": date,
            "description": description,
          }),
        }}
      />
    </Head>
  );
};

export default MetaData;
