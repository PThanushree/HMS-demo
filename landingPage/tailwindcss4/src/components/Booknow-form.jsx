import React, { useState } from "react";

const BookNowForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    age: "",
    bloodGroup: "",
    reason: "",
    history: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Send data to backend here
    onClose(); // close form after submit
  };

  return (
    <div className="mt-6 bg-white shadow-lg rounded p-6 max-w-2xl mx-auto">
     
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            name="address"
            onChange={handleChange}
            value={formData.address}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Age</label>
            <input
              name="age"
              type="number"
              onChange={handleChange}
              value={formData.age}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Blood Group</label>
            <input
              name="bloodGroup"
              onChange={handleChange}
              value={formData.bloodGroup}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        </div>
        <div>
          <label className="block font-medium">Reason for Consultation</label>
          <textarea
            name="reason"
            onChange={handleChange}
            value={formData.reason}
            className="w-full border rounded px-3 py-2"
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Past Medical History</label>
          <textarea
            name="history"
            onChange={handleChange}
            value={formData.history}
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Preferred Date</label>
            <input
              name="date"
              type="date"
              onChange={handleChange}
              value={formData.date}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Preferred Time</label>
            <input
              name="time"
              type="time"
              onChange={handleChange}
              value={formData.time}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 hover:underline"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookNowForm;
