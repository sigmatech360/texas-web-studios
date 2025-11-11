import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { toast } from "react-toastify";

const LocationContact = (props) => {
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
    <section className="location-contact-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="location-contact-txt">
              <h6>{props.minihead}</h6>
              <h2>{props.mainhead}</h2>
              <p>{props.secPara}</p>
              <ul>
                <li>
                  <span>
                    <FaPhoneAlt />
                  </span>{" "}
                  +1 (713) 936-4992
                </li>
                <li>
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      color="#D41F14"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path>
                    </svg>
                  </span>{" "}
                  support@texaswebstudioscom
                </li>
                <li>
                  <span>
                    <LuMapPin />
                  </span>{" "}
                  1000 main st, houston, tx 77002, united states
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contactForm">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                      name="username"
                      required
                    />
                  </div>
                   <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Company Organization"
                      className="form-control"
                      name="username"
                      required
                    />
                  </div>
                   <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Website"
                      className="form-control"
                      name="username"
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
                    <div className="col-lg-12 mb-3">
                    <input
                      type="text"
                      placeholder="How Did You Hear About TWS?"
                      className="form-control"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      className="form-control"
                      placeholder="Tell Us About Your Buisness"
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

export default LocationContact;
