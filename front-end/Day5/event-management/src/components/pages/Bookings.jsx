import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const initialBookings = [
  {
    bookingId: 1,
    eventName: "Birthday Party",
    venue: "Grand Hall",
    date: "2024-03-25",
    status: "Confirmed",
  },
  {
    bookingId: 2,
    eventName: "Wedding Reception",
    venue: "Garden Plaza",
    date: "2024-04-15",
    status: "Pending",
  },
  {
    bookingId: 3,
    eventName: "Conference",
    venue: "Convention Center",
    date: "2024-05-10",
    status: "Confirmed",
  },
  {
    bookingId: 4,
    eventName: "Product Launch",
    venue: "Skyline Hall",
    date: "2024-06-20",
    status: "Pending",
  },
  {
    bookingId: 5,
    eventName: "Charity Gala",
    venue: "Crystal Palace",
    date: "2024-07-05",
    status: "Confirmed",
  },
  {
    bookingId: 6,
    eventName: "Music Concert",
    venue: "Stadium Arena",
    date: "2024-08-15",
    status: "Pending",
  },
  {
    bookingId: 7,
    eventName: "Exhibition",
    venue: "Art Gallery",
    date: "2024-09-30",
    status: "Confirmed",
  },
  {
    bookingId: 8,
    eventName: "Fundraising Dinner",
    venue: "Luxury Hotel",
    date: "2024-10-12",
    status: "Pending",
  },
  {
    bookingId: 9,
    eventName: "Workshop",
    venue: "Innovation Hub",
    date: "2024-11-08",
    status: "Confirmed",
  },
  {
    bookingId: 10,
    eventName: "Trade Show",
    venue: "Expo Center",
    date: "2024-12-20",
    status: "Pending",
  },
];

const BookingsTable = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleSort = (columnName) => {
    let direction = "ascending";
    if (sortConfig.key === columnName && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key: columnName, direction: direction });

    const sortedBookings = [...bookings].sort((a, b) => {
      if (a[columnName] < b[columnName]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[columnName] > b[columnName]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setBookings(sortedBookings);
  };

  const getSortIndicator = (columnName) => {
    if (sortConfig.key === columnName) {
      return sortConfig.direction === "ascending" ? <ArrowUpward /> : <ArrowDownward />;
    }
    return null;
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => handleSort("bookingId")}>
              Booking ID {getSortIndicator("bookingId")}
            </th>
            <th onClick={() => handleSort("eventName")}>
              Event Name {getSortIndicator("eventName")}
            </th>
            <th onClick={() => handleSort("venue")}>
              Venue {getSortIndicator("venue")}
            </th>
            <th onClick={() => handleSort("date")}>
              Date {getSortIndicator("date")}
            </th>
            <th onClick={() => handleSort("status")}>
              Status {getSortIndicator("status")}
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.bookingId}</td>
              <td>{booking.eventName}</td>
              <td>{booking.venue}</td>
              <td>{booking.date}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookingsTable;
