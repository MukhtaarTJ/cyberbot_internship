import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StartUps from "../../AboutComponent/StartUps/StartUps"
import styles from "./EntrepreneurshipModal.module.css"

const EntrepreneurshipModal =()=> {
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
            <StartUps/>
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

export default EntrepreneurshipModal;