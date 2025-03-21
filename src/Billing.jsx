// src/PaymentHistory.js
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./PaymentHistory.css";

const PaymentHistory = () => {
  const data = [
    { id: '#15267', date: 'Mar 1, 2023', amount: 100, questions: 1, status: 'Success' },
    { id: '#15367', date: 'Jan 26, 2023', amount: 300, questions: 3, status: 'Success' },
    { id: '#12436', date: 'Feb 12, 2023', amount: 100, questions: 1, status: 'Success' },
    { id: '#16879', date: 'Feb 12, 2023', amount: 500, questions: 5, status: 'Success' },
    { id: '#16376', date: 'Feb 28, 2023', amount: 500, questions: 5, status: 'Rejected' },
    { id: '#16609', date: 'March 15, 2023', amount: 100, questions: 1, status: 'Success' },
    { id: '#6907', date: 'March 18, 2023', amount: 100, questions: 1, status: 'Pending' },
  ];

  return (

    <div className="d-flex vh-100">
      {/* Main Content Container */}
      <div className="container-fluid mt-4 payment-history-container flex-grow-1">
        <h1 className="text-center mb-4">Payment History</h1>
        <div className="row justify-content-center h-100">
          <div className="col-lg-10 col-md-12 d-flex flex-column h-100">
            <div className="card summary-card">
              <div className="card-body">
                <h5 className="card-title">Total Earnings</h5>
                <p className="card-text">₹430.00 as of 31st December 2022</p>
                <h5 className="card-title">Pending Payments</h5>
                <p className="card-text">₹100.00 as of 31st December 2022</p>
              </div>
            </div>

            <div className="btn-group filter-buttons mb-3" role="group">
              <button type="button" className="btn btn-outline-primary">All</button>
              <button type="button" className="btn btn-outline-success">Complete</button>
              <button type="button" className="btn btn-outline-warning">Pending</button>
              <button type="button" className="btn btn-outline-danger">Rejected</button>
            </div>

            <div className="table-responsive flex-grow-1 overflow-auto" style={{ maxHeight: '60vh' }}>
              <table className="table table-hover table-bordered text-center">
                <thead className="table-dark">
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Amount (₹)</th>
                    <th>Total Questions</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className="align-middle">
                      <td>{item.id}</td>
                      <td>{item.date}</td>
                      <td>{item.amount}</td>
                      <td>{item.questions}</td>
                      <td className={`status ${item.status.toLowerCase()}`}>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pagination-info mt-3 text-center">
              <span>10 per page</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    

  );
};

export default PaymentHistory;