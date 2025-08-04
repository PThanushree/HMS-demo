import React, { useState } from "react";
import { Plus } from "lucide-react"; // optional, for icon

const DoctorsSection = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      yearsExperience: 15,
      education: "Harvard Medical School",
      hospital: "Mayo Clinic",
      rating: 4.9,
      reviews: 328,

      availability: "available",
      imageAlt: "Professional female cardiologist",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      yearsExperience: 12,
      education: "Johns Hopkins University",
      hospital: "Massachusetts General",
      rating: 4.8,
      reviews: 245,

      availability: "available",
      imageAlt: "Asian male neurologist",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      yearsExperience: 8,
      education: "Stanford University",
      hospital: "Boston Children's Hospital",
      rating: 4.7,
      reviews: 198,

      availability: "unavailable",
      imageAlt: "Young female pediatrician",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      yearsExperience: 20,
      education: "Yale School of Medicine",
      hospital: "Cleveland Clinic",
      rating: 4.9,
      reviews: 412,

      availability: "available",
      imageAlt: "Experienced male surgeon",
    },
  ]);

  const bookAppointment = (doctorId) => {
    alert(`Booking appointment with doctor ID: ${doctorId}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-2">
        Our Top Medical Professionals
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Highly recommended doctors with excellent patient reviews and extensive
        experience.
      </p>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg text-center p-6"
          >
            <img
              src={`https://placehold.co/160x160?text=${
                doctor.name.split(" ")[0]
              }`}
              alt={doctor.imageAlt}
              className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {doctor.name}
            </h3>
            <p className="text-sm text-blue-600 font-medium">
              {doctor.specialty}
            </p>

            <div className="flex justify-center items-center mt-2 text-yellow-400">
              {"★".repeat(Math.floor(doctor.rating))}
              {"☆".repeat(5 - Math.floor(doctor.rating))}
              <span className="text-gray-600 ml-2 text-sm">
                {doctor.rating}
              </span>
            </div>

            <div className="text-sm text-gray-600 mt-3 space-y-1">
              <p>
                <strong>Experience:</strong> {doctor.yearsExperience} years
              </p>
              <p>
                <strong>Education:</strong> {doctor.education}
              </p>
              <p>
                <strong>Hospital:</strong> {doctor.hospital}
              </p>
              <p>
                <strong>Reviews:</strong> {doctor.reviews}
              </p>
            </div>

            <div className="flex justify-between items-center w-full mt-4">
              <span className="text-lg font-bold text-blue-600">
                {doctor.price}
              </span>
              <button
                onClick={() => bookAppointment(doctor.id)}
                className={`px-4 py-2 text-white rounded-md transition-colors ${
                  doctor.availability === "available"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={doctor.availability === "unavailable"}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Doctor Button */}
      <div className="flex justify-center mt-10">
        <button
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium"
          onClick={() => alert("Open Add Doctor Form")}
        >
          <Plus size={18} />
          Add Doctor
        </button>
      </div>
    </div>
  );
};

export default DoctorsSection;
