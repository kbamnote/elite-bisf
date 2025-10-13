import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, CheckCircle, Shield, Clock, Globe, Zap } from 'lucide-react';

const ServiceFeatures = () => {
  const features = [
    {
      icon: Award,
      title: "Industry Certified Programs",
      description: "BIFS accredited courses recognized by leading banks and financial institutions across India"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry veterans with 15+ years of experience in banking, insurance, and finance"
    },
    {
      icon: TrendingUp,
      title: "High Success Rate",
      description: "95% placement success rate with our comprehensive training and industry partnerships"
    },
    {
      icon: CheckCircle,
      title: "Practical Training",
      description: "Hands-on experience with real banking scenarios, case studies, and live projects"
    },
    {
      icon: Shield,
      title: "Job Guarantee",
      description: "6-month job guarantee program with direct placement assistance and interview preparation"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Weekend and evening batches available to accommodate working professionals"
    },
    {
      icon: Globe,
      title: "Pan-India Recognition",
      description: "Certificates recognized by major banks and financial institutions across the country"
    },
    {
      icon: Zap,
      title: "Fast Track Options",
      description: "Accelerated programs for quick certification and immediate career advancement"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full text-sm font-semibold mb-6"
          >
            Why Choose BIFS Programs
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Excellence in <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">BIFS Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive BIFS training programs are designed to build successful careers in banking, 
            insurance, and financial services with industry-focused curriculum and guaranteed placements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:bg-white border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Happy Clients' },
              { value: '₹500Cr+', label: 'Assets Managed' },
              { value: '15%', label: 'Avg. Returns' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFeatures;