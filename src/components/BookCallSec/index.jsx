import React from "react";
import "./style.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useModal } from "../../context/ModalContext";

const BookCallSec = (props) => {
  const { setShowModal } = useModal();
  return (
    <section className="bookCallSec sec-padding webapp-book-call">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="bookCallContent">
              <h4
                className="bookCallTitle"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {props.title}
              </h4>
              <button
                className="theme-btn theme-btn-white icon-btn"
                data-aos="fade-left"
                data-aos-delay="400"
                onClick={() => setShowModal(true)}
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
