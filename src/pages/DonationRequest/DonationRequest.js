import React from "react";
import "./DonationRequest.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const DonationRequest = () => {
  return (
    <div className="donationContainer">
      <h1>Donation Request</h1>
      <p>
        Cork and Barrel is proud to be a locally owned and operated business in
        Lawrence, Kansas. We try to give back to our community as often as
        possible. In order for us to consider your donation request, please
        submit the form below. We will try to respond as quickly as possible,
        but please allow at least 30 days notice before any event.
      </p>
      <Form className='donationInputContainer'>
        <Row>
          <Form.Group as={Col} className="mb-5" controlId="formBasicFirstName">
            <Form.Label>Contact Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Contact Name" />
          </Form.Group>

          <Form.Group as={Col} className="mb-5" controlId="formBasicLastName">
            <Form.Label>Contact Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Contact Email" />
          </Form.Group>

          <Form.Group as={Col} className="mb-5" controlId="formBasicLastName">
            <Form.Label>Contact Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter Contact Phone" />
          </Form.Group>
        </Row>

        <Form.Group as={Col} className="mb-5" controlId="formBasicLastName">
          <Form.Label>Date of Event</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group as={Col} className="mb-5" controlId="formBasicLastName">
          <Form.Label>Organization Name</Form.Label>
          <Form.Control
            as="textarea"
            row={3}
            type="text"
            placeholder="Enter Organization Name"
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-5" controlId="formBasicLastName">
          <Form.Label>Reason for Request</Form.Label>
          <Form.Control
            as="textarea"
            row={3}
            type="text"
            placeholder="Enter Request Information"
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-5" controlId="formBasicLastName">
          <Form.Label>Donation Requested</Form.Label>
          <Form.Control
            as="textarea"
            row={3}
            type="text"
            placeholder="Enter Requested Donation"
          />
        </Form.Group>

        <Col className="donationButton">
        <Button variant="primary" type="submit">
          Submit Request
        </Button>
        </Col>

      </Form>
    </div>
  );
};

export default DonationRequest;
