
import React from 'react';
import { useState , useEffect} from 'react';
import BookNowForm from './Booknow-form'

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
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  
useEffect(() => {
  if (selectedDoctor) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  // Cleanup on unmount
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [selectedDoctor]);

  const handleBookClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseForm = () => {
    setSelectedDoctor(null);
  };

  return (
    <section className={`min-h-screen py-3 px-4  bg-gray-50`}>
       <div className={`${selectedDoctor ? 'blur-sm' : ''}`}>
      <div className="bg-white p-6 rounded-2xl shadow-lg transition text-center " >
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "rgb(66, 81, 109)" }}>
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
                onClick={() => handleBookClick(doc)}
                className="mt-auto bg-[rgb(66,81,109)] hover:bg-blue-300 text-white px-4 py-2 rounded-full transition"
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Modal Form */}
    {selectedDoctor && (
  <div className="fixed inset-0 z-50 bg-[rgb(66,81,109)] bg-opacity-40 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
    <div className="bg-white rounded-lg p-8 w-full max-w-2xl relative z-50 max-h-screen overflow-y-auto">
      <button
        onClick={handleCloseForm}
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
      >
        ×
      </button>
      <h3 className="text-2xl font-bold mb-4 text-center">
      <span style={{ color: "rgb(66, 81, 109)" }} > Booking appointment with {selectedDoctor.name} 
      
      </span>
      </h3>
      <BookNowForm onClose={handleCloseForm} />
    </div>
  </div>
)}


    </section>
  );
}



//{selectedDoctor.name}