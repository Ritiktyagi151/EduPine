import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiArrowRight,
  FiX,
} from "react-icons/fi";
import { FaDiscord, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const CyberContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeTab, setActiveTab] = useState("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setActiveTab("success");
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      info: "contact@edupine.com",
      action: "mailto:contact@edupine.com",
      bg: "bg-gradient-to-br from-purple-600 to-blue-500",
      pulse: true,
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      info: "+1 (555) 123-4567",
      action: "https://wa.me/15551234567",
      bg: "bg-gradient-to-br from-green-500 to-teal-500",
      bounce: true,
    },
    {
      icon: <IoLocationSharp className="text-2xl" />,
      title: "Visit Us",
      info: "123 Education Street",
      action: "#",
      bg: "bg-gradient-to-br from-red-500 to-orange-500",
      onClick: () => setShowMapModal(true),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
      />

      {/* Floating tech elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-cyan-400/30"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 right-1/3 w-8 h-8 rounded-full bg-purple-400/30"
      />
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-cyan-400/20 rounded-full"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Connect With Us
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Reach out through any channel below. Our team typically responds
            within 24 hours.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={method.onClick}
              className={`${method.bg} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group overflow-hidden relative cursor-pointer h-full`}
            >
              {method.pulse && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl border-2 border-white/20"
                />
              )}
              {method.shake && (
                <motion.div
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/10"
                />
              )}
              {method.bounce && (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-white/5"
                />
              )}
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 mb-4 rounded-lg bg-black/20 flex items-center justify-center backdrop-blur-sm">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-cyan-100 mb-4 flex-grow">{method.info}</p>
                {method.action !== "#" ? (
                  <a
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium mt-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Contact us{" "}
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <div className="flex items-center text-sm font-medium mt-auto">
                    View location{" "}
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Form Section */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 max-w-3xl mx-auto">
          <div className="p-8">
            <AnimatePresence mode="wait">
              {activeTab === "form" ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                    Direct Message
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-400">
                            <FiUser />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full py-3 px-4 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-400">
                            <FiMail />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full py-3 px-4 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Message
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none text-cyan-400">
                            <FiMessageSquare />
                          </div>
                          <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full py-3 px-4 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition-all"
                            placeholder="How can we help you?"
                          />
                        </div>
                      </motion.div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 px-6 rounded-lg font-bold flex items-center justify-center ${
                          isSubmitting
                            ? "bg-cyan-600/50"
                            : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                        } shadow-lg hover:shadow-cyan-500/20 transition-all`}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full"
                          />
                        ) : (
                          <>
                            <span className="mr-2">Send Message</span>
                            <motion.span
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <FiSend />
                            </motion.span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], y: [-10, 0, -10] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">
                    Message Received!
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    We've received your message and will get back to you soon.
                  </p>
                  <div className="flex justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab("form")}
                      className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all shadow hover:shadow-md"
                    >
                      Send Another
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowMapModal(true)}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-lg transition-all shadow hover:shadow-md"
                    >
                      Visit Our Location
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {showMapModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowMapModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 max-w-4xl w-full"
            >
              <button
                onClick={() => setShowMapModal(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <FiX className="text-xl" />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="h-64 lg:h-auto lg:w-2/3 bg-gray-700 relative overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="mx-auto mb-6"
                      >
                        <IoLocationSharp className="text-6xl text-red-500" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">
                        Our Headquarters
                      </h3>
                      <p className="text-gray-300 mb-4">
                        123 Education Street, Learning City
                      </p>
                      <p className="text-gray-400">LN 12345, United States</p>
                    </div>
                  </div>

                  {/* Animated map elements */}
                  <motion.div
                    animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-cyan-400/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute bottom-1/3 right-1/3 w-24 h-24 border-2 border-purple-400/20 rounded-full"
                  />
                </motion.div>

                {/* Location Info */}
                <div className="lg:w-1/3 p-8 bg-gray-800/80 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <IoLocationSharp className="mr-2 text-red-500" />
                    Visit Us
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <FiMapPin className="text-xl text-cyan-400 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Address</h4>
                        <p className="text-gray-300">
                          123 Education Street
                          <br />
                          Learning City, LN 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <FiClock className="text-xl text-cyan-400 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Hours</h4>
                        <p className="text-gray-300">
                          Monday - Friday: 9AM - 6PM
                          <br />
                          Weekends: 10AM - 4PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <FiPhone className="text-xl text-cyan-400 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Contact</h4>
                        <p className="text-gray-300">
                          +1 (555) 123-4567
                          <br />
                          reception@edupine.com
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 px-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-center font-medium shadow-lg hover:shadow-red-500/20 transition-all"
                      >
                        Get Directions
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CyberContactPage;
