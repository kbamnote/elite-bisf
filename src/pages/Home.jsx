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
        title="Elite Banking & Finance Solutions | Secure Digital Banking Services"
        description="Transform your financial future with Elite Banking's comprehensive services. Secure digital banking, expert investment planning, and personalized financial solutions with 15+ years of trusted excellence."
        keywords="elite banking, digital banking services, investment planning, financial advisory, secure banking, personal banking, business banking, wealth management, financial solutions"
        canonical="/"
        structuredData={[organizationData, breadcrumbData]}
      />

      <main id="main-content" role="main">
        {/* Hero Section */}
        <Suspense fallback={<SectionLoader />}>
          <HeroSection />
        </Suspense>

        {/* About BIFS Section */}
        
          <AboutSection />
     

        {/* Courses Preview Section */}
       
          <CoursesPreview />
   

        {/* Why Choose Us Section */}
        
          <WhyChooseUs />


        {/* Placement Highlights Section */}
        
          <PlacementHighlights />
      

        {/* Testimonials Section */}
       
          <Testimonials />
    
      </main>
    </>
  );
};

export default Home;