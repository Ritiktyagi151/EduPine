import { motion } from 'framer-motion';
import { FaUserGraduate, FaChalkboardTeacher, FaSearch, FaHandshake, FaCalendarAlt, FaVideo, FaChartLine } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      student: {
        title: "Find Your Perfect Tutor",
        description: "Search our verified tutor profiles and filter by subject, level, and availability.",
        icon: <FaSearch className="text-blue-500 text-2xl" />
      },
      tutor: {
        title: "Create Your Profile",
        description: "Set up your profile showcasing your qualifications, experience, and teaching style.",
        icon: <FaChalkboardTeacher className="text-purple-500 text-2xl" />
      }
    },
    {
      student: {
        title: "Book a Session",
        description: "Select your preferred time slot and schedule lessons directly through our platform.",
        icon: <FaCalendarAlt className="text-blue-500 text-2xl" />
      },
      tutor: {
        title: "Get Matched",
        description: "Receive booking requests from students who match your expertise and availability.",
        icon: <FaHandshake className="text-purple-500 text-2xl" />
      }
    },
    {
      student: {
        title: "Interactive Learning",
        description: "Attend live sessions with virtual whiteboard, file sharing, and screen sharing.",
        icon: <FaVideo className="text-blue-500 text-2xl" />
      },
      tutor: {
        title: "Conduct Lessons",
        description: "Use our teaching tools to deliver engaging, interactive online sessions.",
        icon: <FaChalkboardTeacher className="text-purple-500 text-2xl" />
      }
    },
    {
      student: {
        title: "Track Progress",
        description: "Monitor learning improvements with regular feedback and performance reports.",
        icon: <FaChartLine className="text-blue-500 text-2xl" />
      },
      tutor: {
        title: "Earn & Grow",
        description: "Build your teaching reputation and expand your student base with our support.",
        icon: <FaChartLine className="text-purple-500 text-2xl" />
      }
    }
  ];

  // Book icons for background
  const bookIcons = ['📚', '📖', '📕', '📗', '📘', '📙', '📓', '📒', '📔', '🧾', '📑', '📝', '📄'];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background books */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`book-${i}`}
            className="absolute text-gray-600"
            style={{
              fontSize: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${-30 + Math.random() * 60}deg`,
              opacity: 0.3
            }}
            animate={{
              y: [0, -10 + Math.random() * 20],
              rotate: [-30 + Math.random() * 60, -30 + Math.random() * 60],
              transition: {
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          >
            {bookIcons[Math.floor(Math.random() * bookIcons.length)]}
          </motion.div>
        ))}
      </div>

      {/* Floating education elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`edu-${i}`}
            className="absolute"
            style={{
              fontSize: `${30 + Math.random() * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              y: [0, -50 + Math.random() * 100],
              x: [-20 + Math.random() * 40],
              rotate: [0, 360],
              transition: {
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          >
            {['✏️', '🎓', '🧮', '🔬', '🏫', '🧪', '📊', '📐', '📈', '🧠', '✒️', '🖋️', '📚', '📖'][i % 14]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          How It Works
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Parents/Students Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border-t-4 border-blue-500"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaUserGraduate className="text-blue-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">For Students & Parents</h3>
            </div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={`student-${index}`} className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-full h-fit">
                    {step.student.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">{step.student.title}</h4>
                    <p className="text-gray-600 mt-1">{step.student.description}</p>
                    <div className="flex items-center mt-2">
                      <div className="text-blue-500 font-bold text-lg mr-2">{index + 1}</div>
                      <div className="h-px bg-blue-200 flex-1"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Vertical divider */}
          <div className="hidden md:flex items-center justify-center">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>
          </div>
          
          {/* Tutors Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border-t-4 border-purple-500"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaChalkboardTeacher className="text-purple-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">For Tutors</h3>
            </div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={`tutor-${index}`} className="flex gap-4">
                  <div className="bg-purple-100 p-3 rounded-full h-fit">
                    {step.tutor.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">{step.tutor.title}</h4>
                    <p className="text-gray-600 mt-1">{step.tutor.description}</p>
                    <div className="flex items-center mt-2">
                      <div className="text-purple-500 font-bold text-lg mr-2">{index + 1}</div>
                      <div className="h-px bg-purple-200 flex-1"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;