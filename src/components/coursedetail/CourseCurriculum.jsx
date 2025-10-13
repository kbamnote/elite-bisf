import { motion } from 'framer-motion';

const CourseCurriculum = ({ course, itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="heading-tertiary text-gray-900 mb-6">Course Curriculum</h2>
      <div className="space-y-4">
        {course.curriculum.map((module, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-900">
                Module {index + 1}: {module.title}
              </h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {module.duration}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{module.description}</p>
            <div className="space-y-2">
              {module.topics.map((topic, topicIndex) => (
                <div key={topicIndex} className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CourseCurriculum;