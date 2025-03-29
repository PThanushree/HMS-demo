

import React from "react";
import Dashboard from "./src/Dashboard.jsx";

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import VideoCall from "./src/VideoCall.jsx"; // Ensure correct capitalization
import Billing from "./src/Billing.jsx";
import Profile from "./src/Profile.jsx";
import MedicalHist from "./src/MedicalHist.jsx";
import PHeader from "./src/PHeader.jsx";
import Digital from "./src/Digital_pres.jsx";
import "./src//Dashboard.css";




function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row vh-100">
          {/* Sidebar   col-md-3 col-lg-2*/}
          <nav className="col-md-3 col-lg-2 d-md-block bg-dark text-white sidebar p-3 vh-100 sidebar" >
              <Dashboard />
            
          </nav>

          {/* Main Content */}
          <main className="col-md-9 col-lg-10 d-flex flex-column p-4" style={{ height: "100vh" }}>
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/videoCall"  element={<VideoCall />} />
              <Route path="/Billing" element={<Billing />} />
              <Route path="/medicalHist" element={<MedicalHist />} />
              <Route path="/Prescription" element={<Digital />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;




