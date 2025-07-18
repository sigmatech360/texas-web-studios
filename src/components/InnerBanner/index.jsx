import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const InnerBanner = (props) => {
  return (
    <section
      className={`innerBanner`}
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className={`${props.leftCol || "col-lg-6"}`}>
            <div className="innerBannerContent">
              <h1 dangerouslySetInnerHTML={{ __html: props.title }} />
              <p>{props.description}</p>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.pageName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className={`${props.rightCol || "col-lg-6"}`}>
            {props.bannerImg && (
              <div className="innerBannerImg">
                <img
                  src={props.bannerImg}
                  alt={props.title}
                  className={`img-fluid`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;
