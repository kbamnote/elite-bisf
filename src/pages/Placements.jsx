import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Award, Building2, Star, Quote, 
  ArrowRight, CheckCircle, Target, Calendar, MapPin,
  Phone, Mail, ExternalLink, Briefcase, GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHelmet } from '../hooks/useSEO.jsx';

const Placements = () => {
  const placementStats = {
    studentsPlaced: 2500,
    placementRate: 95,
    averagePackage: 4.5,
    highestPackage: 12,
    partnerCompanies: 150,
    averageTime: 30
  };

  const topRecruiters = [
    { name: 'TCS', logo: '🏢', sector: 'IT Services' },
    { name: 'Infosys', logo: '💼', sector: 'Technology' },
    { name: 'Wipro', logo: '🌐', sector: 'IT Consulting' },
    { name: 'Accenture', logo: '⚡', sector: 'Consulting' },
    { name: 'Cognizant', logo: '🔷', sector: 'Digital Services' },
    { name: 'HCL Technologies', logo: '🏭', sector: 'Technology' },
    { name: 'Tech Mahindra', logo: '🚀', sector: 'IT Services' },
    { name: 'Capgemini', logo: '💎', sector: 'Consulting' },
    { name: 'IBM', logo: '🔵', sector: 'Technology' },
    { name: 'Microsoft', logo: '🪟', sector: 'Software' },
    { name: 'Amazon', logo: '📦', sector: 'E-commerce' },
    { name: 'Google', logo: '🔍', sector: 'Technology' }
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      course: 'BIFS Foundation',
      company: 'TCS',
      package: '4.2 LPA',
      image: '👩‍💼',
      story: 'BIFS transformed my career completely. The practical training and industry exposure helped me secure a great position at TCS.',
      location: 'Bangalore'
    },
    {
      name: 'Rahul Kumar',
      course: 'BIFS Advanced',
      company: 'Infosys',
      package: '6.5 LPA',
      image: '👨‍💻',
      story: 'The comprehensive curriculum and expert faculty at BIFS prepared me well for the corporate world. Highly recommended!',
      location: 'Hyderabad'
    },
    {
      name: 'Sneha Patel',
      course: 'BIFS Job-Oriented',
      company: 'Wipro',
      package: '5.8 LPA',
      image: '👩‍🎓',
      story: 'Thanks to BIFS excellent placement support, I got placed in my dream company within 2 weeks of course completion.',
      location: 'Pune'
    },
    {
      name: 'Amit Singh',
      course: 'BIFS Advanced',
      company: 'Accenture',
      package: '7.2 LPA',
      image: '👨‍💼',
      story: 'The industry-relevant skills I learned at BIFS made me stand out during interviews. Great investment in my future!',
      location: 'Mumbai'
    }
  ];

  const placementProcess = [
    {
      step: 1,
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation of technical and soft skills',
      icon: Target
    },
    {
      step: 2,
      title: 'Resume Building',
      description: 'Professional resume creation and optimization',
      icon: Award
    },
    {
      step: 3,
      title: 'Interview Preparation',
      description: 'Mock interviews and personality development sessions',
      icon: Users
    },
    {
      step: 4,
      title: 'Company Matching',
      description: 'Matching candidates with suitable job opportunities',
      icon: Building2
    },
    {
      step: 5,
      title: 'Interview Coordination',
      description: 'Scheduling and coordinating interviews with companies',
      icon: Calendar
    },
    {
      step: 6,
      title: 'Offer Negotiation',
      description: 'Support in salary negotiation and offer finalization',
      icon: TrendingUp
    }
  ];

  const jobRoles = [
    'Business Analyst',
    'Financial Analyst',
    'Data Analyst',
    'Investment Banking Associate',
    'Risk Management Specialist',
    'Portfolio Manager',
    'Credit Analyst',
    'Operations Manager',
    'Relationship Manager',
    'Compliance Officer',
    'Treasury Analyst',
    'Financial Consultant'
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
        title="Placements - 95% Success Rate | BIFS Institute"
        description="Discover BIFS Institute's exceptional placement record with 95% success rate, 2500+ students placed, and partnerships with 150+ top companies. Join our success stories today!"
        keywords="BIFS placements, job placement, career opportunities, banking jobs, finance careers, placement statistics, top recruiters, success stories"
        canonicalUrl="https://bifsinstitute.com/placements"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "BIFS Institute",
          "description": "Leading Banking, Insurance & Financial Services training institute with exceptional placement record",
          "url": "https://bifsinstitute.com",
          "logo": "https://bifsinstitute.com/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Education Street",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400001",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9876543210",
            "contactType": "Admissions"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500"
          },
          "offers": {
            "@type": "Offer",
            "category": "Placement Services",
            "description": "95% placement success rate with top companies"
          }
        }}
        breadcrumbData={[
          { name: "Home", url: "/" },
          { name: "Placements", url: "/placements" }
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Exceptional <span className="text-yellow-400">Placement</span> Record
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Join 2500+ successful professionals who launched their careers with BIFS Institute
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                    {placementStats.studentsPlaced}+
                  </div>
                  <div className="text-sm md:text-base text-blue-200">Students Placed</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                    {placementStats.placementRate}%
                  </div>
                  <div className="text-sm md:text-base text-blue-200">Placement Rate</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                    ₹{placementStats.averagePackage}L
                  </div>
                  <div className="text-sm md:text-base text-blue-200">Average Package</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                    {placementStats.partnerCompanies}+
                  </div>
                  <div className="text-sm md:text-base text-blue-200">Partner Companies</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Top Recruiters */}
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
                Our <span className="text-blue-600">Top Recruiters</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We have strong partnerships with leading companies across various sectors
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {topRecruiters.map((company, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-3">{company.logo}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{company.name}</h3>
                  <p className="text-sm text-gray-600">{company.sector}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Success Stories */}
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
                Student <span className="text-blue-600">Success Stories</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from our alumni who are now thriving in their careers
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-5xl">{story.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {story.course}
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {story.company}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                          {story.package}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{story.location}</span>
                      </div>
                      <Quote className="w-6 h-6 text-blue-600 mb-2" />
                      <p className="text-gray-700 italic">{story.story}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Placement Process */}
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
                Our <span className="text-blue-600">Placement Process</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A systematic approach to ensure your successful career transition
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {placementProcess.map((process, index) => {
                const IconComponent = process.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100"
                  >
                    <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {process.step}
                    </div>
                    <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Job Roles */}
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
                Popular <span className="text-blue-600">Job Roles</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the diverse career opportunities available after completing our BIFS programs
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {jobRoles.map((role, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">{role}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GraduationCap className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Join thousands of successful professionals who transformed their careers with BIFS Institute
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/courses"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Contact Us
                </Link>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+91-9876543210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>placements@bifsinstitute.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Placements;