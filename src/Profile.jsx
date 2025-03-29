 import React from "react";
 import "./Dashboard.css";
 import Profileimg from "./assets/profile-icon.png.jpg";
 import "bootstrap/dist/css/bootstrap.css";


 function Profile() {
   return (
     <div >
     
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

             <img className="patient-img" src={Profileimg} />

              
             </div>

             <div className="patient-info">
               <div className="user-name">Patient Name: <span>John Doe</span></div>
               <div className="user-dob">Date of Birth: 03/05/1998</div>
               <div className="user-id">Patient ID: 01PT852oC</div>
               <div className="user-phno">Contact Number: 598721344xx</div>
               <div className="user-addr">Residential Address: City Name</div>
             </div>
           </div>

          
         </div>
       </div>
     </div>
   );
 }
 export default Profile;