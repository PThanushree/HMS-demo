import { useState } from "react";
import reactLogo from "./assets/react.svg";
 import viteLogo from "/vite.svg";
 import videoCamera from "./assets/video-camera.png";
 import Bill from "./assets/billing-machine.png";
 import Checkup from "./assets/medical-checkup.png";
import "./Dashboard.css";


function Dashboard()
{
  return(


    <div className="container">
      {/* Sidebar */}
           <div className="sidebar">
            
            <div className="logo">
              <h1>
                Patient Panel
              </h1>
            </div>

            <div className="nav-menu">
          
          
         
          <div className="nav-item active">
            <i className="fas fa-chart-pie"></i>
            <span>Profile</span>
          </div>

          <div className="nav-item">
            <i className="fas fa-users"></i>
            <span> <img className="video-icon" src={videoCamera}/>
            Video-Call Appointment</span>
          </div>

          <div className="nav-item">
            <i className="fas fa-box"></i>
            <span><img className="bill-icon" src={Bill}/>
              Billing and Payments</span>
          </div>

          <div className="nav-item">
            <i className="fas fa-shopping-cart"></i>
            <span>
            <img className="bill-icon" src={Checkup}/>Medical History</span>
          </div>

           </div> {/*nav-menu end*/}
    </div>
    </div>
  );
}
export default Dashboard;