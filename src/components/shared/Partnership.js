import React from "react";
import partnership1 from "../../images/partnership1.png";
import partnership2 from "../../images/partnership2.png";
import partnership3 from "../../images/partnership3.png";
import partnership4 from "../../images/partnership4.png";
import partnership5 from "../../images/partnership5.png";

const Partnership = () => {
  return (
    <div className="mt-5 container">
      <h3 className="mb-4">Partnership</h3>
      <div>
        <img src={partnership1} className="me-3" alt="" />
        <img src={partnership2} className="me-3" alt="" />
        <img src={partnership3} className="me-3" alt="" />
        <img src={partnership4} className="me-3" alt="" />
        <img src={partnership5} alt="" />
      </div>
    </div>
  );
};

export default Partnership;
