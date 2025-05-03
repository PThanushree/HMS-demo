
import React from 'react';

const doctors = [
  {
    name: "Dr. John Smith",
    designation: "General Physician",
    image: "/images/doctor1.jpg",
    about: "15+ years of experience in diagnosing and managing general medical conditions.",
  },
  {
    name: "Dr. Emily Stone",
    designation: "Cardiologist",
    image: "/images/doctor2.jpg",
    about: "Renowned for non-invasive cardiac procedures and compassionate patient care.",
  },
  {
    name: "Dr. Rahul Mehta",
    designation: "Radiologist",
    image: "/images/doctor3.jpg",
    about: "Expert in advanced imaging technologies with over a decade of experience.",
  },
  {
    name: "Dr. Sarah Khan",
    designation: "Pediatrician",
    image: "/images/doctor4.jpg",
    about: "Dedicated to child health with a warm, family-centered approach.",
  },
  {
    name: "Dr. Carlos Rivera",
    designation: "Orthopedic Surgeon",
    image: "/images/doctor5.jpg",
    about: "Specialist in joint replacements and sports injury treatments.",
  },
  {
    name: "Dr. Aisha Patel",
    designation: "Dermatologist",
    image: "/images/doctor6.jpg",
    about: "Skincare expert with a focus on acne, eczema, and cosmetic dermatology.",
  },
];

export default function DoctorsPage() {
  return (
    <section className="min-h-screen py-16 px-4 bg-gray-50">
      <div
  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-[0px_4px_20px_rgba(66,81,109,0.7)] transition text-center my-10"
  style={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }} // Default shadow
>
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "rgb(66, 81, 109)" }}
        >
          Meet Our Most Recommended Doctors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center my-10"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{doc.name}</h3>
              <p className="text-gray-600 mb-2">{doc.designation}</p>
              <p className="text-gray-500 text-sm mb-4">{doc.about}</p>
              <button
  className="mt-auto bg-[rgb(66,81,109)] hover:bg-blue-300 text-white px-4 py-2 rounded-full transition"
>
  Book Appointment
</button>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
