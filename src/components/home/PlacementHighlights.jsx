import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Building, 
  Award,
  ArrowRight,
  MapPin,
  IndianRupee,
  Star,
  Target,
  Sparkles,
  Trophy,
  Briefcase,
  Quote
} from 'lucide-react';

const PlacementHighlights = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [countStarted, setCountStarted] = useState(false);

  const placementStats = [
    {
      icon: Users,
      number: 500,
      suffix: '+',
      label: 'Students Placed',
      description: 'Successfully placed in top companies',
      color: 'bg-blue-100 text-blue-600',
      gradient: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop'
    },
    {
      icon: TrendingUp,
      number: 95,
      suffix: '%',
      label: 'Placement Rate',
      description: 'Industry-leading success rate',
      color: 'bg-green-100 text-green-600',
      gradient: 'from-green-500 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    },
    {
      icon: IndianRupee,
      number: 4.5,
      suffix: 'L',
      prefix: '₹',
      label: 'Average Package',
      description: 'Starting salary for freshers',
      color: 'bg-purple-100 text-purple-600',
      gradient: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop'
    },
    {
      icon: Building,
      number: 50,
      suffix: '+',
      label: 'Partner Companies',
      description: 'Direct recruitment partners',
      color: 'bg-orange-100 text-orange-600',
      gradient: 'from-orange-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop'
    }
  ];

  const topRecruiters = [
    { 
      name: 'HDFC Bank', 
      logo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=120&h=60&fit=crop',
      sector: 'Banking',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'ICICI Bank', 
      logo: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=120&h=60&fit=crop',
      sector: 'Banking',
      color: 'from-orange-500 to-red-600'
    },
    { 
      name: 'SBI', 
      logo: 'https://images.unsplash.com/photo-1565514158740-64d5082f46f6?w=120&h=60&fit=crop',
      sector: 'Banking',
      color: 'from-blue-600 to-indigo-600'
    },
    { 
      name: 'LIC', 
      logo: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=120&h=60&fit=crop',
      sector: 'Insurance',
      color: 'from-red-500 to-red-600'
    },
    { 
      name: 'Bajaj Finserv', 
      logo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=120&h=60&fit=crop',
      sector: 'Financial Services',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      name: 'Kotak Bank', 
      logo: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=120&h=60&fit=crop',
      sector: 'Banking',
      color: 'from-red-500 to-orange-600'
    }
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      role: 'Banking Associate',
      company: 'HDFC Bank',
      package: '₹4.2L',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop',
      testimonial: 'BIFS Institute transformed my career. The practical training and placement support helped me land my dream job in banking.',
      course: 'Advanced BIFS Program',
      location: 'Nagpur',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Rahul Patel',
      role: 'Insurance Advisor',
      company: 'LIC of India',
      package: '₹3.8L',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      testimonial: 'The comprehensive curriculum and expert faculty at BIFS Institute gave me the confidence to excel in the insurance sector.',
      course: 'Job-Oriented BIFS',
      location: 'Mumbai',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Sneha Desai',
      role: 'Financial Consultant',
      company: 'Bajaj Finserv',
      package: '₹5.1L',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      testimonial: 'Thanks to BIFS Institute, I not only got placed but also received a higher package than expected. Highly recommended!',
      course: 'BIFS Foundation',
      location: 'Pune',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const placementProcess = [
    {
      step: '1',
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation of your BIFS knowledge and skills',
      icon: Target,
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: '2',
      title: 'Resume Building',
      description: 'Professional resume creation highlighting your strengths',
      icon: Award,
      color: 'from-emerald-500 to-green-600'
    },
    {
      step: '3',
      title: 'Interview Preparation',
      description: 'Mock interviews and personality development sessions',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: '4',
      title: 'Job Placement',
      description: 'Direct placement in top BIFS companies',
      icon: Building,
      color: 'from-amber-500 to-orange-600'
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

    const statsSection = document.querySelector('#placement-stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, [countStarted]);

  // Auto-rotate success stories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50 overflow-hidden" id="placements">
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
              <Trophy className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-semibold text-slate-700">Career Success Stories</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">Placement Highlights</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Join our successful alumni who are now thriving in top Banking, Insurance & 
              Financial Services companies across India.
            </p>
          </motion.div>

          {/* Placement Statistics */}
          <motion.div 
            id="placement-stats"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ 
              once: true, 
              margin: "-100px"
            }}
            variants={containerVariants}
          >
            {placementStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 group relative hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div className="relative h-40 overflow-hidden">
                  <motion.img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${stat.gradient} opacity-70 group-hover:opacity-50 transition-opacity duration-300`} />
                  
                  {/* Floating Icon */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4"
                  >
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center">
                      <stat.icon className={`w-6 h-6 ${stat.color.split(' ')[1]}`} />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <motion.div 
                    className="text-4xl font-bold text-slate-900 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  >
                    <AnimatedCounter 
                      end={stat.number} 
                      prefix={stat.prefix || ''}
                      suffix={stat.suffix || ''}
                    />
                  </motion.div>
                  <div className="text-lg font-semibold text-slate-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.description}</div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.gradient} opacity-10 blur-xl`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Success Stories Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
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
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="inline-block mb-4"
                  >
                    <Sparkles className="w-12 h-12 text-yellow-400" />
                  </motion.div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Success Stories
                  </h3>
                  <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                    Hear from our successful students who transformed their careers with BIFS Institute
                  </p>
                </div>

                {/* Featured Story */}
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    key={activeStory}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Student Image */}
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${successStories[activeStory].gradient} rounded-full blur-xl opacity-50`}></div>
                        <img
                          src={successStories[activeStory].image}
                          alt={successStories[activeStory].name}
                          className="relative w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                        />
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                          <Trophy className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Story Content */}
                      <div className="flex-1 text-white">
                        <div className="flex items-start gap-3 mb-4">
                          <Quote className="w-8 h-8 text-blue-300 flex-shrink-0" />
                          <p className="text-lg leading-relaxed italic">
                            {successStories[activeStory].testimonial}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h4 className="text-2xl font-bold mb-1">{successStories[activeStory].name}</h4>
                            <p className="text-blue-200">{successStories[activeStory].role}</p>
                          </div>

                          <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                              <Building className="w-4 h-4" />
                              <span className="font-semibold">{successStories[activeStory].company}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-400/30">
                              <IndianRupee className="w-4 h-4 text-emerald-300" />
                              <span className="font-bold text-emerald-300">{successStories[activeStory].package}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                              <MapPin className="w-4 h-4" />
                              <span>{successStories[activeStory].location}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <span className="text-sm text-blue-200">Course: {successStories[activeStory].course}</span>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Story Indicators */}
                  <div className="flex justify-center gap-3 mt-8">
                    {successStories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStory(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeStory ? 'w-8 bg-white' : 'w-2 bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Recruiters */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Our Recruitment Partners
              </h3>
              <p className="text-lg text-slate-600">Top companies that regularly hire our BIFS graduates</p>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {topRecruiters.map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="text-center group"
                  >
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${company.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      <div className="relative bg-slate-50 rounded-2xl p-6 mb-3 group-hover:shadow-xl transition-all duration-300 border border-slate-200">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-full h-16 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="text-sm font-bold text-slate-900">{company.name}</div>
                    <div className="text-xs text-slate-500">{company.sector}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Placement Process */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="inline-block mb-4"
              >
                <Briefcase className="w-12 h-12 text-blue-600" />
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Our Placement Process
              </h3>
              <p className="text-lg text-slate-600">Step-by-step guidance to ensure your successful placement</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {placementProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center group hover:shadow-xl transition-all duration-300">
                    {/* Step Number with Icon */}
                    <div className="relative inline-block mb-6">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`w-20 h-20 bg-gradient-to-br ${process.color} rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg`}
                      >
                        {process.step}
                      </motion.div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-slate-100">
                        <process.icon className="w-5 h-5 text-slate-700" />
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{process.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{process.description}</p>
                  </div>

                  {/* Connector Arrow */}
                  {index < placementProcess.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="hidden lg:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-blue-300 to-purple-300 transform origin-left"
                    >
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="w-5 h-5 text-purple-400" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
              {/* Animated Background */}
              <motion.div
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  backgroundSize: '50% 100%'
                }}
              />

              <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Trophy className="w-16 h-16 text-yellow-300 mx-auto" />
                </motion.div>
                <h3 className="text-3xl lg:text-4xl font-bold">
                  Ready to Start Your BIFS Career?
                </h3>
                <p className="text-xl opacity-90 leading-relaxed">
                  Join our next batch and become part of our successful placement stories. 
                  Get guaranteed job placement with top BIFS companies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-lg"
                  >
                    Apply Now for Next Batch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
                  >
                    View All Placements
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementHighlights;