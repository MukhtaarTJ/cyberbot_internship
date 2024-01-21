import React, { cloneElement } from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from "./Header.module.css"
import CenterImage from "../../../Assets/CenterImage.png"
const Header = () => {
  return (
    <div>
        <Container fluid className={styles.container}>
            <Row>
                <div className={styles.image_container}>
                    <img src={CenterImage} alt="" className={styles.center_image}/>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Header
