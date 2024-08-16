import "../Education/education.css";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
function Education() {
  return (
    <>
      <Header />
      <section className="education" id="education">
        <h2 className="education-heading">Education</h2>
        <div className="timeline-items">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2019</div>
          <div className="timeline-content">
            <h3>Secondary Schooling</h3>
            <p>
              I done my Secondary Schooling in Achariya Siskha Mandir at
              Pondicherry and passout in the year of 2019 with{" "}
              <i style={{ color: "black", fontWeight: "800" }}>
                70% percentage.
              </i>
            </p>
          </div>
        </div>

        <div className="timeline-items">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2021</div>
          <div className="timeline-content-left">
            <h3>Higher Secondary Schooling</h3>
            <p>
              I done my Higher Secondary Schooling in Achariya Siskha Mandir at
              Pondicherry and passout in the year of 2021 with{" "}
              <i style={{ color: "black", fontWeight: "800" }}>
                75% percentage.
              </i>
            </p>
          </div>
        </div>

        <div className="timeline-items">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2021-2025</div>
          <div className="timeline-content">
            <h3>Undergraduate Degree</h3>
            <p>
              I'm currently pursuing my B.Tech Artificial Intelligence And Data
              Science degree in Sri Sairam Engineering College,Chennai and I
              will be passing out in the year of 2025. <br />
              <i style={{ color: "black", fontWeight: "800" }}>CGPA:8.0</i>
            </p>
          </div>
        </div>

        <div className="timeline-items">
          <div className="timeline-dot"> </div>
          <div className="timeline-date">2023</div>
          <div className="timeline-content-left">
            <h3>Internship-1</h3>
            <p>
              I done my Internship in APJ Dream Company and its a startup
              Company where its successfully running by{" "}
              <i style={{ color: "black", fontWeight: "800" }}>
                Dr.Venkatesan Chandisekar (Chief Technical Officer)
              </i>{" "}
              where i learned a Full-stack development course in period of 6
              months
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Education;
