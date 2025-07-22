import React from "react";
import "./style.css"

const ContentWithICon = (props) => {
  const delay = props.index * 200;
  return (
    <div className="contentWithICon" data-aos="fade-up" data-aos-delay={delay}>
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
