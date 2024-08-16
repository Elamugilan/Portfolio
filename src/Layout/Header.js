import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Layout/header.css";

function Header() {
  return (
    <section>
      <Navbar expand="lg" className="header">
        <Container>
          <Navbar.Brand>
            <Link to="/home" className="display-10 nav-header">
              Elamugilan
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ color: "black", backgroundColor: "white" }}
          />
          <Navbar.Collapse id="basic-navbar-nav" className="btn">
            <Nav className="header-list">
              <Nav.Link as={Link} to="/home" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/education" className="nav-link">
                Education
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;
