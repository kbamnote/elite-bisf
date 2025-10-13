import { motion } from 'framer-motion';
import { CheckCircle, Target } from 'lucide-react';

const CourseInfo = ({ course, containerVariants, itemVariants }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-12"
    >
      {/* Course Description */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="heading-tertiary text-gray-900 mb-6">Course Overview</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {course.longDescription}
        </p>
        <p className="text-gray-600 leading-relaxed">
          This comprehensive program is designed to provide you with in-depth knowledge and practical skills 
          in Banking, Insurance, and Financial Services. Our industry-expert faculty will guide you through 
          real-world scenarios and case studies to ensure you're job-ready upon completion.
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="heading-tertiary text-gray-900 mb-6">What You'll Get</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {course.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Career Opportunities */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="heading-tertiary text-gray-900 mb-6">Career Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {course.careerOpportunities.map((career, index) => (
            <div key={index} className="p-4 bg-primary-50 rounded-lg">
              <div className="flex items-center mb-3">
                <Target className="w-5 h-5 text-primary-600 mr-2" />
                <h3 className="font-semibold text-gray-900">{career}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">Exciting career opportunity in the BIFS sector</p>
              <div className="text-primary-600 font-semibold text-sm">
                Competitive Salary Package
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CourseInfo;