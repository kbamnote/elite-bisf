import { motion } from 'framer-motion';

const CoursePartners = ({ course }) => {
  // Course-specific partners based on the course type
  const getPartners = (courseName) => {
    const bankingPartners = [
      { name: 'HDFC Bank', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80', sector: 'Private Banking', positions: '150+ openings' },
      { name: 'ICICI Bank', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80', sector: 'Retail Banking', positions: '120+ openings' },
      { name: 'Axis Bank', logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80', sector: 'Corporate Banking', positions: '80+ openings' },
      { name: 'SBI', logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&q=80', sector: 'Public Banking', positions: '200+ openings' },
      { name: 'Kotak Mahindra', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80', sector: 'Investment Banking', positions: '60+ openings' },
      { name: 'Yes Bank', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80', sector: 'Digital Banking', positions: '90+ openings' },
      { name: 'IndusInd Bank', logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80', sector: 'Premium Banking', positions: '70+ openings' },
      { name: 'Federal Bank', logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&q=80', sector: 'Regional Banking', positions: '50+ openings' }
    ];
    return bankingPartners;
  };

  const partners = getPartners(course.name);

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
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

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
            Industry Partners
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hiring Partners</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Leading financial institutions actively recruit our {course.name} graduates
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {partners.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative bg-slate-50 p-6 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-200 group-hover:border-blue-200">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-center">{company.name}</h3>
                <p className="text-sm text-slate-600 text-center mb-2">{company.sector}</p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold rounded-full">
                    {company.positions}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Direct Industry Connections
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our {course.name} program maintains strong partnerships with leading financial institutions. 
              These partnerships ensure our curriculum stays current with industry needs and provide direct 
              pathways to employment opportunities.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-slate-600">Active Job Openings</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-sm text-slate-600">Partner Companies</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-emerald-600 mb-2">90%</div>
                <div className="text-sm text-slate-600">Placement Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursePartners;