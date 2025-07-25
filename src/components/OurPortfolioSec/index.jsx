import React from "react";
import PortfolioSliders from "../PortfolioSliders";
import { IoIosArrowRoundForward } from "react-icons/io";

const OurPortfolioSec = (props) => {
  return (
    <section className={`ourPortfolio sec-padding ${props.className}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="secHead">
              <p className="sec-tag">{props.secTag}</p>
              <h3 className="secTitle" data-aos="fade-up" data-aos-delay="300">{props.secTitle}</h3>
            </div>
          </div>
        </div>
      </div>
      <PortfolioSliders
        portfolio1={props.ourPortfolio1}
        portfolio2={props.ourPortfolio2}
      />
      <div className="text-center mt-5">
        <button className="theme-btn icon-btn" data-aos="fade-up" data-aos-delay="300">
          {props.btnText || "View All Projects"} <IoIosArrowRoundForward />
        </button>
      </div>
    </section>
  );
};

export default OurPortfolioSec;
