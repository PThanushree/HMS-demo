import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md p-6">
      <div className="flex items-center">
        <img
          src="https://storage.googleapis.com/a1aa/image/A6v-7aPV6hV3b_HRPsqxSk0-kiYQyJsBnv9F2GwOlHY.jpg"
          alt="Logo"
          className="w-10 h-10"
        />
        <span className="ml-3 text-xl font-semibold">PayMaven</span>
      </div>
      <nav className="mt-6">
        {[
          { icon: "fas fa-tachometer-alt", label: "Dashboard" },
          { icon: "fas fa-credit-card", label: "Payments" },
          { icon: "fas fa-users", label: "Customers", active: true },
          { icon: "fas fa-chart-line", label: "Report" },
          { icon: "fas fa-cog", label: "Settings" },
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md ${
              item.active ? "bg-gray-200" : ""
            }`}
          >
            <i className={item.icon}></i>
            <span className="ml-3">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Customer</h1>
      <div className="flex items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Create
        </button>
        <div className="ml-4 flex items-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/1nKtKUBbjLSs8XEKftCu3_9omdIR5kzsNAGZN103fMs.jpg"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-2">David Smith</span>
        </div>
      </div>
    </header>
  );
};

const CustomerInfo = () => {
  return (
    <div className="mt-6 bg-white p-6 rounded-md shadow-md">
      <div className="flex items-center">
        <img
          src="https://storage.googleapis.com/a1aa/image/1nKtKUBbjLSs8XEKftCu3_9omdIR5kzsNAGZN103fMs.jpg"
          alt="User Avatar"
          className="w-20 h-20 rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">Elizabeth Allen</h2>
          <p className="text-gray-600">elizabeth88@gmail.com</p>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">General Information</h3>
          <button className="text-blue-500">Edit</button>
        </div>
        <div className="mt-4">
          <p>
            <strong>Join Date:</strong> May 21, 2021
          </p>
          <p>
            <strong>Phone:</strong> (463) 881-2133
          </p>
          <p>
            <strong>Address:</strong> 3270 Beach Street, Indianapolis, IN 46203
          </p>
        </div>
      </div>
    </div>
  );
};

function Billing() {
  return (
    <div className="flex h-screen">
    
      <div className="flex-1 p-6">
        <Header />
        <CustomerInfo />
      </div>
    </div>
  );
};



export default Billing;
