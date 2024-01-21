import React from "react";
import styles from "./Footer.module.css";
import { Container, Col, Row } from "react-bootstrap";
import BackgroundLogo from "../../../Assets/newfooterlogo.png";
import envelope from "../../../Assets/envelope.png";
import whatsapp from "../../../Assets/whatsapp.png";
import linkedin from "../../../Assets/linkdn.png";
import twitter from "../../../Assets/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className={styles.container}>
      <Row>
       
      </Row>
      <div className={styles.footer_contents}>
        <div className={styles.first_list}>
          <img src={BackgroundLogo} alt="" className={styles.background_logo} />
          <ul style={{ color: "white" }}>
            <li> <Link to="/" className={styles.link}> Home </Link></li>
            <li> <Link to="/contact" className={styles.link}> Contact Us </Link></li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div>
          <div className={styles.second_list}>
            <ul style={{ color: "white" }}>
              <li><Link to="/about" className={styles.link}>About Us </Link></li>
              <li>Our Internship</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.third_list}>
           <a><img src={envelope} alt="" /></a> 
            <img src={twitter} alt="" />
            <a href="https://www.linkedin.com/company/product-square-technologies/" className={styles.link}> <img src={linkedin} alt="" /></a>
            {/* <img src={whatsapp} alt="" /> */}
          </div>
          <p style={{color:"white", padding:"2rem"}}>@Productsquare</p>

        </div>
      </div>
    </Container>
  );
};

export default Footer;
