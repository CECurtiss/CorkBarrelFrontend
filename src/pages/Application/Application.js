import React from "react";
import "./Application.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Application = () => {
  return (
    <div className="formContainer">
      <h1>Online Application</h1>
      <Form>
        <Row>
          <Form.Group as={Col} className="mb-5" controlId="formBasicFirstName">
            <FloatingLabel controlId="floatingInput" label="First Name">
              <Form.Control type="text" placeholder="Enter First Name" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} className="mb-5" controlId="formBasicLastName">
            <FloatingLabel controlId="floatingInput" label="Last Name">
              <Form.Control type="text" placeholder="Enter Last Name" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} className="mb-5" controlId="formBasicDOB">
            <FloatingLabel controlId="floatingInput" label="Date of Birth">
              <Form.Control type="date" />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="mb-5" controlId="formBasicEmail">
            <FloatingLabel controlId="floatingInput" label="Email">
              <Form.Control type="email" placeholder="Enter Email" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} className="mb-5" controlId="formBasicPhone">
            <FloatingLabel controlId="floatingInput" label="Phone Number">
              <Form.Control type="text" placeholder="Enter Phone Number" />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <FloatingLabel controlId="floatingInput" label="Address">
                <Form.Control type="text" placeholder="Enter Address" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicAddress2">
              <FloatingLabel controlId="floatingInput" label="Address 2">
                <Form.Control type="text" placeholder="Enter Address 2" />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col>
            <Row>
              <Form.Group
                as={Col}
                className="mt-4 mb-3"
                controlId="formBasicCity"
              >
                <FloatingLabel controlId="floatingInput" label="City">
                  <Form.Control type="text" placeholder="Enter City" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                as={Col}
                className="mt-4 mb-3"
                controlId="formBasicState"
              >
                <FloatingLabel controlId="floatingInput" label="State">
                  <Form.Control type="text" placeholder="Enter State" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                as={Col}
                className="mt-4 mb-5"
                controlId="formBasicZip"
              >
                <FloatingLabel controlId="floatingInput" label="Zip Code">
                  <Form.Control type="text" placeholder="Enter Zip Code" />
                </FloatingLabel>
              </Form.Group>
            </Row>
          </Col>
        </Row>

        <Form.Group className="mb-5" controlId="formBasicEducation">
          <FloatingLabel controlId="floatingInput" label="Education">
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              placeholder="Enter Education"
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicWorkExperience">
          <FloatingLabel controlId="floatingInput" label="Work Experience">
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              placeholder="Enter Work Experience"
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicSkills">
          <FloatingLabel controlId="floatingInput" label="Skills">
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              placeholder="Enter Skills"
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicReferences">
          <FloatingLabel controlId="floatingInput" label="References">
            <Form.Control
              as="textarea"
              row={3}
              type="text"
              placeholder="Enter References"
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group
          className="availabilityCheckbox mb-3"
          controlId="formBasicAvailability"
        >
          <Row>
            <Form.Label className="availabilityHeader">
              Availability (Check all that apply)
            </Form.Label>
          </Row>
          <Row>
            <Col className="d-flex flex-column align-items-center">
              <Form.Check type="checkbox" label="Monday AM" />
              <Form.Check type="checkbox" label="Monday PM" />
              <Form.Check type="checkbox" label="Tuesday AM" />
              <Form.Check type="checkbox" label="Tuesday PM" />
              <Form.Check type="checkbox" label="Wednesday AM" />
              <Form.Check type="checkbox" label="Wednesday PM" />
              <Form.Check type="checkbox" label="Thursday AM" />
              <Form.Check type="checkbox" label="Thursday PM" />
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <Form.Check type="checkbox" label="Friday AM" />
              <Form.Check type="checkbox" label="Friday PM" />
              <Form.Check type="checkbox" label="Saturday AM" />
              <Form.Check type="checkbox" label="Saturday PM" />
              <Form.Check type="checkbox" label="Sunday AM" />
              <Form.Check type="checkbox" label="Sunday PM" />
            </Col>
          </Row>
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
