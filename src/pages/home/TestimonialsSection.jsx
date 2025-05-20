import { FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "EduPine transformed my career. The courses are comprehensive and the instructors are top-notch!",
      name: "Sarah Johnson",
      role: "Frontend Developer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "Best investment I've made in my education. The projects helped me build a strong portfolio.",
      name: "Michael Chen",
      role: "Data Scientist",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "The community support is incredible. I got help whenever I was stuck on a concept.",
      name: "Emma Rodriguez",
      role: "UX Designer",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      quote:
        "Practical learning approach made all the difference. I landed my dream job after completing the course.",
      name: "David Wilson",
      role: "Fullstack Developer",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      quote:
        "The curriculum is perfectly structured for beginners to advanced learners.",
      name: "Priya Patel",
      role: "Mobile Developer",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[50px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white/20"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Hear from thousands of successful learners worldwide
          </p>
        </motion.div>

        <div className="px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-blue-100 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex text-yellow-300">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="fill-current" />
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[50px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white/20"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsSection;