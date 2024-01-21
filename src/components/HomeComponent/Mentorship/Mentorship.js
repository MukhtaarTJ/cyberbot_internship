import { Col, Container, Row } from "react-bootstrap";
import styles from "./Mentorship.module.css";
import React from "react";
import FirstMentor from "../../../Assets/FirstMentor.png";
import SecondMentor from "../../../Assets/SecondMentor.png";
import ThirdMentor from "../../../Assets/ThirdMentor.png";
import { FaArrowRight } from "react-icons/fa6";

const Mentorship = () => {
  return (
    <Container className={styles.container} id="mentorship">
      <Col>
        <h1 className={styles.header_text}>
          Looking for a Mentor <span style={{ color: "black" }}>?</span>
        </h1>
        <h1 className={styles.bottom_text}>
          <span style={{ color: "#b57cd8", fontWeight: "700" }}>501K</span> is
          the easiest platform to find a mentor. free for a lifetime of guided
          assistance
        </h1>
      </Col>

      <Row className="mt-5">
        <Col sm={12} className={styles.mentor_column}>
          <div style={{}}>
            <img src={FirstMentor} alt="" />
            <p className={styles.mentor_text}>
              Looking back, I can confidently say that the 501k
              Startup/Entrepreneurs Program offered by Product Square has been a
              game-changer in my entrepreneurial journey.
              <br />{" "}
              <span className="fw-bold text-dark"> Joe fox, Canada.</span>
            </p>
          </div>
        </Col>
        <Col sm={12} className={styles.mentor_column}>
          <div style={{}}>
            <img src={SecondMentor} alt="" />
            <p className={styles.mentor_text}>
              Today, I am proud to say that my startup thrives, thanks to the
              skills and knowledge I acquired during the 501k
              Startup/Entrepreneurs Program. 
              <br /> <span className="fw-bold text-dark"> Isreal Ndu,.</span>
            </p>
          </div>
        </Col>
        <Col sm={12} className={styles.mentor_column}>
          <div style={{}}>
            <img src={ThirdMentor} alt="" />
            <p className={styles.mentor_text}>
              I am immensely grateful to Product Square for offering this
              program and providing the guidance and support I needed to
              succeed through commitment. 
              <br />{" "}
              <span className="fw-bold text-dark">  Nancy Nmanwe, Lagos.</span>
            </p>
          </div>
        </Col>
        <div className={styles.meet_mentor}>
          <span className={styles.meet_mentor_text}>
            meet a mentor <FaArrowRight />
          </span>
        </div>
      </Row>
    </Container>
  );
};

export default Mentorship;
