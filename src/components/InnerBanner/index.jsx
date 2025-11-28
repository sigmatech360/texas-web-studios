import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import { FaArrowRightLong } from "react-icons/fa6";

const InnerBanner = (props) => {
  return (
    <section
      className={`innerBanner ${props.secClass}`}
      // style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      {/* <img
        src={props.bgImage}
        alt={props.title}
        className="inner-banner-sec-bgImg"
        fetchPriority="hight"
        width="1920"
        height="600"
        decoding="async"
      /> */}

      {/* Background Image with aspect ratio */}
      <div
        className="inner-banner-sec-bgImg"
        style={{
          backgroundImage: `url(${props.bgImage})`,
        }}
        role="img"
        aria-label={props.title}
      ></div>
      <div className="container">
        <div className="row align-items-center">
          <div className={`${props.leftCol || "col-lg-6"}`}>
            <div className="innerBannerContent">
              <h6>{props.minhead}</h6>
              <h1
                dangerouslySetInnerHTML={{ __html: props.title }}
                // data-aos="fade-right"
                // data-aos-delay="200"
              />
              <p
              // data-aos="fade-right"
              // data-aos-delay="400"
              >
                {props.description}
              </p>

              {props.serviceparatwo && <p>{props.serviceparatwo}</p>}

              <nav
                aria-label="breadcrumb"
                // data-aos="fade-right"
                // data-aos-delay="500"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.pageName}
                  </li>
                </ol>
              </nav>
              <ul className="herobanner-list d-none">
                  <li>E-commerce Development</li>
                  <li>Custom WordPress Development</li>
                  <li>Plug-ins Integration</li>
                  <li>Website Revamp</li>
                </ul>
                 {props.listdownpara && <p>{props.listdownpara}</p>}
             {props.btntxt && <Link to={props.btnLink || "/contact"} className={props.btnClass || "theme-btn"}>{props.btntxt}</Link>}

             {/* <div className="domaintransfer-banner-search d-none">
                <div className="domain-idea-search">
                  <input type="text" placeholder="Enter a domain or describe your idea well handle both"/>
                  <button className="theme-btn">Search</button>
                </div>
                <Link to="/contact">Transfer a domain you already own <FaArrowRightLong /></Link>
             </div> */}
            </div>
          </div>

          {props.bannerImg && (
            <div className={`${props.rightCol || "col-lg-6"}`}>
              <div
                className="innerBannerImg"
                // data-aos="fade-left"
                // data-aos-delay="300"
              >
                <img
                  src={props.bannerImg}
                  alt={props.title}
                  className={`img-fluid`}
                  width={"526"}
                  height={"553"}
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;
