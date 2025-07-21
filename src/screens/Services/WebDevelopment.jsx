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
      { name: "Keyword-Integrated Blog Writing", icon: expContentCreationIcon6 },
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
      { name: "Integration Of Latest Technologies", icon: expWebRevampIcon6 },
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
    <DefaultLayout>
      <InnerBanner
        bgImage={webDevBanner}
        title="Web Development"
        description="Get A Website That Looks Amazing And Works Even Better Through Client-Focused, Customer-Centric Solutions Designed To Deliver Real, Measurable Business Results."
        pageName="Services"
      />

      <LatestTechSec
        secTitle="Website Development With The Latest Tech"
        description="Your Website Is Your Brand's Digital Footprint; It Should Be As Impressive As Your Business Itself. We Design And Develop SEO-Friendly Websites That Are Fast, Easy To Navigate, And Fully Optimized For Performance. Over 85% Of Consumers Visit A Company’s Website Before Making A Decision, So Your Site’s Design, Usability, And Accessibility Play A Crucial Role In Driving Engagement And Staying Competitive Online."
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
        rightP="We Build Scalable Website Design And Development Services In Texas Using The Latest Technologies To Keep Your Business Ahead Of The Competition. Backed By A Powerful Tech Stack, Get Custom-Crafted Websites That Work Better, Load Faster, And Grow With Your Business."
      />

      <section className="experienceSec sec-padding bgPink">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="secHead">
                <p className="sec-tag">EXPERIENCE LIKE NO OTHER</p>
                <h3 className="secTitle">
                  We Build Websites That Help You Grow Your Business
                </h3>
              </div>
            </div>
            <div className="col-md-12">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 packagesTabs"
              >
                {experienceSecData.map((item, index) => (
                  <Tab eventKey={item.key} title={item.name} key={index}>
                    <div className="experienceSecCards">
                      {item.data.map((dataItem, data_i) => (
                        <div className="experienceSecCardItem" key={data_i}>
                          <img src={dataItem.icon} alt={dataItem.name} />
                          <h4 className="experienceCardItemTitle">{dataItem.name}</h4>
                        </div>
                      ))}
                    </div>
                  </Tab>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <PackagesSec
        className="bgBlack"
        secTag="PRICING"
        title="Flexible Pricing Packages"
        description="Every Business Has Different Needs, So We Offer Custom Pricing For Each Of Our Services. Our Packages Include Basic, Pro, And Premium, Designed To Match Where You Are And Where You’re Headed. Whether You Are Starting Fresh Or Looking To Scale, You Will Get The Right Solution At The Right Price. So Find The Package That Fits You Best, Or Consult Us For A Custom Package!"
      />

      <WhyCooseUsSec
        secTag="WHY CHOOSE US"
        secTitle="Build Long-Term Digital Success With Us"
        secDescription="Our Design And Development Services In Texas Provide Solutions That Not Only Look Great But Also Work Hard For You."
        image={webDevWhyChooseImage}
        leftP="If You're A Business Looking For Real Growth, Our Team Of Certified Experts Delivers Cutting-Edge Solutions Using The Latest Technology, Tailored For Real Business Growth. With Affordable Pricing, 24/7 Support, And A Results-First Mindset, We’re The Digital Partner Your Brand Can Count On."
        leftSubTitle="Cultivating Strategic Partnership For Business Growth"
        btnText="Book A Services"
        list={[
          {
            image: webDevWhyChooseIcon1,
            title: "Award Winning Agency",
            description: "Our Work Has Helped Us Gain Recognition In The USA",
          },
          {
            image: webDevWhyChooseIcon2,
            title: "500+ Projects Completed",
            description:
              "We’ve Partnered With Businesses Across Industries, Helping Them With Continuous Growth.",
          },
          {
            image: webDevWhyChooseIcon3,
            title: "98% Success Rate",
            description:
              "We Make Sure Our Clients Thrive, Thanks To Our Consistent Results And Proven Strategies.",
          },
        ]}
      />
    </DefaultLayout>
  );
};

export default WebDevelopment;
