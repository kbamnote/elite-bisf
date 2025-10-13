import { SEOHelmet } from '../hooks/useSEO.jsx';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import ContactFAQ from '../components/contact/ContactFAQ';

const Contact = () => {

  return (
    <>
      <SEOHelmet
        title="Contact Us - Get in Touch | BIFS Institute"
        description="Contact BIFS Institute for admissions, course information, and career guidance. Visit our campuses in Mumbai, Delhi, Bangalore, and Pune. Call +91-9876543210 for immediate assistance."
        keywords="contact BIFS institute, admissions enquiry, course information, campus locations, phone number, email address, office hours"
        canonicalUrl="https://bifsinstitute.com/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "BIFS Institute",
          "description": "Leading Banking, Insurance & Financial Services training institute",
          "url": "https://bifsinstitute.com",
          "logo": "https://bifsinstitute.com/logo.png",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-9876543210",
              "contactType": "Admissions",
              "availableLanguage": ["English", "Hindi"]
            },
            {
              "@type": "ContactPoint",
              "telephone": "+91-9876543211",
              "contactType": "Placements",
              "availableLanguage": ["English", "Hindi"]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Education Street, Knowledge Park",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "19.0760",
            "longitude": "72.8777"
          },
          "openingHours": [
            "Mo-Fr 09:00-19:00",
            "Sa 09:00-17:00",
            "Su 10:00-16:00"
          ],
          "sameAs": [
            "https://facebook.com/bifsinstitute",
            "https://twitter.com/bifsinstitute",
            "https://linkedin.com/company/bifsinstitute",
            "https://instagram.com/bifsinstitute",
            "https://youtube.com/bifsinstitute"
          ]
        }}
        breadcrumbData={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <ContactMap />
        <ContactFAQ />
      </div>
    </>
  );
};

export default Contact;