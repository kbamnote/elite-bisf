import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const CourseDetailSidebar = ({ course }) => {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-8 space-y-6">
        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-100"
        >
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              ₹{course.price.toLocaleString()}
            </div>
            {course.originalPrice && (
              <div className="text-lg text-gray-500 line-through">
                ₹{course.originalPrice.toLocaleString()}
              </div>
            )}
            <div className="text-sm text-gray-600 mt-2">One-time payment</div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Duration</span>
              <span className="font-semibold">{course.duration}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Level</span>
              <span className="font-semibold">{course.level}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Certificate</span>
              <span className="font-semibold">Yes</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Placement Support</span>
              <span className="font-semibold text-green-600">100%</span>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              to="/contact"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              aria-label={`Enroll now for ${course.name}`}
            >
              Enroll Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <button className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50 py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
              Request Callback
            </button>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-primary-600 mr-3" />
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-sm text-gray-600">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-primary-600 mr-3" />
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-sm text-gray-600">info@elitebifs.com</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-primary-600 mr-3" />
              <div>
                <div className="font-semibold">Visit Us</div>
                <div className="text-sm text-gray-600">Nagpur, Maharashtra</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Batch Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Next Batch</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <div className="font-semibold text-gray-900">Next Batch</div>
                <div className="text-sm text-gray-600">{course.batchInfo.timing}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-primary-600">{course.batchInfo.nextBatch}</div>
                <div className="text-sm text-gray-600">{course.batchInfo.enrolled}/{course.batchInfo.seats} enrolled</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetailSidebar;