/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Download } from "lucide-react";

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
    {
      id: "#15267",
      date: "Mar 1, 2023",
      amount: 100,
      cardType: "Debit Card",
      status: "Success",
    },
    {
      id: "#15367",
      date: "Jan 26, 2023",
      amount: 300,
      cardType: "Credit Card",
      status: "Success",
    },
    {
      id: "#12436",
      date: "Feb 12, 2023",
      amount: 100,
      cardType: "Credit Card",
      status: "Success",
    },
  ]);

  const handleInputChange = (e) => {
    setNewPayment({ ...newPayment, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    setData(data.filter((payment) => payment.id !== id));
    if (
      expandedRow !== null &&
      data.findIndex((payment) => payment.id === id) === expandedRow
    ) {
      setExpandedRow(null);
    }
  };

  const handleAddPayment = () => {
    if (
      !newPayment.id ||
      !newPayment.date ||
      !newPayment.amount ||
      !newPayment.cardType
    ) {
      alert("Please fill all fields before confirming.");
      return;
    }

    setLoading(true);
    setPaymentStatus("Verifying...");

    setTimeout(() => {
      setPaymentStatus("Pending");

      setTimeout(() => {
        setPaymentStatus("Success");

        setTimeout(() => {
          const paymentToAdd = { ...newPayment, status: "Success" };
          setData([...data, paymentToAdd]);
          setShowForm(false);

          setNewPayment({
            id: "",
            date: "",
            amount: "",
            cardType: "",
            status: "Pending",
          });

          setLoading(false);
          setPaymentStatus("Pending");
        }, 1000);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="container mx-auto mt-6">
      <div className="flex justify-end items-center mb-8 mt-6">
        <button
          className="bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded-md text-sm font-bold"
          onClick={() => setShowForm(true)}
        >
          New Payment
        </button>
      </div>

      {showForm ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-sky-700">
              Enter Payment Details
            </h3>
            <input
              type="text"
              name="id"
              placeholder="Patient ID"
              onChange={handleInputChange}
              className="form-input mb-3 border rounded-md p-2 w-full"
            />
            <input
              type="date"
              name="date"
              onChange={handleInputChange}
              className="form-input mb-3 border rounded-md p-2 w-full"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount (₹)"
              onChange={handleInputChange}
              className="form-input mb-3 border rounded-md p-2 w-full"
            />
            <select
              name="cardType"
              value={newPayment.cardType}
              onChange={handleInputChange}
              className="form-select mb-4 border rounded-md p-2 w-full"
            >
              <option value="" disabled>
                Select Payment Method
              </option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>

            <div className="flex justify-center">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md mx-2"
                onClick={() => {
                  handleAddPayment();
                  setShowForm(false);
                }}
              >
                Confirm Payment
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-sky-700 text-white">
              <tr>
                <th className="py-2 px-4 border">Patient ID</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Amount</th>
                <th className="hidden md:table-cell py-2 px-4 border">
                  Payment Method
                </th>
                <th className="hidden md:table-cell py-2 px-4 border">
                  Status
                </th>
                <th className="md:hidden py-2 px-4 border">Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((payment, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="py-2 px-4 border">{payment.id}</td>
                    <td className="py-2 px-4 border">{payment.date}</td>
                    <td className="py-2 px-4 border">₹{payment.amount}</td>
                    <td className="hidden md:table-cell py-2 px-4 border">
                      {payment.cardType}
                    </td>
                    <td className="hidden md:table-cell py-2 px-4 border">
                      <span
                        className={`badge ${
                          payment.status === "Success"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        } text-white px-2 py-1 rounded-md`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="md:hidden py-2 px-4 border">
                      <button
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                        onClick={() =>
                          setExpandedRow(expandedRow === index ? null : index)
                        }
                      >
                        {expandedRow === index ? "←" : "→"}
                      </button>
                    </td>
                  </tr>
                  {expandedRow === index && (
                    <tr className="md:hidden">
                      <td colSpan="6" className="py-2 px-4 border">
                        <div className="expanded-details text-sm">
                          <p>
                            <strong>Payment Method:</strong> {payment.cardType}
                          </p>
                          <p>
                            <strong>Status:</strong> {payment.status}
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
