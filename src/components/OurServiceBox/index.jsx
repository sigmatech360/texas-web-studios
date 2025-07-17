import React from "react";
import "./style.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const OurServiceBox = (props) => {
  return (
    <div className="ourServiceBox">
      <div className="ourServiceBoxImg">
        <img src={props.image} alt={props.title} className="img-fluid" />
      </div>
      <div className="ourServiceBoxContent">
        <img
          src={props.icon}
          alt={props.title}
          className="ourServiceBoxContentIcon"
        />
        <h5 className="ourServiceBoxContentTitle">{props.title}</h5>
        <p>{props.description}</p>
        <Link to={props.link} className="link">
          Learn More <IoIosArrowRoundForward />
        </Link>
      </div>
    </div>
  );
};

export default OurServiceBox;
