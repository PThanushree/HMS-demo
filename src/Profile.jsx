import React from "react";
import "./Dashboard.css";


function Profile() {
  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <div className="user-profile">
          <div className="profile-img">JD</div>
          <div className="user-info">
            <div className="user-name">John Doe</div>
            <div className="user-role">Administrator</div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="main-content">
        <div className="patient-detail">
          <div className="page-title">
            <div className="title">Patient Detail</div>
          </div>

          <div className="patient-content">
            <div>
              <img className="patient-img" src={ProfileImg} alt="Patient" />
            </div>

            <div className="patient-info">
              <div className="user-name">Patient Name: John Doe</div>
              <div className="user-dob">Date of Birth: 03/05/1998</div>
              <div className="user-id">Patient ID: 01PT852oC</div>
              <div className="user-phno">Contact Number: 598721344xx</div>
              <div className="user-addr">Residential Address: City Name</div>
            </div>
          </div>

          {/* Patient History Table */}
          <div className="table-card">
            <div className="card-title">
              <h3>
                <i className="fas fa-shopping-bag"></i> Recent Activities
              </h3>
              <button className="btn btn-outline btn-sm">
                <i className="fas fa-eye"></i> View All
              </button>
            </div>

            <table className="data-table">
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "#ORD-001",
                  "#ORD-002",
                  "#ORD-003",
                  "#ORD-004",
                  "#ORD-005",
                ].map((order, index) => (
                  <tr key={index}>
                    <td>{order}</td>
                    <td>Customer {index + 1}</td>
                    <td>15 Mar 2025</td>
                    <td>$125.00</td>
                    <td>
                      <span className="status active">
                        <i className="fas fa-check-circle"></i> Completed
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-outline btn-sm">
                        <i className="fas fa-eye"></i> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
