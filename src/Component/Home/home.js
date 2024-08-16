import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "../../Layout/Header";
import Typing from "../typing";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Detail from "../details";
import "../Home/home.css";
import Footer from "../../Layout/Footer";

function Home() {
  return (
    <>
      <Header />
      <section className="banner">
        <div className="background">
          <img
            src="../Assests/Images/background-image-1.png"
            className="background-image"
          />
          <div className="dynamic-typing">
            <Typing />
          </div>
        </div>
        <Container fluid className="home-about-section">
          <Container>
            <Row>
              <Col md={8}>
                <h1 style={{ fontSize: "50px" }} className="about-head-text">
                  LET ME <span className="red">INTRODUCE</span> MYSELF
                </h1>
                <p className="about-head-body">
                  I fell in love with programming and I have at least learnt
                  something, I think… 🤷‍♂️
                  <br />
                  <br />I am fluent in classics like
                  <i>
                    <b className="red"> C++, Javascript and Go. </b>
                  </i>
                  <br />
                  <br />
                  My field of Interest's are building new &nbsp;
                  <i>
                    <b className="red">Web Technologies and Products </b> and
                    also in areas related to <b className="red">Blockchain.</b>
                  </i>
                  <br />
                  <br />
                  Whenever possible, I also apply my passion for developing
                  products with <b className="red">Node.js</b> and
                  <i>
                    <b className="red">
                      {" "}
                      Modern Javascript Library and Frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="red"> React.js and Next.js</b>
                  </i>
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img
                    src="Assests/Images/myImg.svg"
                    className="img-fluid myavatar"
                    alt="avatar"
                  />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1 className="about-head">FIND ME ON</h1>
                <p className="about-body">
                  Feel free to <span className="red">__connect__</span>
                  {"   "}
                  with me
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/elamugilan/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/__its_me_mg_"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
        <div className="in-touch">
          <img
            src="../Assests/Images/touch-in.png"
            className="touch-in"
            style={{ marginLeft: "50px" }}
          />
          <Detail />
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Home;
