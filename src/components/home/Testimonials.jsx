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
  const [countStarted, setCountStarted] = useState(false);

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

  // Animated counter
  const AnimatedCounter = ({ end, prefix = '', suffix = '', duration = 2 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countStarted) return;
      
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(end * progress);
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [countStarted, end, duration]);

    return (
      <span>
        {prefix}{count.toFixed(end < 10 ? 1 : 0)}{suffix}
      </span>
    );
  };

  // Trigger counter animation when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countStarted) {
            setCountStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsSection = document.querySelector('#testimonial-stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, [countStarted]);

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
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50 overflow-hidden" id="testimonials">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-400 to-blue-400 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 mb-6"
            >
              <Quote className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">Student Reviews</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">Students Say</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Hear from our successful graduates who are now thriving in their BIFS careers 
              across India's top financial institutions.
            </p>
          </motion.div>

          {/* Overall Rating Stats */}
          <motion.div 
            id="testimonial-stats"
            variants={itemVariants} 
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200"
          >
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group"
              >
                <div className="flex items-center justify-center mb-2">
                  <motion.span 
                    className="text-4xl font-bold text-slate-900"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 0.6 }}
                  >
                    <AnimatedCounter end={overallStats.averageRating} />
                  </motion.span>
                  <Star className="w-6 h-6 text-yellow-500 fill-current ml-1" />
                </div>
                <p className="text-lg font-semibold text-slate-800 mb-1">Average Rating</p>
                <p className="text-sm text-slate-600">From verified students</p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group"
              >
                <motion.div 
                  className="text-4xl font-bold text-slate-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, type: "spring", duration: 0.6 }}
                >
                  <AnimatedCounter end={overallStats.totalReviews} suffix="+" />
                </motion.div>
                <p className="text-lg font-semibold text-slate-800 mb-1">Student Reviews</p>
                <p className="text-sm text-slate-600">Across all programs</p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group"
              >
                <motion.div 
                  className="text-4xl font-bold text-slate-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", duration: 0.6 }}
                >
                  <AnimatedCounter end={overallStats.fiveStarPercentage} suffix="%" />
                </motion.div>
                <p className="text-lg font-semibold text-slate-800 mb-1">5-Star Reviews</p>
                <p className="text-sm text-slate-600">Highest satisfaction</p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group"
              >
                <motion.div 
                  className="text-4xl font-bold text-slate-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", duration: 0.6 }}
                >
                  <AnimatedCounter end={overallStats.recommendationRate} suffix="%" />
                </motion.div>
                <p className="text-lg font-semibold text-slate-800 mb-1">Would Recommend</p>
                <p className="text-sm text-slate-600">To friends & family</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Testimonial Slider */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              <div className="relative h-auto lg:h-[600px]">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      x: index === currentSlide ? 0 : 100
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid lg:grid-cols-2 h-full">
                      {/* Left Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: index === currentSlide ? 1 : 0 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="mb-6"
                        >
                          <Quote className="w-12 h-12 text-blue-300 mb-4" />
                        </motion.div>
                        
                        <motion.blockquote 
                          className="text-lg leading-relaxed mb-8 italic"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 20 }}
                          transition={{ delay: 0.3 }}
                        >
                          "{testimonial.testimonial}"
                        </motion.blockquote>

                        {/* Student Info */}
                        <motion.div 
                          className="space-y-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 20 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-lg opacity-50"></div>
                              <img
                                src={testimonial.image}
                                alt={`${testimonial.name} - BIFS Institute student testimonial`}
                                className="relative w-16 h-16 rounded-full object-cover border-4 border-white/20 shadow-xl"
                                loading="lazy"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-xl">{testimonial.name}</h4>
                              <p className="text-blue-200 font-medium">{testimonial.role}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Building className="w-4 h-4 text-blue-300" />
                                <span className="text-sm text-blue-200">{testimonial.company}</span>
                              </div>
                            </div>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center space-x-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                            <span className="text-sm text-blue-200 ml-2">({testimonial.rating}/5)</span>
                          </div>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2">
                            {testimonial.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/20"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      {/* Right Content */}
                      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-8 lg:p-12 flex flex-col justify-center border-l border-white/10">
                        <div className="space-y-6">
                          {/* Course Info */}
                          <motion.div 
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"
                            whileHover={{ scale: 1.02, y: -4 }}
                            transition={{ type: "spring" }}
                          >
                            <div className="flex items-center space-x-3 mb-4">
                              <Award className="w-6 h-6 text-yellow-400" />
                              <span className="font-semibold text-white">Course Completed</span>
                            </div>
                            <p className="text-blue-200 font-medium">{testimonial.course}</p>
                          </motion.div>

                          {/* Package & Location */}
                          <div className="grid grid-cols-2 gap-4">
                            <motion.div 
                              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl text-center border border-white/20"
                              whileHover={{ scale: 1.05, y: -4 }}
                              transition={{ type: "spring" }}
                            >
                              <div className="text-2xl font-bold text-emerald-300 mb-1">{testimonial.package}</div>
                              <div className="text-sm text-blue-200">Package</div>
                            </motion.div>
                            <motion.div 
                              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl text-center border border-white/20"
                              whileHover={{ scale: 1.05, y: -4 }}
                              transition={{ type: "spring" }}
                            >
                              <div className="flex items-center justify-center mb-2">
                                <MapPin className="w-5 h-5 text-blue-200" />
                              </div>
                              <div className="text-sm font-medium text-white">{testimonial.location}</div>
                            </motion.div>
                          </div>

                          {/* Join Date */}
                          <motion.div 
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
                            whileHover={{ scale: 1.02, y: -4 }}
                            transition={{ type: "spring" }}
                          >
                            <div className="flex items-center space-x-3">
                              <Calendar className="w-5 h-5 text-blue-200" />
                              <div>
                                <div className="text-sm text-blue-200">Joined</div>
                                <div className="font-medium text-white">{testimonial.joinDate}</div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400/50 border border-white/20 z-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400/50 border border-white/20 z-10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                      index === currentSlide 
                        ? 'bg-white w-8' 
                        : 'bg-white/30 hover:bg-white/50 w-2'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Testimonials Grid */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6 }}
                className="inline-block mb-4"
              >
                <Star className="w-12 h-12 text-yellow-500 fill-current" />
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">More Success Stories</h3>
              <p className="text-lg text-slate-600">Quick highlights from our other successful students</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} testimonial`}
                          className="relative w-12 h-12 rounded-full object-cover border-2 border-slate-200 group-hover:border-blue-400 transition-colors duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-slate-700 text-sm leading-relaxed line-clamp-3 mb-4">
                      "{testimonial.testimonial}"
                    </p>
                    
                    <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                      <span className="text-sm font-medium text-blue-600">{testimonial.course}</span>
                      <span className="text-sm font-bold text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full">{testimonial.package}</span>
                    </div>
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