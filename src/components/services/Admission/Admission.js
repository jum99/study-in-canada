import React from "react";
import "./Admission.css";
import admission1 from "../../../images/admission1.png";
import admission2 from "../../../images/admission2.png";
import { Col, Row } from "react-bootstrap";
import Assessment from "../../shared/Assessment";
import { BsFillRecordCircleFill } from "react-icons/bs";

const admissionCards = [
  {
    collegeName: "Canadore College - Stanford Mississauga Campus",
    lastDate: "View Last Date",
  },
  {
    collegeName: "Canadore College - Stanford Mississauga Campus",
    lastDate: "View Last Date",
  },
  {
    collegeName: "Canadore College - Stanford Mississauga Campus",
    lastDate: "View Last Date",
  },
  {
    collegeName: "Canadore College - Stanford Mississauga Campus",
    lastDate: "View Last Date",
  },
  {
    collegeName: "Canadore College - Stanford Mississauga Campus",
    lastDate: "View Last Date",
  },
  {
    collegeName: "Canadore College - Stanford Mississauga Campus",
    lastDate: "View Last Date",
  },
  {
    collegeName: "Canadore College - Stanford Mississauga Campus",
    lastDate: "View Last Date",
  },
  {
    collegeName: "Canadore College - Stanford Mississauga Campus",
    lastDate: "View Last Date",
  },
  {
    collegeName: "Canadore College - Stanford Mississauga Campus",
    lastDate: "View Last Date",
  },
  {
    collegeName: "Canadore College - Stanford Mississauga Campus",
    lastDate: "View Last Date",
  },
  {
    collegeName: "Canadore College - Stanford Mississauga Campus",
    lastDate: "View Last Date",
  },
  {
    collegeName: "Canadore College - Stanford Mississauga Campus",
    lastDate: "View Last Date",
  },
];

const Admission = () => {
  return (
    <>
      <div className="container">
        <div className="common-banner">
          <div className="common-banner-style">
            <div className="common-banner-content">
              <h3 className="mb-3">University Admission Support</h3>
              <p className="mb-4">
                Study-Canada is a trusted consultancy firm with a demonstrated
                track record of guiding Bangladeshi students through the overall
                admission process and enrollment. We offer the following
                services.
              </p>
              <button className="banner-btn">Contact Our Team</button>
            </div>
          </div>
        </div>

        <section className="mt-5">
          <Row xs={1} md={2}>
            <Col>
              <div className="me-4 mt-4">
                <img
                  src={admission1}
                  style={{ width: "90%", borderRadius: 5 }}
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <div className="mt-4">
                <h3 className="mb-3">Extensive Admissions Knowledge</h3>
                <p>
                  Selecting the best university and leading program for
                  Bangladeshi students may be alluring. As admissions
                  counsellors, we can give each student a wealth of information
                  to assist them in selecting the best university for them.
                </p>
                <p>
                  Additionally, we help students identify the most relevant area
                  or program for their preferences and lead them toward a
                  university that suits their educational and personal
                  requirements.
                </p>
                <div className="d-flex align-items-center mt-3">
                  <div>
                    <BsFillRecordCircleFill
                      style={{
                        color: "rgba(233, 29, 29, 1)",
                        width: "15px",
                        marginRight: "15px",
                      }}
                    />
                  </div>

                  <div>
                    <p>University Selection</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div>
                    <BsFillRecordCircleFill
                      style={{
                        color: "rgba(233, 29, 29, 1)",
                        width: "15px",
                        marginRight: "15px",
                      }}
                    />
                  </div>

                  <div>
                    <p>Ranking and Accreditation for the School</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div>
                    <BsFillRecordCircleFill
                      style={{
                        color: "rgba(233, 29, 29, 1)",
                        width: "15px",
                        marginRight: "15px",
                      }}
                    />
                  </div>

                  <div>
                    <p>Tuition Fees for the University</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-3 mb-4">
                  <div>
                    <BsFillRecordCircleFill
                      style={{
                        color: "rgba(233, 29, 29, 1)",
                        width: "15px",
                        marginRight: "15px",
                      }}
                    />
                  </div>

                  <div>
                    <p>University Accommodation to the Student</p>
                  </div>
                </div>
                <button
                  className="profile-btn"
                  style={{ backgroundColor: "rgba(229, 0, 25, 1)" }}
                >
                  Talk to Our Experts
                </button>
              </div>
            </Col>
          </Row>
        </section>

        <section className="mt-5">
          <Row xs={1} md={2}>
            <Col>
              <div className="me-5 mb-4">
                <h3 className="mb-3">Step-by-Step Instructions</h3>
                <p className="mb-3">
                  We will assist you throughout the complete planning process.
                  Our professional mentors precisely understand what practice
                  and development distinguish a student. They can assist in
                  creating a comprehensive plan for students that will provide
                  them with a successful application.
                </p>
                <p className="mb-4">
                  As admissions consultants, we are familiar with the advantages
                  and disadvantages of every college/university entrance test
                  and can guide students on which one is ideal for them. During
                  the application process, we consult with each candidate to
                  design a captivating application that usually works for them.
                  We display the best possible level in Canada university
                  admission.
                </p>

                <button
                  className="profile-btn"
                  style={{ backgroundColor: "rgba(229, 0, 25, 1)" }}
                >
                  Book an Appointment
                </button>
              </div>
            </Col>
            <Col>
              <div className="me-4">
                <img
                  src={admission2}
                  style={{ width: "80%", borderRadius: 5 }}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </section>

        <section className="mt-5">
          <h3 className="mb-3">Last chance of Admission for next intake</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <Row xs={2} md={4} className="g-4">
            {admissionCards.map((card) => {
              return (
                <Col>
                  <div className="add-small-card">
                    <h5>{card.collegeName}</h5>
                    <p>{card.lastDate}</p>
                  </div>
                </Col>
              );
            })}
            ;
          </Row>
        </section>

        <section className="mt-5">
          <div className="mb-4">
            <h4>Courses Offered</h4>
            <p>
              Universities abroad offer plenty of different courses, many
              universities offer the same course but with different syllabus and
              tuition fees also varies. We here will help you to compare
              different universities according to your course requirements based
              on different factors. This will make your work easier to finalize
              at the university for your course.
            </p>
          </div>
          <div className="mb-4">
            <h4>Ranking and Accreditation for the School</h4>
            <p>
              There are many diverse ranking systems, created by several
              organizations that use different metrics to come up with their top
              university lists. If you are among the students who choose
              University based on ranking, we are here to help you. We will
              provide you with the ranking of the universities in your chosen
              country. You can then finalize your University considering the
              ranking and your career goals.
            </p>
          </div>
          <div className="mb-4">
            <h4>Tuition Fees for the University</h4>
            <p>
              Universities abroad offer plenty of different courses, many
              universities offer the same course but with different syllabus and
              tuition fees also varies. We here will help you to compare
              different universities according to your course requirements based
              on different factors. This will make your work easier to finalize
              at the university for your course.
            </p>
          </div>
          <div className="mb-4">
            <h4>University Accommodation to the Student</h4>
            <p>
              Universities abroad offer plenty of different courses, many
              universities offer the same course but with different syllabus and
              tuition fees also varies. We here will help you to compare
              different universities according to your course requirements based
              on different factors. This will make your work easier to finalize
              at the university for your course.
            </p>
          </div>
          <div className="mb-4">
            <h4>Employment Prospects After Completion of the Course</h4>
            <p>
              Universities abroad offer plenty of different courses, many
              universities offer the same course but with different syllabus and
              tuition fees also varies. We here will help you to compare
              different universities according to your course requirements based
              on different factors. This will make your work easier to finalize
              at the university for your course.
            </p>
          </div>
        </section>
        <Assessment />
      </div>
    </>
  );
};

export default Admission;
