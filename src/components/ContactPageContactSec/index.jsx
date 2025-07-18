import React from "react";

import mapIcon from "../../assets/images/mapIcon.webp";
import phoneIcon from "../../assets/images/phoneIcon.webp";
import emailIcon from "../../assets/images/emailIcon.webp";

const ContactPageContactSec = (props) => {
  return (
    <section className="contactUsPage sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contactUsPageContent">
              <p className="sec-tag">{props.secTag}</p>
              <h3 className="secTitle">{props.secTitle}</h3>
              <p>{props.description}</p>
              <div className="officeDetails">
                <div className="officeDetailItem">
                  <img src={mapIcon} alt="Map Icon" />
                  <p className="officeDetailItemText">
                    1000 Main St, Houston, TX 77002, United States
                  </p>
                </div>
                <div className="officeDetailItem">
                  <img src={phoneIcon} alt="Map Icon" />
                  <a href="tel:+18325484589" className="officeDetailItemText">
                    +1 832 548 4589
                  </a>
                </div>
                <div className="officeDetailItem">
                  <img src={emailIcon} alt="Map Icon" />
                  <a
                    href="mailto:support@texaswebstudio.com"
                    className="officeDetailItemText"
                  >
                    Support@texaswebstudio.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contactForm">
              <form>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <input
                      type="text"
                      placeholder="Select Services"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      className="form-control"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                  <div className="col-md-12 mt-4">
                    <button className="theme-btn">Send A Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageContactSec;
