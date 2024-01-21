import React from "react";
import styles from "./StartUps.module.css";
import { Container, Row, Col } from "react-bootstrap";
import StartupImage from "../../../Assets/StartupImg.png";
import { Link } from "react-router-dom";

const CareerStarter = () => {
  return (
    <Container className={styles.startup_container} fluid>
      <Row className="px-5 py-5">
        <Col lg={6} sm={12} order={2}>
          <div className={styles.text_layout}>
            <div className={styles.top_text_layout}>
              <p className={styles.top_text}>
                STARTUPS/ ENTREPRENEURSHIP <span className={styles.span_text}> Programs. </span>{" "}
              </p>
              <p className={styles.bottom_text}>( <span className={styles.bottom_span}>$150</span> Offered at $130 through Bistrapay)</p>
            </div>
            <div className={styles.advert_layout}>
              <p className={styles.advert}>
                The 501k Internship startups/Entrepreneurs Bootcamp is aimed at
                innovative tech-stars looking to startup and launch products.{" "}
              </p>
            </div>
            <div className={styles.list_layout}>
              <ul>
                <li>Idea/innovation assistance(documentation)</li>
                <li>Software development guidance & training.</li>
                <li>Free MVP development for entrepreneurs.</li>
                <li>Free Legal, financial & product management expertise.</li>
                <li>
                Guided assistance through pitch and Launch phase.
                </li>
                <li>Technical team building & recruiting phase.</li>
                {/* <li>Open opportunities to partner with co-founders startups and other startup leaders.</li> */}
              </ul>
            </div>
          </div>
        </Col>
        <Col lg={6} sm={12} order={1}>
          <div className={styles.startup_img_layout}>
            <img src={StartupImage} alt="" className={styles.startup_image} />
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
