import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Play,
  Star,
  Download
} from 'lucide-react';
import OptimizedImage from '../common/OptimizedImage';

const HeroSection = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Students Placed', color: 'text-primary' },
    { icon: Award, number: '10+', label: 'Years Experience', color: 'text-primary' },
    { icon: TrendingUp, number: '95%', label: 'Success Rate', color: 'text-primary' },
    { icon: Star, number: '4.9/5', label: 'Student Rating', color: 'text-primary' }
  ];

  const highlights = [
    'Industry-Expert Faculty',
    'Placement Assistance',
    'Practical Training',
    'Flexible Timings'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Skip Navigation Link */}
      <a href="#main-content" className="skip-nav">Skip to content</a>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Professional law office with books and scales of justice"
          className="w-full h-full object-cover"
          priority={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 border border-primary/30 rounded-full animate-pulse animation-delay-200"></div>

      <div className="relative container-custom min-h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center w-full"
        >
          {/* Left Content - Centered Headline */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary rounded-full text-sm font-semibold">
                <Award className="w-4 h-4 mr-2" aria-hidden="true" />
                #1 BIFS Training Institute in India
              </div>

              {/* Main Heading - Centered */}
              <h1 className="heading-primary text-white leading-tight">
                Best <span className="text-gradient">BIFS Course</span> in India
                <span className="block text-2xl lg:text-3xl xl:text-4xl text-gray-300 font-medium mt-4">
                  Top BIFS Course in Nagpur
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-large text-gray-200 font-medium">
                Industry-aligned training • Placement assistance • Live projects
              </p>

              {/* Description */}
              <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Join India's leading BIFS training institute and kickstart your career in 
                Banking, Insurance & Financial Services with comprehensive courses and guaranteed placement support.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-200 font-medium text-sm">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons - Right Aligned */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/courses"
                className="btn-primary inline-flex items-center justify-center group text-lg px-8 py-4"
                aria-label="Enroll in the Best BIFS Course"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white"
                aria-label="Download Brochure PDF"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Brochure
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20 mb-3">
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Professional Image */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Professional Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-professional">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional BIFS training session with students learning banking and financial services"
                  className="w-full h-96 lg:h-[500px] object-cover"
                  loading="eager"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Play Button for Virtual Tour */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="w-20 h-20 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center shadow-professional transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/50"
                    aria-label="Play virtual tour of BIFS Institute"
                  >
                    <Play className="w-8 h-8 text-white ml-1" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Floating Achievement Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-professional p-6 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600 font-medium">Job Placement</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-professional p-6 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Certified</div>
                    <div className="text-sm text-gray-600 font-medium">Training</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-16 left-0 right-0"
        >
          <div className="container-custom">
            <div className="text-center mb-8">
              <p className="text-gray-300 font-medium">Trusted by Leading Companies</p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
              {/* Company Logos Placeholder */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                  <span className="text-gray-300 font-medium text-sm">Company {i}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Structured Data for Hero Section */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Best BIFS Course in India | Top BIFS Course in Nagpur",
          "description": "Industry-aligned training • Placement assistance • Live projects. Join India's leading BIFS training institute with 100% placement assistance.",
          "url": "https://bifsinstitute.com",
          "mainEntity": {
            "@type": "EducationalOrganization",
            "name": "BIFS Institute",
            "description": "Leading BIFS training institute offering comprehensive Banking, Insurance & Financial Services courses",
            "offers": {
              "@type": "Offer",
              "category": "Educational Services",
              "description": "BIFS Training Courses with Placement Assistance"
            }
          }
        })}
      </script>
    </section>
  );
};

export default HeroSection;