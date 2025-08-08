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
import { useModal } from "../../context/ModalContext";
import ReactHelmet from "../../components/ReactHelmet";

const ourServicesData = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Develop responsive and optimized websites that reflect your brand and drive results. Our website design service in Texas is built to impress and convert.",
    icon: webDesignIcon,
    link: "web-development",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Develop native or cross-platform mobile apps for iOS and Android that are user-friendly and high-performing, through expert mobile app development that scales with your business.",
    icon: mobileAppDevIcon,
    link: "mobile-app-development",
  },
  {
    id: 3,
    title: "SEO",
    description:
      "Rank higher and stay visible with search engine optimization strategies tailored to your goals and audience.",
    icon: seoICon,
    link: "search-engine-optimization",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "We help brands with channel selection, brand awareness, and conversions through expert digital marketing services.",
    icon: digitalMarketingIcon,
    link: "digital-media-marketing",
  },
  {
    id: 5,
    title: "Logo Design",
    description:
      "Create unique, eye-catching logo designs that capture attention and embody your brand's essence.",
    icon: logoDesignIcon,
    link: "logo-design",
  },
  {
    id: 6,
    title: "CMS Development",
    description:
      "Build a responsive, easy-to-manage website with a custom CMS ecommerce website development builder, no coding or tech expertise needed to update your content anytime.",
    icon: cmsIcon,
    link: "cms-development",
  },
  {
    id: 7,
    title: "Custom Web Development",
    description:
      "Develop powerful websites using JavaScript frameworks that are responsive and packed with up-to-date functionalities.",
    icon: customDevIcon,
    link: "custom-web-development",
  },
  {
    id: 8,
    title: "Social Media Marketing",
    description:
      "Grow brand awareness and engagement across multiple platforms with smart and strategic social media marketing services.",
    icon: smmIcon,
    link: "social-media-marketing",
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
    title: "Award-Winning Team",
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
const webUrl = import.meta.env.VITE_WEB_URL;

const About = () => {
  const { setShowModal } = useModal();
  return (
    <>
      <ReactHelmet
        title="About Us - Texas Web Studios - Web Design & SEO Experts"
        description="Learn about Texas Web Studios. A passionate team delivering high-performance web design, SEO, and branding solutions across Texas. See what sets us apart."
        // keywords=""
        url={`${webUrl}/about`}
        // url="https://texaswebstudios.com/about"
      />
      <DefaultLayout>
        <InnerBanner
          bgImage={aboutBanner}
          title="About Us"
          description="Texas Web Studio is a full-stack digital agency, having all the elements to build dynamic and progressive web products. From responsive website designs and digital marketing services to mobile app development in Texas, we ensure excellence in every project with high-end execution."
          pageName="About"
        />

        <section className="getToKnow sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="getToKnowImgContent">
                  <div
                    className="getToKnowImg1"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      src={getToKnowImg1}
                      alt="10+ Experience"
                      className="img-fluid"
                      width={"636"}
                      height={"591"}
                      fetchPriority="high"
                    />
                  </div>
                  <div className="getToKnowExpDiv">
                    <div className="getToKnowExpDivHead">
                      <div
                        className="tenPlusExp"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <p className="tenPlusExpTitle h4">10+</p>
                      </div>
                      <div
                        className="getToKnowImg2"
                        data-aos="fade-up"
                        data-aos-delay="600"
                      >
                        <img
                          src={getToKnowImg2}
                          alt="10+ Experience"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="getKnowExptText">
                      <p
                        className="expTagHead h4"
                        data-aos="fade-up"
                        data-aos-delay="700"
                      >
                        <span className="expTagHeadNum">10+</span> Years Of
                        Experience
                      </p>
                      <p data-aos="fade-up" data-aos-delay="800">
                        We Are Dedicated to Providing Outstanding Digital and
                        Design Services that Deliver Both Functionality and
                        Aesthetic Appeal, Ensuring Your Brand Stands Out and
                        Achieves Its Goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="getToKnowContent">
                  <div className="secHead">
                    <p className="sec-tag">Get to Know Us</p>
                    <p
                      className="secTitle h2"
                      data-aos="fade-left"
                      data-aos-delay="200"
                    >
                      We Provide Innovative Design & Development Solutions
                    </p>
                    <p data-aos="fade-left" data-aos-delay="400">
                      We build scalable digital products and intelligent
                      marketing solutions using the latest technologies to keep
                      your business ahead of the competition. Backed by a
                      powerful tech stack, our custom-crafted services align
                      with your goals, reflect your brand’s style, and move at
                      the speed of your growth.
                    </p>
                    <p
                      className="secSubTitle h3"
                      data-aos="fade-left"
                      data-aos-delay="600"
                    >
                      Your Partner in Digital Excellence
                    </p>
                    <ListItem
                      list={[
                        "Trusted frontend execution",
                        "Strategic backend builds",
                        "Designs that convert",
                        "Brands that speak for themselves",
                      ]}
                    />
                    <button
                      className="theme-btn mt-4"
                      onClick={() => setShowModal(true)}
                    >
                      Book a Call
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="beVisibleIconsData">
                  {beVisibleData.map((item, index) => (
                    <div
                      className="beVisibleIconData"
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 200}
                    >
                      <img src={item.icon} alt={item.title} />
                      <h3 className="beVisibleIconData-title">{item.title}</h3>
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
                  <h2
                    className="secTitle"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    Everything Your Brand Needs to Grow
                  </h2>
                  <p data-aos="fade-right" data-aos-delay="300">
                    Our unwavering commitment to innovation and customer
                    satisfaction drives us to deliver transformative services
                    that effectively address the ever-evolving demands of
                    businesses in the digital world, ensuring exceptional
                    results and driving impactful transformations.
                  </p>
                  <p data-aos="fade-right" data-aos-delay="400">
                    We begin with a thorough client consultation, crafting a
                    strategic roadmap that defines clear goals, timelines, and
                    expectations, laying the foundation for a smooth, focused,
                    and results-driven execution process.
                  </p>
                  <p data-aos="fade-right" data-aos-delay="500">
                    with insights in hand, we move into the implementation
                    process, through targeted strategies, coordination, and a
                    commitment to ensuring every objective is met with precision
                    and quality.
                  </p>
                  <p data-aos="fade-right" data-aos-delay="600">
                    From start to finish, we rely on data-driven strategies to
                    monitor performance, adapt quickly, and refine our approach
                    so your brand gets the best results.
                  </p>
                  <h3
                    className="secSubTitle"
                    data-aos="fade-right"
                    data-aos-delay="700"
                  >
                    We’re Committed to Providing You The Best Digital Service!
                  </h3>
                  <button
                    className="theme-btn icon-btn"
                    data-aos="fade-right"
                    data-aos-delay="800"
                    onClick={() => setShowModal(true)}
                  >
                    Book a Call <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ourServicesList">
                  {ourServicesData.map((item, index) => (
                    <div
                      className="ourServicesListItem"
                      key={index}
                      // data-aos="fade-up"
                      // data-aos-delay={index * 200}
                    >
                      <div>
                        <h3 className="ourServicesListTitle">{item.title}</h3>
                        <p>{item.description}</p>
                        <Link className="readMore-btn" to={`/${item.link}`}>
                          Read More <IoIosArrowRoundForward />
                        </Link>
                      </div>
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="ourServicesListIcon"
                        width={"40"}
                        height={"40"}
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
    </>
  );
};

export default About;
