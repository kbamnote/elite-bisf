import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, User, MessageSquare,
  CheckCircle, AlertCircle, Building2, Navigation, Globe,
  Facebook, Twitter, Instagram, Linkedin, Youtube
} from 'lucide-react';
import { SEOHelmet } from '../hooks/useSEO.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Campus',
      details: [
        '123 Education Street, Knowledge Park',
        'Mumbai, Maharashtra 400001',
        'India'
      ],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91-9876543210 (Admissions)',
        '+91-9876543211 (Placements)',
        '+91-9876543212 (Support)'
      ],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'admissions@bifsinstitute.com',
        'placements@bifsinstitute.com',
        'info@bifsinstitute.com'
      ],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 7:00 PM',
        'Saturday: 9:00 AM - 5:00 PM',
        'Sunday: 10:00 AM - 4:00 PM'
      ],
      action: 'View Schedule'
    }
  ];

  const branches = [
    {
      name: 'Mumbai (Head Office)',
      address: '123 Education Street, Knowledge Park, Mumbai - 400001',
      phone: '+91-9876543210',
      email: 'mumbai@bifsinstitute.com'
    },
    {
      name: 'Delhi Branch',
      address: '456 Learning Avenue, CP, New Delhi - 110001',
      phone: '+91-9876543220',
      email: 'delhi@bifsinstitute.com'
    },
    {
      name: 'Bangalore Branch',
      address: '789 Tech Boulevard, Koramangala, Bangalore - 560034',
      phone: '+91-9876543230',
      email: 'bangalore@bifsinstitute.com'
    },
    {
      name: 'Pune Branch',
      address: '321 Innovation Road, Hinjewadi, Pune - 411057',
      phone: '+91-9876543240',
      email: 'pune@bifsinstitute.com'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'text-blue-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'text-sky-500' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'text-pink-600' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'text-blue-700' },
    { icon: Youtube, name: 'YouTube', url: '#', color: 'text-red-600' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <MessageSquare className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get in <span className="text-yellow-400">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Ready to transform your career? We're here to guide you every step of the way
              </p>
              
              {/* Quick Contact */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919876543210"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91-9876543210
                </a>
                <a
                  href="mailto:admissions@bifsinstitute.com"
                  className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-green-800">
                        Thank you! Your message has been sent successfully. We'll contact you soon.
                      </span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                          Course Interest
                        </label>
                        <select
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a course</option>
                          <option value="foundation">BIFS Foundation</option>
                          <option value="advanced">BIFS Advanced</option>
                          <option value="job-oriented">BIFS Job-Oriented</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your career goals and how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label={isSubmitting ? "Sending your message..." : "Send your message to BIFS Institute"}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 mb-8">
                    We're here to help you achieve your career goals. Reach out to us through any of these channels.
                  </p>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-600">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Social Media */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          className={`p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 ${social.color}`}
                          aria-label={social.name}
                        >
                          <IconComponent className="w-6 h-6" aria-hidden="true" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Visit Our <span className="text-blue-600">Campus</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience our world-class facilities and meet our expert faculty in person
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Google Map Placeholder */}
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-gray-500 mb-4">
                    123 Education Street, Knowledge Park<br />
                    Mumbai, Maharashtra 400001
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center mx-auto">
                    <Navigation className="mr-2 w-5 h-5" />
                    Get Directions
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Branch Locations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-blue-600">Locations</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find a BIFS Institute campus near you across major cities in India
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {branches.map((branch, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {branch.name}
                      </h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-start">
                          <MapPin className="w-4 h-4 mt-1 mr-2 text-gray-400" />
                          <span>{branch.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-gray-400" />
                          <a href={`tel:${branch.phone}`} className="hover:text-blue-600">
                            {branch.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-gray-400" />
                          <a href={`mailto:${branch.email}`} className="hover:text-blue-600">
                            {branch.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked <span className="text-blue-600">Questions</span>
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions about admissions and courses
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  question: "What are the admission requirements?",
                  answer: "Minimum 12th pass or equivalent. No prior experience in banking required."
                },
                {
                  question: "How long are the courses?",
                  answer: "Course duration varies from 3-12 months depending on the program selected."
                },
                {
                  question: "Do you provide placement assistance?",
                  answer: "Yes, we have a dedicated placement cell with 95% success rate and partnerships with 150+ companies."
                },
                {
                  question: "Are there any scholarships available?",
                  answer: "Yes, we offer merit-based scholarships and special discounts for early enrollments."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;