import { useState,React } from "react"
import { Heart, Menu, X } from "lucide-react"
import { Button } from "./Button"

export default function heroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            <a href="#home" className="text-sm hover:text-teal-600">Home</a>
            <a href="#services" className="text-sm hover:text-teal-600">Services</a>
            <a href="#about" className="text-sm hover:text-teal-600">About</a>
            <a href="#testimonials" className="text-sm hover:text-teal-600">Testimonials</a>
            <a href="#feedback" className="text-sm hover:text-teal-600">Feedback</a>
          </nav>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="container md:hidden py-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-sm hover:text-teal-600">Home</a>
              <a href="#services" className="text-sm hover:text-teal-600">Services</a>
              <a href="#about" className="text-sm hover:text-teal-600">About</a>
              <a href="#testimonials" className="text-sm hover:text-teal-600">Testimonials</a>
              <a href="#feedback" className="text-sm hover:text-teal-600">Feedback</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-teal-100 to-white">
        <h1 className="text-4xl font-bold mb-4">Your Health, Our Priority</h1>
        <p className="text-lg text-gray-600 mb-6">Comprehensive care from the best medical professionals</p>
        <Button className="bg-teal-600 text-white hover:bg-teal-700">Book Appointment</Button>
      </section>

      {/* Our Services */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">General Consultation</h3>
              <p className="text-gray-600">Get expert advice and diagnosis for all your health concerns.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Cardiology</h3>
              <p className="text-gray-600">Advanced heart care with experienced cardiologists and facilities.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Diagnostics</h3>
              <p className="text-gray-600">Accurate testing and reports with modern lab equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            At MediCare, we believe in providing high-quality, affordable healthcare with compassion and professionalism.
            Our team of specialists and general physicians are dedicated to patient wellness using state-of-the-art
            technology and patient-first policies.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-xl shadow bg-gray-50">
              <p className="text-gray-700 italic">"MediCare saved my life. The doctors were quick to respond and incredibly caring."</p>
              <p className="mt-4 font-semibold">— Aditi Sharma</p>
            </div>
            <div className="p-6 border rounded-xl shadow bg-gray-50">
              <p className="text-gray-700 italic">"Very clean facility and friendly staff. My children felt safe and happy during the visit."</p>
              <p className="mt-4 font-semibold">— Ramesh Patel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section id="feedback" className="py-16 px-4 bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Feedback</h2>
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input type="text" className="w-full mt-1 p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="w-full mt-1 p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Feedback</label>
              <textarea className="w-full mt-1 p-2 border rounded-md" rows="4"></textarea>
            </div>
            <Button type="submit" className="bg-teal-600 text-white hover:bg-teal-700">Submit</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-600 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} MediCare. All rights reserved.</p>
      </footer>
    </div>
  )
}