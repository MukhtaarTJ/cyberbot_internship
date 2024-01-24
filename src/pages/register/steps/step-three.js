import React, { useContext, useState } from "react";
import { countries } from 'countries-list';
import RegisterContext from "../../../contexts/register-context";
import logoss from "../assets/image 3.svg";
import "./step-one.css";
import { Row } from "react-bootstrap";

export default function StepThree() {
  const { data, setData, step, setStep } = useContext(RegisterContext);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const errors = {};

    if (!data.experience) {
      errors.experience = "Please select your level of experience";
    }

    if (!data.home_address.trim()) {
      errors.home_address = "home_address is required";
    }

    if (!data.country) {
      errors.country = "Please select your country";
    }

    if (!data.city) {
      errors.city = "Please select your city";
    }

    setValidationErrors(errors);

    // If there are no errors, proceed to the next step
    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    }
  };

  return (
    <div className="container">
      <Row>
        <div className="main-box">
          <img src={logoss} alt="" />
          <form onSubmit={handleSubmit} className="main">
            <div className="text">
              <h2>
                Hi <span>{data.last_name}</span>
              </h2>
              <p>
                kindly Continue with your application.<br/>
                we would love to know you better.</p>
            </div>

            <div className="form-box">
              <div className="form">
                <div className="input">
                  <label htmlFor="experience-level" style={{whiteSpace:"nowrap"}}>Level of Experience</label>
                  <select
                  className="experience-select"
                    name="experience-level"
                    id="experience-level"
                    value={data.experience}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        experience: e.target.value,
                      }))
                    }
                  >
                    <option value="" hidden>
                      Select Your Experience Level
                    </option>
                    <option value="0 - 6 Months">0 - 6 Months</option>
                    <option value="6 Months - 1 Year">6 Months - 1 Year</option>
                    <option value="1 Year - Above">1 Year - Above</option>
                  </select>
                  {validationErrors.experience && (
                    <span className="error">{validationErrors.experience}</span>
                  )}
                </div>

                <div className="input">
                  <label htmlFor="home_address" style={{whiteSpace:"nowrap"}}>Home Address</label>
                  <input
                   className="home-input"
                    type="text"
                    id="home_address"
                    placeholder="Enter Home Address"
                    value={data.home_address}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        home_address: e.target.value,
                      }))
                    }
                    
                  />
                  {validationErrors.home_address && (
                    <span className="error">
                      {validationErrors.home_address}
                    </span>
                  )}
                </div>

                <div className="input">
                  <label htmlFor="country">Country</label>
                  <select
                  className="country-select"
                    name="country"
                    id="country"
                    value={data.country}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, country: e.target.value }))
                    }
                  >
                    <option value="" hidden>
                      Select Your Country
                    </option>
                    {Object.keys(countries).map((countryCode) => (
                      <option key={countryCode} value={countryCode}>
                        {countries[countryCode].name}
                      </option>
                    ))}
                  </select>
                  {validationErrors.country && (
                    <span className="error">{validationErrors.country}</span>
                  )}
                </div>

                <div className="input">
                  <label htmlFor="city">City</label>
                  
                  <input
                      type="city"
                      id="city"
                      placeholder="city"
                      value={data.city}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                    />
                  {validationErrors.city && (
                    <span className="error">{validationErrors.city}</span>
                  )}
                </div>
              </div>
              <div className="stepp">
                <button onClick={() => setStep(step - 1)} className="prev-link">
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
  );
}
