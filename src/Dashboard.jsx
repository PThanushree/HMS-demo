<<<<<<< HEAD
import { Link } from "react-router-dom";
import user from "./assets/user.png";
import videoCamera from "./assets/video-camera.png";
import Bill from "./assets/billing-machine.png";
import Checkup from "./assets/medical-checkup.png";
import note from "./assets/upload.png";
import "./Dashboard.css";
=======
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.css";
import videoCamera from "./assets/video-camera.png";
import Bill from "./assets/billing-machine.png";
import Checkup from "./assets/medical-checkup.png";
import user from "./assets/user.png";
import note from "./assets/upload.png";
>>>>>>> a8457ee16e04a3d8a900106301952fb72512f472

function Dashboard() {
  const location = useLocation(); // Get current page URL

  return (
<<<<<<< HEAD
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-4 d-flex flex-column" style={{ width: "16rem" }}>
        <div className="fs-4 fw-bold mb-4 text-center">Patient Panel</div>
        <nav className="d-flex flex-column gap-3">
          <Link to="/" className="d-flex align-items-center gap-2 p-2 rounded bg-hover-dark text-white text-decoration-none">
            <img className="" src={user} alt="Profile" width="24" height="24" />
            <span>Profile</span>
          </Link>
          <Link to="/videoCall" className="d-flex align-items-center gap-2 p-2 rounded bg-hover-dark text-white text-decoration-none">
            <img className="" src={videoCamera} alt="Video Call" width="24" height="24" />
            <span>Video-Call Appointment</span>
          </Link>
          <Link to="/Billing" className="d-flex align-items-center gap-2 p-2 rounded bg-hover-dark text-white text-decoration-none">
            <img className="" src={Bill} alt="Billing" width="24" height="24" />
            <span>Billing and Payments</span>
          </Link>
          <Link to="/MedicalHist" className="d-flex align-items-center gap-2 p-2 rounded bg-hover-dark text-white text-decoration-none">
            <img className="" src={Checkup} alt="Medical History" width="24" height="24" />
            <span>Medical History</span>
          </Link>
          <Link to="/Prescription" className="d-flex align-items-center gap-2 p-2 rounded bg-hover-dark text-white text-decoration-none">
            <img className="" src={note} alt="Prescription" width="24" height="24" />
            <span>Digital Prescription</span>
          </Link>
        </nav>
=======
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
>>>>>>> a8457ee16e04a3d8a900106301952fb72512f472
      </div>
    </div>
  );
}

export default Dashboard;
