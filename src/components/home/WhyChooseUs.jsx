import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp,
  Clock,
  Shield,
  Target,
  Zap,
  CheckCircle,
  Star,
  Building,
  Globe
} from 'lucide-react';

const WhyChooseUs = () => {
  const mainFeatures = [
    {
      icon: Award,
      title: 'Industry-Certified Training',
      description: 'Get certified by leading industry bodies and enhance your professional credibility in BIFS sector.',
      color: 'bg-blue-100 text-blue-600',
      stats: '100% Certified'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from industry veterans with 10+ years of experience in banking, insurance, and financial services.',
      color: 'bg-green-100 text-green-600',
      stats: '10+ Years Exp'
    },
    {
      icon: TrendingUp,
      title: 'Guaranteed Placement',
      description: 'Join our 95% placement success rate with dedicated career support and industry connections.',
      color: 'bg-purple-100 text-purple-600',
      stats: '95% Success'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Master all aspects of BIFS with our updated curriculum covering latest industry trends and practices.',
      color: 'bg-orange-100 text-orange-600',
      stats: 'Latest Content'
    }
  ];

  const additionalBenefits = [
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Weekend and weekday batches available to suit your schedule'
    },
    {
      icon: Shield,
      title: 'Job Security',
      description: 'High demand for BIFS professionals ensures stable career growth'
    },
    {
      icon: Target,
      title: 'Practical Training',
      description: 'Hands-on experience with real banking and insurance scenarios'
    },
    {
      icon: Zap,
      title: 'Fast Track Career',
      description: 'Quick entry into high-paying BIFS jobs with our intensive programs'
    },
    {
      icon: Building,
      title: 'Industry Partnerships',
      description: 'Direct recruitment opportunities with 50+ partner companies'
    },
    {
      icon: Globe,
      title: 'Pan-India Recognition',
      description: 'Our certification is recognized across India\'s financial sector'
    }
  ];

  const testimonialStats = [
    { number: '500+', label: 'Students Placed', icon: Users },
    { number: '₹4.5L', label: 'Average Package', icon: TrendingUp },
    { number: '50+', label: 'Hiring Partners', icon: Building },
    { number: '4.9/5', label: 'Student Rating', icon: Star }
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-white" id="why-choose-us">
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
              Why Choose <span className="text-gradient">BIFS Institute</span>?
            </h2>
            <p className="text-large text-gray-600">
              Join thousands of successful professionals who chose BIFS Institute for their 
              Banking, Insurance & Financial Services career transformation.
            </p>
          </motion.div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {feature.stats}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="heading-tertiary text-gray-900 mb-4">
                Additional Benefits You Get
              </h3>
              <p className="text-body text-gray-600 max-w-2xl mx-auto">
                Beyond excellent training, we provide comprehensive support to ensure your success in the BIFS industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Statistics */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Success Numbers</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {testimonialStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-blue-100 text-primary-600 rounded-xl mb-4">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Comparison Section */}
          <motion.div variants={itemVariants} className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                BIFS Institute vs Others
              </h3>
              <p className="text-gray-600">See why we're the preferred choice for BIFS training in Nagpur</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center font-semibold text-primary-600">BIFS Institute</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">Others</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Industry Expert Faculty', true, false],
                    ['100% Placement Assistance', true, false],
                    ['Flexible Batch Timings', true, true],
                    ['Live Project Training', true, false],
                    ['Industry Certifications', true, false],
                    ['Post-Training Support', true, false]
                  ].map(([feature, bifsBenefit, othersBenefit], index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
                      <td className="px-6 py-4 text-center">
                        {bifsBenefit ? (
                          <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {othersBenefit ? (
                          <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "BIFS Institute",
          "description": "Leading BIFS training institute with industry-certified programs and guaranteed placement assistance",
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": "BIFS Certification",
              "description": "Industry-recognized certification in Banking, Insurance & Financial Services"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500",
            "bestRating": "5"
          },
          "offers": {
            "@type": "Offer",
            "category": "Educational Services",
            "description": "Comprehensive BIFS training with placement assistance"
          }
        })}
      </script>
    </section>
  );
};

export default WhyChooseUs;