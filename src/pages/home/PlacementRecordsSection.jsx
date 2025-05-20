import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlacementRecordsSection = () => {
  // Sample student data inspired by web search results
  const students = [
    {
      name: "Adil Thakur",
      lpa: "47.61 LPA",
      company: "ServiceNow",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Shachi Gupta",
      lpa: "42.87 LPA",
      company: "ServiceNow",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Yasir M.",
      lpa: "3 Crore",
      company: "Global IT Giant",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Kurapati Yaswanth",
      lpa: "27 LPA",
      company: "Juspay",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  // Slider settings with autoplay
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    loop: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-6 bg-gradient-to-br from-white to-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl  font-bold text-center text-gray-700 mb-10 animate-fade-in">
          Check our placement records to see the highest salary package earned
          by our students
        </h2>

        {/* Slider */}
        <Slider {...settings} className="relative overflow-visible">
          {students.map((student, idx) => (
            <div key={idx} className="px-4 overflow-visible ">
              <div className="bg-white/30 border border-gray-500 backdrop-blur-lg rounded-lg shadow-xl p-4 text-center border border-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-visible">
                {/* Student Image */}
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover rounded-full border-2 border-indigo-300"
                  />
                </div>
                {/* Student Details */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {student.name}
                </h3>
                <p className="text-indigo-600 font-bold text-lg mt-2">
                  {student.lpa}
                </p>
                <p className="text-gray-600 mt-1">{student.company}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom Animation for Fade-In */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PlacementRecordsSection;
