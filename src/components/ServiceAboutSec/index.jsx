import React from "react";
import "./style.css";

const ServiceAboutSec = (props) => {
  return (
    <section className={`serviceAboutSec sec-padding ${props.className}`}>
      <div className="container">
        <div className={`row align-items-center ${props.rowClass}`}>
          <div className={props.leftCol || "col-lg-6"}>
            <div className="servicesAboutContent">
              {props.secTag && (
                <p className={`sec-tag ${props.secTagClass}`}>{props.secTag}</p>
              )}
              <h3
                className="secTitle"
                dangerouslySetInnerHTML={{ __html: props.secTitle }}
              />
              <p>{props.description}</p>
              {props.list && (
                <ul className={`packageCardList ${props.listClass}`}>
                  {props.list.map((item, listIndex) => (
                    <li key={listIndex}>{item}</li>
                  ))}
                </ul>
              )}
              {props.description2 && <p className="mt-3">{props.description2}</p>}
            </div>
          </div>
          <div className={props.rightCol || "col-lg-6"}>
            <div className="servicesAboutImg">
              <img
                src={props.image}
                alt={props.secTitle}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAboutSec;
