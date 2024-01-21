import React from "react";
import styles from "./Testimonies.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Brendan from "../../../Assets/Brendan.png"
import Orezi from "../../../Assets/Orezi.png"
import Deneal from "../../../Assets/Deneal.png"
import Oswald from "../../../Assets/Oswald.png"
const Testimonies = () => {
  return (
    <Container className={`mx-auto  ${styles.container}`} fluid>
      <Row className={`mt-5 ${styles.cheers_container}`} >
        <Col lg={4} sm={12} >
          <div className={`h-100  d-flex flex-column justify-content-between ${styles.cheers_text_layout}`}>
            <p className={styles.cheers_text}>
              Cheers ! to our amazing Interns who love what we do !
            </p>
            <div className={`w-100 mb-5 ${styles.testimony_container}`}>
              <div 
                className=" ml-auto d-block mb-5"
                style={{ width: "fit-content", marginLeft: "auto" }}>
                <img src={Oswald} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={8} sm={12}>
          <div>
            <div className={`w-100 ${styles.testimony_container}`}>
              <div
                className=" ml-auto d-block"
                style={{ width: "fit-content", marginLeft: "auto" }}>
                <img src={Brendan} alt="" className="img-fluid" />
              </div>
            </div>
            <div className={`w-100 ${styles.testimony_container}`}>
              <div
                className=" ml-auto d-block"
                style={{ width: "fit-content", }}>
                <img src={Orezi} alt="" className="img-fluid" />
              </div>
            </div>
            <div className={`w-100 ${styles.testimony_container}`}>
              <div
                className=" ml-auto d-block"
                style={{ width: "fit-content", marginLeft: "auto" }}>
                <img src={Deneal} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonies;
