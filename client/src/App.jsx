import React from "react";
import "../src/index.css"

//import Welcome from './Welcome';  Import the Welcome page

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PatientRoutes from "./routes/PatientRoutes.jsx";

//import NotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <div className="p-10 bg-blue-100 min-h-screen">
        <h1 className="text-4xl text-red-500 font-bold">Tailwind Test</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/patient/*" element={<PatientRoutes />} />
          {/* 404 - Page Not Found */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
