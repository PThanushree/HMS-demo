import { useState } from "react";
import { BarChart, User, FileCode, PillIcon, UserCircle, Settings, Download, Printer } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DigitalPrescription() {
  const [activeTab, setActiveTab] = useState("personal-info");

  const medications = [
    { name: "Aspirin", startDate: "2023-01-01", endDate: "2023-01-30", missedDoses: 2, action: "Download" },
    { name: "Metformin", startDate: "2023-01-05", endDate: "2023-02-05", missedDoses: 1, action: "Print" },
    { name: "Lipitor", startDate: "2023-01-10", endDate: "2023-02-10", missedDoses: 0, action: "Download" },
    { name: "Lisinopril", startDate: "2023-01-12", endDate: "2023-02-12", missedDoses: 3, action: "Print" },
  ];

  return (
    <div className="d-flex vh-100 bg-light">
     
     

      {/* Main Content */}
      <div className="flex-grow-1 p-4 w-100">
        <div className="d-flex justify-content-between align-items-center mb-4">
          
          <div>
            <button className="btn btn-outline-secondary bg-white  me-2"
            style={{color : "rgba(14, 39, 82, 1)"}} >
              <Printer size={16} className="me-2" /> Print
            </button>
            <button className="btn " style={{ backgroundColor: "rgba(14, 39, 82, 1)", color: "white" }}>
              <Download size={16} className="me-2" /> Download
            </button>
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h2 className="mb-4">Digital Prescription</h2>

          <div className="row mb-4">
            <div className="col-md-6">
              <h5>John Doe</h5>
              <p>Age: 32</p>
              <p>Height: 5'11"</p>
            </div>
            <div className="col-md-6">
              <h5>Prescription</h5>
              <p>Medication: Amoxicillin</p>
              <p>Dosage: 500mg, twice daily</p>
            </div>
          </div>

          <h5 className="mb-3">Medication Tracker</h5>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Medication</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Missed Doses</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {medications.map((med, index) => (
                <tr key={index}>
                  <td>{med.name}</td>
                  <td>{med.startDate}</td>
                  <td>{med.endDate}</td>
                  <td>{med.missedDoses}</td>
                  <td>
                    <button className={`btn ${med.action === "Download" ? "btn-primary " : "btn-outline-secondary"} btn-sm`} style={{backgroundColor:" #4361ee"}}>
                      {med.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <button className={`nav-link d-flex align-items-center ${active ? "active text-primary" : "text-dark"}`} >
      {icon} <span className="ms-2">{label}</span>
    </button>
  );
}