import { FiAward, FiClock, FiLayers, FiMonitor } from "react-icons/fi";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiLayers className="text-3xl" />,
      title: "Structured Learning",
      description: "Step-by-step curriculum designed by industry experts",
      color: "from-blue-500 to-blue-400",
    },
    {
      icon: <FiMonitor className="text-3xl" />,
      title: "Interactive Content",
      description: "Engaging videos, quizzes and coding exercises",
      color: "from-purple-500 to-purple-400",
    },
    {
      icon: <FiClock className="text-3xl" />,
      title: "Self-Paced",
      description: "Learn on your schedule with lifetime access",
      color: "from-indigo-500 to-indigo-400",
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: "Certification",
      description: "Earn recognized certificates upon completion",
      color: "from-teal-500 to-teal-400",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => {
          const studyImages = [
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          ];
          return (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                rotate: Math.random() * 360,
                opacity: 0.3,
              }}
              animate={{
                x: [null, Math.random() * 100],
                y: [null, Math.random() * 100],
                rotate: [null, Math.random() * 360],
                transition: {
                  duration: 20 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                },
              }}
              className="absolute w-32 h-32"
              style={{
                backgroundImage: `url(${studyImages[i % studyImages.length]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              EduPine
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We provide the best learning experience with cutting-edge technology
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const bgImages = [
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
              "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative group"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url(${
                        bgImages[index % bgImages.length]
                      })`,
                      filter: "grayscale(100%)",
                    }}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  />
                </div>

                <div className="relative z-10 p-8 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white shadow-md`}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
