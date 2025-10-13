import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen } from 'lucide-react';

const AboutMission = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.3]);

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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Mission Statement */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl p-12 md:p-16 overflow-hidden"
          style={{ opacity, y }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)',
              backgroundSize: '100% 100%'
            }}
          />

          <div className="relative max-w-4xl mx-auto space-y-8 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-xl opacity-50" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h3>

            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              To empower individuals and businesses with comprehensive financial solutions that drive growth, 
              security, and prosperity. We are committed to delivering exceptional banking services through 
              innovation, integrity, and personalized customer care.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {['Financial Excellence', 'Customer First', 'Innovation & Trust'].map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 rounded-full font-semibold shadow-lg cursor-pointer"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Elite Banking - Leading Financial Services & Digital Banking Solutions",
            "description": "Learn about Elite Banking, your trusted financial partner with 15+ years of excellence in banking, investment planning, and comprehensive financial solutions.",
            "mainEntity": {
              "@type": "FinancialService",
              "name": "Elite Banking",
              "description": "Leading financial services provider specializing in digital banking and investment solutions",
              "foundingDate": "2008",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "10000"
              }
            }
          })}
        </script>
      </div>
    </section>
  );
};

export default AboutMission;