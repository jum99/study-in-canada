import React from "react";
import "./TopHeader.css";
import logo from "../../../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const TopHeader = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(238, 238, 238, 1)", padding: "10px 0" }}
    >
      <div className="top-header container d-flex justify-content-between align-items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="top-header-2 d-flex ">
          <div className="search-input d-flex">
            <input
              type="search"
              placeholder="Search courses, universities ..."
            />
            <div className="search-icon">
              <AiOutlineSearch />
            </div>
          </div>

          <button className="common-btn-2 ms-4">Partner with us</button>
          <button className="common-btn-1 ms-3">
            Join our Referral Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
