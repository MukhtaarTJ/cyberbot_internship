import React from "react";
import "./body.css";
import cbg from "../../../Assets/contact.png";
function Body() {
  return (
    <div className="Container">
      <div className="mainn">
        <div className="inner">
          <h4>Hey, there!!!</h4>
          <div className="avater">
            <img src={cbg} />
            <p>
              i’m oluwaseun, i can answer any question you might have. Try me!
            </p>
          </div>
        </div>

        <div className="non">
          <div className="name">
            <label htmlFor="lastname" className="label">
              First Name
            </label>
            <input type="text" id="lastname" />
          </div>

          <div className="name">
            <label htmlFor="lastname" className="label">
              Last Name
            </label>
            <input type="text" id="lastname" />
          </div>

          <div className="thoughts">
            <label htmlFor="" className="label">
              Share your thoughts
            </label>
            <br />
            <textarea name="" />
          </div>

          <div className="pick">
            <input type="checkbox" />
            <div className="text_layout">
              <p className="data">
                I agree to receive other <br/>communications from 501k internship
              </p>
            </div>
          </div>

          <div className="pick">
            <input type="checkbox" />
            <div className="text_layout">
              <p className="data">
                I agree to allow 501k internship<br/> to store and process my
                personal data
              </p>
            </div>
          </div>

          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
