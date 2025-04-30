import React from "react";

function VideoCall()
{
  return (
    <h2>VideoCall Appointments</h2>
  );
}
export default VideoCall;


// App.js
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './App.css';

// const App = () => {
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [timeSlot, setTimeSlot] = useState('');
//     const [appointments, setAppointments] = useState([]);

//     const availableSlots = [
//         "9:30 AM",
//         "10:30 AM",
//         "11:30 AM",
//         "12:00 PM",
//         "1:00 PM",
//         "1:30 PM",
//         "2:00 PM",
//         "2:30 PM"
//     ];

//     const bookAppointment = () => {
//         if (timeSlot) {
//             setAppointments([...appointments, { date: selectedDate, time: timeSlot }]);
//             setTimeSlot('');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Green Hills Hospital</h2>
//             <h5>Appointments</h5>

//             <div className="row">
//                 <div className="col-md-6">
//                     <div className="mb-3">
//                         <DatePicker 
//                             selected={selectedDate} 
//                             onChange={date => setSelectedDate(date)} 
//                             dateFormat="yyyy-MM-dd"
//                             className="form-control"
//                         />
//                     </div>
//                     <h6>Available Slots</h6>
//                     {availableSlots.map((slot, index) => (
//                         <button key={index} 
//                                 className={`btn btn-outline-success m-1 ${timeSlot === slot ? 'active' : ''}`} 
//                                 onClick={() => setTimeSlot(slot)}>
//                             {slot}
//                         </button>
//                     ))}
//                     <button className="btn btn-primary mt-3" onClick={bookAppointment}>Book Appointment</button>
//                 </div>

//                 <div className="col-md-6">
//                     <h6>Booked Appointments</h6>
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Patient Name</th>
//                                 <th>Doctor Name</th>
//                                 <th>Appointment Date</th>
//                                 <th>Appointment Time</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {appointments.map((appointment, index) => (
//                                 <tr key={index}>
//                                     <td>Paul Joe</td>
//                                     <td>Shrey Naik</td>
//                                     <td>{appointment.date.toLocaleDateString()}</td>
//                                     <td>{appointment.time}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;