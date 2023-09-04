import React from "react";
import "./AboutUs.css";
import about from "../../images/about.png";
import abouticon1 from "../../images/about-icon1.png";
import abouticon2 from "../../images/about-icon2.png";
import mapbd from "../../images/map-bd.png";
import filter from "../../images/filter-icon.png";
import expert from "../../images/expert-icon.png";
import feature from "../../images/icon5.png";
import live from "../../images/live-icon.png";
import excellence from "../../images/Excellence.png";
import honest from "../../images/Honest.png";
import communication from "../../images/communication.png";
import creditable from "../../images/Creditable.png";
import student from "../../images/student.png";
import { FaLocationDot } from "react-icons/fa6";
import { Col, Row } from "react-bootstrap";
import Queries from "../shared/Queries";
import insta from "../../images/Instagram.png";
import twitter from "../../images/Twitter.png";
import fb from "../../images/Facebook.png";
import leader from "../../images/team.png";
import Partnership from "../shared/Partnership";
import Referral from "../shared/Referral";
import Questions from "../shared/Questions";

const AboutUs = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="about-banner">
          <div className="about-banner-style">
            <div className="about-banner-content">
              <h3 className="mb-3">About Study in Canada?</h3>
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
        <section className="mt-5 mb-5 container">
          <Row xs={1} md={2}>
            <Col>
              <div className="mt-4">
                <img
                  src={about}
                  style={{ width: "450px", height: "330px" }}
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <div className="ms-5">
                <h3 className="mb-3 mt-3">Our Infrastructure</h3>
                <p>
                  Discover top-ranked universities and colleges, explore
                  top-rated programs, and scholarships, and unlock the window of
                  opportunities with Study Canada.
                  <p className="mt-2">
                    We are one of the most trusted education consultancy firms
                    in Bangladesh for students looking to study abroad from
                    Bangladesh. Start your journey towards a successful
                    education and career in Canada with us.
                  </p>
                </p>
                <div className="d-flex justify-content-between mt-4">
                  <div className="">
                    <h3 style={{ color: "rgba(229, 0, 25, 1)" }}>20k+</h3>
                    <h6>
                      STUDENT <br /> COUNSELED
                    </h6>
                  </div>
                  <div className="">
                    <h3 style={{ color: "rgba(229, 0, 25, 1)" }}>680+</h3>
                    <h6>
                      UNIVERSITY <br /> OPTIONS
                    </h6>
                  </div>
                  <div>
                    <h3 style={{ color: "rgba(229, 0, 25, 1)" }}>2.5k+</h3>
                    <h6>
                      PROGRAM <br /> OPTIONS
                    </h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <div>
          <h2 className="mb-3">Our Way of Thinking</h2>
          <p className="mb-4">
            We are committed to the seekers who have a dream of immigrating to
            an overseas country or pursuing education over there. The
            appropriate and suitable aptitude of our student visa and
            immigration consultant team is promising to encourage the talented
            youths to cross the borders of their home country and explore a
            future overseas.
          </p>
          <Row xs={1} md={2}>
            <Col>
              <div
                style={{
                  width: "450px",
                  height: "270px",
                  padding: "25px",
                  marginRight: "30px",

                  backgroundColor: "rgba(238, 238, 238, 1)",
                  borderRadius: "10px",
                }}
                className="mb-3"
              >
                <img style={{ width: "65px" }} src={abouticon1} alt="" />
                <h3
                  className="mt-3 mb-3"
                  style={{ color: "rgba(229, 0, 25, 1)" }}
                >
                  Our Aim
                </h3>
                <p>
                  Our aim is to present the highest-quality immigration, student
                  visa, and coaching services and help the aspirants to attain
                  an immense level of satisfaction while seeking to realize
                  their overseas dream.
                </p>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "450px",
                  height: "270px",
                  padding: "25px",
                  backgroundColor: "rgba(238, 238, 238, 1)",
                  borderRadius: "10px",
                }}
                className="mb-3"
              >
                <img style={{ width: "65px" }} src={abouticon2} alt="" />
                <h3
                  className="mt-3 mb-3"
                  style={{ color: "rgba(229, 0, 25, 1)" }}
                >
                  Our Goal
                </h3>
                <p>
                  Our goal is to become the largest immigration and student visa
                  consultancy not only in Dhaka but across Bangladesh.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <Row xs={1} md={2}>
          <Col>
            <div className="">
              <h2 className="mb-3">
                <span style={{ color: "rgba(18, 26, 80, 1)" }}>Our</span>{" "}
                <span style={{ color: "rgba(229, 0, 25, 1)" }}>Branches</span>
              </h2>
              <p>
                We have branches in almost all major parts of Dhaka. Continuous
                efforts, sincere work and dedicated vision of our ambitious team
                have helped us to establish ourselves in Sylhet, Chittagong
                city. With a core focus on providing assured quality services,
                we strive to serve the best immigration, student visa and
                coaching services close to patrons and help them reach their
                needs and aspirations easily.
              </p>
              <h4 className="mt-3">
                <span style={{ color: "rgba(18, 26, 80, 1)" }}>Current</span>{" "}
                <span style={{ color: "rgba(229, 0, 25, 1)" }}>Location</span>
              </h4>
              <div className="d-flex mt-4">
                <div className="me-5">
                  <h6 style={{ color: "rgba(229, 0, 25, 1)" }}>
                    {" "}
                    <FaLocationDot /> Dhaka
                  </h6>
                </div>
                <div className="me-5">
                  <h6 style={{ color: "rgba(229, 0, 25, 1)" }}>
                    {" "}
                    <FaLocationDot /> Chittagong
                  </h6>
                </div>
                <div>
                  <h6 style={{ color: "rgba(229, 0, 25, 1)" }}>
                    {" "}
                    <FaLocationDot /> Sylhet
                  </h6>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <img
                src={mapbd}
                style={{ width: "410px", height: "310px" }}
                alt=""
              />
            </div>
          </Col>
        </Row>

        <div className="mt-5 mb-5">
          <h3 className="mb-3">What We Do</h3>
          <h4 className="mb-3">
            We offer tailor-made options to students with end-to-end assistance
            for admissions.
          </h4>
          <p className="mb-4">
            We understand their requirements and ambitions intently so they
            receive the best guidance. Study-canada is a one-stop destination
            with on ground and cloud presence for all its services. We ensure
            students also get online access to updated program information,
            applications status, and manage their profile.
          </p>
          <Row xs={1} md={4}>
            <Col>
              <div
                style={{
                  width: "260px",
                  height: "300px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "rgba(238, 238, 238, 1)",
                }}
              >
                <img className="about-card-icon" src={filter} alt="" />
                <h4 style={{ color: "rgba(233, 29, 29, 1)", margin: "10px 0" }}>
                  Range of filters
                </h4>
                <p>
                  Program and institute search made easy with extensive filters
                  for eligibility, tuition fee, field of interest, choice of
                  region and more
                </p>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "260px",
                  height: "300px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "rgba(238, 238, 238, 1)",
                }}
              >
                <img className="about-card-icon" src={expert} alt="" />
                <h4 style={{ color: "rgba(233, 29, 29, 1)", margin: "10px 0" }}>
                  Expert Guidance
                </h4>
                <p>
                  On-call and face-to-face sessions with expert advisors to help
                  students find the right programs
                </p>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "260px",
                  height: "300px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "rgba(238, 238, 238, 1)",
                }}
              >
                <img className="about-card-icon" src={feature} alt="" />
                <h4 style={{ color: "rgba(233, 29, 29, 1)", margin: "10px 0" }}>
                  Multi-apply Feature
                </h4>
                <p>
                  Multiple applications to any number of programs and institutes
                  with a single profile
                </p>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "260px",
                  height: "300px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "rgba(238, 238, 238, 1)",
                }}
              >
                <img className="about-card-icon" src={live} alt="" />
                <h4 style={{ color: "rgba(233, 29, 29, 1)", margin: "10px 0" }}>
                  Live-tracking feature
                </h4>
                <p>
                  Tracking of applications with direct updates from the
                  institutes
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div
        style={{ backgroundColor: "rgba(248, 248, 248, 1)", padding: "10px" }}
      >
        <Queries />
      </div>

      <section
        style={{
          backgroundColor: "rgba(223, 46, 66, 1)",
          color: "white",
          padding: "20px",
        }}
      >
        <div className="container">
          <h2 className="text-center mb-3">Why Coaching Study-Canada?</h2>
          <p className="text-center mb-3">
            Study-Canada is a group of highly knowledgeable immigration and
            student visa experts capable <br /> to serve all sorts of clients
            across the globe. Our top-notch service standards include
          </p>

          <Row xs={1} md={2}>
            <Col>
              <div className="me-5">
                <img
                  src={student}
                  style={{
                    width: "350px",
                    height: "310px",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <div>
                <div className="d-flex align-items-center mt-3">
                  <div className="me-3">
                    <img src={honest} style={{ width: "50px" }} alt="" />
                  </div>
                  <div>
                    <h6>Honest and transparent work approach</h6>
                    <p>
                      We are transparent. We provide clear and complete
                      information to our clients and keep no point hidden from
                      them.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div className="me-3">
                    <img src={communication} style={{ width: "50px" }} alt="" />
                  </div>
                  <div>
                    <h6>Easy communication</h6>
                    <p>
                      Our easily reachable team guarantees swift and timely
                      communication whenever the client needs it.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div className="me-3">
                    <img src={creditable} style={{ width: "50px" }} alt="" />
                  </div>
                  <div>
                    <h6>Creditable behavior</h6>
                    <p>
                      We are transparent. We provide clear and complete
                      information to our clients and keep no point hidden from
                      them.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div className="me-3">
                    <img src={excellence} style={{ width: "50px" }} alt="" />
                  </div>
                  <div>
                    <h6>Excellence</h6>
                    <p>
                      We are transparent. We provide clear and complete
                      information to our clients and keep no point hidden from
                      them.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="container mt-5">
        <h3>Our Leadership</h3>
        <p className="mb-4">Lorem ipsum dolor sit amet.</p>
        <div
          className="d-flex leader-div p-3 mb-4"
          style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
        >
          <img
            src={leader}
            style={{ width: "240px", height: "210px" }}
            className="me-5"
            alt=""
          />
          <div>
            <h4 style={{ color: "rgba(233, 29, 29, 1)" }}>Leader name</h4>
            <h6>CEO & Co-founder, Study Canada</h6>
            <p className="mt-3">
              Esbo Khan heads business development and marketing strategies. He
              is a certified member of CICC, and amongst the first licensed
              Canadian immigration consultants globally.
            </p>
            <div className="d-flex mt-4">
              <img src={fb} className="me-2" alt="" />
              <img src={twitter} className="me-2" alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
        </div>
        <div
          className="d-flex leader-div p-3 mb-4"
          style={{
            backgroundColor: "rgba(247, 247, 247, 1)",
            borderRadius: "10px",
          }}
        >
          <img
            src={leader}
            style={{ width: "240px", height: "210px" }}
            className="me-5"
            alt=""
          />
          <div>
            <h4 style={{ color: "rgba(233, 29, 29, 1)" }}>Leader name</h4>
            <h6>CEO & Co-founder, Study Canada</h6>
            <p className="mt-3">
              Esbo Khan heads business development and marketing strategies. He
              is a certified member of CICC, and amongst the first licensed
              Canadian immigration consultants globally.
            </p>
            <div className="d-flex mt-4">
              <img src={fb} className="me-2" alt="" />
              <img src={twitter} className="me-2" alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
        </div>
        <div
          className="d-flex leader-div p-3"
          style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
        >
          <img
            src={leader}
            style={{ width: "240px", height: "210px" }}
            className="me-5"
            alt=""
          />
          <div>
            <h4 style={{ color: "rgba(233, 29, 29, 1)" }}>Leader name</h4>
            <h6>CEO & Co-founder, Study Canada</h6>
            <p className="mt-3">
              Esbo Khan heads business development and marketing strategies. He
              is a certified member of CICC, and amongst the first licensed
              Canadian immigration consultants globally.
            </p>
            <div className="d-flex mt-4">
              <img src={fb} className="me-2" alt="" />
              <img src={twitter} className="me-2" alt="" />
              <img src={insta} alt="" />
            </div>
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

export default AboutUs;
