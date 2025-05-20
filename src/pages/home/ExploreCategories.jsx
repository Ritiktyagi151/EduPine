import React from "react";
import { motion } from "framer-motion";
import { 
  FiBook, FiGlobe, FiMusic, FiCode, 
  FiFeather, FiCamera, FiDribbble, FiBarChart2, 
  FiArrowRight
} from "react-icons/fi";


const ExploreCategories = () => {
  const categories = [
    {
      title: "Tuition",
      items: [
        // { name: "Mathematics", icon: <FiCalculator className="text-blue-500" />, courses: 128 },
        { name: "Science", icon: <FiBarChart2 className="text-green-500" />, courses: 95 },
        { name: "Programming", icon: <FiCode className="text-purple-500" />, courses: 210 },
        { name: "Literature", icon: <FiBook className="text-amber-500" />, courses: 76 }
      ],
      color: "bg-blue-50",
      accent: "text-blue-600"
    },
    {
      title: "Languages",
      items: [
        { name: "English", icon: <FiGlobe className="text-red-500" />, courses: 185 },
        { name: "Spanish", icon: <FiFeather className="text-teal-500" />, courses: 92 },
        { name: "French", icon: <FiGlobe className="text-indigo-500" />, courses: 78 },
        { name: "Mandarin", icon: <FiFeather className="text-orange-500" />, courses: 64 }
      ],
      color: "bg-green-50",
      accent: "text-green-600"
    },
    {
      title: "Hobbies",
      items: [
        { name: "Photography", icon: <FiCamera className="text-pink-500" />, courses: 53 },
        { name: "Music", icon: <FiMusic className="text-yellow-500" />, courses: 87 },
        { name: "Drawing", icon: <FiFeather className="text-violet-500" />, courses: 42 },
        { name: "Sports", icon: <FiDribbble className="text-emerald-500" />, courses: 65 }
      ],
      color: "bg-purple-50",
      accent: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Categories</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover courses across diverse fields of knowledge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className={`${category.color} p-6`}>
                <h3 className={`text-xl font-bold ${category.accent} mb-2`}>{category.title}</h3>
                <p className="text-gray-600">Browse {category.items.reduce((sum, item) => sum + item.courses, 0)}+ courses</p>
              </div>
              
              <div className="bg-white p-6">
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex items-center">
                        <span className="mr-3 p-2 rounded-lg bg-gray-50">
                          {item.icon}
                        </span>
                        <span className="font-medium text-gray-800">{item.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{item.courses} courses</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-6 w-full py-2 ${category.color} ${category.accent} rounded-lg font-medium flex items-center justify-center`}
                >
                  View All
                  <FiArrowRight className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;