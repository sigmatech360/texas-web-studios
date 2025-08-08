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
import ReactHelmet from "../../components/ReactHelmet";

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

const webUrl = import.meta.env.VITE_WEB_URL;

const Portfolio = () => {
  const [key, setKey] = useState("all-portfolio");

  const handleOpenChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize(); // or toggle(), or popup()
    } else {
      console.warn("Tawk_API not available yet.");
    }
  };
  return (
    <>
      <ReactHelmet
        title="Our Portfolio - Texas Web Studios"
        description="Browse our portfolio of custom websites, apps, and digital marketing projects. Texas Web Studios delivers real results for businesses across Texas and beyond."
        // keywords=""
        url={`${webUrl}/portfolio`}
        // url="https://texaswebstudios.com/portfolio"
      />
      <DefaultLayout>
        <InnerBanner
          bgImage={portfolioBanner}
          title="Portfolio"
          description="We don’t claim to be brilliant. Instead, we prove our brilliance with our expertise! Take a look at our portfolio with different projects on web development and digital growth for our dearest clients."
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
                    A Glimpse into Our Work
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="400">
                    with years of experience in the industry, we have served in
                    various sectors for multiple businesses. Take a look at our
                    excellence in the projects we proudly completed for our
                    clients.
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
            <Tab
              eventKey="mobileAppDev-portfolio"
              title="Mobile App Development"
            >
              {key === "mobileAppDev-portfolio" && (
                <PortfolioSliders
                  portfolio1={mobilePortfolio1}
                  portfolio2={mobilePortfolio2}
                />
              )}
            </Tab>
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
          secTitle={
            <h2 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              What They're Talking About Us.
            </h2>
          }
          testimonialData={[
            {
              id: 1,
              name: "David Coper",
              designation: "Happy Customer",
              descrition:
                "I contacted Texas Web Studios to get a custom website made for my e-commerce store I can smoothly run my business online now!",
            },
            {
              id: 2,
              name: "Mark Brown",
              designation: "Happy Customer",
              descrition:
                "Got my project completed within two weeks. I must say their team is quite attentive and extremely prompt. Totally satisfied.",
            },
            {
              id: 3,
              name: "Katy Dellecqua",
              designation: "Happy Customer",
              descrition:
                "Trusted them for the SEO of my website, and my visibility has been brilliant since then. Never thought this would be possible!",
            },
            {
              id: 4,
              name: "Mathew Singh",
              designation: "Happy Customer",
              descrition:
                "I wanted a funky website for my product, and they made sure each of my requirements was checked! Amazed by the quality of their services.",
            },
          ]}
        />

        <PackagesSec
          className="bgBlack"
          secTag="PRICING"
          title="Flexible Pricing Packages"
          description="Every Business Has Different Needs, so We Offer Custom Pricing
                    for Each of Our Services. Our Packages Include Basic, Pro, and
                    Premium, Designed to Match Where You Are and Where You’re
                    Headed. Whether You Are Starting Fresh or Looking to Scale,
                    You Will Get The Right Solution at The Right Price. So Find
                    The Package that Fits You Best, or Consult Us for a Custom
                    Package!"
        />

        <section className="designForImpack sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="secHead">
                  <p className="sec-tag">DESIGN FOR IMPACT:</p>
                  <h2
                    className="secTitle"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Collaborate Today to Achieve Success Tomorrow!
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="400">
                    We have completed hundreds of projects in multiple
                    industries, and all we have received in return is happy
                    clients running their successful businesses. If you want to
                    be one of the success stories, then we are just one message
                    away. Contact us and leave the rest to us. We promise you
                    growth, success, and constant engagement.
                  </p>
                  <Link
                    to={""}
                    className="theme-btn"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    onClick={handleOpenChat}
                  >
                    Click to Talk!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default Portfolio;
