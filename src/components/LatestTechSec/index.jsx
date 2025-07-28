import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useModal } from "../../context/ModalContext";

const LatestTechSec = (props) => {
  const { setShowModal } = useModal();

  // Function to scroll to the target section smoothly
  const handleScroll = () => {
    const targetSection = document.getElementById(props.targetSecId); // Target section ID
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align to the top
      });
    }
  };
  return (
    <section className={`latestTech sec-padding ${props.className}`}>
      <div className="container">
        <div className="row">
          <div className={`${props.leftCol || "col-lg-5"}`}>
            <div className="secHead">
              <h2
                className="secTitle"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {props.secTitle}
              </h2>
              <p data-aos="fade-right" data-aos-delay="400">
                {props.description}
              </p>
              {props.leftBtnText && (
                <button
                  className="theme-btn icon-btn"
                  data-aos="fade-right"
                  data-aos-delay="600"
                  onClick={() => setShowModal(true)}
                >
                  {props.leftBtnText || "Get Started"}{" "}
                  <IoIosArrowRoundForward />
                </button>
              )}
            </div>
          </div>
          <div className={`${props.centerCol || "col-lg-3"}`}>
            <div className="categoriesList">
              <h3
                className="categoriesListTitle"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {props.categoryTitle || "SOLUTIONS"}
              </h3>
              <ul className="packageCardList">
                {props.solutionList.map((item, listIndex) => (
                  <li
                    key={listIndex}
                    data-aos="fade-up"
                    data-aos-delay={listIndex * 100}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              {props.categoryTitle2 && (
                <h4 data-aos="fade-right" data-aos-delay="600">
                  {props.categoryTitle2 || "SOLUTIONS"}
                </h4>
              )}
              {props.solutionList2 && (
                <ul className="packageCardList">
                  {props.solutionList2.map((item, listIndex) => (
                    <li
                      key={listIndex}
                      data-aos="fade-up"
                      data-aos-delay={listIndex * 200}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
              {props.targetSecId && (
                <button
                  className="theme-btn icon-btn"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  onClick={handleScroll}
                >
                  {props.btnText || "Get Started"} <IoIosArrowRoundForward />
                </button>
              )}
            </div>
          </div>
          <div className={`${props.rightCol || "col-lg-4"}`}>
            {props.rightP && (
              <p className="rightP" data-aos="fade-left" data-aos-delay="200">
                {props.rightP}
              </p>
            )}
            {props.rightP2 && (
              <p
                className="rightP mt-3"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                {props.rightP2}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestTechSec;
