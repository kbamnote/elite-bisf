import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, Users, Award, ArrowRight, Star, 
  BookOpen, Download, Play, CheckCircle, TrendingUp
} from 'lucide-react';

const CourseDetailHero = ({ course }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center min-h-screen py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid lg:grid-cols-2 gap-16 items-center w-full"
          >
            <div className="space-y-8">
              {/* Breadcrumb */}
              <motion.nav 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-2 text-sm"
                aria-label="Breadcrumb"
              >
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
                <span className="text-blue-300">/</span>
                <Link to="/courses" className="text-blue-200 hover:text-white transition-colors">Courses</Link>
                <span className="text-blue-300">/</span>
                <span className="text-white font-medium">{course.name}</span>
              </motion.nav>

              {/* Featured Badge */}
              {course.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="inline-block"
                >
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🔥 MOST POPULAR COURSE
                  </span>
                </motion.div>
              )}

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                    {course.name}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  {course.shortName} - {course.description}
                </p>
              </motion.div>

              {/* Enhanced Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
              >
                {[
                  { icon: Clock, label: 'Duration', value: course.duration, color: 'from-blue-400 to-cyan-400' },
                  { icon: Users, label: 'Students', value: '2500+', color: 'from-green-400 to-emerald-400' },
                  { icon: Star, label: 'Rating', value: '4.8/5', color: 'from-yellow-400 to-orange-400' },
                  { icon: Award, label: 'Level', value: course.level, color: 'from-purple-400 to-pink-400' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm text-blue-200 mb-1">{stat.label}</div>
                      <div className="font-bold text-lg">{stat.value}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-blue-500/25"
                    aria-label={`Enroll now for ${course.name}`}
                  >
                    Enroll Now - ₹{course.price.toLocaleString()}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
                    aria-label={`Download brochure for ${course.name}`}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Enhanced Course Preview Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* Video Preview */}
                <div className="relative mb-8">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative z-10 bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300"
                    >
                      <Play className="w-12 h-12 text-white ml-1" />
                    </motion.button>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-sm">Course Preview</span>
                    </div>
                  </div>
                </div>

                {/* Course Highlights */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold mb-4">What You'll Get</h3>
                  {[
                    'Industry-Expert Instructors',
                    'Hands-on Practical Training',
                    'Job Placement Assistance',
                    'Lifetime Course Access'
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-blue-100">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Success Metric */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 text-center"
                >
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                  <div className="text-sm text-blue-200">Success Rate</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailHero;