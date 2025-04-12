import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import "./PaymentHistory.css";

const PaymentHistory = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [newPayment, setNewPayment] = useState({
    id: "",
    date: "",
    amount: "",
    cardType: "",
    status: "Pending",
  });

  const [data, setData] = useState([
    { id: "#15267", date: "Mar 1, 2023", amount: 100, cardType: "Debit Card", status: "Success" },
    { id: "#15367", date: "Jan 26, 2023", amount: 300, cardType: "Credit Card", status: "Success" },
    { id: "#12436", date: "Feb 12, 2023", amount: 100, cardType: "Credit Card", status: "Success" },
  ]);

  const handleInputChange = (e) => {
    setNewPayment({ ...newPayment, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    setData(data.filter((payment) => payment.id !== id));
    if (expandedRow !== null && data.findIndex((payment) => payment.id === id) === expandedRow) {
      setExpandedRow(null);
    }
  };

  const handleAddPayment = () => {
    if (!newPayment.id || !newPayment.date || !newPayment.amount || !newPayment.cardType) {
      alert("Please fill all fields before confirming.");
      return;
    }

    setLoading(true); // Show spinner and start the process
    setPaymentStatus("Verifying...");

    // Simulate API verification process
    setTimeout(() => {
      setPaymentStatus("Pending");

      setTimeout(() => {
        setPaymentStatus("Success");

        setTimeout(() => {
          const paymentToAdd = { ...newPayment, status: "Success" };
          setData([...data, paymentToAdd]); // Add payment to table
          setShowForm(false); // Close the form

          // Reset form fields
          setNewPayment({
            id: "",
            date: "",
            amount: "",
            cardType: "",
            status: "Pending",
          });

          setLoading(false); // Hide loader
          setPaymentStatus("Pending"); // Reset default status
        }, 1000);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="container-fluid mt-4 payment-history-container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 style={{ color: "rgba(14, 39, 82, 1)", marginBottom: "95px" }}>
          Payment History
        </h1>
        <button
  className="btn btn-sm px-3 py-2 fw-bold"
  onClick={() => setShowForm(true)}
  style={{
    backgroundColor: "rgba(14, 39, 82, 1)",
    color: "white",
    fontSize: "clamp(13px, 4vw, 15px)", // Slightly smaller font
    width: "auto", // Prevents it from stretching too much
    minWidth: "100px", // Ensures it stays readable
    borderRadius:"8px"
  }}
>
  New Payment
</button>

      </div>

      {showForm ? (
        <div className="full-screen-modal">
      <div className="payment-form-container mx-auto p-4" style={{ maxWidth: "90%", width: "600px" }}>


            <h3>Enter Payment Details</h3>
            <input type="text" name="id" placeholder="Patient ID" onChange={handleInputChange} />
            <input type="date" name="date" onChange={handleInputChange} />
            <input type="number" name="amount" placeholder="Amount (₹)" onChange={handleInputChange} />
            <select name="cardType" value={newPayment.cardType} onChange={handleInputChange}>
  <option value="" disabled>
    Select Payment Method
  </option>
  <option value="Credit Card">Credit Card</option>
  <option value="Debit Card">Debit Card</option>
  <option value="Bank Transfer">Bank Transfer</option>
</select>

{/* 
            {loading ? (
              <div className="status-container d-flex flex-column align-items-center">
                {paymentStatus === "Success" ? (
                  <div className="success-icon text-success fs-1">✅</div>
                ) : (
                  <div
                    className={`spinner-border ${
                      paymentStatus === "Verifying..."
                        ? "text-primary"
                        : paymentStatus === "Pending"
                        ? "text-warning"
                        : "text-primary"
                    }`}
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
                <p className="mt-2 fw-bold">{paymentStatus}</p>
              </div>
            ) : (
              <>
                // <button className="btn btn-success mx-3" style={{ marginBottom: "6px" }} onClick={handleAddPayment}>
                //   Confirm Payment
                // </button>
                // <button className="btn btn-danger" onClick={() => setShowForm(false)}>
                //   Cancel
                // </button>
              </>
            )} */}
            {showForm && (
  <div className="full-screen-modal">
    <div className="payment-form-container mx-auto p-4" style={{ maxWidth: "90%", width: "600px" }}>
      <h3 className="mb-4">Enter Payment Details</h3>

      <input
        type="text"
        name="id"
        placeholder="Patient ID"
        onChange={handleInputChange}
        className="form-control mb-3"
      />

      <input
        type="date"
        name="date"
        onChange={handleInputChange}
        className="form-control mb-3"
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount (₹)"
        onChange={handleInputChange}
        className="form-control mb-3"
      />

      <select
        name="cardType"
        value={newPayment.cardType}
        onChange={handleInputChange}
        className="form-control mb-4"
      >
        <option value="" disabled>Select Payment Method</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="Bank Transfer">Bank Transfer</option>
      </select>

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-success mx-3"
          onClick={() => {
            handleAddPayment();
            setShowForm(false);
          }}
        >
          Confirm Payment
        </button>

        <button
          className="btn btn-danger"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

          </div>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Patient ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th className="d-none d-md-table-cell">Payment Method</th>
                <th className="d-none d-md-table-cell">Status</th>
                
                <th className="d-md-none">Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((payment, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{payment.id}</td>
                    <td>{payment.date}</td>
                    <td>₹{payment.amount}</td>
                    <td className="d-none d-md-table-cell">{payment.cardType}</td>
                    <td className="d-none d-md-table-cell">
                      <span className={`badge ${payment.status === "Success" ? "bg-success" : "bg-warning"}`}>
                        {payment.status}
                      </span>
                    </td>
                    
                    <td className="d-md-none">
                      <button className="btn btn-light btn-sm" onClick={() => setExpandedRow(expandedRow === index ? null : index)}>
                        {expandedRow === index ? "←" : "→"}
                      </button>
                    </td>
                  </tr>
                  {expandedRow === index && (
                    <tr className="d-md-none">
                      <td colSpan="6">
                        <div className="expanded-details">
                          <p><strong>Payment Method:</strong> {payment.cardType}</p>
                          <p><strong>Status:</strong> {payment.status}</p>
                         
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
