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
    <DefaultLayout>
      <InnerBanner
        leftCol="col-lg-7 order-lg-1 order-2"
        rightCol="col-lg-5 order-lg-2 order-1"
        bgImage={mobileAppDevBanner}
        title="Mobile Applications That Boost Your Success"
        description="At Texas Web Studios, We Create Fast, User-Friendly Apps For You That Fit Your Goals, Platform, And Audience. Our Mobile App Development Services For Texas Are Designed For Real Results And Easy Use."
        pageName="Services"
        bannerImg={mobileAppDevBannerImg}
      />
      <LatestTechSec
        secTitle="Smart Mobile Solutions For Every Business"
        description="We Believe In Smart Work More Than Hard Work; Our Mobile App Developers Integrate High-Tech Development Tools, Ensure Functionality And Provide You A User-Friendly Design That Instantly Connects With Your Audience."
        solutionList={[
          { name: "Swift (For Native Apps)" },
          { name: "Kotlin" },
          { name: "React Native" },
          { name: "Flutter By Google" },
          { name: "Firebase" },
          { name: "App Store Optimization" },
          { name: "Cross-Platform Apps" },
        ]}
        btnText="See All Integrations"
        targetSecId="portfolioSecId"
        rightP="From Native To Cross-Platform Apps, We Use Trusted Tools And Strategies To Deliver Smooth Experiences. Whether You’re Launching A New Idea Or Improving An Existing One, We’ve Got The Stack And The Skills To Get It Done."
      />
      <ServiceAboutSec
        className="bgPink"
        leftCol="col-lg-7 order-lg-1 order-2"
        rightCol="col-lg-5 order-lg-2 order-1"
        secTagClass="blackColor"
        secTag="MOBILE APP DEVELOPMENT"
        secTitle={`<span class="redColor">Custom Mobile App Development In Texas</span> To Keep You Connected.`}
        description="Our Mobile App Development Services In Texas Begin With One Goal. A Better Connection With Your Audience. With Offline Functionalities, Enhanced UX, And Advanced Features, Each Of Our Apps Is Built For Perfection."
        image={mobServiceAboutImg}
      />
      <OurPortfolioSec
        className="bgBlack"
        secTag="PORTFOLIO"
        secTitle="A Look At Our Expertise"
        ourPortfolio1={mobilePortfolio1}
        ourPortfolio2={mobilePortfolio2}
        btnText="View All Projects"
      />

      <WhyCooseUsSec
        secTag="WHY CHOOSE US"
        secTitle="User-Friendly Mobile Apps, Made For All Platforms"
        secDescription="Our Mobile Applications Are Made To Work Smoothly Across Different Platforms; We Add Technologically Enhanced Features That Ensure Cybersecurity And Ensure Your App Works Seamlessly Everywhere."
        image={mobDevWhyChooseImage}
        // leftP=""
        // leftSubTitle=""
        // btnText=""
        list={[
          {
            image: mobDevWhyChooseIcon1,
            title: "UI/UX Design",
            description:
              "Clean, User-Friendly Designs That Feel Natural To Navigate.",
          },
          {
            image: mobDevWhyChooseIcon2,
            title: "App Store Deployment",
            description:
              "We Handle The Publishing Process From Start To Finish.",
          },
          {
            image: mobDevWhyChooseIcon3,
            title: "iOS & Android Development",
            description:
              "We Build Apps That Run Seamlessly On Both Major Platforms.",
          },
          {
            image: mobDevWhyChooseIcon4,
            title: "API Integrations",
            description:
              "Your App Can Connect With The Tools And Platforms You Already Use.",
          },
        ]}
      />

      <PackagesSec
        className="bgPink"
        secTag="PRICING"
        title="Flexible Pricing Packages"
        description="Every Business Has Different Needs, So We Offer Custom Pricing For Each Of Our Services. Our Packages Include Basic, Pro, And Premium, Designed To Match Where You Are And Where You’re Headed. Whether You Are Starting Fresh Or Looking To Scale, You Will Get The Right Solution At The Right Price. So Find The Package That Fits You Best, Or Consult Us For A Custom Package!"
      />
      <TestimonialSec
        className="bgBlack"
        secTag="TESTIMONIALS"
        secTitle="Hear About Us From Our Happy Clients!"
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
      <BlogSec />
    </DefaultLayout>
  );
};

export default MobileAppDev;
