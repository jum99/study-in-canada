import React from "react";
import "./Services.css";
import { Card, Col, Row } from "react-bootstrap";
import filter from "../../images/filter-icon.png";
import expert from "../../images/expert-icon.png";
import feature from "../../images/icon5.png";
import college from "../../images/about.png";
import live from "../../images/live-icon.png";
import selection from "../../images/selection.png";
import Assessment from "../shared/Assessment";

const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="service-banner">
          <div className="service-banner-style">
            <div className="service-banner-content">
              <h3 className="mb-3">Services We Provide</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet. <br /> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Ex quam, error praesentium a eum
                ut.
              </p>
              <button className="banner-btn">Contact Our Team</button>
            </div>
          </div>
        </div>

        <section className="mt-5 mb-5">
          <h2 className="mb-4">Our Service</h2>
          <Row xs={1} md={3}>
            <Col>
              <div
                style={{
                  width: "350px",
                  height: "250px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "rgba(238, 238, 238, 1)",
                }}
              >
                <img className="about-card-icon" src={filter} alt="" />
                <h4>Range of filters</h4>
                <p>
                  Program and institute search made easy with extensive filters
                  for eligibility, tuition fee, field of interest, choice of
                  region and more
                </p>
                <h6 style={{ color: "rgba(233, 29, 29, 1)", margin: "10px 0" }}>
                  Read More
                </h6>
              </div>
            </Col>

            <Col>
              <div
                style={{
                  width: "350px",
                  height: "250px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "rgba(238, 238, 238, 1)",
                }}
              >
                <img className="about-card-icon" src={filter} alt="" />
                <h4>Range of filters</h4>
                <p>
                  Program and institute search made easy with extensive filters
                  for eligibility, tuition fee, field of interest, choice of
                  region and more
                </p>
                <h6 style={{ color: "rgba(233, 29, 29, 1)", margin: "10px 0" }}>
                  Read More
                </h6>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "350px",
                  height: "250px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "rgba(238, 238, 238, 1)",
                }}
              >
                <img className="about-card-icon" src={filter} alt="" />
                <h4>Range of filters</h4>
                <p>
                  Program and institute search made easy with extensive filters
                  for eligibility, tuition fee, field of interest, choice of
                  region and more
                </p>
                <h6 style={{ color: "rgba(233, 29, 29, 1)", margin: "10px 0" }}>
                  Read More
                </h6>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "350px",
                  height: "250px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "rgba(238, 238, 238, 1)",
                }}
              >
                <img className="about-card-icon" src={expert} alt="" />
                <h4>Expert Guidance</h4>
                <p>
                  On-call and face-to-face sessions with expert advisors to help
                  students find the right programs
                </p>
                <h6 style={{ color: "rgba(233, 29, 29, 1)", margin: "10px 0" }}>
                  Read More
                </h6>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "350px",
                  height: "250px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "rgba(238, 238, 238, 1)",
                }}
              >
                <img className="about-card-icon" src={feature} alt="" />
                <h4>Multi-apply Feature</h4>
                <p>
                  Multiple applications to any number of programs and institutes
                  with a single profile
                </p>
                <h6 style={{ color: "rgba(233, 29, 29, 1)", margin: "10px 0" }}>
                  Read More
                </h6>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "350px",
                  height: "250px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "rgba(238, 238, 238, 1)",
                }}
              >
                <img className="about-card-icon" src={live} alt="" />
                <h4>Live-tracking feature</h4>
                <p>
                  Tracking of applications with direct updates from the
                  institutes
                </p>
                <h6 style={{ color: "rgba(233, 29, 29, 1)", margin: "10px 0" }}>
                  Read More
                </h6>
              </div>
            </Col>
          </Row>
        </section>

        <section className="mt-5 mb-5 container">
          <Row xs={1} md={2}>
            <Col>
              <div className="">
                <img
                  src={college}
                  style={{ width: "450px", height: "330px" }}
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <div className="ms-3 mt-3">
                <h3 className="">Working for Students and Institutes</h3>
                <p>
                  At Study Canada, we have designed our services keeping both
                  students and institutes in mind. Connect to learn more about
                  student and institute services.
                </p>

                <div className="d-flex justify-content-between mt-4">
                  <div className="">
                    <h3 style={{ color: "rgba(229, 0, 25, 1)" }}>400k+</h3>
                    <h6>
                      ANNUAL <br /> STUDENT WALK
                    </h6>
                  </div>
                  <div className="">
                    <h3 style={{ color: "rgba(229, 0, 25, 1)" }}>680+</h3>
                    <h6>
                      INSTITUTIONAL <br /> TIE-UPS
                    </h6>
                  </div>
                  <div>
                    <h3 style={{ color: "rgba(229, 0, 25, 1)" }}>2.5k+</h3>
                    <h6>
                      PROGRAMS <br /> AVAILABLE
                    </h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section>
          <h2 className="mb-3">Selection Assistance</h2>
          <h4>Assistance in selection, based on your preferences.</h4>
          <p className="mb-4">
            At Study-Canada we help students get admissions into universities
            and colleges that best suit their personal, academic, financial and
            other parameters.
          </p>

          <Row xs={1} md={3} className="g-5">
            <Col>
              <Card style={{ width: "280px", border: "none" }}>
                <Card.Img variant="top" src={selection} />
                <Card.Body>
                  <Card.Title>Institute Selection</Card.Title>

                  <Card.Text>
                    Get admissions into universities and colleges that best suit
                    your personal, academic and financial parameters.
                  </Card.Text>
                  <ul style={{ margin: 0, padding: "19px" }}>
                    <li>Integrity</li>
                    <li>Guidance</li>
                    <li>Course Specific Institutes</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "280px", border: "none" }}>
                <Card.Img variant="top" src={selection} />
                <Card.Body>
                  <Card.Title>Institute Selection</Card.Title>

                  <Card.Text>
                    Get admissions into universities and colleges that best suit
                    your personal, academic and financial parameters.
                  </Card.Text>
                  <ul style={{ margin: 0, padding: "19px" }}>
                    <li>Integrity</li>
                    <li>Guidance</li>
                    <li>Course Specific Institutes</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "280px", border: "none" }}>
                <Card.Img variant="top" src={selection} />
                <Card.Body>
                  <Card.Title>Institute Selection</Card.Title>

                  <Card.Text>
                    Get admissions into universities and colleges that best suit
                    your personal, academic and financial parameters.
                  </Card.Text>
                  <ul style={{ margin: 0, padding: "19px" }}>
                    <li>Integrity</li>
                    <li>Guidance</li>
                    <li>Course Specific Institutes</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section>
          <h2 className="mb-3">Application Assistance</h2>
          <h4>Personalised attention to each student’s applications</h4>
          <p className="mb-4">
            Study-Canada offers personalized attention to the student's
            admission applications, ensuring the submission of an error-free and
            well-represented application
          </p>

          <Row xs={1} md={2} className="g-5">
            <Col>
              <Card style={{ width: "400px", border: "none" }}>
                <Card.Img variant="top" src={selection} />
                <Card.Body>
                  <Card.Title>Institute Selection</Card.Title>

                  <Card.Text>
                    Get admissions into universities and colleges that best suit
                    your personal, academic and financial parameters.
                  </Card.Text>
                  <ul style={{ margin: 0, padding: "19px" }}>
                    <li>Integrity</li>
                    <li>Guidance</li>
                    <li>Course Specific Institutes</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "400px", border: "none" }}>
                <Card.Img variant="top" src={selection} />
                <Card.Body>
                  <Card.Title>Institute Selection</Card.Title>

                  <Card.Text>
                    Get admissions into universities and colleges that best suit
                    your personal, academic and financial parameters.
                  </Card.Text>
                  <ul style={{ margin: 0, padding: "19px" }}>
                    <li>Integrity</li>
                    <li>Guidance</li>
                    <li>Course Specific Institutes</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section>
          <h3 className="mb-3">Pre Departure Assistance</h3>
          <h4>Checklist of pre departure guidelines for destination</h4>
          <p className="mb-4">
            At Study-Canada we help students get admissions into universities
            and colleges that best suit their personal, academic, financial and
            other parameters.
          </p>

          <Row xs={1} md={3} className="g-5">
            <Col>
              <Card style={{ width: "280px", border: "none" }}>
                <Card.Img variant="top" src={selection} />
                <Card.Body>
                  <Card.Title>Institute Selection</Card.Title>

                  <Card.Text>
                    Get admissions into universities and colleges that best suit
                    your personal, academic and financial parameters.
                  </Card.Text>
                  <ul style={{ margin: 0, padding: "19px" }}>
                    <li>Integrity</li>
                    <li>Guidance</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "280px", border: "none" }}>
                <Card.Img variant="top" src={selection} />
                <Card.Body>
                  <Card.Title>Institute Selection</Card.Title>

                  <Card.Text>
                    Get admissions into universities and colleges that best suit
                    your personal, academic and financial parameters.
                  </Card.Text>
                  <ul style={{ margin: 0, padding: "19px" }}>
                    <li>Integrity</li>
                    <li>Guidance</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "280px", border: "none" }}>
                <Card.Img variant="top" src={selection} />
                <Card.Body>
                  <Card.Title>Institute Selection</Card.Title>

                  <Card.Text>
                    Get admissions into universities and colleges that best suit
                    your personal, academic and financial parameters.
                  </Card.Text>
                  <ul style={{ margin: 0, padding: "19px" }}>
                    <li>Integrity</li>
                    <li>Guidance</li>
                    <li>Course Specific Institutes</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <Assessment />
      </div>
    </div>
  );
};

export default Services;
