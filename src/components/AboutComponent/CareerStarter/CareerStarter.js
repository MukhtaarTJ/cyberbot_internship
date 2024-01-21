import React from "react";
import styles from "./CareerStarter.module.css";
import { Container, Row, Col } from "react-bootstrap";
import StartupImage from "../../../Assets/StartupImage.png"
import { Link } from "react-router-dom";
const CareerStarter = () => {
  return (
    <Container className={styles.startup_container} fluid>
      <Row className="px-5 py-5">
        <Col lg={6} sm={12} order={2}>
          <div className={styles.text_layout}>
            <div className={styles.top_text_layout}>
              <p className={styles.top_text}>
                CAREER-STARTER Internships (Free)
              </p>
            </div>
            <div className={styles.advert_layout}>
              <p className={styles.advert}>
                The 501k Internship Bootcamp is aimed at tech starters looking
                to gain experience working with teams and gaining practical
                experience.
              </p>
            </div>
            <div className={styles.list_layout}>
                <ul>
                    <li>1 real-time-team project</li>
                    <li>weekly mentor-ship (Once every week)</li>
                    <li>Certification of participation</li>
                    <li>Team Building & individual networking</li>
                    <li>Discount  to join the next level internship automatically</li>
                </ul>
            </div>
          </div>
        </Col>
        <Col lg={6} sm={12} order={1}>
          <div className={styles.startup_img_layout}>
            <img src={StartupImage} alt=""className={styles.startup_image} />
            <div className={styles.image_bar}></div>
            <div className={styles.btn_layout}>
                <Link to="/register" className={styles.btn}>sign up</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CareerStarter;
