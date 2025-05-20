import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Careerform from "./careerform";
import Benefits from "./benefits";

const CareersPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const jobPositions = [
    {
      id: 1,
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      description: "Build beautiful, responsive interfaces for our education platform."
    },
    {
      id: 2,
      title: "UX Designer",
      type: "Contract",
      location: "Hybrid",
      description: "Create intuitive user experiences that empower learners."
    },
    {
      id: 3,
      title: "Backend Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Develop scalable APIs and services for our growing platform."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-32 px-4 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-lg"
        />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Join Our{" "}
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Innovative Team
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-10"
            >
              Help shape the future of education while growing your career in a dynamic environment
            </motion.p>

            
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're looking for passionate individuals to join our growing team
            </p>
          </motion.div>

          

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Careerform />
          </motion.div>
        </div>
      </section>

      <Benefits />
      
      
    </div>
  );
};

export default CareersPage;