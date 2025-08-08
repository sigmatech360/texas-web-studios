import React from "react";

import "./style.css";
import { useModal } from "../../context/ModalContext";

const MainBanner = () => {
  const { setShowModal } = useModal();
  return (
    <section className="mainBanner">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="mainBannerContent">
              <h1 
              // data-aos="fade-right" data-aos-delay="200"
              >
                Become a Digital Leader in Your Industry with Texas Web Studios
              </h1>
              <p 
                // data-aos="fade-right" data-aos-delay="400"
              >
                with Decades of Expertise in Building High-Impact Strategies. We
                Help Brands Grow with Proven Digital Marketing and Web Design
                Services that Deliver.
              </p>
              <button
                className="theme-btn"
                onClick={() => setShowModal(true)}
                // data-aos="fade-right"
                // data-aos-delay="600"
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
