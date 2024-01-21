import React from "react";
import styles from "./Intro.module.css";
import { Container, Row, Col } from "react-bootstrap";
import PieImage from "../../../Assets/PieImage.png";
import PiePercentage from "../../../Assets/PiePercentage.png";
import FaqSection from "../../../Assets/faq-section.png"
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <Container className={styles.container} fluid>
      <Row className={styles.intro_container}>
        <Col lg={6} sm={12}>
          <div className={styles.image_container}>
          <img src={PiePercentage} alt="" className={styles.pie_percent} />
          <img
            src={PieImage}
            alt=""
            className={`img-fluid ${styles.pie_image}`}
          />
          </div>
        </Col>
        <Col lg={6} sm={12}>
          <div className={styles.intro_layout}>
            <p className={styles.intro_top_text}>
              <span style={{ fontWeight: "bolder", color: "#b57cd8" }}>
                {" "}
                Over 1000+{" "}
              </span>
              interns apply monthly.{" "}
              <span style={{ fontWeight: "bolder", color: "#b57cd8" }}>
                80%{" "}
              </span>
              are employed upon completion, while{" "}
              <span style={{ fontWeight: "bolder", color: "#b57cd8" }}>
                {" "}
                20%{" "}
              </span>
              launch their startups.
            </p>
            <p className={styles.intro_bottom_text}>
              The 501k Internship Bootcamp provides a core technical platform
              for skill development, through concentrated internships, focused
              on product-led; user-first curriculum's and work-lab models.
            </p>
            <Link to="/register" className={styles.join_now_link}>
              join now{" "}
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <div className={styles.faq_section}>
          <img src={FaqSection} alt="" className={styles.faq_img} />
        </div>
      </Row>
    </Container>
  );
};

export default Intro;
