import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import contactBanner from "../../assets/images/contactBanner.webp";
import mapIcon from "../../assets/images/mapIcon.webp";
import phoneIcon from "../../assets/images/phoneIcon.webp";
import emailIcon from "../../assets/images/emailIcon.webp";

const Contact = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={contactBanner}
        title="Contact Us"
        description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Mi Eget Mauris Pharetra Et Ultrices."
        pageName="Contact Us"
      />
      <section className="contactUsPage sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contactUsPageContent">
                <p className="sec-tag">CONTACT US</p>
                <h3 className="secTitle">Get In Touch</h3>
                <p>
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And
                  Typesetting Industry. Lorem Ipsum Has Been The Industry.
                </p>
                <div className="officeDetails">
                  <div className="officeDetailItem">
                    <img src={mapIcon} alt="Map Icon" />
                    <p className="officeDetailItemText">
                      1000 Main St, Houston, TX 77002, United States
                    </p>
                  </div>
                  <div className="officeDetailItem">
                    <img src={phoneIcon} alt="Map Icon" />
                    <a href="tel:+18325484589" className="officeDetailItemText">+1 832 548 4589</a>
                  </div>
                  <div className="officeDetailItem">
                    <img src={emailIcon} alt="Map Icon" />
                    <a href="mailto:support@texaswebstudio.com" className="officeDetailItemText">
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

      <section className="contactUsPageMap">
        <iframe
          title="Los Angeles Map"
          width="100%"
          height={"450px"}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13236.436185047787!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1716200000000!5m2!1sen!2sus"
        />
      </section>
    </DefaultLayout>
  );
};

export default Contact;
