import React from "react";
import "./step-one.css";
import { useContext } from "react";
import RegisterContext from "../../../contexts/register-context";
import { useState } from "react";
import logoss from "../assets/image 3.svg";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default function StepOne() {
  const [validationErrors, setValidationErrors] = useState({});

  const { data, setData, step, setStep } = useContext(RegisterContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!data.first_name.trim()) {
      errors.first_name = "First name is required";
    }

    if (!data.last_name.trim()) {
      errors.last_name = "Last name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailRegex.test(data.email)) {
      errors.email = "Valid email address is required";
    }

    const phoneRegex = /^\d{11}$/;
    if (!data.mobile_number.trim() || !phoneRegex.test(data.mobile_number)) {
      errors.mobile_number = "Valid 11-digit phone number is required";
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    }
  };

  return (
    <div className="container">
      <Row>
      <div className="main-box">
        <img src={logoss} alt="" srcset="" />
        <form onSubmit={handleSubmit} className="main">
          <Col className="">
          <div className="text">
            <h2>
              Get Started For <span>Free</span>
            </h2>
            <p>Enter your details to create a new Account. </p>
            <a href="#home">Form Takes Less Than 3 Minutes </a>
            <br />
            <button className="apply-btn">APPLY NOW</button>
          </div>
          </Col>
          <div className="form-box">
            <div className="form">
              <div className="input">
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter First Name"
                  value={data.first_name}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, first_name: e.target.value }))
                  }
                />
                {validationErrors.first_name && (
                  <span className="error">{validationErrors.first_name}</span>
                )}
              </div>

              <div className="input">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter Last Name"
                  value={data.last_name}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, last_name: e.target.value }))
                  }
                />
                {validationErrors.last_name && (
                  <span className="error">{validationErrors.last_name}</span>
                )}
              </div>

              <div className="input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email Address"
                  value={data.email}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                {validationErrors.email && (
                  <span className="error">{validationErrors.email}</span>
                )}
              </div>

              <div className="input">
                <label htmlFor="phone" style={{whiteSpace:"nowrap"}}>Phone Number</label>
                <input
                  type="number"
                  id="phone"
                  placeholder="Enter Phone Number"
                  value={data.mobile_number}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      mobile_number: e.target.value,
                    }))
                  }
                />
                {validationErrors.mobile_number && (
                  <span className="error">
                    {validationErrors.mobile_number}
                  </span>
                )}
              </div>
            </div>

            <div className="stepp">
              {/* <button onClick={() => setStep(step - 1)}>Previous</button> */}
              <Link to="/" className="prev-link">
                PREV
              </Link>
              <button type="submit" className="pop">
                NEXT
              </button>
            </div>
          </div>
        </form>
      </div>
      </Row>
    </div>
  );
}
