import React from "react";
import "./Scholarship.css";
import scholarship from "../../../images/scholarship.png";
import { Accordion, Card, Col, Row, useAccordionButton } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    console.log("totally custom!");
  });

  return (
    <button
      type="button"
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(14, 93, 165, 1)",
        color: "white",
        width: "30px",
        height: "30px",
        fontSize: 28,
        paddingBottom: "5px",
        border: "none",
        fontWeight: "bold",
        borderRadius: "4px",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Scholarship = () => {
  return (
    <>
      <div className="container">
        <div className="common-banner">
          <div className="common-banner-style">
            <div className="common-banner-content">
              <h3 className="mb-5">Scholarship and Financial Aid Support</h3>

              <button className="banner-btn">Contact Our Team</button>
            </div>
          </div>
        </div>

        <section className="mt-5">
          <Row xs={1} md={2}>
            <Col>
              <div className="me-4">
                <img
                  src={scholarship}
                  style={{ width: "90%", borderRadius: 5 }}
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <div className="">
                <h3 className="mb-3 mt-3">
                  Best Scholarships to Study in Canada For Bangladeshi students
                </h3>
                <p className="mb-4">
                  Many Indian students dream of studying abroad, however, the
                  biggest challenge they face is the cost involved. A
                  scholarship can enable them to fulfill their aspiration, but,
                  unfortunately, many aren't aware of the process and the steps
                  involved to apply for a scholarship. Rather, there's a general
                  misconception that there is no such scholarship for
                  international students. Apparently, there are several
                  universities and colleges abroad that provide scholarships to
                  International Student in order to attract the best and the
                  brightest minds.
                </p>
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
          <h3 className="mb-3">Visa Processing Requirements</h3>
          <p className="mb-4">
            Is Cost a Major Factor in Studying overseas? Study-Canada provides
            assistance so that students can have hassle-free and easy-go
            admission into the desired college and in the desired program or
            courses available. A lot of students are not aware that they can be
            eligible to get Canada scholarships from government institutes and
            other organizations. Sometimes it is cheaper to Study Abroad with
            Scholarships if you get one.
          </p>

          <Row xs={1} md={2} className="g-4">
            <Col>
              <div className="scholarship-card">
                <h5>Merit-based</h5>
                <p>
                  This scholarship can be availed by the students who've scored
                  excellent grades in standardized tests (SAT or ACT or GRE or
                  GMAT) and school academics. Also, a holistic profile which has
                  certification in extracurricular activities such as sports,
                  dancing, music, social services, etc, can have a higher
                  probability of getting the scholarship.
                </p>
              </div>
            </Col>
            <Col>
              <div className="scholarship-card">
                <h5>Destination specific</h5>
                <p className="mb-4">
                  Many Institutions or Governments offer grants and funds to
                  students from developing countries. These scholarships vary
                  from destination to destination where students want to apply
                  for.
                </p>
              </div>
            </Col>
            <Col>
              <div className="scholarship-card">
                <h5>Subject specific</h5>
                <p>
                  A few universities grant scholarship to students who choose
                  specific courses to study. Courses like Accounting,
                  engineering and psychology are academic majors that supported
                  by subject-specific scholarships.
                </p>
              </div>
            </Col>
            <Col>
              <div className="scholarship-card">
                <h5>Need-based</h5>
                <p>
                  These are awarded based on the financial needs of the
                  students, i.e. to students who have weak financial background
                  or have financial constraints by some other means, which takes
                  into account the student's family assets and income.
                </p>
              </div>
            </Col>
            <Col>
              <div className="scholarship-card">
                <h5>Athletic scholarships</h5>
                <p className="mb-4">
                  Students who are good in sports can avail the scholarship from
                  the Institution's athletic department. Students who have
                  achieved certifications at national level can apply for this
                  scholarship.
                </p>
              </div>
            </Col>
          </Row>
        </section>

        <section>
          <div>
            <h2 className="text-center mb-5 mt-5">
              Frequently Asked Questions
            </h2>
            <Accordion>
              <div className="d-flex">
                <div style={{ width: "50%", marginRight: 15 }}>
                  <Card
                    className="mb-3"
                    style={{
                      backgroundColor: "rgba(238, 238, 238, 1)",
                      border: "none",
                    }}
                  >
                    <Card.Header
                      className="d-flex justify-content-between align-items-center"
                      style={{ borderBottom: "none", padding: "10px 15px " }}
                    >
                      What is Fellowship?
                      <CustomToggle eventKey="0">+</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum delectus dolore, placeat a perferendis tempora.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    className="mb-3"
                    style={{
                      backgroundColor: "rgba(238, 238, 238, 1)",
                      border: "none",
                    }}
                  >
                    <Card.Header
                      className="d-flex justify-content-between align-items-center"
                      style={{ borderBottom: "none", padding: "10px 15px " }}
                    >
                      Fellowship Benefits
                      <CustomToggle eventKey="1">+</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea repudiandae nemo, voluptatibus distinctio inventore
                        architecto!{" "}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>
                <div style={{ width: "50%" }}>
                  <Card
                    className="mb-3"
                    style={{
                      backgroundColor: "rgba(238, 238, 238, 1)",
                      border: "none",
                    }}
                  >
                    <Card.Header
                      className="d-flex justify-content-between align-items-center"
                      style={{ borderBottom: "none", padding: "10px 15px " }}
                    >
                      What is an assistantship?
                      <CustomToggle eventKey="2">+</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea repudiandae nemo, voluptatibus distinctio inventore
                        architecto!{" "}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    className="mb-3"
                    style={{
                      backgroundColor: "rgba(238, 238, 238, 1)",
                      border: "none",
                    }}
                  >
                    <Card.Header
                      className="d-flex justify-content-between align-items-center"
                      style={{ borderBottom: "none", padding: "10px 15px " }}
                    >
                      Types of Assistantship
                      <CustomToggle eventKey="3">+</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea repudiandae nemo, voluptatibus distinctio inventore
                        architecto!{" "}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>
              </div>
            </Accordion>
          </div>
        </section>

        <section>
          <div className="mt-5">
            <h3 className="mb-3">Lakehead University, Canada</h3>
            <table className="scholarship-table">
              <thead>
                <tr>
                  <td>Scholarship</td>
                  <td>Scholarship</td>
                  <td>Scholarship</td>
                  <td>Scholarship</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Merit Based</td>
                  <td>UG Level</td>
                  <td>
                    CAD 5,000 (75%-80%), CAD 7,500 (81%-89%), CAD 10000 (90% or
                    above)
                  </td>
                  <td>2023</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <h3 className="mb-3">Lakehead University, Canada</h3>
            <table className="scholarship-table">
              <thead>
                <tr>
                  <td>Scholarship</td>
                  <td>Scholarship</td>
                  <td>Scholarship</td>
                  <td>Scholarship</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Merit Based</td>
                  <td>UG Level</td>
                  <td>
                    CAD 5,000 (75%-80%), CAD 7,500 (81%-89%), CAD 10000 (90% or
                    above)
                  </td>
                  <td>2023</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <h3 className="mb-3">Lakehead University, Canada</h3>
            <table className="scholarship-table">
              <thead>
                <tr>
                  <td>Scholarship</td>
                  <td>Scholarship</td>
                  <td>Scholarship</td>
                  <td>Scholarship</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Merit Based</td>
                  <td>UG Level</td>
                  <td>
                    CAD 5,000 (75%-80%), CAD 7,500 (81%-89%), CAD 10000 (90% or
                    above)
                  </td>
                  <td>2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="mb-4 mt-5">
          <h5>Check your Eligibility for Specific Scholarships</h5>
          <p>
            Study-Canada will help you get a Scholarship from the university if
            you meet certain criteria. All the Scholarships have different
            eligibility criteria depending on the university and course.
            Sometimes there are specific scholarships available for the course
            also. Depending on the educational background, professional work
            experience, and other exam scores the student is allotted different
            types of scholarship. We keep an eye on specific scholarships for
            which students can be eligible and guide them accordingly for the
            application procedures of different scholarships in different
            countries and universities.
          </p>
        </div>
        <div className="mb-4">
          <h5>Provide a Checklist of the Documents Required</h5>
          <p>
            We help you to know the requirements of the documents for specific
            scholarships. We are always updated with the latest information. We
            will guide you through the process of Scholarship Application. We
            will make your research work Hassle-free. If you are eligible for
            the specific scholarships, we will provide you with a checklist of
            the documents you will need to apply for the specific scholarships.
          </p>
        </div>
        <div className="">
          <h5>Behalf of Student</h5>
          <p className="mb-2">
            If there is a possibility of gaining any early bird discount or
            scholarships, we will request the university on behalf of the
            student. If we feel you are eligible, we will recommend your profile
            for some of the specific university scholarships. We will update you
            with the Documents checklist so that you can take advantage of the
            scholarship availability.{" "}
          </p>
          <p>
            {" "}
            We are always updated on specific scholarships for which students
            can be eligible and guide them accordingly for the application
            procedures of different scholarships in different countries and
            universities. With Join In Campus, you can not only gain admission
            to the university but also gain scholarships, if you are eligible.
          </p>
        </div>
      </div>
    </>
  );
};

export default Scholarship;
