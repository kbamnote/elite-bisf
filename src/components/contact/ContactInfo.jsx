import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, 
  Facebook, Twitter, Linkedin, Instagram,
  MessageCircle, Calendar, Users, Award
} from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'Visit Our Campus',
      info: 'Elite BIFS Institute',
      details: '1st Floor Mohota Complex, Above State Bank Of India, Katol Road, Chhaoni Rd, Nagpur, Maharashtra, 440013',
      action: 'Get Directions',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 8855885807',
      details: 'Mon-Sat: 9:00 AM - 7:00 PM',
      action: 'Call Now',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@elitebifs.in',
      details: 'We respond within 24 hours',
      action: 'Send Email',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+91 8855885807',
      details: 'Quick responses & course info',
      action: 'Chat Now',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-sky-500' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:text-blue-700' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-600' }
  ];

  const quickStats = [
    { icon: Users, number: '5000+', label: 'Students Trained' },
    { icon: Award, number: '95%', label: 'Placement Rate' },
    { icon: Calendar, number: '15+', label: 'Years Experience' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your banking and finance career? We're here to help you every step of the way.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactDetails.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${contact.color} p-3 rounded-xl w-fit mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-800 font-medium mb-1">
                  {contact.info}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {contact.details}
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                  {contact.action} →
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl mr-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
            </div>
            <div className="space-y-4">
              {officeHours.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-gray-700 font-medium">{schedule.day}</span>
                  <span className="text-gray-900 font-semibold">{schedule.time}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> Emergency support available 24/7 for enrolled students
              </p>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Students Choose Us</h3>
            <div className="space-y-6">
              {quickStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Social Media & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
            
            {/* Social Links */}
            <div className="mb-8">
              <p className="text-gray-600 mb-4">Follow us on social media for updates and tips:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300 ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Free Career Counseling</h4>
                <p className="text-green-700 text-sm">
                  Book a free 30-minute session with our career experts
                </p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Campus Tours</h4>
                <p className="text-blue-700 text-sm">
                  Visit our state-of-the-art facilities and meet our faculty
                </p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">Alumni Network</h4>
                <p className="text-purple-700 text-sm">
                  Connect with 5000+ successful alumni in top banks
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;