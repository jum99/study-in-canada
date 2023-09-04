import React from "react";
import "./Queries.css";
import { Col, Row } from "react-bootstrap";

const Queries = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-5">
        <span style={{ color: "rgba(18, 26, 80, 1)" }}>
          Any Queries? Don't Hesitate
        </span>{" "}
        <br />{" "}
        <span style={{ color: "rgba(229, 0, 25, 1)" }}>to Contact Us!!</span>
      </h2>
      <Row xs={1} md={2}>
        <Col>
          <div className="me-4 queries">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Email Address" />
          </div>
        </Col>
        <Col>
          <div className="queries">
            <textarea placeholder="Comments" cols="60" rows="4"></textarea>
            <button type="submit" className="query-btn">
              Submit Form
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Queries;
