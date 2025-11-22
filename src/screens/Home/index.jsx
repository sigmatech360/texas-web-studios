import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Components
import DefaultLayout from "../../components/DefaultLayout";
import MainBanner from "../../components/MainBanner";
import ContentWithICon from "../../components/ContentWithICon";
import OurServiceBox from "../../components/OurServiceBox";

// Images
import designAndDevelopmentIcon from "../../assets/images/designAndDevelopmentIcon.webp";
import userExperienceIcon from "../../assets/images/userExperienceIcon.webp";
import eCommerceIcon from "../../assets/images/eCommerceIcon.webp";
import growthStratergyIcon from "../../assets/images/growthStratergyIcon.webp";

// services icon
import mobileAppDevIcon from "../../assets/images/ourServicesIcon/ourServiceMobileIcon.webp";
import logoDesignIcon from "../../assets/images/ourServicesIcon/ourServiceLogoIcon.webp";
import webDesignIcon from "../../assets/images/ourServicesIcon/ourServiceWebIcon.webp";

import ourServiceSEOIcon from "../../assets/images/ourServicesIcon/ourServiceSEOIcon.webp";
import ourServiceCMSIcon from "../../assets/images/ourServicesIcon/ourServiceCMSIcon.webp";
import ourServiceDigitalMarketingIcon from "../../assets/images/ourServicesIcon/ourServiceDigitalMarketingIcon.webp";
import ourServiceSMMIcon from "../../assets/images/ourServicesIcon/ourServiceSMMIcon.webp";
import ourServiceCustomIcon from "../../assets/images/ourServicesIcon/ourServiceCustomIcon.webp";

import homeOurServives1 from "../../assets/images/homeOurServives1.webp";
import homeOurServives2 from "../../assets/images/homeOurServives2.webp";
import homeOurServives3 from "../../assets/images/homeOurServives3.webp";
import homeOurServives4 from "../../assets/images/homeOurServives4.webp";
import homeOurServives5 from "../../assets/images/homeOurServives5.webp";
import homeOurServives6 from "../../assets/images/homeOurServives6.webp";
import homeOurServives7 from "../../assets/images/homeOurServives7.webp";
import homeOurServives8 from "../../assets/images/homeOurServives8.webp";

import customBrandingSolutionsIcon from "../../assets/images/customBrandingSolutionsIcon.webp";
import designatedProjectManagersIcon from "../../assets/images/designatedProjectManagersIcon.webp";
import securityAdvancementsIcon from "../../assets/images/securityAdvancementsIcon.webp";
import customerSupport247Icon from "../../assets/images/247CustomerSupportIcon.webp";
import awardWinningWebDesignersIcon from "../../assets/images/award-WinningWebDesignersIcon.webp";

import faqImg from "../../assets/images/faqImg.webp";

import { IoIosArrowRoundForward } from "react-icons/io";
import TestimonialSec from "../../components/TestimonialSec";
import OurTeamSec from "../../components/OurTeamSec";
import FAQSec from "../../components/FAQSec";
import BookCallSec from "../../components/BookCallSec";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import PackagesSec from "../../components/PackagesSec";
import ReactHelmet from "../../components/ReactHelmet";

const homeAboutListData = [
  {
    id: 1,
    icon: designAndDevelopmentIcon,
    title: "Design & Development",
    description:
      "Visually Stunning, Responsive Websites Engineered for Performance, Brand Consistency, and High Conversion Across All Devices.",
  },
  {
    id: 2,
    icon: userExperienceIcon,
    title: "User Experience (UX)",
    description:
      "We Craft User-First Digital Experiences that Feel Effortless and Keep Your Visitors Engaged, Loyal, and Ready to Take Action.",
  },
  {
    id: 3,
    icon: eCommerceIcon,
    title: "E-Commerce Solutions",
    description:
      "From Storefront to Checkout, We Design and Develop E-Commerce Platforms that Convert, Scale, and Support Ongoing Sales Growth.",
  },
  {
    id: 4,
    icon: growthStratergyIcon,
    title: "Growth Strategy & Analytics",
    description:
      "Smarter Marketing Starts with Data. We Build and Execute Growth Strategies Backed by Clear Analytics and Measurable Business Goals.",
  },
];

const ourServicesData = [
  {
    id: 1,
    image: homeOurServives1,
    icon: webDesignIcon,
    title: "Website Design",
    description:
      "We Craft Responsive, Functional, and Converting Websites that Look Stunning and Guide Visitors to Take Action, Built for Performance on Every Device.",
    link: "/web-development",
  },
  {
    id: 2,
    image: homeOurServives2,
    icon: logoDesignIcon,
    title: "Logo Design",
    description:
      "Your Brand Starts with a Logo Design. We Create Bold, Memorable Logos that Capture Your Identity and Work Across All Your Digital Touchpoints.",
    link: "/logo-design",
  },
  {
    id: 3,
    image: homeOurServives3,
    icon: mobileAppDevIcon,
    title: "App Development",
    description:
      "We Build User-Friendly and Functional Mobile Apps that Keep Your Customers Engaged. Our Apps Are Designed for Performance Across Ios and Android Platforms.",
    link: "/mobile-app-development",
  },
  {
    id: 4,
    image: homeOurServives4,
    icon: ourServiceSEOIcon,
    title: "Search Engine Optimization",
    description:
      "We Ensure Your Business Gets Found. Our SEO Services in Texas Improve Rankings, Increase Visibility, and Drive High-Quality Traffic that's Ready to Convert.",
    link: "/search-engine-optimization",
  },
  {
    id: 5,
    image: homeOurServives5,
    icon: ourServiceCMSIcon,
    title: "CMS Development",
    description:
      "Get a Custom Content Management System that Puts You in Control. Our Website Development Company Provides Easy-To-Manage, Secure, Custom-Built CMS Solutions for Your Workflow.",
    link: "/cms-development",
  },
  {
    id: 6,
    image: homeOurServives6,
    icon: ourServiceDigitalMarketingIcon,
    title: "Digital Marketing",
    description:
      "We Design Full-Funnel Strategies that Drive Traffic, Capture Leads, and Turn Browsers Into Buyers. Our Digital Marketing Services Are Made to Boost Your Business in The Right Places, at The Right Time.",
    link: "/digital-media-marketing",
  },
  {
    id: 7,
    image: homeOurServives7,
    icon: ourServiceSMMIcon,
    title: "Social Media Marketing",
    description:
      "Grow Your Presence Across Every Major Platform with Content that Makes You Stop Scrolling. We Work on Smart Targeting and Strategic Campaigns to Drive Real Engagement.",
    link: "/social-media-marketing",
  },
  {
    id: 8,
    image: homeOurServives8,
    icon: ourServiceCustomIcon,
    title: "Custom Web Development",
    description:
      "From Complex Systems to Custom Features, We Provide Custom Web Development Services that Do More, Load Faster, and Grow with Your Business.",
    link: "/custom-web-development",
  },
];

const beVisibleData = [
  {
    id: 1,
    icon: customBrandingSolutionsIcon,
    title: "Custom Branding Solutions",
  },
  {
    id: 2,
    icon: designatedProjectManagersIcon,
    title: "Designated Project Managers",
  },
  {
    id: 3,
    icon: securityAdvancementsIcon,
    title: "Security Advancements",
  },
  {
    id: 4,
    icon: customerSupport247Icon,
    title: "24/7 Customer Support",
  },
  {
    id: 5,
    icon: awardWinningWebDesignersIcon,
    title: "Award-Winning Web Designers",
  },
];

const testimonialData = [
  {
    title: "Am I eligible for a free website audit?",
    description:
      "Yes. If you are a business that wants to improve, you are eligible for a FREE website audit from us, regardless of the industry you are in. Our team reviews speed, design, SEO, and security, then shares practical recommendations for improvements.",
  },
  {
    title: "What is your process and how long does development take?",
    description:
      "Our process includes discussion, design, development, testing, and launch. Simple websites usually take 3–6 weeks, while larger ecommerce or custom projects can require 8–12 weeks.",
  },
  {
    title: "Can I update the website myself once it’s launched?",
    description:
      "Yes. We build user-friendly sites with easy content management systems so that you can edit text, images, and pages anytime without technical skills or ongoing developer support.",
  },
  {
    title: "Can I ask for custom pricing?",
    description:
      "Absolutely. Every project is unique. We provide tailored pricing based on your goals, features, and timeline, ensuring you only pay for what your business truly needs.",
  },
];

const webUrl = import.meta.env.VITE_WEB_URL;

const Home = () => {
  const [key, setKey] = useState("all-packages");
  return (
    <>
      <ReactHelmet
        title="Texas Web Studios - Custom Web Design & SEO in Texas"
        description="Boost your business with Texas Web Studios, expert in custom web design, SEO, and digital marketing. Fast, responsive, and built to convert. Get started today!"
        // keywords=""
        url={`${webUrl}/`}
      />
      <DefaultLayout>
        <MainBanner />

        <section className="homeAbout sec-margin">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-lg-0 mb-4">
                <div className="homeAboutContent">
                  <h2
                    className="secTitle"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    Growth Strategies that Leave a Lasting Impact
                  </h2>
                  <p data-aos="fade-right" data-aos-delay="400">
                    with Years of Experience, We Have Learnt that Every Business
                    Runs Differently, and that’s Precisely How We Strategize.
                    from Full-Stack Development to Custom Digital Marketing
                    Solutions, Our Branding and{" "}
                    <span className="redColor">
                      Website Development Company in Texas
                    </span>{" "}
                    Creates Solutions that Fit Your Goals, Your Market, and The
                    Way You Operate. Whatever Your Requirements, We Will Meet
                    Them. Whether You Need a Custom Site, a Smarter Sales
                    Funnel, or IT Management that Just Works, We Bring
                    Everything Together to Help Businesses Grow with Clarity,
                    Speed, and Confidence.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="homeAboutList">
                  {homeAboutListData.map((item, index) => (
                    <ContentWithICon
                      key={index}
                      index={index}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="homeMissionSec sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="homeMissionContent">
                  <div className="homeMissionContentLeft">
                    <p className="sec-tag">MISSION</p>
                    <h2
                      className="secTitle"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      Building Unique Brand Identities that Help Texas
                      Businesses Grow, Compete, and Lead Online.
                    </h2>
                  </div>
                  <Link
                    to={"/about"}
                    className="theme-btn icon-btn"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    About Us <IoIosArrowRoundForward />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="homeOurServicesSec sec-padding bgBlack">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="homeOurServicesHead">
                  <p className="sec-tag">OUR SERVICES</p>
                  <h2
                    className="secTitle"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    Revamp Your Brand <br /> with Smart Digital Solutions
                  </h2>
                  <p data-aos="fade-right" data-aos-delay="400">
                    We Offer a Full Suite of Digital Solutions, Tailored to Your
                    Business Needs. From Custom Web Development to Digital
                    Marketing in Texas, Our Services Are Built to Deliver
                    Results, Drive Growth, and Help You Stand Out Online.
                  </p>
                </div>
              </div>
              <div className="homeServicesSlider">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  // centeredSlides={true}
                  loop={true}
                  speed={5000}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                  }}
                  freeMode={true}
                  freeModeMomentum={false}
                  modules={[Autoplay]}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    481: { slidesPerView: 1 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    992: { slidesPerView: 3, spaceBetween: 20 },
                  }}
                >
                  {ourServicesData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <OurServiceBox
                        image={item.image}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* {ourServicesData.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <OurServiceBox
                  image={item.image}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              </div>
            ))} */}
            </div>
          </div>
        </section>

        <section className="beVisibleSec sec-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="secHead">
                  <p className="sec-tag">BE VISIBLE</p>
                  <h2
                    className="secTitle"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    Why Texas Web Studios Is The Standard!
                  </h2>
                </div>
              </div>
              <div className="col-lg-6 mb-lg-0 mb-4">
                <div
                  className="beVisible-numberBox"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <div className="beVisible-numberBoxBg">
                    <p className="h3">10+</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="beVisibleCOntent">
                  <p
                    className="secSubTitle h3"
                    data-aos="fade-left"
                    data-aos-delay="600"
                  >
                    Experience that Delivers Results.
                  </p>
                  <p data-aos="fade-left" data-aos-delay="800">
                    Backed by Years of Industry Experience, We’ve Earned The
                    Trust of Large and Small Businesses Across Texas. We Create
                    Simple and Practical Online Marketing Solutions that Help
                    Our Clients Grow and Succeed Online.
                  </p>
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

        <PackagesSec
          className="bgPink"
          secTag="PRICING"
          title="Flexible Pricing Packages"
          description="Every Business Has Different Needs, so We Offer Custom Pricing
                    for Each of Our Services. Our Packages Include Basic, Pro, and
                    Premium, Designed to Match Where You Are and Where You’re
                    Headed. Whether You Are Starting Fresh or Looking to Scale,
                    You Will Get The Right Solution at The Right Price. Find
                    The Package that Fits You Best, or Consult Us for a Custom
                    Package!"
        />

        <TestimonialSec
          className="bgBlack"
          secTag="OUR TESTIMONIALS"
          secTitle={
            <h3 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              Hear from Our Happy Clients
            </h3>
          }
          testimonialData={[
            {
              id: 1,
              name: "Sarah Mitchell",
              designation: "Marketing Manager, Brightpath Solutions",
              descrition:
                "Texas Web Studio Built Us a Fast Website. We Are Now Able to Update Our Content Without The Need for Any Developer.",
            },
            {
              id: 2,
              name: "Jason Lee",
              designation: "Founder, Urbannest Interiors",
              descrition:
                "Their CMS Solution Helped Our Team Save Time and Stay in Control. Everything Works Smoothly Across Devices. Highly Recommend!",
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

        {/* <OurTeamSec /> */}
        <FAQSec
          secTag="GET ANSWERS"
          secTitle="Frequently Asked Questions"
          testimonials={testimonialData}
          image={faqImg}
        />
        <BookCallSec
          title="Let’s Discuss Your Business Goals"
          btnText="Book a Call"
        />
        <ContactUsSec />

        <BlogSec />
      </DefaultLayout>
    </>
  );
};

export default Home;
