import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import UserTypeSelection from "./UserTypeSelection.jsx";
import AuthForm from "../../components/AuthForm";

const LoginPage = () => {
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Login submitted", { userType, ...formData });
    setIsSubmitting(false);
    navigate(
      userType === "teacher" ? "/teacher-dashboard" : "/student-dashboard"
    );
  };

  const switchToSignup = () => {
    navigate("/signup");
  };

  const goBack = () => {
    setUserType(null);
  };

  // Animated gradient background colors
  const backgroundColors = [
    "from-blue-100 via-purple-100 to-pink-100",
    "from-green-100 via-yellow-100 to-blue-100",
    "from-pink-100 via-blue-100 to-purple-100",
    "from-yellow-100 via-green-100 to-blue-100",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
        }}
        variants={{
          initial: { background: backgroundColors[0] },
          animate: {
            background: backgroundColors,
            transition: {
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            },
          },
        }}
        initial="initial"
        // animate="animate"
      />

      {/* Floating animated bubbles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full opacity-20 z-0"
          style={{
            width: `${20 + Math.random() * 60}px`,
            height: `${20 + Math.random() * 60}px`,
            background: `hsl(${Math.random() * 360}, 70%, 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100 + Math.random() * 200],
            x: [-20 + Math.random() * 40],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating education icons */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`icon-${i}`}
          className="absolute text-white opacity-30 z-0"
          style={{
            fontSize: `${30 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50 + Math.random() * 100],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {
            [
              "📚",
              "✏️",
              "🎓",
              "📝",
              "🧮",
              "🔬",
              "📖",
              "🏫",
              "🧪",
              "📊",
              "📐",
              "📈",
            ][i]
          }
        </motion.div>
      ))}

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Header with animated logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          className="flex justify-center mb-8"
        >
          <motion.div
            className="bg-blue-600 text-white rounded-xl p-3 shadow-lg"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Welcome message */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center text-gray-800 mb-2"
        >
          Welcome Back!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 mb-8"
        >
          Continue your learning journey
        </motion.p>

        <AnimatePresence mode="wait">
          {!userType ? (
            <motion.div
              key="userTypeSelection"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8"
            >
              <UserTypeSelection
                setUserType={setUserType}
                mode="login"
                simpleDesign
              />
            </motion.div>
          ) : (
            <motion.div
              key="authForm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8"
            >
              <AuthForm
                userType={userType}
                mode="login"
                switchMode={switchToSignup}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                goBack={goBack}
                simpleDesign
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoginPage;
