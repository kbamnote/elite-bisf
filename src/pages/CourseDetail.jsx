import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, Users, Award, ArrowRight, CheckCircle, Star, 
  Calendar, BookOpen, Target, TrendingUp, Download,
  Phone, Mail, MapPin, DollarSign
} from 'lucide-react';
import { SEOHelmet } from '../hooks/useSEO.jsx';
import { courses, getCourseBySlug } from '../data/courses';

const CourseDetail = () => {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  // If course not found, redirect to courses page
  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const pageTitle = `${course.title} | Best BIFS Training in India with Placement`;
  const pageDescription = `${course.description} Duration: ${course.duration}. Price: ₹${course.price.toLocaleString()}. Get certified training with 100% placement support.`;
  const pageKeywords = `${course.title}, BIFS course, banking training, insurance course, financial services certification, ${course.level} level, placement guarantee`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "BIFS Institute",
      "url": "https://bifsinstitute.com",
      "logo": "https://bifsinstitute.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Education Street",
        "addressLocality": "Nagpur",
        "addressRegion": "Maharashtra",
        "postalCode": "440001",
        "addressCountry": "IN"
      }
    },
    "courseCode": course.id,
    "educationalLevel": course.level,
    "timeRequired": course.duration,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": course.rating,
      "reviewCount": course.studentsEnrolled
    },
    "offers": {
      "@type": "Offer",
      "price": course.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString()
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "blended",
      "courseWorkload": course.duration,
      "instructor": {
        "@type": "Person",
        "name": "Expert Faculty"
      }
    }
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": course.title,
        "item": `https://bifsinstitute.com/courses/${course.slug}`
      }
    ]
  };

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
        canonicalUrl={`https://bifsinstitute.com/courses/${course.slug}`}
        structuredData={[structuredData, breadcrumbData]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className={`${course.featured ? 'bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900' : 'bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900'} text-white py-20`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                {/* Breadcrumb */}
                <nav className="mb-6" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-2 text-sm">
                    <li><Link to="/" className="text-primary-200 hover:text-white">Home</Link></li>
                    <li className="text-primary-300">/</li>
                    <li><Link to="/courses" className="text-primary-200 hover:text-white">Courses</Link></li>
                    <li className="text-primary-300">/</li>
                    <li className="text-white font-medium">{course.title}</li>
                  </ol>
                </nav>

                {course.featured && (
                  <div className="mb-4">
                    <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
                      🔥 MOST POPULAR COURSE
                    </span>
                  </div>
                )}

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {course.title}
                </h1>
                <p className="text-xl text-primary-100 mb-8">
                  {course.subtitle}
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-secondary-400" />
                    <div className="text-sm text-primary-200">Duration</div>
                    <div className="font-semibold">{course.duration}</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 mx-auto mb-2 text-secondary-400" />
                    <div className="text-sm text-primary-200">Students</div>
                    <div className="font-semibold">{course.studentsEnrolled}+</div>
                  </div>
                  <div className="text-center">
                    <Star className="w-6 h-6 mx-auto mb-2 text-secondary-400" />
                    <div className="text-sm text-primary-200">Rating</div>
                    <div className="font-semibold">{course.rating}/5</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-6 h-6 mx-auto mb-2 text-secondary-400" />
                    <div className="text-sm text-primary-200">Level</div>
                    <div className="font-semibold">{course.level}</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
                    aria-label={`Enroll now for ${course.title}`}
                  >
                    Enroll Now - ₹{course.price.toLocaleString()}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <button
                    className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
                    aria-label={`Download brochure for ${course.title}`}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </button>
                </div>
              </div>

              {/* Course Image/Video Placeholder */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <BookOpen className="w-24 h-24 mx-auto mb-6 text-secondary-400" />
                  <h3 className="heading-tertiary mb-4">Course Preview</h3>
                  <p className="text-primary-100 mb-6">
                    Get a glimpse of what you'll learn in this comprehensive {course.title} program.
                  </p>
                  <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Watch Preview Video
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Course Content */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-12"
                >
                  {/* Course Description */}
                  <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="heading-tertiary text-gray-900 mb-6">Course Overview</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {course.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This comprehensive program is designed to provide you with in-depth knowledge and practical skills 
                      in Banking, Insurance, and Financial Services. Our industry-expert faculty will guide you through 
                      real-world scenarios and case studies to ensure you're job-ready upon completion.
                    </p>
                  </motion.div>

                  {/* Key Features */}
                  <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="heading-tertiary text-gray-900 mb-6">What You'll Get</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Curriculum */}
                  <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="heading-tertiary text-gray-900 mb-6">Course Curriculum</h2>
                    <div className="space-y-4">
                      {course.curriculum.map((module, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold text-gray-900">
                              Module {index + 1}: {module.title}
                            </h3>
                            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              {module.duration}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4">{module.description}</p>
                          <div className="space-y-2">
                            {module.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center">
                                <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                                <span className="text-sm text-gray-600">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Career Opportunities */}
                  <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="heading-tertiary text-gray-900 mb-6">Career Opportunities</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {course.careerOpportunities.map((career, index) => (
                        <div key={index} className="p-4 bg-primary-50 rounded-lg">
                          <div className="flex items-center mb-3">
                            <Target className="w-5 h-5 text-primary-600 mr-2" />
                            <h3 className="font-semibold text-gray-900">{career.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{career.description}</p>
                          <div className="text-primary-600 font-semibold text-sm">
                            Salary Range: {career.salaryRange}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Pricing Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-100"
                  >
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-primary-600 mb-2">
                        ₹{course.price.toLocaleString()}
                      </div>
                      {course.originalPrice && (
                        <div className="text-lg text-gray-500 line-through">
                          ₹{course.originalPrice.toLocaleString()}
                        </div>
                      )}
                      <div className="text-sm text-gray-600 mt-2">One-time payment</div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Level</span>
                        <span className="font-semibold">{course.level}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Certificate</span>
                        <span className="font-semibold">Yes</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600">Placement Support</span>
                        <span className="font-semibold text-green-600">100%</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Link
                        to="/contact"
                        className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                        aria-label={`Enroll now for ${course.title}`}
                      >
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <button className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50 py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                        Request Callback
                      </button>
                    </div>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-primary-600 mr-3" />
                        <div>
                          <div className="font-semibold">Call Us</div>
                          <div className="text-sm text-gray-600">+91 98765 43210</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-primary-600 mr-3" />
                        <div>
                          <div className="font-semibold">Email Us</div>
                          <div className="text-sm text-gray-600">info@bifsinstitute.com</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-primary-600 mr-3" />
                        <div>
                          <div className="font-semibold">Visit Us</div>
                          <div className="text-sm text-gray-600">Nagpur, Maharashtra</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Batch Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Next Batch</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-900">Next Batch</div>
                          <div className="text-sm text-gray-600">{course.batchInfo.timing}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-primary-600">{course.batchInfo.nextBatch}</div>
                          <div className="text-sm text-gray-600">{course.batchInfo.enrolled}/{course.batchInfo.seats} enrolled</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses */}
        <section className="bg-white section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Other Popular Courses
              </h2>
              <p className="text-xl text-gray-600">
                Explore more BIFS courses to advance your career
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses
                .filter(c => c.id !== course.id)
                .slice(0, 3)
                .map((relatedCourse, index) => (
                <motion.div
                  key={relatedCourse.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{relatedCourse.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{relatedCourse.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary-600">
                        ₹{relatedCourse.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">{relatedCourse.duration}</span>
                    </div>
                    <Link
                      to={`/courses/${relatedCourse.slug}`}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                      aria-label={`View details for ${relatedCourse.title}`}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CourseDetail;