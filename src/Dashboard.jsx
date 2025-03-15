import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import videoCamera from "./assets/video-camera.png";
import Bill from "./assets/billing-machine.png";
import Checkup from "./assets/medical-checkup.png";
import Profile from "./assets/profile-icon.png.jpg";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <h1>Patient Panel</h1>
        </div>
        <div className="nav-menu">
          <div className="nav-item active">
            <i className="fas fa-chart-pie"></i>
            <span>Profile</span>
          </div>

          <div className="nav-item">
            <i className="fas fa-users"></i>
            <span>
              {" "}
              <img className="video-icon" src={videoCamera} />
              Video-Call Appointment
            </span>
          </div>

          <div className="nav-item">
            <i className="fas fa-box"></i>
            <span>
              <img className="bill-icon" src={Bill} />
              Billing and Payments
            </span>
          </div>

          <div className="nav-item">
            <i className="fas fa-shopping-cart"></i>
            <span>
              <img className="bill-icon" src={Checkup} />
              Medical History
            </span>
          </div>
        </div>{" "}
        {/*nav-menu end*/}
      </div>
      {/*Search-bar end*/}

      {/*Header Section */}
      <div className="header">

        <div className="user-profile">
          <div className="profile-img">JD</div>
          <div className="user-info">
            <div className="user-name">John Doe</div>
            <div className="user-role">Administrator</div>
          </div> {/*User-info end*/}

        </div>{/*user-profile end*/}
      </div>{/*header end*/}


      {/*Main container*/}
      <div className="main-content">

        <div className="patient-detail">

        <div className="page-title">
       <div className="title">Patient Detail</div>
       </div>

     <div className="patient-content">

       <div><img className="patient-img" src={Profile} /></div>

       <div className="patient-info">
       <div className="user-name">Patient Name : John Doe</div>
       <div className="user-dob">Date of Birth : 03/05/1998</div>
       <div className="user-id">Patient ID : 01PT852oC</div>
       <div className="user-phno">Contact Number : 598721344xx</div>
       <div className="user-addr">Residential Address : City name</div>
       </div>{/*Patient-info end*/}

       </div> {/*psatient-content end*/}


       {/*pt-history Table*/}

       <div className="table-card">
          <div className="card-title">
           <h3>
               <i className="fas fa-shopping-bag"></i> Recent Activities
             </h3>
             <button className="btn btn-outline btn-sm">
               <i className="fas fa-eye"></i> View All
             </button>
           </div>  {/*card-tilte end*/}

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
               {["#ORD-001", "#ORD-002", "#ORD-003", "#ORD-004", "#ORD-005"].map(
                 (order, index) => (
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
                 )
               )}
             </tbody>
           </table>
           </div> {/*table-card end*/}

        </div>
      </div>
    </div>
  );
}
export default Dashboard;
