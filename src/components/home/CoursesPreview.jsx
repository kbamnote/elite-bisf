import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  ArrowRight, 
  Shield, 
  CreditCard, 
  PiggyBank, 
  TrendingUp,
  Calculator,
  Star,
  CheckCircle,
  Banknote,
  LineChart,
  Building2,
  Wallet,
  Sparkles
} from 'lucide-react';

const CoursesPreview = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Personal Banking",
      description: "Comprehensive personal banking solutions including savings accounts, current accounts, and personalized financial planning.",
      features: ["Zero Balance Accounts", "Mobile Banking", "Debit & Credit Cards", "Personal Loans"],
      icon: Wallet,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Investment Services",
      description: "Expert investment advisory and portfolio management to help you grow your wealth with strategic financial planning.",
      features: ["Mutual Funds", "Stock Trading", "Portfolio Management", "Financial Advisory"],
      icon: TrendingUp,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Business Banking",
      description: "Tailored banking solutions for businesses including corporate accounts, trade finance, and business loans.",
      features: ["Corporate Accounts", "Trade Finance", "Business Loans", "Cash Management"],
      icon: Building2,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Digital Banking",
      description: "Modern digital banking platform with advanced security, mobile apps, and 24/7 online banking services.",
      features: ["Mobile App", "Online Banking", "Digital Payments", "24/7 Support"],
      icon: CreditCard,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    }
  ];

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative section-padding bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden" id="services">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-emerald-400 to-blue-400 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full border border-blue-200/50 mb-6"
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">World-Class Banking Services</span>
            </motion.div>
            
 <h2 className="heading-secondary mb-8">
  Our{" "}
  <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent font-bold font-poppins">
    Banking Services
  </span>
</h2>


            <motion.p 
              variants={itemVariants}
              className="text-large text-slate-600 leading-relaxed"
            >
              Discover our comprehensive range of banking and financial services designed to meet all your 
              financial needs with security, convenience, and expert guidance at every step.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 group relative hover:shadow-2xl transition-all duration-500"
              >
                {/* Service Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Floating Icon */}
                  <motion.div
                    animate={hoveredCard === service.id ? { y: [0, -8, 0] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4"
                  >
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg`}>
                      <service.icon className={`w-7 h-7 ${service.textColor}`} />
                    </div>
                  </motion.div>

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-bold text-slate-700">Featured</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 space-y-5">
                  {/* Service Title */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="flex items-center space-x-3 text-sm group/item"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-emerald-500 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className={`inline-flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn`}
                    >
                      <span className="relative z-10 flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>

                {/* Animated Border on Hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-20 blur-xl`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-blue-900 via-slate-600 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}
                />
              </div>

              {/* Floating Orbs */}
              <motion.div
                animate={floatingAnimation}
                className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
                className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl"
              />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="inline-block mb-4"
                >
                  <Star className="w-16 h-16 text-yellow-400 fill-yellow-400" />
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Financial Future?
                </h3>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Join thousands of satisfied customers who trust us with their financial journey. 
                  Get personalized banking solutions tailored to your unique needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/about"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
                    >
                      Learn More About Us
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Banking Statistics */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Wallet, number: '10K+', label: 'Active Accounts', color: 'text-blue-600', bgColor: 'from-blue-500 to-blue-600' },
              { icon: Shield, number: '99.9%', label: 'Security Rating', color: 'text-emerald-600', bgColor: 'from-emerald-500 to-emerald-600' },
              { icon: TrendingUp, number: '15%', label: 'Avg. Returns', color: 'text-purple-600', bgColor: 'from-purple-500 to-purple-600' },
              { icon: Star, number: '4.9/5', label: 'Client Rating', color: 'text-amber-600', bgColor: 'from-amber-500 to-amber-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.bgColor} mb-6 shadow-lg relative z-10`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className="text-4xl font-bold text-slate-900 mb-3"
                >
                  {stat.number}
                </motion.div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesPreview;