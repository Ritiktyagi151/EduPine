import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiBook,
  FiGlobe,
  FiMusic,
  FiCode,
  FiAward,
  FiX,
} from "react-icons/fi";
import { useState } from "react";
import {
  examCoachingSubcategories,
  hobbySubcategories,
  itCoursesSubcategories,
  languageSubcategories,
  tuitionSubcategories,
  onlineClassesSubcategories,
} from "../../lists/course";
import ContactForm from "../../components/ContactForm";
import { Link } from "react-router-dom";

const Courses = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showTuitionPopup, setShowTuitionPopup] = useState(false);
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [showHobbyPopup, setShowHobbyPopup] = useState(false);
  const [showItCoursesPopup, setShowItCoursesPopup] = useState(false);
  const [showExamCoachingPopup, setShowExamCoachingPopup] = useState(false);
  const [showOnlineClassesPopup, setShowOnlineClassesPopup] = useState(false);

  const categories = [
    {
      id: 1,
      title: "Online Classes",
      description:
        "Live interactive sessions with expert tutors from anywhere in the world",
      icon: <FiGlobe className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      stats: "10,000+ tutors",
      onClick: () => setShowOnlineClassesPopup(true),
    },
    {
      id: 2,
      title: "Tuition",
      description:
        "Personalized academic support for school and college students",
      icon: <FiBook className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      stats: "50+ subjects",
      onClick: () => setShowTuitionPopup(true),
    },
    {
      id: 3,
      title: "Languages",
      description:
        "Learn any language with native speakers and certified instructors",
      icon: <FiGlobe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      stats: "50+ languages",
      onClick: () => setShowLanguagePopup(true),
    },
    {
      id: 4,
      title: "Hobby Classes",
      description: "Discover new passions in arts, music, crafts and more",
      icon: <FiMusic className="w-8 h-8" />,
      color: "from-rose-500 to-pink-600",
      stats: "1,000+ hobbies",
      onClick: () => setShowHobbyPopup(true),
    },
    {
      id: 5,
      title: "IT Courses",
      description:
        "Master programming, cybersecurity, data science and emerging tech",
      icon: <FiCode className="w-8 h-8" />,
      color: "from-orange-500 to-amber-600",
      stats: "500+ courses",
      onClick: () => setShowItCoursesPopup(true),
    },
    {
      id: 6,
      title: "Exam Coaching",
      description: "Specialized preparation for competitive and entrance exams",
      icon: <FiAward className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-600",
      stats: "100+ exams",
      onClick: () => setShowExamCoachingPopup(true),
    },
  ];

  // Filter subcategories based on search
  const filteredTuitions = tuitionSubcategories.filter((tuition) =>
    tuition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredLanguages = languageSubcategories.filter((language) =>
    language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredHobbies = hobbySubcategories.filter((hobby) =>
    hobby.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredItCourses = itCoursesSubcategories.filter((course) =>
    course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredExamCoaching = examCoachingSubcategories.filter((exam) =>
    exam.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredOnlineClasses = onlineClassesSubcategories.filter(
    (onlineClass) =>
      onlineClass.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const hoverEffect = {
    scale: 1.03,
    y: -5,
    transition: { duration: 0.3 },
  };

  const popup = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header with search */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            Find a Tutor for Anything!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Connect with expert tutors across hundreds of subjects and skills
          </p>
        </motion.div>

        {/* Categories grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              whileHover={hoverEffect}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={category.onClick}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}
              ></div>

              <motion.div
                className="absolute inset-0 opacity-10"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              </motion.div>

              <div className="relative z-10 p-8 text-white h-full flex flex-col">
                <div className="mb-6 p-4 bg-white/20 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                  {category.title}
                </h3>
                <p className="text-white/80 mb-4 group-hover:text-white/90 transition-colors">
                  {category.description}
                </p>
                <div className="mt-auto pt-4 border-t border-white/20">
                  <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">
                    {category.stats}
                  </span>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white/50"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Online Classes Popup */}
        <AnimatePresence>
          {showOnlineClassesPopup && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowOnlineClassesPopup(false)}
            >
              <motion.div
                className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col"
                variants={popup}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Select Online Class Type
                  </h3>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowOnlineClassesPopup(false)}
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search online classes..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="overflow-y-auto flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                    {filteredOnlineClasses.map((onlineClass, index) => (
                      <Link to="/registration" key={index}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors"
                          onClick={() => {
                            console.log(`Selected: ${onlineClass}`);
                            setShowOnlineClassesPopup(false);
                          }}
                        >
                          <h4 className="font-medium text-gray-800">
                            {onlineClass}
                          </h4>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 text-right">
                  <button
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                    onClick={() => setShowOnlineClassesPopup(false)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tuition Popup */}
        <AnimatePresence>
          {showTuitionPopup && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTuitionPopup(false)}
            >
              <motion.div
                className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col"
                variants={popup}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Select Tuition Category
                  </h3>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowTuitionPopup(false)}
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search tuition categories..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="overflow-y-auto flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                    {filteredTuitions.map((tuition, index) => (
                      <Link to="/registration" key={index}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors"
                          onClick={() => {
                            console.log(`Selected: ${tuition}`);
                            setShowTuitionPopup(false);
                          }}
                        >
                          <h4 className="font-medium text-gray-800">
                            {tuition}
                          </h4>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 text-right">
                  <button
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                    onClick={() => setShowTuitionPopup(false)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Language Popup */}
        <AnimatePresence>
          {showLanguagePopup && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLanguagePopup(false)}
            >
              <motion.div
                className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col"
                variants={popup}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Select Language to Learn
                  </h3>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowLanguagePopup(false)}
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search language courses..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="overflow-y-auto flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                    {filteredLanguages.map((language, index) => (
                      <Link to="/registration" key={index}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors"
                          onClick={() => {
                            console.log(`Selected: ${language}`);
                            setShowLanguagePopup(false);
                          }}
                        >
                          <h4 className="font-medium text-gray-800">
                            {language}
                          </h4>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 text-right">
                  <button
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                    onClick={() => setShowLanguagePopup(false)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hobby Classes Popup */}
        <AnimatePresence>
          {showHobbyPopup && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHobbyPopup(false)}
            >
              <motion.div
                className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col"
                variants={popup}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Select Hobby Class
                  </h3>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowHobbyPopup(false)}
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search hobby classes..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="overflow-y-auto flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                    {filteredHobbies.map((hobby, index) => (
                      <Link to="/registration" key={index}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors"
                          onClick={() => {
                            console.log(`Selected: ${hobby}`);
                            setShowHobbyPopup(false);
                          }}
                        >
                          <h4 className="font-medium text-gray-800">{hobby}</h4>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 text-right">
                  <button
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                    onClick={() => setShowHobbyPopup(false)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* IT Courses Popup */}
        <AnimatePresence>
          {showItCoursesPopup && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowItCoursesPopup(false)}
            >
              <motion.div
                className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col"
                variants={popup}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Select IT Course
                  </h3>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowItCoursesPopup(false)}
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search IT courses..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="overflow-y-auto flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                    {filteredItCourses.map((course, index) => (
                      <Link to="/registration" key={index}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors"
                          onClick={() => {
                            console.log(`Selected: ${course}`);
                            setShowItCoursesPopup(false);
                          }}
                        >
                          <h4 className="font-medium text-gray-800">
                            {course}
                          </h4>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 text-right">
                  <button
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                    onClick={() => setShowItCoursesPopup(false)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Exam Coaching Popup */}
        <AnimatePresence>
          {showExamCoachingPopup && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExamCoachingPopup(false)}
            >
              <motion.div
                className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col"
                variants={popup}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Select Exam Coaching
                  </h3>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowExamCoachingPopup(false)}
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search exam coaching..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="overflow-y-auto flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                    {filteredExamCoaching.map((exam, index) => (
                      <Link to="/registration" key={index}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors"
                          onClick={() => {
                            console.log(`Selected: ${exam}`);
                            setShowExamCoachingPopup(false);
                          }}
                        >
                          <h4 className="font-medium text-gray-800">{exam}</h4>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 text-right">
                  <button
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                    onClick={() => setShowExamCoachingPopup(false)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for?
          </p>
          <button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
            onClick={() => setShowRequestForm(true)}
          >
            Request a Custom Tutor
          </button>
        </motion.div>

        {/* Contact Form */}
        {showRequestForm && (
          <ContactForm onClose={() => setShowRequestForm(false)} />
        )}
      </div>
    </section>
  );
};

export default Courses;
