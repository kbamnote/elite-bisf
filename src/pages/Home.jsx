import { lazy, Suspense } from 'react';
import { SEOHelmet } from '../hooks/useSEO.jsx';
import { generateStructuredData } from '../utils/seo';

// Lazy load components for better performance
const HeroSection = lazy(() => import('../components/home/HeroSection'));
const AboutSection = lazy(() => import('../components/home/AboutSection'));
const CoursesPreview = lazy(() => import('../components/home/CoursesPreview'));
const WhyChooseUs = lazy(() => import('../components/home/WhyChooseUs'));
const PlacementHighlights = lazy(() => import('../components/home/PlacementHighlights'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));

// Loading component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-16">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
);

const Home = () => {
  const organizationData = generateStructuredData('organization');
  
  const breadcrumbData = generateStructuredData('breadcrumb', [
    { name: 'Home', url: '/' }
  ]);

  return (
    <>
      <SEOHelmet
        title="Best BIFS Course in India | Top Banking & Finance Training Institute Nagpur"
        description="Join India's #1 BIFS training institute in Nagpur. Get certified in Banking, Insurance & Financial Services with 100% placement assistance. Expert faculty, industry curriculum."
        keywords="best BIFS course India, BIFS course Nagpur, banking training institute, insurance course, financial services certification, job oriented BIFS program"
        canonical="/"
        structuredData={[organizationData, breadcrumbData]}
      />

      <main id="main-content" role="main">
        {/* Hero Section */}
        <Suspense fallback={<SectionLoader />}>
          <HeroSection />
        </Suspense>

        {/* About BIFS Section */}
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>

        {/* Courses Preview Section */}
        <Suspense fallback={<SectionLoader />}>
          <CoursesPreview />
        </Suspense>

        {/* Why Choose Us Section */}
        <Suspense fallback={<SectionLoader />}>
          <WhyChooseUs />
        </Suspense>

        {/* Placement Highlights Section */}
        <Suspense fallback={<SectionLoader />}>
          <PlacementHighlights />
        </Suspense>

        {/* Testimonials Section */}
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
      </main>
    </>
  );
};

export default Home;