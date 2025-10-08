import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, Eye, Award, Users, TrendingUp, BookOpen, 
  CheckCircle, Star, ArrowRight, Quote, Calendar,
  MapPin, Phone, Mail, Linkedin, Trophy, Clock
} from 'lucide-react';
import { SEOHelmet } from '../hooks/useSEO.jsx';

const About = () => {
  const pageTitle = "About BIFS Institute | Best Banking Insurance Financial Services Training in India";
  const pageDescription = "Learn about BIFS Institute - India's leading Banking, Insurance & Financial Services training institute. Our mission, vision, expert faculty, achievements, and commitment to student success.";
  const pageKeywords = "BIFS Institute, about us, banking training institute, insurance education, financial services academy, expert faculty, student success, placement guarantee";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "BIFS Institute",
    "description": "Leading Banking, Insurance & Financial Services training institute in India",
    "url": "https://bifsinstitute.com",
    "logo": "https://bifsinstitute.com/logo.png",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Education Street",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "info@bifsinstitute.com"
    },
    "sameAs": [
      "https://facebook.com/bifsinstitute",
      "https://linkedin.com/company/bifsinstitute",
      "https://twitter.com/bifsinstitute"
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bifsinstitute.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://bifsinstitute.com/about"
      }
    ]
  };

  const achievements = [
    { number: "5000+", label: "Students Trained", icon: Users },
    { number: "95%", label: "Placement Rate", icon: TrendingUp },
    { number: "200+", label: "Partner Companies", icon: Award },
    { number: "8+", label: "Years Experience", icon: Calendar },
    { number: "50+", label: "Expert Faculty", icon: BookOpen },
    { number: "15+", label: "Industry Awards", icon: Trophy }
  ];

  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Director & Senior Faculty",
      experience: "15+ Years",
      specialization: "Banking & Financial Services",
      education: "PhD in Finance, MBA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Prof. Priya Sharma",
      designation: "Head of Insurance Department",
      experience: "12+ Years",
      specialization: "Insurance & Risk Management",
      education: "M.Com, CAIIB, FII",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Mr. Amit Patel",
      designation: "Senior Banking Faculty",
      experience: "10+ Years",
      specialization: "Retail & Corporate Banking",
      education: "MBA Finance, CAIIB",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Ms. Sneha Gupta",
      designation: "Placement Head",
      experience: "8+ Years",
      specialization: "Career Counseling & Placement",
      education: "MBA HR, PMP",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "#"
    }
  ];

  const values = [
    {
      title: "Excellence in Education",
      description: "We strive to provide the highest quality education with industry-relevant curriculum and practical training.",
      icon: Award
    },
    {
      title: "Student-Centric Approach",
      description: "Every decision we make is focused on student success, career growth, and achieving their professional goals.",
      icon: Users
    },
    {
      title: "Industry Integration",
      description: "We maintain strong partnerships with leading companies to ensure our students get the best placement opportunities.",
      icon: TrendingUp
    },
    {
      title: "Continuous Innovation",
      description: "We constantly update our curriculum and teaching methods to stay ahead of industry trends and requirements.",
      icon: BookOpen
    },
    {
      title: "Integrity & Trust",
      description: "We build lasting relationships based on trust, transparency, and ethical practices in all our interactions.",
      icon: CheckCircle
    },
    {
      title: "Lifelong Learning",
      description: "We encourage continuous learning and provide ongoing support to our alumni throughout their careers.",
      icon: Target
    }
  ];

  const testimonials = [
    {
      name: "Rahul Mehta",
      position: "Senior Banking Officer, HDFC Bank",
      content: "BIFS Institute transformed my career. The practical training and placement support helped me secure my dream job in banking.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Pooja Singh",
      position: "Insurance Advisor, LIC",
      content: "The faculty at BIFS Institute are industry experts who provided invaluable insights and guidance throughout my course.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Vikash Jain",
      position: "Financial Analyst, Bajaj Finserv",
      content: "Excellent curriculum, supportive faculty, and guaranteed placement. BIFS Institute is the best choice for BIFS courses.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SEOHelmet
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl="https://bifsinstitute.com/about"
        structuredData={[structuredData, breadcrumbData]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-secondary-400">BIFS Institute</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto">
                Empowering careers in Banking, Insurance & Financial Services since 2015. 
                We are India's leading training institute with a proven track record of student success.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-secondary-400" />
                  Industry Leader
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-secondary-400" />
                  5000+ Alumni
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-secondary-400" />
                  95% Placement Rate
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Mission */}
              <motion.div variants={itemVariants} className="text-center lg:text-left">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <Target className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To provide world-class education and training in Banking, Insurance, and Financial Services, 
                  empowering students with the knowledge, skills, and confidence needed to excel in their careers 
                  and contribute meaningfully to the financial sector.
                </p>
                <div className="space-y-3">
                  {[
                    "Deliver industry-relevant curriculum",
                    "Provide hands-on practical training",
                    "Ensure 100% placement support",
                    "Foster continuous learning culture"
                  ].map((point, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div variants={itemVariants} className="text-center lg:text-left">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <Eye className="w-8 h-8 text-secondary-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To be India's most trusted and preferred institute for Banking, Insurance, and Financial Services 
                  education, recognized for our commitment to excellence, innovation, and student success in 
                  shaping the future of the financial industry.
                </p>
                <div className="space-y-3">
                  {[
                    "Be the #1 BIFS training institute in India",
                    "Maintain 100% placement record",
                    "Expand to 50+ cities nationwide",
                    "Train 10,000+ students annually"
                  ].map((point, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that speak for our commitment to excellence and student success
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{achievement.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Faculty */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Expert Faculty
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn from industry professionals with extensive experience in Banking, Insurance, and Financial Services
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {faculty.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                        aria-label={`View ${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-semibold mb-2">{member.designation}</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {member.experience}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {member.specialization}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {member.education}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our commitment to student success
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Our Students Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our successful alumni who are now thriving in their BIFS careers
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-xl p-8 relative"
                >
                  <Quote className="w-8 h-8 text-primary-300 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Success Story?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Take the first step towards a rewarding career in Banking, Insurance & Financial Services. 
                Join thousands of successful professionals who started their journey with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/courses"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
                  aria-label="Explore our BIFS courses"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
                  aria-label="Contact us for more information"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;