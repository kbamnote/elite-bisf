import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import EnrollmentModal from './ui/EnrollmentModal';
import ContactModal from './ui/ContactModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Modal handlers
  const openEnrollmentModal = () => {
    setIsEnrollmentModalOpen(true);
  };

  const closeEnrollmentModal = () => {
    setIsEnrollmentModalOpen(false);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

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
      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-xl backdrop-blur-sm border-b border-gray-200' 
            : 'bg-white/98 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2 -m-2 group"
              aria-label="BIFS Institute Home"
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                whileHover={{ rotate: 360, scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>B</span>
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>BIFS Institute</h1>
                <p className="text-xs text-gray-600 font-medium">Banking • Insurance • Financial Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsCoursesOpen(true)}
                      onMouseLeave={() => setIsCoursesOpen(false)}
                    >
                      <button
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 relative overflow-hidden group ${
                          location.pathname.startsWith('/courses')
                            ? 'text-blue-600 bg-blue-50 border border-blue-200'
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                        aria-expanded={isCoursesOpen}
                        aria-haspopup="menu"
                        aria-label="Courses menu"
                      >
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-300 relative z-10 ${isCoursesOpen ? 'rotate-180' : ''}`} 
                          aria-hidden="true"
                        />
                        <div className="absolute inset-0 bg-blue-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </button>

                      <AnimatePresence>
                        {isCoursesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 py-3 z-50"
                            role="menu"
                          >
                            {courses.map((course, index) => (
                              <motion.div
                                key={course.slug}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <Link
                                  to={course.slug}
                                  onClick={scrollToTop}
                                  className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 focus:outline-none focus:bg-blue-50 focus:text-blue-600 border-l-4 border-transparent hover:border-blue-600"
                                  role="menuitem"
                                  aria-label={`View ${course.name} details`}
                                >
                                  <div className="font-medium">{course.name}</div>
                                  <div className="text-sm text-gray-500 mt-1">Professional certification program</div>
                                </Link>
                              </motion.div>
                            ))}
                            <div className="border-t border-gray-200 mt-3 pt-3">
                              <Link
                                to="/courses"
                                onClick={scrollToTop}
                                className="block px-6 py-3 text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:bg-blue-50"
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
                      onClick={scrollToTop}
                      className={`relative overflow-hidden px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 group ${
                        location.pathname === item.path
                          ? 'text-blue-600 bg-blue-50 border border-blue-200'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                      aria-label={`Go to ${item.name} page`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-blue-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* <button
                onClick={openContactModal}
                className="relative overflow-hidden px-6 py-2.5 ml-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 group"
                aria-label="Contact Us for course information"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button> */}
              
              <button
                onClick={openEnrollmentModal}
                className="relative overflow-hidden px-6 py-2.5 ml-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
                aria-label="Enroll Now for BIFS courses"
              >
                <span className="relative z-10">Enroll Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
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
                  {navItems.map((item, index) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.hasDropdown ? (
                        <div>
                          <button
                            className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
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
                                    onClick={scrollToTop}
                                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 border-l-4 border-transparent hover:border-blue-600"
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
                          onClick={scrollToTop}
                          className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            location.pathname === item.path
                              ? 'text-blue-600 bg-blue-50 border border-blue-200'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                          aria-label={`Go to ${item.name} page`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  
                  <div className="pt-6 border-t border-gray-200 mt-6 space-y-3">
                    <button
                      onClick={openEnrollmentModal}
                      className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Enroll Now for BIFS courses"
                    >
                      Enroll Now
                    </button>
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className="block w-full px-6 py-3 bg-white text-blue-600 text-center font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      
      {/* Enrollment Modal */}
      <EnrollmentModal 
        isOpen={isEnrollmentModalOpen} 
        onClose={closeEnrollmentModal} 
      />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </>
  );
};

export default Header;