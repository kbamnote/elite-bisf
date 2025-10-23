import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Shield, Award, Heart, Zap, Calculator } from 'lucide-react';
import React from 'react';

const ServicesCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
            backgroundSize: '100% 100%'
          }}
        />

        {/* Floating Financial Icons */}
        {[...Array(15)].map((_, i) => {
          const icons = [Calculator, Shield, Award, Heart, Zap];
          const IconComponent = icons[Math.floor(Math.random() * icons.length)];
          
          return (
            <motion.div
              key={i}
              className="absolute text-white/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <IconComponent className="w-8 h-8" />
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur-3xl opacity-50 animate-pulse" />
              <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full flex items-center justify-center shadow-2xl">
                <Calculator className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Launch Your BIFS Career?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful BIFS professionals who have built rewarding careers in banking and finance. 
            Start your BIFS journey today with guaranteed placement support!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(52, 211, 153, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-10 py-5 bg-gradient-to-r from-emerald-400 to-blue-400 text-slate-900 rounded-full font-bold text-lg flex items-center justify-center shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/placements"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 flex items-center justify-center hover:border-white/50 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Free Counseling
              </Link>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100 mb-12"
          >
            <motion.a
              href="tel:+918855885807"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-semibold">+91 8855885807</span>
            </motion.a>
            
            <motion.a
              href="mailto:info@elitebifs.in"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-semibold">info@elitebifs.in</span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-12 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {[
                { icon: Shield, text: 'Bank-Grade Security' },
                { icon: Award, text: 'Award Winning Service' },
                { icon: Heart, text: '4.9/5 Client Rating' },
                { icon: Zap, text: 'Instant Processing' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-3 text-blue-100"
                >
                  <item.icon className="w-6 h-6" />
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;