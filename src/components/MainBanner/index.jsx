import React from "react";

import "./style.css";

const MainBanner = ({ onOpenModal }) => {
  return (
    <section className="mainBanner">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="mainBannerContent">
              <h1 data-aos="fade-right" data-aos-delay="200">
                Become A Digital Leader In Your Industry With Texas Web Studios
              </h1>
              <p data-aos="fade-right" data-aos-delay="400">
                With Decades Of Expertise In Building High-Impact Strategies. We
                Help Brands Grow With Proven Digital Marketing And Web Design
                Services That Deliver.
              </p>
              <button
                className="theme-btn"
                onClick={onOpenModal}
                data-aos="fade-right"
                data-aos-delay="600"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
