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
  FiMenu,
  FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Courses", path: "/courses", icon: <FiBook /> },
    { name: "About Us", path: "/about", icon: <FiUser /> },
    { name: "Blogs", path: "/blogs", icon: <FiFileText /> },
    { name: "Careers", path: "/careers", icon: <FiBriefcase /> },
    { name: "Contact Us", path: "/contact-us", icon: <FiMail /> },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden sticky w-full z-50 top-0 left-0 px-4 py-3 flex items-center justify-between bg-gradient-to-r from-indigo-50 to-blue-50 shadow-sm "
        style={{
          background:
            "linear-gradient(rgba(238, 242, 255,0.9), rgba(238, 242, 255,0.9)), url('/images/nav-bg.jpg')",
        }}
      >
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
          >
            EP
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            EduPine
          </span>
        </Link>

        <motion.button
          onClick={toggleSidebar}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full text-gray-700"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </motion.nav>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 z-50 w-64 h-full bg-gradient-to-b from-indigo-50 to-blue-50 shadow-lg"
            >
              <div className="flex flex-col h-full p-4">
                <div className="flex items-center justify-between mb-8">
                  <Link
                    to="/"
                    className="flex items-center space-x-2"
                    onClick={toggleSidebar}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                    >
                      EP
                    </motion.div>
                    <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                      EduPine
                    </span>
                  </Link>
                  <motion.button
                    onClick={toggleSidebar}
                    whileHover={{ rotate: 90 }}
                    className="p-1 rounded-full text-gray-700"
                  >
                    <FiX size={24} />
                  </motion.button>
                </div>

                {/* Mobile Search */}
                <div className="mb-6">
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
                <nav className="flex-1 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: index * 0.1 },
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={link.path}
                        onClick={toggleSidebar}
                        className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <span className="mr-3 text-lg">{link.icon}</span>
                        <span className="text-sm font-medium">{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Auth Buttons */}
                <div className="mt-auto pt-4 space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 rounded-lg text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Login
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 transition-colors shadow-md"
                  >
                    Sign Up
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
