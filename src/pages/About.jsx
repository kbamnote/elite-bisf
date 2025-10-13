import { SEOHelmet } from '../hooks/useSEO.jsx';
import { generateStructuredData } from '../utils/seo';
import AboutHero from '../components/about/AboutHero';
import AboutStats from '../components/about/AboutStats';
import AboutContent from '../components/about/AboutContent';
import AboutFeatures from '../components/about/AboutFeatures';
import AboutMission from '../components/about/AboutMission';

const About = () => {
  const organizationData = generateStructuredData('organization');
  
  const breadcrumbData = generateStructuredData('breadcrumb', [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ]);

  return (
    <>
      <SEOHelmet
        title="About Elite Banking | Trusted Financial Partner | 15+ Years Excellence"
        description="Discover Elite Banking - your trusted financial partner with 15+ years of excellence. Comprehensive banking services, investment solutions, and personalized financial planning."
        keywords="about elite banking, trusted financial partner, banking excellence, financial services company, investment advisory"
        canonical="/about"
        structuredData={[organizationData, breadcrumbData]}
      />

      <main id="main-content" role="main">
        {/* Hero Section */}
        <AboutHero />

        {/* Statistics Section */}
        <AboutStats />

        {/* Main Content Section */}
        <AboutContent />

        {/* Features Section */}
        <AboutFeatures />

        {/* Mission Statement Section */}
        <AboutMission />
      </main>
    </>
  );
};

export default About;