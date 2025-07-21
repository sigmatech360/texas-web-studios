import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import cmsDevBanner from "../../assets/images/cmsDevBanner.webp";
import LatestTechSec from "../../components/LatestTechSec";

import ServiceAboutSec from "../../components/ServiceAboutSec";
import cmsDevServiceAboutImg from "../../assets/images/cmsDevServiceAboutImg.webp";
import PackagesSec from "../../components/PackagesSec";
import TestimonialSec from "../../components/TestimonialSec";
import BlogSec from "../../components/BlogSec";

import cmsDevWhyChooseImage from "../../assets/images/cmsDevWhyChooseImage.webp";
import cmsDevWhyChooseIcon1 from "../../assets/images/cmsDevWhyChooseIcon1.webp";
import cmsDevWhyChooseIcon2 from "../../assets/images/cmsDevWhyChooseIcon2.webp";
import cmsDevWhyChooseIcon3 from "../../assets/images/cmsDevWhyChooseIcon3.webp";
// import cmsDevWhyChooseIcon4 from "../../assets/images/cmsDevWhyChooseIcon4.webp";
import WhyCooseUsSec from "../../components/WhyCooseUsSec";
import OurPortfolioSec from "../../components/OurPortfolioSec";

import portfolioImg1_1 from "../../assets/images/cmsPortfolio/cmsPortfolioImg1-1.webp";
import portfolioImg1_2 from "../../assets/images/cmsPortfolio/cmsPortfolioImg1-2.webp";
import portfolioImg1_3 from "../../assets/images/cmsPortfolio/cmsPortfolioImg1-3.webp";
import portfolioImg1_4 from "../../assets/images/cmsPortfolio/cmsPortfolioImg1-4.webp";
import portfolioImg1_5 from "../../assets/images/cmsPortfolio/cmsPortfolioImg1-5.webp";

import portfolioImg2_1 from "../../assets/images/cmsPortfolio/cmsPortfolioImg2-1.webp";
import portfolioImg2_2 from "../../assets/images/cmsPortfolio/cmsPortfolioImg2-2.webp";
import portfolioImg2_3 from "../../assets/images/cmsPortfolio/cmsPortfolioImg2-3.webp";
import portfolioImg2_4 from "../../assets/images/cmsPortfolio/cmsPortfolioImg2-4.webp";

export const cmsDevPortfolio1 = [
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
export const cmsDevPortfolio2 = [
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

const CMSDevelopment = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={cmsDevBanner}
        title="CMS Development"
        description="Powerful And Intuitive CMS Website Development For Businesses That Demand Growth, Performance, And Complete Control."
        pageName="Services"
      />
      <LatestTechSec
        // className="latestTechLogoSec"
        leftCol="col-lg-5"
        centerCol="col-lg-4"
        rightCol="col-lg-3"
        secTitle="Expert Services For CMS-Based Development"
        description="Managing Your Website Shouldn’t Be Complicated; That’s Why We Build CMS Powered, Custom Web Development Services In Texas That Are Fast, Responsive, And Optimized For Higher Ranking And Conversions."
        leftBtnText="Book A Call"
        categoryTitle="SOLUTIONS"
        solutionList={[
          { name: "Wordpress Development" },
          { name: "Wix Development" },
          { name: "WooCommerce" },
          { name: "BigCommerce" },
          { name: "Shopify Development" },
          { name: "Magento Development" },
          { name: "Weebly Development" },
          { name: "Webflow Development" },
        ]}
        btnText="See All Integrations"
        rightP="We Offer No-Code CMS Website Development Services In Texas That Are Easy To Manage And Built For Performance. With Expertise Across Multiple Platforms, We Deliver Fast, Responsive Websites Using Pre-Built Templates Optimized For All Screen Sizes. Our Solutions Come Equipped With Built-In SEO Tools For Better Rankings And Access To Thousands Of Plugins For Smooth Integrations, Giving You Complete Control Without The Technical Hassle."
        // rightP2=""
      />

      <ServiceAboutSec
        className="bgPink"
        rowClass="flex-row-reverse"
        leftCol="col-lg-7"
        rightCol="col-lg-5"
        // secTagClass="blackColor"
        secTag="CMS DEVELOPMENT AGENCY"
        secTitle={`CMS-Powered Solutions That Are Fast, Dependable, And Scalable.`}
        description="Our CMS Website Development Services In Texas Empower Businesses To Easily Manage, Scale, And Optimize Their Websites. From No-Code Custom CMS Development And Responsive Design To Seamless Plugin Integration And Built-In SEO Tools, Our Solutions Offer The Flexibility And Control Modern Brands Need To Grow. Designed For Speed And Simplicity, We Offer Instant Upgrades With:"
        description2="Our CMS Solutions Simplify Website Management, Save Time, Boost Performance, And Drive Growth Without The Need For Constant Technical Support. It's The Smart, Scalable Choice For Digital Success."
        listClass="grid mt-3"
        list={[
          "Built-In Templates",
          "Mobile-Optimized Themes",
          "Easy Plugin Integration",
          "Built-In SEO Tools",
          "No-Code Or Low-Code Development",
        ]}
        image={cmsDevServiceAboutImg}
      />


      <OurPortfolioSec
        className="bgBlack"
        secTag="PORTFOLIO"
        secTitle="See Our Projects"
        ourPortfolio1={cmsDevPortfolio1}
        ourPortfolio2={cmsDevPortfolio2}
        btnText="View All Projects"
      />

      <WhyCooseUsSec
        secTag="WHY CHOOSE US"
        secTitle="How CMS Web Development Can Help You"
        secDescription="We Deliver End-To-End Custom CMS Development Services Catering To Your Business Needs. At Texas Web Studio, Experience Top-Tier Custom Ecommerce Website Development Services Where Innovation Meets Simplicity For Powerful Results. Our Team Brings Proven Expertise To Deliver Secure, High-Performance, And Cost-Effective Web Solutions, Built For Startups, Growing Brands, And Enterprise Businesses Alike."
        image={cmsDevWhyChooseImage}
        // leftP=""
        leftSubTitle="Dynamic CMS Solutions Built For Flexibility, Speed, And Control"
        btnText="Get A Free CMS Strategy Call"
        list={[
          {
            image: cmsDevWhyChooseIcon1,
            title: "No-Code & Low-Code Solutions",
            description:
              "Easily Manage And Update Your Website Without Touching Code.",
          },
          {
            image: cmsDevWhyChooseIcon2,
            title: "Scalable Architecture",
            description:
              "Built To Grow With Your Business, From Single Sites To Complex Multisite Setups.",
          },
          {
            image: cmsDevWhyChooseIcon3,
            title: "SEO & Performance Optimized",
            description:
              "Designed For Speed, Visibility, And High Search Rankings From Day One With Built-In SEO.",
          },
          // {
          //   image: cmsDevWhyChooseIcon4,
          //   title: "Performance Optimization",
          //   description:
          //     "We Optimize Your Website’s Speed, Structure, And Code To Ensure Faster Loading Times, Better User Experience, And Improved Search Engine Performance.",
          // },
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
        secTitle="What Our Client Says, Says It All"
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

export default CMSDevelopment;
