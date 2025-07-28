import React from "react";
import "./style.css";
import { useModal } from "../../context/ModalContext";

const WhyCooseUsSec = (props) => {
  const { setShowModal } = useModal();
  return (
    <section className="whyChooseUs sec-padding">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="whyChooseImgContent">
              <p className="sec-tag">{props.secTag}</p>
              <h3
                className="secTitle"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {props.secTitle}
              </h3>
              <p data-aos="fade-right" data-aos-delay="400">
                {props.secDescription}
              </p>

              <div
                className="whyChooseImg"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <img
                  src={props.image}
                  alt={props.secTitle}
                  className="img-fluid"
                  width={"636"}
                  height={"429"}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* <div className="whyChooseRight">
              <p>{props.leftP}</p>
              <h5 className="whyChooseRightTitle">{props.leftSubTitle}</h5>
              {props.btnText && (
                <button className="theme-btn">{props.btnText}</button>
              )}
            </div> */}
            {(props.leftP || props.leftSubTitle || props.btnText) && (
              <div className="whyChooseRight">
                {props.leftP && (
                  <p data-aos="fade-right" data-aos-delay="200">
                    {props.leftP}
                  </p>
                )}
                {props.leftSubTitle && (
                  <h4
                    className="whyChooseRightTitle"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    {props.leftSubTitle}
                  </h4>
                )}
                {props.btnText && (
                  <button
                    className="theme-btn"
                    data-aos="fade-right"
                    data-aos-delay="600"
                    onClick={() => setShowModal(true)}
                  >
                    {props.btnText}
                  </button>
                )}
              </div>
            )}
            <div className="whyChooseList">
              {props.list.map((item, index) => (
                <div
                  className="whyChooseListItem"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="whyChooseListItemContent">
                    <h5 className="whyChooseListItemTitle">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCooseUsSec;
