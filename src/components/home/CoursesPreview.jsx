import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Award, 
  BookOpen,
  TrendingUp,
  Star,
  CheckCircle
} from 'lucide-react';
import { getCoursesForPreview } from '../../data/courses';

const CoursesPreview = () => {
  const courses = getCoursesForPreview();

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
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-accent" id="courses">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-8">
              Our <span className="text-gradient">BIFS Courses</span>
            </h2>
            <p className="text-large text-gray-600 leading-relaxed">
              Choose from our comprehensive Banking, Insurance & Financial Services programs 
              designed to fast-track your career in the financial sector with industry-expert training.
            </p>
          </motion.div>

          {/* Courses Grid */}
          <div className="grid lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={cardVariants}
                whileHover="hover"
                className="card group relative overflow-hidden"
              >
                {/* Course Image */}
                <div className="relative h-56 overflow-hidden rounded-lg mb-6">
                  <img
                    src={course.image}
                    alt={`${course.title} - BIFS training program`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent"></div>
                  
                  {/* Course Level Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gold text-dark shadow-lg">
                      {course.level}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center space-x-2 shadow-lg">
                    <Star className="w-4 h-4 text-gold fill-current" />
                    <span className="text-sm font-bold text-dark">4.9</span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="space-y-6">
                  {/* Course Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-gold transition-colors duration-300 font-serif">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-2">
                      {course.description}
                    </p>
                  </div>

                  {/* Course Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gold" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gold" />
                      <span className="font-medium">{course.batchSize} students</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-3xl font-bold text-dark font-serif">₹{course.price.toLocaleString()}</span>
                        {course.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-3">
                            ₹{course.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {course.originalPrice && (
                        <div className="bg-gold/10 text-gold px-3 py-2 rounded-lg text-sm font-bold border border-gold/20">
                          Save ₹{(course.originalPrice - course.price).toLocaleString()}
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <Link
                        to={`/courses/${course.slug}`}
                        className="w-full btn-primary inline-flex items-center justify-center group"
                        aria-label={`View ${course.title} details`}
                      >
                        View BIFS {course.shortName} Course
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      
                      <Link
                        to="/contact"
                        className="w-full btn-secondary inline-flex items-center justify-center"
                        aria-label={`Get free demo for ${course.title} course`}
                      >
                        Get Free Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <div className="card bg-dark text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-dark/90"></div>
              <div className="relative max-w-2xl mx-auto space-y-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 text-gold rounded-xl border border-gold/30">
                  <BookOpen className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-white font-serif">
                  Not Sure Which Course to Choose?
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Get personalized course recommendations based on your career goals and background. 
                  Our expert counselors will help you choose the perfect BIFS program for your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="btn-gold inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
                    aria-label="Get free career counseling for BIFS courses"
                  >
                    Get Free Counseling
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Link>
                  <Link
                    to="/courses"
                    className="btn-outline-gold inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
                    aria-label="Compare all BIFS courses and programs"
                  >
                    Compare All Courses
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Course Statistics */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '500+', label: 'Students Enrolled', color: 'text-gold' },
              { icon: Award, number: '95%', label: 'Course Completion', color: 'text-gold' },
              { icon: TrendingUp, number: '90%', label: 'Placement Rate', color: 'text-gold' },
              { icon: Star, number: '4.9/5', label: 'Student Rating', color: 'text-gold' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 card group hover:bg-dark hover:text-white transition-all duration-500">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gold/10 mb-6 ${stat.color} group-hover:bg-gold/20 transition-colors duration-500`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-dark mb-3 font-serif group-hover:text-white transition-colors duration-500">{stat.number}</div>
                <div className="text-gray-600 font-medium group-hover:text-gray-300 transition-colors duration-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "BIFS Courses - Banking Insurance Financial Services Training Programs",
          "description": "Comprehensive BIFS training courses including Foundation, Advanced, and Job-Oriented programs",
          "itemListElement": courses.map((course, index) => ({
            "@type": "Course",
            "position": index + 1,
            "name": course.title,
            "description": course.description,
            "provider": {
              "@type": "EducationalOrganization",
              "name": "BIFS Institute"
            },
            "courseMode": "classroom",
            "timeRequired": course.duration,
            "offers": {
              "@type": "Offer",
              "price": course.price,
              "priceCurrency": "INR"
            }
          }))
        })}
      </script>
    </section>
  );
};

export default CoursesPreview;