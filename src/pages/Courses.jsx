import { SEOHelmet } from '../hooks/useSEO.jsx';
import { generateStructuredData } from '../utils/seo';
import CoursesHero from '../components/courses/CoursesHero';
import ServiceGrid from '../components/courses/ServiceGrid';
import ServiceFeatures from '../components/courses/ServiceFeatures';
import ServicesCTA from '../components/courses/ServicesCTA';

const Courses = () => {
  // SEO Data
  const organizationData = generateStructuredData('organization');
  
  const breadcrumbData = generateStructuredData('breadcrumb', [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/courses' }
  ]);

  const servicesData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Elite Banking Services",
    "description": "Comprehensive banking and financial services for individuals and businesses",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "FinancialProduct",
        "position": 1,
        "name": "Personal Banking",
        "description": "Complete banking solutions for individuals including savings, loans, and investment services",
        "provider": {
          "@type": "FinancialService",
          "name": "Elite Banking",
          "url": "https://elitebanking.com"
        },
        "category": "Personal Banking",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FinancialProduct",
        "position": 2,
        "name": "Investment Services",
        "description": "Professional investment management and wealth advisory services",
        "provider": {
          "@type": "FinancialService",
          "name": "Elite Banking",
          "url": "https://elitebanking.com"
        },
        "category": "Investment Management",
        "offers": {
          "@type": "Offer",
          "price": "10000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <>
      <SEOHelmet
        title="Elite Banking Services | Personal & Business Banking Solutions"
        description="Discover comprehensive banking services including personal banking, investment management, business banking, and digital solutions. Expert financial advisory with 24/7 support."
        keywords="banking services, personal banking, investment management, business banking, digital banking, financial advisory, wealth management"
        canonical="/courses"
        structuredData={[organizationData, breadcrumbData, servicesData]}
      />

      <main id="main-content" role="main">
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <CoursesHero />

          {/* Services Grid */}
          <ServiceGrid />

          {/* Service Features */}
          <ServiceFeatures />

          {/* Call to Action */}
          <ServicesCTA />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Elite Banking",
              "description": "Comprehensive banking and financial services provider",
              "url": "https://elitebanking.com",
              "logo": "https://elitebanking.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Financial District",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400001",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "10000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Banking Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "FinancialProduct",
                      "name": "Personal Banking"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "FinancialProduct",
                      "name": "Investment Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "FinancialProduct",
                      "name": "Business Banking"
                    }
                  }
                ]
              }
            })}
          </script>
        </div>
      </main>
    </>
  );
};

export default Courses;