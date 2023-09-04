import React from "react";
import "./Home.css";
import HomeBanner from "./HomeBanner";
import { Col, Row } from "react-bootstrap";
import person from "../../images/team.png";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";
import girl from "../../images/girl-img2.png";
import uni1 from "../../images/uni1.png";
import passport from "../../images/passport.png";
import { BsFillRecordCircleFill } from "react-icons/bs";
import Partnership from "../shared/Partnership";
import Referral from "../shared/Referral";
import Questions from "../shared/Questions";
import Queries from "../shared/Queries";

const teams = [
  {
    img: person,
    name: "Mohammad Ibrahim Abbas",
    category: "The Owner",
  },
  {
    img: person,
    name: "Mohammad Ibrahim Abbas",
    category: "The Owner",
  },
  {
    img: person,
    name: "Mohammad Ibrahim Abbas",
    category: "The Owner",
  },
  {
    img: person,
    name: "Mohammad Ibrahim Abbas",
    category: "The Owner",
  },
  {
    img: person,
    name: "Mohammad Ibrahim Abbas",
    category: "The Owner",
  },
  {
    img: person,
    name: "Mohammad Ibrahim Abbas",
    category: "The Owner",
  },
  {
    img: person,
    name: "Mohammad Ibrahim Abbas",
    category: "The Owner",
  },
  {
    img: person,
    name: "Mohammad Ibrahim Abbas",
    category: "The Owner",
  },
];

const universities = [
  {
    img: uni1,
    name: "Canadian College Name Here",
    details:
      "The University of Toronto is a prestigious institution in Canada, known for its academic excellence, research prowess, and vibrant community.",
  },
  {
    img: uni1,
    name: "Canadian College Name Here",
    details:
      "The University of Toronto is a prestigious institution in Canada, known for its academic excellence, research prowess, and vibrant community.",
  },
  {
    img: uni1,
    name: "Canadian College Name Here",
    details:
      "The University of Toronto is a prestigious institution in Canada, known for its academic excellence, research prowess, and vibrant community.",
  },
  {
    img: uni1,
    name: "Canadian College Name Here",
    details:
      "The University of Toronto is a prestigious institution in Canada, known for its academic excellence, research prowess, and vibrant community.",
  },
  {
    img: uni1,
    name: "Canadian College Name Here",
    details:
      "The University of Toronto is a prestigious institution in Canada, known for its academic excellence, research prowess, and vibrant community.",
  },
  {
    img: uni1,
    name: "Canadian College Name Here",
    details:
      "The University of Toronto is a prestigious institution in Canada, known for its academic excellence, research prowess, and vibrant community.",
  },
];

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <section className="container mb-5">
        <h3 className="mb-4">Meet Our Professional Team</h3>
        <Row xs={1} md={4} className="g-5">
          {teams.map((person) => (
            <Col>
              <div style={{ width: "260px" }}>
                <img
                  src={person.img}
                  className="w-100"
                  style={{ height: "200px" }}
                  alt=""
                />
                <h5 className="mt-3">{person.name}</h5>
                <h6 style={{ color: "rgba(229, 0, 25, 1)" }}>
                  {person.category}
                </h6>
                <p style={{ color: "rgba(14, 93, 165, 1)" }}>Read More</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>
      <section className="container mb-5">
        <h3 className="mb-4">Student Essentials</h3>
        <div className="d-flex student-essential">
          <div
            className="card-1"
            style={{
              width: "450px",
              height: "370px",
              padding: "25px",
              marginRight: "20px",
              backgroundColor: "rgba(238, 238, 238, 1)",
            }}
          >
            <img className="icon1" src={icon1} alt="" />
            <h4 className="mt-3 mb-3">Get the Right Student Health Cover</h4>
            <p className="mb-3">
              Congratulations! You've made a great decision to study Canada.
              We’re here to make the process easy, finding the best cover to
              suit your needs.
            </p>
            <h5 style={{ color: "rgba(14, 93, 165, 1)" }}>Read more</h5>
          </div>
          <div className="me-3">
            <div
              style={{
                width: "280px",
                height: "180px",
                padding: "20px",
                marginBottom: "15px",
                backgroundColor: "rgba(238, 238, 238, 1)",
              }}
            >
              <img className="home-card-icon" src={icon2} alt="" />
              <h5>
                Find <br /> Accommodation
              </h5>
            </div>
            <div
              className="card-2"
              style={{
                width: "280px",
                height: "180px",
                padding: "20px",
                backgroundColor: "rgba(238, 238, 238, 1)",
              }}
            >
              <img className="home-card-icon" src={icon3} alt="" />
              <h5>
                Student <br /> Banking
              </h5>
            </div>
          </div>
          <div>
            <div
              style={{
                width: "280px",
                height: "180px",
                padding: "20px",
                marginBottom: "15px",
                backgroundColor: "rgba(238, 238, 238, 1)",
              }}
            >
              <img className="home-card-icon" src={icon4} alt="" />
              <h5>
                Transfer Money <br /> Securely
              </h5>
            </div>
            <div
              style={{
                width: "280px",
                height: "180px",
                padding: "20px",
                backgroundColor: "rgba(238, 238, 238, 1)",
              }}
            >
              <img className="home-card-icon" src={icon5} alt="" />
              <h5>
                Our <br /> Helpline
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundColor: "rgba(247, 247, 247, 1)", padding: "35px 0" }}
      >
        <div className="container">
          <h3 style={{ color: "rgba(233, 29, 29, 1)" }} className="mb-3">
            Parents/Guardians
          </h3>
          <h4>All you need to know when sending your child to study abroad</h4>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            nesciunt, optio sit sint ipsa consequatur temporibus aliquid,
            laborum animi similique deleniti voluptas earum quaerat delectus
            omnis suscipit dolore soluta perferendis?
          </p>
          <h4>What do you need to do as a parent?</h4>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            nesciunt, optio sit sint ipsa consequatur temporibus aliquid,
            laborum animi similique deleniti voluptas earum quaerat delectus
            omnis suscipit dolore soluta perferendis?
          </p>
          <h4>Discuss goals openly</h4>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            nesciunt, optio sit sint ipsa consequatur temporibus aliquid,
            laborum animi similique deleniti voluptas earum quaerat delectus
            omnis suscipit dolore soluta perferendis?
          </p>
          <h4>Stay informed</h4>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            nesciunt, optio sit sint ipsa consequatur temporibus aliquid,
            laborum animi similique deleniti voluptas earum quaerat delectus
            omnis suscipit dolore soluta perferendis?
          </p>
          <h4>Consider your challenges</h4>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            nesciunt, optio sit sint ipsa consequatur temporibus aliquid,
            laborum animi similique deleniti voluptas earum quaerat delectus
            omnis suscipit dolore soluta perferendis?
          </p>
          <div>
            <button className="common-btn-2 me-3">Read more</button>
            <button className="common-btn-1">Watch Video</button>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-5 container">
        <Row xs={1} md={2}>
          <Col>
            <div className="">
              <img src={girl} style={{ height: "330px" }} alt="" />
            </div>
          </Col>
          <Col>
            <div className="">
              <h2 className="mb-3">About Study Canada</h2>
              <h4 className="mb-3">
                How Canadian institutions accept education system of Bangladesh?
              </h4>
              <p className="mb-3">
                Discover top-ranked universities and colleges, explore top-rated
                programs, and scholarships, and unlock the window of
                opportunities with Study Canada. <br />
                We are one of the most trusted education consultancy firms in
                Bangladesh for students looking to study abroad from Bangladesh.{" "}
                <br />
                Start your journey towards a successful education and career in
                Canada with us.
              </p>
              <div>
                <button className="common-btn-2 me-3">Read More</button>
                <button className="common-btn-1">Profile Assessment Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section className="mb-5 mt-5 container">
        <h3 className="mb-5 text-center">Canadian Colleges & Universities</h3>
        <Row xs={1} md={3} className="g-5">
          {universities.map((university) => (
            <Col>
              <div
                style={{
                  width: "330px",
                  padding: "20px",
                  border: "1px solid rgba(170, 170, 170, 1)",
                  borderRadius: 5,
                }}
              >
                <img
                  src={university.img}
                  className="w-100"
                  style={{ height: "200px" }}
                  alt=""
                />
                <h5 className="mt-3" style={{ color: "rgba(14, 93, 165, 1)" }}>
                  {university.name}
                </h5>
                <p className="mb-3">{university.details}</p>
                <h6 style={{ color: "rgba(229, 0, 25, 1)" }}>View More</h6>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      <section
        style={{ backgroundColor: "rgba(247, 247, 247, 1)", padding: "30px 0" }}
      >
        <div className="container">
          <h3 style={{ color: "rgba(229, 0, 25, 1)" }}>Admission Support</h3>
          <p className="mb-3">
            Study Canada Education is a trusted consultancy firm with a
            demonstrated track record of guiding Bangladeshi students through
            the overall admission process and enrollment. We offer the following
            services.
          </p>
          <h4>Extensive Admissions Knowledge</h4>
          <p className="mb-3">
            Selecting the best university and leading program for Bangladeshi
            students may be alluring. As admissions counsellors, we can give
            each student a wealth of information to assist them in selecting the
            best university for them. <br />
            Additionally, we help students identify the most relevant area or
            program for their preferences and lead them toward a university that
            suits their educational and personal requirements.
          </p>
          <h4>Step-by-Step Instructions</h4>
          <p className="mb-3">
            We will assist you throughout the complete planning process. Our
            professional mentors precisely understand what practice and
            development distinguish a student. They can assist in creating a
            comprehensive plan for students that will provide them with a
            successful application. <br />
            As admissions consultants, we are familiar with the advantages and
            disadvantages of every college/university entrance test and can
            guide students on which one is ideal for them. During the
            application process, we consult with each candidate to design a
            captivating application that usually works for them. We display the
            best possible level in Canada university admission.
          </p>
          <button className="common-btn-1 me-3">Contact Our Experts</button>
          <button className="common-btn-2">Call Now</button>
        </div>
      </section>

      <section className="mt-5 container mb-5">
        <h3>Visa Processing</h3>
        <p className="mb-2 mt-3">
          StudyCanada visa processing time is the most challenging part that
          Bangladeshi students face before studying abroad. Yes, it's
          understandable if you're concerned about the process.
        </p>
        <p className="mb-2">
          Keeping this in mind, StudyCanada analyzes a comprehensive guide that
          will assist you in straightforwardly getting the procedure.
        </p>

        <p className="mb-3">
          Have a look at Canadian student visa processing requirements below:
        </p>

        <Row xs={1} md={2} className="mb-4">
          <Col>
            <div className="">
              <img
                src={passport}
                style={{
                  width: "90%",
                  height: "430px",
                  borderRadius: "20px",
                  marginRight: "35px",
                }}
                alt=""
              />
            </div>
          </Col>

          <Col>
            <div className="">
              <h4>Canada Study Visa Requirements</h4>
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
                    A confirmation letter from a recognized educational
                    institution stating that you are accepted to study in
                    Canada.
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
                    For the DLI to receive the acceptance letter, it should have
                    a COVID-19 preparedness plan approved.
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
                    A Québec Acceptance Certificate is also required for
                    students to enroll in Quebec.
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
                    A Québec Acceptance Certificate is also required for
                    students to enroll in Quebec.
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
                    Proof that, as a student, you have enough funds in your bank
                    account to cover your education costs.
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
                  <p>A Certificate of Medical Fitness (If required).</p>
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
                  <p>Certificate of Vaccination</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <h4>Canada Study Visa Process</h4>
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
                They'll also get application guidance, a tuition cost estimate,
                and a list of documents they'll need to submit with the student
                application. Students will receive their document checklists via
                email, permitting them to upload and transfer the documents to
                Citizenship and Immigration Canada (CIC).
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
                Maple Tree Education will assist you with every step of the visa
                application process. Our highly experienced visa experts will
                guide you through the entire procedure, ensuring that you
                receive a visa successfully.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <button className="common-btn-2 me-3">Read More</button>
            <button className="common-btn-1">Consult an Expert </button>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "rgba(247, 247, 247, 1)", padding: "30px 0" }}
      >
        <div className="container">
          <h3 style={{ color: "rgba(229, 0, 25, 1)" }} className="mb-4">
            Immigration and Settlement Services
          </h3>
          <h4>Eligibility requirement for Canadian Citizenship:</h4>
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
                The Canadian government analyzes the required application to
                ensure that students have all the documentation necessary. They
                can either reject it or ask for the missing documentation if
                it's lacking.
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
                The Canadian government analyzes the required application to
                ensure that students have all the documentation necessary. They
                can either reject it or ask for the missing documentation if
                it's lacking.
              </p>
            </div>
          </div>
          <h4>Language Requirements For Canadian Citizenship</h4>
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
                The Canadian government analyzes the required application to
                ensure that students have all the documentation necessary. They
                can either reject it or ask for the missing documentation if
                it's lacking.
              </p>
            </div>
          </div>
          <h4 className="mt-3 mb-3">
            <span style={{ color: "rgba(229, 0, 25, 1)" }}>
              (Contact us with any questions)
            </span>{" "}
            concerning Canadian citizenship requirements and applications.
          </h4>
          <div>
            <button className="common-btn-2 me-3">Read More</button>
            <button className="common-btn-1">Consult an Expert </button>
          </div>
        </div>
      </section>
      <Partnership />
      <Referral />
      <Questions />
      <Queries />
    </div>
  );
};

export default Home;
