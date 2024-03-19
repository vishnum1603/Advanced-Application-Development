import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const initialPayments = [
  {
    paymentId: 1,
    bookingId: 1,
    eventName: "Birthday Party",
    amount: 500,
    status: "Paid",
  },
  {
    paymentId: 2,
    bookingId: 2,
    eventName: "Wedding Reception",
    amount: 1000,
    status: "Paid",
  },
  {
    paymentId: 3,
    bookingId: 3,
    eventName: "Conference",
    amount: 800,
    status: "Pending",
  },
  {
    paymentId: 4,
    bookingId: 4,
    eventName: "Product Launch",
    amount: 1200,
    status: "Paid",
  },
  {
    paymentId: 5,
    bookingId: 5,
    eventName: "Charity Gala",
    amount: 1500,
    status: "Pending",
  },
  // Add more payment data as needed
];

const PaymentTable = () => {
  const [payments, setPayments] = useState(initialPayments);
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (columnName) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.column === columnName && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ column: columnName, direction: direction });

    const sortedPayments = [...payments].sort((a, b) => {
      if (direction === "ascending") {
        return a[columnName] > b[columnName] ? 1 : b[columnName] > a[columnName] ? -1 : 0;
      } else {
        return a[columnName] < b[columnName] ? 1 : b[columnName] < a[columnName] ? -1 : 0;
      }
    });

    setPayments(sortedPayments);
  };

  const getSortIcon = (columnName) => {
    if (!sortConfig || sortConfig.column !== columnName) {
      return null;
    }
    return sortConfig.direction === "ascending" ? <ArrowUpward /> : <ArrowDownward />;
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => handleSort("paymentId")}>
              Payment ID {getSortIcon("paymentId")}
            </th>
            <th onClick={() => handleSort("bookingId")}>
              Booking ID {getSortIcon("bookingId")}
            </th>
            <th onClick={() => handleSort("eventName")}>
              Event Name {getSortIcon("eventName")}
            </th>
            <th onClick={() => handleSort("amount")}>
              Amount {getSortIcon("amount")}
            </th>
            <th onClick={() => handleSort("status")}>
              Status {getSortIcon("status")}
            </th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.paymentId}</td>
              <td>{payment.bookingId}</td>
              <td>{payment.eventName}</td>
              <td>{payment.amount}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PaymentTable;
