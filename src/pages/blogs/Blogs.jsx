import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      <div className="relative z-10 h-full flex flex-col">
        <div className="overflow-hidden h-48">
          <motion.img
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex-grow">
          <div className="flex gap-4 mb-3 text-sm">
            <span className="flex items-center text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
              <FiCalendar className="mr-1.5" /> {post.date}
            </span>
            <span className="flex items-center text-gray-500">
              <FiClock className="mr-1.5" /> {post.readTime}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-5 line-clamp-2">{post.excerpt}</p>
          <motion.div
            whileHover={{ x: 5 }}
            className="inline-flex items-center text-blue-600 font-medium"
          >
            Read more{" "}
            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1 duration-300" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Blogs() {
  const blogPosts = [
    {
      title: "The Future of Web Development in 2023",
      excerpt:
        "Exploring the latest trends and technologies shaping the future of web development this year and beyond.",
      date: "May 15, 2023",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Technology",
    },
    {
      title: "Mastering React Performance Optimization",
      excerpt:
        "Practical techniques to optimize your React applications for maximum performance and better UX.",
      date: "June 2, 2023",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Development",
    },
    {
      title: "Design Systems for Modern Web Apps",
      excerpt:
        "How to implement and maintain design systems that bridge the gap between designers and developers.",
      date: "June 18, 2023",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Design",
    },
    {
      title: "State Management Solutions Compared",
      excerpt:
        "A comprehensive comparison of state management solutions for large-scale React applications.",
      date: "July 5, 2023",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Development",
    },
    {
      title: "Building Accessible Web Applications",
      excerpt:
        "Essential techniques to ensure your web applications are accessible to all users.",
      date: "July 22, 2023",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Accessibility",
    },
    {
      title: "The Complete Guide to CSS Grid",
      excerpt:
        "Master modern layout techniques with this deep dive into CSS Grid capabilities.",
      date: "August 10, 2023",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "CSS",
    },
  ];

  return (
    <section className="pt-5 pb-10 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-8 mb-12 rounded-xl shadow-lg overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern opacity-10" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Blog</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Stay updated with the latest in web development, design, and
            technology
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6 max-w-xs"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              Insights
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover our latest articles, tutorials and company updates
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center mx-auto"
          >
            View all articles
            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1 duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.03 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-blue-400 filter blur-3xl -z-0"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.03 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-indigo-400 filter blur-3xl -z-0"
      />
    </section>
  );
}
