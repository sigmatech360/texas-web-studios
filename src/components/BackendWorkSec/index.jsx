import React from "react";
import workimg from "../../assets/images/services/backenddevelopment/workimg.webp";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const BackendWorkSec = () => {
  return (
    <section className="backend-work-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="backend-work-img">
              <img src={workimg} alt="work image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="backend-work-txt">
              <h2 className="mainhead">Robust Web Backend, No Compromise on Quality</h2>
              <Tabs>
                <div className="backend-work-tabs">
                  <TabList>
                    <Tab>API Integration</Tab>
                    <Tab>Database Management</Tab>
                    <Tab>Server-Side Logic</Tab>
                    <Tab>Authentication & Security</Tab>
                    <Tab>Maintenance & Support</Tab>
                  </TabList>
                </div>
                <div className="backend-work-content">
                  <TabPanel>
                    <p>
                     We connect your systems and third-party tools through seamless backend API development in Texas. Our experts design and implement APIs that ensure efficient data exchange and improved functionality across platforms, enhancing both scalability and speed.
                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>
                     Your data deserves precision and protection. We handle database architecture, optimization, and migration with care, ensuring performance consistency, data integrity, and security, whether it’s MySQL, MongoDB, or PostgreSQL.

                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>
                     We write intelligent server-side code that powers your applications’ core functionality. Our approach ensures every command, transaction, and query operates smoothly, giving users a responsive and efficient experience every time.
                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>
                     Security is at the heart of our backend development services in Texas. From user authentication systems to data encryption protocols, we implement best-in-class security measures that protect your users and business from cyber threats.
                    </p>
                  </TabPanel>
                    <TabPanel>
                    <p>
                   Our partnership doesn’t end at deployment. We provide ongoing maintenance, updates, and 24/7 support to ensure your backend web development in Texas continues to perform optimally as your business evolves.

                    </p>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendWorkSec;
