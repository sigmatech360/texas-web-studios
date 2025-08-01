import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import customWebDevBanner from "../../assets/images/customWebDevBanner.webp";
import BlogSec from "../../components/BlogSec";
import TestimonialSec from "../../components/TestimonialSec";
import PackagesSec from "../../components/PackagesSec";

import customDevWhyChooseImage from "../../assets/images/customDevWhyChooseImage.webp";
import customDevWhyChooseIcon1 from "../../assets/images/customDevWhyChooseIcon1.webp";
import customDevWhyChooseIcon2 from "../../assets/images/customDevWhyChooseIcon2.webp";
import customDevWhyChooseIcon3 from "../../assets/images/customDevWhyChooseIcon3.webp";
import customDevWhyChooseIcon4 from "../../assets/images/customDevWhyChooseIcon4.webp";
import WhyCooseUsSec from "../../components/WhyCooseUsSec";

import ServiceAboutSec from "../../components/ServiceAboutSec";
import customServiceAboutImg from "../../assets/images/customServiceAboutImg.webp";
import LatestTechSec from "../../components/LatestTechSec";

import OurPortfolioSec from "../../components/OurPortfolioSec";

import portfolioImg1_1 from "../../assets/images/customPortfolio/customPortfolioImg1-1.webp";
import portfolioImg1_2 from "../../assets/images/customPortfolio/customPortfolioImg1-2.webp";
import portfolioImg1_3 from "../../assets/images/customPortfolio/customPortfolioImg1-3.webp";
import portfolioImg1_4 from "../../assets/images/customPortfolio/customPortfolioImg1-4.webp";
import portfolioImg1_5 from "../../assets/images/customPortfolio/customPortfolioImg1-5.webp";

import portfolioImg2_1 from "../../assets/images/customPortfolio/customPortfolioImg2-1.webp";
import portfolioImg2_2 from "../../assets/images/customPortfolio/customPortfolioImg2-2.webp";
import portfolioImg2_3 from "../../assets/images/customPortfolio/customPortfolioImg2-3.webp";
import portfolioImg2_4 from "../../assets/images/customPortfolio/customPortfolioImg2-4.webp";
import ReactHelmet from "../../components/ReactHelmet";

const webUrl = import.meta.env.VITE_WEB_URL;

export const customDevPortfolio1 = [
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
export const customDevPortfolio2 = [
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

const CustomWebDev = () => {
  return (
    <>
      <ReactHelmet
        // title=""
        // description=""
        // keywords=""
        url={`${webUrl}/custom-web-development`}
        // url="https://texaswebstudios.com/custom-web-development"
      />
      <DefaultLayout>
        <InnerBanner
          leftCol="col-xl-8 col-lg-9"
          rightCol="col-xl-4"
          bgImage={customWebDevBanner}
          title="Custom Web Development With Detailed Processes"
          description="At Texas Web Studios, Our Team Works On Custom Web Development Services in Texas That Reflect Your Business Structure, Customer Journey, And Goals. We Combine Custom Design With Well-Researched And Planned Marketing Strategies To Ensure Your Site Works Exactly How You Need It To With A Consistent Flow Of Traffic, Leads, And Conversions."
          pageName="Services"
        />

        <LatestTechSec
          // className="latestTechLogoSec"
          leftCol="col-xl-5 col-lg-4"
          centerCol="col-xl-3 col-lg-4"
          rightCol="col-xl-3 col-lg-4"
          secTitle="Websites Built To Match Every Purpose"
          description="Texas Web Studios Specializes in Custom Frontend And Backend Web Development, Where Your Business Has The Space To Be Fully Imaginative."
          categoryTitle="SOLUTIONS"
          solutionList={[
            { name: "Business Websites" },
            { name: "Personal Websites" },
            { name: "E-Commerce Websites" },
            { name: "Portfolios" },
            { name: "Blogs Website" },
            { name: "Booking Websites" },
            { name: "Informational Websites" },
            { name: "Magazines Or News Websites" },
          ]}
          btnText="See All Integrations"
          targetSecId="portfolioSecId"
          rightP="Different Websites Serve Different Goals, And We’ve Built Them All. From E-Commerce Stores To Booking Systems And Personal Portfolios, We Understand What Each Type Of Site Needs To Succeed."
          rightP2="Our Experience With Both Custom Web Design And Development in Texas Means We Can Understand Each Type Of Business And Needs; Our Websites Are Built To Fit Your Business Model, Audience, And Vision, Without Relying On Templates Or Shortcuts."
        />

        <ServiceAboutSec
          className="bgPink"
          // rowClass="flex-row-reverse"
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          // secTagClass="blackColor"
          secTag="CUSTOM WEB DEVELOPMENT"
          secTitle={`Why We Call It </br> <span class="redColor">Custom Web Development</span>`}
          description="Because We Build Every Part Of The Website From The Ground Up. No Pre-Made Templates Or Shortcuts. We Design Each Website Around Your Goals, Your Business, And How Your Users Interact. Every Feature, Layout, And Function Is Created To Fit You, Not The Other Way Around."
          image={customServiceAboutImg}
        />

        <OurPortfolioSec
          className="bgBlack"
          secTag="PORTFOLIO"
          secTitle="A Look At Our Expertise"
          ourPortfolio1={customDevPortfolio1}
          ourPortfolio2={customDevPortfolio2}
          btnText="View All Projects"
        />

        <WhyCooseUsSec
          secTag="WHY CHOOSE US"
          secTitle="Web Perfection Is What We Crave."
          secDescription="At Texas Web Studios, We Stay With You From Start To Finish, Providing Complete Web Design And Development in Texas From The Very First Plan To Post-Launch Support."
          image={customDevWhyChooseImage}
          // leftP=""
          leftSubTitle="Launch The Website You’ve Been Dreaming Of With Texas Web Studios."
          btnText="Get A Quote"
          list={[
            {
              image: customDevWhyChooseIcon1,
              title: "Website Creation",
              description:
                "We Build Websites From Scratch With A Focus On Your Brand, Goals, And User Experience. Every Project Starts With A Strategy And Ends With A Site That Works For Your Audience.",
            },
            {
              image: customDevWhyChooseIcon2,
              title: "Website Maintenance",
              description:
                "Your Site Needs Regular Updates To Stay Secure And Current. We Handle Everything From Content Changes To Technical Updates, So Your Website Keeps Running Smoothly.",
            },
            {
              image: customDevWhyChooseIcon3,
              title: "Website Revamp",
              description:
                "Have An Outdated Website? We Redesign And Rebuild Existing Sites To Make Them Faster, Cleaner, And More Aligned With Modern Standards And Customer Expectations.",
            },
            {
              image: customDevWhyChooseIcon4,
              title: "Performance Optimization",
              description:
                "We Optimize Your Website’s Speed, Structure, And Code To Ensure Faster Loading Times, Better User Experience, And Improved Search Engine Performance.",
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
          secTitle="Feedback From Our Satisfied Clients."
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
                "Their CMS Solution Helped Our Team Save Time And Stay in Control. Everything Works Smoothly Across Devices. Highly Recommend!",
            },
            {
              id: 3,
              name: "Jason Lee",
              designation: "Founder, Urbannest Interiors",
              descrition:
                "Their CMS Solution Helped Our Team Save Time And Stay in Control. Everything Works Smoothly Across Devices. Highly Recommend!",
            },
          ]}
        />
        <BlogSec />
      </DefaultLayout>
    </>
  );
};

export default CustomWebDev;
