
import React from "react";
import "../src/index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import PatientDashboard from "./pages/patient/patientDashBoard.jsx";
import Appointments from "./pages/patient/VideoCall.jsx";
import Billing from "./pages/patient/Billing.jsx";
import History from "./pages/patient/MedicalHist.jsx";
import Profile from "./pages/patient/Profile.jsx";

import MainLayout from "./layout/MainLayout.jsx"; // The layout with Navbar + Footer

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes without Navbar/Footer */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Routes WITH Navbar/Footer (inside layout) */}
        <Route path="/patient" element={<MainLayout />}>
          <Route index element={<PatientDashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="billing" element={<Billing />} />
          <Route path="history" element={<History />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
