import Profile from "../Components/patient/Profile";
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const PatientRoutes = () => {
  return (
    <div>
      <main >
          <Routes>
            <Route path="/" element={<Profile />} />
            {/* <Route path="/videoCall" element={<VideoCall />} />
            <Route path="/Billing" element={<Billing />} />
            <Route path="/medicalHist" element={<MedicalHist />} />
            <Route path="/Prescription" element={<Digital />} /> */}
          </Routes>
        </main>
    </div>
  );
}

export default PatientRoutes;
