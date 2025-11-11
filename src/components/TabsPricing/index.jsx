import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PackagesCard from "../PackagesCard";

const TabsPricing = ({ minihead, mainhead, secPara, tabsData = [] }) => {
  return (
    <section className="tabs-pricing-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tabs-pricing-head text-center">
              {minihead && <h6>{minihead}</h6>}
              {mainhead && <h2>{mainhead}</h2>}
              {secPara && <p>{secPara}</p>}
            </div>
          </div>
        </div>

        {/* Dynamic Tabs */}
        <div className="row">
          <div className="col-lg-12">
            <div className="dynamic-pricing-tabs">
            <Tabs>
              <TabList>
                {tabsData.map((tab, index) => (
                  <Tab key={index}>{tab.title}</Tab>
                ))}
              </TabList>

              {tabsData.map((tab, tabIndex) => (
                <TabPanel key={tabIndex}>
                  <div className="pricing-cards row">
                    {tab.packages?.map((pkg, pkgIndex) => (
                      <div className="col-lg-4 col-md-6 mb-4" key={pkgIndex}>
                        <PackagesCard
                          name={pkg.name}
                          price={pkg.price}
                          duration={pkg.duration}
                          packagesData={pkg.packagesData}
                        />
                      </div>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsPricing;
