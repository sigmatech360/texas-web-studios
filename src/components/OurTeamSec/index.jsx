import React from "react";
import "./style.css";

import ourTeamImg1 from "../../assets/images/ourTeamImg1.webp";
import ourTeamImg2 from "../../assets/images/ourTeamImg2.webp";
import ourTeamImg3 from "../../assets/images/ourTeamImg3.webp";

const ourTeamData = [
  {
    id: 1,
    name: "Steve John's",
    designation: "Graphics Designer",
    image: ourTeamImg1,
  },
  {
    id: 2,
    name: "Sara",
    designation: "Founder",
    image: ourTeamImg2,
  },
  {
    id: 3,
    name: "Steve John's",
    designation: "Graphics Designer",
    image: ourTeamImg3,
  },
];

const OurTeamSec = () => {
  return (
    <section className="ourTeamSec sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="secHead">
              <p className="sec-tag">EXPERTS</p>
              <h3 className="secTitle" data-aos="fade-up" data-aos-delay="200">
                Our Team
              </h3>
            </div>
          </div>
          {ourTeamData.map((item, index) => (
            <div
              className="col-lg-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="ourTeamCard">
                <div className="ourTeamCardImg">
                  <img src={item.image} alt={item.name} className="img-fluid" />
                </div>
                <div className="teamCardInfo">
                  <h4 className="teamCardTitle">{item.name}</h4>
                  <p>{item.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSec;
