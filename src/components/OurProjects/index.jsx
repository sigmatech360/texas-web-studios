import React from "react";
import project1 from "../../assets/images/services/frontenddevelopment/project1.webp";
import project2 from "../../assets/images/services/frontenddevelopment/project2.webp";
import project3 from "../../assets/images/services/frontenddevelopment/project3.webp";
import project4 from "../../assets/images/services/frontenddevelopment/project4.webp";
import { useModal } from "../../context/ModalContext";
import { Link } from "react-router-dom";

const OurProjects = () => {
      const { setShowModal } = useModal();
  return (
    <section className="our-projects-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="our-project-head">
              <h6 className="shorttop-head text-white">Portfolio</h6>
              <h2 className="mainhead text-white">
                Our Goldmine of Frontend Projects
              </h2>
              <p>
                Swipe through our projects and you’ll see dozens of projects that are live, alive, and thriving through sales, engagement, and more!
              </p>
              <div className="project-img projec-img-1">
                <img src={project1} alt="project img 1" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="our-project-btnimg">
              <div className="our-project-btn">
                <Link to="/portfolio" className="theme-btn">View Designs</Link>
              </div>
              <div className="project-img ">
                <img src={project2} alt="project img 2" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="project-img">
              <img src={project3} alt="project img 3" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="project-img project-img-4">
              <img src={project4} alt="project img 4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
