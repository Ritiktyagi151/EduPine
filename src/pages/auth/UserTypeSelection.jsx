import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const UserTypeSelection = ({ setUserType, mode }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="max-w-md mx-auto text-center"
  >
    <motion.h2 
      variants={itemVariants}
      className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
    >
      {mode === 'login' ? 'Welcome Back' : 'Join Us Today'}
    </motion.h2>
    
    <motion.p 
      variants={itemVariants}
      className="mb-8 text-gray-600 text-lg"
    >
      {mode === 'login'
        ? 'Select how you want to login'
        : 'Are you looking to teach or learn?'}
    </motion.p>
    
    <motion.div variants={containerVariants} className="space-y-4">
      <motion.button
        variants={itemVariants}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)"
        }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setUserType('teacher')}
        className="w-full py-4 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-blue-800 rounded-xl font-medium transition-all duration-300 border border-blue-100"
      >
        <div className="flex items-center justify-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="text-left">
            <span className="font-semibold block">I'm looking to Teach</span>
            <span className="text-sm text-blue-600">Create your profile</span>
          </div>
        </div>
      </motion.button>
      
      <motion.button
        variants={itemVariants}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.2)"
        }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setUserType('learner')}
        className="w-full py-4 px-6 bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 text-green-800 rounded-xl font-medium transition-all duration-300 border border-green-100"
      >
        <div className="flex items-center justify-center space-x-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div className="text-left">
            <span className="font-semibold block">I'm looking to Learn</span>
            <span className="text-sm text-green-600">Post your requirement</span>
          </div>
        </div>
      </motion.button>
    </motion.div>
    
    
  </motion.div>
);

export default UserTypeSelection;