import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import ListItem from "../../components/ListItem";

import aboutBanner from "../../assets/images/aboutBanner.webp";
import getToKnowImg1 from "../../assets/images/getToKnowImg1.webp";
import getToKnowImg2 from "../../assets/images/getToKnowImg2.webp";

import portfolioImg1_1 from "../../assets/images/portfolioImg1-1.webp";
import portfolioImg1_2 from "../../assets/images/portfolioImg1-2.webp";
import portfolioImg1_3 from "../../assets/images/portfolioImg1-3.webp";
import portfolioImg1_4 from "../../assets/images/portfolioImg1-4.webp";
import portfolioImg1_5 from "../../assets/images/portfolioImg1-5.webp";

import portfolioImg2_1 from "../../assets/images/portfolioImg2-1.webp";
import portfolioImg2_2 from "../../assets/images/portfolioImg2-2.webp";
import portfolioImg2_3 from "../../assets/images/portfolioImg2-3.webp";
import portfolioImg2_4 from "../../assets/images/portfolioImg2-4.webp";

import webDesignIcon from "../../assets/images/webDesignIcon.webp";
import mobileAppDevIcon from "../../assets/images/mobileAppDevIcon.webp";
import seoICon from "../../assets/images/seoICon.webp";
import digitalMarketingIcon from "../../assets/images/digitalMarketingIcon.webp";
import logoDesignIcon from "../../assets/images/logoDesignIcon.webp";
import cmsIcon from "../../assets/images/cmsIcon.webp";
import customDevIcon from "../../assets/images/customDevIcon.webp";
import smmIcon from "../../assets/images/smmIcon.webp";
import OurTeamSec from "../../components/OurTeamSec";

import customBrandingSolutionsIcon from "../../assets/images/customBrandingSolutionsIcon.webp";
import designatedProjectManagersIcon from "../../assets/images/designatedProjectManagersIcon.webp";
import onTimeDeliveryIcon from "../../assets/images/onTimeDeliveryIcon.webp";
import customerSupport247Icon from "../../assets/images/247CustomerSupportIcon.webp";
import awardWinningWebDesignersIcon from "../../assets/images/award-WinningWebDesignersIcon.webp";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import PortfolioSliders from "../../components/PortfolioSliders";
import OurPortfolioSec from "../../components/OurPortfolioSec";

const ourServicesData = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Develop responsive and optimized websites that reflect your brand and drive results. Our website design service in Texas is built to impress and convert.",
    icon: webDesignIcon,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Develop native or cross-platform mobile apps for iOS and Android that are user-friendly and high-performing, through expert mobile app development that scales with your business.",
    icon: mobileAppDevIcon,
  },
  {
    id: 3,
    title: "SEO",
    description:
      "Rank higher and stay visible with search engine optimization strategies tailored to your goals and audience.",
    icon: seoICon,
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "We help brands with channel selection, brand awareness, and conversions through expert digital marketing services.",
    icon: digitalMarketingIcon,
  },
  {
    id: 5,
    title: "Logo Design",
    description:
      "Create unique, eye-catching logo designs that capture attention and embody your brand's essence.",
    icon: logoDesignIcon,
  },
  {
    id: 6,
    title: "CMS Development",
    description:
      "Build a responsive, easy-to-manage website with a custom CMS ecommerce website development builder, no coding or tech expertise needed to update your content anytime.",
    icon: cmsIcon,
  },
  {
    id: 7,
    title: "Custom Web Development",
    description:
      "Develop powerful websites using JavaScript frameworks that are responsive and packed with up-to-date functionalities.",
    icon: customDevIcon,
  },
  {
    id: 8,
    title: "Social Media Marketing",
    description:
      "Grow brand awareness and engagement across multiple platforms with smart and strategic social media marketing services.",
    icon: smmIcon,
  },
];

const beVisibleData = [
  {
    id: 1,
    icon: customBrandingSolutionsIcon,
    title: "Higher Client Satisfaction",
  },
  {
    id: 2,
    icon: designatedProjectManagersIcon,
    title: "One-Of A-Kind Design",
  },
  {
    id: 3,
    icon: onTimeDeliveryIcon,
    title: "On-Time Delivery",
  },
  {
    id: 4,
    icon: customerSupport247Icon,
    title: "24/7 Expert Support",
  },
  {
    id: 5,
    icon: awardWinningWebDesignersIcon,
    title: "Award Winning Team",
  },
];

const ourPortfolio1 = [
  {
    image: portfolioImg2_1,
  },
  {
    image: portfolioImg2_2,
  },
  {
    image: portfolioImg2_3,
  },
  {
    image: portfolioImg2_4,
  },
  {
    image: portfolioImg2_1,
  },
  {
    image: portfolioImg2_2,
  },
  {
    image: portfolioImg2_3,
  },
  {
    image: portfolioImg2_4,
  },
];
const ourPortfolio2 = [
  {
    image: portfolioImg1_1,
  },
  {
    image: portfolioImg1_2,
  },
  {
    image: portfolioImg1_3,
  },
  {
    image: portfolioImg1_4,
  },
  {
    image: portfolioImg1_5,
  },
  {
    image: portfolioImg1_1,
  },
  {
    image: portfolioImg1_2,
  },
  {
    image: portfolioImg1_3,
  },
  {
    image: portfolioImg1_4,
  },
  {
    image: portfolioImg1_5,
  },
];

const About = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={aboutBanner}
        title="About Us"
        description="Texas Web Studio Is A Full-Stack Digital Agency, Having All The Elements To Build Dynamic And Progressive Web Products. From Responsive Website Designs And Digital Marketing Services To Mobile App Development In Texas, We Ensure Excellence In Every Project With High-End Execultion."
        pageName="About"
      />

      <section className="getToKnow sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="getToKnowImgContent">
                <div className="getToKnowImg1">
                  <img
                    src={getToKnowImg1}
                    alt="10+ Experience"
                    className="img-fluid"
                  />
                </div>
                <div className="getToKnowExpDiv">
                  <div className="getToKnowExpDivHead">
                    <div className="tenPlusExp">
                      <h4 className="tenPlusExpTitle">10+</h4>
                    </div>
                    <div className="getToKnowImg2">
                      <img
                        src={getToKnowImg2}
                        alt="10+ Experience"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="getKnowExptText">
                    <h4 className="expTagHead">
                      <span className="expTagHeadNum">10+</span> Years Of
                      Experience
                    </h4>
                    <p>
                      We Are Dedicated To Providing Outstanding Digital And
                      Design Services That Deliver Both Functionality And
                      Aesthetic Appeal, Ensuring Your Brand Stands Out And
                      Achieves Its Goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="getToKnowContent">
                <div className="secHead">
                  <p className="sec-tag">GET TO KNOW US</p>
                  <h3 className="secTitle">
                    We Provide Innovative Design & Development Solutions
                  </h3>
                  <p>
                    We Build Scalable Digital Products And Intelligent Marketing
                    Solutions Using The Latest Technologies To Keep Your
                    Business Ahead Of The Competition. Backed By A Powerful Tech
                    Stack, Our Custom-Crafted Services Align With Your Goals,
                    Reflect Your Brand’s Style, And Move At The Speed Of Your
                    Growth.
                  </p>
                  <h4 className="secSubTitle">
                    Your Partner In Digital Excellence
                  </h4>
                  <ListItem
                    list={[
                      "Trusted Frontend Execution",
                      "Strategic Backend Builds",
                      "Designs That Convert",
                      "Brands That Speak For Themselves",
                    ]}
                  />
                  <button className="theme-btn mt-4">Book A Call</button>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="beVisibleIconsData">
                {beVisibleData.map((item, index) => (
                  <div className="beVisibleIconData" key={index}>
                    <img src={item.icon} alt={item.title} />
                    <h4 className="beVisibleIconData-title">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourServices sec-padding bgPink">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ourServicesContent">
                <p className="sec-tag">OUR SERVICES</p>
                <h3 className="secTitle">
                  Everything Your Brand Needs To Grow
                </h3>
                <p>
                  Our Unwavering Commitment To Innovation And Customer
                  Satisfaction Drives Us To Deliver Transformative Services That
                  Effectively Address The Ever-Evolving Demands Of Businesses In
                  The Digital World, Ensuring Exceptional Results And Driving
                  Impactful Transformations.
                </p>
                <p>
                  We Begin With A Thorough Client Consultation, Crafting A
                  Strategic Roadmap That Defines Clear Goals, Timelines, And
                  Expectations, Laying The Foundation For A Smooth, Focused, And
                  Results-Driven Execution Process.
                </p>
                <p>
                  With Insights In Hand, We Move Into The Implementation
                  Process, Through Targeted Strategies, Coordination, And A
                  Commitment To Ensuring Every Objective Is Met With Precision
                  And Quality.
                </p>
                <p>
                  From Start To Finish, We Rely On Data-Driven Strategies To
                  Monitor Performance, Adapt Quickly, And Refine Our Approach So
                  Your Brand Gets The Best Results.
                </p>
                <h5 className="secSubTitle">
                  We’re Committed To Providing You The Best Digital Service!
                </h5>
                <button className="theme-btn icon-btn">
                  Book A Call <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ourServicesList">
                {ourServicesData.map((item, index) => (
                  <div className="ourServicesListItem" key={index}>
                    <div>
                      <h4 className="ourServicesListTitle">{item.title}</h4>
                      <p>{item.description}</p>
                      <Link className="readMore-btn" to={""}>
                        Read More <IoIosArrowRoundForward />
                      </Link>
                    </div>
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="ourServicesListIcon"
                    />
                  </div>
                ))}
                {/* <div className="ourServicesListItem">
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurPortfolioSec
        className="bgBlack"
        secTag="PORTFOLIO"
        secTitle="See Our Projects"
        ourPortfolio1={ourPortfolio1}
        ourPortfolio2={ourPortfolio2}
        btnText="View All Projects"
      />

      <OurTeamSec />
    </DefaultLayout>
  );
};

export default About;
