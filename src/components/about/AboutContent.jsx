import { motion } from 'framer-motion';
import { Target, Users, Shield, BarChart3, Trophy, Clock } from 'lucide-react';

const AboutContent = () => {
  const whyChoosePoints = [
    { text: 'Comprehensive financial services covering banking, investments & insurance', icon: Target },
    { text: 'Personalized financial planning with dedicated relationship managers', icon: Users },
    { text: 'Advanced digital banking platform with cutting-edge security', icon: Shield },
    { text: 'Competitive interest rates and transparent fee structure', icon: BarChart3 },
    { text: 'Expert investment advisory with proven track record', icon: Trophy },
    { text: '24/7 customer support and multi-channel banking services', icon: Clock }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Elite Banking
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Your trusted partner in financial growth and security. We provide comprehensive banking and investment solutions 
              designed to help you achieve your financial aspirations with confidence.
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Why Choose Points */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Why Choose Elite Banking for Your Financial Journey?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  With over 15 years of excellence in financial services, we have established ourselves 
                  as a trusted partner for thousands of clients. Our comprehensive banking and investment solutions 
                  are designed to secure your financial future and help you achieve your dreams.
                </p>
              </div>

              {/* Why Choose Points */}
              <div className="space-y-4">
                {whyChoosePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <point.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{point.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Image Collage */}
            <motion.div 
              variants={itemVariants}
              className="relative h-[600px]"
            >
              <motion.div
                className="absolute top-0 left-0 w-3/4 h-3/5 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80"
                  alt="Modern banking office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-0 w-3/4 h-3/5 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                  alt="Financial planning session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-2xl z-20"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">15+</div>
                  <div className="text-sm text-slate-600">Years Excellence</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;