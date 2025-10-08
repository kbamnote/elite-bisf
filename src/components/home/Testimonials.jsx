import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Award,
  Building,
  MapPin,
  Calendar
} from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Banking Associate',
      company: 'HDFC Bank',
      location: 'Nagpur',
      course: 'Advanced BIFS Program',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial: 'BIFS Institute completely transformed my career. The practical training approach and industry-expert faculty helped me understand banking operations thoroughly. The placement support was exceptional - they prepared me for interviews and helped me land my dream job at HDFC Bank.',
      package: '₹4.2L',
      joinDate: 'Jan 2023',
      highlights: ['Practical Training', 'Expert Faculty', 'Placement Support']
    },
    {
      id: 2,
      name: 'Rahul Patel',
      role: 'Insurance Advisor',
      company: 'LIC of India',
      location: 'Mumbai',
      course: 'Job-Oriented BIFS',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial: 'The comprehensive curriculum at BIFS Institute covered all aspects of insurance and financial services. The hands-on training with real case studies gave me the confidence to excel in my role. I highly recommend this institute to anyone looking to build a career in BIFS.',
      package: '₹3.8L',
      joinDate: 'Mar 2023',
      highlights: ['Comprehensive Curriculum', 'Real Case Studies', 'Industry Ready']
    },
    {
      id: 3,
      name: 'Sneha Desai',
      role: 'Financial Consultant',
      company: 'Bajaj Finserv',
      location: 'Pune',
      course: 'BIFS Foundation',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial: 'As a fresher, I was worried about getting into the financial services sector. BIFS Institute not only provided excellent training but also boosted my confidence. The mock interviews and personality development sessions were incredibly helpful. Got placed with a great package!',
      package: '₹5.1L',
      joinDate: 'Feb 2023',
      highlights: ['Confidence Building', 'Mock Interviews', 'Great Package']
    },
    {
      id: 4,
      name: 'Amit Kumar',
      role: 'Loan Officer',
      company: 'SBI',
      location: 'Nagpur',
      course: 'Advanced BIFS Program',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial: 'The faculty at BIFS Institute brings real industry experience to the classroom. Their teaching methodology is practical and engaging. The institute\'s strong industry connections helped me get direct interviews with top banks. Truly grateful for this opportunity.',
      package: '₹4.5L',
      joinDate: 'Apr 2023',
      highlights: ['Industry Experience', 'Practical Teaching', 'Direct Interviews']
    },
    {
      id: 5,
      name: 'Kavita Singh',
      role: 'Investment Advisor',
      company: 'ICICI Securities',
      location: 'Delhi',
      course: 'Job-Oriented BIFS',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial: 'BIFS Institute exceeded my expectations in every way. The course content is updated with latest industry trends, and the practical training sessions were invaluable. The placement team worked tirelessly to ensure I got the best opportunities. Highly recommended!',
      package: '₹4.8L',
      joinDate: 'May 2023',
      highlights: ['Updated Content', 'Latest Trends', 'Best Opportunities']
    },
    {
      id: 6,
      name: 'Rajesh Gupta',
      role: 'Branch Manager',
      company: 'Kotak Mahindra Bank',
      location: 'Bangalore',
      course: 'Advanced BIFS Program',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial: 'The leadership and management modules in the Advanced BIFS Program were exceptional. BIFS Institute not only taught me technical skills but also developed my leadership abilities. Today, I\'m successfully managing a team of 15 people. Thank you, BIFS Institute!',
      package: '₹6.2L',
      joinDate: 'Jun 2023',
      highlights: ['Leadership Training', 'Management Skills', 'Team Leadership']
    }
  ];

  const overallStats = {
    averageRating: 4.9,
    totalReviews: 500,
    fiveStarPercentage: 92,
    recommendationRate: 98
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
    <section className="section-padding bg-white" id="testimonials">
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
              What Our <span className="text-gradient">Students Say</span>
            </h2>
            <p className="text-large text-gray-600">
              Hear from our successful graduates who are now thriving in their BIFS careers 
              across India's top financial institutions.
            </p>
          </motion.div>

          {/* Overall Rating Stats */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-3xl font-bold text-gray-900">{overallStats.averageRating}</span>
                  <Star className="w-6 h-6 text-yellow-500 fill-current ml-1" />
                </div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{overallStats.totalReviews}+</div>
                <p className="text-gray-600">Student Reviews</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{overallStats.fiveStarPercentage}%</div>
                <p className="text-gray-600">5-Star Reviews</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{overallStats.recommendationRate}%</div>
                <p className="text-gray-600">Would Recommend</p>
              </div>
            </div>
          </motion.div>

          {/* Main Testimonial Slider */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="relative h-96 lg:h-80">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      x: index === currentSlide ? 0 : 50
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid lg:grid-cols-2 h-full">
                      {/* Left Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-6">
                          <Quote className="w-12 h-12 text-primary-200 mb-4" />
                          <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                            "{testimonial.testimonial}"
                          </blockquote>
                        </div>

                        {/* Student Info */}
                        <div className="flex items-center space-x-4 mb-4">
                          <img
                            src={testimonial.image}
                            alt={`${testimonial.name} - BIFS Institute student testimonial`}
                            className="w-16 h-16 rounded-full object-cover"
                            loading="lazy"
                          />
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                            <p className="text-primary-600 font-medium">{testimonial.role}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Building className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-600">{testimonial.company}</span>
                            </div>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-2 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">({testimonial.rating}/5)</span>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2">
                          {testimonial.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="space-y-6">
                          {/* Course Info */}
                          <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="flex items-center space-x-3 mb-4">
                              <Award className="w-6 h-6 text-primary-600" />
                              <span className="font-semibold text-gray-900">Course Completed</span>
                            </div>
                            <p className="text-primary-600 font-medium">{testimonial.course}</p>
                          </div>

                          {/* Package & Location */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-4 shadow-md text-center">
                              <div className="text-2xl font-bold text-green-600 mb-1">{testimonial.package}</div>
                              <div className="text-sm text-gray-600">Package</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-md text-center">
                              <div className="flex items-center justify-center mb-2">
                                <MapPin className="w-5 h-5 text-gray-600" />
                              </div>
                              <div className="text-sm font-medium text-gray-900">{testimonial.location}</div>
                            </div>
                          </div>

                          {/* Join Date */}
                          <div className="bg-white rounded-xl p-4 shadow-md">
                            <div className="flex items-center space-x-3">
                              <Calendar className="w-5 h-5 text-gray-600" />
                              <div>
                                <div className="text-sm text-gray-600">Joined</div>
                                <div className="font-medium text-gray-900">{testimonial.joinDate}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                      index === currentSlide 
                        ? 'bg-primary-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Testimonials Grid */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Success Stories</h3>
              <p className="text-gray-600">Quick highlights from our other successful students</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} testimonial`}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                    <span className="text-sm font-medium text-primary-600">{testimonial.course}</span>
                    <span className="text-sm font-bold text-green-600">{testimonial.package}</span>
                  </div>
                </motion.div>
              ))}
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
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": overallStats.averageRating,
            "reviewCount": overallStats.totalReviews,
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": testimonials.slice(0, 3).map(testimonial => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": testimonial.name
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": testimonial.rating,
              "bestRating": "5"
            },
            "reviewBody": testimonial.testimonial
          }))
        })}
      </script>
    </section>
  );
};

export default Testimonials;