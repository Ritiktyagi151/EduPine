import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiPlay,
  FiUsers,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import LearningPathsSection from "./LearningPathsSection";
import ExploreCategories from "./ExploreCategories";
import FAQSection from "./FAQSection";
import Courses from "./Courses";
import StudentDashboard from "../../studentDashBoard/student";
import EducationPlatform from "../../components/login/signup";
import EduPineBanner from "./EduPineBanner";
import HowItWorks from "./HowItWorks";
import Worldmap from "./Worldmap";
import PlacementRecordsSection from "./PlacementRecordsSection";
import Companies from "./Companies";

const Home = () => {
  const stats = [
    {
      value: "10K+",
      label: "Students Enrolled",
      icon: <FiUsers className="text-blue-500" />,
    },
    {
      value: "500+",
      label: "Courses Available",
      icon: <FiBookOpen className="text-indigo-500" />,
    },
    {
      value: "100+",
      label: "Expert Instructors",
      icon: <FiAward className="text-purple-500" />,
    },
  ];

  const features = [
    "Interactive Learning",
    "Certification Programs",
    "Lifetime Access",
    "Expert Instructors",
    "Community Support",
  ];

  return (
    <>
      <EduPineBanner />
      
      <section className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative pt-10 pb-20 px-4 sm:px-6 lg:px-10 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className=" mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Learn Without{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Limits
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Advance your career with our industry-relevant courses taught
                  by world-class instructors. Start learning today and unlock
                  your potential.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    Explore Courses <FiArrowRight className="inline ml-2" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-gray-800 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center"
                  >
                    <FiPlay className="mr-2 text-blue-600" /> Book a Demo Class
                  </motion.button>
                </motion.div>

                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <ul className="grid grid-cols-2 gap-2">
                    z
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center text-gray-700"
                      >
                        <FiCheckCircle className="mr-2 text-green-500" />{" "}
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Right Content - Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full  lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    className=" h-full object-fill
                    "
                    autoPlay
                    loop
                    muted
                    src="https://www.shutterstock.com/shutterstock/videos/1082877175/preview/stock-footage-a-young-woman-reads-a-book-in-the-park-in-autumn-in-the-rays-of-the-sunset-prayer-in-nature-a.webm"
                  ></video>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-blue-50 mr-4">
                      {stat.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </h3>
                      <p className="text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Popular Courses Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Courses
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our most popular courses loved by thousands of students
                worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((course, index) => {
                // Random study-related images from Unsplash
                const courseImages = [
                  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
                  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
                ];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="h-48 relative overflow-hidden">
                      {/* Course image with proper sizing */}
                      <img
                        src={courseImages[index]}
                        alt="Course thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {index === 0
                          ? "Bestseller"
                          : index === 1
                          ? "New"
                          : "Trending"}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                          <FiUsers />
                        </div>
                        <span className="text-gray-600">John Doe</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {index === 0
                          ? "Web Development Bootcamp"
                          : index === 1
                          ? "Data Science Fundamentals"
                          : "UX/UI Design Masterclass"}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {index === 0
                          ? "Complete full-stack web development course with modern technologies"
                          : index === 1
                          ? "Learn data analysis, visualization and machine learning basics"
                          : "Master user experience and interface design principles"}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-600 font-bold">
                          ${index === 0 ? "99" : index === 1 ? "79" : "89"}
                        </span>
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                          Enroll Now <FiArrowRight className="inline ml-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                View All Courses
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      <Courses />
      <Companies />

      <FeaturesSection />
      {/* <StudentDashboard /> */}
      <HowItWorks />
      <FAQSection />
      {/* <EducationPlatform /> */}
      <TestimonialsSection />
      <Worldmap />
      <PlacementRecordsSection />
      <LearningPathsSection />
    </>
  );
};

export default Home;
