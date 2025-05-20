import React from "react";
import { motion } from "framer-motion";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "About Us", url: "/about" },
        { name: "Blog", url: "/blogs" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", url: "/contact-us" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" },
      ],
    },
    {
      title: "Categories",
      links: [
        { name: "Tuition", url: "/login" },
        { name: "Languages", url: "/login" },
        { name: "IT courses", url: "/login" },
        { name: "Exam Coaching", url: "/login" },
        { name: "Hobby Classes", url: "/login" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, url: "#" },
    { icon: <FiTwitter />, url: "#" },
    { icon: <FiInstagram />, url: "#" },
    { icon: <FiLinkedin />, url: "#" },
    { icon: <FiYoutube />, url: "#" },
  ];

  const contactInfo = [
    { icon: <FiMail />, text: "contact@edupine.com" },
    { icon: <FiPhone />, text: "+91 1234567890" },
    { icon: <FiMapPin />, text: "123 Education St, Learning City" },
    { icon: <FiClock />, text: "Mon-Fri: 9AM - 5PM" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Newsletter */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl p-6 mb-12 border border-gray-700/50"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on new courses, special offers and learning
              resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white"
              >
                <FaGraduationCap className="text-xl" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                EduPine
              </span>
            </div>
            <p className="text-gray-300">
              Empowering learners worldwide with quality education and
              innovative learning solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.1 }}
                  href={social.url}
                  className="text-gray-300 hover:text-white text-xl transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.url}
                      className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-gray-300"
                >
                  <span className="text-blue-400 mt-0.5">{info.icon}</span>
                  <span>{info.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} EduPine. All rights reserved.
          </p>
          <div className="flex ">
            <p className="flex text-sm gap-1 justify-center items-center">
              © 2025 Designed & Developed By
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 text-sm transition-colors"
              >
                Jaikvik Technology India Pvt Ltd
              </a>{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
