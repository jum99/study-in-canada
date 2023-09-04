import React from "react";
import "./Departure.css";
import departure from "../../../images/departure.png";
import { Col, Row } from "react-bootstrap";
import Assessment from "../../shared/Assessment";

const Departure = () => {
  return (
    <div>
      <div className="container">
        <div className="common-banner">
          <div className="common-banner-style">
            <div className="common-banner-content">
              <h3 className="mb-3">
                Post Departure Support - Services by Study Canada
              </h3>
              <p className="mb-4">
                Our relationship does not end once you fly away. It just starts
                all over again. Our counselors shall remain <br /> available
                round-the-clock to ensure that you face no difficulty at all
                during your entire stay.
              </p>
              <button className="banner-btn">Contact Our Team</button>
            </div>
          </div>
        </div>

        <section className="mt-5">
          <Row xs={1} md={2}>
            <Col>
              <div className="me-4 mb-3 mt-3">
                <img
                  src={departure}
                  style={{ width: "80%", borderRadius: 5 }}
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <div>
                <h3 className="mb-3">We'll Help You Feel at Home Canada.</h3>
                <p className="mb-3">
                  The Pre-departure guide we provide to the students aims to
                  give them clear idea of the issues to consider at their
                  departure. This guideline is a great platform for the students
                  to find out about the Step by step preparation is required
                  before they fly to their desired country.
                </p>
                <h5>
                  The Pre-Departure Guide is to Equip Students with the
                  Following Information:
                </h5>
                <ul style={{ margin: 0, padding: "19px" }}>
                  <li>Packing checklist</li>
                  <li>Medical Insurance Requirements</li>
                  <li>Tickets booking</li>
                </ul>
                <button
                  className="profile-btn"
                  style={{ backgroundColor: "rgba(229, 0, 25, 1)" }}
                >
                  Enquire Now
                </button>
              </div>
            </Col>
          </Row>
        </section>

        <section className="mt-5">
          <h3 className="mb-3">We'll Help You Feel at Home Canada.</h3>
          <p className="mb-4">
            We’re committed to making sure you feel supported at every step of
            your study overseas journey. That’s why we host pre-departure
            briefings throughout the year to help you prepare for life in your
            new country.
          </p>

          <Row xs={1} md={2} className="g-4">
            <Col>
              <div className="departure-card">
                <h5>From visiting to belonging</h5>
                <p>
                  These pre-departure orientation sessions will help you
                  navigate personal and cultural growth opportunities while
                  you’re abroad. You’ll discover more about:
                </p>
              </div>
            </Col>
            <Col>
              <div className="departure-card">
                <h5>Insights into the local culture</h5>
                <p>
                  It helps to have some knowledge of the local culture and
                  customs before arriving in your study country. This eases your
                  transition into the community and helps you interact with your
                  new classmates more effectively. Half of the fun of going
                  abroad is learning about the things people from other cultures
                  do differently.
                </p>
              </div>
            </Col>
            <Col>
              <div className="departure-card">
                <h5>Student life in your new country</h5>
                <p>
                  When you study overseas, you’ll need to adjust to a new
                  learning environment, where there may be different learning
                  styles, classroom environments and expectations. You’ll also
                  be getting used to new cultural norms as a student.
                </p>
              </div>
            </Col>
            <Col>
              <div className="departure-card">
                <h5>Culture shock</h5>
                <p>
                  Culture shock is very common when you move to a completely
                  different culture than yours. Since it plays an important role
                  in adjusting to your study country, we’ll discuss the various
                  stages (honeymoon, frustration, adjustment and acceptance) in
                  our briefings. We would also guide you with some simple
                  techniques on how to recognise if you are facing culture
                  shock, the stage you are in and how to deal with it.
                </p>
              </div>
            </Col>
            <Col>
              <div className="departure-card">
                <h5>Support and well-being in your new country</h5>
                <p>
                  Whether it’s academic support, English language help or visa
                  advice, we outline some of the practical support that’s
                  available to international students
                </p>
              </div>
            </Col>
            <Col>
              <div className="departure-card">
                <h5>Banking and foreign exchange</h5>
                <p>
                  One of the first things on your to-do list when you arrive in
                  your new study country will be setting up a bank account.
                  Having a local bank account will ensure that you have easy
                  access to your money to pay for your accommodation, tuition
                  fees and living expenses. It also allows your employer to
                  deposit your remuneration into your account if you choose to
                  work during or post studies.
                </p>
              </div>
            </Col>
            <Col>
              <div className="departure-card">
                <h5>Working while you study and advice on internships</h5>
                <p>
                  Part-time jobs can help complement your study and living
                  experience. We’ll discuss how to stay within the rules of your
                  student visa and help you with some tips on finding a good
                  student job.
                </p>
              </div>
            </Col>
            <Col>
              <div className="departure-card">
                <h5>Dealing with homesickness</h5>
                <p>
                  We know it’s hard to stay away from family and friends, but
                  we’ll help you with some tips on how to deal with the feeling
                  of homesickness when you arrive in your study country.
                </p>
              </div>
            </Col>
            <Col>
              <div className="departure-card">
                <h5>Brush up on legalities</h5>
                <p>
                  We’ll brief you on the dos and don’ts of your study country
                  and what right you have as an international students. …plus,
                  much more practical guidance and support.
                </p>
              </div>
            </Col>
            <Col>
              <div className="departure-card">
                <h5>A network of advice</h5>
                <p>
                  You will also have the opportunity to ask questions of IDP
                  alumni and network with current and future students just like
                  you.
                </p>
              </div>
            </Col>
          </Row>
        </section>

        <section className="mt-5 mb-5">
          <h3 className="mb-4">
            Here’s Advice we’ll Give you for Pre-Departure
          </h3>

          <div className="mb-3">
            <h5>What to Pack?</h5>
            <p>
              Being organized when you are packing will save you a lot of time
              and hassle in your new country. That’s why we help you with a
              ready checklist to refer to before leaving your country.
            </p>
          </div>

          <div className="mb-3">
            <h5>Insurance</h5>
            <p>
              We also guide for the insurance needed. Some countries might need
              international students to have specific travel or health
              insurance. We will guide you through this. We will provide you
              with the link and guide further for this, as per your profile.
            </p>
          </div>
          <div className="mb-3">
            <h5>Travel Arrangements</h5>
            <p>
              Being organized when you are packing will save you a lot of time
              and hassle in your new country. That’s why we help you with a
              ready checklist to refer to before leaving your country.
            </p>
          </div>
          <div className="mb-3">
            <h5>What to Pack?</h5>
            <p className="mb-2">
              Our work does not complete with your obtainment of a Visa. We can
              also guide you with the tickets booking. We will provide you with
              a trustable reference. We are there with you in your every step,
              guiding you thoroughly.
            </p>
            <p>
              We will be with you till the process end. Our Pre-departure guide
              will help you to plan your journey hassle-free. We will make sure
              you are fully informed of the latest information and conditions.
            </p>
          </div>
        </section>
        <Assessment />
      </div>
    </div>
  );
};

export default Departure;
