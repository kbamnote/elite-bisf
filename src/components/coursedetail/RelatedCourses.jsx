import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const RelatedCourses = ({ courses, currentCourse }) => {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Other Popular Courses
          </h2>
          <p className="text-xl text-gray-600">
            Explore more BIFS courses to advance your career
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses
            .filter(c => c.id !== currentCourse.id)
            .slice(0, 3)
            .map((relatedCourse, index) => (
            <motion.div
              key={relatedCourse.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{relatedCourse.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{relatedCourse.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    ₹{relatedCourse.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">{relatedCourse.duration}</span>
                </div>
                <Link
                  to={`/courses/${relatedCourse.slug}`}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                  aria-label={`View details for ${relatedCourse.name}`}
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;