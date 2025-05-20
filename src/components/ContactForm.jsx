import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().matches(/^[0-9]+$/, "Invalid phone number").nullable(),
  subject: yup.string().required("Subject is required"),
  level: yup.string().required("Please select a level"),
  preferences: yup.string(),
});

const ContactForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    reset();
    onClose();
    // You might want to show a success message here
  };

  const popup = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        variants={popup}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-800">
            Request a Custom Tutor
          </h3>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Enter your name"
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number (optional)
              </label>
              <input
                id="phone"
                type="tel"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.phone ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Enter your phone number"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject/Skill Needed
              </label>
              <input
                id="subject"
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.subject ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="What do you want to learn?"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                Level
              </label>
              <select
                id="level"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.level ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-500"
                }`}
                defaultValue=""
                {...register("level")}
              >
                <option value="" disabled>
                  Select level
                </option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              {errors.level && (
                <p className="mt-1 text-sm text-red-600">{errors.level.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="preferences" className="block text-sm font-medium text-gray-700 mb-1">
                Any Specific Preferences? (optional)
              </label>
              <textarea
                id="preferences"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tutor qualifications, schedule preferences, etc."
                {...register("preferences")}
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium shadow hover:shadow-md transition-all hover:scale-[1.02]"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;