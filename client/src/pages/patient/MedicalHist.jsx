import React from "react";
import { Download } from "lucide-react";

const MedicalHistory = () => {
  const patientInfo = {
    name: "Alex John",
    status: "Active",
    age: 35,
    nationality: "USA",
    bloodType: "O+",
  };

  const records = [
    {
      title: "Diagnoses",
      description: "Hypertension diagnosed.",
      date: "2022-05-14",
      image: "link_to_image_1.jpg",
    },
    {
      title: "Treatments",
      description: "Physical therapy sessions.",
      date: "2023-01-10",
      image: "link_to_image_2.jpg",
    },
    {
      title: "Medications",
      description: "Prescribed Lisinopril.",
      date: null,
      status: "Active",
    },
    {
      title: "Allergies",
      description: "Allergic to penicillin.",
      status: "Critical",
    },
    {
      title: "Test Results",
      description: "Normal blood test results.",
      date: "2023-02-22",
    },
  ];

  return (
    <div className="container mx-auto mt-4">
      {/* Patient Info Card */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-center text-2xl font-semibold">{patientInfo.name}</h2>
        <p className="text-center text-gray-500">
          Status: {patientInfo.status} | Age: {patientInfo.age} | Blood Type:{" "}
          {patientInfo.bloodType}
        </p>
        <div className="text-center mt-4">
          <button
            className="bg-blue-800 text-white py-2 px-4 rounded flex items-center justify-center"
          >
            <Download size={16} /> <span className="ml-2">Download Reports</span>
          </button>
        </div>
      </div>

      {/* Medical History Records */}
      <h3 className="mb-3 text-center text-xl font-semibold text-blue-800">
        Medical History
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {records.map((record, index) => (
          <div className="bg-white shadow-md rounded-lg p-4 h-full" key={index}>
            <h5 className="text-lg font-semibold text-blue-800">{record.title}</h5>
            <p className="text-gray-700">{record.description}</p>
            {record.date && <p className="text-gray-500">Date: {record.date}</p>}
            {record.status && (
              <p className="text-red-500">Status: {record.status}</p>
            )}
            {record.image && (
              <img
                src={record.image}
                alt={record.title}
                className="mt-2 rounded-lg w-full h-auto"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalHistory;

