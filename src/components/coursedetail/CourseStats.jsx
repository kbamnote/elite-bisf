import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Clock } from 'lucide-react';

const CourseStats = ({ course }) => {
  const stats = [
    { 
      value: '2500+', 
      label: 'Students Enrolled', 
      icon: Users,
      description: 'Active learners in this program'
    },
    { 
      value: '95%', 
      label: 'Success Rate', 
      icon: Award,
      description: 'Students achieving certification'
    },
    { 
      value: '₹8.5L', 
      label: 'Average Package', 
      icon: TrendingUp,
      description: 'Post-course placement salary'
    },
    { 
      value: course.duration, 
      label: 'Course Duration', 
      icon: Clock,
      description: 'Comprehensive training period'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Course Impact & Statistics
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Real numbers that showcase the success of our {course.name} program
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-blue-100 mb-1">{stat.label}</div>
                <div className="text-xs text-blue-200 opacity-80">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseStats;