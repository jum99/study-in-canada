import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import fb from "../../../images/fb-icon.png";
import call from "../../../images/call-icon.png";
import twitter from "../../../images/twitter-icon.png";
import insta from "../../../images/insta-icon.png";
import linkedin from "../../../images/linkedin-icon.png";
import logo from "../../../images/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer-section mt-5">
      <div className="footer-top row row-cols-md-4 row-cols-lg-4 row-cols-sm-2">
        <div className="col-12">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipisiing elit. Nam,
            aspernatur!
          </p>
          <div className="footer-social-icon">
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="footer-links col-12 mb-3">
          <h5>Our Service</h5>
          <Link>Student Profile Analysis</Link>
          <Link>Financial eligibility assessment</Link>
          <Link>Visa Processing</Link>
          <Link>Admission Support</Link>
          <Link>Scholarship And Financial Aid</Link>
          <Link>Post Departure Support</Link>
          <Link>Immigration and settlement services</Link>
        </div>
        <div className="footer-links col-6">
          <h5>Useful links</h5>
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Service</Link>
          <Link>Blog</Link>
          <Link>Event</Link>
          <Link>Apply Now</Link>
          <Link>Contact Us</Link>
        </div>
        <div className="footer-links col-6">
          <h5 className="mb-3">Our Phone Number</h5>
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center me-3"
              style={{
                backgroundColor: "rgba(113, 116, 139, 1)",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
              }}
            >
              <img src={call} alt="" />
            </div>
            <p>017 0000 5555</p>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center me-3"
              style={{
                backgroundColor: "rgba(113, 116, 139, 1)",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
              }}
            >
              <img src={call} alt="" />
            </div>
            <p>017 0000 5555</p>
          </div>

          <h5 className="mt-4 mb-3">Email or Website</h5>
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center me-3"
              style={{
                backgroundColor: "rgba(113, 116, 139, 1)",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
              }}
            >
              <img src={call} alt="" />
            </div>
            <p>studycan@gmail.com</p>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center me-3"
              style={{
                backgroundColor: "rgba(113, 116, 139, 1)",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
              }}
            >
              <img src={call} alt="" />
            </div>
            <p>www.study-can.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Opstel IT All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
