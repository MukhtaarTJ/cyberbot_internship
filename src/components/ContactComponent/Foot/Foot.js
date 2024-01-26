import React from "react";
import styles from "./Footer.module.css";
import { Container, Col, Row } from "react-bootstrap";
import BackgroundLogo from "../../../Assets/newfooterlogo.png";
import envelope from "../../../Assets/envelope.png";
import twitter from "../../../Assets/twitter.png";
import instagram from "../../../Assets/instagram.png";
import linkedin from "../../../Assets/linkdn.png";
import tiktok from "../../../Assets/tiktok.png";
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
              <a href="mailto@productsquare.tech" className={styles.link}> <img src={envelope} alt="" /></a>
              <a href="https://x.com/productsquare1?s=21" className={styles.link}> <img src={twitter} alt="" /></a>
              <a href="https://www.linkedin.com/company/product-square-technologies/" className={styles.link}> <img src={linkedin} alt="" /></a>
              <a href="https://www.instagram.com/productsquaretech/" className={styles.link}> <img src={instagram} alt="" /></a>
              <a href="https://x.com/productsquare1?s=21" className={styles.link}> <img src={tiktok} alt="" /></a>
          </div>
          <p style={{color:"white", padding:"2rem"}}>@Productsquare</p>

        </div>
      </div>
    </Container>
  );
};

export default Footer;
