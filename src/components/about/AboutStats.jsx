import { motion } from 'framer-motion';
import { Users, TrendingUp, Building2, PiggyBank } from 'lucide-react';

const AboutStats = () => {
  const achievements = [
    { number: '10K+', label: 'Satisfied Clients', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { number: '98%', label: 'Client Satisfaction', icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
    { number: '15+', label: 'Years Trusted', icon: Building2, color: 'from-purple-500 to-pink-500' },
    { number: '₹50Cr+', label: 'Assets Managed', icon: PiggyBank, color: 'from-amber-500 to-orange-500' }
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center p-8 bg-white rounded-2xl shadow-xl border border-slate-200 group hover:shadow-2xl transition-all duration-500"
            >
              <motion.div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <achievement.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.div
                className="text-4xl font-bold text-slate-900 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {achievement.number}
              </motion.div>
              
              <div className="text-slate-600 font-medium group-hover:text-slate-800 transition-colors">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStats;