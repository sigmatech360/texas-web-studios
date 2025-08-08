import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import PackagesSec from "../../components/PackagesSec";
import WhyCooseUsSec from "../../components/WhyCooseUsSec";

import webDevBanner from "../../assets/images/webDevBanner.webp";
import webDevWhyChooseImage from "../../assets/images/webDevWhyChooseImage.webp";
import webDevWhyChooseIcon1 from "../../assets/images/webDevWhyChooseIcon1.webp";
import webDevWhyChooseIcon2 from "../../assets/images/webDevWhyChooseIcon2.webp";
import webDevWhyChooseIcon3 from "../../assets/images/webDevWhyChooseIcon3.webp";

import customLayoutIcon from "../../assets/images/customLayoutIcon.webp";

import expWebDesignIcon1 from "../../assets/images/expIcons/expWebDesignIcon1.webp";
import expWebDesignIcon2 from "../../assets/images/expIcons/expWebDesignIcon2.webp";
import expWebDesignIcon3 from "../../assets/images/expIcons/expWebDesignIcon3.webp";
import expWebDesignIcon4 from "../../assets/images/expIcons/expWebDesignIcon4.webp";
import expWebDesignIcon5 from "../../assets/images/expIcons/expWebDesignIcon5.webp";
import expWebDesignIcon6 from "../../assets/images/expIcons/expWebDesignIcon6.webp";

import expWebDevIcon1 from "../../assets/images/expIcons/expWebDevIcon1.webp";
import expWebDevIcon2 from "../../assets/images/expIcons/expWebDevIcon2.webp";
import expWebDevIcon3 from "../../assets/images/expIcons/expWebDevIcon3.webp";
import expWebDevIcon4 from "../../assets/images/expIcons/expWebDevIcon4.webp";
import expWebDevIcon5 from "../../assets/images/expIcons/expWebDevIcon5.webp";
import expWebDevIcon6 from "../../assets/images/expIcons/expWebDevIcon6.webp";

import expSupportMaintenanceIcon1 from "../../assets/images/expIcons/expSupportMaintenanceIcon1.webp";
import expSupportMaintenanceIcon2 from "../../assets/images/expIcons/expSupportMaintenanceIcon2.webp";
import expSupportMaintenanceIcon3 from "../../assets/images/expIcons/expSupportMaintenanceIcon3.webp";
import expSupportMaintenanceIcon4 from "../../assets/images/expIcons/expSupportMaintenanceIcon4.webp";
import expSupportMaintenanceIcon5 from "../../assets/images/expIcons/expSupportMaintenanceIcon5.webp";
import expSupportMaintenanceIcon6 from "../../assets/images/expIcons/expSupportMaintenanceIcon6.webp";

import expContentCreationIcon1 from "../../assets/images/expIcons/expContentCreationIcon1.webp";
import expContentCreationIcon2 from "../../assets/images/expIcons/expContentCreationIcon2.webp";
import expContentCreationIcon3 from "../../assets/images/expIcons/expContentCreationIcon3.webp";
import expContentCreationIcon4 from "../../assets/images/expIcons/expContentCreationIcon4.webp";
import expContentCreationIcon5 from "../../assets/images/expIcons/expContentCreationIcon5.webp";
import expContentCreationIcon6 from "../../assets/images/expIcons/expContentCreationIcon6.webp";

import expWebRevampIcon1 from "../../assets/images/expIcons/expWebRevampIcon1.webp";
import expWebRevampIcon2 from "../../assets/images/expIcons/expWebRevampIcon2.webp";
import expWebRevampIcon3 from "../../assets/images/expIcons/expWebRevampIcon3.webp";
import expWebRevampIcon4 from "../../assets/images/expIcons/expWebRevampIcon4.webp";
import expWebRevampIcon5 from "../../assets/images/expIcons/expWebRevampIcon5.webp";
import expWebRevampIcon6 from "../../assets/images/expIcons/expWebRevampIcon6.webp";

import expPostLaunchIcon1 from "../../assets/images/expIcons/expPostLaunchIcon1.webp";
import expPostLaunchIcon2 from "../../assets/images/expIcons/expPostLaunchIcon2.webp";
import expPostLaunchIcon3 from "../../assets/images/expIcons/expPostLaunchIcon3.webp";
import expPostLaunchIcon4 from "../../assets/images/expIcons/expPostLaunchIcon4.webp";
import expPostLaunchIcon5 from "../../assets/images/expIcons/expPostLaunchIcon5.webp";
import expPostLaunchIcon6 from "../../assets/images/expIcons/expPostLaunchIcon6.webp";

import LatestTechSec from "../../components/LatestTechSec";
import ReactHelmet from "../../components/ReactHelmet";
import { Nav } from "react-bootstrap";
import SinglePackageSec from "../../components/PackagesSec/SinglePackageSec";
import { informativeWebPackagesData } from "../../data";
const webUrl = import.meta.env.VITE_WEB_URL;

const experienceSecData = [
  {
    id: 1,
    key: "web-design",
    name: "Web Design",
    data: [
      { name: "Custom Layout", icon: expWebDesignIcon1 },
      { name: "Intuitive Navigation", icon: expWebDesignIcon2 },
      { name: "Mobile Responsiveness", icon: expWebDesignIcon3 },
      { name: "Consistent Branding", icon: expWebDesignIcon4 },
      { name: "Engaging Visuals", icon: expWebDesignIcon5 },
      { name: "User Centered UX/UI Design", icon: expWebDesignIcon6 },
    ],
  },
  {
    id: 2,
    key: "website-dev",
    name: "Website Development",
    data: [
      { name: "Clean & Scalable Code", icon: expWebDevIcon1 },
      { name: "Fast Loading Speed", icon: expWebDevIcon2 },
      { name: "SEO Optimization", icon: expWebDevIcon3 },
      { name: "Secure Architecture", icon: expWebDevIcon4 },
      { name: "CMS Integration", icon: expWebDevIcon5 },
      { name: "Cross Browser Compatibility", icon: expWebDevIcon6 },
    ],
  },
  {
    id: 3,
    key: "support-maintenance",
    name: " Support & Maintenance",
    data: [
      { name: "Regular Security Updates", icon: expSupportMaintenanceIcon1 },
      { name: "Performace Monitering", icon: expSupportMaintenanceIcon2 },
      { name: "Bug Fixes & Troubleshooting", icon: expSupportMaintenanceIcon3 },
      { name: "Content & Plugin Updates", icon: expSupportMaintenanceIcon4 },
      { name: "Backup & Recovery Solution", icon: expSupportMaintenanceIcon5 },
      { name: "24/7 Technocal Support", icon: expSupportMaintenanceIcon6 },
    ],
  },
  {
    id: 4,
    key: "content-creation",
    name: "Content Creation",
    data: [
      { name: "SEO-Optimized Copy", icon: expContentCreationIcon1 },
      { name: "Brand Voice Consistency", icon: expContentCreationIcon2 },
      { name: "Clear Calls-To-Action", icon: expContentCreationIcon3 },
      { name: "Engaging  Headline & Messaging", icon: expContentCreationIcon4 },
      { name: "Website Content Structuring", icon: expContentCreationIcon5 },
      {
        name: "Keyword-Integrated Blog Writing",
        icon: expContentCreationIcon6,
      },
    ],
  },
  {
    id: 5,
    key: "website-revamp",
    name: "Website Revamp",
    data: [
      { name: "Modernized UI/UX Design", icon: expWebRevampIcon1 },
      { name: "Mobile-First & Responsive Layout", icon: expWebRevampIcon2 },
      { name: "Improved Site Speed & Performace", icon: expWebRevampIcon3 },
      { name: "SEO Re-Optimization", icon: expWebRevampIcon4 },
      { name: "Content Restructuring & Updates", icon: expWebRevampIcon5 },
      { name: "Integration of Latest Technologies", icon: expWebRevampIcon6 },
    ],
  },
  {
    id: 6,
    key: "post-launch",
    name: "Post-Launch Support",
    data: [
      { name: "Performace Monitering", icon: expPostLaunchIcon1 },
      { name: "Analysis   Setup & Reporting", icon: expPostLaunchIcon2 },
      { name: "Client Training & Documentation", icon: expPostLaunchIcon3 },
      { name: "Minor Tweaks & Adjustments", icon: expPostLaunchIcon4 },
      { name: "Bug Fixes & Patch Updates", icon: expPostLaunchIcon5 },
      { name: "Feedback-Based Iteration", icon: expPostLaunchIcon6 },
    ],
  },
];

const WebDevelopment = () => {
  const [key, setKey] = useState("web-design");
  return (
    <>
      <ReactHelmet
        title="Top Web Development Company – Texas Web Studios"
        description="Texas Web Studios builds fast, scalable, and SEO-ready websites that help your business grow, convert more visitors, and stand out from the competition."
        // keywords=""
        url={`${webUrl}/web-development`}
        // url="https://texaswebstudios.com/web-development"
      />
      <DefaultLayout>
        <InnerBanner
          bgImage={webDevBanner}
          title="Web Development"
          description="Get a website that looks amazing and works even better through client-focused, customer-centric solutions designed to deliver real, measurable business results."
          pageName="Services"
        />

        <LatestTechSec
          secTitle="Website Development with The Latest Tech"
          description="Your website is your brand's digital footprint; it should be as impressive as your business itself. We design and develop SEO-friendly websites that are fast, easy to navigate, and fully optimized for performance. Over 85% of consumers visit a company’s website before making a decision, so your site’s design, usability, and accessibility play a crucial role in driving engagement and staying competitive online."
          categoryTitle={
            <p
              className="categoriesListTitle h3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Solutions
            </p>
          }
          solutionList={[
            { name: "Responsive Web Design" },
            { name: "SEO-Friendly Structure" },
            { name: "Custom UI/UX Design" },
            { name: "Fast Load Times" },
            { name: "Secure Frameworks" },
            { name: "CMS Integration" },
            { name: "E-Commerce Functionality" },
            { name: "Analytics & Tracking Integration" },
          ]}
          rightP="We Build Scalable Website Design and Development Services in Texas Using The Latest Technologies to Keep Your Business Ahead of The Competition. Backed by a Powerful Tech Stack, Get Custom-Crafted Websites that Work Better, Load Faster, and Grow with Your Business."
        />

        <section className="experienceSec sec-padding bgPink">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="secHead">
                  <p className="sec-tag">EXPERIENCE LIKE NO OTHER</p>
                  <h2
                    className="secTitle"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    We Build Websites that Help You Grow Your Business
                  </h2>
                </div>
              </div>
              <div
                className="col-md-12"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {/* <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3 packagesTabs"
                >
                  {experienceSecData.map((item, index) => (
                    <Tab eventKey={item.key} title={item.name}  key={index}>
                      <div className="experienceSecCards">
                        {item.data.map((dataItem, data_i) => (
                          <div
                            className="experienceSecCardItem"
                            key={data_i}
                            data-aos="fade-up"
                            data-aos-delay={data_i * 200}
                          >
                            <img src={dataItem.icon} alt={dataItem.name} />
                            <p className="experienceCardItemTitle h4">
                              {dataItem.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Tab>
                  ))}
                </Tabs> */}
                <Tab.Container
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  id="controlled-tab-example"
                  className="mb-3 packagesTabs"
                >
                  <Nav variant="tabs packagesTabs ">
                    {experienceSecData.map((item, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link eventKey={item.key}>
                          <div>
                            <h4>{item.name}</h4> {/* Use h4 for tab titles */}
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>

                  <Tab.Content>
                    {experienceSecData.map((item, index) => (
                      <Tab.Pane eventKey={item.key} key={index}>
                        <div className="experienceSecCards">
                          {item.data.map((dataItem, data_i) => (
                            <div
                              className="experienceSecCardItem"
                              key={data_i}
                              data-aos="fade-up"
                              data-aos-delay={data_i * 200}
                            >
                              <img src={dataItem.icon} alt={dataItem.name} />
                              <p className="experienceCardItemTitle h4">
                                {dataItem.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </section>

        {/* <PackagesSec
          className="bgBlack"
          secTag="PRICING"
          title="Flexible Pricing Packages"
          description="Every business has different needs, so we offer custom pricing for each of our services. Our packages include Basic, Pro, and Premium, designed to match where you are and where you’re headed. Whether you are starting fresh or looking to scale, you will get the right solution at the right price. So find the package that fits you best, or consult us for a custom package!"
        /> */}

        <SinglePackageSec
          className="bgBlack"
          secTag="PRICING"
          title="Flexible Pricing Packages"
          description="Every business has different needs, so we offer custom pricing for each of our services. Our packages include Basic, Pro, and Premium, designed to match where you are and where you’re headed. Whether you are starting fresh or looking to scale, you will get the right solution at the right price. So find the package that fits you best, or consult us for a custom package!"
          packagesName={informativeWebPackagesData}
        />

        <WhyCooseUsSec
          // secTag="WHY CHOOSE US"
          secTag={<h2 className="sec-tag">WHY CHOOSE US</h2>}
          // secTitle="Build Long-Term Digital Success with Us"
          secTitle={
            <h3 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              Build Long-Term Digital Success with Us
            </h3>
          }
          secDescription="Our design and development services in Texas provide solutions that not only look great but also work hard for you."
          image={webDevWhyChooseImage}
          leftP="If you're a business looking for real growth, our team of certified experts delivers cutting-edge solutions using the latest technology, tailored for real business growth. With affordable pricing, 24/7 support, and a results-first mindset, we’re the digital partner your brand can count on."
          leftSubTitle={
            <h4
              className="whyChooseRightTitle"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Cultivating Strategic Partnership for Business Growth
            </h4>
          }
          btnText="Book a Services"
          list={[
            {
              image: webDevWhyChooseIcon1,
              title: (
                <p className="whyChooseListItemTitle">Award Winning Agency</p>
              ),
              description: "Our work has helped us gain recognition in the USA",
            },
            {
              image: webDevWhyChooseIcon2,
              title: (
                <p className="whyChooseListItemTitle">
                  500+ Projects Completed
                </p>
              ),
              description:
                "We’ve partnered with businesses across industries, helping them with continuous growth.",
            },
            {
              image: webDevWhyChooseIcon3,
              title: <p className="whyChooseListItemTitle">98% Success Rate</p>,
              description:
                "We make sure our clients thrive, thanks to our consistent results and proven strategies.",
            },
          ]}
        />
      </DefaultLayout>
    </>
  );
};

export default WebDevelopment;
