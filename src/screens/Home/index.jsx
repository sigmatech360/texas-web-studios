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

const homeAboutListData = [
  {
    id: 1,
    icon: designAndDevelopmentIcon,
    title: "Design & Development",
    description:
      "Visually Stunning, Responsive Websites Engineered For Performance, Brand Consistency, And High Conversion Across All Devices.",
  },
  {
    id: 2,
    icon: userExperienceIcon,
    title: "User Experience (UX)",
    description:
      "We Craft User-First Digital Experiences That Feel Effortless And Keep Your Visitors Engaged, Loyal, And Ready To Take Action.",
  },
  {
    id: 3,
    icon: eCommerceIcon,
    title: "E-Commerce Solutions",
    description:
      "From Storefront To Checkout, We Design And Develop E-Commerce Platforms That Convert, Scale, And Support Ongoing Sales Growth.",
  },
  {
    id: 4,
    icon: growthStratergyIcon,
    title: "Growth Strategy & Analytics",
    description:
      "Smarter Marketing Starts With Data. We Build And Execute Growth Strategies Backed By Clear Analytics And Measurable Business Goals.",
  },
];

const ourServicesData = [
  {
    id: 1,
    image: homeOurServives1,
    icon: webDesignIcon,
    title: "Website Design",
    description:
      "We Craft Responsive, Functional, And Converting Websites That Look Stunning And Guide Visitors To Take Action, Built For Performance On Every Device.",
    link: "/web-development",
  },
  {
    id: 2,
    image: homeOurServives2,
    icon: logoDesignIcon,
    title: "Logo Design",
    description:
      "Your Brand Starts With A Logo Design. We Create Bold, Memorable Logos That Capture Your Identity And Work Across All Your Digital Touchpoints.",
    link: "/logo-design",
  },
  {
    id: 3,
    image: homeOurServives3,
    icon: mobileAppDevIcon,
    title: "App Development",
    description:
      "We Build User-Friendly And Functional Mobile Apps That Keep Your Customers Engaged. Our Apps Are Designed For Performance Across Ios And Android Platforms.",
    link: "/mobile-app-development",
  },
  {
    id: 4,
    image: homeOurServives4,
    icon: ourServiceSEOIcon,
    title: "Search Engine Optimization",
    description:
      "We Ensure Your Business Gets Found. Our SEO Services In Texas Improve Rankings, Increase Visibility, And Drive High-Quality Traffic That's Ready To Convert.",
    link: "/search-engine-optimization",
  },
  {
    id: 5,
    image: homeOurServives5,
    icon: ourServiceCMSIcon,
    title: "CMS Development",
    description:
      "Get A Custom Content Management System That Puts You in Control. Our Website Development Company Provides Easy-To-Manage, Secure, Custom-Built CMS Solutions For Your Workflow.",
    link: "/cms-development",
  },
  {
    id: 6,
    image: homeOurServives6,
    icon: ourServiceDigitalMarketingIcon,
    title: "Digital Marketing",
    description:
      "We Design Full-Funnel Strategies That Drive Traffic, Capture Leads, And Turn Browsers Into Buyers. Our Digital Marketing Services Are Made To Boost Your Business In The Right Places, At The Right Time.",
    link: "/mobile-app-development",
  },
  {
    id: 7,
    image: homeOurServives7,
    icon: ourServiceSMMIcon,
    title: "Social Media Marketing",
    description:
      "Grow Your Presence Across Every Major Platform With Content That Makes You Stop Scrolling. We Work On Smart Targeting And Strategic Campaigns To Drive Real Engagement.",
    link: "/digital-media-marketing",
  },
  {
    id: 8,
    image: homeOurServives8,
    icon: ourServiceCustomIcon,
    title: "Custom Web Development",
    description:
      "From Complex Systems To Custom Features, We Provide Custom Web Development Services That Do More, Load Faster, And Grow With Your Business.",
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
    title: "Can I Ask For Custom Pricing?",
    description:
      "Yes. We Understand That Every Business Has Different Needs, So We’re Happy To Create A Custom Quote Based On Your Goals, Timeline, And Required Services.",
  },
  {
    title: "Do You Offer Ongoing Support After A Project Ends?",
    description:
      "Yes. We Offer Monthly Support Plans, Maintenance, Updates, And Optimization To Make Sure Your Website Or Campaign Stays Sharp And Effective.",
  },
  {
    title: "Do You Provide Site Audits Before We Start The Process?",
    description:
      "Yes. We Begin With A Full Website Audit To Identify Gaps And Opportunities. You’ll Get The Report First, Then It’s Your Call To Move Forward Or Not.",
  },
  {
    title: "How Involved Will I Be In The Design Process?",
    description:
      "We Believe In Close Collaboration, So We Include You At Every Key Step, From Planning And Wireframes To Final Design Approval. We Work With You To Create The Ideal Results.",
  },
];

const Home = () => {
  const [key, setKey] = useState("all-packages");
  return (
    <DefaultLayout>
      <MainBanner />

      <section className="homeAbout sec-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="homeAboutContent">
                <h3
                  className="secTitle"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Growth Strategies That Leave A Lasting Impact
                </h3>
                <p data-aos="fade-right" data-aos-delay="400">
                  With Years Of Experience, We Have Learnt That Every Business
                  Runs Differently, And That’s Precisely How We Strategize. From
                  Full-Stack Development To Custom Digital Marketing Solutions,
                  Our Branding And{" "}
                  <span className="redColor">
                    Website Development Company In Texas
                  </span>{" "}
                  Creates Solutions That Fit Your Goals, Your Market, And The
                  Way You Operate. Whatever Your Requirements, We Will Meet
                  Them. Whether You Need A Custom Site, A Smarter Sales Funnel,
                  Or IT Management That Just Works, We Bring Everything Together
                  To Help Businesses Grow With Clarity, Speed, And Confidence.
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
                  <h3
                    className="secTitle"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    Building Unique Brand Identities That Help Texas Businesses
                    Grow, Compete, And Lead Online.
                  </h3>
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
                <h3
                  className="secTitle"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Revamp Your Brand <br /> With Smart Digital Solutions
                </h3>
                <p data-aos="fade-right" data-aos-delay="400">
                  We Offer A Full Suite Of Digital Solutions, Tailored To Your
                  Business Needs. From Custom Web Development To Digital
                  Marketing In Texas, Our Services Are Built To Deliver Results,
                  Drive Growth, And Help You Stand Out Online.
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
                <h3
                  className="secTitle"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Why Texas Web Studios Is The Standard!
                </h3>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div
                className="beVisible-numberBox"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="beVisible-numberBoxBg">
                  <h3>10+</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="beVisibleCOntent">
                <h3
                  className="secSubTitle"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  Experience That Delivers Results.
                </h3>
                <p data-aos="fade-left" data-aos-delay="800">
                  Backed By Years Of Industry Experience, We’ve Earned The Trust
                  Of Large And Small Businesses Across Texas. We Create Simple
                  And Practical Online Marketing Solutions That Help Our Clients
                  Grow And Succeed Online.
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
                    <h4 className="beVisibleIconData-title">{item.title}</h4>
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
        description="Every Business Has Different Needs, So We Offer Custom Pricing
                    For Each Of Our Services. Our Packages Include Basic, Pro, And
                    Premium, Designed To Match Where You Are And Where You’re
                    Headed. Whether You Are Starting Fresh Or Looking To Scale,
                    You Will Get The Right Solution At The Right Price. So Find
                    The Package That Fits You Best, Or Consult Us For A Custom
                    Package!"
      />

      <TestimonialSec
        className="bgBlack"
        secTag="OUR TESTIMONIALS"
        secTitle="Hear From Our Happy Clients"
        testimonialData={[
          {
            id: 1,
            name: "Sarah Mitchell",
            designation: "Marketing Manager, Brightpath Solutions",
            descrition:
              "Texas Web Studio Built Us A Fast Website. We Are Now Able To Update Our Content Without The Need For Any Developer.",
          },
          {
            id: 2,
            name: "Jason Lee",
            designation: "Founder, Urbannest Interiors",
            descrition:
              "Their CMS Solution Helped Our Team Save Time And Stay In Control. Everything Works Smoothly Across Devices. Highly Recommend!",
          },
          {
            id: 3,
            name: "Jason Lee",
            designation: "Founder, Urbannest Interiors",
            descrition:
              "Their CMS Solution Helped Our Team Save Time And Stay In Control. Everything Works Smoothly Across Devices. Highly Recommend!",
          },
        ]}
      />

      <OurTeamSec />
      <FAQSec
        secTag="GET ANSWERS"
        secTitle="Frequently Asked Questions"
        testimonials={testimonialData}
        image={faqImg}
      />
      <BookCallSec
        title="Let’s Discuss Your Business Goals."
        btnText="Book A Call"
      />
      <ContactUsSec />

      <BlogSec />
    </DefaultLayout>
  );
};

export default Home;
