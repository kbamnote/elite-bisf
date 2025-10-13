import { motion } from 'framer-motion';

const TopRecruiters = () => {
  const topRecruiters = [
    { name: 'TCS', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80', sector: 'IT Services' },
    { name: 'Infosys', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80', sector: 'Technology' },
    { name: 'Wipro', logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80', sector: 'IT Consulting' },
    { name: 'Accenture', logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&q=80', sector: 'Consulting' },
    { name: 'Cognizant', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80', sector: 'Digital Services' },
    { name: 'HCL Technologies', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80', sector: 'Technology' },
    { name: 'Tech Mahindra', logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80', sector: 'IT Services' },
    { name: 'Capgemini', logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&q=80', sector: 'Consulting' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6"
          >
            Our Partners
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Top Partners</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We have strong partnerships with leading financial institutions and technology companies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {topRecruiters.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative bg-slate-50 p-6 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-200">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-slate-900 mb-1 text-center">{company.name}</h3>
                <p className="text-sm text-slate-600 text-center">{company.sector}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopRecruiters;