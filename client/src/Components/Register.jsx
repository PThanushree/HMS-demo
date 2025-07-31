

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bgimage from '../assets/bgimage.jpg'; // Update the path if needed

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/register', {
        username,
        email,
        password,
        role,
      });

      if (response.status === 201) {
         localStorage.setItem("user", JSON.stringify(response.data.user));
        setMessage("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(response.data.error || "Something went wrong");
      }
    } catch (error) {
      setMessage(error.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

      {/* Register Card */}
      <div className="relative z-10 w-[90%] max-w-md rounded-2xl shadow-xl p-8 bg-white/70 backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-md border bg-white/80"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md border bg-white/80"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md border bg-white/80"
            required
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 rounded-md border bg-white/80"
            required
          >
            <option value="" disabled>Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
            <option value="patient">Patient</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-sky-700 hover:bg-sky-800 text-white font-semibold"
          >
            Register
          </button>
        </form>

        {message && (
          <p className="text-sm mt-4 text-center text-red-600">{message}</p>
        )}

        <p className="mt-4 text-center text-gray-700">
          Already have an account?{' '}
          <a href="/login" className="text-sky-700 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
