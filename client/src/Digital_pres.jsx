import React , { useState,useEffect } from "react";
import { BarChart, User, FileCode, PillIcon, UserCircle, Settings, Download, Printer } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Digital_presc.css";

export default function DigitalPrescription() {
  const [activeTab, setActiveTab] = useState("personal-info");
  const [expandedRow, setExpandedRow] = useState(null);
  const [clicked, setClicked] = useState(false);

  const medications = [
    { name: "Aspirin", startDate: "2023-01-01", endDate: "2023-01-30", missedDoses: 2, action: "Download" },
    { name: "Metformin", startDate: "2023-01-05", endDate: "2023-02-05", missedDoses: 1, action: "Print" },
    { name: "Lipitor", startDate: "2023-01-10", endDate: "2023-02-10", missedDoses: 0, action: "Download" },
    { name: "Lisinopril", startDate: "2023-01-12", endDate: "2023-02-12", missedDoses: 3, action: "Print" },
  ];

  return (
    <div className="d-flex vh-100 bg-light">
     
     

      {/* Main Content */}
      <div className=" main-container flex-grow-1 p-4 w-full">
        <div className="d-flex justify-content-between align-items-center mb-4">
          
        </div>

        <div className="bg-white p-4 shadow rounded w-full">
          <h2 className="mb-4" style={{color:"rgba(14, 39, 82, 1)"}}>Digital Prescription</h2>

          <div className="row mb-4">
            <div className="col-md-6">
              <h5><b>John Doe</b></h5>
              <p><b>Age</b>: 32</p>
              <p><b>Height</b>: 5'11"</p>
            </div>
            <div className="col-md-6">
              <h5 style={{color:"rgba(14, 39, 82, 1)"}}><b>Prescription</b></h5>
              <p><b>Medication</b>: Amoxicillin</p>
              <p><b>Dosage</b>: 500mg, twice daily</p>
            </div>
          </div>

          <h5 className="mb-3">Medication Tracker</h5>
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
  <tr>
    <th>Medication</th>
    <th>Start Date</th>
    <th className="d-none d-md-table-cell">End Date</th>
    <th className="d-none d-md-table-cell">Missed Doses</th>
    <th className="d-none d-md-table-cell">Actions</th>
    <th className="d-md-none text-end">Details</th>
  </tr>
</thead>



            <tbody>
  {medications.map((med, index) => {
    const [showDetails, setShowDetails] = useState(false); // this needs to be moved outside the map (see below)
    return (
      <React.Fragment key={index}>
        <tr>
          <td>{med.name}</td>
          <td>{med.startDate}</td>
          <td className="d-none d-md-table-cell">{med.endDate}</td>
          <td className="d-none d-md-table-cell">{med.missedDoses}</td>

{/*Desktop UI*/}
          <td className="d-none d-md-table-cell">
              {med.action === "Print" && (
    <button
      className="btn btn-outline-secondary bg-white me-2"
      style={{ color: "rgba(14, 39, 82, 1)" }}
    >
      <Printer size={16} className="me-2" />
    </button>
  )}
  {med.action === "Download" && (
    <button
      className="btn"
      style={{ backgroundColor: "rgba(14, 39, 82, 1)", color: "white" }}
    >
      <Download size={16} className="me-2" />
    </button>
  )}
          </td>

          {/* Mobile toggle column */}
          <td className="d-md-none text-end">
            <button
              className="btn btn-sm btn-light"
              onClick={() => setExpandedRow(index === expandedRow ? null : index)}
            >
              {expandedRow === index ? "▲" : "▼"}
            </button>
          </td>
        </tr>

        {/* Expanded Details Row for Mobile */}
        {expandedRow === index && (
          <tr className="d-md-none">
            <td colSpan="4">
              <strong>End Date:</strong> {med.endDate} <br />
              <strong>Missed Doses:</strong> {med.missedDoses} <br />
              <strong>Action:</strong>{" "}
          
              <button className="btn btn-outline-secondary bg-white  me-2"
            style={{color : "rgba(14, 39, 82, 1)"}} >
              <Printer size={16} className="me-2" /> 
            </button>


            <button className="btn " style={{ backgroundColor: "rgba(14, 39, 82, 1)", color: "white" }}>
              <Download size={16} className="me-2" /> 
            </button>



            </td>
          </tr>
        )}
      </React.Fragment>
    );
  })}
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