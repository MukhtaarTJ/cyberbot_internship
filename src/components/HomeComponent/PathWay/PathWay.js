import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./PathWay.module.css";
import PathWayModal from "../PathWayModal/PathWayModal";
import EntrepreneurshipModal from "../EntrepreneurshipModal/EntrePreneurshipModal";

const PathWay = () => {
  return (
    <div>
      <Container className={styles.container} fluid>
        <Row className={styles.pathway_container}>
          <Col lg={6} sm={12}>
            <div className={styles.career_starter_card}>
              <div className={styles.header_layout}>
                <p className={styles.header_text}>
                  {" "}
                  PROFESSIONAL
                  <br /> PATHWAY
                  <br />
                  <span className="fs-4 fw-medium pt-0 text-white"> Internships. </span>
                  <br />
                  <p className="fs-6 text-uppercase fw-medium pt-0 text-white">(
                   <span style={{textDecoration:"line-through", color:"white"}}>$120</span> Offered At $15 Through Bistrapay)
                  </p>
                </p>
              </div>
              <div className={styles.advert_layout}>
                <p className={styles.advert_text}>
                  The 501k Professional pathway Internship Bootcamp is aimed at
                  tech professionals looking to gain experience working with
                  teams
                </p>
              </div>
              <div className={`${styles.advert_list_layout}`}>
                <ul>
                  <li>3 weekly mentor-ship live classes</li>
                  <li>Weekly projects/Portofolio development</li>
                  <li>Real-time-teams & product-led projects</li>
                  <li>Opportunities for real-time job placements</li>
                  <li>Recommendation Letter</li>
                </ul>
              </div>
              <div className={styles.learn_button_layout}>
                <PathWayModal/>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className={styles.entrepreneurship_card}>
              <div className={styles.header_layout}>
                <p className={styles.header_text}>
                  {" "}
                  STARTUPS/-
                  <br /> ENTREPRENEURSHIP
                  <br />
                  PROGRAM.
                  <br />
                  <p className="fs-6 text-capitalize fw-medium pt-0 text-white">
                    (<span style={{textDecoration:"line-through", color:"white"}}>$150</span> offered at $130 Through Bistrapay)
                  </p>
                </p>
              </div>
              <div className={styles.advert_layout}>
                <p className={styles.advert_text}>
                  The 501k Internship startups/Entrepreneurs Bootcamp is aimed
                  at innovative tech-stars looking to startup and launch
                  products.
                </p>
              </div>
              <div className={`${styles.advert_list_layout}`}>
                <ul>
                  <li>Idea/innovation assistance(documentation)</li>
                  <li>Software development guidance & training.</li>
                  <li>Free MVP development for entrepreneurs.</li>
                  <li>Free Legal, financial & product management expertise.</li>
                  <li>Guided assistance through pitch and Launch phase.</li>
                  <li>Technical team building & recruiting phase.</li>
                  <li>Open opportunities to partner with co-founders startups and other startup leaders.</li>
                </ul>
              </div>
              <div className={styles.learn_button_layout}>
                {/* <button className={styles.learn_button}>Learn more</button> */}
                <EntrepreneurshipModal/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PathWay;
