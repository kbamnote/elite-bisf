import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, BookOpen, Briefcase, 
  TrendingUp, Shield, Calculator, Award, LineChart, 
  Building2, Users, Target
} from 'lucide-react';

const ServiceGrid = () => {
  const services = [
    {
      id: 'bifs-foundation',
      title: 'BIFS Foundation Program',
      subtitle: 'Build your banking and finance foundation',
      description: 'Comprehensive foundation program covering banking fundamentals, financial markets, accounting principles, and regulatory frameworks. Perfect for beginners entering the BIFS industry.',
      icon: BookOpen,
      price: '₹15,000',
      originalPrice: '₹20,000',
      featured: true,
      rating: 4.9,
      clientsServed: 2500,
      features: [
        'Banking fundamentals & operations',
        'Financial markets overview',
        'Accounting & bookkeeping basics',
        'Regulatory compliance training',
        'Industry-standard certifications',
        'Career guidance & placement support'
      ],
      color: 'from-blue-600 to-blue-700',
      slug: 'bifs-foundation'
    },
    {
      id: 'advanced-bifs',
      title: 'Advanced BIFS Program',
      subtitle: 'Master advanced banking & finance concepts',
      description: 'Advanced program for experienced professionals covering investment banking, risk management, financial analysis, and strategic planning with real-world case studies.',
      icon: TrendingUp,
      price: '₹35,000',
      originalPrice: '₹45,000',
      featured: true,
      rating: 4.8,
      clientsServed: 1800,
      features: [
        'Investment banking strategies',
        'Advanced risk management',
        'Financial modeling & analysis',
        'Strategic financial planning',
        'Portfolio management techniques',
        'Executive mentorship program'
      ],
      color: 'from-emerald-600 to-emerald-700',
      slug: 'advanced-bifs'
    },
    {
      id: 'job-oriented-bifs',
      title: 'Job Oriented BIFS Program',
      subtitle: 'Direct pathway to banking careers',
      description: 'Intensive job-focused program designed for immediate employment in banking and financial services with guaranteed placement assistance and industry partnerships.',
      icon: Briefcase,
      price: '₹25,000',
      originalPrice: '₹30,000',
      featured: true,
      rating: 4.9,
      clientsServed: 3200,
      features: [
        '100% placement assistance',
        'Industry-specific skill training',
        'Mock interviews & resume building',
        'Direct company partnerships',
        'Soft skills development',
        '6-month job guarantee'
      ],
      color: 'from-purple-600 to-purple-700',
      slug: 'job-oriented-bifs'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Service Header */}
              <div className={`p-6 bg-gradient-to-r ${service.color} text-white relative`}>
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      POPULAR
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-white/80 text-sm">{service.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{service.clientsServed}+ clients</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{service.price}</div>
                    {service.originalPrice && (
                      <div className="text-sm line-through opacity-75">{service.originalPrice}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{service.clientsServed}+</div>
                    <div className="text-xs text-gray-600">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-lg font-bold text-gray-900 ml-1">{service.rating}</span>
                    </div>
                    <div className="text-xs text-gray-600">Client Rating</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    to={`/services/${service.slug}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                    aria-label={`Get started with ${service.title}`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGrid;