import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import EnrollmentModal from "../ui/EnrollmentModal";

const AboutSection = () => {
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);

  return (
    <section className="relative py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6"
        >
          <Sparkles className="text-white w-8 h-8" />
        </motion.div>

        <h2 className="text-5xl font-bold mb-6">
          About <span className="text-blue-600">BIFS Institute</span>
        </h2>

        <p className="text-lg text-slate-600 mb-10">
          Transforming students into industry-ready professionals with expert
          faculty and 100% placement support.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => setIsEnrollmentModalOpen(true)}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Get Started
          <ArrowRight />
        </button>
      </div>

      {/* MODAL */}
      <EnrollmentModal
        isOpen={isEnrollmentModalOpen}
        onClose={() => setIsEnrollmentModalOpen(false)}
      />
    </section>
  );
};

export default AboutSection;
