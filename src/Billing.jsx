import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PaymentHistory.css";


import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";// Import Bootstrap JS


const PaymentHistory = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [newPayment, setNewPayment] = useState({
    id: "",
    date: "",
    amount: "",
    questions: "",
    cardType: "Credit Card",
    status: "Pending",
  }
);

  const [data, setData] = useState([
    { id: "#15267", date: "Mar 1, 2023", amount: 100, questions: 1, status: "Success" },
    { id: "#15367", date: "Jan 26, 2023", amount: 300, questions: 3, status: "Success" },
    { id: "#12436", date: "Feb 12, 2023", amount: 100, questions: 1, status: "Success" },
  ]);

  const handleInputChange = (e) => {
    setNewPayment({ ...newPayment, [e.target.name]: e.target.value });
  };

  const handleAddPayment = () => {
    if (newPayment.id && newPayment.date && newPayment.amount && newPayment.questions) {
      setPaymentStatus("Processing");

      setTimeout(() => {
        setPaymentStatus("Verified");

        setTimeout(() => {
          setPaymentStatus("Completed"); // Success state with checkmark
          
          setTimeout(() => {
            setNewPayment({ ...newPayment, status: "Success" });
            setData([...data, { ...newPayment, status: "Success" }]);
            setShowForm(false);
            setPaymentStatus("Pending"); // Reset loader for next use
          }, 2000);

        }, 2000);
      }, 2000);
    } else {
      alert("Please fill all fields before adding a payment.");
    }
  };

  // Function to delete a row from the table
const handleDelete = (id) => {
  const updatedData = data.filter((payment) => payment.id !== id);
  setData(updatedData);
};

// Bootstrap Tooltip Initialization
useEffect(() => {
  import("bootstrap").then(({ Tooltip }) => {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltipTrigger) => {
      new Tooltip(tooltipTrigger);
    });
  });
}, [data]);


document.addEventListener("click", () => {
  const tooltips = document.querySelectorAll(".tooltip");
  tooltips.forEach((tooltip) => tooltip.remove()); // Removes all tooltips
});



  return (

    
    <div className="container-fluid mt-4 payment-history-container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Payment History</h1>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>New Payment</button>
      </div>


      {showForm ? (
        <div className="full-screen-modal">
          <div className="payment-form-container">
            <h3>Enter Payment Details</h3>
            <input type="text" name="id" placeholder="Order ID" onChange={handleInputChange} />
            <input type="date" name="date" onChange={handleInputChange} />
            <input type="number" name="amount" placeholder="Amount (₹)" onChange={handleInputChange} />
            <input type="number" name="questions" placeholder="Questions" onChange={handleInputChange} />
            <select name="cardType" onChange={handleInputChange}>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>

            {/* Loader */}
            <div className="progress-circle-container">
              <div className={`progress-circle ${paymentStatus} ${paymentStatus !== "Pending" ? "Spinning" : ""}`}>
                {paymentStatus === "Completed" && <span className="checkmark">&#10003;</span>}
              </div>
              <p>{paymentStatus}</p>
            </div>

            <button className="btn btn-success mx-3" onClick={handleAddPayment}>Confirm Payment</button>
            <button className="btn btn-danger" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Questions</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((payment, index) => (
              <tr key={index}>
                <td>{payment.id}</td>
                <td>{payment.date}</td>
                <td>₹{payment.amount}</td>
                <td>{payment.questions}</td>
                <td>
                  <span className={`badge ${payment.status === "Success" ? "bg-success" : "bg-warning"}`}>{payment.status}</span>
                </td>
                <td>
  <button
    className="btn btn-danger btn-xs p-1 d-flex align-items-center justify-content-center"
    onClick={() => handleDelete(payment.id)}
    style={{ width: "24px", height: "24px" }}
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    title="Delete"
  >
    🗑
  </button>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PaymentHistory;
