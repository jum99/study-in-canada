import React from "react";
import coin from "../../../images/coin.png";
import Assessment from "../../shared/Assessment";
import Questions from "../../shared/Questions";
import { Col, Row } from "react-bootstrap";

const Financial = () => {
  return (
    <div>
      <div className="container">
        <div className="common-banner">
          <div className="common-banner-style">
            <div className="common-banner-content">
              <h3 className="mb-3">Financial Eligibility Assessment</h3>
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
              <div className="me-4">
                <img src={coin} style={{ width: "90%" }} alt="" />
              </div>
            </Col>
            <Col>
              <div className="">
                <h3 className="mb-3">
                  Banking Made Easier for International Students
                </h3>
                <p className="mb-3">
                  Getting you finances organised is important, with IDP we can
                  simplify the process before you leave your home country.
                </p>
                <h5>Banking for International Students</h5>
                <p>Keeps your money safe and secure as you study overseas!</p>
                <ul style={{ margin: 0, padding: "19px" }}>
                  <li>
                    Setting up your finances prior to arrival at your study
                    destination makes things easier when you get there.
                  </li>
                  <li>
                    Some financial institutions offer specialised products or
                    discounts for students
                  </li>
                  <li>
                    Access mobile banking - making it easy to pay your friends
                    using their phone number or pay in shops by tapping your
                    mobile.
                  </li>
                </ul>

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
          <h3 className="mb-3">About Simplii Financial</h3>
          <p className="mb-4">
            Simplii Financial™, a division of CIBC, is a digital banking brand
            offering great rates and free daily banking. Bank securely whenever
            and wherever you like with 24/7 access to online, mobile and
            telephone banking as well as access to one of the largest national
            ATM networks in Canada through CIBC. Simplified banking is our
            promise to you! With Simplii Financial, you get chequing, savings,
            mortgage, borrowing, investment and credit cards all in one simple
            place.
          </p>

          <div
            className="p-3"
            style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
          >
            <h6>Blue pod content</h6>
            <p>
              With Simplii Financial, international students can access a suite
              of financial services through the International Student Banking
              Offer (ISBO) as described below:
            </p>
            <Row xs={1} md={2}>
              <Col>
                <div className="me-4">
                  <ul style={{ margin: 0, padding: "19px" }}>
                    <li>
                      Choose between our Student GIC program or Student Deposit
                      program to help meet study permit requirements, or simply
                      pre-fund a Canadian Account.
                    </li>
                    <li>
                      Enjoy no-fee daily banking with no minimum balance
                      required
                    </li>
                    <li>
                      Unlimited debit, Interac e-Transfer® transactions and easy
                      access to services like Global Money Transfer
                    </li>
                    <li>
                      Posting information relating to CIBC/Simplii Financial or
                      ISBO Program is not, and should not be construed as,
                      solicitation or invitation for availing services, by
                      CIBC/Simplii Financial. Information by CIBC/Simplii
                      Financial in relation to ISBO will be available to
                      non-Canadian residents only at their request.*
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div>
                  <ul style={{ margin: 0, padding: "19px" }}>
                    <li>
                      Apply for an account in just 5 minutes. We usually process
                      your applicationon the same day with no application
                      processing fees for international clients paying in
                      foreign currency
                    </li>
                    <li>
                      Apply and you can also receive a credit card with a credit
                      limit of up to $2,000 without any prior Canadian credit
                      history
                    </li>
                    <li>
                      Simplii Financial is a division of CIBC, a Canada Deposit
                      Insurance Corporation (CDIC) member
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <Assessment />
      </div>
      <Questions />
    </div>
  );
};

export default Financial;
