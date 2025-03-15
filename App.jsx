// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="logo">
//           <h1>
//             HI <span>HELLO</span>
//           </h1>
//         </div>
//         <div className="nav-menu">
//           <div className="menu-heading">Main</div>
//           <div className="nav-item active">
//             <i className="fas fa-chart-pie"></i>
//             <span>Profile</span>
//           </div>
//           <div className="nav-item">
//             <i className="fas fa-users"></i>
//             <span>VedioCall Appointment</span>
//           </div>
//           <div className="nav-item">
//             <i className="fas fa-box"></i>
//             <span>Bill and Payments</span>
//           </div>
//           <div className="nav-item">
//             <i className="fas fa-shopping-cart"></i>
//             <span>Medical History</span>
//           </div>

//           <div className="menu-heading">Reports</div>
//           <div className="nav-item">
//             <i className="fas fa-chart-line"></i>
//             <span>Analytics</span>
//           </div>
//           <div className="nav-item">
//             <i className="fas fa-coins"></i>
//             <span>Sales</span>
//           </div>

//           <div className="menu-heading">Admin</div>
//           <div className="nav-item">
//             <i className="fas fa-cog"></i>
//             <span>Settings</span>
//           </div>
//           <div className="nav-item">
//             <i className="fas fa-bell"></i>
//             <span>Notifications</span>
//           </div>
//           <div className="nav-item">
//             <i className="fas fa-shield-alt"></i>
//             <span>Security</span>
//           </div>
//         </div>
//       </div>

//       {/* Header
//       <div className="header">
//         <div className="search-bar">
//           <i className="fas fa-search"></i>
//           <input type="text" placeholder="Search..." />
//         </div>
//         <div className="header-actions">
//           <div className="notification">
//             <i className="fas fa-bell"></i>
//             <div className="badge">3</div>
//           </div>
//           <div className="notification">
//             <i className="fas fa-envelope"></i>
//             <div className="badge">5</div>
//           </div>
//           <div className="user-profile">
//             <div className="profile-img">JD</div>
//             <div className="user-info">
//               <div className="user-name">John Doe</div>
//               <div className="user-role">Administrator</div>
//             </div>
//           </div>
//         </div>
//       </div> */}

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="page-title">
//           <div className="title">Dashboard</div>
//           <div className="action-buttons">
//             <button className="btn btn-outline">
//               <i className="fas fa-download"></i>
//               Export
//             </button>
//             <button className="btn btn-primary">
//               <i className="fas fa-plus"></i>
//               Add New
//             </button>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="stats-cards">
//           {[
//             {
//               value: "1,504",
//               label: "Total Users",
//               icon: "fas fa-users",
//               change: "12.5% from last month",
//               positive: true,
//             },
//             {
//               value: "$12,750",
//               label: "Total Revenue",
//               icon: "fas fa-dollar-sign",
//               change: "8.2% from last month",
//               positive: true,
//             },
//             {
//               value: "324",
//               label: "Total Orders",
//               icon: "fas fa-shopping-cart",
//               change: "3.1% from last month",
//               positive: false,
//             },
//             {
//               value: "85%",
//               label: "Conversion Rate",
//               icon: "fas fa-chart-line",
//               change: "4.6% from last month",
//               positive: true,
//             },
//           ].map((stat, index) => (
//             <div key={index} className="stat-card">
//               <div className="card-header">
//                 <div>
//                   <div className="card-value">{stat.value}</div>
//                   <div className="card-label">{stat.label}</div>
//                 </div>
//                 <div className={`card-icon ${stat.icon}`}></div>
//               </div>
//               <div
//                 className={`card-change ${
//                   stat.positive ? "positive" : "negative"
//                 }`}
//               >
//                 <i
//                   className={
//                     stat.positive ? "fas fa-arrow-up" : "fas fa-arrow-down"
//                   }
//                 ></i>
//                 <span>{stat.change}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Recent Orders */}
//         <div className="table-card">
//           <div className="card-title">
//             <h3>
//               <i className="fas fa-shopping-bag"></i> Recent Orders
//             </h3>
//             <button className="btn btn-outline btn-sm">
//               <i className="fas fa-eye"></i> View All
//             </button>
//           </div>
//           <table className="data-table">
//             <thead>
//               <tr>
//                 <th>Order ID</th>
//                 <th>Customer</th>
//                 <th>Date</th>
//                 <th>Amount</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {["#ORD-001", "#ORD-002", "#ORD-003", "#ORD-004", "#ORD-005"].map(
//                 (order, index) => (
//                   <tr key={index}>
//                     <td>{order}</td>
//                     <td>Customer {index + 1}</td>
//                     <td>15 Mar 2025</td>
//                     <td>$125.00</td>
//                     <td>
//                       <span className="status active">
//                         <i className="fas fa-check-circle"></i> Completed
//                       </span>
//                     </td>
//                     <td>
//                       <button className="btn btn-outline btn-sm">
//                         <i className="fas fa-eye"></i> View
//                       </button>
//                     </td>
//                   </tr>
//                 )
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
