import React from "react";
import "./StudentProfile.css";
import logo from "../../../images/circle-logo.png";
import graduate from "../../../images/graduate.png";
import Assessment from "../../shared/Assessment";
import { Col, Row } from "react-bootstrap";

const StudentProfile = () => {
  return (
    <div>
      <div className="container">
        <div className="common-banner">
          <div className="common-banner-style">
            <div className="common-banner-content">
              <h3 className="mb-3">Student Profile Analysis By Study Canada</h3>
              <p className="mb-4">
                At Study-Canada, we don't just offer counseling for admission or
                university or college selection. We also analyze a suitable
                student profile to give each student the most important choice.
              </p>
              <button className="banner-btn">Contact Our Team</button>
            </div>
          </div>
        </div>

        <section className="mt-5">
          <Row xs={1} md={2}>
            <Col>
              <div className="me-5">
                <h3>
                  Student Profile Analysis By <br /> Study-Canada
                </h3>
                <p className="mt-3 mb-3">
                  At Study-Canada, we do not just do counseling for admissions
                  or selecting a university or college. We also perform an
                  appropriate student profile analysis to give every student the
                  most important choices.
                </p>
                <p className="mb-4">
                  Because choosing to study abroad is a decision that will
                  influence a student for the rest of their lives, they would
                  never want to find themselves in a country offering a
                  curriculum that is unsuited to the careers they hope to
                  pursue. As a result, we strongly recommend against making rash
                  decisions. A student's disappointment can result from a rushed
                  and incorrect decision.
                </p>
                <button
                  className="common-btn"
                  style={{ backgroundColor: "rgba(229, 0, 25, 1)" }}
                >
                  Analyze Your Profile Today With Study-Canada
                </button>
              </div>
            </Col>

            <Col>
              <div
                style={{
                  backgroundColor: "rgba(238, 238, 238, 1)",
                  padding: 20,
                  width: "80%",
                  borderRadius: 10,
                }}
                className="mt-4"
              >
                <button
                  className="common-btn mb-3"
                  style={{ backgroundColor: "rgba(18, 26, 80, 1)" }}
                >
                  Apply For Scholarships!
                </button>
                <div className="d-flex align-items-center mb-4 mt-3">
                  <img src={logo} className="me-3" alt="" />
                  <div>
                    <h4>HAVE ANY QUESTION?</h4>
                    <p>
                      Our consultant will help you find the best study
                      destination.
                    </p>
                  </div>
                </div>
                <button
                  className="common-btn mb-3"
                  style={{ backgroundColor: "rgba(229, 0, 25, 1)" }}
                >
                  Call Now
                </button>
                <button
                  className="common-btn"
                  style={{ backgroundColor: "rgba(18, 26, 80, 1)" }}
                >
                  Contact Us
                </button>
              </div>
            </Col>
          </Row>
        </section>
      </div>
      <section
        style={{ padding: "30px 0", backgroundColor: "rgba(223, 46, 66, 1)" }}
        className="mt-5 text-white"
      >
        <div className="container">
          <Row xs={1} md={2}>
            <Col>
              <div className="me-4 mt-4">
                <h4 className="mb-4">
                  The Importance of Doing Student Profile Analysis By A
                  Education Consultancy Firm
                </h4>
                <p className="mb-4">
                  Studying and living in a foreign country might be a once in a
                  lifetime opportunity for students. It is highly encouraged not
                  to take any decisions in a hurry. A hastily made decision can
                  lead to a student's disappointment. As a result, Study-Canada
                  offers the service of 'Student Profile Analysis' by one of our
                  professional career counselors in Bangladesh.
                </p>
                <button
                  className="border border-0"
                  style={{
                    borderRadius: "20px",
                    padding: "10px 20px",
                    color: "rgba(223, 46, 66, 1)",
                  }}
                >
                  Apply Now
                </button>
              </div>
            </Col>
            <Col>
              <div className="mt-4">
                <h4>How Does Sangen’s Student Profile Analysis System Work?</h4>
                <h5>
                  You can check here how our student profile analysis system
                  work;
                </h5>
                <ul style={{ margin: 0, padding: "19px" }}>
                  <li>
                    We invite students and parents to participate in a
                    360-degree course cum country brainstorming session with our
                    expert advisers.
                  </li>
                  <li>
                    We will match your academic interests and career goals with
                    the institutions of higher learning that best fit you in
                    various countries.
                  </li>
                  <li>
                    Our highly educated experts examine student’s qualifications
                    and objectives and compare them with the best possibilities
                    before recommending a university and a program.
                  </li>
                  <li>
                    We recognize that your decision will impact your career;
                    thus, do not overlook any details and follow the
                    recommendations of our advisors.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="container mt-5">
        <Row xs={1} md={2}>
          <Col>
            <div className="me-4 mt-4">
              <img src={graduate} style={{ width: "90%" }} alt="" />
            </div>
          </Col>
          <Col>
            <div>
              <h3 className="mb-3 mt-4">
                Why Study-Canada for Student Profile Analysis?
              </h3>
              <p>
                Student profile analysis is not an easy task. It should be
                handled correctly to make the right decision for your future
                study. We have explained some points about why you choose us for
                your journey;
              </p>
              <ul style={{ margin: 0, padding: "19px" }}>
                <li>
                  We invite students and parents to participate in a 360-degree
                  course cum country brainstorming session with our expert
                  advisers.
                </li>
                <li>
                  We will match your academic interests and career goals with
                  the institutions of higher learning that best fit you in
                  various countries.
                </li>
                <li>
                  Our highly educated experts examine student’s qualifications
                  and objectives and compare them with the best possibilities
                  before recommending a university and a program.
                </li>
              </ul>
              <button
                className="profile-btn me-3"
                style={{ backgroundColor: "rgba(229, 0, 25, 1)" }}
              >
                Read More
              </button>
              <button
                className="profile-btn"
                style={{ backgroundColor: "rgba(18, 26, 80, 1)" }}
              >
                Get Your Appointment Today
              </button>
            </div>
          </Col>
        </Row>
      </section>
      <Assessment />
    </div>
  );
};

export default StudentProfile;
