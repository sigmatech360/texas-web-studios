import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import TestimonialSec from "../../components/TestimonialSec";
import PackagesSec from "../../components/PackagesSec";
import BlogSec from "../../components/BlogSec";
import OurPortfolioSec from "../../components/OurPortfolioSec";
import WhyCooseUsSec from "../../components/WhyCooseUsSec";
import LatestTechSec from "../../components/LatestTechSec";
import ServiceAboutSec from "../../components/ServiceAboutSec";

import mobileAppDevBanner from "../../assets/images/mobileAppDevBanner.webp";
import mobileAppDevBannerImg from "../../assets/images/mobileAppDevBannerImg.webp";

import mobServiceAboutImg from "../../assets/images/mobServiceAboutImg.webp";

import portfolioImg1_1 from "../../assets/images/mobilePortfolio/mobilePortfolioImg1-1.webp";
import portfolioImg1_2 from "../../assets/images/mobilePortfolio/mobilePortfolioImg1-2.webp";
import portfolioImg1_3 from "../../assets/images/mobilePortfolio/mobilePortfolioImg1-3.webp";
import portfolioImg1_4 from "../../assets/images/mobilePortfolio/mobilePortfolioImg1-4.webp";
import portfolioImg1_5 from "../../assets/images/mobilePortfolio/mobilePortfolioImg1-5.webp";

import portfolioImg2_1 from "../../assets/images/mobilePortfolio/mobilePortfolioImg2-1.webp";
import portfolioImg2_2 from "../../assets/images/mobilePortfolio/mobilePortfolioImg2-2.webp";
import portfolioImg2_3 from "../../assets/images/mobilePortfolio/mobilePortfolioImg2-3.webp";
import portfolioImg2_4 from "../../assets/images/mobilePortfolio/mobilePortfolioImg2-4.webp";

import mobDevWhyChooseImage from "../../assets/images/mobDevWhyChooseImage.webp";
import mobDevWhyChooseIcon1 from "../../assets/images/mobDevWhyChooseIcon1.webp";
import mobDevWhyChooseIcon2 from "../../assets/images/mobDevWhyChooseIcon2.webp";
import mobDevWhyChooseIcon3 from "../../assets/images/mobDevWhyChooseIcon3.webp";
import mobDevWhyChooseIcon4 from "../../assets/images/mobDevWhyChooseIcon4.webp";
import ReactHelmet from "../../components/ReactHelmet";

const webUrl = import.meta.env.VITE_WEB_URL;

export const mobilePortfolio1 = [
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
export const mobilePortfolio2 = [
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

const MobileAppDev = () => {
  return (
    <>
      <ReactHelmet
        title="Mobile App Development in Texas - Apps That Drive Results"
        description="Make the most of our mobile app development services in Texas. Launch high-performing iOS and Android apps with Texas Web Studios to engage users, boost growth, and drive measurable business results."
        url={`${webUrl}/mobile-app-development`}
      />

      <DefaultLayout>
        <InnerBanner
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={mobileAppDevBanner}
          title="Mobile Applications that Boost Your Success"
          description="At Texas Web Studios, We Create Fast, User-Friendly Apps for You that Fit Your Goals, Platform, and Audience. Our Mobile App Development Services for Texas Are Designed for Real Results and Easy Use."
          pageName="Services"
          bannerImg={mobileAppDevBannerImg}
        />
        <LatestTechSec
          secTitle="Smart Mobile Solutions for Every Business"
          description="We Believe in Smart Work More Than Hard Work; Our Mobile App Developers Integrate High-Tech Development Tools, Ensure Functionality and Provide You a User-Friendly Design that Instantly Connects with Your Audience."
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
            { name: "Swift (For Native Apps)" },
            { name: "Kotlin" },
            { name: "React Native" },
            { name: "Flutter by Google" },
            { name: "Firebase" },
            { name: "App Store Optimization" },
            { name: "Cross-Platform Apps" },
          ]}
          btnText="See All Integrations"
          targetSecId="portfolioSecId"
          rightP="From Native to Cross-Platform Apps, We Use Trusted Tools and Strategies to Deliver Smooth Experiences. Whether You’re Launching a New Idea or Improving An Existing One, We’ve Got The Stack and The Skills to Get It Done."
        />
        <ServiceAboutSec
          className="bgPink"
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          secTagClass="blackColor"
          secTag="MOBILE APP DEVELOPMENT"
          secTitle={`<span class="redColor">Custom Mobile App Development in Texas</span> to Keep You Connected.`}
          description="Please change the content to ‘The only goal of our mobile app development service in Texas is to help you build a better connection with your audience. With improved functionalities, advanced features, and impressive UX, each app that we build is nothing less than perfect."
          image={mobServiceAboutImg}
        />
        <OurPortfolioSec
          className="bgBlack"
          secTag="PORTFOLIO"
          secTitle="A Look at Our Expertise"
          ourPortfolio1={mobilePortfolio1}
          ourPortfolio2={mobilePortfolio2}
          btnText="View All Projects"
        />

        <WhyCooseUsSec
          secTag={<h2 className="sec-tag">WHY CHOOSE US</h2>}
          secTitle={
            <h2 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              User-Friendly Mobile Apps, Made for All Platforms
            </h2>
          }
          secDescription="Our Mobile Applications Are Made to Work Smoothly Across Different Platforms; We Add Technologically Enhanced Features that Ensure Cybersecurity and Ensure Your App Works Seamlessly Everywhere."
          image={mobDevWhyChooseImage}
          // leftP=""
          // leftSubTitle={
          //   <h4
          //     className="whyChooseRightTitle"
          //     data-aos="fade-right"
          //     data-aos-delay="400"
          //   >
          //   </h4>
          // }
          // btnText=""
          list={[
            {
              image: mobDevWhyChooseIcon1,
              title: <h4 className="whyChooseListItemTitle">UI/UX Design</h4>,
              description:
                "Clean and user-friendly designs that are easy to navigate and bring a great experience.",
            },
            {
              image: mobDevWhyChooseIcon2,
              title: (
                <h4 className="whyChooseListItemTitle">App Store Deployment</h4>
              ),
              description:
                "We Handle The Publishing Process from Start to Finish.",
            },
            {
              image: mobDevWhyChooseIcon3,
              title: (
                <h4 className="whyChooseListItemTitle">
                  iOS & Android Development
                </h4>
              ),
              description:
                "We Build Apps that Run Seamlessly on Both Major Platforms.",
            },
            {
              image: mobDevWhyChooseIcon4,
              title: (
                <h4 className="whyChooseListItemTitle">API Integrations</h4>
              ),
              description:
                "Your App Can Connect with The Tools and Platforms You Already Use.",
            },
          ]}
        />

        {/* <PackagesSec
          className="bgPink"
          secTag="PRICING"
          title="Flexible Pricing Packages"
          description="Every Business Has Different Needs, so We Offer Custom Pricing for Each of Our Services. Our Packages Include Basic, Pro, and Premium, Designed to Match Where You Are and Where You’re Headed. Whether You Are Starting Fresh or Looking to Scale, You Will Get The Right Solution at The Right Price. So Find The Package that Fits You Best, or Consult Us for a Custom Package!"
        /> */}
        <TestimonialSec
          className="bgBlack"
          secTag="TESTIMONIALS"
          secTitle={
            <h3 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              Hear About Us from Our Happy Clients!
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
              name: "Jason Lee",
              designation: "Founder, Urbannest Interiors",
              descrition:
                "Their CMS Solution Helped Our Team Save Time and Stay in Control. Everything Works Smoothly Across Devices. Highly Recommend!",
            },
          ]}
        />
        <BlogSec />
      </DefaultLayout>
    </>
  );
};

export default MobileAppDev;
