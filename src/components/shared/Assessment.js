import React from "react";
import "./Assessment.css";
import student1 from "../../images/student1.png";
import { Col, Row } from "react-bootstrap";

const Assessment = () => {
  return (
    <div className="mt-5" style={{ width: "80%", margin: "0 auto" }}>
      <Row xs={1} md={2}>
        <Col>
          <div>
            <img src={student1} style={{ width: "100%" }} alt="" />
          </div>
        </Col>
        <Col>
          <div
            className="input-div w-100"
            style={{
              backgroundColor: "rgba(238, 238, 238, 1)",
              padding: "30px",
            }}
          >
            <h3 className="mb-5 mt-3">Free Online Profile Assessment</h3>
            <div className="d-flex">
              <input
                type="text"
                placeholder="First Name"
                style={{ width: "50%", marginRight: 15 }}
              />
              <input
                type="text"
                placeholder="Last Name"
                style={{ width: "50%" }}
              />
            </div>
            <div className="d-flex flex-column">
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Your Mobile" />
            </div>

            <h5 className="mt-3">When do you plan to study?</h5>
            <select class="form-select" aria-label="Default select example">
              <option selected>Please select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <h5 className="mt-4">Preferred mode of counselling*</h5>
            <select class="form-select" aria-label="Default select example">
              <option selected>Please select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <h5 className="mt-4">How would you fund your education?</h5>
            <select class="form-select" aria-label="Default select example">
              <option selected>Please select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button type="submit" className="submit-btn ">
              Submit
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Assessment;
