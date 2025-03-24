import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import videoCamera from "./assets/video-camera.png";
import Bill from "./assets/billing-machine.png";
import Checkup from "./assets/medical-checkup.png";
import Profile from "./assets/profile-icon.png.jpg";
import "./Dashboard.css";
import videoCall from "./VideoCall.jsx";
import Billing from "./Billing.jsx";
import user from "./assets/user.png";
import note from "./assets/upload.png";




function Dashboard() {
  return (


    
    <div className="container">

      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <h1>Patient Panel</h1>
        </div>
        <div className="nav-menu">
          <Link to="/" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav-item">
          <img className="profile-icon" src={user} />
            <span>Profile</span>
          </div>
          </Link>

          <Link to="/videoCall" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-item">
              <span>
                 {" "}
                <img className="video-icon" src={videoCamera} />
                Video-Call Appointment
              </span>
            </div>
          </Link>

          <Link to="/Billing" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-item">
              
              <span>
                <img className="bill-icon" src={Bill} />
                Billing and Payments
              </span>
            </div>
          </Link>

          <Link to="/MedicalHist" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-item">
             
              <span>
                <img className="bill-icon" src={Checkup} />
                Medical History
              </span>
            </div>
          </Link>

          <Link to="/Prescription" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-item">
          
              <span>
                <img className="pres-icon" src={note} />
               Digital Prescription
              </span>
            </div>
          </Link>
        </div>{" "}
        {/*nav-menu end*/}
      </div>
      {/*Search-bar end*/}

      
      
    </div>
    
  );
}
export default Dashboard;
