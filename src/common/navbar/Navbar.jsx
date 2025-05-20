import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FiSearch,
  FiBook,
  FiHome,
  FiUser,
  FiFileText,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Courses", path: "/courses", icon: <FiBook /> },
    { name: "About Us", path: "/about", icon: <FiUser /> },
    { name: "Blogs", path: "/blogs", icon: <FiFileText /> },
    { name: "Careers", path: "/careers", icon: <FiBriefcase /> },
    { name: "Contact Us", path: "/contact-us", icon: <FiMail /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky w-full z-50 top-0 hidden left-0 px-6 py-3 sm:flex items-center justify-between bg-gradient-to-r from-indigo-50 to-blue-50 shadow-sm"
      style={{
        background:
          "linear-gradient(rgba(238, 242, 255,0.9), rgba(238, 242, 255,0.9)), url('/images/nav-bg.jpg')",
      }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <motion.div
          whileHover={{ rotate: 360 }}
          className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
        >
          EP
        </motion.div>
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          EduPine
        </span>
      </Link>

      {/* Simple Search Bar (always visible) */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full py-2 px-4 pl-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-1">
        {navLinks.map((link, index) => (
          <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
            <Link
              to={link.path}
              className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              <span className="mr-2 text-sm">{link.icon}</span>
              <span className="text-sm">{link.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Login/Signup Buttons */}
      <div className="flex items-center space-x-2">
        <Link to="/login">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
        >
          Login
        </motion.button>
        </Link>
        <Link to="/signup">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
        >
          Sign Up
        </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
