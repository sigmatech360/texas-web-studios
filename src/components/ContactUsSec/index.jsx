import React from "react";
import "./style.css";

const ContactUsSec = () => {
  return (
    <section className="contactSec bgBlack sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contactContent">
              <div className="secHead">
                <p className="sec-tag">CONTACT US</p>
                <h3
                  className="secTitle"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Drop Us A Line.
                </h3>
                <p data-aos="fade-right" data-aos-delay="400">
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And
                  Typesetting Industry. Lorem Ipsum Has Been The Industry.
                </p>
              </div>
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
          <div className="col-lg-6">
            <div className="contactMap">
              <iframe
                title="Los Angeles Map"
                width="100%"
                height={"450px"}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13236.436185047787!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1716200000000!5m2!1sen!2sus"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSec;
