
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.css";
import videoCamera from "./assets/video-camera.png";
import Bill from "./assets/billing-machine.png";
import Checkup from "./assets/medical-checkup.png";
import user from "./assets/user.png";
import note from "./assets/upload.png";


function Dashboard() {
  const location = useLocation(); // Get current page URL

  return (

    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <h1>Patient Panel</h1>
        </div>

        <div className="nav-menu">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
              <img className="profile-icon" src={user} alt="Profile" />
              <span>Profile</span>
            </div>
          </Link>

          <Link to="/videoCall" style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`nav-item ${location.pathname === "/videoCall" ? "active" : ""}`}>
              <img className="video-icon" src={videoCamera} alt="Video Call" />
              <span>Video-Call Appointment</span>
            </div>
          </Link>

          <Link to="/Billing" style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`nav-item ${location.pathname === "/Billing" ? "active" : ""}`}>
              <img className="bill-icon" src={Bill} alt="Billing" />
              <span>Billing and Payments</span>
            </div>
          </Link>

          <Link to="/MedicalHist" style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`nav-item ${location.pathname === "/MedicalHist" ? "active" : ""}`}>
              <img className="bill-icon" src={Checkup} alt="Medical History" />
              <span>Medical History</span>
            </div>
          </Link>

          <Link to="/Prescription" style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`nav-item ${location.pathname === "/Prescription" ? "active" : ""}`}>
              <img className="pres-icon" src={note} alt="Prescription" />
              <span>Digital Prescription</span>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
