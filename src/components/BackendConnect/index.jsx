import React from "react";
import miniContact from "../../assets/images/services/backenddevelopment/minicontactimg.webp";
import { useModal } from "../../context/ModalContext";

const BackendConnect = () => {
    const { setShowModal } = useModal();
  return (
    <section className="backend-connect-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="backend-connect-img">
              <img src={miniContact} alt="img" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="backend-connect-txt">
              <h3>
                We are proud to be one of the most trusted backend development companies in Texas, powering tomorrow’s websites.
              </h3>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="backend-connect-btn">
              <button className="theme-btn" onClick={() => setShowModal(true)}>Talk to an expert</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendConnect;
