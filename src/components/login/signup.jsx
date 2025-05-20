import React, { useState } from "react";
import "animate.css";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";

const EducationPlatform = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center p-4">
      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
      <div className="max-w-4xl w-full space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 animate__animated animate__fadeInDown">
          What are you looking for?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate__animated animate__fadeIn animate__delay-1s">
          {/* Teach Card */}
          <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div> */}
            <div className="p-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-indigo-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                I am looking to Teach
              </h2>
              <p className="text-gray-600 mb-6">
                Share your knowledge and expertise with eager learners.
              </p>
              <div className="flex flex-col space-y-3">
                <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg text-center transition-all hover:bg-indigo-700 hover:shadow-md">
                  CREATE YOUR PROFILE
                </button>
                <div className="grid grid-cols-2 w-full space-x-3">
                  <Link to={"/login"} className="w-full">
                    <button className="flex-1 px-4 py-2 border w-full h-full border-indigo-600 text-indigo-600 font-medium rounded-lg text-center transition-all hover:bg-indigo-50 cursor-pointer">
                      Login
                    </button>
                  </Link>
                  <Link to={"/signup"} className="w-full">
                    <button className="flex-1 px-4 py-2 bg-white w-full h-full border border-indigo-600 text-indigo-600 font-medium rounded-lg text-center transition-all hover:bg-indigo-50">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Learn Card */}
          <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div> */}
            <div className="p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-emerald-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                I am looking to Learn
              </h2>
              <p className="text-gray-600 mb-6">
                Find the perfect teacher to help you master new skills.
              </p>
              <div className="flex flex-col space-y-3">
                <button className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg text-center transition-all hover:bg-emerald-700 hover:shadow-md">
                  POST YOUR REQUIREMENT
                </button>
                <div className="grid grid-cols-2 w-full space-x-3">
                  <Link to={"/login"} className="w-full">
                    <button className="flex-1 px-4 py-2 border w-full h-full border-emerald-600 text-emerald-600 font-medium rounded-lg text-center transition-all hover:bg-emerald-50">
                      Login
                    </button>
                  </Link>
                  <Link to={"/signup"} className="w-full">
                    <button className="flex-1 px-4 py-2 bg-white w-full h-full border border-emerald-600 text-emerald-600 font-medium rounded-lg text-center transition-all hover:bg-emerald-50">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-12 animate__animated animate__fadeInUp animate__delay-2s">
          <p>Join thousands of teachers and learners in our community</p>
        </div>
      </div>
    </div>
  );
};

export default EducationPlatform;
