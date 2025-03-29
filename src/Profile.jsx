import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa"; // Import icons
import "./Dashboard.css";
import Profileimg from "./assets/profile-icon.png.jpg";

function Profile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    role: "Patient",
    dob: "1998-05-03",
    id: "01PT852oC",
    phone: "598721344xx",
    address: "City Name",
    age:"35",
    bloodGrp:"O+"
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid p-3 vh-100 d-flex flex-column">
      {/* Profile Header */}
      <div className="header d-flex align-items-center mb-4">
        <div className="user-profile d-flex align-items-center">
          <div className="profile-img me-2">{profile.name.charAt(0)}</div>
          <div className="user-info">
            <div className="user-name">{profile.name}</div>
            <div className="user-role">{profile.role}</div>
          </div>
        </div>
      </div>

      {/* Main Profile Section */}
      <div className="d-flex justify-content-center flex-grow-1" style={{ overflowY: "auto" }}>
        <div className="profile-container p-4 border rounded shadow-sm bg-white d-flex flex-column">
          <h3 className="text-center mb-3" style={{color: "rgba(20, 50, 100, 1)"}}>Patient Detail</h3>

          {/* Profile Image & Edit Button */}
          <div className="profile-img-container">
            <img className="patient-img" src={Profileimg} alt="Profile" />
            {/* Small Edit Button on Image */}
            <button
              className="edit-btn"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? <FaSave /> : <FaEdit />}
            </button>
          </div>

          {/* Editable Inputs */}
          <div className="patient-info text-start flex-grow-1">
            {isEditing ? (
              <>
                <label className="form-label">Patient Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={profile.dob}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                <label className="form-label">Patient ID</label>
                <input
                  type="text"
                  name="id"
                  value={profile.id}
                  disabled
                  className="form-control mb-2"
                />

                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                <label className="form-label">Residential Address</label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                
         <label className="form-label">Age</label>
                <input
                  type="text"
                  name="age"
                  value={profile.age}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                
         <label className="form-label">Blood Group</label>
                <input
                  type="text"
                  name="bloodGrp"
                  value={profile.bloodGrp}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
              </>
            ) : (
              <>
                <div className="mb-2"><strong>Patient Name:</strong> {profile.name}</div>
                <div className="mb-2"><strong>Date of Birth:</strong> {profile.dob}</div>
                <div className="mb-2"><strong>Patient ID:</strong> {profile.id}</div>
                <div className="mb-2"><strong>Contact Number:</strong> {profile.phone}</div>
                <div className="mb-2"><strong>Residential Address:</strong> {profile.address}</div>
                <div className="mb-2"><strong>Age:</strong> {profile.age}</div>
                <div className="mb-2"><strong>Blood Group:</strong> {profile.bloodGrp}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
