import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { generatePageSEO, generateStructuredData, generateOpenGraphTags, generateTwitterTags, seoConfig } from '../utils/seo';

export const useSEO = (page, customData = {}) => {
  const seoData = generatePageSEO(page);
  const mergedData = { ...seoData, ...customData };
  
  const openGraphTags = generateOpenGraphTags(mergedData);
  const twitterTags = generateTwitterTags(mergedData);

  return {
    title: mergedData.title,
    description: mergedData.description,
    keywords: mergedData.keywords,
    canonical: `${seoConfig.siteUrl}${mergedData.canonical}`,
    openGraph: openGraphTags,
    twitter: twitterTags
  };
};

export const SEOHelmet = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  structuredData,
  image,
  noIndex = false 
}) => {
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const metaDescription = description || seoConfig.defaultDescription;
  const metaKeywords = keywords || seoConfig.defaultKeywords;
  const canonicalUrl = canonical ? `${seoConfig.siteUrl}${canonical}` : seoConfig.siteUrl;
  const ogImage = image || `${seoConfig.siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={seoConfig.author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots Meta */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || seoConfig.defaultTitle} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title || seoConfig.defaultTitle} />
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Nagpur" />
      <meta name="geo.position" content="21.1458;79.0882" />
      <meta name="ICBM" content="21.1458, 79.0882" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
    </Helmet>
  );
};