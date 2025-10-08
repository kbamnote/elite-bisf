import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, Award, ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { SEOHelmet } from '../hooks/useSEO.jsx';
import { courses } from '../data/courses';

const Courses = () => {
  const pageTitle = "Best BIFS Courses in India | Banking Insurance Financial Services Training";
  const pageDescription = "Explore our comprehensive BIFS courses - Foundation, Advanced, and Job-Oriented programs. Get certified training in Banking, Insurance & Financial Services with guaranteed placement support.";
  const pageKeywords = "BIFS courses, banking courses, insurance training, financial services certification, BIFS training institute, banking job training, placement guarantee";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "BIFS Courses",
    "description": "Comprehensive Banking, Insurance & Financial Services courses",
    "numberOfItems": courses.length,
    "itemListElement": courses.map((course, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": course.title,
      "description": course.description,
      "provider": {
        "@type": "EducationalOrganization",
        "name": "BIFS Institute",
        "url": "https://bifsinstitute.com"
      },
      "courseCode": course.id,
      "educationalLevel": course.level,
      "timeRequired": course.duration,
      "offers": {
        "@type": "Offer",
        "price": course.price,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    }))
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bifsinstitute.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://bifsinstitute.com/courses"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <>
      <SEOHelmet
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl="https://bifsinstitute.com/courses"
        structuredData={[structuredData, breadcrumbData]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Best BIFS Courses in <span className="text-secondary-400">India</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto">
                Master Banking, Insurance & Financial Services with our industry-certified programs. 
                Choose from Foundation, Advanced, or Job-Oriented courses with guaranteed placement support.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-secondary-400" />
                  Industry Certified
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-secondary-400" />
                  Expert Faculty
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-secondary-400" />
                  100% Placement Support
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Course Header */}
                  <div className={`p-6 ${course.featured ? 'bg-gradient-to-r from-secondary-500 to-secondary-600' : 'bg-gradient-to-r from-primary-600 to-primary-700'} text-white relative`}>
                    {course.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                          POPULAR
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <p className="text-primary-100 mb-4">{course.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">₹{course.price.toLocaleString()}</div>
                        {course.originalPrice && (
                          <div className="text-sm line-through opacity-75">₹{course.originalPrice.toLocaleString()}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {course.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{course.studentsEnrolled}+</div>
                        <div className="text-xs text-gray-600">Students Enrolled</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-lg font-bold text-gray-900 ml-1">{course.rating}</span>
                        </div>
                        <div className="text-xs text-gray-600">Average Rating</div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Link
                        to={`/courses/${course.slug}`}
                        className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group"
                        aria-label={`View details for ${course.title}`}
                      >
                        View Course Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <button
                        className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50 py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                        aria-label={`Download brochure for ${course.title}`}
                      >
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Our Courses */}
        <section className="bg-white section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our BIFS Courses?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive training programs are designed to make you industry-ready with practical skills and guaranteed placement support.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Industry Certification",
                  description: "Get certified by leading industry bodies and enhance your career prospects"
                },
                {
                  icon: Users,
                  title: "Expert Faculty",
                  description: "Learn from industry professionals with 10+ years of experience"
                },
                {
                  icon: TrendingUp,
                  title: "100% Placement",
                  description: "Guaranteed job placement with our extensive network of partner companies"
                },
                {
                  icon: CheckCircle,
                  title: "Practical Training",
                  description: "Hands-on experience with real-world projects and case studies"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your BIFS Career?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Join thousands of successful professionals who started their journey with us. 
                Get expert guidance and guaranteed placement support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
                  aria-label="Contact us for course enrollment"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/placements"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
                  aria-label="View our placement success stories"
                >
                  View Placements
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;