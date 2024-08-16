import "../Contact/contact.css";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const [firstname, setFirstName] = useState("");
  const [firstnameError, setFirstNameError] = useState(false);
  const [lastname, setLastName] = useState("");
  const [lastnameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [validEmailError, setValidEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateLogin = () => {
    let emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let phonePattern = /^\d{10}$/;

    setFirstNameError(!firstname);
    setLastNameError(!lastname);
    setEmailError(!email);
    setValidEmailError(email && !emailPattern.test(email));
    setPhoneNumberError(!phoneNumber || !phonePattern.test(phoneNumber));
    setMessageError(!message);

    if (
      firstname &&
      lastname &&
      email &&
      emailPattern.test(email) &&
      phoneNumber &&
      phonePattern.test(phoneNumber) &&
      message
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
          const formData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phoneNumber: phoneNumber,
            message: message,
          };
          axios
            .post("http://localhost:3000/student/addStudentList", formData)
            .then((response) => {
              console.log(response.data); // Check response from backend
              // Reset form fields if needed
              setFirstName("");
              setLastName("");
              setEmail("");
              setPhoneNumber("");
              setMessage("");
            })
            .catch((error) => {
              console.error("Error adding student:", error);
              Swal.fire("Error!", "Failed to save", "error");
            });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  const handleInput = (event) => {
    const { id, value } = event.target;
    if (id === "firstname") setFirstName(value);
    if (id === "lastname") setLastName(value);
    if (id === "email") setEmail(value);
    if (id === "phoneNumber") setPhoneNumber(value);
    if (id === "message") setMessage(value);
  };

  return (
    <>
      <Header />
      <section className="contact-submit-back">
        <Card className="contact-card-background">
          <Card.Body className="contact-card-body">
            <Form className="contact-detail-form">
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="contact-form-label">
                      First Name<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your First Name"
                      value={firstname}
                      id="firstname"
                      onChange={handleInput}
                      className={firstnameError ? "contact-error-input" : ""}
                    />
                    {firstnameError && (
                      <label className="text-danger contact-error-message">
                        First Name is Required
                        <span className="text-danger">*</span>
                      </label>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="contact-form-label">
                      Last Name<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Last Name"
                      value={lastname}
                      id="lastname"
                      onChange={handleInput}
                      className={lastnameError ? "contact-error-input" : ""}
                    />
                    {lastnameError && (
                      <label className="text-danger contact-error-message">
                        Last Name is Required
                        <span className="text-danger">*</span>
                      </label>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">
                      Email Address<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      id="email"
                      onChange={handleInput}
                      className={
                        emailError || validEmailError
                          ? "contact-error-input"
                          : ""
                      }
                    />
                    <Form.Text className="text-muted contact-form-text">
                      We'll never share your email with anyone else.
                    </Form.Text>
                    <br></br>
                    {emailError && (
                      <label className="text-danger contact-error-message">
                        Email Address is Required
                        <span className="text-danger">*</span>
                      </label>
                    )}
                    {validEmailError && (
                      <label className="text-danger contact-error-message">
                        Enter a Valid Email Address
                        <span className="text-danger">*</span>
                      </label>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">
                      Phone Number<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      id="phoneNumber"
                      onChange={handleInput}
                      className={phoneNumberError ? "contact-error-input" : ""}
                    />
                    {phoneNumberError && (
                      <label className="text-danger contact-error-message">
                        Phone Number is Required and must be 10 digits
                        <span className="text-danger">*</span>
                      </label>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">
                      Message<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter your message"
                      value={message}
                      id="message"
                      onChange={handleInput}
                      className={messageError ? "contact-error-input" : ""}
                    />
                    {messageError && (
                      <label className="text-danger contact-error-message">
                        Message is Required
                        <span className="text-danger">*</span>
                      </label>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  className="contact-para-muted"
                  type="checkbox"
                  label="I confirm that the information given in this form is true"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                onClick={validateLogin}
                className="contact-detail-btn"
              >
                Send Message
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
