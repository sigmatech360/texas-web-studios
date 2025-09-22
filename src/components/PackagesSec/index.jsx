import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  allPackagesData,
  chalkboardAnimationPackagesData,
  characterAnimationPackagesData,
  customAppsPackagesData,
  cutOutPackagesData,
  eCommercePackagesData,
  illustrationPackagesData,
  informativeWebPackagesData,
  isometricAnimationPackagesData,
  logoAnimationPackagesData,
  logoPackagesData,
  motionGraphicsPackagesData,
  musicVideoPackagesData,
  ormPackagesData,
  ppcPackagesData,
  screenPlayAnimationPackagesData,
  seoPackagesData,
  smmPackagesData,
  three3DAnimationPackagesData,
  two2DAnimationPackagesData,
  typographyPackagesData,
  videoEditingPackagesData,
  videoMarketingPackagesData,
  webDesignPackagesData,
  webMaintenencePackagesData,
  webPortalPackagesData,
  whiteBoardAnimationPackagesData,
} from "../../data";
import PackagesCard from "../PackagesCard";

import "./style.css";

const PackagesSec = (props) => {
  const [key, setKey] = useState("logo-packages");
  const [videoAnimationKey, setVideoAnimationKey] = useState("motiongraphics");
  return (
    <section className={`packagesSec sec-padding ${props.className}`}>
      <div className="container">
        <div className="row">
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
        </div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 packagesTabs"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {/* <Tab eventKey="all-packages" title="ALL">
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
          </Tab> */}
          <Tab eventKey="logo-packages" title="LOGO">
            <div className="row justify-content-center">
              {logoPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="illustration-packages" title="ILLUSTRATION">
            <div className="row justify-content-center">
              {illustrationPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="informative-websites" title="INFORMATIVE WEBSITES">
            <div className="row justify-content-center">
              {informativeWebPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="websiteDesign" title="Website Design">
            <div className="row justify-content-center">
              {webDesignPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="websiteMaintenance" title="Website Maintenance">
            <div className="row justify-content-center">
              {webMaintenencePackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="eCommerce-website" title="E-COMMERCE WEBSITE">
            <div className="row justify-content-center">
              {eCommercePackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="custom-applications" title="CUSTOM APPLICATIONS">
            <div className="row justify-content-center">
              {customAppsPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="web-portal" title="WEB PORTAL">
            <div className="row justify-content-center">
              {webPortalPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="videoAnimation" title="Video Animation">
            <Tabs
              id="controlled-tab-example"
              activeKey={videoAnimationKey}
              onSelect={(k) => setVideoAnimationKey(k)}
              className="mb-3 packagesTabs"
            >
              <Tab eventKey="motiongraphics" title="Motion Graphics">
                <div className="row justify-content-center">
                  {motionGraphicsPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="logoAnimation" title="Logo Animation">
                <div className="row justify-content-center">
                  {logoAnimationPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="two2DAnimation" title="2D Animation">
                <div className="row justify-content-center">
                  {two2DAnimationPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="three3DAnimation" title="3D Animation">
                <div className="row justify-content-center">
                  {three3DAnimationPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="whiteboardAnimation" title="Whiteboard Animation">
                <div className="row justify-content-center">
                  {whiteBoardAnimationPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="characterAnimation" title="Character Animation">
                <div className="row justify-content-center">
                  {characterAnimationPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="screenplayAnimation" title="Screenplay Animation">
                <div className="row justify-content-center">
                  {screenPlayAnimationPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="typographyPackages" title="Typography">
                <div className="row justify-content-center">
                  {typographyPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="musicVideoPackages" title="Music Video">
                <div className="row justify-content-center">
                  {musicVideoPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="videoEditingPackages" title="Video Editing">
                <div className="row justify-content-center">
                  {videoEditingPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="cutOutAnimationPackges" title="Cut Out Animation">
                <div className="row justify-content-center">
                  {cutOutPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab
                eventKey="chalkboardAnimationPackages"
                title="Chalkboard Animation"
              >
                <div className="row justify-content-center">
                  {chalkboardAnimationPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab
                eventKey="isometricAnimationPackages"
                title="Isometric Animation"
              >
                <div className="row justify-content-center">
                  {isometricAnimationPackagesData.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <PackagesCard
                        name={item.name}
                        price={item.price}
                        list={item.list}
                        packagesData={item.packagesData}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
            </Tabs>
          </Tab>

          <Tab eventKey="seo-packages" title="SEO">
            <div className="row justify-content-center">
              {seoPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="videoMarketing-data" title="Video Marketing">
            <div className="row justify-content-center">
              {videoMarketingPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="social-media" title="SOCIAL MEDIA">
            <div className="row justify-content-center">
              {smmPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="ppc-data" title="PPC">
            <div className="row justify-content-center">
              {ppcPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
                  />
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="orm-data" title="ORM">
            <div className="row justify-content-center">
              {ormPackagesData.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <PackagesCard
                    name={item.name}
                    price={item.price}
                    list={item.list}
                    packagesData={item.packagesData}
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
