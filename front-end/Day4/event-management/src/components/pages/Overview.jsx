import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";
import Chart from "chart.js/auto";

export default function Overview() {
  const [eventCount, setEventCount] = useState(0);
  const [venueCount, setVenueCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);

  useEffect(() => {
    const fetchNumbers = () => {
      const fetchedEventCount = 10;
      const fetchedVenueCount = 50;
      const fetchedBookingCount = 100;

      animateCount(setEventCount, fetchedEventCount);
      animateCount(setVenueCount, fetchedVenueCount);
      animateCount(setBookingCount, fetchedBookingCount);

      updateCharts(fetchedEventCount, fetchedVenueCount, fetchedBookingCount);
    };

    fetchNumbers();
  }, []);

  const animateCount = (setter, targetValue) => {
    setter(targetValue);
  };

  const updateCharts = (eventCount, venueCount, bookingCount) => {
    Chart.getChart("bar-chart")?.destroy();
    Chart.getChart("pie-chart")?.destroy();

    const barChart = new Chart(document.getElementById("bar-chart"), {
      type: "bar",
      data: {
        labels: ["Events", "Venues", "Bookings"],
        datasets: [
          {
            label: "Count",
            data: [eventCount, venueCount, bookingCount],
            backgroundColor: ["#66CDAA", "#FF6384", "#36A2EB"],
          },
        ],
      },
    });

    const pieChart = new Chart(document.getElementById("pie-chart"), {
      type: "pie",
      data: {
        labels: ["Events", "Venues", "Bookings"],
        datasets: [
          {
            label: "Count",
            data: [eventCount, venueCount, bookingCount],
            backgroundColor: ["#66CDAA", "#FF6384", "#36A2EB"],
          },
        ],
      },
    });
  };

  const animatedPropsEvent = useSpring({
    to: { number: eventCount },
    from: { number: 0 },
  });
  const animatedPropsVenue = useSpring({
    to: { number: venueCount },
    from: { number: 0 },
  });
  const animatedPropsBooking = useSpring({
    to: { number: bookingCount },
    from: { number: 0 },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 400,
          height: 128,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "@media (max-width: 400px)": {
          width: "100%",
        },
      }}
    >
      <Paper sx={{ backgroundColor: "#66CDAA", color: "black" }}>
        <Typography variant="h6">
          Total Number of Events:{" "}
          <animated.span>
            {animatedPropsEvent.number.to((val) => Math.floor(val))}
          </animated.span>
        </Typography>
      </Paper>
      <Paper sx={{ backgroundColor: "#FF6384" }}>
        <Typography variant="h6">
          Total Number of Venues:{" "}
          <animated.span>
            {animatedPropsVenue.number.to((val) => Math.floor(val))}
          </animated.span>
        </Typography>
      </Paper>
      <Paper sx={{ backgroundColor: "#36A2EB" }}>
        <Typography variant="h6">
          Total Number of Bookings:{" "}
          <animated.span>
            {animatedPropsBooking.number.to((val) => Math.floor(val))}
          </animated.span>
        </Typography>
      </Paper>
      <div style={{ width: "600px", height: "400px" }}>
        <canvas id="bar-chart"></canvas>
      </div>
      <div style={{ maxidth: "600px", height: "400px" }}>
        <canvas id="pie-chart"></canvas>
      </div>
    </Box>
  );
}
