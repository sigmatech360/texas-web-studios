import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const LatestTechSec = (props) => {
  return (
    <section className={`latestTech sec-padding`}>
      <div className="container">
        <div className="row">
          <div className={`col-lg-5`}>
            <div className="secHead">
              <h3 className="secTitle">{props.secTitle}</h3>
              <p>{props.description}</p>
            </div>
          </div>
          <div className={`col-lg-3`}>
            <div className="categoriesList">
              <h4>SOLUTIONS</h4>
              <ul className="packageCardList">
                {props.solutionList.map((item, listIndex) => (
                  <li key={listIndex}>{item.name}</li>
                ))}
              </ul>
              <button className="theme-btn icon-btn">
                Get Started <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <div className={`col-lg-4`}>
            <p className="rightP">{props.rightP}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestTechSec;
