import React, { useState, useEffect } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    country: "",
    location: "",
    educationBoard: "",
    subjects: [],
    classType: "",
    schedulePreference: "",
    joiningDate: "",
    classMode: "",
    name: "",
    email: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showCountrySuggestions, setShowCountrySuggestions] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

  // Animation elements
  const [circles, setCircles] = useState([]);

  // Sample country and location data
  const countryData = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "United Arab Emirates",
    "Pakistan",
    "Sri Lanka",
    "Germany",
    "France"
  ];

  const locationData = {
    "India": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune"],
    "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
    "Canada": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"],
    "Pakistan": ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"],
    "Sri Lanka": ["Colombo", "Kandy", "Galle", "Jaffna", "Negombo"],
    "Germany": ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
    "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"]
  };

  useEffect(() => {
    // Create animated background circles
    const newCircles = [];
    for (let i = 0; i < 10; i++) {
      newCircles.push({
        id: i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.2 + 0.05,
      });
    }
    setCircles(newCircles);
  }, []);

  const educationBoards = [
    "CBSE",
    "ISC/ICSE",
    "State",
    "NIOS",
    "BOSSE",
    "STATE BOARD",
    "American Curriculum",
    "Canadian Curriculum",
    "German Curriculum",
    "International Baccalaureate",
    "AS/A levels",
    "Pearson Edexcel",
    "FBISE (United Arab Emirates, Pakistan)",
    "Provincial Education Boards (Pakistan)",
    "AKU-EB (Pakistan)",
    "Technical Education Boards (Pakistan)",
    "Ministry of Education, Sri Lanka (Sri Lanka)",
    "NIE (Sri Lanka)",
    "Provincial Education Departments (Sri Lanka)",
    "Pirivenas (Sri Lanka)",
    "TVEC (Sri Lanka)",
    "SLIATE (Sri Lanka)",
    "Ministry of Education, UAE (United Arab Emirates)",
    "French Curriculum (United Arab Emirates)",
    "Australian Curriculum (United Arab Emirates)",
    "UAE National Curriculum (United Arab Emirates)",
  ];
  
  const subjects = [
    "Nursery-KG Tuition",
    "Class I-V Tuition",
    "Class 6 Tuition",
    "Class 7 Tuition",
    "Class 8 Tuition",
    "Class 9 Tuition",
    "Class 10 Tuition",
    "Class 11 Tuition",
    "Class 12 Tuition",
    "BTech Tuition",
    "BSc Tuition",
    "BCom Tuition",
    "BA Tuition",
    "Engineering Diploma Tuition",
    "BCA Tuition",
    "BBA Tuition",
    "MBBS & Medical Tuition",
    "LLB Tuition",
    "MSc Tuition",
    "Pharmacy Tuition",
    "MBA Tuition",
    "B Ed Tuition",
    "MA Tuition",
    "MCom Tuition",
    "MTech Tuition",
    "BMS Tuition",
    "Dental Tuition",
    "BAF Tuition",
    "Bachelor of Ayurvedic Medicine and Surgery Tuition",
    "Bachelor of Homeopathic Medicine and Surgery, Physiotherapy and Occupational Therapy Tuition",
    "BFA Tuition",
    "BFM tuition",
    "BBI Tuition",
    "DNB Medicine Tuition",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update suggestions based on input
    if (name === "country") {
      const filtered = countryData.filter(country =>
        country.toLowerCase().includes(value.toLowerCase())
      );
      setCountrySuggestions(filtered);
      setShowCountrySuggestions(true);
    } else if (name === "location" && formData.country) {
      const countryLocations = locationData[formData.country] || [];
      const filtered = countryLocations.filter(location =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setLocationSuggestions(filtered);
      setShowLocationSuggestions(true);
    }
  };

  const handleSuggestionClick = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    
    if (field === "country") {
      setShowCountrySuggestions(false);
      setCountrySuggestions([]);
    } else if (field === "location") {
      setShowLocationSuggestions(false);
      setLocationSuggestions([]);
    }
  };

  const handleSubjectChange = (subject) => {
    const updatedSubjects = formData.subjects.includes(subject)
      ? formData.subjects.filter((s) => s !== subject)
      : [...formData.subjects, subject];

    setFormData({
      ...formData,
      subjects: updatedSubjects,
    });
  };

  const validateStep = () => {
    let valid = true;
    const newErrors = {};

    if (step === 1) {
      if (!formData.country.trim()) {
        newErrors.country = "Country is required";
        valid = false;
      }
      if (!formData.location.trim()) {
        newErrors.location = "Location is required";
        valid = false;
      }
    } else if (step === 2) {
      if (!formData.educationBoard.trim()) {
        newErrors.educationBoard = "Education board is required";
        valid = false;
      }
    } else if (step === 3) {
      if (formData.subjects.length === 0) {
        newErrors.subjects = "At least one subject is required";
        valid = false;
      }
    } else if (step === 4) {
      if (!formData.classType.trim()) {
        newErrors.classType = "Class type is required";
        valid = false;
      }
    } else if (step === 5) {
      if (!formData.schedulePreference.trim()) {
        newErrors.schedulePreference = "Schedule preference is required";
        valid = false;
      }
    } else if (step === 6) {
      if (!formData.joiningDate.trim()) {
        newErrors.joiningDate = "Joining date is required";
        valid = false;
      }
    } else if (step === 7) {
      if (!formData.classMode.trim()) {
        newErrors.classMode = "Class mode is required";
        valid = false;
      }
    } else if (step === 8) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
        valid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
        valid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Email is invalid";
        valid = false;
      }
      if (!formData.mobile.trim()) {
        newErrors.mobile = "Mobile number is required";
        valid = false;
      } else if (!/^\d{10}$/.test(formData.mobile)) {
        newErrors.mobile = "Mobile number must be 10 digits";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
      setErrors({});
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
        // Reset form after submission
        setStep(1);
        setFormData({
          country: "",
          location: "",
          educationBoard: "",
          subjects: [],
          classType: "",
          schedulePreference: "",
          joiningDate: "",
          classMode: "",
          name: "",
          email: "",
          mobile: "",
        });
      } catch (error) {
        console.error("Submission error:", error);
        alert("There was an error submitting the form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {circles.map((circle) => (
          <div
            key={circle.id}
            className="absolute rounded-full bg-blue-100"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              left: `${circle.x}%`,
              top: `${circle.y}%`,
              opacity: circle.opacity,
              animation: `float ${circle.duration}s ease-in-out ${circle.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Tuition Class Registration
          </h2>
          <div className="flex justify-center mt-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
                  ${
                    step === stepNumber
                      ? "bg-blue-600 text-white"
                      : step > stepNumber
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 8 && (
                  <div
                    className={`w-8 h-1 transition-colors duration-300 ${
                      step > stepNumber ? "bg-green-500" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Country and Location */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium text-gray-900">
                Location Information
              </h3>
              <div className="relative">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  onFocus={() => setShowCountrySuggestions(true)}
                  onBlur={() => setTimeout(() => setShowCountrySuggestions(false), 200)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your country"
                  autoComplete="off"
                />
                {showCountrySuggestions && countrySuggestions.length > 0 && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto">
                    {countrySuggestions.map((country, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSuggestionClick("country", country)}
                      >
                        {country}
                      </div>
                    ))}
                  </div>
                )}
                {errors.country && (
                  <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                )}
              </div>
              <div className="relative">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  onFocus={() => formData.country && setShowLocationSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowLocationSuggestions(false), 200)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your city or area"
                  autoComplete="off"
                  disabled={!formData.country}
                />
                {showLocationSuggestions && locationSuggestions.length > 0 && formData.country && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto">
                    {locationSuggestions.map((location, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSuggestionClick("location", location)}
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
                {errors.location && (
                  <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                )}
                {!formData.country && (
                  <p className="mt-1 text-sm text-gray-500">Please select a country first</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Education Board */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium text-gray-900">
                Which board of education are you looking for?
              </h3>
              <div>
                <label
                  htmlFor="educationBoard"
                  className="block text-sm font-medium text-gray-700"
                >
                  Education Board <span className="text-red-500">*</span>
                </label>
                <select
                  id="educationBoard"
                  name="educationBoard"
                  value={formData.educationBoard}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Education Board</option>
                  {educationBoards.map((board) => (
                    <option key={board} value={board}>
                      {board}
                    </option>
                  ))}
                </select>
                {errors.educationBoard && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.educationBoard}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Subjects */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium text-gray-900">
                Which subjects do you need tuition for?
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-96 overflow-y-auto p-2">
                {subjects.map((subject) => (
                  <div key={subject} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`subject-${subject}`}
                      checked={formData.subjects.includes(subject)}
                      onChange={() => handleSubjectChange(subject)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`subject-${subject}`}
                      className="ml-2 block text-sm text-gray-700 truncate"
                    >
                      {subject}
                    </label>
                  </div>
                ))}
              </div>
              {errors.subjects && (
                <p className="mt-1 text-sm text-red-600">{errors.subjects}</p>
              )}
              {formData.subjects.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    Selected: {formData.subjects.join(", ")}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Class Type */}
          {step === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium text-gray-900">
                Looking for a group class?
              </h3>
              <div className="space-y-2">
                {[
                  "One-on-One",
                  "Small Group (2-5 students)",
                  "Large Group (6+ students)",
                ].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      type="radio"
                      id={`classType-${type}`}
                      name="classType"
                      value={type}
                      checked={formData.classType === type}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label
                      htmlFor={`classType-${type}`}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
              {errors.classType && (
                <p className="mt-1 text-sm text-red-600">{errors.classType}</p>
              )}
            </div>
          )}

          {/* Step 5: Weekday or Weekend */}
          {step === 5 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium text-gray-900">
                Preferred schedule
              </h3>
              <div className="space-y-2">
                {["Weekdays", "Weekends", "Flexible"].map((pref) => (
                  <div key={pref} className="flex items-center">
                    <input
                      type="radio"
                      id={`schedule-${pref}`}
                      name="schedulePreference"
                      value={pref}
                      checked={formData.schedulePreference === pref}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label
                      htmlFor={`schedule-${pref}`}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {pref}
                    </label>
                  </div>
                ))}
              </div>
              {errors.schedulePreference && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.schedulePreference}
                </p>
              )}
            </div>
          )}

          {/* Step 6: Joining Date */}
          {step === 6 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium text-gray-900">
                Preferred joining date
              </h3>
              <div>
                <label
                  htmlFor="joiningDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="joiningDate"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.joiningDate && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.joiningDate}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 7: Class Mode */}
          {step === 7 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium text-gray-900">
                Class mode preference
              </h3>
              <div className="space-y-2">
                {["Online", "Offline", "Hybrid (both online and offline)"].map(
                  (mode) => (
                    <div key={mode} className="flex items-center">
                      <input
                        type="radio"
                        id={`mode-${mode}`}
                        name="classMode"
                        value={mode}
                        checked={formData.classMode === mode}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={`mode-${mode}`}
                        className="ml-2 block text-sm text-gray-700"
                      >
                        {mode}
                      </label>
                    </div>
                  )
                )}
              </div>
              {errors.classMode && (
                <p className="mt-1 text-sm text-red-600">{errors.classMode}</p>
              )}
            </div>
          )}

          {/* Step 8: Login Information */}
          {step === 8 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium text-gray-900">
                Your Information
              </h3>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                )}
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
              >
                Back
              </button>
            )}
            {step < 8 ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300 ml-auto"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MultiStepForm;