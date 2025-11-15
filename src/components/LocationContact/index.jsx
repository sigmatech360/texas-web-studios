import React, { useState } from "react";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { toast } from "react-toastify";

const LocationContact = (props) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    service: "",
    hearAbout: "",
    message: "",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // validation
    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      setLoading(false);
      return;
    }

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      company: formData.company,
      website: formData.website,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      about_cwc: formData.hearAbout,
      business: formData.message,
    };

    try {
      const response = await axios.post(`${apiUrl}/let-connect`, payload);

      if (response.data?.status) {
        toast.success(
          response.data.message ||
            "Your query has been submitted successfully, we will contact you shortly."
        );

        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          website: "",
          email: "",
          phone: "",
          service: "",
          hearAbout: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Submission failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="location-contact-sec">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-6">
            <div className="location-contact-txt">
              <h6>{props.minihead}</h6>
              <h2>{props.mainhead}</h2>
              <p>{props.secPara}</p>
              {props.secParatwo && <p>{props.secParatwo}</p>}
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
                  support@texaswebstudios.com
                </li>
                <li>
                  <span>
                    <LuMapPin />
                  </span>{" "}
                  1000 Main St, Houston, TX 77002, United States
                </li>
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <div className="contactForm">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Company / Organization"
                      className="form-control"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Website"
                      className="form-control"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
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
                    />
                  </div>

                  <div className="col-lg-12 mb-3">
                    <select
                      className="form-select form-control"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                        <option value="">Select Service</option>
                        <option value="logo design">Logo Design</option>
                        <option value="web development">Web Development</option>
                        <option value="cms development">CMS Development</option>
                        <option value="digital marketing">Digital Marketing</option>
                        <option value="custom web development">Custom Web Development</option>
                        <option value="mobile app development">Mobile App Development</option>
                    </select>
                  </div>

                  <div className="col-lg-12 mb-3">
                    <input
                      type="text"
                      placeholder="How Did You Hear About TWS?"
                      className="form-control"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-lg-12">
                    <textarea
                      className="form-control"
                      placeholder="Tell Us About Your Business"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
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
                      {loading
                        ? "Submitting..."
                        : props.btntxt || "Send a Message"}
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
