import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const LatestTechSec = (props) => {
  return (
    <section className={`latestTech sec-padding ${props.className}`}>
      <div className="container">
        <div className="row">
          <div className={`${props.leftCol || "col-lg-5"}`}>
            <div className="secHead">
              <h3 className="secTitle">{props.secTitle}</h3>
              <p>{props.description}</p>
              {props.leftBtnText && (
                <button className="theme-btn icon-btn">
                  {props.leftBtnText || "Get Started"}{" "}
                  <IoIosArrowRoundForward />
                </button>
              )}
            </div>
          </div>
          <div className={`${props.centerCol || "col-lg-3"}`}>
            <div className="categoriesList">
              <h4>{props.categoryTitle || "SOLUTIONS"}</h4>
              <ul className="packageCardList">
                {props.solutionList.map((item, listIndex) => (
                  <li key={listIndex}>{item.name}</li>
                ))}
              </ul>
              {props.categoryTitle2 && (
                <h4>{props.categoryTitle2 || "SOLUTIONS"}</h4>
              )}
              {props.solutionList2 && (
                <ul className="packageCardList">
                  {props.solutionList2.map((item, listIndex) => (
                    <li key={listIndex}>{item.name}</li>
                  ))}
                </ul>
              )}
              <button className="theme-btn icon-btn">
                {props.btnText || "Get Started"} <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <div className={`${props.rightCol || "col-lg-4"}`}>
            {props.rightP && <p className="rightP">{props.rightP}</p>}
            {props.rightP2 && <p className="rightP mt-3">{props.rightP2}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestTechSec;
