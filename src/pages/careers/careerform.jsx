import React, { useState } from "react";
import { FiFileText, FiMail, FiPhone, FiUser, FiX, FiUpload } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    position: "",
    message: "",
    cv: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      cv: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      position: "",
      message: "",
      cv: null,
    });
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.3)",
    },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={formVariants}
      className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl"
    >
      <div className="text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-2"
        >
          Join Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600"
        >
          We're excited to hear from you! Please fill out the form below.
        </motion.p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.01 }}>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                whileFocus="focus"
                variants={inputVariants}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400"/>
              </div>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                whileFocus="focus"
                variants={inputVariants}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }}>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiPhone className="text-gray-400" />
              </div>
              <motion.input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                whileFocus="focus"
                variants={inputVariants}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }}>
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Position
            </label>
            <motion.input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              required
              whileFocus="focus"
              variants={inputVariants}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Frontend Developer"
            />
          </motion.div>
        </div>

        <motion.div whileHover={{ scale: 1.01 }}>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Cover Letter
          </label>
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            whileFocus="focus"
            variants={inputVariants}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Tell us why you'd be a great fit for this position..."
          ></motion.textarea>
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload CV
          </label>
          <motion.label
            whileTap={{ scale: 0.98 }}
            className={`flex flex-col items-center justify-center px-4 py-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${
              formData.cv ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400 hover:bg-indigo-50"
            }`}
          >
            <div className="flex flex-col items-center">
              <FiUpload className="text-2xl mb-2 text-indigo-600" />
              <p className="text-sm text-center">
                {formData.cv ? (
                  <span className="font-medium text-indigo-700">{formData.cv.name}</span>
                ) : (
                  <>
                    <span className="font-medium text-indigo-600">Click to upload</span> or drag and drop
                    <br />
                    <span className="text-gray-500">PDF only (max. 5MB)</span>
                  </>
                )}
              </p>
            </div>
            <input
              id="cv"
              name="cv"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              required
            />
          </motion.label>
          {formData.cv && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, cv: null }))}
              className="mt-2 flex items-center text-sm text-red-500 hover:text-red-700"
            >
              <FiX className="mr-1" /> Remove file
            </motion.button>
          )}
        </motion.div>

        <div className="pt-6">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-colors ${
              isSubmitting
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                />
                Processing...
              </span>
            ) : (
              "Submit Application"
            )}
          </motion.button>
        </div>
      </form>

      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
          >
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Application submitted successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}