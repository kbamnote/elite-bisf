import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp,
  Clock,
  Shield,
  Target,
  Zap,
  CheckCircle,
  Star,
  Building,
  Globe,
  Sparkles,
  ArrowRight,
  X
} from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [countStarted, setCountStarted] = useState(false);

  const mainFeatures = [
    {
      icon: Award,
      title: 'Industry-Certified Training',
      description: 'Get certified by leading industry bodies and enhance your professional credibility in BIFS sector.',
      color: 'bg-blue-100 text-blue-600',
      gradient: 'from-blue-500 to-blue-600',
      stats: '100% Certified',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from industry veterans with 10+ years of experience in banking, insurance, and financial services.',
      color: 'bg-green-100 text-green-600',
      gradient: 'from-green-500 to-emerald-600',
      stats: '10+ Years Exp',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      icon: TrendingUp,
      title: 'Guaranteed Placement',
      description: 'Join our 95% placement success rate with dedicated career support and industry connections.',
      color: 'bg-purple-100 text-purple-600',
      gradient: 'from-purple-500 to-purple-600',
      stats: '95% Success',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Master all aspects of BIFS with our updated curriculum covering latest industry trends and practices.',
      color: 'bg-orange-100 text-orange-600',
      gradient: 'from-orange-500 to-amber-600',
      stats: 'Latest Content',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop'
    }
  ];

  const additionalBenefits = [
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Weekend and weekday batches available to suit your schedule',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Job Security',
      description: 'High demand for BIFS professionals ensures stable career growth',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Target,
      title: 'Practical Training',
      description: 'Hands-on experience with real banking and insurance scenarios',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Fast Track Career',
      description: 'Quick entry into high-paying BIFS jobs with our intensive programs',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Building,
      title: 'Industry Partnerships',
      description: 'Direct recruitment opportunities with 50+ partner companies',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Globe,
      title: 'Pan-India Recognition',
      description: 'Our certification is recognized across India\'s financial sector',
      color: 'from-rose-500 to-red-500'
    }
  ];

  const testimonialStats = [
    { number: 500, suffix: '+', label: 'Students Placed', icon: Users, color: 'from-blue-500 to-blue-600' },
    { number: 4.5, suffix: 'L', prefix: '₹', label: 'Average Package', icon: TrendingUp, color: 'from-emerald-500 to-emerald-600' },
    { number: 50, suffix: '+', label: 'Hiring Partners', icon: Building, color: 'from-purple-500 to-purple-600' },
    { number: 4.9, suffix: '/5', label: 'Student Rating', icon: Star, color: 'from-amber-500 to-amber-600' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  // Animated counter component
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

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden" id="why-choose-us">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl"
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
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">Why We're Different</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">BIFS Institute</span>?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Join thousands of successful professionals who chose BIFS Institute for their 
              Banking, Insurance & Financial Services career transformation.
            </p>
          </motion.div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 group relative hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Floating Badge */}
                  <motion.div
                    animate={hoveredCard === index ? { y: [0, -8, 0] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4"
                  >
                    <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                      <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {feature.stats}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${feature.color}`}
                    >
                      <feature.icon className="w-7 h-7" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-10 blur-xl`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-3xl blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <Star className="w-12 h-12 text-amber-500 fill-amber-500" />
                </motion.div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Additional Benefits You Get
                </h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Beyond excellent training, we provide comprehensive support to ensure your success in the BIFS industry.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group relative overflow-hidden"
                  >
                    <div className="flex items-start space-x-4 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                      >
                        <benefit.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                    
                    {/* Hover gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Success Statistics */}
          <motion.div 
            variants={itemVariants} 
            className="text-center"
            onViewportEnter={() => setCountStarted(true)}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Success Numbers</h3>
            <p className="text-lg text-slate-600 mb-12">Real results that speak for themselves</p>
            
            <div className="grid md:grid-cols-4 gap-8">
              {testimonialStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200 group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 shadow-lg relative z-10`}
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <div className="text-4xl font-bold text-slate-900 mb-2 relative z-10">
                    <AnimatedCounter 
                      end={stat.number} 
                      prefix={stat.prefix || ''}
                      suffix={stat.suffix || ''}
                    />
                  </div>
                  <div className="text-slate-600 font-semibold relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Comparison Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-slate-700 to-blue-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="inline-block mb-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-2xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                    BIFS Institute vs Others
                  </h3>
                  <p className="text-blue-100 text-lg">See why we're the preferred choice for BIFS training in Nagpur</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <thead className="bg-white/20">
                      <tr>
                        <th className="px-6 py-5 text-left font-bold text-white">Features</th>
                        <th className="px-6 py-5 text-center font-bold text-emerald-300">BIFS Institute</th>
                        <th className="px-6 py-5 text-center font-bold text-slate-300">Others</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {[
                        ['Industry Expert Faculty', true, false],
                        ['100% Placement Assistance', true, false],
                        ['Flexible Batch Timings', true, true],
                        ['Live Project Training', true, false],
                        ['Industry Certifications', true, false],
                        ['Post-Training Support', true, false]
                      ].map(([feature, bifsBenefit, othersBenefit], index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="hover:bg-white/5 transition-colors"
                        >
                          <td className="px-6 py-5 font-semibold text-white">{feature}</td>
                          <td className="px-6 py-5 text-center">
                            {bifsBenefit ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                              >
                                <CheckCircle className="w-7 h-7 text-emerald-400 mx-auto" />
                              </motion.div>
                            ) : (
                              <X className="w-7 h-7 text-red-400 mx-auto" />
                            )}
                          </td>
                          <td className="px-6 py-5 text-center">
                            {othersBenefit ? (
                              <CheckCircle className="w-7 h-7 text-emerald-400 mx-auto" />
                            ) : (
                              <X className="w-7 h-7 text-red-400 mx-auto" />
                            )}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;