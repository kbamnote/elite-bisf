import { SEOHelmet } from '../hooks/useSEO.jsx';
import { generateStructuredData } from '../utils/seo';
import PlacementsHero from '../components/placements/PlacementsHero';
import TopRecruiters from '../components/placements/TopRecruiters';
import SuccessStories from '../components/placements/SuccessStories';
import PlacementsStats from '../components/placements/PlacementsStats';
import PlacementsCTA from '../components/placements/PlacementsCTA';

const Placements = () => {
  // SEO Data
  const organizationData = generateStructuredData('organization');
  
  const breadcrumbData = generateStructuredData('breadcrumb', [
    { name: 'Home', url: '/' },
    { name: 'Success Stories', url: '/placements' }
  ]);

  return (
    <>
      <SEOHelmet
        title="Client Success Stories | Elite Banking Testimonials | Financial Growth"
        description="10,000+ satisfied clients trust Elite Banking for their financial journey. Read success stories and discover how we help achieve financial goals."
        keywords="client testimonials, banking success stories, financial growth, satisfied customers, elite banking reviews"
        canonical="/placements"
        structuredData={[organizationData, breadcrumbData]}
      />

      <main id="main-content" role="main">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Hero Section */}
          <PlacementsHero />

          {/* Top Recruiters/Partners Section */}
          <TopRecruiters />

          {/* Statistics Section */}
          <PlacementsStats />

          {/* Success Stories Section */}
          <SuccessStories />

          {/* Call to Action Section */}
          <PlacementsCTA />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Elite Banking",
              "description": "Leading financial services provider with exceptional client success stories and testimonials",
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
              "offers": {
                "@type": "Offer",
                "category": "Financial Services",
                "description": "Comprehensive banking and investment solutions with proven success stories"
              }
            })}
          </script>
        </div>
      </main>
    </>
  );
};

export default Placements;