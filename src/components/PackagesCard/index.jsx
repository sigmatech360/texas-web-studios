import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import "./style.css"
import ListItem from "../ListItem";

const PackagesCard = (props) => {
  return (
    <div className="packageCard">
      <div className="packageCardHeader">
        <p className="packageName">{props.name}</p>
        <div className="packagePriceDiv">
          <h4 className="packagePrice">{props.price}</h4>
          <p>Month</p>
        </div>
      </div>
      <div className="packageCardBody">
        <h5 className="packageCardBody-title">What's Include</h5>
        <ListItem list={props.list} />
        <button className="theme-btn icon-btn">
          Get Started <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
  );
};

export default PackagesCard;
