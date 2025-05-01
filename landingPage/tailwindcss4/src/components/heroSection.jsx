import { useState, React } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import medicalBg from '../assets/medical-bg5.jpg';




export default function heroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">MediCare</span>
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-sm hover:text-teal-600">
              Home
            </a>
            <a href="#services" className="text-sm hover:text-teal-600">
              Services
            </a>
            <a href="#about" className="text-sm hover:text-teal-600">
              About
            </a>
            <a href="#testimonials" className="text-sm hover:text-teal-600">
              Testimonials
            </a>
            <a href="#feedback" className="text-sm hover:text-teal-600">
              Feedback
            </a>
            <a href="#DoctorsProfile" className="text-sm hover:text-teal-600">
              Doctor's Profile
            </a>
          </nav>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="container md:hidden py-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-sm hover:text-teal-600">
                Home
              </a>
              <a href="#services" className="text-sm hover:text-teal-600">
                Services
              </a>
              <a href="#about" className="text-sm hover:text-teal-600">
                About
              </a>
              <a href="#testimonials" className="text-sm hover:text-teal-600">
                Testimonials
              </a>
              <a href="#feedback" className="text-sm hover:text-teal-600">
                Feedback
              </a>
              <a href="#DoctorsProfile" className="text-sm hover:text-teal-600">
                Doctor's Profile
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-0 px-0">
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    className="w-full"
  >
    {/* Slide 1 */}
    <SwiperSlide>
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url('/assets/medical-bg5.jpg')` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold mb-4">Your Health, Our Priority</h1>
          <p className="text-lg">Comprehensive care from the best medical professionals</p>
        </div>
      </div>
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide>
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url('/assets/doctors.jpg')` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold mb-4">Expert Doctors at Your Service</h1>
          <p className="text-lg">Get treated by top-tier specialists in every field.</p>
        </div>
      </div>
    </SwiperSlide>

    {/* Slide 3 */}
    <SwiperSlide>
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url('/assets/emergency.jpg')` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold mb-4">24/7 Emergency Support</h1>
          <p className="text-lg">We’re always here when you need us most.</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</section>


      {/* Our Services */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: "rgb(66, 81, 109)" }}
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                General Consultation
              </h3>
              <p className="text-gray-600">
                Get expert advice and diagnosis for all your health concerns.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Cardiology</h3>
              <p className="text-gray-600">
                Advanced heart care with experienced cardiologists and
                facilities.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Diagnostics</h3>
              <p className="text-gray-600">
                Accurate testing and reports with modern lab equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: "rgb(66, 81, 109)" }}
          >
            About Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At MediCare, we believe in providing high-quality, affordable
            healthcare with compassion and professionalism. Our team of
            specialists and general physicians are dedicated to patient wellness
            using state-of-the-art technology and patient-first policies.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: "rgb(66, 81, 109)" }}
          >
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-xl shadow bg-gray-50">
              <p className="text-gray-700 italic">
                "MediCare saved my life. The doctors were quick to respond and
                incredibly caring."
              </p>
              <p className="mt-4 font-semibold">— Aditi Sharma</p>
            </div>
            <div className="p-6 border rounded-xl shadow bg-gray-50">
              <p className="text-gray-700 italic">
                "Very clean facility and friendly staff. My children felt safe
                and happy during the visit."
              </p>
              <p className="mt-4 font-semibold">— Ramesh Patel</p>
            </div>
          </div>
        </div>
      </section>

      {/*Footer */}
      <footer
        className="text-white py-10 px-6"
        style={{ backgroundColor: "rgb(66, 81, 109)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Feedback Form */}
          <div className="w-full md:w-1/2 mr-50">
            <h2 className="text-3xl font-bold mb-4 text-center">Feedback</h2>
            <form className="space-y-4 text-left">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 text-black border rounded-md"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 text-black border rounded-md"
                />
              </div>

              {/* Feedback Field */}
              <div>
                <label className="block text-sm font-medium">
                  Your Feedback
                </label>
                <textarea
                  className="w-full mt-1 p-2 text-black border rounded-md"
                  rows="4"
                ></textarea>
              </div>

              {/* ⭐ Star Rating */}
              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      className="focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={`w-6 h-6 transition-colors duration-200 ${
                          (hover || rating) >= star
                            ? "text-yellow-400"
                            : "text-white"
                        }`}
                        fill={
                          (hover || rating) >= star ? "currentColor" : "none"
                        }
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.112 6.51a1 1 0 00.95.69h6.878c.969 0 1.371 1.24.588 1.81l-5.572 4.046a1 1 0 00-.364 1.118l2.113 6.51c.3.922-.755 1.688-1.538 1.118l-5.572-4.046a1 1 0 00-1.176 0l-5.572 4.046c-.783.57-1.838-.196-1.538-1.118l2.113-6.51a1 1 0 00-.364-1.118L2.07 11.937c-.783-.57-.38-1.81.588-1.81h6.878a1 1 0 00.95-.69l2.112-6.51z"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-sm text-white">
                  Selected Rating: {rating} / 5
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-white text-teal-600 font-semibold px-4 py-2 rounded hover:bg-gray-100"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/2 ml-50">
            <h2 className="text-3xl text-center font-bold mb-4">Contact Us</h2>
            <p className="mb-2">📞 Phone: (123) 456-7890</p>
            <p className="mb-2">📧 Email: contact@medicare.com</p>
            <p>📍 Address: 123 Health St, Wellness City</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center border-t border-white/30 pt-4">
          <p className="font-bold mb-4">
            &copy; {new Date().getFullYear()} MediCare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
