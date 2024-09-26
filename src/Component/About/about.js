import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

import { ImPointRight } from "react-icons/im";
import Techstack from "./techstack";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Toolstack from "./toolstack";
import "../About/about.css";
function About() {
  return (
    <>
      <Header />
      <section>
        <Container fluid className="about-section">
          <Container>
            <Row>
              <Col md={8}>
                <h1 className="about-head-text-1">
                  Know Who <span className="red-1">I"M</span>
                </h1>
                <p className="about-head-body">
                  Hi Everyone, I am Elamugilan from Villupuram, India. Currently
                  I'm pursing
                  <br />
                  my Final Year B.Tech Artificial Intelligence and Data Science
                  in <br />
                  Sri Sairam Engineering College,
                  <br />
                  Chennai.
                  <br />
                  <br />
                  Apart from coding, some other activities that I love to do!
                </p>
                <ul>
                  <li className="about-activity">
                    <ImPointRight /> Creating React Web-pages
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Exploring
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Travelling
                  </li>
                </ul>
              </Col>
              <Col md={4} className="myAvtar-1">
                <Tilt>
                  <img
                    src="Assests/Images/banner-4.png"
                    className="img-fluid myavatar-1"
                    alt="avatar"
                  />
                </Tilt>
              </Col>
            </Row>
            <h1 className="project-heading mt-5 text-center">
              Professional <strong className="purple">Skillset </strong>
            </h1>
            <Techstack />
            <h1 className="project-heading mt-5 text-center">
              <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack />
          </Container>
        </Container>
      </section>
      <Footer />
    </>
  );
}
export default About;
