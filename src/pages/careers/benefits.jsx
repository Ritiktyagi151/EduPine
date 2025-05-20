import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const BenefitCard = ({ benefit, index }) => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: index * 0.1
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className={`relative overflow-hidden group rounded-2xl shadow-2xl`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_rgba(255,255,255,0)_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 p-8 h-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl">
        <motion.div 
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className="text-5xl mb-6 w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-sm"
        >
          {benefit.icon}
        </motion.div>
        
        <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
        <p className="text-blue-100">{benefit.description}</p>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
          viewport={{ once: true }}
          className="h-0.5 bg-white/30 mt-4"
        />
      </div>
    </motion.div>
  );
};

export default function Benefits() {
  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salaries and equity options",
      icon: "💰",
      color: "from-amber-500 to-yellow-500",
    },
    {
      title: "Flexible Work",
      description: "Remote-friendly with flexible hours",
      icon: "🏠",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Learning Budget",
      description: "$2,000 annual budget for professional development",
      icon: "📚",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision plans",
      icon: "❤️",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Unlimited PTO",
      description: "Take time when you need it to recharge",
      icon: "🌴",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Team Retreats",
      description: "Annual company retreats in amazing locations",
      icon: "✈️",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 origin-left"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            We take care of our team with comprehensive benefits and perks that matter
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </motion.div>
      </div>
      
      {/* Animated decorative elements */}
      <motion.div 
        initial={{ x: -100, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 0.1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-64 h-64 rounded-full bg-cyan-400 filter blur-3xl -z-0"
      />
      <motion.div 
        initial={{ x: 100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-indigo-400 filter blur-3xl -z-0"
      />
    </section>
  );
}