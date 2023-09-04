import React from "react";
import "./Referral.css";
import { Col, Row } from "react-bootstrap";

const Referral = () => {
  return (
    <div className="mt-5 mb-5 container">
      <h3 className="mb-4">Referral Program</h3>
      <div>
        <Row xs={1} md={3}>
          <Col>
            <div className="d-flex  refer-card">
              <div className="refer-date me-3">
                <h5>
                  <span style={{ fontSize: "32px" }}>24</span> <br />
                  June
                </h5>
              </div>
              <div>
                <h5>University Visits Capilano University</h5>
                <p>View More</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex refer-card">
              <div className="refer-date me-3">
                <h5>
                  <span style={{ fontSize: "32px" }}>24</span> <br />
                  June
                </h5>
              </div>
              <div>
                <h5>University Visits Capilano University</h5>
                <p>View More</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex refer-card">
              <div className="refer-date me-3">
                <h5>
                  <span style={{ fontSize: "32px" }}>24</span> <br />
                  June
                </h5>
              </div>
              <div>
                <h5>University Visits Capilano University</h5>
                <p>View More</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex refer-card">
              <div className="refer-date me-3">
                <h5>
                  <span style={{ fontSize: "32px" }}>24</span> <br />
                  June
                </h5>
              </div>
              <div>
                <h5>University Visits Capilano University</h5>
                <p>View More</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex refer-card">
              <div className="refer-date me-3">
                <h5>
                  <span style={{ fontSize: "32px" }}>24</span> <br />
                  June
                </h5>
              </div>
              <div>
                <h5>University Visits Capilano University</h5>
                <p>View More</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex refer-card">
              <div className="refer-date me-3">
                <h5>
                  <span style={{ fontSize: "32px" }}>24</span> <br />
                  June
                </h5>
              </div>
              <div>
                <h5>University Visits Capilano University</h5>
                <p>View More</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Referral;
