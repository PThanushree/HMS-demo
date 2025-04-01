import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import "./PaymentHistory.css";

const PaymentHistory = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [newPayment, setNewPayment] = useState({
    id: "",
    date: "",
    amount: "",
    cardType: "Credit Card",
    status: "Pending",
  });

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const [data, setData] = useState([
    { id: "#15267", date: "Mar 1, 2023", amount: 100, cardType: "Debit Card", status: "Success" },
    { id: "#15367", date: "Jan 26, 2023", amount: 300, cardType: "Credit Card", status: "Success" },
    { id: "#12436", date: "Feb 12, 2023", amount: 100, cardType: "Credit Card", status: "Success" }
  ]);

  const handleInputChange = (e) => {
    setNewPayment({ ...newPayment, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((payment) => payment.id !== id);
    setData(updatedData);

     // If the deleted row was the expanded row, collapse it
     if (expandedRow !== null && data.findIndex((payment) => payment.id === id) === expandedRow) {
      setExpandedRow(null);
    }
    
  };

  useEffect(() => {
    import("bootstrap").then(({ Tooltip }) => {
      document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltipTrigger) => {
        new Tooltip(tooltipTrigger);
      });
    });
  }, [data]);

  return (
    <div className="container-fluid mt-4 payment-history-container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 style={{ color: "rgba(14, 39, 82, 1)" }}>Payment History</h1>
        <button
          className="btn"
          onClick={() => setShowForm(true)}
          style={{ backgroundColor: "rgba(14, 39, 82, 1)", color: "white" }}
        >
          New Payment
        </button>
      </div>

      {showForm ? (
        <div className="full-screen-modal">
          <div className="payment-form-container">
            <h3>Enter Payment Details</h3>
            <input type="text" name="id" placeholder="Patient ID" onChange={handleInputChange} />
            <input type="date" name="date" onChange={handleInputChange} />
            <input type="number" name="amount" placeholder="Amount (₹)" onChange={handleInputChange} />
            <select name="cardType" onChange={handleInputChange}>
              <option value="" disabled selected>Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
            <button className="btn btn-success mx-3">Confirm Payment</button>
            <button className="btn btn-danger" onClick={() => setShowForm(false)}>Cancel</button>
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
                <th className="d-none d-md-table-cell">Payment Method</th> {/* Hidden on mobile */}
                <th className="d-none d-md-table-cell">Status</th> {/* Hidden on mobile */}
                <th className="d-none d-md-table-cell">Action</th> {/* Hidden on mobile */}
                <th className="d-md-none">Details</th> {/* Arrow for mobile */}
              </tr>
            </thead>
            <tbody>
              {data.map((payment, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{payment.id}</td>
                    <td>{payment.date}</td>
                    <td>₹{payment.amount}</td>
                    <td className="d-none d-md-table-cell">{payment.cardType}</td> {/* Hidden on mobile */}
                    <td className="d-none d-md-table-cell">
                      <span className={`badge ${payment.status === "Success" ? "bg-success" : "bg-warning"}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(payment.id)}>🗑</button>
                    </td>
                    <td className="d-md-none">
                      <button className="btn btn-light btn-sm" onClick={() => toggleRow(index)}>
                      {expandedRow === index ? "←" : "→"} {/* Change icon based on expanded state */}
                      </button>
                    </td>
                  </tr>

                  {expandedRow === index && (
                    <tr className="d-md-none">
                      <td colSpan="6">
                        <div className="expanded-details">
                          <p><strong>Payment Method:</strong> {payment.cardType}</p>
                          <p><strong>Status:</strong> {payment.status}</p>
                          <p><strong>Action:</strong>
                            <button className="btn btn-danger btn-sm mx-2" onClick={() => handleDelete(payment.id)}>🗑 Delete</button>
                          </p>
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
