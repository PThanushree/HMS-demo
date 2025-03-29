import { Link } from "react-router-dom";
import user from "./assets/user.png";
import videoCamera from "./assets/video-camera.png";
import Bill from "./assets/billing-machine.png";
import Checkup from "./assets/medical-checkup.png";
import note from "./assets/upload.png";
import "./Dashboard.css";

function Dashboard() {
  return (
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
      </div>
    </div>
  );
}

export default Dashboard;
