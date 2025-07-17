import React from "react";
import "./style.css"

const ContentWithICon = (props) => {
  return (
    <div className="contentWithICon">
      <img
        src={props.icon}
        alt={props.title}
        className={`contentWithICon-icon`}
      />
      <div className={`contentWithICon-content`}>
        <h4 className="contentWIthIcon-title">{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ContentWithICon;
