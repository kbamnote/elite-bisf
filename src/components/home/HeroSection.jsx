import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle,
  Play,
  Star,
  Download,
  CreditCard,
  PiggyBank,
  Building2,
  Banknote
} from 'lucide-react';
import OptimizedImage from '../common/OptimizedImage';

const HeroSection = () => {
  const stats = [
    { icon: Users, number: '10K+', label: 'Satisfied Clients', color: 'text-blue-600' },
    { icon: Shield, number: '15+', label: 'Years Trusted', color: 'text-emerald-600' },
    { icon: TrendingUp, number: '98%', label: 'Success Rate', color: 'text-amber-600' },
    { icon: Star, number: '4.9/5', label: 'Client Rating', color: 'text-blue-600' }
  ];

  const highlights = [
    'Expert Financial Advisors',
    'Secure Banking Solutions',
    'Investment Planning',
    '24/7 Customer Support'
  ];

  const floatingElements = [
    { icon: CreditCard, delay: 0, x: 100, y: 50 },
    { icon: PiggyBank, delay: 0.5, x: -80, y: 100 },
    { icon: Building2, delay: 1, x: 120, y: -60 },
    { icon: Banknote, delay: 1.5, x: -100, y: -80 }
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

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Skip Navigation Link */}
      <a href="#main-content" className="skip-nav">Skip to content</a>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Modern banking and finance office with digital displays and professional atmosphere"
          className="w-full h-full object-cover"
          priority={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
      </div>

      {/* Floating Financial Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{
            top: `${20 + element.y}px`,
            right: `${20 + element.x}px`,
          }}
          variants={floatingVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: element.delay }}
        >
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center">
            <element.icon className="w-8 h-8 text-blue-400" />
          </div>
        </motion.div>
      ))}

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative container-custom min-h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center w-full"
        >
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full text-sm font-semibold">
                <Shield className="w-4 h-4 mr-2" aria-hidden="true" />
                #1 Trusted Banking & Finance Solutions
              </div>

              {/* Main Heading */}
              <h1 className="heading-primary text-white leading-tight">
                Secure Your <span className="text-gradient bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Financial Future</span>
                <span className="block text-2xl lg:text-3xl xl:text-4xl text-slate-300 font-medium mt-4">
                  Professional Banking & Investment Services
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-large text-slate-200 font-medium">
                Industry-aligned training • Placement assistance • Live projects
              </p>

              {/* Description */}
              <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transform your financial future with our comprehensive banking and investment solutions. 
                Expert guidance, secure transactions, and personalized financial planning for your success.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200 font-medium text-sm">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center group text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                aria-label="Start Your Banking Journey"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                className="inline-flex items-center justify-center text-lg px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 rounded-xl font-semibold transition-all duration-300"
                aria-label="Schedule Consultation"
              >
                <Download className="mr-2 w-5 h-5" />
                Free Consultation
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 mb-3">
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Professional Banking Image */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Professional Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional banking consultation with financial advisor and client discussing investment strategies"
                  className="w-full h-96 lg:h-[500px] object-cover"
                  loading="eager"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                
                {/* Play Button for Virtual Tour */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="w-20 h-20 bg-blue-600/90 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
                    aria-label="Watch our banking services overview"
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
                className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-slate-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">15%</div>
                    <div className="text-sm text-slate-600 font-medium">Avg. Returns</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-slate-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">Secure</div>
                    <div className="text-sm text-slate-600 font-medium">Banking</div>
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