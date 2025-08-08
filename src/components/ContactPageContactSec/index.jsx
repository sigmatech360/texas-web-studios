import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import mapIcon from "../../assets/images/mapIcon.webp";
import phoneIcon from "../../assets/images/phoneIcon.webp";
import emailIcon from "../../assets/images/emailIcon.webp";
import ObfuscatedEmail from "../ObfuscatedEmail";
import PhoneLink from "../PhoneLink";

const ContactPageContactSec = (props) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    data_message: "",
  });

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/submit-query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      // toast.success("Form Submitted Successfully");

      if (result.status) {
        toast.success(result.message);
        setFormData({
          username: "",
          email: "",
          phone: "",
          subject: "",
          service: "",
          data_message: "",
        });
      } else {
        const messages = result.message;
        Object.keys(messages).forEach((field) => {
          messages[field].forEach((msg) => {
            toast.error(msg);
          });
        });
      }
    } catch (error) {
      console.log(`Error submitting form:`, error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="contactUsPage sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contactUsPageContent">
              <p className="sec-tag">{props.secTag}</p>
              <h3
                className="secTitle"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {props.secTitle}
              </h3>
              <p data-aos="fade-right" data-aos-delay="400">
                {props.description}
              </p>
              <div
                className="officeDetails"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <div className="officeDetailItem">
                  <img src={mapIcon} alt="Map Icon" />
                  <p className="officeDetailItemText">
                    1000 Main St, Houston, TX 77002, United States
                  </p>
                </div>
                <div className="officeDetailItem">
                  <img src={phoneIcon} alt="Map Icon" />
                  <PhoneLink
                    phoneNumber="+13462505428"
                    label={"+1 (346) 250-5428"}
                    className="officeDetailItemText"
                  />
                </div>
                <div className="officeDetailItem">
                  <img src={emailIcon} alt="Map Icon" />
                  <ObfuscatedEmail className="officeDetailItemText" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contactForm">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label htmlFor="serviceSelect" className="visually-hidden">
                      Select Services
                    </label>
                    <select
                      id="serviceSelect"
                      className="form-select form-control"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Services
                      </option>
                      <option value="web-design-development">
                        Web Design and Development
                      </option>
                      <option value="logo-design">Logo Design</option>
                      <option value="cms-development">CMS Development</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="social-media-marketing">
                        Social Media Marketing
                      </option>
                      <option value="seo">SEO</option>
                      <option value="custom-development">
                        Custom Development
                      </option>
                      <option value="mobile-app-development">
                        Mobile App Development
                      </option>
                    </select>
                    {/* <input
                      type="text"
                      placeholder="Select Services"
                      className="form-control"
                    /> */}
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      className="form-control"
                      placeholder="Write Message"
                      name="data_message"
                      value={formData.data_message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12 mt-4">
                    <button
                      type="submit"
                      className={`theme-btn ${
                        loading ? "btn-loading" : "btn-loaded"
                      }`}
                      disabled={loading}
                    >
                      Send a Message
                    </button>
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
