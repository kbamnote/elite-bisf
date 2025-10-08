import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import SkipLink from './common/SkipLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCoursesOpen(false);
  }, [location]);

  const courses = [
    { name: 'BIFS Foundation Program', slug: '/courses/bifs-foundation-program' },
    { name: 'Advanced BIFS Program', slug: '/courses/advanced-bifs-program' },
    { name: 'Job-Oriented BIFS Program', slug: '/courses/job-oriented-bifs-program' }
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses', hasDropdown: true },
    { name: 'Placement', path: '/placements' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Skip Navigation Link */}
      <SkipLink href="#main-content" />

      {/* Top Bar */}
      <div className="bg-dark text-white py-3 hidden lg:block border-b border-gold/20">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-gold" />
                <span className="text-gray-200">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-gold" />
                <span className="text-gray-200">info@bifsinstitute.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-gold" />
                <span className="text-gray-200">Nagpur, Maharashtra</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 font-medium">Follow Us:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/bifsinstitute" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="text-gray-200 hover:text-gold transition-colors duration-300"
                >
                  Facebook
                </a>
                <a 
                  href="https://linkedin.com/company/bifsinstitute" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                  className="text-gray-200 hover:text-gold transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-xl backdrop-blur-sm border-b border-gray-200' 
            : 'bg-white/98 backdrop-blur-sm'
        }`}
      >
        <nav className="container-custom" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-4 focus:outline-none focus:ring-2 focus:ring-gold rounded-lg p-2 -m-2"
              aria-label="BIFS Institute Home"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-dark font-bold text-2xl font-serif">B</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-dark font-serif">BIFS Institute</h1>
                <p className="text-sm text-gray-600 font-medium">Banking • Insurance • Financial Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsCoursesOpen(true)}
                      onMouseLeave={() => setIsCoursesOpen(false)}
                    >
                      <button
                        className={`flex items-center space-x-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold ${
                          location.pathname.startsWith('/courses')
                            ? 'text-gold bg-gold/10 border border-gold/20'
                            : 'text-dark hover:text-gold hover:bg-gold/5'
                        }`}
                        aria-expanded={isCoursesOpen}
                        aria-haspopup="menu"
                        aria-label="Courses menu"
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} 
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence>
                        {isCoursesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50"
                            role="menu"
                          >
                            {courses.map((course) => (
                              <Link
                                key={course.slug}
                                to={course.slug}
                                className="block px-6 py-3 text-dark hover:bg-gold/10 hover:text-gold transition-all duration-300 focus:outline-none focus:bg-gold/10 focus:text-gold border-l-4 border-transparent hover:border-gold"
                                role="menuitem"
                                aria-label={`View ${course.name} details`}
                              >
                                <div className="font-medium">{course.name}</div>
                                <div className="text-sm text-gray-600 mt-1">Professional certification program</div>
                              </Link>
                            ))}
                            <div className="border-t border-gray-200 mt-3 pt-3">
                              <Link
                                to="/courses"
                                className="block px-6 py-3 text-gold font-semibold hover:bg-gold/10 transition-all duration-300 focus:outline-none focus:bg-gold/10"
                                role="menuitem"
                                aria-label="View all BIFS courses"
                              >
                                View All Courses →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold ${
                        location.pathname === item.path
                          ? 'text-gold bg-gold/10 border border-gold/20'
                          : 'text-dark hover:text-gold hover:bg-gold/5'
                      }`}
                      aria-label={`Go to ${item.name} page`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <Link
                to="/courses"
                className="btn-primary ml-4"
                aria-label="Enroll Now for BIFS courses"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-lg text-dark hover:bg-gold/10 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden border-t border-gray-200 py-6 bg-white"
              >
                <div className="space-y-3">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            className="w-full flex items-center justify-between px-4 py-3 text-left text-dark hover:bg-gold/10 hover:text-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300"
                            onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                            aria-expanded={isCoursesOpen}
                            aria-label="Toggle courses menu"
                          >
                            <span className="font-medium">{item.name}</span>
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} 
                              aria-hidden="true"
                            />
                          </button>
                          
                          <AnimatePresence>
                            {isCoursesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-6 mt-3 space-y-2"
                              >
                                {courses.map((course) => (
                                  <Link
                                    key={course.slug}
                                    to={course.slug}
                                    className="block px-4 py-3 text-gray-700 hover:bg-gold/10 hover:text-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 border-l-4 border-transparent hover:border-gold"
                                    aria-label={`View ${course.name} details`}
                                  >
                                    <div className="font-medium">{course.name}</div>
                                    <div className="text-sm text-gray-500 mt-1">Professional certification</div>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold ${
                            location.pathname === item.path
                              ? 'text-gold bg-gold/10 border border-gold/20'
                              : 'text-dark hover:text-gold hover:bg-gold/10'
                          }`}
                          aria-label={`Go to ${item.name} page`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <div className="pt-6 border-t border-gray-200 mt-6">
                    <Link
                      to="/courses"
                      className="btn-primary w-full text-center"
                      aria-label="Enroll Now for BIFS courses"
                    >
                      Enroll Now
                    </Link>
                    <Link
                      to="/contact"
                      className="btn-secondary w-full text-center mt-3"
                      aria-label="Book Free Counseling"
                    >
                      Book Free Counseling
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Header;