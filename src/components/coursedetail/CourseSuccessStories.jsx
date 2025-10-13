import { motion } from 'framer-motion';
import { Quote, Building2, MapPin, Star } from 'lucide-react';

const CourseSuccessStories = ({ course }) => {
  // Course-specific success stories based on the course type
  const getSuccessStories = (courseName) => {
    const baseStories = [
      {
        name: 'Arjun Mehta',
        role: 'Senior Banking Associate',
        company: 'HDFC Bank',
        package: '₹12.5 LPA',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        story: `The ${courseName} program gave me comprehensive knowledge of banking operations. The practical training and industry insights helped me secure a senior position at HDFC Bank.`,
        location: 'Mumbai',
        rating: 5,
        courseCompletion: '2023'
      },
      {
        name: 'Priya Sharma',
        role: 'Financial Analyst',
        company: 'ICICI Bank',
        package: '₹10.8 LPA',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
        story: `Thanks to the excellent curriculum and expert faculty, I was able to transition from a different field into banking. The ${courseName} course prepared me perfectly for the industry.`,
        location: 'Delhi',
        rating: 5,
        courseCompletion: '2023'
      },
      {
        name: 'Rohit Kumar',
        role: 'Insurance Specialist',
        company: 'LIC of India',
        package: '₹9.2 LPA',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
        story: `The practical approach and real-world case studies in ${courseName} helped me understand the insurance sector deeply. Now I'm successfully managing a portfolio of high-value clients.`,
        location: 'Bangalore',
        rating: 5,
        courseCompletion: '2023'
      }
    ];
    return baseStories;
  };

  const successStories = getSuccessStories(course.name);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
            Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Alumni Success</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real stories from students who completed {course.name} and are now thriving in their careers
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Package Badge */}
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {story.package}
                </div>

                {/* Rating */}
                <div className="absolute top-4 left-4 flex items-center space-x-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-3">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{story.name}</h4>
                    <p className="text-sm text-slate-600">{story.role}</p>
                  </div>
                </div>

                <blockquote className="text-slate-700 italic mb-4 leading-relaxed text-sm">
                  "{story.story}"
                </blockquote>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-semibold text-slate-900">{story.company}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-slate-500">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs">{story.location}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500">
                    Course Completed: {story.courseCompletion}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-slate-600 mb-6">
              Join thousands of successful professionals who started their journey with {course.name}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Enroll Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSuccessStories;