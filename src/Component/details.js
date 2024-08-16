import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Detail() {
  const [firstname, setFirstName] = useState("");
  const [firstnameError, setFirstNameError] = useState(false);
  const [lastname, setLastName] = useState("");
  const [lastnameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [validEmailError, setValidEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const validateLogin = () => {
    let emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let phonePattern = /^\d{10}$/;

    setFirstNameError(!firstname);
    setLastNameError(!lastname);
    setEmailError(!email);
    setValidEmailError(email && !emailPattern.test(email));
    setPhoneNumberError(!phoneNumber || !phonePattern.test(phoneNumber));

    if (
      firstname ||
      lastname ||
      email ||
      emailPattern.test(email) ||
      phoneNumber ||
      phonePattern.test(phoneNumber)
    ) {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          let formData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phoneNumber: phoneNumber,
          };
          console.log("--------------", formData);
          axios
            .post("http://localhost:3001/student/addstudentList", formData)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  const handleInput = (event) => {
    const { id, value } = event.target;
    console.log(`Input changed: ${id} = ${value}`);
    if (id === "firstname") setFirstName(value);
    if (id === "lastname") setLastName(value);
    if (id === "email") setEmail(value);
    if (id === "phoneNumber") setPhoneNumber(value);
  };

  return (
    <section className="submit-back">
      <Card className="card-background">
        <Card.Body className="card-body">
          <Form className="detail-form">
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="form-label">
                    FirstName<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your FirstName"
                    value={firstname}
                    id="firstname"
                    onChange={handleInput}
                    className={firstnameError ? "error-input" : ""}
                  />
                  {firstnameError && (
                    <label className="text-danger">
                      Firstname is Required
                      <span className="text-danger">*</span>
                    </label>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="form-label">
                    LastName<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your LastName"
                    value={lastname}
                    id="lastname"
                    onChange={handleInput}
                    className={lastnameError ? "error-input" : ""}
                  />
                  {lastnameError && (
                    <label className="text-danger">
                      LastName is Required<span className="text-danger">*</span>
                    </label>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="form-label">
                    Email address<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    id="email"
                    onChange={handleInput}
                    className={
                      emailError || validEmailError ? "error-input" : ""
                    }
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  {emailError && (
                    <label className="text-danger">
                      E-mail Address Required
                      <span className="text-danger">*</span>
                    </label>
                  )}
                  {validEmailError && (
                    <label className="text-danger">
                      Enter the Valid E-mail Address
                      <span className="text-danger">*</span>
                    </label>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="form-label">
                    Phone Number<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    id="phoneNumber"
                    onChange={handleInput}
                    className={phoneNumberError ? "error-input" : ""}
                  />
                  {phoneNumberError && (
                    <label className="text-danger">
                      Phone Number is Required and must be 10 digits
                      <span className="text-danger">*</span>
                    </label>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                className="para-muted"
                type="checkbox"
                label="I confirm that the information given in this form is true"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={validateLogin}
              className="detail-btn"
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Detail;
