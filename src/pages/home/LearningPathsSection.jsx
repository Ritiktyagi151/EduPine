import { 
  FiLayers, FiMonitor, FiClock, FiAward, FiStar,
  FiBookOpen, FiUsers, FiArrowRight, FiCheckCircle 
} from "react-icons/fi";
import { motion } from "framer-motion";

const LearningPathsSection = () => {
  const paths = [
    {
      title: "Beginner",
      description: "Start your journey with foundational courses",
      courses: 15,
      duration: "3-6 months",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Intermediate",
      description: "Build on your skills with advanced concepts",
      courses: 22,
      duration: "6-9 months",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Advanced",
      description: "Master complex topics and real-world projects",
      courses: 18,
      duration: "9-12 months",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Structured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Learning Paths</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow curated paths designed to take you from beginner to job-ready
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className={`bg-gradient-to-br ${path.color} p-1 rounded-xl shadow-lg`}
            >
              <div className="bg-white rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-3">{path.title}</h3>
                <p className="text-gray-600 mb-6">{path.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <FiBookOpen className="mr-3 text-gray-500" />
                    <span>{path.courses} courses</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-3 text-gray-500" />
                    <span>{path.duration}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 bg-gradient-to-r ${path.color} text-white rounded-lg font-medium`}
                >
                  Explore Path
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LearningPathsSection;