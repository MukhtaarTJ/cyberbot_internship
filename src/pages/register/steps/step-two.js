import React from "react";
import { useContext } from "react";
import RegisterContext from "../../../contexts/register-context";
import { useState } from "react";
import "./step-one.css";

import logoss from "../assets/image 3.svg";
import { Row } from "react-bootstrap";

export default function StepTwo() {
  const { data, setData, step, setStep } = useContext(RegisterContext);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!data.username.trim()) {
      errors.username = "Preferred username is required";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!data.internship_type) {
      errors.internship_type = "Please select a program";
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    }
  };
  return (
    <div>
      {" "}
      <div className="container">
        <Row>
          <div className="main-box">
            <img src={logoss} alt="" srcset="" />
            <form onSubmit={handleSubmit} className="main">
              <div className="text">
                <h2>
                  Hi, Welcome <span>{data.last_name}</span>
                </h2>
                <p>Kindly choose a preferred password and a program </p>
              </div>
              <div className="form-box">
                <div className="form">
                  <div className="input">
                    <label htmlFor="name" style={{whiteSpace:"nowrap"}}>preferred username</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter preferred username"
                      value={data.username}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          username: e.target.value,
                        }))
                      }
                    />
                    {validationErrors.username && (
                      <span className="error">{validationErrors.username}</span>
                    )}
                  </div>

                  <div className="input">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                      value={data.password}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                    {validationErrors.password && (
                      <span className="error">{validationErrors.password}</span>
                    )}
                  </div>

                  <div className="input">
                    <label htmlFor="password" style={{whiteSpace:"nowrap"}}>confirm password</label>
                    <input
                      type="password"
                      id="confirm-password"
                      placeholder="confirm password"
                      value={data.fir}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          confirmPassword: e.target.value,
                        }))
                      }
                    />
                    {validationErrors.confirmPassword && (
                      <span className="error">
                        {validationErrors.confirmPassword}
                      </span>
                    )}
                  </div>

                  <div className="input">
                    <label htmlFor="phone" style={{whiteSpace:"nowrap"}}>select Program</label>
                    <select
                    style={{width:"210%", maxWidth:"360px"}}
                    className="select-program"
                      name="select-program"
                      id="select-program"
                      defaultValue={""}
                      value={data.internship_type}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          internship_type: e.target.value,
                        }))
                      }
                    >
                      <option value="" disabled hidden>
                        Select Your Program
                      </option>
                      <option value="Career Starter (FREE)">
                        Career Starter
                      </option>
                      <option value="Professional Pathway">
                        Proffesional Pathway
                      </option>
                      <option value="Startup/Enterpreneurship">
                        Startup/Enterprenuership
                      </option>
                    </select>
                    {validationErrors.internship_type && (
                      <span className="error">
                        {validationErrors.internship_type}
                      </span>
                    )}
                  </div>
                </div>
                <div className="stepp">
                  <button
                    onClick={() => setStep(step - 1)}
                    className="prev-link"
                  >
                    PREV
                  </button>
                  <button type="submit" className="pop">
                    NEXT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Row>
      </div>
    </div>
  );
}
