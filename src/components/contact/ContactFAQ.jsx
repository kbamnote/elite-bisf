import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, ChevronUp, HelpCircle, 
  Clock, Users, Award, BookOpen, 
  CreditCard, Phone, MessageCircle
} from 'lucide-react';

const ContactFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      category: 'Admissions',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      questions: [
        {
          question: 'What are the eligibility criteria for banking courses?',
          answer: 'Our banking courses are open to graduates from any discipline. For specialized programs, we may require relevant work experience or specific educational backgrounds. We also offer foundation courses for those new to the banking sector.'
        },
        {
          question: 'When do the next batches start?',
          answer: 'We have multiple batch intakes throughout the year - typically in January, April, July, and October. Weekend batches are also available for working professionals. Contact us for the exact dates of upcoming batches.'
        },
        {
          question: 'Is there an entrance exam or interview process?',
          answer: 'Most of our courses have a simple aptitude test and personal interview to assess your suitability for the program. This helps us understand your career goals and recommend the best course for you.'
        }
      ]
    },
    {
      category: 'Course Details',
      icon: Award,
      color: 'from-green-500 to-green-600',
      questions: [
        {
          question: 'What is the duration of the courses?',
          answer: 'Course durations vary from 3 months for certificate programs to 12 months for comprehensive diploma courses. We also offer intensive weekend programs that can be completed in 6-8 months.'
        },
        {
          question: 'Are the courses recognized by industry?',
          answer: 'Yes, our courses are designed in collaboration with leading banks and are recognized by major financial institutions. We also provide industry-standard certifications upon completion.'
        },
        {
          question: 'What kind of practical training is included?',
          answer: 'All our courses include hands-on training with banking software, case studies, live projects, and internship opportunities with our partner banks and financial institutions.'
        }
      ]
    },
    {
      category: 'Placement Support',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      questions: [
        {
          question: 'What is your placement success rate?',
          answer: 'We maintain a 95% placement success rate. Our dedicated placement cell works closely with over 200+ banking and financial institutions to ensure maximum job opportunities for our students.'
        },
        {
          question: 'What kind of salary packages can I expect?',
          answer: 'Starting salaries typically range from ₹3-8 lakhs per annum depending on the course, your background, and the position. Many of our alumni have achieved significant career growth within 2-3 years.'
        },
        {
          question: 'Do you provide placement support after course completion?',
          answer: 'Yes, we provide lifetime placement support. Even after you complete your course, our placement team continues to share relevant job opportunities and career guidance.'
        }
      ]
    },
    {
      category: 'Fees & Payment',
      icon: CreditCard,
      color: 'from-orange-500 to-red-500',
      questions: [
        {
          question: 'What are the course fees?',
          answer: 'Course fees vary depending on the program. Certificate courses start from ₹25,000, while comprehensive diploma programs range from ₹75,000 to ₹1,50,000. We offer flexible payment options and scholarships.'
        },
        {
          question: 'Do you offer EMI or installment options?',
          answer: 'Yes, we offer flexible payment plans including EMI options, quarterly installments, and education loans through our partner banks. Scholarships are available for meritorious students.'
        },
        {
          question: 'Is there any refund policy?',
          answer: 'We have a transparent refund policy. If you withdraw within the first week of the course, we provide a full refund minus processing charges. Partial refunds are available based on the course completion percentage.'
        }
      ]
    }
  ];

  const quickHelp = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our counselors',
      action: '+91 98765 43210',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick responses to your queries',
      action: 'Chat Now',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Clock,
      title: 'Schedule Call',
      description: 'Book a convenient time slot',
      action: 'Book Now',
      color: 'from-purple-500 to-pink-600'
    }
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
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our courses, admissions, and career opportunities. Can't find what you're looking for? Contact us directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* FAQ Categories */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => {
                const CategoryIcon = category.icon;
                return (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    {/* Category Header */}
                    <div className={`bg-gradient-to-r ${category.color} p-6`}>
                      <div className="flex items-center space-x-4">
                        <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {category.category}
                        </h3>
                      </div>
                    </div>

                    {/* Questions */}
                    <div className="p-6">
                      <div className="space-y-4">
                        {category.questions.map((faq, faqIndex) => {
                          const globalIndex = categoryIndex * 10 + faqIndex;
                          const isOpen = openFAQ === globalIndex;
                          
                          return (
                            <div
                              key={faqIndex}
                              className="border border-gray-200 rounded-xl overflow-hidden"
                            >
                              <motion.button
                                onClick={() => toggleFAQ(globalIndex)}
                                className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                                whileHover={{ backgroundColor: '#f3f4f6' }}
                              >
                                <span className="font-semibold text-gray-900 pr-4">
                                  {faq.question}
                                </span>
                                <motion.div
                                  animate={{ rotate: isOpen ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                </motion.div>
                              </motion.button>
                              
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="p-4 bg-white border-t border-gray-200">
                                      <p className="text-gray-700 leading-relaxed">
                                        {faq.answer}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Quick Help Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Need Immediate Help?
              </h3>
              <div className="space-y-4">
                {quickHelp.map((help, index) => {
                  const HelpIcon = help.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`bg-gradient-to-r ${help.color} p-2 rounded-lg`}>
                          <HelpIcon className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900">{help.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{help.description}</p>
                      <div className="text-blue-600 font-medium text-sm">
                        {help.action} →
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Additional Resources */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our counselors are available to provide personalized guidance and answer any specific questions about your career path.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
              </motion.button>
            </motion.div>

            {/* Popular Resources */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Popular Resources
              </h3>
              <div className="space-y-3">
                {[
                  'Course Brochure Download',
                  'Placement Statistics',
                  'Alumni Success Stories',
                  'Fee Structure Details'
                ].map((resource, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">{resource}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;