import React from "react";
import { motion } from "framer-motion";
import { 
  FiUsers, FiAward, FiBook, FiGlobe, 
  FiBarChart2, FiHeart, FiTarget 
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const AboutUsPage = () => {
  const stats = [
    { value: "50K+", label: "Students Empowered", icon: <FiUsers className="text-blue-500" /> },
    { value: "500+", label: "Courses Available", icon: <FiBook className="text-purple-500" /> },
    { value: "100+", label: "Expert Instructors", icon: <FiAward className="text-amber-500" /> },
    { value: "95%", label: "Satisfaction Rate", icon: <FiHeart className="text-pink-500" /> }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Education pioneer with 15+ years in edtech",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      animation: { y: -20, rotate: -5 }
    },
    {
      name: "James Rodriguez",
      role: "Head of Learning",
      bio: "Curriculum designer and learning specialist",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      animation: { y: 20, rotate: 3 }
    },
    {
      name: "Priya Patel",
      role: "Tech Director",
      bio: "Full-stack developer and systems architect",
      img: "https://randomuser.me/api/portraits/women/63.jpg",
      animation: { y: -10, rotate: 2 }
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Founded",
      description: "Launched with 3 courses in tech education",
      icon: <FaGraduationCap />
    },
    {
      year: "2018",
      title: "First Milestone",
      description: "Reached 10,000 students worldwide",
      icon: <FiTarget />
    },
    {
      year: "2020",
      title: "Pandemic Response",
      description: "Launched free courses for displaced workers",
      icon: <FiHeart />
    },
    {
      year: "2023",
      title: "Current Reach",
      description: "Serving learners in 150+ countries",
      icon: <FiGlobe />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-32 px-4 overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-xl"
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">EduPine</span></h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Empowering learners worldwide through innovative education
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="flex items-center mb-3">
                  <div className="mr-3 p-2 rounded-lg bg-white">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Story</span></h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015, EduPine began as a passion project between educators and technologists who believed learning should be accessible, engaging, and career-relevant for everyone.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small platform with three courses has grown into a global learning community serving students in over 150 countries.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be at the forefront of the online education revolution, constantly innovating to bridge the gap between education and employment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <FaGraduationCap className="text-6xl text-blue-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">From Humble Beginnings</h3>
                    <p className="text-gray-600">To Global Learning Platform</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -left-8 w-24 h-24 bg-blue-500/10 rounded-full blur-lg"
              />
              
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our evolution as a learning platform
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {item.year}
                    </span>
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center text-blue-600 text-xl shadow-lg z-10">
                    {item.icon}
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Leadership</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate team driving EduPine's mission forward
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={member.animation}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-100 relative">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white object-cover"
                  />
                </div>
                <div className="pt-16 pb-8 px-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">Mission</span></h2>
              <p className="text-xl mb-6 text-blue-100">
                To democratize quality education and empower individuals to transform their lives through learning.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiBarChart2 className="text-2xl text-cyan-300 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Bridging the Skills Gap</h3>
                    <p className="text-blue-100">
                      Connecting learners with in-demand skills for the modern workforce
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiGlobe className="text-2xl text-cyan-300 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Global Accessibility</h3>
                    <p className="text-blue-100">
                      Making education accessible to anyone, anywhere
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <ul className="space-y-6">
                {[
                  "Learner-first approach in everything we do",
                  "Innovation in education delivery",
                  "Commitment to measurable outcomes",
                  "Diversity and inclusion as core principles",
                  "Transparency and integrity"
                ].map((value, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3"></span>
                    <span>{value}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
