import React from "react";
import "./Application.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Application = () => {
  return (
    <div>
      <h1>Online Application</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicState">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="Enter State" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicZip">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="text" placeholder="Enter Zip Code" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEducation">
          <Form.Label>Education</Form.Label>
          <Form.Control type="text" placeholder="Enter Education" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicWorkExperience">
          <Form.Label>Work Experience</Form.Label>
          <Form.Control type="text" placeholder="Enter Work Experience" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSkills">
          <Form.Label>Skills</Form.Label>
          <Form.Control type="text" placeholder="Enter Skills" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicReferences">
          <Form.Label>References</Form.Label>
          <Form.Control type="text" placeholder="Enter References" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAvailability">
          <Form.Label>Availability</Form.Label>
          <Form.Check type="checkbox" label="Monday AM" />
          <Form.Check type="checkbox" label="Monday PM" />
          <Form.Check type="checkbox" label="Tuesday AM" />
          <Form.Check type="checkbox" label="Tuesday PM" />
          <Form.Check type="checkbox" label="Wednesday AM" />
          <Form.Check type="checkbox" label="Wednesday PM" />
          <Form.Check type="checkbox" label="Thursday AM" />
          <Form.Check type="checkbox" label="Thursday PM" />
          <Form.Check type="checkbox" label="Friday AM" />
          <Form.Check type="checkbox" label="Friday PM" />
          <Form.Check type="checkbox" label="Saturday AM" />
          <Form.Check type="checkbox" label="Saturday PM" />
          <Form.Check type="checkbox" label="Sunday AM" />
          <Form.Check type="checkbox" label="Sunday PM" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPreferredLocation">
            <Form.Label>Preferred Location</Form.Label>
          <Form.Check type="checkbox" label="Either Location" />
          <Form.Check type="checkbox" label="9th & Mississippi" />
          <Form.Check type="checkbox" label="23rd & Iowa" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        
      </Form>
    </div>
  );
};

export default Application;
