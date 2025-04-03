import React, { useState } from "react";
import Dashboard from "./src/Dashboard.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import VideoCall from "./src/VideoCall.jsx";
import Billing from "./src/Billing.jsx";
import Profile from "./src/Profile.jsx";
import MedicalHist from "./src/MedicalHist.jsx";
import Digital from "./src/Digital_pres.jsx";
import "./src/Dashboard.css";
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <AppContent isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </BrowserRouter>
  );
}

function AppContent({ isSidebarOpen, setIsSidebarOpen }) {
  const location = useLocation();

  // Close sidebar when route changes
  React.useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        {/* Sidebar Toggle Button */}
        <button
          className="btn btn-dark d-md-none position-fixed top-0 start-0 m-2"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>
        
        {/* Sidebar */}
        <nav
          className={`col-md-3 col-lg-2 bg-dark text-white sidebar p-3 d-flex flex-column position-fixed h-100 
          ${isSidebarOpen ? "d-block" : "d-none d-md-flex"}`}
          style={{ transition: "0.3s" }}
        >
          {/* Close Button */}
          <button
            className="btn btn-light d-md-none align-self-end mb-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes size={24} />
          </button>
          <Dashboard />
        </nav>
        
        {/* Main Content */}
        <main
          className="col-md-9 col-lg-10 p-4 d-flex flex-column flex-grow-1 offset-md-3 offset-lg-2"
          style={{ overflowY: "auto", minHeight: "100vh",marginTop:"60px" }} 
        >
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/videoCall" element={<VideoCall />} />
            <Route path="/Billing" element={<Billing />} />
            <Route path="/medicalHist" element={<MedicalHist />} />
            <Route path="/Prescription" element={<Digital />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
