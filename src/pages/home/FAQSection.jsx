import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiHelpCircle } from "react-icons/fi";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqCategories = [
    {
      title: "Qualifications",
      icon: <FiHelpCircle className="text-blue-500" />,
      questions: [
        {
          q: "Do I need previous experience or knowledge to take these courses?",
          a: "No previous knowledge or experience is required. Our courses are specifically designed to guide you from the very beginning. While any professional work experience you have may be beneficial, it is certainly not a requirement."
        },
        {
          q: "What are the basic qualifications needed?",
          a: "Our courses are designed to be accessible and effective for a wide range of individuals. There are only a few basic qualifications needed, such as a strong desire to learn, basic computer skills, and good communication abilities."
        },
        {
          q: "Can I try before I commit?",
          a: "Absolutely! We offer free introductory courses designed to give you an introduction to the career. By the end, you'll get a sense of the course content and know if it is a good match for you."
        },
        {
          q: "Do I need to be in a specific location?",
          a: "You can live anywhere in the world and take our courses. Many employers are open to hiring remotely, though some may favor candidates in the same country as their main office."
        }
      ]
    },
    {
      title: "The Course",
      icon: <FiHelpCircle className="text-purple-500" />,
      questions: [
        {
          q: "How long do I have access to the course?",
          a: "Those who have paid in full enjoy continuous access to the course, including all updated lessons and the community Discord channel for the lifetime of the course (as long as it remains available)."
        },
        {
          q: "Can I balance this with a full-time job?",
          a: "Absolutely! Our courses are designed to be flexible and self-paced. With our Discord community, you can connect with other students anytime for support."
        },
        {
          q: "Who teaches the courses?",
          a: "Our courses are taught by industry experts and influencers recognized in their fields. They bring real-world experience and have helped many start careers in their industry."
        },
        {
          q: "Is there individual support available?",
          a: "We offer unlimited live group or 1-on-1 support with industry professionals or previous graduates at an affordable additional cost, typically much less than finding coaches independently."
        }
      ]
    },
    {
      title: "Your Career",
      icon: <FiHelpCircle className="text-green-500" />,
      questions: [
        {
          q: "What career support do you offer?",
          a: "We provide career coaching, resume reviews, interview preparation, and access to our employer network to help you secure positions in your new field."
        },
        {
          q: "What's the job placement rate?",
          a: "Our graduates have an 85% placement rate within 6 months of completion, with many securing positions even before finishing their courses."
        },
        {
          q: "Do you guarantee job placement?",
          a: "While we can't guarantee employment, we provide all the tools and support needed to make you highly competitive in the job market."
        },
        {
          q: "Can I switch careers with this?",
          a: "Absolutely! Our courses are specifically designed for career changers, with many students successfully transitioning to new industries."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const newIndex = `${categoryIndex}-${questionIndex}`;
    setActiveIndex(activeIndex === newIndex ? null : newIndex);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our courses and programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className={`p-6 ${
                categoryIndex === 0 ? "bg-blue-50" : 
                categoryIndex === 1 ? "bg-purple-50" : "bg-green-50"
              }`}>
                <div className="flex items-center">
                  <span className="mr-3 p-2 rounded-lg bg-white">
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {category.questions.map((question, questionIndex) => (
                    <motion.li 
                      key={questionIndex}
                      whileHover={{ x: 3 }}
                      className="border-b border-gray-100 last:border-0 pb-4"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <span className="font-medium text-gray-800 mr-4">
                          {question.q}
                        </span>
                        {activeIndex === `${categoryIndex}-${questionIndex}` ? (
                          <FiChevronUp className="text-gray-500 flex-shrink-0" />
                        ) : (
                          <FiChevronDown className="text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {activeIndex === `${categoryIndex}-${questionIndex}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3 text-gray-600">
                              {question.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default FAQSection;