import React from "react";
import "./style.css";

const WhyCooseUsSec = (props) => {
  return (
    <section className="whyChooseUs sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="whyChooseImgContent">
              <p className="sec-tag">{props.secTag}</p>
              <h3 className="secTitle">{props.secTitle}</h3>
              <p>{props.secDescription}</p>

              <div className="whyChooseImg">
                <img
                  src={props.image}
                  alt={props.secTitle}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="whyChooseRight">
              <p>{props.leftP}</p>
              <h5 className="whyChooseRightTitle">{props.leftSubTitle}</h5>
              <button className="theme-btn">
                {props.btnText || "Book A Services"}
              </button>
            </div>
            <div className="whyChooseList">
              {props.list.map((item, index) => (
                <div className="whyChooseListItem" key={index}>
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
