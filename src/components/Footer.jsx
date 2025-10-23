import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Twitter,
  ArrowRight,
  Award,
  Users,
  BookOpen
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'All Courses', path: '/courses' },
    { name: 'Placement Support', path: '/placements' },
    { name: 'Blog & Resources', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Admission Process', path: '/admission' }
  ];

  const courses = [
    { name: 'BIFS Foundation Program', path: '/courses/bifs-foundation-program' },
    { name: 'Advanced BIFS Program', path: '/courses/advanced-bifs-program' },
    { name: 'Job-Oriented BIFS Program', path: '/courses/job-oriented-bifs-program' }
  ];

  const resources = [
    { name: 'Career Guidance', path: '/blog/career-guidance' },
    { name: 'Industry Insights', path: '/blog/industry-insights' },
    { name: 'Exam Preparation', path: '/blog/exam-preparation' },
    { name: 'Success Stories', path: '/placements#success-stories' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Downloads', path: '/downloads' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/bifsinstitute', 
      icon: Facebook,
      label: 'Follow BIFS Institute on Facebook'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/bifsinstitute', 
      icon: Linkedin,
      label: 'Connect with BIFS Institute on LinkedIn'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/bifsinstitute', 
      icon: Instagram,
      label: 'Follow BIFS Institute on Instagram'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/bifsinstitute', 
      icon: Twitter,
      label: 'Follow BIFS Institute on Twitter'
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Students Placed' },
    { icon: Award, number: '10+', label: 'Years Experience' },
    { icon: BookOpen, number: '3', label: 'Specialized Courses' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BIFS Institute</h3>
                <p className="text-gray-400 text-sm">Banking • Insurance • Financial Services</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading BIFS training institute in Nagpur, empowering students with industry-ready skills 
              in Banking, Insurance & Financial Services with guaranteed placement support.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label={social.label}
                >
                  <social.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors flex items-center group focus:outline-none focus:text-primary-400"
                    aria-label={`Go to ${link.name} page`}
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.path}>
                  <Link
                    to={course.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors flex items-center group focus:outline-none focus:text-primary-400"
                    aria-label={`View ${course.name} details`}
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4 mt-8">Resources</h4>
            <ul className="space-y-3">
              {resources.slice(0, 3).map((resource) => (
                <li key={resource.path}>
                  <Link
                    to={resource.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors flex items-center group focus:outline-none focus:text-primary-400"
                    aria-label={`Go to ${resource.name} section`}
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    1st Floor Mohota Complex,<br />
                    Above State Bank Of India,<br />
                    Katol Road, Chhaoni Rd,<br />
                    Nagpur, Maharashtra, 440013
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+918855885807" 
                    className="text-gray-300 hover:text-primary-400 transition-colors focus:outline-none focus:text-primary-400"
                    aria-label="Call BIFS Institute"
                  >
                    +91 8855885807
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@elitebifs.in" 
                    className="text-gray-300 hover:text-primary-400 transition-colors focus:outline-none focus:text-primary-400"
                    aria-label="Email BIFS Institute"
                  >
                    info@elitebifs.in
                  </a>
                  <br />
                  <a 
                    href="mailto:" 
                    className="text-gray-300 hover:text-primary-400 transition-colors focus:outline-none focus:text-primary-400"
                    aria-label="Email BIFS Institute admissions"
                  >
                    
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p><strong>Mon - Sat:</strong> 9:00 AM - 8:00 PM</p>
                  <p><strong>Sunday:</strong> 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Get admission information for BIFS courses"
              >
                Get Admission Info
                <ArrowRight size={16} className="ml-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} BIFS Institute. All rights reserved. | 
              <Link 
                to="/privacy-policy" 
                className="hover:text-primary-400 transition-colors ml-1 focus:outline-none focus:text-primary-400"
                aria-label="View privacy policy"
              >
                Privacy Policy
              </Link> | 
              <Link 
                to="/terms-of-service" 
                className="hover:text-primary-400 transition-colors ml-1 focus:outline-none focus:text-primary-400"
                aria-label="View terms of service"
              >
                Terms of Service
              </Link>
            </div>
            
            <div className="text-gray-400 text-sm">
              Designed & Developed with ❤️ for Banking Education
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "BIFS Institute",
          "alternateName": "Banking Insurance Financial Services Institute",
          "url": "https://bifsinstitute.com",
          "logo": "https://bifsinstitute.com/logo.png",
          "description": "Leading BIFS training institute in Nagpur offering comprehensive Banking, Insurance & Financial Services courses with placement assistance.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Plot No. 123, BIFS Complex, Near IT Park",
            "addressLocality": "Nagpur",
            "addressRegion": "Maharashtra",
            "postalCode": "440001",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9876543210",
            "contactType": "Admissions",
            "availableLanguage": ["English", "Hindi", "Marathi"]
          },
          "sameAs": [
            "https://facebook.com/bifsinstitute",
            "https://linkedin.com/company/bifsinstitute",
            "https://instagram.com/bifsinstitute",
            "https://twitter.com/bifsinstitute"
          ]
        })}
      </script>
    </footer>
  );
};

export default Footer;