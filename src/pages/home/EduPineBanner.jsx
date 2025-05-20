import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";

const EduPineBanner = () => {
  // Study-related images from Unsplash
  const horizontalImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  ];

  const verticalImages = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  ];

  // Horizontal slider state
  const [currentHorizontal, setCurrentHorizontal] = useState(0);
  const horizontalTimeoutRef = useRef(null);

  // Vertical slider state
  const [currentVertical, setCurrentVertical] = useState(0);
  const verticalTimeoutRef = useRef(null);

  // Auto-play for horizontal slider
  useEffect(() => {
    horizontalTimeoutRef.current = setTimeout(() => {
      setCurrentHorizontal((prev) =>
        prev === horizontalImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => {
      if (horizontalTimeoutRef.current) {
        clearTimeout(horizontalTimeoutRef.current);
      }
    };
  }, [currentHorizontal, horizontalImages.length]);

  // Auto-play for vertical slider
  useEffect(() => {
    verticalTimeoutRef.current = setTimeout(() => {
      setCurrentVertical((prev) =>
        prev === verticalImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => {
      if (verticalTimeoutRef.current) {
        clearTimeout(verticalTimeoutRef.current);
      }
    };
  }, [currentVertical, verticalImages.length]);

  // Horizontal slider navigation
  const nextHorizontal = () => {
    setCurrentHorizontal((prev) =>
      prev === horizontalImages.length - 1 ? 0 : prev + 1
    );
    resetHorizontalTimer();
  };

  const prevHorizontal = () => {
    setCurrentHorizontal((prev) =>
      prev === 0 ? horizontalImages.length - 1 : prev - 1
    );
    resetHorizontalTimer();
  };

  const resetHorizontalTimer = () => {
    if (horizontalTimeoutRef.current) {
      clearTimeout(horizontalTimeoutRef.current);
    }
  };

  // Vertical slider navigation
  const nextVertical = () => {
    setCurrentVertical((prev) =>
      prev === verticalImages.length - 1 ? 0 : prev + 1
    );
    resetVerticalTimer();
  };

  const prevVertical = () => {
    setCurrentVertical((prev) =>
      prev === 0 ? verticalImages.length - 1 : prev - 1
    );
    resetVerticalTimer();
  };

  const resetVerticalTimer = () => {
    if (verticalTimeoutRef.current) {
      clearTimeout(verticalTimeoutRef.current);
    }
  };

  return (
    <section className="relative pt-8 px-8 w-full sm:px-2 lg:px-1 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden  opacity-20">
        {[...Array(6)].map((_, i) => (
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
            className="absolute w-24 h-24"
            style={{
              backgroundImage: `url(${
                horizontalImages[i % horizontalImages.length]
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%",
            }}
          />
        ))}
      </div>

      <div className="mx-auto px-8  relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Horizontal Slider (2/3 width) */}
          <div className="lg:col-span-2 ">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHorizontal}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={horizontalImages[currentHorizontal]}
                    alt="Featured course"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2"
                      >
                        Featured Course
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl md:text-3xl font-bold mb-2"
                      >
                        {
                          [
                            "Web Development Bootcamp",
                            "Data Science Fundamentals",
                            "UX/UI Design",
                            "Mobile App Development",
                          ][currentHorizontal]
                        }
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-blue-100"
                      >
                        {
                          [
                            "Master full-stack development",
                            "Learn data analysis and ML",
                            "Design beautiful interfaces",
                            "Build cross-platform apps",
                          ][currentHorizontal]
                        }
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Horizontal slider controls */}
              <button
                onClick={prevHorizontal}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={nextHorizontal}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <FiChevronRight size={24} />
              </button>

              {/* Horizontal slider indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {horizontalImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentHorizontal(index);
                      resetHorizontalTimer();
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentHorizontal === index
                        ? "bg-white w-6"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Slider (1/3 width) */}
          <div className="hidden lg:block">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVertical}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={verticalImages[currentVertical]}
                    alt="Popular course"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2"
                      >
                        Popular Now
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl font-bold mb-2"
                      >
                        {
                          [
                            "Python Programming",
                            "Digital Marketing",
                            "Cloud Computing",
                          ][currentVertical]
                        }
                      </motion.h3>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Vertical slider controls */}
              <button
                onClick={prevVertical}
                className="absolute left-1/2 -translate-x-1/2 top-4 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <FiChevronUp size={20} />
              </button>
              <button
                onClick={nextVertical}
                className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <FiChevronDown size={20} />
              </button>

              {/* Vertical slider indicators */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
                {verticalImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentVertical(index);
                      resetVerticalTimer();
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentVertical === index ? "bg-white h-6" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only vertical slider (hidden on desktop) */}
        <div className="mt-8 lg:hidden">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVertical}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={verticalImages[currentVertical]}
                  alt="Popular course"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                      Popular Now
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {
                        [
                          "Python Programming",
                          "Digital Marketing",
                          "Cloud Computing",
                        ][currentVertical]
                      }
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevVertical}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={nextVertical}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
            >
              <FiChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {verticalImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentVertical(index);
                    resetVerticalTimer();
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentVertical === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduPineBanner;
