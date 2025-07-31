import React, { useState } from 'react';
import bgimage from '../assets/bgimage.jpg'; // make sure the path is correct

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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

        {message && <p className="text-sm text-red-600 mt-4">{message}</p>}

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

