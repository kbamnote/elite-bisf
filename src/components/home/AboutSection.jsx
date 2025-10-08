import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, Eye, Users, TrendingUp, Award, CheckCircle, 
  ArrowRight, BookOpen, Clock, Globe, Star, Trophy, Building
} from 'lucide-react';
import OptimizedImage from '../common/OptimizedImage';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: 'Industry-Focused Curriculum',
      description: 'Our BIFS courses are designed with input from banking and financial industry experts to ensure relevance and practical application.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from experienced professionals with 10+ years in banking, insurance, and financial services sectors.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Award,
      title: 'Certified Training',
      description: 'Get industry-recognized certifications that enhance your credibility and career prospects in BIFS sector.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: TrendingUp,
      title: '100% Placement Support',
      description: 'Comprehensive placement assistance with interview preparation, resume building, and direct company tie-ups.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Students Trained', icon: Users },
    { number: '95%', label: 'Placement Rate', icon: TrendingUp },
    { number: '50+', label: 'Partner Companies', icon: Building },
    { number: '10+', label: 'Years Experience', icon: Award }
  ];

  const whyChoosePoints = [
    'Comprehensive BIFS curriculum covering Banking, Insurance & Financial Services',
    'Hands-on training with real-world case studies and projects',
    'Flexible batch timings - Weekend and weekday options available',
    'Modern infrastructure with latest technology and software',
    'Regular industry guest lectures and workshops',
    'Post-training support and career guidance'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="heading-secondary mb-6">
              About <span className="text-gradient">BIFS Institute</span>
            </h2>
            <p className="text-large text-gray-600">
              Leading the way in Banking, Insurance & Financial Services education in Nagpur. 
              We transform careers through comprehensive training and guaranteed placement support.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Why Choose BIFS Institute for Your Career?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With over a decade of experience in BIFS training, we have established ourselves 
                  as Nagpur's premier institute for Banking, Insurance & Financial Services education. 
                  Our industry-aligned curriculum and expert faculty ensure you're job-ready from day one.
                </p>
              </div>

              {/* Why Choose Points */}
              <div className="space-y-4">
                {whyChoosePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* Achievements Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-3">
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="BIFS Institute classroom with students learning banking and financial services"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Top Rated</div>
                      <div className="text-sm text-gray-600">BIFS Institute in Nagpur</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card text-center group hover:bg-dark hover:text-white transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl mb-6 bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors duration-500">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-dark mb-4 font-serif group-hover:text-white transition-colors duration-500">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="card bg-dark text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-dark/90"></div>
            <div className="relative max-w-4xl mx-auto space-y-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 text-gold rounded-xl mb-6 border border-gold/30">
                <BookOpen className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-bold text-white font-serif">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                To empower students with comprehensive knowledge and practical skills in Banking, 
                Insurance & Financial Services, ensuring they become industry-ready professionals 
                who contribute meaningfully to India's growing financial sector.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-6">
                <span className="px-6 py-3 bg-gold/10 text-gold rounded-full font-semibold border border-gold/20 hover:bg-gold hover:text-dark transition-all duration-300">
                  Quality Education
                </span>
                <span className="px-6 py-3 bg-gold/10 text-gold rounded-full font-semibold border border-gold/20 hover:bg-gold hover:text-dark transition-all duration-300">
                  Industry Relevance
                </span>
                <span className="px-6 py-3 bg-gold/10 text-gold rounded-full font-semibold border border-gold/20 hover:bg-gold hover:text-dark transition-all duration-300">
                  Career Success
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About BIFS Institute - Leading Banking Insurance Financial Services Training",
          "description": "Learn about BIFS Institute, Nagpur's premier training center for Banking, Insurance & Financial Services with 500+ students placed and 95% success rate.",
          "mainEntity": {
            "@type": "EducationalOrganization",
            "name": "BIFS Institute",
            "description": "Leading BIFS training institute in Nagpur",
            "foundingDate": "2013",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "addressCountry": "India"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          }
        })}
      </script>
    </section>
  );
};

export default AboutSection;