import React from 'react';

const Profile = () => {
    const patient = {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, City, State, ZIP',
        profileImage: 'https://i.pravatar.cc/150?img=3', // Replace this with your actual image URL
        medicalHistory: [
            'Allergy to penicillin',
            'Asthma',
            'High blood pressure'
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center items-start">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                    <img
                        src={patient.profileImage}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-sky-200"
                    />
                </div>

                <h1 className="text-3xl font-bold text-sky-700 mb-6 text-center">Patient Profile</h1>

                {/* Personal Info */}
                <div>
                    <h2 className="text-xl font-semibold text-sky-700 mb-3">Personal Information</h2>
                    <p className="mb-1"><strong>Name:</strong> {patient.name}</p>
                    <p className="mb-1"><strong>Age:</strong> {patient.age}</p>
                    <p className="mb-1"><strong>Email:</strong> {patient.email}</p>
                    <p className="mb-1"><strong>Phone:</strong> {patient.phone}</p>
                    <p className="mb-4"><strong>Address:</strong> {patient.address}</p>
                </div>

                {/* Medical History */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-sky-700 mb-2">Medical History</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {patient.medicalHistory.map((condition, index) => (
                            <li key={index}>{condition}</li>
                        ))}
                    </ul>
                </div>

                {/* Button */}
                <div className="mt-8 text-center">
                    <button className="bg-sky-700 text-white px-5 py-2 rounded hover:bg-sky-600 transition">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
