import React, { useState } from 'react';
import bgimage from '../assets/bgimage.jpg'; // correct image import

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role }),
    });
    const data = await response.json();
    setMessage(data.message || data.error);
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

      {/* Login Card */}
      <div className="relative z-10 w-[90%] max-w-md rounded-2xl shadow-xl p-8 bg-white/70 backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-6">
          Patient Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
