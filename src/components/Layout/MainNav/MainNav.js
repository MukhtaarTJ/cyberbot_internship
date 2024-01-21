import React from "react";
import styles from "./MainNav.module.css";
import { Nav, Navbar, Container,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavImg from "../../../Assets/image 2 (1).png"
const MainNav = () => {
  return (
    <>
      <Navbar expand="lg"   className={styles.my_navbar}>
        <Container  className="">
          <Navbar.Brand className={styles.navbrand}>
            <img src={NavImg} alt="" className={styles.nav_img}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:"#fff"}} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll></Nav>
            <Nav className={styles.nav_links}>
              <Link to="/" className={styles.link}>Home</Link>
              <Link to="/about" className={styles.link}>About Us</Link>
              <Link to="/contact" className={styles.link}>Contact Us</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
