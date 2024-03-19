import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { TextField } from "@mui/material";

const initialVenues = [
    {
      venueName: "Grand Hall",
      capacity: 500,
      location: "Downtown",
      contactPerson: "John Doe",
      contactEmail: "john@example.com",
      contactPhone: "+1234567890",
    },
    {
      venueName: "Garden Plaza",
      capacity: 300,
      location: "Suburb",
      contactPerson: "Alice Smith",
      contactEmail: "alice@example.com",
      contactPhone: "+1987654321",
    },
    {
      venueName: "Ocean View",
      capacity: 200,
      location: "Coastal Area",
      contactPerson: "Robert Johnson",
      contactEmail: "robert@example.com",
      contactPhone: "+1122334455",
    },
    {
      venueName: "Mountain Lodge",
      capacity: 150,
      location: "Mountain Resort",
      contactPerson: "Emily Brown",
      contactEmail: "emily@example.com",
      contactPhone: "+1441122334",
    },
    {
      venueName: "Riverside Gardens",
      capacity: 250,
      location: "Riverside",
      contactPerson: "Michael Wilson",
      contactEmail: "michael@example.com",
      contactPhone: "+1567890123",
    },
    {
      venueName: "Skyline Ballroom",
      capacity: 400,
      location: "City Center",
      contactPerson: "Emma Taylor",
      contactEmail: "emma@example.com",
      contactPhone: "+1654321987",
    },
    {
      venueName: "Forest Retreat",
      capacity: 100,
      location: "Woodland",
      contactPerson: "William Anderson",
      contactEmail: "william@example.com",
      contactPhone: "+1789054321",
    },
    {
      venueName: "Lakefront Pavilion",
      capacity: 150,
      location: "Lakeside",
      contactPerson: "Olivia Martinez",
      contactEmail: "olivia@example.com",
      contactPhone: "+1876543210",
    },
    {
      venueName: "Sunset Terrace",
      capacity: 200,
      location: "Hilltop",
      contactPerson: "James Lee",
      contactEmail: "james@example.com",
      contactPhone: "+1999888777",
    },
    {
      venueName: "The Manor",
      capacity: 300,
      location: "Countryside",
      contactPerson: "Sophia Brown",
      contactEmail: "sophia@example.com",
      contactPhone: "+1122998877",
    },
  ];

const VenueTable = () => {
    const [venues, setVenues] = useState(initialVenues);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    venueName: "",
    capacity: "",
    location: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = () => {
    setVenues([...venues, formData]);
    setFormData({
      venueName: "",
      capacity: "",
      location: "",
      contactPerson: "",
      contactEmail: "",
      contactPhone: "",
    });
    handleClose();
  };

  const handleDelete = (index) => {
    const updatedVenues = [...venues];
    updatedVenues.splice(index, 1);
    setVenues(updatedVenues);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Venue Name</th>
            <th>Capacity</th>
            <th>Location</th>
            <th>Contact Person</th>
            <th>Contact Email</th>
            <th>Contact Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {venues.map((venue, index) => (
            <tr key={index}>
              <td>{venue.venueName}</td>
              <td>{venue.capacity}</td>
              <td>{venue.location}</td>
              <td>{venue.contactPerson}</td>
              <td>{venue.contactEmail}</td>
              <td>{venue.contactPhone}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => console.log("Update", venue)}
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

      <Button variant="success" onClick={() => setShowModal(true)}>
        Add Venue
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Venue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="venueName">
              <TextField
                label="Venue Name"
                type="text"
                name="venueName"
                value={formData.venueName}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="capacity">
              <TextField
                label="Capacity"
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <TextField
                label="Location"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactPerson">
              <TextField
                label="Contact Person"
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactEmail">
              <TextField
                label="Contact Email"
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactPhone">
              <TextField
                label="Contact Phone"
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
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
          <Button variant="primary" onClick={handleCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VenueTable;
