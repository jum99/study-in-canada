import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import {IoMenuOutline} from 'react-icons/io5';
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import email from "../../../images/Email.png";
import fb from "../../../images/Facebook.png";
import twitter from "../../../images/Twitter.png";
import insta from "../../../images/Instagram.png";
import wp from "../../../images/Whatsapp.png";
import youtube from "../../../images/Youtube.png";

const Header = () => {
  return (
    <div className="mb-4" style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}>
      <Navbar expand="lg" className="container navbar-div">
        <Navbar.Toggle
          style={{ backgroundColor: "#e2f2ef", marginLeft: "17px" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="ms-3" id="basic-navbar-nav">
          <Nav className="me-auto d-flex ">
            <Link to="/" className="nav-link me-3">
              Home
            </Link>
            <Link to="/aboutUs" className="nav-link me-3">
              About Us
            </Link>
            <NavDropdown title="Service" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/services" className="nav-link me-3">
                  Service
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/studentProfile" className="nav-link me-3">
                  Student Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/financial" className="nav-link me-3">
                  Financial
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/visa" className="nav-link me-3">
                  Visa
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/admission" className="nav-link me-3">
                  Admission
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/scholarship" className="nav-link me-3">
                  Scholarship
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/departure" className="nav-link me-3">
                  Departure
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Link to="/admissionHelp" className="nav-link me-3 ">
              Admission Help
            </Link>
            <Link to="/findCourse" className="nav-link me-3 ">
              Find a course
            </Link>
            <Link to="/studentEsentials" className="nav-link me-3">
              Student Esentials
            </Link>
            <Link to="/studyCanada" className="nav-link me-3">
              Study Canada
            </Link>
          </Nav>
          <div className="d-flex nav-img">
            <img src={email} alt="" />
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
            <img src={wp} alt="" />
            <img src={youtube} alt="" />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
