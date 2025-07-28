import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import portfolioBanner from "../../assets/images/portfolioBanner.webp";

import allPortfolioImg1_1 from "../../assets/images/allPortfolioImg1_1.webp";
import allPortfolioImg1_2 from "../../assets/images/allPortfolioImg1_2.webp";
import allPortfolioImg1_3 from "../../assets/images/allPortfolioImg1_3.webp";
import allPortfolioImg1_4 from "../../assets/images/allPortfolioImg1_4.webp";
import allPortfolioImg1_5 from "../../assets/images/allPortfolioImg1_5.webp";

import allPortfolioImg2_1 from "../../assets/images/allPortfolioImg2_1.webp";
import allPortfolioImg2_2 from "../../assets/images/allPortfolioImg2_2.webp";
import allPortfolioImg2_3 from "../../assets/images/allPortfolioImg2_3.webp";
import allPortfolioImg2_4 from "../../assets/images/allPortfolioImg2_4.webp";

// Logo portfolio
import logoPortfolioImg1_1 from "../../assets/images/logoPortfolio/logoPortfolioImg1_1.gif";
import logoPortfolioImg1_2 from "../../assets/images/logoPortfolio/logoPortfolioImg1_2.webp";
import logoPortfolioImg1_3 from "../../assets/images/logoPortfolio/logoPortfolioImg1_3.webp";
import logoPortfolioImg1_4 from "../../assets/images/logoPortfolio/logoPortfolioImg1_4.webp";
import logoPortfolioImg1_5 from "../../assets/images/logoPortfolio/logoPortfolioImg1_5.webp";
import logoPortfolioImg1_6 from "../../assets/images/logoPortfolio/logoPortfolioImg1_6.webp";

import logoPortfolioImg2_1 from "../../assets/images/logoPortfolio/logoPortfolioImg2_1.gif";
import logoPortfolioImg2_2 from "../../assets/images/logoPortfolio/logoPortfolioImg2_2.webp";
import logoPortfolioImg2_3 from "../../assets/images/logoPortfolio/logoPortfolioImg2_3.gif";
import logoPortfolioImg2_4 from "../../assets/images/logoPortfolio/logoPortfolioImg2_4.webp";
import logoPortfolioImg2_5 from "../../assets/images/logoPortfolio/logoPortfolioImg2_5.webp";
import logoPortfolioImg2_6 from "../../assets/images/logoPortfolio/logoPortfolioImg2_6.webp";

import PortfolioSliders from "../../components/PortfolioSliders";
import { IoIosArrowRoundForward } from "react-icons/io";
import TestimonialSec from "../../components/TestimonialSec";
import PackagesSec from "../../components/PackagesSec";
import { cmsDevPortfolio1, cmsDevPortfolio2 } from "../Services/CMSDevelopment";
import {
  customDevPortfolio1,
  customDevPortfolio2,
} from "../Services/CustomWebDev";
import { mobilePortfolio1, mobilePortfolio2 } from "../Services/MobileAppDev";
import { Link } from "react-router-dom";

const allPortfolio1 = [
  {
    image: allPortfolioImg1_1,
  },
  {
    image: allPortfolioImg1_2,
  },
  {
    image: allPortfolioImg1_3,
  },
  {
    image: allPortfolioImg1_4,
  },
  {
    image: allPortfolioImg1_5,
  },
  {
    image: allPortfolioImg1_1,
  },
  {
    image: allPortfolioImg1_2,
  },
  {
    image: allPortfolioImg1_3,
  },
  {
    image: allPortfolioImg1_4,
  },
  {
    image: allPortfolioImg1_5,
  },
];
const allPortfolio2 = [
  {
    image: allPortfolioImg2_1,
  },
  {
    image: allPortfolioImg2_2,
  },
  {
    image: allPortfolioImg2_3,
  },
  {
    image: allPortfolioImg2_4,
  },
  {
    image: allPortfolioImg2_1,
  },
  {
    image: allPortfolioImg2_2,
  },
  {
    image: allPortfolioImg2_3,
  },
  {
    image: allPortfolioImg2_4,
  },
];

const logoPortfolio1 = [
  { image: logoPortfolioImg1_1 },
  { image: logoPortfolioImg1_2 },
  { image: logoPortfolioImg1_3 },
  { image: logoPortfolioImg1_4 },
  { image: logoPortfolioImg1_5 },
  { image: logoPortfolioImg1_6 },
  // repeat
  { image: logoPortfolioImg1_1 },
  { image: logoPortfolioImg1_2 },
];

const logoPortfolio2 = [
  { image: logoPortfolioImg2_1 },
  { image: logoPortfolioImg2_2 },
  { image: logoPortfolioImg2_3 },
  { image: logoPortfolioImg2_4 },
  { image: logoPortfolioImg2_5 },
  { image: logoPortfolioImg2_6 },
  // repeat
  { image: logoPortfolioImg2_1 },
  { image: logoPortfolioImg2_2 },
];

const Portfolio = () => {
  const [key, setKey] = useState("all-portfolio");
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={portfolioBanner}
        title="Portfolio"
        description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Mi Eget Mauris Pharetra Et Ultrices."
        pageName="Portfolio"
      />

      <section className="ourPortfolio sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="secHead">
                <p className="sec-tag">PROJECTS</p>
                <h2
                  className="secTitle"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Your Partner For Software Innovation
                </h2>
                <p data-aos="fade-up" data-aos-delay="400">
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And
                  Typesetting Industry. Lorem Ipsum Has Been The Industry's
                  Standard Dummy Text Ever Since The 1500S, When An Unknown
                  Printer Took A Galley Of Type And Scrambled It To Make A Type
                  Specimen Book.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 packagesTabs"
        >
          <Tab eventKey="all-portfolio" title="ALL">
            {key === "all-portfolio" && (
              <PortfolioSliders
                portfolio1={allPortfolio1}
                portfolio2={allPortfolio2}
              />
            )}
          </Tab>
          <Tab eventKey="cmsDev-portfolio" title="CMS Development">
            {key === "cmsDev-portfolio" && (
              <PortfolioSliders
                portfolio1={cmsDevPortfolio1}
                portfolio2={cmsDevPortfolio2}
              />
            )}
          </Tab>
          <Tab eventKey="customDev-portfolio" title="Custom Development">
            {key === "customDev-portfolio" && (
              <PortfolioSliders
                portfolio1={customDevPortfolio1}
                portfolio2={customDevPortfolio2}
              />
            )}
          </Tab>
          <Tab eventKey="logoDesign-portfolio" title="Logo">
            {key === "logoDesign-portfolio" && (
              <PortfolioSliders
                portfolio1={logoPortfolio1}
                portfolio2={logoPortfolio2}
              />
            )}
          </Tab>
          <Tab eventKey="mobileAppDev-portfolio" title="Mobile App Development">
            {key === "mobileAppDev-portfolio" && (
              <PortfolioSliders
                portfolio1={mobilePortfolio1}
                portfolio2={mobilePortfolio2}
              />
            )}
          </Tab>
          {/* <Tab eventKey="webDesign-portfolio" title="Web Design">
            {key === "webDesign-portfolio" && (
              <PortfolioSliders
                portfolio1={allPortfolio1}
                portfolio2={allPortfolio2}
              />
            )}
          </Tab>
          <Tab eventKey="uiux-portfolio" title="Ui / Ux Design">
            {key === "uiux-portfolio" && (
              <PortfolioSliders
                portfolio1={allPortfolio1}
                portfolio2={allPortfolio2}
              />
            )}
          </Tab>
          <Tab eventKey="logo-portfolio" title="Logo Design">
            {key === "logo-portfolio" && (
              <PortfolioSliders
                portfolio1={allPortfolio1}
                portfolio2={allPortfolio2}
              />
            )}
          </Tab>
          <Tab eventKey="videoAnimation-portfolio" title="Video Animation">
            {key === "videoAnimation-portfolio" && (
              <PortfolioSliders
                portfolio1={allPortfolio1}
                portfolio2={allPortfolio2}
              />
            )}
          </Tab>
          <Tab eventKey="eCommerce-portfolio" title="E Commerce Web Design">
            {key === "eCommerce-portfolio" && (
              <PortfolioSliders
                portfolio1={allPortfolio1}
                portfolio2={allPortfolio2}
              />
            )}
          </Tab> */}
        </Tabs>

        {/* <div className="text-center mt-5">
          <button className="theme-btn icon-btn">
            View All Projects <IoIosArrowRoundForward />
          </button>
        </div> */}
      </section>

      <TestimonialSec
        className="bgPink"
        secTag="OUR TESTIMONIALS"
        secTitle="What They're Talking About Us."
        testimonialData={[
          {
            id: 1,
            name: "David Coper",
            designation: "Happy Customer",
            descrition:
              "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since.",
          },
          {
            id: 2,
            name: "David Coper",
            designation: "Happy Customer",
            descrition:
              "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since.",
          },
          {
            id: 3,
            name: "David Coper",
            designation: "Happy Customer",
            descrition:
              "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since.",
          },
        ]}
      />

      <PackagesSec
        className="bgBlack"
        secTag="PRICING"
        title="Flexible Pricing Packages"
        description="Every Business Has Different Needs, So We Offer Custom Pricing
                    For Each Of Our Services. Our Packages Include Basic, Pro, And
                    Premium, Designed To Match Where You Are And Where You’re
                    Headed. Whether You Are Starting Fresh Or Looking To Scale,
                    You Will Get The Right Solution At The Right Price. So Find
                    The Package That Fits You Best, Or Consult Us For A Custom
                    Package!"
      />

      <section className="designForImpack sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="secHead">
                <p className="sec-tag">DESIGN FOR IMPACT:</p>
                <h3
                  className="secTitle"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Elevate Your Brand Identity With Us!
                </h3>
                <p data-aos="fade-up" data-aos-delay="400">
                  Don't Hesitate To Reach Out! Logo Design Valley Encourages
                  Discussions About New Projects, Specific Questions You May
                  Have, Or Even Feedback On How We Can Improve Our Services. We
                  Believe In Open Communication That Fosters A Successful And
                  Rewarding Design Experience.
                </p>
                <Link
                  to={"/contact"}
                  className="theme-btn"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Let's Discuss
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Portfolio;
