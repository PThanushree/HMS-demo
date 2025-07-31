// import React from 'react';
// import { Link } from 'react-router-dom';
// import medbanner from '../../assets/med_banner.jpg';

// const PatientDashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
   


//       {/* Carousel Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
//           <div className="h-64 md:h-96 w-full relative">
//             <img
//               src={medbanner}
//               alt="Health Banner"
//               className="w-full h-full object-cover"
//             />
            
//           </div>
//         </div>
//       </section>

//       {/* Patient Info Cards */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
//           <h2 className="text-xl font-semibold text-blue-700 mb-2">Upcoming Appointments</h2>
//           <p className="text-gray-600">You have a general checkup on Aug 5, 2025 at 11:00 AM.</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
//           <h2 className="text-xl font-semibold text-blue-700 mb-2">Latest Prescriptions</h2>
//           <p className="text-gray-600">Dr. Smith prescribed Paracetamol, Vitamin D3 on Jul 28, 2025.</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
//           <h2 className="text-xl font-semibold text-blue-700 mb-2">Messages</h2>
//           <p className="text-gray-600">Your lab results are ready. Please check your reports.</p>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default PatientDashboard;
import React from 'react';
import { Link } from 'react-router-dom';
import medbanner from '../../assets/med_banner.jpg';

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Carousel Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
          <div className="h-64 md:h-96 w-full relative">
            <img
              src={medbanner}
              alt="Health Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Patient Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-sky-700 mb-2">Upcoming Appointments</h2>
          <p className="text-slate-600">You have a general checkup on Aug 5, 2025 at 11:00 AM.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-sky-700 mb-2">Latest Prescriptions</h2>
          <p className="text-slate-600">Dr. Smith prescribed Paracetamol, Vitamin D3 on Jul 28, 2025.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-sky-700 mb-2">Messages</h2>
          <p className="text-slate-600">Your lab results are ready. Please check your reports.</p>
        </div>
      </section>
    </div>
  );
};

export default PatientDashboard;
