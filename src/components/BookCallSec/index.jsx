import React from "react";
import "./style.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const BookCallSec = (props) => {
  return (
    <section className="bookCallSec sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="bookCallContent">
              <h3
                className="bookCallTitle"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {props.title}
              </h3>
              <button
                className="theme-btn theme-btn-white icon-btn"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                {props.btnText} <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCallSec;
