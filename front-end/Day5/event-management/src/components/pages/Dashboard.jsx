import React, { useState } from "react";
import "../../assets/css/Dashboard.css";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LineAxisTwoToneIcon from "@mui/icons-material/LineAxisTwoTone";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Box from "@mui/material/Box";
import Navbar from "../NavBar";
import Footer from "../Footer";
import Overview from "./Overview";
import EventTable from "./Event";
import VenueTable from "./Venue";
import BookingsTable from "./Bookings";
import PaymentTable from "./Payment";

const drawerWidth = 240;

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Dashboard":
        return <Overview />;
      case "Events":
        return <EventTable />;
      case "Venue":
        return <VenueTable/>
      case "Bookings":
        return <BookingsTable/>
      case "Payment History":
        return <PaymentTable/>
      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Navbar />
      <div style={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
        <div className="sidebar">
          <ul>
            <li onClick={() => setSelectedOption("Dashboard")}>
              <LineAxisTwoToneIcon /> Dashboard
            </li>
            <li onClick={() => setSelectedOption("Events")}>
              <CelebrationIcon /> Events
            </li>
            <li onClick={() => setSelectedOption("Venue")}>
              <StorefrontIcon /> Venue
            </li>
            <li onClick={() => setSelectedOption("Bookings")}>
              <BeenhereIcon /> Bookings
            </li>
            <li onClick={() => setSelectedOption("Payment History")}>
              <CreditCardIcon /> Payment History
            </li>
          </ul>
        </div>
        <div
          className="dashboard-content"
          style={{ flexGrow: 1, overflowY: "auto" }}
        >
          <Box component="main" sx={{ p: 2 }}>
            {renderContent()}
          </Box>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
