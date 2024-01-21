import React from "react";
import styles from "./Header.module.css";
import { Container, Row } from "react-bootstrap";
import LearnImage from "../../../Assets/LearnImage-removebg-preview.png";
import StudentsImage from "../../../Assets/StudentsImage.png";

const Header = () => {
  return (
    <Container className={styles.container} fluid>
      <Row>
        <div className={styles.image_layout}>
          <img
            src={LearnImage}
            alt=""
            className={`img-fluid ${styles.learn_image}`}
          />
          <img
            src={StudentsImage}
            alt=""
            className={`img-fluid ${styles.student_image}`}
          />
        </div>
        <div className={styles.text_layout}>
          <p className={styles.text}>
            Tech always seems <br/> complex, but we can <br/> get you started at <span className={styles.span_text}>ZERO COST</span> 
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default Header;
