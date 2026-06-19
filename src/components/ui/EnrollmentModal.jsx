import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Phone,
  Mail,
  GraduationCap,
  Send,
} from "lucide-react";
import { submitEnrollmentForm } from "../../utils/seo";

const EnrollmentModal = ({ isOpen, onClose, blackTheme = false }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    qualification: "",
    age: "",
    gender: "",
    message: "",
    productCompany: "BISF",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required";

    if (!formData.phoneNo.trim()) {
      newErrors.phoneNo = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNo.replace(/\D/g, ""))) {
      newErrors.phoneNo = "Enter valid 10-digit number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email";
    }

    if (!formData.qualification)
      newErrors.qualification = "Education is required";

    if (!formData.age)
      newErrors.age = "Age is required";

    if (!formData.gender)
      newErrors.gender = "Gender is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await submitEnrollmentForm({
        productCompany: formData.productCompany,
        phoneNo: formData.phoneNo,
        fullName: formData.fullName,
        email: formData.email,
      });

      setFormData({
        fullName: "",
        phoneNo: "",
        email: "",
        qualification: "",
        age: "",
        gender: "",
        message: "",
        productCompany: "BISF",
      });

      console.log(res.data);
      

      onClose();
    } catch (error) {
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
           className={`w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden ${blackTheme ? 'border-2 border-black' : ''}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`flex items-center justify-between px-5 py-1 border-b ${blackTheme ? 'border-black' : 'border-gray-200'}`}>
              <h2 className={`text-3xl font-bold ${blackTheme ? 'text-black' : 'text-gray-900'}`}>
                Enroll Now
              </h2>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-black hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className={`p-5 ${blackTheme ? 'text-black' : 'text-gray-700'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Full Name */}
                <div>
                  <label className="block font-medium mb-1">
                    <User className="inline mr-2" size={16} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg px-4 py-2 ${blackTheme ? 'border-black' : ''}`}
                    placeholder="Enter full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-medium mb-1">
                    <Phone className="inline mr-2" size={16} />
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg px-4 py-2 ${blackTheme ? 'border-black' : ''}`}
                    placeholder="Enter phone number"
                  />
                  {errors.phoneNo && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNo}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-medium mb-1">
                    <Mail className="inline mr-2" size={16} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg px-4 py-2 ${blackTheme ? 'border-black' : ''}`}
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Age */}
                <div>
                  <label className="block font-medium mb-1">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg px-4 py-2 ${blackTheme ? 'border-black' : ''}`}
                    placeholder="Enter age"
                  />
                  {errors.age && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.age}
                    </p>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label className="block font-medium mb-1">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg px-4 py-2 ${blackTheme ? 'border-black' : ''}`}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Qualification */}
                <div>
                  <label className="block font-medium mb-1">
                    <GraduationCap className="inline mr-2" size={16} />
                    Education Level
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg px-4 py-2 ${blackTheme ? 'border-black' : ''}`}
                  >
                    <option value="">Select Education</option>
                    <option value="high-school">High School</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows="1"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg px-4 py-2 ${blackTheme ? 'border-black' : ''}`}
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center transition-all"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Submit Enrollment
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnrollmentModal;