import { motion } from 'framer-motion';
import { useState } from 'react';
import { Shield, LineChart, CreditCard, Calculator } from 'lucide-react';

const AboutFeatures = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const features = [
    {
      icon: Shield,
      title: 'Secure Banking Solutions',
      description: 'Advanced security protocols and encryption technology to protect your financial assets and personal information with bank-grade security.',
      color: 'bg-blue-100 text-blue-600',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80'
    },
    {
      icon: LineChart,
      title: 'Investment Planning',
      description: 'Expert financial advisors help you create personalized investment strategies to maximize returns and achieve your financial goals.',
      color: 'bg-emerald-100 text-emerald-600',
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80'
    },
    {
      icon: CreditCard,
      title: 'Digital Banking',
      description: 'Modern digital banking solutions with mobile apps, online transfers, and 24/7 account access for ultimate convenience.',
      color: 'bg-purple-100 text-purple-600',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&q=80'
    },
    {
      icon: Calculator,
      title: 'Financial Advisory',
      description: 'Comprehensive financial planning services including retirement planning, tax optimization, and wealth management strategies.',
      color: 'bg-amber-100 text-amber-600',
      gradient: 'from-amber-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80'
    }
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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive financial solutions designed to meet all your banking and investment needs with cutting-edge technology and expert guidance.
            </p>
          </motion.div>

          {/* Features Grid with Enhanced Cards */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.03 }}
                onMouseMove={handleMouseMove}
                className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFeatures;