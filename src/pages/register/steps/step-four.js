import React, { useContext, useState } from "react";
import axios from "axios";
import "./step-four.css";
import RegisterContext from "../../../contexts/register-context";
import { useNavigate } from "react-router-dom";

export default function StepFour() {
  const navigate = useNavigate();
  const { data, setData, step, setStep } = useContext(RegisterContext);
  const [validationErrors, setValidationErrors] = useState({});
  const [fileValidation, setFileValidation] = useState({});
  const [apiError, setApiError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const allowedTypes = ["application/pdf", "application/msword", "text/plain"];
      const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB

      if (allowedTypes.includes(file.type)) {
        if (file.size <= maxSizeInBytes) {
          setData((prev) => ({ ...prev, resume: file }));
          setFileValidation({ error: null });
        } else {
          setFileValidation({
            error: "File size exceeds the maximum allowed limit (5 MB).",
          });
        }
      } else {
        setFileValidation({
          error:
            "Invalid file type. Please upload a PDF, Word document, or plain text file.",
        });
      }
    } else {
      setData((prev) => ({ ...prev, resume: null }));
      setFileValidation({ error: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("first_name", data.first_name || "");
    formData.append("last_name", data.last_name || "");
    formData.append("email", data.email || "");
    formData.append("mobile_number", data.mobile_number || "");
    formData.append("username", data.username || "");
    formData.append("password", data.password || "");
    formData.append("internship_type", data.internship_type || "");
    formData.append("experience", data.experience || "");
    formData.append("home_address", data.home_address || "");
    formData.append("country", data.country || "");
    formData.append("city", data.city || "");
    formData.append("relevant_skill", data.relevant_skill || "");
    formData.append("commitment", data.commitment || "");
    formData.append("resume", data.resume || "");
    formData.append("purpose_of_internship", data.comment || "");
    formData.append("invite_link", data.invite_link || "");
    formData.append("recieve_update", data.recieve_update ? "Yes" : "No");
    formData.append("known", document.querySelector('input[name="known"]:checked')?.value || "Unknown");

    try {
      const response = await axios.post(
        "https://api.productsquare.tech/api/register/",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Server response:", response.data);
      navigate("/");
      window.alert(
        "Congratulations! Thank You For Filling Out Our Sign-up Form. We Will Respond To You Shortly."
      );

      console.log("Form submitted successfully!");
    } catch (error) {
      handleAxiosError(error);
    }
  };

  const handleAxiosError = (error) => {
    console.error("Axios request error:", error);

    if (axios.isAxiosError(error)) {
      console.log("Axios-specific error:", error.toJSON());

      if (error.response) {
        console.log("Status Code:", error.response.status);

        if (error.response.status === 409) {
          const responseData = error.response.data;
          if (responseData && responseData.errors) {
            window.alert(`Bad Request: ${responseData.errors.join(", ")}`);
          } else {
            window.alert("Bad Request: Please check your form data.");
          }
        } else if (error.response.status === 400) {
          window.alert("Email or username already exists, kindly change it.");
        } else {
          window.alert("An unexpected error occurred. Please try again later.");
        }
      } else if (error.request) {
        console.log("No response received from the server:", error.request);

        console.log("Request method:", error.request.method);
        console.log("Request URL:", error.request._url);
        console.log("Request headers:", error.request._headers);
        console.log("Request data:", error.request._data);

        if (error.request.withCredentials) {
          console.log("With credentials:", true);
        } else {
          console.log("With credentials:", false);
        }

        window.alert("No response received from the server. Please try again later.");
      } else {
        console.log("Unknown error:", error.message);
        window.alert("An unknown error occurred. Please try again later.");
      }
    } else {
      console.log("Error setting up the request:", error.message);
      window.alert("An error occurred while setting up the request. Please try again later.");
    }
  };

  return (
    <div className="containers">
      <div className="mat-box">
        <form onSubmit={handleSubmit} className="mat">
        <div className="studys">
            <label htmlFor="study">
              Course of study/Discipline/skill learned
            </label>
            <input
              type="text"
              id="study"
              value={data.relevant_skill}
              onChange={(e) =>
                setData((prev) => ({ ...prev, relevant_skill: e.target.value }))
              }
            />
            {validationErrors.relevant_skill && (
              <span className="error">{validationErrors.relevant_skill}</span>
            )}
          </div>

          <div className="cv">
            <div className="studyss">
              <label htmlFor="time">
                Are you willing to commit to the necessary hours?
              </label>
              <select
                name="commitment"
                id="time"
                value={data.commitment}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, commitment: e.target.value }))
                }
              >
                <option value="" hidden>
                  Select Your Hours
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {validationErrors.commitment && (
                <span className="error">{validationErrors.commitment}</span>
              )}
            </div>

            <div className="resume">
              <label htmlFor="resumes">Upload your CV/resume.</label>
              <input
                type="file"
                id="resumes"
                onChange={(e) => handleFileChange(e)}
                required
              />
              {fileValidation.error && (
                <span className="error">{fileValidation.error}</span>
              )}
            </div>
          </div>

          <div className="comments">
            <label htmlFor="comment">
              Tell us about your experience and why you want to intern with us
            </label>
            <textarea
              required
              name="comment"
              id="comment"
              placeholder="Enter Your Purpose Of Internship In 200 Words"
              value={data.comment}
              onChange={(e) =>
                setData((prev) => ({ ...prev, comment: e.target.value }))
              }
            />
            {validationErrors.comment && (
              <span className="error">{validationErrors.comment}</span>
            )}
          </div>

          <div className="know">
            <p>How did you hear about us?</p>
            <div className="knownn">
              <label htmlFor="knownLinkedIn">LinkedIn</label>
              <input
                type="radio"
                name="known"
                id="knownLinkedIn"
                value="LinkedIn"
                checked={data.known === "LinkedIn"}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, known: e.target.value }))
                }
              />
              <label htmlFor="knownTwitter">Twitter</label>
              <input
                type="radio"
                name="known"
                id="knownTwitter"
                value="Twitter"
                checked={data.known === "Twitter"}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, known: e.target.value }))
                }
              />
              <label htmlFor="knownOthers">Others</label>
              <input
                type="radio"
                name="known"
                id="knownOthers"
                value="Others"
                checked={data.known === "Others"}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, known: e.target.value }))
                }
              />
            </div>
            {validationErrors.known && (
              <span className="error">{validationErrors.known}</span>
            )}
          </div>

          <div className="update">
            <p>Would you like to receive updates by email?</p>
            <div className="updatedd">
              <label htmlFor="updated">Yes</label>
              <input
                type="radio"
                name="updated"
                id="updated"
                checked={data.recieve_update}
                onChange={() =>
                  setData((prev) => ({ ...prev, recieve_update: true }))
                }
              />
              <label htmlFor="updated">No</label>
              <input
                type="radio"
                name="updated"
                id="updated"
                checked={!data.recieve_update}
                onChange={() =>
                  setData((prev) => ({ ...prev, recieve_update: false }))
                }
              />
            </div>
            {validationErrors.recieve_update && (
              <span className="error">{validationErrors.recieve_update}</span>
            )}
          </div>

          {apiError && <span className="error">{apiError}</span>}

          <div className="steppp">
            <button onClick={() => setStep(step - 1)} className="mon">
              PREVIOUS
            </button>
            <button type="submit" className="yes">
              APPLY NOW
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
