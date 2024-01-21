import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Intro.module.css";
import sponsors from "../../../Assets/SponsorImage.png";
import { Link } from "react-router-dom";
import CareerStarterModal from "../CareerStarterModal/CareerStarterModal";

const Intro = () => {
  return (
    <div>
      <Container className={styles.container} fluid>
        <div className={styles.top_text_layout}>
          <h2 className={` ${styles.top_text}`}>sponsored by</h2>
        </div>
        <Row>
          <div className={styles.header_image}>
            <img
              src={sponsors}
              alt=""
              className={`img-fluid ${styles.sponsors}`}
            />
          </div>
        </Row>
        <Row className={styles.pathway_container}>
          <Col lg={6} sm={12} >
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
          <Col lg={6} sm={12} className="w-80 mx-auto">
            <div className={styles.career_starter_card}>
              <div className={styles.header_layout}>
                <p className={styles.header_text}>
                  {" "}
                  CAREER-
                  <br /> STARTER
                  <br /><span className="fs-4 fw-medium pt-0 text-white"> Internships. </span><br />
                  <span className="fs-6 text-uppercase fw-medium pt-0 text-white">
                    (free)
                  </span>
                </p>
              </div>
              <div className={styles.advert_layout}>
                <p className={styles.advert_text}>
                  The 501k Internship Bootcamp is aimed at tech starters looking
                  to gain experience working with teams and gaining practical
                  experience.
                </p>
              </div>
              <div className={`${styles.advert_list_layout}`}>
                <ul>
                  <li className={styles.my_list}>1 real-time-team project</li>
                  <li className={styles.my_list}>weekly mentor-ship (Once every week)</li>
                  <li className={styles.my_list}>Certification of perticipation</li>
                  <li className={styles.my_list}>Team Building & individual networking</li>
                </ul>
              </div>
              <div className={styles.learn_button_layout}>
                <CareerStarterModal className={styles.learn_button}/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
