import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import pricingBanner from "../../assets/images/pricingBanner.webp";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <DefaultLayout>
      <section
        className={`innerBanner`}
        // style={{ backgroundImage: `url(${props.bgImage})` }}
      >
        {/* Background Image with aspect ratio */}
        <div
          className="inner-banner-sec-bgImg"
          style={{
            backgroundImage: `url(${pricingBanner})`,
          }}
          role="img"
          aria-label={"Page not found"}
        ></div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className={`col-lg-8`}>
              <div className="innerBannerContent text-center">
                <h1>404 - Page Not Found</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <Link to={"/"} className="theme-btn d-inline-block mt-3">
                  Go to Home
                </Link>

                {/* <nav
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {props.pageName}
                    </li>
                  </ol>
                </nav> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default NotFound;
