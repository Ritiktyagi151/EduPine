import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CoursePage = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [classFilter, setClassFilter] = useState("all");

  // Helper function to generate random price
  const getRandomPrice = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Helper function to generate random duration
  const getRandomDuration = () => {
    const durations = [
      "1 month",
      "2 months",
      "3 months",
      "4 months",
      "6 months",
      "8 months",
      "10 months",
      "12 months",
    ];
    return durations[Math.floor(Math.random() * durations.length)];
  };

  // Sample course images by category/class
  const courseImages = {
    nursery: [
      "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=500",
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
    ],
    school: {
      1: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500",
      2: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
      3: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=500",
      4: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500",
      5: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
      6: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=500",
      7: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500",
      8: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
      9: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=500",
      10: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500",
      11: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
      12: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=500",
    },
    graduation:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500",
    master:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500",
    it: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
    hobby: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500",
    government:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500",
    language: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500",
  };

  // Generate random courses for each category
  const generateCourses = () => {
    const courses = [];
    let id = 1;

    // Nursery to Kindergarten (10 courses)
    const nurserySubjects = [
      "Alphabets",
      "Numbers",
      "Shapes",
      "Colors",
      "Rhymes",
      "Story Time",
      "Art & Craft",
      "General Awareness",
      "Phonics",
      "Social Skills",
    ];
    for (let i = 0; i < 10; i++) {
      courses.push({
        id: id++,
        title: `Nursery ${nurserySubjects[i]}`,
        category: "school",
        class: "nursery",
        subject: nurserySubjects[i],
        price: getRandomPrice(1000, 3000),
        duration: getRandomDuration(),
        isFree: Math.random() < 0.2,
        image:
          courseImages.nursery[
            Math.floor(Math.random() * courseImages.nursery.length)
          ],
      });
    }

    // Class 1 to 12 (50 courses total)
    const schoolSubjects = {
      1: [
        "English",
        "Mathematics",
        "EVS",
        "Hindi",
        "Drawing",
        "Computer Basics",
      ],
      2: [
        "English",
        "Mathematics",
        "EVS",
        "Hindi",
        "Drawing",
        "Computer Basics",
      ],
      3: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Hindi",
        "Computer",
      ],
      4: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Hindi",
        "Computer",
      ],
      5: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Hindi",
        "Computer",
      ],
      6: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Hindi/Sanskrit",
        "Computer",
      ],
      7: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Hindi/Sanskrit",
        "Computer",
      ],
      8: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Hindi/Sanskrit",
        "Computer",
      ],
      9: [
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Social Science",
        "Computer",
      ],
      10: [
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Social Science",
        "Computer",
      ],
      11: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "Accountancy",
        "Business Studies",
        "Economics",
        "Computer Science",
      ],
      12: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "Accountancy",
        "Business Studies",
        "Economics",
        "Computer Science",
      ],
    };

    for (let cls = 1; cls <= 12; cls++) {
      const subjects = schoolSubjects[cls.toString()];
      const courseCount = cls <= 5 ? 4 : 3; // More courses for lower classes

      for (let i = 0; i < courseCount; i++) {
        const subject = subjects[Math.floor(Math.random() * subjects.length)];
        courses.push({
          id: id++,
          title: `Class ${cls} ${subject}`,
          category: "school",
          class: cls.toString(),
          subject: subject,
          price: getRandomPrice(1500, 4000),
          duration: getRandomDuration(),
          isFree: Math.random() < 0.15,
          image: courseImages.school[cls.toString()],
        });
      }
    }

    // Graduation Courses (30 courses)
    const graduationFields = [
      "B.Sc Computer Science",
      "B.Sc Physics",
      "B.Sc Chemistry",
      "B.Sc Mathematics",
      "B.Sc Biology",
      "B.A English",
      "B.A History",
      "B.A Economics",
      "B.A Political Science",
      "B.A Psychology",
      "B.Com",
      "BBA",
      "BCA",
      "B.Tech Civil",
      "B.Tech Mechanical",
      "B.Tech Electrical",
      "B.Tech Electronics",
      "B.Arch",
      "B.Pharm",
      "BDS",
      "MBBS",
      "BAMS",
      "BHMS",
      "LLB",
      "BFA",
      "B.Ed",
      "BHM",
      "B.Sc Agriculture",
      "B.Sc Nursing",
      "BPT",
    ];

    graduationFields.forEach((field) => {
      courses.push({
        id: id++,
        title: field,
        category: "graduation",
        class: "graduation",
        subject: field.split(" ").slice(1).join(" "),
        price: getRandomPrice(10000, 30000),
        duration: ["36 months", "48 months", "60 months"][
          Math.floor(Math.random() * 3)
        ],
        isFree: Math.random() < 0.1,
        image: courseImages.graduation,
      });
    });

    // Master Courses (20 courses)
    const masterFields = [
      "M.Sc Computer Science",
      "M.Sc Physics",
      "M.Sc Chemistry",
      "M.Sc Mathematics",
      "M.Sc Biology",
      "M.A English",
      "M.A History",
      "M.A Economics",
      "M.A Political Science",
      "M.A Psychology",
      "M.Com",
      "MBA",
      "MCA",
      "M.Tech Civil",
      "M.Tech Mechanical",
      "M.Tech Electrical",
      "M.Tech Electronics",
      "M.Arch",
      "M.Pharm",
      "MD",
      "MS",
      "LLM",
      "MFA",
      "M.Ed",
    ];

    masterFields.forEach((field) => {
      courses.push({
        id: id++,
        title: field,
        category: "master",
        class: "master",
        subject: field.split(" ").slice(1).join(" "),
        price: getRandomPrice(20000, 50000),
        duration: ["24 months", "18 months", "36 months"][
          Math.floor(Math.random() * 3)
        ],
        isFree: Math.random() < 0.05,
        image: courseImages.master,
      });
    });

    // IT Courses (40 courses)
    const itCourses = [
      "Web Development",
      "Mobile App Development",
      "Python Programming",
      "Java Programming",
      "C++ Programming",
      "Data Structures & Algorithms",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
      "Cloud Computing",
      "Cybersecurity",
      "Ethical Hacking",
      "Blockchain Development",
      "DevOps",
      "UI/UX Design",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "React JS",
      "Angular",
      "Vue JS",
      "Node JS",
      "Django",
      "Flask",
      "Spring Boot",
      "Android Development",
      "iOS Development",
      "Flutter",
      "React Native",
      "Game Development",
      "Unity",
      "Unreal Engine",
      "Database Management",
      "SQL",
      "NoSQL",
      "Big Data",
      "Hadoop",
      "Spark",
      "TensorFlow",
      "PyTorch",
    ];

    itCourses.forEach((course) => {
      courses.push({
        id: id++,
        title: course,
        category: "it",
        class: "it",
        subject: course,
        price: getRandomPrice(5000, 25000),
        duration: getRandomDuration(),
        isFree: Math.random() < 0.2,
        image: courseImages.it,
      });
    });

    // Hobby Courses (30 courses)
    const hobbyCourses = [
      "Photography",
      "Painting",
      "Sketching",
      "Guitar",
      "Piano",
      "Violin",
      "Drums",
      "Singing",
      "Dancing",
      "Yoga",
      "Meditation",
      "Cooking",
      "Baking",
      "Gardening",
      "Pottery",
      "Calligraphy",
      "Creative Writing",
      "Chess",
      "Carrom",
      "Swimming",
      "Karate",
      "Taekwondo",
      "Judo",
      "Boxing",
      "Fitness Training",
      "Zumba",
      "Aerobics",
      "Origami",
      "Knitting",
      "Candle Making",
    ];

    hobbyCourses.forEach((course) => {
      courses.push({
        id: id++,
        title: course,
        category: "hobby",
        class: "hobby",
        subject: course,
        price: getRandomPrice(2000, 10000),
        duration: getRandomDuration(),
        isFree: Math.random() < 0.3,
        image: courseImages.hobby,
      });
    });

    // Government Exam Prep (25 courses)
    const govtExams = [
      "UPSC Civil Services",
      "SSC CGL",
      "SSC CHSL",
      "Bank PO",
      "Bank Clerk",
      "Railway Recruitment",
      "Defense Exams",
      "Teaching Exams",
      "State PSC",
      "Insurance Exams",
      "Law Entrance",
      "Judicial Services",
      "CA Foundation",
      "CS Foundation",
      "CMA Foundation",
      "NDA",
      "CDS",
      "AFCAT",
      "CAT",
      "MAT",
      "XAT",
      "GATE",
      "JEE Main",
      "JEE Advanced",
      "NEET",
    ];

    govtExams.forEach((exam) => {
      courses.push({
        id: id++,
        title: `${exam} Preparation`,
        category: "government",
        class: "exam",
        subject: exam,
        price: getRandomPrice(5000, 20000),
        duration: getRandomDuration(),
        isFree: Math.random() < 0.15,
        image: courseImages.government,
      });
    });

    // Language Courses (20 courses)
    const languages = [
      "English",
      "Hindi",
      "Spanish",
      "French",
      "German",
      "Japanese",
      "Chinese",
      "Russian",
      "Arabic",
      "Portuguese",
      "Italian",
      "Korean",
      "Dutch",
      "Swedish",
      "Turkish",
      "Tamil",
      "Telugu",
      "Bengali",
      "Marathi",
      "Gujarati",
    ];

    languages.forEach((language) => {
      courses.push({
        id: id++,
        title: `${language} Language Course`,
        category: "language",
        class: "language",
        subject: language,
        price: getRandomPrice(3000, 15000),
        duration: getRandomDuration(),
        isFree: Math.random() < 0.25,
        image: courseImages.language,
      });
    });

    return courses;
  };

  const [courses] = useState(generateCourses());

  // Filter courses based on search and filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filter === "all" || course.category === filter;
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "free" && course.isFree) ||
      (priceFilter === "paid" && !course.isFree);
    const matchesClass = classFilter === "all" || course.class === classFilter;

    return matchesSearch && matchesCategory && matchesPrice && matchesClass;
  });

  // Group courses by category for section display
  const coursesByCategory = filteredCourses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  // Category titles mapping
  const categoryTitles = {
    school: "Nursery to 12th Standard",
    graduation: "Graduation Courses",
    master: "Master Courses",
    it: "IT Courses",
    hobby: "Hobby Courses",
    government: "Government Exam Preparation",
    language: "Spoken Language Courses",
  };

  const handleEnroll = (courseId) => {
    // Validate if user is logged in (simplified)
    const isLoggedIn = localStorage.getItem("token"); // In a real app, use proper auth context
    if (!isLoggedIn) {
      alert("Please login to enroll in courses");
      navigate("/login");
    } else {
      navigate("/registration", { state: { courseId } });
    }
  };

  const showCourseDetails = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header and Search */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Our Courses
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Find the perfect course for your learning journey
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  id="search"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 py-3 border-gray-300 rounded-md"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                id="category"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="school">School (Nursery-12th)</option>
                <option value="graduation">Graduation</option>
                <option value="master">Master</option>
                <option value="it">IT Courses</option>
                <option value="hobby">Hobbies</option>
                <option value="government">Government Exams</option>
                <option value="language">Languages</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Price
              </label>
              <select
                id="price"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="free">Free Courses</option>
                <option value="paid">Paid Courses</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="class"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Class/Type
              </label>
              <select
                id="class"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
              >
                <option value="all">All Classes/Types</option>
                <option value="nursery">Nursery</option>
                {[...Array(12).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    Class {i + 1}
                  </option>
                ))}
                <option value="graduation">Graduation</option>
                <option value="master">Master</option>
                <option value="it">IT</option>
                <option value="hobby">Hobby</option>
                <option value="exam">Exam Prep</option>
                <option value="language">Language</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses by Category */}
        {Object.keys(coursesByCategory).length > 0 ? (
          Object.entries(coursesByCategory).map(
            ([category, categoryCourses]) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
                  {categoryTitles[category] || category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryCourses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white overflow-hidden shadow rounded-lg"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {course.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {course.subject}
                        </p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Duration: {course.duration}
                        </div>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Price:{" "}
                          {course.isFree
                            ? "Free"
                            : `₹${course.price.toLocaleString()}`}
                        </div>
                        <div className="mt-5 flex justify-between">
                          <button
                            onClick={() => showCourseDetails(course)}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => handleEnroll(course.id)}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No courses found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="h-48 overflow-hidden rounded-md mb-4">
                  <img
                    src={selectedCourse.image}
                    alt={selectedCourse.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {selectedCourse.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {selectedCourse.subject}
                  </p>
                  <div className="mt-4">
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-sm font-medium text-gray-500">
                        Duration
                      </span>
                      <span className="text-sm text-gray-900">
                        {selectedCourse.duration}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-sm font-medium text-gray-500">
                        Price
                      </span>
                      <span className="text-sm text-gray-900">
                        {selectedCourse.isFree
                          ? "Free"
                          : `₹${selectedCourse.price.toLocaleString()}`}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-sm font-medium text-gray-500">
                        Category
                      </span>
                      <span className="text-sm text-gray-900 capitalize">
                        {selectedCourse.category}
                      </span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-sm font-medium text-gray-500">
                        Class/Type
                      </span>
                      <span className="text-sm text-gray-900 capitalize">
                        {selectedCourse.class === "it"
                          ? "IT"
                          : selectedCourse.class === "exam"
                          ? "Exam Prep"
                          : selectedCourse.class === "hobby"
                          ? "Hobby"
                          : selectedCourse.class === "language"
                          ? "Language"
                          : selectedCourse.class === "master"
                          ? "Master"
                          : selectedCourse.class === "graduation"
                          ? "Graduation"
                          : selectedCourse.class === "nursery"
                          ? "Nursery"
                          : `Class ${selectedCourse.class}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                  onClick={() => handleEnroll(selectedCourse.id)}
                >
                  Enroll Now
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
