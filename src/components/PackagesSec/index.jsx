import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { allPackagesData } from "../../data";
import PackagesCard from "../PackagesCard";

import "./style.css";

const PackagesSec = (props) => {
  const [key, setKey] = useState("all-packages");
  return (
    <section className={`packagesSec sec-padding ${props.className}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="secHead">
              <p className="sec-tag">{props.secTag}</p>
              <h3 className="secTitle" data-aos="fade-up" data-aos-delay="200">
                {props.title}
              </h3>
              <p data-aos="fade-up" data-aos-delay="400">
                {props.description}
              </p>
            </div>
          </div>
        </div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 packagesTabs"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Tab eventKey="all-packages" title="ALL">
            <div className="row justify-content-center">
              {allPackagesData.map((item, index) => (
                <div
                  className="col-lg-4 col-md-6"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="logo-packages" title="LOGO">
            <div className="row justify-content-center">
              {allPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="illustration-packages" title="ILLUSTRATION">
            <div className="row justify-content-center">
              {allPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="informative-websites" title="INFORMATIVE WEBSITES">
            <div className="row justify-content-center">
              {allPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="eCommerce-website" title="E-COMMERCE WEBSITE">
            <div className="row justify-content-center">
              {allPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="custom-applications" title="CUSTOM APPLICATIONS">
            <div className="row justify-content-center">
              {allPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="web-portal" title="WEB PORTAL">
            <div className="row justify-content-center">
              {allPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="seo-packages" title="SEO">
            <div className="row justify-content-center">
              {allPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="social-media" title="SOCIAL MEDIA">
            <div className="row justify-content-center">
              {allPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                  />
                </div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default PackagesSec;
