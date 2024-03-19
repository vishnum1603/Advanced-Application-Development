import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { TextField } from "@mui/material";

const EventTable = () => {
  const [events, setEvents] = useState([
    {
      eventName: "Birthday Party",
      capacity: 100,
      venue: "Grand Ballroom",
      date: "2024-03-20",
      price: "$10000",
    },
    {
      eventName: "Weddings",
      capacity: 500,
      venue: "Lakeside Pavilion",
      date: "2024-04-15",
      price: "$150000",
    },
    {
      eventName: "Bachelor Party",
      capacity: 25,
      venue: "Skyline Terrace",
      date: "2024-05-10",
      price: "$7000",
    },
    {
      eventName: "Entertainments",
      capacity: 300,
      venue: "Garden Courtyard",
      date: "2024-06-25",
      price: "$9000",
    },
    {
      eventName: "Decorations",
      capacity: 200,
      venue: "Sunset Lounge",
      date: "2024-07-05",
      price: "$3000",
    },
    {
      eventName: "Caterings",
      capacity: 400,
      venue: "Crystal Hall",
      date: "2024-08-15",
      price: "$15000",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    eventName: "",
    capacity: "",
    venue: "",
    date: "",
    price: "",
  });
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setSelectedEventIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = () => {
    console.log("Add Event Form Data:", formData);
    setEvents([...events, formData]);
    setFormData({
      eventName: "",
      capacity: "",
      venue: "",
      date: "",
      price: "",
    });
    handleClose();
  };

  const handleUpdate = (index) => {
    console.log("Update Event Form Data:", formData);
    setFormData({ ...events[index] });
    setSelectedEventIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <Button variant="success" onClick={() => setShowModal(true)}>
        Add Event
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Capacity</th>
            <th>Venue</th>
            <th>Date</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.eventName}</td>
              <td>{event.capacity}</td>
              <td>{event.venue}</td>
              <td>{event.date}</td>
              <td>{event.price}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleUpdate(index)}
                >
                  Update
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedEventIndex !== null ? "Update Event" : "Add Event"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="eventName">
              <TextField
                label="Event Name"
                type="text"
                name="eventName"
                value={formData.eventName || ""}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="capacity">
              <TextField
                label="Capacity"
                type="number"
                name="capacity"
                value={formData.capacity || ""}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="venue">
              <TextField
                label="Venue"
                type="text"
                name="venue"
                value={formData.venue || ""}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <TextField
                label="Date"
                type="date"
                name="date"
                value={formData.date || ""}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <TextField
                label="Price"
                type="text"
                name="price"
                value={formData.price || ""}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={selectedEventIndex !== null ? handleUpdate : handleCreate}
          >
            {selectedEventIndex !== null ? "Update" : "Create"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EventTable;
