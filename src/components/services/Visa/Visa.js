import React from "react";
import travel from "../../../images/travel.png";
import { Col, Row } from "react-bootstrap";
import "./Visa.css";
import student from "../../../images/about.png";
import { BsFillRecordCircleFill } from "react-icons/bs";
import Assessment from "../../shared/Assessment";
import Questions from "../../shared/Questions";

const Visa = () => {
  return (
    <div>
      <div className="container">
        <div className="service-banner">
          <div className="service-banner-style">
            <div className="service-banner-content">
              <h3 className="mb-3">
                Student visa application assistance by Study Canada
              </h3>
              <p className="mb-4">
                With Simplii Financial, international students can access a
                suite of financial services through the International Student
                Banking Offer (ISBO) as described below
              </p>
              <button className="banner-btn">Contact Our Team</button>
            </div>
          </div>
        </div>

        <section className="mt-5">
          <Row xs={1} md={2}>
            <Col>
              <div className="me-4 mt-4">
                <img src={travel} style={{ width: "90%" }} alt="" />
              </div>
            </Col>
            <Col>
              <div>
                <h3 className="mb-3 mt-4">
                  Need to apply for a visa? <br /> Here's all you need to know
                </h3>
                <p className="mb-3">
                  A student visa is an endorsement by the immigration
                  authorities on your passport. It indicates that you are
                  allowed to enter and stay to study for a specified period.
                </p>
                <h5 style={{ color: "rgba(229, 0, 25, 1)", marginBottom: 10 }}>
                  When should I apply for my student visa?
                </h5>
                <p>
                  You can begin your student visa application once you receive
                  confirmation of your enrolment in your chosen university or
                  institution. It’s best to apply as early as possible,
                  regardless of when your program is due to start, as the time
                  taken for your visa to process will vary from country to
                  country.
                </p>
                <p className="mb-4">
                  If you plan to seek any financial aid (in terms of
                  scholarships and education loans), To avail any financial aid
                  i.e., scholarship or education loan, the visa application
                  should be initiated on a prior basis as the process can be
                  time-consuming.
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
          <p className="mb-3">
            While visas can occasionally be harder to get, the base requirements
            for obtaining a legal visa should still be kept in mind, as visa
            laws may be altered as needed. We might want to make note of
            absolutely all the basic requirements needed to qualify for a
            student visa, as laws are sometimes intent on modifying them.
          </p>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <div className="visa-card">
                <h6>Valid Passport</h6>
                <p>
                  Your passport must not be valid for much less than half a year
                  because the Foreign Ministry will not process your request for
                  a visa until it is valid for at least one year. If your
                  passport is about to expire soon, you’re encouraged to submit
                  an application for a new one.
                </p>
              </div>
            </Col>
            <Col>
              <div className="visa-card">
                <h6>Valid Passport</h6>
                <p>
                  Your passport must not be valid for much less than half a year
                  because the Foreign Ministry will not process your request for
                  a visa until it is valid for at least one year. If your
                  passport is about to expire soon, you’re encouraged to submit
                  an application for a new one.
                </p>
              </div>
            </Col>
            <Col>
              <div className="visa-card">
                <h6>Valid Passport</h6>
                <p>
                  Your passport must not be valid for much less than half a year
                  because the Foreign Ministry will not process your request for
                  a visa until it is valid for at least one year. If your
                  passport is about to expire soon, you’re encouraged to submit
                  an application for a new one.
                </p>
              </div>
            </Col>
            <Col>
              <div className="visa-card">
                <h6>Valid Passport</h6>
                <p>
                  Your passport must not be valid for much less than half a year
                  because the Foreign Ministry will not process your request for
                  a visa until it is valid for at least one year. If your
                  passport is about to expire soon, you’re encouraged to submit
                  an application for a new one.
                </p>
              </div>
            </Col>
            <Col>
              <div className="visa-card">
                <h6>Valid Passport</h6>
                <p>
                  Your passport must not be valid for much less than half a year
                  because the Foreign Ministry will not process your request for
                  a visa until it is valid for at least one year. If your
                  passport is about to expire soon, you’re encouraged to submit
                  an application for a new one.
                </p>
              </div>
            </Col>
            <Col>
              <div className="visa-card">
                <h6>Valid Passport</h6>
                <p>
                  Your passport must not be valid for much less than half a year
                  because the Foreign Ministry will not process your request for
                  a visa until it is valid for at least one year. If your
                  passport is about to expire soon, you’re encouraged to submit
                  an application for a new one.
                </p>
              </div>
            </Col>
          </Row>
        </section>

        <section className="mt-5">
          <Row xs={1} md={2}>
            <Col>
              <div className="me-4 mt-5">
                <img
                  src={student}
                  style={{ width: "90%", height: "300px" }}
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <div className="mt-4">
                <h3 className="mb-3">
                  Why a RCIC is the best to oversee the Visa processing
                </h3>

                <p>
                  You can begin your student visa application once you receive
                  confirmation of your enrolment in your chosen university or
                  institution. It’s best to apply as early as possible,
                  regardless of when your program is due to start, as the time
                  taken for your visa to process will vary from country to
                  country.
                </p>
                <p className="mb-4">
                  If you plan to seek any financial aid (in terms of
                  scholarships and education loans), To avail any financial aid
                  i.e., scholarship or education loan, the visa application
                  should be initiated on a prior basis as the process can be
                  time-consuming.
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
          <h3 className="mb-3">Canada Student Visa Process</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
              <p>
                The Canadian government analyzes the required application to
                ensure that students have all the documentation necessary. They
                can either reject it or ask for the missing documentation if
                it's lacking.
              </p>
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
              <p>
                Students may be required to attend an interview with national
                officials and may be asked to present biometric information to
                clear the relevant clearances.
              </p>
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
              <p>
                A residence permit also may be required for students from
                certain countries. However, this will be processed around the
                same period as the application for a study permit.
              </p>
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
              <p>
                A 60-days personal checklist code is provided to students who
                are found to be eligible for the program, and they must use it
                to finalize their online application. Make a duplicate of the
                page with the code for reference in the future.
              </p>
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
              <p>
                The Canadian government analyzes the required application to
                ensure that students have all the documentation necessary. They
                can either reject it or ask for the missing documentation if
                it's lacking.
              </p>
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
              <p>
                They'll also get application guidance, a tuition cost estimate,
                and a list of documents they'll need to submit with the student
                application. Students will receive their document checklists via
                email, permitting them to upload and transfer the documents to
                Citizenship and Immigration Canada (CIC).
              </p>
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
              <p>
                Maple Tree Education will assist you with every step of the visa
                application process. Our highly experienced visa experts will
                guide you through the entire procedure, ensuring that you
                receive a visa successfully.
              </p>
            </div>
          </div>
          <button
            className="profile-btn"
            style={{ backgroundColor: "rgba(229, 0, 25, 1)" }}
          >
            Talk to Our Experts
          </button>
        </section>

        <section className="mt-5">
          <h3 className="mb-3">
            Why Should You Count on Study-Canada for Visa Processing Services?
          </h3>
          <p className="mb-4">
            As the largest student visa processing company in Bangladesh, we
            understand the importance of getting your visa in time. This
            realization along with some other mindsets has made us one of the
            leading visa processing service providers. Check below why you
            should depend on us:
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
              <p>
                We have years of experience handling student visas and can
                handle any request you might have.
              </p>
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
              <p>
                Our team of highly skilled professionals understands the visa
                process and handles every step with precision.
              </p>
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
              <p>
                We have created a simple, fast, and easy way for you to get your
                visas processed by our company with no hassles.
              </p>
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
              <p>
                In every process, we take the time to ask questions to help
                exclude false or unauthorized applications and make sure all
                necessary steps are completed accurately.
              </p>
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
              <p>
                We steamroll competition by providing unbeatable prices and
                superior quality service.
              </p>
            </div>
          </div>

          <button
            className="profile-btn me-3"
            style={{ backgroundColor: "rgba(229, 0, 25, 1)" }}
          >
            Try Now
          </button>
          <button
            className="profile-btn"
            style={{ backgroundColor: "rgba(229, 0, 25, 1)" }}
          >
            Talk to Our Experts
          </button>
        </section>
        <Assessment />
      </div>
      <Questions />
    </div>
  );
};

export default Visa;
