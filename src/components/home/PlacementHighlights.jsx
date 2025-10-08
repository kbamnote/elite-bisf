import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Building, 
  Award,
  ArrowRight,
  MapPin,
  Calendar,
  IndianRupee,
  Star,
  CheckCircle,
  Target
} from 'lucide-react';

const PlacementHighlights = () => {
  const placementStats = [
    {
      icon: Users,
      number: '500+',
      label: 'Students Placed',
      description: 'Successfully placed in top companies',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Placement Rate',
      description: 'Industry-leading success rate',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: IndianRupee,
      number: '₹4.5L',
      label: 'Average Package',
      description: 'Starting salary for freshers',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Building,
      number: '50+',
      label: 'Partner Companies',
      description: 'Direct recruitment partners',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const topRecruiters = [
    { name: 'HDFC Bank', logo: 'https://via.placeholder.com/120x60/0066cc/ffffff?text=HDFC', sector: 'Banking' },
    { name: 'ICICI Bank', logo: 'https://via.placeholder.com/120x60/ff6600/ffffff?text=ICICI', sector: 'Banking' },
    { name: 'SBI', logo: 'https://via.placeholder.com/120x60/004d99/ffffff?text=SBI', sector: 'Banking' },
    { name: 'LIC', logo: 'https://via.placeholder.com/120x60/cc0000/ffffff?text=LIC', sector: 'Insurance' },
    { name: 'Bajaj Finserv', logo: 'https://via.placeholder.com/120x60/9900cc/ffffff?text=BAJAJ', sector: 'Financial Services' },
    { name: 'Kotak Bank', logo: 'https://via.placeholder.com/120x60/cc3300/ffffff?text=KOTAK', sector: 'Banking' }
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      role: 'Banking Associate',
      company: 'HDFC Bank',
      package: '₹4.2L',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial: 'BIFS Institute transformed my career. The practical training and placement support helped me land my dream job in banking.',
      course: 'Advanced BIFS Program',
      location: 'Nagpur'
    },
    {
      name: 'Rahul Patel',
      role: 'Insurance Advisor',
      company: 'LIC of India',
      package: '₹3.8L',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial: 'The comprehensive curriculum and expert faculty at BIFS Institute gave me the confidence to excel in the insurance sector.',
      course: 'Job-Oriented BIFS',
      location: 'Mumbai'
    },
    {
      name: 'Sneha Desai',
      role: 'Financial Consultant',
      company: 'Bajaj Finserv',
      package: '₹5.1L',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial: 'Thanks to BIFS Institute, I not only got placed but also received a higher package than expected. Highly recommended!',
      course: 'BIFS Foundation',
      location: 'Pune'
    }
  ];

  const placementProcess = [
    {
      step: '1',
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation of your BIFS knowledge and skills',
      icon: Target
    },
    {
      step: '2',
      title: 'Resume Building',
      description: 'Professional resume creation highlighting your strengths',
      icon: Award
    },
    {
      step: '3',
      title: 'Interview Preparation',
      description: 'Mock interviews and personality development sessions',
      icon: Users
    },
    {
      step: '4',
      title: 'Job Placement',
      description: 'Direct placement in top BIFS companies',
      icon: Building
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50" id="placements">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="heading-secondary mb-6">
              <span className="text-gradient">Placement Highlights</span>
            </h2>
            <p className="text-large text-gray-600">
              Join our successful alumni who are now thriving in top Banking, Insurance & 
              Financial Services companies across India.
            </p>
          </motion.div>

          {/* Placement Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Success Stories */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Success Stories
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from our successful students who transformed their careers with BIFS Institute
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-md"
                >
                  {/* Student Info */}
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={story.image}
                      alt={`${story.name} - BIFS Institute success story`}
                      className="w-16 h-16 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{story.name}</h4>
                      <p className="text-sm text-gray-600">{story.role}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Building className="w-4 h-4 text-primary-600" />
                        <span className="text-sm font-medium text-primary-600">{story.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Package & Location */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <IndianRupee className="w-4 h-4 text-green-600" />
                      <span className="font-bold text-green-700">{story.package}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{story.location}</span>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                    "{story.testimonial}"
                  </blockquote>

                  {/* Course Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-600">Course: {story.course}</span>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Top Recruiters */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Our Recruitment Partners
              </h3>
              <p className="text-gray-600">Top companies that regularly hire our BIFS graduates</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {topRecruiters.map((company, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center group"
                  >
                    <div className="bg-gray-50 rounded-lg p-4 mb-3 group-hover:shadow-md transition-shadow duration-300">
                      <img
                        src={company.logo}
                        alt={`${company.name} - BIFS Institute recruitment partner`}
                        className="w-full h-12 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-sm font-medium text-gray-900">{company.name}</div>
                    <div className="text-xs text-gray-500">{company.sector}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Placement Process */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Our Placement Process
              </h3>
              <p className="text-gray-600">Step-by-step guidance to ensure your successful placement</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {placementProcess.map((process, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center relative"
                >
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-xl font-bold mb-4">
                    {process.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600 rounded-lg mb-4">
                    <process.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.description}</p>

                  {/* Connector Line */}
                  {index < placementProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
              <div className="max-w-3xl mx-auto space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Ready to Start Your BIFS Career?
                </h3>
                <p className="text-lg opacity-90">
                  Join our next batch and become part of our successful placement stories. 
                  Get guaranteed job placement with top BIFS companies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    aria-label="Apply now for BIFS course with placement guarantee"
                  >
                    Apply Now for Next Batch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/placements"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-300"
                    aria-label="View detailed placement statistics and success stories"
                  >
                    View All Placements
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "BIFS Institute",
          "description": "Leading BIFS training institute with 95% placement rate and 500+ successful placements",
          "alumni": successStories.map(story => ({
            "@type": "Person",
            "name": story.name,
            "jobTitle": story.role,
            "worksFor": {
              "@type": "Organization",
              "name": story.company
            },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "BIFS Institute"
            }
          })),
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "BIFS Certification with Placement Guarantee"
          }
        })}
      </script>
    </section>
  );
};

export default PlacementHighlights;