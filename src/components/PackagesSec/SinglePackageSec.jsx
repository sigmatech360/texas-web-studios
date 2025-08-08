import React from "react";
import PackagesCard from "../PackagesCard";

const SinglePackageSec = (props) => {
  return (
    <section className={`packagesSec sec-padding ${props.className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="secHead">
              <p className="sec-tag">{props.secTag}</p>
              <h2 className="secTitle" data-aos="fade-up" data-aos-delay="200">
                {props.title}
              </h2>
              <p data-aos="fade-up" data-aos-delay="400">
                {props.description}
              </p>
            </div>
          </div>

          {props.packagesName.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <PackagesCard
                name={item.name}
                price={item.price}
                list={item.list}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinglePackageSec;
