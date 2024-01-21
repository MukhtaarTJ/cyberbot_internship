import React from "react";
import styles from "./PathWay.module.css";
import { Container, Row, Col } from "react-bootstrap";
import PathwayImg from "../../../Assets/PathwayImage.png";
import { Link } from "react-router-dom";
const PathWay = () => {
  return (
    <Container className={styles.container} fluid>
      <Row className={` ${styles.pathway_container}`}>
        <Col lg={6} sm={12} order={2}>
          <div className={styles.pathway_img_layout}>
            <img src={PathwayImg} alt="" className={styles.pathway_image} />
            <div className={styles.image_bar}></div>
            <div className={styles.btn_layout}>
              <Link to="/register" className={styles.btn}>sign up</Link>
            </div>
          </div>
        </Col>
        <Col lg={6} sm={12} order={1}>
          <div className={styles.text_layout}>
            <div className={styles.top_text_layout}>
              <p className={styles.top_text}>
                PROFESSIONAL PATHWAY Internships.
              </p>
              <br />
             
            </div>
            <div >
              <p className={styles.bottom_text}>($20 Offered at $15 through Bistrapay)</p>
              </div>
            <div className={styles.advert_layout}>
              <p className={styles.advert}>
                The 501k Professional pathway Internship Bootcamp is aimed at
                tech professionals looking to gain experience working with teams
              </p>
            </div>
            <div className={styles.list_layout}>
              <ul>
                <li>3 weekly mentor-ship live classes</li>
                <li>weekliy projects/portfolio development</li>
                <li>Recommendation Letter</li>
                <li>Real-time-teams & product-led projects and job placements</li>
                <li>Discount to join the startups program automatically</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PathWay;
