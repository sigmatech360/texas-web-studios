import React from "react";
import { Link } from "react-router-dom";


const DomainRegisterationServices = ({ shortHead, mainHead, description, services, btnText, btnLink, CardCol , ServiceSecClass }) => {
  return (
    <section className={ServiceSecClass || "domainregister-services-sec"}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="frontend-services-head">
              <h6 className="shorttop-head">{shortHead}</h6>
              <h2 className="mainhead text-white">{mainHead}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {services?.map((item, index) => (
            <div key={index} className={CardCol || "col-lg-6 col-md-6"}>
              <div className="domainregister-service-card">
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="domainregister-service-btn">
              <Link to={btnLink} className="theme-btn">
                {btnText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainRegisterationServices;
