import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, Zap, Users, TrendingUp, Award, CheckCircle, 
  ArrowRight, CreditCard, Clock, Globe, Star, Trophy, Building2,
  PiggyBank, Banknote, Calculator, LineChart, BookOpen, GraduationCap,
  Target, Briefcase, TrendingUp as Growth, Sparkles
} from 'lucide-react';
import OptimizedImage from '../common/OptimizedImage';

const AboutSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Expert Faculty',
      description: 'Learn from industry veterans with 15+ years of banking and financial services experience.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      iconColor: 'text-white'
    },
    {
      icon: Briefcase,
      title: '100% Placement Support',
      description: 'Dedicated placement cell with tie-ups with 50+ leading banks and financial institutions.',
      color: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      iconColor: 'text-white'
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Gain recognized certifications that boost your career prospects in BIFS sector.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      iconColor: 'text-white'
    },
    {
      icon: LineChart,
      title: 'Practical Training',
      description: 'Hands-on experience with real banking software and live case studies from industry.',
      color: 'bg-gradient-to-br from-amber-500 to-amber-600',
      iconColor: 'text-white'
    }
  ];

  const achievements = [
    { 
      number: '500+', 
      label: 'Students Placed', 
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      number: '95%', 
      label: 'Success Rate', 
      icon: TrendingUp,
      color: 'from-emerald-500 to-emerald-600'
    },
    { 
      number: '50+', 
      label: 'Partner Companies', 
      icon: Building2,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      number: '10+', 
      label: 'Years Excellence', 
      icon: Trophy,
      color: 'from-amber-500 to-amber-600'
    }
  ];

  const whyChoosePoints = [
    'Comprehensive curriculum covering Banking, Insurance & Financial Services',
    'Industry-aligned training with updated course content',
    'Expert faculty with real-world banking experience',
    'State-of-the-art infrastructure and learning resources',
    'Mock interviews and personality development sessions',
    'Lifetime career guidance and job placement assistance'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scaleInVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20" id="about">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-xl"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">BIFS Institute</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Nagpur's premier training institute for Banking, Insurance & Financial Services. 
              Transforming students into industry-ready professionals through expert guidance and practical training.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={scaleInVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center group-hover:shadow-2xl transition-all duration-500">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-4xl font-bold bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm font-semibold text-slate-600">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-full"
                />
                <h3 className="text-4xl font-bold text-slate-900 leading-tight">
                  Why Choose BIFS Institute for Your <span className="text-blue-600">Career Growth?</span>
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With over a decade of excellence in BIFS education, we have successfully trained and placed 
                  500+ students in leading banks and financial institutions. Our industry-focused curriculum 
                  and expert faculty ensure you're always ahead in your career.
                </p>
              </div>

              {/* Why Choose Points */}
              <div className="space-y-4">
                {whyChoosePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/courses"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <span>Explore Our Courses</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Image Gallery */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="BIFS Institute students in classroom training"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Floating Badge 1 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Top Rated</div>
                        <div className="text-sm text-slate-600">4.9/5 Rating</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Badge 2 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, type: "spring" }}
                    className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Career Focused</div>
                        <div className="text-sm text-slate-600">100% Placement</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Small Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden lg:block"
                >
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Banking professionals in meeting"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-200 text-center group-hover:shadow-2xl transition-all duration-500">
                  <motion.div 
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${feature.color} shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className={`w-10 h-10 ${feature.iconColor}`} />
                  </motion.div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative p-12 md:p-16">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl"
                >
                  <BookOpen className="w-12 h-12 text-white" />
                </motion.div>
                
                <h3 className="text-5xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Mission</h3>
                
                <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                  To empower students with comprehensive knowledge and practical skills in Banking, 
                  Insurance & Financial Services, ensuring they become industry-ready professionals 
                  who contribute meaningfully to India's growing financial sector.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 pt-8">
                  {['Quality Education', 'Industry Relevance', 'Career Success'].map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold border border-white/20 hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer"
                    >
                      {tag}
                    </motion.span>
                  ))}
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
          "@type": "AboutPage",
          "name": "About BIFS Institute - Leading Banking Insurance Financial Services Training",
          "description": "Learn about BIFS Institute, Nagpur's premier training center for Banking, Insurance & Financial Services with 500+ students placed and 95% success rate.",
          "mainEntity": {
            "@type": "EducationalOrganization",
            "name": "BIFS Institute",
            "description": "Leading BIFS training institute in Nagpur",
            "foundingDate": "2013",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "addressCountry": "India"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          }
        })}
      </script>
    </section>
  );
};

export default AboutSection;