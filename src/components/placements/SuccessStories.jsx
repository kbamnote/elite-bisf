import { motion } from 'framer-motion';
import { Quote, Building2, ExternalLink } from 'lucide-react';

const SuccessStories = () => {
  const successStories = [
    {
      name: 'Priya Sharma',
      course: 'Elite Banking Premium',
      company: 'HDFC Bank',
      package: '15% Returns',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      story: 'Elite Banking transformed my financial journey completely. The personalized investment strategies helped me achieve exceptional returns.',
      location: 'Mumbai',
      linkedin: '#'
    },
    {
      name: 'Rahul Kumar',
      course: 'Investment Advisory',
      company: 'ICICI Bank',
      package: '18% Returns',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      story: 'The comprehensive financial planning and expert guidance at Elite Banking prepared me well for wealth building. Highly recommended!',
      location: 'Delhi',
      linkedin: '#'
    },
    {
      name: 'Sneha Patel',
      course: 'Digital Banking',
      company: 'Axis Bank',
      package: '12% Returns',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c1cd?w=400&q=80',
      story: 'Thanks to Elite Banking excellent digital platform, I achieved my financial goals within 2 years of starting my investment journey.',
      location: 'Bangalore',
      linkedin: '#'
    },
    {
      name: 'Amit Singh',
      course: 'Wealth Management',
      company: 'SBI',
      package: '20% Returns',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      story: 'The industry-leading wealth management strategies helped me build a diversified portfolio. Great investment in my financial future!',
      location: 'Chennai',
      linkedin: '#'
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

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

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
            className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-semibold mb-6"
          >
            Success Stories
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real stories from our clients who are now thriving in their financial journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Success Badge */}
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {story.package}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{story.name}</h4>
                    <p className="text-sm text-slate-600">{story.course} • {story.location}</p>
                  </div>
                </div>

                <blockquote className="text-slate-700 italic mb-6 leading-relaxed">
                  "{story.story}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-slate-900">{story.company}</span>
                  </div>
                  <motion.a
                    href={story.linkedin}
                    whileHover={{ scale: 1.1 }}
                    className="text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;