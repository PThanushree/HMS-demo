import React, { useState, useEffect } from "react";

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    address: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setFormData({
      name: storedUser.username || "",
      email: storedUser.email || "",
      age: storedUser.age || "",
      phone: storedUser.phone || "",
      address: storedUser.address || "",
    });
  }, []);

  const handleChange = (e) => {
    if (!isEditing) return;
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditing(true);

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/patient/${storedUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            age: formData.age,
            phone: formData.phone,
            address: formData.address,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Profile updated successfully");
        setIsEditing(false);
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Save failed:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center items-start">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <div className="flex justify-center mb-4">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-sky-200"
          />
        </div>

        <h1 className="text-3xl font-bold text-sky-700 mb-6 text-center">
          Patient Profile
        </h1>

        <div>
          <h2 className="text-xl font-semibold text-sky-700 mb-3">
            Personal Information
          </h2>

          <div className="mb-2">
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div className="mb-2">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div className="mb-2">
            <label className="block font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              readOnly={!isEditing}
              className={`w-full border px-3 py-2 rounded ${
                !isEditing ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
          </div>

          <div className="mb-2">
            <label className="block font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              readOnly={!isEditing}
              className={`w-full border px-3 py-2 rounded ${
                !isEditing ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              readOnly={!isEditing}
              className={`w-full border px-3 py-2 rounded ${
                !isEditing ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="bg-sky-700 text-white px-5 py-2 rounded hover:bg-sky-600 transition"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-500 transition"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
