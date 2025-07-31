import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";         // Header
import Footer from "../Components/Footer";         // Footer

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
