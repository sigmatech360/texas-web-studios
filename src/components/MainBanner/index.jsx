import React from "react";

import "./style.css"

const MainBanner = () => {
  return (
    <section className="mainBanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mainBannerContent">
              <h1>
                Become A Digital Leader In Your Industry With Texas Web Studios
              </h1>
              <p>
                With Decades Of Expertise In Building High-Impact Strategies. We
                Help Brands Grow With Proven Digital Marketing And Web Design
                Services That Deliver.
              </p>
              <button className="theme-btn">Get Started Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
