import React from "react";
import "./HomeBanner.css";
import girl from "../../images/girl-image.png";

const HomeBanner = () => {
  return (
    <div className="home-banner d-flex justify-content-center mt-5 mb-5">
      <div className="hbanner1">
        <div className="hbanner1-style">
          <div className="hbanner1-content">
            <div className="d-flex">
              <div className="content">
                <h3 className="mb-3">Why Canada?</h3>
                <p className="mb-4">
                  has been the most popular study destination for over 60%
                  Bangladeshi students ?
                </p>
                <button className="banner-btn">Contact Our Team</button>
              </div>
              <div className="hbanner1-img">
                <img src={girl} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="small-banners">
        <div className="hbanner2">
          <div className="hbanner2-style">
            <div className="hbanner2-content">
              <button>How can we help?</button>
            </div>
          </div>
        </div>
        <div className="hbanner3">
          <div className="hbanner3-style">
            <div className="hbanner3-content">
              <h6>
                Complete Education Profile <br /> Assessment
              </h6>
            </div>
          </div>
        </div>
        <div className="hbanner4">
          <div className="hbanner4-style">
            <div className="hbanner4-content">
              <h6>
                {" "}
                Complete Education Profile <br /> Assessment
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
