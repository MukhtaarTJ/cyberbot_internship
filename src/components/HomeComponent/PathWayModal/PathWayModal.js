import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PathWay from "../../AboutComponent/PathWay/PathWay";
import styles from "./PathWayModal.module.css";

const PathWayModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.learn_button_layout}>
        <Button
          variant="primary"
          onClick={handleShow}
          className={styles.learn_button}>
          Learn More
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} animation={false} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <PathWay />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PathWayModal;
