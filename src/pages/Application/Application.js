import React from "react";
import "./Application.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Application = () => {
  return (
    <div>
      <h1>Online Application</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <FloatingLabel controlId="floatingInput" label="First Name">
            <Form.Control type="text" placeholder="Enter First Name" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <FloatingLabel controlId="floatingInput" label="Last Name">
            <Form.Control type="text" placeholder="Enter Last Name" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
          <FloatingLabel controlId="floatingInput" label="Date of Birth">
            <Form.Control type="date" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <FloatingLabel controlId="floatingInput" label="Address">
          <Form.Control type="text" placeholder="Enter Address" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
          <FloatingLabel controlId="floatingInput" label="City">
          <Form.Control type="text" placeholder="Enter City" />
            </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicState">
          <FloatingLabel controlId="floatingInput" label="State">
          <Form.Control type="text" placeholder="Enter State" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicZip">
          <FloatingLabel controlId="floatingInput" label="Zip Code">
          <Form.Control type="text" placeholder="Enter Zip Code" />
            </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <FloatingLabel controlId="floatingInput" label="Phone Number">
          <Form.Control type="text" placeholder="Enter Phone Number" />
            </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel controlId="floatingInput" label="Email">
          <Form.Control type="email" placeholder="Enter Email" />
            </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEducation">
          <FloatingLabel controlId="floatingInput" label="Education">
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Enter Education"
            rows={3}
          />
            </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicWorkExperience">
          <FloatingLabel controlId="floatingInput" label="Work Experience">
          <Form.Control type="text" placeholder="Enter Work Experience" />
            </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSkills">
          <FloatingLabel controlId="floatingInput" label="Skills">
          <Form.Control type="text" placeholder="Enter Skills" />
            </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicReferences">
          <FloatingLabel controlId="floatingInput" label="References">
          <Form.Control type="text" placeholder="Enter References" />
            </FloatingLabel>
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
