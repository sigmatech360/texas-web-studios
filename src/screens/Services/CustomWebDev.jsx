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
import SinglePackageSec from "../../components/PackagesSec/SinglePackageSec";
import { customAppsPackagesData } from "../../data";

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
        title="Custom Web Development Services in Texas - Fast & Scalable"
        description="Texas Web Studios provides custom web development services tailored to your business needs: fast, responsive, scalable, and optimized for SEO."
        // keywords=""
        url={`${webUrl}/custom-web-development`}
        // url="https://texaswebstudios.com/custom-web-development"
      />
      <DefaultLayout>
        <InnerBanner
          leftCol="col-xl-8 col-lg-9"
          rightCol="col-xl-4"
          bgImage={customWebDevBanner}
          title="Custom Web Development with Detailed Processes"
          description="At Texas Web Studios, Our Team Works on Custom Web Development Services in Texas that Reflect Your Business Structure, Customer Journey, and Goals. We Combine Custom Design with Well-Researched and Planned Marketing Strategies to Ensure Your Site Works Exactly How You Need It to with a Consistent Flow of Traffic, Leads, and Conversions."
          pageName="Services"
        />

        <LatestTechSec
          // className="latestTechLogoSec"
          leftCol="col-xl-5 col-lg-4"
          centerCol="col-xl-3 col-lg-4"
          rightCol="col-xl-3 col-lg-4"
          secTitle="Websites Built to Match Every Purpose"
          description="Texas Web Studios Specializes in Custom Frontend and Backend Web Development, Where Your Business Has The Space to Be Fully Imaginative."
          categoryTitle={
            <p
              className="categoriesListTitle h3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              SOLUTIONS
            </p>
          }
          solutionList={[
            { name: "Business Websites" },
            { name: "Personal Websites" },
            { name: "E-Commerce Websites" },
            { name: "Portfolios" },
            { name: "Blogs Website" },
            { name: "Booking Websites" },
            { name: "Informational Websites" },
            { name: "Magazines or News Websites" },
          ]}
          btnText="See All Integrations"
          targetSecId="portfolioSecId"
          rightP="Different Websites Serve Different Goals, and We’ve Built Them All. From E-Commerce Stores to Booking Systems and Personal Portfolios, We Understand What Each Type of Site Needs to Succeed."
          rightP2="Our Experience with Both Custom Web Design and Development in Texas Means We Can Understand Each Type of Business and Needs; Our Websites Are Built to Fit Your Business Model, Audience, and Vision, Without Relying on Templates or Shortcuts."
        />

        <ServiceAboutSec
          className="bgPink"
          // rowClass="flex-row-reverse"
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          // secTagClass="blackColor"
          secTag="CUSTOM WEB DEVELOPMENT"
          secTitle={`Why We Call It </br> <span class="redColor">Custom Web Development</span>`}
          description="Because We Build Every Part of The Website from The Ground Up. No Pre-Made Templates or Shortcuts. We Design Each Website Around Your Goals, Your Business, and How Your Users Interact. Every Feature, Layout, and Function Is Created to Fit You, Not The Other Way Around."
          image={customServiceAboutImg}
        />

        <OurPortfolioSec
          className="bgBlack"
          secTag="PORTFOLIO"
          secTitle="A Look at Our Expertise"
          ourPortfolio1={customDevPortfolio1}
          ourPortfolio2={customDevPortfolio2}
          btnText="View All Projects"
        />

        <WhyCooseUsSec
          secTag={<h2 className="sec-tag">WHY CHOOSE US</h2>}
          secTitle={
            <h2 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              Web Perfection Is What We Crave.
            </h2>
          }
          secDescription="At Texas Web Studios, We Stay with You from Start to Finish, Providing Complete Web Design and Development in Texas from The Very First Plan to Post-Launch Support."
          image={customDevWhyChooseImage}
          // leftP=""
          leftSubTitle={
            <h4
              className="whyChooseRightTitle"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Launch The Website You’ve Been Dreaming of with Texas Web Studios.
            </h4>
          }
          btnText="Get a Quote"
          list={[
            {
              image: customDevWhyChooseIcon1,
              title: (
                <h3 className="whyChooseListItemTitle">Website Creation</h3>
              ),
              description:
                "We Build Websites from Scratch with a Focus on Your Brand, Goals, and User Experience. Every Project Starts with a Strategy and Ends with a Site that Works for Your Audience.",
            },
            {
              image: customDevWhyChooseIcon2,
              title: (
                <h3 className="whyChooseListItemTitle">Website Maintenance</h3>
              ),
              description:
                "Your Site Needs Regular Updates to Stay Secure and Current. We Handle Everything from Content Changes to Technical Updates, so Your Website Keeps Running Smoothly.",
            },
            {
              image: customDevWhyChooseIcon3,
              title: <h3 className="whyChooseListItemTitle">Website Revamp</h3>,
              description:
                "Have An Outdated Website? We Redesign and Rebuild Existing Sites to Make Them Faster, Cleaner, and More Aligned with Modern Standards and Customer Expectations.",
            },
            {
              image: customDevWhyChooseIcon4,
              title: (
                <h3 className="whyChooseListItemTitle">
                  Performance Optimization
                </h3>
              ),
              description:
                "We Optimize Your Website’s Speed, Structure, and Code to Ensure Faster Loading Times, Better User Experience, and Improved Search Engine Performance.",
            },
          ]}
        />

        {/* <PackagesSec
          className="bgPink"
          secTag="PRICING"
          title="Flexible Pricing Packages"
          description="Every Business Has Different Needs, so We Offer Custom Pricing for Each of Our Services. Our Packages Include Basic, Pro, and Premium, Designed to Match Where You Are and Where You’re Headed. Whether You Are Starting Fresh or Looking to Scale, You Will Get The Right Solution at The Right Price. So Find The Package that Fits You Best, or Consult Us for a Custom Package!"
        /> */}
        <SinglePackageSec
          className="bgPink"
          secTag="PRICING"
          title="Flexible Pricing Packages"
          description="Every Business Has Different Needs, so We Offer Custom Pricing for Each of Our Services. Our Packages Include Basic, Pro, and Premium, Designed to Match Where You Are and Where You’re Headed. Whether You Are Starting Fresh or Looking to Scale, You Will Get The Right Solution at The Right Price. So Find The Package that Fits You Best, or Consult Us for a Custom Package!"
          packagesName={customAppsPackagesData}
        />
        <TestimonialSec
          className="bgBlack"
          secTag="TESTIMONIALS"
          secTitle={
            <h3 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              Feedback from Our Satisfied Clients.
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

export default CustomWebDev;
