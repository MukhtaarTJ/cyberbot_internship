import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CareerStarter from '../../AboutComponent/CareerStarter/CareerStarter';
import styles from "./CareerStarterModal.module.css"

const CareerStarterModal =()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className={styles.learn_button_layout}>
      <Button variant="primary" onClick={handleShow} className={styles.learn_button}>
        Learn More
      </Button>
      </div>
      <Modal show={show} onHide={handleClose} animation={false} size='xl'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <CareerStarter/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CareerStarterModal;