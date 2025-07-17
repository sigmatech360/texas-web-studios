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

import LatestTechSec from "../../components/LatestTechSec";

const experienceSecData = [
  {
    id: 1,
    key: "web-design",
    name: "Web Design",
    data: [
      { name: "Custom Layout", icon: customLayoutIcon },
      { name: "Intuitive Navigation", icon: customLayoutIcon },
      { name: "Mobile Responsiveness", icon: customLayoutIcon },
      { name: "Consistent Branding", icon: customLayoutIcon },
      { name: "Engaging Visuals", icon: customLayoutIcon },
      { name: "User Centered UX/UI Design", icon: customLayoutIcon },
    ],
  },
  {
    id: 2,
    key: "website-dev",
    name: "Website Development",
    data: [
      { name: "Clean & Scalable Code", icon: customLayoutIcon },
      { name: "Fast Loading Speed", icon: customLayoutIcon },
      { name: "SEO Optimization", icon: customLayoutIcon },
      { name: "Secure Architecture", icon: customLayoutIcon },
      { name: "CMS Integration", icon: customLayoutIcon },
      { name: "Cross Browser Compatibility", icon: customLayoutIcon },
    ],
  },
  {
    id: 3,
    key: "support-maintenance",
    name: " Support & Maintenance",
    data: [
      { name: "Regular Security Updates", icon: customLayoutIcon },
      { name: "Performace Monitering", icon: customLayoutIcon },
      { name: "Bug Fixes & Troubleshooting", icon: customLayoutIcon },
      { name: "Content & Plugin Updates", icon: customLayoutIcon },
      { name: "Backup & Recovery Solution", icon: customLayoutIcon },
      { name: "24/7 Technocal Support", icon: customLayoutIcon },
    ],
  },
  {
    id: 4,
    key: "content-creation",
    name: "Content Creation",
    data: [
      { name: "SEO-Optimized Copy", icon: customLayoutIcon },
      { name: "Brand Voice Consistency", icon: customLayoutIcon },
      { name: "Clear Calls-To-Action", icon: customLayoutIcon },
      { name: "Engaging  Headline & Messaging", icon: customLayoutIcon },
      { name: "Website Content Structuring", icon: customLayoutIcon },
      { name: "Keyword-Integrated Blog Writing", icon: customLayoutIcon },
    ],
  },
  {
    id: 5,
    key: "website-revamp",
    name: "Website Revamp",
    data: [
      { name: "Modernized UI/UX Design", icon: customLayoutIcon },
      { name: "Mobile-First & Responsive Layout", icon: customLayoutIcon },
      { name: "Improved Site Speed & Performace", icon: customLayoutIcon },
      { name: "SEO Re-Optimization", icon: customLayoutIcon },
      { name: "Content Restructuring & Updates", icon: customLayoutIcon },
      { name: "Integration Of Latest Technologies", icon: customLayoutIcon },
    ],
  },
  {
    id: 6,
    key: "post-launch",
    name: "Post-Launch Support",
    data: [
      { name: "Performace Monitering", icon: customLayoutIcon },
      { name: "Analysis   Setup & Reporting", icon: customLayoutIcon },
      { name: "Client Training & Documentation", icon: customLayoutIcon },
      { name: "Minor Tweaks & Adjustments", icon: customLayoutIcon },
      { name: "Bug Fixes & Patch Updates", icon: customLayoutIcon },
      { name: "Feedback-Based Iteration", icon: customLayoutIcon },
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
        // btnText=""
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
