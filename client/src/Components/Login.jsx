import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bgimage from '../assets/bgimage.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:8000/api/users/login", {
      email,
      password,
      role,
    });

    const { token, msg, user } = response.data;

    if (!token || !user) {
      throw new Error("Invalid response from server.");
    }

    // Save token and user info in localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("user", JSON.stringify(user));

    setMessage(msg);

    // Navigate to respective dashboard
    navigate(role === "patient" ? "/patient" : `/${role}`);
  } catch (err) {
    console.error("Login error:", err);
    const errorMsg = err.response?.data?.error || err.message || "Login failed";
    setMessage(errorMsg);
  }
};

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

      {/* Login Form */}
      <div className="relative z-10 w-[90%] max-w-md rounded-2xl shadow-xl p-8 bg-white/70 backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
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
            <option value="">Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
            <option value="patient">Patient</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-sky-700 hover:bg-sky-800 text-white font-semibold"
          >
            Login
          </button>
        </form>

        {message && <p className="text-sm text-red-600 mt-4">{message}</p>}

        <p className="mt-4 text-center text-gray-700">
          Don’t have an account?{' '}
          <a href="/register" className="text-sky-700 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
